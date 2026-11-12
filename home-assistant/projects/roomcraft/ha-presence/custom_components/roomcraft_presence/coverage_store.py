"""Persist radar summaries on Home Assistant, independently of browser sessions."""

import asyncio
from datetime import timedelta
import time

from homeassistant.const import EVENT_HOMEASSISTANT_STOP
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.helpers.storage import Store

from .const import DOMAIN
from .coverage import CoverageHistory


def now_millis():
    return time.time_ns() // 1_000_000


class CoverageStore:
    """Manage one private, rolling coverage archive for the integration."""

    def __init__(self, hass):
        self.hass = hass
        self.history = None
        self._store = Store(hass, 1, f"{DOMAIN}.coverage", private=True, atomic_writes=True,
                            serialize_in_event_loop=False)
        self._lock = asyncio.Lock()
        self._cancel_save = None
        self._cancel_stop = None

    async def async_start(self):
        saved = await self._store.async_load()
        self.history = await self.hass.async_add_executor_job(CoverageHistory, now_millis(), saved)
        self._cancel_save = async_track_time_interval(self.hass, self.async_save, timedelta(minutes=5))
        self._cancel_stop = self.hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STOP, self.async_save)

    async def async_save(self, _event=None):
        async with self._lock:
            self.history.prune(now_millis())
            if not self.history.dirty:
                return
            data = self.history.snapshot()
            self.history.dirty = False
            try:
                await self._store.async_save(data)
            except Exception:
                self.history.dirty = True
                raise

    async def async_stop(self):
        self._cancel_save()
        self._cancel_stop()
        await self.async_save()
