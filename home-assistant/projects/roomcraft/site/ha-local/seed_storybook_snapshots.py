"""Seed Roomcraft Home's three-slot history from private dashboard backups."""

from __future__ import annotations

import argparse
from collections.abc import Callable
from datetime import datetime, timezone
import json
from pathlib import Path
import re
import sys
from tempfile import NamedTemporaryFile
from urllib.parse import urlsplit
from urllib.request import urlopen


DASHBOARD_PATH = "roomcraft-home"
HISTORY_KEY = "roomcraft_snapshots"
HISTORY_LIMIT = 3
IMAGE_PATH = re.compile(r"/api/image/serve/[a-f0-9]{32}/original")
UTC_TIMESTAMP = re.compile(r"[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]{3})?Z")
BACKUP_NAME = re.compile(
    r"roomcraft-home-(?:before-[a-z-]+-)?([0-9]{8})[T-]([0-9]{6})(?:-([0-9]{6}))?(Z)?"
    r"(?:-[a-zA-Z0-9_-]+)?\.json"
)
PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"


class SnapshotSeedError(RuntimeError):
    """A seed failure message that is safe to show without private configuration."""


def backup_time(path: Path) -> datetime | None:
    match = BACKUP_NAME.fullmatch(path.name)
    if not match:
        return None
    date, time, micros, utc = match.groups()
    try:
        timestamp = datetime.strptime(date + time, "%Y%m%d%H%M%S").replace(microsecond=int(micros or 0))
    except ValueError:
        return None
    if utc:
        timestamp = timestamp.replace(tzinfo=timezone.utc)
    return timestamp.astimezone(timezone.utc)


def utc_stamp(timestamp: datetime) -> str:
    return timestamp.isoformat(timespec="milliseconds").replace("+00:00", "Z")


def valid_timestamp(value: object) -> bool:
    if not isinstance(value, str) or not UTC_TIMESTAMP.fullmatch(value):
        return False
    try:
        datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return True


def design(layout: object, plan: object) -> str | None:
    """The authored design and control projection, ignoring the PNG upload ID."""
    def object_list(value: object) -> bool:
        return isinstance(value, list) and all(isinstance(entry, dict) for entry in value)

    if not (isinstance(layout, dict) and layout.get("version") == 2
            and all(object_list(layout.get(field)) for field in ("rooms", "walls", "items", "hotspots"))
            and isinstance(plan, dict) and plan.get("type") == "picture-elements"
            and object_list(plan.get("elements")) and isinstance(plan.get("image"), str)
            and IMAGE_PATH.fullmatch(plan["image"])):
        return None
    try:
        return json.dumps([layout, {key: value for key, value in plan.items() if key != "image"}],
                          sort_keys=True, separators=(",", ":"), allow_nan=False)
    except (TypeError, ValueError):
        return None


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8-sig"))


def image_is_available(origin: str, image: str) -> bool:
    """Read only the signature of an existing HA image, using its immutable upload URL."""
    if not IMAGE_PATH.fullmatch(image):
        return False
    url = origin + image
    try:
        with urlopen(url, timeout=12) as response:
            return (response.geturl() == url and response.status == 200
                    and response.headers.get_content_type() == "image/png"
                    and response.read(len(PNG_SIGNATURE)) == PNG_SIGNATURE)
    except OSError:
        return False


def history_from_backups(current: dict, directory: Path, image_available: Callable[[str], bool]) -> list[dict]:
    current_design = design(current.get("roomcraft_layout"), current.get("roomcraft_plan"))
    if current_design is None:
        raise SnapshotSeedError("The active dashboard has no supported Roomcraft design.")
    previous = current.get(HISTORY_KEY, [])
    if not isinstance(previous, list) or len(previous) > HISTORY_LIMIT:
        raise SnapshotSeedError("The stored Roomcraft snapshot list is malformed.")
    history = list(previous)
    known = {current_design}
    for snapshot in history:
        key = design(snapshot.get("layout"), snapshot.get("plan")) if isinstance(snapshot, dict) else None
        if key is None or not valid_timestamp(snapshot.get("savedAt")) or key in known:
            raise SnapshotSeedError("The stored Roomcraft snapshots are malformed or duplicated.")
        known.add(key)
    if len(history) == HISTORY_LIMIT:
        return history

    candidates = []
    for path in directory.glob("roomcraft-home-*.json"):
        stamp = backup_time(path)
        if stamp is not None and path.is_file() and not path.is_symlink() and path.resolve().parent == directory:
            candidates.append((stamp, path))
    candidates.sort(key=lambda pair: (pair[0], pair[1].name), reverse=True)
    checked_images = {}
    for stamp, path in candidates:
        try:
            record = read_json(path)
        except (OSError, ValueError):
            continue
        if not isinstance(record, dict):
            continue
        config = record.get("config", record)
        if not isinstance(config, dict):
            continue
        layout, plan = config.get("roomcraft_layout"), config.get("roomcraft_plan")
        key = design(layout, plan)
        if key is None or key in known:
            continue
        image = plan["image"]
        if image not in checked_images:
            checked_images[image] = image_available(image)
        if not checked_images[image]:
            continue
        history.append({"savedAt": utc_stamp(stamp), "layout": layout, "plan": plan})
        known.add(key)
        if len(history) == HISTORY_LIMIT:
            break
    return history


def write_private_backup(directory: Path, config: dict) -> Path:
    timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S-%fZ")
    with NamedTemporaryFile(mode="w", encoding="utf-8", delete=False, dir=directory,
                            prefix=f"roomcraft-home-before-snapshot-seed-{timestamp}-", suffix=".json") as stream:
        json.dump(config, stream, ensure_ascii=False, allow_nan=False)
        backup = Path(stream.name)
    if read_json(backup) != config:
        raise SnapshotSeedError("The private pre-seed backup could not be verified.")
    return backup


def seed(api, directory: Path, image_available: Callable[[str], bool], *,
         apply: bool = False) -> tuple[int, int, Path | None]:
    current = api.call("lovelace/config", url_path=DASHBOARD_PATH)
    if not isinstance(current, dict):
        raise SnapshotSeedError("Home Assistant returned an invalid dashboard.")
    history = history_from_backups(current, directory, image_available)
    added = len(history) - len(current.get(HISTORY_KEY, []))
    if not apply or not added:
        return added, len(history), None
    backup = write_private_backup(directory, current)
    if api.call("lovelace/config", url_path=DASHBOARD_PATH) != current:
        raise SnapshotSeedError("The dashboard changed during snapshot preparation. Run the seed again.")
    next_config = {**current, HISTORY_KEY: history}
    api.call("lovelace/config/save", url_path=DASHBOARD_PATH, config=next_config)
    if api.call("lovelace/config", url_path=DASHBOARD_PATH) != next_config:
        raise SnapshotSeedError("Snapshot save could not be verified. Review the private pre-seed backup.")
    return added, len(history), backup


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--management-root", type=Path, required=True, help="Private HA management directory")
    parser.add_argument("--backup-dir", type=Path, help="Backup directory inside the private management directory")
    parser.add_argument("--ha-origin", help="Home Assistant HTTP(S) origin for checking existing images")
    parser.add_argument("--apply", action="store_true", help="Back up and save the prepared snapshot list")
    args = parser.parse_args()
    root = args.management_root.resolve()
    directory = (args.backup_dir or root / "backups").resolve()
    script = Path(__file__).resolve()
    source_root = next((parent for parent in script.parents if (parent / ".git").exists()), script.parents[1])
    if not directory.is_dir() or not directory.is_relative_to(root) or directory.is_relative_to(source_root):
        parser.error("Use a backup directory inside the private management directory and outside Git.")
    if not (root / "ha_manage.py").is_file():
        parser.error("The trusted Home Assistant management adapter is missing.")
    sys.path.insert(0, str(root))
    from ha_manage import API, API_URL  # User-owned authenticated adapter.

    parsed = urlsplit(args.ha_origin or API_URL)
    scheme = {"ws": "http", "wss": "https"}.get(parsed.scheme, parsed.scheme)
    if scheme not in ("http", "https") or not parsed.hostname or parsed.username or parsed.password:
        parser.error("Use a Home Assistant HTTP(S) origin without credentials.")
    if args.ha_origin and (parsed.path not in ("", "/") or parsed.query or parsed.fragment):
        parser.error("Use a Home Assistant HTTP(S) origin without a path, query or fragment.")
    origin = f"{scheme}://{parsed.netloc}"
    try:
        with API() as api:
            added, count, backup = seed(api, directory, lambda image: image_is_available(origin, image),
                                        apply=args.apply)
    except SnapshotSeedError as error:
        print(error, file=sys.stderr)
        return 1
    except (OSError, RuntimeError, ValueError):
        print("Snapshot seed did not complete. Check the private pre-seed backup directory and current HA config.",
              file=sys.stderr)
        return 1
    if backup is not None:
        print(f"Saved and verified {added} previous designs. Total snapshots: {count}.")
        print(f"Private pre-seed backup: {backup}")
    else:
        print(f"Found {added} new previous designs. Total eligible snapshots: {count}. No dashboard write.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
