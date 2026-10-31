# Changelog

All notable Roomcraft changes are recorded here. Deployment status is tracked separately from a source commit.

## 2026-10-31 — Active second-floor editor package

### Added

- Illustrated manual with editor, dashboard, object-detail, and reference graphics.
- Current Home Assistant published-plan render as a manual graphic.
- Documented layout model, art pipeline, server bridge, team boundaries, release and rollback process.
- Active Roomcraft project folder and synthetic examples for the public repository.
- Goal, decision, and future-feature logs.

### Current editor behavior

- Furnished 1536 × 1024 plan with editable rooms, interior walls, per-room floor finishes, objects, Home Assistant markers, undo/redo, and local draft recovery.
- Four wall finish choices for both interior walls and the fixed illustrated exterior outline.
- Detailed PNG, editable JSON, and manual Home Assistant YAML exports.
- Owner-only import/export bridge that stores the editable layout in the Home Assistant dashboard and uses revision checks to avoid overwriting a newer edit.
- Dashboard export preserves independent editor, weather, and time overlays plus the `studio` and `live` views.
- Destructive layout actions now use an in-page confirmation dialog, and the top Export menu remains usable while a dashboard transfer is in progress. `npm test` runs the bridge checks.

### Legacy

- The `ishioho` four-theme prototype remains in its project folder as historical work; it is not the second-floor layout authoring source.

## Recording future changes

For each release, include the user-visible change, model migration if any, tested HA and browser versions, verification performed, deployment outcome, and rollback route.

