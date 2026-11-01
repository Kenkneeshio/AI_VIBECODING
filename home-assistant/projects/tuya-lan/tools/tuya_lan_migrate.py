#!/usr/bin/env python3
"""Move an already paired Xtend Tuya device to Home Assistant's Tuya Local.

The default command is an inventory. Keys are read from Xtend diagnostics into
memory only. This tool never writes a key, token, or diagnostics response to the
workstation disk. HA stores imported keys in private config entries.
Run ``python tuya_lan_migrate.py --help`` for commands and required options.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
import hashlib
import ipaddress
import json
import os
from pathlib import Path
import re
import sys
import time
from typing import Any
from urllib import error, parse, request


class MigrationError(Exception):
    """An intentionally sanitized, user-facing failure."""


def safe_label(value: Any) -> str:
    """Keep diagnostic names to a single terminal line."""
    return re.sub(r"[\x00-\x1f\x7f]+", " ", str(value or "")).strip()


@dataclass(frozen=True)
class Device:
    device_id: str
    name: str
    category: str
    local_key: str
    support_local: bool
    subdevice: bool
    diagnostic_ip: str | None
    diagnostic_version: str | None

    @property
    def fingerprint(self) -> str:
        return hashlib.sha256(self.device_id.encode("utf-8")).hexdigest()[:10]


def parse_diagnostics(payload: dict[str, Any]) -> list[Device]:
    data = payload.get("data")
    records = data.get("devices", []) if isinstance(data, dict) else []
    if not isinstance(records, list):
        raise MigrationError("Xtend diagnostics did not contain a device list.")
    devices = []
    for item in records:
        if not isinstance(item, dict) or not item.get("id"):
            continue
        version = item.get("version") or item.get("protocol_version")
        devices.append(
            Device(
                device_id=str(item["id"]),
                name=safe_label(item.get("name") or "Unnamed device"),
                category=safe_label(item.get("category") or "unknown"),
                local_key=str(item.get("local_key") or ""),
                support_local=item.get("support_local") is True,
                subdevice=bool(item.get("sub")),
                diagnostic_ip=valid_ip(item.get("ip")),
                diagnostic_version=str(version) if version else None,
            )
        )
    return devices


def valid_ip(value: Any) -> str | None:
    try:
        return str(ipaddress.ip_address(str(value)))
    except ValueError:
        return None


def select_device(devices: list[Device], selector: str) -> Device:
    matches = [
        device
        for device in devices
        if selector.casefold() == device.name.casefold()
        or selector.casefold() == device.fingerprint.casefold()
    ]
    if len(matches) != 1:
        raise MigrationError(
            "Selection matched no device or multiple devices. Use the unique fingerprint from audit."
        )
    return matches[0]


class HomeAssistant:
    def __init__(self, base_url: str, token: str, timeout: int = 20):
        self.base_url = base_url.rstrip("/")
        self.token = token
        self.timeout = timeout
        url = parse.urlparse(self.base_url)
        if url.scheme not in ("http", "https") or not url.netloc or url.path not in ("", "/"):
            raise MigrationError("--ha-url must be the Home Assistant origin, without a dashboard path.")

    def api(self, method: str, path: str, data: dict[str, Any] | None = None) -> dict[str, Any]:
        body = json.dumps(data).encode("utf-8") if data is not None else None
        headers = {"Authorization": f"Bearer {self.token}", "Accept": "application/json"}
        if body is not None:
            headers["Content-Type"] = "application/json"
        req = request.Request(self.base_url + "/api/" + path.lstrip("/"), data=body,
                              headers=headers, method=method)
        try:
            with request.urlopen(req, timeout=self.timeout) as response:
                raw = response.read()
        except error.HTTPError as exc:
            # HA may echo submitted form values in error bodies. Never print them.
            raise MigrationError(f"Home Assistant returned HTTP {exc.code} for {method} {path}.") from None
        except (error.URLError, TimeoutError, OSError):
            raise MigrationError(f"Could not reach Home Assistant for {method} {path}.") from None
        try:
            result = json.loads(raw)
        except (ValueError, UnicodeDecodeError):
            raise MigrationError(f"Home Assistant returned non-JSON data for {method} {path}.") from None
        if not isinstance(result, dict):
            raise MigrationError(f"Home Assistant returned unexpected data for {method} {path}.")
        return result

    def xtend_entry_id(self, override: str | None) -> str:
        if override:
            return override
        try:
            import websocket  # type: ignore[import-not-found]
        except ImportError:
            raise MigrationError(
                "Install websocket-client or provide --xtend-entry-id from HA config entries."
            ) from None
        ws_url = self.base_url.replace("https://", "wss://", 1).replace("http://", "ws://", 1)
        ws_url += "/api/websocket"
        try:
            socket = websocket.create_connection(ws_url, timeout=self.timeout)
            try:
                hello = json.loads(socket.recv())
                if hello.get("type") != "auth_required":
                    raise MigrationError("Home Assistant WebSocket authentication did not start.")
                socket.send(json.dumps({"type": "auth", "access_token": self.token}))
                auth = json.loads(socket.recv())
                if auth.get("type") != "auth_ok":
                    raise MigrationError("Home Assistant WebSocket rejected the token.")
                socket.send(json.dumps({"id": 1, "type": "config_entries/get", "domain": "xtend_tuya"}))
                answer = json.loads(socket.recv())
            finally:
                socket.close()
        except MigrationError:
            raise
        except Exception:
            raise MigrationError("Could not query Xtend config entries over Home Assistant WebSocket.") from None
        entries = answer.get("result") if answer.get("success") else None
        if not isinstance(entries, list):
            raise MigrationError("Home Assistant did not return Xtend config entries.")
        ids = [item["entry_id"] for item in entries
               if isinstance(item, dict) and item.get("domain") == "xtend_tuya" and item.get("entry_id")]
        if len(ids) != 1:
            raise MigrationError("Expected exactly one Xtend Tuya entry; provide --xtend-entry-id.")
        return ids[0]

    def diagnostics(self, entry_id: str) -> list[Device]:
        path = "diagnostics/config_entry/" + parse.quote(entry_id, safe="")
        return parse_diagnostics(self.api("GET", path))


def scan_lan() -> dict[str, dict[str, Any]]:
    try:
        import tinytuya  # type: ignore[import-not-found]
    except ImportError:
        raise MigrationError("LAN discovery needs tinytuya: python -m pip install tinytuya==1.20.0") from None
    try:
        raw = tinytuya.deviceScan(verbose=False, maxretry=3, color=False, poll=False)
    except Exception:
        raise MigrationError("TinyTuya LAN discovery failed; check subnet and UDP access.") from None
    if not isinstance(raw, dict):
        raise MigrationError("TinyTuya LAN discovery returned unexpected data.")
    result: dict[str, dict[str, Any]] = {}
    for address, info in raw.items():
        if not isinstance(info, dict):
            continue
        device_id = info.get("gwId") or info.get("id")
        ip = valid_ip(address) or valid_ip(info.get("ip"))
        if device_id and ip:
            result[str(device_id)] = {"ip": ip, "version": str(info.get("version") or "")}
    return result


def endpoint_for(device: Device, discovered: dict[str, dict[str, Any]],
                 override_host: str | None = None) -> tuple[str, str]:
    if override_host:
        host = valid_ip(override_host)
        if host is None:
            raise MigrationError("--host must be an IP address.")
    else:
        host = discovered.get(device.device_id, {}).get("ip") or device.diagnostic_ip
    if not host:
        raise MigrationError("No LAN IP for this device. Discover it first or provide --host.")
    version = discovered.get(device.device_id, {}).get("version") or device.diagnostic_version or "auto"
    if version not in {"3.1", "3.2", "3.3", "3.4", "3.5"}:
        version = "auto"
    return host, version


def audit(devices: list[Device], discovered: dict[str, dict[str, Any]] | None) -> None:
    scan_summary = str(len(discovered)) if discovered is not None else "not scanned"
    print(f"Xtend devices: {len(devices)}; LAN advertisements: {scan_summary}")
    print("Fingerprint   Local   LAN   Sub   Category   Name")
    for device in sorted(devices, key=lambda d: (d.name.casefold(), d.fingerprint)):
        lan = "n/a" if discovered is None else ("yes" if device.device_id in discovered else "no")
        print(f"{device.fingerprint:<13} {'yes' if device.support_local else 'no':<7} "
              f"{lan:<5} "
              f"{'yes' if device.subdevice else 'no':<5} {device.category:<10} {device.name}")


def probe(device: Device, host: str, version: str) -> tuple[bool, float]:
    if not device.local_key:
        raise MigrationError("This device has no cached local key.")
    try:
        import tinytuya  # type: ignore[import-not-found]
    except ImportError:
        raise MigrationError("Status probe needs tinytuya: python -m pip install tinytuya==1.20.0") from None
    client = None
    try:
        client = tinytuya.Device(device.device_id, host, device.local_key)
        if version != "auto":
            client.set_version(float(version))
        start = time.perf_counter()
        response = client.status()
        elapsed = time.perf_counter() - start
    except Exception:
        raise MigrationError("Local status probe failed. Check the IP, key and protocol version.") from None
    finally:
        if client is not None:
            try:
                client.close()
            except Exception:
                # A failed close must not expose TinyTuya internals or hide
                # the status result/error from the operator.
                pass
    return isinstance(response, dict) and isinstance(response.get("dps"), dict), elapsed


def flow_error(result: dict[str, Any], expected_step: str) -> None:
    if result.get("type") == "abort":
        reason = safe_label(result.get("reason") or "unknown")
        raise MigrationError(f"Tuya Local stopped the setup flow ({reason}).")
    if result.get("errors"):
        names = ", ".join(safe_label(k) for k in result["errors"].keys())
        raise MigrationError(f"Tuya Local rejected the {expected_step} step ({names}).")
    if result.get("type") != "form" or result.get("step_id") != expected_step:
        raise MigrationError(f"Unexpected Tuya Local setup step; expected {expected_step}.")


def type_options(form: dict[str, Any]) -> list[tuple[str, str]]:
    """Extract select values from HA's serialized schema without trusting labels."""
    schema = form.get("data_schema")
    if not isinstance(schema, list):
        return []
    field = next((item for item in schema if isinstance(item, dict) and item.get("name") == "type"), None)
    if field is None:
        return []
    options = field.get("options")
    if options is None:
        options = field.get("selector", {}).get("select", {}).get("options", [])
    found: list[tuple[str, str]] = []
    if isinstance(options, list):
        for item in options:
            if isinstance(item, dict) and isinstance(item.get("value"), str):
                found.append((item["value"], safe_label(item.get("label") or item["value"])))
            elif isinstance(item, str):
                found.append((item, item))
    return found


def choose_type(form: dict[str, Any], explicit: str | None, interactive: bool) -> str:
    options = type_options(form)
    if explicit:
        if options and explicit not in {value for value, _ in options}:
            raise MigrationError("--type-key was not one of Tuya Local's choices.")
        return explicit
    if not options:
        raise MigrationError("Could not read the device-type choices. Finish setup in Home Assistant UI.")
    if not interactive:
        print("Available Tuya Local mappings (rerun with --type-key):")
        for value, label in options:
            print(f"  {value}: {label}")
        raise MigrationError("Supply --type-key for a noninteractive import.")
    print("Select the matching Tuya Local device mapping:")
    for number, (_, label) in enumerate(options, 1):
        print(f"  {number}. {label}")
    try:
        number = int(input("Mapping number: ").strip())
    except (ValueError, EOFError, KeyboardInterrupt):
        raise MigrationError("No device mapping selected.") from None
    if number < 1 or number > len(options):
        raise MigrationError("Mapping number was out of range.")
    return options[number - 1][0]


def import_device(ha: HomeAssistant, device: Device, host: str, version: str,
                  explicit_type: str | None, display_name: str | None,
                  poll_only: bool, interactive: bool) -> str:
    """Use the public config-flow API; leave existing Tuya entries untouched."""
    if not device.local_key:
        raise MigrationError("This device has no cached local key.")
    if device.subdevice:
        raise MigrationError("Subdevices need a separately verified gateway flow; skipped.")
    if not device.support_local:
        raise MigrationError("Xtend does not mark this device local-capable; skipped.")
    path = "config/config_entries/flow"
    flow_id = None
    created = False
    try:
        result = ha.api("POST", path, {"handler": "tuya_local"})
        flow_error(result, "user")
        flow_id = result.get("flow_id")
        if not isinstance(flow_id, str):
            raise MigrationError("Tuya Local did not return a setup flow ID.")
        flow_path = path + "/" + parse.quote(flow_id, safe="")
        result = ha.api("POST", flow_path, {"setup_mode": "manual"})
        flow_error(result, "local")
        result = ha.api("POST", flow_path, {
            "device_id": device.device_id,
            "host": host,
            "local_key": device.local_key,
            "protocol_version": version,
            "poll_only": poll_only,
        })
        if result.get("step_id") == "local":
            flow_error(result, "local")
        if result.get("type") != "form" or result.get("step_id") not in (
            "select_type", "select_type_auto_detected"
        ):
            flow_error(result, "select_type")
        if result.get("errors"):
            raise MigrationError("Tuya Local could not connect to the device with the cached key.")
        chosen = choose_type(result, explicit_type, interactive)
        result = ha.api("POST", flow_path, {"type": chosen})
        flow_error(result, "choose_entities")
        result = ha.api("POST", flow_path, {"name": display_name or device.name})
        if result.get("type") != "create_entry":
            raise MigrationError("Tuya Local did not create a config entry.")
        created = True
        return safe_label(result.get("title") or display_name or device.name)
    finally:
        if flow_id and not created:
            try:
                ha.api("DELETE", path + "/" + parse.quote(flow_id, safe=""))
            except MigrationError:
                pass


def token_from_args(args: argparse.Namespace) -> str:
    if args.token_file:
        try:
            token = Path(args.token_file).read_text(encoding="utf-8").strip()
        except OSError:
            raise MigrationError("Could not read --token-file.") from None
    else:
        token = os.environ.get(args.token_env, "").strip()
    if not token:
        raise MigrationError(f"Set {args.token_env} or supply --token-file.")
    return token


def parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--ha-url", required=True, help="HA origin, for example http://192.0.2.10:8123")
    p.add_argument("--token-env", default="HA_TOKEN", help="Environment variable holding an HA admin token")
    p.add_argument("--token-file", help="Private file containing an HA admin token; never a repo file")
    p.add_argument("--timeout", type=int, default=90,
                   help="HA API request timeout in seconds (default: 90)")
    p.add_argument("--xtend-entry-id", help="Override automatic Xtend entry discovery")
    p.add_argument("--no-scan", action="store_true", help="Skip optional LAN advertisement scan")
    sub = p.add_subparsers(dest="command")
    sub.add_parser("audit", help="Read-only inventory (default)")
    probe_p = sub.add_parser("probe", help="Read-only local status request")
    probe_p.add_argument("--device", required=True, help="Exact name or fingerprint from audit")
    probe_p.add_argument("--host", help="Device LAN IP if discovery missed it")
    import_p = sub.add_parser("import", help="Add one device through Tuya Local's config flow")
    import_p.add_argument("--device", required=True, help="Exact name or fingerprint from audit")
    import_p.add_argument("--host", help="Device LAN IP if discovery missed it")
    import_p.add_argument("--type-key", help="Exact Tuya Local mapping key; otherwise prompt")
    import_p.add_argument("--name", help="HA display name; defaults to existing name")
    import_p.add_argument("--poll-only", action="store_true", help="Use polling instead of push")
    return p


def main(argv: list[str] | None = None) -> int:
    args = parser().parse_args(argv)
    try:
        if args.timeout < 1:
            raise MigrationError("--timeout must be a positive number of seconds.")
        ha = HomeAssistant(args.ha_url, token_from_args(args), timeout=args.timeout)
        devices = ha.diagnostics(ha.xtend_entry_id(args.xtend_entry_id))
        discovered = None
        if not args.no_scan:
            try:
                discovered = scan_lan()
            except MigrationError as exc:
                # Discovery is only an aid: --host may still be enough.
                # A probe itself still requires TinyTuya.
                print(f"LAN scan unavailable: {exc}", file=sys.stderr)
        if args.command in (None, "audit"):
            audit(devices, discovered)
        else:
            device = select_device(devices, args.device)
            host, version = endpoint_for(device, discovered or {}, args.host)
            if args.command == "probe":
                healthy, seconds = probe(device, host, version)
                print(f"{device.name}: {'reachable' if healthy else 'no valid DPS'} "
                      f"({seconds:.3f} s local status request)")
                return 0 if healthy else 2
            title = import_device(ha, device, host, version, args.type_key,
                                  args.name, args.poll_only, sys.stdin.isatty())
            print(f"Added Tuya Local device: {title}. Verify HA entities before changing dashboards.")
    except MigrationError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
