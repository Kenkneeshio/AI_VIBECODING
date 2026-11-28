"""Apply the editable balcony, kitchen and climate recipe to this Home Dash."""

import argparse
from copy import deepcopy
from datetime import datetime, timezone
import json
from pathlib import Path
import subprocess
import sys

HERE = Path(__file__).resolve().parent
DASHBOARD = "roomcraft-home"


def furnish(current, recipe, saved_at):
    next_config = deepcopy(current)
    layout = next_config["roomcraft_layout"]
    if layout["version"] != 2:
        raise ValueError("This recipe requires the current Roomcraft layout format.")
    items = {item["id"]: item for item in layout["items"]}
    if all(item["id"] in items for item in recipe["items"]):
        return current
    if any(item["id"] in items for item in recipe["items"]):
        raise ValueError("The recipe is partly applied. Review the layout in Studio.")
    counter = items["i8"]
    if (counter["type"], counter["x"], counter["y"], counter["h"]) != ("counter", 825, 671, 244):
        raise ValueError("The kitchen counter has moved. Review refrigerator clearance in Studio.")
    for item_id, changes in recipe["resize"].items():
        items[item_id].update(changes)
    layout["items"].extend(recipe["items"])
    # Reuse Studio's snapshot contract. Pass the private config on stdin.
    result = subprocess.run(
        ["node", "--input-type=module", "-e", """
import {readFileSync} from 'node:fs';
import {keepPreviousDashboardDesign} from './dashboard-snapshots.mjs';
const [current, next, timestamp] = JSON.parse(readFileSync(0, 'utf8'));
process.stdout.write(JSON.stringify(keepPreviousDashboardDesign(current, next, timestamp)));
"""], cwd=HERE, input=json.dumps([current, next_config, saved_at]),
        capture_output=True, text=True, check=True,
    )
    return json.loads(result.stdout)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--backup-dir", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    sys.path.insert(0, str(args.management_root.resolve()))
    import ha_manage as ha

    recipe = json.loads((HERE / "climate-furnishings.json").read_text(encoding="utf-8"))
    ha.API_URL = f"ws://{ha.HOST}:8123/api/websocket"
    with ha.API() as api:
        current = api.call("lovelace/config", url_path=DASHBOARD)
        timestamp = datetime.now(timezone.utc)
        next_config = furnish(current, recipe, timestamp.isoformat(timespec="milliseconds").replace("+00:00", "Z"))
        if current == next_config:
            print("Furnishings are already present.")
            return
        if not args.apply:
            print(f"Ready to place {len(recipe['items'])} new objects.")
            return
        args.backup_dir.mkdir(parents=True, exist_ok=True)
        backup = args.backup_dir / f"roomcraft-before-climate-furnishings-{timestamp:%Y%m%d-%H%M%S-%f}.json"
        backup.write_text(json.dumps(current), encoding="utf-8")
        print(f"Backup: {backup}", flush=True)
        if api.call("lovelace/config", url_path=DASHBOARD) != current:
            raise RuntimeError("The dashboard changed. Retry against the latest layout.")
        api.call("lovelace/config/save", url_path=DASHBOARD, config=next_config)
        if api.call("lovelace/config", url_path=DASHBOARD) != next_config:
            raise RuntimeError("The published layout differs from the expected readback.")
        print(f"Published and verified {len(recipe['items'])} new objects.")


if __name__ == "__main__":
    main()
