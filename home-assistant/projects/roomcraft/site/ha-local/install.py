"""Publish the Roomcraft editor into Home Assistant's local dashboard.

This script copies public, credential-free editor assets to /config/www and
registers the Lovelace card and outdoor weather modules. It saves a private dashboard backup before
changing the Studio view. Supply the existing trusted HA management module;
its credentials are never copied into the editor or this repository.
"""

from __future__ import annotations

import argparse
from copy import deepcopy
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys
from datetime import datetime
from urllib.request import urlopen

REMOTE_STATIC = "/config/www/roomcraft"
RESOURCE_NAMES = ("roomcraft-card.js", "roomcraft-weather-outdoor.js")
STORYBOOK_RESOURCE = "roomcraft-storybook.js"
DASHBOARD_PATH = "second-floor"
HOME_DASHBOARD_PATH = "roomcraft-home"


def run(*args: str) -> None:
    subprocess.run(args, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)


def source_digest(public: Path, modules: tuple[Path, ...]) -> str:
    digest = hashlib.sha256()
    for path in [*modules, *sorted(path for path in public.rglob("*") if path.is_file())]:
        digest.update(path.relative_to(public.parent).as_posix().encode())
        with path.open("rb") as stream:
            while chunk := stream.read(1024 * 1024):
                digest.update(chunk)
    return digest.hexdigest()[:16]


def copy_assets(host: str, user: str, key: Path, public: Path, modules: tuple[Path, ...]) -> None:
    target = f"{user}@{host}"
    ssh_options = ["-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes", "-o", "ConnectTimeout=10", "-i", str(key)]
    run("ssh", *ssh_options, target, f"mkdir -p {REMOTE_STATIC}")
    for path in sorted(public.iterdir()):
        run("scp", "-r", *ssh_options, str(path), f"{target}:{REMOTE_STATIC}/")
    for module in modules:
        run("scp", *ssh_options, str(module), f"{target}:{REMOTE_STATIC}/{module.name}")
    entrypoints = ("editor.html", "ha-iframe-bridge.js", "app.js", "storybook-editor.js")
    for asset in (*(public / name for name in entrypoints), *modules):
        with urlopen(f"http://{host}:8123/local/roomcraft/{asset.name}", timeout=15) as response:
            if response.status != 200 or response.read() != asset.read_bytes():
                raise RuntimeError(f"Home Assistant served unexpected bytes for {asset.name}")


def update_dashboard(config: dict, version: str, storybook: bool = False) -> dict:
    next_config = json.loads(json.dumps(config))
    views = next_config.get("views")
    if not isinstance(views, list):
        raise RuntimeError("Dashboard views are missing")
    studio = next((view for view in views if view.get("path") == "studio"), None)
    plan = next((view for view in views if view.get("path") == "plan"), None)
    if not isinstance(studio, dict) or not isinstance(plan, dict):
        raise RuntimeError("The Second Floor plan or Studio view is missing")
    studio["type"] = "panel"
    studio["cards"] = [{"type": "custom:roomcraft-editor-card", "asset_version": version}]

    picture = next((card for card in plan.get("cards", []) if card.get("type") == "picture-elements"), None)
    if not isinstance(picture, dict):
        raise RuntimeError("The Second Floor picture card is missing")
    edit_icon = next((element for element in picture.get("elements", [])
                      if element.get("title") == "Edit layout in Roomcraft" and element.get("type") == "icon"), None)
    if not isinstance(edit_icon, dict):
        raise RuntimeError("The Roomcraft edit icon is missing")
    edit_icon["tap_action"] = {"action": "navigate", "navigation_path": "/second-floor/studio"}
    if storybook:
        storybook_view = {
            "title": "Storybook", "path": "storybook", "icon": "mdi:book-open-variant",
            "type": "panel",
            "cards": [{"type": "custom:roomcraft-storybook-card", "dashboard": DASHBOARD_PATH}],
        }
        existing_storybook = next((view for view in views if view.get("path") == "storybook"), None)
        if existing_storybook is None:
            views.append(storybook_view)
        elif existing_storybook != storybook_view:
            raise RuntimeError("The storybook path already contains a different view")
    return next_config


def update_roomcraft_home(home: dict, version: str, legacy: dict | None = None) -> dict:
    """Keep one published layout and projection behind two Roomcraft views."""
    next_config = deepcopy(home)
    views = next_config.get("views", [])
    if not isinstance(views, list) or any(not isinstance(view, dict) or
                                         view.get("path") not in ("home", "studio") for view in views):
        raise RuntimeError("Roomcraft Home contains an unexpected view")
    if len({view["path"] for view in views}) != len(views):
        raise RuntimeError("Roomcraft Home contains an unexpected view")
    live = next((view for view in views if view.get("path") == "home"), None)
    if live is None or len(live.get("cards", [])) != 1 or live["cards"][0].get("type") != "custom:roomcraft-storybook-card":
        raise RuntimeError("Roomcraft Home is missing its live card")

    if legacy is not None:
        legacy_views = {view.get("path"): view for view in legacy.get("views", [])}
        plan = next((card for card in legacy_views.get("plan", {}).get("cards", [])
                     if card.get("type") == "picture-elements"), None)
        if plan is None or not isinstance(legacy.get("roomcraft_layout"), dict):
            raise RuntimeError("The legacy Roomcraft layout or control projection is missing")
        next_config["roomcraft_layout"] = deepcopy(legacy["roomcraft_layout"])
        next_config["roomcraft_plan"] = deepcopy(plan)
        if "health" in legacy_views:
            next_config["roomcraft_health"] = deepcopy(legacy_views["health"])

    plan = next_config.get("roomcraft_plan")
    layout = next_config.get("roomcraft_layout")
    if not (isinstance(plan, dict) and plan.get("type") == "picture-elements" and
            isinstance(plan.get("elements"), list) and isinstance(layout, dict) and layout.get("version") == 2):
        raise RuntimeError("Roomcraft Home has no valid saved layout and control projection")
    studio = next((view for view in views if view.get("path") == "studio"), None)
    if studio is None:
        studio = {"title": "Studio", "path": "studio", "icon": "mdi:pencil-ruler"}
    studio["type"] = "panel"
    studio["cards"] = [{"type": "custom:roomcraft-editor-card",
                        "dashboard": HOME_DASHBOARD_PATH, "asset_version": version}]
    live["title"] = "Home"
    live["cards"][0]["dashboard"] = HOME_DASHBOARD_PATH
    next_config["views"] = [live, studio]
    return next_config


def register_resources(api, resources: list[dict], version: str,
                       names: tuple[str, ...] = RESOURCE_NAMES) -> list[str]:
    """Reconcile each Roomcraft module independently and return expected URLs."""
    resource_urls = [f"/local/roomcraft/{name}?v={version}" for name in names]
    for resource_url in resource_urls:
        resource_path = resource_url.split("?", 1)[0]
        existing = next((item for item in resources
                         if item.get("url", "").split("?", 1)[0] == resource_path), None)
        if existing:
            if existing.get("url") != resource_url or existing.get("type") != "module":
                api.call("lovelace/resources/update", resource_id=existing["id"],
                         url=resource_url, res_type="module")
        else:
            api.call("lovelace/resources/create", url=resource_url, res_type="module")
    return resource_urls


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", required=True, help="Home Assistant LAN IP or hostname")
    parser.add_argument("--ssh-user", default="root")
    parser.add_argument("--ssh-key", type=Path, required=True)
    parser.add_argument("--management-root", type=Path, help="Directory with private ha_manage.py API adapter")
    parser.add_argument("--backup-dir", type=Path, help="Private backup directory outside this source checkout")
    parser.add_argument("--assets-only", action="store_true", help="Copy/verify assets without changing HA config")
    parser.add_argument("--storybook", action="store_true", help="Enable the opt-in Storybook panel from the built 3D bundle")
    parser.add_argument("--consolidate", action="store_true",
                        help="Move the legacy layout to Roomcraft Home and add its Studio view")
    args = parser.parse_args()
    if not re.fullmatch(r"[A-Za-z0-9._:-]+", args.host) or not re.fullmatch(r"[A-Za-z0-9_-]+", args.ssh_user):
        parser.error("host or SSH user contains unsupported characters")
    if not args.ssh_key.is_file():
        parser.error("SSH key does not exist")
    if not args.assets_only and (not args.management_root or not args.backup_dir):
        parser.error("dashboard deployment needs --management-root and --backup-dir")
    if args.consolidate and (not args.storybook or args.assets_only):
        parser.error("--consolidate requires --storybook and dashboard deployment")

    project = Path(__file__).resolve().parents[1]
    public = project / "public"
    modules = (project / "dist" / "ha-local" / RESOURCE_NAMES[0],
               project / "ha-local" / RESOURCE_NAMES[1])
    if args.storybook:
        modules += (project / "dist" / "ha-local" / STORYBOOK_RESOURCE,)
    if not (public / "editor.html").is_file() or any(not module.is_file() for module in modules):
        raise RuntimeError("Roomcraft assets are missing. Run npm run build before installing.")
    version = source_digest(public, modules)
    if args.assets_only:
        copy_assets(args.host, args.ssh_user, args.ssh_key, public, modules)
        print(f"Static editor assets verified at http://{args.host}:8123/local/roomcraft/editor.html")
        print("Dashboard and resources unchanged (--assets-only).")
        return 0

    sys.path.insert(0, str(args.management_root.resolve()))
    from ha_manage import API  # type: ignore  # user-owned credential adapter

    with API() as api:
        records = {record["url_path"]: record for record in api.call("lovelace/dashboards/list")}
        home = (api.call("lovelace/config", url_path=HOME_DASHBOARD_PATH)
                if HOME_DASHBOARD_PATH in records else None)
        if args.consolidate and home is None:
            raise RuntimeError("Create the Roomcraft Home dashboard before consolidation")
        has_home_store = home is not None and ("roomcraft_plan" in home or "roomcraft_layout" in home)
        use_home = home is not None and (args.consolidate or has_home_store)
        if use_home and not args.storybook:
            raise RuntimeError("Installing consolidated Roomcraft Home requires --storybook")
        dashboard_path = HOME_DASHBOARD_PATH if use_home else DASHBOARD_PATH
        current = home if use_home else api.call("lovelace/config", url_path=dashboard_path)
        legacy = (api.call("lovelace/config", url_path=DASHBOARD_PATH)
                  if use_home and not has_home_store else None)
        next_config = (update_roomcraft_home(current, version, legacy) if use_home
                       else update_dashboard(current, version, args.storybook))
        args.backup_dir.mkdir(parents=True, exist_ok=True)
        stamp = datetime.now().strftime('%Y%m%d-%H%M%S-%f')
        backup = args.backup_dir / f"{dashboard_path}-before-roomcraft-lan-{stamp}.json"
        archive = current
        if legacy is not None:
            backup = args.backup_dir / f"roomcraft-home-before-consolidation-{stamp}.json"
            archive = {
                "dashboard": records[dashboard_path], "config": current,
                "legacy": {"dashboard": records[DASHBOARD_PATH], "config": legacy},
            }
        backup.write_text(json.dumps(archive, indent=2), encoding="utf-8")
        if json.loads(backup.read_text(encoding="utf-8")) != archive:
            raise RuntimeError("Private dashboard backup could not be verified")

        copy_assets(args.host, args.ssh_user, args.ssh_key, public, modules)
        latest = api.call("lovelace/config", url_path=dashboard_path)
        if latest != current:
            raise RuntimeError("Dashboard changed during install; review the backup before retrying")
        if legacy is not None and api.call("lovelace/config", url_path=DASHBOARD_PATH) != legacy:
            raise RuntimeError("The legacy layout changed during consolidation; retry with its latest version")
        if next_config != current:
            api.call("lovelace/config/save", url_path=dashboard_path, config=next_config)
        verified = api.call("lovelace/config", url_path=dashboard_path)
        if verified != next_config:
            raise RuntimeError("Dashboard save could not be verified")
        resources = api.call("lovelace/resources")
        resource_urls = register_resources(api, resources, version, tuple(module.name for module in modules))
        verified_resources = api.call("lovelace/resources")
        for resource_url in resource_urls:
            if not any(item.get("url") == resource_url and item.get("type") == "module"
                       for item in verified_resources):
                raise RuntimeError(f"Roomcraft module was not registered: {resource_url}")

    print(f"Private dashboard backup: {backup}")
    print(f"Roomcraft LAN editor: http://{args.host}:8123/{dashboard_path}/studio")
    if args.storybook:
        live_view = "home" if use_home else "storybook"
        print(f"Roomcraft live view: http://{args.host}:8123/{dashboard_path}/{live_view}")
    print("HA dashboard and card/weather resources read-back verified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
