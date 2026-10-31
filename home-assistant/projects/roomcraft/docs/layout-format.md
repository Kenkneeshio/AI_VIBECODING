# Editable layout format

The [JSON Schema](../layout.schema.json) describes Roomcraft layout version 2 shared by the HA-hosted Studio and optional cloud editor. The [synthetic example](../examples/layout-v2.json) shows the main fields without revealing any installed device inventory. It illustrates the contract; the real furnished starter includes many more rooms, walls, and objects.

| Field | Meaning |
| --- | --- |
| `version` | Format version. Current bridge accepts `2`. |
| `editableReferenceVersion` | Optional starter-art migration marker. It prevents restored fixtures from reappearing after a user removes them. |
| `rooms[]` | Room ID, display name, floor surface ID, polygon points, optional label point. |
| `walls[]` | Wall ID and two endpoints in canvas coordinates; optional finish. |
| `items[]` | Catalog type, name, center, size, rotation, and optional HA binding. Bound items generate custom on-plan controls; `controlZone` is a movable invisible hit area. Camera thumbnails also carry an optional event-image entity and preview mode. |
| `hotspots[]` | Legacy, independent `state-icon` controls with entity, title, action, and percentage position. Bound item controls are derived from `items[]` instead. |

The editable project is 1536 × 1024. `x` and `y` are project pixels; room and item IDs should remain stable across edits. The wall-to-wall dashboard image crops that scene to x20–1492 and y96–924, producing 1472 × 828 pixels at **the same source pixel scale**. Its exact 16:9 aspect fits a landscape tablet while leaving project geometry unchanged. A wall's absence of `finish` means graphite for compatibility with layouts saved before wall finishes were added. Catalog `type` values must match the installed editor inventory; JSON Schema cannot enumerate dynamically added inventory templates.

Home Assistant positions `picture-elements` controls by percentage of the **displayed image**. For an item center `(x, y)` and size `(w, h)` in project pixels, both dashboard transports use:

```text
left = 100 × (x - 20) / 1472 %
top = 100 × (y - 96) / 828 %
width = 100 × w / 1472 %
height = 100 × h / 828 %
```

An independent marker's project-space percentages first convert to project pixels with `x = 1536 × left / 100` and `y = 1024 × top / 100`, then map as above. On import, `x = 1472 × cardLeft / 100 + 20` and `y = 828 × cardTop / 100 + 96` restore its project percentages. The card's `roomcraft_scene: wall-to-wall-v1` flag enables this inverse; older cards without the flag retain their original 3:2 percentages. The top-level `roomcraft_layout` remains version 2 and does not store a second set of cropped coordinates. Bound-object and camera overlays are derived from item geometry on export, while weather, time, menu, and editor chrome are positioned separately. Elements outside the crop may be clipped; place the camera frame and other essential targets inside x20–1492/y96–924 before publishing. Keep the image dimensions, marker, two transports, and manual YAML export in sync.

Do not put telemetry such as current light state or robot coordinates in this file. Those values belong in live adapters. On a format change, add a new schema and explicit migration; keep old imports readable until the migration has been tested.

## Bound objects and camera previews

A light or fan item with `entityId` is still ordinary editable artwork. Export derives a `custom:roomcraft-object-control` picture element from that binding at the item's current coordinates; its state comes from Home Assistant. An unbound fixture remains visual only. A `controlZone` item with an entity binding exports the same control as an invisible movable hit area and adds no pixels to the PNG. Its center can overlap another item, as with a fan-light toggle over fan artwork. The separate `hotspots[]` array retains legacy `state-icon` elements; do not duplicate a bound object there. Keep real entity IDs in the private dashboard project; public examples use placeholders.

An item's `controlLabel` (up to 80 characters) and `controlIcon` (`mdi:` name) set its accessible label and icon. `tapAction` and `holdAction` accept `auto`, `toggle`, `activate`, `more-info`, or `none`. The optional `tapEntityId` and `holdEntityId` override the action target for that gesture while `entityId` remains the displayed state source and fallback target. `activate` runs a `scene`, `script`, or `button`; a scene's last-run timestamp must not be presented as a light's on/off state. For example, the synthetic fan in [layout-v2.json](../examples/layout-v2.json) reads a switch, runs separate On and Off scenes from the blades, and runs a light-toggle scene from a center `controlZone`. The two export transports and the HA card must agree on these fields. If a future layout format changes their meaning, add an explicit migration and tests before changing version 2 data.

`cameraThumbnail` is an item type with center/size/rotation like other objects. Its `entityId` points to a `camera.*` entity, `imageEntityId` can point to an `image.*` entity for the latest event still, and `previewMode` stores `event` or `live` from the current editor (`offline` is a supported safe fallback in the format). The installed Home Assistant card derives a separate picture-element overlay from the item at export time. The layout stores references to entities, never camera access tokens, image bytes, or stream URLs. A missing or unavailable image displays an unavailable state instead of a stale picture. Preview media stays in authenticated Home Assistant, outside the cloud editor's source assets.

The source artwork may migrate to a newer set of default fixtures while `version` remains `2`. `editableReferenceVersion` records the last applied starter-art migration. It should be advanced only after the migration has checked for an existing equivalent item. Once a fixture is added, deleting it is a user edit and must not be undone on the next import.

