"""Decode one atomic Inovelli radar report from the stock ZHA quirk."""

from dataclasses import dataclass

MAX_REPORTED_TARGETS = 4


@dataclass(frozen=True)
class RadarTrack:
    """A device-assigned radar track in sensor-local wire coordinates."""

    id: int
    x: int
    y: int
    z: int
    speed: int


def _bounded_int(value, minimum, maximum):
    if isinstance(value, int) and not isinstance(value, bool) and minimum <= value <= maximum:
        return int(value)
    return None


def decode_tracks(args):
    """Return complete, validated tracks. None means an invalid frame."""
    count = _bounded_int(getattr(args, "target_num", None), 0, MAX_REPORTED_TARGETS)
    targets = getattr(args, "targets", None)
    if count is None or not isinstance(targets, (list, tuple)) or len(targets) != count:
        return None
    tracks = []
    ids = set()
    for target in targets:
        track_id = _bounded_int(getattr(target, "target_id", None), -128, 127)
        position = [
            _bounded_int(getattr(target, key, None), -32768, 32767)
            for key in ("x", "y", "z", "dop")
        ]
        if track_id is None or track_id in ids or None in position:
            return None
        ids.add(track_id)
        tracks.append(RadarTrack(track_id, *position))
    return tuple(tracks)


def decode_zones(args):
    """Return the four last-reported detection-zone occupancy flags."""
    values = tuple(getattr(args, f"area_{index}", None) for index in range(1, 5))
    if not all(isinstance(value, int) and value in (0, 1) for value in values):
        return None
    return tuple(bool(value) for value in values)


def summarize_tracks(tracks, target_observed_at, native_vacant_at, observed_target_report):
    """Distinguish explicit vacancy from missing or stale target data."""
    if tracks is not None:
        return len(tracks), "fresh" if tracks else "vacant", target_observed_at, "target_report"
    if native_vacant_at is not None:
        return 0, "vacant", native_vacant_at, "native_occupancy"
    return None, "stale" if observed_target_report else "waiting", None, None
