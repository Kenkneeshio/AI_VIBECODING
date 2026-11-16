# Dashboard names and Android defaults — 16 November 2026

## Customer outcome

The household needs a preserved copy of its conventional controls for a phone, a clearly named reference dashboard, and an unambiguous illustrated home dashboard on the wall tablet. Opening the wall tablet must still show the illustrated Home view. Future Android devices should be assignable to different dashboards without changing another device's start page.

Acceptance: the former `Main Dashboard` config is duplicated exactly into `Cell Dash`; the original is titled `Reference Dash`; `roomcraft-home` is titled `Home Dash` without moving its URL, layout, or controls. All three appear in the Home Assistant dashboard list. The tablet cold-launches `/roomcraft-home/home`. Dashboard content and names read back after the write. A private pre-write backup allows rollback.

Non-goals: changing physical device states, redesigning the copied controls, creating users or signing other Android devices in without their setup, or changing Home Assistant's system-wide default.

## Routes and ownership

| Name | Route | Content |
| --- | --- | --- |
| Home Dash | `/roomcraft-home/home` | Illustrated live home; `/studio` and `/controls` remain its other views. |
| Cell Dash | `/cell-dash` | Snapshot copy of the former Main Dashboard's Lovelace configuration. It is independent: later edits do not automatically sync to Reference Dash. |
| Reference Dash | `/dashboard-dashboard` | Original conventional dashboard, unchanged except for its title. |

`site/ha-local/organize_dashboards.py` plans and applies the naming transaction. It validates storage dashboards, saves the exact pre-write rows and configurations outside Git, refuses to overwrite a different Cell Dash, and reads back all titles and content. `site/ha-local/publish_storybook_dashboard.py` uses the new Home Dash title for future creation; the stable URL and layout contract remain unchanged. The same script is safe to rerun after this release. Unit tests cover cloning, content preservation, refusal to overwrite, and repeatability.

## Android default assignment

Current Home Assistant stores the default dashboard **per user profile**, not per Android hardware device. A single HA login used on two devices shares its dashboard default. For independent defaults, create a separate HA user for each Android device (for example `Wall Calendar`, `Cell Phone`), sign that user into only its assigned Companion app, and choose **Profile → Appearance → Dashboard** on that device. Choose **Home Dash** for the wall tablet and **Cell Dash** for a phone; **Reference Dash** remains an available choice. Do not set the system-wide dashboard default merely to configure one device. The Companion app can also be Android's Home launcher on a dedicated tablet. See [HA dashboard defaults](https://www.home-assistant.io/dashboards/dashboards/) and [Android Home launcher](https://companion.home-assistant.io/docs/integrations/android-home-app-launcher/).

The wall tablet currently uses the authenticated owner's profile, whose default panel is `roomcraft-home`. This release preserves that setting and verifies the actual cold launch. A separate tablet-specific user would make its choice independent of the owner's other devices; that account migration has **not** been done. Until then, changing the owner's profile default on another device would also change the tablet's next default launch.

## Release evidence and rollback

The complete Roomcraft release gate passed on this source: build/stamp, architecture and manifest checks, Node/Python suites, typecheck, lint and `git diff --check`. Focused dashboard tests: 5 passed. Authenticated readback verified `Cell Dash` config equals the pre-write Main Dashboard config, `Reference Dash` content is unchanged, and Home Dash differs only by its top-level title. The owner's `default_panel` remained `roomcraft-home`. The 1920 × 1080 wall tablet cold-launched the illustrated Home view; private loaded screenshot: `C:/Users/kenny/HomeAssistantManagement/backups/roomcraft-tablet-visual-20261116T161717Z/loaded.png`.

Private pre-write backup: `C:/Users/kenny/HomeAssistantManagement/backups/dashboard-names-before-20261116T161649-047835Z.json`. Rollback reads that file through the authenticated adapter, restores the two original metadata titles and Home config title, and removes only the newly created `cell-dash` after checking its content still matches the copied snapshot. Keep the backup and screenshot outside Git; treat them as private household configuration.
