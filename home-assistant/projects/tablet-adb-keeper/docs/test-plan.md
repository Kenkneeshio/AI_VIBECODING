# Target-device acceptance plan

## Preconditions

- Someone is physically present at the tablet.
- Home Assistant Companion currently launches and the dashboard remains usable.
- The authorized HA-hosted ADB client is paired from persistent storage.
- The APK and its source commit are identified.

## Safe sequence

1. Build and run unit tests, lint, and debug assembly.
2. Install the APK without rebooting.
3. Grant `WRITE_SECURE_SETTINGS`; verify the package permission state.
4. Open the app and confirm restore-on-boot remains off by default.
5. Enable restore, run **Attempt now**, and inspect the Android Wireless debugging screen.
6. Disable restore and repeat **Attempt now**; verify no setting write occurs.
7. Re-enable restore and reboot once while an operator is present.
8. Verify HA Companion returns, the tablet remains on the intended Wi-Fi, and Wireless debugging becomes available.
9. From HA Green, discover the dynamic ADB endpoint and reconnect using the persistent ADB home.
10. Record firmware, Android version, setting behavior, elapsed time, and any OEM power-management interference.

## Failure and rollback

- If the privileged grant fails, stop. Record the firmware incompatibility.
- If the boot receiver runs but Wireless debugging remains off, stop automatic deployment; consider a delayed retry, device-owner management, or USB ADB.
- If the dashboard or launcher behavior changes, disable restore and uninstall the APK.
- Do not factory-reset, root, or weaken network security to make the experiment pass.
