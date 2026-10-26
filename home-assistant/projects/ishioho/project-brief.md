# Project brief: ishioho

## Problem

A large Home Assistant entity set is difficult to navigate from a phone. A floor-plan interface should make room controls easy to reach while retaining access to every current sensor and setting.

## Desired behavior

Provide four coordinated landscape views with illustrated room controls, compact camera access, useful alerts, actual weather and moon information, and a robot tracker grounded in reported telemetry. A searchable directory must expose every included current entity, including unavailable and unassigned entities.

## Project type

Local JavaScript custom dashboard card. It extends a shared base card and uses native Home Assistant cards for device-specific controls and details. It does not require a new backend integration or app/add-on.

## Scope

- Pokémon v8 and Stardew v3 static PNG day/night backgrounds. Stardew v3 depicts a second-floor unit with a separate plant balcony and covered porch, blue entry door, upper-left exterior stairs, and neighboring attached-building edges. The single-car garage is below and opens as a popup from those stairs. Historical v1/v2 PNGs and independent v1 SVG reconstructions remain available; the current SVG plan is generated from `floorplan.json` and is a spatial diagram rather than an exact tracing of the v3 illustration. Pokédex and Animal Crossing retain their existing SVG artwork.
- The same base indoor floor-plan geometry, with Pokémon and Stardew sharing the interior Entry and Balcony coordinates. Stardew v3 places its Porch pin on the landing and its Garage popup at the new stairhead; contained image/pin layers preserve proportions.
- Contextual room, camera, garage, robot, environment, energy, and calendar popups.
- Read-only current weather and forecast display with distinct on-map and upcoming effects, local-day grouping, real sun transitions, and reduced-motion support.
- Runtime entity search with area/domain/availability filters and bounded pagination.
- Explicit unavailable/error states and native device details.
- Room-level robot placement plus the integration's own precise map.
- Synthetic configuration examples, standard-format source and artwork, reproducible isolated checks, and a verifiable install folder.

Automatic floor-plan generation, universal robot compatibility, camera provisioning, new automations, and physical device actions during validation are outside this implementation.

## Dependencies and compatibility

Home Assistant frontend native cards, WebRTC Camera, and the user's separately configured device integrations. Optional Eufy on-demand camera services, official Moon, and a weather provider are supported. Node.js 18 or newer runs the local checks and stages an install folder without npm packages. No release compatibility range has been established; installation-specific configuration and layout assumptions are listed in the README.

## Acceptance checks

- [x] Four views include day/night assets; Pokémon v8 and Stardew v3 use PNG rendering, while Pokédex and Animal Crossing retain SVG animation/still variants.
- [x] Runtime entities remain reachable through the searchable directory.
- [x] Missing locations and unavailable data are not presented as measured values.
- [x] Current weather and upcoming forecast are visually separate; unavailable forecasts and sun readings are labeled, and decorative motion can be paused.
- [x] Camera start/stop ownership and popup lifecycle are covered by isolated tests.
- [x] Public examples contain synthetic metadata rather than an exported home inventory.
- [x] Source and bundled asset formats are checked; a staged `www/` tree and SHA-256 manifest can be generated and verified without Home Assistant access.
- [x] Isolated automated checks pass with device and network calls mocked; run `node tests/run.cjs` for the current suite result.
- [x] Pokémon v8 day/night rendering and garage popup verified on the target tablet; no SVG flecks in the displayed PNG backgrounds.
- [x] Stardew v2 day/night rendering, four theme tabs, revised porch and stair pin placement, and live garage viewing verified on the target tablet; appearance returned to Auto.
- [x] Stardew v3 day/night rendering, second-floor art, repositioned Garage popup, and Garage/Porch camera images verified on the target tablet; appearance returned to Auto.
- [x] Prototype browser checks cover themes, popups, native robot map, camera viewing, and phone-landscape layout.
- [x] Installation, configuration limits, removal, and rollback are documented.

## Deployment and rollback

Run `node scripts/verify-source.cjs`, `node tests/run.cjs`, then `node scripts/stage-install.cjs --output <new-directory>` and verify that folder. Copy the staged frontend files under `/config/www/`, register `release.json`'s recommended module resource URL, and configure a separate `prototype-copy` dashboard through a supported Home Assistant interface. Keep real entity assignments and backups private; installed `/local/` metadata files are publicly served to anyone who can reach the instance, so they must remain non-sensitive. Use a private backup to restore the previous dashboard and asset versions. Publishing this repository does not deploy those files or authorize device actions.

## Status

Tested prototype. Public source uses sanitized examples. Stardew reuses Pokémon's control configuration, with theme-specific Porch and Garage popup coordinates for its v3 art. Its active v3 PNG art and historical v1/v2 assets have separate provenance documented in the README and [art spec](stardew-v3-art-spec.md). Private layout reference photos are not included. Physical device commands and compatibility with other hardware/installations remain to be verified by each installer.
