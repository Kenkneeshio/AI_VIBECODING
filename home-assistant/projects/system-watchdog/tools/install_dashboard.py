"""Add or update the authenticated System Health view without disturbing other views."""

from __future__ import annotations

import argparse
import importlib.util
import json
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


def load_adapter(root: Path):
    spec = importlib.util.spec_from_file_location("private_ha_manage", root / "ha_manage.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--backup-dir", type=Path, required=True)
    parser.add_argument("--dashboard", default="second-floor")
    args = parser.parse_args()
    adapter = load_adapter(args.management_root)
    with adapter.API() as api:
        config = api.call("lovelace/config", url_path=args.dashboard)
        args.backup_dir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        backup = args.backup_dir / f"{args.dashboard}-before-system-watchdog-{stamp}.json"
        backup.write_text(json.dumps(config, indent=2), encoding="utf-8")
        view = {
            "title": "System Health",
            "path": "health",
            "icon": "mdi:shield-pulse",
            "cards": [
                {
                    "type": "entities",
                    "title": "System Watchdog",
                    "show_header_toggle": False,
                    "state_color": True,
                    "entities": ENTITIES,
                },
                {
                    "type": "markdown",
                    "content": "Tap any row for its message and bounded issue list. A persistent notification appears when health degrades. App health means installed and enabled; vendor login sessions require vendor APIs.",
                },
            ],
        }
        views = config.setdefault("views", [])
        index = next((i for i, existing in enumerate(views) if existing.get("path") == "health"), None)
        if index is None:
            views.append(view)
        else:
            views[index] = view
        api.call("lovelace/config/save", url_path=args.dashboard, config=config)
        saved = api.call("lovelace/config", url_path=args.dashboard)
        if not any(item.get("path") == "health" for item in saved.get("views", [])):
            raise RuntimeError("System Health view read-back failed")
    print(f"System Health view installed; backup: {backup}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

