# Family spacing and traffic art — 15 November 2026

## Customer outcome

The wall display owner needs nearby family characters to remain individually readable and to interact, while road traffic should visually communicate congestion. The customer can choose which anonymous illustrated family look appears first and tune road density, heavy-traffic crawl, and red tail-light glow from menus.

Acceptance: two or three characters assigned the same coarse radar room anchor never render bodies on top of each other, stay on reachable floor and face one another in a brief chat or peek pose when stationary. The configured family priority immediately changes the visual cast without claiming to identify a person. Heavy traffic visibly packs the illustrated lanes and moves at a near-stop crawl. Its tail lamps glow distinctly by day in a jam and at night. The commute menu offers a local visual preview and bounded density, crawl, and glow controls. Real travel-time sensors, Home Assistant entities, heatmap coordinates, and device actions are unchanged.

## Contracts and limits

| Module | Responsibility |
| --- | --- |
| `storybook-person-spacing.mjs` | Stable ID-ordered body separation against the same authored floor, route, and furniture clearance used by the avatar. The raw radar marker and history retain their original measured coordinates. If an edited floor is too narrow for distinct bodies, the later illustrated body is omitted rather than overlapped. |
| `storybook-people.mjs` | Keep navigated paths and object activities; draw stationary neighbors facing each other with chat or baby peek poses. A nearby pair chooses social interaction before a new furniture activity. |
| `storybook-family-settings.mjs` | Per-frontend visual priority: balanced deterministic random, Dad first, Mom first, or Baby first. Use each look before repeating. No identity inference or household-person mapping. |
| `storybook-traffic.mjs` | Reuse a seeded two-lane lattice. Heavy uses the full packed lattice and a bounded 0–8 unit/second crawl. Clear, slow, and scenic patterns remain progressively less dense. Add stronger red tail emissive art and heavy-traffic day halos without changing headlight geometry. |
| `storybook-traffic-preferences.mjs` and `storybook-commutes.mjs` | Store per-browser mode, density, crawl, and tail-light glow. Manual clear/slow/heavy modes are labeled previews; Live remains the default and still reads only fresh configured travel-time sensors. |
| `roomcraft-storybook.mjs` and `storybook-scene.mjs` | Apply these presentation settings to the live scene and demonstration cast; no Home Assistant write is issued. |

Preview mode is artwork, not a measured traffic assertion. The single radar cannot identify Dad, Mom, or Baby. The selection controls only which character artwork is used for anonymous target tracks. The spacing layer never writes corrected coordinates into sensor history.

## Release evidence

Source revision, HA resource, private Site version, full gate, CI, live readback, and tablet check: pending final deployment. Focused tests cover three characters at one anchor, deterministic family priority, near-stop packed traffic, route/furniture safety, night lighting, and browser menu persistence. Update this paragraph with exact observed evidence after publication.

## Rollback

Restore the pre-install private dashboard backup and reinstall previous verified runtime `88155c6ae7a66a4ecdde2bf6fd4fde197a282b20` with HA resource `22ec53f88692ab7a`; restore owner-private Studio version 122. The new local storage keys are ignored by the older runtime, and no layout migration is needed.
