"""Exercise the stable bridge contract using synthetic ZHA command payloads."""

import importlib.util
from pathlib import Path
import sys
from types import SimpleNamespace
import unittest

PATH = Path(__file__).resolve().parents[1] / "custom_components/roomcraft_presence/protocol.py"
SPEC = importlib.util.spec_from_file_location("roomcraft_presence_protocol", PATH)
PROTOCOL = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = PROTOCOL
SPEC.loader.exec_module(PROTOCOL)


def target(identifier, x=20, y=165, z=-33, dop=-2):
    return SimpleNamespace(target_id=identifier, x=x, y=y, z=z, dop=dop)


class TestRadarProtocol(unittest.TestCase):
    def test_two_tracks_preserve_signed_wire_values(self):
        report = SimpleNamespace(target_num=2, targets=[target(-4), target(7, x=-9)])
        self.assertEqual(
            PROTOCOL.decode_tracks(report),
            (
                PROTOCOL.RadarTrack(-4, 20, 165, -33, -2),
                PROTOCOL.RadarTrack(7, -9, 165, -33, -2),
            ),
        )

    def test_explicit_zero_tracks_is_a_valid_report(self):
        self.assertEqual(PROTOCOL.decode_tracks(SimpleNamespace(target_num=0, targets=[])), ())

    def test_reject_incomplete_ambiguous_or_malformed_frames(self):
        for count, targets in (
            (2, [target(3)]),
            (1, [target(3), target(4)]),
            (2, [target(3), target(3)]),
            (5, [target(i) for i in range(5)]),
            (1, [target(3, y=32768)]),
            (1, [target("3")]),
            (True, [target(3)]),
            (1, None),
        ):
            with self.subTest(count=count, targets=targets):
                self.assertIsNone(
                    PROTOCOL.decode_tracks(SimpleNamespace(target_num=count, targets=targets))
                )

    def test_zone_status_preserves_order_and_requires_four_valid_flags(self):
        self.assertEqual(
            PROTOCOL.decode_zones(SimpleNamespace(area_1=1, area_2=0, area_3=1, area_4=0)),
            (True, False, True, False),
        )
        self.assertIsNone(
            PROTOCOL.decode_zones(SimpleNamespace(area_1=1, area_2=2, area_3=0, area_4=0))
        )
        self.assertIsNone(PROTOCOL.decode_zones(SimpleNamespace(area_1=1)))

    def test_missing_motion_remains_unknown_until_an_explicit_vacancy(self):
        summarize = PROTOCOL.summarize_tracks
        self.assertEqual(summarize(None, None, None, False), (None, "waiting", None, None))
        self.assertEqual(summarize(None, None, None, True), (None, "stale", None, None))
        self.assertEqual(summarize((), 122, None, True), (0, "vacant", 122, "target_report"))
        self.assertEqual(summarize(None, None, 143, True), (0, "vacant", 143, "native_occupancy"))
        self.assertEqual(summarize((target(2),), 162, 143, True), (1, "fresh", 162, "target_report"))
