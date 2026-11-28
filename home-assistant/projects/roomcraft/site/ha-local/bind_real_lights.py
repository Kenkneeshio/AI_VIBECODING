"""Bind the actual Christmas tree and remove the three unbound fixtures."""
from copy import deepcopy
from update_house_lighting import main, TREE


def update(config):
    result = deepcopy(config)
    items = result["roomcraft_layout"]["items"]
    elements = result["roomcraft_plan"]["elements"]
    remove = {"fixture-bedroom", "fixture-closet", "roomcraft-i-000002-f21ffe38dba2"}
    items[:] = [i for i in items if i["id"] not in remove]
    elements[:] = [e for e in elements if e.get("roomcraft_item_id") not in remove | {TREE["id"]}]
    tree = next(i for i in items if i["id"] == TREE["id"])
    ceiling = next(i for i in items if i["id"] == "living-room-lamp")
    tree.update(entityId="switch.xmas_tree", visualKind="light", tapAction="toggle", name="Christmas tree")
    source = next(e for e in elements if e.get("roomcraft_item_id") == ceiling["id"])
    style = deepcopy(source["style"])
    for pos, size, axis, dimension in (("left","width","x","w"),("top","height","y","h")):
        scale = float(style[size].rstrip("%")) / ceiling[dimension]
        center = float(style[pos].rstrip("%")) + (tree[axis] - ceiling[axis]) * scale
        style[pos] = f"{center:.6f}%"
        style[size] = f"{tree[dimension] * scale:.6f}%"
    elements.append(dict(type="custom:roomcraft-object-control", roomcraft_item_id=tree["id"],
                         entity=tree["entityId"], title=tree["name"], roomcraft_visual_kind="light",
                         roomcraft_tap_action="toggle", roomcraft_hold_action="auto", style=style))
    return result


if __name__ == "__main__":
    main(update)
