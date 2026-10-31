# Changelog

All notable Roomcraft changes are recorded here. Deployment status is tracked separately from a source commit.

## 2026-10-31 — Wall-to-wall tablet crop

- Changed the dashboard render to a 1472 × 828 crop of the existing 1536 × 1024 scene (project x20–1492, y96–924). This exact 16:9 presentation brings the house's outer walls near the screen edges without moving or resizing any authored room, wall, or furnishing in the editable project.
- Updated the editor preview and both dashboard transports to map object controls, independent markers, and the camera thumbnail into the cropped picture. The `picture-elements` card records `roomcraft_scene: wall-to-wall-v1`; imports invert that mapping only for marked cards, so existing 3:2 dashboards remain readable. Menu, weather, time, and editor shortcut retain safe viewport positions near the top; the camera frame must be positioned within the visible lower exterior before export.
- Added image-dimension validation and mapping tests. The matching HA-hosted editor exported the cropped image; dashboard readback confirmed the `wall-to-wall-v1` marker, 10 object controls, the moved lower-left camera frame, and top chrome at 3.6%. A private 1920 × 1080 Apolosign capture showed the plan filling the screen nearly edge to edge, with no side gutters and the live porch thumbnail visible. The earlier height-fitted 3:2 result below remains historical. Physical touch alignment and a cloud-to-HA round trip remain separate checks; no live camera frame was published.

## 2026-10-31 — Calendar tablet full-height plan and Home app recovery

- Updated the installed Second Floor `plan` view's grid width from `min(100%, calc((100dvh - 90px) * 1.5))` to `min(100%, calc(100dvh * 1.5))` and filled the view background with a matching green-to-tan gradient. On a private 1920 × 1080 tablet capture after pressing Home, the 3:2 plan occupied about 1612 × 1074 pixels (x154–1765, y5–1078). The narrow side gutters use the gradient instead of black. Weather, time, menu, edit link, and the authenticated porch camera remained visible. All 15 plan picture elements matched the pre-change backup; other dashboard views were unchanged. No HA scene or device command was sent. The private camera frame and capture were not published.
- Set the installed Home Assistant Companion app as the Apolosign Calendar tablet's default Android Home app. The launcher component was already enabled; Android HOME resolution now selects Home Assistant, and the Home key returns to its WebView dashboard. After an app force-stop, the Home key cold-launched `/second-floor/plan` with the layout visible in a private capture. This is the [supported Home Assistant wall-panel path](https://companion.home-assistant.io/docs/integrations/android-home-app-launcher/). A tablet reboot has not yet verified automatic launch.
- Updated the [tablet runbook](docs/tablet-access.md) with a default-Home check, reversible HA/vendor launcher commands, on-device dashboard selection, and supervised reboot acceptance steps. ADB remains a recovery channel rather than a dashboard dependency.
- Read-only reboot diagnostics found `reboot,userrequested` in two Android boot-reason properties and an orderly previous-kernel shutdown log. A vendor Bluetooth HAL tombstone shortly before that boot had no proven causal connection. Scheduled sleep was disabled with no matching pending alarm; power and thermal state were normal during inspection. The recurring-restart cause remains unproven.

## 2026-10-31 — Calendar tablet pairing and remote-access handoff

- Paired the Home Assistant host with the **Apolosign Calendar** wall tablet using Android wireless debugging, connected on the separate current debugging port, and verified `adb devices -l` reported the correct model. The Windows workstation could not reach the pairing port directly in this session; the HA host is the paired ADB workstation.
- Launched the installed Home Assistant Companion app to **Second Floor → Floor Plan**. A private 1920 × 1080 tablet screen capture showed the whole plan, including the new play area and authenticated porch-camera thumbnail. Touch targets, scene actions, camera playback over time, and behavior after reboot were not tested. The capture and live camera frame were not published.
- Added the [tablet and remote access runbook](docs/tablet-access.md) for phone Codex Remote, private HA API/SSH access, ADB reconnection, and frontend recovery. Android pairing trust can persist, while an active ADB connection, current port, wireless-debugging state, desktop Remote availability, and tablet foreground app still require checks. No unattended boot recovery was installed or claimed.
- Backed up the HA add-on's ADB identity into root-only persistent data and verified all three copied files. Set `core_ssh`'s supported `apks` option to `android-tools` through Supervisor and read back the unchanged remaining options and started state. Set Windows AC sleep to Never and verified it, leaving battery sleep at ten minutes. Added a verified user-level Startup shortcut for the installed Codex app. No add-on rebuild, Windows or tablet reboot, or automatic reconnect test was performed.

## 2026-10-31 — Photo-inspired living-room play area, Site v19

- Added 16 searchable catalog variants across 11 illustrated designs inspired by the supplied living-room photo. Search **1977** or **photo** for the multicolor bear-panel play yard, six individual panel colors, gray leaf and brown checker mats, wooden play arch, colorful activity table, teddy floor chair, gray bolster, bunny plush, white mantel with dark tile hearth, and adjacent toy shelf. The new objects use the plan's raised top-down perspective; the original photo and its people are not deployed or published.
- Placed eight independent play-area objects in front of the living-room sofa. Left the mantel and toy shelf in the catalog until the physical fireplace wall can be verified; the current plan's TV and windows do not justify a fixed placement. The mats remain beneath play objects, while a ceiling render pass keeps the existing fan visible above them.
- Published owner-private Site v19 from Site source `5874e8976c0f0bc6dc86a9e9e9e69b13c4fb8c07` and installed matching editor assets in Home Assistant. Studio exported the updated plan. HA readback confirmed layout version 2, six rooms, 36 items including all eight new living-room objects, 10 unique object controls, unchanged fan motor/light scene targets, and the porch camera overlay. No device command was sent.
- The new photo-object art smoke test, Site tests, JavaScript syntax, TypeScript, production build, and Git whitespace check passed. The drawn plan is a visual interpretation, not measured geometry or a pixel-identical recreation of the photo. The later same-day tablet display check is recorded above; the physical fireplace wall still needs an in-room check.

## 2026-10-31 — Engineering handoff consolidation

- Added one [engineering handoff](docs/engineering-handoff.md) with the verified v18 release snapshot, code and data boundaries, first-hour setup, checks, runtime release and rollback path, known limitations, and a prioritized work queue. No new implementation tickets were opened.
- Corrected the layout schema, synthetic example, architecture, layout format, deployment, roadmap, decisions, and entry-point guides for item-derived controls, separate fan On/Off and light-toggle scene targets, dashboard-first loading, and the still-unverified physical tablet and fan room.
- Documentation and schema contract only; no Home Assistant device command or runtime deployment is part of this update.

## 2026-10-31 — Ceiling fan and light scene controls

- The editor and dashboard controls support a one-shot **Run** action for scenes, scripts, and buttons, plus separate tap and hold entity targets. The published fan artwork shows the `switch.ceiling_fan` state while tap runs `scene.ceiling_fan_on_scene` and hold runs `scene.ceiling_fan_off`; its separate 68 × 68 center area runs `scene.ceiling_fan_light_toggle`.
- Read-only Home Assistant and old Main Dashboard checks found no separate fan-light `light.*` entity or on/off state. The three scenes are available; the unsupported wall-switch entity is unavailable. No device command was issued.
- Published the fan provisionally at the living-room ceiling center (canvas position 690, 420) and deployed owner-private Site v18 from source `f019321`. Home Assistant export and exact readback verified 28 editable items, 10 controls, the three fan scenes, the porch camera, and the plan image URL. Browser checks showed rendered fan artwork and both accessible fan and light targets.
- Refreshed the public-safe illustrated plan capture in the user manual with the new fan; the live camera remains a separate Home Assistant overlay and is not present in the image.
- Verification passed 25 Site tests, 16 Home Assistant card tests, and five migration tests. Home Assistant still has no assigned room for this fan; confirm its physical location and move both targets together if needed.

## 2026-10-31 — Dashboard-first editor startup, Site v17

- Aligned the public HA-hosted editor source with the owner-private Site v17 startup behavior. Both editor transports now request the current `roomcraft_layout` when opened, even if that browser has a local draft. **Import from dashboard** remains the manual refresh action for an editor that is already open.
- A different local draft is saved for **Recover previous browser draft** before the dashboard layout replaces it. If Home Assistant is unreachable, the local draft remains usable. A slow dashboard response does not overwrite a drag, an in-progress edit, or an active Inspector edit.
- Synced `ha-local/README.md`, `public/app.js`, `public/editor.html`, and `tests/editor-migration.test.mjs` from the Site source. The user manual and deployment checklist explain the changed startup behavior.
- Published Site v17 from source commit `825c13d0f583ba504e22c80181123843c0d49c19` and reinstalled the LAN editor with a new cache version, a private HA backup, and configuration readback. Browser checks showed both editors loading the current layout with eight control objects; the LAN editor offered **Recover previous browser draft** for its older copy. Some Chrome sessions still need Studio's **Open editor in a new tab** fallback.
- Verification: 23 Site tests, 13 Home Assistant card tests, four migration tests, TypeScript, editor JavaScript syntax, and production build passed. The target Apolosign tablet still needs its own on-device fit and touch check.

## 2026-10-31 — Interactive plan and complete entity drawer

- Published the owner-private Roomcraft Site as version 15 from source commit `52a7394a4ef03068780574ab1969608793b8f45d`. The hosted editor imported the current Home Assistant layout after its previous browser draft was backed up locally.
- Updated the Home Assistant Studio resource and migrated the Floor Plan with two private configuration backups and verified readback. Eight object overlays now cover five existing fixture bindings and three windows; the exterior camera remains at its prior position and uses the verified live porch source. Seven duplicate floating icons were removed.
- The plan drawer opens with nine on-plan entities and can search all 1,760 registered entities, including disabled records. Its six curated groups carry 64 relevant references from the old Main Dashboard; the unrelated feeder is excluded from Robot Vacuum.
- The object itself is the control target. The editor now offers entity lookup, label, icon, tap and hold actions, movable invisible target areas, and a manual YAML export that retains the custom controls. The kitchen switch is labeled for its counter-light circuit.
- Browser verification showed a playing 1920-pixel porch stream and the sofa-window target opening native blind tilt controls. No device state was changed for verification. The owner-private Site, Home Assistant card, and public source were tested with 18 Site tests, 13 card tests, four migration tests, TypeScript, and a production build. The target Apolosign tablet still needs an on-device fit and touch check after its remote developer connection is restored.

## 2026-10-31 — Correct porch feed and shipped drawer documentation

- Updated the floor binding guide and sanitized inventory recommendations to use the verified live HLS source `camera.porch_camera_profile_000` for the upstairs exterior thumbnail. The Eufy front-door camera and latest-event image remain separate inventory entries; the earlier Eufy P2P timeout does not apply to the porch feed.
- Documented all three living-window blind zones, including the small-sofa blind.
- Described the shipped drawer: **On plan**, **All entities**, search, registry availability, and six curated old Main Dashboard sections. The target tablet still needs an on-device fit and touch check.
- Documentation correction only; no Home Assistant or editor code is changed by this commit.

## 2026-10-31 — HA inventory and dashboard handoff documentation

- Added a reviewed, state-free HA metadata snapshot with 1,760 entity rows in JSON and area/domain Markdown. Personal/mobile identifiers, network details, current values, camera media, and credentials are omitted or masked.
- Mapped all 65 direct references in the existing Main Dashboard's six sections, including eight unavailable references and one with no live state at audit time. Template-generated references need a separate review.
- Documented verified and candidate room-to-object bindings, missing room lights, object-level interaction rules, and a proposed compact dashboard menu. Updated the user manual, privacy rules, goals, decision log, and target-tablet terminology.
- This change updates public documentation only. It does not deploy a Home Assistant dashboard, bind devices, or prove fit on the target tablet.

## 2026-10-31 — Movable lighting and authenticated camera thumbnail

### Added

- The bedside lamp is an editable item. Eight room ceiling or pendant fixtures are movable, resizable objects; their optional entity binding produces a state-colored Home Assistant control at the object's position. Existing saved plans migrate once through `editableReferenceVersion`, and a lamp deliberately removed afterward stays removed.
- The catalog now includes a camera thumbnail. The Inspector accepts a `camera.*` entity, optional `image.*` latest-event entity, and preview mode. The design canvas uses a drawn placeholder; the HA plan derives a `custom:roomcraft-camera-thumbnail` element from the saved item's geometry.
- The HA element fetches same-origin event images with the signed-in HA session, labels the event time, opens native camera details on tap, and reports unavailable media. It uses a native live view only when HA already reports an active stream. The cloud and LAN bridges replace only Roomcraft-managed camera overlays and retain unrelated plan elements and dashboard views.
- Corner handles resize selected objects, with Shift preserving proportions. A public synthetic binding diagram, schema/example updates, and a Roomcraft-only GitHub CI workflow support future team changes.

### Verified

- The LAN Studio export succeeded and HA readback confirmed 23 items, seven controls, one managed camera overlay, and a 1536 × 1024 uploaded PNG. Weather, clock, and the Studio edit link remained on the plan. The latest-event still displayed with its timestamp, and tapping it opened native camera details.
- The owner-private cloud Site was published as version 14 from source commit `220c3c96ee9a791616a2065b2125abca55c76b4c`; dashboard import was verified there. A matching public-safe rendered plan PNG with a drawn camera placeholder is included in this manual.
- Editor tests, LAN card tests, JavaScript syntax checks, the Site build, and the synthetic layout schema/example check passed. The public manual uses fictional entity IDs and a drawn camera frame; no live frame or installed entity inventory was added to GitHub.

### Limits

- The tested battery doorbell's P2P live stream times out, so its verified dashboard thumbnail is labeled **Latest event**. It does not claim to be live video.
- Rugs, some nightstands and cabinetry, and sinks remain baked into the supplied single PNG. The prominent furniture, bedside lamp, room fixtures, and new catalog objects have editable placement. The illustrated exterior outline remains fixed.
- The target Apolosign Calendar tablet was not checked with this Roomcraft release; a browser-sized preview does not replace an on-device test. The optional cloud Site and HA-hosted editor are separate deployment targets.

## 2026-10-31 — Studio frontend reload guard

- Made `roomcraft-editor-card` and its Home Assistant card metadata registration idempotent if the resource is evaluated more than once. A fourth VM regression test reruns the module and checks that only one card entry remains.
- An affected Chrome Studio tab showed **Configuration error** although the live dashboard configuration and card resource read back correctly; reloading that tab cleared the error. A duplicate registration was a possible failure mode, not a confirmed cause of the observed error.
- If a Studio tab shows the error after an update, reload it. If the embedded editor is blank, use **Open editor in a new tab** and keep Studio open for authenticated import/export.
- The owner-private Site was deployed as version 13 from source commit `120e286440c234c6dea8b5ea2533d2b4d396311a`. Browser QA found no Configuration error after reloading the affected Studio tab; the own-tab editor displayed 7 controls and its Import/Export actions. The live project and plan image stayed unchanged.

## 2026-10-31 — Home Assistant Layout Studio

### Added

- Same-origin `custom:roomcraft-editor-card` makes `/second-floor/studio` the official layout editor in Home Assistant. A laptop or tablet uses its HA login; an administrator can publish.
- The card's iframe bridge keeps HA authentication in the parent card and sends only validated dashboard requests and responses to the static editor.
- **Open editor in a new tab** is an authenticated fallback for Chrome sessions that leave the embedded iframe blank. The Studio tab stays open as the same-origin opener while the new tab imports and exports.
- `ha-local/install.py` copies public assets, registers a versioned Lovelace module resource, backs up the dashboard, updates Studio and its plan edit icon, and verifies the saved state. Focused HA card tests cover element preservation and conflict handling.
- The owner-private cloud Site remains an alternate editor for the same saved `roomcraft_layout`; importing after a cross-editor export refreshes a local draft.
- The Floor Plan uses a centered `custom:grid-layout` column so the 3:2 image fits the available viewport height on tablet and desktop without clipping; the prior `card_mod` fit workaround was removed.
- The Second Floor dashboard was set as the default for the owner's Home Assistant profile and moved to the first sidebar position. That profile preference applies across the owner's devices; it is not a setting installed by this repository.

### Deployment scope

- The HA-hosted editor and cloud Site share layout version 2. Home Assistant native Live Home cards continue to own current device, weather, vacuum-map, and working garage-camera state.
- The optional owner-private cloud Site was published as version 12 from source commit `425449a3517d72ff4be264c5b05fdf7eee22a910`. The HA-hosted editor uses the matching shared public source plus its own Lovelace card and installer.
- Static `/local/roomcraft/` files contain no HA token or live dashboard JSON. Direct `editor.html` access does not provide dashboard transfer.
- Responsive browser checks passed at 960 × 600 CSS pixels and 2560 × 1271. The target Apolosign Calendar tablet's actual WebView was not checked with this Roomcraft release.
- A Studio import/export/readback completed through the new-tab fallback. The live project retained 6 rooms, 33 walls, 13 items, and 7 controls; its newly exported PNG and the current HA Studio screenshot are included in the illustrated manual. The prior editor screenshot is archived.
- A 960 × 600 HA browser preview of the complete Floor Plan was added to the manual. The target tablet remains unverified for this release.

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

