import importlib.util
from pathlib import Path
from subprocess import CompletedProcess
import unittest
from unittest.mock import Mock, patch


spec = importlib.util.spec_from_file_location(
    "watchdog_test_agent", Path(__file__).parents[1] / "agent" / "system_watchdog_agent.py"
)
agent = importlib.util.module_from_spec(spec)
spec.loader.exec_module(agent)

DEVICE = "192.0.2.21:38000 device product:DigitalSignage model:Apolosign_Calendar"
OTHER_DEVICE = "192.0.2.22:38000 device product:DigitalSignage model:Apolosign_Calendar"
PACKAGES = "\n".join(f"package:{package}" for package in agent.REQUIRED_APPS.values())


def reply(output="", code=0):
    return CompletedProcess([], code, stdout=output)


class AgentTests(unittest.TestCase):
    def test_selects_one_authorized_tablet_with_no_fixed_address_or_port(self):
        self.assertEqual(agent.tablet_endpoint(DEVICE, None), "192.0.2.21:38000")
        self.assertIsNone(agent.tablet_endpoint(f"{DEVICE}\n{OTHER_DEVICE}", None))
        self.assertEqual(agent.tablet_endpoint(f"{DEVICE}\n{OTHER_DEVICE}", "192.0.2.22"), "192.0.2.22:38000")
        self.assertIsNone(agent.tablet_endpoint(DEVICE.replace(" device ", " offline "), None))

    def test_background_companion_is_unhealthy_even_when_present_in_the_dump(self):
        foreground = ("topResumedActivity=ActivityRecord u0 example.launcher/.Home\n"
                      f"Background ActivityRecord u0 {agent.COMPANION}/.MainActivity")
        with patch.object(agent, "ssh", side_effect=[
            reply(DEVICE), reply(foreground), reply(PACKAGES), reply()
        ]) as ssh:
            tablet, apps = agent.tablet_checks(Path("private.py"))
        self.assertEqual(tablet["issues"], ["Home Assistant is not the foreground app"])
        self.assertTrue(apps["healthy"])
        self.assertTrue(all(call.args[1].startswith(agent.ADB) for call in ssh.call_args_list))

    def test_package_probe_failure_does_not_report_every_app_missing(self):
        with patch.object(agent, "ssh", side_effect=[
            reply(DEVICE), reply(f"topResumedActivity=ActivityRecord u0 {agent.COMPANION}/.MainActivity"),
            reply(PACKAGES), reply(code=1),
        ]):
            tablet, apps = agent.tablet_checks(Path("private.py"))
        self.assertTrue(tablet["healthy"])
        self.assertEqual(apps["issues"], ["Tablet app status could not be inspected"])

    def test_rejected_heartbeat_is_logged_as_failed(self):
        adapter = Mock()
        adapter.rest.return_value = {"accepted": False}
        with (patch("sys.argv", ["agent", "--management-root", "private", "--log", "private.jsonl"]),
              patch.object(agent, "build_payload", return_value={"checks": {}}),
              patch.object(agent, "load_management_adapter", return_value=adapter),
              patch.object(agent, "append_log") as append):
            self.assertEqual(agent.main(), 1)
        self.assertFalse(append.call_args.args[1]["ok"])
