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

The script copies `public/` into `/config/www/roomcraft/`, installs `roomcraft-card.js`, registers or updates its content-versioned Lovelace resource, backs up the dashboard, makes `studio` a panel with `custom:roomcraft-editor-card`, and points the plan edit icon to `/second-floor/studio`. It reads the dashboard and resource back to verify the write. It does not copy credentials or a live entity inventory into static assets. An asset-only refresh is available with `--assets-only`.

The normal laptop and tablet URL on the home network is `http://<HA-LAN-IP>:8123/second-floor/studio`. Sign in to Home Assistant. Some Chrome sessions leave the embedded frame blank. In that case click **Open editor in a new tab** from Studio and keep the Studio tab open. The new tab uses its opener for authenticated import/export. Opening `/local/roomcraft/editor.html` directly from the address bar bypasses the authenticated card and cannot transfer a layout to the dashboard.

### Wall-to-wall scene release order

The 1472 × 828 cropped image, editor, HA card, optional cloud bridge, and plan-view width form one release. Keep the editable `roomcraft_layout` project at 1536 × 1024; do not scale room, wall, or item coordinates. Take a private dashboard/image backup, install the matching HA assets/card, publish the matching cloud Site if used, then **Import from dashboard** and **Export to dashboard** once from the updated Studio. Move the editable camera frame far enough up to fit inside source crop x20–1492/y96–924 before publishing. Export creates the 16:9 image, writes `roomcraft_scene: wall-to-wall-v1` on the plan card, and remaps its managed overlays. Only then set the plan grid's center width to the 16:9 aspect, for example `min(100%, calc(100dvh * 1.77777778))`. Read back the card image, marker, project, controls, and other views. Do not widen the grid while it still displays a 3:2 image or publish a cropped image with an old bridge: either mismatch can misalign controls.

The previous card has no scene marker. Both updated bridges import that legacy card without a coordinate conversion; the first cropped export adds the marker. On that first export only, known menu/weather/time/editor chrome moves to a safe top position above the outer wall. Verify a subsequent import returns the original project-space marker positions, and that a second export preserves later chrome edits. If release verification fails, restore the backed-up dashboard and matching older HA assets/cloud deployment together.

After a card resource update, an existing Chrome tab may briefly show **Configuration error** while its frontend state is stale. Reload the affected tab first. If the error remains, verify that the `studio` view still uses `custom:roomcraft-editor-card`, that the versioned `/local/roomcraft/roomcraft-card.js` resource loads, and that the browser console shows no card registration or asset error. In the observed case, the live dashboard configuration and resource were valid and a reload cleared the error; its exact cause was not established. The card defensively skips repeated custom-element and card-metadata registration, and a repeat-evaluation test covers that behavior. If the card loads but its iframe stays blank, use the own-tab fallback above.

## Optional cloud editor

Build and publish the `site/` source through its Site workflow with owner-private access. Configure `HA_URL`, `HA_TOKEN`, and `OWNER_EMAIL` in the hosted runtime, never in source. The cloud editor has a separate owner sign-in. Both editors read and write the same `roomcraft_layout` in the Second Floor dashboard. Opening either editor loads the latest saved layout; use **Import from dashboard** when the other editor is already open after an export.

## Release verification

| Check | Pass condition |
| --- | --- |
| HA login | Studio opens in a fresh laptop browser with the HA login. The plan pencil-ruler icon navigates there. |
| Own-tab fallback | If the embedded frame is blank, **Open editor in a new tab** loads the same editor and completes an import/export while Studio remains open. |
| Layout default | The editor loads the current dashboard project on opening. A different browser draft is saved for recovery; if HA is unavailable, the local draft remains usable. **Import from dashboard** refreshes an already open editor. |
| Art | Furnished default, recessed windows, added wall-mounted windows, furniture, baby items, movable bedside lamp, room fixtures, and floor textures render in Design mode and the detailed PNG. |
| Editor | Select, drag, corner-resize (including Shift proportions), rotate, draw wall, reshape room, repaint floor/wall, undo/redo, and JSON import/export work. |
| Dashboard transfer | Export updates the plan image, object controls (including separate fan and light targets), managed camera overlays, and `roomcraft_layout`; import reads back the same project. Weather, time, edit link, `studio`, and `live` remain. |
| Wall-to-wall alignment | Exported PNG is 1472 × 828, cropped from the unchanged 1536 × 1024 project at x20/y96. The plan card has `roomcraft_scene: wall-to-wall-v1`. Object, window, lamp, fan, independent marker, and camera targets still align after both HA-hosted and cloud export/import round trips; legacy unmarked imports stay unchanged. The camera frame and top chrome are fully visible. |
| Conflict handling | A stale editor revision is rejected after a separate dashboard edit; no newer change is silently replaced. |
| Cloud parity | If the cloud Site is deployed, import its dashboard copy after an HA editor export; repeat in the other direction. |
| Responsive view | A private 1920 × 1080 Apolosign capture showed the cropped house scene nearly edge to edge, with no side gutters or clipping of the camera frame, menu, clock, weather, or editor link. Repeat visual and touch checks on laptop and smaller viewports. The prior 3:2 installation was checked at 960 × 600 CSS pixels (696 × 465 plan), 2560 × 1271 (centered 1763-pixel card), and on the tablet (about 1612 × 1074 with side gutters). |
| Existing controls | Confirm light, switch, cover, fan, garage, vacuum, and camera behavior through Home Assistant before relying on their dashboard cards. An event still is not proof of a live stream. |
| Current drawer | Confirm **On plan**, **All entities**, search, registry availability, and all six curated Main Dashboard groups. Check the three separate living-window blind controls. |
| Fan and light | Confirm the fan artwork monitors `switch.ceiling_fan`, blade tap targets `scene.ceiling_fan_on_scene`, blade hold targets `scene.ceiling_fan_off`, and the separate center target runs `scene.ceiling_fan_light_toggle`. A scene target reports **Ready**, not an invented fan-light on/off state. Verify these bindings by readback without sending device commands during a layout release. |
| Exterior camera | Confirm `camera.porch_camera_profile_000` has a working HLS view and the floor thumbnail says **Live** only while it plays; do not substitute the separate Eufy event image. |
| Privacy | No tokens, SSH keys, raw HA exports, current device values, camera access URLs, or private backups appear in `/local/roomcraft/` or GitHub. The public inventory under `docs/ha-inventory/` contains only reviewed metadata. |

The prior v19 release read back 36 editable items, including eight photo-inspired play-area objects, 10 object controls, separate fan and light scene targets, the existing porch camera, and the saved plan image. The fan is placed provisionally over the living-room ceiling because Home Assistant has no assigned area for that device. The wall-to-wall release then exported a 1472 × 828 PNG from the unchanged project; HA readback confirmed `wall-to-wall-v1`, 10 object controls, the relocated camera frame, and top chrome at 3.6%. A private 1920 × 1080 ADB capture showed the floor plan filling the tablet nearly edge to edge without side gutters and with the live porch thumbnail visible. The capture contains private media and is not in GitHub. Physical touch alignment and playback over time remain untested. Earlier release evidence is retained in the [changelog](../CHANGELOG.md); a checklist row is an acceptance criterion, not an assertion that every device was exercised.

For the editor startup check, open a browser with a different saved draft and confirm the dashboard layout loads while **Recover previous browser draft** restores the earlier work. Check an editor with an in-progress drag, an editor whose Home Assistant connection fails, and an already open editor using **Import from dashboard**. The v19 source passed 26 Site tests, TypeScript, a production build, and GitHub's Roomcraft workflow. A screen capture proves visual fit on the target tablet for this release; it does not prove touch behavior.

The default-dashboard choice is a Home Assistant **user profile** preference, not part of the dashboard YAML or installer. In the current installation the owner's profile opens Second Floor by default across devices, and the sidebar lists it first. Separately, Home Assistant Companion is now the Apolosign tablet's default Android Home app; Android HOME resolution and the Home key were verified. The wall-to-wall crop replaced the earlier 3:2 side gutters without changing authored home geometry; a private actual-tablet capture confirmed the full-width visual result. Test touch interactions, auto-launch after reboot, and camera playback over time separately. The [tablet access runbook](tablet-access.md) gives the launcher rollback and recovery checks.

## Rollback

1. Export any unsaved editable layout JSON from the browser.
2. Restore the private dashboard backup recorded by `ha-local/install.py` through `lovelace/config/save` for `url_path="second-floor"`, then read it back and compare. This restores the prior Studio view, plan image, and controls together.
3. If only the static editor files are faulty, reinstall a known working asset version and update the registered card resource URL. A resource left registered is inert when the restored dashboard does not use the card.
4. Reload Home Assistant and verify the plan and controls. If the cloud Site was also changed, restore its previous deployment separately.

An image may be uploaded before a dashboard save fails or conflicts. In that case the unreferenced image does not become the live plan; clean it up in a separate reviewed storage task.

## Development checks

From `site/`, use Node.js 22.13 or newer: `npm ci`, `npm test`, `node --test ha-local/roomcraft-card.test.mjs`, `python -m unittest discover -s ha-local -p 'test_*.py'`, `npx tsc --noEmit`, and `npm run build`. The Site and HA transports have separate tests and should both pass when shared editor or layout code changes.

Do not commit `node_modules`, `dist`, `.next`, `.wrangler`, `.sites-runtime`, local environment files, generated archives, SSH keys, dashboard backups, or credentials.
