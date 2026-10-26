# Stardew v4 art and layout spec

This is the public layout contract for the active Stardew-inspired view. It records the relationship between the illustrated second-floor home, the lower garage, and the editable [`floorplan.json`](ishioho/floorplan.json). Private photos, marked screenshots, exact address, entity inventory, and camera images are not included.

## Runtime assets

| Appearance | Moving-interface map | Reduced-motion still |
| --- | --- | --- |
| Day | `ishioho/stardew-map-v4.png` | `ishioho/stardew-still-v4.png` |
| Night | `ishioho/stardew-night-map-v4.png` | `ishioho/stardew-night-still-v4.png` |

All four assets use the same 1774×887, 2:1 crop and geometry. They are generated raster art; the v1 SVGs are historical reconstructions and cannot recreate these PNGs. The JSON model is the editable, typed source for rooms, walls, doors, stairs, furnishings, and device anchors. The dashboard renders that model as a separate SVG **Plan** view. Home Assistant supplies weather, device state, and day/night selection as interface layers; no room pin, control state, forecast, or camera image is baked into the art.

## Spatial invariants

- The principal cutaway is the **second-floor unit**, visibly elevated above the street-level facade. The plant-filled Balcony is on the left of Living, separate from the covered Porch. The blue front door leads from the Porch to the indoor Entry.
- A long exterior stair descends along the **far-left edge** from the upper Porch. Its upstairs model space is `garage_stairs`, approximately `x=5..11, y=22.5..44.5` in the 100×50 diagram. The Garage popup anchor is `[7.8,31.5]`, or `(7.8%,63%)` of the contained image. The Porch remains near `(10.8%,37.5%)`; Entry remains near `(25.5%,55%)`.
- The **single-car garage** is on level 1 beneath the **main home**, to the **right of the stair**. Its visible vehicle door faces the street near `x=25..40` at the lower facade, with a pedestrian door to its left. In the structured model its separate level-1 footprint is approximately `x=24..41, y=29..46`. Its door and camera anchors belong to that lower level. The garage is not an upstairs room in Plan view; the stair hotspot opens its controls.
- Living occupies the upper-left interior, Dining the lower-left, Kitchen the lower-middle, Office the upper-middle, and Bedroom the upper-right. Hallway connects the interior rooms. Guest and primary bathrooms remain separate at the lower-right. Preserve their interior partitions and device positions when altering the exterior.
- The image depicts one property unit. Neighboring roofs, walls, plants, railings, and any decorative doors have no controls. Add a room or device hotspot only after confirming its physical location and current Home Assistant entity.

Coordinates are diagrammatic, not measured dimensions. Pin percentages refer to the **contained 2:1 image**, never the entire tablet viewport. Stardew loads matching room and device anchors from `floorplan.json`; the installed dashboard's coordinates are fallbacks. Other themes retain their own artwork and positions.

## Updating the artwork and model

1. Keep private floor-plan and photo references outside this repository. Revise the day image while preserving the 2:1 crop, the long left stair, elevated porch, garage door under the main home, and stable interior partitions. Use original drawn imagery, not copied game sprites or source screenshots.
2. Inspect the full day image and tablet view before deriving night art. Generate night and still variants with identical geometry. Decorative motion and night lighting may change; walls, stairs, doors, and furniture must not shift between variants.
3. Add versioned PNG filenames, update the Stardew profile in `ishioho-environment.js`, and update matching model polygons, openings, objects, and anchors in `floorplan.json`. Keep old assets for rollback. Keep private entity IDs out of the public model and synthetic example.
4. Run `node scripts/verify-source.cjs` and `node tests/run.cjs`, stage and verify a package, and check illustrated and Plan modes on the target tablet. Open the Garage popup from the left stair, verify any configured camera feed, and confirm that decorative art does not create an inert or misplaced hotspot. Visual verification does not require actuating the garage door.

The GitHub files and installed Home Assistant `www/` files are separate. Follow the [README deployment steps](README.md#maintain-and-update) to update the running tablet.
