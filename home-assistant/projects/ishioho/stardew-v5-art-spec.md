# Stardew v5 artwork and placement

The default Ishioho theme uses four local 1774 × 887 PNG assets. The `map`
and `still` copies share pixels within each appearance; movement, weather,
time-of-day switching and device state are rendered by the dashboard, not
baked into the paintings.

| Appearance | Motion enabled | Motion paused |
| --- | --- | --- |
| Day | `ishioho/stardew-map-v5.png` | `ishioho/stardew-still-v5.png` |
| Night | `ishioho/stardew-night-map-v5.png` | `ishioho/stardew-night-still-v5.png` |

`ishioho/floorplan.json` is the editable source for levels, room zones,
physical walls, openings, fixtures, device anchors and hit regions. The PNGs
are decorative skins. Room polygons are approximate zones; their edges must
not be treated as walls unless a corresponding `walls` segment exists. Source
dimensions and exact door swings were not surveyed.

## Orientation and room relationships

- The map is the **second-floor home**. North and west (top and left) exterior
  wall faces have the visible depth; south and east (bottom and right) are
  narrow cutaways. The muted outer field intentionally makes no precise claim
  about neighboring-unit geometry.
- The far-left exterior stair joins the lower-screen end of the covered porch
  through an open tiled landing. From the porch, walking up the screen along
  the stair descends in real height toward the top-side driveway. The planted
  balcony above the porch is separate and has no stair access.
- The blue unit door opens from the covered porch to a small **indoor Entry**,
  then an open Dining/Living circulation area. The Kitchen is defined by an
  L-shaped counter, not a full dividing wall. Office and Bedroom are enclosed;
  a small Guest WC and larger Primary Bath occupy the lower right.
- The single-car garage is **one level below** the left wing and to the right
  of the stair. It appears only in a separate popup. Its roll-up faces the
  north/top driveway and its pedestrian door is on the west/left. There is no
  garage door or invented street on the upstairs artwork.

## Provenance and maintenance

The homeowner's marked plan and building photos guided the relationships
above; these private references are not shipped. A code-native geometry
stencil and an existing pixel-art style reference were supplied to the
built-in Codex `image_gen` tool. The resulting day painting was refined to
show the open stair-to-porch landing, plain balcony barrier and neutral
surround. The night painting is a lighting edit of that final day master.
All images are original project assets; no game sprite sheets or external
runtime CDN are required.

For future art revisions, keep the geometry source and the day master in sync:

1. Render a clean, unlabeled 2:1 geometry guide from `floorplan.json`. Preserve
   the stair-to-porch opening and open-plan transitions.
2. Generate or edit the day master from that guide, using only style references
   for materials and detail. Keep room proportions and openings in the guide.
3. Create night as a lighting-only edit of the selected day master at the same
   dimensions. Copy each appearance to its `map` and `still` filenames.
4. Bump the asset version in `ishioho-environment.js` when replacing a released
   set. Recheck `floorplan.json`, `room-positions.json`, example room anchors,
   Plan mode, garage popup, day/night alignment and tablet-scale hit targets.

Do not put labels, UI, forecast weather, device state or a downstairs garage
in the raster map. Those are live layers or separate levels.
