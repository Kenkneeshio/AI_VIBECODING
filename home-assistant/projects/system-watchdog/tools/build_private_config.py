"""Build a private watchdog YAML file from live HA metadata and a dashboard backup."""

from __future__ import annotations

import argparse
import importlib.util
import json
from pathlib import Path

SAFETY_CLASSES = {"smoke", "carbon_monoxide", "gas", "moisture", "safety", "problem", "connectivity"}
SAFETY_TERMS = ("air_quality", "air_filter", "smoke", "carbon_monoxide", "water_leak", "leak_sensor")


def load_adapter(root: Path):
    spec = importlib.util.spec_from_file_location("private_ha_manage", root / "ha_manage.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def layout_from_backup(payload: dict) -> dict:
    config = payload.get("config", payload)
    return config.get("roomcraft_layout", {}) if isinstance(config, dict) else {}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--dashboard-backup", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    backup = json.loads(args.dashboard_backup.read_text(encoding="utf-8"))
    layout = layout_from_backup(backup)
    roomcraft = {item.get("entityId") for item in layout.get("items", []) if isinstance(item, dict)}
    roomcraft |= {item.get("entity") for item in layout.get("hotspots", []) if isinstance(item, dict)}
    roomcraft = sorted(entity for entity in roomcraft if isinstance(entity, str) and "." in entity)

    adapter = load_adapter(args.management_root)
    states = adapter.rest("GET", "/api/states")
    sensors = set()
    for state in states:
        entity_id = state.get("entity_id", "")
        value = state.get("state")
        attrs = state.get("attributes", {})
        if value in {"unknown", "unavailable"}:
            continue
        if entity_id == "device_tracker.apolosign_calendar" or (
            entity_id.startswith(("sensor.", "binary_sensor.")) and
            (attrs.get("device_class") in SAFETY_CLASSES or any(term in entity_id for term in SAFETY_TERMS))
        ):
            sensors.add(entity_id)

    lines = ["scan_interval: 60", "stale_after: 600", "roomcraft_entities:"]
    lines += [f"  - {entity}" for entity in roomcraft] or ["  []"]
    lines.append("sensor_entities:")
    lines += [f"  - {entity}" for entity in sorted(sensors)] or ["  []"]
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps({"roomcraft_entities": len(roomcraft), "sensor_entities": len(sensors)}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

