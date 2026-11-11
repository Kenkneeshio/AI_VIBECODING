# Roomcraft dining, editor parity, and system audit

## Household acceptance

| Need | Observable result | Verification route |
| --- | --- | --- |
| Edit the table and each chair | In either Studio view, select a chair, change its exact position or rotation, undo the edit, and confirm the table and other chairs retain their transforms. | Reference migration fixtures, object Inspector fixtures, Chromium contact sheet, and a protected Studio publication. |
| Keep proportions consistent | The editor footprint matches the 3D tabletop. Chairs have separate seat footprints and clearance under the top. Walls and room geometry keep their authored positions. | Legacy and migrated models in plan and oblique views. Compare furniture proportions against the furnished illustration. |
| Make Studio resemble Home | The same saved layout, camera preset, current weather, lighting and shared scenery choices appear in Home and the 3D Studio preview. | Authenticated bridge, matching sky and scene render fixtures, and Home dashboard readback. |
| Make settings accessible | Scene settings opens from both menus. Toggle a layer, align the dock, resize a camera or preview a different weather condition. Only authoring changes travel with the project. | Canonical JSON round-trip, both dashboard transports, desktop and portrait viewport checks. |
| Recover from a graphics interruption | The live view opens again when WebGL returns and uses the same layout and camera. | Chromium context-loss exercise. |

## Layout and scale

The furnished reference is a 1536 × 1024 perspective illustration. The tabletop appears approximately 150 image pixels wide. Its center and surrounding furniture are useful visual anchors. The illustration lacks a dimension chain and the slanted perspective changes apparent depth. Use measured wall spans or a measured furniture footprint to establish physical scale.

The prior composite dining item used the width and depth of the set as a group. Revision 10 derives the standalone tabletop width, depth, and chair positions from the prior 3D model. A table and its chairs have distinct selection targets and preserve existing finishes. The current drawing and the migration stay in 1536 × 1024 project coordinates.

## Runtime boundaries

- Home and Studio share the 3D scene, sky renderer and camera sizing calculation. Studio's 2D view remains the orthographic construction plan.
- Home Assistant Studio refreshes a normalized appearance sample over the authenticated iframe bridge. The source is the last published configuration and current HA states. The private editor gets a snapshot with its import. Camera previews in Studio are edit handles, and the live camera media belongs to Home.
- Publish visual layers and dock alignment through the existing project transport. Keep the weather simulation, observed device states, and live entity coordinates outside the canonical layout and render evidence.
- The WebGL recovery path uses the existing reload and disposal lifecycle. The 2D editor remains available if its graphics connection is interrupted.

## System checks

The audit covers the active Roomcraft dashboard and its resources, saved layout and projection, local and hosted Studio transfers, Green platform updates, Watchdog and Windows heartbeat, the wall tablet and ADB Keeper, Tuya LAN tools, and the Ishioho alternate dashboard source. Check camera and device availability through their reported state. Use synthetic telemetry when exercising controls.

Core and OS maintenance use separate verification steps. Capture a full Supervisor backup, verify the boot slot and authenticated Core after the OS reboot, back up Core before updating, and confirm the tablet, Roomcraft and monitored integrations afterward. Keep the previous OS boot slot and dashboard backup available. [Home Assistant Core release](https://www.home-assistant.io/blog/2026/11/04/release-202611/) · [Home Assistant OS 18.4](https://github.com/home-assistant/operating-system/releases/tag/18.4)

System Watchdog 0.2.2 scopes heartbeat writes to administrators and builds coverage from active control and camera bindings. Keep curated sensors and explicitly retained monitor entries. Check a fresh Windows heartbeat and the monitored counts after restart.

Track vendor faults independently from Roomcraft, particularly Apex endpoint reachability, Scrypted service health, and Bambu cloud authentication. See the [earlier system audit](system-audit-release-2026-11-11.md) for their baseline.

## Recovery

Restore the previous design with **Menu → Manage → Layout snapshots**. For the previous Roomcraft software, reinstall source `e1e33a0d09569dd97946876caaa3ac9bc648e257` and redeploy private Studio version 77. The Home Assistant installer saves a private pre-release dashboard, and the Watchdog installer keeps the previous verified component and configuration. Follow the [deployment guide](deployment.md) and [tablet access runbook](tablet-access.md) for the relevant surface.
