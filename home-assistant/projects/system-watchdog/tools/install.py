"""Backed-up deployment of the watchdog custom integration and private config."""

from __future__ import annotations

import argparse
import shutil
import subprocess
import tempfile
import time
from datetime import datetime
from pathlib import Path


def run(args: list[str], *, check: bool = True, timeout: int = 120) -> subprocess.CompletedProcess[str]:
    result = subprocess.run(args, capture_output=True, text=True, timeout=timeout, check=False)
    if check and result.returncode:
        raise RuntimeError(result.stderr.strip() or result.stdout.strip() or f"command failed: {args[0]}")
    return result


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", required=True)
    parser.add_argument("--ssh-key", type=Path, required=True)
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--backup-dir", type=Path, required=True)
    parser.add_argument("--private-config", type=Path, required=True)
    args = parser.parse_args()
    source = Path(__file__).parents[1] / "custom_components" / "system_watchdog"
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    args.backup_dir.mkdir(parents=True, exist_ok=True)
    ssh = ["ssh", "-i", str(args.ssh_key), "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes",
           f"root@{args.host}"]
    scp = ["scp", "-i", str(args.ssh_key), "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes"]
    remote_backup = f"/config/.system-watchdog-backup-{stamp}"
    run(ssh + [f"mkdir -p {remote_backup}"])
    run(ssh + [f"cp /config/configuration.yaml {remote_backup}/configuration.yaml"])
    prior = run(ssh + ["test -d /config/custom_components/system_watchdog"], check=False)
    if prior.returncode == 0:
        run(ssh + [f"cp -a /config/custom_components/system_watchdog {remote_backup}/"])
    with tempfile.TemporaryDirectory(prefix="system-watchdog-") as temp_name:
        temp = Path(temp_name)
        local_config = temp / "configuration.yaml"
        run(scp + [f"root@{args.host}:/config/configuration.yaml", str(local_config)])
        text = local_config.read_text(encoding="utf-8")
        include = "system_watchdog: !include system_watchdog.yaml"
        if not any(line.strip().startswith("system_watchdog:") for line in text.splitlines()):
            local_config.write_text(text.rstrip() + "\n\n" + include + "\n", encoding="utf-8")
        run(ssh + ["mkdir -p /config/custom_components/system_watchdog"])
        for file in source.iterdir():
            if file.is_file() and file.suffix in {".py", ".json"}:
                run(scp + [str(file), f"root@{args.host}:/config/custom_components/system_watchdog/{file.name}"])
        run(scp + [str(args.private_config), f"root@{args.host}:/config/system_watchdog.yaml"])
        run(scp + [str(local_config), f"root@{args.host}:/config/configuration.yaml"])

    check = run(ssh + ["ha core check"], check=False, timeout=180)
    if check.returncode:
        run(ssh + [f"cp {remote_backup}/configuration.yaml /config/configuration.yaml"])
        raise RuntimeError("Home Assistant configuration check failed; configuration.yaml was restored")
    run(ssh + ["ha core restart"], timeout=60)
    adapter = args.management_root / "ha_manage.py"
    for _ in range(30):
        time.sleep(4)
        status = run(["python", str(adapter), "status"], check=False, timeout=20)
        if status.returncode == 0 and '"state": "RUNNING"' in status.stdout:
            print(f"Installed System Watchdog; rollback backup: {remote_backup}")
            return 0
    raise RuntimeError("Home Assistant did not return to RUNNING within two minutes")


if __name__ == "__main__":
    raise SystemExit(main())

