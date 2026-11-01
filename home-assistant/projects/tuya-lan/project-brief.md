# Project brief: Tuya LAN migration

## Problem

Several current Home Assistant Tuya entities depend on a cloud-mediated integration and may become unavailable even while devices are reachable at home. The owner wants Home Assistant to be the control interface, without a separate phone or Tuya cloud dependency for devices already paired.

## Desired behavior

HA Green reads current state and sends supported commands directly to eligible Tuya devices over the LAN. A disconnected internet connection must not prevent an already configured local device from working. Unsupported devices should show an honest unavailable/unsupported state, without silently falling back to cloud.

## Project type and reason

Migration and compatibility project around the existing [tuya-local HA custom integration](https://github.com/make-all/tuya-local). Native HA entities fit the goal better than a new Supervisor add-on or a second app. Only implement a custom adapter or upstream device profile if a verified gap remains.

## Scope

- Private compatibility matrix and one-device-at-a-time migration.
- Cached-key manual configuration with no new Tuya account or phone setup for eligible, already-paired devices.
- State and command verification, entity remapping, and rollback.
- Sanitized documentation and targeted tests for any code that is added.

Defer new-device provisioning, unsupported firmware/hub/BLE devices, mass migration, firewall blocking, and replacing Tuya hardware until each has separate evidence.

## Dependencies and compatibility

- Target: Home Assistant 2026.10.4, Home Assistant Green ARM64; other versions untested here.
- Green is connected by Ethernet; eligible Tuya Wi-Fi devices need LAN reachability, not a USB radio. Optional Zigbee hardware uses a separate ZHA path with a Connect ZBT-2 configured for Zigbee.
- An eligible device must be reachable from HA on the local network and have a valid local key and a supported command/profile mapping.
- The upstream integration is third-party software installed through HACS or manually into `custom_components`; HA's official Tuya integration remains separate.
- A private credential store is required. Never copy key material into Git, logs, screenshots, issue reports, or public test fixtures.

## Acceptance checks

- [ ] At least one selected device passes read, write, restart, and internet-offline tests.
- [ ] Entity IDs and Roomcraft/dashboard bindings are migrated with no duplicate controls.
- [ ] Unavailable, stale-key, and unsupported-device cases are differentiated.
- [ ] Tests and sanitized evidence are recorded for each additional model/profile.
- [ ] Backups, rollback, and private credential handling are verified.

## Deployment and rollback

Install/configure from HA's Devices & services UI, migrate one selected device, and update its dependent HA entities only after verification. Roll back by disabling/removing the new local entry and restoring prior entity bindings/configuration from the pre-change backup. Do not re-pair a device as a routine rollback step; that rotates its key.

## Status

One-device pilot in progress. A private audit found 42 cached keys and 39 `support_local` flags; three read-only **raw LAN DPS status** probes took 0.297–0.406 seconds. This is not HA UI latency or fleet compatibility evidence. Upstream `tuya-local` 2026.10.0 is installed, and one bulb has a loaded entry with five entities and fresh state. An idempotent off command and config-entry reload succeeded, but a visible physical transition, full HA Core restart after import, and Tuya cloud-offline operation remain untested. See the [pilot record](docs/deployment.md#current-pilot-record).
