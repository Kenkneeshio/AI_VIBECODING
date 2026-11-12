"""Bounded anonymous coverage summaries in sensor-local coordinates."""

from collections import Counter

CELL_CM = 25
SAMPLE_MS = 5_000
MINUTE_MS = 60_000
WINDOWS = (15, 60, 1440, 10080)
MAX_SOURCES = 12
MAX_POSITION = 800
SLOTS_PER_MINUTE = MINUTE_MS // SAMPLE_MS
MAX_CELL = MAX_POSITION // CELL_CM


def _integer(value):
    return type(value) is int


def _array(value, size):
    return isinstance(value, (list, tuple)) and len(value) == size


class CoverageHistory:
    """Aggregate one observation per source every five seconds, without track IDs."""

    def __init__(self, now_ms, saved=None):
        self._buckets = {}
        self._last = {}
        self.dirty = False
        if not isinstance(saved, dict):
            return
        earliest = self._start(now_ms, WINDOWS[-1])
        latest = now_ms // MINUTE_MS
        for source, data in sorted(saved.items())[:MAX_SOURCES]:
            if not isinstance(data, dict) or not isinstance(data.get("minutes"), list):
                continue
            last_slot = data.get("last_slot")
            if not _integer(last_slot) or not earliest <= last_slot // SLOTS_PER_MINUTE <= latest:
                continue
            minutes = {}
            for row in data["minutes"]:
                if not _array(row, 3):
                    continue
                minute, samples, entries = row
                if (not _integer(minute) or not earliest <= minute <= latest
                        or not _integer(samples) or not 0 < samples <= SLOTS_PER_MINUTE
                        or not isinstance(entries, list)):
                    continue
                hits = Counter()
                for cell in entries:
                    if not _array(cell, 3) or not all(_integer(value) for value in cell):
                        continue
                    x, y, count = cell
                    if abs(x) <= MAX_CELL and abs(y) <= MAX_CELL and 0 < count <= samples:
                        hits[x, y] = count
                if hits:
                    minutes[minute] = (samples, hits)
            if minutes:
                self._buckets[source] = minutes
                self._last[source] = last_slot
        self.dirty = self.snapshot() != saved

    @staticmethod
    def _start(now_ms, minutes):
        return now_ms // MINUTE_MS - minutes + 1

    def record(self, source, now_ms, tracks):
        slot = now_ms // SAMPLE_MS
        if slot <= self._last.get(source, -1):
            return
        cells = {
            ((track.x + CELL_CM // 2) // CELL_CM, (track.y + CELL_CM // 2) // CELL_CM)
            for track in tracks if abs(track.x) <= MAX_POSITION and abs(track.y) <= MAX_POSITION
        }
        if not cells:
            return
        if source not in self._buckets and len(self._buckets) == MAX_SOURCES:
            self.prune(now_ms)
            if len(self._buckets) == MAX_SOURCES:
                return
        minute = now_ms // MINUTE_MS
        buckets = self._buckets.setdefault(source, {})
        samples, hits = buckets.get(minute, (0, Counter()))
        hits.update(cells)
        buckets[minute] = (samples + 1, hits)
        self._last[source] = slot
        self.dirty = True

    def prune(self, now_ms):
        earliest = self._start(now_ms, WINDOWS[-1])
        for source, buckets in tuple(self._buckets.items()):
            for minute in tuple(buckets):
                if minute < earliest:
                    del buckets[minute]
                    self.dirty = True
            if not buckets:
                del self._buckets[source]
                del self._last[source]

    def read(self, sources, now_ms, minutes):
        """Return only aggregated cell centers and frequencies for the selected window."""
        if minutes not in WINDOWS:
            raise ValueError("Unsupported coverage history window")
        start = self._start(now_ms, minutes)
        end = now_ms // MINUTE_MS
        result = {}
        for entity_id, source in sources.items():
            samples = 0
            hits = Counter()
            for minute, (count, cells) in self._buckets.get(source, {}).items():
                if start <= minute <= end:
                    samples += count
                    hits.update(cells)
            result[entity_id] = {
                "samples": samples,
                "cells": [{"x": x * CELL_CM, "y": y * CELL_CM, "hits": count}
                          for (x, y), count in sorted(hits.items())],
            }
        return {"from": start * MINUTE_MS, "to": now_ms, "cellSize": CELL_CM, "sources": result}

    def snapshot(self):
        """Serialize stable minute buckets for Home Assistant's private storage."""
        return {
            source: {
                "last_slot": self._last[source],
                "minutes": [[minute, samples, [[x, y, count] for (x, y), count in sorted(hits.items())]]
                            for minute, (samples, hits) in sorted(buckets.items())],
            }
            for source, buckets in sorted(self._buckets.items())
        }
