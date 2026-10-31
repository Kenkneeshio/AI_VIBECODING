# Deployment, verification, and rollback

The official editor is served by Home Assistant itself. Its `studio` view hosts a Roomcraft custom card and the shared static editor. The owner-private cloud Site is an optional second transport. Source commits, Site publication, static asset installation, and dashboard changes are separate release steps.

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

After a card resource update, an existing Chrome tab may briefly show **Configuration error** while its frontend state is stale. Reload the affected tab first. If the error remains, verify that the `studio` view still uses `custom:roomcraft-editor-card`, that the versioned `/local/roomcraft/roomcraft-card.js` resource loads, and that the browser console shows no card registration or asset error. In the observed case, the live dashboard configuration and resource were valid and a reload cleared the error; its exact cause was not established. The card defensively skips repeated custom-element and card-metadata registration, and a repeat-evaluation test covers that behavior. If the card loads but its iframe stays blank, use the own-tab fallback above.

## Optional cloud editor

Build and publish the `site/` source through its Site workflow with owner-private access. Configure `HA_URL`, `HA_TOKEN`, and `OWNER_EMAIL` in the hosted runtime, never in source. The cloud editor has a separate owner sign-in. Both editors read and write the same `roomcraft_layout` in the Second Floor dashboard; after an export in one, import in the other before making another edit.

## Release verification

| Check | Pass condition |
| --- | --- |
| HA login | Studio opens in a fresh laptop browser with the HA login. The plan pencil-ruler icon navigates there. |
| Own-tab fallback | If the embedded frame is blank, **Open editor in a new tab** loads the same editor and completes an import/export while Studio remains open. |
| Layout default | A fresh browser loads the current dashboard project. An existing local draft can be explicitly replaced with **Import from dashboard**. |
| Art | Furnished default, recessed windows, added wall-mounted windows, furniture, baby items, movable bedside lamp, room fixtures, and floor textures render in Design mode and the detailed PNG. |
| Editor | Select, drag, corner-resize (including Shift proportions), rotate, draw wall, reshape room, repaint floor/wall, undo/redo, and JSON import/export work. |
| Dashboard transfer | Export updates the plan image, one control per bound fixture, managed camera overlays, and `roomcraft_layout`; import reads back the same project. Weather, time, edit link, `studio`, and `live` remain. |
| Conflict handling | A stale editor revision is rejected after a separate dashboard edit; no newer change is silently replaced. |
| Cloud parity | If the cloud Site is deployed, import its dashboard copy after an HA editor export; repeat in the other direction. |
| Responsive view | Verify the entire plan and controls fit on actual laptop and tablet screen sizes without clipping or stretching. The current installation was checked at 960 × 600 CSS pixels (696 × 465 plan, no page scroll) and 2560 × 1271 (centered 1763-pixel card). |
| Existing controls | Confirm light, switch, cover, fan, garage, vacuum, and camera behavior through Home Assistant before relying on their dashboard cards. An event still is not proof of a live stream. |
| Current drawer | Confirm **On plan**, **All entities**, search, registry availability, and all six curated Main Dashboard groups. Check the three separate living-window blind controls. |
| Exterior camera | Confirm `camera.porch_camera_profile_000` has a working HLS view and the floor thumbnail says **Live** only while it plays; do not substitute the separate Eufy event image. |
| Privacy | No tokens, SSH keys, raw HA exports, current device values, camera access URLs, or private backups appear in `/local/roomcraft/` or GitHub. The public inventory under `docs/ha-inventory/` contains only reviewed metadata. |

The earlier 2026-10-31 release completed an HA Studio import/export/readback with the own-tab fallback: 6 rooms, 33 walls, 13 items, and 7 controls. Its first lighting/camera release read back 23 items, seven controls, one managed camera overlay, and a 1536 × 1024 PNG while retaining weather, clock, and Studio entry. That release displayed an Eufy latest-event still and opened native details, while the Eufy battery doorbell's P2P live stream timed out. The later floor migration uses the separate porch ONVIF camera, whose HLS stream was verified. Record the actual checks performed and screenshots in each release record; the target tablet still requires its own on-device check. A checklist row is an acceptance criterion, not an assertion that every device was exercised.

The default-dashboard choice is a Home Assistant **user profile** preference, not part of the dashboard YAML or installer. In the current installation the owner's profile opens Second Floor by default across devices, and the sidebar lists it first. The 960 × 600 check used a browser viewport; verify the current Roomcraft release on the target Apolosign Calendar tablet's actual display before claiming on-device fit.

## Rollback

1. Export any unsaved editable layout JSON from the browser.
2. Restore the private dashboard backup recorded by `ha-local/install.py` through `lovelace/config/save` for `url_path="second-floor"`, then read it back and compare. This restores the prior Studio view, plan image, and controls together.
3. If only the static editor files are faulty, reinstall a known working asset version and update the registered card resource URL. A resource left registered is inert when the restored dashboard does not use the card.
4. Reload Home Assistant and verify the plan and controls. If the cloud Site was also changed, restore its previous deployment separately.

An image may be uploaded before a dashboard save fails or conflicts. In that case the unreferenced image does not become the live plan; clean it up in a separate reviewed storage task.

## Development checks

From `site/`, use Node.js 22.13 or newer: `npm ci`, `npm test`, `npx tsc --noEmit`, and `npm run build`. Run `node --test ha-local/roomcraft-card.test.mjs` for the HA card's merge and conflict behavior. The Site and HA transports have separate tests and should both pass when shared editor or layout code changes.

Do not commit `node_modules`, `dist`, `.next`, `.wrangler`, `.sites-runtime`, local environment files, generated archives, SSH keys, dashboard backups, or credentials.
