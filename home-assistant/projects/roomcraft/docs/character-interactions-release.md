# Character movement, interactions and range correction

| Customer | Outcome | Observable acceptance |
| --- | --- | --- |
| Dashboard user | Follow a smooth character on the authored floor | Small jitter does not move the body, the ring follows the reading, the actor walks around solid furniture or holds if disconnected, and vacancy clears it. |
| Dashboard user | See inferred activities around the home | A walk-by stays in a walking pose. After at least three seconds of distinct observations near a reachable object, the actor approaches and plays a pose. Moving again releases it. Reduced motion keeps the pose static. |
| Layout author | Find and verify distance correction | The Home shortcut and Studio menu open the selected presence switch's alignment fields. Forward scale can correct depth while preserving the fitted origin. Publishing uses the existing draft export. |

The signal filter keeps a seven-plan-pixel movement dead band and requires a second nearby report to accept an implausibly large jump. The dwell check uses report timestamps and at least three distinct reports. Drawing frames and approximate occupancy markers cannot start a pose. An entered pose can remain at a held observation while the room stays occupied.

The navigator uses a bounded grid only when the direct swept segment is blocked. It smooths a route using the same clearance checks and invalidates cached geometry when furniture moves in Studio. Only a supported seat transition excludes its own furniture from the swept check. Static art uses the current models. Interaction props and pose transitions are transient Three.js meshes, with the same shared scene code in Home and Studio.

No layout migration, Home Assistant component change, sensor parameter write, or new device service is required. The heat map and coverage use the existing transform and stored observations. The hosted editor exposes the same alignment fields. Capturing fresh radar reports for a survey uses Home Assistant Studio's authenticated bridge.

Rebuild and reinstall the prior Home frontend from `70328e44193a77c82c4a7dbeb5d5ae21b6e9e872` or restore its protected pre-install backup. Use private Studio version 87 for hosted rollback. See the [deployment recovery guide](deployment.md).
