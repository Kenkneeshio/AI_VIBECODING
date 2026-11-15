# Wildlife menu, world tour and room presence — 15 November 2026

## Customer and acceptance

The wall display owner needs the new inland wildlife to be discoverable and the demonstration to show the landscape as a coherent work of art. The same owner has observed that the mmWave switch projects a kitchen visitor to the dining table and a person at the hall display to the wrong place. The control surface should show which of four connected home areas is occupied, without implying accurate seat-level coordinates. Automatic idle should start after one minute of no touch and stay configurable in Menu → Display.

Observable acceptance: Living world begins with an inland section, all 42 illustrated species and signature behaviors are browsable, and canyon/creek/desert/scrub previews are one tap away. The world tour has four corresponding camera chapters, a day-to-night mood, captions and matching bundled narration. The final view and actual HA state must be restored unchanged. Live presence characters may appear only at safe anchors in living, dining, kitchen or the start of the hall. A room change requires a stable report and then uses existing pathfinding and furniture interactions. The owner can capture one fresh radar point while standing in each area. Default idle wait is 60 seconds, while custom waits remain available.

## Implementation contracts

| Owner | Contract |
| --- | --- |
| `storybook-world-life-panel.mjs` | The inland card leads the menu; 42 catalog rows list activities. Habitat buttons start a reversible preview using the same scene. The global inland flag and shared density/pace/seed remain the persistent settings. |
| `storybook-demo.mjs` and `storybook-demo-frame.mjs` | Four 4-second chapters follow the previous landmark sequence. Explicit time drives daylight, golden hour and moonlit scrub; a temporary demo setting guarantees illustrated wildlife even if the owner's ambient wildlife flag is off. It never calls device services. |
| `public/demo-narration-v2.mp3` | 76-second bundled local narration generated from the exact cue table. Voice remains muted by default. The prior v1 file is retained for rollback compatibility. |
| `storybook-world-moments.mjs` and `storybook-scene.mjs` | Provide habitat focus and bounded animal art in the shared Home/Studio renderer. Preview restores the prior camera. |
| `storybook-presence-zones.mjs` | Four data-derived safe anchors and optional anonymous per-screen raw-radar calibration. A candidate zone must persist 1.2 seconds before the marker changes area. Raw coordinates are never sent to Git or a new service. |
| `storybook-tracking.mjs` and `roomcraft-storybook.mjs` | Snap only the displayed character location; existing freshness, occupancy and last-known rules remain. The Presence tracking dialog captures one current radar target per zone into local browser storage. The raw heatmap remains an explicit calibration tool. |
| `storybook-idle-camera.mjs` and `storybook-idle-runtime.mjs` | Fresh screens default to a 60-second wait. A saved, untouched 30-second default migrates; customized waits remain. Menu → Display → Idle view settings edits the per-screen preference. |

## Limits and calibration

The mmWave report does not identify people and its current affine projection has been observed to mislabel kitchen versus dining. The four-zone rendering removes false exactness, but correct zone labels require one captured sample per area when a person is alone in the field of view. Capture through Menu → On the map → Presence tracking. One hall observation was available during development, but it is **not** treated as proof of the kitchen, dining or living centroids. Calibration is local to each browser/tablet profile. The screen's nearest safe anchor and route search keep characters on authored indoor floor; they may pause or pick a nearby furniture activity after a stable report. Room labels are presentation, not an occupancy automation input. The real occupancy switch and device controls are unchanged.

The four staged wildlife chapters are artwork, not real sightings. The temporary tour lighting does not alter real weather, lights or switches. The regional animal silhouettes remain procedural and share rigs; this release improves framing and scale but does not make each of the 42 species a unique hand-modeled asset.

## Release evidence

Source revision: `88155c6ae7a66a4ecdde2bf6fd4fde197a282b20`. Home Assistant resource version: `22ec53f88692ab7a`. Owner-private Studio version: 122, source commit `50393e7c11163f6d5c5e023612dfa210ba87989f`; deployment succeeded. The complete source release gate passed on the committed runtime; GitHub Roomcraft workflow [43772469294](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43772469294) succeeded. Browser checks exercised the 76-second tour, four habitat chapters, bundled audio, camera restoration, the 42-species menu, inland preview, one-target room capture, and the true 60-second idle/touch cycle without HA writes. The installer read back the dashboard and resources; a separate LAN and Nabu Casa check matched all 14 assets to the build, confirmed Home/Studio/Controls, and preserved eight non-view dashboard fields. The wall tablet loaded the updated live view at 1920 × 1080 after a cold launch; private visual evidence is `C:/Users/kenny/HomeAssistantManagement/backups/roomcraft-tablet-visual-20261115T230358Z/roomcraft-loaded.png`. The pre-install dashboard backup is `C:/Users/kenny/HomeAssistantManagement/backups/roomcraft-home-before-roomcraft-lan-20261115-150111-788838.json`.

## Rollback

Reinstall prior verified runtime `3b95747680dc1182bbc099a266e4fb5ad55dbd8f` and its HA asset `1359d4fba792608d`, restore the pre-install private dashboard backup, and restore owner-private Studio version 121. Keep captured zone calibration in local browser storage during rollback; older runtime ignores it. No layout migration is required.
