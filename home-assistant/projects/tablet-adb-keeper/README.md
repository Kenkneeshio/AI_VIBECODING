# Tablet ADB Keeper

Tablet ADB Keeper is an experimental, opt-in Android helper for a dedicated Home Assistant wall tablet. After Android boots, it attempts to restore the system's Wireless debugging toggle so a previously paired administrator can reconnect without touching the tablet.

## Status

Version 0.1.0 was installed on the Apolosign calendar tablet on 2026-11-08. Android accepted the one-time `WRITE_SECURE_SETTINGS` grant, restore-on-boot was enabled, and a manual attempt wrote and read back `adb_wifi_enabled=1`. The declared locked-boot receiver is registered and the application recorded a successful `LOCKED_BOOT_COMPLETED` restoration result during installation acceptance. A supervised physical reboot is still required before claiming full boot persistence on this firmware.

Version 0.1.1 limits the private receiver to Android's expected boot and package-replacement actions. Apply the supervised acceptance plan when installing it.

Android does not publish a supported third-party API for enabling Wireless debugging. This project writes the vendor-sensitive global setting named `adb_wifi_enabled`; the firmware may ignore it, reset it, or require additional privileged access.

The helper does **not** pair a computer, open a fixed port, transmit credentials, contact Home Assistant, or run a network server. Pairing remains an explicit Android/ADB operation.

## Safety model

- Restore-on-boot defaults to **off**.
- The user must install the APK locally, grant `WRITE_SECURE_SETTINGS` through an already-authorized ADB session, open the app, and explicitly enable restoration.
- The boot receiver only handles Android boot/package-replacement broadcasts.
- No Internet permission is requested.
- State and the last attempt result stay in device-protected local preferences.
- Uninstalling the APK removes the helper. It does not disable Android's Wireless debugging toggle automatically.

`WRITE_SECURE_SETTINGS` is a privileged Android permission documented as not intended for ordinary third-party applications. Some firmware accepts a one-time `pm grant` from ADB; other firmware rejects it. Treat rejection as a compatibility result, not as a reason to weaken Android security.

## Build

Requirements:

- Android Studio with JDK 17 or newer. The project pins Android Gradle Plugin 9.4.1 and Gradle 9.6.0.
- Android SDK Platform 36 and Build Tools 36.
- Internet access for the pinned Gradle/Android Gradle Plugin dependencies on the first build.

From `android/`:

```text
./gradlew test
./gradlew assembleDebug
```

On Windows use `gradlew.bat`. The debug APK is generated at `app/build/outputs/apk/debug/app-debug.apk`.

## Install and authorize

Use the persistent ADB identity on the Home Assistant SSH add-on. Replace the endpoint with Android's current Wireless debugging connection port:

```text
HOME=/data/adb-home adb connect 192.0.2.20:30000
HOME=/data/adb-home adb install -r app-debug.apk
HOME=/data/adb-home adb shell pm grant io.roomcraft.tabletadbkeeper android.permission.WRITE_SECURE_SETTINGS
HOME=/data/adb-home adb shell am start -n io.roomcraft.tabletadbkeeper/.MainActivity
```

The repository deliberately uses documentation-only addresses. Do not commit a home's IP addresses, pairing codes, ADB keys, HA tokens, or APK signing keys.

In the app:

1. Confirm the privileged permission is reported as granted.
2. Tap **Enable restore on boot**.
3. Tap **Attempt now** and confirm Android's Wireless debugging page shows the expected state.
4. Perform one supervised reboot with someone physically present.
5. Confirm the tablet returns to Home Assistant and the paired ADB host reconnects.

Do not deploy this helper unattended until the supervised reboot test passes on the exact tablet firmware.

## Verification

```text
./gradlew test
./gradlew lintDebug
./gradlew assembleDebug
```

Device checks:

```text
adb shell dumpsys package io.roomcraft.tabletadbkeeper
adb shell settings get global adb_wifi_enabled
adb logcat -s TabletAdbKeeper
```

Use **Attempt now** for a functional check of the setting write. Verify Android's boot broadcast with a supervised reboot.

## Rollback

Open the app and tap **Disable restore on boot**, then uninstall:

```text
adb uninstall io.roomcraft.tabletadbkeeper
```

If desired, turn Wireless debugging off manually in Android Developer options. Revoking the app's permission without uninstalling is also possible:

```text
adb shell pm revoke io.roomcraft.tabletadbkeeper android.permission.WRITE_SECURE_SETTINGS
```

## Documentation

- [Architecture and extension points](docs/architecture.md)
- [Security and threat model](docs/security.md)
- [Device acceptance plan](docs/test-plan.md)
- [Project brief](project-brief.md)
- [Changelog](CHANGELOG.md)

Android's official documentation says `RECEIVE_BOOT_COMPLETED` permits a declared receiver to run after boot and describes `WRITE_SECURE_SETTINGS` as a privileged permission not intended for third-party apps. `Settings.Global` is normally read-only to applications. Those constraints are why this remains an explicitly authorized, device-specific experiment.

Official references:

- [Android manifest permission reference](https://developer.android.com/reference/android/Manifest.permission)
- [Android global settings reference](https://developer.android.com/reference/android/provider/Settings.Global)
- [Android Gradle Plugin compatibility](https://developer.android.com/build/releases/about-agp)

## No-warranty boundary

This cannot guarantee permanent ADB access. OEM firmware, Android security changes, factory resets, revoked debugging trust, Wi-Fi failure, or a disabled Developer options master switch can still require physical access. A data-capable USB connection to a persistent ADB host remains the strongest unattended-access option.
