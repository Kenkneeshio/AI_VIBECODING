# Pilot deployment, verification, and rollback

This is the pilot runbook. `tuya-local` 2026.10.0 is installed and one bulb has a loaded entry, but the verification gates below are not complete. No existing control path has been replaced. Follow the repository-wide [deployment policy](../../../docs/deployment.md).

## Current pilot record

- A private HA configuration backup was made before installation. HA was restarted once to load the new integration.
- The first import attempt hit the helper's former 20-second HTTP timeout before entry creation. A retry with a 60-second timeout succeeded. The helper now exposes `--timeout` and defaults to 90 seconds; see its [command guide](../tools/README.md).
- The one bulb entry is loaded, with five HA entities and a reported 100% RGBWC profile match. A fresh light state read `off`; `turn_off` while already off returned successfully in 0.597 seconds of HA API round-trip time. This is not evidence of physical switching or state-propagation latency.
- A supported `homeassistant.reload_config_entry` operation returned this entry to `loaded` with a fresh `off` state. The private HA entry stores LAN host, local key, protocol 3.5, and product mapping, with no Tuya cloud token fields. One receive-loop termination warning appeared during reload, with no later local warning in sampled logs. This is a config-entry reload check, not a full HA Core restart test.
- The previous official/Xtend entries and entity IDs remain. At one sample the official light read `off` with state age 306 seconds, the local light read `off` with state age 62 seconds, and an Xtend duplicate was `unavailable`. These are snapshot ages, not propagation measurements. Apart from the warning during the targeted reload, sampled logs showed no continuing Tuya Local reconnect error.
- Still needed: a visible controlled on/off test, HA state-update latency, recovery after a **post-import full HA Core** or device restart or LAN interruption, cloud-offline behavior, and dashboard/automation binding verification. Do not block device egress or retire old entities before those tests.

## Before changing HA

1. Select one low-risk, currently reachable Tuya Wi-Fi device. Exclude locks, garage doors, alarms, heaters, and the ceiling fan for the first write test.
   Green is wired to the LAN; verify the selected Wi-Fi device is reachable from that network. Do not install Zigbee hardware for a Wi-Fi device.
2. Back up HA configuration and the affected automations/dashboard. Record current HA version, integration versions, entity IDs, and known behavior in a **private** deployment log.
3. Obtain that device's current host, ID, local key, and likely protocol version from the authorized private diagnostic cache. Never paste them into a GitHub issue or terminal output captured in public logs.
4. Check that no other integration or script holds a competing local connection to the device. Keep the previous control path available for rollback.
5. Confirm HA Green and the device can reach each other over the LAN. A read-only status probe is the first gate; a `support_local` flag is not enough.

## Configure one pilot device

1. Install the official upstream [`make-all/tuya-local`](https://github.com/make-all/tuya-local) custom integration via HACS or its documented manual method. Pin and record the installed version, then **restart Home Assistant once** to load the new integration. Do not install a second protocol copy under another component name.
2. Use the reviewed [workstation migration helper](../tools/README.md) to audit, probe, and import one selected device from the private Xtend cache without a phone or new Tuya cloud call. The helper invokes `Tuya Local`'s **manual** HA config flow; it does not write credentials to workstation disk or replace old entries. HA stores the imported local key in a private config entry. Use a trusted LAN or configured HTTPS for the authenticated HA API connection. The helper README has exact commands and dependencies. Never log or print the key in normal helper output.
3. Choose the closest exact device profile only after inspecting read-only returned datapoints. If the profile is absent or ambiguous, stop that device's migration and capture a sanitized datapoint signature for an upstream report.
4. Name new entities distinctly, for example with a temporary `LAN` suffix. Do not replace old entity IDs or Roomcraft bindings yet.

## Verify, then promote

| Gate | Evidence to record privately |
| --- | --- |
| Read | New entity state agrees with physical device and existing HA entity; measure HA state-update latency separately from the earlier raw LAN DPS probes. |
| Write | A controlled, low-risk on/off or brightness action changes only the selected device; physical control still works. |
| Recovery | HA restart, device restart, and temporary LAN interruption resolve without stale false state. |
| Cloud independence | Local state and action still work with Tuya cloud unreachable; restore outbound access if not. |
| Dependencies | Automations, scenes, and Roomcraft object bindings act on the new entity exactly once. |

After all gates pass, update dependent entity references in HA and Roomcraft. Disable the old cloud entity for that device only when the new action is verified and the backup is ready. Repeat for the next device. Do not bulk-add the 39 flagged candidates.

## Rollback

1. Restore any network rule changed for the test so the old route can work.
2. Disable/remove the new `Tuya Local` device entry, and stop competing local clients.
3. Restore the affected automations, scenes, and Roomcraft bindings from the pre-change backup; verify the old entity and physical control.
4. Record which gate failed without publishing keys, IDs, addresses, or private device names.

Do not factory-reset or re-pair as a routine rollback. Re-pairing rotates the local key and can invalidate the cached credential. If a device is unreachable locally, preserve the previous working route while investigating its transport, key freshness, protocol version, profile, and network path.

## Release record template

```text
Date / HA version / tuya-local version:
Private device reference (do not paste ID/key/IP):
Read / write / restart / cloud-offline checks:
Entity/dependency changes:
Backup location (private):
Rollback result:
Unresolved limitations:
```
