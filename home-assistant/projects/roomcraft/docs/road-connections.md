# Shared exterior road connections

**Status:** deployed and verified on 12 November 2026: runtime `6419875c`, HA `b9409959a1d19a3e`, owner-private Studio 108. All 642 automated tests and runtime GitHub CI passed. The closer office placement and road length were saved through authenticated Studio, read back exactly and visually verified on the wall tablet.

## Customer outcome

The layout author wants the existing house and office to share one road, with its straight spine parallel to the condo’s right edge. The office sits close beside that road with a short parking entrance. The house placement, building dimensions, actual home dimensions, main coastal street and household controls remain unchanged. Paving must meet the correct ground elevation with no trees, grass gaps or raised curb across the entrance.

Acceptance requires a straight plan-grid-aligned spine, a continuous curved-main-street junction, both existing ranch driveway approaches, one short office parking approach, clear terrain/planting and collision checks, standard editor length/Undo/Save behavior, exact preservation of unrelated project data, and visual checks in Studio and on the tablet. This change does not animate traffic on the side road, add telemetry, or reproduce surveyed road dimensions.

## Authoring contract

Choose **Objects → Exterior scenery → Connecting side road**. Center X selects the straight road’s lateral position. Center Y and length determine its inland endpoint; the north end always reaches the existing main street. Width remains 48–140 and length 120–1000 illustration plan units. Rotation remains zero and height automatic. The straight spine follows the plan grid; only the junction adapts to the main street’s curve.

Extend the road beyond a facing building’s entrance to derive a clear approach. The ranch’s two driveway slabs and the office’s ground-level parking entrance supply the connection endpoints. Approaches are derived from the road and building placement, not extra saved objects; moving or resizing either regenerates them. Buildings must face the road and be within their recipe’s connection range. A blocked approach is omitted rather than drawn through another structure. The office’s upper parking deck stays above its ground entrance.

This preserves layout version 2, stable IDs, existing object dimensions and the shared Home/Studio renderer. One editor dimension change is one undo step. Both save transports carry the ordinary road item; no migration or separate layout is introduced. All scenery remains decorative and unbound to Home Assistant devices.

The correction applies to existing side-road objects as well: their saved zero rotation now renders along +Z rather than the local street normal. The current layout changes the existing road’s length from 380 to 840 and moves the office center X from 2020 to 1750. Its Y700, width220, depth180 and rotation90° are unchanged. All 80 item IDs, house placement, unrelated geometry and bindings remain intact. The parking approach is now 63 plan units long, from (1665,659) to the road edge (1602,659), rather than the previous 333-unit approach. The road ends at (1570,770).

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

Tests cover route alignment and junction continuity, recipe access points, repeated compilation, obstruction handling, heights, terrain and planting protection. The built Studio fixture changes road length, undoes, restores and saves the extended arrangement. Its longer campus approach exercises the supported connection range; the actual published closer arrangement is separately verified. Live publication preserves the other 78 objects and every household binding, changing only road length and office X.

## Release evidence

| Surface | Verified result |
| --- | --- |
| Frozen runtime | `6419875cd428705da558ccb6a08343129929e9fc` |
| Full source manifest | `sha256:6b8dc0855b66f2e500e9ef50ee111d4c2d4030df8c51464a50da83debfb7278a` — 361 inputs |
| Full release gate | Clean dependency install; 539 site, 65 HA bridge/weather, 30 installer and 8 presence tests passed (642 total). Architecture guard checked 112 authored modules / 34,682 lines. TypeScript, lint, production build, manifest readback and whitespace passed; lint retains 17 existing warnings and no errors. |
| Runtime CI | [GitHub run passed](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43312871925) |
| Geometry/art review | Exact straight spine, three entrances, shared curb/pavement seam, smooth mouth, clear terrain support and collision handling passed. Actual office-model raycasts verified the entrance floor and column clearance across six scale/rotation/height variants. The identified inward-facing asphalt edge was corrected and covered by outward-normal regression before the final gate. |
| Built Studio | Real Chrome exercised placement, resize/height, road shortening (office access omitted), Undo (three accesses restored), move/Delete/Undo, binding guards and PNG/project mock Save. The saved project rebuild kept the same connections and home/street bounds. |
| HA assets | Resource `b9409959a1d19a3e`. Eleven installed assets match the build over both LAN and remote origin; Home/Studio/Controls and eight non-view dashboard fields matched the installer backup before publication. |
| Actual Studio Save | One upload and one guarded Save after a verified private backup. Exact outgoing project/API readback match; actual Studio inspection shows the office beside the straight shared road. Independent API comparison confirms 80 → 80 items, only road length and office X changed, with all other item fields, order, hotspots, layout fields and household bindings identical. Unrelated dashboard fields also match. |
| Closer layout geometry | One road, two ranch approaches and one 63-unit office approach; no building/road overlaps. Separate support pads protect the road and each approach. |
| Tablet | Trusted ADB and Companion HOME alias verified; Companion 2026.10.1-full cold-launched. The loaded private 1920 × 1080 capture shows the road parallel to the condo, both ranch driveways and the office immediately beside it with a short parking entrance; the complete home, buildings and menu remain visible. |
| Private Site | Owner-only version108 deployed successfully; source `2180123428453b65b378194a2d82ee7df51d2dde`; subset manifest `sha256:95c30a0800c20a8ff452c86d8462dc3e2938de618739cc4f4c2538df6c0230a9` (263 inputs). Archive `sha256:ac118724f89c1a863b9a3d01e4077a69abd9b0644c7dd8a9d90f5886a99148d4`; deployment `appgdep_6af63302d5b4819181ab1716070d6b07`. No separate hosted-browser visual check was run. |

Private installer and pre-Save backups, real configuration and browser/tablet captures remain outside Git in protected management storage. No physical device was actuated by these checks. The final authored move uses the already-tested standard editor operation and requires no runtime or schema change.

## Rollback

Restore the preceding runtime `779097d47e7ccc0677aee2b89880118d75d457f6`, HA resource `6707571f81774d15` and owner-private Studio 107. Restore the protected pre-change project together with the runtime to recover the shorter previous road. Private backup paths, real project JSON and tablet/camera images remain outside Git.
