import importlib.util
import sys
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch


class HomeAssistantView:
    def json_message(self, message, status_code):
        return status_code, {"message": message}

    def json(self, payload):
        return 200, payload


def load_view():
    name = "watchdog_test_heartbeat"
    component = Path(__file__).parents[1] / "custom_components" / "system_watchdog"
    spec = importlib.util.spec_from_file_location(
        name, component / "__init__.py", submodule_search_locations=[str(component)]
    )
    module = importlib.util.module_from_spec(spec)
    voluptuous = SimpleNamespace(Schema=lambda value, **_: value, Optional=lambda key, **_: key,
                                 All=lambda *_: None, Coerce=lambda *_: None, Range=lambda **_: None, ALLOW_EXTRA=True)
    with patch.dict(sys.modules, {
        name: module,
        f"{name}.coordinator": SimpleNamespace(WatchdogCoordinator=object),
        "voluptuous": voluptuous,
        "homeassistant.const": SimpleNamespace(CONF_SCAN_INTERVAL="scan_interval"),
        "homeassistant.core": SimpleNamespace(HomeAssistant=object),
        "homeassistant.helpers": SimpleNamespace(
            config_validation=SimpleNamespace(ensure_list=list, entity_id=str), discovery=None),
        "homeassistant.helpers.typing": SimpleNamespace(ConfigType=dict),
        "homeassistant.components.http": SimpleNamespace(HomeAssistantView=HomeAssistantView),
        "homeassistant.components.http.const": SimpleNamespace(KEY_HASS_USER="hass_user"),
    }):
        spec.loader.exec_module(module)
    return module.HeartbeatView


class HeartbeatAuthorizationTests(unittest.IsolatedAsyncioTestCase):
    async def test_admin_heartbeat_reaches_coordinator(self):
        request = SimpleNamespace(get=lambda _: SimpleNamespace(is_admin=True),
                                  json=AsyncMock(return_value={"checks": {}}))
        coordinator = SimpleNamespace(async_receive_heartbeat=AsyncMock())
        view = load_view()(coordinator)
        self.assertTrue(view.requires_auth)
        self.assertEqual(await view.post(request), (200, {"accepted": True}))
        coordinator.async_receive_heartbeat.assert_awaited_once_with({"checks": {}})

    async def test_non_admin_and_missing_principal_cannot_update_health(self):
        coordinator = SimpleNamespace(async_receive_heartbeat=AsyncMock())
        view = load_view()(coordinator)
        for user in (None, SimpleNamespace(is_admin=False)):
            with self.subTest(user=user):
                request = SimpleNamespace(get=lambda _: user, json=AsyncMock())
                status, _ = await view.post(request)
                self.assertEqual(status, 403)
                request.json.assert_not_awaited()
        coordinator.async_receive_heartbeat.assert_not_awaited()
