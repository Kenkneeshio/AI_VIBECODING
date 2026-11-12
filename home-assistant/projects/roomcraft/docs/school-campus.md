# Editable elementary school campus

**Status:** reference identification and implementation in progress. The preceding verified baseline is runtime `6419875c`, HA `b9409959a1d19a3e`, owner-private Studio 108; see [shared roads](road-connections.md).

## Customer outcome

The household wants a recognizable miniature of the elementary school beside the home, placed to the left of the condo with playgrounds and a separate side road meeting the coastal street. The campus must match the established materials, perspective and lighting and remain editable through Studio.

Acceptance requires visible school buildings and varied play areas, an unobstructed entrance from the left branch, consistent exterior elevation, complete camera framing, standard move/dimensions/height/rotation/Undo/Save, and preservation of the current 80 objects, condo dimensions, right-side road, house, office and all household controls. School art and placement must share the Home/Studio renderer. The public catalog is generic; private home location and original reference imagery stay outside Git.

This is an artistic grouped campus recipe, not a surveyed floor plan, live school monitoring, child tracking or a traffic routing integration. The release must identify which visible architectural features come from references and which small details are inferred. Campus buildings, play equipment, fencing and planting scale together; the campus and side road remain separate selectable objects.

## Authoring and engine contract

The school uses the existing exterior-building classification, ground plane, selection, camera framing and terrain/planting exclusion. A model-specific entrance recipe connects to the existing side-road compiler. Saved layout version 2 and the current reference marker are preserved. The campus accepts no Home Assistant entity/action binding. The fixed design-space PNG can crop exterior scenery outside the original plan; the complete layout remains in JSON and the shared 3D view.

Choose **Objects → Exterior scenery → Elementary school & playgrounds**. Move the campus, change its name, dimensions, rotation or model height, duplicate/delete it, or undo the change through the ordinary Inspector. The road is a separate **Connecting side road** item; its width and length remain editable. Save publishes the common project and Return to live dashboard opens Home.

| Property | Contract |
| --- | --- |
| Type / factory | `scenerySchoolCampus` / `makeStorybookSchoolCampus(item)` |
| Default footprint | 300 × 240 illustration plan units |
| Frontage | Local +Z before authored rotation |
| Ground / native maximum height | Local Y0, exterior scene Y−111 / 32 plan units |
| Road entrance | Local X0, Z120, width28, asphalt topY1.6; scales with the campus |
| Height override | Existing optional model-height property; ground stays fixed |
| Grouping | Buildings, schoolyard, play equipment, fencing and landscape belong to one model |
| Binding | Decorative; primary and secondary HA entity/action bindings rejected |
| Default scene placement | Left of the existing home, with a separate straight branch from the main road |

`storybook-school-campus.mjs` owns deterministic disposable 3D geometry. `object-art.js` owns the matching Canvas thumbnail/plan. Exterior classification and `storybook-scene.mjs` connect that factory to shared ground, selection, framing and planting protection. `storybook-side-road.mjs` owns the short school entrance and its pavement/terrain support. Model catalog, object controls and edit-safety guards own authoring and binding validation. No installation-specific school or home location belongs in these modules.

## Reference and art provenance

The visual reference is the public Morning Creek Elementary campus. The [school’s official directions](https://morningcreek.powayusd.com/apps/pages/maps-directions) and [district directory](https://www.powayusd.com/apps/pages/elementary-schools) verify its identity. Public aerial imagery from [Esri World Imagery](https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer) informs the low cream/white flat-roof campus: central square building, surrounding long classroom wings and courtyard, entrance blocks, front asphalt drop-off/parking, a separate shaded play corner, rear hardcourt apron and lawn field. The aerial acquisition date is not verified.

This is an original stylized model of those visible features, not an aerial-photo texture or exact survey. Small play structures, colors, windows, roof equipment, planting and fence details are artistic interpretations. The school and road rotate together into the requested illustrated setting rather than reproduce geographic north. Original imagery, nearby residential details and private location discovery stay out of source and public proof images.

The factory uses four opaque merged layers and 18,454 triangles, with no texture downloads or nondeterministic variation. Each instance owns its geometry and materials. The maximum height is the 32-unit flagpole. Solid wing plinths reach the parcel surface; the 28-unit street entrance opens directly into the asphalt circulation without a curb or fence across it.

![Synthetic school model from front, three-quarter, overhead and Canvas views](images/exterior-school-model.png)

## Verification and release

Pending deterministic model/Canvas checks, shared scene/catalog/binding/route tests, full release gate, built Studio interactions and Save, backed-up HA installation with exact readback, private Site deployment and loaded wall-tablet visual inspection. Each surface must be recorded separately with its actual source and artifact identity.

## Rollback

Restore runtime `6419875cd428705da558ccb6a08343129929e9fc`, HA `b9409959a1d19a3e`, owner-private Studio 108 and the protected pre-school project together. That project contains 80 items and the corrected short office approach. Keep private backups, actual device screenshots and reference media in protected management storage outside Git.
