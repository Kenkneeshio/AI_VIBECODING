# Changelog

## Wireless debugging port recovery

- Added a read-only Windows mDNS probe that locates the connection port for a known tablet IPv4 address. It uses the existing paired ADB host for the manual reconnect documented in the user guide.
- Verified the live discovery result against the paired tablet's current endpoint. Updated the tablet to the same-signer 0.1.1 APK in place and verified the existing grant and opt-in, actual package-replacement restoration, and Home Assistant launcher. A supervised reboot remains pending.

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
