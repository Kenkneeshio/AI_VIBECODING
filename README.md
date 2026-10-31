# AI_VIBECODING

A workspace for building useful software with AI assistance: custom tools, experiments, and documented projects.

Maintained by [Kenkneeshio](https://github.com/Kenkneeshio).

## Project sections

| Section | Purpose | Status |
| --- | --- | --- |
| [Home Assistant](home-assistant/README.md) | Custom integrations, apps/add-ons, dashboard cards, automations, scripts, and assets | [Roomcraft](home-assistant/projects/roomcraft/README.md) — active second-floor layout editor; [ishioho](home-assistant/projects/ishioho/README.md) — legacy prototype |

Additional project areas can be added as new ideas take shape.

## How projects are developed

1. Describe the problem and the behavior you want.
2. Choose an existing solution or build the smallest useful custom implementation.
3. Develop and test changes in a project folder.
4. Document configuration, installation, verification, and rollback.
5. Deploy deliberately and record the outcome.

Use [the contribution guide](CONTRIBUTING.md) for repository conventions and the [project brief](home-assistant/templates/project-brief.md) to start a Home Assistant project.

## Repository layout

```text
AI_VIBECODING/
├── README.md
├── CONTRIBUTING.md
└── home-assistant/
    ├── README.md
    ├── projects/
    │   ├── README.md
    │   ├── roomcraft/
    │   └── ishioho/
    ├── assets/README.md
    ├── docs/deployment.md
    └── templates/project-brief.md
```

## Current status

[Roomcraft](home-assistant/projects/roomcraft/README.md) is the active second-floor layout authoring project. Its [illustrated manual](home-assistant/projects/roomcraft/docs/user-manual.md) covers walls, floors, furniture, and Home Assistant transfer. The older [ishioho dashboard](home-assistant/projects/ishioho/README.md) remains as a tested four-theme prototype with its source and history preserved. Committing here does not deploy either project to Home Assistant.

## Public repository

Publish reusable code and sanitized examples. Keep credentials, access tokens, SSH keys, personal device inventories, camera images, and private Home Assistant backups outside this repository. The ignore rules are a convenience, not a substitute for reviewing changes.
