# Living world: wildlife and evolving scenery

## Customer outcome and acceptance

The household wants a miniature world worth revisiting: recognizable dolphins, sharks, whales, seals and walruses with varied sizes and behavior, alongside changing beach activities, characters, vehicles, plant movement and water detail. The scene should offer occasional discoveries without obscuring household controls or overwhelming the wall tablet.

Acceptance: Home and Studio use the same art and settings; independent category/species switches, density, pace, variety and a reproducible seed are editable and survive Undo/import/Save. Animation follows explicit time, safe shoreline/ground geometry, reduced-motion preferences, day/night and actual weather. Actor pools and geometry stay bounded. Preview uses the real rendering loop, restores the previous view and makes no device calls. Existing authored geometry, objects, bindings and holidays remain intact.

This is decorative scenery. It does not infer real wildlife sightings or occupancy. Walruses are explicitly storybook visitors, not a claim about the local coast. Variety comes from a finite authored vocabulary and many deterministic combinations, not an infinite asset generator. Actual sensor, fan, light, vacuum and weather state retain their existing meaning.

## Shared settings and ownership

`roomcraft_layout.sceneSettings.worldLife` is optional. Compatible defaults enable the new scenery without a destructive migration. The scene passes the same validated settings to its existing and new layers.

| Field | Contract |
| --- | --- |
| `enabled`, `marine`, `dolphins`, `sharks`, `whales`, `seals`, `walruses` | Boolean, default true |
| `characters`, `vehicles`, `vegetation`, `water`, `weatherAccents`, `surprises` | Boolean, default true; decorative additions/variation, never physical device controls |
| `density` | 0–1, default 0.65 |
| `pace` | 0.25–2, default 1 |
| `variety` | 0–1, default 0.8 |
| `seed` | Integer 0–9999, default 37 |

The pure settings module owns validation and immutable updates; Home's save adapter checks administrator identity, concurrent settings edits and readback while retaining a rollback snapshot. Studio uses one history transaction. The world clock receives explicit time from the HA adapter, so a reload does not restart every long story. Preview and demo use separate elapsed clocks. Reduced motion holds the presentation still.

Marine art and route planning belong to `storybook-marine-life.mjs`. `storybook-world-moments.mjs` owns additional grounded scenery events; existing beach, sidewalk, boats, traffic, trees and ocean modules retain their domain behavior. `storybook-scene.mjs` composes them once for both surfaces. No runtime animation frame, entity value or private image enters the saved layout.

## Art catalog and editable limits

The ocean pool contains pearl and lagoon dolphins, a reef shark, humpback and orca whales, harbor and spotted seals, and a storybook walrus. Each has three restrained coat palettes and deterministic encounter scale from 80–100% at maximum variety (84–100% at the default). Existing conservative route reservations cover the largest form. Eight skinned actors share one material; foam uses one additional material, nine total draw submissions, at most 64 foam instances and 27,154 submitted triangles. Color buffers update on encounter changes without replacing geometry or materials.

![Original marine art, synthetic Chrome gallery](images/living-world-marine.png)

Beach recipes rotate through kite flying, yoga, reading, painting, picnic and shell collecting, with six character palettes. Groups keep their proportions and stay stable for eight-minute encounters, separated by a short empty interval. Gull flights, butterflies and wind-driven leaf/blossom drift use bounded schedules; water glints/rain rings require compatible actual conditions and existing effects toggles. Eight fixed instancing pools draw the additional moments, with fewer than 500 active parts in the tested maximum-density fixture.

![Six beach activity recipes](images/living-world-activities.png)

Traffic variations add restrained paint choices and roof cargo without changing measured vehicle counts/speeds or the selected fleet style. Ambient boats and sidewalk groups respect the new category gates, pace and bounded density. Static tree geometry and the underlying real weather remain when decorative activity is paused.

![Vehicle paint and roof cargo variations](images/living-world-vehicles.png)

The current editor changes **recipe settings**, not each transient animal or leaf as an independent furniture object. Marine routes are derived from valid water and reserve coast, boat/wake and other animal envelopes. Narrow/invalid regions omit an unsafe actor or vignette. Preview temporarily frames the complete enabled route envelope and restores the prior camera; Studio disables placement gestures during that temporary camera. This is a finite, extensible catalog; additional silhouettes/behaviors belong in the owning modules and their visual/bounds tests.

## Verification and release evidence

The exact runtime source passed **714 automated tests** plus architecture boundaries, deterministic release/manifest checks, TypeScript, lint, production build and whitespace validation. The full release gate ran after the last source correction. [GitHub runtime CI](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43350492644) passed. Existing framework build warnings are recorded in the local gate log; no new lint errors remain.

The marine suite covers safe full-body coast/boat/actor clearance, actual skinned vertex bounds through articulated poses, all enabled species, high epoch times, appearance changes without allocation, quiet night/storm behavior, reduced motion and disposal. The scenery suite covers valid grounded placement, grouped proportions, weather/category gates, authored tree anchors, bounded buffers and traffic semantics. Clock tests cover reload continuity, preview isolation and live refreshes during the tour.

Built Home and Studio Chrome fixtures exercised the actual animation scheduler, continuing frames, five-species preview, projected bounds, individual filters, master Off, exact decimal settings, native validation, rapid close/Escape, prior camera restoration, 390-pixel phone fit and zero physical device actions. Studio also exercised Undo/Redo, actual JSON file import and mock Save. The Home fixture saved through the real adapter against an in-memory server and verified 82 synthetic objects, holiday/device state preservation, prior-layout snapshot and readback.

Three defects found during validation were corrected: preview camera framing now fits the complete enabled route envelope; demo time cannot overwrite the real-world clock anchor; household overlays disappear during offshore previews and return with the home view. Release input discovery now discovers direct authored HA runtime modules, so new modules cannot silently disappear from source provenance.

| Released artifact | Exact evidence |
| --- | --- |
| Final source | `442666f6def0269c0923b0ad1cdd9d81d15f9fe3` |
| Full-project manifest | `sha256:3a17a309d7c95b8383a2e6ae266b58fa4654c342c27f59cc2775eeecb5c26baa`, 414 inputs |
| HA browser asset revision | `ec407312d1d413aa` |
| HA readback | 14 exact asset hashes over LAN and remote access; Home/Studio/Controls routes and resource registrations match |
| Authored data | Actual tablet Save persisted all Living world defaults. All 82 objects, holiday preferences, bindings and every other authored field stayed unchanged; previous layout retained in snapshots |
| Owner-private Site | Version 115, deployment `appgdep_6af6723a026c8191beaa965f2e7d1573`, succeeded |
| Site source | `1e07e77d0494f9e505effad66cbde84272b3aad1` |
| Site subset manifest | `sha256:5848125838e3afe1a9f902db37d5727f69d1b6904ce068d985ac795b55296f0b` |
| Local archive | `sha256:eaf3088fb335b87808894a4e812972848fd3fe400ffb4ffe94bf725d95ad5bc9` |
| Stored Site archive | `sha256:2a136992f0107fe705f51f68c70b5aa1e8f3be0857fc51189860c05cb04f9515` |

The 1920 × 1080 Apolosign tablet cold-launched Companion 2026.10.1-full with its HOME alias intact. Actual menu, animated nighttime wildlife preview, clean offshore overlays, End preview, restored home controls and Save/readback were checked. The final browser assets are identical to those in this hardware proof. Observed counters were 26 FPS on Home and 29 then 43 FPS in the close preview; these are momentary samples, not a benchmark. Daytime activity/appearance galleries were checked in synthetic Chrome. No physical device was actuated.

Public proof uses generic synthetic scenes. Private tablet images, full dashboard backups and the operational recovery record remain in the protected management folder. No separate hosted-Site visual check was performed; its native publication succeeded and the shared built source was exercised locally and on the HA tablet. Full gates and deployment evidence identify the runtime revision above; this documentation is a separate post-deployment commit.

Reproduce after building from `site/`:

```powershell
$env:ROOMCRAFT_WORLD_LIFE_QA_DIST='1'
node scripts/verify-world-life-browser.mjs
$env:ROOMCRAFT_WORLD_LIFE_STUDIO_QA_DIST='1'
node scripts/verify-world-life-studio-browser.mjs
node scripts/verify-world-moments-browser.mjs
```

## Rollback

Previous verified runtime: `07972b7eda27db8c22362ac72d53571f2c9a0725`, HA resource `fddc98664af18134`, owner-private Studio 112. Rebuild/reinstall that source, restore the protected pre-install dashboard backup if the new settings were saved, and restore Site 112 separately. See [deployment recovery](deployment.md).
