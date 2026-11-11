import importlib
import sys
import unittest
from datetime import datetime, timezone
from pathlib import Path
from types import ModuleType, SimpleNamespace
from unittest.mock import Mock, patch


class FakeUpdateCoordinator:
    def __class_getitem__(cls, _):
        return cls

    def __init__(self, hass, *_args, **_kwargs):
        self.hass = hass


class NotificationTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.notifications = SimpleNamespace(async_create=Mock(), async_dismiss=Mock())
        source = Path(__file__).parents[1] / "custom_components" / "system_watchdog"
        package = ModuleType("watchdog_test_component")
        package.__path__ = [str(source)]
        with patch.dict(sys.modules, {
            package.__name__: package,
            "homeassistant.components": SimpleNamespace(persistent_notification=self.notifications),
            "homeassistant.core": SimpleNamespace(HomeAssistant=object),
            "homeassistant.helpers.storage": SimpleNamespace(Store=Mock()),
            "homeassistant.helpers.update_coordinator": SimpleNamespace(DataUpdateCoordinator=FakeUpdateCoordinator),
        }):
            coordinator = importlib.import_module(f"{package.__name__}.coordinator")
        self.states = {
            "sensor.first": SimpleNamespace(state="unavailable"),
            "sensor.second": SimpleNamespace(state="ready"),
        }
        hass = SimpleNamespace(states=self.states, config_entries=SimpleNamespace(async_entries=lambda: []))
        self.coordinator = coordinator.WatchdogCoordinator(hass, {"sensor_entities": tuple(self.states)})
        self.coordinator.heartbeat = {
            "received_at": datetime.now(timezone.utc).isoformat(),
            "checks": {key: {"healthy": True} for key in ("workstation", "codex", "tablet", "apps")},
        }

    async def test_refreshes_changed_warning_and_suppresses_identical_reports(self):
        await self.coordinator._async_update_data()
        await self.coordinator._async_update_data()
        self.notifications.async_create.assert_called_once()
        original = self.notifications.async_create.call_args
        self.assertIn("sensor.first: unavailable", original.args[1])

        self.states["sensor.first"].state = "ready"
        self.states["sensor.second"].state = "unavailable"
        await self.coordinator._async_update_data()
        self.assertEqual(self.notifications.async_create.call_count, 2)
        updated = self.notifications.async_create.call_args
        self.assertEqual(updated.kwargs["notification_id"], original.kwargs["notification_id"])
        self.assertIn("sensor.second: unavailable", updated.args[1])
        self.assertNotIn("sensor.first", updated.args[1])

        self.states["sensor.second"].state = "ready"
        await self.coordinator._async_update_data()
        await self.coordinator._async_update_data()
        self.notifications.async_dismiss.assert_called_once()
