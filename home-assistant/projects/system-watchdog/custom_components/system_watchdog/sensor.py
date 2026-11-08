from __future__ import annotations

from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import CATEGORIES, DOMAIN


async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    coordinator = hass.data[DOMAIN]
    async_add_entities([WatchdogSummary(coordinator), WatchdogIssueCount(coordinator)] +
                       [WatchdogCategory(coordinator, category) for category in CATEGORIES])


class WatchdogBase(CoordinatorEntity, SensorEntity):
    _attr_has_entity_name = True

    def __init__(self, coordinator, key: str, name: str) -> None:
        super().__init__(coordinator)
        self.key = key
        self._attr_name = name
        self._attr_unique_id = f"system_watchdog_{key}"


class WatchdogSummary(WatchdogBase):
    _attr_icon = "mdi:shield-pulse"

    def __init__(self, coordinator) -> None:
        super().__init__(coordinator, "summary", "System Watchdog Summary")

    @property
    def native_value(self):
        return self.coordinator.data["overall"]

    @property
    def extra_state_attributes(self):
        data = self.coordinator.data
        return {"issue_count": data["issue_count"], "issues": data["issues"], "updated_at": data["updated_at"]}


class WatchdogIssueCount(WatchdogBase):
    _attr_icon = "mdi:alert-circle-check-outline"

    def __init__(self, coordinator) -> None:
        super().__init__(coordinator, "issue_count", "System Watchdog Issue Count")

    @property
    def native_value(self):
        return self.coordinator.data["issue_count"]


class WatchdogCategory(WatchdogBase):
    def __init__(self, coordinator, category: str) -> None:
        super().__init__(coordinator, category, f"System Watchdog {category.replace('_', ' ').title()}")
        self.category = category

    @property
    def native_value(self):
        return self.coordinator.data["categories"][self.category]["status"]

    @property
    def extra_state_attributes(self):
        return self.coordinator.data["categories"][self.category]

