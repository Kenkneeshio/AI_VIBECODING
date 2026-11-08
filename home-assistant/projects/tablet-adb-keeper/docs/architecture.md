# Architecture

## Components

| Component | Responsibility |
| --- | --- |
| `MainActivity` | Displays permission, opt-in, current setting, and last-attempt state; performs explicit user actions. |
| `BootReceiver` | Receives boot and package-replacement broadcasts and requests a restore attempt. |
| `AdbRestoreManager` | Owns device-protected preferences and the guarded `adb_wifi_enabled` write. |
| `RestorePolicy` | Pure decision logic covered by local unit tests. |

## Boot flow

1. Android sends `LOCKED_BOOT_COMPLETED` or `BOOT_COMPLETED`.
2. The manifest receiver invokes `AdbRestoreManager`.
3. The manager verifies that the owner opted in and the privileged permission is present.
4. It writes `1` to the global setting `adb_wifi_enabled`.
5. It stores a timestamped local outcome for the activity to display.
6. Android/OEM firmware decides whether the setting actually starts Wireless debugging.
7. A separate reconnect loop on the authorized ADB host discovers and connects to Android's current dynamic port.

The application never learns the ADB port and never connects to HA. Android owns the debug service; HA Green owns the ADB client identity.

## Extension points

- Add delayed retry scheduling only after the one-shot boot path is measured on the target firmware.
- Add a local, non-network diagnostic history with bounded retention.
- Add a signed release workflow after the debug build passes target-device acceptance.
- Keep HA-side port discovery/reconnection as a separate operator component; do not add network access to this APK merely for convenience.

## Compatibility boundary

`adb_wifi_enabled` is not a public third-party Android API. Keep the setting name isolated in `AdbRestoreManager`, record firmware/version results, and fail closed when access is denied.
