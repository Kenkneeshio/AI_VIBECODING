"""Name the live dashboards and clone the conventional controls without changing defaults.

Run with --apply after inspecting the plan. Backups stay outside the repository.
"""

from __future__ import annotations

import argparse
from copy import deepcopy
from datetime import datetime, timezone
import json
from pathlib import Path
import sys

SOURCE = "dashboard-dashboard"
COPY = "cell-dash"
HOME = "roomcraft-home"
TITLES = {SOURCE: "Reference Dash", COPY: "Cell Dash", HOME: "Home Dash"}


def rows(api):
    return {item["url_path"]: item for item in api.call("lovelace/dashboards/list")}


def snapshot(api):
    current = rows(api)
    for path in (SOURCE, HOME):
        if path not in current or current[path]["mode"] != "storage":
            raise RuntimeError(f"Expected storage dashboard: {path}")
    if COPY in current and current[COPY]["mode"] != "storage":
        raise RuntimeError("Cell Dash path is already used by a non-storage dashboard")
    configs = {path: api.call("lovelace/config", url_path=path)
               for path in (SOURCE, HOME, *( (COPY,) if COPY in current else () ))}
    if COPY in configs and configs[COPY] != configs[SOURCE]:
        raise RuntimeError("Existing Cell Dash differs from Reference Dash; review before replacing it")
    return {"rows": current, "configs": configs}


def apply(api, backup_dir: Path):
    before = snapshot(api)
    backup_dir.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S-%fZ")
    backup = backup_dir / f"dashboard-names-before-{stamp}.json"
    backup.write_text(json.dumps(before, indent=2), encoding="utf-8")
    if json.loads(backup.read_text(encoding="utf-8")) != before:
        raise RuntimeError("Dashboard backup did not verify")
    if snapshot(api) != before:
        raise RuntimeError("Dashboards changed after backup")

    if COPY not in before["rows"]:
        api.call("lovelace/dashboards/create", url_path=COPY, title=TITLES[COPY],
                 icon="mdi:cellphone", require_admin=False, show_in_sidebar=True,
                 mode="storage")
        api.call("lovelace/config/save", url_path=COPY,
                 config=deepcopy(before["configs"][SOURCE]))
    for path in (SOURCE, HOME):
        record = rows(api)[path]
        if record["title"] != TITLES[path]:
            api.call("lovelace/dashboards/update", dashboard_id=record["id"],
                     title=TITLES[path])
    home = api.call("lovelace/config", url_path=HOME)
    if home.get("title") != TITLES[HOME]:
        updated = {**home, "title": TITLES[HOME]}
        api.call("lovelace/config/save", url_path=HOME, config=updated)

    after = snapshot(api)
    if any(after["rows"][path]["title"] != title for path, title in TITLES.items()):
        raise RuntimeError("Dashboard title readback failed")
    if after["configs"][COPY] != before["configs"][SOURCE]:
        raise RuntimeError("Cell Dash content readback differs from Reference Dash")
    if after["configs"][SOURCE] != before["configs"][SOURCE]:
        raise RuntimeError("Reference Dash content changed")
    if after["configs"][HOME] != {**before["configs"][HOME], "title": TITLES[HOME]}:
        raise RuntimeError("Home Dash content changed beyond its title")
    return backup


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--backup-dir", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    sys.path.insert(0, str(args.management_root.resolve()))
    from ha_manage import API  # type: ignore
    with API() as api:
        before = snapshot(api)
        print(json.dumps({"current": {path: before["rows"].get(path, {}).get("title")
                                      for path in TITLES}, "target": TITLES}, indent=2))
        if args.apply:
            print("Private rollback backup:", apply(api, args.backup_dir))
            print("All titles and copied content verified by authenticated readback.")


if __name__ == "__main__":
    main()
