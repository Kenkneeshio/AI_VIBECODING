# Google Maps setup in Roomcraft Home

The household administrator can bring their existing Google Maps shares into Roomcraft from one screen. Acceptance covers opening the setup from the menu or direct anchor, completing setup from a secure administrator session, reporting a failed or expired export without enabling display, and showing current pins on the chosen browser after success. Existing Google connections continue through Home Assistant's integration settings.

`storybook-location.mjs` owns the browser form and per-browser display preference. `storybook-google-flow.mjs` owns the native Home Assistant configuration and upload protocol for community Google Maps version 2.1.0. Its fixture covers successful configuration, rejected files, duplicates, unexpected transitions and cleanup. Update the native flow fixtures when changing the integration version.

Home Assistant validates the exported Google session and stores the integration entry. The browser passes the selected file unchanged to Home Assistant using the authenticated, same-origin upload. Roomcraft persists only the display preference. The hosted Studio, native Studio editing, canonical project schema, radar and device controls, layout, and scene art are outside this change.

## Verification and deployment

- Source `70328e44193a77c82c4a7dbeb5d5ae21b6e9e872` produced the 286-input manifest `sha256:b105623b3ccd508f85d3391792395ec84bd374df32784c5e733577a00226b149`. Clean dependency installation, the release and manifest gates, 447 JavaScript and 38 Python tests, TypeScript, lint with 17 existing warnings and zero errors, the production build, and the Git whitespace check passed.
- The exact Home bundle opened the full setup at 390 × 844 in Chromium. Synthetic tests covered administrator access, the HTTPS requirement, offline operation, failure and cleanup, successful setup, a new tracker pin, and browser preference storage. Tablet-specific interaction was outside the setup test because the wall tablet uses LAN HTTP. The fixture verified the insecure HTTP guidance. Hosted Studio publishing was outside this Home-only release.
- The installed Google Maps component opened its native username form and the temporary flow was removed. No real Google account or session was used in verification. The Home Assistant dashboard configuration and resource registration were read back after install. Layout, plan, and location configuration matched the private pre-install backup. Both the LAN and HTTPS addresses served the exact built Home module, SHA-256 `44740bedf621454cd5402fc8fee50cbda221d78af23a3c965acdd9c5dbad8f9d`.

Restore the preceding Home frontend from source `fe7610a8de36f462f4eed5a5ad508882235e4a7e` or the private pre-install backup. Existing integrations can be managed from Home Assistant, and the display preference can be cleared from the Location sharing panel. Use the [deployment recovery guide](deployment.md) for recovery commands.
