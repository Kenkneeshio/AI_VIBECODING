"""Create the standalone Storybook dashboard and optionally promote it for the authenticated user."""

from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import sys
from tempfile import NamedTemporaryFile

DASHBOARD = "roomcraft-home"
SOURCE = "second-floor"
TITLE = "Roomcraft Home"
ICON = "mdi:book-open-variant"
RESOURCE = "/local/roomcraft/roomcraft-storybook.js"
CONFIG = {
    "title": TITLE,
    "views": [{
        "title": "Storybook",
        "path": "home",
        "icon": ICON,
        "type": "panel",
        "cards": [{"type": "custom:roomcraft-storybook-card", "dashboard": SOURCE}],
    }],
}


def dashboard_record(api):
    return next((record for record in api.call("lovelace/dashboards/list")
                 if record.get("url_path") == DASHBOARD), None)


def publish(api, backup_dir: Path, make_default: bool) -> Path:
    source = api.call("lovelace/config", url_path=SOURCE)
    if not source.get("roomcraft_layout") or not any(view.get("path") == "plan" for view in source.get("views", [])):
        raise RuntimeError("The published Roomcraft layout or plan is missing")
    if not any(resource.get("type") == "module" and resource.get("url", "").split("?", 1)[0] == RESOURCE
               for resource in api.call("lovelace/resources")):
        raise RuntimeError("Install the Storybook module before publishing this dashboard")

    existing = dashboard_record(api)
    original = None
    if existing:
        if existing.get("mode") != "storage" or existing.get("title") != TITLE:
            raise RuntimeError("The dashboard URL is already in use")
        try:
            original = api.call("lovelace/config", url_path=DASHBOARD)
        except RuntimeError as error:
            if "config_not_found" not in str(error):
                raise
        if original is not None and original != CONFIG:
            raise RuntimeError("The dashboard has custom edits; review them before replacing it")
    elif make_default:
        raise RuntimeError("Create and inspect the Storybook dashboard before making it the default")

    core = api.call("frontend/get_user_data", key="core").get("value") or {}
    backup_dir.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S-%fZ")
    with NamedTemporaryFile("w", encoding="utf-8", dir=backup_dir, delete=False,
                            prefix=f"roomcraft-home-before-publish-{stamp}-", suffix=".json") as stream:
        json.dump({"dashboard": existing, "config": original, "user_core": core}, stream, indent=2)
        backup = Path(stream.name)

    if not existing:
        api.call("lovelace/dashboards/create", url_path=DASHBOARD, title=TITLE, icon=ICON,
                 require_admin=False, show_in_sidebar=True, mode="storage")
    if original is None:
        api.call("lovelace/config/save", url_path=DASHBOARD, config=CONFIG)
    if not dashboard_record(api) or api.call("lovelace/config", url_path=DASHBOARD) != CONFIG:
        raise RuntimeError("The Storybook dashboard did not verify")

    if make_default:
        latest = api.call("frontend/get_user_data", key="core").get("value") or {}
        if latest != core:
            raise RuntimeError("The user profile changed during publication")
        next_core = {**core, "default_panel": DASHBOARD}
        if next_core != core:
            api.call("frontend/set_user_data", key="core", value=next_core)
        if api.call("frontend/get_user_data", key="core").get("value") != next_core:
            raise RuntimeError("The default dashboard did not verify")
    return backup


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--backup-dir", type=Path, required=True)
    parser.add_argument("--make-default", action="store_true")
    args = parser.parse_args()
    sys.path.insert(0, str(args.management_root.resolve()))
    from ha_manage import API  # type: ignore

    with API() as api:
        backup = publish(api, args.backup_dir, args.make_default)
    print(f"Verified dashboard /{DASHBOARD}/home")
    if args.make_default:
        print("Verified default for the authenticated Home Assistant user.")
    print(f"Private rollback backup: {backup}")


if __name__ == "__main__":
    main()
