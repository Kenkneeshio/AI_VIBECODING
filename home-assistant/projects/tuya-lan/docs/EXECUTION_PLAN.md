# Tuya LAN: compact execution plan

## Goal and current state

Make Home Assistant Green the local control point for eligible Tuya devices, then bind Roomcraft objects to verified local entities. Avoid a second phone and Tuya cloud calls for devices whose keys are already cached. PR #15 is merged. `tuya_local` 2026.10.0 is installed; one bulb has a loaded local entry alongside its official cloud entity. Nine helper tests pass. Three raw LAN reads took 0.297–0.406 s. A balanced live on/off comparison averaged 1.12 s for the local entity and 1.17 s for the official cloud entity to report the commanded state. Local completed 4/4 total trials; cloud completed 3/4, with one cloud command not converging within 20 s. This is a small pilot, not a whole-home latency guarantee. Five devices advertised on LAN; 42 keys are cached, including six gateway subdevices. Do not bulk-import the 42.

## Stages and exit gates

| Stage | Work | Exit gate |
| --- | --- | --- |
| 1. Prove pilot | Repeat latency/reliability checks over time, verify after a full HA Core restart, then briefly test local operation without Tuya WAN access and restore access. | State, command, recovery, and offline behavior recorded; rollback works. |
| 2. Expand direct Wi-Fi | Use `tools/tuya_lan_migrate.py audit`, `probe`, then `import` for one reachable, low-risk device at a time. Check profile and every entity. Find hosts for candidates missing LAN advertisements before deciding they are unsupported. | Each imported device passes Stage 1 gates; no duplicate local connection. |
| 3. Other transports | Classify the six gateway subdevices and other holdouts. For suitable Zigbee devices, add one Zigbee radio to Green and pair directly in ZHA. Consider firmware conversion only after chip and firmware identification. | A device-specific local route is proven, or the holdout stays documented. |
| 4. Dashboard cutover | Map each Roomcraft object and affected automation to its verified local entity. Compare response and availability over several days; then disable the old entity for that device. | The object controls the right physical device once, shows true state, and has a tested rollback. |

## Module boundaries

- **Protocol and profiles:** upstream `make-all/tuya-local`; contribute device-specific fixes upstream. Do not fork the protocol stack for this project.
- **Migration helper:** `tools/`; keys remain in memory, one import per command, no secrets in logs or Git.
- **HA operations:** private backup, supported config-flow/API changes, per-entry reload, entity inventory, and rollback.
- **Roomcraft:** display HA states and call HA services; never store Tuya keys in browser assets.
- **QA and network:** measure actual state propagation, confirm physical outcome, test cloud-offline behavior, Wi-Fi reachability, and single-client contention.

## Token-efficient handoff

Read this page, `README.md`, and the latest `CHANGELOG.md` entry first. Reuse the recorded 42/39/5 inventory unless a device or integration changes; query only the selected device and relevant logs. Work one stage and one device at a time, record the gate result in the changelog, and stop expansion on a failed gate. Keep private IDs, keys, IPs, tokens, and raw diagnostics outside GitHub. Ask for user input only when a physical or network change cannot be verified remotely.
