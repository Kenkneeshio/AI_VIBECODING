# Contributing

## Start with a clear task

Describe the desired behavior, the inputs and outputs, and how success will be checked. For Home Assistant work, copy the [project brief](home-assistant/templates/project-brief.md) into a new project folder.

Use a descriptive branch for each substantial change. Keep changes focused and use pull requests when review or discussion is useful.

## Project organization

- Put Home Assistant projects under `home-assistant/projects/<project-name>/`.
- Give each project a README with its purpose, status, prerequisites, installation, configuration, and verification steps.
- Keep source code, tests, and project-specific dependencies with the project.
- Put reusable public images and graphics under `home-assistant/assets/`, with provenance and usage information.
- Document real limitations. Distinguish a working prototype from a tested release.

## Before publishing

- Review the diff for credentials and personal information.
- Use placeholders in example configuration. Keep real values in local secrets or environment variables.
- Run checks appropriate to the change, and record what passed and what was not tested.
- Include a rollback procedure when a change will affect an existing installation.
- Preserve notices and comply with upstream licenses when reusing code or assets.

## Deployment

Repository changes do not automatically authorize deployment or device actions. Follow the requested task's deployment scope and the [Home Assistant deployment checklist](home-assistant/docs/deployment.md).

Use supported APIs and command-line tools where possible. Browser automation is a fallback for unavailable direct operations and for visual verification.
