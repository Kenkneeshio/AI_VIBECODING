"""Discover a ZHA radar locally without changing its configuration."""

from homeassistant.config_entries import SOURCE_IMPORT
from homeassistant.const import Platform
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.service import async_register_admin_service
from homeassistant.exceptions import ServiceValidationError
import voluptuous as vol

from .const import DOMAIN, SERVICE_SET_REPORTING
from .sensor import RadarRuntime, zha_device_entry

CONFIG_SCHEMA = cv.empty_config_schema(DOMAIN)
PLATFORMS = [Platform.SENSOR]


async def async_setup(hass, config):
    """Import the optional empty YAML configuration once."""
    if DOMAIN in config and not hass.config_entries.async_entries(DOMAIN):
        hass.async_create_task(
            hass.config_entries.flow.async_init(DOMAIN, context={"source": SOURCE_IMPORT})
        )
    return True


async def async_setup_entry(hass, entry):
    """Start the bridge and register the explicit reporting control."""
    runtime = entry.runtime_data = RadarRuntime(hass)

    async def set_reporting(call):
        runtime.discover()
        selected_id = call.data.get("device_id")
        candidates = []
        for ieee, radar in runtime.radars.items():
            device = zha_device_entry(hass, ieee)
            if radar.attached and (selected_id is None or (device and device.id == selected_id)):
                candidates.append(radar)
        if len(candidates) != 1:
            raise ServiceValidationError("Select one available Inovelli VZM32-SN switch.")
        await candidates[0].async_set_reporting(call.data["enabled"])

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    async_register_admin_service(
        hass,
        DOMAIN,
        SERVICE_SET_REPORTING,
        set_reporting,
        vol.Schema({vol.Required("enabled"): cv.boolean, vol.Optional("device_id"): cv.string}),
    )
    return True


async def async_unload_entry(hass, entry):
    """Remove listeners, timers and the service while retaining radio settings."""
    if not await hass.config_entries.async_unload_platforms(entry, PLATFORMS):
        return False
    entry.runtime_data.stop()
    hass.services.async_remove(DOMAIN, SERVICE_SET_REPORTING)
    return True
