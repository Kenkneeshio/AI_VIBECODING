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

Runtime source revision `b14d916fc8a0bbc46980c9e1f3109c20a369ee6e`; HA resource `88538ac57497ac3f`; owner-private Studio version 123 from Site source `229c110fc4678f4c492e55ee852761efe1581b09`. The complete exact-source release gate passed and GitHub Roomcraft workflow [43788589664](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43788589664) succeeded. Browser verification opened the live card, changed anonymous family priority and traffic appearance through the actual menus, confirmed local persistence and immediate visual profile, and observed no HA write. Focused tests covered three characters at one anchor, deterministic casting, near-stop packed traffic, route/furniture safety, night lighting, and existing seating behavior. The installer read back the dashboard; LAN and Nabu Casa matched all 14 assets to the build, confirmed Home/Studio/Controls, and preserved eight non-view dashboard fields.

The calendar tablet loaded the updated live Home view at 1920 × 1080. Its Commute traffic menu showed the four settings; Preview heavy jam produced a packed two-lane queue with red tail lamps and about 10 FPS, similar to the live view before preview. The tablet was returned to **Live or scenic fallback** and the menu was closed. Its Presence tracking menu showed the Balanced random, Dad first, Mom first, and Baby first options. Private visual evidence is in `C:/Users/kenny/HomeAssistantManagement/backups/roomcraft-tablet-visual-20261116T015242Z/`; the pre-install dashboard backup is `C:/Users/kenny/HomeAssistantManagement/backups/roomcraft-home-before-roomcraft-lan-20261115-175031-763554.json`. Only one real radar target was visible on the tablet during verification, so multi-character interaction was verified in the renderer fixture and unit tests, not as a live household event.

## Rollback

Restore the pre-install private dashboard backup and reinstall previous verified runtime `88155c6ae7a66a4ecdde2bf6fd4fde197a282b20` with HA resource `22ec53f88692ab7a`; restore owner-private Studio version 122. The new local storage keys are ignored by the older runtime, and no layout migration is needed.
