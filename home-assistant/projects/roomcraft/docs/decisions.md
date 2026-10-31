# Decision log

## 2026-10-31 — Fit the 3:2 plan to the calendar tablet's height

**Decision:** Size the Second Floor plan's centered grid column with `min(100%, calc(100dvh * 1.5))`, preserving the source artwork's 3:2 aspect ratio. Use a matching green-to-tan background on the plan view to fill the remaining landscape side gutters.

**Reason:** The earlier `100dvh - 90px` reservation shortened the plan on the 1920 × 1080 wall tablet and left dark surrounding space. The view needs its available height; stretching the plan to 16:9 would distort rooms and controls.

**Consequence:** The plan now uses about 1074 of 1080 tablet pixels in height and about 1612 pixels in width; the rest is intentional color-matched gutter. The plan's 15 picture elements and other dashboard views were unchanged. Visual fit was verified in a private tablet capture; touch behavior and other orientations remain separate tests.

## 2026-10-31 — Use Home Assistant Companion as the calendar tablet's Home app

**Decision:** Set the installed Home Assistant Companion app as Android's default Home app on the Apolosign Calendar tablet. Keep the vendor launcher available as the documented rollback, and keep ADB only for maintenance and recovery. Configure the intended Second Floor dashboard for the tablet user separately from Android's Home selection.

**Reason:** Android was still resolving Home to the vendor calendar launcher, so a restarted tablet could return to that screen. Companion already had its Home component enabled. [Home Assistant documents](https://companion.home-assistant.io/docs/integrations/android-home-app-launcher/) this launcher mode for wall tablets and says it opens the app at boot. A separate kiosk installation or host-side ADB launch loop would add an unnecessary dependency.

**Consequence:** HOME resolution and the Home key now select the Companion app. The Home key also cold-launched `/second-floor/plan` after Companion was force-stopped. Boot behavior remains an acceptance gate until a supervised tablet restart. The launcher setting cannot explain or prevent the reported restarts. Android's latest recorded reason was `reboot,userrequested`; an orderly shutdown log and a nearby Bluetooth HAL crash still do not identify the initiator. The [runbook](tablet-access.md) contains verification, diagnosis, and reversal steps without private device access data.

## 2026-10-31 — Keep tablet recovery separate from Roomcraft and document private trust boundaries

**Decision:** Pair the Apolosign Calendar to the Home Assistant host's ADB identity, use the HA Companion app for the Second Floor frontend, and document the reconnect path with placeholders in a public runbook. Keep ADB identity material, HA credentials, transient pairing codes, network endpoints, raw captures, and camera frames out of GitHub. Back up the HA add-on's ADB identity in root-only persistent add-on data. Treat ADB as a recovery channel; do not claim unattended tablet startup or automatic ADB reconnect until a controlled reboot test passes.

**Reason:** The HA host reached the tablet's pairing port when the Windows workstation could not, and it had previously managed this tablet. Android pairing trust can survive a dropped TCP connection, but the current debugging port and wireless-debugging state can change. Phone Codex Remote independently needs an awake, online desktop. An explicit recovery chain is more durable than relying on a live chat or remembering a one-time code.

**Consequence:** An authorized engineer can find the architecture and safe verification commands in [the tablet access runbook](tablet-access.md), then retrieve private access material from the owner or HA host. The Terminal & SSH add-on requests `android-tools` through its persistent `apks` option, but its rebuild behavior and ADB identity restoration are not yet verified. The tablet's full-plan display fit is verified. Touch behavior, boot-time app launch, and automatic reconnect remain acceptance gates. The later same-day default-Home decision above supersedes the earlier lack of an auto-start configuration.

## 2026-10-31 — Translate the living-room photo into independent plan objects

**Decision:** Use the supplied photo as a visual reference for an illustrated catalog and place the eight clear play-area furnishings in the current living-room plan. Keep the modular fence colors, mantel, and toy shelf available for further edits. Do not place the mantel or shelf until the physical fireplace wall is verified. Draw each object in the plan's raised perspective, with floor mats below play equipment and ceiling fixtures above it.

**Reason:** The user needs to rearrange photo-inspired objects in the editor and see them on the dashboard. The photo does not provide measured floor-plan coordinates or prove which illustrated wall contains the fireplace. A fixed placement beside the existing TV or windows would assert a wall relationship that has not been established.

**Consequence:** The eight placed objects remain independently movable and resizable. The layout is a provisional visual arrangement, not a dimensional survey or exact reconstruction. The original photo and its people stay outside public code, static assets, and the rendered dashboard plan. Any later fireplace placement should be confirmed in the room and documented as a separate layout decision.

## 2026-10-31 — Separate fan motor scenes from the fan-light action

**Decision:** Use the fan artwork as a movable target that displays `switch.ceiling_fan` state, runs `scene.ceiling_fan_on_scene` on tap, and runs `scene.ceiling_fan_off` on hold. Use a separate movable center target for `scene.ceiling_fan_light_toggle`. The current living-room position is provisional until the physical room is confirmed.

**Reason:** The old Main Dashboard uses distinct scenes for these commands. Home Assistant exposes no independent `light.*` state for the fan light, and its scene timestamp cannot truthfully indicate whether the light is on.

**Consequence:** The center target says **Ready** or **Toggle light** rather than showing a fabricated on/off state. Move fan and center target together if its actual room differs. Keep scene activation, target-entity, and export-parity tests in both transports.

## 2026-10-31 — Use the verified porch feed for this floor

**Decision:** Bind the exterior floor-plan thumbnail to `camera.porch_camera_profile_000` in live mode. Keep the Eufy `camera.front_door` and `image.front_door_event_image` as separate security inventory entries, not the exterior image for this floor.

**Reason:** The porch ONVIF HLS stream has been verified, while the Eufy doorbell's P2P live command timed out. Reusing the Eufy latest-event still for the upstairs exterior made the floor appear to have the wrong view and mislabeled a static image as the intended live feed.

**Consequence:** The object retains editable placement and an authenticated native HA stream. A broken stream must show unavailable rather than substituting the unrelated event still. Never add a stream URL or frame to public assets.

## 2026-10-31 — Publish a reviewed HA metadata inventory

**Decision:** Record a dated, read-only Home Assistant entity snapshot as public JSON and area/domain Markdown. Mask mobile and personal identifiers, network identifiers, credentials, media URLs, and current device values. Keep the exact dashboard project and private audit source outside GitHub.

**Reason:** Future teams need to discover working controls, disabled entities, and room assignment gaps without repeating a large manual registry search or exposing the home's live state. The prior Main Dashboard contains useful device groups but also stale references.

**Consequence:** Treat the inventory as documentation, not deployable configuration. Recheck each entity in Home Assistant before binding it to furniture or a fixture. Review every future inventory diff for privacy and changing availability.

## 2026-10-31 — Keep direct object actions and detailed menu separate

**Decision:** Put the first interaction on the illustrated lamp, light, window, fan, vacuum, or camera. The shipped drawer provides **On plan**, **All entities**, search, registry availability, and the six curated Main Dashboard groups: Planning, Weather and Air Quality, Lighting, Security and Control, Energy, and Robot Vacuum. The Studio edit link remains separate.

**Reason:** The plan should show where a device is. Repeating the full Main Dashboard over the drawing would obscure rooms and make touch targets harder to use. Some entities are unavailable or unassigned to an HA area; a name alone cannot prove physical placement.

**Consequence:** Bind verified devices to objects; show unavailable states; leave unverified bathroom, dressing, and balcony placements unresolved. The fan is drawn provisionally in the living room, but its physical room still needs confirmation. Preserve the old Main Dashboard as a reference and verify the new drawer on the target tablet.

## 2026-10-31 — Derive fixture controls from illustrated objects

**Decision:** Give editable lamp, ceiling-light, pendant, and fan objects optional Home Assistant entity bindings. Export derives one percentage-positioned state icon per bound entity and keeps its visual placement with the object. A fixture without a binding remains decorative.

**Reason:** Independent control markers can drift away from the illustrated device when furniture is moved. A second icon for the same entity also makes the plan harder to read.

**Consequence:** The editor must reconcile a saved project's linked entities with any controls added directly in Home Assistant. Live state stays in HA, outside the layout JSON; source examples use synthetic IDs. Tests cover duplicate suppression and round-trip behavior.

## 2026-10-31 — Keep camera media inside authenticated Home Assistant

**Decision:** Store only a camera thumbnail's geometry, `camera.*`/`image.*` references, and preview mode in the Roomcraft project. Derive its picture-element overlay on export. Fetch latest-event images through Home Assistant's same-origin proxy with the signed-in user's session; show a live view only when HA reports an already active stream.

**Reason:** Camera tokens, transient proxy URLs, and frames must not enter the public Site assets or GitHub. An always-on preview could wake a battery doorbell or mislabel a stale event as live.

**Consequence:** Missing event images display an unavailable state. The public manual uses a synthetic workflow graphic rather than a live frame. Both dashboard transports must replace Roomcraft-owned camera overlays while preserving unrelated elements.

## 2026-10-31 — Make card registration safe on repeated evaluation

**Decision:** Check the custom-element registry and Home Assistant custom-card metadata before registering `roomcraft-editor-card`.

**Reason:** Home Assistant can evaluate a refreshed card resource in a tab that already loaded an earlier copy. The reported **Configuration error** cleared on tab reload, but its precise cause was not confirmed. Idempotent registration removes one plausible failure mode without changing the dashboard layout or editor project.

**Consequence:** Keep a repeat-evaluation regression test. Troubleshooting still starts with reloading the affected Studio tab and checking the resource/configuration readback if the error persists; a blank iframe uses the existing own-tab fallback.

## 2026-10-31 — Make HA-hosted Studio the official editor

**Decision:** Serve the shared Roomcraft editor from Home Assistant `/local/roomcraft/` inside a same-origin custom Lovelace card at `/second-floor/studio`. The card receives `hass`, validates iframe messages, and performs authenticated dashboard reads, image upload, and saves as the signed-in user. Keep the owner-private cloud Site as an alternate transport to the same saved layout.

**Reason:** Laptop and tablet users already have a Home Assistant login. The previous external Site link required a separate sign-in and did not make the editor part of the HA frontend. The card keeps credentials out of the static iframe while making Layout Studio the durable, official authoring entry.

**Consequence:** Publishing a layout requires HA administrator privileges. Static `/local/roomcraft/` assets must contain no credentials or private dashboard JSON. The HA card and Site bridge need parity tests for merge, revision conflict, and save verification; switching between editors requires a fresh import.

## 2026-10-31 — Keep an authenticated new-tab fallback

**Decision:** If the embedded Studio iframe fails to load, show **Open editor in a new tab**. The new tab requests dashboard operations through its same-origin Studio opener while that tab stays open; a direct static editor URL does not gain this bridge.

**Reason:** Some Chrome sessions leave a freshly attached iframe blank. The editor can still run in a normal tab, and the HA card can retain authenticated import and export without sending credentials into the page.

**Consequence:** The card validates the exact opened window and origin as well as request IDs. The user must keep Studio open during a new-tab editing session. The fallback needs its own import/export regression test and manual instructions.

## 2026-10-31 — Use recessed source glazing for default windows

**Decision:** Restore default window pixels from the empty illustrated shell, and draw newly placed windows as wall-aligned overlays with a visible cut, glazing, jambs, and sill.

**Reason:** The furnished bitmap's replacement windows read as flat white rectangles. The shell already has recessed blue windows whose perspective matches the raised walls. Added windows need a related visual language and a reveal facing the selected wall side.

**Consequence:** The renderer depends on the shell asset for default glazing. Exterior wall geometry remains fixed; added windows must be checked in Design view and the exported PNG because overlays cannot alter the source bitmap's structure.

## 2026-10-31 — One authoritative layout

**Decision:** Store the editable Roomcraft project with the Second Floor Home Assistant dashboard as `roomcraft_layout`; render a PNG from the same project for the `picture-elements` card.

**Reason:** A PNG alone cannot preserve room geometry, furniture placement, wall edits, or floor choices. Importing the saved project makes the next editing session start from the current dashboard design.

**Consequence:** Dashboard transfer must validate project version and structure, preserve unrelated dashboard views, and verify the saved config.

## 2026-10-31 — Owner-only server bridge

**Decision:** Keep a same-origin Site API route as the optional cloud transport. Keep `HA_TOKEN` in the Site runtime, authorize the owner, and reject cross-origin writes.

**Reason:** A browser editor must not expose an administrator token. The authenticated server route can validate input, upload the image, and save the dashboard through Home Assistant APIs.

**Consequence:** The cloud editor requires its own owner sign-in. The official HA editor uses a separate same-origin Lovelace card and Home Assistant login.

## 2026-10-31 — Preserve the prior dashboard prototype

**Decision:** Mark `ishioho` as legacy for this second-floor authoring workflow, while keeping its source and historical assets in its existing folder.

**Reason:** It is a separate four-theme dashboard prototype with its own tests and history. Moving or deleting its files would break reproducibility and could remove behavior that is still useful elsewhere.

**Consequence:** New second-floor editor work belongs in `roomcraft`; changes to `ishioho` require a separate task and verification.

## 2026-10-31 — Live data outside the layout model

**Decision:** Treat clock, weather, devices, cameras, and vacuum position as runtime adapters, not edits to the room geometry JSON.

**Reason:** Telemetry changes frequently and may be unavailable. It must not create layout revisions or invalidate a designer's draft.

**Consequence:** Runtime adapters use private entity bindings and explicit stale/unavailable states. The vacuum overlay also needs a map-to-plan calibration.

## 2026-10-31 — In-page confirmation for destructive edits

**Decision:** Use an editor-owned confirmation dialog for reset and dashboard overwrite actions, and keep the top Export menu operable during dashboard transfer.

**Reason:** Browser-native dialogs can vary or block in embedded or managed browser contexts, while a disabled Export menu can prevent users from saving a JSON or PNG backup during a long transfer.

**Consequence:** The editor must keep confirmation focus and cancel/confirm behavior accessible, and transfer busy state should disable only actions that would conflict with the active transfer.

