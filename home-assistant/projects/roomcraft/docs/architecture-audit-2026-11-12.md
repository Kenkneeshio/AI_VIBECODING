# Architecture audit — 12 November 2026

## Customer problem and acceptance

The homeowner wants a builder-style editor with reproducible artwork and controls. Engineers need a current system map rather than years of chat history. The earlier architecture page emphasized the old raster dashboard and omitted much of the shared 3D and terrain implementation.

This audit starts from source baseline `d44212b`, whose current terrain runtime was `864e9f4`. Required outcomes are a linked GitHub guide, explicit implemented/target distinctions, automated boundary checks and a safe correction of the publication validation gap. No authored home geometry or device behavior is redesigned.

## Findings and disposition

| Finding | Evidence | Disposition |
| --- | --- | --- |
| Stale entry documentation | README still advertised `/second-floor/studio`, old catalog counts and Export to dashboard | Replaced with current Home/Studio/Controls routes, Save workflow, architecture and current imagery |
| Missing architecture map | Earlier guide omitted implemented terrain, 3D and live modules | Added system, engine, edit/save, live-state and release diagrams; ownership, unit and setup tables |
| Malformed unbound furniture could publish | Shared validator accepted objects with missing/nonfinite geometry or negative dimensions | Fixed finite x/y/w/h/rotation, positive footprint, optional zIndex and modelHeight checks; tested rejection before transport side effects |
| No automated architecture inventory | Boundaries were prose and selected release checks | Added AST-based static source inventory and selected engine/shared-import guard; integrated with build and CI |
| Some world geometry cannot be individually edited | Generated landmarks, paths and scenery remain recipes controlled as groups | Explicit remaining capability gap; staged recipe/Inspector registry plan |
| Large adapters mix concerns | app, cards and scene own several responsibilities | Incremental extraction plan with behavioral parity, no replacement-engine rewrite |
| Undo uses snapshots plus replacement journal | Current app dispatches `scene.replace` | Documented semantic-command migration as future work |
| Duplicate IDs and full model validation remain incomplete | Current validators are not one shared full domain validator | Follow-up work, not silently claimed solved |
| Save concurrency has a small race | HA Lovelace lacks atomic compare-and-swap | Retain revision rechecks and one publisher during planned recovery |

## Changed contracts

Layout version 2, source coordinates, reference migration revision, device bindings, terrain data and the shared renderer remain compatible. Ordinary published objects now need usable finite geometry. Omitted legacy rotation means zero, custom catalog types and exterior coordinates remain allowed, and existing fence representation is preserved. The checked public example remains accepted.

The static guard inspects handwritten JS/TS roots, excludes generated bundles and tests, and uses the existing TypeScript parser. It checks declared entrypoints/imports, engine import direction and selected ambient APIs. Reports use sorted relative paths and normalized line counts without timestamps, installation identifiers or private data. It does not prove semantic purity, dynamic alias behavior, complete UI editability or runtime performance.

## Modules and ownership

- Engine/release ownership — architecture contract, AST checker and mutation tests.
- Publication ownership — shared dashboard validator and real adapter rejection fixtures.
- Documentation ownership — architecture landing page, README, roadmap, handoff, goals, decisions and release gate.

No new dependencies, art assets or layout migrations are required. The updated HA card bundle includes the shared validator; the optional hosted route uses the same source.

## Verification and deployment record

The final exact source revision, gate results, deployment readback and rollback evidence are recorded below after validation. Source tests alone do not establish Site, Home Assistant or tablet verification.

## Rollback

Rebuild and reinstall the preceding runtime `864e9f4614bdd8e194d9688403770d91a200f136` and restore owner-private Studio version 99 if the validation change causes a regression. Keep the protected pre-install dashboard backup outside Git. The current change does not require rewriting the saved layout.

Follow [deployment recovery](deployment.md), then verify each affected runtime independently. Git revert alone does not roll back installed assets or Site publication.

