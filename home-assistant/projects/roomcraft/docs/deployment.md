# Deployment, verification, and rollback

This guide separates three changes: publishing the hosted editor, configuring its Home Assistant connection, and adding the editor entry to the dashboard. Commit history is source history; it does not deploy either service.

## Prerequisites

- Back up the existing Second Floor dashboard configuration and image. Keep those backups outside this public repository.
- Confirm an administrator can edit the dashboard and upload a PNG through Home Assistant's API.
- Confirm the hosted Site is **owner-private** and its runtime has `HA_URL`, `HA_TOKEN`, and `OWNER_EMAIL`. Use the Site's secret configuration; do not add values to a file or GitHub.
- Confirm the dashboard contains a floor-plan view at `plan` with a `picture-elements` card. The current bridge targets that view.
- Confirm the target Home Assistant and browser versions in the release note. The current installation is Home Assistant 2026.10; no general compatibility range is claimed.

## Install or update

1. Build and publish the `site/` source through its configured Site deployment workflow. Keep its access setting owner-private. Preserve the runtime secrets separately from source.
2. Open the editor as the Site owner. Verify that the reference and furnished Design mode load and that the dashboard connection status is available.
3. Add **Layout Studio** (`studio`) to the Second Floor dashboard with workflow instructions, an **Open editor** URL action, and a **View live floor plan** link back to `plan`. Add **Live Home** (`live`) for native Home Assistant state cards. Keep the existing `plan` picture-elements card and its controls. The plan's pencil-ruler editor icon, weather label, and time label should be maintained by the dashboard bridge on later exports.
4. In Roomcraft, use **Import from dashboard**. This brings in the current controls and, after the first export, the saved editable project.
5. Export a local JSON backup of the design. Make a small visual edit, use **Export to dashboard**, and reload the floor-plan view. Then import again to confirm a round trip.

The editor link is an external URL action. The owner-private Site may ask for a separate sign-in; do not assume a Home Assistant session grants Site access. Do not rely on iframe embedding until frame and cookie behavior has been tested on the intended tablet.

## Release verification

| Check | Pass condition |
| --- | --- |
| Layout | Rooms, stairs, balcony, walls, and windows align with the reference. Upstairs doorways are level. |
| Art | Furniture, baby items, lamps, and floor textures appear in the exported PNG at the intended perspective. |
| Editor | Select, drag, rotate, draw wall, reshape room, repaint floor, undo/redo, JSON import/export all work. |
| Dashboard transfer | Import reads current project/controls; export updates image, controls, and `roomcraft_layout`; a fresh import returns the same layout. |
| Revision protection | A stale editor revision is rejected after a separate dashboard edit; no newer change is silently replaced. |
| Existing controls | Confirm the known light and cover controls in Home Assistant's own entity details, then from the plan. |
| HA views | Floor Plan (`plan`), Layout Studio (`studio`), and Live Home (`live`) load on laptop and tablet. The plan icon and Studio button open the editor. |
| Privacy | No credentials, camera access URLs, private inventory, or dashboard backups appear in source, browser bundles, or GitHub. |

Record the actual test result and screenshot in the release pull request or deployment log; do not claim a check that was not run.

## Rollback

1. Stop editing in the new Site version and export any unsaved layout JSON.
2. Restore the previous Site version if the editor or transfer bridge is faulty.
3. Restore the saved Home Assistant dashboard configuration and prior image if the dashboard changed. Keep the restored `plan` card and its controls together.
4. Reload Home Assistant and verify the prior image and controls. Reopen the Site only after the connection matches the restored dashboard revision.

The Site export bridge saves a newly uploaded image before it saves dashboard config. A failed or rejected config save can leave an unreferenced image in HA storage; it does not make that image the live plan. Clean up such images through a separate, reviewed storage task.

## Local development

The Site package requires Node.js 22.13 or newer. From `site/`, install dependencies, run the development server, and use its build script for a deployable artifact. Local preview auth and Home Assistant connectivity may differ from production; test the real owner-private deployment before calling a transfer complete. The Site's `.env.example` lists variable names only.

Do not commit `node_modules`, `dist`, `.next`, `.wrangler`, `.sites-runtime`, local environment files, generated archives, or credentials. The project copy includes `.gitignore` for those paths.

