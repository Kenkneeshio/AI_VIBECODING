"""Pure migration checks; no Home Assistant connection or media access."""

from copy import deepcopy
from pathlib import Path
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parent))
from migrate_interactive_plan import MigrationError, migrate_dashboard, summarize


def current_dashboard():
    return {
        "views": [
            {"path": "plan", "cards": [{"type": "picture-elements", "image": "/plan.png", "elements": [
                {"type": "state-icon", "entity": "cover.blinds_sofa_2"},
                {"type": "state-icon", "entity": "cover.blinds_tv_2"},
                {"type": "state-icon", "entity": "light.living"},
                {"type": "state-icon", "entity": "switch.manual"},
                {"type": "custom:roomcraft-camera-thumbnail", "roomcraft_item_id": "front-door-camera",
                 "camera_entity": "camera.old_lock"},
                {"type": "custom:roomcraft-object-control", "roomcraft_item_id": "old-object"},
                {"type": "custom:roomcraft-entity-menu", "roomcraft_menu": True, "sections": []},
                {"type": "state-label", "entity": "sensor.time", "style": {"left": "83%"}},
                {"type": "state-label", "entity": "weather.example", "style": {"left": "68%"}},
                {"type": "icon", "title": "Edit layout in Roomcraft", "style": {"left": "94%"}},
                {"type": "image", "image": "/local/manual.png"},
            ]}]},
            {"path": "studio", "cards": [{"type": "custom:roomcraft-editor-card"}]},
            {"path": "live", "cards": [{"type": "entities", "entities": ["sensor.other"]}]},
        ],
        "roomcraft_layout": {"version": 2, "rooms": [], "walls": [], "items": [
            {"id": "front-door-camera", "type": "cameraThumbnail", "name": "Old event",
             "x": 160, "y": 947, "w": 170, "h": 110, "rotation": 0,
             "entityId": "camera.old_lock", "imageEntityId": "image.old_event", "previewMode": "event"},
            {"id": "fixture-living", "type": "ceilingLight", "name": "Living fixture",
             "x": 660, "y": 330, "w": 58, "h": 58, "rotation": 0, "entityId": "light.living"},
        ], "hotspots": [
            {"id": "blind-1", "type": "state-icon", "entity": "cover.blinds_sofa_2", "style": {"left": "30%"}},
            {"id": "blind-2", "type": "state-icon", "entity": "cover.blinds_tv_2", "style": {"left": "47%"}},
            {"id": "light-1", "type": "state-icon", "entity": "light.living", "style": {"left": "43%"}},
            {"id": "manual", "type": "state-icon", "entity": "switch.manual", "style": {"left": "70%"}},
        ]},
    }


def old_dashboard():
    section = lambda title, *cards: {"type": "grid", "cards": [
        {"type": "heading", "heading": title}, *cards,
    ]}
    return {"views": [{"type": "sections", "sections": [
        section("Planning", {"type": "calendar", "entities": ["calendar.family"]}),
        section("Weather and Air Quality", {"type": "tile", "entity": "climate.house"}),
        section("Lighting", {"type": "grid", "cards": [
            {"type": "tile", "entity": "cover.blinds_sofa_2"},
            {"type": "tile", "entity": "cover.blinds_tv_2"},
            {"type": "tile", "entity": "cover.blinds_small_sofa_2"},
            {"type": "tile", "entity": "light.living"},
        ]}),
        section("Security and Control",
                {"type": "picture-entity", "entity": "camera.porch", "camera_image": "camera.porch", "camera_view": "live"},
                {"type": "tile", "entity": "binary_sensor.door_motion"}),
        section("Energy", {"type": "entities", "entities": ["sensor.energy"]}),
        section("Robot Vacuum", {"type": "picture-glance", "entity": "vacuum.robot", "camera_image": "camera.robot_map"},
                {"type": "custom:mushroom-vacuum-card", "entity": "vacuum.robot"},
                {"type": "markdown", "content": "unrelated"},
                {"type": "button", "entity": "switch.fish_feeder"}),
    ]}]}


class MigrationTests(unittest.TestCase):
    def test_migrates_camera_blinds_lights_menu_and_preserves_other_elements(self):
        current = current_dashboard()
        original = deepcopy(current)
        updated = migrate_dashboard(current, old_dashboard())
        self.assertEqual(current, original)
        self.assertEqual(updated["views"][1:], current["views"][1:])
        self.assertEqual(updated["views"][0]["cards"][0]["image"], "/plan.png")
        project = updated["roomcraft_layout"]
        camera = next(item for item in project["items"] if item["id"] == "front-door-camera")
        self.assertEqual((camera["x"], camera["y"], camera["w"], camera["h"]), (160, 947, 170, 110))
        self.assertEqual((camera["entityId"], camera["imageEntityId"], camera["previewMode"]),
                         ("camera.porch", "", "live"))
        zones = [item for item in project["items"] if item["type"] == "controlZone"]
        self.assertEqual({item["entityId"] for item in zones},
                         {"cover.blinds_sofa_2", "cover.blinds_tv_2", "cover.blinds_small_sofa_2"})
        self.assertEqual({item["id"] for item in zones},
                         {"blind-zone-sofa", "blind-zone-tv", "blind-zone-small-sofa"})
        self.assertTrue(all(item["tapAction"] == "more-info" for item in zones))
        self.assertEqual([hotspot["entity"] for hotspot in project["hotspots"]], ["switch.manual"])
        elements = updated["views"][0]["cards"][0]["elements"]
        self.assertEqual([element["entity"] for element in elements if element["type"] == "state-icon"], ["switch.manual"])
        self.assertEqual(len([element for element in elements if element["type"] == "custom:roomcraft-object-control"]), 4)
        self.assertEqual(len([element for element in elements if element["type"] == "custom:roomcraft-camera-thumbnail"]), 1)
        menu = next(element for element in elements if element["type"] == "custom:roomcraft-entity-menu")
        self.assertEqual([section["title"] for section in menu["sections"]], [
            "Planning", "Weather and Air Quality", "Lighting", "Security and Control", "Energy", "Robot Vacuum",
        ])
        self.assertEqual(menu["sections"][-1]["entities"], ["vacuum.robot", "camera.robot_map"])
        self.assertEqual([element["type"] for element in elements[-4:]], ["state-label", "state-label", "icon", "image"])
        self.assertTrue(summarize(current, updated)["changed"])

    def test_repeat_is_idempotent_and_keeps_user_moved_zone(self):
        first = migrate_dashboard(current_dashboard(), old_dashboard())
        self.assertEqual(migrate_dashboard(first, old_dashboard()), first)
        edited = deepcopy(first)
        zone = next(item for item in edited["roomcraft_layout"]["items"] if item["id"] == "blind-zone-sofa")
        zone["x"] = 480
        second = migrate_dashboard(edited, old_dashboard())
        moved = next(item for item in second["roomcraft_layout"]["items"] if item["id"] == "blind-zone-sofa")
        self.assertEqual(moved["x"], 480)
        self.assertEqual(migrate_dashboard(second, old_dashboard()), second)

    def test_missing_source_camera_fails_without_changing_input(self):
        old = old_dashboard()
        old["views"][0]["sections"][3]["cards"][1]["camera_view"] = "auto"
        current = current_dashboard()
        original = deepcopy(current)
        with self.assertRaisesRegex(MigrationError, "exactly one live entry camera"):
            migrate_dashboard(current, old)
        self.assertEqual(current, original)

    def test_missing_blind_mapping_fails_closed(self):
        old = old_dashboard()
        old["views"][0]["sections"][2]["cards"][1]["cards"][2]["entity"] = "cover.other"
        with self.assertRaisesRegex(MigrationError, "small-sofa blind"):
            migrate_dashboard(current_dashboard(), old)


if __name__ == "__main__":
    unittest.main()
