# Changelog

## 2026-11-01 — Pilot design

- Recorded the goal: Home Assistant control over eligible Tuya devices on the LAN, without a new phone app or Tuya cloud call for already-paired devices whose keys are cached.
- Documented the private audit aggregates: 42 cached keys across 36 direct devices and six gateway subdevices; 39 `support_local` flags (36 direct and three subdevices); five direct LAN advertisements; and three read-only raw LAN DPS probes completing in 0.297–0.406 seconds on Home Assistant 2026.10.4. Those timings are not HA UI latency.
- Recorded that five LAN-discovered devices advertise protocol 3.5, beyond the documented 3.1–3.4 range of the installed but unused LocalTuya 5.2.3.
- Selected upstream `make-all/tuya-local` manual configuration for a one-device pilot. Installed but unused `LocalTuya` is only an alternative where its documented protocol range and device support actually apply.
- Added a workstation helper for private Xtend-cache audit, read-only LAN probe, and one-device HA config-flow import. The helper keeps keys and the HA token off workstation disk; imported keys reside in private HA config entries.
- Added architecture, options, acceptance gates, deployment, rollback, and private-data rules.

## 2026-11-01 — One-device pilot in progress

- Backed up private HA configuration, installed and pinned upstream `make-all/tuya-local` 2026.10.0, and restarted HA to load it. The separate `LocalTuya` installation remains unused.
- Helper audit found the same 42 cached-key candidates and five LAN advertisements. The first import attempt timed out under a 20-second HTTP limit before creating an entry; a retry at 60 seconds imported one reachable bulb. The helper now supports `--timeout` with a 90-second default.
- The new HA entry loaded and created five entities with a reported 100% RGBWC profile match. Its light reported fresh state `off`. An idempotent `turn_off` command while already off returned in 0.597 seconds of HA API round-trip time. This is neither physical actuation evidence nor HA state-propagation latency.
- A supported `homeassistant.reload_config_entry` returned the entry to `loaded` with a fresh `off` state. The private entry contains a LAN address, key, protocol 3.5, and profile, with no cloud token fields. One receive-loop termination warning appeared during reload and no later local warning appeared in sampled logs. This does not test full HA Core restart persistence.
- Kept prior official and Xtend entries/IDs. At one sample the official light read `off` with state age 306 seconds, the new local light read `off` with state age 62 seconds, and an Xtend duplicate was `unavailable`. These snapshot ages do not measure propagation latency. Apart from the targeted-reload warning, no continuing Tuya Local reconnect error appeared in sampled logs.
- Visible on/off control, post-import full HA Core restart recovery, cloud-offline operation, dependent dashboard/automation bindings, and production promotion remain unverified. A separate log sample contained approximately 208 Xtend unknown-datapoint warnings; no causal link to control latency is established.
