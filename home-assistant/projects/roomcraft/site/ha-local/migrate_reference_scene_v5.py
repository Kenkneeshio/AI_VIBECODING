"""Promote the live Roomcraft project to the fully editable reference scene.

The pure migration mirrors ``reference-v5-all-visuals-are-items`` in app.js.
It changes project data only; the existing rendered plan stays visually
unchanged until the next normal Studio export. Credentials remain in the
separately supplied Home Assistant management adapter.
"""

from __future__ import annotations

import argparse
from copy import deepcopy
from datetime import datetime, timezone
import json
from pathlib import Path
import sys

TARGET_DASHBOARD = "second-floor"
TARGET_VERSION = 5


def _item(item_id, item_type, name, x, y, width, height, rotation=0, **extra):
    return {"id": item_id, "type": item_type, "name": name, "x": x, "y": y,
            "w": width, "h": height, "rotation": rotation, "entityId": "", **extra}


REFERENCE_ITEMS = (
    _item("rug-living", "rug", "Living room rug", 541, 351, 207, 142, 90, rugStyle="classic"),
    _item("rug-bedroom", "rug", "Bedroom floral rug", 1331, 408, 254, 240, rugStyle="bedroom-floral"),
    _item("rug-office", "rug", "Office round rug", 940, 389, 82, 78, rugStyle="office-round"),
    _item("kitchen-worktop", "kitchenWorktop", "Kitchen appliance worktop", 748, 735.5, 106, 127),
    _item("master-storage-cabinet", "storageCabinet", "Master storage cabinet", 1432.5, 243, 75, 92),
    _item("master-bedroom-bench", "bedroomBench", "Master bedroom bench", 1169, 413, 52, 122),
    _item("bath-one-fixtures", "bathFixtures", "Bath 01 fixture group", 1056.5, 739.5, 73, 117),
    _item("bath-two-vanity", "doubleVanity", "Bath 02 double-sink vanity", 1296, 777, 202, 44),
    _item("window-living-north", "window", "Living north window", 461, 203, 82, 34),
    _item("window-great-north", "window", "Great room north window", 728, 203, 78, 34),
    _item("window-office-north-one", "window", "Office north window 01", 866.5, 203, 71, 34),
    _item("window-office-north-two", "window", "Office north window 02", 962.5, 203, 73, 34),
    _item("window-bedroom-north-one", "window", "Bedroom north window 01", 1227, 179, 84, 34),
    _item("window-bedroom-north-two", "window", "Bedroom north window 02", 1340, 179, 82, 34),
    _item("window-living-west", "window", "Living west window", 400, 316.5, 107, 28, 90),
    _item("window-dining-west", "window", "Dining west window", 303.5, 709, 138, 29, 90),
)


class MigrationError(RuntimeError):
    pass


def stable(value):
    return json.dumps(value, sort_keys=True, separators=(",", ":"), ensure_ascii=False)


def migrate_dashboard(current):
    if not isinstance(current, dict) or not isinstance(current.get("roomcraft_layout"), dict):
        raise MigrationError("The Roomcraft layout is missing.")
    result = deepcopy(current)
    project = result["roomcraft_layout"]
    if project.get("version") != 2 or not isinstance(project.get("items"), list):
        raise MigrationError("The Roomcraft layout version is unsupported.")
    reference_version = project.get("editableReferenceVersion", 0)
    if not isinstance(reference_version, int) or reference_version not in {4, TARGET_VERSION}:
        raise MigrationError("The editable reference version is unsupported.")
    if reference_version >= TARGET_VERSION:
        return result
    present = {item.get("id") for item in project["items"] if isinstance(item, dict)}
    project["items"].extend(deepcopy(item) for item in REFERENCE_ITEMS if item["id"] not in present)
    project["editableReferenceVersion"] = TARGET_VERSION
    return result


def run_cli(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--management-root", required=True, type=Path)
    parser.add_argument("--backup-dir", required=True, type=Path)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args(argv)
    management_root = args.management_root.resolve()
    if not (management_root / "ha_manage.py").is_file():
        raise MigrationError("The private Home Assistant management adapter was not found.")
    sys.path.insert(0, str(management_root))
    from ha_manage import API  # type: ignore[import-not-found]

    with API() as api:
        current = api.call("lovelace/config", url_path=TARGET_DASHBOARD)
        migrated = migrate_dashboard(current)
        before = current.get("roomcraft_layout", {})
        after = migrated["roomcraft_layout"]
        report = {"mode": "dry-run", "before_version": before.get("editableReferenceVersion", 0),
                  "after_version": after["editableReferenceVersion"],
                  "before_items": len(before.get("items", [])), "after_items": len(after["items"])}
        if not args.apply or stable(current) == stable(migrated):
            if args.apply:
                report["mode"] = "already-current"
            print(json.dumps(report, indent=2))
            return 0
        args.backup_dir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S-%f")
        backup = args.backup_dir / f"second-floor-before-reference-v5-{stamp}.json"
        backup.write_text(json.dumps(current, indent=2, ensure_ascii=False), encoding="utf-8")
        if stable(api.call("lovelace/config", url_path=TARGET_DASHBOARD)) != stable(current):
            raise MigrationError("The dashboard changed during migration; nothing was saved.")
        api.call("lovelace/config/save", url_path=TARGET_DASHBOARD, config=migrated)
        verified = api.call("lovelace/config", url_path=TARGET_DASHBOARD)
        if stable(verified) != stable(migrated):
            raise MigrationError("Home Assistant readback did not match the requested migration.")
        report.update(mode="applied-and-verified", backup=str(backup))
        print(json.dumps(report, indent=2))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(run_cli())
    except MigrationError as error:
        print(f"Migration stopped: {error}", file=sys.stderr)
        raise SystemExit(1)
    except Exception as error:
        print(f"Migration failed ({type(error).__name__}); no credentials were logged.", file=sys.stderr)
        raise SystemExit(1)
