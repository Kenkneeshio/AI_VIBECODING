# Stardew v3 art and layout spec

Historical reference only. V3 placed the garage and stairs incorrectly and is no longer active; use the [v4 art and layout spec](stardew-v4-art-spec.md) and current `floorplan.json` for the installed geometry.

This is the public layout contract for the Stardew-inspired view. It describes the illustrated second floor and the controls that sit over it. It does not include the private reference floor plan, marked screenshot, photographs, address, entity inventory, or camera images.

## Runtime assets

| Appearance | Moving-interface map | Reduced-motion still |
| --- | --- | --- |
| Day | `ishioho/stardew-map-v3.png` | `ishioho/stardew-still-v3.png` |
| Night | `ishioho/stardew-night-map-v3.png` | `ishioho/stardew-night-still-v3.png` |

All four assets are 1774×887 PNGs with the same 2:1 crop, room boundaries, and furniture placement. The PNGs are generated raster art. There is no layered design file or deterministic source that reproduces v3 pixel for pixel; the v1 SVGs are historical independent reconstructions. The editable, typed geometry now lives in `ishioho/floorplan.json` and is rendered as SVG by `ishioho-floorplan.js`; it does not reproduce the painted PNG. Versioned v1/v2 assets remain for comparison and rollback. The dashboard selects the day/night asset from Home Assistant and renders weather and stateful device effects as interface layers over the art. No on/off state, forecast, room pin, text label, or camera thumbnail should be baked into an asset.

## Spatial invariants

- The whole central cutaway is the **second-floor unit**, viewed mostly from above with a slight angle that shows exterior walls and neighboring attached-building edges. The left and right roofs and the lower facade are context, not extra rooms or yard. Do not reintroduce a street, ground-level garden strip, separate cottage, or ground-floor garage into the apartment plan.
- The upper-left exterior stairs are the spot marked “stairs” in the homeowner's annotated art. Their Garage control is a popup anchor at `(9.8%, 21.4%)` of the contained image. The single-car garage is on the first floor below the unit and is shown only in the popup. The **covered Porch** is the railed landing by the blue door, around `(10.8%, 37.5%)`. **Entry** starts indoors beyond that door, around `(25.5%, 55%)`.
- The plant-filled **Balcony** is separate from the Porch, left of the Living room, around `(19.023%, 28.24%)`. Balcony plants are decorative unless an actual mapped entity is configured.
- Living occupies the upper-left interior, with its sofa along the left side of its rug. Dining is below it and Kitchen is lower-middle. Office is upper-middle. The primary Bedroom is upper-right, separated from Office by the narrow closet/corridor edge. Hallway connects the interior rooms. The small guest Bath and larger primary Bath occupy the lower-right edge; keep their partitions, doors, and fixtures within their respective rooms.
- The illustration contains a single property unit. Decorative doors, neighboring windows, roofs, exterior plants, and railings are not clickable controls. Place a room or device hotspot only after checking its physical room and current Home Assistant entity.

Pin percentages refer to the **contained 2:1 image**, not the full tablet viewport. Stardew now derives room pins, the garage stair popup location, and named fixture anchors from `ishioho/floorplan.json` after it loads. The installed dashboard supplies private device bindings and legacy coordinates only as a fallback; `ishioho/room-positions.json` is historical position metadata. Pokémon, Pokédex, and Animal Crossing keep their own art and coordinates.

## Updating the artwork

1. Keep private floor-plan and photo references outside this repository. Start a new versioned raster set from the latest approved day artwork and a written list of geometry changes. Ask the image editor to preserve the 2:1 crop, fixed room geometry, separate Porch/Balcony, stairhead, blue entry door, and all interior partitions. Use only original drawn imagery; do not paste game sprites or source screenshots into the result.
2. Inspect the entire day image at full size and on the target landscape tablet. Check doors, bathrooms, closets, sofa, roof seams, exterior approach, and visual artifacts before deriving night art. Generate the night version from the approved day geometry, changing lighting and sky only. Create matching still variants for reduced-motion use; the artwork must not shift when appearance or motion setting changes.
3. Add the four new versioned filenames, update the Stardew profile in `ishioho-environment.js`, and adjust the matching polygons, anchors, openings, furnishings, and optional light effect polygons in `ishioho/floorplan.json` when framing or physical layout changes. Keep the prior versioned files for rollback. Bind real `scene_devices` entries to stable model anchor IDs in the private dashboard configuration; keep real entity IDs out of the public model. The synthetic public example must use fictional entities.
4. Run `node scripts/verify-source.cjs` and `node tests/run.cjs`, stage and verify a package, then check day/night and reduced-motion on the target device. Open the Garage popup at the stairhead and verify any configured camera feed. Confirm Home Assistant state drives fixture appearance and that the UI has no inert or misplaced hotspot. Do not infer that a decorative fixture or plant has a real device.

The installed Home Assistant dashboard and `www/` files are separate from this repository. Follow the [README install and update steps](README.md#maintain-and-update) to deploy an approved art version; a GitHub commit alone does not change a running tablet.
