# Home Assistant LAN editor

Roomcraft Home has the live view at `/roomcraft-home/home` and Layout Studio at `/roomcraft-home/studio`. Open either path on the Home Assistant host and sign in. The private Site is an alternate editor for the same saved layout. Both editors load the saved layout on opening and retain a different local browser draft for recovery. Use **Import from dashboard** to refresh an editor already open when another editor publishes.

## Architecture

- `public/` is copied to Home Assistant `/config/www/roomcraft/`. It contains the editor, graphics, and the small `ha-iframe-bridge.js`. The source contains no access tokens or live entity IDs.
- `roomcraft-card.js` is registered as a Lovelace module resource and is the only card in the dashboard's `studio` panel view. Home Assistant supplies the card with the signed-in user's `hass` object. The card embeds the editor and provides **Open editor in a new tab** for browsers that leave the embedded frame blank.
- The live card reads `roomcraft_plan.elements` for bindings, cameras, weather, and utility configuration, and `roomcraft_health` for health readings. The original weather module remains available for legacy picture cards.
- The embedded editor exchanges request/response messages with its parent card. The new-tab editor uses its `window.opener` instead. The card checks the exact iframe or opened window, origin, request ID, and method before answering.
- The card reads and saves the dashboard through Home Assistant's authenticated WebSocket commands. It uploads the rendered PNG with `hass.fetchWithAuth` using the current user's session; it never sends the token to the iframe. Publishing requires an HA administrator. A stored snapshot is checked before and after image upload, and the saved dashboard is read back.
- Save updates the dashboard's `roomcraft_layout` and `roomcraft_plan` projection, including the rendered image, object and camera bindings, and independent hotspots. The dashboard has Home, Studio and room-organized Controls views. The projection is stored with the layout for both editors and the live card.
- A bound item's artwork is its live tap target. The Inspector sets its Home Assistant entity, label, icon, tap action, and hold action. The invisible button area is an editable target for baked artwork such as windows; it contributes no pixels to the exported plan PNG. Tap toggles a light, switch, or fan by default; runs a scene, script, or button; and opens native details for other entities. Hold opens native details by default. Optional tap and hold target entities let one illustrated object display a switch's live state while running separate on/off scenes. A scene's timestamp is displayed as **Ready**, not as a false light on/off state.
- **Menu → Manage** opens the device drawer and utility popups for Home. The drawer can search live entities and list disabled registrations when the signed-in user can read the entity registry. The curated sections retain the old Main Dashboard's six groups.

The static editor files at `/local/roomcraft/` are public to anyone who can reach Home Assistant. This includes the bundled illustrative floor-plan image, which is already present in the public project repository. The current editable dashboard JSON and live HA entity bindings are **not** copied there. Uploaded plan images use Home Assistant's image library with unguessable IDs; Home Assistant serves an image to anyone with its exact image URL, as it does for the existing plan. Do not put secrets or private layouts in `public/`.

## Install or update

Run `npm ci` and `npm run build` from `site/`. On the workstation with OpenSSH, Python, and the private Home Assistant adapter, run the installer to copy and version the assets, back up the dashboard, and verify the saved views and resources.

```powershell
python ha-local/install.py --host <HA-LAN-IP> --ssh-key <SSH-KEY-PATH> --management-root <PRIVATE-HA-MANAGEMENT-DIR> --backup-dir <PRIVATE-BACKUP-DIR> --storybook
```

For an asset-only refresh without changing the dashboard:

```powershell
python ha-local/install.py --host <HA-LAN-IP> --ssh-key <SSH-KEY-PATH> --assets-only
```

If Studio shows **Configuration error** after a card update, reload the HA tab. If its editor area stays blank, choose **Open editor in a new tab** and keep the Studio tab open during import or export. The standalone static editor at `/local/roomcraft/editor.html` has no authenticated dashboard bridge.

The static files, custom card resource, and dashboard configuration persist across Home Assistant restarts. Updating the editor uses the same install command and does not require a Home Assistant core restart. The one-time interactive-plan migration is in `migrate_interactive_plan.py`; run its default dry run, review the planned changes, then run `--apply`. It privately backs up and verifies the dashboard. The migration maps the exterior camera to the porch live stream and turns the three blind windows into movable control areas.

Place the weather element once in the plan's picture-elements `elements` array. Use actual entity IDs only in the private Home Assistant dashboard configuration. The full-scene element stays below camera and object controls in the stack, while its forecast strip remains tappable.

```yaml
- type: custom:roomcraft-weather-outdoor
  weather_entity: weather.<local_weather>
  sun_entity: sun.sun
  moon_entity: sensor.<moon_phase>
  style:
    left: 50%
    top: 50%
    width: 100%
    height: 100%
    transform: translate(-50%, -50%)
    z-index: 2
```

## Migrate an older installation

When the separate Roomcraft Home shell already exists, add `--consolidate` to the installer command. It archives both configurations and copies the Second Floor layout, control projection, and health data to Home. Verify Home, Studio, the private Site if enabled, and the utilities before removing the archived Second Floor registration with the Lovelace API. Home needs WebGL 2. If the renderer cannot open, use **Try again** or **Layout Studio**.

Check the fan motor and light as separate touch targets, the dimmer with occupancy on and off, day/night and adverse weather, and all three camera tile modes. Verify the physical tablet separately, including frame pacing with the camera feeds. Use read-only checks or synthetic states to test animations without operating devices.

### Standalone dashboard and profile default

For a legacy installation, `publish_storybook_dashboard.py` can create the initial Roomcraft Home shell before consolidation. After inspecting Home, use its `--make-default` option to set the authenticated user's default dashboard. It preserves a consolidated dashboard and backs up the user's prior preferences.

To restore the prior dashboard choice, use **Profile → Appearance → Dashboard** or restore the `user_core` object from the private backup through the authenticated frontend WebSocket API.

## Verification

1. Open the local Studio URL in a fresh browser and sign into Home Assistant. Use its new-tab button if the embedded frame stays blank.
2. Confirm the editor loads the current dashboard layout by default when there is no unsaved browser draft. Otherwise press **Import from dashboard**.
3. Move a control area without changing any device state, export to the dashboard, and read back the plan and `roomcraft_layout` through the HA API. Move it back after the check.
4. Import from dashboard in the cloud editor; confirm the same layout. Reverse the change and export again if it was only a probe.
5. Check the live and editor views at a narrow viewport, including the Studio return link and popup navigation.

Run `node --test ha-local/roomcraft-card.test.mjs` for the bridge, object control, camera, menu, and conflict checks. Run `python -m unittest discover -s ha-local -p test_install.py` for resource registration. The Site's bridge tests remain independent. The manual YAML export also emits these custom element types and therefore requires the `/local/roomcraft/roomcraft-card.js` Lovelace module resource. The outdoor weather element requires `/local/roomcraft/roomcraft-weather-outdoor.js`.

## Rollback

For a routine update, restore the printed private backup to the original URL through `lovelace/config/save`. For a migration rollback, recreate the legacy dashboard from the backup's `legacy.dashboard` metadata, save `legacy.config` there, and restore the prior Roomcraft Home `config`. Reinstall the matching assets and verify both configs by readback.
