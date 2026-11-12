"""Back up, verify, and install the Roomcraft Presence component over SSH."""

import argparse
from datetime import datetime, timezone
import hashlib
from pathlib import Path
import re
import subprocess
import tarfile
import tempfile

COMPONENT = "roomcraft_presence"
CONFIG = "/config/custom_components"
SOURCE = Path(__file__).resolve().parent / "custom_components" / COMPONENT


def run(*command, capture=False):
    return subprocess.run(command, check=True, capture_output=capture, text=True).stdout


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", required=True)
    parser.add_argument("--ssh-key", required=True, type=Path)
    parser.add_argument("--backup-dir", required=True, type=Path)
    parser.add_argument("--restart", action="store_true", help="Restart Home Assistant Core after validation")
    args = parser.parse_args()
    if not re.fullmatch(r"[a-zA-Z0-9.-]+", args.host) or not args.ssh_key.is_file():
        parser.error("A valid SSH host and key file are required")
    target = f"root@{args.host}"
    options = ["-i", str(args.ssh_key), "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes",
               "-o", "ConnectTimeout=10"]

    def ssh(command, capture=False):
        return run("ssh", *options, target, command, capture=capture)

    stage = ssh("mktemp -d /config/.roomcraft-presence-XXXXXXXX", capture=True).strip()
    if not re.fullmatch(r"/config/\.roomcraft-presence-[a-zA-Z0-9]{8}", stage):
        raise RuntimeError("SSH did not return the expected staging path")
    installed = f"{CONFIG}/{COMPONENT}"
    args.backup_dir.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S-%f")
    backup = args.backup_dir / f"presence-before-{stamp}.tar.gz"
    ssh(f"set -eu; test -d {installed}; tar -czf {stage}/previous.tgz -C {CONFIG} {COMPONENT}")
    run("scp", *options, f"{target}:{stage}/previous.tgz", str(backup))
    with tarfile.open(backup) as archive:
        if f"{COMPONENT}/manifest.json" not in archive.getnames():
            raise RuntimeError("The copied backup does not contain the installed integration")
    print(f"Verified private integration backup: {backup}", flush=True)

    files = sorted(path for path in SOURCE.iterdir() if path.suffix in {".py", ".json", ".yaml"} and path.is_file())
    with tempfile.TemporaryDirectory(prefix="roomcraft-presence-") as directory:
        package = Path(directory) / "presence.tgz"
        with tarfile.open(package, "w:gz") as archive:
            for path in files:
                archive.add(path, arcname=f"{COMPONENT}/{path.name}")
        run("scp", *options, str(package), f"{target}:{stage}/candidate.tgz")

    ssh(f"set -eu; mkdir {stage}/candidate; tar -xzf {stage}/candidate.tgz -C {stage}/candidate")
    candidate = f"{stage}/candidate/{COMPONENT}"
    names = " ".join(path.name for path in files)
    hashes = ssh(f"cd {candidate} && sha256sum {names}", capture=True).splitlines()
    expected = {path.name: hashlib.sha256(path.read_bytes()).hexdigest() for path in files}
    if {line.split()[1]: line.split()[0] for line in hashes} != expected:
        raise RuntimeError("The staged component does not match the source")
    ssh(f"set -eu; mv {installed} {stage}/previous; "
        f"if mv {candidate} {installed}; then "
        f"if ha core check; then exit 0; fi; mv {installed} {stage}/rejected; fi; "
        f"mv {stage}/previous {installed}; exit 1")
    print(f"Validated Home Assistant configuration. Host rollback directory: {stage}/previous", flush=True)
    if args.restart:
        ssh("ha core restart")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
