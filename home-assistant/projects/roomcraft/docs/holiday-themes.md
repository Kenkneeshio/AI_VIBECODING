# Holiday themes and independent schedules

## Customer outcome

The household wants the miniature neighborhood to celebrate major holidays automatically, with particular attention to Asian observances, and to turn off one holiday without disabling the others. The same art and authoring settings must work in Home and Studio. The initial catalog contains 31 independently configurable presets spanning East, South, Southeast and West Asian traditions and common global/US celebrations. It is a curated catalog rather than a claim to cover every culture or regional calendar.

Acceptance: each preset has Auto, Keep on and Off; default Auto uses seven local calendar days centered on the holiday; Off affects only that preset and remains saved across devices and years. Keep on lasts until changed. Dates follow the Home Assistant time zone. Overlapping enabled themes take turns every 20 seconds rather than overwrite each other's preferences. Reduced motion holds one theme still. Temporary Preview never changes a saved preference or physical device. Settings support normal Studio Undo/import/Save and verified administrator save from Home, preserving every existing object and control.

## Customer controls

Open **Menu → Holidays & celebrations** in Home, or **Holidays & celebrations** in Studio. Search by holiday, select Auto/Keep on/Off, preview its art, then save. Preview closes the large panel so the scenery is visible and offers End preview and Settings controls. Changes remain a draft until saved.

Global controls adjust the automatic window, decoration intensity, animated events and festive glow. Advanced decoration placement changes its position, scale and rotation or returns to automatic placement. Each holiday accepts an annual `MM-DD` or one-year `YYYY-MM-DD` override. These overrides are useful for local or family observance conventions; verified coverage and regional notes are shown beside each preset.

The default automatic window is the date plus three days before and three after. The configurable window is 1–31 days. The art window is separate from a festival's religious or legal duration. In particular, Hanukkah actually spans eight nights, and lunar or regional festivals do not all share one worldwide civil date. Read the [calendar source record](holiday-calendar-sources.md) for conventions and supported years. A future date outside verified coverage does not silently acquire an invented schedule; an override or Keep on remains available.

## Deterministic system contract

`roomcraft_layout.sceneSettings.holidays` is the single saved source. Existing layouts without this branch use compatible defaults; no destructive migration or extra object is required. The render clock, today's date and preview selection never enter the layout.

| Field | Contract |
| --- | --- |
| `enabled`, `events`, `lighting` | Boolean, default true |
| `modes` | Map of known holiday IDs to `auto`, `on`, `off`; default auto |
| `windowDays` | Integer 1–31, default 7 |
| `intensity` | Number 0–1, default 0.7 |
| `dateOverrides` | Known holiday IDs to valid annual or year-specific civil dates |
| `placement` | Optional `{x,y,scale,rotation}`; x/y −4000…5000 plan units, scale 0.4…2, rotation 0…359 degrees |

The scene derives an outdoor clearing between the home and the street, keeps generated planting clear, and supports the display on the terrain. Decoration meshes do not receive selection hits or become device controls. Two shared draws add festive trim along actual exterior wall spans and the ranch, school and office roof contours. Roof trim follows building dimensions, height, rotation and movement without changing selection bounds. Lighting affects decorative materials only; lamps, fans, switches, door state and indoor presence keep their real Home Assistant meanings. This feature sends no light, switch, lock or other device service calls.

## Module ownership

- `public/engine/holiday-settings.js`: pure settings validation, compatible defaults and immutable scene-settings update.
- `storybook-holidays.mjs`: explicit-date catalog resolver, supported date tables, upcoming/active/unavailable results and time-zone conversion from an explicit epoch.
- `storybook-holiday-art.mjs`: original procedural themed geometry, bounded animation, quiet observances, reduced motion and resource disposal.
- `storybook-holiday-runtime.mjs`: theme rotation, placement, preview isolation and cached calendar resolution.
- `storybook-holiday-panel.mjs`: shared responsive settings/preview UI.
- `storybook-holiday-save.mjs`: administrator-only, conflict-aware Home save with prior-design snapshot and readback.
- `storybook-state.mjs`, `roomcraft-storybook.mjs`, `storybook-studio-look.mjs`: live time-zone/date and shared Home/Studio integration.

Holiday variants reuse standardized art families while retaining distinct details: lanterns, pine and New Year ornaments, dolls/blossoms, carp windsocks, wishes, dragon boats, moon/rabbit harvest, lotus/paper lanterns, diya/rangoli, crescent/stars, nine-candle Hanukkah display, hearts, pumpkins, gifts and spring flowers. Quiet observances suppress celebratory event particles. No reference media or external runtime calendar service is needed after installation.

![Original holiday art variants on a synthetic display](images/holiday-art.png)

## Verification and release record

Implementation in progress. Record exact automated checks, synthetic visuals, built-browser interactions, actual HA readback, tablet verification and source/deployment IDs after those checks run. Tests must cover time-zone/year boundaries, leap dates, independent Off, overlap, unknown future dates, overrides, draft/save conflicts, reduced motion, disposal and Home/Studio parity. Public proofs use synthetic layouts without private entities or camera images.

## Rollback

Previous verified runtime: `465aadf21978d7d9ba8ef91470a87616cfb9caaf`, HA resource `76cafcd1969162f8`, owner-private Studio 110. Restore the matching protected pre-install dashboard backup if holiday settings were saved, rebuild/reinstall the preceding source, and restore Studio 110 separately. The installer backs up before live writes. See [deployment recovery](deployment.md).
