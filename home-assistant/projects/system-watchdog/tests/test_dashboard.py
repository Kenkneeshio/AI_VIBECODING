import importlib.util
import tempfile
import unittest
from pathlib import Path

MODULE = Path(__file__).parents[1] / "tools" / "install_dashboard.py"
SPEC = importlib.util.spec_from_file_location("system_watchdog_dashboard", MODULE)
dashboard = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(dashboard)


class FakeAPI:
    def __init__(self, resources):
        self.resources = resources
        self.calls = []

    def call(self, command, **fields):
        self.calls.append((command, fields))
        if command == "lovelace/resources":
            return self.resources
        return None


class DashboardTests(unittest.TestCase):
    def test_view_starts_with_animated_resource_map_and_keeps_diagnostics(self):
        view = dashboard.build_view()
        self.assertEqual(view["path"], "health")
        self.assertEqual(view["cards"][0]["type"], "custom:system-watchdog-card")
        self.assertIn("sensor.system_watchdog_apps", view["cards"][1]["entities"])

    def test_resource_url_is_content_versioned(self):
        with tempfile.TemporaryDirectory() as root:
            asset = Path(root) / "card.js"
            asset.write_text("one", encoding="utf-8")
            first = dashboard.resource_url(asset)
            asset.write_text("two", encoding="utf-8")
            self.assertNotEqual(first, dashboard.resource_url(asset))

    def test_resource_registration_creates_or_updates_idempotently(self):
        api = FakeAPI([])
        dashboard.register_resource(api, f"{dashboard.RESOURCE_PATH}?v=abc")
        self.assertEqual(api.calls[-1][0], "lovelace/resources/create")

        api = FakeAPI([{"id": "resource-1", "url": f"{dashboard.RESOURCE_PATH}?v=old", "type": "module"}])
        dashboard.register_resource(api, f"{dashboard.RESOURCE_PATH}?v=new")
        self.assertEqual(api.calls[-1][0], "lovelace/resources/update")


if __name__ == "__main__":
    unittest.main()
