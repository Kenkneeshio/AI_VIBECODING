# Project brief: ishioho

## Problem

A large Home Assistant entity set is difficult to navigate from a phone. A floor-plan interface should make room controls easy to reach while retaining access to every current sensor and setting.

## Desired behavior

Provide four coordinated landscape views with illustrated room controls, compact camera access, useful alerts, actual weather and moon information, and a robot tracker grounded in reported telemetry. A searchable directory must expose every included current entity, including unavailable and unassigned entities.

## Project type

Local JavaScript custom dashboard card. It extends a shared base card and uses native Home Assistant cards for device-specific controls and details. It does not require a new backend integration or app/add-on.

## Scope

- Pokémon v8 and Stardew-inspired static PNG day/night backgrounds; the Stardew SVG companions are independent editable reconstructions. Pokédex and Animal Crossing retain their existing SVG artwork.
- The same base floor-plan geometry, with Pokémon and Stardew sharing the corrected Entry and Porch pins and a contained image/pin layer that preserves proportions.
- Contextual room, camera, garage, robot, environment, energy, and calendar popups.
- Runtime entity search with area/domain/availability filters and bounded pagination.
- Explicit unavailable/error states and native device details.
- Room-level robot placement plus the integration's own precise map.
- Synthetic configuration examples and reproducible isolated checks.

Automatic floor-plan generation, universal robot compatibility, camera provisioning, new automations, and physical device actions during validation are outside this implementation.

## Dependencies and compatibility

Home Assistant frontend native cards, WebRTC Camera, and the user's separately configured device integrations. Optional Eufy on-demand camera services, official Moon, and a weather provider are supported. Node.js 18 or newer runs the local checks. No release compatibility range has been established; integration-specific constants are listed in the README.

## Acceptance checks

- [x] Four views include day/night assets; Pokémon v8 and Stardew use PNG rendering with the corrected Entry/Porch geometry, while Pokédex and Animal Crossing retain SVG animation/still variants.
- [x] Runtime entities remain reachable through the searchable directory.
- [x] Missing locations and unavailable data are not presented as measured values.
- [x] Camera start/stop ownership and popup lifecycle are covered by isolated tests.
- [x] Public examples contain synthetic metadata rather than an exported home inventory.
- [x] 107 automated checks pass with device and network calls mocked.
- [x] Pokémon v8 day/night rendering and garage popup verified on the target tablet; no SVG flecks in the displayed PNG backgrounds.
- [x] Stardew day/night rendering, four theme tabs, pin placement, and live garage viewing verified on the target tablet; appearance returned to Auto.
- [x] Prototype browser checks cover themes, popups, native robot map, camera viewing, and phone-landscape layout.
- [x] Installation, configuration limits, removal, and rollback are documented.

## Deployment and rollback

Copy frontend files under `/config/www/`, register the module resource, and configure a separate `prototype-copy` dashboard through a supported Home Assistant interface. Use a private backup to restore the previous dashboard and asset versions. Publishing this repository does not deploy those files or authorize device actions.

## Status

Tested prototype. Public source uses sanitized examples. Stardew reuses Pokémon's control configuration and room pins; its generated PNG art and independent editable SVG reconstructions have separate provenance documented in the README. Physical device commands and compatibility with other hardware/installations remain to be verified by each installer.
