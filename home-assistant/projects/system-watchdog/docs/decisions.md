# Architecture decisions

## 2026-11-08 — Split HA and workstation responsibilities

**Decision:** Home Assistant evaluates its own integrations and entities. A Windows agent evaluates Codex and the Android tablet, then posts an authenticated heartbeat.

**Reason:** A monitor running only on Windows cannot prove that Windows is alive. HA can detect the missing workstation by aging the last heartbeat, while the workstation can use the established HA-hosted ADB identity that HA Core cannot access directly.

## 2026-11-08 — Alert on explicit integration failure states

**Decision:** Treat `setup_error`, `setup_retry`, `migration_error`, and `failed_unload` as integration warnings. Do not flag `not_loaded` or transient startup states.

**Reason:** This installation contains intentionally unloaded and startup-delayed entries. Flagging every state other than `loaded` produced noise that hid real failures.

## 2026-11-08 — Observe before repairing

**Decision:** Version 0.1.0 creates health entities and one deduplicated notification but performs no automated restarts.

**Reason:** Restarting HA, integrations, Codex, or Android apps can interrupt live controls and camera sessions. Each recovery action needs independent idempotency and rollback testing before automation.

## 2026-11-08 — Keep the monitor list private

**Decision:** Generate `/config/system_watchdog.yaml` from the live dashboard and current HA metadata, and keep the workstation copy in the private management directory.

**Reason:** Real entity IDs and monitored household devices are installation data, not reusable public source. Git contains only placeholders and the generator.

