"""Offline contract tests for the private snapshot backfill."""

from copy import deepcopy
from datetime import datetime, timezone
import json
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

import seed_storybook_snapshots as snapshots


IMAGE = "/api/image/serve/" + "a" * 32 + "/original"
ALTERNATE_IMAGE = "/api/image/serve/" + "b" * 32 + "/original"


def dashboard(marker, image=IMAGE):
    return {
        "roomcraft_layout": {"version": 2, "rooms": [], "walls": [], "hotspots": [],
                             "items": [{"id": "fixture", "type": "lamp", "x": marker}]},
        "roomcraft_plan": {"type": "picture-elements", "elements": [], "image": image},
        "views": [{"path": "home"}, {"path": "studio"}],
        "roomcraft_health": {"path": "health"},
    }


def history_marker(snapshot):
    return snapshot["layout"]["items"][0]["x"]


def backup(directory, stamp, config, *, wrapped=False):
    (directory / f"roomcraft-home-before-roomcraft-lan-{stamp}.json").write_text(
        json.dumps({"config": config} if wrapped else config), encoding="utf-8")


class FakeAPI:
    def __init__(self, config):
        self.config = deepcopy(config)
        self.reads = 0
        self.saves = 0
        self.change_on_second_read = False
        self.discard_saves = False

    def call(self, method, *, url_path, **fields):
        assert url_path == snapshots.DASHBOARD_PATH
        if method == "lovelace/config":
            self.reads += 1
            if self.change_on_second_read and self.reads == 2:
                self.config["views"].append({"path": "changed"})
            return deepcopy(self.config)
        assert method == "lovelace/config/save"
        self.saves += 1
        if not self.discard_saves:
            self.config = deepcopy(fields["config"])


class SnapshotSeedTests(unittest.TestCase):
    def test_only_three_distinct_valid_previous_designs_in_descending_backup_order(self):
        current = dashboard(100)
        with TemporaryDirectory() as temp:
            directory = Path(temp).resolve()
            for date, marker, image in (
                ("20261111-100800", 100, ALTERNATE_IMAGE),
                ("20261111-100700", 7, "/local/mutable.png"),
                ("20261111-100600", 6, IMAGE),
                ("20261111-100500", 6, ALTERNATE_IMAGE),
                ("20261111-100400", 4, IMAGE),
                ("20261111-100300", 3, IMAGE),
                ("20261111-100200", 2, IMAGE),
            ):
                backup(directory, date, dashboard(marker, image), wrapped=marker == 6)
            reads = []
            history = snapshots.history_from_backups(current, directory, lambda image: not reads.append(image))
            self.assertEqual([history_marker(entry) for entry in history], [6, 4, 3])
            self.assertEqual(reads, [IMAGE])
            self.assertNotIn(snapshots.HISTORY_KEY, current)

    def test_unavailable_images_and_invalid_files_are_skipped(self):
        with TemporaryDirectory() as temp:
            directory = Path(temp).resolve()
            backup(directory, "20261111-100800", dashboard(8, ALTERNATE_IMAGE))
            backup(directory, "20261111-100700", {"roomcraft_layout": {"version": 1}})
            backup(directory, "20261111-100600", dashboard(6))
            (directory / "roomcraft-home-20261111-100900.json").write_text("{", encoding="utf-8")
            (directory / "second-floor-20261111-101000.json").write_text(json.dumps(dashboard(10)), encoding="utf-8")
            history = snapshots.history_from_backups(dashboard(100), directory, lambda image: image == IMAGE)
            self.assertEqual([history_marker(entry) for entry in history], [6])

    def test_existing_history_is_kept_and_duplicate_candidate_is_ignored(self):
        current = dashboard(100)
        old = dashboard(8, ALTERNATE_IMAGE)
        existing = {"savedAt": "2026-11-11T16:00:00Z", "layout": old["roomcraft_layout"], "plan": old["roomcraft_plan"]}
        current[snapshots.HISTORY_KEY] = [existing]
        with TemporaryDirectory() as temp:
            directory = Path(temp).resolve()
            backup(directory, "20261111-100800", dashboard(8))
            backup(directory, "20261111-100700", dashboard(7))
            history = snapshots.history_from_backups(current, directory, lambda _: True)
            self.assertEqual(history[0], existing)
            self.assertEqual([history_marker(entry) for entry in history], [8, 7])
            self.assertEqual(current[snapshots.HISTORY_KEY], [existing])

    def test_dry_run_does_not_write_apply_preserves_config_and_retry_is_idempotent(self):
        current = dashboard(100)
        with TemporaryDirectory() as temp:
            directory = Path(temp).resolve()
            backup(directory, "20261111-100800", dashboard(8))
            api = FakeAPI(current)
            self.assertEqual(snapshots.seed(api, directory, lambda _: True), (1, 1, None))
            self.assertEqual(api.saves, 0)
            self.assertEqual(len(list(directory.glob("*.json"))), 1)
            added, count, previous = snapshots.seed(api, directory, lambda _: True, apply=True)
            self.assertEqual((added, count, api.saves), (1, 1, 1))
            self.assertEqual(snapshots.read_json(previous), current)
            self.assertEqual({key: api.config[key] for key in current}, current)
            self.assertEqual(snapshots.seed(api, directory, lambda _: True, apply=True), (0, 1, None))
            self.assertEqual(api.saves, 1)

    def test_apply_refuses_stale_read_and_detects_failed_save_readback(self):
        for stale in (True, False):
            with self.subTest(stale=stale), TemporaryDirectory() as temp:
                directory = Path(temp).resolve()
                backup(directory, "20261111-100800", dashboard(8))
                api = FakeAPI(dashboard(100))
                api.change_on_second_read = stale
                api.discard_saves = not stale
                message = "changed" if stale else "could not be verified"
                with self.assertRaisesRegex(RuntimeError, message):
                    snapshots.seed(api, directory, lambda _: True, apply=True)
                self.assertEqual(api.saves, 0 if stale else 1)
                self.assertEqual(len(list(directory.glob("roomcraft-home-before-snapshot-seed-*.json"))), 1)

    def test_utc_filename_and_timestamp_validation(self):
        path = Path("roomcraft-home-before-publish-20261111T001206-032257Z-gem4r_0p.json")
        stamp = snapshots.backup_time(path)
        self.assertEqual(stamp, datetime(2026, 11, 11, 0, 12, 6, 32257, tzinfo=timezone.utc))
        self.assertEqual(snapshots.utc_stamp(stamp), "2026-11-11T00:12:06.032Z")
        self.assertTrue(snapshots.valid_timestamp(snapshots.utc_stamp(stamp)))
        self.assertFalse(snapshots.valid_timestamp("2026-02-30T00:12:06Z"))
        self.assertIsNone(snapshots.backup_time(Path("roomcraft-home-20261131-000000.json")))


if __name__ == "__main__":
    unittest.main()
