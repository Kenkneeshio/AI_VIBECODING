# Editable layout format

The [JSON Schema](../layout.schema.json) describes Roomcraft layout version 2 shared by the HA-hosted Studio and optional cloud editor. The [synthetic example](../examples/layout-v2.json) shows the main fields without revealing any installed device inventory. It illustrates the contract; the real furnished starter includes many more rooms, walls, and objects.

| Field | Meaning |
| --- | --- |
| `version` | Format version. Current bridge accepts `2`. |
| `rooms[]` | Room ID, display name, floor surface ID, polygon points, optional label point. |
| `walls[]` | Wall ID and two endpoints in canvas coordinates; optional finish. |
| `items[]` | Catalog type, name, center, size, rotation, optional HA entity binding. |
| `hotspots[]` | Dashboard state-icon controls with entity, title, action, and percentage position. |

The art canvas is 1536 × 1024. `x` and `y` are scene pixels; controls use percentages because Home Assistant positions elements relative to the displayed image. Room and item IDs should remain stable across edits. A wall's absence of `finish` means graphite for compatibility with layouts saved before wall finishes were added. Catalog `type` values must match the installed editor inventory; JSON Schema cannot enumerate dynamically added inventory templates.

Do not put telemetry such as current light state or robot coordinates in this file. Those values belong in live adapters. On a format change, add a new schema and explicit migration; keep old imports readable until the migration has been tested.

