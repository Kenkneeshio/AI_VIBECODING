"""Stage, validate, and verify a Watchdog installation or code-only upgrade."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import shlex
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path


COMPONENT = "/config/custom_components/system_watchdog"
CONFIG = "/config/configuration.yaml"
PRIVATE_CONFIG = "/config/system_watchdog.yaml"
INCLUDE = "system_watchdog: !include system_watchdog.yaml"
SUMMARY_PATH = "/api/states/sensor.system_watchdog_summary"


class RestartUnconfirmed(RuntimeError):
    """Supervisor may still be processing a restart after the SSH client exits."""


def run(args: list[str], *, check: bool = True, timeout: int = 120) -> subprocess.CompletedProcess[str]:
    result = subprocess.run(args, capture_output=True, text=True, timeout=timeout, check=False)
    if check and result.returncode:
        raise RuntimeError(f"{Path(args[0]).name} exited with status {result.returncode}.")
    return result


class Remote:
    def __init__(self, host: str, key: Path) -> None:
        self.target = f"root@{host}"
        self.options = ["-i", str(key), "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes",
                        "-o", "ConnectTimeout=10"]

    def shell(self, command: str, **options) -> subprocess.CompletedProcess[str]:
        return run(["ssh", *self.options, self.target, command], **options)

    def exists(self, path: str, kind: str) -> bool:
        result = self.shell(f"test {kind} {shlex.quote(path)}", check=False)
        if result.returncode not in (0, 1):
            raise RuntimeError("Could not inspect the Home Assistant destination.")
        return result.returncode == 0

    def upload(self, source: Path, destination: str) -> None:
        run(["scp", *self.options, str(source), f"{self.target}:{destination}"])

    def download(self, source: str, destination: Path, *, recursive: bool = False) -> None:
        run(["scp", *self.options, *(["-r"] if recursive else []), f"{self.target}:{source}", str(destination)])


def verify_files(remote: Remote, directory: str, files: list[Path]) -> None:
    verify_paths(remote, [(f"{directory}/{file.name}", file) for file in files])


def verify_paths(remote: Remote, files: list[tuple[str, Path]]) -> None:
    if not files:
        return
    paths = " ".join(shlex.quote(path) for path, _ in files)
    hashes = [line.split()[0] for line in remote.shell(f"sha256sum {paths}").stdout.splitlines() if line.strip()]
    if hashes != [hashlib.sha256(file.read_bytes()).hexdigest() for _, file in files]:
        raise RuntimeError("Watchdog files did not match the staged build.")


def wait_for_watchdog(adapter: Path) -> None:
    deadline = time.monotonic() + 150
    while time.monotonic() < deadline:
        try:
            state = run([sys.executable, str(adapter), "rest", "GET", SUMMARY_PATH], check=False, timeout=12)
            if state.returncode == 0 and json.loads(state.stdout).get("state") in {"healthy", "warning", "critical"}:
                return
        except (subprocess.TimeoutExpired, ValueError, AttributeError):
            pass
        time.sleep(4)
    raise RuntimeError("The Watchdog summary did not return after the Home Assistant restart.")


def restart_core(remote: Remote, archive: str, operation: str) -> None:
    status = f"{archive}/{operation}.status"
    log = f"{archive}/{operation}.log"
    command = (f"ha core restart --no-progress >{log} 2>&1\n"
               f"printf '%s\\n' \"$?\" >{status}.pending\n"
               f"mv {status}.pending {status}")
    try:
        remote.shell(f"nohup sh -c {shlex.quote(command)} </dev/null >/dev/null 2>&1 &", timeout=15)
    except (RuntimeError, OSError, subprocess.TimeoutExpired) as error:
        raise RestartUnconfirmed("Could not confirm Supervisor received the restart request.") from error
    deadline = time.monotonic() + 16 * 60
    while time.monotonic() < deadline:
        try:
            result = remote.shell(f"cat {status}", check=False, timeout=12)
            if result.returncode == 0:
                if result.stdout.strip() == "0":
                    return
                raise RestartUnconfirmed("Supervisor did not report a completed restart.")
        except (OSError, subprocess.TimeoutExpired):
            pass
        time.sleep(8)
    raise RestartUnconfirmed("Supervisor has not reported the restart result.")


def install(remote: Remote, source: Path, backup: Path, private_config: Path | None, wait_ready) -> str:
    """Swap only staged bytes into place. Preserve the prior version for in-place rollback."""
    files = sorted(path for path in source.iterdir() if path.is_file() and path.suffix in {".py", ".json"})
    if not {"__init__.py", "manifest.json"}.issubset(path.name for path in files):
        raise RuntimeError("The Watchdog source is incomplete.")
    installed = remote.exists(COMPONENT, "-d")
    if not installed and private_config is None:
        raise RuntimeError("A code-only upgrade requires an existing Watchdog installation.")
    had_private_config = private_config is not None and remote.exists(PRIVATE_CONFIG, "-f")
    archive = f"/config/.system-watchdog-backup-{backup.name}"
    stage = f"{archive}/incoming"
    previous = f"{archive}/previous"
    remote.shell(f"umask 077\nmkdir {archive} && mkdir {stage}")
    if installed:
        remote.download(COMPONENT, backup, recursive=True)
        previous_files = sorted(path for path in (backup / "system_watchdog").iterdir()
                                if path.is_file() and path.suffix in {".py", ".json"})
        if not previous_files:
            raise RuntimeError("The private Watchdog rollback copy is empty.")
        verify_files(remote, COMPONENT, previous_files)
    for file in files:
        remote.upload(file, f"{stage}/{file.name}")
    verify_files(remote, stage, files)

    apply = ["set -e", "mkdir -p /config/custom_components"]
    rollback = ["set -e", f"if [ -d {previous} ]; then",
                f"  if [ -e {COMPONENT} ]; then mv {COMPONENT} {archive}/failed; fi",
                f"  mv {previous} {COMPONENT}",
                f"elif [ ! -d {stage} ] && [ -d {COMPONENT} ]; then",
                f"  mv {COMPONENT} {archive}/failed", "fi"]
    if installed:
        apply.append(f"mv {COMPONENT} {previous}")
    apply.append(f"mv {stage} {COMPONENT}")

    live_yaml: list[tuple[str, Path]] = []
    if private_config is not None:
        original_config = backup / "configuration.yaml"
        original_watchdog = backup / "system_watchdog.yaml"
        remote.download(CONFIG, original_config)
        if had_private_config:
            remote.download(PRIVATE_CONFIG, original_watchdog)
        current_yaml = [(CONFIG, original_config)]
        if had_private_config:
            current_yaml.append((PRIVATE_CONFIG, original_watchdog))
        staged_yaml = [(f"{archive}/incoming-watchdog.yaml", private_config)]
        expected_config = original_config
        original = original_config.read_bytes().decode("utf-8")
        if re.search(r"(?m)^system_watchdog[ \t]*:", original):
            if not re.search(r"(?m)^system_watchdog[ \t]*:[ \t]*!include[ \t]+system_watchdog\.yaml(?:[ \t]+#.*)?[ \t]*\r?$", original):
                raise RuntimeError("The existing Watchdog declaration does not use the managed private YAML.")
        else:
            newline = "\r\n" if "\r\n" in original else "\n"
            expected_config = backup / "configuration-proposed.yaml"
            expected_config.write_bytes((original.rstrip() + newline * 2 + INCLUDE + newline).encode("utf-8"))
            staged_yaml.append((f"{archive}/incoming-configuration.yaml", expected_config))
            apply.append(f"mv {archive}/incoming-configuration.yaml {CONFIG}")
        for destination, local in staged_yaml:
            remote.upload(local, destination)
        verify_paths(remote, staged_yaml)
        remote.shell(f"set -e\ncp -p {CONFIG} {archive}/configuration.yaml" +
                     (f"\ncp -p {PRIVATE_CONFIG} {archive}/system_watchdog.yaml" if had_private_config else ""))
        verify_files(remote, archive, [local for _, local in current_yaml])
        verify_paths(remote, current_yaml)
        apply.append(f"mv {archive}/incoming-watchdog.yaml {PRIVATE_CONFIG}")
        live_yaml = [(CONFIG, expected_config), (PRIVATE_CONFIG, private_config)]
        rollback.append(f"cp -p {archive}/configuration.yaml {CONFIG}")
        if had_private_config:
            rollback.append(f"cp -p {archive}/system_watchdog.yaml {PRIVATE_CONFIG}")
        else:
            rollback.append(f"if [ ! -f {archive}/incoming-watchdog.yaml ] && [ -f {PRIVATE_CONFIG} ]; then "
                            f"mv {PRIVATE_CONFIG} {archive}/failed-watchdog.yaml; fi")

    restart_attempted = False
    try:
        remote.shell("\n".join(apply))
        verify_files(remote, COMPONENT, files)
        verify_paths(remote, live_yaml)
        if remote.shell("ha core check", check=False, timeout=180).returncode:
            raise RuntimeError("Home Assistant configuration validation failed.")
        restart_attempted = True
        restart_core(remote, archive, "restart")
        wait_ready()
        verify_files(remote, COMPONENT, files)
        verify_paths(remote, live_yaml)
    except RestartUnconfirmed as error:
        raise RuntimeError(f"{error} Check Supervisor and the runtime before retrying. Private backup: {archive}.") from None
    except (RuntimeError, OSError, subprocess.TimeoutExpired) as error:
        try:
            remote.shell("\n".join(rollback))
            if restart_attempted:
                restart_core(remote, archive, "rollback")
                if installed:
                    wait_ready()
        except (RuntimeError, OSError, subprocess.TimeoutExpired) as rollback_error:
            raise RuntimeError(f"Watchdog upgrade failed. Verify rollback from the private backup {archive}.") from rollback_error
        raise RuntimeError(f"{error} Previous files restored from the private backup {archive}.") from None
    return archive


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", required=True)
    parser.add_argument("--ssh-key", type=Path, required=True)
    parser.add_argument("--management-root", type=Path, required=True)
    parser.add_argument("--backup-dir", type=Path, required=True)
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--private-config", type=Path, help="Private YAML for a full installation")
    mode.add_argument("--component-only", action="store_true", help="Update the installed component and keep both YAML files")
    args = parser.parse_args()
    source = Path(__file__).parents[1] / "custom_components" / "system_watchdog"
    if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9.-]*", args.host):
        parser.error("use a Home Assistant LAN hostname or IPv4 address")
    if not args.ssh_key.is_file() or (args.private_config and not args.private_config.is_file()):
        parser.error("the SSH key or private YAML file is missing")
    adapter = args.management_root / "ha_manage.py"
    if not adapter.is_file():
        parser.error("the private management adapter is missing")
    backup = args.backup_dir / datetime.now().strftime("%Y%m%d-%H%M%S-%f")
    backup.mkdir(parents=True, exist_ok=False)
    archive = install(Remote(args.host, args.ssh_key), source, backup, args.private_config,
                      lambda: wait_for_watchdog(adapter))
    print(f"System Watchdog summary and deployed files verified. Private rollback backup: {archive}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

