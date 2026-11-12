# Object inventory audit

## Acceptance

| Customer | Observable outcome | Check |
| --- | --- | --- |
| Layout author | Every physical catalog entry displays in 2D and 3D. Style, size, finish, mounting and dimensions remain editable. | Inventory-wide rendering checks, representative WebGL contact sheets and Studio gesture fixtures. |
| Household operator | The model displays its actual linked state. Tap and hold use the configured compatible target, and a light's extra controls match its capabilities. | Home Assistant card and Chromium fixtures for sensor, cover and light actions. |
| Installer | Current layouts keep their item IDs, dimensions, device bindings and geometry. | Schema and projection fixtures, protected dashboard backup and post-install readback. |

This release keeps layout schema 2, the reference migration marker, current room geometry, and existing bindings. It does not write device capabilities, operating values, camera media, or credentials into layouts. Visual checks use fictional fixtures.

## Findings and ownership

- The complete catalog contains 348 entries including legacy models. All 339 physical objects now produce a Three.js model from saved layout fields alone. Nine other entries are drawn by the structure or interface layers or are intentionally invisible.
- The audit found 67 missing 3D models across barriers, climbing pieces, fireplaces, soft seats, wall art, and mirrors. New recipe geometry restores them. Toys, mats, plants, storage and devices now preserve more of their catalog silhouettes and finishes. Existing 2D recipes and atlas assets remain independent of the floors. New 3D geometry is generated from deterministic dimensions, material recipes and object IDs rather than bitmap sprites.
- Studio uses the catalog's geometry defaults for deliberate style or size changes. A finish change preserves custom dimensions and live settings. Placement checks retain earlier overlaps and reject newly invalid edits. The 3D walking check uses shared solid footprints and keeps the space inside play yards open.
- **State entity** supplies the reading and graphic. **Tap** and **Hold** can use separate targets. The editor explains read-only actions and makes it possible to bind a device to an existing object. Camera event triggers have a sensor picker.
- Home uses advertised light color modes and feature flags. It validates each adjustment against the current light before issuing a service call. Studio receives capability labels, including from the authenticated hosted bridge. Only the authenticated live panel receives and displays the light's effect names and current values. [Home Assistant light entity contract](https://contributors.home-assistant.io/core/entities/light/)

## Repeat the checks

Run the [release gate](release-standard.md) after regenerating the Studio bundle and editor cache key. For an isolated fixture, add a safety enclosure, climbing tunnel, mirror, play mat and two different lamp finishes. Compare from directly overhead and an angled camera. Check that a placement rejects a new intersection and that the plan still round-trips. Inspect the camera and interface overlay types separately.

Bind a simulated dimmable light and a color light to existing artwork. Verify their capability labels in Studio. In Home, hold each lamp and compare its available controls. Stage and apply changes to the simulated entity. Exercise an on/off-only light, unavailable state, an action with a different target, and two adjacent tap areas with one disabled. The published layout itself is preserved during deployment.

For software rollback, rebuild and reinstall `f14bf8d` and restore private Studio version 85. The installer creates a private dashboard backup for each install. [Deployment and rollback](deployment.md)
