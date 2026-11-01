"""Publish the Roomcraft editor into Home Assistant's local dashboard.

This script copies public, credential-free editor assets to /config/www and
registers the Lovelace card and outdoor weather modules. It saves a private dashboard backup before
changing the Studio view. Supply the existing trusted HA management module;
its credentials are never copied into the editor or this repository.
"""

from __future__ import annotations

import argparse
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
DASHBOARD_PATH = "second-floor"


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
    for name in ("editor.html", *RESOURCE_NAMES, "ha-iframe-bridge.js"):
        with urlopen(f"http://{host}:8123/local/roomcraft/{name}", timeout=15) as response:
            if response.status != 200 or not response.read(128):
                raise RuntimeError(f"Home Assistant did not serve {name}")


def update_dashboard(config: dict, version: str) -> dict:
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
    return next_config


def register_resources(api, resources: list[dict], version: str) -> list[str]:
    """Reconcile each Roomcraft module independently and return expected URLs."""
    resource_urls = [f"/local/roomcraft/{name}?v={version}" for name in RESOURCE_NAMES]
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
    args = parser.parse_args()
    if not re.fullmatch(r"[A-Za-z0-9._:-]+", args.host) or not re.fullmatch(r"[A-Za-z0-9_-]+", args.ssh_user):
        parser.error("host or SSH user contains unsupported characters")
    if not args.ssh_key.is_file():
        parser.error("SSH key does not exist")
    if not args.assets_only and (not args.management_root or not args.backup_dir):
        parser.error("dashboard deployment needs --management-root and --backup-dir")

    project = Path(__file__).resolve().parents[1]
    public = project / "public"
    modules = tuple(Path(__file__).resolve().with_name(name) for name in RESOURCE_NAMES)
    if not (public / "editor.html").is_file() or any(not module.is_file() for module in modules):
        raise RuntimeError("Roomcraft editor assets are missing")
    version = source_digest(public, modules)
    copy_assets(args.host, args.ssh_user, args.ssh_key, public, modules)
    print(f"Static editor assets verified at http://{args.host}:8123/local/roomcraft/editor.html")
    if args.assets_only:
        print("Dashboard and resources unchanged (--assets-only).")
        return 0

    sys.path.insert(0, str(args.management_root.resolve()))
    from ha_manage import API  # type: ignore  # user-owned credential adapter

    with API() as api:
        current = api.call("lovelace/config", url_path=DASHBOARD_PATH)
        next_config = update_dashboard(current, version)
        args.backup_dir.mkdir(parents=True, exist_ok=True)
        backup = args.backup_dir / f"second-floor-before-roomcraft-lan-{datetime.now().strftime('%Y%m%d-%H%M%S-%f')}.json"
        backup.write_text(json.dumps(current, indent=2), encoding="utf-8")

        resources = api.call("lovelace/resources")
        resource_urls = register_resources(api, resources, version)

        latest = api.call("lovelace/config", url_path=DASHBOARD_PATH)
        if latest != current:
            raise RuntimeError("Dashboard changed during install; review the backup before retrying")
        if next_config != current:
            api.call("lovelace/config/save", url_path=DASHBOARD_PATH, config=next_config)
        verified = api.call("lovelace/config", url_path=DASHBOARD_PATH)
        if verified != next_config:
            raise RuntimeError("Dashboard save could not be verified")
        verified_resources = api.call("lovelace/resources")
        for resource_url in resource_urls:
            if not any(item.get("url") == resource_url and item.get("type") == "module"
                       for item in verified_resources):
                raise RuntimeError(f"Roomcraft module was not registered: {resource_url}")

    print(f"Private dashboard backup: {backup}")
    print(f"Roomcraft LAN editor: http://{args.host}:8123/second-floor/studio")
    print("HA dashboard and card/weather resources read-back verified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
