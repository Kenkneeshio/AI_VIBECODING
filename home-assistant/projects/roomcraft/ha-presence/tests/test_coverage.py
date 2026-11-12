"""Check collection, privacy and rolling retention without Home Assistant."""

import importlib.util
from pathlib import Path
from types import SimpleNamespace
import unittest

PATH = Path(__file__).resolve().parents[1] / "custom_components/roomcraft_presence/coverage.py"
SPEC = importlib.util.spec_from_file_location("roomcraft_presence_coverage", PATH)
COVERAGE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(COVERAGE)

NOW = 12000 * COVERAGE.MINUTE_MS
ENTITY = "sensor.test_radar"


def target(x, y):
    return SimpleNamespace(x=x, y=y, id=7, z=20, speed=9)


class CoverageHistoryTest(unittest.TestCase):
    def test_throttled_anonymous_bins_and_no_invented_vacancy_samples(self):
        history = COVERAGE.CoverageHistory(NOW)
        history.record("first", NOW, [target(-18, 160), target(-20, 159), target(810, 20)])
        history.record("first", NOW + 1000, [target(150, 150)])
        history.record("first", NOW + 5000, [])
        history.record("first", NOW + 7000, [target(-15, 165), target(25, 50)])
        reading = history.read({ENTITY: "first"}, NOW + 8000, 15)
        self.assertEqual(reading["sources"][ENTITY], {
            "samples": 2, "cells": [{"x": -25, "y": 150, "hits": 1},
                                     {"x": -25, "y": 175, "hits": 1},
                                     {"x": 25, "y": 50, "hits": 1}],
        })
        self.assertNotIn("speed", str(history.snapshot()))
        self.assertNotIn("track", str(history.snapshot()))

    def test_source_separation_round_trip_and_expiry(self):
        history = COVERAGE.CoverageHistory(NOW)
        history.record("first", NOW, [target(0, 50)])
        history.record("second", NOW, [target(-75, 25)])
        saved = history.snapshot()
        loaded = COVERAGE.CoverageHistory(NOW + 1000, saved)
        self.assertEqual(loaded.snapshot(), saved)
        self.assertFalse(loaded.dirty)
        loaded.record("first", NOW + 1000, [target(25, 25)])
        self.assertEqual(loaded.snapshot(), saved)
        one_hour_later = NOW + 60 * COVERAGE.MINUTE_MS
        self.assertEqual(loaded.read({ENTITY: "first"}, one_hour_later, 60)["sources"][ENTITY]["samples"], 0)
        result = loaded.read({ENTITY: "first"}, one_hour_later, 1440)["sources"]
        self.assertEqual(result, {ENTITY: {"samples": 1, "cells": [{"x": 0, "y": 50, "hits": 1}]}})
        expired = NOW + COVERAGE.WINDOWS[-1] * COVERAGE.MINUTE_MS
        loaded.prune(expired)
        self.assertEqual(loaded.snapshot(), {})
        self.assertTrue(loaded.dirty)
        self.assertEqual(COVERAGE.CoverageHistory(expired, saved).snapshot(), {})

    def test_storage_rejects_corrupt_or_excessive_fields(self):
        minute = NOW // COVERAGE.MINUTE_MS
        slot = NOW // COVERAGE.SAMPLE_MS
        saved = {"first": {"last_slot": slot, "minutes": [
            [minute - 1, 30, [[1, 1, 25]]], [minute, 1, [[33, 0, 1], [0, 0, 2], [0, 2, 1]]],
            [minute + 1, 1, [[0, 0, 1]]], ["bad"],
        ]}}
        restored = COVERAGE.CoverageHistory(NOW, saved)
        self.assertEqual(restored.snapshot(), {"first": {"last_slot": slot, "minutes": [[minute, 1, [[0, 2, 1]]]]}})
        self.assertTrue(restored.dirty)
        with self.assertRaises(ValueError):
            restored.read({ENTITY: "first"}, NOW, 16)
