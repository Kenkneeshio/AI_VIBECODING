# Roomcraft and Home Assistant system audit

## Household outcomes

| Surface | Acceptance check |
| --- | --- |
| Home | Render the existing layout after a fresh launch, a network reconnect, and WebGL recovery. Keep live control bindings and camera behavior intact. |
| Studio | Preserve a recoverable local draft, verify the current Home revision before publishing, and use the same schema checks for native and hosted transfer. |
| Radar | Preserve avatar body size, avoid solid objects, and move live marks, coverage outlines, and heat-bin corners through one calibration. |
| Home Assistant Green | Validate Core configuration, dashboard contents, source availability, and resource byte hashes. Record health and update availability from Supervisor. |
| Tablet and workstation | Verify the Android Home app, running panel, ADB connection, scheduled heartbeat, and cold-launch behavior. |

## Findings and corrections

- Recreating Three.js on the same canvas retained texture upload flags. Reset WebGL state before the next renderer constructs its placeholder textures. Test initial offline startup, connection loss and recovery, and context restoration.
- A failed initial Studio import could be followed by export with only a newly fetched revision. Require a successful dashboard baseline, preserve the browser draft during import, and validate each project before image upload in either transport.
- Avatar clearance was encoded as a scale multiplier and could squeeze a character into a seat or narrow area. Keep the model scale and use swept clearance, seat support, and a separate observed marker.
- Heat bins used a fixed axis-aligned grid after projecting their centers. Transform their corners using the same radar calibration as the detection outline. The switch Inspector exposes rotation, lateral and forward scale, and skew without changing the fitted origin on Apply.
- Home display settings expose the scenery layers, headlights, heat-map opacity, presence characters, seating poses, and dock alignment as browser preferences.
- Watchdog covered projected object controls but missed supporting inputs. Generate coverage for camera triggers, TV, radar, travel time, weather, energy, and other configured sources. Recognize a connected radar waiting for coordinates and count issues beyond the visible detail list.

## Production observations

- Home Assistant Green returned a healthy, supported Supervisor. Core 2026.11.1 and OS 18.4 reported current for this installation. Core validation passed. Supervisor listed 16 backups and the host reported 14.4 GB free.
- Roomcraft Home contained the live and Studio views, with layout v2, reference revision 10, nine rooms and 76 items. The initial review found no orphaned controls. All three Waze sources reported current calibrated readings. The authenticated coverage API returned recorded radar bins.
- The Tuya lamp and five Emporia circuit groups remained unavailable after an entity refresh. The device registry had no exact alternate binding for the lamp. The energy hub and 22 other groups supplied month and billing readings. Two groups lacked a live power binding.
- The location map has two active Home Assistant tracking sources. Google Location Sharing still needs a configured source. Calendar and to-do integrations expose nine calendars and five lists. Four native door contacts are available for future mapping to their physical openings.
- The front-door latest-event endpoint returned a JPEG. Check continuously streamed and on-demand cameras through decoded media in the Home UI. The generic snapshot endpoint can fail independently of live playback.
- The Android Companion app held the Home role and was in the foreground. Tablet Keeper 0.1.1 retained its secure-settings permission. The Windows watchdog task had a successful recent run. Codex has a Windows startup entry and the workstation's AC sleep timeout is disabled.
- Watchdog 0.2.3 expanded the Home check from 25 to 126 sources. The background radar archive remained readable after the Core restart.

Both Studio transports read the dashboard revision around upload and verify the save. Home Assistant's Lovelace save lacks an atomic revision precondition. Two clients could still publish simultaneously after their final read. Use the revision status and layout snapshots to review and recover competing edits.

## Repeat the verification

1. Run the [Roomcraft release gate](release-standard.md) and the adjacent Watchdog, Tablet Keeper, Tuya LAN, and Ishioho source suites. Run the npm registry audit for the Studio dependency tree.
2. Use fixture telemetry to exercise controls, radar, camera modes, and weather without changing household device state. Use a disposable browser draft for import, export, and snapshot restore checks.
3. Compare the Home Assistant resource bytes and layout with the verified build and private pre-install backup. Check the private Site source version through the deployment API. Cold-launch the tablet and verify the visible Home view and read-only menus.
4. For physical radar accuracy, survey the sofa, dining area, and kitchen as separate reference spots. Use the measured fit and review its held-out error before exporting. Use a stationary test to verify sensor coverage at the sofa. [Calibration instructions](user-manual.md#track-presence-on-the-3d-plan)

Rebuild and reinstall `372ca0a5a7e2799e1554575f75ae3389a20c8d39` for the prior Roomcraft software. Private Studio version 84 is its hosted counterpart. Restore the Watchdog component and configuration from its verified pre-install archive for Watchdog rollback. [Deployment recovery](deployment.md)
