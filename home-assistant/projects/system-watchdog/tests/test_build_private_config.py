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

    def test_dashboard_sources_include_non_control_models_and_live_feature_dependencies(self):
        payload = {
            "roomcraft_layout": {"items": [
                {"id": "tv", "type": "tv", "entityId": "media_player.tv"},
                {"id": "radar", "type": "presenceSwitch", "presenceTrackEntityId": "sensor.radar",
                 "presenceEntityId": "binary_sensor.occupied"},
                {"id": "cleaner", "type": "robotVacuum", "entityId": "vacuum.cleaner"},
                {"id": "cam", "type": "cameraThumbnail", "entityId": "camera.front"},
            ]},
            "roomcraft_plan": {"type": "picture-elements", "elements": [
                {"type": config.CONTROL, "roomcraft_item_id": "cleaner", "entity": "vacuum.cleaner",
                 "roomcraft_vacuum_map_entity": "camera.vacuum_map", "roomcraft_tap_entity": "script.clean"},
                {"type": config.CAMERA, "roomcraft_item_id": "cam", "camera_entity": "camera.front",
                 "image_entity": "image.latest_event", "event_entities": ["binary_sensor.ring"]},
                {"type": config.WEATHER, "weather_entity": "weather.home", "moon_entity": "sensor.moon"},
                {"type": config.STATUS, "roomcraft_status_kind": "air", "entities": [{"entity": "sensor.air"}]},
            ]},
            "roomcraft_commutes": {"version": 1, "routes": [{"entity": "sensor.traffic", "baselineEntity": "sensor.clear"}]},
            "roomcraft_energy": {"version": 1, "home": {"power": "sensor.main", "statistic": "sensor.recorder_only"},
                                 "groups": [{"today": "sensor.branch"}]},
            "roomcraft_location": {"sources": [{"entity": "device_tracker.phone"}]},
        }
        self.assertEqual(config.active_bindings(payload), sorted([
            "media_player.tv", "sensor.radar", "binary_sensor.occupied", "vacuum.cleaner", "camera.vacuum_map",
            "script.clean", "camera.front", "binary_sensor.ring", "weather.home", "sun.sun", "sensor.moon",
            "sensor.air", "sensor.traffic", "sensor.clear", "sensor.main", "sensor.branch", "device_tracker.phone",
        ]))

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
