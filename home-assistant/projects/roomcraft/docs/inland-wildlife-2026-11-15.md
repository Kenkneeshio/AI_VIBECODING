# Inland landscape and wildlife release — 15 November 2026

## Customer outcome

The wall display owner wants the home to remain the main control surface while the surrounding San Diego inspired world feels varied and alive. The observable outcome is a canyon, seasonal creek, desert transition, and illustrated regional animals that move and occasionally meet without obscuring controls or slowing the tablet.

Acceptance: at least 100 additional persistent animal identities; multiple activities per identity; paired interactions; habitat and time appropriate appearance; bounded rendering; the same art and settings in Home and Studio; deterministic tests and a reversible release. The scene is illustrative. It does not report wildlife sightings or claim to contain every species in San Diego. No device entity, sensor state, home floor, road, or saved layout is changed by animal animation.

## Engine contracts

| Module | Responsibility |
| --- | --- |
| `storybook-inland-biomes.mjs` | Pure terrain sample for canyon shoulders, dunes, creek bank and wash; static, merged canyon/rock/cactus art and watercourse following the meadow sampler. |
| `storybook-meadow.mjs` | Combines biome relief and color with existing road, building and boundary masks; protects authored pads. |
| `storybook-inland-wildlife.mjs` | Regional species catalog, 120 stable actor IDs in 60 pairs, habitat placement and explicit-time activity scheduler. |
| `storybook-world-moments.mjs` | Shared procedural silhouettes, tiny beach gull interaction, visibility culling and idle-camera interests. |
| `storybook-scene.mjs` | Composes terrain, waterways, details and wildlife in the shared Home/Studio renderer; scene disposal owns static GPU resources. |
| `public/engine/world-life.js` | Persisted Inland wildlife category alongside existing density, pace, seed, characters and reduced-motion choices. |

The catalog contains 42 representative regional species and 120 persistent **individuals**, not 120 distinct species. At normal density the scheduler selects 24 or fewer simultaneous animals, with a hard 32 cap. Across 24-second cycles, identities rotate through forage, walk, rest, species-specific activities (for example hover, dig, climb, coil or stalk) and a paired greet, watch or flock encounter. Night selection favors nocturnal species. Placement calls the existing exclusion test and samples current terrain height; frame-time sampling creates no geometry. Home and Studio import the same world modules. Animation uses explicit time and a seeded hash; no random numbers or network calls are in the render loop.

## Evidence and limits

The regional shortlist and habitat inspiration were checked against [Cabrillo National Monument birds](https://home.nps.gov/cabr/learn/nature/birds.htm), [Cabrillo mammals](https://www.nps.gov/cabr/learn/nature/mammals.htm), [Cabrillo reptiles and amphibians](https://home.nps.gov/cabr/learn/herps-field-guide.htm), [Cabrillo plant communities](https://www.nps.gov/cabr/learn/nature/plant-communities.htm), and [Anza-Borrego Desert State Park](https://www.parks.ca.gov/?page_id=114). These sources establish regional context, not a real-time observation feed or complete census. The creek and canyon are artistic landscape features, not a geographically accurate map. Species silhouettes share a small set of body rigs; the 120 identities are not 120 individually modeled assets. Rare intraspecies interactions are intentionally decorative and do not make an ecological or safety claim.

Focused pure-function tests check species count, stable placement, excluded land, habitat samples, geometry ownership, activity rotation and reproducibility. Browser fixtures exercise rendered biome relief and six silhouette families. The complete release gate and live deployment evidence must be recorded against the final revision below; a passing source test alone is not evidence of a deployed tablet view.

## Release record

Source revision: pending GitHub commit. Home Assistant asset: `1359d4fba792608d`. Owner-private Studio version: 121, source `6991ae0313da218c43f4036e39996a49d21e91f9`, publication succeeded. Full gate: passed on the deployed source with 646 Node tests, 67 card/weather tests, Python suites, TypeScript, lint, build, release manifest and diff check. GitHub CI: pending. Built Chrome fixtures passed for the canyon/desert/creek render, six wildlife silhouette families, actual Living world menu/save/restore and 82 retained layout objects. LAN and Nabu Casa readback matched all 14 built assets; eight non-view dashboard fields matched the backup. The pre-install private dashboard backups are `roomcraft-home-20261115-141214.json` and `roomcraft-home-before-roomcraft-lan-20261115-141219-474917.json` under the local management backup directory. A cold launch verified the wall tablet's Companion HOME alias; the next private screenshot showed Roomcraft loaded at 1920 × 1080. The tablet's saved home camera frames the house and beach, so that screenshot does not independently show the distant canyon/desert or a wildlife encounter. The bounded off-home terrain and actor art were inspected in built Chrome fixtures. The screen showed about 20 FPS in that capture; no comparative tablet performance benchmark was run.

## Rollback

Rebuild and reinstall the prior verified Roomcraft source `b820bf9adb0aac870eb761c514250e16700ad3bb`, or restore the pre-install Home Assistant dashboard backup and the prior asset `c5432369fb2c08dd`. Restore owner-private Studio version 120 for the hosted editor. The world-life preference parser accepts the older payload without `landWildlife`; its default is enabled, so rolling back does not require a layout migration. Do not copy private credentials or screenshots into Git.
