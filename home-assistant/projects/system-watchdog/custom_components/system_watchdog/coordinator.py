from __future__ import annotations

from datetime import datetime, timedelta, timezone
import logging
from typing import Any

from homeassistant.components import persistent_notification
from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator

from .const import DEFAULT_SCAN_INTERVAL, DEFAULT_STALE_AFTER, DOMAIN, STORE_KEY, STORE_VERSION
from .health import build_report

_LOGGER = logging.getLogger(__name__)


class WatchdogCoordinator(DataUpdateCoordinator[dict[str, Any]]):
    def __init__(self, hass: HomeAssistant, config: dict[str, Any]) -> None:
        self.roomcraft_entities = tuple(config.get("roomcraft_entities", ()))
        self.sensor_entities = tuple(config.get("sensor_entities", ()))
        self.stale_after = int(config.get("stale_after", DEFAULT_STALE_AFTER))
        interval = int(config.get("scan_interval", DEFAULT_SCAN_INTERVAL))
        self.store = Store(hass, STORE_VERSION, STORE_KEY)
        self.heartbeat: dict[str, Any] | None = None
        self._previous_overall: str | None = None
        super().__init__(hass, _LOGGER, name=DOMAIN, update_interval=timedelta(seconds=interval))

    async def async_initialize(self) -> None:
        stored = await self.store.async_load()
        if isinstance(stored, dict):
            self.heartbeat = stored
        await self.async_refresh()

    async def async_receive_heartbeat(self, payload: dict[str, Any]) -> None:
        checks = payload.get("checks")
        if not isinstance(checks, dict):
            raise ValueError("checks must be an object")
        clean: dict[str, Any] = {"received_at": datetime.now(timezone.utc).isoformat(), "checks": {}}
        for name in ("workstation", "codex", "tablet", "apps"):
            value = checks.get(name)
            if not isinstance(value, dict) or not isinstance(value.get("healthy"), bool):
                raise ValueError(f"invalid {name} check")
            issues = value.get("issues", [])
            clean["checks"][name] = {
                "healthy": value["healthy"],
                "message": str(value.get("message", ""))[:240],
                "issues": [str(item)[:240] for item in issues[:50]] if isinstance(issues, list) else [],
            }
        self.heartbeat = clean
        await self.store.async_save(clean)
        await self.async_request_refresh()

    async def _async_update_data(self) -> dict[str, Any]:
        report = build_report(
            now=datetime.now(timezone.utc),
            states=self.hass.states,
            entries=self.hass.config_entries.async_entries(),
            roomcraft_entities=self.roomcraft_entities,
            sensor_entities=self.sensor_entities,
            heartbeat=self.heartbeat,
            stale_after=self.stale_after,
        )
        overall = report["overall"]
        if overall != self._previous_overall:
            if overall == "healthy":
                persistent_notification.async_dismiss(self.hass, f"{DOMAIN}_health")
            else:
                summary = "\n".join(f"- {item}" for item in report["issues"][:12])
                persistent_notification.async_create(
                    self.hass,
                    f"System watchdog is **{overall}** with {report['issue_count']} issue(s).\n\n{summary}",
                    title="System Watchdog",
                    notification_id=f"{DOMAIN}_health",
                )
            self._previous_overall = overall
        return report

