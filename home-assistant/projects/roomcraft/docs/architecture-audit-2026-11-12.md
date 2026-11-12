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

The completed runtime source is [`5671e943d983496f7c59d74bfeec4b774afb4704`](https://github.com/Kenkneeshio/AI_VIBECODING/commit/5671e943d983496f7c59d74bfeec4b774afb4704). The architecture and validation implementation was introduced in `d86f544`; the following commit repaired the dependency lock. This evidence note is recorded separately from the runtime revision to avoid a self-referential manifest.

| Check | Actual result |
| --- | --- |
| Clean install | Windows `npm ci` passed. The initial GitHub run exposed missing nested optional WASM dependencies under npm 11.19.1. Reproduced with that npm version on Windows and repaired only the two missing lock entries. No existing package version or range changed. |
| Unit and integration tests | 452 site tests, 64 HA JavaScript tests, 30 HA Python tests and 8 Presence Python tests passed — 554 total. Includes malformed-object rejection before HA reads/uploads/saves in both transports. |
| Architecture | 105 handwritten JS/TS modules inventoried. Shared boundaries, selected capability guards and seven mutation/portability tests passed. |
| Type, lint and build | TypeScript passed; ESLint passed with 17 pre-existing warnings and no errors; production build and generated Studio freshness check passed. |
| Manifest | Windows and GitHub Linux produced the identical 332-input digest `sha256:eb837a2800a318e01d3fe5ea0ef1d3a85fd6fe623a2eb85784903649abc0ddf1`. |
| GitHub CI | [Run 43271665291](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43271665291) passed all gates and uploaded the manifest plus architecture inventory. |
| Documentation | Relative links across the 12 changed Markdown pages resolved. Five Mermaid diagrams were reviewed for syntax; no separate diagram-renderer verification was performed. |
| Existing design | The shared publication validator accepted all 75 current objects. The private design was read in memory and not committed or changed. |
| HA installation | Installer created and verified a protected pre-install backup. Nine deployed assets matched final build bytes over LAN and Nabu Casa. Resource version `d25830e164fd80b1`; Home/Studio/Controls and all eight non-view root fields matched the expected backup-preserving result. |
| Authenticated HA browser | Home opened Studio at Scene settings and Studio received live appearance. Upload and dashboard-save guards recorded no writes. |
| Tablet | ADB connection and Companion cold launch succeeded. The 1920 × 1080 Home capture showed the shared scene and dock. This does not certify every physical control or camera. |
| Private Site | Owner-private version 101 published successfully from source `dd5c446acb6ccd55625f78a0e9bcf1621cb77f7f`. Nine shared source files were compared with canonical source. Archive digest `sha256:0d75e56ecb61225827785113b02ee62d6267425cb4a152c6b1e11f668bc64f86`. |
| Hosted UI limit | The hosted authenticated browser flow was not rerun; deployment, source comparison and local hosted-route tests are the evidence for that surface. |
| Wider visual limit | The older broad coastal browser smoke failed at its coastal-view stage and is not counted as a pass. The focused Home-to-Studio smoke passed. Coastal art did not change in this release. Tablet capture still showed cramped camera status labels and an unavailable overhead preview; camera health/label layout remain separate follow-up work. |

Art regeneration is not applicable because no artwork changed. Schema migration is not applicable because the saved format and field meanings remain the same. Physical actuation is not applicable to this publication-boundary change and was not used for verification.

The installed HA bytes also match the final lockfile build, so no second dashboard write was needed for the lock repair. The protected backup path remains in the local administration record, not this public page.

## Rollback

Rebuild and reinstall the preceding runtime `864e9f4614bdd8e194d9688403770d91a200f136` and restore owner-private Studio version 99 if the validation change causes a regression. Keep the protected pre-install dashboard backup outside Git. The current change does not require rewriting the saved layout.

Follow [deployment recovery](deployment.md), then verify each affected runtime independently. Git revert alone does not roll back installed assets or Site publication.

