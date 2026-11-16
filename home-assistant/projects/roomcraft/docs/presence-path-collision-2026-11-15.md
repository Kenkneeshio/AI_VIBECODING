# Presence walking paths and collision rules — 15 November 2026

## Customer outcome

The wall-display owner wants to see where an illustrated presence character intends to walk and tune its responses to furniture and nearby people. The view should remain a truthful visualization of anonymous radar tracking, with visible settings that are easy to change on the tablet.

Acceptance: Presence tracking offers a planned-path toggle, path color and visibility, a radar-marker toggle, a furniture-detour toggle, object clearance, and minimum spacing between characters. Path and collision preferences are local to the screen and persist across app restarts. A path preview uses the same computed route as the character. Disabling detours makes a blocked character wait rather than cross a solid. Floor, wall, stair, and furniture support remain enforced. No settings alter raw radar measurements, calibration samples, heat-map history, HA entities, or room layout.

Non-goals: allowing characters through walls, furniture, or unsupported floor; claiming the planned line is a measured travel history; altering the physical presence switch's detection zones.

## Ownership and deterministic contracts

| Module | Contract |
| --- | --- |
| `storybook-presence-zones.mjs` | Normalize seven new presentation controls with bounded numeric values and stable defaults. Keep the existing per-browser key and migrate old stored settings by filling defaults. |
| `storybook-person-motion.mjs` | Expose a copy of the remaining computed waypoints and a route-clear operation. Retain the current safe position when rules change. |
| `storybook-people.mjs` | Render a low-cost, throttled Three.js line from the actual remaining route. Apply configurable swept clearance and person spacing. In direct-only mode, accept only a clear route and otherwise hold. Invalidate cached navigation and active routes when collision rules change. Dispose line geometry and material on track removal or scene teardown. |
| `roomcraft-storybook.mjs` | Group path and collision rules below existing movement settings. Persist changes locally and apply them live through the scene interface. Label the line as a preview, not recorded movement. |

No character may be drawn on unsupported floor or inside a solid. The minimum animated body radius remains the authored person radius; object clearance only adds to it. The person-spacing algorithm may omit an illustrated body if the safe space is too narrow, while the sensor report continues to show the raw anonymous target count.

## Release, verification and rollback

Focused tests cover normalization, path visibility, direct-only hold, safe detour, and unchanged wall/floor restrictions. The browser fixture changes the actual panel settings without Home Assistant writes. The complete release gate, GitHub CI, exact HA asset/config readback, private Site version, and wall-tablet visual check must pass before handoff. Record those artifacts below after publication. Roll back by restoring the private pre-install dashboard backup and prior Site version; old code ignores the new preference fields.

Release evidence: pending deployment verification.
