# Safe terrain and structure editing

Roomcraft checks completed edits before committing them to the browser draft. It repairs a small set of unambiguous problems and rejects changes that would require guessing the author's intent. **Main menu → Check & repair layout** runs the same checks on demand.

This is edit protection, not a guarantee against every software, graphics, network or device failure. The goal is to preserve the last valid layout and a usable recovery path when an authored edit is malformed.

## Customer outcome and acceptance

**Customer** — the household member building a home or landscape in Studio.

**Problem** — a terrain spike, crossed room boundary or collapsed wall can leave an unusable design, and a failed edit can unexpectedly consume Undo or destroy Redo.

**Outcome** — ordinary repairable changes settle into safe geometry, while unsafe changes restore the previous draft without replacing the saved dashboard.

| Scenario | Required observable result |
| --- | --- |
| Finish a terrain stroke with an abrupt peak or pit | Excessive neighboring height differences soften, paint and placed props remain, and Undo restores the preceding terrain. |
| A room repeats an adjacent corner or its closing point | Redundant points are removed without moving the boundary. |
| A room crosses itself or has no usable area | The entire edit is rejected and the previous draft returns with a clear status message. |
| Wall/fence endpoints collapse to one point | Reject the edit rather than silently deleting the segment. |
| An invalid edit follows Undo | The rejected edit does not consume history or discard the available Redo. |
| Run Check & repair twice | The second check makes no additional changes or Undo entry. |
| Publish invalid geometry through either bridge | Reject before image upload or dashboard write. |
| Open an older valid landscape | Preserve its authored slopes until a terrain change or explicit repair is requested. |

## Use it in Studio

Edit protection is on automatically. Finish a drag or terrain stroke to let Studio check the completed change.

- **Auto-repaired the edit** means Studio applied a safe cleanup. Use **Undo** if you prefer the preceding design.
- **Previous layout restored** means the change could not be repaired safely. Adjust the offending boundary or dimensions and try again.
- For an existing draft, choose **Main menu → Check & repair layout**. A repair is one undoable change. If nothing needs repair, the status says the checks passed.
- Choose **Save** when the draft is ready to publish. A blocked save reports its issue and leaves the current dashboard intact.

Finish the current gesture or dashboard transfer before running the manual action. It changes the draft only. It does not publish or operate a household device.

## Repair policy

### Terrain

[terrain.js](../site/public/engine/terrain.js) repairs authored height deltas on the existing 32-unit grid. The default adjacent step limit is 24 design units. These are illustration units, not physical metres.

The algorithm reduces excessive positive and negative magnitudes toward the unedited terrain. It never changes a peak into a pit or a pit into a peak. Opposite-sign jumps share the allowed step proportionally. Missing cells remain zero-delta boundary samples. Repeated synchronous passes reach a fixed point, so repair is deterministic, independent of cell order and idempotent.

Repair preserves cover paint, placed terrain props and landscape settings. It does not add grid cells, exceed the 4096-cell/96-prop caps, reshape the base coastline or flatten already-safe broad hills. The pure helper accepts an explicit slope budget for engine callers. Studio uses the standard budget rather than exposing an unsafe bypass.

Existing steep but structurally valid terrain remains compatible on import, Undo/Redo and publication. Automatic slope repair runs when a normal edit changes terrain, or when the author explicitly chooses Check & repair. A furniture move alone does not resculpt the landscape.

### Rooms, walls and objects

[edit-safety.js](../site/public/engine/edit-safety.js) removes exactly repeated adjacent polygon points and a repeated closing point. It rejects self-crossing or self-touching room boundaries, zero-area rooms, collapsed walls/fences, invalid or duplicate identities within a geometry collection, and unusable finite-coordinate/dimension values. Detail limits bound the work required to inspect room polygons.

Room cleanup does not move a corner, reverse a polygon, infer a missing room, close a doorway, join disconnected walls or delete a model. Crossing wall segments can be intentional. This guard checks room polygon topology and wall usability rather than inventing a new building layout.

All checks succeed before any repairs are accepted. If one issue remains, the entire candidate change is rejected. No partial room cleanup or terrain adjustment is committed.

## Engine and adapter boundaries

```mermaid
flowchart LR
  Input["Completed edit"] --> Candidate["Candidate draft and checkpoint"]
  Candidate --> Guard["Pure geometry audit and conservative repair"]
  Guard -->|Safe| Commit["Commit one edit and schedule draft save"]
  Guard -->|Unsafe| Restore["Restore project, selection and history"]
  Commit --> Preview["Shared scene preview"]
  Commit --> Save["Explicit Save"]
  Save --> Transport["Shared publication audit"]
  Transport -->|Valid| HA["Revision check, upload, save and readback"]
```

| Owner | Responsibility |
| --- | --- |
| [edit-safety.js](../site/public/engine/edit-safety.js) | Pure bounded audit, redundant-corner cleanup, whole-candidate acceptance, stable issue/repair records |
| [terrain.js](../site/public/engine/terrain.js) | Validated height-step reduction without model or browser side effects |
| [app.js](../site/public/app.js) | Transaction checkpoint, last-valid draft, history/selection recovery, status, manual menu action and Save preflight |
| [dashboard-project.mjs](../site/ha-local/dashboard-project.mjs) | Shared audit for both authenticated publication transports before side effects |
| [3D editor adapter](../site/ha-local/storybook-editor.mjs) | Preview the accepted draft through the existing scene renderer |

The pure safety API returns data only. It does not read the DOM, storage, time, Home Assistant state or credentials. The editor owns the transaction and feedback.

A completed successful gesture remains one undo unit, including any repair. A rejection restores the pre-edit history and selection. Undo/Redo validate geometry while preserving the terrain represented by the chosen history state. The runtime scene, hosted transport and HA transport do not silently rewrite a published design to repair it.

## Compatibility and non-goals

Layout version 2, authored IDs, design coordinates, bindings and reference migration version remain unchanged. No artwork or household integration migration is required.

This feature does not yet solve furniture collision preferences, arbitrary room overlaps, intentional architectural openings, renderer/GPU faults or a concurrent publisher's changes. Existing placement rules, renderer recovery, revision checks and backups continue to own those cases. It does not promise to make any shape attractive. It prevents specific invalid edit states and preserves recovery.

## Verification and release record

The release owner records the exact source revision, automated results, browser/Undo checks, HA/Site/tablet readback and rollback evidence here after the full [release gate](release-standard.md). Do not infer deployment from source documentation.

Required evidence includes pure-engine rejection and idempotence fixtures, terrain capacity and ordering tests, editor history recovery, and both transport side-effect guards. The release uses synthetic geometry for public tests and keeps private dashboard backups outside Git.

## Rollback

The preceding verified runtime is `5671e943d983496f7c59d74bfeec4b774afb4704`, with HA resource version `d25830e164fd80b1` and owner-private Studio version 101. Reinstall matching prior assets and restore the prior Site version independently if software rollback is necessary. Use the protected pre-install backup only when dashboard configuration also requires recovery.

A repair to an unpublished draft can be reversed with Undo. A published design can use the existing layout snapshots, subject to their retained history. See [deployment recovery](deployment.md) for the full procedure.
