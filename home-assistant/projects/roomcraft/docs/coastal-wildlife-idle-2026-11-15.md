# Coastal wildlife and idle display release

## Customer outcome

The wall-tablet viewer sees a livelier, recognizably San Diego coastal scene without losing the home controls. Idle visits favor current activity; a touch immediately restores that frontend's saved Default. The idle scene is full visual brightness from 7 a.m. to 7 p.m. and 60% from 7 p.m. to 7 a.m. in Home Assistant's timezone.

Acceptance: the new species have distinct art and bounded safe routes; landscape height is sampled from the same surface used for rendering; idle camera picks a current event before static scenery; touch restores Default before activating a control; the 7 p.m. and 7 a.m. boundaries replay exactly; Home and Studio build from the same source; the tablet cold-launch and readback pass. Non-goals: wildlife is illustrative, not a live sighting or occupancy report; the visual dim does not change Android's hardware backlight; no physical device state or authored home geometry changes.

## Contract and ownership

- `ha-local/storybook-marine-life.mjs` owns the bounded, seeded marine cast, articulated geometry, route reservations, and scene state. The green sea turtle has a shell, scutes, head, and four flippers; the leopard shark has spots. California sea lion replaces the former storybook walrus. Old saved `walruses` settings remain accepted and normalize away.
- `ha-local/storybook-world-moments.mjs` owns the small decorative cottontail, ground squirrel, coyote, and coastal bird accents. They are tied to valid planted positions, obey weather/category gates, and share instanced draw pools.
- `ha-local/storybook-meadow.mjs` owns the added regional relief. Road and building pads remain protected. Both scene variants call the same terrain height sampler; terrain changes do not alter routes or home dimensions.
- `ha-local/storybook-idle-interests.mjs` selects actual active holiday, marine, beach, landmark, or habitat events; static scenery is a fallback. `storybook-idle-runtime.mjs` owns touch restoration and browser visual brightness. It reads the HA timezone and never writes layout or services.
- `public/engine/world-life.js` owns saved category flags. `storybook-world-life-panel.mjs` exposes turtle and sea lion switches in the existing menu.

This is a finite, representative coastal catalog, not a claim to depict every San Diego species. References: [NOAA green turtles near La Jolla Cove and in San Diego Bay](https://www.fisheries.noaa.gov/west-coast/science-data/green-turtle-research-and-conservation-southern-california), [Scripps leopard sharks at La Jolla Shores](https://scripps.ucsd.edu/news/meet-andy-nosal-scripps-researcher-passion-science-communication-sharks), [NPS local mammals](https://www.nps.gov/cabr/learn/nature/mammals.htm), [NPS harbor seals and California sea lions](https://home.nps.gov/cabr/blogs/seal-or-sea-lion.htm).

## Repeatable verification and release

Run the [standard release gate](RELEASE-STANDARD.md) on the exact source revision after stamping the editor. Include marine route/collision tests, explicit-time wildlife replay, idle-interest selection, timezone boundary tests, built Home and Studio browser checks, HA backup/install/readback, and wall-tablet cold-launch/screenshot. Record exact hashes and outcomes below before declaring deployment complete.

Source baseline and rollback: Git `122ec92be7267a961c17e91952c3dbbe119c3803`; HA asset `2b81db0d8a554b34`; private Studio 119. Restore the pre-write private HA backup with the management adapter and redeploy that Git revision for rollback. Do not put credential or backup contents in Git.

## Release evidence

On 15 November 2026, `npm ci` and the complete [release gate](RELEASE-STANDARD.md) passed on source commit `b820bf9adb0aac870eb761c514250e16700ad3bb`: architecture, deterministic manifest, 642 Node tests, card/weather tests, both Python test suites, TypeScript, lint, production build, manifest readback, and whitespace checks. [Roomcraft GitHub CI](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43764195426) also succeeded. Manifest root: `sha256:e0fc8f8a93baa1d8bc1eac1c415060450ad3be6f42f1bf67a849a363a1d6a915` (436 inputs). A meadow slope regression initially failed; regional amplitude was reduced until the original 30° normal and pad checks passed.

Built Chrome fixtures verified the six-species marine preview, category filters, animation, real Live Save/readback of all 82 items, phone menu fit, ambient moments, and real RAF idle/touch behavior with no physical device actions. The timezone boundary has a pure replay test. The actual tablet cold-launched Companion 2026.10.1-full and displayed the updated home across 1920 × 1080; the private screenshot remains outside Git. Its first capture showed the loading screen, and a later capture showed the complete home. This release did not wait until 7 p.m. to measure Android hardware brightness; the feature dims only the rendered idle scene, and its clock boundary is verified in the automated test.

Before the live write, a private HA dashboard backup was created. Home Assistant asset version `c5432369fb2c08dd` passed exact-byte readback for 14 assets over LAN and Nabu Casa; Home, Studio, and Controls match the intended migration; all eight non-view dashboard fields match the backup. The hosted owner-private Studio was built, pushed from commit `6c2d854364b57efedfb47048f489d4379b2c391e`, deployed successfully as version 120, and retained its one-owner audience. The deployment URL is https://second-floor-layout-studio-1031.fizzyjay128.chatgpt.site/editor. The hosted Site was built and deployed, but was not separately inspected in a signed-in browser. Rollback remains the private pre-write HA backup, prior Git baseline `122ec92be7267a961c17e91952c3dbbe119c3803`, and Studio version 119.
