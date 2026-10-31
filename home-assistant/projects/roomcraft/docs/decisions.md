# Decision log

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

**Consequence:** Bind verified devices to objects; show unavailable states; leave unverified bathroom, dressing, balcony, and fan placements unresolved until confirmed. Preserve the old Main Dashboard as a reference and verify the new drawer on the target tablet.

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

