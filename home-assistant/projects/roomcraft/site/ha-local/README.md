# Home Assistant LAN editor

The official local editor is the **Layout Studio** view at `http://<HA-LAN-IP>:8123/second-floor/studio`. It uses the Home Assistant login in any browser on the same network. The cloud Site remains an alternate entry to the same `roomcraft_layout` dashboard data. Both editors load the current dashboard layout on opening, preserving a different local browser draft for recovery. Use **Import from dashboard** to refresh an editor that is already open after someone else exports.

## Architecture

- `public/` is copied to Home Assistant `/config/www/roomcraft/`. It contains the editor, graphics, and the small `ha-iframe-bridge.js`. The source contains no access tokens or live entity IDs.
- `roomcraft-card.js` is registered as a Lovelace module resource and is the only card in the dashboard's `studio` panel view. Home Assistant supplies the card with the signed-in user's `hass` object. The card embeds the editor and provides **Open editor in a new tab** for browsers that leave the embedded frame blank.
- The embedded editor exchanges request/response messages with its parent card. The new-tab editor uses its `window.opener` instead. The card checks the exact iframe or opened window, origin, request ID, and method before answering.
- The card reads and saves the dashboard through Home Assistant's authenticated WebSocket commands. It uploads the rendered PNG with `hass.fetchWithAuth` using the current user's session; it never sends the token to the iframe. Publishing requires an HA administrator. A stored snapshot is checked before and after image upload, and the saved dashboard is read back.
- Export writes the `roomcraft_layout` and the `plan` picture card's rendered image, object hit targets, camera thumbnail, one entity menu, and any independent state-icon hotspots. Weather, clock, edit link, and unrelated dashboard views are retained. Bound fixtures and windows replace their duplicate floating icons.
- A bound item's artwork is its live tap target. The Inspector sets its Home Assistant entity, label, icon, tap action, and hold action. The invisible button area is an editable target for baked artwork such as windows; it contributes no pixels to the exported plan PNG. Tap toggles a light, switch, or fan by default; runs a scene, script, or button; and opens native details for other entities. Hold opens native details by default. Optional tap and hold target entities let one illustrated object display a switch's live state while running separate on/off scenes. A scene's timestamp is displayed as **Ready**, not as a false light on/off state.
- The plan's compact menu searches live Home Assistant entities and, when the signed-in account may read the entity registry, also lists disabled registrations. Curated sections retain the old Main Dashboard's six groups. The public Site never receives the registry or camera feed through these local card elements.

The static editor files at `/local/roomcraft/` are public to anyone who can reach Home Assistant. This includes the bundled illustrative floor-plan image, which is already present in the public project repository. The current editable dashboard JSON and live HA entity bindings are **not** copied there. Uploaded plan images use Home Assistant's image library with unguessable IDs; Home Assistant serves an image to anyone with its exact image URL, as it does for the existing plan. Do not put secrets or private layouts in `public/`.

## Install or update

Run from a workstation with OpenSSH, Python, and the private authenticated `HomeAssistantManagement/ha_manage.py` adapter. The adapter and SSH key stay outside the repository. The script uploads assets, registers or updates the module resource with a content-based cache version, backs up the dashboard, switches Studio to a panel card, updates the plan edit icon, then verifies the saved dashboard and resource.

```powershell
python ha-local/install.py --host <HA-LAN-IP> --ssh-key <SSH-KEY-PATH> --management-root <PRIVATE-HA-MANAGEMENT-DIR> --backup-dir <PRIVATE-BACKUP-DIR>
```

For an asset-only refresh without changing the dashboard:

```powershell
python ha-local/install.py --host <HA-LAN-IP> --ssh-key <SSH-KEY-PATH> --assets-only
```

Keep `/second-floor/studio` as the link given to LAN users. If Studio shows **Configuration error** after a card update, reload the HA tab; we observed stale frontend state clear on reload. If its editor area stays blank, use **Open editor in a new tab** on that page. The Studio tab must remain open while the new tab imports or exports. Opening `/local/roomcraft/editor.html` directly from the address bar bypasses the authenticated Lovelace card and cannot transfer a layout to the dashboard.

The static files, custom card resource, and dashboard configuration persist across Home Assistant restarts. Updating the editor uses the same install command and does not require a Home Assistant core restart. The one-time interactive-plan migration is in `migrate_interactive_plan.py`; run its default dry run, review the planned changes, then run `--apply`. It privately backs up and verifies the dashboard. The migration maps the exterior camera to the porch live stream and turns the three blind windows into movable control areas.

## Verification

1. Open the local Studio URL in a fresh browser and sign into Home Assistant. Use its new-tab button if the embedded frame stays blank.
2. Confirm the editor loads the current dashboard layout by default when there is no unsaved browser draft. Otherwise press **Import from dashboard**.
3. Move a control area without changing any device state, export to the dashboard, and read back the plan and `roomcraft_layout` through the HA API. Move it back after the check.
4. Import from dashboard in the cloud editor; confirm the same layout. Reverse the change and export again if it was only a probe.
5. Check a narrow viewport and the plan's edit icon.

Run `node --test ha-local/roomcraft-card.test.mjs` for the bridge, object control, camera, menu, and conflict checks. The Site's bridge tests remain independent. The manual YAML export also emits these custom element types and therefore requires the `/local/roomcraft/roomcraft-card.js` Lovelace module resource.

## Rollback

The installer prints a private dashboard backup path. Restore that exact JSON through `lovelace/config/save` for `url_path="second-floor"`, then read back and compare. The resource can remain registered without affecting the restored views; remove or update it separately if needed. The asset copy is additive and keeps old files, so no recursive delete is part of installation.
