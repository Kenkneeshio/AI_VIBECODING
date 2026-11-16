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

Release evidence (source commit `9b4f4d0c36c588c807e07f7a12ab6435ae8f6503`):

- Complete local release gate passed: 658 core tests, 68 card/weather tests, 30 installer tests, 8 presence tests, TypeScript, lint, build, manifest, architecture, and diff checks. Log: `C:/Users/kenny/AppData/Local/Temp/roomcraft-view-final-gate.log` (private local evidence).
- Browser fixture passed, including changing the new Presence panel controls with zero HA writes. GitHub [CI run 43809304209](https://github.com/Kenkneeshio/AI_VIBECODING/actions/runs/43809304209) passed on the source commit.
- Home Assistant dashboard `roomcraft-home` deployed and read back. Resource ID `64a14b7f6cce0839`; all 14 assets matched on LAN and Nabu Casa, and eight non-view dashboard fields were preserved. Pre-install backup: `C:/Users/kenny/HomeAssistantManagement/backups/roomcraft-home-before-roomcraft-lan-20261115-211758-960096.json` (private).
- Matching owner-only Studio Site version 128 published at `https://second-floor-layout-studio-1031.fizzyjay128.chatgpt.site` from Site source commit `1dd00aaf53e8ff74ee3f328450f1627349a87e94`; deployment `appgdep_6afa92647780819197f34a9638c695ae`. Previous version: 127.
- Wall tablet cold-launched Home Assistant and rendered the live view. The `Presence tracking` dialog was opened and scrolled to `Walking path & collision rules`; the controls were visible and usable at 1920x1080. Private screenshots: `C:/Users/kenny/HomeAssistantManagement/backups/roomcraft-tablet-visual-20261116T052008Z/loaded.png` and `presence-path-options.png`. The path was verified by deterministic tests, not visually on a moving live target; the radar was stationary during the tablet check.

Rollback: restore the named HA backup and prior HA resource, publish private Site version 127, then cold-launch the tablet and verify Home and Presence tracking. Never commit the private backup or screenshots containing household context.
