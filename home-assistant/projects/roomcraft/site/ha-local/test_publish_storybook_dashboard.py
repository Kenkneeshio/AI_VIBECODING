import json
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

import publish_storybook_dashboard as storybook


class FakeHomeAssistant:
    def __init__(self):
        self.dashboard = None
        self.config = None
        self.core = {"default_panel": "second-floor", "another_preference": True}
        self.writes = []

    def call(self, kind, **fields):
        if kind == "lovelace/config" and fields["url_path"] == storybook.SOURCE:
            return {"roomcraft_layout": {"version": 2}, "views": [{"path": "plan"}]}
        if kind == "lovelace/resources":
            return [{"type": "module", "url": storybook.RESOURCE + "?v=version"}]
        if kind == "lovelace/dashboards/list":
            return [self.dashboard] if self.dashboard else []
        if kind == "lovelace/config":
            if self.config is None:
                raise RuntimeError("config_not_found")
            return self.config
        if kind == "frontend/get_user_data":
            return {"value": self.core.copy()}
        self.writes.append(kind)
        if kind == "lovelace/dashboards/create":
            self.dashboard = fields
        elif kind == "lovelace/config/save":
            self.config = fields["config"]
        elif kind == "frontend/set_user_data":
            self.core = fields["value"]
        else:
            raise AssertionError(kind)


class StorybookDashboardTests(unittest.TestCase):
    def test_preview_then_promotion_preserves_other_preferences_and_can_be_repeated(self):
        api = FakeHomeAssistant()
        with TemporaryDirectory() as path:
            backup_dir = Path(path)
            with self.assertRaisesRegex(RuntimeError, "Create and inspect"):
                storybook.publish(api, backup_dir, make_default=True)
            self.assertEqual(api.writes, [])
            storybook.publish(api, backup_dir, make_default=False)
            self.assertEqual(api.core["default_panel"], "second-floor")
            self.assertEqual(api.config["views"][0]["cards"][0]["dashboard"], "second-floor")
            backup = storybook.publish(api, backup_dir, make_default=True)
            self.assertEqual(api.core, {"default_panel": "roomcraft-home", "another_preference": True})
            self.assertEqual(json.loads(backup.read_text())["user_core"]["default_panel"], "second-floor")
            storybook.publish(api, backup_dir, make_default=True)
            self.assertEqual(api.writes, [
                "lovelace/dashboards/create", "lovelace/config/save", "frontend/set_user_data"
            ])

    def test_refuses_to_replace_an_edited_dashboard(self):
        api = FakeHomeAssistant()
        api.dashboard = {"url_path": storybook.DASHBOARD, "title": storybook.TITLE, "mode": "storage"}
        api.config = {"title": "My own edits", "views": []}
        with TemporaryDirectory() as path:
            with self.assertRaisesRegex(RuntimeError, "custom edits"):
                storybook.publish(api, Path(path), make_default=True)
        self.assertEqual(api.writes, [])

    def test_promotes_consolidated_dashboard_after_legacy_is_removed(self):
        class ConsolidatedHomeAssistant(FakeHomeAssistant):
            def call(self, kind, **fields):
                if fields.get("url_path") == storybook.SOURCE:
                    raise AssertionError("Consolidated Home must not request the retired dashboard")
                return super().call(kind, **fields)

        api = ConsolidatedHomeAssistant()
        api.dashboard = {"url_path": storybook.DASHBOARD, "title": storybook.TITLE, "mode": "storage"}
        api.config = {"roomcraft_layout": {"version": 2},
                      "roomcraft_plan": {"type": "picture-elements", "elements": []},
                      "views": [{"path": "home"}, {"path": "studio"}]}
        with TemporaryDirectory() as path:
            storybook.publish(api, Path(path), make_default=True)
        self.assertEqual(api.core["default_panel"], "roomcraft-home")
        self.assertEqual(api.writes, ["frontend/set_user_data"])
