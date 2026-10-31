# Roadmap and acceptance criteria

This page distinguishes what the current second-floor dashboard does from extensions that need their own implementation and verification. Sequence features by their data and security dependencies.

| Capability | Current state | Next acceptance criterion |
| --- | --- | --- |
| Rooms, interior walls, floor finishes | Editable in Roomcraft; layout version 2 | Geometry and rendered PNG round-trip from dashboard without lost changes |
| Furniture, baby play items, lights and lamps as objects | Illustrated catalog and editable placement | New variants keep perspective, accessible labels, and export quality |
| Home Assistant controls | Existing floor-plan markers control configured devices | Private binding editor validates entity domain and availability |
| Adaptive full screen | Canvas fit/zoom and focus mode | Dedicated tablet/kiosk shell at portrait, landscape, laptop, and wall display sizes |
| Real-time clock and weather | Relevant Home Assistant entities are available | Display current time and observed condition with unavailable/reduced-motion states |
| Animated lights and fans | Entity data available | State-bound artwork changes only with the real entity; manual control opens native details |
| Garage door | Cover entity available | Show actual open/closed/unavailable state and confirm the command path |
| Cameras | Garage and vacuum-map image cards work; front-door and porch proxies currently fail | Repair those feeds, then add authenticated, opt-in camera views with no token or URL in public assets |
| Vacuum live location | Vacuum map provides position and calibration points | Calibrate map-to-plan transform; hide marker when map or position is stale |
| General scene animation | Planned | Motion respects user preference and does not obscure controls |

## Delivery order

1. **Stable model and authoring.** Keep a single editable layout, migration path, strong import/export validation, and visual regression fixtures.
2. **Authenticated live shell.** Add a Home Assistant-hosted view or custom card that can read entity state without exposing private credentials to the public Site. Start with time, weather, and read-only lights/fans/garage status.
3. **Device commands.** Use native Home Assistant actions for lights, fans, and garage; show unavailable states and prevent accidental repeated calls.
4. **Vacuum calibration.** Provide a graphical matching workflow between the vacuum map and plan, record map identity, and test the transform against known positions.
5. **Camera and motion.** Add authenticated camera views and optional environment animation, with reduced-motion and tablet performance checks.

Every feature should document its data source, update frequency, offline behavior, accessibility, security boundary, and rollback path before release.

