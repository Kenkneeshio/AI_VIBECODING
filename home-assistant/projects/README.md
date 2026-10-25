# Home Assistant projects

Create a separate folder for each custom project:

```text
projects/
└── <project-name>/
    ├── README.md
    ├── project-brief.md
    └── ...project-specific source, tests, and examples
```

Use lowercase names with hyphens.

## Project index

| Project | Purpose | Status |
| --- | --- | --- |
| [ishioho](ishioho/README.md) | Landscape Home Assistant control panel in four illustrated themes, with contextual popups and a searchable entity directory | Tested prototype; source, synthetic examples, and isolated checks |

The repository contains reusable source and examples, not live home configuration. Publishing changes does not deploy a dashboard.

Each project's README should explain:

- The problem it solves and its development status.
- Installation and required dependencies.
- Configuration using placeholders, not real credentials.
- How to test the expected behavior.
- How to uninstall or roll back.
- Known limitations and tested versions.

Add the project to the index in [the Home Assistant section](../README.md).
