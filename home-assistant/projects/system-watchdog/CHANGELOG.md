# Changelog

## 0.2.1 — 2026-11-11

- Refresh the existing health notification when its displayed issues change at the same severity. Repeated identical reports remain deduplicated.
- Exclude ignored discovery entries from integration health counts.
- Use the persistent Home Assistant ADB identity, match Home Assistant to the resumed activity, and report failed package probes and rejected heartbeats as failures.
- Add a component-only installer mode with verified backups, staged file hashes, Home Assistant configuration validation, restart verification, and rollback.

## 0.2.0 — 2026-11-08

- Added a responsive `custom:system-watchdog-card` resource that renders the eight verified health categories as a touch-first animated topology. Healthy, warning, critical, and unavailable states have distinct high-contrast treatments; reduced-motion mode disables animation.
- Added bounded per-resource details and direct authenticated navigation to Home Assistant Integrations, Devices, and Entities. The interface is observational and cannot restart services or actuate devices.
- Updated the dashboard installer to upload and content-version the module, register it idempotently, retain the native diagnostic entity list, back up the dashboard, and verify both dashboard and resource readback.
- Added JavaScript tests for state normalization, issue bounds, metrics, and custom-element registration plus Python tests for view composition and resource registration.
- Deployed the view to the private Second Floor dashboard. A 1920 × 1080 physical-tablet capture verified full-screen fit, current warning/healthy contrast, and touch details. No device state was changed during QA.

## 0.1.0 — 2026-11-08

- Added HA core, integration, Roomcraft object, sensor, workstation, Codex, tablet, and tablet-app health categories.
- Added authenticated external heartbeats with persistent last-known receipt time and a ten-minute stale threshold.
- Added deduplicated HA persistent notifications and bounded diagnostic attributes.
- Added a Windows probe that reuses the protected management adapter and HA-hosted ADB identity without embedding secrets.
- Added an idempotent dashboard installer and a System Health link in the Roomcraft control drawer.
- Added pure report-construction regression tests and a placeholder-only configuration example.

