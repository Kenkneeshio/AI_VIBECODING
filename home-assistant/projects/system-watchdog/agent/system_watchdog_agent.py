"""Windows-side health probe. Uses the private HA adapter; contains no credentials."""

from __future__ import annotations

import argparse
import csv
import importlib.util
import io
from ipaddress import IPv4Address
import json
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

AGENT_VERSION = "0.2.1"
ADB = "HOME=/data/adb-home adb"
COMPANION = "io.homeassistant.companion.android"
REQUIRED_APPS = {
    "Home Assistant": COMPANION,
    "ADB Keeper": "io.roomcraft.tabletadbkeeper",
    "Tuya Smart": "com.tuya.smart",
    "Eufy Security": "com.oceanwing.battery.cam",
    "Google Home": "com.google.android.apps.chromecast.app",
    "Emporia Energy": "com.emporiaenergy.emporos.v2",
    "SmartThings": "com.samsung.android.oneconnect",
    "Bambu Handy": "bbl.intl.bambulab.com",
    "O-KAM Pro": "com.okampro.oksmart",
    "TTLock": "com.tongtongsuo.app",
    "Total Connect Comfort": "com.honeywell.mobile.android.totalComfort",
}


def run(command: list[str], timeout: int = 45) -> subprocess.CompletedProcess[str]:
    return subprocess.run(command, capture_output=True, text=True, timeout=timeout, check=False,
                          creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))


def load_management_adapter(root: Path):
    spec = importlib.util.spec_from_file_location("private_ha_manage", root / "ha_manage.py")
    if spec is None or spec.loader is None:
        raise RuntimeError("Home Assistant management adapter not found")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def ssh(adapter: Path, command: str) -> subprocess.CompletedProcess[str]:
    return run([sys.executable, str(adapter), "ssh", command])


def process_names() -> set[str]:
    result = run(["tasklist", "/fo", "csv", "/nh"])
    if result.returncode != 0:
        return set()
    return {row[0].lower() for row in csv.reader(io.StringIO(result.stdout)) if row}


def tablet_endpoint(output: str, host: str | None) -> str | None:
    candidates = set()
    for line in output.splitlines():
        fields = line.split()
        if len(fields) < 2 or fields[1] != "device" or not re.fullmatch(r"[A-Za-z0-9_.:-]+", fields[0]):
            continue
        endpoint = fields[0]
        if (host and endpoint.rpartition(":")[0] == host) or (not host and "model:Apolosign_Calendar" in fields):
            candidates.add(endpoint)
    return next(iter(candidates)) if len(candidates) == 1 else None


def package_names(output: str) -> set[str]:
    return {line.removeprefix("package:").strip() for line in output.splitlines() if line.startswith("package:")}


def tablet_checks(adapter: Path, host: str | None = None) -> tuple[dict, dict]:
    devices = ssh(adapter, f"{ADB} devices -l")
    endpoint = tablet_endpoint(devices.stdout, host) if devices.returncode == 0 else None
    if not endpoint:
        issue = "A single authorized wall tablet was not found"
        return ({"healthy": False, "message": issue, "issues": [issue]},
                {"healthy": False, "message": "Tablet apps could not be inspected", "issues": [issue]})

    foreground = ssh(adapter, f"{ADB} -s {endpoint} shell dumpsys activity activities")
    packages = ssh(adapter, f"{ADB} -s {endpoint} shell pm list packages")
    disabled = ssh(adapter, f"{ADB} -s {endpoint} shell pm list packages -d")
    top = [line for line in foreground.stdout.splitlines() if "topResumedActivity" in line]
    if foreground.returncode or not top:
        tablet_issues = ["Tablet foreground activity could not be inspected"]
    else:
        tablet_issues = [] if any(f" {COMPANION}/" in line for line in top) else [
            "Home Assistant is not the foreground app"
        ]
    tablet = {
        "healthy": not tablet_issues,
        "message": "ADB connected; Home Assistant is foreground" if not tablet_issues else tablet_issues[0],
        "issues": tablet_issues,
    }
    if packages.returncode or disabled.returncode:
        issue = "Tablet app status could not be inspected"
        return tablet, {"healthy": False, "message": issue, "issues": [issue]}
    package_set = package_names(packages.stdout)
    disabled_set = package_names(disabled.stdout) & package_set
    app_issues = [f"{name}: missing" for name, package in REQUIRED_APPS.items() if package not in package_set]
    app_issues += [f"{name}: disabled" for name, package in REQUIRED_APPS.items() if package in disabled_set]
    apps = {
        "healthy": not app_issues,
        "message": f"{len(REQUIRED_APPS) - len(app_issues)}/{len(REQUIRED_APPS)} required apps installed and enabled",
        "issues": app_issues,
    }
    return tablet, apps


def build_payload(adapter_path: Path, tablet_host: str | None = None) -> dict:
    names = process_names()
    codex_ok = any(name.startswith("codex") for name in names)
    tablet, apps = tablet_checks(adapter_path, tablet_host)
    return {
        "agent_version": AGENT_VERSION,
        "sent_at": datetime.now(timezone.utc).isoformat(),
        "checks": {
            "workstation": {"healthy": True, "message": "Windows watchdog agent is running", "issues": []},
            "codex": {"healthy": codex_ok,
                      "message": "Codex desktop processes detected" if codex_ok else "Codex desktop is not running",
                      "issues": [] if codex_ok else ["Codex desktop is not running"]},
            "tablet": tablet,
            "apps": apps,
        },
    }


def append_log(path: Path, record: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and path.stat().st_size > 2_000_000:
        archive = path.with_suffix(".previous.jsonl")
        archive.unlink(missing_ok=True)
        path.replace(archive)
    with path.open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(record, separators=(",", ":")) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--log", type=Path, required=True)
    parser.add_argument("--tablet-host", type=IPv4Address, help="Use an explicit tablet IPv4 address instead of model discovery")
    args = parser.parse_args()
    try:
        adapter_path = args.management_root / "ha_manage.py"
        payload = build_payload(adapter_path, str(args.tablet_host) if args.tablet_host else None)
        adapter = load_management_adapter(args.management_root)
        response = adapter.rest("POST", "/api/system_watchdog/heartbeat", payload)
        if not isinstance(response, dict) or response.get("accepted") is not True:
            raise RuntimeError("Home Assistant did not accept the watchdog heartbeat")
        append_log(args.log, {"time": datetime.now(timezone.utc).isoformat(), "ok": True,
                              "overall_checks": {key: value["healthy"] for key, value in payload["checks"].items()},
                              "accepted": True})
        return 0
    except Exception as err:  # Scheduled probes must leave a bounded diagnostic trail.
        append_log(args.log, {"time": datetime.now(timezone.utc).isoformat(), "ok": False,
                              "error": f"{type(err).__name__}: {err}"[:500]})
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

