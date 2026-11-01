# Roadmap and acceptance criteria

This page distinguishes what the current second-floor dashboard does from extensions that need their own implementation and verification. Sequence features by their data and security dependencies.

| Capability | Current state | Next acceptance criterion |
| --- | --- | --- |
| Rooms, interior walls, floor finishes | Editable in Roomcraft; layout version 2 | Geometry and rendered PNG round-trip from dashboard without lost changes |
| Furniture, baby play items, lights and lamps as objects | Illustrated catalog includes 16 photo-inspired variants across 11 new designs. Eight play-area objects are placed separately in the living room; bedside and office desk lamps, room fixtures, and the five-blade ceiling fan remain movable. Some reference details remain baked into the PNG. | Confirm the fireplace wall before placing the new mantel and side shelf; add remaining baked furniture as independent objects and compare perspective at 100% after export |
| Home Assistant controls | Object-bound controls derive from private entity bindings; the latest HA export/readback confirmed 41 editable items, 14 object controls, and two managed camera frames, including separate fan and light targets | Verify actual device actions and unavailable states without assuming that every scene has an independent state sensor |
| Ceiling fan and light | Fan artwork monitors its motor switch; blade tap and hold run separate On/Off scenes; the center target runs a light-toggle scene. Its five-blade graphic rotates in stepped frames only with motor-on state and stops under reduced motion. Placement in the living room is provisional. | Confirm the physical room, move both targets together if needed, and bind an independent fan-light state only if Home Assistant exposes one |
| Device discovery and room mapping | Dated [sanitized inventory](ha-inventory/README.md) covers all registry and live-state entries; some devices, including the ceiling fan, have no HA area and some lights are unavailable | Confirm physical placement before binding each object; refresh metadata without publishing live values |
| Compact control menu | Drawer shipped with On plan, All entities, search, registry availability, and six curated Main Dashboard sections | Check search, unavailable/disabled labels, category navigation, and touch fit on the target tablet; keep the old dashboard as a reference |
| Adaptive full screen and tablet recovery | HA-hosted Studio panel plus canvas fit/zoom/focus. An exact 16:9 image uses the full original x0–1536 width and y80–944 of the unchanged 1536 × 1024 project. Private actual-tablet captures showed both original house sides, no side gutters, new state graphics, and two camera widgets. Home Assistant Companion is the tablet's default Android Home app and reopened after an app force-stop. | Verify physical touch alignment, editor/drawer targets, portrait and other screen sizes; verify dashboard launch after a supervised reboot using the [tablet access runbook](tablet-access.md) |
| Real-time clock and weather | Native HA values remain on the plan and Live Home view; the plan labels now use a quieter translucent style without repeated prefixes | Add unavailable states and screen-specific presentation |
| Live device graphics | Bound lights, fan, AC, windows, and door/garage controls use high-contrast active/inactive treatments from HA state. Unknown or unrecognized values stay neutral; scenes remain action-ready. The fan alone has stepped motion. | Check appearance, accessible actions, reduced motion, and unavailable behavior on the physical tablet; keep broader environment animation optional |
| Garage door | Native HA cover card is present in Live Home | Verify actual open/closed/unavailable state and the command path on device |
| Cameras | Separate front-door and garage `cameraThumbnail` items use independent authenticated HA media. The front door shows a dated event still because live playback is unavailable; the garage displayed **LIVE** after an explicit start and decoded MJPEG frame. | Verify garage playback over time and recovery, front-door event freshness, and independent unavailable behavior without copying media or URLs to public assets |
| Vacuum live location | Vacuum map provides position and calibration points | Calibrate map-to-plan transform; hide marker when map or position is stale |
| General scene animation | Planned | Motion respects user preference and does not obscure controls |

## Delivery order

1. **Stable model and authoring.** Keep a single editable layout, migration path, strong import/export validation, and visual regression fixtures.
2. **Authenticated Studio shell.** The HA-hosted custom card now owns dashboard transfer through the signed-in user's session. Keep its behavior aligned with the owner-private cloud bridge and test tablet sizing.
3. **Device state and commands.** Native HA cards show time, weather, lights, fan, garage, and vacuum map. Roomcraft object overlays now supply room-bound visual state without changing layout geometry; extend the same adapter pattern only with verified sources and safe native actions.
4. **Vacuum calibration.** Provide a graphical matching workflow between the vacuum map and plan, record map identity, and test the transform against known positions.
5. **Camera and motion.** Dated front-door preview, tap-start garage live media, and stepped fan motion form the baseline. Test stream recovery and tablet performance, then add optional environment animation with reduced-motion support.

Every feature should document its data source, update frequency, offline behavior, accessibility, security boundary, and rollback path before release.

