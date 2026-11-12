# Shared exterior road connections

**Status:** implementation and verification in progress. The preceding verified release is [office landmark](office-landmark.md): runtime `779097d4`, HA `6707571f81774d15`, owner-private Studio 107.

## Customer outcome

The layout author wants the existing house and office to share one road, with its straight spine parallel to the condo’s right edge. The two buildings, actual home dimensions, main coastal street and household controls must remain unchanged. The office parking entrance must connect visibly to the extended side road, with paving at the correct ground elevation and no trees, grass gaps or raised curb across the entrance.

Acceptance requires a straight plan-grid-aligned spine, a continuous curved-main-street junction, both existing ranch driveway approaches, one office parking approach, clear terrain/planting and collision checks, standard editor length/Undo/Save behavior, exact project preservation, and visual checks in Studio and on the tablet. This change does not animate traffic on the side road, move the buildings, add telemetry, or reproduce surveyed road dimensions.

## Authoring contract

Choose **Objects → Exterior scenery → Connecting side road**. Center X selects the straight road’s lateral position. Center Y and length determine its inland endpoint; the north end always reaches the existing main street. Width remains 48–140 and length 120–1000 illustration plan units. Rotation remains zero and height automatic. The straight spine follows the plan grid; only the junction adapts to the main street’s curve.

Extend the road beyond a facing building’s entrance to derive a clear approach. The ranch’s two driveway slabs and the office’s ground-level parking entrance supply the connection endpoints. Approaches are derived from the road and building placement, not extra saved objects; moving or resizing either regenerates them. Buildings must face the road and be within their recipe’s connection range. A blocked approach is omitted rather than drawn through another structure. The office’s upper parking deck stays above its ground entrance.

This preserves layout version 2, stable IDs, existing object dimensions and the shared Home/Studio renderer. One editor dimension change is one undo step. Both save transports carry the ordinary road item; no migration or separate layout is introduced. All scenery remains decorative and unbound to Home Assistant devices.

The correction applies to existing side-road objects as well: their saved zero rotation now renders along +Z rather than the local street normal. The current layout changes only the existing road’s length from 380 to 840; all 80 item IDs, both building placements, unrelated geometry and bindings remain intact.

| Derived recipe parameter | Ranch | Office campus |
| --- | --- | --- |
| Native footprint | 130 × 176 | 220 × 180 |
| Local approach center(s) X / front Z | −32.5 / 88 and 35 / 88 | −41 / 85 |
| Native entrance width | 49 and 54 | 20 |
| Maximum gap beyond road sidewalk | 160 | 400 |
| Surface | Concrete | Asphalt with concrete edge bands |
| Endpoint height above model ground | 1.81 | 2.55 |

Access points and widths follow the building’s authored dimensions and rotation; endpoint height follows its model-height override. A recipe contains these internal access dimensions, while Studio edits the grouped building and road. Each connector has its own terrain support pad so the gap between the road and distant campus is not flattened as one broad rectangle. The shared corridor also excludes procedural plants along the access lane.

## Modules and proof

`storybook-side-road.mjs` owns the straight route, curved mouth, building approaches, paving and clearances. `storybook-scene.mjs` passes derived terrain support to the existing meadow sampler. The shared object Inspector explains editing; catalog metadata names the reusable side-road recipe. Reference photographs, live configuration and secrets are unnecessary for this geometry correction.

Tests cover route alignment and junction continuity, recipe access points, repeated compilation, obstruction handling, heights, terrain and planting protection. The built Studio fixture must change road length, undo, restore and save the extended arrangement. Live publication must preserve the other 79 objects and every household binding.

## Release evidence

Pending the complete release gate, frozen source/manifests, GitHub CI, backed-up HA installation and exact readback, editor Save, private Site publication and target-tablet inspection. Report each surface independently.

## Rollback

Restore the preceding runtime `779097d47e7ccc0677aee2b89880118d75d457f6`, HA resource `6707571f81774d15` and owner-private Studio 107. Restore the protected pre-change project together with the runtime to recover the shorter previous road. Private backup paths, real project JSON and tablet/camera images remain outside Git.
