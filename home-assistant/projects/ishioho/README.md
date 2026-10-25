# ishioho

A landscape Home Assistant dashboard with four illustrated themes: Pokémon, Pokédex, Animal Crossing, and a Stardew-inspired countryside view. Room pins open contextual controls, while a searchable directory exposes every current entity allowed by the dashboard configuration.

**Status: tested prototype.** This is reusable frontend source with synthetic examples. It is not a copy of a live home's configuration, and a GitHub update does not deploy it.

![Stardew-inspired day floor-plan artwork](ishioho/stardew-still-v1.png)

The image is the bundled static artwork. Device readings and camera images are not part of this preview.

## Behavior

- Four views reuse the same controls and underlying floor plan. Stardew reuses the Pokémon v8 configuration: Porch outside, Entry inside, Balcony on the left, and the single-car garage below the home, reached through the porch stairs.
- Pokémon v8 and Stardew use static PNG day/night backgrounds; interface effects still animate. Pokémon v8 uses 2800×1400 raster exports of its SVG artwork. Stardew uses 1774×887 generated illustrations with separate editable SVG reconstructions. Pokédex and Animal Crossing retain their SVG animated/still backgrounds and prior room coordinates.
- The panel fills the screen, with status, map settings and thumbnails in the **Controls** popup. Pokémon and Stardew preserve the artwork's 2:1 proportions and align pins with the contained image instead of stretching rooms to the screen.
- Room popups combine an explicit entity list with exact Home Assistant area metadata. The directory supports name/ID search, domain, area, availability, and pagination.
- Native entity details provide device-specific controls. Unknown and unavailable current entities remain inspectable; unsafe generic toggles are not offered for covers, locks, or alarms.
- Camera popups use `custom:webrtc-camera`. Optional Eufy start/stop services support on-demand viewing; sessions started by the card are released when the popup closes.
- The robot marker shows its reported room only when location is available and unambiguous. The robot's own map camera provides its precise position and route.
- Weather, moon phase, sunrise/sunset, and automatic day/night appearance come from Home Assistant entities. A manual day/night preview changes appearance only. A calculated moon fallback is labeled as calculated.
- The Stardew map animates the **current** provider condition in exterior sky and garden bands: sunlight, moonlight, clouds, wind, rain, snow, fog, and storms. Near-horizon sun telemetry adds a dawn or dusk tint. The separate **Next hours** strip animates predicted conditions without making the map appear to show future weather. Pause and reduced-motion settings stop decorative animation.
- The weather popup shows the remaining hourly outlook for today and dated upcoming periods when the provider supplies them. Forecasts use the Home Assistant time zone and a shared 15-minute cache; unavailable or stale data is labeled. Missing precipitation probability is never inferred from precipitation amount.
- Alerts cover configured binary events, garage-open state, maintenance events, unavailable monitored entities, and PM2.5 readings over the current fixed threshold of 35.

## Prerequisites

- A Home Assistant dashboard supporting local JavaScript module resources and native cards.
- The [WebRTC Camera integration/card](https://github.com/AlexxIT/WebRTC) for camera views. Camera entities must already provide usable streams. The dashboard does not install or configure cameras.
- Optional [Eufy Security](https://github.com/fuatakgun/eufy_security) integration for the example on-demand garage camera. Its configured start/stop services must exist.
- Entities for your lights, climate, power, garage cover, robot, and map camera. Configure the underlying integrations separately.
- A weather entity, `sun.sun`, and optionally the official [Moon integration](https://www.home-assistant.io/integrations/moon/). The example uses a [Met.no](https://www.home-assistant.io/integrations/met/) weather entity, but the card accepts another weather entity ID. The outlook requires that entity to support Home Assistant's [weather forecast action](https://www.home-assistant.io/actions/weather.get_forecasts/); current conditions still work without forecasts.
- Node.js 18 or newer to run the isolated checks. There is no npm installation or build step.

This prototype was checked in one Home Assistant installation and in desktop and phone-landscape browser layouts. A Home Assistant release compatibility range has not been established.

## Install

1. Back up the dashboard configuration and any existing files with the same names. Keep that backup private.
2. Copy the complete `ishioho/` and `pallet-house/` folders to `/config/www/` on your Home Assistant host. Preserve the font license in `pallet-house/font-OFL.txt`.
3. Copy `examples/catalog.json` to `/config/www/ishioho/catalog.json` and `examples/robot.json` to `/config/www/ishioho/robot.json`. These contain synthetic metadata; edit them locally using your actual assignments, or use empty `entities`, `areas`, and `room_segments` arrays. State values always come from the connected Home Assistant frontend.
4. Add `/local/ishioho/ishioho-panel.js` as a **JavaScript module** dashboard resource. The main module imports the other modules and base card automatically. Preserve the versioned artwork filenames: Pokémon uses `-v8.png` and Stardew uses `-v1.png`.
5. Create a separate dashboard with URL path `prototype-copy`. The current theme navigation expects this path. Copy the JSON object in `examples/dashboard.json` into the dashboard raw configuration editor, replacing entity IDs as described below. The raw editor accepts JSON's YAML-compatible object syntax.
6. Reload the browser. When updating an existing installation, bump both the top-level resource query and any changed imported module queries. The panel and environment module share the asset-selection method; loading a new panel with an old cached environment module can prevent rendering.

Use supported Home Assistant dashboard editing or APIs for configuration and SSH/SCP or another supported file method for assets. These files do not require a Home Assistant restart by themselves.

The **Controls** popup includes a browser fullscreen button. A kiosk browser may need its own fullscreen setting. The Home Assistant navigation link supports an existing kiosk-mode installation; this project does not install or configure kiosk mode or change the default dashboard.

## Configure

[The example dashboard](examples/dashboard.json) includes all four panel views: `home`, `pokedex`, `crossing`, and `stardew`. All IDs, names, and metadata in `examples/` are illustrative. Matching an example ID on your system does not prove that its camera or physical room is correct.

| Field | Purpose |
| --- | --- |
| `theme` | `pokemon`, `pokedex`, `crossing`, or `stardew` |
| `rooms` | Room IDs, names, pin percentages, curated entities, optional temperature/humidity/status, exact `area_names`, and explanatory notes |
| `cameras` | Ordered `{entity, name}` entries; optional paired `start_service`/`stop_service` names for Eufy on-demand streams |
| `lights`, `climate` | Quick control entities and thermostat |
| `outside`, `outside_humidity`, `living_temp`, `power` | Summary sensor IDs; `living_temp` supplies the current Dining summary tile |
| `weather_entity`, `moon_entity`, `sun_entity`, `night_assets` | Environment sources and day/night artwork selection |
| `vacuum`, `vacuum_battery`, `vacuum_map`, `robot_room` | Robot controls, telemetry, native map camera, and reported room |
| `garage` | Garage cover entity |
| `events`, `maintenance`, `air` | Lists of `{entity, name}` for alerts and air sensor readings |
| `monitored`, `energy`, `calendars` | Availability alerts, power detail entities, and native calendar view |
| `temperatures` | `{entity, name, humidity?}` entries for the climate popup |
| `aliases` | Optional display labels keyed by entity ID |
| `excluded_entities` | IDs removed from the searchable directory and curated room membership |

Remove an unusable camera from `cameras` and room lists, then add its ID to `excluded_entities` if it should also be hidden in the directory. This affects this dashboard only. The example excludes `camera.front_door` to demonstrate the configuration; it makes no claim about any device with that ID.

Only place a control in a room after confirming its physical location. A device's friendly name is not a location source. Unknown assignments belong in the directory's **No area assigned** group. The illustrated balcony plants are decorative; they do not imply plant sensors or irrigation controls.

`examples/catalog.json` documents the metadata schema: `entities` is an array of `{entity_id, name, domain, area_id, area_name, device_id, device_name}`, and `areas` is an array of `{area_id, name}`. The card lists current `hass.states`, enriched by this metadata. Registry entries with no runtime state are not shown. New runtime IDs remain searchable even if absent from the catalog. Keep any real catalog private.

`examples/robot.json` supplies `room_segments` with display names for duplicate-room detection. The marker uses the live room sensor and the vacuum's `located` attribute; it does not project raw map coordinates onto the decorative art. Robot map content comes directly from the configured map camera.

## Current integration assumptions

This is a prototype with several installation-specific constants still in the source. Remap them before using a different dashboard path or robot integration:

- Theme links in `ishioho/ishioho-panel.js` use `/prototype-copy/{home,pokedex,crossing,stardew}`.
- The garage popup selects `camera.garage_camera` from `cameras` by exact ID.
- The robot directory matches `l10s_ultra` in entity IDs; the robot popup's room, cleaned-area, and cleaning-time metrics also use that prefix. These remain explicit source edits even when the top-level vacuum IDs are changed.
- Room mapping recognizes a fixed set of names such as Dining, Living Room, Kitchen, Master Bedroom, and Hallway. Ambiguous Bathroom reports and duplicate segment names hide the decorative marker.
- Outdoor fallback IDs are `sensor.hub_temperature` and `sensor.hub_humidity`. Set `outside` and `outside_humidity` explicitly to avoid relying on them.
- The artwork and pin coordinates describe the included floor plan. Replace the artwork and coordinate data to represent another physical layout; it is not a floor-plan editor.
- Pokémon and Stardew use Entry at `(25.5%, 55%)`, Porch at `(15.089%, 73.291%)`, Garage at `(16.246%, 49.84%)`, and Balcony at `(19.023%, 28.24%)`. Pokédex and Animal Crossing keep their previous room coordinates and have no separate Porch pin. `room-positions.json` records the Pokémon overrides reused by Stardew.
- Camera labels describe configured feeds. Confirm that each one actually works before including it. Camera connectivity depends on the integration, network, and device state.

## Verification

From this project directory, run:

```sh
node tests/run.cjs
```

The runner stages sources, synthetic fixtures, and artwork in a temporary directory, then runs **123 checks**: 28 component, 18 directory, 39 environment, and 38 base-card checks. It removes only its own temporary directory after checking its resolved location. Home Assistant, network access, camera playback, and device actions are mocked.

Checks cover pagination across a generated inventory, configuration exclusions, unassigned areas, robot location honesty, day/night selection, forecast caching and time-zone boundaries, escaping, unavailable entities, camera session ownership/races, and native-card configuration. The tests do not prove physical device actuation or camera compatibility on another installation.

During prototype development, browser checks covered the original three themes, searching and native entity details, room popups, a working garage feed, the robot's native map, and a phone-landscape viewport. Real lights, covers, climate equipment, and vacuum commands were not actuated as part of those checks. Recheck your own configured feeds, room placement, unavailable states, and mobile layout after installation.

The v8 Pokémon update was also checked on the target tablet in day and night modes, including the garage popup. Its PNG backgrounds removed the observed SVG flecks, and the contained image and pin layer preserved room proportions. These checks concern that installation; bundled camera examples are not verified feeds for another home.

The Stardew view was checked on the same 1920×1080 tablet in day and night modes. All four theme tabs fit, the garage popup played a live feed, and the tablet was returned to automatic appearance. A synthetic browser check also covered 844×390 and 1280×800 layouts without tab overlap. No garage door or other device controls were operated during this verification.

The weather update was rechecked on that tablet with the live Met.no and sun entities. The main map showed current sunny conditions and a separate hourly outlook; the scrollable weather popup displayed the remaining local-day periods, upcoming periods, and exact sunrise/sunset readings. A night appearance preview was captured and returned to Auto. Isolated browser checks covered rainy, snowy, foggy, windy, stormy, disconnected, dawn, dusk, reduced-motion, keyboard, and phone-landscape states without changing live weather or operating devices.

## Roll back or remove

Restore your private prior dashboard configuration through Home Assistant's supported editor or API, and restore its asset/resource versions. To remove this dashboard, remove its resource only after no dashboard references `custom:ishioho-panel`, then remove the installed `www/ishioho/` files. Keep `www/pallet-house/` if any other dashboard uses the base card. No integrations or device configuration are changed by removing these frontend files.

## Files and provenance

- `ishioho/`: five JavaScript modules, four Pokémon v8 PNGs and their four SVG sources, four Stardew PNGs and four independent SVG reconstructions, twelve prior theme SVGs, and room-coordinate metadata. The active Pokémon and Stardew URLs load PNG files; their still variants keep the same artwork.
- `pallet-house/`: inherited base card, base floor-plan SVG, Press Start 2P font, and its SIL Open Font License notice.
- `examples/`: synthetic dashboard, catalog, and robot metadata; no live inventory or camera images.
- `tests/`: isolated tests and a generated synthetic inventory fixture.

The original SVG scenes were authored as code from a floor-plan reference, and the Pokémon v8 PNGs are raster exports of those editable SVGs. The active Stardew day/night PNGs were created with the built-in ImageGen tool as edits of the project's v8 floor-plan art, guided by user-provided style references. Its four SVG companions are independent editable geometry reconstructions, not the exact source or exports of the generated PNG illustrations.

These are newly created themed illustrations. The public project contains no reference screenshots, extracted game sprites, aerial reference photographs, camera captures, personal addresses, or live inventory. The font's upstream license is preserved in [font-OFL.txt](pallet-house/font-OFL.txt). The game names identify visual inspirations; this is an independent project.
