# Home Assistant projects

Create a separate folder for each custom project:

```text
projects/
└── <project-name>/
    ├── README.md
    ├── project-brief.md
    └── ...project-specific source, tests, and examples
```

Use lowercase names with hyphens. This folder currently contains no deployed projects.

Each project's README should explain:

- The problem it solves and its development status.
- Installation and required dependencies.
- Configuration using placeholders, not real credentials.
- How to test the expected behavior.
- How to uninstall or roll back.
- Known limitations and tested versions.

Add the project to the index in [the Home Assistant section](../README.md).
