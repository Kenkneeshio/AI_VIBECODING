# System Watchdog

System Watchdog gives Home Assistant one health model for Home Assistant itself, loaded integrations, selected sensors, Roomcraft-bound controls, the Windows Codex workstation, Codex Desktop, the wall-calendar tablet, and required tablet applications.

## Design

- The Home Assistant custom integration runs every minute, checks configured entity availability and config-entry load state, exposes one summary, eight category sensors, an issue count, and a problem binary sensor, and creates one deduplicated persistent notification when health degrades.
- The Windows agent runs every five minutes under the owner's Windows account. It detects Codex processes, uses the established private HA SSH/ADB route to verify the tablet and required packages, then submits an authenticated heartbeat. It imports the private management adapter at runtime; this repository contains no token, password, key, tablet pairing secret, or private entity list.
- HA marks all external categories critical after ten minutes without a heartbeat. This is what detects a powered-off workstation or stopped agent.
- “App healthy” currently means installed and enabled. Vendor login sessions and cloud service availability require vendor-supported APIs and are intentionally not guessed from screen pixels.

## Private installation

1. Copy `custom_components/system_watchdog/` to `/config/custom_components/system_watchdog/`.
2. Create `/config/system_watchdog.yaml` from the example with the home's verified Roomcraft entity IDs and selected sensors. Keep that file private.
3. Add `system_watchdog: !include system_watchdog.yaml` to `configuration.yaml`, run `ha core check`, and restart Home Assistant.
4. Run `agent/system_watchdog_agent.py` once using the private management directory and a private JSONL log path. Then register it as a five-minute task under the same Windows account that can decrypt the DPAPI-protected HA token.
5. Run `tools/install_dashboard.py` to add or refresh the authenticated **System Health** view after taking a private dashboard backup. Do not publish issue attributes or private entity IDs in screenshots or public documentation.

## Entities

- `sensor.system_watchdog_summary`
- `sensor.system_watchdog_issue_count`
- `sensor.system_watchdog_home_assistant`
- `sensor.system_watchdog_integrations`
- `sensor.system_watchdog_roomcraft`
- `sensor.system_watchdog_sensors`
- `sensor.system_watchdog_workstation`
- `sensor.system_watchdog_codex`
- `sensor.system_watchdog_tablet`
- `sensor.system_watchdog_apps`
- `binary_sensor.system_watchdog_problem`

## Operational limits

The watchdog reports observations; it does not restart HA, integrations, Codex, the tablet, or vendor apps automatically. Recovery actions remain manual until each one has an idempotent, tested rollback. ADB can disappear when Android disables wireless debugging or changes its port; that is reported as a tablet failure rather than silently repaired.

