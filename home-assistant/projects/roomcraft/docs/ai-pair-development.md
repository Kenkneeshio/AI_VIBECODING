# Pair development with Codex and Grok

Use Grok to investigate a Roomcraft issue, build a candidate on a separate Git branch, or independently review a Codex change. Codex integrates the reviewed work and owns deployment verification. Give each task a starting revision, expected behavior, and the tests that would demonstrate it. Send patches and test results through Git or a sanitized handoff.

## Desktop Grok Bot

Under **Settings → Computer → Your computer → Execution on this computer**, use **Ask every time**. The approval card shows the command that will run as the signed-in Windows user. The Windows user that owns the Home Assistant management adapter can use the existing protected access through it. Keep the vendor's hosted computer for source review and public documentation. [Grok Bot local execution](https://docs.x.ai/grok-bot/security)

Use this first assignment in Grok Bot.

```text
Work with Codex on Roomcraft, the Home Assistant dashboard. For local work,
request approval for the specific Windows command that you need. Start with
the sanitized connectivity check in the pair-development guide. Share just
its result. Then report the current Git revision, intended branch, and
acceptance checks before editing. Use synthetic entities and sample data in
tests. Send Codex a short change summary, test results, and any open risks.
```

Run the following read-only check on the Windows workstation. It returns a fixed result marker. Keep the adapter, its protected files, and the private management directory on the workstation.

```powershell
$adapter = Join-Path $env:USERPROFILE 'HomeAssistantManagement\ha_manage.py'
$report = & python $adapter status 2>$null
if ($LASTEXITCODE -eq 0 -and $report -contains 'Authenticated API access verified.') {
    'HA_API_OK'
} else {
    'HA_API_UNAVAILABLE'
}
```

For a later approved administrative operation, use the established local adapter for the specific task and pass only the necessary sanitized outcome back to the collaboration thread. Keep Home Assistant backups and release readback in the protected management directory. Use the existing [Roomcraft deployment guide](deployment.md) for live changes and rollback.

## Grok Build as a direct coding route

Grok Build can work from the local repository in an interactive terminal. Start it inside the review checkout with the default command approval mode. Use its own Grok account session. [Grok Build CLI](https://docs.x.ai/build/cli/reference)

```powershell
$reviewCheckout = (Resolve-Path .).Path
grok --cwd $reviewCheckout --permission-mode default
```

For a scripted exchange, Grok Build supports headless JSON responses and Agent Client Protocol over standard input and output. Pass a sanitized task or patch, keep command approval scoped, and treat the returned text as a proposal for review. [Headless and ACP integration](https://docs.x.ai/build/cli/headless-scripting)

This one-turn command checks the authenticated coding route using a public-safe prompt and an empty working directory.

```powershell
$scratch = Join-Path $env:TEMP ('roomcraft-grok-' + [Guid]::NewGuid().ToString('N'))
[void](New-Item -ItemType Directory -Path $scratch)
grok --cwd $scratch --permission-mode plan --deny Bash --deny Read --deny Grep `
    --deny Glob --deny Edit --deny MCPTool --disable-web-search --no-subagents `
    --max-turns 1 --output-format json -p 'Reply with exactly ROOMCRAFT_GROK_READY. Use no tools.'
```

The workstation verification used Grok Build 1.0.77 and returned the expected JSON response. A separate isolated test gave the CLI one exact allow rule for a host-written, fixed-output status probe. Grok invoked it, and the probe verified authenticated access through the protected Home Assistant adapter with `HA_API_OK`. That single execution establishes the local CLI route. Desktop Bot commands use the desktop approval setting.

## Handoff checks

1. Confirm the intended Git revision and task owner. Use separate branches when Codex and Grok edit concurrently.
2. Use the local connectivity check for authorized HA access. Use synthetic data for code review and tests.
3. Provide the candidate commit or patch, commands run, observed results, and open verification. The [engineering handoff](engineering-handoff.md) identifies the owning modules.
4. Run the [release gate](release-standard.md) on the integrated revision. For deployment, retain a private backup and verify the live asset and configuration readback.
