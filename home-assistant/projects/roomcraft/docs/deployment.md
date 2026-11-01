# Deployment, verification, and rollback

The official editor is served by Home Assistant itself. Its `studio` view hosts a Roomcraft custom card and the shared static editor. The owner-private cloud Site is an optional second transport. Source commits, Site publication, static asset installation, and dashboard changes are separate release steps.

For the separately paired Apolosign Calendar wall tablet and phone Codex Remote recovery, use the [tablet and remote access runbook](tablet-access.md). Its ADB pairing and connection ports must be read from the tablet at the time of use.

## Prerequisites

- Back up the Second Floor dashboard configuration and current plan image outside this repository.
- Confirm Home Assistant serves `/config/www/` as `/local/`, allows a Lovelace JavaScript module resource, and has the `plan`, `studio`, and `live` views. The `plan` view needs a `picture-elements` card and an installed `custom:grid-layout` resource for the current centered fit.
- Use an HA administrator account to install the resource and publish a layout. A signed-in non-admin may still open the Studio view, subject to Home Assistant permissions.
- For scripted installation, use a workstation with Python, OpenSSH, a trusted SSH key, and a private `HomeAssistantManagement/ha_manage.py` adapter. Keep that adapter, key, and backups outside GitHub.
- Record the HA and browser versions tested. This project has been exercised on one Home Assistant 2026.10 installation; no general compatibility range is claimed.

## Install the HA-hosted editor

The public [HA local package guide](../site/ha-local/README.md) describes the card and installer. From the `site/` source directory, run the installer with private paths supplied locally:

```powershell
python ha-local/install.py --host <HA-LAN-IP> --ssh-key <SSH-KEY-PATH> --management-root <PRIVATE-HA-MANAGEMENT-DIR> --backup-dir <PRIVATE-BACKUP-DIR>
```

The script copies `public/` into `/config/www/roomcraft/`, installs `roomcraft-card.js` and `roomcraft-weather-outdoor.js`, registers or updates both content-versioned Lovelace module resources, backs up the dashboard, makes `studio` a panel with `custom:roomcraft-editor-card`, and points the plan edit icon to `/second-floor/studio`. It reads the dashboard and resources back to verify the write. It does not copy credentials or a live entity inventory into static assets. An asset-only refresh is available with `--assets-only`.

The normal laptop and tablet URL on the home network is `http://<HA-LAN-IP>:8123/second-floor/studio`. Sign in to Home Assistant. Some Chrome sessions leave the embedded frame blank. In that case click **Open editor in a new tab** from Studio and keep the Studio tab open. The new tab uses its opener for authenticated import/export. Opening `/local/roomcraft/editor.html` directly from the address bar bypasses the authenticated card and cannot transfer a layout to the dashboard.

### Full-width scene release order

The 1536 × 864 image, editor, HA card, optional cloud bridge, and plan-view width form one release. Keep the editable `roomcraft_layout` project at 1536 × 1024; do not scale room, wall, or item coordinates. Take a private dashboard/image backup, install the matching HA assets/card, publish the matching cloud Site if used, then **Import from dashboard** and **Export to dashboard** once from the updated Studio. Position the editable camera frame inside the visible source height y80–944 before publishing; the full x0–1536 width remains visible. Export creates the 16:9 image, writes `roomcraft_scene: full-width-v1` on the plan card, and remaps its managed overlays. The plan grid's center width uses the 16:9 aspect, for example `min(100%, calc(100dvh * 1.77777778))`. Read back the card image, marker, project, controls, and other views. An image, bridge, and grid from different releases can misalign controls.

The original 3:2 card has no scene marker, while the preceding 1472 × 828 crop uses `wall-to-wall-v1`. Both updated bridges import either without changing saved project geometry; the next export writes `full-width-v1`. On a first export from an unmarked card or the preceding crop, known menu/weather/time/editor chrome moves to a safe top position above the outer wall. Verify a subsequent import returns the original project-space marker positions, and that a second export preserves later chrome edits. If release verification fails, restore the backed-up dashboard and matching older HA assets/cloud deployment together.

### Earlier live-object and second-camera release (historical)

Install the matching HA card and editor assets, then import the current saved layout before editing. Inspect the office desk lamp and both camera frames as independent items. Bind the lamp to its actual light state entity. The front-door frame uses its actual camera and event-image entities in **Latest event image** mode because its live stream is unavailable; bind the garage frame to its own camera and optional event-image entity in **Live stream** mode. Review each bound fixture's **Live graphic** kind and confirm that the fan's motor switch, rather than its separate light-toggle scene, drives the rotor. Export once and read back the layout, derived `roomcraft_visual_kind` fields, two managed camera elements, 1536 × 864 PNG, `full-width-v1` marker, and unrelated dashboard views. The static PNG should omit the bound fan's fixed blades. Check state visuals, front-door dated still, and garage tap-to-start stream on the authenticated tablet without saving media to public assets. [Live object graphics](live-object-graphics.md) lists the state, motion, and unavailable checks.

After a card resource update, an existing Chrome tab may briefly show **Configuration error** while its frontend state is stale. Reload the affected tab first. If the error remains, verify that the `studio` view still uses `custom:roomcraft-editor-card`, that the versioned `/local/roomcraft/roomcraft-card.js` resource loads, and that the browser console shows no card registration or asset error. In the observed case, the live dashboard configuration and resource were valid and a reload cleared the error; its exact cause was not established. The card defensively skips repeated custom-element and card-metadata registration, and a repeat-evaluation test covers that behavior. If the card loads but its iframe stays blank, use the own-tab fallback above.

### Three-camera and outdoor-weather release order

The current three-camera release was installed after a private dashboard and image backup, matching Site publication, and both HA module assets. The office contains one `lamp` item and one light binding; remove the duplicate study ceiling fixture if importing an older private project. The doorbell frame uses **Live during an event** with the doorbell camera, last-event image, and verified ring/person `binary_sensor.*` triggers. The garage frame remains in **Live stream** tap-to-start mode. The third overhead frame uses its own camera and **Always show live feed** mode. The editor stores `eventEntityIds` in the version 2 project; export derives `event_entities` for the HA card. Validate actual IDs and availability privately before future publishing. Do not place stream URLs or frames in layout JSON.

Add one weather picture element to the `plan` card after the weather resource is registered. Replace the placeholder entity IDs in this example only in the private dashboard configuration:

```yaml
- type: custom:roomcraft-weather-outdoor
  weather_entity: weather.example_home
  sun_entity: sun.sun
  moon_entity: sensor.example_moon_phase
  style:
    left: 50%
    top: 50%
    width: 100%
    height: 100%
    transform: translate(-50%, -50%)
    z-index: 2
```

The weather module uses a full 1536 × 864 viewBox but masks its art to the exterior. Keep it below the camera and object elements. Its 12-hour forecast is requested from `weather.get_forecasts` using the signed-in HA session, and the current condition still renders if the forecast service is unavailable. Export from Studio once and read back the project, image, three managed camera elements, weather element, and unrelated plan elements/views. Check the same round trip from the optional cloud editor. A scene-only fan-light toggle is not a feedback entity: leave the center graphic neutral until HA exposes a real stateful switch/light. Do not trigger physical ring/person sensors merely for layout QA; use synthetic tests and observe a natural event when possible.

## Optional cloud editor

Build and publish the `site/` source through its Site workflow with owner-private access. Configure `HA_URL`, `HA_TOKEN`, and `OWNER_EMAIL` in the hosted runtime, never in source. The cloud editor has a separate owner sign-in. Both editors read and write the same `roomcraft_layout` in the Second Floor dashboard. Opening either editor loads the latest saved layout; use **Import from dashboard** when the other editor is already open after an export.

## Release verification

| Check | Pass condition |
| --- | --- |
| HA login | Studio opens in a fresh laptop browser with the HA login. The plan pencil-ruler icon navigates there. |
| Own-tab fallback | If the embedded frame is blank, **Open editor in a new tab** loads the same editor and completes an import/export while Studio remains open. |
| Back to dashboard | **← Dashboard** in the header returns to the Second Floor plan from HA Studio and the owner-private Site. With unpublished edits it prompts, **Cancel** stays in Studio, and **View dashboard** preserves a browser draft without publishing. While an import/export runs or the destination/draft storage is unavailable, it stays in the editor and reports why. |
| Layout default | The editor loads the current dashboard project on opening. A different browser draft is saved for recovery; if HA is unavailable, the local draft remains usable. **Import from dashboard** refreshes an already open editor. |
| Art | Furnished default, recessed windows, added wall-mounted windows, furniture, baby items, one movable office desk lamp with the bedroom-style sprite, other room fixtures, and floor textures render in Design mode and the detailed PNG. No duplicate office ceiling fixture returns after import or fixture restoration. |
| Editor | Select, drag, corner-resize (including Shift proportions), rotate, draw wall, reshape room, repaint floor/wall, undo/redo, and JSON import/export work. |
| Dashboard transfer | Export updates the plan image, object controls (including separate fan and light targets), managed camera overlays, and `roomcraft_layout`; import reads back the same project. Weather, time, edit link, `studio`, and `live` remain. |
| Full-width alignment | Exported PNG is 1536 × 864, cropped from the unchanged 1536 × 1024 project at y80 with the entire x width preserved. The plan card has `roomcraft_scene: full-width-v1`. Object, window, lamp, fan, independent marker, and camera targets still align after both HA-hosted and cloud export/import round trips; `wall-to-wall-v1` and legacy unmarked imports stay readable. The camera frame and top chrome are fully visible. |
| Conflict handling | A stale editor revision is rejected after a separate dashboard edit; no newer change is silently replaced. |
| Cloud parity | If the cloud Site is deployed, import its dashboard copy after an HA editor export; repeat in the other direction. |
| Responsive view | A private 1920 × 1080 tablet capture of the 1536 × 864 export showed the full original left staircase and right exterior wall, a visible live porch thumbnail, and no side gutters. Menu, clock, weather, and editor link remained visible. A later private 1920 × 1080 capture also showed the new object-state graphics and both camera widgets, including a visible garage feed. Physical touch and smaller viewports still need checks. The preceding 1472 × 828 release was visually checked in a separate private capture; the earlier 3:2 installation was checked at 960 × 600 CSS pixels (696 × 465 plan), 2560 × 1271 (centered 1763-pixel card), and on the tablet (about 1612 × 1074 with side gutters). |
| Existing controls | Confirm light, switch, cover, fan, garage, vacuum, and camera behavior through Home Assistant before relying on their dashboard cards. An event still is not proof of a live stream. |
| Current drawer | Confirm **On plan**, **All entities**, search, registry availability, and all six curated Main Dashboard groups. Check the three separate living-window blind controls. |
| Fan and light | Confirm the fan artwork monitors its motor switch, blade tap and hold run separate On and Off scenes, and the separate center target runs the fan-light toggle scene. A scene target reports **Ready**, not an invented fan-light on/off state. Verify these bindings by readback without sending device commands during a layout release. |
| Object state graphics | Confirm a linked light, fan, AC, window/cover, and door/garage uses the selected or inferred `roomcraft_visual_kind`. Known active states look bright; known inactive states look dark; unavailable, unknown, or unrecognized values show neutral **?**. A scene remains action-ready. The object and its accessible label remain the tap target in every state. |
| Fan motion | Confirm the five-blade rotor animates only while its motor state is on, remains still when off or unavailable, and stops when the system requests reduced motion. The center light scene does not start rotor motion. |
| Front-door camera | Between events its dated latest-event still appears without a live claim. Synthetic ring/person transitions open a bounded 60-second live attempt; a failed stream returns to the still. Check that the event sensor list and camera/image bindings survive export/import. |
| Overhead camera | A third independent tile mounts native HA playback without `camera.turn_on`. **LIVE** requires advancing video time or frame count, including when HA reports the entity `idle`. Check a failed or unavailable stream without disturbing the doorbell or garage tiles. |
| Garage camera | A separately bound `cameraThumbnail` shows a preview while idle and requests `camera.turn_on` only on tap; hold/right-click opens native details. **LIVE** requires a decoded playing frame. Test a failed stream falling back to preview or unavailable without affecting the other tiles. |
| Outdoor weather | Confirm the separate module resource loads and the element survives HA and cloud export. Compare current condition with HA state, preview forecast hours across dusk/dawn, check the actual next-12-hour timestamps and time zone, and confirm rain/snow/night washes are clipped to exterior pixels. Test reduced motion and a hidden tab. |
| Privacy | No tokens, SSH keys, raw HA exports, current device values, camera access URLs, or private backups appear in `/local/roomcraft/` or GitHub. The public inventory under `docs/ha-inventory/` contains only reviewed metadata. |

The earlier v19 release read back 36 editable items, including eight photo-inspired play-area objects, 10 object controls, separate fan and light scene targets, and the exterior camera. The first full-width release exported a 1536 × 864 PNG with the `full-width-v1` marker and no side gutters on a private 1920 × 1080 tablet capture. Those figures remain historical; the private capture and camera media are not in GitHub.

The current release exported the same 1536 × 864 shape. HA readback confirmed **41 items, 13 mapped controls, three managed camera thumbnails, and one weather element**. The owner-private cloud Site carries source commit `334bfa9cd8ee9102d0d95e69576e1538621bf13f`. A signed-in browser check showed high-contrast state art, a dated front-door still, and decoded **LIVE** garage and overhead feeds. A private 1920 × 1080 HA Companion tablet capture showed all three camera states, current rain, and the 12-hour strip without crop or scroll. A stale frontend configuration error cleared after a safe cold launch. The earlier release's safe thermostat tap and app force-stop recovery passed separately; long-running playback, broad physical touch alignment, real doorbell-event playback, and automatic recovery after a full reboot remain untested. The [changelog](../CHANGELOG.md) retains earlier release evidence; a checklist row is an acceptance criterion, not an assertion that every device was exercised.

For the editor startup check, open a browser with a different saved draft and confirm the dashboard layout loads while **Recover previous browser draft** restores the earlier work. Check an editor with an in-progress drag, an editor whose Home Assistant connection fails, and an already open editor using **Import from dashboard**. The v19 source passed 26 Site tests, TypeScript, a production build, and GitHub's Roomcraft workflow. A screen capture proves visual fit on the target tablet for this release; it does not prove touch behavior.

The default-dashboard choice is a Home Assistant **user profile** preference, not part of the dashboard YAML or installer. In the current installation the owner's profile opens Second Floor by default across devices, and the sidebar lists it first. Separately, Home Assistant Companion is now the Apolosign tablet's default Android Home app; Android HOME resolution and the Home key were verified. The full-width image retains all original house columns and uses the 16:9 tablet width; a private actual-tablet capture confirmed both exterior sides and no gutters. Test touch interactions, auto-launch after reboot, and camera playback over time separately. The [tablet access runbook](tablet-access.md) gives the launcher rollback and recovery checks.

## Rollback

1. Export any unsaved editable layout JSON from the browser.
2. Restore the private dashboard backup recorded by `ha-local/install.py` through `lovelace/config/save` for `url_path="second-floor"`, then read it back and compare. This restores the prior Studio view, plan image, and controls together.
3. If only the static editor files are faulty, reinstall a known working asset version and update the registered card resource URL. A resource left registered is inert when the restored dashboard does not use the card.
4. Reload Home Assistant and verify the plan and controls. If the cloud Site was also changed, restore its previous deployment separately.

An image may be uploaded before a dashboard save fails or conflicts. In that case the unreferenced image does not become the live plan; clean it up in a separate reviewed storage task.

## Development checks

From `site/`, use Node.js 22.13 or newer: `npm ci`, `npm test`, `node --test ha-local/roomcraft-card.test.mjs ha-local/roomcraft-weather-outdoor.test.mjs`, `python -m unittest discover -s ha-local -p 'test_*.py'`, `npx tsc --noEmit`, and `npm run build`. The Site and HA transports have separate tests and should both pass when shared editor or layout code changes.

Do not commit `node_modules`, `dist`, `.next`, `.wrangler`, `.sites-runtime`, local environment files, generated archives, SSH keys, dashboard backups, or credentials.
