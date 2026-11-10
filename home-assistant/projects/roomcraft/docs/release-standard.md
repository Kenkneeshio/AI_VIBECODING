# Roomcraft release standard

Every Roomcraft release follows the same top-down proof chain. A release starts with the customer problem and ends with verified deployment and rollback evidence; implementation activity alone is not a release outcome.

## Permanent quality goal

Roomcraft releases must be deterministic, repeatable, standardized, modular, professional, organized, and documented in GitHub. The editable project and render-operation plan are exact deterministic contracts. Browser/GPU pixel output is verified with the pinned visual workflow described in the [engine contract](engine-contract.md) until the renderer has a platform-independent raster backend.

The required proof order is:

1. **Customer outcome** — identify who benefits, the problem being solved, and observable success criteria.
2. **Product contract** — state layout/schema compatibility, user-visible behavior, accessibility, privacy, and excluded behavior.
3. **Engine and data** — name affected modules, commands, migrations, layer ownership, deterministic IDs, and canonical scene changes.
4. **Art and assets** — record source, perspective, dimensions, layers, ownership, content hashes, and visual references.
5. **Integrations and privacy** — verify Home Assistant, hosted editor, tablet, and any optional adapters without committing private data.
6. **Automated verification** — run canonical, migration, replay, render-plan, unit, integration, type, build, and release-manifest checks appropriate to the change.
7. **Deployment readback** — back up first, deploy the exact verified input set, read it back, and check the intended customer surface.
8. **Rollback** — identify the last known-good source, generated artifact, private backup, and recovery command before declaring success.

Skipping a layer requires an explicit **Not applicable** explanation in the release record. It must never be silently omitted.

## Customer-solution review

Review each change from the relevant customer viewpoint before selecting an implementation:

| Customer | Solution outcome | Required acceptance evidence |
| --- | --- | --- |
| Household operator | The illustrated object is the truthful, easy-to-touch control and never invents device state. | State/action fixture plus safe UI verification; physical operation only when explicitly planned. |
| Layout author | Editing, import/export, undo, migration, and placement preserve intentional work. | Canonical round-trip, migration idempotency, command replay, and editor interaction checks. |
| Wall-tablet user | The home fills the screen, remains legible, and recovers after restart. | Target viewport capture, no overflow/crop, cold-launch check, and Android/WebView comparison. |
| Installer | Deployment is safe on another supported Home Assistant installation. | Sanitized example, preflight, backup, readback, and rollback procedure. |
| Engineer taking over | Module ownership, contracts, rationale, and current proof are discoverable without oral history. | Updated architecture/engine docs, decision or changelog entry, tests, and release manifest. |
| Future product customer | A different home, device inventory, viewport, or art pack can be added without forking core behavior. | Extension point and compatibility statement; no installation-specific data in engine code. |

Prefer a reusable contract, adapter, catalog entry, or data-driven recipe when it solves the customer problem. Do not generalize speculative behavior into the core without a concrete acceptance case.

## Deterministic release evidence

From `home-assistant/projects/roomcraft/site`:

```powershell
npm ci
npm run release:verify
npm test
node --test ha-local/roomcraft-card.test.mjs ha-local/roomcraft-weather-outdoor.test.mjs
python -m unittest discover -s ha-local -p "test_*.py"
npx tsc --noEmit
npm run lint
npm run build
npm run release:manifest:verify
git diff --check
```

`release:verify` checks the loaded engine contract, rejects random or clock-derived editor IDs, and builds the manifest twice in memory. `npm run build` runs that gate before the production build and writes `dist/roomcraft-release-manifest.json` afterward. The manifest contains sorted project-relative paths, canonical byte counts, content hashes, and one root digest. Text inputs are normalized to LF before hashing so Git's Windows/Linux checkout policy cannot change the result; binary artwork is hashed byte-for-byte. The manifest deliberately contains no timestamp, machine path, hostname, user data, or credentials. Repeating the build from the same tracked inputs must produce the same manifest bytes and root digest.

The manifest identifies source inputs; it does not claim that cloud deployment, Home Assistant installation, or tablet readback occurred. GitHub Actions retains the generated manifest as a commit-scoped artifact. Operational results belong in the changelog/handoff and release record, where they cite the exact source commit and deployed version; the automation/deployment record binds those results to the generated root digest without creating a self-referential source file.

## Standard release record

Use the GitHub Roomcraft pull-request template or copy this structure into the release issue. The template is an advisory review aid; the automated workflow enforces the executable gates, while the release owner remains accountable for completing and reviewing the customer, deployment, and rollback evidence:

- Customer/problem and intended outcome.
- Acceptance criteria and explicit non-goals.
- Contracts/versions changed or preserved.
- Modules and owners affected.
- Art/assets and generated outputs changed.
- Migrations, compatibility, security, and privacy assessment.
- Exact automated commands and results.
- Visual/device verification performed without unintended physical actions.
- Source commit, deterministic root digest, deployment/readback result.
- Backup and rollback location (never paste private paths or credentials into public GitHub).
- Changelog, decision log, handoff, and user documentation links.

## Change and rollback rules

- Preserve layout version 2, reference migration version 5, the 1536 × 1024 project space, and current customer geometry unless a versioned decision explicitly changes them.
- Generated artifacts are outputs, never hand-edited sources. CI regenerates the release manifest and verifies its immediate readback. When a generated artifact is intentionally committed, its release procedure must additionally regenerate it and require a clean Git diff.
- A migration is pure, sequential, idempotent, and customization-preserving before it can ship.
- An art change declares its layer and export owner; one visual must not be emitted by both the static PNG and live Home Assistant layer.
- Live time, weather, camera media, entity state, and robot telemetry never enter canonical project JSON or public release evidence.
- Back up significant Home Assistant configuration before writing it. Verify by readback and retain the prior known-good artifact until the customer surface is confirmed.
