"""Migrate the live Second Floor plan to editable controls and a curated menu.

The transformation is pure and safe to run repeatedly. The CLI reads the live
Second Floor and Main Dashboard through a separately supplied private
``ha_manage.py`` adapter. It prints a summary by default; ``--apply`` is the
only path that saves Home Assistant configuration. No credentials, snapshots,
or stream URLs are stored here.

Example:
    python ha-local/migrate_interactive_plan.py \
        --management-root <PRIVATE-HA-MANAGEMENT-DIR>
    python ha-local/migrate_interactive_plan.py \
        --management-root <PRIVATE-HA-MANAGEMENT-DIR> --apply
"""

from __future__ import annotations

import argparse
from copy import deepcopy
from datetime import datetime, timezone
import json
import math
from pathlib import Path
import re
import sys
from typing import Any

PLAN_WIDTH = 1536
PLAN_HEIGHT = 1024
TARGET_DASHBOARD = "second-floor"
SOURCE_DASHBOARD = "dashboard-dashboard"
CAMERA_ITEM_ID = "front-door-camera"
CAMERA_ELEMENT_TYPE = "custom:roomcraft-camera-thumbnail"
OBJECT_ELEMENT_TYPE = "custom:roomcraft-object-control"
MENU_ELEMENT_TYPE = "custom:roomcraft-entity-menu"
ENTITY_ID = re.compile(r"^[a-z_]+\.[a-z0-9_]+$")
CAMERA_ID = re.compile(r"^camera\.[a-z0-9_]+$")

# Coordinates were checked against the 1536 × 1024 furnished plan. They cover
# the glass with enough margin for a touch target, but can be moved in Studio.
BLIND_ZONES = (
    ("sofa", "blind-zone-sofa", "blinds_sofa_2", "Sofa blinds", 461, 201, 98, 58),
    ("tv", "blind-zone-tv", "blinds_tv_2", "TV blinds", 729, 201, 92, 58),
    ("small-sofa", "blind-zone-small-sofa", "blinds_small_sofa_2", "Small sofa blinds", 399, 320, 70, 135),
)
MENU_TITLES = (
    "Planning", "Weather and Air Quality", "Lighting",
    "Security and Control", "Energy", "Robot Vacuum",
)


class MigrationError(RuntimeError):
    """A safe, user-readable failure that prevents a partial migration."""


def _object(value: Any) -> bool:
    return isinstance(value, dict)


def _stable(value: Any) -> str:
    return json.dumps(value, sort_keys=True, separators=(",", ":"), ensure_ascii=False)


def _percent(value: float, span: int) -> str:
    # Match JavaScript Math.round(value / span * 10000) / 100.
    rounded = math.floor(value / span * 10000 + 0.5) / 100
    return f"{rounded:g}%"


def _number(value: Any, *, minimum: float, maximum: float) -> bool:
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value) and minimum <= value <= maximum


def _find_plan_card(config: dict) -> dict:
    views = config.get("views")
    if not isinstance(views, list):
        raise MigrationError("The Second Floor dashboard has no views.")
    plan = next((view for view in views if _object(view) and view.get("path") == "plan"), None)
    cards = plan.get("cards") if _object(plan) else None
    card = next((card for card in cards if _object(card) and card.get("type") == "picture-elements"), None) if isinstance(cards, list) else None
    if not _object(card) or not isinstance(card.get("elements"), list):
        raise MigrationError("The Second Floor picture-elements plan is missing.")
    return card


def _source_sections(old_main: dict) -> dict[str, dict]:
    views = old_main.get("views")
    if not isinstance(views, list):
        raise MigrationError("The Main Dashboard has no views.")
    found: dict[str, dict] = {}
    for view in views:
        if not _object(view):
            continue
        for section in view.get("sections", []):
            if not _object(section) or not isinstance(section.get("cards"), list):
                continue
            title = next((card.get("heading") for card in section["cards"]
                          if _object(card) and card.get("type") == "heading" and isinstance(card.get("heading"), str)), None)
            if title in MENU_TITLES:
                if title in found:
                    raise MigrationError(f"Main Dashboard has duplicate {title} sections.")
                found[title] = section
    missing = [title for title in MENU_TITLES if title not in found]
    if missing:
        raise MigrationError("Main Dashboard is missing a required curated section: " + ", ".join(missing))
    return found


def _entity_refs(node: Any) -> list[str]:
    refs: list[str] = []

    def walk(value: Any, key: str = "") -> None:
        if isinstance(value, str):
            if key in {"entity", "entity_id", "camera_image", "image_entity", "weather_entity", "entities"} and ENTITY_ID.fullmatch(value):
                refs.append(value)
        elif isinstance(value, list):
            for member in value:
                walk(member, key)
        elif _object(value):
            for member_key, member in value.items():
                # Never derive a menu entity from prose, URLs, service payloads,
                # camera tokens, or arbitrary card templates.
                if member_key in {"content", "markdown", "image", "url", "picture", "source", "entity_picture"}:
                    continue
                walk(member, member_key)

    walk(node)
    return list(dict.fromkeys(refs))


def _curated_sections(old_main: dict) -> list[dict]:
    source = _source_sections(old_main)
    sections = []
    for title in MENU_TITLES:
        cards = source[title]["cards"]
        if title == "Robot Vacuum":
            # The remaining old cards hold a feeder and unrelated markdown.
            cards = [card for card in cards if _object(card) and card.get("type") in
                     {"picture-glance", "custom:mushroom-vacuum-card"}]
        entities = _entity_refs(cards)
        if not entities:
            raise MigrationError(f"The {title} section has no entity references.")
        sections.append({"title": title, "entities": entities})
    return sections


def _porch_camera(old_main: dict) -> str:
    security = _source_sections(old_main)["Security and Control"]
    cameras: list[str] = []

    def walk(node: Any) -> None:
        if _object(node):
            if node.get("type") == "picture-entity" and node.get("camera_view") == "live":
                entity = node.get("camera_image") or node.get("entity")
                if isinstance(entity, str) and CAMERA_ID.fullmatch(entity):
                    cameras.append(entity)
            for value in node.values():
                if isinstance(value, (dict, list)):
                    walk(value)
        elif isinstance(node, list):
            for value in node:
                walk(value)

    walk(security)
    cameras = list(dict.fromkeys(cameras))
    if len(cameras) != 1:
        raise MigrationError("Main Dashboard must identify exactly one live entry camera.")
    return cameras[0]


def _blind_bindings(project: dict, old_main: dict) -> dict[str, str]:
    lighting_refs = {ref for ref in _entity_refs(_source_sections(old_main)["Lighting"]) if ref.startswith("cover.")}
    existing = {hotspot.get("entity") for hotspot in project.get("hotspots", [])
                if _object(hotspot) and isinstance(hotspot.get("entity"), str)}
    bindings: dict[str, str] = {}
    for slug, _, suffix, *_ in BLIND_ZONES:
        matches = [entity for entity in lighting_refs if entity.split(".", 1)[1] == suffix]
        if len(matches) != 1:
            raise MigrationError(f"Main Dashboard must identify the {slug} blind exactly once.")
        bindings[slug] = matches[0]
    for slug in ("sofa", "tv"):
        if bindings[slug] not in existing and not any(
            _object(item) and item.get("type") == "controlZone" and item.get("entityId") == bindings[slug]
            for item in project.get("items", [])
        ):
            raise MigrationError(f"The current plan no longer contains the {slug} blind control.")
    return bindings


def _validate_item(item: dict, *, camera: bool = False) -> None:
    minimum = 40 if camera else 12
    if not isinstance(item.get("id"), str) or not item["id"] or len(item["id"]) > 128 or \
       not _number(item.get("x"), minimum=0, maximum=PLAN_WIDTH) or \
       not _number(item.get("y"), minimum=0, maximum=PLAN_HEIGHT) or \
       not _number(item.get("w"), minimum=minimum, maximum=PLAN_WIDTH) or \
       not _number(item.get("h"), minimum=minimum, maximum=PLAN_HEIGHT) or \
       not _number(item.get("rotation", 0), minimum=-3600, maximum=3600):
        raise MigrationError("The plan has an invalid editable item geometry.")
    entity = item.get("entityId", "")
    if camera:
        if not isinstance(entity, str) or (entity and not CAMERA_ID.fullmatch(entity)):
            raise MigrationError("The camera item has an invalid entity ID.")
    elif not isinstance(entity, str) or not ENTITY_ID.fullmatch(entity):
        raise MigrationError("A linked object has an invalid entity ID.")


def _camera_elements(items: list[dict]) -> list[dict]:
    result = []
    for item in items:
        if item.get("type") != "cameraThumbnail":
            continue
        _validate_item(item, camera=True)
        result.append({
            "type": CAMERA_ELEMENT_TYPE, "roomcraft_item_id": item["id"],
            "title": str(item.get("name") or "Camera")[:120],
            "camera_entity": item.get("entityId") or "",
            "image_entity": item.get("imageEntityId") or "",
            "preview_mode": item.get("previewMode") or "event",
            "style": {
                "left": _percent(item["x"], PLAN_WIDTH), "top": _percent(item["y"], PLAN_HEIGHT),
                "width": _percent(item["w"], PLAN_WIDTH), "height": _percent(item["h"], PLAN_HEIGHT),
                "transform": f"translate(-50%, -50%) rotate({item.get('rotation', 0)}deg)",
                "z-index": 3,
            },
        })
    return result


def _object_elements(items: list[dict]) -> list[dict]:
    result = []
    for item in items:
        if item.get("type") == "cameraThumbnail" or not item.get("entityId"):
            continue
        _validate_item(item)
        result.append({
            "type": OBJECT_ELEMENT_TYPE, "roomcraft_item_id": item["id"],
            "entity": item["entityId"],
            "title": item.get("controlLabel") or item.get("name") or item["entityId"],
            "control_icon": item.get("controlIcon") or "",
            "control_zone": item.get("type") == "controlZone",
            "roomcraft_tap_action": item.get("tapAction") or "auto",
            "roomcraft_hold_action": item.get("holdAction") or "auto",
            "style": {
                "left": _percent(item["x"], PLAN_WIDTH), "top": _percent(item["y"], PLAN_HEIGHT),
                "width": _percent(item["w"], PLAN_WIDTH), "height": _percent(item["h"], PLAN_HEIGHT),
                "transform": f"translate(-50%, -50%) rotate({item.get('rotation', 0)}deg)",
                "z-index": 4,
            },
        })
    return result


def _menu_element(items: list[dict], sections: list[dict]) -> dict:
    bound_objects = [{
        "entity_id": item["entityId"],
        "label": item.get("controlLabel") or item.get("name") or item["entityId"],
        "icon": item.get("controlIcon") or "",
    } for item in items if isinstance(item.get("entityId"), str) and ENTITY_ID.fullmatch(item["entityId"])]
    return {
        "type": MENU_ELEMENT_TYPE, "roomcraft_menu": True,
        "title": "Devices and sensors", "sections": sections,
        "bound_objects": bound_objects,
        "style": {"left": "5.2%", "top": "8.8%", "z-index": 12},
    }


def _managed(element: dict) -> bool:
    return (element.get("type") in {CAMERA_ELEMENT_TYPE, OBJECT_ELEMENT_TYPE} and
            isinstance(element.get("roomcraft_item_id"), str)) or \
           (element.get("type") == MENU_ELEMENT_TYPE and element.get("roomcraft_menu") is True)


def migrate_dashboard(current: dict, old_main: dict) -> dict:
    """Return a changed copy; never mutate either input configuration."""
    if not _object(current) or not _object(old_main):
        raise MigrationError("Both Home Assistant dashboards are required.")
    result = deepcopy(current)
    card = _find_plan_card(result)
    project = result.get("roomcraft_layout")
    if not _object(project) or project.get("version") != 2 or \
       not isinstance(project.get("items"), list) or not isinstance(project.get("hotspots"), list):
        raise MigrationError("The current Roomcraft project is missing or unsupported.")
    items = project["items"]
    if not all(_object(item) for item in items):
        raise MigrationError("The project contains an invalid item.")
    camera = next((item for item in items if item.get("id") == CAMERA_ITEM_ID and item.get("type") == "cameraThumbnail"), None)
    if camera is None:
        raise MigrationError("The current front-entry camera item was not found.")
    _validate_item(camera, camera=True)
    camera["name"] = "Front entry · live"
    camera["entityId"] = _porch_camera(old_main)
    camera["imageEntityId"] = ""
    camera["previewMode"] = "live"

    # The existing fixture controls a counter-light circuit. Keep its drawn
    # position, but name the live action for the device it actually switches.
    for item in items:
        if item.get("id") == "fixture-kitchen" and item.get("entityId") == "switch.smart_switch_3_switch_1":
            item.setdefault("controlLabel", "Kitchen counter lights")

    blind_entities = _blind_bindings(project, old_main)
    by_id = {item.get("id"): item for item in items}
    for slug, item_id, _, name, x, y, width, height in BLIND_ZONES:
        entity = blind_entities[slug]
        zone = by_id.get(item_id)
        if zone is None:
            zone = next((item for item in items if item.get("type") == "controlZone" and item.get("entityId") == entity), None)
        if zone is None:
            zone = {"id": item_id, "type": "controlZone", "name": name,
                    "x": x, "y": y, "w": width, "h": height, "rotation": 0,
                    "entityId": entity, "controlLabel": name, "controlIcon": "mdi:blinds",
                    "tapAction": "more-info", "holdAction": "more-info"}
            items.append(zone)
        elif zone.get("type") != "controlZone":
            raise MigrationError(f"The {item_id} ID is already used by another item.")
        else:
            # Preserve geometry and any later Inspector edits on rerun.
            zone["entityId"] = entity
            zone.setdefault("name", name)
            zone.setdefault("controlLabel", name)
            zone.setdefault("controlIcon", "mdi:blinds")
            zone.setdefault("tapAction", "more-info")
            zone.setdefault("holdAction", "more-info")
        _validate_item(zone)

    sections = _curated_sections(old_main)
    objects = _object_elements(items)
    linked = {element["entity"] for element in objects}
    # Linked fixtures and blind zones own their whole object hit areas. Retire
    # their old floating icons from both the stored project and the live plan.
    # Unmatched manual hotspots remain editable and visible.
    project["hotspots"] = [hotspot for hotspot in project["hotspots"]
                           if not (_object(hotspot) and hotspot.get("entity") in linked)]
    hotspots = []
    for hotspot in project["hotspots"]:
        if not _object(hotspot) or hotspot.get("type") != "state-icon" or \
           not isinstance(hotspot.get("entity"), str) or not ENTITY_ID.fullmatch(hotspot["entity"]):
            raise MigrationError("The project has an invalid state-icon control.")
        if hotspot["entity"] not in linked:
            overlay = deepcopy(hotspot)
            overlay.pop("id", None)
            hotspots.append(overlay)
    retained = [deepcopy(element) for element in card["elements"]
                if _object(element) and element.get("type") != "state-icon" and not _managed(element)]
    card["elements"] = [*hotspots, *objects, *_camera_elements(items), _menu_element(items, sections), *retained]
    return result


def summarize(before: dict, after: dict) -> dict:
    card = _find_plan_card(after)
    project = after["roomcraft_layout"]
    menu = next(element for element in card["elements"] if _object(element) and element.get("type") == MENU_ELEMENT_TYPE)
    return {
        "changed": _stable(before) != _stable(after),
        "camera": next(item["entityId"] for item in project["items"] if item.get("id") == CAMERA_ITEM_ID),
        "control_zones": sum(item.get("type") == "controlZone" for item in project["items"]),
        "object_overlays": sum(element.get("type") == OBJECT_ELEMENT_TYPE for element in card["elements"]),
        "menu_sections": [{"title": section["title"], "entity_count": len(section["entities"])} for section in menu["sections"]],
        "preserved_overlays": [element.get("type") for element in card["elements"] if
                                _object(element) and element.get("type") in {"state-label", "icon"}],
    }


def _backup(config: dict, management_root: Path, backup_dir: Path | None) -> Path:
    location = (backup_dir or management_root / "backups" / "roomcraft").resolve()
    site_root = Path(__file__).resolve().parent.parent
    if location == site_root or site_root in location.parents:
        raise MigrationError("Choose a private backup directory outside the Site source.")
    location.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S-%f")
    destination = location / f"{TARGET_DASHBOARD}-before-interactive-plan-{stamp}.json"
    with destination.open("x", encoding="utf-8") as stream:
        json.dump(config, stream, indent=2, ensure_ascii=False)
    return destination


def run_cli(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--management-root", required=True, type=Path,
                        help="Private directory containing the trusted ha_manage.py adapter")
    parser.add_argument("--backup-dir", type=Path,
                        help="Private backup directory (default: <management-root>/backups/roomcraft)")
    parser.add_argument("--apply", action="store_true", help="Save the migrated dashboard after a backup and stale-config check")
    args = parser.parse_args(argv)
    management_root = args.management_root.resolve()
    if not (management_root / "ha_manage.py").is_file():
        raise MigrationError("The private Home Assistant management adapter was not found.")
    sys.path.insert(0, str(management_root))
    from ha_manage import API  # type: ignore[import-not-found]  # private, supplied at runtime

    with API() as api:
        current = api.call("lovelace/config", url_path=TARGET_DASHBOARD)
        old_main = api.call("lovelace/config", url_path=SOURCE_DASHBOARD)
        next_config = migrate_dashboard(current, old_main)
        report = summarize(current, next_config)
        if not args.apply or not report["changed"]:
            report["mode"] = "dry-run" if not args.apply else "already-current"
            print(json.dumps(report, indent=2, ensure_ascii=False))
            return 0
        backup = _backup(current, management_root, args.backup_dir)
        if _stable(api.call("lovelace/config", url_path=TARGET_DASHBOARD)) != _stable(current) or \
           _stable(api.call("lovelace/config", url_path=SOURCE_DASHBOARD)) != _stable(old_main):
            raise MigrationError("A dashboard changed during migration; nothing was saved. Private backup: " + str(backup))
        api.call("lovelace/config/save", url_path=TARGET_DASHBOARD, config=next_config)
        verified = api.call("lovelace/config", url_path=TARGET_DASHBOARD)
        if _stable(verified) != _stable(next_config):
            raise MigrationError("Home Assistant save could not be verified. Private backup: " + str(backup))
        report["mode"] = "applied-and-verified"
        report["backup"] = str(backup)
        print(json.dumps(report, indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(run_cli())
    except MigrationError as error:
        print("Migration stopped: " + str(error), file=sys.stderr)
        raise SystemExit(1)
    except Exception as error:
        # API exceptions can contain response bodies or URLs. Do not log them.
        print(f"Migration failed ({type(error).__name__}); no credentials were logged.", file=sys.stderr)
        raise SystemExit(1)
