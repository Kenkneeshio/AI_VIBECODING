"""Discover a ZHA radar locally without changing its configuration."""

from homeassistant.auth.permissions.const import POLICY_READ
from homeassistant.components import websocket_api
from homeassistant.config_entries import SOURCE_IMPORT
from homeassistant.const import Platform
from homeassistant.core import callback
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.service import async_register_admin_service
from homeassistant.exceptions import ServiceValidationError
import voluptuous as vol

from .const import DOMAIN, SERVICE_SET_REPORTING
from .coverage import MAX_SOURCES, WINDOWS
from .coverage_store import CoverageStore, now_millis
from .sensor import RadarRuntime, zha_device_entry

CONFIG_SCHEMA = cv.empty_config_schema(DOMAIN)
PLATFORMS = [Platform.SENSOR]


async def async_setup(hass, config):
    """Import the optional empty YAML configuration once."""
    websocket_api.async_register_command(hass, ws_heatmap)
    if DOMAIN in config and not hass.config_entries.async_entries(DOMAIN):
        hass.async_create_task(
            hass.config_entries.flow.async_init(DOMAIN, context={"source": SOURCE_IMPORT})
        )
    return True


async def async_setup_entry(hass, entry):
    """Start the bridge and register the explicit reporting control."""
    coverage = CoverageStore(hass)
    await coverage.async_start()
    runtime = entry.runtime_data = RadarRuntime(hass, coverage)

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

    try:
        await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    except Exception:
        runtime.stop()
        await coverage.async_stop()
        raise
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
    await entry.runtime_data.coverage.async_stop()
    hass.services.async_remove(DOMAIN, SERVICE_SET_REPORTING)
    return True


@websocket_api.websocket_command({
    vol.Required("type"): f"{DOMAIN}/heatmap",
    vol.Required("entity_ids"): vol.All([cv.entity_id], vol.Length(min=1, max=MAX_SOURCES)),
    vol.Required("minutes"): vol.In(WINDOWS),
})
@callback
def ws_heatmap(hass, connection, msg):
    """Serve only aggregates for sources the current Home Assistant user may read."""
    entity_ids = set(msg["entity_ids"])
    if any(not connection.user.permissions.check_entity(entity_id, POLICY_READ) for entity_id in entity_ids):
        connection.send_error(msg["id"], "unauthorized", "The radar entity is not readable by this user.")
        return
    runtime = next((entry.runtime_data for entry in hass.config_entries.async_entries(DOMAIN)
                    if isinstance(getattr(entry, "runtime_data", None), RadarRuntime)), None)
    if runtime is None:
        connection.send_error(msg["id"], "not_loaded", "Radar coverage history is unavailable.")
        return
    sources = {radar.entity_id: source for source, radar in runtime.radars.items() if radar.entity_id in entity_ids}
    if not sources:
        connection.send_error(msg["id"], "not_found", "No requested Roomcraft radar is available.")
        return
    connection.send_result(msg["id"], runtime.coverage.history.read(sources, now_millis(), msg["minutes"]))
