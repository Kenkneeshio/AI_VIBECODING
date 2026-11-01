# Roomcraft engineering handoff

**Read this first when taking over Second Floor work.** This page is the current release snapshot and the shortest path to a safe change. The linked guides hold the detailed contracts and history. It is one prioritized work queue, not a set of new tickets.

## Current release snapshot (2026-10-31)

| Surface | Verified state | Source of truth |
| --- | --- | --- |
| Public source | Roomcraft is under `home-assistant/projects/roomcraft/` in `Kenkneeshio/AI_VIBECODING`; the full-width release retains all source columns in a 16:9 image, with coordinated control mapping and updated engineering/manual guidance. | GitHub `main` for code and reviewed documentation. A GitHub commit does not deploy a runtime. |
| Official editor | Home Assistant **Second Floor → Layout Studio** at `/second-floor/studio`, installed on one HA 2026.10 instance. The signed-in HA user's session supplies dashboard access through `custom:roomcraft-editor-card`. | HA-hosted card and static assets installed from `site/`. |
| Optional cloud editor | Owner-private Site deployed from source commit `334bfa9cd8ee9102d0d95e69576e1538621bf13f`. It is an alternate editor for the same layout and carries the camera modes, weather-compatible export, office lamp correction, window art, and dashboard return button. | Site deployment and its owner-only server bridge. |
| Saved layout and live plan | The Second Floor dashboard stores `roomcraft_layout` version 2 and a rendered 1536 × 864 plan image. Private readback confirmed **6 rooms, 41 items, 13 mapped controls, three managed camera thumbnails, and one independent weather element**. The office has one desk lamp and one light control. The front-door tile shows a dated event still between events; the overhead and garage tiles showed **LIVE** after decoded media. The static PNG omits the bound fan's blades; the live overlay supplies a single rotor. | Home Assistant dashboard configuration, not browser storage or this public repository. |
| Physical tablet | The HA host paired and connected to the Apolosign Calendar over wireless ADB. A private 1920 × 1080 HA Companion capture showed the full-width plan without crop or scroll, front-door last-event still, decoded **LIVE** garage and overhead feeds, current rain, and the 12-hour forecast strip. A stale frontend configuration error cleared after a safe cold launch. | Visual fit and current media/weather presentation were verified; physical touch coverage, an actual ring/person event, automatic launch/reconnect after reboot, and long-running playback remain separate checks. The capture and live media remain private. See the [access runbook](tablet-access.md). |

The default Home Assistant dashboard is an **owner profile preference**. It is not installed by this repository. The old Main Dashboard remains a reference for the curated control drawer; the `ishioho` project is a separate legacy prototype.

## Current runtime contract: cameras, weather, and exact device state

The deployed release adds a third editable camera frame and an independent outdoor-weather element. The intended bindings live in the private HA dashboard, not in this repository:

The office has one physical desk lamp. The private project removes the duplicate study ceiling fixture that pointed at the same light and keeps one movable `lamp` item using the bedroom-style sprite. The default fixture list now creates that desk lamp, so restoring fixtures cannot reintroduce a second office light. Dashboard readback confirmed one office light control.

| Surface | Data contract | Runtime rule |
| --- | --- | --- |
| Bound object | Item `entityId` supplies state; `visualKind` chooses treatment; optional tap/hold targets supply commands. Export resolves `roomcraft_visual_kind`. | Interpret active/inactive values by the entity's domain. A scene/script/button is an action, not measured on/off state. The fan rotor follows its motor switch; the separate scene-only fan light stays unlit until a feedback entity exists. |
| Doorbell frame | `cameraThumbnail` with `previewMode: "event_live"`, `camera.*`, `image.*` latest-event still, and one or more `binary_sensor.*` `eventEntityIds`. | Ring/person `on` transition opens a 60-second stream window. Outside that interval show the dated last image. The card requests a camera start on event and falls back to the still if the stream cannot start or decode. |
| Overhead frame | Independent `cameraThumbnail` with `previewMode: "live_auto"` and its own `camera.*`. | Mount native HA media while available without a wake command. Require advancing decoded video to label it live, even if HA entity state stays `idle`. |
| Garage frame | Independent `cameraThumbnail` with `previewMode: "live"` and its own `camera.*`, optional `image.*`. | Idle still; tap requests a stream; a decoded playing frame is needed for **LIVE**. |
| Outdoor weather | Unmarked `custom:roomcraft-weather-outdoor` picture element with private `weather_entity`, `sun_entity`, optional `moon_entity`. Separate versioned Lovelace module. | Current condition comes from HA state. Hourly `weather.get_forecasts` data is filtered by true timestamps through 12 hours. Tap previews an hour. Sun and moon state control exterior-only day/night and moon art; animations pause when hidden and respect reduced motion. |

The weather SVG fits the 1536 × 864 displayed picture, with an exterior mask at top x0–1536/y0–75, stairs x0–145/y75–815, balcony x145–380/y75–380, and bottom x0–1536/y815–864. Place it below camera and object controls. Export must retain this independent weather element while replacing only Roomcraft-managed controls and thumbnails. The project's editable coordinates remain 1536 × 1024. [Live object graphics](live-object-graphics.md) documents camera modes, state display, fallback, and weather behavior; [deployment](deployment.md) has the release checks.

The new camera layout fields are optional in version 2 except that `event_live` requires at least one distinct binary sensor (maximum six). Both HA and cloud bridges must validate and export the same values. The Inspector edits the mode and comma-separated event sensor list. No camera URL, still frame, token, current weather, forecast payload, or device value is persisted in layout JSON or source. Use synthetic IDs in tests and public examples.

Current source tests to run from `site/`: `npm test`, `node --test ha-local/roomcraft-card.test.mjs ha-local/roomcraft-weather-outdoor.test.mjs`, `python -m unittest discover -s ha-local -p 'test_*.py'`, `npx tsc --noEmit`, `npm run build`, and `git diff --check`. This public mirror passed 37 Site tests, 41 HA JavaScript tests, eight Python tests, TypeScript, and build. Private HA readback confirmed three camera elements with distinct modes, one weather element, 13 mapped controls, and an unchanged 1536 × 864 image. The actual tablet showed current rain, forecast strip, all three camera frames, and full-screen fit. Forecast previews across dusk/dawn, a real ring/person event, both window orientations, and broad object touch coverage remain separate physical checks; synthetic tests cover the state transitions. Do not trigger a physical sensor solely for layout QA.

The full-width scene supersedes the earlier 1472 × 828 crop. It renders source x0–1536/y80–944 as 1536 × 864 while the editable layout remains 1536 × 1024, then maps the same item and marker geometry into the displayed HA image. HA readback and a private actual-tablet capture confirmed the new full-width image; physical touch alignment remains to be checked. The [deployment guide](deployment.md) lists the release order and acceptance checks.

## First hour for a new engineer

1. Read this page, the [architecture](architecture.md), [layout contract](layout-format.md), and [deployment/rollback guide](deployment.md). Use the [illustrated manual](user-manual.md) to understand the intended interactions and the [tablet access runbook](tablet-access.md) for the separate remote control chain.
2. Work from `home-assistant/projects/roomcraft/site/`. Use Node.js 22.13 or newer and Python 3. Run `npm ci`, then the checks below. The public [synthetic layout](../examples/layout-v2.json) is safe for local development; the real dashboard JSON is private.
3. For live work, obtain authorized HA/Site access and the private management adapter from the owner. Do not infer credentials or installation coordinates from the public inventory. Take a private dashboard backup before any write.
4. Open `/second-floor/studio` through Home Assistant. It loads the current dashboard project on opening and preserves a different local draft for recovery. **Import from dashboard** refreshes an editor that is already open. If Chrome leaves the embedded editor blank, use **Open editor in a new tab** and keep Studio open; a direct `/local/roomcraft/editor.html` URL has no authenticated dashboard bridge.
   **← Dashboard** in the editor header returns to the plan. Unpublished edits prompt before navigation and stay in the browser draft; navigation does not export them. The owner-private Site gets the destination from its authenticated dashboard response.
5. Before changing a binding, confirm the physical device and current HA entity. The [sanitized inventory](ha-inventory/README.md) is a dated metadata snapshot, not a deployable config or live-state record.

## Code and data boundaries

| Change | Start in | Contract to preserve |
| --- | --- | --- |
| Canvas editing, objects, Inspector, browser draft | `site/public/editor.html`, `site/public/app.js`, `site/public/inventory.js`, `site/public/object-controls.js` | Stable item IDs; undo/redo; import/export without silently replacing an active edit. |
| Perspective art, floors, windows, rendered PNG | `site/public/object-art.js`, `site/public/raster-renderer.js`, `site/public/assets/` | The 1536 × 1024 design coordinates and unchanged authored geometry inside a 1536 × 864 full-width display crop, visual export parity, and a public-safe manual graphic. Some details are still baked into the reference PNG. |
| Official HA transport and live overlays | `site/ha-local/roomcraft-card.js`, `site/ha-local/roomcraft-weather-outdoor.js`, `site/public/ha-iframe-bridge.js`, `site/ha-local/install.py` | Exact-window/origin/request validation; current-user HA session; revision conflict and readback; unrelated plan elements and views retained; wide-scene overlay mapping with legacy import; both resources versioned. |
| Optional cloud transport | `site/app/api/dashboard/route.ts`, `site/lib/dashboard-elements.ts` | Owner authorization; server-only HA token; the same object/camera merge and wide-scene coordinate behavior as the HA card. |
| Layout model | `layout.schema.json`, `examples/layout-v2.json`, `docs/layout-format.md` | Version 2 `rooms`, `walls`, `items`, and legacy `hotspots`. Object controls are derived from bound items, including invisible `controlZone` items; a change to persisted field meaning needs a migration and round-trip tests in both transports. |

The dashboard's saved `roomcraft_layout` is the shared editable project. An export renders a PNG, maps item bindings to Home Assistant picture elements, uploads the image, saves the layout, and reads the dashboard back. The `plan` image and controls, `studio` editor, and `live` native-card view must remain coherent. Browser drafts are recovery copies. Clock, weather, camera frames, device state, and robot position are runtime data; do not write them into layout geometry or public assets. See the [architecture guide](architecture.md) for the full data flow.

The full-width scene crops 80 pixels at the top and 80 at the bottom of the project image; it preserves every source column. Both transports write `roomcraft_scene: full-width-v1` on the picture card and use `x/1536` and `(y - 80)/864` for object, camera, and independent-marker overlay positions. On import they reverse only marked independent-marker positions. A preceding `wall-to-wall-v1` card uses its own 1472 × 828 inverse mapping; an unmarked legacy 3:2 card imports without remapping. Keep the editor preview, rendered PNG, manual YAML, HA card, cloud bridge, and dashboard view width in lockstep; a partial deploy makes targets miss the art. The [layout contract](layout-format.md) gives the formula.

### Photo-inspired living-room objects

The catalog contains 16 variants across 11 designs searchable by **1977** or **photo**. Eight independent objects are placed in front of the sofa: multicolor play yard, gray leaf mat, brown checker mat, wooden play arch, activity table, teddy floor chair, gray bolster, and bunny plush. Their geometry can be moved and sized without changing the reference PNG. Individual bear-face fence panels in six colors, a white mantel with dark tile hearth, and a toy side shelf are catalog options. The mantel and shelf have **not** been placed because the real fireplace wall is unconfirmed and the current TV/windows would make an assumed placement misleading. The supplied photo is an art reference only; no source photo, person, or private room image belongs in the Site assets, HA static files, or GitHub. The ceiling artwork pass keeps the existing fan visible above the new furnishings regardless of item insertion order.

### Live object and camera behavior

| Plan object | Binding/action | What the UI may claim |
| --- | --- | --- |
| Office desk lamp | One movable `lamp` item uses the bedroom-style sprite and is bound to the office light state entity. | It is the only office light control. The bright/dark overlay follows that entity. Confirm the physical switch and availability before treating a rendered state as verified. |
| Five-blade fan, provisionally in the living room | The motor switch supplies state; tap and hold run separate On and Off scenes. | The five-blade rotor uses eight stepped frames per 2.8 seconds while the motor state is on. Off, unavailable, and reduced-motion modes are still. The physical room still needs confirmation. |
| Separate fan-light center target | Tap runs a light-toggle scene. | Keep its appearance action-ready; no independent light or switch feedback entity exists to prove on/off. Add a real feedback entity before showing fan-light state. Move this target with the fan if its room changes. |
| Light, AC, window, and door controls | A bound item's optional `visualKind` overrides Automatic; the HA card reads its state entity. | Bright active, dark inactive, neutral unknown/unavailable, and action-ready scenes. The object's accessible hit target remains in place. See [live object graphics](live-object-graphics.md). |
| Front-door and garage camera thumbnails | Each independent item uses its own authenticated Home Assistant binding. The front door uses a dated latest-event still; the garage uses an idle preview and tap-to-start stream. | **LIVE** appears only after a decoded playing garage frame; hold/right-click opens its details. Check independent unavailable behavior. Neither frames nor stream URLs belong in GitHub or the exported public plan graphic. |

The object itself is the control target. The plan drawer adds **On plan**, **All entities**, search, registry availability, and six curated groups from the old Main Dashboard. The public [control guide](ha-controls-and-menu.md) records verified and candidate bindings.

## Repeatable checks

Run these from `site/`; GitHub Actions runs the same sequence for Roomcraft changes:

```text
npm ci
npm test
node --test ha-local/roomcraft-card.test.mjs
python3 -m unittest discover -s ha-local -p 'test_*.py'
npx tsc --noEmit
npm run build
```

On Windows, use `python` if `python3` is not installed. The mirrored source passed 37 Site tests, 41 HA JavaScript tests, eight Python tests, TypeScript, production build, and Git whitespace validation. HA readback confirmed the 1536 × 864 `full-width-v1` image, 41 items, 13 mapped controls, three managed camera frames, one weather element, and light/door/climate/fan visual kinds. Browser and private tablet checks showed high-contrast art without ON/OFF badges, a dated front-door still, decoded **LIVE** garage and overhead media, current rain, and a 12-hour forecast strip. A safe thermostat tap and Home recovery from an app force-stop were verified in the preceding release. Long-running playback, broad physical touch alignment, actual doorbell event playback, and automatic reboot recovery remain untested. For the next runtime change, verify dashboard import/export/readback, derived-control placement, preservation of weather/time/edit link and other views, camera unavailable behavior, browser resizing, and actual tablet touch. Use read-only inspection first; a scene run or device toggle is a real-world action.

## Runtime release and recovery

The [deployment guide](deployment.md) is the operational procedure. In order: review source and tests, save a private dashboard/image backup, publish the optional owner-private Site if its code changed, install/version HA assets and card using `python ha-local/install.py` with private host/key/adapter paths, export the intended layout from Studio, read back the HA dashboard, then check laptop and tablet. Keep the cloud and HA transports on compatible code. A GitHub merge alone changes neither installation.

The installer records a private backup. To roll back, restore that dashboard JSON through Home Assistant `lovelace/config/save`, read back the result, restore a known-good asset/card version if needed, and roll back the Site deployment separately if it changed. Preserve unsaved browser work as private JSON first. Do not place backups, tokens, SSH keys, raw entity inventories, camera media, or live dashboard exports in this repository or `/local/roomcraft/`.

## Remaining work, in order

| Priority | Work and acceptance gate |
| --- | --- |
| 1 | **Confirm the fan's physical room** and move both fan and center light targets together if living room is wrong. Keep the current placement labeled provisional until verified. |
| 2 | **Finish Apolosign Calendar tablet QA:** full-width display, front-door event still, decoded garage live frame, safe thermostat tap feedback, and default Home app were checked. Check unavailable object states, reduced-motion fan, longer garage playback and failure recovery, object and menu touch alignment, Studio fallback, other orientations, and dashboard recovery after a supervised reboot. Investigate any repeat restart with logs; `reboot,userrequested` does not identify an initiator. Use the [access runbook](tablet-access.md); do not assume ADB reconnects unattended. |
| 3 | **Confirm the living-room fireplace wall** before placing the new mantel and side shelf. Compare the play-area arrangement at 100% against the room's usable floor space; the photo is a visual reference, not a survey. Then make remaining baked furniture/details independently editable. Use the [artwork guide](artwork.md). |
| 4 | **Extend live adapters only with verified sources** for weather, clock, garage mechanisms, and vacuum position. The object state overlay and reduced-motion fan are the baseline; the vacuum still needs map-to-plan calibration and stale-position handling. See the [roadmap](roadmap.md). |

For each follow-on change, record the data source, offline behavior, accessible interaction, security boundary, tests, and rollback in the existing [changelog](../CHANGELOG.md) and [decision log](decisions.md). Keep the work queue here and in the roadmap until a team chooses how to track implementation; no new issue or ticket is required just to preserve this handoff.
