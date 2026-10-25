# Home Assistant deployment and rollback

This is a workflow guide, not an automatic deployment configuration.

## Before deployment

1. Confirm the target project and the requested deployment scope.
2. Check dependencies and compatibility with the actual Home Assistant version and hardware.
3. Back up affected configuration and record the currently installed version.
4. Review changes for credentials, personal information, and unintended device actions.
5. Run project-specific checks. Validate Home Assistant configuration when applicable.

## Deploy

- Prefer supported APIs for live dashboard, automation, and integration configuration.
- Use SSH/SCP for code and asset files when appropriate.
- Do not directly edit live `.storage` files to bypass configuration APIs.
- Reload only the affected component when supported.
- Restart or reboot only when needed for the requested change, accounting for interrupted services.
- Keep deployment credentials and private backups outside this repository.

## Verify

Check the requested behavior, relevant logs, and expected state. Test physical device actions only when the task authorizes them.

Record the installed version or commit, what was checked, and any unresolved limitations. Distinguish reading an available command from successfully executing it.

## Roll back

Document rollback for each project before deploying significant changes. Depending on the project, this may mean restoring the prior code version, restoring a configuration backup through a supported interface, removing a new integration, or reinstalling a known working version.

After rollback, verify that the previous behavior has returned. Avoid changing unrelated devices or configuration.
