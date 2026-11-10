"""Pure checks for the one-time fully editable reference migration."""

from copy import deepcopy
from pathlib import Path
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parent))
from migrate_reference_scene_v5 import REFERENCE_ITEMS, migrate_dashboard, stable


class ReferenceSceneV5Tests(unittest.TestCase):
    def setUp(self):
        self.dashboard = {"views": [], "roomcraft_layout": {
            "version": 2, "editableReferenceVersion": 4,
            "rooms": [], "walls": [], "items": [{"id": "owner-object"}], "hotspots": []}}

    def test_migration_adds_every_item_once_and_is_idempotent(self):
        migrated = migrate_dashboard(self.dashboard)
        self.assertEqual(migrated["roomcraft_layout"]["editableReferenceVersion"], 5)
        self.assertEqual(len(migrated["roomcraft_layout"]["items"]), 1 + len(REFERENCE_ITEMS))
        self.assertEqual(stable(migrate_dashboard(migrated)), stable(migrated))
        self.assertEqual(self.dashboard["roomcraft_layout"]["editableReferenceVersion"], 4)

    def test_a_v5_deletion_is_not_recreated(self):
        migrated = migrate_dashboard(self.dashboard)
        migrated["roomcraft_layout"]["items"] = [item for item in migrated["roomcraft_layout"]["items"]
                                                       if item.get("id") != "rug-living"]
        reopened = migrate_dashboard(deepcopy(migrated))
        self.assertFalse(any(item.get("id") == "rug-living" for item in reopened["roomcraft_layout"]["items"]))

    def test_python_and_browser_migrations_share_the_same_stable_ids(self):
        app = (Path(__file__).resolve().parents[1] / "public" / "app.js").read_text(encoding="utf-8")
        for item in REFERENCE_ITEMS:
            self.assertIn(f"'{item['id']}'", app)


if __name__ == "__main__":
    unittest.main()
