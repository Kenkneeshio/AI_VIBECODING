# Ishioho floor-plan format

[`ishioho/floorplan.json`](ishioho/floorplan.json) is the **default spatial model** for the Stardew view. It is ordinary JSON with a published [version 1 JSON Schema](ishioho/floorplan.schema.json), checked at runtime for valid geometry and references, and rendered as browser SVG by [`ishioho-floorplan.js`](ishioho/ishioho-floorplan.js). The day/night PNGs are aligned illustration skins. Rooms, partitions, openings, stairs, furniture, and control locations exist as data even when the illustration is hidden. The **Plan** button shows the SVG alone; room shapes in that view can open their configured Home Assistant controls.

This is an Ishioho-specific diagram format using standard JSON, JSON Schema Draft 2020-12, and SVG. It is **not** an IFC building model, a GeoJSON map, or a source of surveyed measurements. The bundled geometry follows the homeowner's floor plan and annotated references; coordinates are visual alignments that should be checked on the target screen.

## Coordinate space

The model's fixed `coordinateSystem.viewBox` is `[0, 0, 100, 50]`: origin at the upper left, x increasing right, y increasing down. This 2:1 canvas matches the contained 1774×887 Stardew assets. Coordinates are diagram units, not feet, meters, or geographic position. To convert a model point `[x, y]` to the dashboard's map percentages, use `x% = x` and `y% = 2 × y`. For example, the far-left exterior stair anchor `[7.8, 31.5]` appears at `(7.8%, 63%)`. Do not base positions on the whole tablet viewport; letterboxing and screen size must not shift them.

The model groups elements by `levelId`. `home` is the second-floor unit and default rendered level; `garage` is a separate first-floor, single-car garage under the main home. Level numbers express vertical order, not measured elevation. The long `garage_stairs` space runs down the far-left exterior edge from the upper porch. Its anchor opens the Garage popup, while a porch-stair gate and `connections[].from`/`to` record access to the lower garage. The garage footprint and vehicle door are to the right of the stair, on the lower level; they do not render as a room on the upstairs Plan view. The separate planted `balcony`, covered `porch`, and indoor `entryway` have distinct polygons and IDs.

| Collection | Meaning | Key geometry |
| --- | --- | --- |
| `levels` | Floors and their approximate footprints | `footprint`: polygon |
| `spaces` | Rooms and exterior spaces with stable IDs and control anchors | `polygon`, `anchor`: point |
| `walls` | Exterior/interior partitions, rails, and parapets | `segment`: two points |
| `openings` | Doors, passages, windows, and garage door | `segment`, optional `connects` space IDs |
| `objects` | Placed furnishings and fixtures such as sofa, bed, desk, planters, stairs, and bath fixtures | `geometry`: point, rectangle, or polygon |
| `deviceAnchors` | Named locations for optional live device art | `point`, optional `effectPolygon` |
| `connections` | Links between spaces on different levels | `from` and `to` level/space IDs |

An element's `id` is a stable reference, not its display label. Keep IDs when refining geometry. The `kind` describes how an element is drawn or classified; `label` is human-readable. A rectangle uses `{ "type": "rect", "x": 1, "y": 2, "width": 3, "height": 4 }`; point and polygon shapes use `{ "type": "point", "x": 1, "y": 2 }` and `{ "type": "polygon", "points": [[1,2],[3,2],[3,4]] }`. Numeric geometry is bounded by the viewBox. A rectangle's far edge must also stay inside it. The runtime validator checks nonzero segments/polygons, unique IDs within collections, and level/space references in addition to the JSON Schema's field types and ranges.

## Home Assistant bindings

Keep real Home Assistant entity IDs, cameras, secrets, and inventories in the **private dashboard configuration**, never in `floorplan.json`. In the Stardew view, the panel loads `/local/ishioho/floorplan.json` and uses matching `spaces[].id` anchors for configured `rooms[].id` pins. The configured `garage` room uses the upstairs `garage_stairs` anchor. Other theme views retain their own artwork and room coordinates. If a configured room has no matching space, its explicit `x`/`y` pin position remains the fallback.

For an optional animated fixture, set `scene_devices[].anchor` to a `deviceAnchors[].id` and keep `scene_devices[].entity` in the private dashboard. The model then supplies its position. A light anchor may also have `effectPolygon` in **model coordinates**; it defines the part of the illustration shaded while that mapped light reports off. When that polygon exists, it takes precedence over a legacy `scene_devices[].shade`. The private `shade` and `x`/`y` fields remain fallbacks for unanchored fixtures. Geometry never turns a decorative object into a control by itself: only a configured, valid live entity can do that. See [the configuration example](examples/dashboard.json) for synthetic bindings.

The public model contains no Home Assistant entity IDs, but it does disclose approximate room arrangement and object labels. Home Assistant serves installed `www` files through `/local/` without authentication. Review the model before installing or publishing it if the layout itself is sensitive.

## Edit and verify

1. Edit `floorplan.json` first when changing a room boundary, opening, furniture placement, pin, fixture anchor, or inter-floor relationship. Keep `schemaVersion: 1` and the 2:1 viewBox. Use a new schema version if the structure or coordinate contract changes.
2. Regenerate or revise the four matching day/night and motion/still Stardew PNGs only if the illustration needs to change; keep them aligned to the model. The PNGs are visual skins, not editable sources of the geometry. See the [Stardew v4 art spec](stardew-v4-art-spec.md).
3. Keep installed private room/entity bindings current. A room ID must match a modeled space to inherit its anchor; device art uses a named `anchor`. Do not copy real configuration into the public example.
4. Validate the JSON against `floorplan.schema.json` with a Draft 2020-12 validator, then run `node scripts/verify-source.cjs` and `node tests/run.cjs`. Stage and verify an install package as described in the [README](README.md#install). Check both illustrated and **Plan** modes on the target tablet, including the Garage popup on the stair, day/night alignment, and any live fixture behavior.

The legacy [`room-positions.json`](ishioho/room-positions.json) still documents older and theme-specific pin coordinates. The Stardew runtime uses `floorplan.json` for matching pins and named fixture anchors.
