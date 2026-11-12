"""Expose fresh stock ZHA radar reports without replacing the device quirk."""

import asyncio
from dataclasses import asdict
from datetime import timedelta
import time

from homeassistant.components.sensor import SensorEntity
from homeassistant.components.zha.helpers import get_zha_gateway
from homeassistant.const import STATE_OFF
from homeassistant.core import callback
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import device_registry, entity_registry
from homeassistant.helpers.device_registry import DeviceInfo
from homeassistant.helpers.event import (
    async_call_later,
    async_track_state_change_event,
    async_track_time_interval,
)
from zha.application.helpers import write_attributes_safe
from zigpy.zdo.types import Status as ZdoStatus

from .const import (
    DEVICE_MANUFACTURER,
    DEVICE_MANUFACTURER_CODE,
    DEVICE_MODEL,
    RADAR_CLUSTER_ID,
    RADAR_ENDPOINT_ID,
    REPORT_TIMEOUT_SECONDS,
    REPORTING_ATTRIBUTE_ID,
    TRACKING_SCHEMA,
)
from .protocol import decode_tracks, decode_zones, summarize_tracks


async def async_setup_entry(hass, entry, async_add_entities):
    """Register devices already present and watch for additions or ZHA reloads."""
    entry.runtime_data.start(async_add_entities)


@callback
def zha_device_entry(hass, ieee):
    """Find the native switch, separate from the bridge's registry device."""
    registry = device_registry.async_get(hass)
    for entry in hass.config_entries.async_entries("zha"):
        if (device := registry.async_get_device_by_identifier(("zha", ieee), entry.entry_id)):
            return device
    return None


class RadarRuntime:
    """Track each supported device and reattach its listener after a ZHA reload."""

    def __init__(self, hass, coverage):
        self.hass = hass
        self.coverage = coverage
        self.radars = {}
        self._add_entities = None
        self._cancel_discovery = None

    @callback
    def start(self, async_add_entities):
        self._add_entities = async_add_entities
        self.discover()
        self._cancel_discovery = async_track_time_interval(
            self.hass, self.discover, timedelta(seconds=10)
        )

    @callback
    def discover(self, _now=None):
        try:
            devices = get_zha_gateway(self.hass).devices.values()
        except ValueError:
            devices = ()
        attached = set()
        new = []
        entities_registry = entity_registry.async_get(self.hass)
        for device in devices:
            zigpy_device = device.device
            if (zigpy_device.manufacturer, zigpy_device.model) != (DEVICE_MANUFACTURER, DEVICE_MODEL):
                continue
            endpoint = zigpy_device.endpoints.get(RADAR_ENDPOINT_ID)
            cluster = endpoint.in_clusters.get(RADAR_CLUSTER_ID) if endpoint else None
            if cluster is None:
                continue
            ieee = str(zigpy_device.ieee)
            entry = zha_device_entry(self.hass, ieee)
            if entry is None:
                continue
            attached.add(ieee)
            radar = self.radars.get(ieee)
            if radar is None:
                radar = self.radars[ieee] = RadarTargets(ieee, entry, self.coverage.history)
                new.append(radar)
            radar.attach(cluster, device.available)
            occupancy_entity = next((
                entity.entity_id
                for entity in entity_registry.async_entries_for_device(entities_registry, entry.id)
                if entity.domain == "binary_sensor"
                and entity.platform == "zha"
                and (entity.device_class or entity.original_device_class) == "occupancy"
            ), None)
            radar.set_occupancy_entity(occupancy_entity)
        for ieee in self.radars.keys() - attached:
            radar = self.radars[ieee]
            radar.attach(None, False)
            radar.set_occupancy_entity(None)
        if new and self._add_entities is not None:
            self._add_entities(new)

    @callback
    def stop(self):
        if self._cancel_discovery is not None:
            self._cancel_discovery()
            self._cancel_discovery = None
        for radar in self.radars.values():
            radar.attach(None, False)


class RadarTargets(SensorEntity):
    """The number of fresh radar tracks and the last reported zone flags."""

    _attr_name = "Radar target count"
    _attr_has_entity_name = True
    _attr_should_poll = False
    _attr_icon = "mdi:radar"
    _unrecorded_attributes = frozenset({
        "tracks", "zones", "observed_at", "zones_observed_at", "track_status", "observation_source",
        "last_tracks", "last_observed_at",
    })

    def __init__(self, ieee, device, coverage):
        self._attr_unique_id = f"{ieee}-radar-targets"
        self._coverage = coverage
        self._coverage_key = ieee
        self._attr_device_info = DeviceInfo(
            identifiers={("zha", ieee)},
            name=f"{device.name_by_user or device.name or DEVICE_MODEL} Radar",
            via_device_id=device.id,
        )
        self._cluster = None
        self._device_available = False
        self._listening = False
        self._tracks = None
        self._last_sample = None
        self._zones = ()
        self._observed_at = None
        self._zones_observed_at = None
        self._cancel_timeout = None
        self._observed_target_report = False
        self._occupancy_entity = None
        self._unlisten_occupancy = None
        self._native_vacant_at = None
        self._configure_lock = asyncio.Lock()

    @property
    def attached(self):
        return self._cluster is not None and self._device_available

    @property
    def available(self):
        return self.attached

    @property
    def native_value(self):
        return self._summary()[0]

    def _summary(self):
        return summarize_tracks(
            self._tracks, self._observed_at, self._native_vacant_at, self._observed_target_report
        )

    @property
    def extra_state_attributes(self):
        _, status, observed_at, observation_source = self._summary()
        last_tracks, last_at = self._last_sample or ((), None)
        return {
            "tracking_schema": TRACKING_SCHEMA,
            "tracks": [asdict(track) for track in self._tracks or ()],
            "zones": list(self._zones),
            "observed_at": observed_at,
            "zones_observed_at": self._zones_observed_at,
            "track_status": status,
            "observation_source": observation_source,
            "last_tracks": [asdict(track) for track in last_tracks],
            "last_observed_at": last_at,
        }

    @callback
    def attach(self, cluster, available):
        if cluster is self._cluster:
            if available != self._device_available:
                self._device_available = available
                self._publish()
            return
        if self._cluster is not None and self._listening:
            self._cluster.remove_listener(self)
        self._cluster = cluster
        self._device_available = available
        self._clear_tracks()
        self._last_sample = None
        self._observed_target_report = False
        self._native_vacant_at = None
        self._zones = ()
        self._zones_observed_at = None
        if cluster is not None and self._listening:
            cluster.add_listener(self)
            if self._occupancy_entity is not None:
                self._apply_occupancy(self.hass.states.get(self._occupancy_entity))
        self._publish()

    @callback
    def set_occupancy_entity(self, entity_id):
        if entity_id == self._occupancy_entity:
            return
        self._remove_occupancy_listener()
        self._occupancy_entity = entity_id
        self._native_vacant_at = None
        self._last_sample = None
        if self._listening:
            self._add_occupancy_listener()
            self._publish()

    @callback
    def _add_occupancy_listener(self):
        if self._occupancy_entity is not None:
            self._unlisten_occupancy = async_track_state_change_event(
                self.hass, self._occupancy_entity, self._occupancy_changed
            )
            self._apply_occupancy(self.hass.states.get(self._occupancy_entity))

    @callback
    def _remove_occupancy_listener(self):
        if self._unlisten_occupancy is not None:
            self._unlisten_occupancy()
            self._unlisten_occupancy = None

    @callback
    def _occupancy_changed(self, event):
        old = event.data["old_state"]
        new = event.data["new_state"]
        if old is None or new is None or old.state != new.state:
            self._apply_occupancy(new)
            self._publish()

    @callback
    def _apply_occupancy(self, state):
        self._native_vacant_at = None
        if state is not None and state.state == STATE_OFF:
            self._native_vacant_at = int(state.last_changed.timestamp() * 1000)
            self._clear_tracks()
            self._last_sample = None

    async def async_added_to_hass(self):
        await super().async_added_to_hass()
        self._listening = True
        if self._cluster is not None:
            self._cluster.add_listener(self)
        self._add_occupancy_listener()

    async def async_will_remove_from_hass(self):
        if self._cluster is not None and self._listening:
            self._cluster.remove_listener(self)
        self._listening = False
        self._remove_occupancy_listener()
        self._clear_tracks()
        self._last_sample = None
        await super().async_will_remove_from_hass()

    @callback
    def cluster_command(self, _tsn, command, args):
        """Receive the stock quirk's typed server-to-client commands."""
        if command == 0x01:
            tracks = decode_tracks(args)
            if tracks is None:
                return
            self._clear_tracks()
            self._tracks = tracks
            self._observed_target_report = True
            self._observed_at = time.time_ns() // 1_000_000
            self._coverage.record(self._coverage_key, self._observed_at, tracks)
            if tracks:
                self._last_sample = (tracks, self._observed_at)
                self._native_vacant_at = None
            self._cancel_timeout = async_call_later(self.hass, REPORT_TIMEOUT_SECONDS, self._expire_tracks)
        elif command == 0x00:
            zones = decode_zones(args)
            if zones is None:
                return
            self._zones = zones
            self._zones_observed_at = time.time_ns() // 1_000_000
        else:
            return
        self._publish()

    @callback
    def _publish(self):
        if self._listening:
            self.async_write_ha_state()

    @callback
    def _clear_tracks(self):
        if self._cancel_timeout is not None:
            self._cancel_timeout()
            self._cancel_timeout = None
        self._tracks = None
        self._observed_at = None

    @callback
    def _expire_tracks(self, _now):
        self._cancel_timeout = None
        self._clear_tracks()
        self._publish()

    async def async_set_reporting(self, enabled):
        """Apply a device-specific write, plus a selective coordinator bind when enabling."""
        async with self._configure_lock:
            cluster = self._cluster
            if cluster is None or not self.attached:
                raise ServiceValidationError("The selected switch is unavailable.")
            if enabled:
                result = await cluster.bind()
                if not result or result[0] != ZdoStatus.SUCCESS:
                    raise HomeAssistantError("The switch did not accept the radar-cluster binding.")
            if cluster is not self._cluster:
                raise HomeAssistantError("ZHA reloaded while configuring the switch. Try again.")
            await write_attributes_safe(
                cluster,
                {"mmwave_target_info_report": int(enabled)},
                manufacturer=DEVICE_MANUFACTURER_CODE,
            )
            values, _ = await cluster.read_attributes(
                [REPORTING_ATTRIBUTE_ID], allow_cache=False, manufacturer=DEVICE_MANUFACTURER_CODE
            )
            if values.get(REPORTING_ATTRIBUTE_ID) != int(enabled):
                raise HomeAssistantError("The switch did not confirm the radar reporting setting.")
            if not enabled:
                self._clear_tracks()
                self._last_sample = None
                self._publish()
