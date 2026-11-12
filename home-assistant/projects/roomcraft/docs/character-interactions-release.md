# Character movement, interactions and range correction

| Customer | Outcome | Observable acceptance |
| --- | --- | --- |
| Dashboard user | Follow a smooth character on the authored floor | Small jitter does not move the body, the ring follows the reading, the actor walks around solid furniture or holds if disconnected, and vacancy clears it. |
| Dashboard user | See inferred activities around the home | A walk-by stays in a walking pose. After at least three seconds of distinct observations near a reachable object, the actor approaches and plays a pose. Moving again releases it. Reduced motion keeps the pose static. |
| Layout author | Find and verify distance correction | The Home shortcut and Studio menu open the selected presence switch's alignment fields. Forward scale can correct depth while preserving the fitted origin. Publishing uses the existing draft export. |

The signal filter keeps a seven-plan-pixel movement dead band and requires a second nearby report to accept an implausibly large jump. The dwell check uses report timestamps and at least three distinct reports. Drawing frames and approximate occupancy markers cannot start a pose. An entered pose can remain at a held observation while the room stays occupied.

The navigator uses a bounded grid only when the direct swept segment is blocked. It smooths a route using the same clearance checks and invalidates cached geometry when furniture moves in Studio. Only a supported seat transition excludes its own furniture from the swept check. Static art uses the current models. Interaction props and pose transitions are transient Three.js meshes, with the same shared scene code in Home and Studio.

No layout migration, Home Assistant component change, sensor parameter write, or new device service is required. The heat map and coverage use the existing transform and stored observations. The hosted editor exposes the same alignment fields. Capturing fresh radar reports for a survey uses Home Assistant Studio's authenticated bridge.

## Verification and deployment

- Source `329407484663802c6119a0b35f2318a36190c512` produced the 292-input manifest `sha256:4f632e3cf30f3fdc06689d2da0a8bd47a73240bc283dfdaf495f48105abbba4f`. Clean dependencies, 458 JavaScript tests, 38 Python tests, TypeScript, lint with 17 existing warnings, the production build, manifest verification, and Git's whitespace check passed.
- Chromium exercised the exact Home bundle with synthetic radar readings. It checked clearance around a sectional, a rejected jump, stable small jitter, raw marker positions, aquarium and sofa poses after the dwell, and standing after departure or disabling interactions. The exact Studio assets passed the Home shortcut, mobile inspector and measured-points dialog, forward scale while retaining the fitted origin, and desktop sensor chooser checks. The fixtures made no household device calls.
- Home Assistant returned the exact built Home and Studio assets on the LAN and HTTPS routes. Layout, plan, location and commute configuration matched the pre-install backup. The wall tablet reopened Roomcraft Home after a cold launch at 1920 × 1080 and displayed the current dashboard with an occupied character. Real walking and interaction were exercised in the synthetic fixture.
- Owner-private Studio version 88 was built from source `d4880961d01b1bdeb3b1601d6e81e9e40132880b` and published. Its Studio renderer matches the Home Assistant Studio asset byte-for-byte.

Rebuild and reinstall the prior Home frontend from `70328e44193a77c82c4a7dbeb5d5ae21b6e9e872` or restore its protected pre-install backup. Use private Studio version 87 for hosted rollback. See the [deployment recovery guide](deployment.md).
