# Goals and reasons log

| Goal | Reason | Evidence of completion |
| --- | --- | --- |
| Make Roomcraft the official second-floor layout authoring tool | Avoid a static dashboard image becoming an uneditable, divergent copy and let HA users edit from their usual login | The HA `studio` panel hosts Roomcraft; import/export persists `roomcraft_layout` and the rendered plan |
| Keep all upstairs rooms level and visually coherent | Doorways should connect spaces without unexplained elevation changes | One shared floor plane through doors; per-room finishes are visible and editable |
| Match the furnished reference's perspective and detail | The PNG is the approved visual starting point | Furnished default, wall/window art, object atlas, and visual comparison in the user manual |
| Make photo-inspired play furnishings easy to rearrange | The living room changes as the baby grows, and the user wants the real play area represented in the editor and dashboard | 16 catalog variants across 11 designs; eight distinct objects placed on the plan; HA readback confirms their saved geometry and the original controls |
| Make windows read as openings in raised walls | Flat white rectangles break the scene's perspective | Default blue recesses return; added windows have inset glass, wall-side reveal, and a matching export |
| Make lamps and room fixtures editable and state-aware | Controls should remain anchored to the illustrated device as layouts change | Movable bedside lamp and room fixtures with optional bindings; export derives one state-colored HA control per linked entity |
| Put camera previews on the layout without exposing home media | A designer needs to place a preview, while camera images and access remain private | Editable camera thumbnail with `camera.*`/`image.*` bindings; the floor's porch HLS feed is verified and stays behind the signed-in HA session |
| Allow future layout changes without developer intervention | Furniture, walls, and finishes will change over time | Editor can change interior wall geometry, any wall finish, room floor finish, and objects; portable JSON works without source edits |
| Keep teams able to continue the work | Multiple disciplines will add real-time features | Documented model, renderer, bridge, runtime boundaries, tests, changelog, and decisions |
| Recover the calendar tablet and phone control path without rediscovering it | ADB pairing, its changing port, HA host access, and phone Remote are separate dependencies | [Tablet access runbook](tablet-access.md) records the verified chain, safe reconnect commands, persistence limits, and remaining reboot test; a private root-only ADB identity backup was verified on the HA host |
| Give future developers a complete device discovery map | Control names, availability, and HA area assignments are scattered across a large installation | Sanitized JSON covers every registered/live entity; area/domain pages and the old Main Dashboard map make the snapshot browsable |
| Keep the plan readable while preserving full home control | Detailed energy, climate, planning, and cleaning cards cannot all fit over a room drawing | Object-level actions plus a shipped drawer with On plan, All entities, search, registry availability, and six curated groups; the actual tablet display fit was checked, while touch QA remains open |
| Keep private home data private | Dashboard state and camera streams can disclose a home | Synthetic examples and a state-free public metadata snapshot; credentials, live media, personal identifiers, and raw exports remain private |

Update this table when a goal changes. Capture *why* a change was made in [the decision log](decisions.md) and *what* shipped in [the changelog](../CHANGELOG.md).

