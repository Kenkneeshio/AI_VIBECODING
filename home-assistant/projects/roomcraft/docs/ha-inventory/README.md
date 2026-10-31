# Home Assistant entity inventory

Read-only snapshot: **2026-10-31 19:14 UTC**. The [machine-readable JSON](entity-inventory.json) contains all 1,760 sanitized entity rows, including disabled entries and four live entities absent from the entity registry. These pages omit current values, camera media, credentials, network addresses, and mobile or personal identifiers. IDs labeled `private_####` are redacted placeholders.

Availability reflects only the audit time. Recheck the Home Assistant entity registry and the physical device before binding an object or issuing a command. A name that suggests a room is not proof of placement; the room table in the JSON records mapping confidence.

## Snapshot counts

| Item | Count |
| --- | ---: |
| Registry entities | 1,756 |
| Entities with live state records | 985 |
| Inventory rows | 1,760 |
| Devices | 251 |
| Areas | 14 |
| Available | 651 |
| Unavailable | 261 |
| Unknown | 73 |
| Disabled | 775 |

## Browse by area

Each area page groups its entities by domain. **Unassigned** means Home Assistant has no area on the entity or its device; it does not mean the physical room is unknown in every case.

| Area | Entities | Document |
| --- | ---: | --- |
| Balcony | 0 | [Balcony](balcony.md) |
| Dining room | 272 | [Dining room](dining-room.md) |
| Entryway | 43 | [Entryway](entryway.md) |
| Garage | 69 | [Garage](garage.md) |
| Guest Bathroom | 3 | [Guest Bathroom](guest-bathroom.md) |
| Hallway | 34 | [Hallway](hallway.md) |
| Kitchen | 33 | [Kitchen](kitchen.md) |
| Living Room | 53 | [Living Room](living-room.md) |
| Master Bathroom | 21 | [Master Bathroom](master-bathroom.md) |
| Master Bedroom | 25 | [Master Bedroom](master-bedroom.md) |
| Office | 0 | [Office](office.md) |
| On the go | 10 | [On the go](on-the-go.md) |
| Porch | 8 | [Porch](porch.md) |
| Private area | 7 | [Private area](private-area.md) |
| Unassigned | 1,182 | [Unassigned](unassigned.md) |

## Build with this inventory

- [Room-to-object bindings and interaction rules](../ha-controls-and-menu.md) explain which devices may become fixtures on the plan and which belong in the menu.
- [Main Dashboard map](../main-dashboard-map.md) records the six old sections and every direct entity reference behind the shipped curated drawer.
- Keep live object coordinates and the actual dashboard project in Home Assistant. This inventory is documentation, not a deployable binding file.
- Before updating this snapshot, repeat the private read-only audit, remove changing state values and personal/network fields, then review the generated diff for privacy and stale device assumptions.
