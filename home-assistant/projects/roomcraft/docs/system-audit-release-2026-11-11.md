# Coordinated audit release, November 11, 2026

The household operator needs one release record to tell which Roomcraft, Studio, Watchdog, and wall-tablet changes belong together. The `roomcraft-2026.11.11.1` Git tag identifies the tested source. The deployment evidence records the separate Home Assistant, private Site, Windows agent, and Android installs that use it.

## Release scope and acceptance

| Surface | Change | Acceptance |
| --- | --- | --- |
| Roomcraft Home and Studio | Carry forward the audited layout and shared snapshot history. Build both transports with the revised dependency set. | Confirm the active layout, picture projection, bindings, and snapshot history match preflight. Verify the hosted revision, Home Assistant assets, and tablet navigation. |
| Watchdog 0.2.1 | Exclude ignored discoveries from integration totals. Refresh the existing alert when the issue list changes at the same severity. | The same notification updates for changed issues. Identical reports stay deduplicated. The integration summary and tested component bytes return after the Core restart. |
| Windows heartbeat | Probe the tablet through its persistent ADB identity. Match the foreground package to the resumed activity and distinguish failed probes and rejected heartbeats from healthy results. | The scheduled task runs the verified agent bytes and Home Assistant accepts a fresh heartbeat. Failed probes and rejected heartbeats produce a failed status. |
| Tablet Keeper 0.1.1 | Restrict the receiver to expected system events. Discover a changed debugging port through the known tablet's mDNS connect service. | Replace the signed APK in place, read back the installed version and grant, and verify Home Assistant and ADB afterward. Record package replacement and physical reboot as separate checks. |
| Release tooling | Run clean install, dependency audit, tests, type checks, lint, and production build on the exact source revision. | Record advisory counts, the Roomcraft manifest digest, and the private Site version and source revision after deployment. |

The version keeps the existing Roomcraft layout contract and uses the existing HA session, authenticated dashboard transport, Windows scheduled task, and tablet pairing. The release keeps its private backups, hashes of the live configuration, account details, and tablet diagnostics in the operator's management directory.

## Live integration findings

| Finding | Verified condition and recovery route |
| --- | --- |
| One Tuya lamp | The cloud integration is loaded. The enabled lamp is unavailable and has no verified alternate binding. Confirm power and availability in Tuya before rebinding. Honeywell climate was available on recheck. |
| Ignored discovery entries | All four unloaded entries were ignored discoveries, including Google Home. They have no active setup failure. Watchdog now excludes them from its monitored total. |
| Neptune Apex | The configured LAN endpoint was unreachable from Green and Windows, with repeated connection refusals in Home Assistant diagnostics. Verify the controller's LAN address and service. [Apex integration documentation](https://github.com/itchannel/apex-ha) |
| Bambu Lab | Local telemetry remained available. The installed integration opens its authentication repair after a failed cloud slicer-settings request, which can have multiple causes. The available integration update includes cloud sign-in fixes. Recheck the warning and cloud functionality in a vendor maintenance window. [Bambu Lab release notes](https://github.com/greghesp/ha-bambulab/releases/tag/v2.3.0) |
| Scrypted | The app reported an error, with no running HTTPS listener or HA integration entities. Roomcraft's camera bindings use Eufy and ONVIF. Keep any Scrypted recovery independent of dashboard deployment. [Scrypted Home Assistant setup](https://docs.scrypted.app/home-assistant.html) |

Home Assistant offered Core 2026.11.1 and OS 18.4 during preflight. Core introduces the Marketplace migration and display-name changes while retaining entity IDs. The OS release includes kernel and container security fixes and requires a host reboot. Schedule them with separate backup and post-update checks. [Core release notes](https://www.home-assistant.io/blog/2026/11/04/release-202611/) · [OS release notes](https://github.com/home-assistant/operating-system/releases/tag/18.4)

## Deployment evidence

- Roomcraft runtime source `3fd98f99754e1b9ec680bf29cb1878da4ace5736` passed a clean install, 182 editor and bridge tests, 55 HA card and weather tests, 24 Python installer tests, five presence tests, TypeScript, lint, build, and manifest verification. Lint retained 17 existing warnings. The runtime input digest is `sha256:14545b2eec4c6e9ed176620a5a12135f961f7c099aa5e649887faf16a52628c0`. The full npm audit reported zero advisories. Local Wrangler and Vite previews served the editor and returned the expected unconfigured dashboard API guard.
- Owner-private Studio version 72 deployed from Site revision `b2a39ce911b40a5fffbfb0768e366e1828978826`. The exact published revision matched the archive build. The live browser reached the owner sign-in screen. A fresh owner session is required to verify live import.
- Watchdog 0.2.1 loaded after one Core restart. Supervisor reached `RUNNING` after 186 seconds. The original client timed out at 180 seconds, restored the old files, and Supervisor rejected its overlapping restart. Runtime integration totals established that the new component was loaded. Exact file hashes and parsed-code comparison verified the staged component, which was restored to disk without another Core restart. The installer now records the detached Supervisor result and leaves an unconfirmed restart for inspection. The revised path passed 18 Python and four JS tests. A harmless detached command on the actual SSH host verified the status transport. [Supervisor restart implementation](https://raw.githubusercontent.com/home-assistant/supervisor/2026.10.5/supervisor/api/homeassistant.py)
- Home Assistant served six matching Home and Studio assets. The full dashboard and snapshot history matched the private preflight copy. Both Watchdog-related YAML hashes matched, the scheduled task ran the tested Windows agent bytes, and HA accepted a fresh heartbeat. The dashboard was visible on the wall tablet after Core returned.
- Tablet Keeper 0.1.1 preserved its signing identity, grant, opt-in, paired ADB session, and Home Assistant launcher. The package replacement event triggered a successful settings write and readback. Five JVM tests, lint, and APK assembly passed. Four discovery tests passed and the Windows helper found the live port. Physical reboot recovery awaits supervised verification.

## Rollback

Use Git revision `7820f4ae3bfc74daf73544b159ecaa136b9112cc` for the previous Roomcraft source and owner-private Site version 71 for the previous hosted deployment. Restore the prior Home Assistant assets with the [Roomcraft deployment guide](deployment.md). The Watchdog installer keeps a verified previous component copy and restores it if validation or restart verification fails. The operator's private backup contains the prior Windows agent and tablet APK. Use the [tablet access runbook](tablet-access.md) for launcher and pairing recovery. Layout-only recovery remains under **Menu → Manage → Layout snapshots**.

The [first audit](system-audit-2026-11-11.md) records the original findings and evidence. This record follows the [Roomcraft release standard](release-standard.md).
