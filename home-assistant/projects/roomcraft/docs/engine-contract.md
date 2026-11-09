# Roomcraft deterministic engine contract

This is the normative engineering contract for making Roomcraft repeatable across the editor, PNG renderer, Home Assistant transport, and optional cloud transport. Read it before changing layout data, migrations, layer order, art, rendering, import/export, or live-object projection. The [architecture guide](architecture.md) explains the deployed system; this page defines what a modular engine must guarantee and how a team proves a change is safe.

The contract applies to the partially integrated engine and to remaining responsibilities as they are extracted from legacy modules. It does **not** claim that every responsibility already lives in a separate file or pure command. New code should move toward the boundaries below instead of creating another renderer, layout copy, or transport-specific model.

## What “deterministic” means

For the same validated layout, engine revision, asset set, render profile, and explicit command stream, Roomcraft must produce the same:

- migrated and normalized layout;
- ordered scene/render plan;
- derived Home Assistant control and camera configuration;
- import/export round-trip result; and
- undo/redo or command-replay result.

No engine result may depend implicitly on wall-clock time, locale, network state, Home Assistant telemetry, DOM order, object-key enumeration, an unseeded random value, or which transport invoked it. Viewport size, live state, and installation configuration are allowed only as explicit adapter inputs. Authored IDs come from a deterministic seeded/counter allocator (or a persisted next ordinal), never the clock or randomness. Once supplied, a command stores its ID so replay does not generate it again.

Exact PNG byte equality is guaranteed only for the same supported browser/runtime, decoded assets, canvas implementation, and render profile. Font rasterization, image decoding, color management, and GPU/WebView behavior can differ across platforms. Cross-platform acceptance therefore uses an exact scene-plan comparison plus dimension/alpha checks and a reviewed visual comparison. Never weaken a structural test to hide a platform raster difference.

## Non-negotiable invariants

1. **One authored coordinate system.** Layout geometry remains in the 1536 × 1024 project space. The current dashboard profile is a 1536 × 864 view of source x0–1536/y80–944. Presentation transforms never rewrite authored room, wall, or item coordinates.
2. **One saved project.** The dashboard's `roomcraft_layout` is the shared editable source of truth. Browser storage is recovery data; a rendered PNG is an output; neither becomes a second project.
3. **Stable identities.** Room, wall, item, hotspot, and interface IDs survive edits and migrations. A new ID is assigned once by the deterministic ID service at the UI/command boundary and persisted in the command and layout. A migration never uses the current time or a random value to create an ID.
4. **Pure authored state.** Geometry, finishes, catalog choices, bindings, and installation-specific calibration may be authored. Current entity values, camera frames, forecasts, timestamps, and moving robot coordinates never enter the canonical scene or public assets.
5. **Explicit layers.** Floors, fixed structure, movable art, and authenticated live overlays are separate. An object sprite may not carry source-floor pixels. A room finish is one continuous clipped fill, not a collection of patches around furniture.
6. **Side effects at adapters.** The model, migrations, command reducer, scene compiler, and art registry do not call Home Assistant, fetch, local storage, the DOM, or the clock. Editor, transport, and live-runtime adapters own those effects.
7. **Transport parity.** HA-hosted and cloud transports consume the same canonical layout and projection rules. A field or coordinate rule cannot be added to one bridge only.
8. **Safe repeated execution.** Validation, normalization, migration, element derivation, custom-card registration, and readback checks are idempotent. Running them twice must not duplicate objects, controls, cards, or reference migrations.
9. **No secret-bearing artifacts.** Tests, fixtures, hashes, screenshots, examples, and release records use synthetic IDs and public-safe images. Private dashboard backups, bindings, camera media, tokens, addresses, and calibration data stay outside Git.

## Customer solution and acceptance

Engineering work begins with the customer outcome, then moves from system behavior to modules, data, and individual code changes. A release record must answer these questions in this order:

1. **Problem:** What visible user problem or future capability is being addressed?
2. **Solution:** What should a person be able to see, edit, move, control, recover, or hand off afterward?
3. **Acceptance scenario:** What starting layout/state, user action, and observable result prove the solution? Include off, unavailable, reduced-motion, small-screen, or recovery behavior when applicable.
4. **System contract:** Which invariant, layer, migration, projection, or runtime boundary implements it?
5. **Module changes:** Which owning modules change, and which adjacent modules must remain unchanged?
6. **Evidence:** Which automated test, public-safe visual, runtime readback, and manual check prove each acceptance statement?
7. **Operations:** How is it deployed, monitored, and rolled back without losing an authored layout?

Every customer-facing request gets a short acceptance map. One useful format is:

| Customer need | Observable acceptance | Owning contract/module | Evidence | Status |
| --- | --- | --- | --- | --- |
| Example: floor stays seamless when a desk moves | Move the desk; no old floor patch or seam appears in editor or export | `room-floor` + `object` separation | scene fixture + 100% editor/export comparison | planned / verified / deferred |

Do not substitute an internal milestone such as “module added” for a customer outcome. If a request cannot yet be completed, ship only an independently useful, reversible stage and record the missing acceptance condition. Documentation, examples, accessible behavior, failure behavior, and recovery are part of the customer solution, not follow-up polish.

## Module ownership and dependency direction

Dependencies move downward in this table. A lower, pure layer must never import a higher, effectful layer.

| Boundary | Current source or extraction seam | Owns | Must not own |
| --- | --- | --- | --- |
| Schema and canonical model | `layout.schema.json`, `site/public/engine/deterministic-core.js`, `project-runtime.js`; domain validation still in `app.js` | Accepted fields, strict canonical clone/string/hash, finite-value validation, defaults, compatible unknown fields, schema version | DOM, canvas, HA calls, browser storage |
| Commands and history | Engine command journal/replay in `project-runtime.js`; gesture snapshots and `scene.replace` dispatch in `app.js` | Versioned edit commands, immutable application, stable deterministic IDs, undo/redo and replay semantics | Pointer events, notifications, generated time, network |
| Reference migrations | Registry in `site/public/app.js`, deterministic executor/evidence in `project-runtime.js`, migration tests | Ordered, one-time starter-art corrections tracked by `editableReferenceVersion` | Recurring layout reset, live-state inference, transport writes |
| Scene compiler | Layer manifest/plan/partitioning in `render-contract.js`, consumed by `app.js` and `raster-renderer.js`; remaining floor/wall ops are legacy | Stable layer keys, ordered draw entries, bounds, visibility, export omissions | Canvas calls, asset fetching, HA state |
| Catalog and art registry | `site/public/inventory.js`, `object-art.js`, `assets/` | Catalog metadata, art family, pivot/bounds, perspective, public asset identity | Device actions, telemetry, layout migration |
| Raster backend | `site/public/raster-renderer.js` and editor fallback drawing | Draw a supplied scene plan with supplied decoded assets and profile | Reordering model arrays, generating IDs, mutating the layout |
| Dashboard projection | `site/public/object-controls.js`, `site/lib/dashboard-elements.ts`, `site/ha-local/roomcraft-card.js` | Project-to-display mapping and managed HA element derivation | Changing authored geometry, storing current device state |
| Editor adapter | `site/public/editor.html`, `app.js`, `styles.css` | Pointer/keyboard input, selection, Inspector, accessibility, explicit boundary inputs, draft recovery | Transport secrets, alternate schema, renderer-specific model |
| HA and cloud transport adapters | `site/public/ha-iframe-bridge.js`, `site/ha-local/roomcraft-card.js`, `site/app/api/dashboard/route.ts` | Authentication boundary, revision conflict, image upload, dashboard merge/save/readback | Art decisions, migration policy, independent layout copies |
| Live runtime | `site/ha-local/roomcraft-card.js`, `roomcraft-weather-outdoor.js` | Normalized HA state, media, animations, commands after a user action | Persisting telemetry into the layout or static PNG |

When pure modules are placed under `site/public/engine/`, keep them browser- and Node-testable. They may accept plain data and return plain data. Adapters may import the engine; the engine must not import adapters. The classic-script build may install one frozen namespace on `globalThis`/`window`, but engine operations must not read browser globals, `document`, `hass`, local storage, process environment, or network state.

### Target engine package map

The current engine foundation is loaded before the editor and raster backend: `deterministic-core.js` supplies strict canonical serialization/SHA-256 and seeded IDs; `project-runtime.js` supplies command journals/replay, deterministic migrations, and canonical I/O; `render-contract.js` supplies layers, render plans, asset manifests, and explicit environment fingerprints; and `verification-harness.js` ties those hashes into one evidence record. `app.js` now uses the facade for canonical cloning/string output and equality, IDs, scene normalization, reference-migration execution, and journaled scene changes. Editor fallback, hit testing, and raster rendering use the same item partition/order. `site/tests/deterministic-engine.test.mjs` verifies the engine contracts. Gesture-specific reducers, complete floor/wall render ops, asset load manifests, and the shared dashboard transform remain later extraction stages. Continue in reviewable stages toward these names and responsibilities:

| Target module | Responsibility |
| --- | --- |
| `engine/manifest` | Engine, schema, reference, asset, project-bound, scene-profile, layer, and capability versions |
| `engine/schema` | Validation and normalization with one stable error-code model |
| `engine/canonical` | Canonical serialization, clone, and digest; equality/revisions never use raw `JSON.stringify` |
| `engine/migrations` | Ordered pure registry with `{ id, from, to, applies, up }` and a migration report |
| `engine/ids` | Seeded/counter or persisted-ordinal IDs with snapshot/restore; never clock/random IDs |
| `engine/geometry` | Project↔scene transforms, bounds, snapping, clamps, pivots, and hit shapes |
| `engine/commands` | Immutable reducer, inverse commands, undo/redo, and replay |
| `engine/layers` | Stable layer definitions and `(layer, z, stable index, id)` ordering shared by paint and hit testing |
| `engine/assets` | Content-hashed manifest, declared dependencies, decoded dimensions, and all-or-fail load barrier |
| `engine/art-registry` | Type/form descriptors: layer, bounds, hit shape, static/live ownership, dependencies, renderer ID |
| `engine/scene-plan` | Pure canonical-layout → display-list/render-op plan; no canvas, DOM, image loading, time, or HA state |
| `render/canvas-backend` | Reset/bracket canvas context for each op and execute a supplied display list |
| `engine/export` | Static/live ownership filtering, canonical layout output, and dashboard projection input |
| `integrations/dashboard-transform` | One pure HA/cloud coordinate, merge, and import mapping; authenticated transports remain separate |

Further extraction stays behind the facade and requires parity fixtures and a rollback path. Do not create a second “new engine” project or change saved JSON merely to match this package map.

### Scaffold facade

The supported scaffold entry is `globalThis.RoomcraftEngine` (`window.RoomcraftEngine` in the editor), not the internal globals. Its current API is:

```text
canonicalize, canonicalStringify, fingerprint, clone, normalizeScene,
createIdAllocator, createVerificationRecord
commands:    createLog, createJournal, validate, replay
migrations:  registry, normalizeRegistry, run, verifyIdempotency
render:      layerManifest, validateLayerManifest, createPlan, validatePlan,
             layerForItem, orderSceneItems, partitionItems, partitionSceneItems
assets:      createManifest, validateManifest
environment: fingerprint, validate
io:          exportProject, importProject, verifyRoundTrip
```

`partitionSceneItems` exposes primary buckets `rugs`, `ceilingDevices`, `openings`, and `furniture`, plus temporary compatibility aliases `floorItems`, `ceilingItems`, `windowItems`, and `regularItems`. The integrated renderer currently consumes the aliases to minimize visual risk; new engine consumers should prefer the primary names. Remove aliases only after the existing render paths change and parity tests prove the result. `orderSceneItems` supplies the same buckets without hashing/cloning for pointer and paint hot paths; evidence and release tooling continue to use the full plan.

The editor adds a read-only diagnostic facade at `window.RoomcraftEditorEngine`. `inspect()` returns engine/schema/reference versions, project/render-plan/command-log hashes, the current bounded command count, checkpoint count, and canonical round-trip status. `renderPlan()` returns the current deterministic item plan; `exportCommandLog()` returns the current journal segment. The editor caps the in-memory full-snapshot journal at 70 commands and rebases it at a deterministic checkpoint; diagnostics expose the number of completed checkpoints. These are engineering diagnostics, not another source of truth. A command log can contain the private layout and entity bindings, so never paste or commit one without sanitizing it.

## Canonical data and replay

Use this pipeline at every import boundary:

```text
bytes → parse → size/type limits → schema validation → clone
      → ordered schema migration → ordered reference migration
      → normalization → canonical layout → command/scene/projection
```

- Reject non-finite numbers and invalid dimensions before rendering. Normalize negative zero to zero.
- Preserve array order unless the schema declares an array unordered. Current item order is meaningful within a visual stratum; a serializer must not sort it silently.
- A canonical hash serializer sorts object keys by code unit, preserves array order, emits compact JSON encoded as UTF-8, and excludes transient runtime fields. It must not round authored geometry or rewrite string contents as a side effect. Interactive geometry already snaps through the editor's explicit rules; percentage projection uses its documented precision.
- Compatible unknown properties are retained by a read/write round trip. A migration may remove a field only when its replacement and compatibility consequence are documented.
- IDs come from deterministic seed/counter state or a persisted/derived next ordinal. The command that adds an object contains the final ID and the allocator state is snapshot/restorable. Replaying that command uses the recorded ID and must not call the ID generator. The former clock-based editor helper has been removed; do not reintroduce wall-clock or random IDs.
- A full project import, dashboard replacement, recovery, or reset starts a new identity branch seeded from the normalized authoritative project and registers only that project's current IDs. Prior browser-draft history must not change the next ID after two sessions import the same project. Undo, redo, and drag cancellation reseed identity from the normalized project they restore while recording their journal transition; ordinary forward edits stay on their current branch.
- A command has a version, type, target or supplied ID, and serializable payload. Applying it is pure: `(layout, command) → nextLayout | typed error`. Validation failure leaves the input unchanged.
- One user gesture produces one history entry. Undo/redo must restore canonical authored state, not rerun a gesture, network request, asset load, or migration.
- Replay fixtures use synthetic entity IDs. A private diagnostic command log may include installed bindings, so it is treated like a private dashboard export and is never committed.

Until every current mutation path is routed through a pure reducer, tests around the existing editor remain the compatibility gate. Extraction must preserve saved JSON and behavior; it is not permission to introduce a new format.

## Layer and art contract

The scene compiler emits stable entries with at least a layer key, explicit `z`, stable input index, stable object ID, geometry, art/catalog key, and visibility/export flags. Backends sort by `(layer order, z, stable index, id)` and use the same order for paint and hit testing; they never inherit order accidentally from object keys or an adapter loop. The default engine manifest, back to front, is:

| Order | Layer | Ownership rule |
| ---: | --- | --- |
| 0 | `environment` | Exterior weather/day-night effects; explicit runtime input only |
| 10 | `shell` | Empty architectural shell and base exterior |
| 20 | `floor` | One seamless project-anchored finish clipped to each room |
| 30 | `rugs` | Fixed and movable rugs/mats without floor pixels |
| 40 | `fixed-structure` | Fireplaces, built-ins, and other immovable interior structure |
| 50 | `furniture` | Movable desks, tables, chairs, beds, storage, toys, and decor |
| 60 | `floor-devices` | Floor appliances and live device bodies |
| 70 | `ceiling-devices` | Fans and ceiling fixtures that remain visible above contents |
| 80 | `walls` | Wall caps, depth treatment, and room boundaries |
| 90 | `openings` | Windows, doors, garage openings, reveals, and sills |
| 100 | `controls` | Authenticated object-state art and interaction feedback |
| 110 | `interface` | Movable cameras, weather UI, status popups, clock/menu/editor affordances |

The editor, raster renderer, fallback renderer, and hit testing now share the engine's item-layer policy. The compatibility adapter materializes each legacy array index as explicit `z` unless an internal item supplies `zIndex`, preserving today's stack while producing an ordered plan. `zIndex` is not yet a public layout-v2 feature because HA/cloud overlays do not consume it; add transport parity and a schema migration before exposing user-controlled stacking. Every integration change still compares the default scene plan and 100% export. Engine integration may not silently reorder furniture or controls.

Changing this order is an engine-contract change. It requires a decision-log entry, a scene-plan fixture update, before/after evidence, editor/export comparison, and tablet review.

Art rules:

- Every movable object has transparent surroundings and an opaque or intentionally translucent semantic core. No room-floor sample, rectangular source crop, unrelated furniture, or baked UI may move with it.
- A floor texture is anchored in project coordinates and clipped once to the room polygon so moving furniture cannot reveal a seam or change the pattern phase.
- An art primitive receives explicit context, geometry, catalog metadata, and render profile. It brackets canvas state with balanced `save`/`restore` and leaves transform, alpha, blend mode, filter, smoothing, line style, and shadow state unchanged for the next object.
- Plan shadows use deterministic offset shapes or authored sprite alpha. Executable canvas `shadowBlur` remains prohibited on the Roomcraft render paths because the wall-tablet WebView produced black and colored corruption. A filter used for a bounded mask is not a furniture shadow and must have an Android regression fixture.
- One object owns one contact shadow. Do not combine an atlas shadow, generic world shadow, and another hard foot shadow.
- Wall-mounted art declares its mount axis, pivot, apparent wall depth, and rotation behavior. Windows are architectural openings, not floor sprites.
- Static art is neutral. On/off glow, fan rotation, mist, airflow, camera media, weather, and the robot's live position are runtime layers driven only by their bound state.
- The visual hit target and the artwork are separate contracts. A transparent control area may be larger than the drawing, but it cannot introduce visible button chrome or cover an adjacent control.

For every new or replaced asset, record a stable asset ID, path, pixel dimensions, alpha expectation, pivot/anchor, design size, layer, art family, perspective group, shadow ownership, and content digest in an asset manifest or equivalent checked fixture. Atlas entries also record the exact source rectangle. Asset URLs may be cache-busted, but a cache key is not the asset identity. A release may not mix an old manifest with new art files.

## Migration protocol

Roomcraft has two independent migration axes:

| Axis | Marker | Use |
| --- | --- | --- |
| Layout schema | top-level `version` | Field shape or meaning changes shared by all layouts and transports |
| Starter/reference art | `editableReferenceVersion` | One-time correction or addition to the known editable reference without changing version 2 semantics |

Each migration is a pure, ordered step with a stable name, source marker, target marker, and fixture. It must:

1. validate the expected input version;
2. clone rather than mutate the caller's value;
3. make only the documented transformation;
4. preserve IDs and compatible unknown properties;
5. preserve later user position, size, rotation, finish, binding, and deletion choices;
6. advance its marker only after a successful transformation; and
7. produce byte-for-byte equivalent canonical data when run a second time.

A reference migration that adds a starter object checks both the stable ID and a documented semantic equivalent. It inserts below live/interface controls when needed for touch access. Once the target reference marker is saved, a user's later deletion must not cause the object to reappear. Never detect a migration by looking at a current HA state or rendered pixel.

Every migration change requires fixtures for pre-migration input, expected output, second-pass idempotence, preservation of a representative user edit, unknown-property preservation, and HA/cloud round trips. Keep old imports readable until the new path is proven. Do not implement an automatic down migration for a destructive format change; rollback restores a pre-change private JSON/dashboard backup and the matching prior asset bundle.

## Change protocol

Use one change record and one bounded ownership lane. Split model, art, and runtime changes into separate pull requests when they can be reviewed and rolled back independently.

1. Classify the change: schema/model, command, migration, layer/art, raster backend, projection, editor, transport, or live runtime.
2. Write the invariant and acceptance example first. Add or update a decision when field meaning, coordinates, layer order, state interpretation, or security boundary changes.
3. Add a failing synthetic fixture/test at the narrowest pure boundary.
4. Implement inside the owning module. Any required cross-boundary API change is explicit and reviewed by both owners.
5. Run canonical replay/round-trip/scene tests plus the affected adapter tests.
6. For art or rendering, capture the same public-safe fixture at 100% in editor and export, then inspect the supported tablet profile. Do not approve from a scaled thumbnail.
7. Update schema/example/layout/art docs and the changelog in the same change. Never let comments become the only migration or layer specification.
8. Before a runtime write, save a private dashboard/image backup. Deploy one coherent editor/card/asset set; do not mix release files.
9. Read the dashboard and resource versions back, then record evidence and any checks deliberately deferred.
10. Merge/push only the exact revision that passed the gates. A later edit starts a new evidence run.

## Release governance — mandatory for every release

Apply the project-wide [release standard](release-standard.md) together with this engine checklist. Every release, including documentation-only releases, small art fixes, and emergency repairs, follows it. A release owner checks and records each item; “not applicable” includes a reason. No unchecked item is silently treated as passed.

- [ ] A customer acceptance map states the problem, solution, observable outcome, and deferred behavior.
- [ ] One accountable release owner and each changed ownership lane are named in the private work record or pull request.
- [ ] Scope is classified from high level to low level: customer outcome → system contract → module → file/fixture.
- [ ] Schema, coordinate, layer, asset, state-meaning, security, and compatibility impacts are explicitly reviewed.
- [ ] Synthetic tests were written or updated before approval; golden changes have a reviewed semantic diff.
- [ ] All required automated gates ran on the exact clean revision, with CI and local evidence distinguished.
- [ ] Public-safe visual/manual acceptance ran at the defined scale and viewport when behavior or art changed.
- [ ] HA/cloud parity, unavailable/offline behavior, accessibility, and reduced motion were checked where applicable.
- [ ] A private backup exists before any runtime write; rollback identifiers and matching release assets are known.
- [ ] Runtime installation and dashboard/resource readback use one coherent source and asset revision.
- [ ] Changelog, decision log when needed, user/manual documentation, and this handoff describe the result.
- [ ] Evidence records verified, failed, skipped, and deferred checks; no claim exceeds the evidence.
- [ ] Security review confirms no token, private binding, address, media, backup, or calibration leaked into source/evidence.
- [ ] The release owner signs off only after the exact tested revision is the revision to merge, deploy, and push.

For an emergency rollback, restore service first, then complete the evidence and failure record before starting a replacement release. Urgency may shorten the forward-change review, but it never authorizes exposing secrets, skipping the backup, mixing asset versions, or erasing the audit trail.

### Required review by change type

| Change | Minimum proof |
| --- | --- |
| Schema or field meaning | Schema/example, migration or compatibility statement, canonical round trip, HA/cloud parity |
| Command or editor gesture | Pure apply/replay test, invalid-input immutability, undo/redo, keyboard and touch behavior |
| Reference migration | Before/after fixture, second-pass equality, user-edit/deletion preservation, item-order check |
| Layer order or renderer | Exact scene-plan fixture, editor/export comparison, dimensions/alpha, Android corruption check |
| Asset or art primitive | Manifest/atlas metadata, transparent-core inspection, 100% before/after, perspective/shadow review |
| Dashboard projection | Coordinate round trip, managed/unmanaged merge, both transports, revision conflict/readback |
| Live state or animation | Domain normalization, on/off/unknown/unavailable, reduced motion, no action on render |
| Camera/weather | Synthetic time/state transition, independent failure path, authenticated-media boundary |

## Test and verification contract

From `site/`, the release gate is:

```text
npm ci
npm run release:verify
npm test
node --test ha-local/roomcraft-card.test.mjs ha-local/roomcraft-weather-outdoor.test.mjs
python -m unittest discover -s ha-local -p 'test_*.py'
npx tsc --noEmit
npm run lint
npm run build
npm run release:manifest:verify
git diff --check
```

`npm test` is where pure engine, editor migration, command/replay, render-plan, art, and bridge fixtures belong. Tests must not depend on a LAN service, current time, system locale, user profile, private file, test order, or network response. Inject a clock/state/ID when a boundary requires one. Test files may run individually and in any order.

Golden output updates are reviewed changes, not a maintenance shortcut. Record why the output changed, inspect the semantic diff, and attach a public-safe before/after when pixels or scene order changed. Do not replace a golden file merely because the test failed.

The current GitHub workflow covers the pre-build release gate, `npm test`, both HA JavaScript suites, Python tests, TypeScript, lint, the production build, release-manifest verification, and `git diff --check`. Visual, deployed Home Assistant, hosted Site, and physical tablet checks remain operational release evidence rather than CI; do not describe a locally or manually run check as CI evidence.

Manual checks complement automation:

- editor at 100% and exported 1536 × 864 PNG;
- clean import/export/readback with `full-width-v1` and expected migration marker;
- laptop and 1920 × 1080 tablet fit without crop, scroll, floor bleed, black/color bars, or clipped windows;
- touch/focus feedback and adjacent-control separation;
- unknown/unavailable and reduced-motion states without operating household equipment solely for visual QA; and
- preservation of unrelated views, unmanaged picture elements, and private runtime bindings.

## Release evidence

A release is repeatable only when another engineer can identify the exact inputs and see what was and was not verified. Record the following in the changelog and current engineering handoff, or in a linked public-safe release record:

| Evidence | Required value |
| --- | --- |
| Customer acceptance | Acceptance-map rows, status, and evidence link or test name for each promised outcome |
| Source | Git commit SHA and clean/dirty status; package-lock digest when dependencies changed |
| Contracts | Layout schema version, reference migration version, scene/profile marker, engine/asset manifest revision if present |
| Automated gates | Exact commands, pass counts, CI run link where applicable, runtime versions |
| Deterministic fixtures | Canonical-layout/replay/scene-plan digest or exact fixture revision |
| Render evidence | Output dimensions, public-safe fixture, editor/export comparison, supported browser/tablet profile |
| Runtime evidence | HA dashboard/resource readback summary, Site version/source SHA if deployed, and preserved views/elements |
| Exceptions | Unchecked physical states, natural events, long-running playback, orientations, or touch targets |
| Rollback | Prior release/source identifier and confirmation that a private dashboard/image backup exists; never its secret path or contents |

Counts are observations, not constants. Record the actual result from the tested revision. If source changes after evidence is collected, the evidence is stale. Private screenshots, camera frames, live dashboard JSON, addresses, and credentials do not become public evidence.

## Rollback and recovery

Treat source, HA static/card assets, saved dashboard/layout, and the optional Site as separate but coordinated rollback surfaces.

1. Stop publishing and export any unsaved editor work to a private JSON file.
2. Identify the last evidence-backed source revision and its matching editor/card/weather/assets. Do not combine files from two releases.
3. Restore the private pre-release dashboard backup, then read it back and verify the scene marker, layout and reference versions, plan image, controls, cameras, unrelated elements, and views.
4. Restore/reinstall the matching prior HA resource bundle and content-versioned resource URLs.
5. Roll back the Site independently when it changed, preserving its audience and server-only configuration.
6. Cold-load the dashboard and Studio on a clean tab; verify import before allowing a new export.
7. Record the failure, rollback revision, and new evidence status without committing private backup data.

Do not decrement `editableReferenceVersion` to imitate rollback and do not “repair” a failed migration by rerunning a starter reset. Restoring the backed-up canonical project is the recovery path.

## Team boundaries

| Team/lane | Accountable for | Required handoff | Must coordinate with |
| --- | --- | --- | --- |
| Model/engine | Schema, canonicalization, commands, replay, migrations, scene plan | Fixtures, compatibility note, pure API contract | Editor, renderer, both transports |
| Editor UX | Gestures, Inspector, accessibility, history UI, draft recovery | Interaction test and command mapping | Model/engine, QA |
| Art/assets | Catalog metadata, atlases, primitives, perspective, shadow ownership | Manifest entry, 100% before/after, provenance | Scene/renderer, documentation |
| Scene/raster | Layer compiler, asset readiness, canvas backend, export profile | Scene golden, export comparison, platform notes | Art, model, QA |
| HA/cloud projection | Coordinate mapping, managed-element merge, import/export parity | Round-trip, conflict, readback, preservation tests | Model, runtime, release |
| Live runtime | State normalization, actions, media, weather, animation | Offline/unknown/reduced-motion tests, no-action-on-load proof | HA projection, security |
| QA/release/docs | Gate execution, evidence, deployment order, rollback readiness | Exact revision, results, deferred checks, updated handoff | Every changed lane |
| Installation/security | Private bindings, credentials, backups, authorized deployment | Private access/recovery confirmation only | HA runtime and release owner |

One release integrator owns the final coherent bundle and evidence. Teams may work independently behind pure contracts, but no team may silently change a shared field, layer key, coordinate transform, asset identity, or state meaning. If ownership is ambiguous, stop at the boundary and record the interface decision before coding.

## Definition of done

A deterministic-engine change is complete only when:

- the customer acceptance map links each promised outcome to evidence or an explicit deferral;
- the owning boundary and dependency direction remain clear;
- canonical input produces a stable replay, scene plan, and projection;
- migrations are ordered, idempotent, and preserve user edits;
- floors, structure, furniture, live art, and interface remain separate layers;
- HA-hosted and cloud behavior agree where both apply;
- automated and manual gates pass on the exact revision;
- release evidence states both verified and deferred checks;
- rollback assets and a private dashboard backup are available; and
- the changelog, decision log when needed, and engineering handoff match the deployed result.
