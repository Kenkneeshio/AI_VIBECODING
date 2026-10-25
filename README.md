# AI_VIBECODING

A workspace for building useful software with AI assistance: custom tools, experiments, and documented projects.

Maintained by [Kenkneeshio](https://github.com/Kenkneeshio).

## Project sections

| Section | Purpose | Status |
| --- | --- | --- |
| [Home Assistant](home-assistant/README.md) | Custom integrations, apps/add-ons, dashboard cards, automations, scripts, and assets | [ishioho dashboard](home-assistant/projects/ishioho/README.md) — tested prototype |

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
    │   └── ishioho/
    ├── assets/README.md
    ├── docs/deployment.md
    └── templates/project-brief.md
```

## Current status

The [ishioho dashboard](home-assistant/projects/ishioho/README.md) includes three illustrated Home Assistant views, contextual controls, a searchable entity directory, camera popups, weather and moon display, and a robot tracker. Its public package contains source, artwork, synthetic examples, and 101 isolated checks. It is a tested prototype with documented installation-specific assumptions. Committing here does not deploy anything to Home Assistant.

## Public repository

Publish reusable code and sanitized examples. Keep credentials, access tokens, SSH keys, personal device inventories, camera images, and private Home Assistant backups outside this repository. The ignore rules are a convenience, not a substitute for reviewing changes.
