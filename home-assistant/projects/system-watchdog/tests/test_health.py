import importlib.util
import sys
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path
from types import SimpleNamespace

MODULE = Path(__file__).parents[1] / "custom_components" / "system_watchdog" / "health.py"
SPEC = importlib.util.spec_from_file_location("system_watchdog_health", MODULE)
health = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = health
SPEC.loader.exec_module(health)


class HealthTests(unittest.TestCase):
    def setUp(self):
        self.now = datetime(2026, 11, 8, 20, 0, tzinfo=timezone.utc)
        self.entries = [SimpleNamespace(title="Working", state=SimpleNamespace(value="loaded"), disabled_by=None)]
        self.states = {"light.room": SimpleNamespace(state="on"),
                       "sensor.air": SimpleNamespace(state="42")}
        self.heartbeat = {"received_at": self.now.isoformat(), "checks": {
            name: {"healthy": True, "message": "ok", "issues": []}
            for name in ("workstation", "codex", "tablet", "apps")}}

    def report(self, heartbeat=None):
        return health.build_report(now=self.now, states=self.states, entries=self.entries,
                                   roomcraft_entities=["light.room"], sensor_entities=["sensor.air"],
                                   heartbeat=self.heartbeat if heartbeat is None else heartbeat,
                                   stale_after=600)

    def test_healthy_report(self):
        report = self.report()
        self.assertEqual(report["overall"], "healthy")
        self.assertEqual(report["issue_count"], 0)

    def test_stale_heartbeat_is_critical(self):
        stale = dict(self.heartbeat, received_at=(self.now - timedelta(seconds=601)).isoformat())
        report = self.report(stale)
        self.assertEqual(report["overall"], "critical")
        self.assertEqual(report["categories"]["codex"]["status"], "critical")

    def test_unavailable_object_is_warning(self):
        self.states["light.room"].state = "unavailable"
        report = self.report()
        self.assertEqual(report["overall"], "warning")
        self.assertIn("light.room: unavailable", report["categories"]["roomcraft"]["issues"])

    def test_failed_integration_is_warning(self):
        self.entries.append(SimpleNamespace(title="Broken", state=SimpleNamespace(value="setup_error"), disabled_by=None))
        report = self.report()
        self.assertEqual(report["categories"]["integrations"]["status"], "warning")
        self.assertIn("Broken: setup_error", report["categories"]["integrations"]["issues"])


if __name__ == "__main__":
    unittest.main()

