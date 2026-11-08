from homeassistant.components.binary_sensor import BinarySensorEntity, BinarySensorDeviceClass
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN


async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    async_add_entities([WatchdogHealthy(hass.data[DOMAIN])])


class WatchdogHealthy(CoordinatorEntity, BinarySensorEntity):
    _attr_name = "System Watchdog Problem"
    _attr_unique_id = "system_watchdog_problem"
    _attr_device_class = BinarySensorDeviceClass.PROBLEM

    @property
    def is_on(self):
        return self.coordinator.data["overall"] != "healthy"

    @property
    def extra_state_attributes(self):
        return {"overall": self.coordinator.data["overall"],
                "issue_count": self.coordinator.data["issue_count"]}

