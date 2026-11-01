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
| [Roomcraft](roomcraft/README.md) | Active second-floor layout editor, illustrated plan, and Home Assistant dashboard transfer | Active on one installation; public source and manual |
| [Tuya LAN migration](tuya-lan/README.md) | Move eligible, already-paired Tuya devices to direct Home Assistant LAN control | Three read-only LAN probes and one bulb imported; verification incomplete |
| [ishioho](ishioho/README.md) | Historical four-theme control panel with contextual popups and searchable entity directory | Legacy prototype for the second-floor authoring workflow; source and tests preserved |

The repository contains reusable source and examples, not live home configuration. Publishing changes does not deploy a dashboard.

Each project's README should explain:

- The problem it solves and its development status.
- Installation and required dependencies.
- Configuration using placeholders, not real credentials.
- How to test the expected behavior.
- How to uninstall or roll back.
- Known limitations and tested versions.

Add the project to the index in [the Home Assistant section](../README.md).
