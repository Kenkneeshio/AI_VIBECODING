from __future__ import annotations

import voluptuous as vol

from homeassistant.const import CONF_SCAN_INTERVAL
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv, discovery
from homeassistant.helpers.typing import ConfigType
from homeassistant.components.http import HomeAssistantView

from .const import DEFAULT_SCAN_INTERVAL, DEFAULT_STALE_AFTER, DOMAIN, PLATFORMS
from .coordinator import WatchdogCoordinator

CONFIG_SCHEMA = vol.Schema(
    {
        DOMAIN: vol.Schema(
            {
                vol.Optional("roomcraft_entities", default=[]): vol.All(cv.ensure_list, [cv.entity_id]),
                vol.Optional("sensor_entities", default=[]): vol.All(cv.ensure_list, [cv.entity_id]),
                vol.Optional("stale_after", default=DEFAULT_STALE_AFTER): vol.All(vol.Coerce(int), vol.Range(min=120, max=86400)),
                vol.Optional(CONF_SCAN_INTERVAL, default=DEFAULT_SCAN_INTERVAL): vol.All(vol.Coerce(int), vol.Range(min=30, max=3600)),
            }
        )
    },
    extra=vol.ALLOW_EXTRA,
)


class HeartbeatView(HomeAssistantView):
    url = "/api/system_watchdog/heartbeat"
    name = "api:system_watchdog:heartbeat"
    requires_auth = True

    def __init__(self, coordinator: WatchdogCoordinator) -> None:
        self.coordinator = coordinator

    async def post(self, request):
        try:
            payload = await request.json()
            if not isinstance(payload, dict):
                raise ValueError("payload must be an object")
            await self.coordinator.async_receive_heartbeat(payload)
        except (ValueError, TypeError) as err:
            return self.json_message(str(err), status_code=400)
        return self.json({"accepted": True})


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    settings = dict(config.get(DOMAIN, {}))
    coordinator = WatchdogCoordinator(hass, settings)
    await coordinator.async_initialize()
    hass.data[DOMAIN] = coordinator
    hass.http.register_view(HeartbeatView(coordinator))
    for platform in PLATFORMS:
        hass.async_create_task(discovery.async_load_platform(hass, platform, DOMAIN, {}, config))
    return True

