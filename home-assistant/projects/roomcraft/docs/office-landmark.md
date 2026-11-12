# Editable office campus landmark

**Status:** deployed and verified on 12 November 2026. Runtime `779097d4`, HA resource `6707571f81774d15`, owner-private Studio version 107. The complete release gate passed 639 tests; authenticated Studio Save/readback and the calendar tablet verified the placed landmark.

## Customer outcome

A layout author can add a recognizable miniature office campus to the exterior landscape, farther inland and to the right of an existing house landmark. It uses the same perspective, lighting, editable project and Home/Studio renderer. The existing home, road, house, furniture and device bindings remain unchanged.

Acceptance requires a detailed office model, complete default framing, ground support and planting clearance, normal editing/Undo/Save, identical saved geometry across transports, and verified target-tablet rendering. This release adds one decorative catalog recipe; it does not connect to or control office equipment, alter traffic routing, or reproduce a surveyed commercial interior.

## Reference and art

[Innoflight’s official contact page](https://innoflight.com/contact-us/) identifies the current office. A [2026 property brochure with exterior and aerial photographs](https://platform.reverecre.com/api/project-file/324e43aa-472e-4f12-a9fb-8303820169d8/5880%20Oberlin%20Drive%20-%20Teaser%20-%202.9.26.pdf) provides the visible building reference. The building is a six-story mirrored blue-gray office tower with horizontal glazing bands, fine vertical mullions, stepped wings, a pale cylindrical entrance rotunda with curved balconies, a flat roof and adjacent parking deck.

The model is an artistic miniature with simplified proportions and inferred small architectural/landscape details. Code-native geometry and Canvas art are original renderings; no reference photo, map tile, company logo, private commute information or surrounding unrelated building is embedded in the assets. The catalog name is generic; authors can name their own placed item.

![Synthetic office model from front, three-quarter, overhead and Canvas views](images/exterior-office-model.png)

The model uses four opaque merged layers and 17,900 triangles. The default height is 122.8 plan units; the 3D height control scales it vertically without moving its support plane. Factory bytes are deterministic, and each instance owns its disposable geometry/materials.

## Studio controls and contract

Choose **Objects → Exterior scenery → Office campus**. Place the object outside the home, then edit its name, center, rotation, width, depth or optional 3D height. Duplicate, Delete and Undo use the standard project history. **Save** publishes the project, and **Return to live dashboard** opens Home.

| Property | Contract |
| --- | --- |
| Type | `sceneryOfficeCampus` |
| Default footprint | 220 × 180 illustration plan units, including parking/landscape |
| Local frontage | +Z before the standard authored rotation |
| Support | Local Y=0; scene exterior ground Y=−111 |
| Dimension/height controls | Existing object width/depth and model-height controls; no new coordinate system |
| Device bindings | Disallowed, including secondary action targets |
| Serialization | Layout version2 and existing reference revision preserved |
| Layer ownership | One grouped 3D recipe plus its matching compatibility Canvas illustration |

The campus is one movable recipe; its building, parking deck, roof details and plants scale together rather than becoming separately selectable objects. [Exterior landmark contracts](exterior-landmarks.md) govern camera bounds, terrain support and the fixed 2D PNG crop. Outside-crop scenery remains in saved JSON and the live/Studio 3D scene. No change to condo dimensions is needed.

## Module ownership

- `ha-local/storybook-office-campus.mjs`: independent deterministic factory and disposable geometry/materials.
- `ha-local/storybook-exterior.mjs`: shared building classification, footprint exclusion and camera extent union.
- `ha-local/storybook-scene.mjs`: single Home/Studio factory resolution, exterior elevation, picking and planting clearance.
- `ha-local/storybook-meadow.mjs`: supported terrain pad; `storybook-side-road.mjs` treats the campus as an obstacle.
- `public/model-library.js`, `object-controls.js`, `engine/edit-safety.js`: catalog, editable properties and decorative binding guards.
- `public/object-art.js`: scalable compatibility art and catalog thumbnail.
- Exterior/campus unit tests and `scripts/verify-exterior-browser.mjs`: model dimensions, determinism, framing, existing scenery preservation, editing and Save.

## Release evidence

| Check | Exact result |
| --- | --- |
| Frozen runtime | `779097d47e7ccc0677aee2b89880118d75d457f6` |
| Full source manifest | `sha256:723bb3d0195fecc119d399e0be22bd613a501bbc4a2ed984a608c6c681413a40` — 360 inputs |
| Release gate | Clean dependency install; 536 site, 65 HA bridge/weather, 30 installer and 8 presence tests passed (639 total); architecture guard, TypeScript, lint, production build, manifest verification and whitespace checks passed. Lint reports 17 existing warnings and no errors. |
| GitHub CI | [Runtime run passed](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43310177485) |
| Built Studio fixture | Real Chrome selection, position, dimensions/height/reset, move/Undo, Delete/Undo, nonblank thumbnail and mocked PNG/project Save passed. Home/street bounds, ground support and default framing remained stable. Decorative primary/secondary bindings are rejected. |
| HA resource | `6707571f81774d15`; all 11 installed assets match the build over LAN and the remote origin. Home/Studio/Controls and eight unrelated dashboard fields matched the installer backup before layout publication. |
| Authenticated Studio | Placed the office through the real editor at center (2020, 700), width 220, depth 180 and rotation 90°. One image upload and one Save completed; API readback matched the actual submitted project exactly. All 79 previous objects and existing bindings were preserved; the saved layout now contains 80 objects. |
| Wall tablet | Trusted ADB and Companion HOME alias verified. Companion 2026.10.1-full cold-launched; a subsequent private 1920 × 1080 capture showed the complete office to the right of the ranch and farther inland, with the home, coast and menu visible. The initial 12-second capture still showed loading, so it was not used as rendering proof. |
| Private Site source | `7504a5ba2ff2c565f2293f5175b3123210de098d`; subset manifest `sha256:2c3188eb43409de672be4cdb2d4606469589e4bb1d14c7f9a0999cd063496aaa` (263 inputs) |
| Private Site artifact | Version 107, archive `sha256:91074833230a1b0b5e51e05bb61ef809695d176406da67a05cc8b831848da7bf`; deployment `appgdep_6af62f5023408191bc6d5c75d03836fd` succeeded; audience remains owner-only. No separate hosted-browser visual check was run. |

The public proof image contains only synthetic model views. Actual dashboard projects, reference images and tablet/browser captures remain in protected local management storage. Both asset installation and layout publication created rollback copies before writing. No physical device was actuated by these checks.

## Rollback

The preceding [exterior landmark release](exterior-landmarks.md#exact-artifacts-and-deployment-evidence) is the rollback baseline: runtime `4490638e29e831cd21c9723627f5bc44eeab6353`, HA `309de5e7f537f676`, owner-private Site106. Back up before asset installation and before Studio Save. Restore the matching previous project and runtime together if reverting this feature; old renderers do not recognize the office model. Keep private configuration and screen captures in the administrator’s protected management backup directory, outside Git.
