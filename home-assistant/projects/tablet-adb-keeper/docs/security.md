# Security and threat model

## Protected assets

- Physical control of the wall tablet.
- Home Assistant credentials and dashboard session.
- ADB pairing keys held by the authorized HA host.
- The home LAN and devices reachable from the tablet.

## Principal risk

Wireless debugging exposes a privileged Android administration service to the local network. Android pairing and authenticated ADB keys mitigate access, but continuously restoring the service increases exposure time. Deploy only on a trusted LAN with a reserved tablet address, current firmware, and controlled administrator keys.

## Controls

- No `INTERNET` permission.
- No embedded IP address, port, token, password, or ADB key.
- Restore behavior is disabled by default.
- `WRITE_SECURE_SETTINGS` must be explicitly granted from an authorized ADB session.
- The private receiver accepts only Android's locked-boot, boot-completed, and own-package-replacement actions. [Android receiver manifest reference](https://developer.android.com/guide/topics/manifest/receiver-element)
- No shell execution, file server, HTTP server, remote command receiver, analytics, or cloud dependency.
- Permission denial and OEM rejection produce a local failure instead of retry storms or bypasses.

## Operator requirements

- Keep the HA ADB key in persistent protected storage and never commit it.
- Disable ADB authorization timeout only when the dedicated-device risk is accepted.
- Remove old paired debugging hosts in Android Developer options.
- Use a router reservation and trusted Wi-Fi; do not expose ADB through port forwarding or a public network.
- Perform a supervised reboot before depending on the helper.

## Known limitations

- A malicious app with the same privileged permission would be more powerful than this helper.
- OEM firmware can ignore the setting or disable debugging later.
- Factory reset, Developer options reset, or pairing revocation still requires physical recovery.
- Debug APKs are development artifacts. Establish controlled signing and release provenance before long-term production use.
