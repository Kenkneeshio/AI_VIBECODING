# Changelog

## Home-first idle camera — 12 November 2026

- Add slow automatic scenery visits after 30 seconds without interaction, an instant-start menu action, and browser-local timing settings.
- Favor active holiday art and current scenery events; return to the saved default between visits and immediately on touch, consuming the wake gesture to protect controls.
- Verified 727 tests, full gates, CI, production browser regressions, exact LAN/remote readback and actual tablet idle/touch behavior. Corrected a tablet queued-frame race and devices-drawer blocking before closure. HA `ee1b46eac2eb8d12`, private Studio 117; all 82 objects and preferences preserved. See [Idle camera](docs/idle-camera.md) for contracts, evidence and rollback.

## Living world and marine wildlife — 12 November 2026

- Verified 714 automated tests, full gates, CI, built Home/Studio interaction proofs, exact LAN/remote asset readback and actual tablet preview/Save. Published private Studio 115; retained all 82 objects and holiday settings.

- Add eight articulated marine variants across dolphins, sharks, whales, seals and storybook walruses, with seeded encounters, body/coat variation, safe routes and quiet overnight behavior.
- Add grounded beach activities, birds, butterflies, tree drift, water/weather accents and traffic appearance variations through shared, bounded animation modules.
- Add Living world settings and preview to Home and Studio, preserving actual controls, layout data and holiday preferences. See [Living world](docs/living-world.md) for contracts, verification and rollback.

## Independent holiday art and schedules — 12 November 2026

- Add 31 holiday presets with emphasis on Asian celebrations, original animated art, neighborhood decorative lighting and independent Auto / Keep on / Off modes.
- Share seven-day scheduling, local dates, previews, placement and intensity controls between Home and Studio. Save preserves existing objects, device states and other holidays.
- Document coverage, regional conventions, extension points, proof and rollback in [holiday themes](docs/holiday-themes.md).
- Final runtime `07972b7e`, HA `fddc98664af18134` and private Studio 112 are verified. All 688 tests, CI, real-scheduler browser previews and actual tablet preview/Save/readback passed. A tablet-discovered preview pause was corrected before closing the release; all 82 objects are retained.

## Living landmarks and a one-minute demo — 12 November 2026

- Extend the shared tour to 60 seconds with school, family-house and office chapters; optional narration remains muted by default.
- Add configurable miniature people, activities, vehicles and event accents, including two grandparents with a young Asian girl and office satellites. Home and Studio use the same deterministic animation layer.
- Track acceptance, grouped-editing controls, exact validation and deployment evidence in [living landmarks](docs/landmark-activity.md).
- Deployed runtime `465aadf21`, HA `76cafcd1969162f8`, owner-private Studio 110; 658 tests, runtime CI, final built browser fixtures, exact live readback and the timed wall-tablet tour passed. All 82 existing objects and control data are preserved.

## Editable elementary school and playgrounds — 12 November 2026

- Add a reference-informed elementary school campus with play areas on the left of the home and a connected side road.
- Preserve the shared Home/Studio editor workflow, exterior ground/framing and existing layout/control data. See the [school campus record](docs/school-campus.md) for acceptance, evidence and rollback.
- Deployed runtime `3d6f31db`, HA `8555f9c637e3207c`, owner-private Studio 109; 647 tests, runtime CI, built editor, exact HA asset/project readback and wall-tablet inspection passed. All 80 previous objects remain unchanged.

## Connect exterior buildings with a straight side road — 12 November 2026

- Align the side-road spine with the home’s plan grid while preserving its curved main-street junction.
- Extend the existing shared road and place the office close beside it with a short parking entrance, retaining both ranch driveways and all existing objects.
- Deployed runtime `6419875c`, HA `b9409959a1d19a3e` and private Studio 108; 642 tests, runtime CI, built editor, exact HA asset/project readback and tablet inspection passed. Editing, target verification and rollback are tracked in the [road connections record](docs/road-connections.md).

## Editable office campus — 12 November 2026

- Add a detailed six-story office campus to Exterior scenery, with shared Home/Studio rendering and normal move, dimensions, height, rotation, Delete and Undo controls.
- Preserve existing home/street geometry and device bindings; include the new ground-level landmark in camera framing, terrain support and planting clearance.
- Verified 639 tests, CI, built Studio editing, authenticated Save and exact HA asset/project readback. The calendar tablet shows the complete new landmark. Deployed runtime `779097d4`, HA `6707571f81774d15` and owner-private Studio version 107; reference, editing contract and rollback are recorded in the [office landmark handoff](docs/office-landmark.md).

## Editable exterior house and side street — 12 November 2026

- Add a generic, detailed single-story ranch and a perpendicular side road to **Exterior scenery**, with normal position, dimensions, duplication, deletion and Undo workflows. The corrected ranch includes two front driveways, a substantial rear garden, shed and roof solar panels.
- Derive the side-road junction, curb cuts and two clear driveway approaches from the existing curved street. Keep decorative objects at ground level and separate from condo bounds and Home Assistant device mappings; include their exterior bounds in camera framing.
- Add matching ranch Canvas art and synthetic front/three-quarter/overhead proof images. The fixed plan PNG still crops exterior items beyond the original design space.
- Verified 634 tests, CI, built Studio editing and Save, exact HA asset/layout readback and the wall tablet. Deployed runtime `4490638e`, HA `309de5e7f537f676` and private Studio version 106. See the [exterior landmark contract](docs/exterior-landmarks.md).

## Keep the garage roof and home-facing entrance

- Restore the full roof and home-facing entrance; route the driveway around the garage side.
- Replace the false dark doorway panel with a true opening. The car is visible only through the open doorway and remains hidden by the roof, walls and closed shutter.
- Add detailed Prius bodywork, panel seams, glazing, rims, grille and lighting lenses; keep its headlights off.
- Keep the overhead fixture under the roof and suppress enclosed contents in the overhead PNG export.
- See the [garage correction record](docs/garage-driveway.md#full-roof-correction-release) for verified release status.
- Verified 612 tests, CI, built Studio interactions/PNG clipping, exact HA asset/layout readback and tablet. Deployed HA `fced00a0d6eff1fa` and private Studio version 105.

## Connect and furnish the detached garage

- Added an opt-in garage driveway with adjustable width, shared curved-street alignment, a matching curb ramp and planting clearance.
- Added a cutaway roof option and separate Blue Prius hatchback and Garage overhead light models. The objects remain independently editable at garage elevation.
- The overhead fixture uses ordinary light mapping and is left unassigned until its physical controlling entity is identified.
- See the [garage contract and release record](docs/garage-driveway.md) for editing, module ownership, verification and rollback status.
- Verified 605 automated tests, GitHub CI, Studio editing/publication, exact HA readback and the wall tablet. Final resource `c913eacbd528db82`; private Studio version 104. Generated shrubs now keep their full canopy clear of garage interiors and stairs.

## Protect terrain and structure edits

- Completed edits run a shared geometry check before the draft is committed. Safe repeated room corners are cleaned up, and abrupt terrain height steps soften while preserving paint and placed props.
- Unsafe room boundaries, collapsed segments and malformed geometry restore the previous draft with its history and selection. Repairs remain undoable.
- Studio adds **Main menu → Check & repair layout**. Both save transports reject unsafe geometry before upload or dashboard writes.
- The [safe-editing contract and release record](docs/edit-safety.md) describes the exact scope, compatibility and verification requirements.
- Verified 587 automated tests, GitHub CI, browser editing, unchanged HA layout readback and the tablet menu action. Released as HA resource `2e7c11c7487e8c80` and private Studio version 102.

## Document and guard the builder architecture

- Published a current architecture guide with system, engine, save, live-state and release diagrams, units, team boundaries and a staged builder roadmap.
- Added a deterministic module inventory and AST-based checks for pure-engine boundaries and shared Home/Studio dependencies. Build and CI run the guard.
- Repaired two missing optional WASM dependency records exposed by npm 11.19.1. The final release passed GitHub CI and produced the same manifest on Windows and Linux.
- Both save transports reject malformed decorative-object geometry before any upload or dashboard write. Legacy omitted rotation and valid exterior/custom objects remain compatible.
- Refreshed the project entry documentation and made remaining procedural scenery limitations explicit. See the [audit and evidence](docs/architecture-audit-2026-11-12.md).

## Edit the landscape in Studio

- Studio has terrain brushes for raising, lowering, smoothing, painting, and restoring ground. Place individual trees, sage, and rocks. Edits work with Undo, Save, and layout export.
- The Landscape controls set the coast shape, beach width, road shape and distance, hills, planting, and landmark visibility.
- At wide zoom, the ocean, shore, road, and inland terrain continue past the camera. Outer headlands, varied shallows, and inland groves break up the parallel strips. A garden path connects the low stair apron to the sidewalk where there is room.

## Grade and plant the coastal landscape

- Low dunes, grass rises, and clusters of coastal sage, grasses, succulents, and sandstone fill the outer stretches of the scene.
- The Cove ledges taper into wet sand. The Shores promenade steps and grades into the beach, with a trail to the pier, planted shoulders, and picnic tables.

## Soften the coastal landscape transitions

- The coastal road bends behind the Cove and sweeps back toward Shores. Curbs, sidewalk, road markings, vehicles, walkers, and cyclists all follow it.
- Irregular dune colors, dry scrub, and tapered lawn blend the sand and grass around the bluff and promenade. Both promenade entrances meet the sidewalk.

## Model the Cove as one crescent

- A continuous sandstone bluff wraps around the Cove's pocket beach, with shallow rock ledges on both shoulders and stairs from the upper trail down to the sand.
- Point La Jolla extends farther into the water on the west side. The wider shoreline follows a shallow crescent toward the Shores.

## Refine the La Jolla shoreline

- The Cove sits to the left of the Shores in the overhead view. The two coastal camera presets and the demo follow the updated landmarks.
- The headlands taper into the beach, the park edges meet the sand and sidewalk, and the surf follows the bends in the shoreline.

## Rebuild the La Jolla waterfront

- Rebuilt the coastline with connected sandstone headlands, coastal scrub, a landscaped La Vereda promenade, and a longer Scripps Pier.
- Surf, shallows, rain and reflections follow the shared 3D shoreline and live weather. **Waterfront · La Jolla Cove** and **La Jolla Shores** frame the coast from the water.

## Overhead Studio, room controls, and a La Jolla coastline

- Studio edits the same 3D scene as Home from directly above. **Save** publishes the draft, and **Return to live dashboard** sits next to it.
- Placement supports the dry kitchen worktop. Dragging, drawing walls, and deleting keep the overhead camera in place.
- The LiDAR survey pairs matching corners in two taps. Home's LiDAR ruler measures directly on the vacuum scan in metres and feet.
- The **Controls** view groups labeled device buttons and readings by room in a phone-friendly layout.
- **Insane graphics** previews higher-quality rendering on the current display. It restores the previous settings after five seconds unless confirmed.
- The animated coastline draws on the sand and boardwalk at La Jolla Shores and the sandstone pocket beach at La Jolla Cove.

## Expand Weather, Power and dashboard menus

- The centered menu uses more of the screen. **Calendar & to-dos** has a dedicated dashboard button.
- **Weather** opens an illustrated panel with 12-hour and seven-day views, a Home Assistant provider selector, and a Windy map. Opening Weather or Power pauses the 3D scene behind the panel.
- The larger Power panel animates its energy flow in response to the live meter and exposes the history and period totals.

## Show live frame rate and surface alignment tools

- Home adds an **FPS display** toggle and a camera movement frame limit. An optional current-view filter reduces road and sidewalk draws while zooming or changing the framing.
- The Home menu groups display settings, map tools, camera, management and household actions. The Power popout gives the current reading and history clearer emphasis.
- **Align LiDAR map** opens the existing vacuum alignment survey from both the Home and Studio menus.

## Tune Roomcraft graphics per screen

- **Display settings → Graphics** adds a frame rate limit, render resolution, and shadow quality. **Tablet performance** sets 20 FPS, 67% resolution, and shadows off on the current browser.
- The frame rate limit covers dashboard updates and camera motion. Lower render resolution reduces the number of pixels drawn while preserving the size of controls and text.

## Smooth radar characters and add furniture interactions

- Characters ignore small position noise and isolated large jumps. They take supported paths around furniture and walls, including doorways and stairs, while the radar ring and heat map retain the measured positions.
- After three seconds of fresh, settled observations, a character can sit, read, type, eat, cook, wash, tidy, tend plants, watch TV or pets, or play with toys. It walks to a clear approach before acting. The display settings can turn off the interactions or reduce motion.
- **Presence tracking → Tracking range correction** opens the presence switch settings in Studio. The shortcut is also in Studio’s **Main menu**.

## Connect Google Maps from Roomcraft Home

- **Menu → Location sharing → Connect Google Maps** now takes the receiving Google email and exported session file in one administrator form. **Connect and show on this screen** completes Home Assistant setup and enables the shared pins in the current browser after success.
- The quick setup requires a secure Home Assistant page. Use the native integration settings to renew an existing session or choose advanced options.

## Compare the vacuum LiDAR map and show television power

- Studio can load the authenticated LiDAR image, pair map and plan landmarks, compare metric distances, preview the overlay and undo an applied alignment. A saved alignment remembers the selected vacuum map so Home avoids applying it to a different floor.
- Home adds **LiDAR map overlay** and uses the saved alignment. The television switches between a white screen with reported playback text and a dark screen while powered off or unavailable.

## Keep an occupant on the condo floor and stairs

- Hold a character at its last usable radar position while the linked occupancy sensor remains on. Show an approximate area if the sensor has not sent a usable point, and clear the character on vacancy. The Presence tracking menu identifies held and approximate positions.
- Use the authored second-floor condo, the upper landing and the rendered stair treads for character support. Keep characters out of the yard and detached first-floor garage. The vacuum keeps its own movement surface.
- The radar integration holds one recent nonempty frame in memory for page reloads during an occupied interval. It excludes that frame from history and clears it on vacancy.
- Location sharing opens the Home Assistant Google Maps setup directly. After connecting one receiving account, enable its shared locations on the current screen.

## Object inventory, device binding, and light controls

- Restore 3D models for safety barriers, climbing blocks, fireplaces, soft seating, wall art and mirrors. Toys, activity pieces, mats, planters, storage, fans, lamps and vacuums show distinct models and finishes in 3D Studio and Home.
- Bind a Home Assistant entity to an existing object. Studio shows its compatible models, the purpose of each binding and the result of each gesture. Duplicating artwork clears its original device bindings.
- Keep custom dimensions and live settings when changing a finish. Browse all styles in a family, edit the stair tread count and preserve wall attachment when resizing. An explicitly disabled state graphic stays still in Home.
- Hold a capable light on Home to adjust its supported brightness, white temperature, color, effects, fade, white mode or flash. Studio lists the Home controls for the bound light.

## System audit and radar alignment

- Keep each avatar's body size steady and clear of solid furniture. A supported seated pose uses the cushion, and the radar ring stays at the observed position.
- Studio adds rotation, lateral and forward scale, and skew to radar calibration. Heat bins transform as shapes, so their edges and the detection outline follow the same calibration.
- Studio requires a current dashboard baseline before publishing. Import preserves a recoverable copy of local edits, and both publish transports use the same project validation.
- Home reconnects after a graphics interruption without carrying over the previous renderer's upload state. Watchdog checks the additional sources used by the live dashboard.
- Home adds **Display settings** for scenery layers, headlights, radar heat-map opacity, presence characters, seating poses, and dock alignment.

## Quieter nights on the waterfront

- Vehicles illuminate the road ahead with headlights after sunset. Tail lights follow the same traffic animation.
- Sidewalk traffic and boats are sparse after dark. The beach keeps a small evening bonfire and clears overnight.

## Calibrate radar coverage and keep movement on the floor

- Radar avatars stay on home floors and avoid walls. They walk through clear doorways and can take a seat after repeated nearby detections. The vacuum also respects walls. A blocked report can disappear and reacquire at a confirmed point without drawing a path across the wall.
- **Radar heat map** shows detections collected by Home Assistant, even when the tablet is closed. Studio fits a radar calibration from measured points and reports the error before applying it to a draft.
- Free view can tilt down to the horizon. The TV shows an illustrated screen when its Home Assistant power entity reports on. Demo narration starts muted, with captions and an Unmute control.

## Sunrise and sunset at home

- Home uses Home Assistant's live solar elevation and compass bearing to light the miniature. Low sunlight casts directional shadows, sunrise gives the sky and water a cooler glow, and sunset warms the horizon and reflections before fading into night.
- Studio can match the live dashboard or preview Dawn, Sunrise, Sunset and Dusk. Cloud cover softens direct sun, and reduced motion skips the short fade between solar readings.

## A beach that changes through the day

- Morning surfers ride the breakers. Daytime keeps beach play and evening brings glowing bonfires. The beach and sidewalks clear at 11 p.m., and surfers return after sunrise and 5 a.m. Home and 3D Studio share the schedule.
- Clear night skies show stars, the Big Dipper, Cassiopeia, Orion and occasional shooting stars. Clouds mute the stars. Reduced motion keeps the sky still.
- Semi trucks and more motorcycles appear in the mixed road fleet. The **Waterfront** camera view shows jet skis near shore and a cruise ship farther out.

## Editable dining furniture and matching Studio previews

- The dining table and its chairs are independent pieces in 2D and 3D. Legacy sets convert to a tabletop and four or six chairs while preserving the table’s center, rotation, finish and identity.
- Use exact center coordinates and rotation in the Inspector. Camera frame dimensions now affect the size of camera tiles in Home.
- **Scene settings** controls sky, rain and snow, wind, ocean reflections, trees, road traffic, walkers and cyclists, boats, beach play, and the Home dock position. Studio can match the connected dashboard or preview its own weather, time of day, moon phase and wind.
- Roomcraft Home recovers automatically when the browser restores a lost WebGL context.

## Beach play and slower traffic

- Beachgoers play with a ball and build a sandcastle. Taller palms, evergreens and broadleaf trees give the shore and yard distinct silhouettes.
- Vehicles travel more slowly. The road preview uses a smaller neighborhood fleet with more space between vehicles. The style picker includes the full catalog.
- The robot vacuum has a smaller 3D model.
- A narrated 45-second demo shows all Home Assistant weather conditions, moving clouds and reflections, directional tree wind and all eight moon phases. The live scene uses current wind, sun and moon data from Home Assistant.

## Waterfront life

- Motorcycles and scooters join the road fleet. Cyclists, adults, and children move along the two sidewalks. Sailboats and small working boats travel offshore with wakes and hull motion.
- The 30-second demo features the street and waterfront, and the same outdoor scene appears in 3D Studio. Reduced motion holds the scenery still.
- Furniture placement checks for overlaps in Studio. Table lamps, humidifiers and other supported objects sit on compatible furniture in 3D and draw above it in the plan.

## Road preview and miniature vehicles

- Roomcraft shows one passing vehicle per second across both lanes when the selected route or route mix has no usable traffic data. The commute panel labels this as a road preview.
- **Commute traffic → Vehicle style** lets you keep a mixed fleet or select a single miniature vehicle design. The preference is saved in the current browser.

## Dashboard showcase, commute routes, and location map

- The 30-second demo uses quick close-ups and simulated lights, fan, presence, vacuum, garage, indoor, weather, and road activity. It returns to the original view and resumes live telemetry on exit.
- The commute menu combines calibrated routes by default. Administrators can edit routes and their Home Assistant sensors. The dashboard labels partial and unavailable route coverage.
- Location sharing opens a Home Assistant map in Roomcraft Home. A private list controls which Home Assistant and Google Maps location sources appear.

## Energy map and household shortcuts

- **Power → Energy map** adds a circular tree and searchable meter directory. Select the whole-home hub, a circuit, or a smart plug to see live power, today’s energy, calendar-month energy, and billing-cycle energy. Each available source opens its Home Assistant details.
- The map distinguishes shared circuits from individual plugs. Calendar-month totals show how far Recorder has measured, and the billing view shows the meter’s reported cycle start.
- **Menu** adds Google Location Sharing setup, Home Assistant Calendar and To-do lists, and a Commute traffic panel. A connected travel-time sensor with a clear-road reference drives the illustrated cars.
- Grok Build supplied four independent speed-ratio fixtures. The reviewed cases are included in the commute tests. [Codex and Grok development guide](docs/ai-pair-development.md)

## Power at a glance

- The illustrated **Power** panel shows the current meter reading, the last hour of recorded power, and the configured energy totals for today and this month. Tap a reading to open its native Home Assistant details.
- The meter artwork distinguishes draw, zero, negative readings, and missing data. Reduced motion keeps the glow still.
- The [Codex and Grok development guide](docs/ai-pair-development.md) records the local Home Assistant access and review workflow.

## Coordinated audit release, `roomcraft-2026.11.11.1`

- Group Roomcraft Home, private Studio, System Watchdog 0.2.1, and Tablet Keeper 0.1.1 under one source version and release record.
- System Watchdog counts active integrations, refreshes changed alerts, and verifies tablet and heartbeat checks more reliably. Its component upgrade keeps the existing configuration and prepares a verified rollback.
- The tablet release includes a hardened system-event receiver and a recovery tool for finding the paired tablet's current Wireless debugging port.
- The [release audit](docs/system-audit-release-2026-11-11.md) tracks acceptance, remaining integration findings, and recovery.

## Layout snapshots and system audit

- Administrators can choose **Menu → Manage → Layout snapshots** to restore one of up to three previous layouts. The current layout stays in history for an easy undo. Both Studio publish paths capture previous layouts.
- The sun, moon, and clouds have larger ocean reflections so the weather is easier to see at tablet scale.
- Studio preserves recovery drafts and in-flight edits, the hosted bridge bounds request bodies and handles disconnects promptly, and the live vacuum discards stale map coordinates. The installer verifies the served editor entrypoint and saved configuration before completing resource registration.
- The [system audit](docs/system-audit-2026-11-11.md) records findings, acceptance checks, and follow-up maintenance across Roomcraft and the supporting projects.

## A 30-second dashboard demo

- Choose **Menu → 30-second demo** in Roomcraft Home for a guided tour of the 3D home, live objects and outdoor animation.
- The tour uses the current Home Assistant state and restores your previous view when it ends. Use **Stop** or press **Escape** to finish early. Reduced motion keeps the view still while the captions advance.

## A coastal sky strip and brighter ocean reflections

- A narrow sky strip at the top of Home shows clouds and the sun or moon. A clear line along its lower edge separates the sky from the 3D scene.
- The ocean now shows a softer reflection of the sun or moon with a brighter trail across the moving water. Sky and water follow Home Assistant weather and daylight and respect reduced motion.

## A beach and ocean across the street (v69)

- Home and 3D Studio show raised dunes, beach umbrellas and a curved shoreline across the street. The scene follows the camera as you rotate or zoom.
- Animated surf and ocean reflections follow Home Assistant weather and daylight. Reduced motion holds the water animation still.

## A mountain, HOA pool and playground across the street (v68)

- A small mountain, the HOA pool and a playground now sit across the street in Home and 3D Studio. The scenery follows the camera.
- The sun, moon and clouds appear as animated reflections in the pool. They respond to Home Assistant weather and daylight, with still reflections when reduced motion is enabled.

## A park beyond the street and a layered sky

- Home and 3D Studio extend the scenery beyond the far sidewalk with a small park and low neighborhood buildings.
- Home's sky adds distant mountain ridges, uneven layers of drifting clouds, and atmospheric shading around the sun and moon. When Home Assistant supplies solar elevation and direction, the illustration moves the sun and softens outdoor lighting near dawn and dusk. Outdoor rain uses shorter, subtler streaks.

## Full-width sky, bottom controls and a north-side street

- Roomcraft Home uses the full width of the header for an animated sky. Daylight, moon phase and cloud cover follow Home Assistant, with still artwork when reduced motion is enabled.
- **Power**, **Weather** and **Menu** sit along the bottom. Power opens electrical readings, Weather opens native Home Assistant details, and Menu contains view presets, map tools and management actions. **More options** adds browser preferences for camera tiles and reduced motion.
- Home and 3D Studio show a street and two sidewalks on the north side of the house. The new scenery follows the camera and scene lighting.

## Clearer radar coverage overlay

- **Detection zone** in Home and 3D Studio uses a light cyan dashed outline for configured bounds and a solid amber outline with a light fill for estimated coverage. A marker and forward line show the switch's calibrated position and direction.
- Home's legend shows the rated range when the radar profile provides one. The coverage outline comes from the manufacturer's chart and is an estimate for the installation.

## Radar coverage and movement on the plan

- **Detection zone** in Roomcraft Home and 3D Studio distinguishes configured bounds with a cyan rectangle and estimated Inovelli VZM32-SN coverage with a dashed amber outline. The optional sensor profile identifies the matching model. The nominal outline uses rounded centimeter readings from the manufacturer's field-of-view chart.
- Tracked characters and their footprints follow mapped floors and stair treads. Characters jump to the next valid position across a gap, and unsupported coordinates are omitted.
- The vacuum display accepts calibrated floor positions with enough room for the model. It holds its last valid position or starts at its authored dock when the dock fits on the floor. Studio object placement remains free.

## Radar zone and family character styles

- **Menu → On the map → Detection zone** shows the radar's configured XY bounds on the live map. The setting is remembered on each browser. Select a configured presence switch in 3D Studio to preview and edit those bounds.
- The first three anonymous tracks use Papa, Mama and baby girl styles with stepped idle and walking poses. The position and ground ring still follow the radar's coordinates. Reduced motion holds a still pose.
- The display uses the existing radar calibration and the switch's configured zone. Physical coverage varies with angle, movement, interference and obstacles.
- Verified the configured zone toggle on the wall tablet. Chrome fixtures checked all three styles, walking and idle motion, stationary ground rings and reduced motion. The owner-private editor deployed as Site v63.

## One live view and one editor

- Roomcraft Home contains **Home** and **Studio**. The former Floor Plan supplies the saved control projection and export image. Its separate dashboard page is retired. **Main Dashboard** stays separate.
- **Menu** opens popups for devices and sensors, indoor air, electrical readings, system health, presence and object models. The header weather opens Home Assistant details. Studio opens for editing and returns to Home.
- Fresh, calibrated radar positions use a foreground render pass in Home and authenticated 3D Studio. Furniture and walls no longer hide the characters or their location rings. The room keeps its normal lighting and animation. Invalid or expired positions disappear.
- A synthetic Chrome test reproduced invisible radar targets under a wall and a cabinet, then verified that both characters appeared and that clearing or rejecting the positions restored the unchanged scene.

## Clearer live controls, weather and presence

- Roomcraft Home groups **Menu** actions under **On the map**, **View controls** and **Manage**. **Object details** toggles labels beside linked controls and shares the existing preference with Floor Plan. The 3D view uses measured label sizes to avoid covering nearby controls, cameras, and other labels where space permits.
- Animated daylight, moon, clouds and weather appear in the live header beside the menu. The illustrated home continues to reflect the current lighting and outdoor conditions.
- Radar-only reports update the live scene. Characters are larger and easier to see, and the presence dimmer has a second dot that distinguishes mapped targets from presence alone. The existing red and green dot still shows dimmer power. Position alignment depends on the switch's floor-plan calibration.
- Verified the Home Assistant sidebar cleanup. **Roomcraft Home** and **Main Dashboard** stay visible. The privately archived prototype was removed, and **Second Floor** still serves the saved layout, Studio and health views through their existing paths. The signed-in user's Roomcraft default and the system's Main Dashboard default were preserved.
- Verified the crescent header, Menu, Object details toggle, blue radar dot and a real tracked character on the wall tablet. Chrome checks used synthetic clear night, sun, thunderstorms and snow at tablet and phone widths, including reduced motion.

## Live presence tracking

- Added an opt-in Home Assistant bridge for Inovelli VZM32-SN switches already paired with ZHA. It exposes anonymous radar target counts, positions and zone reports while retaining the switch's ordinary occupancy sensor.
- A presence switch object can bind the radar sensor and store a floor-plan calibration. Home Assistant Studio previews recent positions while Roomcraft Home displays anonymous animated characters and offers **Main menu → Presence tracking** for radar count and recent zone reports.
- The shared projection discards stale and out-of-plan positions. The saved layout contains only the entity binding and calibration. Live radar data stays in authenticated Home Assistant.
- Installed the bridge and verified persistent reporting on the paired switch after a Core restart. Home Assistant received live positions and zone reports. The wall tablet showed a live character and the matching radar count. The published living-room switch has a starting calibration; final placement should be checked against two known spots.
- Passed 144 editor and engine tests, 54 Home Assistant JavaScript tests, 20 Python tests, TypeScript, lint with zero errors and the production build. The owner-private editor deployed as Site v60 from `4aec6692e652724a19c4ad718f5252e660873f13`. It can edit tracking bindings and calibration; the live preview uses the signed-in Home Assistant editor.

## Object models, dimensions, and a simpler dashboard

- **Default** is a view choice. It resolves the saved camera angle or opens overhead. Main menu groups the secondary controls in Studio and Roomcraft Home.
- **Object models** lists placed objects, the shared model catalog, and available Home Assistant devices. Choose a model and place it in Studio, or change a placed object's model while keeping its position, dimensions and device binding.
- The Studio Inspector has width, depth, a proportion lock, a reset, and an optional 3D height override. Pets adds an animated Fish Aquarium and Lizard Terrarium with still 2D artwork and reduced-motion support.
- Verified live search, Studio handoff, aquarium placement, dimensions, Undo and return to Roomcraft Home on the wall tablet. The editor clears shared WebGL state between scene rebuilds so undoing a transparent model retains the original lighting. Isolated Chrome verified device mapping, numeric dimensions and undo, camera selection, and habitat animation in both views. The published layout and controls matched the pre-update backup.
- Passed 139 editor and engine tests, 54 Home Assistant JavaScript tests, 15 Python tests, TypeScript, lint with zero errors and the production build. The owner-private editor deployed as Site v59 from `340c5bbb021c9cca89f6b4f6f7cf04db67c4b46e`. Reinstall the prior Home Assistant assets to roll back the runtime. Roll back the Site separately.

## Matching exterior railings and saved Free view

- Reference revision 9 adds six editable graphite railing segments to the open balcony, porch, and landing edges. The stairs and entrances stay open.
- Live camera thumbnails prefer nearby positions clear of projected rails and stairs. Device controls and camera bindings keep their authored positions.
- Free view can be saved as the starting camera. Home Assistant shares it between Roomcraft Home and Studio for the signed-in user. The private web editor saves it in the current browser.
- Published through Studio and verified the 1536 × 864 plan, all 8 fences, 32 walls, and 23 unchanged object bindings. Verified the new rails in live Top down and Free view on the tablet. The saved angle read back through Home Assistant and opened in Studio. Isolated browser tests checked saving, reopening and clearing from both surfaces and confirmed three camera tiles cleared the exterior rails and stairs in all eight presets at tablet resolution.
- Passed 130 editor and engine tests, 54 Home Assistant JavaScript tests, 15 Python tests, TypeScript, lint with zero errors and production build. The owner-private editor deployed as Site v57 from `146f7eb160b0bd3d118f4d99c77cc44fb586cb50`. To roll back Home Assistant, restore the protected pre-release dashboard backup and reinstall the prior assets. Roll back the Site separately.

## Second-floor landing and ground-level garage

- The exterior stair descends from the lower-left upstairs landing toward the upper-left ground approach. Defined tread edges make it readable from above and in angled views.
- The detached garage sits on the first-floor ground plane. Its editable footprint, door control and independent camera binding carry forward.
- Published a refreshed 1536 × 864 plan through Studio. Readback verified all 14 tread edges, the same layout and all 23 object bindings. Checked Top down, From west, Studio import and return to Roomcraft Home on the wall tablet. Isolated Chrome also verified garage roof selection, drag and new placement in an angled view.
- Passed 123 editor and engine tests, 53 Home Assistant JavaScript tests, 15 Python tests, TypeScript, lint with zero errors and the production build. The owner-private editor deployed as Site v56 from `71efd7a9864eeb5a10f4d658db1ced7a04d52162`. Restore the private pre-release dashboard backup and previous assets to roll back Home Assistant. Roll back the Site separately.

## Editable walls, fences and exterior

- Revision 8 turns the reference decks, stair and railings into editable layout records. Design and the exported plan draw architecture from the same geometry as the 3D scene. The source illustration is available in Reference.
- Studio adds fence drawing and direct selection of interior and exterior segments. Draw by dragging or tapping both ends, then use the Inspector to edit the type, finish and endpoints.
- Studio defaults to the lighting and device appearance from its last dashboard import. Roomcraft Home keeps the selected camera view when it refreshes after a Studio publish.
- Published the rebuilt layout through Studio on the wall tablet. Authenticated readback matched 9 floor regions, 32 walls, 2 fences and 72 items, including the stair. Verified the new 1536 × 864 plan, all 23 prior object bindings and the tablet’s Top down default. On the tablet, drew a fence with two touches and moved an existing rail, then undid both tests before publishing.
- Studio’s Dashboard button returns to the published view inside the signed-in Home Assistant app. Verified the round trip on the wall tablet.
- Passed 117 editor and engine tests, 53 Home Assistant JavaScript tests, 15 Python tests, TypeScript, lint with zero errors, production build and release verification. The owner-private editor deployed as Site v55 from `03a9898372db92f028d13a9e6a9afee4a88f8c88`. To roll back, restore the private pre-release dashboard backup and reinstall the previous assets. Roll back the Site separately.

## Free view

- Added **Free view** to Roomcraft Home and Studio. Drag or swipe to rotate and tilt, and pinch or scroll to zoom. The canvas supports arrow keys and zoom keys when focused.
- Dashboard controls remain available as tap targets. In Studio, Free view uses canvas gestures for the camera, and presets support object editing. The home-shaped button resets to Top down.
- Verified touch orbit in both live Home Assistant surfaces on the wall tablet. Isolated Chrome WebGL checks covered drag, touch swipe, pinch, wheel, keyboard, reset, overlay taps and Studio placement. The release passed 115 editor and engine tests, 52 Home Assistant JavaScript tests, 15 Python tests, TypeScript, lint with zero errors and the production build.
- Verified exact installed dashboard and editor files and read back the saved layout. The owner-private editor deployed as Site v54 from `8a811f32dc67ca272f1aa30c352399c5fe010064`. Roll back by reinstalling the previous Home Assistant assets and restoring the private installer backup if needed. Site rollback is independent.

## Rebuilt reference geometry and wall joins

- Matched the original marked floor plan and approved Roomcraft illustration. Restored both open balcony passages, the rear wall step, study and closet jambs, a continuous bathroom divider, and the east-facing bed. Corrected the sectional and dining chairs in both renderers and restored the recessed double sink in 3D.
- Studio can snap drawn or dragged ends to corners and wall centerlines. **Join nearby wall ends** closes small gaps as one undoable edit. Storybook merges the wall solids at a common height, exposes the recessed windows from overhead, and brings the enclosed facade down to ground level.
- Added High angle and four side views to the shared camera menu. Top down remains the default.
- Published reference revision 7 through Studio on the wall tablet. Authenticated readback matched the reviewed repair for all 6 rooms, 34 walls and 71 items. Verified the refreshed 1536 × 864 plan image, retained linked controls and exact installed assets. Checked the repaired 2D plan, Top down, High angle and From east on the tablet.
- The owner-private editor deployed as Site v53 from `0535a7f4e25f38300f1ad6aaa3dfebb31d539ba6`. The release passed 114 editor and engine tests, 52 Home Assistant JavaScript tests, 15 Python tests, TypeScript, lint with zero errors, and deterministic bundle and manifest checks. Restore the private pre-release dashboard backup and previous asset build to roll back Home Assistant. The Site has a separate rollback.

## Camera views in the dashboard and editor

- Top down is the default 3D view. Dashboard and Studio offer Dollhouse and Corner presets, rotation and zoom. Device and camera targets follow the projected scene.
- Studio can select, drag and place objects in 3D while keeping the same layout, command history and Inspector. Room and wall tools use the 2D plan. Camera changes are presentation choices and do not alter the authored project.
- Verification: 110 engine/editor tests, 52 Home Assistant JavaScript tests and 15 Python tests passed, along with TypeScript, production build, generated-bundle verification and lint (zero errors; 25 existing warnings). Browser checks covered projected editing and undo. Actual tablet touches verified dashboard and Studio presets and Top down reset. No household equipment was operated.
- Deployed the HA assets with exact HTTP byte readback and a private configuration backup. The 71-item layout and Roomcraft Home profile default remain intact. Owner-private Site v52 succeeded from hosted source `dc4d4216e5a426ebaa1dc5609cee85d9624d5fd9`; its audience remained owner-only. Roll back assets from the previous Git source and restore the private installer configuration only if needed; Site rollback is separate.

## Storybook finish and Roomcraft Home

- Joined the 3D floors, walls and patio structure into continuous geometry while preserving authored openings. Added directional shadows, textured materials and responsive lamp lighting.
- Added the standalone Roomcraft Home dashboard. It reads the same published layout as Studio. The installer documents how to select or roll back the profile default.

## Storybook 3D preview

- Added an opt-in Home Assistant Storybook panel that renders the published layout as a warm orthographic miniature. It reuses the layout and the existing device and camera actions. Studio continues to author and publish the layout.
- The panel gives the fan, light, and dimmer independent animated states. It also projects blinds, the garage, climate, the robot, local weather, and authenticated camera tiles into the scene. Layout JSON and the original plan remain the recovery path.

## 2026-11-10 — Presence-aware wall switch object

- Added a movable wall-mounted presence dimmer to the Systems catalog. Its detailed switch plate remains the transparent tap target for the bound light while three attached dots animate only when an independently bound binary occupancy sensor reports `on`.
- Added the optional, validated `presenceEntityId` layout field and matching `roomcraft_presence_entity` dashboard contract. The dimmer state, action target, and occupancy animation remain separate so presence can never invent a light state or operate the load.
- The Inspector can search and edit the presence binding. Both dashboard transports, manual export, the installed card, schema, canvas renderer, and reduced-motion behavior share the same deterministic contract.

## 2026-11-09 — Reliable object removal and detailed fixture art

- Layout authors can remove or move rugs and fixtures and see the result in both Design and the exported plan. The release checks a shared cache key for editor scripts, styles, and art so a newly opened editor cannot combine an old renderer with the current scene.
- Rebuilt the living, office, and bedroom rugs with woven detailing. The kitchen worktop, two bathroom fixture assemblies, bedroom cabinet and bench, and living wall unit now use illustrated material and hardware details with clean transparent edges. The existing item IDs, layout format, and placements are preserved.
- Use explicit source regions to remove the cap, face, and shadow of an edited interior wall while retaining the original illustration where the wall is intact.
- Design uses the clean shell or a procedural fallback while assets load. Reference shows the original furnished illustration. Home Assistant migration v5 → v6 preserves previous deletions of the v5 rugs, windows, and fixtures.
- **Release evidence.** Source `259570c1ec69f78e492b251d2839a69003357a94` passed 91 Site/engine tests, 51 Home Assistant JavaScript tests, 12 Python tests, TypeScript, lint with zero errors, production build, manifest readback, and whitespace verification. The 132-input root digest is `sha256:896fe48766d03fcb341748e93c2f77f1da6f19da3ac4395dd320d134134cf623`.
- Browser QA exported the furnished plan, a zero-item plan, and a plan with two interior wall segments removed. The empty export showed no rugs, fixtures, old glazing, or lavender hardware. The edited-wall export shows a small wood-tone seam above the retained bath junction. The furnished export and the 1920 × 1080 wall-tablet capture show the updated artwork.
- Restricted-audience Site v49 deployed from hosted source `274da60b86d721f5a9aba9dd98f0122c0bfa899c` with the same access policy. All 26 Home Assistant editor files matched the release over HTTP at cache key `4ec579692bbc90a2`. The installed card resources and dashboard configuration passed readback. The refreshed plan image matched its authenticated upload byte-for-byte, with 65 items and 28 plan elements.
- To roll back, reinstall the prior source `1aa2fbc` or restore the private pre-install assets, restore the backed-up dashboard and image, and redeploy Site v48 if necessary. See the [deployment guide](docs/deployment.md).

## 2026-11-09 — Empty-shell audit, split fan controls, and detached garage

- Audited both supplied shell PNGs and found the final non-architectural remnant: a lavender wall-mounted unit embedded above the living-room wall. Reference migration version 6 now makes it an ordinary `wallUnit` item and deterministically repairs the wall beneath it. The empty-scene render repairs eight source windows plus this unit before drawing item layers.
- **Remove all objects** and **Restore reference layout** now always return to Design view. Reference view intentionally remains the furnished source PNG, but can no longer make a successful clear operation look as though objects survived.
- Split the dining ceiling fixture into two independently editable and controllable items: a motor-only five-blade fan and a smaller visible ceiling-light object at its hub. The former invisible fan-light zone keeps its existing light-switch binding; the fan keeps its existing motor-switch binding. Their transparent hit regions, state dots, glow, and fan rotation remain state-specific.
- Replaced the flat garage-door tile with a detailed detached-garage miniature: driveway apron, building shell, hipped roof, paneled animated door, lamp, and shrubs. The current cover binding remains unchanged; only the door panel changes height for open/opening/closing states.
- Added migration parity, deletion persistence, split-control, detached-garage state-art, shell-repair, and no-console-error coverage. Local browser QA rendered the complete 65-item scene with separate fan/light art and the detached garage.
- **Verified release:** implementation commit `1aa2fbc` passed 85 Site/engine tests, 51 Home Assistant JavaScript tests, 11 Python tests, TypeScript, lint with zero errors, production build, deterministic 128-input manifest `sha256:7e6af92d75cd628b3d8267efd9b0e142f61f2b3c14d29d2776cd7975b5b9474e`, and whitespace checks. Private backups preceded the version-6 migration and install. Full HA readback matched 65 items; the fan and light retain populated, distinct bindings; the garage binding remains populated; a second migration was `already-current`; and served v6/card assets matched. Restricted-audience Site v48 was published from exact hosted source `ab90fb458f43bda898910bb83adb4f3ba49a9af5` with its custom owner allowlist unchanged. No household device was operated.

## 2026-11-09 — Fully removable reference layout

- **Customer / problem / observable outcome:** Several rugs, windows, kitchen/bath fixtures, and bedroom furnishings were painted outside the scene model, so deleting objects could leave those visuals behind. Every visible reference furnishing is now an ordinary editable item. An empty object scene visibly contains architecture only; moving or deleting an object changes the same layer that draws it.
- Added deterministic reference migration version 5 for three rugs, eight exterior windows, the kitchen appliance worktop, master storage cabinet and bench, bath fixture group, and double vanity. The migration runs once. A later deletion stays deleted after reload.
- Added **Remove all objects**, which preserves rooms, floors, and walls, plus a complete **Restore reference layout** action that rebuilds all starter furniture, fixtures, rugs, windows, and movable interface elements through the engine without overwriting unrelated additions.
- The raster renderer now repairs the old PNG window openings as architecture and draws glazing only from window items. Removed unconditional rug/fixed-furniture/window painting and retained the deterministic floor/furniture/ceiling/opening layer order.
- Added end-to-end migration, deletion persistence, full restore, empty-scene, and editable-window regression coverage. Local browser QA rendered the full reference scene without console warnings or errors.
- **Verified release:** canonical implementation commit `c61f00b` passed 84 Site/engine tests, 51 Home Assistant JavaScript tests, 11 Python tests, TypeScript, lint with zero errors, production build, deterministic 128-input manifest `sha256:2ba1390a524fa00730bf745a8acd92bd8839fba5783e2ac2d7fdcaf7bcbedaf3`, and whitespace checks. Private dashboard backups preceded the install and version-5 migration. Full HA readback matched 64 items; a second apply was `already-current`; the served asset contains the v5/remove-all engine. Restricted-audience Site v47 was published from exact hosted source `87c28c86a634c0ade024114a0849d46e23943258`, and its custom owner allowlist remained unchanged. No household device was operated.

## 2026-11-09 — Uniform bottom interface controls

- Moved the editable Layout Studio shortcut, indoor-air summary, and electrical summary from the top-right cluster to one evenly spaced bottom-right row above the forecast strip. All three use the same 48 × 48 circular visual contract, icon scale, border, color, shadow, and touch feedback while retaining their existing actions and live severity states.
- Status panels now choose their opening direction from the saved item position. The bottom-row air and electrical panels open upward, keeping their content within the wall-tablet viewport. New/reference-migrated projects receive the same deterministic positions; current owner layouts are updated as data rather than by repeating a migration.
- Added transport, manual-YAML, migration, live-card reconfiguration, geometry, and style regression coverage. No room, wall, furniture, camera, device binding, rendered plan image, or household device state is changed by this release.
- **Verified release:** canonical implementation commit `a7c93d9` passed 83 Site/engine tests, 44 Home Assistant JavaScript tests, eight Python tests, lint with zero errors, production build, deterministic 128-input manifest verification, and whitespace checks. Restricted-audience Site v46 was published from exact hosted source `83c6c56a2039940e4adba0532f9a2130c7afdfa3`; its custom audience remained unchanged. The HA installer saved a private rollback copy and verified dashboard/card readback. A second private backup preceded the concurrency-checked layout write, whose full readback matched exactly. A private 1920 × 1080 wall-tablet capture proved the complete house remained uncropped and the three controls form a uniform row above the forecast strip; a read-only touch check proved the indoor-air panel opens upward and remains on screen. It was closed after verification, and no household device was operated.

## 2026-11-09 — Detailed crafted furniture, authored sizes, and bed families

- **Customer / problem / observable outcome:** Layout authors rejected the prior flat, toy-like treatment and needed furniture that reads as detailed, warm, believable miniature interiors while remaining easy to edit. The editor now offers 325 object choices, including an 88-entry crafted-miniature collection with visible construction, material, and depth cues. At 100% scale, upholstery has seams and piping, wood has directional grain and joinery, fixtures have glass/metal/fabric construction, and each object retains a clean transparent surround without room-floor pixels.
- **Beds are product variants, not stretched art.** Forty-two catalog entries cover nine recognizable constructions—quilted, crib, toddler, low platform, arched upholstered, drawer storage, four-poster canopy, daybed, and bunk—and six size classes: crib, toddler, twin, full, queen, and king. A size or construction change selects authored geometry and art; platform full, queen, and king footprints increase monotonically and distinct queen constructions produce distinct render traces.
- Added explicit `collectionId`, `seriesId`, `designId`, `sizeId`, material, and display-label metadata without changing layout version 2 or any existing stable catalog ID. The Inspector derives separate **Style**, **Size**, and **Color / finish** choices from that metadata. Style and Size apply the selected catalog variant's authored width and depth; Finish changes material/color while preserving the user's current geometry, center, rotation, binding, and custom name.
- Rebuilt the code-native furniture and fixture renderer around deterministic fabric panels, quilt sections, wood panels, brass, tapered legs, feet, pillows, chairs, casework, and realistic lamp components. It uses actual item width and height, balanced canvas state, project-stable detail, and layered offset shadows; it does not use `shadowBlur`, random values, clocks, pixel reads, canvas filters, timers, floor-colored patches, or copied brand/game assets.
- Updated the starter sofa, bed, desk, dining, storage, chair, and light paths to use the same renderer as catalog objects. Ceiling fixtures now read as faceted frosted glass and metal rather than decorative stickers. Bound lights remain one transparent live control whose own Home Assistant state alone controls glow, unavailable treatment, and the 4-pixel truth-state dot.
- Added deterministic canvas-trace coverage for default, rotated, compact, and large renders; operation-richness and performance limits; 42-bed footprint/form matrices; variant-choice ordering; geometry-preserving Finish changes; authored Style/Size changes; legacy finish grouping; and Android-WebView safety.
- **Verified release:** canonical source `e98b5bd4bf1f6d17004785431acc8778b2ffbb8f` passed 81 Site/engine/governance tests, 51 Home Assistant JavaScript tests, eight Python tests, TypeScript, lint with zero errors, production build, manifest readback, and whitespace validation. Its 128-input manifest is `sha256:3fcdaab1a0f73d0fa59945a7958444488a457c0c384b9e7b9fff7a7ee1d6e098`. Restricted-audience Site v45 was published from exact hosted source `070cdee25ea318744f57c7c4476cb4127a0e0142`; its 83-input manifest is `sha256:9e69582d45e6acb41531358ad97a9d45db9d1ebe899974c37d67543a5af1f8a4`, and the custom audience remained unchanged.
- Saved private rollback evidence before installation and again before the image-only dashboard write. All 27 Home Assistant files matched local SHA-256 values over SSH and eight critical assets matched over HTTP. The regenerated 1536 × 864 plan image matched its authenticated upload readback; dashboard concurrency and full readback proved that only the picture image URL changed. The editable project remained layout v2 with six rooms and 48 items, and all 28 plan elements remained intact. Browser QA found no console warnings/errors. A private 1920 × 1080 wall-tablet capture showed the complete detailed plan flush to the screen without side crop; no household device was operated.

## 2026-11-09 — Original cozy furniture and light collection

- **Customer / problem / outcome:** The household layout author and wall-panel user needed furniture and lights to feel like one polished, friendly collection instead of a mix of inconsistent low-detail shapes. Roomcraft now has 34 original rounded variants—22 furniture choices across ten designs and 12 light choices across five designs—plus matching upgrades to the default movable furniture and light art. The editor now exposes 271 object choices, including 19 Living, 16 Bedroom, and 18 Lights entries.
- Added data-driven `cuteFurniture` and `cuteLight` recipes with stable IDs, named palettes, explicit forms and render layers, opaque semantic cores, and deterministic vector shadows. The design language uses generic cozy, toy-like, and dollhouse motifs; it contains no branded names, characters, logos, recognizable franchise silhouettes, or extracted game assets.
- Added five live silhouettes—flower-bud table lamp, cloud floor lamp, bloom ceiling light, star pendant, and acorn sconce—beside the safe default table lamp. `lightForm` is now documented in the version-2 schema and both dashboard transports. A bound light appears once as a transparent live target; only its own Home Assistant entity controls glow, off/unavailable treatment, and the existing 4-pixel red/green state dot.
- Kept movable furniture and lights on floor-free vector paths so moving, resizing, rotating, duplicating, importing, exporting, or deleting them cannot carry room-floor pixels. Ceiling fixtures declare the ceiling-device layer. No layout geometry, room dimensions, layout version, editable-reference migration, current placement, or private device binding changed.
- Browser QA showed the complete plan without side crop, clean independent furniture/floor layers, all three new catalog sections, successful place/rotate/undo editing, and no console warnings or errors. The canonical project and standalone hosted checkout each pass 76 Site/engine tests, 51 Home Assistant JavaScript tests, eight Python tests, TypeScript, lint with zero errors, production build, release-manifest verification, and Git whitespace validation. The final hosted 81-input manifest is `sha256:503d88d7c00284c44d6e44dc02e31e3d9c2602275026ed35261275a14c49a5db`.
- Published restricted-audience Site v44 from exact Site source `ea9c4664772c3b6309b219fa79ec7376510baef0` without changing its custom audience. The release gives every changed editor module a new deterministic cache key so a long-lived tablet WebView cannot reuse prior art. Before installation, saved private timestamped copies of the prior served asset tree and dashboard. All 26 expected editor/card/weather files match local SHA-256 values, and eight critical files match over HTTP. The verified HA install refreshed only the Studio/card resource versions and editor route; the saved floor-plan layout/image stayed unchanged. No household device was operated, and this release does not claim a new physical-tablet capture.
- Rollback is the prior canonical commit, Site v42/source `805808099276dd842e77fa1906e42a58687384d9`, and the private pre-install Home Assistant asset backup.

## 2026-11-09 — Deterministic Roomcraft engine and permanent release standard

- Added the versioned `RoomcraftEngine` beneath the existing illustrated editor: canonical JSON and SHA-256 fingerprints, seeded clock-free IDs, normalized scenes, tamper-evident command journals and replay, pure ordered migrations with idempotency evidence, one shared display-layer policy, content-addressed asset contracts, and explicit environment/verification records.
- Delegated the production editor to the engine without changing layout v2, reference migration v4, the 1536 × 1024 home, or the full-width crop. Local drafts and dashboard comparisons now use canonical data; every completed edit records a replayable `scene.replace` command; the detailed renderer, fallback renderer, and hit testing use the same floor/furniture/ceiling/window partition.
- Converted starter-art upgrades into named versioned migrations. Customized office geometry and deliberately removed fixtures keep their prior protections, while migration execution is now double-run and fingerprinted to detect nondeterministic code.
- Made detailed export fail visibly when a required authored atlas or canonical shell cannot decode. It can no longer silently switch art backends or wait forever after a failed image load.
- Added a permanent customer-first release gate. Every build now verifies the engine contract, rejects random or clock-derived editor IDs, hashes sorted runtime inputs and binary artwork into a timestamp-free release manifest, reproduces that manifest twice, and records evidence in the order customer outcome → product contract → engine/data → art/assets → integrations/privacy → tests → deployment readback → rollback.
- Added engineer-facing engine and release contracts, a Roomcraft GitHub pull-request template, deterministic/replay/layer/asset/release tests, and an in-page diagnostics facade exposing only reproducibility evidence unless an engineer explicitly requests the local command log. Private credentials, live state, camera media, and installed entity data remain outside source and release artifacts.
- Closed the independent release audit before publication: every authoritative import/reset starts its seeded ID branch from the imported project rather than prior browser history, and undo/redo/cancel reseed from the exact project they restore while retaining their journal transition. Hot-path paint/hit ordering uses a cached lightweight plan, malformed internal layer order is rejected, browser cache keys changed with the engine, and full-snapshot command journals rebase after 70 commands. Regression tests prove cross-history import equality, restored-scene undo/redo equality, and replay of the first bounded segment after a checkpoint. The release manifest now covers implementation, vendor styles, tests, build/configuration scripts, and documentation; the gate enforces exact browser engine dependency order.
- The final canonical checkout passes 70 Site/engine/governance tests, 50 Home Assistant JavaScript tests, eight Python tests, TypeScript, lint with zero errors, production build, manifest readback, and Git whitespace validation. The standalone hosted checkout passes the same executable suites and produces an 80-input release manifest with root digest `sha256:6c5560e969e9a1d8f34c731a00150cdf82bc90e3f2024de4f4455d30640be13e`.
- Backed up the previously served Roomcraft asset tree privately, installed the public engine/editor assets without changing the Home Assistant dashboard or Lovelace resources, matched all 24 public files byte-for-byte over SSH, and read six critical assets back over HTTP. Published restricted-audience Site v42 from exact Site source commit `805808099276dd842e77fa1906e42a58687384d9`; the existing custom audience was preserved. Local browser QA rendered the complete editor; production access correctly remained behind its sign-in gate. This engine-only release did not export a layout, operate a household device, or claim a new physical-tablet visual check.

## 2026-11-09 — Office, master suite, and fixture visual-regression correction

- Rebuilt the office workstation as one deep U-shaped desk with two usable returns, drawer pedestals, centered equipment, the correct chair bay, and a separate movable credenza. Migration version 4 updates the known office desk/chair geometry and adds the missing support furniture without disturbing unrelated user objects.
- Replaced the perspective-baked master rug with authored, axis-aligned artwork centered beneath the bed. Added separate movable master nightstand and lower-dresser objects so furniture no longer has to be carried in a broad raster crop.
- Reworked the shared table/desk-lamp art into a polished overhead fixture with a tapered fabric shade, brass stem and collar, weighted base, and localized warm glow. The live artwork retains its transparent hit area and truthful 4-pixel state dot.
- Reworked the master humidifier into a recognizable translucent tank, nozzle, control, and base. Mist remains a live effect shown only while the humidifier's own entity reports on.
- Removed duplicate hard contact shadows from the baby-area furnishings, inset and lightened the activity-table legs, and removed the clipped bedside raster fragment. Android export testing then isolated the remaining bars—with impossible magenta and green pixels—as WebView/GPU corruption triggered by canvas `shadowBlur`. All three plan renderers now use deterministic layered offset shapes instead of GPU blur, so the marks are not devices or status indicators and cannot reappear from driver-dependent shadow rasterization.
- Extended exterior window replacements across the complete old source sill and reveal. The narrow dark source tabs no longer protrude beside the corrected perspective-aware windows.
- Kept the dining set at exactly four chairs. This is the intended current layout, not a regression to remove during the correction.
- Added migration, Android-shadow, and rendering regression coverage. The corrected release passes 44 Site tests, 50 Home Assistant JavaScript tests, three Python tests, TypeScript, production build, and whitespace validation. A newly exported Android raw PNG and fresh 1920 × 1080 live-tablet capture are clean: no corrupted black/color bars, clipped sill tabs, skewed master rug, or cross-layer bedside fragments.
- Installed and read back the matching Home Assistant editor/card resources, exported migration version 4 from the wall tablet, and published restricted-audience Site v39 from Site source `c6dcb647a0dbe09b6a73213f40b187674bd7d7aa`. No household device was operated during visual QA.

## 2026-11-09 — Professional object silhouettes, rugs, desk, and garage state art

- Replaced color-key transparency holes with an authored opaque-core silhouette plus the source artwork's feathered shadow edge. Pale upholstery, beds, porcelain fixtures, counters, and walnut furniture no longer reveal the room floor through their material.
- Removed the obsolete mat-overlap redraw pass that could paint furniture and shadows twice. Sprite and paint caches now invalidate when either the furnished source or clean shell changes.
- Rebuilt the office desk as one coherent top-down L with a unified wood surface, drawers, open chair bay, monitor, keyboard, mouse, and cable grommet. Removed the separately keyed office desk fragments that made the old assembly look disconnected.
- Normalized the rug layer: the office rug is an opaque centered floor object, the bedroom rug keeps its source aspect ratio and centers under the bed, and catalog round/leaf mats now keep symmetric borders and patterns.
- Added entity-driven sectional garage-door art with panels, rails, handle, distinct closed/open/opening/closing/unavailable states, reduced-motion behavior, transparent hit area, and the existing 4-pixel state dot. Ordinary entry-door controls keep their separate art.
- Installed after private dashboard backups and exported the unchanged 45-item current project. A fresh 1920 × 1080 wall-tablet capture verified the desk, three rugs, opaque object materials, seamless floors, closed garage-door state, 19 object controls, three cameras, weather layer, and full-screen fit without operating a physical device.

## 2026-11-09 — Seamless floor and furniture layer correction

- Replaced furniture-sized floor repairs with a true layer stack: the clean architectural shell supplies uninterrupted room floors, room-wide surface changes paint beneath objects, and rugs, fixed cabinetry, movable furniture, live controls, walls, and windows render in separate ordered layers.
- Restored the high-detail reference dining set and office furniture as transparent source-art cutouts. The dining table retains all four chairs; moving or redrawing either furniture group no longer creates rectangular floor patches or translucent copies.
- Refined the live table-lamp form into a smaller circular shade with a distinct stem and base, warmer on-state lighting, neutral off-state materials, and the existing truthful state/4-pixel indicator behavior.
- Cache-busted the layered renderer, installed it after a private dashboard backup, exported the current project, and verified the actual 1920 × 1080 wall-tablet result. The oak, walnut, ash, ivory, and blue room surfaces remain continuous; no physical device was operated for QA.

## 2026-11-09 — Clean furniture, movable dashboard interface, and state dots

- Replaced the source-PNG dining-table and office-desk crops with clean perspective-aware vector furniture. The dining set now has four chairs, including both near/bottom chairs; the office desk is a true L shape. Moving or resizing either object no longer carries neighboring floor pixels or produces ghost copies.
- Refined all live light art into recognizable compact fixtures while keeping the entire control hit area transparent. Every object whose effective tap action is **toggle** now shows an unobtrusive 4-pixel state dot: green only for a verified on state and red for off, unknown, or unavailable. Scene/script/button artwork remains neutral and does not claim a toggle state.
- Promoted dashboard chrome into the version-2 item model. The sun/moon anchor, clock, device menu, editor shortcut, indoor-air badge, electrical badge, and all camera thumbnails can now be moved, resized, rotated, duplicated, removed, imported, and exported through the same editor workflow as furniture. Weather masking remains full-screen; only its celestial anchor is movable.
- Made the dashboard project loaded at startup the editor's reset/default target. Reset no longer silently returns to an obsolete compiled starter when a current Home Assistant layout is available.
- Added migration version 3 and round-trip coverage for the six interface items, cloud and LAN style mapping, celestial geometry, state-dot truthfulness, clean light layering, and existing camera behavior. No private entity IDs, camera media, or live dashboard JSON were added to source.

## 2026-11-09 — Modular animated controls, status popups, and complete night mask

- Refined overlapping fixture controls: inactive light layers are now transparent, the on-state lamp glow is smaller, and the dining fan-light center target is 42 × 42 so the surrounding blades remain easy to tap independently. Moved the window fan into the office and removed its wall-mount constraint so it can be positioned like the real freestanding appliance.
- Removed visible light-button chrome. Light targets now explicitly disable native/WebView button appearance and suppress their internal hover icon, leaving only the authored fixture, its state-dependent glow, keyboard focus outline, and brief touch-confirmation pulse.
- Bound lights are now omitted from the clean static PNG and rendered once by their live control, matching the existing fan/robot layering model. The entire touch target stays transparent; only the compact fixture art changes from a neutral off lamp to an illuminated on lamp. This removes repeated button-shaped pixels without repainting nearby floors, walls, or furniture.
- Rebound the dining ceiling fan and fan light to the verified third and fourth channels of the physical four-channel kitchen switch. The artwork itself now toggles the same stateful entity that drives its glow or rotation; scenes are no longer used for these two controls. The fan stays still when channel 4 is off, and the center light glows only when channel 3 is on.
- Added consistent table-lamp live artwork for the verified living, dining, kitchen ceiling, kitchen track, kitchen counter, hallway, office, master, and fan-light controls. Added a dedicated dining air-purifier object and master-bath humidifier object. Purifier airflow and humidifier mist animate only while their own HA entity reports on; unavailable devices remain neutral.
- Made the Dreame object smaller and friendlier, kept its authenticated map panel and calibrated position tracking, and omitted its fixed copy from exported PNGs. The live object is now the only robot on the dashboard and animates only during verified cleaning/returning activity.
- Added animated electrical and indoor-air markers. Each opens a nearby live-value panel and native entity details without operating equipment. The electrical panel shows whole-home power and energy totals; indoor air includes CO2, PM2.5, living/master humidity, and humidifier state.
- Extended the outdoor night/dusk mask over the right exterior strip and lengthened cross-fades for daylight, moon, stars, precipitation, clouds, and the forecast glass. The 12-hour strip remains timestamp-based, exterior-only, hidden-page aware, and reduced-motion safe.
- Added a reusable `roomcraft_device_form` contract for humidifier and air-purifier art. Editor, local HA bridge, cloud bridge, tests, and the live card share the same form. Cache-busted editor assets and kept moving fan/robot art out of the static export.
- Installed the release after private dashboard backups, exported the current layout through HA Studio, read the dashboard back, and cold-launched Home Assistant Companion. A private 1920 x 1080 tablet capture confirmed full-width fit, the corrected night edge, one compact robot, direct controls, three camera frames, status markers, and clean detail-off presentation. No physical switch, fan, light, purifier, humidifier, or vacuum command was sent for QA.

## 2026-11-08 — Calibrated vacuum motion and truthful fan state

- Added optional six-value `vacuumPositionTransform` support across the editor, schema, dashboard bridges, and Home Assistant card. The private Second Floor project now maps the Dreame map camera's `vacuum_position` into Roomcraft plan coordinates without exposing the installation-specific coefficients in public source.
- The robot marker parks at its last calibrated position while docked and transitions between fresh positions only while Home Assistant reports an active cleaning or return state. Its brush animation runs only during that verified activity. An active map older than 20 minutes freezes the last position and shows stale instead of inventing movement; reduced-motion mode disables transitions and animation.
- Corrected a false ceiling-fan animation. The available `switch.ceiling_fan` reported `on` while the user confirmed that the physical fan was stopped, and the alternate wall-switch entity was unavailable. The private fan control therefore uses the On/Off scenes as actions but stays neutral and static until a trustworthy motor-feedback entity is available. The separate scene-only fan light remains neutral for the same reason.
- Backed up and redeployed the private dashboard and card, then cold-launched Home Assistant Companion on the wall tablet. The calibrated vacuum appeared at its dock and the fan remained an action-ready static control. No physical fan or vacuum command was sent during verification.

## 2026-11-08 — On-plan vacuum controls and live map

- Added a dedicated robot-vacuum live graphic and an object-anchored control panel. Tapping the illustrated robot now opens its current state, authenticated map, Start, Pause, Dock, Locate, and map-supplied room-cleaning actions; holding the robot still opens native Home Assistant details.
- Added the optional `vacuumMapEntityId` layout binding and matching editor field, validation, dashboard import/export, schema, TypeScript bridge, and regression tests. Map images and changing vacuum state remain authenticated runtime data and are never saved in layout JSON or public assets.
- The map freshness indicator becomes stale after 20 minutes. Reduced-motion mode removes the robot pulse. Room cleaning uses the Dreame segment service only when the bound map exposes room identifiers; unsupported actions remain hidden or disabled.
- Deployed the card and a bound robot object to the private Second Floor dashboard after taking a private backup. Browser QA verified the panel and room list without sending a physical vacuum command. A later same-day release added calibrated plan-coordinate tracking; the authenticated map remains the underlying live-position source.

## 2026-11-08 — Official device web portals

- Added official Dreame web control and TP-Link Deco local-management links to the authenticated Home Assistant device drawer so the wall tablet can reach them even when Google Play marks the native app incompatible.
- Kept unsupported and unverified APK mirrors out of the dashboard. SwitchBot does not publish a working consumer web-control portal; its official compatibility fallback is a vendor-supplied APK requested from SwitchBot support.
- Added regression coverage for the portal allowlist and safe new-tab link attributes.

## 2026-11-08 — Optional on-plan device details

- Added **Show object details on plan** to the authenticated device menu. It reveals compact cards beside every Roomcraft object control with its label, current HA state, and entity ID; camera tiles show their bound camera entity in a neighboring card. Cards automatically move left, right, above, or below to stay inside the screen instead of covering the artwork.
- The plan remains label-free by default. The preference persists only in that browser/tablet and does not modify the editable layout or dashboard bindings.
- Added regression coverage for enabling, persisting, and disabling the detail overlays without changing object actions.

All notable Roomcraft changes are recorded here. Deployment status is tracked separately from a source commit.

## 2026-11-01 — Calendar tablet no-touch display policy

- Changed the paired Apolosign Calendar tablet's Android inactivity timeout from effectively never to five minutes after the owner selected **dim after no touch**. After the owner clarified that the power button must not be required, enabled Android stay-awake for AC, USB, and wireless power so the powered tablet can dim without entering full sleep. Automatic brightness remains enabled.
- A temporary 15-second timeout test exceeded the timeout while Android still reported `mWakefulness=Awake`; the five-minute setting was restored afterward. Verified that the lock screen remains disabled and Home Assistant Companion remains the default Home app. The setting uses touch inactivity, not occupancy; it may dim while someone is still in the room and does not wake from room presence.

## 2026-10-31 — Event-gated cameras, stateful graphics, and outdoor weather

- Added a **← Dashboard** control in the editor header for both HA-hosted Studio and the owner-private Site. It returns to the Second Floor plan using the current dashboard source. When the layout differs from the last imported/exported project, the editor asks before leaving and saves the browser draft. A running dashboard transfer must finish first.
- Corrected the office to one physical desk lamp. The previously separate study ceiling-fixture item duplicated that same light binding, so the private project drops the extra item. The remaining office item uses the bedroom-style `lamp` sprite and remains the single movable control for that light. The default fixture list now includes the desk lamp in place of the fictitious ceiling light.
- Device artwork now classifies state by the bound entity's domain. Lights, fans, covers, doors, switches, and climate controls use their own reported state; scene/script/button actions remain neutral and ready. The five-blade fan rotor follows the motor switch only. The separate fan-light action remains unlit because its toggle scene has no independent on/off feedback entity. A real stateful entity is required before the center light can claim on or off.
- Recessed, wall-oriented windows use shallow glass, jambs, mullions, and a narrow room-facing sill. Live window or blind overlays use slim horizontal or vertical panes within their full touch area; open and closed states remain distinct.
- Camera thumbnails support `event_live` for a doorbell, `live_auto` for an always-available overhead stream, `live` for explicit tap-to-start cameras, and the existing still/off modes. A doorbell ring or person binary sensor opens a bounded 60-second live window and requests `camera.turn_on`; the dated last-event still remains the fallback. The overhead tile mounts Home Assistant's native media element without a wake command and labels a feed **LIVE** only after video time or frame count advances, even if HA leaves the camera entity `idle`. The garage remains tap-to-start. The editable layout can place all three frames independently.
- A separate Home Assistant outdoor-weather module reads the configured local weather, sun, and optional moon-phase entities. It fetches hourly forecast data through the authenticated HA WebSocket API, shows current conditions plus actual forecast timestamps through 12 hours, and lets a forecast tick preview its weather and daylight state. Rain, snow, clouds, fog, wind, dusk, night, moon phase, and stars are clipped to the exterior of the 1536 × 864 plan. Animations pause when the page is hidden and respect reduced motion. If hourly data is unavailable, the current observed weather remains visible.
- The installer copies and version-registers both Lovelace modules; an offline test checks resource creation, update, and cache invalidation. The camera and weather contracts, visual limits, and live acceptance checks are documented in [live object graphics](docs/live-object-graphics.md), [engineering handoff](docs/engineering-handoff.md), and [deployment](docs/deployment.md).
- Owner-private Site source `334bfa9cd8ee9102d0d95e69576e1538621bf13f` was deployed. Private HA dashboard readback confirmed 41 editable items, 13 mapped controls, three managed camera frames, one weather picture element, and a 1536 × 864 rendered PNG. A signed-in browser showed the doorbell's latest-event still and decoded **LIVE** garage and overhead media. A private 1920 × 1080 wall-tablet capture showed the same three states, current rain, and the 12-hour forecast strip, filling the screen without crop or scroll. Day/night and moon transitions were checked with synthetic state tests, not by waiting through a physical cycle. The tablet initially displayed a stale frontend configuration error that cleared after a safe cold launch. Site tests (37), HA JavaScript tests (41), Python tests (8), TypeScript, build, and Git whitespace checks passed. Camera media and private dashboard values remain outside this repository.

## 2026-10-31 — Live object treatments and second plan camera

- Added five editable plan items: an office desk lamp, a garage camera thumbnail, an exterior garage-door control tile, a hallway thermostat/AC, and an office window fan. Each has its own movable geometry and Home Assistant binding. The front-door frame now uses its actual camera's dated latest-event image because its live stream is unavailable; the garage frame can start a separate stream on tap.
- Added a **Live graphic** Inspector choice for light, fan, AC, window/blinds, door/garage, general device, or none, with Automatic inference. The bound object remains the control. Bright active, dark inactive, and neutral unknown/unavailable art conveys state without text badges over the objects. Accessible labels retain exact state and actions; taps show a brief turquoise pulse and holds an amber pulse. The five-blade rotor has a borderless feathered backing and rotates in eight stepped frames per 2.8 seconds only when its motor state is on. Reduced-motion preference stops it. Its fixed blades are omitted from the exported PNG so they appear only once beneath the live overlay. Weather and time labels use a quieter translucent treatment.
- Owner-private Site source `d2fe23f2e0896e7a64d8d31503ac35bd285ff5cb` was deployed. HA export/readback confirmed 41 editable objects, 14 derived controls, two managed camera thumbnails, the unchanged 1536 × 864 presentation, and the expected light/door/climate/fan visual kinds. A private 1920 × 1080 HA Companion tablet check showed the high-contrast graphics and both camera frames with no side gutters. The garage camera was explicitly started through Home Assistant, and the tile showed **LIVE** only after an MJPEG frame decoded; it does not start a stream merely by rendering. The front-door tile showed its dated event still, without a false live label. Home Assistant also reopened after an app force-stop via the default Home app. The [live-object guide](docs/live-object-graphics.md), [user manual](docs/user-manual.md), and [handoff](docs/engineering-handoff.md) record the state map, camera setup, privacy boundary, manual steps, and engineering checks. Camera media, current device values, and private entity IDs stay outside GitHub.

## 2026-10-31 — Full-width tablet scene

- Kept the full 1536-pixel width of the existing home artwork after the owner noticed the earlier 16:9 export clipped its sides. The new 1536 × 864 presentation uses source x0–1536 and y80–944. The editable project remains 1536 × 1024; room, wall, furniture, and control coordinates are unchanged.
- Updated the editor preview, PNG export, HA-hosted bridge, optional cloud bridge, manual YAML, and example dashboard to use the new image bounds. The picture card now records `roomcraft_scene: full-width-v1`. Import still reverses the previous `wall-to-wall-v1` mapping and reads unmarked 3:2 cards in their original coordinates. Menu, weather, time, and edit shortcut migrate to the visible top band at 5.3%.
- Owner-private Site v21 was deployed from source commit `7510357c7f1214b9b1a38c70f0ef677eb655ee0e`. HA export/readback confirmed the `full-width-v1` card, 1536 × 864 PNG, 16:9 plan grid, 10 linked controls, visible live camera, and top weather/time/edit chrome at 5.3%. A private 1920 × 1080 Apolosign capture showed the original left and right sides—including the staircase and right exterior wall—fully visible, with no side gutters. The previous 1472 × 828 result below is historical. Physical touch alignment and a cloud-to-HA round trip remain separate checks; no live camera frame was published.

## 2026-10-31 — Earlier wall-to-wall tablet crop (superseded)

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


