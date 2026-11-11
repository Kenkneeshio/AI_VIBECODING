# Changelog

## Unreleased

- Restricted the private boot receiver to Android's expected restore events.
- Added the initial Android application skeleton.
- Added an opt-in boot receiver and privileged global-setting write.
- Added a local status screen with enable, disable, attempt-now, and Developer options actions.
- Added pure policy unit tests, deployment guidance, threat model, and supervised acceptance plan.
- Added the project to the Home Assistant project indexes.

## 0.1.0 device acceptance — 2026-11-08

- Installed the debug build on the Apolosign calendar tablet through the Home Assistant host's persistent ADB identity.
- Granted and verified `WRITE_SECURE_SETTINGS`, enabled restore-on-boot, and confirmed a manual write/readback of `adb_wifi_enabled=1`.
- Verified the locked-boot receiver is registered and the application recorded a successful `LOCKED_BOOT_COMPLETED` restoration result.
- Returned Home Assistant Companion to the foreground and confirmed the ADB connection remained authorized.
- A supervised real reboot remains pending; the helper cannot guarantee recovery from OEM policy changes, a disabled Developer options master switch, revoked pairing trust, Wi-Fi failure, or a changed connection port.
