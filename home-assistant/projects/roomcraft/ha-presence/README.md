# Roomcraft Presence for Home Assistant

This local integration lets a household use advanced radar data from an Inovelli Blue Series VZM32-SN already paired through ZHA. Roomcraft can use fresh detections for its scene, and the Home Assistant device still exposes its original occupancy and dimmer controls. It uses the installed ZHA quirk and never re-pairs or replaces it.

## Setup and verification

Copy the `custom_components/roomcraft_presence` directory into the Home Assistant config directory. Add `roomcraft_presence:` to the top level of `configuration.yaml`, validate the config, and restart Core. The empty YAML setting creates a persistent integration entry. An administrator can also add the integration from the Devices & Services UI after the files are installed.

Discovery creates a **Radar target count** sensor for each matching ZHA device and sends no radio configuration writes. Home Assistant Core 2026.10 uses separate registry entries for the ZHA device and its Roomcraft radar; the bridge links the companion device to the original switch. Run the admin action `roomcraft_presence.set_reporting` with `enabled: true` to enable reports. Include the original ZHA device registry ID as `device_id` if several supported switches are paired. The action binds only endpoint 1 / cluster `0xFC32` to the local coordinator and checks the target-reporting attribute after writing it. Validate with real motion before relying on target positions. A switch may stay quiet while nobody is moving.

The sensor exposes `tracking_schema: roomcraft-presence-v1`, a `tracks` array of `{id,x,y,z,speed}` objects, `observed_at` in epoch milliseconds, and four last-reported `zones` flags with their own `zones_observed_at` timestamp. These are anonymous radar tracks in sensor-local coordinates. The bridge preserves raw wire values. Calibrate the coordinate scale, facing, and position against known points before projecting tracks onto a floor plan.

Track count is unknown while waiting or after eight seconds without a valid frame. A valid zero-target frame or an explicit vacant state from the ZHA occupancy entity yields zero. The `track_status` and `observation_source` attributes distinguish these cases. Silence alone never yields zero. Zone flags are last reported, so clients can decide whether their timestamp is recent enough. The bridge excludes tracks, zones, status and timestamps from recorder attributes. HA can still record the target count under its usual history settings.

Version 1.1 records 25 cm grid hits from at most one target report per source every five seconds, grouped by minute. It stores seven rolling days in private Home Assistant storage and saves every five minutes and on clean shutdown. It starts collecting on install and runs with no dashboard open. It stores counts only for occupied cells, without target IDs, velocity, or raw coordinates. The authenticated `roomcraft_presence/heatmap` command allows 15, 60, 1440, or 10080 minutes and checks read permission for every requested radar entity. The existing Recorder target-count history cannot reconstruct previous positions.

For an installed copy, run `python ha-presence/install.py --host <HA-LAN-IP> --ssh-key <SSH-KEY-PATH> --backup-dir <PRIVATE-BACKUP-DIR> --restart` from the Roomcraft project root. It backs up the component, checks staged file hashes, validates Core configuration, and optionally restarts Core. Verify the command response and fresh observations before relying on the overlay.

The sensor reports radar targets, which can include interference or miss an occupant. The interface has no heart rate or respiration values. Detailed reporting can send updates about once a second while targets are detected. [Inovelli advanced mmWave configuration](https://help.inovelli.com/en/articles/12773613-blue-series-mmwave-presence-dimmer-switch-advanced-mmwave-configuration)

## Rollback

Run `roomcraft_presence.set_reporting` with `enabled: false` before removing the integration if detailed reports should stop. This restores the reporting flag without removing bindings that may already exist. Remove the Roomcraft Presence integration entry and its optional top-level YAML line, then remove its custom component files. Validate the restored configuration before restarting Core. The original Zigbee device, switch binding, and occupancy entity remain available to Home Assistant.

## Source checks

Run `python -m unittest discover -s home-assistant/projects/roomcraft/ha-presence/tests` from the repository root. The parser tests use synthetic records. They cover multiple targets, malformed frames, zone state, and the distinction between vacancy and staleness. Device reports and their cadence still require an installed-system readback.
