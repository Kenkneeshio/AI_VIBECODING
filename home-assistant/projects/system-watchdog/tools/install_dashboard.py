"""Add or update the authenticated System Health view without disturbing other views."""

from __future__ import annotations

import argparse
import hashlib
import importlib.util
import json
import subprocess
from datetime import datetime
from pathlib import Path

ENTITIES = [
    "sensor.system_watchdog_summary",
    "sensor.system_watchdog_issue_count",
    "binary_sensor.system_watchdog_problem",
    "sensor.system_watchdog_home_assistant",
    "sensor.system_watchdog_integrations",
    "sensor.system_watchdog_roomcraft",
    "sensor.system_watchdog_sensors",
    "sensor.system_watchdog_workstation",
    "sensor.system_watchdog_codex",
    "sensor.system_watchdog_tablet",
    "sensor.system_watchdog_apps",
]
RESOURCE_PATH = "/local/system-watchdog/system-watchdog-card.js"


def load_adapter(root: Path):
    spec = importlib.util.spec_from_file_location("private_ha_manage", root / "ha_manage.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def run(args: list[str]) -> None:
    result = subprocess.run(args, capture_output=True, text=True, timeout=90, check=False)
    if result.returncode:
        raise RuntimeError(result.stderr.strip() or result.stdout.strip() or f"command failed: {args[0]}")


def resource_url(asset: Path) -> str:
    version = hashlib.sha256(asset.read_bytes()).hexdigest()[:12]
    return f"{RESOURCE_PATH}?v={version}"


def build_view() -> dict:
    return {
        "title": "System Health",
        "path": "health",
        "icon": "mdi:shield-pulse",
        "cards": [
            {
                "type": "custom:system-watchdog-card",
                "title": "Connected Home",
                "summary_entity": "sensor.system_watchdog_summary",
                "issue_entity": "sensor.system_watchdog_issue_count",
            },
            {
                "type": "entities",
                "title": "Diagnostic entities",
                "show_header_toggle": False,
                "state_color": True,
                "entities": ENTITIES,
            },
            {
                "type": "markdown",
                "content": "The animated map reports observed health only; it never restarts services or actuates devices. Tap a resource for its bounded message and issues. App health means installed and enabled; vendor sessions still require vendor-supported checks.",
            },
        ],
    }


def register_resource(api, url: str) -> None:
    resources = api.call("lovelace/resources")
    existing = next((item for item in resources
                     if item.get("url", "").split("?", 1)[0] == RESOURCE_PATH), None)
    if existing:
        if existing.get("url") != url or existing.get("type") != "module":
            api.call("lovelace/resources/update", resource_id=existing["id"], url=url, res_type="module")
    else:
        api.call("lovelace/resources/create", url=url, res_type="module")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--backup-dir", type=Path, required=True)
    parser.add_argument("--dashboard", default="second-floor")
    parser.add_argument("--host", required=True)
    parser.add_argument("--ssh-key", type=Path, required=True)
    args = parser.parse_args()
    asset = Path(__file__).parents[1] / "www" / "system-watchdog-card.js"
    url = resource_url(asset)
    ssh_options = ["-i", str(args.ssh_key), "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes"]
    run(["ssh", *ssh_options, f"root@{args.host}", "mkdir -p /config/www/system-watchdog"])
    run(["scp", *ssh_options, str(asset), f"root@{args.host}:/config/www/system-watchdog/system-watchdog-card.js"])
    adapter = load_adapter(args.management_root)
    with adapter.API() as api:
        config = api.call("lovelace/config", url_path=args.dashboard)
        args.backup_dir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        backup = args.backup_dir / f"{args.dashboard}-before-system-watchdog-{stamp}.json"
        backup.write_text(json.dumps(config, indent=2), encoding="utf-8")
        register_resource(api, url)
        view = build_view()
        views = config.setdefault("views", [])
        index = next((i for i, existing in enumerate(views) if existing.get("path") == "health"), None)
        if index is None:
            views.append(view)
        else:
            views[index] = view
        api.call("lovelace/config/save", url_path=args.dashboard, config=config)
        saved = api.call("lovelace/config", url_path=args.dashboard)
        saved_view = next((item for item in saved.get("views", []) if item.get("path") == "health"), None)
        if not saved_view or saved_view.get("cards", [{}])[0].get("type") != "custom:system-watchdog-card":
            raise RuntimeError("System Health view read-back failed")
        resources = api.call("lovelace/resources")
        if not any(item.get("url") == url and item.get("type") == "module" for item in resources):
            raise RuntimeError("System Watchdog card resource read-back failed")
    print(f"Animated System Health view installed; resource: {url}; backup: {backup}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

