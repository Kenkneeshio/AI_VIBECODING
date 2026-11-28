"""Update the saved home lighting and its existing control projection."""
from copy import deepcopy
from datetime import datetime, timezone
import json
from pathlib import Path
import sys

PATH = "roomcraft-home"
LIGHTS = {
    "living-room-lamp": ("Living room ceiling light", 660, 330, 58),
    "fixture-kitchen": ("Kitchen overhead light", 750, 654, 53),
    "kitchen-track-lamp": ("Kitchen rail light", 745, 566, 45),
    "kitchen-counter-lamp": ("Kitchen counter light", 828, 750, 42),
    "hallway-table-lamp": ("Hallway ceiling light", 1000, 520, 42),
    "i-mvwtmugp-1001": ("Dining fan light", 510, 687, 44),
}
REMOVE = {"fixture-living", "fixture-bath-one", "fixture-bath-two"}
TREE = {
    "id": "living-mini-christmas-tree", "type": "miniChristmasTree",
    "name": "Lit mini Christmas tree", "x": 748, "y": 239,
    "w": 37, "h": 37, "rotation": 0,
}


def update(config):
    result = deepcopy(config)
    layout = result["roomcraft_layout"]
    plan = result["roomcraft_plan"]
    items = {item["id"]: item for item in layout["items"]}
    controls = {element["roomcraft_item_id"]: element for element in plan["elements"]
                if element.get("roomcraft_item_id") in LIGHTS}
    for id_, (name, x, y, size) in LIGHTS.items():
        item, control = items[id_], controls[id_]
        if not item.get("entityId") or item["entityId"] != control["entity"]:
            raise ValueError(f"Missing matching control for {id_}")
        style = control["style"]
        for pos, extent, center in (("left", "width", x), ("top", "height", y)):
            axis = "x" if pos == "left" else "y"
            span = "w" if extent == "width" else "h"
            scale = float(style[extent].rstrip("%")) / item[span]
            old = float(style[pos].rstrip("%"))
            style[pos] = f"{old + (center - item[axis]) * scale:.6f}%"
            resized = size * scale
            style[extent] = f"{resized:.6f}%"
        item.update(type="ceilingLight", visualKind="light", name=name,
                    controlLabel=name, x=x, y=y, w=size, h=size, lightForm="bloom_ceiling")
        control.update(title=name, roomcraft_visual_kind="light", roomcraft_light_form="bloom_ceiling")
    layout["items"] = [item for item in layout["items"] if item["id"] not in REMOVE | {TREE["id"]}]
    layout["items"].append(dict(TREE))
    plan["elements"] = [el for el in plan["elements"] if el.get("roomcraft_item_id") not in REMOVE]
    return result


def main():
    manager = Path(sys.argv[1])
    sys.path.insert(0, str(manager))
    import ha_manage
    ha_manage.API_URL = "ws://192.168.68.96:8123/api/websocket"
    with ha_manage.API() as api:
        original = api.call("lovelace/config", url_path=PATH)
        updated = update(original)
        if original == updated:
            print("Layout already matches")
            return
        now = datetime.now(timezone.utc)
        backup = manager / "backups" / f"roomcraft-before-lighting-{now:%Y%m%dT%H%M%SZ}.json"
        backup.write_text(json.dumps(original, indent=2), encoding="utf-8")
        print("Private layout backup:", backup.name)
        previous = {"savedAt": now.isoformat(timespec="milliseconds").replace("+00:00", "Z"),
                    "layout": original["roomcraft_layout"], "plan": original["roomcraft_plan"]}
        updated["roomcraft_snapshots"] = [previous, *original.get("roomcraft_snapshots", [])][:3]
        if api.call("lovelace/config", url_path=PATH) != original:
            raise RuntimeError("Dashboard changed while preparing this edit")
        api.call("lovelace/config/save", url_path=PATH, config=updated)
        if api.call("lovelace/config", url_path=PATH) != updated:
            raise RuntimeError("Dashboard readback differs")
        print("Verified saved layout and control bindings:", len(LIGHTS))


if __name__ == "__main__":
    main()
