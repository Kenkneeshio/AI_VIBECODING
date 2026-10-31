# Roadmap and acceptance criteria

This page distinguishes what the current second-floor dashboard does from extensions that need their own implementation and verification. Sequence features by their data and security dependencies.

| Capability | Current state | Next acceptance criterion |
| --- | --- | --- |
| Rooms, interior walls, floor finishes | Editable in Roomcraft; layout version 2 | Geometry and rendered PNG round-trip from dashboard without lost changes |
| Furniture, baby play items, lights and lamps as objects | Illustrated catalog and editable placement | New variants keep perspective, accessible labels, and export quality |
| Home Assistant controls | Existing floor-plan markers control configured devices | Private binding editor validates entity domain and availability |
| Adaptive full screen | HA-hosted Studio panel plus canvas fit/zoom and focus mode | Confirm no clipping at portrait, landscape, laptop, and wall display sizes; add kiosk controls |
| Real-time clock and weather | Relevant Home Assistant entities are available | Display current time and observed condition with unavailable/reduced-motion states |
| Animated lights and fans | Entity data available | State-bound artwork changes only with the real entity; manual control opens native details |
| Garage door | Cover entity available | Show actual open/closed/unavailable state and confirm the command path |
| Cameras | Garage and vacuum-map image cards work; front-door and porch proxies currently fail | Repair those feeds, then add authenticated, opt-in camera views with no token or URL in public assets |
| Vacuum live location | Vacuum map provides position and calibration points | Calibrate map-to-plan transform; hide marker when map or position is stale |
| General scene animation | Planned | Motion respects user preference and does not obscure controls |

## Delivery order

1. **Stable model and authoring.** Keep a single editable layout, migration path, strong import/export validation, and visual regression fixtures.
2. **Authenticated Studio shell.** The HA-hosted custom card now owns dashboard transfer through the signed-in user's session. Keep its behavior aligned with the owner-private cloud bridge and test tablet sizing.
3. **Device state and commands.** Native HA cards show time, weather, lights, fan, garage, vacuum map, and the working garage camera. Add room-bound artwork states, unavailable handling, and safe native actions without changing layout geometry.
4. **Vacuum calibration.** Provide a graphical matching workflow between the vacuum map and plan, record map identity, and test the transform against known positions.
5. **Camera and motion.** Add authenticated camera views and optional environment animation, with reduced-motion and tablet performance checks.

Every feature should document its data source, update frequency, offline behavior, accessibility, security boundary, and rollback path before release.

