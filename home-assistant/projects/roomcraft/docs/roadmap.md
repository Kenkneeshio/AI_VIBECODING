# Roadmap and acceptance criteria

This page distinguishes what the current second-floor dashboard does from extensions that need their own implementation and verification. Sequence features by their data and security dependencies.

| Capability | Current state | Next acceptance criterion |
| --- | --- | --- |
| Rooms, interior walls, floor finishes | Editable in Roomcraft; layout version 2 | Geometry and rendered PNG round-trip from dashboard without lost changes |
| Furniture, baby play items, lights and lamps as objects | Illustrated catalog; bedside lamp and eight room fixtures have movable positions. Some reference details remain baked into the PNG. | Add remaining furniture as independent sprites; compare at 100% after movement and export |
| Home Assistant controls | Existing markers plus object-bound light/fan controls derive from private entity bindings | Verify actual devices, unavailable state, and one control per entity on the live plan |
| Adaptive full screen | HA-hosted Studio panel plus canvas fit/zoom/focus and a tested tablet-sized browser view | Confirm portrait, landscape, laptop, and wall display sizes on actual devices; add kiosk controls |
| Real-time clock and weather | Native HA labels/cards are present on the plan and Live Home view | Add unavailable/reduced-motion states and screen-specific presentation |
| Animated lights and fans | Linked fixtures use native state-colored HA icons; fixture art itself is static | Animate only with real state, respect reduced-motion, and retain native details |
| Garage door | Native HA cover card is present in Live Home | Verify actual open/closed/unavailable state and the command path on device |
| Cameras | Editor can place a preview; HA overlay can show latest event still from its authenticated proxy. A battery doorbell's P2P live stream currently times out. | Verify event still and unavailable behavior on device; repair live stream separately, without copying media or URLs to public assets |
| Vacuum live location | Vacuum map provides position and calibration points | Calibrate map-to-plan transform; hide marker when map or position is stale |
| General scene animation | Planned | Motion respects user preference and does not obscure controls |

## Delivery order

1. **Stable model and authoring.** Keep a single editable layout, migration path, strong import/export validation, and visual regression fixtures.
2. **Authenticated Studio shell.** The HA-hosted custom card now owns dashboard transfer through the signed-in user's session. Keep its behavior aligned with the owner-private cloud bridge and test tablet sizing.
3. **Device state and commands.** Native HA cards show time, weather, lights, fan, garage, vacuum map, and the working garage camera. Add room-bound artwork states, unavailable handling, and safe native actions without changing layout geometry.
4. **Vacuum calibration.** Provide a graphical matching workflow between the vacuum map and plan, record map identity, and test the transform against known positions.
5. **Camera and motion.** Add authenticated camera views and optional environment animation, with reduced-motion and tablet performance checks.

Every feature should document its data source, update frequency, offline behavior, accessibility, security boundary, and rollback path before release.

