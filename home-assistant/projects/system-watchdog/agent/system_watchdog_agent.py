"""Windows-side health probe. Uses the private HA adapter; contains no credentials."""

from __future__ import annotations

import argparse
import csv
import importlib.util
import io
import json
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

TABLET_HOST = "192.168.68.57"
REQUIRED_APPS = {
    "Home Assistant": "io.homeassistant.companion.android",
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


def tablet_checks(adapter: Path) -> tuple[dict, dict]:
    devices = ssh(adapter, "adb devices -l")
    endpoint = None
    if devices.returncode == 0:
        for line in devices.stdout.splitlines():
            if line.startswith(f"{TABLET_HOST}:") and " device " in f" {line} ":
                endpoint = line.split()[0]
                break
    if not endpoint:
        issue = "ADB tablet is not connected"
        return ({"healthy": False, "message": issue, "issues": [issue]},
                {"healthy": False, "message": "Tablet apps could not be inspected", "issues": [issue]})

    foreground = ssh(adapter, f"adb -s {endpoint} shell dumpsys activity activities")
    packages = ssh(adapter, f"adb -s {endpoint} shell pm list packages")
    disabled = ssh(adapter, f"adb -s {endpoint} shell pm list packages -d")
    package_set = {line.removeprefix("package:").strip() for line in packages.stdout.splitlines()}
    disabled_set = {line.removeprefix("package:").strip() for line in disabled.stdout.splitlines()}
    ha_foreground = "topResumedActivity" in foreground.stdout and "io.homeassistant.companion.android" in foreground.stdout
    tablet_issues = [] if ha_foreground else ["Home Assistant is not the foreground app"]
    tablet = {
        "healthy": not tablet_issues,
        "message": "ADB connected; Home Assistant is foreground" if not tablet_issues else tablet_issues[0],
        "issues": tablet_issues,
    }
    missing = [name for name, package in REQUIRED_APPS.items() if package not in package_set]
    disabled_names = [name for name, package in REQUIRED_APPS.items() if package in disabled_set]
    app_issues = [f"{name}: missing" for name in missing] + [f"{name}: disabled" for name in disabled_names]
    apps = {
        "healthy": not app_issues,
        "message": f"{len(REQUIRED_APPS) - len(app_issues)}/{len(REQUIRED_APPS)} required apps installed and enabled",
        "issues": app_issues,
    }
    return tablet, apps


def build_payload(adapter_path: Path) -> dict:
    names = process_names()
    codex_ok = any(name.startswith("codex") for name in names)
    tablet, apps = tablet_checks(adapter_path)
    return {
        "agent_version": "0.1.0",
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
    args = parser.parse_args()
    try:
        adapter_path = args.management_root / "ha_manage.py"
        payload = build_payload(adapter_path)
        adapter = load_management_adapter(args.management_root)
        response = adapter.rest("POST", "/api/system_watchdog/heartbeat", payload)
        append_log(args.log, {"time": datetime.now(timezone.utc).isoformat(), "ok": True,
                              "overall_checks": {key: value["healthy"] for key, value in payload["checks"].items()},
                              "accepted": bool(response.get("accepted")) if isinstance(response, dict) else True})
        return 0
    except Exception as err:  # Scheduled probes must leave a bounded diagnostic trail.
        append_log(args.log, {"time": datetime.now(timezone.utc).isoformat(), "ok": False,
                              "error": f"{type(err).__name__}: {err}"[:500]})
        return 1


if __name__ == "__main__":
    raise SystemExit(main())

