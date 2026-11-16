# Presence area controls and calibration — 15 November 2026

## Customer outcome and acceptance

The wall display owner wants the Presence tracking menu to explain what the mmWave switch currently sees, show how many illustrated people appear in each of the four home areas, restore the previous range and heat-map controls, and allow more movement inside an area without returning to false exact-location claims.

Acceptance: the panel shows live and retained counts for living room, dining room, kitchen, and start of hall; current sensor report age, hardware zone state, and bounded raw coordinates; calibration status for each room with capture and clear actions; and the previous detection-zone overlay, radar heat map, and range/alignment editor. Four per-screen controls tune local motion gain, maximum room movement, room-change delay, and raw-sample match distance. Calibrated radar movement remains bounded to an authored safe floor near the selected area; existing route and furniture avoidance continue to apply. No sensor entity, heat-map history, device service, or layout is changed by panel controls.

## Engine and UI contracts

| Owner | Contract |
| --- | --- |
| `storybook-presence-zones.mjs` | Keep four authored anchors, per-screen raw-centroid samples, and stable room classification. Transform only the **delta** from a zone sample into bounded local movement. Before calibration, use the first anonymous sample for that track as its local motion origin. The room anchor remains the center; snapping uses the shared safe-floor query. Normalize all settings and clear transient zone memory when settings or calibration change. |
| `storybook-tracking.mjs` | Retain sensor freshness and occupancy fallback. The raw coordinate stream still feeds history/heat map; the rendered character alone uses the room resolver. |
| `roomcraft-storybook.mjs` | Render anonymous per-area live/retained counts, calibration status and sensor diagnostics; host the four movement controls and existing overlays in Presence tracking. Persist settings and calibration only in this browser profile. |
| `storybook-heatmap-panel.mjs` and Studio | Continue to own the existing radar history and full affine range/rotation/scale/skew editor. The new panel opens these tools; it does not duplicate their editing contract. |

The switch reports targets, not identified household members. Per-area counts describe targets successfully drawn on the map, and the source row separately reports total raw targets. A retained count is a last-known or approximate display location, not proof that someone remains there. Hardware zones 1–4 are the sensor's own regions; they are not the four named room areas. Coordinates shown in the diagnostics stay on the screen and are not uploaded with this release.

## Verification and rollback

Exact runtime, HA resource, Site version, CI, tablet evidence and backup: pending release verification. Focused tests cover bounded motion, calibration removal, settings limits, area counts, tracking freshness and existing path restrictions. Browser verification exercises actual panel controls and confirms no HA writes. Restore the pre-install dashboard backup, previous verified runtime `b14d916fc8a0bbc46980c9e1f3109c20a369ee6e`, HA resource `88538ac57497ac3f`, and private Studio version 123 if needed. The new per-browser settings key is ignored by the older runtime.
