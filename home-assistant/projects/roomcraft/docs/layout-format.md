# Editable layout format

A `presenceSwitch` can store `presenceTrackZone` as four centimetre values ordered `[xMin, xMax, yMin, yMax]`. The editor accepts limits from −600 to 600 and requires the minimum to be less than the maximum on each axis. Home and Studio transform this rectangle with `presenceTrackTransform` and clip it to the plan. This field documents the switch's configured XY bounds for display. Changing it in Studio does not write settings to the switch.

The [JSON Schema](../layout.schema.json) describes Roomcraft layout version 2 shared by the HA-hosted Studio and optional cloud editor. The [synthetic example](../examples/layout-v2.json) shows the main fields without revealing any installed device inventory. It illustrates the contract; the real furnished starter includes many more rooms, walls, and objects.

| Field | Meaning |
| --- | --- |
| `version` | Format version. Current bridge accepts `2`. |
| `editableReferenceVersion` | Optional starter-art migration marker. It prevents restored fixtures from reappearing after a user removes them. |
| `rooms[]` | Room ID, display name, floor surface ID, polygon points, optional label point. |
| `walls[]` | Segment ID and two endpoints in canvas coordinates, with optional finish and `kind: "fence"`. A missing kind means a solid wall. |
| `items[]` | Catalog type, name, center, size, rotation, and optional HA binding. Bound items generate custom on-plan controls; `controlZone` is a movable invisible hit area. `visualKind` optionally selects a live device treatment, including `vacuum`; `lightForm` preserves a validated live-light silhouette. A vacuum can carry an optional authenticated map-camera binding. Camera thumbnails each carry their own optional event-image entity, preview mode, and event triggers. |
| `hotspots[]` | Legacy, independent `state-icon` controls with entity, title, action, and percentage position. Bound item controls are derived from `items[]` instead. |

The editable project is 1536 × 1024. `x` and `y` are project pixels; room and item IDs should remain stable across edits. IDs created by the current editor are seeded and sequence-based; they never use time or randomness. The full-width dashboard image includes the entire source width x0–1536 and crops only y80–944, producing 1536 × 864 pixels at **the same source pixel scale**. Its exact 16:9 aspect fits a landscape tablet while leaving project geometry unchanged. A wall's absence of `finish` means graphite for compatibility with layouts saved before wall finishes were added. Catalog `type` values must match the installed editor inventory; JSON Schema cannot enumerate dynamically added inventory templates.

In 3D, the authored house and exterior decks share the second-floor datum. An exterior `stairs` item has its ground approach at local negative Y and its upper landing end at local positive Y before rotation. It retains its optional `steps` count. A detached `garageDoor` item rests on grade using the same 2D coordinates. These elevations are derived when rendering and require no extra layout fields. A physical model can optionally store `modelHeight` from 6 to 300 plan pixels. It scales only the model's vertical span while retaining its support plane and footprint. Omit the field for natural height. A fence that follows one authored outdoor deck stays level even beside a stair. Where both fence endpoints lie on the same stair flight, the fence follows the slope. Revision 9 adds matching fence records to the stock exposed ledges.

## Catalog variants and persisted geometry

Product-family metadata such as `collectionId`, `seriesId`, `designId`, `sizeId`, material, and display labels belongs to the installed catalog, not layout version 2. A placed item persists the selected catalog entry in `type` and its resolved authored footprint in `w` and `h`. This keeps old layouts portable even when the Inspector gains richer variant menus and avoids duplicating mutable catalog descriptions inside every saved project.

The editor applies variant changes with three distinct contracts:

| Inspector choice | Persisted result | Geometry rule |
| --- | --- | --- |
| **Style** | Destination catalog `type` plus compatible art/form metadata | Apply that product's authored `w` and `h` |
| **Size** | Destination catalog `type` plus compatible art/form metadata | Apply that size entry's authored `w` and `h` |
| **Color / finish** | Destination catalog `type` plus compatible art/form metadata | Preserve the placed item's current `w` and `h` |

All three preserve the item ID, center, rotation, Home Assistant bindings, and a user-customized name. A catalog entry may have a different default label without overwriting a name the user deliberately changed. Legacy families that only expose finish variants retain finish-only behavior. Because `w` and `h` are already part of version 2, authored bed sizes and constructions require no schema migration. Changing the meaning of persisted dimensions, catalog `type`, or variant resolution would require a compatibility decision and HA/cloud round-trip tests.

Home Assistant positions `picture-elements` controls by percentage of the **displayed image**. For an item center `(x, y)` and size `(w, h)` in project pixels, both dashboard transports use:

```text
left = 100 × x / 1536 %
top = 100 × (y - 80) / 864 %
width = 100 × w / 1536 %
height = 100 × h / 864 %
```

An independent marker's project-space percentages first convert to project pixels with `x = 1536 × left / 100` and `y = 1024 × top / 100`, then map as above. On import from a `full-width-v1` card, `x = 1536 × cardLeft / 100` and `y = 864 × cardTop / 100 + 80` restore its project percentages. A card marked `wall-to-wall-v1` instead uses the preceding crop's inverse: `x = 1472 × cardLeft / 100 + 20`, `y = 828 × cardTop / 100 + 96`. Unmarked legacy 3:2 cards retain their original percentages. The top-level `roomcraft_layout` remains version 2 and does not store a second set of cropped coordinates. Bound-object and camera overlays are derived from item geometry on export, while weather, time, menu, and editor chrome are positioned separately. Elements above y80 or below y944 may be clipped; place the camera frame and other essential targets within that visible height before publishing. Keep the image dimensions, marker, two transports, and manual YAML export in sync.

Do not put telemetry such as current light state or robot coordinates in this file. Those values belong in live adapters. On a format change, add a new schema and explicit migration; keep old imports readable until the migration has been tested.

The engine canonicalizes object keys while retaining documented array order. Equivalent projects therefore have the same SHA-256 project fingerprint even when property insertion order differs. Starter-art migrations run on the separate `editableReferenceVersion` track, are named and ordered, and must pass a second-run idempotency check. See the [deterministic engine contract](engine-contract.md) before adding a field, migration, layer, or exporter.

## Radar calibration

A `presenceSwitch` can save `presenceTrackEntityId` as a `sensor.*` reference and `presenceTrackTransform` as six finite coefficients `[a,b,c,d,e,f]`. The transform computes `planX = a*x + b*y + c` and `planY = d*x + e*y + f` from sensor-local coordinates. Each coefficient is bounded by 10,000 in magnitude. The absolute determinant `|a*e - b*d|` must exceed `0.00001`. An unset or invalid transform leaves positions unplotted.

The `entityId` and `presenceEntityId` retain their existing dimmer and occupancy behavior. Radar count, target IDs, coordinates, velocity and zone reports are transient Home Assistant data. Saved layout JSON retains the source and calibration. Layout exports and the 2D plan image exclude live radar readings. [Radar sensor contract](../ha-presence/README.md)

## Bound objects and camera previews

A light or fan item with `entityId` is still ordinary editable artwork. Export derives a `custom:roomcraft-object-control` picture element from that binding at the item's current coordinates; its state comes from Home Assistant. An unbound fixture remains visual only. A `controlZone` item with an entity binding exports the same control as an invisible movable hit area and adds no pixels to the PNG. Its center can overlap another item, as with a fan-light toggle over fan artwork. The separate `hotspots[]` array retains legacy `state-icon` elements; do not duplicate a bound object there. Keep real entity IDs in the private dashboard project; public examples use placeholders.

An item's `controlLabel` (up to 80 characters) and `controlIcon` (`mdi:` name) set its accessible label and icon. `visualKind` accepts `auto`, `light`, `fan`, `climate`, `window`, `door`, `vacuum`, `device`, or `none`; it is optional, and Automatic infers the kind from the item and state binding. A light may also set `lightForm` to `table_lamp`, `bud_lamp`, `cloud_floor_lamp`, `bloom_ceiling`, `star_pendant`, or `acorn_sconce`. Both dashboard transports validate this field; an absent or unknown form safely renders as `table_lamp` rather than inventing a state or failing the card. `tapAction` and `holdAction` accept `auto`, `toggle`, `activate`, `more-info`, or `none`. The optional `tapEntityId` and `holdEntityId` override the action target for that gesture while `entityId` remains the displayed state source and fallback target. A `presenceSwitch` may set `presenceEntityId` to a `binary_sensor.*` occupancy entity; the three dots attached to its plate animate only for the exact `on` state, independently of the dimmer state and action. A vacuum item can set `vacuumMapEntityId` to a `camera.*` entity. The installed card uses that authenticated image in an object-anchored panel and may derive room-cleaning buttons from its `rooms` attribute; map bytes and changing position are never serialized. The optional `vacuumPositionTransform` is exactly six finite numbers `[a, b, c, d, e, f]` defining `planX = a*mapX + b*mapY + c` and `planY = d*mapX + e*mapY + f`. It is installation-specific calibration metadata, not telemetry. The card applies it only when the map exposes a valid `vacuum_position`; fresh active positions may move the marker, a stale active map freezes it, and a docked robot remains parked at the last calibrated position. `activate` runs a `scene`, `script`, or `button`; a scene's last-run timestamp must not be presented as a light's on/off state. For example, the synthetic fan in [layout-v2.json](../examples/layout-v2.json) reads a switch, runs separate On and Off scenes from the blades, and runs a light-toggle scene from a center `controlZone`. The two export transports and the HA card must agree on these fields. If a future layout format changes their meaning, add an explicit migration and tests before changing version 2 data. See [live object graphics](live-object-graphics.md) for runtime state and motion behavior.

`cameraThumbnail` is an item type with center/size/rotation like other objects. Multiple camera items can coexist, each with its own stable ID and binding. Its `entityId` points to a `camera.*` entity, and `imageEntityId` can point to an `image.*` latest-event still. `previewMode` accepts `event` (still), `live` (tap-to-start), `live_auto` (mount HA-native media without a wake command), `event_live` (bounded live attempt after a sensor trigger), or `offline` (preview disabled). `eventEntityIds` is an optional array of up to six distinct `binary_sensor.*` IDs; it is required and nonempty for `event_live`. The installed Home Assistant card derives a separate picture-element overlay from each item at export time. The layout stores entity references, never camera access tokens, image bytes, or stream URLs. A doorbell event opens a 60-second stream attempt and then returns to the dated still. An overhead camera can be **LIVE** when decoded video advances even if its HA entity remains `idle`; a garage `live` tile requests `camera.turn_on` only after a tap. A failed stream falls back to the still or an unavailable message; other frames continue independently. Preview media stays in authenticated Home Assistant, outside the cloud editor's source assets.

Outdoor weather is not an `items[]` entry. It is a separate, unmarked `custom:roomcraft-weather-outdoor` picture element with a private weather/sun/moon binding in the HA dashboard config. Both transports preserve it when exporting managed objects. Current condition and forecast payloads stay in Home Assistant runtime state and are not serialized into layout version 2.

The source artwork may migrate to a newer set of default fixtures while `version` remains `2`. `editableReferenceVersion` records the last applied starter-art migration. It should be advanced only after the migration has checked for an existing equivalent item. Once a fixture is added, deleting it is a user edit and must not be undone on the next import.

