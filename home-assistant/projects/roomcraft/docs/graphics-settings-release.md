# Graphics settings for the wall tablet

The wall-tablet user can reduce the work Roomcraft does while keeping the house and controls readable. Acceptance covers applying the preset with one tap, selecting each setting independently, retaining the choices after reopening Home, and keeping the 3D drawing and device controls aligned at lower resolution. A real device can draw below the selected limit when a frame is expensive.

Home's browser preferences default to 24 FPS, 100% resolution, and High shadows. The tablet preset sets 20 FPS, 67%, and Off. The draw schedule uses browser frame timestamps and skips missed deadlines. Home Assistant state handling and camera media use their existing updates. The resolution multiplies the renderer's usual pixel ratio, with the camera and control anchors in CSS pixels. Low shadows use a 1024-pixel map and High uses 2048 when the device supports it. Off releases the directional shadow target. Studio uses the shared renderer at its existing defaults.

## Verification and deployment

- Source `6873579e4b63e2f2e1754d8dda44423f2050a09d` produced the 293-input manifest `sha256:11d0468c8c7e8b1fa8de3d12ce75898734111a062e4768f00beb66f49a51aed4`. Clean dependencies, 459 JavaScript tests, 38 Python tests, TypeScript, lint with 17 existing warnings, production build, manifest verification, and Git whitespace checks passed.
- Chromium verified the exact Home bundle with synthetic Home Assistant states. The 1920 × 881 drawing buffer became 1286 × 590 at 67% and 960 × 440 at 50%. CSS bounds stayed at 1920 × 881. All five frame caps matched a simulated 60 Hz display, including repeated redraw requests. Settings persisted on reload, and reduced motion returned to idle after a requested redraw.
- Home Assistant served the exact built Home and Studio assets over LAN and HTTPS. The published layout, plan, location and commute settings matched the protected pre-install backup. On the 1920 × 1080 wall tablet, the preset applied through the dashboard and all three settings persisted after a cold app launch. Roomcraft Home was left open. This tablet check verified the controls and saved profile. The frame cap measurements came from the Chromium fixture.
- Owner-private Studio version 89 was published from source `feb122970654f2a5434b3078cc1704f58cea90e3` with the same compiled editor renderer.

This release uses the existing layout schema, bindings, art and Home Assistant components. To restore the previous graphics profile for one browser, set 24 FPS, 100%, and High. To roll back the software, rebuild and reinstall source `329407484663802c6119a0b35f2318a36190c512` or restore its protected pre-install assets and dashboard backup. Restore hosted Studio version 88 if needed. See the [deployment recovery guide](deployment.md).
