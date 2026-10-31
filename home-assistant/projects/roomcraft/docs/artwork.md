# Artwork and graphics

Roomcraft's 1536 × 1024 reference plan was supplied for this project as a PNG. The editor's shell, floor textures, furniture atlas, baby/home atlases, and object overlays were created or derived for the Roomcraft layout workflow. They are bundled under `site/public/assets/` so the hosted editor and detailed PNG export use the same graphics. The manual screenshots in `docs/images/` show the editor and Home Assistant plan at the time of this release.

| File or group | Role |
| --- | --- |
| `floorplan.png` | Original furnished reference and visual target |
| `empty-shell.png`, `wall-free-shell.png` | Underlay art used when the editable layout is drawn |
| `illustrated-furniture-atlas.png` | Perspective furniture sprites |
| `baby-and-home-atlas.png`, `baby-and-home-overhead-atlas.png` | Small-item artwork for baby, home, safety, and decor inventory |
| `rug-sprite.png`, `bedroom-rug-sprite.png` | Floor object detail |
| `terrazzo-tile.png`, `sage-tile.png` | Room finish textures |

Preserve original source dimensions, transparency, and color alignment when replacing an asset. A new atlas should include a contact sheet or screenshot, a render comparison at 100% scale, and a note in the changelog. Check that a sprite's perspective, shadow direction, and wall attachment match the scene. Keep the reference PNG in source so future work can compare the rendered result without relying on an external attachment.

The public graphics show a fictionalized floor plan and are documentation/reference art. Do not add live camera frames, exact vacuum maps, household photos, or private access URLs to this folder.

