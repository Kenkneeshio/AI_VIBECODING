# Google Maps setup in Roomcraft Home

The household administrator can bring their existing Google Maps shares into Roomcraft from one screen. Acceptance covers opening the setup from the menu or direct anchor, completing setup from a secure administrator session, reporting a failed or expired export without enabling display, and showing current pins on the chosen browser after success. Existing Google connections continue through Home Assistant's integration settings.

`storybook-location.mjs` owns the browser form and per-browser display preference. `storybook-google-flow.mjs` owns the native Home Assistant configuration and upload protocol for community Google Maps version 2.1.0. Its fixture covers successful configuration, rejected files, duplicates, unexpected transitions and cleanup. Update the native flow fixtures when changing the integration version.

Home Assistant validates the exported Google session and stores the integration entry. The browser passes the selected file unchanged to Home Assistant using the authenticated, same-origin upload. Roomcraft persists only the display preference. The hosted Studio, native Studio editing, canonical project schema, radar and device controls, layout, and scene art are outside this change.

Restore the preceding Home frontend from source `fe7610a8de36f462f4eed5a5ad508882235e4a7e` or the private pre-install backup. Existing integrations can be managed from Home Assistant, and the display preference can be cleared from the Location sharing panel. Use the [deployment recovery guide](deployment.md) for recovery commands.
