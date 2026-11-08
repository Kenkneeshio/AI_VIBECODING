"""Normalize first-install category entity IDs to their documented watchdog namespace."""

from __future__ import annotations

import argparse
import importlib.util
from pathlib import Path

CATEGORIES = ("home_assistant", "integrations", "roomcraft", "sensors", "workstation", "codex", "tablet", "apps")


def load_adapter(root: Path):
    spec = importlib.util.spec_from_file_location("private_ha_manage", root / "ha_manage.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--management-root", type=Path, required=True)
    args = parser.parse_args()
    adapter = load_adapter(args.management_root)
    with adapter.API() as api:
        registry = api.call("config/entity_registry/list")
        by_unique = {entry.get("unique_id"): entry for entry in registry if entry.get("platform") == "system_watchdog"}
        updated = 0
        for category in CATEGORIES:
            unique_id = f"system_watchdog_{category}"
            entry = by_unique.get(unique_id)
            target = f"sensor.system_watchdog_{category}"
            if entry and entry.get("entity_id") != target:
                api.call("config/entity_registry/update", entity_id=entry["entity_id"], new_entity_id=target)
                updated += 1
    print(f"Normalized {updated} watchdog entity IDs")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

