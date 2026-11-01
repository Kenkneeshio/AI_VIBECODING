# Tuya LAN migration helper

`tuya_lan_migrate.py` helps migrate devices already paired through Xtend Tuya to
the separate `make-all/tuya-local` Home Assistant integration. It uses the
local keys already held by the running Xtend integration. It does not require
another phone pairing or a Tuya developer account for those devices.

This is a workstation tool, not a Home Assistant add-on. Home Assistant
integrations create device entities; an add-on by itself cannot do that. The
script talks to Home Assistant through its authenticated WebSocket, diagnostics,
and config-flow APIs. It never writes the token, local keys, or raw diagnostics
to the workstation disk. Home Assistant stores each imported device's key in
its private config entry as required for ongoing local control. Use a trusted
LAN or configured HTTPS for the HA API connection. Each `import` adds one new
Tuya Local entry and leaves the existing
official Tuya and Xtend entries in place for comparison and rollback.

## Setup

1. Install and load the `tuya_local` integration in Home Assistant first.
2. Use Python 3.10 or newer on a workstation on the same LAN as the Tuya
   devices. Install `websocket-client` for automatic Xtend entry discovery and
   `tinytuya==1.20.0` for LAN discovery and status probes:

   ```powershell
   python -m pip install websocket-client tinytuya==1.20.0
   ```

3. Supply an HA administrator long-lived access token through the `HA_TOKEN`
   environment variable or `--token-file` outside the repository. Never put
   the token on the command line or commit it. Set the HA URL to the origin,
   without `/dashboard...`.

## Commands

Run options before the command name:

```powershell
python tuya_lan_migrate.py --ha-url http://192.0.2.10:8123 audit
python tuya_lan_migrate.py --ha-url http://192.0.2.10:8123 probe --device "Example Lamp"
python tuya_lan_migrate.py --ha-url http://192.0.2.10:8123 import --device "Example Lamp"
```

`audit` is the default and makes no configuration changes. It lists friendly
names, category, local-capability flag, whether the device advertised itself
on the LAN, and a short hash fingerprint. Select by exact name or fingerprint.
The fingerprint resolves duplicate names without printing the device ID.
Inventory names can reveal details about the home, so do not paste audit output
into a public issue or log.

`probe` performs one read-only local status request. It reports whether a DPS
status was returned and the elapsed local request time. It does not actuate the
device. `import` runs Tuya Local's manual setup flow and prompts for a device
mapping if run interactively. For a noninteractive run, supply the exact
`--type-key` returned by that flow. A first noninteractive run lists available
mapping keys and cancels its unfinished setup flow; rerun with the chosen key.
The tool uses the LAN advertisement's IP. If discovery does not find the
device, supply `--host <device-ip>`. Current Xtend diagnostics do not expose a
device IP or protocol version, so Tuya Local may need to auto-detect the latter.
The Home Assistant config-flow connection test can take longer than a status
probe; the helper waits up to 90 seconds per API request by default. Use
`--timeout <seconds>` before the command name if the host needs more time.

If `websocket-client` is unavailable, supply `--xtend-entry-id` from an admin
view of Home Assistant config entries. If TinyTuya is unavailable or LAN
discovery is blocked, use `--no-scan` and, if needed, `--host`.

The helper refuses Xtend-marked subdevices and devices without a cached key or
local-support flag. They need a device-specific gateway or replacement path.
Review the new entities and real state/update latency before changing dashboard
bindings. Local control by itself does not prevent a stock Tuya device from
contacting the Tuya cloud; any internet block should be tested per device.

## Tests

```powershell
python -m unittest discover -s tests -v
```

Tests use fake diagnostics and flow responses. They verify that keys and tokens
do not enter inventory output or HTTP error messages, that one import follows
the HA config flow, and that failed flows are canceled. No live device is
modified by the tests.
