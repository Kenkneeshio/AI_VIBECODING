# Vacuum survey and presence behavior — 15 November 2026

## Customer outcome

The household owner wants more direct control over how radar observations become illustrated characters, and a practical way to use the robot's LiDAR and cleaning routes to review Roomcraft layout scale and placement. The work must not mistake anonymous radar targets for family identities or a vacuum route for proof of mopped coverage.

Acceptance: Presence tracking offers calibrated area or raw position display, movement gain and radius, walking speed, room transition delay, sample match range, social distance, furniture interactions, and social interactions. The four area counts, calibration status, sensor report and overlays remain in the panel. The vacuum object and main menu open a LiDAR survey panel with live map, a recording switch that samples during ordinary cleaning, review flags, export and clear actions, and the latest cleaning-history route image. A survey does not start the robot or overwrite its map. No secret-bearing URL or camera image goes into the exported JSON.

## Contracts and limits

| Module | Contract |
| --- | --- |
| `storybook-presence-zones.mjs` | Normalize per-browser behavior and tracking preferences. Area mode uses the captured anonymous radar samples and authored safe-floor anchors. Raw position mode uses the existing range transform and collision checks. |
| `storybook-person-motion.mjs` / `storybook-people.mjs` | Walking speed changes only visual path progress. Furniture and social options gate illustrated poses, not sensor data. The compiled floor and route checks remain authoritative. |
| `roomcraft-storybook.mjs` | One Presence tracking panel owns the settings and labels. A raw-mode message explains why area counts are not assigned. |
| `storybook-vacuum-survey.mjs` | Locally record at most 1,500 fresh cleaning points and 150 review flags, at least ten seconds apart. Flag a different saved map or a transformed position outside the plan. Do not command the robot, store auth URLs, or claim a measured wall mismatch from a position alone. |
| `roomcraft-card.js` | The vacuum graphic and main menu open the same panel. Cleaning history is read through Home Assistant's authenticated camera and sensor state. The latest route picture is shown on demand. A manual mark captures the current coordinate. The exported JSON is a review artifact for an engineer or AI, never an automatic geometry write. |

The installed Dreame L10s Ultra currently reports `mapping_available: false`, although it exposes LiDAR navigation, a current map, map position, and cleaning-history images. The UI therefore offers a survey **during normal cleaning** rather than a dedicated mapping command. The latest history record says whether a mop pad was installed and the chosen cleaning method; neither proves precisely which pixels were mopped. The route image is labeled accordingly. Local survey data lives in the browser profile used to arm it; export the JSON before clearing browser storage or handing off to another device.

## Repeatable verification and rollback

Run the complete Roomcraft release gate on the exact source revision, the browser card flow, HA backup/install/readback, private Site build/publication, and a tablet screenshot of both panels. Confirm service-call count is zero during read-only QA. Record the revision, asset hash check, dashboard backup, CI run, Site version and tablet evidence in the handoff. Restore the pre-install Home dashboard JSON, previous HA resource and private Site version if a live regression occurs. Removing the per-browser survey key and settings key returns those controls to defaults without changing HA devices or layout.
