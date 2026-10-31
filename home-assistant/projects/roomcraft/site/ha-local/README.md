# Home Assistant LAN editor

The official local editor is the **Layout Studio** view at `http://<HA-LAN-IP>:8123/second-floor/studio`. It uses the Home Assistant login in any browser on the same network. The cloud Site remains an alternate entry to the same `roomcraft_layout` dashboard data. Export in either editor, then import in the other to refresh its draft.

## Architecture

- `public/` is copied to Home Assistant `/config/www/roomcraft/`. It contains the editor, graphics, and the small `ha-iframe-bridge.js`. The source contains no access tokens or live entity IDs.
- `roomcraft-card.js` is registered as a Lovelace module resource and is the only card in the dashboard's `studio` panel view. Home Assistant supplies the card with the signed-in user's `hass` object. The card embeds the editor and provides **Open editor in a new tab** for browsers that leave the embedded frame blank.
- The embedded editor exchanges request/response messages with its parent card. The new-tab editor uses its `window.opener` instead. The card checks the exact iframe or opened window, origin, request ID, and method before answering.
- The card reads and saves the dashboard through Home Assistant's authenticated WebSocket commands. It uploads the rendered PNG with `hass.fetchWithAuth` using the current user's session; it never sends the token to the iframe. Publishing requires an HA administrator. A stored snapshot is checked before and after image upload, and the saved dashboard is read back.
- Export changes the `plan` picture card's image, Roomcraft-managed state-icon and camera elements, and top-level `roomcraft_layout`. Weather, clock, edit link, and unrelated dashboard views are retained.

Bound lamp/light/fan objects derive a single state-icon control at the object's position. Camera thumbnail items derive `custom:roomcraft-camera-thumbnail` picture elements. The card replaces only elements it owns (`state-icon` controls and camera elements with a Roomcraft item ID); it retains the edit icon, clock, weather, and other independent overlays. These two derived element sets must stay in parity with the optional cloud bridge.

The camera element uses the signed-in HA session for same-origin event-image proxy requests. It never puts a bearer token in the editor frame or writes a camera URL into static assets. A missing event image shows a neutral unavailable state. A live view is attempted only when Home Assistant already reports an active stream; rendering a thumbnail does not start a battery camera. Clicking the frame opens native camera details.

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

The static files, custom card resource, and dashboard configuration persist across Home Assistant restarts. Updating the editor uses the same install command and does not require a Home Assistant core restart.

## Verification

1. Open the local Studio URL in a fresh browser and sign into Home Assistant. Use its new-tab button if the embedded frame stays blank.
2. Confirm the editor loads the current dashboard layout by default when there is no unsaved browser draft. Otherwise press **Import from dashboard**.
3. Change a reversible item, export to the dashboard, and read back the plan and `roomcraft_layout` through the HA API.
4. Import from dashboard in the cloud editor; confirm the same layout. Reverse the change and export again if it was only a probe.
5. Check a narrow viewport and the plan's edit icon.
6. For a bound fixture, confirm that its state icon follows the drawn object and that a prior duplicate control is gone. For a camera thumbnail, confirm the latest-event still or unavailable message, then click through to native details. Never use a private camera frame as a public test fixture.

Run `node --test ha-local/roomcraft-card.test.mjs` for the bridge's merge and conflict checks. The Site's existing bridge tests remain independent.

## Rollback

The installer prints a private dashboard backup path. Restore that exact JSON through `lovelace/config/save` for `url_path="second-floor"`, then read back and compare. The resource can remain registered without affecting the restored views; remove or update it separately if needed. The asset copy is additive and keeps old files, so no recursive delete is part of installation.
