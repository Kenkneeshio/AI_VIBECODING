# Roomcraft engineering handoff

**Read this first when taking over Second Floor work.** This page is the current release snapshot and the shortest path to a safe change. The linked guides hold the detailed contracts and history. It is one prioritized work queue, not a set of new tickets.

## Current release snapshot (2026-10-31)

| Surface | Verified state | Source of truth |
| --- | --- | --- |
| Public source | Roomcraft is under `home-assistant/projects/roomcraft/` in `Kenkneeshio/AI_VIBECODING`; this release adds photo-inspired catalog art, a render smoke test, and updated manual graphics. | GitHub `main` for code and reviewed documentation. A GitHub commit does not deploy a runtime. |
| Official editor | Home Assistant **Second Floor → Layout Studio** at `/second-floor/studio`, installed on one HA 2026.10 instance. The signed-in HA user's session supplies dashboard access through `custom:roomcraft-editor-card`. | HA-hosted card and static assets installed from `site/`. |
| Optional cloud editor | Owner-private Site v19, published from Site source commit `5874e8976c0f0bc6dc86a9e9e9e69b13c4fb8c07`. It is an alternate editor for the same layout. | Site deployment and its owner-only server bridge. |
| Saved layout and live plan | The Second Floor dashboard stores `roomcraft_layout` version 2 and a rendered plan image. The latest HA export/readback found **6 rooms, 36 items, and 10 unique object controls**, including eight new living-room play-area objects. The separate fan and fan-light scene targets and porch camera overlay remained present. | Home Assistant dashboard configuration, not browser storage or this public repository. |
| Physical tablet | The HA host paired and connected to the Apolosign Calendar over wireless ADB. An actual 1920 × 1080 tablet screen capture showed the full Second Floor plan and authenticated porch thumbnail in the HA Companion WebView. | The tablet screen was verified; touch, automatic launch/reconnect after reboot, and camera playback over time remain untested. See the [access runbook](tablet-access.md). |

The default Home Assistant dashboard is an **owner profile preference**. It is not installed by this repository. The old Main Dashboard remains a reference for the curated control drawer; the `ishioho` project is a separate legacy prototype.

## First hour for a new engineer

1. Read this page, the [architecture](architecture.md), [layout contract](layout-format.md), and [deployment/rollback guide](deployment.md). Use the [illustrated manual](user-manual.md) to understand the intended interactions and the [tablet access runbook](tablet-access.md) for the separate remote control chain.
2. Work from `home-assistant/projects/roomcraft/site/`. Use Node.js 22.13 or newer and Python 3. Run `npm ci`, then the checks below. The public [synthetic layout](../examples/layout-v2.json) is safe for local development; the real dashboard JSON is private.
3. For live work, obtain authorized HA/Site access and the private management adapter from the owner. Do not infer credentials or installation coordinates from the public inventory. Take a private dashboard backup before any write.
4. Open `/second-floor/studio` through Home Assistant. It loads the current dashboard project on opening and preserves a different local draft for recovery. **Import from dashboard** refreshes an editor that is already open. If Chrome leaves the embedded editor blank, use **Open editor in a new tab** and keep Studio open; a direct `/local/roomcraft/editor.html` URL has no authenticated dashboard bridge.
5. Before changing a binding, confirm the physical device and current HA entity. The [sanitized inventory](ha-inventory/README.md) is a dated metadata snapshot, not a deployable config or live-state record.

## Code and data boundaries

| Change | Start in | Contract to preserve |
| --- | --- | --- |
| Canvas editing, objects, Inspector, browser draft | `site/public/editor.html`, `site/public/app.js`, `site/public/inventory.js`, `site/public/object-controls.js` | Stable item IDs; undo/redo; import/export without silently replacing an active edit. |
| Perspective art, floors, windows, rendered PNG | `site/public/object-art.js`, `site/public/raster-renderer.js`, `site/public/assets/` | The 1536 × 1024 design coordinates, visual export parity, and a public-safe manual graphic. Some details are still baked into the reference PNG. |
| Official HA transport and live overlays | `site/ha-local/roomcraft-card.js`, `site/public/ha-iframe-bridge.js`, `site/ha-local/install.py` | Exact-window/origin/request validation; current-user HA session; revision conflict and readback; unrelated plan elements and views retained. |
| Optional cloud transport | `site/app/api/dashboard/route.ts`, `site/lib/dashboard-elements.ts` | Owner authorization; server-only HA token; the same object/camera merge behavior as the HA card. |
| Layout model | `layout.schema.json`, `examples/layout-v2.json`, `docs/layout-format.md` | Version 2 `rooms`, `walls`, `items`, and legacy `hotspots`. Object controls are derived from bound items, including invisible `controlZone` items; a change to persisted field meaning needs a migration and round-trip tests in both transports. |

The dashboard's saved `roomcraft_layout` is the shared editable project. An export renders a PNG, maps item bindings to Home Assistant picture elements, uploads the image, saves the layout, and reads the dashboard back. The `plan` image and controls, `studio` editor, and `live` native-card view must remain coherent. Browser drafts are recovery copies. Clock, weather, camera frames, device state, and robot position are runtime data; do not write them into layout geometry or public assets. See the [architecture guide](architecture.md) for the full data flow.

### Photo-inspired living-room objects

The catalog contains 16 variants across 11 designs searchable by **1977** or **photo**. Eight independent objects are placed in front of the sofa: multicolor play yard, gray leaf mat, brown checker mat, wooden play arch, activity table, teddy floor chair, gray bolster, and bunny plush. Their geometry can be moved and sized without changing the reference PNG. Individual bear-face fence panels in six colors, a white mantel with dark tile hearth, and a toy side shelf are catalog options. The mantel and shelf have **not** been placed because the real fireplace wall is unconfirmed and the current TV/windows would make an assumed placement misleading. The supplied photo is an art reference only; no source photo, person, or private room image belongs in the Site assets, HA static files, or GitHub. The ceiling artwork pass keeps the existing fan visible above the new furnishings regardless of item insertion order.

### Current fan and camera behavior

| Plan object | Binding/action | What the UI may claim |
| --- | --- | --- |
| Five-blade fan, provisionally in the living room | `switch.ceiling_fan` supplies state; tap runs `scene.ceiling_fan_on_scene`; hold runs `scene.ceiling_fan_off`. | Fan switch state is real. The physical room has no HA area assignment and still needs confirmation. |
| Separate 68 × 68 center target | Tap runs `scene.ceiling_fan_light_toggle`. | Show **Ready** or **Toggle light**; no independent `light.*` state exists to prove on/off. Move this target with the fan if its room changes. |
| Exterior camera thumbnail | `camera.porch_camera_profile_000` uses the verified porch HLS stream in an authenticated HA overlay. | Do not confuse it with the separate Eufy front-door event image. Neither live frames nor stream URLs belong in GitHub or the exported public plan graphic. |

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

On Windows, use `python` if `python3` is not installed. The photo-object release passed the new art smoke test, the Site test suite, JavaScript syntax, TypeScript, production build, and Git whitespace validation. HA export/readback confirmed 36 editable items, all eight new living-room objects, 10 unique object controls, preserved fan scene/light scene targets, and the porch camera. A later actual-tablet screen capture confirmed full-plan fit, but no physical device action, touch behavior, or automatic reboot recovery. For a runtime release, also verify dashboard import/export/readback, the count and placement of derived controls, preservation of weather/time/edit link and other views, camera unavailable behavior, browser resizing, and actual tablet touch. Use read-only inspection first; a scene run or device toggle is a real-world action.

## Runtime release and recovery

The [deployment guide](deployment.md) is the operational procedure. In order: review source and tests, save a private dashboard/image backup, publish the optional owner-private Site if its code changed, install/version HA assets and card using `python ha-local/install.py` with private host/key/adapter paths, export the intended layout from Studio, read back the HA dashboard, then check laptop and tablet. Keep the cloud and HA transports on compatible code. A GitHub merge alone changes neither installation.

The installer records a private backup. To roll back, restore that dashboard JSON through Home Assistant `lovelace/config/save`, read back the result, restore a known-good asset/card version if needed, and roll back the Site deployment separately if it changed. Preserve unsaved browser work as private JSON first. Do not place backups, tokens, SSH keys, raw entity inventories, camera media, or live dashboard exports in this repository or `/local/roomcraft/`.

## Remaining work, in order

| Priority | Work and acceptance gate |
| --- | --- |
| 1 | **Confirm the fan's physical room** and move both fan and center light targets together if living room is wrong. Keep the current placement labeled provisional until verified. |
| 2 | **Finish Apolosign Calendar tablet QA:** the actual display fit and porch thumbnail were visually checked over ADB. Test touch targets, Studio fallback, camera playback over time, light/fan action labels, and recovery after a controlled reboot. Use the [access runbook](tablet-access.md); do not assume ADB reconnects unattended. |
| 3 | **Confirm the living-room fireplace wall** before placing the new mantel and side shelf. Compare the play-area arrangement at 100% against the room's usable floor space; the photo is a visual reference, not a survey. Then make remaining baked furniture/details independently editable. Use the [artwork guide](artwork.md). |
| 4 | **Add live adapters only with verified sources** for animated devices, weather, clock, garage, and vacuum position. The vacuum needs map-to-plan calibration and stale-position handling; motion needs reduced-motion support. See the [roadmap](roadmap.md). |

For each follow-on change, record the data source, offline behavior, accessible interaction, security boundary, tests, and rollback in the existing [changelog](../CHANGELOG.md) and [decision log](decisions.md). Keep the work queue here and in the roadmap until a team chooses how to track implementation; no new issue or ticket is required just to preserve this handoff.
