# Changelog

All notable Roomcraft changes are recorded here. Deployment status is tracked separately from a source commit.

## 2026-10-31 — Studio frontend reload guard

- Made `roomcraft-editor-card` and its Home Assistant card metadata registration idempotent if the resource is evaluated more than once. A fourth VM regression test reruns the module and checks that only one card entry remains.
- An affected Chrome Studio tab showed **Configuration error** although the live dashboard configuration and card resource read back correctly; reloading that tab cleared the error. A duplicate registration was a possible failure mode, not a confirmed cause of the observed error.
- If a Studio tab shows the error after an update, reload it. If the embedded editor is blank, use **Open editor in a new tab** and keep Studio open for authenticated import/export.

## 2026-10-31 — Home Assistant Layout Studio

### Added

- Same-origin `custom:roomcraft-editor-card` makes `/second-floor/studio` the official layout editor in Home Assistant. A laptop or tablet uses its HA login; an administrator can publish.
- The card's iframe bridge keeps HA authentication in the parent card and sends only validated dashboard requests and responses to the static editor.
- **Open editor in a new tab** is an authenticated fallback for Chrome sessions that leave the embedded iframe blank. The Studio tab stays open as the same-origin opener while the new tab imports and exports.
- `ha-local/install.py` copies public assets, registers a versioned Lovelace module resource, backs up the dashboard, updates Studio and its plan edit icon, and verifies the saved state. Focused HA card tests cover element preservation and conflict handling.
- The owner-private cloud Site remains an alternate editor for the same saved `roomcraft_layout`; importing after a cross-editor export refreshes a local draft.
- The Floor Plan uses a centered `custom:grid-layout` column so the 3:2 image fits the available viewport height on tablet and desktop without clipping; the prior `card_mod` fit workaround was removed.
- The Second Floor dashboard was set as the default for Ken's Home Assistant profile and moved to the first sidebar position. That profile preference applies across Ken's devices; it is not a setting installed by this repository.

### Deployment scope

- The HA-hosted editor and cloud Site share layout version 2. Home Assistant native Live Home cards continue to own current device, weather, vacuum-map, and working garage-camera state.
- The optional owner-private cloud Site was published as version 12 from source commit `425449a3517d72ff4be264c5b05fdf7eee22a910`. The HA-hosted editor uses the matching shared public source plus its own Lovelace card and installer.
- Static `/local/roomcraft/` files contain no HA token or live dashboard JSON. Direct `editor.html` access does not provide dashboard transfer.
- Responsive browser checks passed at 960 × 600 CSS pixels and 2560 × 1271. The physical Fire tablet was offline, so its actual WebView remains unverified.
- A Studio import/export/readback completed through the new-tab fallback. The live project retained 6 rooms, 33 walls, 13 items, and 7 controls; its newly exported PNG and the current HA Studio screenshot are included in the illustrated manual. The prior editor screenshot is archived.
- A 960 × 600 HA browser preview of the complete Floor Plan was added to the manual. The physical Fire tablet remains unverified while offline.

## 2026-10-31 — Window perspective correction

### Changed

- The Design renderer restores the recessed blue windows from the empty illustrated shell where the furnished bitmap had flat white replacements. This keeps the default windows at the wall's apparent depth.
- The corrected 1536 × 1024 plan was exported to the live Home Assistant Floor Plan and read back; the matching reference and manual graphic are committed with this release. Pre-fix plan captures and the older HA planning illustration are retained in named legacy archives.
- Added windows use cyan inset glazing, dark jambs, a thin sill, and a short cast shadow. Wall-side-aware placement turns their reveal toward the selected side of a vertical or horizontal wall.
- Window overlays draw after edited walls, so a wall repaint does not cover the glazing. The object preview uses matching color and frame cues.

### Verification and limit

- Local preview showed the restored default glazing and a new vertical window aligned with the right exterior wall. Undo removed the new window. Renderer syntax and existing tests passed.
- The illustrated exterior outline remains fixed. A placed window is an overlay and does not cut a structural opening into the source bitmap; check the exported PNG at 100% after editing.

## 2026-10-31 — Active second-floor editor package

### Added

- Illustrated manual with editor, dashboard, object-detail, and reference graphics.
- Current Home Assistant published-plan render as a manual graphic.
- Documented layout model, art pipeline, server bridge, team boundaries, release and rollback process.
- Active Roomcraft project folder and synthetic examples for the public repository.
- Goal, decision, and future-feature logs.

### Current editor behavior

- Furnished 1536 × 1024 plan with editable rooms, interior walls, per-room floor finishes, objects, Home Assistant markers, undo/redo, and local draft recovery.
- Four wall finish choices for both interior walls and the fixed illustrated exterior outline.
- Detailed PNG, editable JSON, and manual Home Assistant YAML exports.
- Owner-only import/export bridge that stores the editable layout in the Home Assistant dashboard and uses revision checks to avoid overwriting a newer edit.
- Dashboard export preserves independent editor, weather, and time overlays plus the `studio` and `live` views.
- Destructive layout actions now use an in-page confirmation dialog, and the top Export menu remains usable while a dashboard transfer is in progress. `npm test` runs the bridge checks.

### Legacy

- The `ishioho` four-theme prototype remains in its project folder as historical work; it is not the second-floor layout authoring source.

## Recording future changes

For each release, include the user-visible change, model migration if any, tested HA and browser versions, verification performed, deployment outcome, and rollback route.

