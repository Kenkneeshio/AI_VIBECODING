# Roomcraft

Roomcraft is the editable source for the illustrated **Second Floor** Home Assistant floor plan. The editor keeps rooms, walls, floor finishes, furniture, decorative objects, and Home Assistant control positions in one versioned layout. Its export bridge renders the dashboard image and saves the editable layout alongside the Home Assistant card. The dashboard is the viewing and control surface; Roomcraft is the authoring surface.

![Roomcraft editor with furnished second-floor plan](docs/images/editor-overview.png)

**Status:** Active second-floor project. The hosted editor and dashboard transfer are in use on one Home Assistant 2026.10 installation. This repository is the public, sanitized source and manual. A GitHub commit alone does not deploy the Site or change Home Assistant.

## Start here

| Need | Read |
| --- | --- |
| Learn the editor and dashboard transfer | [Illustrated user manual](docs/user-manual.md) |
| Set up or roll back an installation | [Deployment guide](docs/deployment.md) |
| Change the renderer, bridge, or live data | [Architecture and team boundaries](docs/architecture.md) |
| Inspect the editable JSON contract | [Layout format](docs/layout-format.md), [schema](layout.schema.json) |
| Update graphics | [Artwork guide](docs/artwork.md) |
| Understand what works and what comes next | [Roadmap](docs/roadmap.md) |
| Review changes and design reasons | [Changelog](CHANGELOG.md), [goals](docs/goals.md), [decision log](docs/decisions.md) |

## Project layout

```text
roomcraft/
├── site/                 Hosted editor and authenticated dashboard bridge
├── examples/             Synthetic Home Assistant configuration examples
├── layout.schema.json     Version 2 layout contract
├── docs/images/          Manual graphics and visual reference
├── docs/user-manual.md   Illustrated user instructions
├── docs/architecture.md  Data flow, extension points, team ownership
├── docs/deployment.md    Installation, verification, rollback
├── docs/roadmap.md       Live-feature sequence and acceptance criteria
├── docs/goals.md         Product goals and rationale
├── docs/decisions.md     Dated technical decisions
└── CHANGELOG.md          Change history
```

The image is a visual reference, not a dimensional survey. The layout coordinates use a 1536 × 1024 design canvas. Roomcraft keeps one shared level for connected upstairs rooms; exterior stairs descend from the lower-left landing toward the top-left of the illustration. Floor finishes vary by room. The furniture and object art is drawn in the plan's slightly raised perspective.

## Requirements

- A Home Assistant dashboard with a `picture-elements` card in its floor-plan view.
- An owner-private hosted Site for the editor and its same-origin dashboard API route.
- Server-side `HA_URL`, `HA_TOKEN`, and `OWNER_EMAIL` runtime values. Never put these in client code or in GitHub.
- A modern browser for canvas editing and PNG export. The Site source currently targets Node.js 22.13 or newer for its build.

The dashboard transfer sends an uploaded PNG and layout metadata to Home Assistant. It uses a dashboard revision check to avoid silently overwriting a newer dashboard edit. Manual PNG, YAML, and JSON exports remain available.

## Quick verification

1. Open the Roomcraft editor and confirm the furnished plan loads.
2. In **Floors**, apply a finish to a room; in **Wall**, draw an interior wall; in **Objects**, place furniture. Use **Undo** to restore the starting scene.
3. Select **Import from dashboard** and confirm the controls appear at their Home Assistant positions.
4. Export editable JSON as a private backup before any dashboard transfer.
5. Select **Export to dashboard**, reload the Home Assistant floor-plan view, and confirm the new image and controls. Import again to verify the editable layout round-trips.

See the [full checklist](docs/deployment.md#release-verification) before considering a deployment complete.

## Security and scope

The public examples use placeholder entity IDs. Keep real entity inventories, tokens, dashboard backups, camera URLs, local network addresses, and private map coordinates outside this repository. The hosted API accepts requests only from the authenticated Site owner and keeps the Home Assistant token on the server.

The former `ishioho` dashboard remains available as a historical prototype in its own project folder. Its generated art and configuration are separate from Roomcraft's active second-floor editor.

