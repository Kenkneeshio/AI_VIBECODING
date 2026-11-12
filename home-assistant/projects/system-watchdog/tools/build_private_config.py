"""Build a private Watchdog YAML file from a backed-up Roomcraft dashboard."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ENTITY_ID = re.compile(r"[a-z_]+\.[a-z0-9_]+\Z")
ROOMCRAFT_BLOCK = re.compile(r"^roomcraft_entities:[^\r\n]*(?:\r?\n[ \t]+[^\r\n]*)*", re.MULTILINE)
CONTROL = "custom:roomcraft-object-control"
CAMERA = "custom:roomcraft-camera-thumbnail"
WEATHER = "custom:roomcraft-weather-outdoor"
STATUS = "custom:roomcraft-status-popup"
CONTROL_INPUTS = ("roomcraft_tap_entity", "roomcraft_hold_entity", "roomcraft_presence_entity",
                  "roomcraft_vacuum_map_entity")


def valid_entity(value) -> bool:
    return isinstance(value, str) and ENTITY_ID.fullmatch(value) is not None


def records(value):
    return (row for row in value if isinstance(row, dict)) if isinstance(value, list) else ()


def entity_fields(rows, fields):
    return {row[key] for row in rows for key in fields if valid_entity(row.get(key))}


def feature_bindings(config, items, elements) -> set[str]:
    entities = {item["entityId"] for item in items if item.get("type") == "tv"
                and valid_entity(item.get("entityId")) and item["entityId"].startswith("media_player.")}
    entities.update(entity_fields((item for item in items if item.get("type") == "presenceSwitch"),
                                  ("presenceEntityId", "presenceTrackEntityId")))
    weather = next((row for row in elements if row.get("type") == WEATHER), None)
    if weather is not None:
        entities.update(entity_fields([weather], ("weather_entity", "sun_entity", "moon_entity")))
        if not valid_entity(weather.get("sun_entity")):
            entities.add("sun.sun")
    for row in elements:
        if row.get("type") != STATUS or row.get("roomcraft_status_kind") not in ("electrical", "air"):
            continue
        for entry in row.get("entities", []) if isinstance(row.get("entities"), list) else []:
            entity = entry.get("entity") if isinstance(entry, dict) else entry
            if valid_entity(entity):
                entities.add(entity)
    commutes = config.get("roomcraft_commutes")
    if isinstance(commutes, dict) and commutes.get("version") == 1:
        entities.update(entity_fields(records(commutes.get("routes")), ("entity", "baselineEntity")))
    energy = config.get("roomcraft_energy")
    if isinstance(energy, dict) and energy.get("version") == 1 and isinstance(energy.get("home"), dict):
        # Recorder statistics can outlive their live entity. Only require the meters read from current state.
        entities.update(entity_fields([energy["home"], *records(energy.get("groups"))], ("power", "today", "billing")))
    location = config.get("roomcraft_location")
    if isinstance(location, dict):
        entities.update(entity_fields(records(location.get("sources")), ("entity",)))
    return entities


def active_bindings(payload: dict) -> list[str]:
    config = payload.get("config", payload)
    if not isinstance(config, dict) or not isinstance(config.get("roomcraft_layout"), dict):
        raise ValueError("The dashboard backup has no Roomcraft layout.")
    layout = config["roomcraft_layout"]
    if not isinstance(layout.get("items"), list):
        raise ValueError("The Roomcraft layout has no item list.")
    items = {item.get("id"): item for item in layout["items"]
             if isinstance(item, dict) and isinstance(item.get("id"), str)}

    if "roomcraft_plan" in config:
        plan = config["roomcraft_plan"]
        if not isinstance(plan, dict) or plan.get("type") != "picture-elements" or not isinstance(plan.get("elements"), list):
            raise ValueError("The published Roomcraft plan is invalid.")
        elements = list(records(plan["elements"]))
        entities = feature_bindings(config, items.values(), elements)
        for element in elements:
            if not isinstance(element.get("roomcraft_item_id"), str):
                continue
            item = items.get(element["roomcraft_item_id"])
            if item is None:
                continue
            kind = element.get("type")
            if kind == CONTROL:
                entity = element.get("entity")
            elif kind == CAMERA and item.get("type") == "cameraThumbnail":
                entity = element.get("camera_entity")
            else:
                continue
            if valid_entity(entity) and entity == item.get("entityId"):
                entities.add(entity)
                if kind == CONTROL:
                    entities.update(entity_fields([element], CONTROL_INPUTS))
                elif isinstance(element.get("event_entities"), list):
                    entities.update(value for value in element["event_entities"] if valid_entity(value))
        return sorted(entities)

    # Older backups may contain authored bindings without a published projection.
    entities = {item.get("entityId") for item in items.values() if valid_entity(item.get("entityId"))}
    entities.update(entity_fields(records(layout.get("hotspots")), ("entity",)))
    return sorted(entities)


def watchdog_config(roomcraft: list[str], previous: str | None = None) -> str:
    if not all(valid_entity(entity) for entity in roomcraft):
        raise ValueError("An invalid entity ID cannot be added to the Watchdog configuration.")
    newline = "\r\n" if previous and "\r\n" in previous else "\n"
    block = "roomcraft_entities: []"
    if roomcraft:
        block = newline.join(["roomcraft_entities:", *(f"  - {entity}" for entity in sorted(set(roomcraft)))])
    if previous is None:
        return f"scan_interval: 60\nstale_after: 600\n{block}\nsensor_entities: []\n"
    if len(list(ROOMCRAFT_BLOCK.finditer(previous))) != 1:
        raise ValueError("Expected one top-level roomcraft_entities section in the existing Watchdog file.")
    return ROOMCRAFT_BLOCK.sub(lambda _: block, previous, count=1)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dashboard-backup", type=Path, required=True)
    parser.add_argument("--existing-config", type=Path, help="Retain all other entries in this private Watchdog YAML file")
    parser.add_argument("--extra-roomcraft-entity", action="append", default=[],
                        help="Keep an explicitly verified entity in addition to the current dashboard bindings")
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    backup = json.loads(args.dashboard_backup.read_text(encoding="utf-8-sig"))
    previous = args.existing_config.read_bytes().decode("utf-8") if args.existing_config else None
    roomcraft = sorted(set(active_bindings(backup) + args.extra_roomcraft_entity))
    proposed = watchdog_config(roomcraft, previous)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(proposed, encoding="utf-8", newline="\n")
    print(json.dumps({"roomcraft_entities": len(roomcraft), "existing_sensor_settings_preserved": previous is not None}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

