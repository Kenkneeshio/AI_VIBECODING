# Roomcraft user manual

Roomcraft Studio edits the layout used by Roomcraft Home from directly above the shared 3D scene. Arrange objects, rooms, walls and terrain, then choose **Save** to publish. You can also download the image, editable project, or Home Assistant YAML separately.

## Use the live dashboard

Open **Roomcraft Home** in the Home Assistant sidebar for the live view. The bottom bar has **Power**, **Weather**, **Calendar & to-dos**, **Controls**, and **Menu**.

Open **Menu → View controls → Camera view** and choose **Waterfront · La Jolla Cove** for the sandstone cliffs or **La Jolla Shores** for the pier and park. Choose **Default** to return to your home view. The coastline uses the same weather and time of day as the home scene.

Use **On the map** for Object details and Presence tracking, and **View controls** for view presets, rotation, zoom and default view settings. **Manage** opens Layout Studio and popups for Object models, Devices and sensors, Indoor air and System health when configured. The labels from **Object details** show each linked control's name and current state. The toggle is saved in the current browser.

### Explore energy use

The Power meter shows the current reading and the last hour of recorded power. Its illustrated flow follows the direction and magnitude of the whole-home reading. Under **Energy map**, choose **Live power**, **Today**, **Calendar month**, or **Billing cycle**. Select the illustrated whole-home hub or a branch to see its readings. Use **Find a circuit or plug** to search all configured meters, including branches outside the visible tree. Tap a reading with an arrow to open its source in Home Assistant.

Calendar month starts on the first day in Home Assistant’s timezone. Its **Recorded through** timestamp shows the latest usable Recorder measurement for the selected meter. **Billing cycle** follows the meter’s actual cycle reset. **Shared circuit** means the reading covers the connected circuit as a whole. A smart plug shows its own measured load. The whole-home hub reads its own meter so overlapping channels stay separate.

### Open planning and commute tools

Choose **Menu → Location sharing** to open a map inside Roomcraft Home. Pan or zoom and select a marker for its Home Assistant details. The panel identifies the source of the configured markers. For Google account sharing controls, choose **Google sharing settings**. [Google Maps Location Sharing](https://support.google.com/maps/answer/15437054)

To add people who already share their location with you on Google, connect the account that receives those shares. [Home Assistant setup for existing Google shares](https://www.home-assistant.io/integrations/google_maps/#note-for-existing-location-sharing-users)

Tap **Calendar & to-dos** on the bottom bar for Home Assistant’s Calendar and To-do lists. On narrower screens, the button reads **Calendar**. Tap **Controls** for labeled device buttons and readings grouped by room. Controls links back to Live and Studio.

Tap **Weather** for current conditions, the next 12 hours, or the seven-day outlook when supported by the selected Home Assistant provider. Select a **Provider** to use it for both the popup and the scene in this browser. Open **Windy map** for an interactive regional map. Closing Weather unloads the map. [Home Assistant weather integrations](https://www.home-assistant.io/integrations/weather/) · [Windy map embed](https://embed.windy.com/config/map)

Choose **Menu → Commute traffic** for **All routes** or an individual route’s travel time and delay. The road cars illustrate the measured pace relative to clear-road times. Administrators can change destinations, route sources, and clear-road times from the panel. Use a route’s Google Maps link for directions. [Google Maps Travel Time](https://www.home-assistant.io/integrations/google_travel_time/)

While travel times are unavailable, the road preview shows a vehicle passing about every three seconds, alternating directions. Use **Vehicle style** to pick a design or keep **Mixed vehicles**. The current browser remembers your choice. **Reduce motion** holds the vehicles still.

The mixed fleet includes semis and motorcycles. Choose **Waterfront** under **View controls → Camera view** in Home or **View** in 3D Studio to see jet skis near shore and a cruise ship farther out.

Surfers come out from sunrise (5 a.m. at the earliest) until 11 a.m. The beach has games during the day and a small bonfire from sunset to 11 p.m. After sunset, headlights light the road ahead, walkers are occasional, and boats pass infrequently. The beach and sidewalks empty overnight. Clear night skies show constellations and occasional shooting stars. In 3D Studio, open **Scene settings**, choose **Preview weather** under **Appearance**, and change **Time of day**. **Reduce motion** holds the scenery still and keeps the stars visible.

The sun follows the home location configured in Home Assistant, including seasonal changes. In **Top down**, east is on the right and west is on the left. The sun’s angle changes the direction and length of the house and yard shadows. Clouds soften the sunlight and water reflections. To see the lighting at any time, choose **Dawn**, **Sunrise**, **Sunset**, or **Dusk** in Studio’s weather preview. Choose **Match dashboard** to return to live lighting. [Home Assistant Sun integration](https://www.home-assistant.io/integrations/sun/)

### Restore a previous layout

Sign in as a Home Assistant administrator and choose **Menu → Manage → Layout snapshots**. Select a saved date and choose **Restore layout**. Roomcraft reloads Home with the restored design and keeps the design you just replaced so you can switch back. Studio reads the same restored design the next time you open it or select **Import from dashboard**.

Roomcraft keeps up to three distinct previous layouts from successful Studio publishes and restores. Each snapshot includes the layout, object bindings, and the published plan image reference. If a snapshot's image is unavailable, choose another snapshot. If Roomcraft reports a new dashboard change, review the refreshed list before restoring. Layout history covers the design. Use the [deployment recovery guide](deployment.md) for software or resource rollback.

Open **Menu → Display** to toggle **FPS display**, **Camera tiles**, or **Reduce motion**. The FPS counter reports actual 3D scene draws and reads zero when the scene is idle. These choices save in the current browser.

Choose **Menu → Display → Display settings → Graphics** to adjust the frame rate limit, render resolution, and shadows. **Camera movement limit** lowers the cap while you reframe the scene. **Limit off-screen scenery** skips traffic, walkers, and cyclists outside the current view. **Tablet performance** sets 20 FPS, 67% render resolution, and turns shadows off. The frame rate is an upper limit and depends on how fast the device can draw. To restore graphics defaults, select 24 FPS, 100%, and High shadows.

**Insane graphics** starts a five-second preview of the higher-quality renderer. Tap **Keep Insane graphics** during the countdown to save it for this browser, or let the countdown restore your previous settings. Turn the toggle off any time to return to your manual graphics settings. The preset raises the frame cap to 60 FPS and uses native screen resolution within browser GPU limits, higher-resolution shadows, finer material details, and richer weather and water effects.

Display settings also controls headlight intensity, heat-map opacity, presence characters, character interactions, and the dock position. Each scenery layer can follow the published layout or use a browser override. **Reset display settings** restores the graphics defaults and clears the other browser overrides.

Choose **Menu → 1-minute demo** for a tour of live dashboard features, beach activity, weather, traffic and your exterior landmarks. The weather chapter shows every Home Assistant condition and all eight moon phases. The school, family house and office each receive a dedicated stop. The demo starts muted with captions. Choose **Unmute** to hear the voice track. Select **Stop** or press **Escape** to return early to your previous view and the latest live readings. With **Reduce motion** enabled, the chapters advance with the camera held still.

To customize landmark people, vehicles, activity events, pace or office satellites, select the building in Studio and use **Landmark activity** in the Inspector. These illustrative miniatures animate in both Home and Studio. See [living landmarks](landmark-activity.md) for settings and behavior.

Use **Menu → On the map → Detection zone** to see the radar's saved bounds as a light cyan dashed outline. For a switch with the Inovelli VZM32-SN profile, the solid amber outline and shaded area show the manufacturer's estimated coverage. The marker shows the calibrated switch position and the line points forward. Home's legend shows the rated range when available. Select the presence dimmer in 3D Studio to preview the same overlays and edit the display settings. Use a walk or sit test to confirm detection where it matters. [Inovelli field-of-view chart, manual page 33](https://help.inovelli.com/en/articles/8807172-blue-series-mmwave-presence-dimmer-switch-manual)

## Find and edit object models

Open **Menu → Manage → Object models** in Roomcraft Home or **Main menu → Object models** in Studio. Choose **On the plan** to find an object, **Add objects** to search the catalog, or **Home Assistant devices** to select a device and see compatible models. Choose **Bind to this object** to use artwork already on the plan. Roomcraft Home opens Studio for placement and edits.

In an object's Inspector, choose its **State entity** and the actions for **Tap** and **Hold**. Use a separate action target when the picture reports one entity but needs to operate another. A window can show a contact sensor and use a separate cover as its tap target. The preview beside each gesture describes the current result. Duplicated artwork starts without the original entity links.

Tap a light in Home for its configured quick action. Hold it for light controls, or focus it with the keyboard and press **Shift+Enter**. Home shows the controls advertised by the light, such as brightness, warm or cool white, color, and effects. Select an adjustment, then use its **Set** button to send it. Applying an adjustment can turn on a light. **Fade duration** applies to commands from the open panel. **Home Assistant details** opens the native device dialog. In Studio, the light's Inspector lists the controls available in Home. [Home Assistant light controls](https://www.home-assistant.io/actions/light.turn_on/)

Select a placed object and open **Dimensions** in the Inspector. Enter width and depth in plan pixels. **Keep width/depth ratio** applies to numeric edits and corner drags. Enter **Height in 3D** where available, or leave it blank for the model's natural height. **Reset dimensions** restores the catalog footprint and natural height.

Use **Center X**, **Center Y**, and **Rotation** for precise placement. The dining table and chairs are separate objects. Select a chair to move, resize, rotate, or delete it independently. Choose a dining table or dining chair from **Object models → Add objects** to add more.

### Connect and furnish a garage

Select **Garage door control** in Studio and keep **Roof view → Full roof** for the home-facing garage. The car appears through the doorway from an oblique view when the real garage door is open; the roof and closed shutter conceal it. Use the object list to select enclosed contents, or temporarily choose **Cutaway · show interior** while arranging them. Turn **Connect driveway to street** on and enter a width from 32–200 plan units, or leave it blank for automatic sizing. The driveway can wrap around the building to reach the street; it is omitted if no clear route exists. The current side corridor uses a width of 60.

Search **Blue Prius hatchback** and **Garage overhead light** in **Main menu → Object models** to add them. Both can be moved, resized and removed independently. Moving the garage does not automatically move its contents. Map the overhead fixture to its actual light/switch using **State entity** and its own actions; an unassigned fixture is decorative. **Save** publishes the arrangement. [Garage editing details and limits](garage-driveway.md)

### Match Home or preview an appearance

Open **Main menu → Scene settings** in Studio or **Menu → Manage → Scene settings** in Home. The visual layer switches and the bottom dock position are saved with the layout. Select **Save** to apply them to Home.

**Match dashboard** shows the same weather, lighting, and device appearance in Home Assistant Studio. The private web editor uses the last available dashboard import. Choose **Preview weather** to test any condition, day, dusk or night, a moon phase, and wind speed or direction. **Animate preview** affects the current Studio tab. Camera frames in Studio are edit handles. Home uses the camera settings and displays the authenticated feed or latest event.

Search **Fish Aquarium** or **Lizard Terrarium** to place the animated tanks. They animate in 3D and use a still illustration in the 2D plan, and the 3D animation respects the device's reduced-motion setting.

## Show family locations from Google Maps

Open **Menu → Location sharing → Connect Google Maps** from your secure Home Assistant address (HTTPS) on a computer. You need a Home Assistant administrator account. The shortcut `/roomcraft-home/home#google-location-setup` opens the same form.

1. In a private browser window, sign in to Google Maps with the Google account that already receives your family’s shares. Export the Netscape `.txt` session file using the linked instructions and close the private window without signing out. [Session export instructions](https://github.com/pnbruckner/ha-google-maps/tree/2.1.0#obtaining-a-cookies-file)
2. Enter that account’s email and choose the exported file in Roomcraft. Select **Include my own location** if you also want this account’s position on the map.
3. Select **Connect and show on this screen**. Home Assistant starts receiving shared locations. Delete the exported copy from your computer when setup succeeds.

Each browser has its own **Show Google shared locations on this screen** preference. The map uses the latest available Home Assistant location from each share. If Google expires the session, open **Manage existing connections** and follow Home Assistant’s reauthentication prompts. **Open Home Assistant setup** is available for advanced setup.

## Align the vacuum’s LiDAR map

Choose **Home → Menu → On the map → Align robot to LiDAR map**, or open the alignment tool from Studio’s main menu. Home Assistant Studio loads the linked vacuum map. Tap a fixed corner on the scan, then the same corner on the plan. Each pair records automatically. Match three corners spread across the condo. A fourth helps check scale in both directions.

Review the measured distance and corner error, then select **Use this alignment**. **Undo alignment** restores the previous draft fit. Close the survey and select **Save** to use the fit for the robot and LiDAR overlay on Home. For a straight-line distance on the scan, choose **Home → Menu → On the map → Measure LiDAR distances**, then tap two points. The ruler displays metres and feet.

The television shows the title, app or input that its Home Assistant entity reports. Its screen is white while the TV is on and black while it is off. An unavailable TV stays dark.

## Track presence on the 3D plan

Open **Menu → On the map → Presence tracking** in Roomcraft Home to see the bound switches' radar target counts and recent zone reports. A calibrated switch can show one anonymous character for each fresh target. The sensor can miss an occupant or pick up moving objects, so its count is an estimate of detected targets. It has no heart-rate or breathing-rate reading.

An administrator enables detailed reporting for the compatible switch in Home Assistant. In Home Assistant Studio, select its presence switch object and set **Radar targets entity** to the device's **Radar target count** sensor. The original red and green dot shows dimmer power. The second dot is blue when a target is on the map, amber when there is a detection without a mapped position, gray when clear and hollow gray when unavailable. Open **Presence tracking** to see the count and recent zones.

From Home, choose **Menu → On the map → Presence tracking → Tracking range correction**. In Studio, choose **Main menu → Tracking range correction** or select the presence switch directly. If you have several switches, choose which one to adjust. Use **Forward scale** for depth, **Lateral scale** for width, **Rotation offset** for direction, and **Skew** or **Flip radar left and right** to align the axes. Use **Apply alignment** to keep the fitted origin or **Use switch position** to reset the origin to the placed switch. **Save** publishes the draft. The advanced transform field accepts six affine coefficients.

Characters walk around furniture and walls on the second-floor condo, upper landing and authored stair treads. The floor ring stays at the measured radar point as the character takes a clear path. Three seconds of fresh, steady readings near a reachable object can start a pose such as sitting, reading, cooking, watching fish or playing on a mat. These are illustrated guesses based on position. Use **Menu → Display → Display settings → Allow character interactions** to turn them off on this screen. **Reduce motion** keeps each pose still.

While the linked occupancy sensor is on, a character remains at the last usable point after coordinate reports stop. If there is no point yet, Roomcraft marks an approximate area. A small person symbol marks the character if the view is blocked. The amber floor ring and **Presence tracking** menu identify held or approximate placements. The character clears on vacancy. Each switch tracks independently, so overlapping coverage can show the same target twice. [Home Assistant presence setup](../ha-presence/README.md)

Open **Menu → On the map → Radar heat map** to see recorded position density over 15 minutes, 1 hour, 24 hours, or 7 days. Pair it with **Detection zone** to compare observations with the configured or nominal footprint. Empty cells show no recorded hits in the selected period. Use a controlled walk or sit test to assess coverage there. Native occupancy can remain on when the radar stops sending fresh coordinates. [Inovelli stationary presence and stay zones](https://help.inovelli.com/en/articles/12773613-blue-series-mmwave-presence-dimmer-switch-advanced-mmwave-configuration)

In Home Assistant Studio, select the presence switch and choose **Calibrate from measured points**. Pick at least four real floor spots spread across the radar view. Use distinct kitchen, dining, and sofa-side points. Have one person stand on each spot while the dialog collects three fresh readings. Enter a taped distance between the first two spots to compare physical scale. Review fit error, the independent check, and the fitted sensor origin before applying the result. If the independent error approaches half the separation between the kitchen and dining test points, check point placement and repeat the survey. **Apply to draft** previews the new calibration. **Save** publishes it.

Use **Forward scale** to align near and far positions on the floor plan. To change where the Inovelli VZM32-SN physically detects people, adjust its detection depth and width in the Home Assistant Zigbee device settings. Export the Roomcraft alignment when the live position, heat map and detection outline agree at your reference spots. The heat-map legend counts recorded bins outside any authored configured bounds for troubleshooting. [Inovelli physical range settings](https://help.inovelli.com/en/articles/11657832-blue-series-mmwave-presence-dimmer-switch-basic-configuration-guide)

## Change the view

Roomcraft Home and Studio start in **Default**. It uses your saved angle or opens directly overhead. In Home, open **Menu → View controls** for view presets, rotation, zoom and reset. In Studio, use **View** and its nearby camera buttons. Presets include **High angle**, **Dollhouse**, **Corner**, and views from the north, east, south or west. Directions follow the plan, with north at the top of **Top down**.

Choose **Free view** to orbit. Drag across the scene to rotate and tilt. Pinch or scroll to zoom. With the scene focused, use the arrow keys and **+** or **−**. On the dashboard, drag from an open part of the scene and tap devices and cameras as usual. To open at a particular angle, choose **Free view**, set the angle and zoom, and choose **Main menu → Save as default**. Roomcraft Home and the Home Assistant Studio use the same default for your signed-in account. The private web editor saves the angle in the current browser. Choose **Main menu → Use Top down as default** to clear your saved angle. Select **Default** from **View** to return to it at any time.

In Studio, choose a 3D preset to select and drag objects. **Free view** dedicates the canvas to camera movement. Picking a catalog object returns to your last 3D preset for placement. The Inspector controls size, rotation, finish and device binding. Camera and interface items have labeled placeholders in editing views. Choose **2D plan** for the illustrated view. Room, wall and reference tools also switch to that view.

Studio opens the same 3D scene as Home from directly above. The palette chooses objects, floor finishes, rooms, or walls. The Inspector edits the selection. **Save** publishes the draft, and **Return to live dashboard** opens Home from the adjacent button. **Import from dashboard** remains in the palette for refreshing a draft.

## The plan and its perspective

![Bundled corrected furnished plan used as the visual reference](../site/public/assets/floorplan.png)

The canvas is a top-down plan with lightly raised walls and furniture. The balcony and stair are outdoors at left. The stair begins at the lower-left landing and descends toward the top-left. The house, balcony, and lower-left stair landing are on the second floor. The detached garage sits on the first-floor ground plane. Choose **From west** to see the height difference clearly. Doorways between upstairs rooms remain on one floor level. Bedroom, study, baths, and living spaces have different finishes. The illustration documents the starting layout. Studio renders the current authored scene.

In the 3D views, look across the street for sand dunes, beach umbrellas and a curved shoreline with boats. Paths from the far sidewalk lead through the dunes to the beach. The beach appears above the house in **Top down** and moves with the rest of the scene when you rotate or zoom.

Place a table lamp, plant, or humidifier over a compatible tabletop and Studio sets it at the surface height. When a move would overlap solid furniture, Studio keeps the last valid position and identifies the object in the way. Rugs and compatible tabletop arrangements can overlap their furniture footprints.

### Full-width plan export

The plan export keeps every original column, x0–1536, and uses project y80–944 for a 1536 × 864 image. The editable 1536 × 1024 project still holds the house, stair, balcony, rooms and furnishings. Export stores the image and matching control placement with the project. On the tablet, Roomcraft Home projects the controls over the 3D scene.

Rugs, windows, cabinetry, bath fixtures, furniture, lights, controls, and newly placed catalog objects can be selected, moved, resized, rotated, or removed independently. Floors, walls, railings, and stairs also come from editable layout records.

![Public-safe Roomcraft plan capture with recessed windows, corrected sofa, movable room lighting, ceiling fan, and a camera placeholder without private media](images/published-plan.png)

This public-safe PNG shows the corrected sofa orientation, recessed blue windows, distinct floor textures, movable light fixtures, the five-blade ceiling fan, and a drawn camera placeholder on the left. The newer office desk lamp, second camera frame, and live device treatments are not shown in this older static graphic. Live camera media remains a separate authenticated Home Assistant overlay. The upstairs rooms remain on one level. The photo-inspired baby play area sits in front of the sofa. The [legacy screenshot archive](legacy/README.md) retains earlier flat-window captures for comparison.

## 1. Open the editor

In Roomcraft Home, open **Menu → Manage → Layout Studio**. On the home network, you can also open `http://<HA-LAN-IP>:8123/roomcraft-home/studio` and sign in. An administrator account can publish a layout. Studio loads the current saved project on opening and offers **Recover previous browser draft** when a different local draft exists. The local draft remains available during a Home Assistant outage.

**Roomcraft Home** is the owner's default dashboard. **Main Dashboard** remains available in the sidebar and is the system default. Roomcraft Home keeps the shared layout for its Home and Studio views. Home Assistant Companion is the default Android Home app on the Apolosign Calendar wall tablet, so pressing Home returns to the panel. [Tablet access and recovery](tablet-access.md)

The owner-private cloud editor is an alternate route when available; use the Site URL supplied by the owner. It has its own sign-in. Both editors share the dashboard's saved `roomcraft_layout` and load it on opening. Use **Import from dashboard** to refresh without reloading the page after someone else publishes a change. Use Layout Studio on the home network as the normal authoring path.

This manual describes the HA-hosted Studio and owner-private cloud editor. Both editors load the current Home Assistant layout on opening; a different local browser draft remains recoverable. The own-tab Studio fallback and layout transfer have readback evidence in the [changelog](../CHANGELOG.md).

If Chrome leaves the embedded editor blank, use **Open editor in a new tab** inside Layout Studio. Keep the Studio tab open while editing in the new tab: it supplies the authenticated dashboard connection through the opener. A direct visit to `/local/roomcraft/editor.html` has no such connection and cannot import or export to the dashboard.

Studio stays directly overhead during edits. **Focus canvas** hides editing panels for a larger view. Use **Fit**, the zoom buttons, or the wheel to change magnification. Use **Pan** or Space-drag to move around the plan.

## 2. Work with furniture and objects

Open **Objects**. Search the catalog or filter by category, select an item, then click its location on the plan. The catalog includes living and bedroom furniture, kitchen and bath objects, plants, rugs, lamps, windows, baby play items, safety pieces, climbing blocks, a fireplace shelf, ceiling fan, robot vacuum art, and camera thumbnails. The **Living & dining**, **Bedroom & storage**, and **Lights & lamps** categories include an 88-entry crafted-miniature collection. Search `crafted`, `detailed`, `realistic`, `upholstered`, `wood`, `bed`, `sofa`, `desk`, or a specific construction such as `canopy` or `storage`. The art uses warm, believable miniature materials—fabric seams and piping, wood grain and joinery, hardware, glass, ceramic, and metal—without branded characters or copied game assets. **Climate, doors & fans** includes a wall thermostat/AC, window fan, and garage door control; these are perspective-matched editable objects.

Select a placed catalog item to edit its name, position, angle, and product options in the **Inspector**. **Style** changes the construction and uses that product's authored dimensions. **Size** changes to a real catalog size and also applies its authored width and depth. **Color / finish** changes the material or color while keeping the object's current dimensions, including a manual resize. All three preserve the object's position, rotation, Home Assistant binding, and custom name. The Width and Depth fields remain available for a deliberate custom footprint. Rotate, duplicate, resize, move, and remove work like any other object; hold **Shift** while resizing to keep proportions.

### Choose a bed construction and size

The Bedroom catalog includes 42 bed entries rather than one picture stretched to many shapes. Choose among quilted, crib, toddler, low-platform, arched-upholstered, drawer-storage, four-poster-canopy, daybed, and bunk constructions. Available sizes depend on the construction and include crib, toddler, twin, full, queen, and king. For example, a platform bed offers twin through king; a canopy offers queen and king; a daybed and bunk use twin geometry.

Place a bed, then use **Style** to compare constructions and **Size** to choose the intended footprint. Watch Width and Depth update to that product's authored values. Use **Color / finish** afterward to compare wood, upholstery, metal, or painted options without moving or resizing the bed. A bunk should keep its guard rail and ladder, a storage bed its drawer fronts, and a canopy its four posts and rails at every supported finish; if a choice loses those features, undo and report it as an art regression.

Windows and wall-mounted objects snap near walls. If the editor asks you to click closer to a wall, move the pointer to the intended wall segment and try again. After placing a window, zoom to 100% and check that its long edge, frame depth, and shadow follow that wall. Drag it along the wall if it needs repositioning. Use **Select** to drag an item. Use **Erase** or the Inspector's remove action to delete it.

**Remove all objects** clears furniture, rugs, windows, fixtures, lights, and interface objects while keeping room boundaries, floor finishes, and walls. The confirmation shows the object count. The overhead view stays in place. Use Undo to restore the objects in the current draft.

The dining ceiling fan and its center light are separate objects even though they occupy one physical fixture. Select the small center light to move or configure the light switch; select a blade or outer fan area for the motor. Each object's own Home Assistant switch alone controls its status dot and animation. The exterior garage is also an editable detached-garage object; its cover state animates only the paneled door.

The [window artwork comparison](images/window-perspective-comparison.png) shows why the lower, recessed glazing is the Design view's target for the original openings.

![Furniture and small object detail in the illustrated perspective](images/object-detail.png)

### Arrange the photo-inspired play area

Search **1977** or **photo** in **Objects** to show 16 color and shape variants across 11 new designs. The multicolor bear-panel play yard, gray leaf mat, brown checker puzzle mat, wooden play arch, colorful activity table, teddy bear floor chair, gray bolster, and bunny plush are placed in the current living-room plan. They remain separate objects: choose **Select**, click one, drag it, or enter its position, dimensions, and angle in the Inspector. The mats sit underneath the raised play objects, and the ceiling fan remains visible over the play area in the rendered plan. Use **Undo** if a placement blocks a lamp or other control.

The catalog also has individual bear-face fence panels in six colors, a white mantel with dark tile hearth, and a toy side shelf. Place these after confirming the actual living-room wall and fireplace position; the current plan's TV and windows do not establish that location. The objects are illustrated interpretations of the supplied photo in the plan's perspective, not a measured or exact recreation. The source photo and its people are not part of the catalog or dashboard graphic.

## 3. Change a floor finish

Open **Floors**, choose a finish, then click the room to paint. A selected room's **Floor finish** menu in the Inspector provides the same control. Each room stores its own finish; the shared level through doorways stays continuous. To change a room boundary, select the **Room** tool, click that room, and drag a corner handle. **Rooms → Add room** creates another editable floor region.

For clean results, keep room polygons inside their walls and avoid overlapping neighboring floors. If a new room covers an existing room, reshape its points or remove it.

## 4. Change walls and fences

Choose **Wall** or **Fence** and drag from the start to the end. You can also tap each endpoint. Hold **Shift** for a horizontal or vertical segment. Open **Walls** to select any segment, including exterior walls and balcony rails. Drag the segment or an endpoint, or enter exact coordinates in the Inspector. The Inspector also changes the type and finish and removes the selected segment.

Open **Walls** to control **Snap segment ends**. Draw a wall or fence, or drag an endpoint near another corner or wall centerline. The green dot shows the snap point. **Join nearby ends** closes small gaps up to 18 project pixels as one edit, so **Undo** restores the previous positions. The 3D view gives the walls a shared height and preserves the larger openings shown on the plan.

Use **Rooms** for the balcony and porch surfaces and **Objects** for the exterior stair. After changing a wall, check the adjoining floor polygon and any nearby window or wall-mounted object. These are separate editable layers.

## 5. Link lights, fans, controls, and cameras to Home Assistant

![Four-step diagram: place illustrated objects, assign example entity IDs, export, and view live state in Home Assistant](images/live-binding-flow.svg)

The plan's markers represent Home Assistant controls. Select a marker to change its title, entity ID, location percentage, tap action, or hold action. The Inspector accepts an entity ID in `domain.object_id` form, such as `light.example_living_room`.

In Roomcraft Home, use **Menu → On the map → Object details** when identifying controls or troubleshooting a binding. A compact label appears near each interactive object with its name, current Home Assistant state and entity ID. Camera tiles show their bound camera entity beside the frame. Turn the option off to clear the labels. The choice is remembered separately by each browser or tablet.

### Make a lamp or fan a live control

1. Place a lamp, ceiling light, or fan in its actual room, then select it.
2. In the Inspector, enter the matching Home Assistant **Entity ID**, for example `light.example_living_room` or `fan.example_ceiling_fan`. Leave it blank for a decorative object. Choose **Live graphic** if Automatic classifies the fixture incorrectly: light, fan, air conditioning, window/blinds, door/garage, general device, or no state graphic.
3. Export to the dashboard and return to **Roomcraft Home**. The object itself is the control target. Its graphic and accessible name show the current state. Tap to use the configured action, or hold to open details. Unknown or unavailable state stays neutral. [State and motion guide](live-object-graphics.md)
4. If a separate control marker already represents the same entity, review its position before publishing. The linked fixture takes the entity's placement in the exported plan so there is one control for that device.

The furnished scene includes bedside and office desk lamps plus room light fixtures as editable objects. The office has one physical desk lamp, drawn with the same raised lamp style as the bedroom; it is the single office light control. The previous separate study ceiling fixture duplicated that light and has been removed. These objects can be moved, resized, or removed without changing the original PNG. A fixture with no entity binding is artwork only. When a crafted light is bound, the dashboard keeps its table, floor, faceted ceiling, pendant, or sconce construction while Home Assistant supplies truthful on, off, and unavailable treatment.

The dining ceiling fan and its center light are two independent controls. Tap the blades to toggle the verified motor channel; hold for native details. Tap the small center lamp to toggle the verified light channel. Its compact transparent target leaves the surrounding blades available for the fan. The blades rotate in low-frame-rate steps only while the motor channel reports on, and the center adds a glow only while the light channel reports on. Reduced-motion preference stops animation without changing state. The old ceiling-fan entity and scene controls are historical and are not used by these artworks.

The master humidifier and dining air purifier use the same object-first pattern. Their illustrated appliances are the buttons. Mist or airflow appears while that appliance reports on. Open **Menu → Manage → Indoor air** for air readings or tap **Power** for electrical readings. A sensor row opens Home Assistant details.

The robot is intentionally compact. Tap it for its authenticated map, status, Start/Pause/Dock/Locate, and available room actions; hold for native details. The robot moves on the plan only from fresh calibrated map coordinates and animates only while Home Assistant reports cleaning or returning. A fixed robot is omitted from the exported background so there is never a second frozen copy.

The current plan includes these additional editable controls. Select one to inspect or change its private binding; the table describes its role without publishing device IDs.

| Object | Location and live graphic |
| --- | --- |
| Office desk lamp | One bedroom-style lamp on the study desk; the only office light control |
| Hallway thermostat / AC | At the hall wall; climate treatment |
| Office window fan | Freestanding in the office; it is not wall-locked and its fan treatment is driven by its switch |
| Garage door control tile | On the exterior balcony below the garage camera; door/open treatment |
| Garage camera thumbnail | On the open balcony tile; idle event preview, tap to start its own authenticated stream |

### Add a camera thumbnail

![Camera state guide showing a dated front-door still and garage preview, connecting, and live states](images/camera-state-flow.svg)

1. In **Objects**, choose **Cameras & controls → Camera thumbnail** and place separate frames for the doorbell, overhead view, and garage. Each is independently movable and resizable.
2. Enter each frame's `camera.*` entity in **Camera entity ID**. For a dated last-event image, add its `image.*` entity in **Event image entity**.
3. For the doorbell choose **Live during an event** and list its ring/person `binary_sensor.*` entities in **Event sensors**. Between events the last image stays visible. A ring or person event starts a 60-second live attempt; if that battery camera cannot stream, the tile returns to the still.
4. For an overhead camera that already plays in Home Assistant choose **Always show live feed**. For the garage choose **Live stream** so a tap requests a stream. Hold or right-click any frame for native camera details. Export, then check all three frames independently in **Roomcraft Home** while signed in.

The current installation has three frames: a front-door dated still between events, a separately bound garage stream, and an overhead stream. A private tablet capture showed both garage and overhead **LIVE** after decoded playback; a real doorbell event has not yet been observed in this release. Check each selected feed and trigger sensor in Home Assistant before changing its binding. The overhead mode mounts native playback but does not send a wake command merely because it appears.

The design canvas shows stylized placeholders, not private camera frames. The dashboard fetches media through the current Home Assistant session. A tile says **LIVE** only after decoded media advances or a playing frame is detected; otherwise it shows **PREVIEW**, **CONNECTING**, or an unavailable message as appropriate. Failure in one frame does not replace another. Camera URLs and tokens do not belong in the exported layout or public repository.

### Read the outdoor weather

The sky strip at the top of Home shows clouds and the sun or moon, with a line below it marking the start of the 3D scene. On the ocean, the reflected sun or moon casts a trail of light across the moving water. Both follow Home Assistant weather and daylight. **Reduce motion** holds the sky and water animation still.

The bottom **Weather** button shows the current condition and temperature when available. Tap it for native Home Assistant details.

Confirm a device's physical location in Home Assistant before placing a control. A friendly name does not prove the room. The editor stores control placement; Home Assistant performs actual device actions. A device that is unavailable or missing should be corrected in Home Assistant before use.

The [control and compact-menu guide](ha-controls-and-menu.md) maps the known fixtures and explains which interactions belong on illustrated objects. Its [sanitized entity inventory](ha-inventory/README.md) is a dated metadata snapshot, grouped by Home Assistant area and domain. It omits changing device values and private identifiers. The earlier inventory snapshot recorded the office bulb as unavailable; availability has since changed, so check its current HA state before editing that binding. No primary room light was verified for either bathroom, the dressing nook, or the balcony; keep decorative fixtures unbound until the real entity is confirmed.

## 6. Save, import, and publish

Edits save in the current browser automatically. For a portable backup, use **Export → Editable layout JSON**. On another browser, choose **Import layout JSON**. Keep this JSON private if it contains real entity IDs or room details.

Use **Import from dashboard** in the palette and **Save** in the header to work with the live dashboard.

1. **Import from dashboard** loads its saved editable project and current controls. Save your current draft as JSON first if you want to retain it.
2. Edit rooms, walls, floors, objects, and markers.
3. **Save** renders a detailed PNG, uploads it to Home Assistant, and saves the editable project with the dashboard. Reload the dashboard to see the result.
4. Import once more to verify that the same project opens for the next editing session. If you switch between the HA-hosted and cloud editors, import in the second editor before editing.

Select **Return to live dashboard** next to **Save** in the header to return to Roomcraft Home. The HA-hosted editor uses the same-origin dashboard route. The owner-private Site uses the dashboard address supplied by its authenticated connection. If you have unpublished edits, the editor asks before leaving and keeps a browser draft. Choose **Cancel** to remain in Studio or **Save** when you want the edits visible on the wall panel. During an import or export, the control asks you to wait. If the dashboard link is unavailable or the unpublished draft cannot be saved, Studio displays a message. Export editable JSON for recovery if browser storage is full.

The editor checks the dashboard revision before exporting. If another change happened, import the newest dashboard version and review your draft before retrying. This protects a teammate's more recent dashboard edit.

The **Export** menu also provides a PNG and a manual Home Assistant YAML fallback. The YAML references a local image path; copy the PNG to that path before applying it manually.

Tap a bound robot vacuum in Roomcraft Home to open its state and map panel. The panel provides Start, Pause, Dock, Locate and room buttons when the map supplies room identifiers. Hold the robot to open native Home Assistant details. With a valid map calibration, its marker follows fresh positions where it fits on a floor while cleaning or returning. A report on stairs or too close to an edge leaves it at its last valid position. Before the first valid report, it appears at the authored dock if the dock fits on the floor. Recheck the calibration if the vacuum map or illustrated plan changes.

**Menu → Manage → Devices and sensors** opens the device drawer on Home. The drawer includes **On plan**, **All entities**, search with registry availability and curated groups for planning, weather and air quality, lighting, security, energy and the robot vacuum. [Main Dashboard map](main-dashboard-map.md)

## Undo and recovery

### Automatic edit protection

Studio checks each completed edit. It softens abrupt terrain steps and removes exactly repeated room corners when that is safe. Paint, terrain props and valid hills remain in place. A crossed room boundary, collapsed wall or other unsafe geometry restores the preceding draft and reports why. A rejected edit preserves Undo and Redo.

Choose **Main menu → Check & repair layout** to check the current draft. Repairs are one undoable change and stay local until **Save**. If nothing needs repair, Studio reports that the checks passed. Existing terrain is not resculpted just by opening a layout or moving furniture. The [safe-editing guide](edit-safety.md) explains the supported checks and limits.

### Undo and browser recovery

- **Undo** and **Redo** step through the current editing session.
- **Reset to starting plan** restores the initial furnished design; export JSON first if you want the current state later.
- **Recover previous browser draft** appears when a different local draft was replaced by the current dashboard layout or when an older legacy draft is available. The editor also keeps a route back to the pre-recovery layout.
- A dashboard backup is separate from browser local storage and the JSON file. Use all three appropriately when making major changes.

## Troubleshooting

| Symptom | Action |
| --- | --- |
| Object will not place | Return to **Design**; for windows and wall fixtures, click close to a wall. |
| A linked lamp or fan shows no live state | Check that its `light.*` or `fan.*` entity exists in Home Assistant, then import the current dashboard layout and export again. An unbound object stays decorative. |
| Camera thumbnail shows unavailable | Check that frame's `camera.*`, optional `image.*`, and event sensors in HA. An event still needs HA's authenticated image proxy. The garage requests a stream after a tap; the doorbell attempts one during an event; the overhead mounts native media. **LIVE** requires decoded playback. A failed stream returns to a preview or unavailable message. |
| Floor looks misplaced | Select **Room**, inspect its corner handles, and keep the polygon within the room. |
| A wall or fence is hard to select | Open Walls and select the segment from the list. Edit its endpoints in the Inspector. |
| Dashboard export says the dashboard changed | Import the dashboard again, compare changes, and retry. |
| Dashboard image updates but browser shows the prior image | Reload the Home Assistant view; its browser may still hold the earlier image. |
| Layout Studio shows **Configuration error** after a card update | Reload the affected Home Assistant tab. If the error persists, check the registered Roomcraft card resource and dashboard configuration using the [deployment guide](deployment.md). The cause of the observed transient error was not confirmed. |
| HA-hosted Studio opens but the editor is blank | Click **Open editor in a new tab** in Studio and keep the Studio tab open. The new tab can still import and export through its authenticated opener. |
| HA-hosted Studio opens but transfer is unavailable | Confirm you opened `/roomcraft-home/studio` while signed in to Home Assistant, or used its own-tab button while keeping Studio open. Direct `/local/roomcraft/editor.html` lacks the dashboard bridge. Publishing needs an administrator account. See the [deployment guide](deployment.md). |
| Cloud editor transfer is unavailable | Confirm the owner-private Site sign-in and its server-side Home Assistant connection. |


## Holiday themes

Choose **Home → Menu → Household → Holidays & celebrations** or **Studio → Main menu → Holidays & celebrations**. Search the 31 presets, preview the art, and select **Auto**, **Keep on**, or **Off** for each. Auto runs for seven days centered on the holiday by default; Keep on continues until changed; Off disables only that holiday and stays saved in following years. Select **Save** in Home, or **Apply** then the main **Save** in Studio. End preview restores your previous view without saving.

Change the window, intensity, decorative glow and animated events, or open placement controls to move/resize/rotate the display. Dates use Home Assistant's time zone. Regional conventions and verified coverage appear with each holiday; use an annual `MM-DD` or year-specific `YYYY-MM-DD` override for your family's observance. Missing future dates do not activate automatically. All holiday effects are decorative; actual lights and switches keep their real states. See the [illustrated holiday guide](holiday-themes.md).

## Living world and wildlife

Open **Home → Menu → Household → Living world & wildlife**, or **Studio → Main menu → Living world & wildlife**. Switch individual marine species and scenery categories on/off. Adjust **Density**, **Pace**, **Variety** and **Seed** to change the mix; the same seed/settings/time reproduce the same events.

**Preview** closes the menu and frames the enabled wildlife. **End preview** restores your previous view without saving. Use **Save** in Home, or **Apply** followed by the main **Save** in Studio. Studio supports Undo/Redo and layout import/export for these settings.

Dolphins leap, whales surface and spout, sharks cruise, and seals and storybook walruses swim or rest. Quiet overnight and rough-weather behavior still apply. Beach activities, butterflies/birds, foliage drift and water accents complement the scene; weather effects follow actual conditions. Turning off decorative variations does not turn off real household controls or hide measured traffic. See the [illustrated wildlife and engineering guide](living-world.md).
