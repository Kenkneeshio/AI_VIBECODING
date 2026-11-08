# Project brief

## Goal

Reduce physical interventions after the dedicated Home Assistant wall tablet restarts by attempting to restore Android Wireless debugging at boot and allowing the already-paired HA-hosted ADB client to reconnect.

## Reason

The tablet firmware disabled Wireless debugging after a restart. HA Green retained network reachability, but remote administration stopped because Android no longer exposed an ADB endpoint.

## Scope

- A minimal Android APK with no network permission.
- An explicit local opt-in stored in device-protected preferences.
- Boot and package-replacement handling.
- A privileged settings write with clear local status.
- Reproducible build, authorization, supervised-test, and rollback instructions.

## Out of scope

- Circumventing Android pairing or device security.
- Shipping private ADB keys, HA tokens, IP addresses, or signing credentials.
- Rooting the tablet.
- Replacing Home Assistant Companion or becoming a general remote-management agent.
- Claiming compatibility before the actual tablet passes a controlled reboot test.

## Acceptance gates

- Unit tests, lint, and debug assembly pass.
- The APK installs on the target tablet.
- The privileged permission can be granted by an authorized ADB host.
- Opt-in and opt-out survive app restarts.
- A supervised tablet reboot restores Wireless debugging without user interaction.
- The HA-hosted ADB identity reconnects and remains paired.
- Removing the app cleanly stops all helper behavior.
