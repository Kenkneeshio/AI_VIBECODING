# Editable layout format

The [JSON Schema](../layout.schema.json) describes Roomcraft layout version 2 shared by the HA-hosted Studio and optional cloud editor. The [synthetic example](../examples/layout-v2.json) shows the main fields without revealing any installed device inventory. It illustrates the contract; the real furnished starter includes many more rooms, walls, and objects.

| Field | Meaning |
| --- | --- |
| `version` | Format version. Current bridge accepts `2`. |
| `editableReferenceVersion` | Optional starter-art migration marker. It prevents restored fixtures from reappearing after a user removes them. |
| `rooms[]` | Room ID, display name, floor surface ID, polygon points, optional label point. |
| `walls[]` | Wall ID and two endpoints in canvas coordinates; optional finish. |
| `items[]` | Catalog type, name, center, size, rotation, optional HA entity binding. A camera thumbnail also carries an optional event-image entity and preview mode. |
| `hotspots[]` | Dashboard state-icon controls with entity, title, action, and percentage position. |

The art canvas is 1536 × 1024. `x` and `y` are scene pixels; controls use percentages because Home Assistant positions elements relative to the displayed image. Room and item IDs should remain stable across edits. A wall's absence of `finish` means graphite for compatibility with layouts saved before wall finishes were added. Catalog `type` values must match the installed editor inventory; JSON Schema cannot enumerate dynamically added inventory templates.

Do not put telemetry such as current light state or robot coordinates in this file. Those values belong in live adapters. On a format change, add a new schema and explicit migration; keep old imports readable until the migration has been tested.

## Bound objects and camera previews

A light or fan item with `entityId` is still ordinary editable artwork. Export derives one dashboard control from that binding at the item's current coordinates; the live state comes from Home Assistant. An unbound fixture remains visual only. Keep the entity ID private in a real exported project; public examples use placeholders.

`cameraThumbnail` is an item type with center/size/rotation like other objects. Its `entityId` points to a `camera.*` entity, `imageEntityId` can point to an `image.*` entity for the latest event still, and `previewMode` stores `event` or `live` from the current editor (`offline` is a supported safe fallback in the format). The installed Home Assistant card derives a separate picture-element overlay from the item at export time. The layout stores references to entities, never camera access tokens, image bytes, or stream URLs. A missing or unavailable image displays an unavailable state instead of a stale picture. Preview media stays in authenticated Home Assistant, outside the cloud editor's source assets.

The source artwork may migrate to a newer set of default fixtures while `version` remains `2`. `editableReferenceVersion` records the last applied starter-art migration. It should be advanced only after the migration has checked for an existing equivalent item. Once a fixture is added, deleting it is a user edit and must not be undone on the next import.

