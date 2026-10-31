# Decision log

## 2026-10-31 — One authoritative layout

**Decision:** Store the editable Roomcraft project with the Second Floor Home Assistant dashboard as `roomcraft_layout`; render a PNG from the same project for the `picture-elements` card.

**Reason:** A PNG alone cannot preserve room geometry, furniture placement, wall edits, or floor choices. Importing the saved project makes the next editing session start from the current dashboard design.

**Consequence:** Dashboard transfer must validate project version and structure, preserve unrelated dashboard views, and verify the saved config.

## 2026-10-31 — Owner-only server bridge

**Decision:** Use a same-origin Site API route for Home Assistant transfer. Keep `HA_TOKEN` in the Site runtime, authorize the owner, and reject cross-origin writes.

**Reason:** A browser editor must not expose an administrator token. The authenticated server route can validate input, upload the image, and save the dashboard through Home Assistant APIs.

**Consequence:** The private editor requires its own owner sign-in. Home Assistant's dashboard entry can link to it, but iframe embedding is not a required dependency.

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

