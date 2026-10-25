# Home Assistant

Custom software and reusable resources for Home Assistant, including projects intended for a Home Assistant Green installation.

## Home floor plan

![Presentation view of the home floor plan and detached garage](assets/floor-plan-presentation.png)

A cleaner presentation of the uploaded plan, with a neutral background, clearer architectural outlines, and a closer view of the home.

[View full-size image](assets/floor-plan-presentation.png) · [Original floor plan](../181824550_serafina_ln_first_floor_first_design_20261025_874646.jpg)

This AI-assisted illustration is a visual reference for dashboard planning. Fine details may differ from the original; use the source plan for dimensions and exact placement.

## What belongs here

| Project type | Typical use |
| --- | --- |
| Custom integration | Add entities, services, or support for an external API or device |
| App/add-on | Run a separate service alongside Home Assistant |
| Dashboard card or view | Build custom controls, visualizations, or layouts |
| Automation or blueprint | Reuse event-driven behavior and workflows |
| Script or development tool | Simplify configuration, diagnostics, and maintenance |
| Image or graphic asset | Provide dashboard icons, backgrounds, and illustrations |

Choose the simplest project type that solves the actual problem. An automation or script may be enough without creating an app.

## Start a project

1. Create `projects/<project-name>/`.
2. Copy [the project brief](templates/project-brief.md) into that folder.
3. Add a README describing the feature and its current status.
4. Develop locally, test with safe inputs, and document dependencies.
5. Follow [deployment and rollback guidance](docs/deployment.md) when installation is requested.

## Project index

| Project | Description | Status |
| --- | --- | --- |
| [ishioho](projects/ishioho/README.md) | Three illustrated dashboard themes with room controls, searchable entities, camera popups, weather/moon display, and a room-level robot tracker | Tested prototype; 101 isolated checks; synthetic public examples |

## Management approach

Prefer authenticated Home Assistant APIs, HACS APIs, Supervisor commands, and SSH/SCP over browser automation. Use the browser for visual checks and workflows that lack a working direct interface.

Keep access credentials and machine-specific connection details in the private local management workspace. This public repository does not contain the live home's configuration or management credentials.

## Compatibility

Document the Home Assistant version, dependencies, and target architecture tested by each project. Home Assistant Green uses ARM64; apps with native dependencies need compatible builds. Do not describe untested platforms or versions as supported.

## References

- [Home Assistant developer documentation](https://developers.home-assistant.io/)
- [Home Assistant dashboard documentation](https://www.home-assistant.io/dashboards/)
- [HACS documentation](https://www.hacs.xyz/docs/)
