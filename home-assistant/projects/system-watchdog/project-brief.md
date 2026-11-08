# System Watchdog project brief

## Goal

Detect degraded Home Assistant infrastructure and frontend control paths early, from one authenticated HA view, without exposing credentials or depending on a vendor cloud for monitoring.

## Shipped scope

- HA runtime and config-entry setup failures.
- Availability of the current Roomcraft-bound objects and a private baseline of safety/environment/connectivity sensors.
- Windows workstation and Codex process heartbeat.
- Wall-tablet ADB connection, HA foreground state, and required-app installation/enabled state.
- Persistent HA notification, bounded issue attributes, private logs, dashboard view, and Roomcraft navigation.

## Non-goals for 0.1.0

- Automatic repair or restart actions.
- Vendor account login/session validation without an official API.
- Publishing private entity IDs, network topology, logs, or credentials.
- Treating every disabled or intentionally unloaded HA entry as a failure.

## Acceptance

The custom integration loads on HA 2026.10.4, all eleven entities exist, the authenticated heartbeat is accepted, the Windows scheduled task exits 0, the tablet renders `/second-floor/health`, and an actual unavailable object or setup-retry integration produces a bounded warning.

