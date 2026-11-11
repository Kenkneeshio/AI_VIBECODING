# Roomcraft system audit, November 11, 2026

## Customer outcome and scope

A household administrator can recover from an unwanted layout publish directly from Roomcraft Home. Operators can trust the scene, tracker, and status information while Studio and the installers handle stale data and connection failures. Engineers can reproduce the checks and identify the correct rollback for each surface.

The review covered the live card, Studio and its two publish transports, the shared layout and projection, render and telemetry code, release scripts, Home Assistant Green, the wall tablet, the Windows heartbeat, the private Studio deployment, and the adjacent projects in this repository. Camera availability checks used entity metadata. Firmware behavior, private camera playback, and vendor-account reauthentication need separate verification.

## Changes and acceptance checks

| Area | Finding and correction | Acceptance |
| --- | --- | --- |
| Layout recovery | Home now lists up to three distinct previous designs. Both Studio publish transports capture the displaced layout and projected picture card in the same dashboard save. Restore checks the saved image and re-reads the dashboard before saving. It moves the displaced current design into history. | Start as an administrator, select a previous version, and verify Home and Studio load the same restored layout. Restore again to recover the version just displaced. Re-publishing an equivalent layout uses the same history slots. An unavailable image or a detected concurrent change leaves the active layout intact. |
| Studio draft and publish | A second attempt after a conflict could overwrite the newer dashboard. A successful publish could also mark newer browser edits as already published. Require an explicit import after a conflict and record the exact draft sent with the image. | Induce a conflict and confirm retries and a cancelled import leave Home intact. Change an object while publishing and confirm the newer local edit remains available and marked unpublished. |
| Hosted bridge | Bound incoming JSON by bytes read from the request stream and settle pending requests promptly if the Home Assistant socket drops. | Reject an oversized stream regardless of its reported length. Drop a synthetic socket during a request and verify it fails promptly and releases pending work. |
| HA installer | Verify the deployed public entrypoint bytes and check the saved dashboard before registering updated resources. | Compare served files with the build. Induce a failed dashboard readback and confirm the new resource is held back. |
| Live vacuum | Expire calibrated map coordinates on schedule and hold the last valid position without the tracking pulse. Use the authored dock when there is no previous fix and the dock fits the floor. | With fresh synthetic telemetry, verify the tracked marker. Advance time without a new update and confirm it stops pulsing without jumping or moving off the floor. |
| Coastal art | Enlarge the sun, moon, and cloud reflections so the weather reads clearly on the ocean at tablet scale. Use the existing shared 3D shader, camera projection, and motion preference. | Compare day and night at the saved angle, then change the view. The reflection moves with the water and remains in the ocean. Reduced motion holds the animation still. |
| System Watchdog | A changed issue list at the same severity left the existing notification stale. Refresh changed notification text under the same notification ID. | Reproduce the stale update on the previous source. Verify a different warning replaces the old text, identical repeats stay deduplicated, and recovery dismisses the warning. |
| Tablet ADB Keeper | The boot receiver's exposure exceeded the documented scope. Version 0.1.1 makes the receiver private and accepts only Android's expected boot and own-package-replacement events. | Check the merged manifests, exercise the allowlist, and build the APK. Install and verify automatic recovery at a supervised reboot on the target firmware. |

The layout contract remains version 2. Snapshot history is a bounded field of the existing Home dashboard configuration, separate from project JSON. One snapshot pairs the layout with its managed projection and an immutable Home Assistant image reference. History stores authored design data. Two earlier private recovery designs passed preflight. Both differ from the active design and from each other, and their immutable image references returned PNGs from Home Assistant.

## Read-only production evidence

- Home Assistant Green answered the authenticated API. Core configuration validation succeeded and Supervisor reported healthy and supported. Supervisor listed 13 backups, including one dated November 10. Home and Studio were the two Roomcraft views, and three Roomcraft resources answered successfully.
- The wall tablet accepted the trusted ADB connection. Android resolved Home Assistant Companion as its Home app, Companion was in the foreground, and Tablet Keeper 0.1.0 had its required grant. Windows AC sleep was disabled, and the scheduled watchdog task last exited successfully.
- Twenty-one of 23 direct Roomcraft bindings were available. Two registered bindings were unavailable. All three camera bindings were available in the entity registry and state API. Tuya, Tuya Local, and Xtend Tuya were loaded.
- The private Studio was active on version 70 at the start of the audit. Access was limited to the owner.

## Adjacent source verification

- System Watchdog passed eight Python and four JavaScript tests. The same-severity notification regression failed on the previous source and passed after the fix.
- Tuya LAN passed nine Python tests. Ishioho passed 155 tests covering packaging, plan geometry, directory and controls, environmental effects, and panel behavior with mocked services.
- Tablet ADB Keeper passed five JVM tests, lint, debug APK assembly, and merged debug and release manifest checks with the installed Android Studio JDK. The live tablet still has version 0.1.0.

## Dependency review

The updated lockfile patches Next, the React server components runtime, Zod, Vite, esbuild, and affected transitive dependencies. The clean install and production Worker build passed. The registry audit with `--omit=dev` reported zero findings. The full audit reported zero critical, four high, and sixteen moderate findings. Remaining high advisories are on the Vinext image metadata path and local Miniflare network tooling. The reviewed application routes do not accept paths for the affected image metadata operation, and the deployed Worker uses the runtime's native Fetch and WebSocket.

Roomcraft's release gate, visual checks, and deployment readback apply to the exact published revision. Use the [release standard](release-standard.md) and the [deployment checklist](deployment.md) to reproduce those results.

## Deferred maintenance

1. Roll out Tablet Keeper 0.1.1 with someone at the tablet and verify a supervised reboot, Companion launch, and paired ADB recovery. Install the separate Watchdog update during a planned Home Assistant restart. The adjacent tests above used source builds and did not change either runtime.
2. Investigate the two unavailable direct bindings, the Google Home setup retry, and the Bambu Lab repair with the corresponding integrations. Scrypted reported an error. The three Roomcraft cameras are supplied by Eufy and ONVIF, so Scrypted recovery can be planned independently.
3. Schedule available Home Assistant Core, OS, and app updates with a backup and a post-update smoke test. Check phone and tablet access, live camera playback, and actual device controls during that maintenance window.
4. Recheck the remaining advisories with a separately tested Vinext and Wrangler update. Reproduce the Worker build, local preview, and authenticated Studio transfer before adopting a toolchain change.

## Recovery routes

For an earlier design, use **Menu → Manage → Layout snapshots** in Roomcraft Home. For a Roomcraft code or release issue, rebuild from Git revision `2efe339d695b0d658e0cf579f86adf7423af949b`, reinstall the matching Home Assistant assets, and restore the private pre-install dashboard backup if needed. The owner-private Studio can return to saved Site version 70. Re-verify the selected dashboard, matching assets, and tablet after recovery. [Deployment and rollback](deployment.md)
