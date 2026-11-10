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
            "rooms": [], "walls": [], "items": [
                {"id": "owner-object"},
                {"id": "fan", "type": "fans-fan-light-white", "name": "Dining ceiling fan", "x": 445, "y": 682},
                {"id": "fan-light", "type": "controlZone", "name": "Dining fan light", "x": 445, "y": 682},
                {"id": "garage", "type": "garageDoor", "name": "Garage door", "x": 306, "y": 106,
                 "w": 116, "h": 52, "rotation": 0}], "hotspots": []}}

    def test_migration_adds_every_item_once_and_is_idempotent(self):
        migrated = migrate_dashboard(self.dashboard)
        self.assertEqual(migrated["roomcraft_layout"]["editableReferenceVersion"], 6)
        self.assertEqual(len(migrated["roomcraft_layout"]["items"]), 4 + len(REFERENCE_ITEMS))
        by_id = {item["id"]: item for item in migrated["roomcraft_layout"]["items"]}
        self.assertEqual(by_id["fan"]["type"], "fans-five-blade-fan-white")
        self.assertEqual(by_id["fan-light"]["type"], "ceilingLight")
        self.assertEqual((by_id["garage"]["w"], by_id["garage"]["h"]), (132, 92))
        self.assertEqual(stable(migrate_dashboard(migrated)), stable(migrated))
        self.assertEqual(self.dashboard["roomcraft_layout"]["editableReferenceVersion"], 4)

    def test_a_v5_deletion_is_not_recreated(self):
        self.dashboard["roomcraft_layout"]["editableReferenceVersion"] = 5
        migrated = migrate_dashboard(self.dashboard)
        added = {item["id"] for item in migrated["roomcraft_layout"]["items"]} - {
            item["id"] for item in self.dashboard["roomcraft_layout"]["items"]
        }
        self.assertEqual(added, {"living-wall-unit"})

    def test_a_v6_deletion_is_not_recreated(self):
        migrated = migrate_dashboard(self.dashboard)
        migrated["roomcraft_layout"]["items"] = [item for item in migrated["roomcraft_layout"]["items"]
                                                       if item.get("id") != "living-wall-unit"]
        reopened = migrate_dashboard(deepcopy(migrated))
        self.assertFalse(any(item.get("id") == "living-wall-unit" for item in reopened["roomcraft_layout"]["items"]))

    def test_python_and_browser_migrations_share_the_same_stable_ids(self):
        app = (Path(__file__).resolve().parents[1] / "public" / "app.js").read_text(encoding="utf-8")
        for item in REFERENCE_ITEMS:
            self.assertIn(f"'{item['id']}'", app)


if __name__ == "__main__":
    unittest.main()
