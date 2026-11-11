import importlib.util
from pathlib import Path
from subprocess import CompletedProcess
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import Mock, patch


spec = importlib.util.spec_from_file_location(
    "watchdog_test_install", Path(__file__).parents[1] / "tools" / "install.py"
)
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)


class InstallTests(unittest.TestCase):
    def setUp(self):
        temporary = TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.root = Path(temporary.name)
        self.source = self.root / "source"
        self.backup = self.root / "safe-backup"
        self.source.mkdir()
        self.backup.mkdir()
        (self.source / "__init__.py").write_text("# staged", encoding="utf-8")
        (self.source / "manifest.json").write_text("{}", encoding="utf-8")
        self.remote = Mock(spec=installer.Remote)
        self.remote.exists.return_value = True
        self.remote.download.side_effect = self.download
        self.remote.shell.side_effect = lambda command, **_: CompletedProcess(
            [], 0, stdout="0\n" if command.startswith("cat ") else ""
        )
        self.ready = Mock()

    def download(self, source, destination, *, recursive=False):
        if recursive:
            component = destination / "system_watchdog"
            component.mkdir()
            (component / "__init__.py").write_text("# previous", encoding="utf-8")
            (component / "manifest.json").write_text("{}", encoding="utf-8")
        else:
            destination.write_text("original YAML", encoding="utf-8")

    def commands(self):
        return [call.args[0] for call in self.remote.shell.call_args_list]

    def restarts(self):
        return [command for command in self.commands() if command.startswith("nohup ")]

    def test_component_upgrade_uses_one_restart_and_never_uploads_yaml(self):
        with patch.object(installer, "verify_files") as verify:
            installer.install(self.remote, self.source, self.backup, None, self.ready)
        self.assertEqual(len(self.restarts()), 1)
        self.assertLess(self.commands().index("ha core check"), self.commands().index(self.restarts()[0]))
        self.assertTrue(all(".yaml" not in command for command in self.commands()))
        self.assertEqual(verify.call_count, 4)
        self.ready.assert_called_once()

    def test_rejected_candidate_is_rolled_back_before_restart(self):
        self.remote.shell.side_effect = lambda command, **_: CompletedProcess(
            [], 1 if command == "ha core check" else 0, stdout=""
        )
        with patch.object(installer, "verify_files"):
            with self.assertRaisesRegex(RuntimeError, "Previous files restored"):
                installer.install(self.remote, self.source, self.backup, None, self.ready)
        self.assertEqual(self.restarts(), [])
        self.assertIn("/previous", self.commands()[-1])
        self.ready.assert_not_called()

    def test_failed_runtime_readback_restarts_the_previous_component(self):
        self.ready.side_effect = [RuntimeError("Summary unavailable"), None]
        with patch.object(installer, "verify_files"):
            with self.assertRaisesRegex(RuntimeError, "Previous files restored"):
                installer.install(self.remote, self.source, self.backup, None, self.ready)
        self.assertEqual(len(self.restarts()), 2)
        self.assertTrue(any("if [ -d " in command and "/previous" in command for command in self.commands()))
        self.assertEqual(self.ready.call_count, 2)

    def test_unconfirmed_supervisor_restart_preserves_candidate_and_avoids_duplicate_restart(self):
        self.remote.shell.side_effect = lambda command, **_: CompletedProcess(
            [], 0, stdout="1\n" if command.startswith("cat ") else ""
        )
        with patch.object(installer, "verify_files"):
            with self.assertRaisesRegex(RuntimeError, "Check Supervisor and the runtime"):
                installer.install(self.remote, self.source, self.backup, None, self.ready)
        self.assertEqual(len(self.restarts()), 1)
        self.assertFalse(any("/failed" in command for command in self.commands()))
        self.ready.assert_not_called()

    def test_full_install_rolls_back_both_yaml_files_after_failed_core_check(self):
        private = self.root / "private.yaml"
        private.write_text("candidate YAML", encoding="utf-8")
        self.remote.shell.side_effect = lambda command, **_: CompletedProcess(
            [], 1 if command == "ha core check" else 0, stdout=""
        )
        with patch.object(installer, "verify_files"), patch.object(installer, "verify_paths"):
            with self.assertRaisesRegex(RuntimeError, "Previous files restored"):
                installer.install(self.remote, self.source, self.backup, private, self.ready)
        rollback = self.commands()[-1]
        self.assertIn(f"/configuration.yaml {installer.CONFIG}", rollback)
        self.assertIn(f"/system_watchdog.yaml {installer.PRIVATE_CONFIG}", rollback)

    def test_existing_include_is_preserved_and_both_yaml_files_are_verified(self):
        private = self.root / "proposed.yaml"
        private.write_bytes(b"sensor_entities: []\n")
        original = b"# exact preserved file\r\nsystem_watchdog: !include system_watchdog.yaml\r\n"

        def download(source, destination, *, recursive=False):
            if source == installer.CONFIG:
                destination.write_bytes(original)
            else:
                self.download(source, destination, recursive=recursive)

        self.remote.download.side_effect = download
        with patch.object(installer, "verify_files"), patch.object(installer, "verify_paths") as verify:
            installer.install(self.remote, self.source, self.backup, private, self.ready)
        self.assertEqual((self.backup / "configuration.yaml").read_bytes(), original)
        self.assertFalse(any("incoming-configuration.yaml" in call.args[1] for call in self.remote.upload.call_args_list))
        self.assertEqual(len(self.restarts()), 1)
        self.assertEqual(verify.call_count, 4)
        self.assertEqual(verify.call_args.args[1], [
            (installer.CONFIG, self.backup / "configuration.yaml"), (installer.PRIVATE_CONFIG, private),
        ])
