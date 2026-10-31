# Roomcraft

Roomcraft is the editable source for the illustrated **Second Floor** Home Assistant floor plan. The editor keeps rooms, walls, floor finishes, furniture, decorative objects, and Home Assistant control positions in one versioned layout. Its export bridge renders the dashboard image and saves the editable layout alongside the Home Assistant card. The dashboard is the viewing and control surface; Roomcraft is the authoring surface.

![Roomcraft editor with furnished second-floor plan](docs/images/editor-overview.png)

**Status:** Active second-floor project on one Home Assistant 2026.10 installation. The official editor is the same-origin **Layout Studio** dashboard view at `/second-floor/studio`, accessible with a Home Assistant login on the LAN. The owner-private cloud Site is an alternate editor that reads and writes the same `roomcraft_layout`. This repository is public source and documentation. A GitHub commit alone does not deploy either runtime.

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
│   └── ha-local/         Same-origin Home Assistant card, bridge tests, installer
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
- Home Assistant 2026.10 with the Roomcraft custom card registered as a Lovelace module resource, and a signed-in Home Assistant user. An administrator is required to publish dashboard edits.
- The installed `custom:grid-layout` view resource for the Floor Plan's centered, aspect-preserving tablet/desktop layout.
- A modern browser for canvas editing and PNG export. The Site source targets Node.js 22.13 or newer for its build.
- Optional owner-private cloud Site with server-side `HA_URL`, `HA_TOKEN`, and `OWNER_EMAIL`. Never put these values in client code or GitHub.

The official HA-hosted editor uses the current user's authenticated session to upload a PNG and save layout metadata. Its iframe never receives a token. The optional cloud Site uses its owner-only server bridge. Both paths check the dashboard revision to avoid silently overwriting a newer edit. Manual PNG, YAML, and JSON exports remain available.

## Quick verification

1. Open `http://192.168.68.96:8123/second-floor/studio` on a device on the home network and sign in to Home Assistant. Confirm the furnished plan loads.
2. In **Floors**, apply a finish to a room; in **Wall**, draw an interior wall; in **Objects**, place furniture. Use **Undo** to restore the starting scene.
3. Select **Import from dashboard** and confirm the controls appear at their Home Assistant positions.
4. Export editable JSON as a private backup before any dashboard transfer.
5. Select **Export to dashboard**, reload the Home Assistant floor-plan view, and confirm the new image and controls. Import again to verify the editable layout round-trips.

See the [full checklist](docs/deployment.md#release-verification) before considering a deployment complete.

## Security and scope

The public examples use placeholder entity IDs. Keep real entity inventories, tokens, dashboard backups, camera URLs, and private map coordinates outside this repository. The documented LAN host address is a connection hint, never a credential. The HA-hosted card uses the signed-in user's session; the optional hosted API accepts requests only from the authenticated Site owner and keeps its Home Assistant token on the server.

The former `ishioho` dashboard remains available as a historical prototype in its own project folder. Its generated art and configuration are separate from Roomcraft's active second-floor editor.

