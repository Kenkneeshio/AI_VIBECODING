# Tuya LAN migration

Move eligible, already-paired Tuya devices from cloud-mediated Home Assistant control to direct local-network control. The intended user interface is Home Assistant itself; no separate phone app or Tuya cloud call is required **during migration of a device whose current local key is already available**.

## Status and evidence

**One-device pilot, not a whole-home release.** The target is Home Assistant 2026.10.4 on Home Assistant Green (ARM64). A private Xtend diagnostic inventory exposed 42 cached local keys; 39 corresponding devices reported `support_local`. Three read-only raw LAN DPS status probes completed in 0.297–0.406 seconds. Those times do not measure HA UI latency or prove feature parity for other devices. A separate `LocalTuya` integration is installed but unused.

Upstream `make-all/tuya-local` 2026.10.0 is installed and loaded. One reachable bulb was imported through its manual HA config flow; the loaded entry created five entities and reported a 100% RGBWC profile match. Its new light entity reported a fresh `off` state. An idempotent `turn_off` call while it was already off returned successfully in 0.597 seconds of HA API round-trip time; this does **not** prove physical actuation or state-propagation latency. A `homeassistant.reload_config_entry` test returned the entry to `loaded` with fresh `off` state. One receive-loop termination warning occurred during reload, with no continuing local warning in sampled logs. The old official entity remained `off`; an Xtend duplicate was `unavailable` at an earlier sample. Existing entries and entity IDs were retained. Cloud-offline operation, a visible on/off action, and a full HA Core restart **after import** remain untested.

The 42 inventory records divide into 36 direct devices and six gateway subdevices. Thirty-nine have a `support_local` flag (36 direct, three subdevices), but only five direct devices were discovered on the LAN at this audit: a bulb, two types of wall/track-light switches, and two air monitors. Those five advertise Tuya protocol 3.5. The six subdevices require separate gateway assessment; a local-capable flag does not establish direct LAN reachability. These are aggregate findings only. Device IDs, keys, addresses, entity names, account details, and the private diagnostic output must stay out of this repository.

## Why a custom integration, rather than a new add-on

The requested outcome is local HA entities (lights, switches, fans, covers, and sensors). A [Home Assistant custom integration](https://developers.home-assistant.io/docs/creating_component_index/) provides those entities directly. A Supervisor add-on would introduce another long-running process and still need an integration or MQTT bridge. Reuse [make-all/tuya-local](https://github.com/make-all/tuya-local) for the pilot before writing a new Tuya protocol implementation. Its manual configuration path accepts a device host, ID, local key, and protocol version in Home Assistant's Devices & services UI. The [workstation migration helper](tools/README.md) reads the existing private Xtend cache in memory and imports one device through that config flow; it is not an HA add-on. The helper does not write keys or the HA token to workstation disk. Home Assistant stores imported keys in private config entries for ongoing control. This project owns the migration workflow, compatibility evidence, sanitized tests, and any narrowly scoped upstream fixes—not a copied fork of the whole integration.

## Scope

- Inventory each candidate privately and classify it by transport: direct Tuya Wi-Fi, Tuya hub subdevice, Bluetooth, Zigbee, or another protocol.
- Pilot one low-risk, reachable Wi-Fi device with a cached key and supported profile. Verify status, a controlled action, recovery after HA/device restart, and behavior with Tuya cloud unavailable.
- Migrate one device at a time and map old entity IDs to new local entities before updating automations or Roomcraft bindings.
- Keep the existing Tuya path available for rollback until local behavior is verified.
- Investigate missing datapoint mappings through sanitized evidence and contribute fixes upstream when possible.

The 39 `support_local` flags are candidates, not a promise that 39 devices can be migrated. Battery devices, hub subdevices, and firmware variations can limit local support; [tuya-local documents those limits](https://github.com/make-all/tuya-local#device-support).

## Staged connection plan

1. Keep Home Assistant Green on wired Ethernet. It reaches direct Tuya Wi-Fi devices over the local network; no new radio or proprietary hub is needed for those devices.
2. Migrate reachable Tuya Wi-Fi devices one at a time with their cached keys and the HA-native integration. Put unsupported or cloud-only devices on a clearly marked holdout list rather than claiming local control.
3. For future Zigbee sensors or switches, add a [Connect ZBT-2](https://www.home-assistant.io/connect/zbt-2/) to Green, select Zigbee, and pair in [ZHA](https://www.home-assistant.io/integrations/zha/). This is a separate path from Tuya Wi-Fi LAN control. This Green currently has no ZHA/Thread/MQTT entry or USB radio; Matter Server being loaded does not supply a radio. One ZBT-2 cannot operate Zigbee and Thread at the same time.

## No-cloud boundary

Local control of an already-paired device can run without Tuya cloud if the local key remains valid and the device responds on the LAN. The existing keys originated from prior pairing/cloud activity. This is **not** a universal cloud-free onboarding method for new or reset Tuya Wi-Fi hardware. Re-pairing changes a key, so a device may require new credentials. Local control also does not by itself stop a device from contacting Tuya servers; outbound blocking is a separate, per-device network decision after verification. [Upstream explains key rotation and continued cloud traffic](https://github.com/make-all/tuya-local#configuration).

## Start here

1. Read [architecture and team boundaries](docs/architecture.md), [option comparison](docs/options.md), and [deployment and rollback](docs/deployment.md).
2. Maintain the private device/credential map outside GitHub. The public example below shows shape only:

   ```text
   <room-purpose>: <private-device-id>, <private-local-key>, <private-LAN-host>, <protocol-version>
   ```

3. Use the [workstation migration helper](tools/README.md) to audit and probe one device, then import through upstream `tuya-local`'s manual HA config flow. Do not select the cloud-assisted setup path when the cached key is available.
4. Record sanitized pass/fail evidence in this project's changelog before expanding the migration. The current bulb is a pilot entry, not a promoted replacement for its existing entities.

## Acceptance for each migrated device

- It reports current state on LAN without a Tuya cloud response.
- Every intended control and sensor maps to the correct HA entity; no unsafe command fires on startup.
- Commands work after HA and device restart, and when cloud access is unavailable for the test.
- Existing dashboards, scenes, and automations point to the intended local entity, with no duplicate action.
- The old route can be restored from the backup documented for that device.

The repository's [general deployment policy](../../docs/deployment.md) applies. Installation in HACS may require internet to fetch code; runtime Tuya control must not require Tuya cloud.
