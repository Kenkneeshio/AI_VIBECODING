# Decision log

## Radar zone and character presentation

Use the same calibrated plan transform for the sensor's configured XY bounds and its target positions. The coverage toggle is a local display preference, and Studio can preview the saved bounds when a switch is selected. Occupancy and target freshness still come from Home Assistant. Assign the preferred character styles to active tracks without identifying people, and animate the pose without adding motion to the radar coordinates.

## Consolidate Home and Studio in one dashboard

Keep the wall tablet on Home for everyday use and open Studio for editing. Put device discovery, status summaries, system health, object models and presence in popups. Main Dashboard remains an independent Home Assistant dashboard.

Store the editable project, complete projected picture card and optional health configuration at the root of Roomcraft Home. The 2D view in Studio remains an editing tool. Retaining the projected card as data preserves the export image and the existing control, camera, weather and utility definitions without exposing a separate Floor Plan page. The installer keeps the old registration during readback and validation so recovery can use the private archives.

## Render tracked characters above the scene

The floor projection resolves the sensor's calibrated position, even where a wall or piece of furniture occludes it in 3D. Draw fresh characters and their rings in a separate foreground pass using the same camera and coordinates. Keep the room lighting, weather and time unchanged by the tracking layer. Expiry and invalid-floor rules still apply. The synthetic wall-and-cabinet reproduction showed that the previous renderer hid valid positions.

## Keep everyday controls on Roomcraft Home

The following records the previous sidebar-only cleanup.

Give a wall-tablet user one current Roomcraft entry and keep Main Dashboard available. Second Floor holds the saved project and the existing Studio, Floor Plan and System Health paths, so it stays registered with its sidebar entry hidden. Preserve the prototype's dashboard metadata and configuration in the private archive before removing its registration. The user and system defaults stay on their existing dashboards.

Group the live menu under On the map, View controls and Manage. Reuse Floor Plan's object detail preference so the two surfaces agree, and place labels beside the controls. The live header owns the animated sun, moon, clouds and current weather. The saved layout continues to own object placement, while live weather stays in the presentation.

Treat detailed radar updates as their own render input. The second status dot distinguishes mapped targets, presence without a mapped target, clear and unavailable. The original red and green dot shows dimmer power. Larger characters improve visibility on a wall tablet. Placement still uses the saved calibration and valid floor geometry.

## Keep radar telemetry local and separate from the saved plan

The household can preview where the switch detects movement and see recent radar counts on the tablet. Keep the switch paired with ZHA and attach a local listener to its existing radar cluster. An administrator enables detailed reporting for one device at a time. Stock occupancy remains an independent automation input. An explicit vacancy can report zero, while silence alone leaves count unknown.

The presence switch stores the source entity and a measured plan transform. Authenticated Home Assistant surfaces use fresh positions to animate anonymous characters, and the live menu reports recent counts and zones. The private Site can edit the binding and transform. Coordinates, track IDs and timestamps stay in Home Assistant runtime state and outside the saved project, exported art and Recorder attributes. [Inovelli radar report contract](https://help.inovelli.com/en/articles/12773613-blue-series-mmwave-presence-dimmer-switch-advanced-mmwave-configuration)

## Browse models from either surface and author through Studio

Studio and Roomcraft Home use a shared catalog and searchable library for placed objects, available devices, and models. A live action opens Studio with one same-origin session handoff. Device identifiers stay out of the navigation URL. Studio validates the action against the current layout and keeps it in the browser draft until publication. Compatible model swaps retain the item identity, binding and footprint.

Width and depth remain in plan units. An optional 3D height scales the model around its authored support plane. Stair, window and interface geometry use their own established controls. Fish and lizard movement uses deterministic scene time and respects reduced motion. The 2D drawing stays stable for exported images.

## Author ledge railings and store the camera as a preference

Reference revision 9 adds the missing guards to the known upstairs decks as editable fence segments. It uses their existing finish and leaves the actual stair opening and house entrances clear. The common renderer keeps deck guards level and follows the stair slope along the existing flight rail. The live thumbnail placer gives the projected stair and rails room when it can keep the camera tile in reach.

A saved Free view is a presentation preference for the Home Assistant user and source dashboard. Saving records the heading, tilt, and zoom. Layout import and export leave it alone. The signed-in Home Assistant Studio and Roomcraft Home read the same setting, while the private web editor uses browser storage. [Home Assistant frontend user data](https://github.com/home-assistant/core/blob/dev/homeassistant/components/frontend/storage.py)

## Keep the upper floor and the ground level distinct

The home, porch and upper landing share one second-floor elevation. The authored stair rises from its local negative Y end on grade to its positive Y end at the landing. Each view derives the treads and ground approach from that object, so rotating or moving it also moves the approach.

A detached garage sits on the ground plane while its saved coordinates remain in the shared 2D plan. Studio uses the object's elevation when projecting its placement and drag. The dashboard projects the door and camera targets through the active camera from their own scene positions. Elevation is derived from the layout and object type, so existing layouts need no migration.

## The saved project owns every structural piece

Reference revision 8 converts the old shell into editable deck polygons, one stair object and fence segments. Existing solid wall and window geometry carries forward. Studio and Roomcraft Home share a projection from those records, so a deleted wall stays deleted and a new fence can appear in the 2D plan and 3D views. The furnished illustration remains available in Reference.

The dashboard reloads the published layout on Home Assistant's [Lovelace update event](https://github.com/home-assistant/frontend/blob/dev/src/data/lovelace.ts). Studio's Dashboard look uses a read-only appearance snapshot from its latest import. The snapshot stays in memory while authors edit and remains separate from the layout.

## Free view makes the canvas a camera control

Free view is an explicit camera mode shared by Roomcraft Home and Studio. Starting Free view keeps the current heading and zoom and lifts an overhead view to a slight angle. Dragging or pinching is handled on the canvas. Dashboard overlays keep their own tap targets, and Studio uses a separate mode for canvas editing so an orbit cannot move a furnishing.

## Restore the source plan and join walls in project space

The owner-marked Floorplanner plan defines the room and passage topology. The approved Roomcraft illustration defines the current plan coordinates, stair orientation and removable door leaves. Reference revision 7 applies measured fixes to stock wall and floor groups and reorients the stock bed. The published layout keeps its version 2 schema, device bindings and project dimensions.

Studio snaps endpoints to corners and wall centerlines within 18 project pixels. The batch join is an explicit undoable edit and shares the same geometry operation used on the traced kitchen and bath seam. The 3D renderer unions wall sections at one cap height, retains openings and removes hidden coplanar faces. The 2D raster baseline follows the corrected reference so Studio does not paint a second wall over the same artwork.

## One camera contract serves the dashboard and Studio

Use explicit orthographic view inputs for preset, azimuth, tilt and zoom. Top down has zero tilt and a fixed north-up orientation. Dollhouse and Corner projections fit the same scene bounds. The scene renderer projects media and control targets through the active camera, while Studio maps pointer movement back onto the floor plane for object edits.

Camera choices live in the client viewport. Geometry edits still run through the existing editor history and publishing workflow. Room and wall tools return to the 2D plan so their current handles and snapping remain available. The editor's generated 3D bundle is checked against its pinned source before a production build.

## Roomcraft Home presents the finished Storybook scene

The new dashboard owns presentation. The Second Floor dashboard still owns the authored plan, bindings, and Studio. A separate promotion command backs up the authenticated profile, verifies the new view, and changes only that profile's default. The tablet follows that selection through Home Assistant Companion.

Wall and floor joins are repaired during 3D scene construction. The layout and its door and window positions stay in the shared source format. Directional shadows are computed once for static geometry. A small pool of lights follows Home Assistant brightness and color while each lamp retains its own visible state. This bounds the work per frame on the wall tablet.

## Storybook uses the published layout and the existing device controls

Household operators can try a consistent 3D art style on a separate Home Assistant panel. The renderer derives walls, floor finishes, furniture, device placements, and interaction anchors from layout v2. The supported camera is orthographic and fixed, so object positions stay familiar. The preview infers height and cutaway depth from deterministic recipes. Layout v2 stores no measured heights or generalized 3D asset metadata.

Scene construction, geometry recipes, device pose, and the Home Assistant adapter have separate modules. Reusing the published plan's existing device gestures and camera modes lets Studio retain one source of truth. Home Assistant supplies live state to the panel and keeps media outside the WebGL scene. The bundle is served by Home Assistant, built from pinned dependencies, and does not ship credentials or private layout data. Animation is driven by explicit time and HA state. The floor plan is available as the fallback for WebGL and layout errors.

## 2026-11-09 — Version editor assets as a unit and draw fixtures from scene records

The editor's stylesheet, scripts, and art share a content-derived cache key. Home Assistant serves static assets with a long cache lifetime. Keeping the same renderer URL across releases let a browser combine current project data with a renderer that still drew removed furnishings. The release gate checks the key against the public asset tree, and the Design renderer uses the empty shell or the procedural fallback while its assets load. The furnished image belongs to the Reference view.

The three rugs, kitchen worktop, bathroom fixtures, and the two bedroom storage pieces use deterministic canvas artwork tied to their existing item IDs. The maintainer can replace a material or detail without editing the floor image or migrating existing placement. The HA migration applies only reference additions newer than the input's migration marker, preserving deletions from earlier versions.

## 2026-11-09 — Audit the shell and separate physical controls

**Decision:** Maintain an explicit list of every non-architectural feature inherited from the supplied shell images. Repair those pixels as architecture below the scene, then represent the feature as an item. Version 6 converts the last lavender wall unit. A combined physical fixture uses one item per independently controlled circuit: the dining fan motor is a five-blade fan item and its light is a separate ceiling-light item at the hub. Garage-door state is represented by a detached-garage object whose door panel—not its whole building—animates.

**Reason:** A visually empty project is only trustworthy when its base contains architecture alone. Reference mode also cannot be allowed to masquerade as the editable result. Likewise, one combined fan graphic over two switches creates overlapping hit regions and ambiguous state feedback, while collapsing an entire garage graphic to show an open door makes the building look physically impossible.

**Consequence:** Clear and restore force Design view. Source windows and the wall unit have deterministic repair recipes and ordinary scene records. Fan and light retain independent entity IDs, state dots, touch feedback, selection, movement, and animation. The detached garage retains the current cover entity, but state CSS transforms only its door pseudo-element. Empty-scene, migration, and live-state tests are required for future shell or combined-device changes.

## 2026-11-09 — Every removable visual is a scene item

**Decision:** Treat the clean architectural shell as structure only. Rugs, windows, furniture, fixtures, lights, controls, and decorative objects must be represented by version-2 `items` and rendered exclusively from the shared scene partition. Use reference migration version 5 once to convert the remaining three rugs, eight original windows, and five source-backed furnishing groups into items. Cover the old PNG window apertures with deterministic wall repair beneath the opening layer; do not treat that repair as an object.

**Reason:** Unconditional renderer calls created two sources of truth. Deleting the editor record could not remove a rug or furnishing that the raster renderer painted again on every frame, and original windows had no records at all. A single scene model makes selection, move, resize, rotation, deletion, import/export, undo/redo, and restoration agree.

**Consequence:** `project.items` is the complete inventory of removable visuals. **Remove all objects** may empty that collection while preserving rooms, floors, and walls. **Restore reference layout** derives only from the versioned reference item registry. Migration 5 is one-time and idempotent: after its marker is saved, intentionally deleted objects never respawn on load. New renderer work must include an empty-scene regression proving that no removable visual is painted outside the item pipeline.

## 2026-11-09 — Model furniture as crafted products with authored variants

**Decision:** Supersede the flat/toy-like interpretation of the original cozy recipes with detailed, realistic miniature construction while preserving stable catalog and layout IDs. Model a furniture family with explicit collection, series, design, size, material, and finish metadata. Style and Size select a catalog product and apply its authored width/depth; Finish preserves user geometry while changing material/color. Render each product in its actual local dimensions with deterministic material, seam, joinery, hardware, leg, bevel, highlight, and shadow operations. Treat beds as a matrix of distinct constructions and real footprints, including crib, toddler, twin, full, queen, and king variants.

**Reason:** A single stretched silhouette cannot communicate whether a bed is a crib, storage bed, canopy, daybed, or bunk, and non-uniform canvas scaling makes furniture look distorted. Layout authors need believable options that both look intentional and occupy credible space. Separating product identity from finish also prevents a color change from unexpectedly resizing a carefully placed object.

**Consequence:** Layout version 2 does not change: the selected stable catalog `type` plus persisted `w` and `h` remain the portable authored result, while catalog variant metadata stays in source. `inventory.js` owns variant relationships and authored footprints; `catalog-variants.js` owns deterministic choice resolution and update semantics; `object-art.js` owns material-aware drawing. The old `cuteFurniture` and `cuteLight` strings remain compatibility recipe-family names only. Tests must prove deterministic ordering, stable IDs, finish-preserved custom geometry, authored size/style geometry, distinct bed construction traces, monotonic shared-family footprints, balanced canvas state, bounded operations, and Android-safe rendering.

## 2026-11-09 — Use original data-driven cozy creature-world art recipes

**Status:** Superseded in visual direction by “Model furniture as crafted products with authored variants.” Stable IDs, original-art restrictions, and data-driven ownership remain in force.

**Decision:** Give furniture and lights stable catalog IDs, named palettes and forms, explicit render layers, and code-native vector recipes shared by editor previews and exports. Use broad rounded, toy-like, dollhouse qualities without copying a branded character, logo, recognizable silhouette, name, or game asset. Preserve each validated light silhouette through Home Assistant with `table_lamp`, `bud_lamp`, `cloud_floor_lamp`, `bloom_ceiling`, `star_pendant`, and `acorn_sconce` forms.

**Reason:** A cohesive friendly visual language makes the layout easier to read and extend, but a direct franchise imitation would be neither reusable nor professionally maintainable. Data-driven recipes keep finish variants deterministic and let future engineers add forms without baking room floors or private state into the art.

**Consequence:** `inventory.js` owns searchable recipes and stable metadata; `object-art.js` owns deterministic vector forms; the render contract owns layer placement; both dashboard bridges validate `lightForm`; and the live card alone adds truthful state treatment. Unknown light forms fall back to `table_lamp`. Furniture keeps an opaque semantic core, ceiling fixtures remain on `ceiling-devices`, and no renderer may use random marks, clock input, GPU-dependent blur, or copied franchise assets.

## 2026-11-09 — Keep floor, fixed structure, movable furniture, and live effects in distinct layers

**Decision:** Author the office workstation, master rug, bedside furniture, desk lamps, humidifier, and baby-area furnishings as semantic objects in their correct layer. Use migration version 4 once to correct the known office geometry and add the missing credenza, nightstand, and lower dresser. Keep the dining set at its intended four chairs. Do not use broad raster crops or duplicate contact shadows to reconstruct movable furniture.

**Reason:** Raster furniture fragments carried perspective-baked floor, shadows, and clipped neighboring pixels. When combined with authored objects, they produced a shallow incorrect desk, a skewed rug, floor bleed, and some dark tabs. Android raw-export comparison showed that the remaining isolated bars—with impossible magenta and green pixels—were WebView/GPU corruption triggered by canvas `shadowBlur`, not valid scene content. Separate semantic objects and deterministic shadows preserve clean floors, movable geometry, stateful controls, and a consistent overhead perspective across browsers.

**Consequence:** Editor export and the HA live card must share the polished desk-lamp form, while HA alone supplies its truthful on-state glow and 4-pixel state dot. Humidifier mist remains state-driven runtime art. The editor, object-art, and raster renderers use layered offset shapes rather than canvas `shadowBlur`; exterior window replacements overdraw the complete old sill/reveal. Migration additions are placed beneath live controls and must not be reapplied after version 4, so later user positioning remains authoritative. Any future furniture correction should change the semantic object or explicit migration rather than patching the base floor image.

## 2026-11-09 — Dashboard interface geometry is layout data

**Decision:** Store the sun/moon anchor, clock, device menu, editor shortcut, indoor-air badge, and electrical badge as ordinary version-2 `items`, alongside the already-editable camera thumbnails. Keep weather telemetry and its full-screen exterior mask in Home Assistant; only the celestial anchor geometry belongs to the layout. The current dashboard project loaded by the editor is the reset/default target.

**Reason:** Users should not need code changes to move interface art, and importing/exporting a layout must preserve the complete composition. Separating geometry from authenticated state keeps the editor portable without publishing private entities or freezing live values into the plan.

**Consequence:** Both dashboard transports must map these item types identically. A project without them receives migration version 3 defaults once; intentional later removal is preserved. UI items never render into the clean plan PNG.

## 2026-11-09 — Bind animation and action to the same physical state

**Decision:** Use the verified four-channel kitchen switch directly: channel 3 is the dining fan light and channel 4 is the dining fan motor. Each illustrated object toggles its channel, reads that channel for feedback, and opens native details on hold. Keep action scenes out of these two object bindings.

**Reason:** A control must not animate from a scene timestamp or an unrelated legacy switch. The direct channel is both the command target and the observed state, so off, on, unavailable, glow, and rotor motion cannot contradict one another.

## 2026-11-09 — Make animated appliances reusable device forms

**Decision:** Keep one generic `roomcraft-object-control` element and add small validated forms (`table_lamp`, `humidifier`, `air_purifier`) instead of creating a custom card for every appliance. Forms may change only the art; the bound entity still owns state and action. Moving objects such as fans and robots are omitted from the clean PNG and rendered once as live overlays.

**Reason:** Separate state, geometry, and visual-form contracts let teams add art or integrations independently, prevent frozen duplicates, and preserve the editor/dashboard round trip.

## 2026-11-09 — Keep status summaries independent and non-operating

**Decision:** Electrical and indoor-air summaries are independent `roomcraft-status-popup` elements. Their markers may animate and classify severity; opening a row emits native more-info only. They never toggle an entity.

**Reason:** Whole-home electrical and air measurements need quick visibility but are not room objects and must not become accidental control surfaces.

## 2026-11-08 — Animate only verified physical state; calibrate vacuum coordinates privately

**Decision:** Treat a device action target and a physical-state signal as separate contracts. The private ceiling fan keeps its On/Off scenes but no longer uses `switch.ceiling_fan` for animation because that entity reported on while the physical fan was stopped. The rotor remains neutral and still until trustworthy motor feedback exists. For the Dreame robot, accept an optional six-value affine `vacuumPositionTransform` that maps authenticated map-camera coordinates into plan pixels; store installation coefficients only in the private dashboard.

**Reason:** Last-run scenes and stale or semantically incorrect switches can make decorative motion contradict the real home. Vacuum map coordinates are useful live telemetry but use a different coordinate system from the authored floor plan.

**Consequence:** Active vacuum motion and brush animation require both an active vacuum state and a fresh calibrated map position. Stale active data freezes; docked state parks at the last calibrated coordinate; reduced motion disables transitions. Fan animation requires verified motor feedback and cannot be inferred from an action scene. Public code contains the generic transform contract and synthetic tests, never the home's coefficients.

## 2026-10-31 — Return to the dashboard without losing an editor draft

**Decision:** Put **← Dashboard** in the editor header. The HA-hosted editor uses its same-origin Second Floor route; the owner-private Site accepts a validated dashboard URL returned by its authenticated API. Before navigation, compare the current project to the last imported or exported project. If edits are unpublished, ask the user, save the browser draft synchronously, and only then navigate the top-level page. A transfer in progress, missing destination, or failed draft save prevents navigation.

**Reason:** The layout editor and live panel are two modes of the same workspace. A direct return path is simpler on a wall tablet, but leaving during an export or with unsaved local work could hide a change or interrupt a transfer. The cloud Site cannot safely hardcode a private HA address.

**Consequence:** Returning to the panel does not publish changes. The user must export to HA for the wall panel to update, or recover the browser draft later. Tests cover both editor contexts, cancellation, preserved edits, and destination validation. The API may reveal the destination to the authenticated owner, but it must never include credentials or a stream URL.

## 2026-10-31 — Model the office's single desk lamp as one object

**Decision:** Keep one editable `lamp` item on the office desk, using the bedroom-style perspective sprite and the office light as its sole state source. Remove the separate study ceiling-fixture item from the private project and replace that starter fixture with the desk lamp in the default list.

**Reason:** The office contains one physical desk lamp. Two illustrated fixtures bound to the same light incorrectly suggested two devices and made the plan harder to edit.

**Consequence:** Dashboard export should derive one office light control from one movable object. Importing an old private layout may still bring back the prior fixture, so check for and remove it during migration without deleting unrelated user edits. A reference bitmap can retain baked light pixels, but the editable layer and controls must not invent a second physical fixture.

## 2026-10-31 — Treat camera events and outdoor forecasts as runtime overlays

**Decision:** Keep three camera frames as separately authored `cameraThumbnail` items. Use `event_live` with configured binary sensors for the doorbell, `live_auto` for an overhead ONVIF camera that may play while its HA entity says `idle`, and tap-start `live` for the garage. The doorbell opens a bounded 60-second live attempt after a ring/person `on` edge, then returns to the dated latest-event image. Label media **LIVE** only after decoded playback evidence. Put current and next-12-hour weather, day/night, and moon phase in one independent HA picture element whose art is clipped to exterior rectangles. Keep the layout JSON and rendered base PNG free of live device/weather/media values.

**Reason:** Battery doorbells should not stay live between events; an event can fail to establish a stream, so the last image must remain useful. An always-playing ONVIF stream may report `idle`, so camera entity state alone is not enough evidence of playback. Forecasts describe future conditions; they must be visibly previewed as future and use actual timestamps. The exterior mask preserves room visibility and touch targets. Independent modules and item IDs let camera, editor, and weather teams change their code without moving the house geometry.

**Consequence:** Both export bridges validate the same camera mode and `eventEntityIds` contract. The HA card owns camera timers, event-service calls, media decoding, and still fallback. The weather module calls HA's hourly forecast service through the signed-in session and uses HA's sun, moon, and time zone data. The installer registers both versioned Lovelace resources. Scene-only fan-light controls remain neutral until a stateful HA entity exists; they cannot borrow a motor state or infer light state from the last scene run. Verify on the actual tablet before marking the release deployed. See [live object graphics](live-object-graphics.md) and [deployment](deployment.md).

## 2026-10-31 — Device state belongs on the object; camera media stays in Home Assistant

**Decision:** Keep the editable layout and rendered PNG free of live values. A bound item's optional `visualKind` selects a high-contrast device treatment; Automatic infers a kind from its catalog type, state entity, and label. The HA overlay reads the bound state entity, uses explicit active/inactive lists, and shows unrecognized or unavailable values neutrally. Scene/script/button actions are ready controls, never invented on/off state. The fan's five-blade rotor uses stepped motion only from its motor switch; reduced-motion preference stops it. Exterior and garage camera frames are independent `cameraThumbnail` items backed by separate authenticated HA feeds.

**Reason:** The object is already the control target, so its live appearance conveys state without adding a separate button. A static export cannot represent changing light, fan, climate, cover, or door state. Two camera frames must not share media or failure states. Low-frame-rate and reduced-motion behavior keeps the wall tablet usable.

**Consequence:** Both export transports, manual YAML, HA card, layout schema, and Inspector must agree on `visualKind` and the derived `roomcraft_visual_kind`. State values and camera frames never enter project JSON or public assets. The current front-door tile uses a dated latest-event image because live playback is unavailable; the garage tile starts streaming only after a tap and labels itself **LIVE** only after decoding a frame. Check on/off/unknown, scene-ready, motion preference, camera preview/stream/unavailable states, and accessible feedback before treating the release as complete. See [live object graphics](live-object-graphics.md) and [deployment](deployment.md).

## 2026-10-31 — Preserve the entire house width in the 16:9 scene

**Decision:** Render the existing 1536 × 1024 editable project at its original pixel scale across the complete x0–1536 width, cropping only y80–944 to make a 1536 × 864 display image. Keep all authored geometry in project coordinates. Export `roomcraft_scene: full-width-v1` and map overlay y positions by `(y - 80) / 864`; x positions use `x / 1536`. Import reverses this mapping for marked independent markers and still recognizes the earlier `wall-to-wall-v1` crop and unmarked 3:2 cards.

**Reason:** The first 16:9 crop removed 20 pixels from the left and 44 from the right. The owner wants every side of the house visible, slightly farther out, while retaining the full-width tablet presentation. Removing only top and bottom margins meets that request without changing room dimensions or perspective.

**Consequence:** The editor preview, PNG export, both dashboard bridges, manual YAML, and HA image validator must agree on 1536 × 864 and `full-width-v1`. Previous crop and legacy imports remain readable. HA readback and a private 1920 × 1080 tablet capture verified the full-width image, both exterior sides, and no gutters; physical touch alignment still needs its own check. The 1472 × 828 result remains historical evidence. See [layout format](layout-format.md) and [deployment](deployment.md).

## 2026-10-31 — Earlier wall-to-wall crop (superseded)

**Decision:** Render a 1472 × 828 crop of the existing 1536 × 1024 project, using source x20–1492 and y96–924. Keep authored room, wall, item, and independent-marker coordinates in the established project space. Convert only presentation coordinates when placing Home Assistant overlays, and mark the cropped `picture-elements` card `roomcraft_scene: wall-to-wall-v1` so imports reverse the conversion. Preserve weather, time, menu, and editor controls as viewport chrome; move the camera thumbnail within the visible lower exterior.

**Reason:** The prior 3:2 image reached the tablet's height but left side gutters. The owner's clarified requirement is for the house's outer walls to reach the tablet edges. A source crop uses the 16:9 screen without altering the underlying home geometry, furnishing positions, or perspective. A marked reversible mapping protects editable projects and older dashboard images from a silent coordinate migration.

**Consequence:** The exported image is exactly 16:9. Project coordinates remain 1536 × 1024; the presentation omits 20 pixels at left, 44 at right, 96 at top, and 100 at bottom. Both the HA-hosted and cloud transports must apply the same x/y/size transform and inverse for marked independent markers; unmarked legacy cards import as before. The porch camera frame must fit inside the cropped exterior. Visual and touch alignment on the physical tablet must be checked after deploying the matching editor, card, image, and dashboard view together. See [layout format](layout-format.md) and [deployment](deployment.md).

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

**Superseded 2026-11-09:** The owner identified the fan as the dining fan and verified its motor/light as channels 4/3 of the four-channel kitchen switch. The newer direct-binding decision at the top of this file controls.

**Reason:** The old Main Dashboard uses distinct scenes for these commands. Home Assistant exposes no independent `light.*` state for the fan light, and its scene timestamp cannot truthfully indicate whether the light is on.

**Consequence:** The center target says **Ready** or **Toggle light** rather than showing a fabricated on/off state. Move fan and center target together if its actual room differs. Keep scene activation, target-entity, and export-parity tests in both transports.

## 2026-10-31 — Use the verified porch feed for this floor

**Historical decision, superseded by the current camera behavior above.** The ONVIF source later became unreachable, and the current floor uses the actual front-door camera's dated event still plus a separate garage stream that starts on tap. This entry remains as the reason for the earlier binding and is not a deployment instruction.

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

**Consequence:** Bind verified devices to objects; show unavailable states; leave unverified bathroom, dressing, and balcony placements unresolved. Preserve the old Main Dashboard as a reference and verify the new drawer on the target tablet. The later 2026-11-09 decision confirms the dining fan's direct channels and supersedes the provisional fan placement/binding described by this older entry.

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

**Consequence:** Runtime adapters use private entity bindings and explicit stale/unavailable states. A generic vacuum affine transform is now supported and the private project has a calibration; future work should add graphical calibration and map-identity validation.

## 2026-11-09 — Floors are canonical background layers

**Decision:** Render the clean architectural shell first, then room-wide floor replacements, rugs and fixed decor, movable furniture, live controls, walls, and windows. Never erase baked furniture with a furniture-sized texture rectangle.

**Reason:** Local patches cannot preserve plank continuity, lighting, or room-wide perspective and remain visible even when their texture is similar. A clean shell plus transparent object cutouts gives every room one continuous floor and keeps furniture independently editable.

**Consequence:** Source-backed furniture must be extracted against `empty-shell.png`; new non-movable room details need an explicit transparent fixed-decor layer. Tests must assert that the shell—not the furnished reference—is the renderer's base image.

## 2026-11-09 — Furniture uses opaque semantic cores

**Decision:** Combine each source-backed object's authored silhouette as an opaque material core with color-difference alpha only at its shadow/edge. Do not stack a second generic object illustration beneath a source sprite.

**Reason:** Color distance alone removes pale or floor-colored material pixels, while a second illustration introduces mismatched outlines and duplicated details. The semantic core preserves exact reference pixels and prevents floor bleed without mixing art styles.

**Consequence:** Every source-backed furniture family needs a tight shape specification. Complex furniture that cannot be represented by a tight silhouette—such as the office L desk—uses one purpose-built vector layer instead of disconnected source fragments.

## 2026-10-31 — In-page confirmation for destructive edits

**Decision:** Use an editor-owned confirmation dialog for reset and dashboard overwrite actions, and keep the top Export menu operable during dashboard transfer.

**Reason:** Browser-native dialogs can vary or block in embedded or managed browser contexts, while a disabled Export menu can prevent users from saving a JSON or PNG backup during a long transfer.

**Consequence:** The editor must keep confirmation focus and cancel/confirm behavior accessible, and transfer busy state should disable only actions that would conflict with the active transfer.

## 2026-11-09 — One deterministic engine beneath every editor surface

**Decision:** Keep the approved illustrated canvas backend, but move identity, canonical data, migrations, edit evidence, layers, asset contracts, and verification into the versioned `RoomcraftEngine`. Core engine modules cannot read the DOM, network, Home Assistant, device state, wall clock, randomness, or machine-specific paths.

**Reason:** The editor had been its own implicit engine: array position controlled paint and hit order, object IDs depended on time, raw JSON key order affected equality, and art could silently change with asset timing. Those behaviors cannot be reproduced reliably by another engineer or customer installation.

**Consequence:** Layout v2 and current art remain compatible while the UI delegates through a stable facade. Equivalent inputs and edit sequences must produce the same project, IDs, command-log digest, render-plan digest, and release manifest. Future gesture-specific reducers, dashboard transforms, and art backends extend the same engine instead of creating parallel models.

## 2026-11-09 — Put the interface-control family at the bottom

**Decision:** Place Layout Studio, indoor-air, and electrical controls as one 48 × 48 bottom-right row above the forecast strip. Apply one visual contract across the native edit icon and custom status markers, and open status panels upward when their saved position is in the lower half of the scene.

**Reason:** The former top-right triangle was visually inconsistent and competed with header/weather information. A regular bottom row is easier to find and touch while preserving the object-first dashboard language.

**Consequence:** Both dashboard transports and manual YAML must derive geometry, shared CSS variables, and popup direction from the editable version-2 items. Current placement remains owner data and is updated explicitly; future imports must not reset it after reference migration 3 has already run.

## 2026-11-09 — Customer outcome is the first release input

**Decision:** Apply the top-down release standard in [release-standard.md](release-standard.md) to every Roomcraft release, whether it changes code, art, Home Assistant integration, or documentation.

**Reason:** Technical checks alone do not prove that a release solves the intended household/customer problem, remains operable on supported screens, or has a safe rollback.

**Consequence:** Each change starts with persona/problem/observable acceptance and non-goals, then works down through contracts, modules, art, integrations, automated proof, deployment readback, and rollback. CI produces deterministic technical evidence, while the GitHub pull-request template makes the human-reviewed customer acceptance and operational evidence explicit.

