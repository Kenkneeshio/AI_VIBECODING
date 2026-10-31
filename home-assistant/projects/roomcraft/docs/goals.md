# Goals and reasons log

| Goal | Reason | Evidence of completion |
| --- | --- | --- |
| Make Roomcraft the official second-floor layout authoring tool | Avoid a static dashboard image becoming an uneditable, divergent copy and let HA users edit from their usual login | The HA `studio` panel hosts Roomcraft; import/export persists `roomcraft_layout` and the rendered plan |
| Keep all upstairs rooms level and visually coherent | Doorways should connect spaces without unexplained elevation changes | One shared floor plane through doors; per-room finishes are visible and editable |
| Match the furnished reference's perspective and detail | The PNG is the approved visual starting point | Furnished default, wall/window art, object atlas, and visual comparison in the user manual |
| Make windows read as openings in raised walls | Flat white rectangles break the scene's perspective | Default blue recesses return; added windows have inset glass, wall-side reveal, and a matching export |
| Allow future layout changes without developer intervention | Furniture, walls, and finishes will change over time | Editor can change interior wall geometry, any wall finish, room floor finish, and objects; portable JSON works without source edits |
| Keep teams able to continue the work | Multiple disciplines will add real-time features | Documented model, renderer, bridge, runtime boundaries, tests, changelog, and decisions |
| Keep private home data private | Dashboard state and camera streams can disclose a home | Synthetic public examples; credentials and live media remain server-side or in HA |

Update this table when a goal changes. Capture *why* a change was made in [the decision log](decisions.md) and *what* shipped in [the changelog](../CHANGELOG.md).

