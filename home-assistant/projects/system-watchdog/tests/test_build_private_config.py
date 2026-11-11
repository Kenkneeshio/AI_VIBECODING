import importlib.util
import unittest
from pathlib import Path


spec = importlib.util.spec_from_file_location(
    "watchdog_private_config", Path(__file__).parents[1] / "tools" / "build_private_config.py"
)
config = importlib.util.module_from_spec(spec)
spec.loader.exec_module(config)


class PrivateConfigTests(unittest.TestCase):
    def test_published_bindings_override_stale_or_unprojected_authored_items(self):
        payload = {"config": {
            "roomcraft_layout": {
                "items": [
                    {"id": "light", "type": "lamp", "entityId": "light.active"},
                    {"id": "camera", "type": "cameraThumbnail", "entityId": "camera.active"},
                    {"id": "retired", "type": "lamp", "entityId": "light.retired"},
                ],
                "hotspots": [{"entity": "switch.retired"}],
            },
            "roomcraft_plan": {"type": "picture-elements", "elements": [
                {"type": config.CONTROL, "roomcraft_item_id": "light", "entity": "light.active"},
                {"type": config.CONTROL, "roomcraft_item_id": "light", "entity": "light.stale"},
                {"type": config.CONTROL, "roomcraft_item_id": "missing", "entity": "switch.missing"},
                {"type": config.CAMERA, "roomcraft_item_id": "camera", "camera_entity": "camera.active"},
            ]},
        }}
        self.assertEqual(config.active_bindings(payload), ["camera.active", "light.active"])

    def test_older_backup_uses_valid_authored_bindings_and_rejects_broken_projection(self):
        payload = {"roomcraft_layout": {"items": [{"id": "old", "entityId": "light.old"}],
                                       "hotspots": [{"entity": "switch.old"}, {"entity": "invalid.value!"}]}}
        self.assertEqual(config.active_bindings(payload), ["light.old", "switch.old"])
        with self.assertRaises(ValueError):
            config.active_bindings({**payload, "roomcraft_plan": {"type": "wrong"}})

    def test_refresh_replaces_only_roomcraft_list_and_keeps_unavailable_explicit_sensor(self):
        prefix = "# Private monitoring choices\nscan_interval: 120\nstale_after: 750\n"
        suffix = "\nsensor_entities:\n  - binary_sensor.offline_leak\n  - sensor.manual\n"
        previous = prefix + "roomcraft_entities:\n  - light.old" + suffix
        expected = prefix + "roomcraft_entities:\n  - camera.new\n  - switch.new" + suffix
        self.assertEqual(config.watchdog_config(["switch.new", "camera.new", "switch.new"], previous), expected)
        self.assertEqual(config.watchdog_config(["switch.new", "camera.new"], previous.replace("\n", "\r\n")),
                         expected.replace("\n", "\r\n"))
        self.assertIn("roomcraft_entities: []\n", config.watchdog_config([], previous))
        self.assertIn("sensor_entities: []\n", config.watchdog_config(["switch.new"]))
