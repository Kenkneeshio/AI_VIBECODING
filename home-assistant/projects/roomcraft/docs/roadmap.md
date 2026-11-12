# Roadmap and acceptance criteria

The [architecture guide](architecture.md) describes the implemented system. The [dated audit](architecture-audit-2026-11-12.md) records evidence and deficiencies. This roadmap is organized around the builder experience rather than historical catalog counts.

| Capability | Implemented | Next acceptance |
| --- | --- | --- |
| One design | Home and Studio share layout v2 and the 3D renderer | Save/reload parity across both transports and recovery after conflict |
| Home authoring | Rooms, floors, walls, fences, joins, furniture, dimensions, bindings | Sanitized mouse/touch regression fixtures covering all basic operations |
| Terrain authoring | Brush edits, placed terrain props, coast/road settings, grouped landmarks | Per-instance recipe editing, transform handles and configurable shape paths |
| Edit recovery | Conservative terrain/room repair, rejected-edit rollback, manual Check & repair and shared save audit | [Safe-editing acceptance](edit-safety.md), including preservation of Undo/Redo and protected deployment readback |
| Interactive controls | Actual-state object art, separate fan/light, rich light controls | Continue unavailable/stale and touch-target verification for each capability |
| Live features | Weather/day-night, cameras, radar avatars, vacuum, TV, utilities, traffic | Data-provider availability and physical-device checks remain separate from art tests |
| Calibration | Radar alignment/heat map and LiDAR survey/ruler | Verified physical reference points, clear confidence and stale-data treatment |
| Performance | Per-browser graphics/FPS choices and bounded high-quality preview | Repeatable target-tablet frame and memory budgets with representative media |
| Engineering | Source ownership guide, architecture guard, deterministic manifest, shared publication checks | One complete model validator, property registry, domain commands and compiler extraction |

## Ordered engineering stages

1. **Complete the shared model boundary.** Move remaining editor validation into portable domain code. Cover finite geometry, IDs, references, bounds and compatibility in fixtures used by both publication transports.
2. **Make recipes editable.** Start with one scenery recipe whose schema defines ID, parameters, units, defaults, bounds, Inspector controls, placement and collision. Prove edit, undo, export, save and reload before converting the other scenery groups.
3. **Unify commands and history.** Introduce domain commands one feature at a time, retaining snapshot replay during migration.
4. **Extract scene composition.** Separate pure compilation, world generation and GPU lifecycle while preserving the single Home/Studio renderer.
5. **Make browser acceptance repeatable.** Bring sanitized terrain, furniture, save-conflict, media-failure and wide-camera fixtures into the repository and CI where practical.
6. **Expand only through contracts.** New art families, sensor integrations and environment themes declare editable parameters, state semantics, reduced-motion behavior, performance limits and rollback.

Do not turn these into a single engine rewrite. Every stage preserves customer layout data and ships its own usable improvement. Follow the [release standard](release-standard.md) for evidence and deployment.

