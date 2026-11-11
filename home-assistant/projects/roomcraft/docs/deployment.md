# Deployment, verification, and rollback

Home Assistant serves Roomcraft at `/roomcraft-home/home` and `/roomcraft-home/studio`. Studio hosts a Roomcraft custom card and the shared editor. The owner-private cloud Site is an optional second transport. Source commits, Site publication, static asset installation and dashboard changes are separate release steps.

For the separately paired Apolosign Calendar wall tablet and phone Codex Remote recovery, use the [tablet and remote access runbook](tablet-access.md). Its ADB pairing and connection ports must be read from the tablet at the time of use.

## Prerequisites

- Keep private dashboard configuration backups outside this repository and retain the referenced plan image in Home Assistant. A migration needs the Roomcraft Home dashboard and its legacy Second Floor source with a saved version 2 layout and picture card.
- Confirm Home Assistant serves `/config/www/` as `/local/` and allows Lovelace JavaScript module resources. Consolidated Roomcraft Home needs the Home and Studio views, the saved layout and its control projection.
- Use an HA administrator account to install the resource and publish a layout. A signed-in non-admin may still open the Studio view, subject to Home Assistant permissions.
- For scripted installation, use a workstation with Python, OpenSSH, a trusted SSH key, and a private `HomeAssistantManagement/ha_manage.py` adapter. Keep that adapter, key, and backups outside GitHub.
- Record the HA and browser versions tested. This project has been exercised on one Home Assistant 2026.10 installation; no general compatibility range is claimed.

## Install the HA-hosted editor

The public [HA local package guide](../site/ha-local/README.md) describes the card and installer. From the `site/` source directory, run the installer with private paths supplied locally:

```powershell
python ha-local/install.py --storybook --host <HA-LAN-IP> --ssh-key <SSH-KEY-PATH> --management-root <PRIVATE-HA-MANAGEMENT-DIR> --backup-dir <PRIVATE-BACKUP-DIR>
```

Run `npm run build` before installing. The installer copies the public editor and Roomcraft modules to `/config/www/roomcraft/`, reconciles content-versioned Lovelace resources and reads back the saved config and resource URLs. It detects the consolidated dashboard on future upgrades. An asset-only refresh is available with `--assets-only`.

For the one-time migration from Second Floor, add `--consolidate` to the command. The installer saves a private archive containing both dashboard registrations and configurations, copies the layout into Roomcraft Home and verifies both the archive and the new configuration. The new root `roomcraft_layout` holds the editable project. Root `roomcraft_plan` holds the full projected picture card and its export image. Root `roomcraft_health` holds the existing health configuration when available. The dashboard exposes just `home` and `studio`. The old registration remains available while the new views are verified.

Before removing the legacy registration, compare the copied layout and projected card with the private archive. Open Home, use the popups and check camera tiles. Open Studio from Home, import the project, and return to Home. Check the installed tablet and the authenticated Site when used. Then retire only the legacy `second-floor` registration through the Lovelace API and verify that the Home and Studio views still open. Preserve Main Dashboard and the existing user and system defaults.

Open `http://<HA-LAN-IP>:8123/roomcraft-home/studio` and sign in. If Chrome leaves the embedded editor blank, use **Open editor in a new tab** and keep Studio open. The new tab uses its opener for authenticated import and export. A direct visit to `/local/roomcraft/editor.html` cannot transfer the dashboard layout.

### Full-width export

The editable layout stays at 1536 × 1024. Studio exports a 1536 × 864 image using project y80–944 and the full x0–1536 width. The export writes `roomcraft_scene: full-width-v1` on `roomcraft_plan` and updates its managed overlays. Read back the image, marker, project and controls together. The earlier 3:2 cards and `wall-to-wall-v1` crops still import without scaling saved project geometry.

### Earlier live-object and second-camera release (historical)

Install the matching HA card and editor assets, then import the current saved layout before editing. Inspect the office desk lamp and both camera frames as independent items. Bind the lamp to its actual light state entity. The front-door frame uses its actual camera and event-image entities in **Latest event image** mode because its live stream is unavailable; bind the garage frame to its own camera and optional event-image entity in **Live stream** mode. Review each bound fixture's **Live graphic** kind and confirm that the fan's motor switch, rather than its separate light-toggle scene, drives the rotor. Export once and read back the layout, derived `roomcraft_visual_kind` fields, two managed camera elements, 1536 × 864 PNG, `full-width-v1` marker, and unrelated dashboard views. The static PNG should omit the bound fan's fixed blades. Check state visuals, front-door dated still, and garage tap-to-start stream on the authenticated tablet without saving media to public assets. [Live object graphics](live-object-graphics.md) lists the state, motion, and unavailable checks.

After a card resource update, an existing Chrome tab may briefly show **Configuration error** while its frontend state is stale. Reload the affected tab first. If the error remains, verify that the `studio` view still uses `custom:roomcraft-editor-card`, that the versioned `/local/roomcraft/roomcraft-card.js` resource loads, and that the browser console shows no card registration or asset error. In the observed case, the live dashboard configuration and resource were valid and a reload cleared the error; its exact cause was not established. The card defensively skips repeated custom-element and card-metadata registration, and a repeat-evaluation test covers that behavior. If the card loads but its iframe stays blank, use the own-tab fallback above.

After modifying anything under `site/public/`, run `npm run release:stamp-editor` and commit the resulting HTML URL updates. The child scripts, stylesheet, and artwork use the same content key. This is separate from the Studio card's top-level asset version and protects existing browsers with month-long static caches. Reload already-open editors after deploying. Export the current saved design once if its published image still uses the previous renderer.

### Three-camera and outdoor-weather release (historical)

The earlier three-camera release was installed after a private dashboard and image backup, matching Site publication, and both HA module assets. The office contains one `lamp` item and one light binding; remove the duplicate study ceiling fixture if importing an older private project. The doorbell frame uses **Live during an event** with the doorbell camera, last-event image, and verified ring/person `binary_sensor.*` triggers. The garage frame remains in **Live stream** tap-to-start mode. The third overhead frame uses its own camera and **Always show live feed** mode. The editor stores `eventEntityIds` in the version 2 project; export derives `event_entities` for the HA card. Validate actual IDs and availability privately before future publishing. Do not place stream URLs or frames in layout JSON.

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

The weather module uses a full 1536 × 864 viewBox and masks its art to every exterior strip, including the right edge. Keep it below camera and object elements. Its 12-hour forecast is requested from `weather.get_forecasts` using the signed-in HA session, and the current condition still renders if the forecast service is unavailable. Export from Studio once and read back the project, image, three managed camera elements, two status popups, weather element, and unrelated plan elements/views. Check the same round trip from the optional cloud editor. The current dining fan/light use verified direct stateful channels; any future scene-only control must remain neutral. Do not trigger physical sensors or equipment merely for layout QA; use synthetic tests and observe natural events.

## Optional cloud editor

Build and publish the `site/` source through its Site workflow with owner-private access. Configure `HA_URL`, `HA_TOKEN`, and `OWNER_EMAIL` in the hosted runtime, never in source. The cloud editor has a separate owner sign-in. Both editors read and write the same `roomcraft_layout` in Roomcraft Home after consolidation. Opening either editor loads the latest saved layout. Use **Import from dashboard** when the other editor is already open after an export.

## Release verification

| Check | Pass condition |
| --- | --- |
| HA login | Studio opens in a fresh laptop browser with the HA login. **Menu → Manage → Layout Studio** opens it from Home. |
| Own-tab fallback | If the embedded frame is blank, **Open editor in a new tab** loads the same editor and completes an import/export while Studio remains open. |
| Back to dashboard | **← Dashboard** in the header returns to Roomcraft Home from HA Studio and the owner-private Site. With unpublished edits it prompts, **Cancel** stays in Studio, and **View dashboard** preserves a browser draft without publishing. While an import/export runs or the destination/draft storage is unavailable, it stays in the editor and reports why. |
| Layout default | The editor loads the current dashboard project on opening. A different browser draft is saved for recovery; if HA is unavailable, the local draft remains usable. **Import from dashboard** refreshes an already open editor. |
| Art | Furnished default, recessed windows, added wall-mounted windows, furniture, baby items, one movable office desk lamp with the bedroom-style sprite, other room fixtures, and floor textures render in Design mode and the detailed PNG. No duplicate office ceiling fixture returns after import or fixture restoration. |
| Editor | Select, drag, corner-resize (including Shift proportions), rotate, draw wall, reshape room, repaint floor/wall, undo/redo, and JSON import/export work. |
| Dashboard transfer | Export updates the image, object controls and managed camera overlays in `roomcraft_plan` with `roomcraft_layout`. Import reads back the same project. The dashboard retains its Home and Studio views. |
| Full-width alignment | Exported PNG is 1536 × 864, cropped from the unchanged 1536 × 1024 project at y80 with the entire x width preserved. The plan card has `roomcraft_scene: full-width-v1`. Object, window, lamp, fan, independent marker, and camera targets still align after both HA-hosted and cloud export/import round trips; `wall-to-wall-v1` and legacy unmarked imports stay readable. The camera frame and top chrome are fully visible. |
| Conflict handling | A stale editor revision is rejected after a separate dashboard edit; no newer change is silently replaced. |
| Cloud parity | If the cloud Site is deployed, import its dashboard copy after an HA editor export; repeat in the other direction. |
| Responsive view | Check Home on the wall tablet and at a smaller viewport. Confirm the bottom actions and camera thumbnails fit, Menu opens above the actions, and dialogs can be dismissed. |
| Existing controls | Confirm light, switch, cover, fan, garage, vacuum, and camera behavior through Home Assistant before relying on their dashboard cards. An event still is not proof of a live stream. |
| Popups | Open electrical readings with **Power**. Use **Menu** to open **Devices and sensors**, **Indoor air**, **System health**, **Presence tracking** and **Object models**. Confirm the device drawer can search and that all panels close back to Home. |
| More options | Toggle **Camera tiles** and **Reduce motion**. Confirm their effect and persistence after reloading in the same browser. |
| Fan and light | Confirm the dining fan and center light bind to the verified motor/light channels, each uses `toggle`, and no scene target remains. Read back the exact entities and actions without sending a device command. The rotor/glow must follow only their own channel. |
| Appliances and summaries | Confirm the humidifier and purifier export their device forms, animate only from their own state, and retain hold-for-details. Confirm electrical/air markers open data panels without a service call. |
| Moving art | Confirm clean PNG export omits bound fan and robot art. The live card must render exactly one rotor and one tracked robot. |
| Object state graphics | Confirm a linked light, fan, AC, window/cover, and door/garage uses the selected or inferred `roomcraft_visual_kind`. Known active states look bright; known inactive states look dark; unavailable, unknown, or unrecognized values show neutral **?**. A scene remains action-ready. The object and its accessible label remain the tap target in every state. |
| Fan motion | Confirm the five-blade rotor animates only while its motor state is on, remains still when off or unavailable, and stops when the system requests reduced motion. The center light scene does not start rotor motion. |
| Front-door camera | Between events its dated latest-event still appears without a live claim. Synthetic ring/person transitions open a bounded 60-second live attempt; a failed stream returns to the still. Check that the event sensor list and camera/image bindings survive export/import. |
| Overhead camera | A third independent tile mounts native HA playback without `camera.turn_on`. **LIVE** requires advancing video time or frame count, including when HA reports the entity `idle`. Check a failed or unavailable stream without disturbing the doorbell or garage tiles. |
| Garage camera | A separately bound `cameraThumbnail` shows a preview while idle and requests `camera.turn_on` only on tap; hold/right-click opens native details. **LIVE** requires a decoded playing frame. Test a failed stream falling back to preview or unavailable without affecting the other tiles. |
| Beach and ocean | Confirm the dunes, umbrellas and curved shoreline appear across the street in **Top down**. Rotate and zoom to check that scenery, house and camera targets stay aligned. Watch the surf and compare ocean reflections by day and at night. Check overcast, reduced motion and native details from **Weather** at the bottom. |
| Radar visibility | A fresh calibrated position over furniture or wall geometry shows a character and its ring. A stale, unavailable or off-floor position clears. Use synthetic input for controlled position tests. |
| Privacy | No tokens, SSH keys, raw HA exports, current device values, camera access URLs, or private backups appear in `/local/roomcraft/` or GitHub. The public inventory under `docs/ha-inventory/` contains only reviewed metadata. |

The earlier v19 release read back 36 editable items, including eight photo-inspired play-area objects, 10 object controls, separate fan and light scene targets, and the exterior camera. The first full-width release exported a 1536 × 864 PNG with the `full-width-v1` marker and no side gutters on a private 1920 × 1080 tablet capture. Those figures remain historical; the private capture and camera media are not in GitHub.

The wall tablet published reference revision 8 through Studio. The protected API confirmed that all 9 floor regions, 32 walls, 2 fences and 72 items matched the reviewed conversion. All 23 prior object bindings remained present and the refreshed PNG measured 1536 × 864. A cold app launch opened Roomcraft Home in Top down with the published scene. The owner-private Site v55 carries source commit `03a9898372db92f028d13a9e6a9afee4a88f8c88`. The [changelog](../CHANGELOG.md) records prior camera, weather, and tablet checks.

For the editor startup check, open a browser with a different saved draft and confirm the dashboard layout loads while **Recover previous browser draft** restores the earlier work. Check an editor with an in-progress drag, an editor whose Home Assistant connection fails, and an already open editor using **Import from dashboard**. The v19 source passed 26 Site tests, TypeScript, a production build, and GitHub's Roomcraft workflow. A screen capture proves visual fit on the target tablet for this release; it does not prove touch behavior.

The default-dashboard choice is a Home Assistant **user profile** preference, not part of the dashboard YAML or installer. In the current installation the owner’s profile opens Roomcraft Home by default. Separately, Home Assistant Companion is now the Apolosign tablet's default Android Home app; Android HOME resolution and the Home key were verified. The full-width image retains all original house columns and uses the 16:9 tablet width; a private actual-tablet capture confirmed both exterior sides and no gutters. Test touch interactions, auto-launch after reboot, and camera playback over time separately. The [tablet access runbook](tablet-access.md) gives the launcher rollback and recovery checks.

## Rollback

1. Export any unsaved editable layout JSON from the browser.
2. For a consolidated dashboard upgrade, restore the private Roomcraft Home config through `lovelace/config/save` and read it back. To reverse the consolidation, use the private two-dashboard archive. Recreate the legacy Lovelace registration from its saved metadata if it was retired. Restore the archived Second Floor and Roomcraft Home configurations to their recorded paths and compare both readbacks.
3. If only the static editor files are faulty, reinstall a known working asset version and update the registered card resource URL. A resource left registered is inert when the restored dashboard does not use the card.
4. Reload Home Assistant and verify Home, Studio and controls. If the cloud Site was also changed, restore its previous deployment separately.

An image may be uploaded before a dashboard save fails or conflicts. In that case the unreferenced image does not become the live plan; clean it up in a separate reviewed storage task.

## Development checks

From `site/`, use Node.js 22.13 or newer: `npm ci`, `npm test`, `node --test ha-local/roomcraft-card.test.mjs ha-local/roomcraft-weather-outdoor.test.mjs`, `python -m unittest discover -s ha-local -p 'test_*.py'`, `npx tsc --noEmit`, and `npm run build`. The Site and HA transports have separate tests and should both pass when shared editor or layout code changes.

Do not commit `node_modules`, `dist`, `.next`, `.wrangler`, `.sites-runtime`, local environment files, generated archives, SSH keys, dashboard backups, or credentials.
