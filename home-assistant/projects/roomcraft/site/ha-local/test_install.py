"""Offline checks for the two Home Assistant module resources."""

from __future__ import annotations

import importlib.util
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest


spec = importlib.util.spec_from_file_location("roomcraft_install", Path(__file__).with_name("install.py"))
assert spec and spec.loader
install = importlib.util.module_from_spec(spec)
spec.loader.exec_module(install)


class FakeAPI:
    def __init__(self):
        self.calls = []

    def call(self, command, **kwargs):
        self.calls.append((command, kwargs))


class InstallResourceTests(unittest.TestCase):
    def test_storybook_preserves_plan_data_and_is_idempotent(self):
        plan = {"path": "plan", "cards": [{"type": "picture-elements", "elements": [
            {"type": "icon", "title": "Edit layout in Roomcraft",
             "tap_action": {"action": "navigate", "navigation_path": "/second-floor/studio"}}
        ]}]}
        original = {"views": [plan, {"path": "studio"}], "roomcraft_layout": {"version": 2}}
        result = install.update_dashboard(original, "abc", storybook=True)
        self.assertEqual(result["views"][0], plan)
        self.assertEqual(result["roomcraft_layout"], original["roomcraft_layout"])
        self.assertEqual(result["views"][-1]["path"], "storybook")
        self.assertEqual(install.update_dashboard(result, "abc", storybook=True), result)
        result["views"][-1]["title"] = "Different view"
        with self.assertRaisesRegex(RuntimeError, "different view"):
            install.update_dashboard(result, "abc", storybook=True)

    def test_new_weather_module_is_registered_while_current_card_is_kept(self):
        api = FakeAPI()
        existing = [{"id": "card", "url": "/local/roomcraft/roomcraft-card.js?v=abc", "type": "module"}]
        urls = install.register_resources(api, existing, "abc")
        self.assertEqual(len(urls), 2)
        self.assertEqual(api.calls, [("lovelace/resources/create", {
            "url": "/local/roomcraft/roomcraft-weather-outdoor.js?v=abc", "res_type": "module",
        })])

    def test_changed_version_updates_both_modules(self):
        api = FakeAPI()
        existing = [{"id": name, "url": f"/local/roomcraft/{name}?v=old", "type": "module"}
                    for name in install.RESOURCE_NAMES]
        install.register_resources(api, existing, "new")
        self.assertEqual([command for command, _ in api.calls], ["lovelace/resources/update"] * 2)
        self.assertEqual([args["url"] for _, args in api.calls], [
            f"/local/roomcraft/{name}?v=new" for name in install.RESOURCE_NAMES
        ])

    def test_weather_code_changes_cache_version(self):
        with TemporaryDirectory() as directory:
            root = Path(directory)
            public = root / "public"
            public.mkdir()
            (public / "editor.html").write_text("editor", encoding="utf-8")
            local = root / "ha-local"
            local.mkdir()
            modules = tuple(local / name for name in install.RESOURCE_NAMES)
            for module in modules:
                module.write_text("v1", encoding="utf-8")
            before = install.source_digest(public, modules)
            modules[1].write_text("v2", encoding="utf-8")
            self.assertNotEqual(before, install.source_digest(public, modules))


if __name__ == "__main__":
    unittest.main()
