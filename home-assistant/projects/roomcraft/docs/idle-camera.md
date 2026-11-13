# Idle camera: discoveries with home first

## Customer outcome and acceptance

The wall-tablet user wants the home controls ready whenever someone approaches, while an untouched display slowly reveals the surrounding art. A fixed home view hides much of the coast and its occasional activities. Idle camera visits those existing scenes and then returns to the saved default home view.

Acceptance criteria:

- After 30 seconds without interaction, Home begins a gentle pan and zoom toward a valid scene interest. **Start idle view now** bypasses that wait.
- Each default excursion travels outward for 24 seconds, lingers for 16 seconds, returns over 24 seconds, and stays at home for 45 seconds before another visit.
- Touch immediately restores the saved default view. The complete first wake gesture is consumed so it cannot accidentally operate a device; the next normal touch works normally. Long presses, multiple fingers and assistive clicks require the same protection.
- Active holiday displays and current wildlife/activity events have greater selection weight. Disabled, hidden, invalid or preview-only subjects are excluded.
- Roomcraft menus and dialogs, previews, the demo, held gestures, hidden/inactive surfaces and reduced motion prevent automatic camera movement. Returning from a blocker starts a fresh inactivity interval.
- Preferences belong to the current browser. The authored layout, saved default view, actual weather, measured device states and Home Assistant controls remain unchanged.
- Studio and Controls do not acquire an idle camera. Editor placement gestures and Save semantics remain unchanged.

Non-goals: this is not a device demo, a screen dimmer, a new animation generator, occupant tracking, or a layout migration. It does not guarantee that a brief wildlife event will still be occurring when the slow camera arrives. The destination is held steady for that excursion rather than chasing an animal.

## Use and settings

In Home, choose **Menu → Display → Start idle view now**. Touch once to return to **Default**, then touch the desired home control. Keyboard or wheel activity also interrupts idle movement. The view comes from the existing saved default, including a saved free-camera orientation; idle mode never saves its temporary framing as the default.

Choose **Menu → Display → Idle view settings** to adjust this screen:

| Setting | Default | Menu range |
| --- | --- | --- |
| Automatic idle view | On | On / Off |
| Start after no touch | 30 seconds | 15–300 seconds |
| Slow pan duration | 24 seconds each way | 12–90 seconds |
| Pause at a discovery | 16 seconds | 5–60 seconds |
| Stay at home between visits | 45 seconds | 30–180 seconds |

**Save settings** stores these preferences in the browser. If storage is unavailable, the dialog reports that changes apply only for this visit. Turning automatic idle off still allows an explicit **Start idle view now**; **Reduce motion** prevents both automatic and manual movement. Opening another Roomcraft menu or dialog pauses the tour. Its display-only settings are intentionally separate from Studio's shared layout settings.

![Idle camera settings on a 390-pixel phone viewport using synthetic fixture data](images/idle-camera-settings.png)

## Architecture and deterministic contract

```mermaid
flowchart LR
  Scene[Actual scene state] --> Interests[Interest selector]
  Interests --> Director[Pure camera director]
  Time[Explicit time and seed] --> Director
  Preferences[Browser preferences] --> Runtime[Home interaction adapter]
  Input[Touch and blockers] --> Runtime
  Runtime --> Director
  Director --> Framing[Temporary camera framing]
  Framing --> Scene
```

| Owner | Responsibility |
| --- | --- |
| [`storybook-idle-camera.mjs`](../site/ha-local/storybook-idle-camera.mjs) | Pure state machine, bounded settings, seeded weighted selection and smooth travel/return |
| [`storybook-idle-interests.mjs`](../site/ha-local/storybook-idle-interests.mjs) | Filter actual scene samples into finite, public camera subjects |
| [`storybook-scene.mjs`](../site/ha-local/storybook-scene.mjs) | Transform authored landmark/habitat positions and expose `getIdleCameraInterests()` |
| [`storybook-idle-runtime.mjs`](../site/ha-local/storybook-idle-runtime.mjs) | Browser storage, explicit clocks, inactivity, blockers, safe wake handling and default restoration |
| [`roomcraft-storybook.mjs`](../site/ha-local/roomcraft-storybook.mjs) | Home menu, frame scheduling, temporary overlay visibility and adapter lifecycle |

`scene.getIdleCameraInterests()` returns at most 16 plain records: `{id, focus:{x,y,z}, weight, zoomFactor}`. Coordinates use the shared scene's existing world units. Selection rejects non-finite positions; IDs identify public scene subjects, never household telemetry. The getter returns an empty list before the first completed scene render, during transient/demo/holiday/wildlife previews, and after disposal. The Home adapter refreshes candidates at most once per second rather than traversing the scene every frame.

The selector weights the currently selected active holiday display above a marine event, then landmark activity, beach activities, animated habitats and ordinary wildlife, with coast/beach/road fallbacks. It respects the owning modules' visibility and settings. Offscreen culling alone does not disqualify a valid beach activity: approaching it makes its renderer visible again. Existing holiday, marine, landmark and world-moment modules remain the owners of all art and activity schedules.

The director accepts explicit time, interests and settings. It canonicalizes candidate order and uses a seeded weighted draw once per excursion. Sampling the same inputs gives the same result regardless of rendering frequency. A chosen focus is copied and held for the excursion, preventing a jittering or disappearing actor from steering the camera. With no valid candidates, it stays at home. Backward time resets safely, and skipped frames do not require replaying past excursions.

The browser boundary supplies monotonic animation time and derives a session seed from its configured seed and an explicit wall-clock bucket. The seed refreshes on connection, manual start and wake from an active idle visit. This varies later visits while preserving repeatable engine tests. The pure engine reads neither clocks nor browser storage. The runtime restores `resolveDefaultCameraView(savedStartupView)` and applies only temporary focus/zoom; it never overwrites the authored camera preference. Zoom is bounded by the existing scene camera.

The browser adapter checks connection, scene/frame readiness, stage size, document visibility, pending startup view, held pointers, Roomcraft menu/dialog/drawer state, demo, holiday preview and wildlife preview. Reduced motion and disabled automatic idle are separate director inputs. Touch capture shields both pointer events and the resulting compatibility click during a wake gesture. Listener and timer ownership follows card connection/disconnection. Adapter samples clamp queued animation-frame timestamps to the current monotonic time: a frame queued before an input must not undo a newer instant-start or touch. The devices drawer exposes public isOpen from its connected body portal, independently of its hidden launcher.

## Compatibility, privacy and art

No layout/schema migration, Home Assistant project write, entity binding change, new physical control or HA core configuration is introduced. Idle camera reuses the current geometry, artwork, lighting and animations. There are no new image assets, remote services, cameras, audio tracks or private media in this release.

Preferences use `roomcraft.idle-camera.v1` in local storage and do not synchronize between displays. The feature records no touch history or occupancy history. It does not transmit its selected subjects or operate Home Assistant services. Decorative landmark people and animals remain illustrations, not reports of real people or wildlife. Actual controls continue to use their existing state/action contracts.

## Verification and release evidence

The final runtime is `bab951aaf5eda8d1a66824f4e20a238535d6054f`, Home Assistant resource `ee1b46eac2eb8d12`, and owner-private Studio **117**. The final source passed the complete release gate and [GitHub CI](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43373029758).

| Check | Observed result |
| --- | --- |
| Dependency installation | `npm ci --no-audit --no-fund` passed; lockfile unchanged |
| Architecture and deterministic release | Pure director/selector boundaries, required imports, release verification and manifest readback passed |
| Automated suites | **727 passed**: 623 Site, 66 bridge/weather, 30 installer and 8 presence |
| Types, lint, build, whitespace | Passed; existing lint/framework warnings remain non-blocking |
| Exact production browser artifact | Real RAF and timers; actual 30-second idle/fresh-touch deadline; gradual framing; exact saved-free-default restoration; no browser errors |
| Wake and lifecycle regressions | Tap, assistive click, 1.8-second hold, two contacts, stale queued RAF, body-portal drawer, Roomcraft dialogs, demo and reduced-motion checks passed |
| Settings | Browser-local Save, disabled-auto/manual override and fresh page reload passed; 390 × 844 phone dialog fitted without overflow |
| HA readback | All 14 selected assets matched built bytes over LAN and remote access; exact resource registrations and Home/Studio/Controls views verified |
| Authored data | All eight non-view dashboard fields matched the pre-release backup, retaining all 82 objects and existing preferences |
| Site publication | Version 117 succeeded; owner-only audience preserved; bridge, Live, Studio and HTML bytes matched the main build |
| Actual wall tablet | Trusted ADB and Companion HOME alias confirmed; cold launch at 1920 × 1080, instant slow pan, touch return, pre-timeout home, automatic idle after 30 seconds, exact default restoration, devices-drawer blocker and settings fit verified |
| Device safety | Browser fixture issued no services or layout writes; tablet checks used only presentation/menu actions |

Actual-tablet verification exposed a queued animation-frame timestamp older than a newly handled button tap. That reset the pure director and cancelled instant start. The adapter now samples no earlier than current monotonic time. Review also found that the devices drawer lives in a body portal while its launcher stays hidden; the bridge now exposes public `isOpen`. Both regressions passed again in the production-built fixture and on the tablet. This is why source/browser evidence alone is not considered deployment proof.

The full project manifest is `sha256:b1313a37646cbdd863c79257501c6f7752fc5cecbb55d3a9a229e6928dfff8ec` (422 inputs). The Site subset manifest is `sha256:c67a297827d2757626850e46cbaeba15b7ae442c664e456111aa5221815ec774` (308 inputs). Site source is `db2f2209e0769d20d0aaa4f76a019e9b6625ddd6`; deployment is `appgdep_6af6a29a76e08191a574487059c5e076`. This post-deployment documentation records those verified runtime inputs; it is not a claim that the documentation follow-up was the deployed runtime.

Reproduce the targeted checks from `site/`:

```powershell
node --test tests/storybook-idle-camera.test.mjs tests/storybook-idle-interests.test.mjs
node scripts/verify-idle-camera-browser.mjs
# After the complete production build:
$env:ROOMCRAFT_IDLE_CAMERA_QA_DIST='1'
node scripts/verify-idle-camera-browser.mjs
```

Run the complete [release gate](release-standard.md#deterministic-release-evidence) for source changes. The public phone image uses synthetic fixture data. Private tablet captures, exact timer/default assertions, backups and readback details are indexed by the protected `roomcraft-idle-release-20261112.json` operation record. No private media or household state was committed. No separate hosted-Site visual browser check or tablet reboot test was performed in this release; successful Site publication and actual Companion cold launch are the checks claimed here.

## Rollback

Turn **Automatic idle view** off for an immediate browser-local stop, or enable **Reduce motion**. To restore the pre-idle software, rebuild/reinstall verified source `442666f6def0269c0923b0ad1cdd9d81d15f9fe3` and restore HA resource `ec407312d1d413aa` through the [deployment recovery procedure](deployment.md); restore owner-private Site version **115** separately. The protected operation record points to the original pre-idle dashboard backup, the correction-install backup and private visual evidence. No authored-layout rollback is normally needed because this feature does not write it. Retain browser preferences unless the user asks to reset them.
