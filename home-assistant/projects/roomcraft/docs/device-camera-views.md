# Front views and a default for each frontend

## Customer outcome and acceptance

The household uses the same Home Assistant account on a wall tablet, phone and laptop. Each screen needs its own useful opening composition. The previous account-wide camera preference allowed one screen's choice to replace another's; the exterior landmarks also needed reliable views of their fronts.

Acceptance criteria:

- **Gold Coast · front**, **Elementary school · front**, and **Innoflight · front** appear in the shared camera list and frame the actual visible model from its front.
- Moving, rotating or resizing a landmark updates its framing. A missing landmark falls back to the whole scene without stale target coordinates.
- Any complete supported camera view can become this frontend's default. A named landmark default follows its authored front; a saved Free view retains its exact chosen angle.
- Saving or resetting one browser/app profile and dashboard never writes another frontend's default, shared layout or HA user preference.
- Existing HA account defaults migrate once into each frontend's local storage. A local reset remains reset after reload instead of importing the old value again.
- Embedded Studio and Home share the HA parent's local preference. Studio keeps overhead authoring; a separate preview temporarily shows the chosen view with editing paused.
- Failed or blocked storage reports failure, with no persistence claim. The UI refreshes its cached default after a successful local change.

Non-goals: no new building art, layout migration, physical device operation, account synchronization, cloud camera storage or independent editing camera. This does not add arbitrary pan coordinates to the stored pose.

## Use the views

In Home, open **Menu → View controls → Camera view** and choose a front view. **Save as this device’s default** saves the current supported view for this frontend; **Use Top down on this device** resets it locally. Choosing **Default** or waking the idle camera uses that saved composition. In Home's **Free view**, orbit and zoom before saving to retain an exact angle rather than automatically following a landmark's front.

Studio's **Main menu → Views & device default** dialog offers the same view list. Choose **Preview view** to inspect the shared 3D scene. The banner says **View preview · canvas editing paused**; select **Return to overhead editing** before placing or moving objects. Closing the dialog leaves the preview visible until that explicit return. While the preview canvas is active, Delete/Backspace, tool shortcuts and Undo/Redo cannot modify the layout; Escape returns to overhead editing. Dialog and form controls keep their normal keyboard behavior. The dialog's **Save as this device’s default** and **Use Top down on this device** use the same preference transport as Home when Studio is embedded in HA. The main **Save** still publishes the layout and is separate from camera preferences.

“This device” means the current browser/app profile, website origin and dashboard. Two browsers on one laptop have separate storage, as do the Companion app and Chrome. LAN HTTP and remote HTTPS addresses are different origins and can have different defaults. Clearing site data removes the local preference; the next read can migrate the retained legacy HA value again. A private hosted Studio has its own origin and does not change the HA tablet's default.

## Synthetic browser gallery

These captures use public-safe synthetic layout/device fixtures, not household media or a deployed tablet.

[![Gold Coast front](images/device-camera-views/front-goldcoast.png)](images/device-camera-views/front-goldcoast.png)

Gold Coast front — Synthetic browser fixture, shared production renderer.

[![Elementary school front](images/device-camera-views/front-school.png)](images/device-camera-views/front-school.png)

Elementary school front — Synthetic browser fixture, shared production renderer.

[![Innoflight front](images/device-camera-views/front-innoflight.png)](images/device-camera-views/front-innoflight.png)

Innoflight front — Synthetic browser fixture, shared production renderer.

[![Studio local-default preview with overhead-return banner](images/device-camera-views/studio-local-default-preview.png)](images/device-camera-views/studio-local-default-preview.png)

Studio local-default preview — Synthetic browser fixture, shared production renderer.

## Camera and framing contract

| View | Authored catalog type | Target rule |
| --- | --- | --- |
| Gold Coast · front | `sceneryRanchHouse` | First authored placement with a visible rendered root |
| Elementary school · front | `scenerySchoolCampus` | First authored placement with a visible rendered root |
| Innoflight · front | `sceneryOfficeCampus` | First authored placement with a visible rendered root |

All three model facades face local +Z. The camera derives their world-facing direction from the rendered world matrix and fits the transformed mesh bounds, including width, depth, height and rotation. No installation coordinates are hard-coded into the camera preference. Real model bounds are cached until authored changes invalidate them; selecting a view or resizing the viewport reuses those bounds. Draft movement and model rebuilds after dimension/rotation edits refresh the framing. Gold Coast uses a 50° default tilt to keep the current composition above the foreground condo wall. If duplicate catalog types exist, the first visible authored placement supplies that view. Missing, deleted or invisible targets fall back to ordinary whole-scene bounds at the preset angle.

The renderer-independent [`storybook-camera-views.mjs`](../site/ha-local/storybook-camera-views.mjs) owns the shared menu, normalization and strict storage validation. The stored DTO is `{preset, azimuth, tilt, zoom, framePreset?, followFront?}`. Unknown fields are discarded, finite numeric ranges are enforced, and old complete Free-view records remain valid. `framePreset` identifies an authored landmark/coast target, not copied geometry. A named landmark resolved as **Default** carries `followFront:true`; a Default derived from Free view retains the target frame but omits that flag to preserve the exact angle.

[`storybook-camera.mjs`](../site/ha-local/storybook-camera.mjs) fits the camera. [`storybook-scene.mjs`](../site/ha-local/storybook-scene.mjs) owns actual model/world bounds. Neither camera normalization nor persistence changes room coordinates, model dimensions, layout items or device state. Existing shared artwork is reused without new binary assets.

## Local persistence and migration

[`storybook-camera-preferences.mjs`](../site/ha-local/storybook-camera-preferences.mjs) exposes:

```js
createCameraPreferences({host, dashboard: 'roomcraft-home', readLegacy})
// async read() -> canonical view or null
// async write(viewOrNull) -> canonical saved view or null
```

The key is `roomcraft.default-camera.v2:<encoded-dashboard>`. Different dashboard names have different local keys. The value is a canonical pose or literal JSON `null`. A missing key triggers one legacy read; an explicit `null` is a reset tombstone and never triggers migration.

The HA parent adapter keeps `RoomcraftEditorCard.readStartupView` / `writeStartupView` and the iframe's `CAMERA_GET` / `CAMERA_SET` contract. On first read only, the parent requests the old `frontend/get_user_data` preference and snapshots it locally. Its historical `roomcraft-home` → `second-floor` alias is used only for that legacy HA lookup. New writes never call `frontend/set_user_data`. Unembedded Studio can migrate its old `roomcraft.default-camera.v1` browser key once through the same helper.

Migration rechecks the local key after awaiting HA so a concurrent explicit save or reset wins. Missing/invalid legacy values become a local null fallback. A failed legacy read leaves migration incomplete and retryable. Corrupt existing local data produces a clear error and does not silently reimport the old shared value; explicit Save or reset can replace it.

Writes read back the exact serialized value before returning success. Missing, inaccessible, quota-limited or silently discarded storage rejects the operation. There is no account-wide fallback write and no silent session-only claim of a saved default.

Successful explicit saves and resets dispatch `roomcraft-camera-preference-change` on the host when `CustomEvent` is available. Its sole detail is `{dashboard}`; it contains no pose, entity or account data. Migration and normal reads emit nothing. Home can invalidate its cached preference with this same-document event and the browser's cross-document `storage` event. Event delivery failure cannot undo a confirmed storage write. The parent origin owns embedded Studio's storage, keeping the iframe credential-free.

## Ownership and privacy

| Module | Responsibility |
| --- | --- |
| `storybook-camera-views.mjs` | Lightweight shared presets and strict DTO contract; no Three.js dependency |
| `storybook-camera-preferences.mjs` | Local key, migration, tombstone, verified persistence and change notification |
| `roomcraft-card.js` | Authenticated legacy read and trusted iframe bridge; no new HA preference writes |
| `roomcraft-storybook.mjs` | Home selection, local save/reset, cached-default refresh and idle-return integration |
| `storybook-studio-camera.mjs` / `storybook-editor.mjs` | Separate view-preview dialog, paused authoring and overhead restoration |
| `storybook-camera.mjs` / `storybook-scene.mjs` | Shared projection and model-derived target bounds |

No credentials, private device values, account identifiers, photos, camera media or personal location data are stored in the preference or public tests. The helper stores only camera presentation data. Schema, layout Undo/Save, integrations and artwork retain their existing owners.

## Verification and release status

The final runtime passed the full release gate and **745 automated tests**: 640 site tests, 67 bridge tests, 30 installer tests and 8 presence tests. [Runtime CI](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43491551297) succeeded. The gate was rerun after the final runtime/documentation freeze to bind the manifest to the source below; this operational evidence is a later documentation update.

The production-built browser fixture passed all three front views, two isolated frontend profiles sharing one synthetic HA account, the real Studio iframe bridge, same-parent cache refresh, local save/reload/reset and framed idle wake. Front-view-to-Free conversion retained the fitted 270° azimuth and 50° tilt. Preview dialog Delete/Ctrl+Z, canvas preview Delete/Escape, overhead return and unchanged drafts/device states passed. It recorded no physical actions and no browser exceptions. The gallery above now uses the final built fixture's synthetic captures.

Actual tablet verification exposed and corrected a gap in the first candidate: Innoflight at authored X=1750 was partly hidden by the condo, while the original fixture at X=2020 missed that occlusion. The updated fixture reproduces the closer placement; the final 40° tilt reveals the full facade and forecourt. Gold Coast retains a narrow foreground wall band below its facade and limited occlusion at the bottom of its driveway. These are real scene occluders, not missing model bounds; framing does not remove foreground geometry.

| Released artifact | Exact evidence |
| --- | --- |
| Final runtime source | `5175c61a1385f1e2a9190b5172ea75d3226f2ad2` |
| Full-project manifest | `sha256:e4820083863987b09e42f241544aa2b9c80018b8be38ef1ae7552e18a7392dd1`, 434 inputs |
| Runtime CI | [Run 43491551297](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43491551297), successful |
| HA browser asset revision | `2b81db0d8a554b34` |
| HA readback | 14 exact asset hashes on both LAN and remote access |
| Authored data | Eight non-view dashboard fields and all 82 objects preserved |
| Owner-private Studio | Version 119 published successfully |
| Site source | `2bf049f03d84f166ff4f34b38ca8bee564808538` |
| Site subset manifest | `sha256:a07cf2bd3d1daa351b486aaa525d9429e6d00746da03bbb93f9808bde9081ad1`, 315 inputs |
| Shared built artifacts | Five Home, bridge, Studio, HTML and CSS files are byte-identical between the runtime and Site builds |

The actual 1920 × 1080 wall tablet cold-launched the final build and retained its original local default. All three fronts were selected, captured and visually inspected, with fitted azimuth/tilt verified as Gold Coast 270°/50°, school 90°/58° and Innoflight 270°/40°. The complete Innoflight facade and forecourt were clear. Default was restored after inspection and the temporary debugging forward was removed.

Actual-tablet Save, local preference readback and app cold-restart restoration of a framed Innoflight Default passed on the earlier candidate before the occlusion correction. The original default was then restored, and the final build retained it. The final browser fixture independently rechecked persistence and isolation on the final assets. No actual second phone/laptop test or separate hosted-Site browser inspection is claimed. Private tablet images and recovery records remain outside Git. The [engineering handoff](engineering-handoff.md) identifies this verified release.

Reproduce targeted checks from `site/`, then run the complete [release gate](release-standard.md#deterministic-release-evidence) after any source change:

```powershell
node --test tests/storybook-camera.test.mjs tests/storybook-landmark-camera.test.mjs tests/storybook-camera-preferences.test.mjs ha-local/roomcraft-card.test.mjs
node scripts/verify-device-camera-browser.mjs
# After the full production build:
$env:ROOMCRAFT_DEVICE_CAMERA_QA_DIST='1'
node scripts/verify-device-camera-browser.mjs
```

The camera tests use real model factories across landscape, portrait and ultrawide viewports, transformed bounds, target movement/scale/rotation, deterministic output and deleted-target fallback. The browser fixture uses the production Home/editor cards, iframe bridge and Studio renderer against synthetic HA data; it rejects shared preference, layout and physical-device writes. Its closer-landmark regression preserves the tablet-discovered case.

## Rollback and recovery

Use **Use Top down on this device** to clear only that frontend's saved camera. If storage is blocked, allow site storage and retry; the UI must not claim it persisted a value before that succeeds. The rollback baseline is runtime `bab951aaf5eda8d1a66824f4e20a238535d6054f`, HA resource `ee1b46eac2eb8d12` and private Studio 117. Reinstall those matching assets and restore the protected pre-install dashboard backup if needed, using [deployment recovery](deployment.md). No layout rollback is required for this feature. The old HA user default remains untouched for older runtime versions; its value may differ from a newer local default. Avoid clearing all browser data as a routine rollback because that also removes unrelated local preferences.
