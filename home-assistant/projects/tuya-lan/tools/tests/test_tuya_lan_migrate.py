"""Contract tests for the no-phone Xtend-to-Tuya-Local helper."""

from contextlib import redirect_stdout
from io import StringIO
from pathlib import Path
import sys
from types import SimpleNamespace
import unittest
from unittest.mock import patch
from urllib.error import HTTPError

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import tuya_lan_migrate as migrate  # noqa: E402


KEY = "secret-local-key-must-not-appear"
TOKEN = "secret-token-must-not-appear"


def device():
    return migrate.Device("dev001", "Example Lamp", "dj", KEY, True, False, "192.0.2.5", "3.5")


class FakeHA:
    def __init__(self, steps):
        self.steps = iter(steps)
        self.calls = []

    def api(self, method, path, data=None):
        self.calls.append((method, path, data))
        return next(self.steps)


def form(step, **extra):
    return {"type": "form", "step_id": step, "flow_id": "flow001", "errors": {}, **extra}


class MigrationTests(unittest.TestCase):
    def test_config_flow_timeout_defaults_to_ninety_seconds(self):
        args = migrate.parser().parse_args(["--ha-url", "http://192.0.2.10:8123", "audit"])
        self.assertEqual(args.timeout, 90)
        args = migrate.parser().parse_args(["--ha-url", "http://192.0.2.10:8123",
                                            "--timeout", "120", "audit"])
        self.assertEqual(args.timeout, 120)

    def test_diagnostics_audit_does_not_print_key_or_id(self):
        records = migrate.parse_diagnostics({"data": {"devices": [{
            "id": "dev001", "name": "Example\nLamp", "category": "dj",
            "local_key": KEY, "support_local": True, "sub": False,
            "ip": "192.0.2.5", "version": "3.5",
        }]}})
        output = StringIO()
        with redirect_stdout(output):
            migrate.audit(records, {"dev001": {"ip": "192.0.2.5", "version": "3.5"}})
        self.assertIn("Example Lamp", output.getvalue())
        self.assertNotIn(KEY, output.getvalue())
        self.assertNotIn("dev001", output.getvalue())
        self.assertEqual(migrate.select_device(records, records[0].fingerprint), records[0])

    def test_http_error_body_never_reaches_user(self):
        ha = migrate.HomeAssistant("http://192.0.2.10:8123", TOKEN)
        exc = HTTPError("http://example", 400, "Bad request", {}, None)
        with patch.object(migrate.request, "urlopen", side_effect=exc):
            with self.assertRaises(migrate.MigrationError) as caught:
                ha.api("POST", "config/config_entries/flow/flow001", {"local_key": KEY})
        self.assertNotIn(KEY, str(caught.exception))
        self.assertNotIn(TOKEN, str(caught.exception))
        self.assertIn("HTTP 400", str(caught.exception))

    def test_import_config_flow_uses_cached_key_only_in_memory(self):
        choices = [{"name": "type", "selector": {"select": {"options": [
            {"value": "bulb||maker||model", "label": "Maker Model"}
        ]}}}]
        ha = FakeHA([
            form("user"), form("local"), form("select_type", data_schema=choices),
            form("choose_entities"), {"type": "create_entry", "title": "Example Lamp"},
        ])
        title = migrate.import_device(ha, device(), "192.0.2.5", "3.5",
                                      "bulb||maker||model", None, False, False)
        self.assertEqual(title, "Example Lamp")
        self.assertEqual([call[0] for call in ha.calls], ["POST"] * 5)
        self.assertEqual(ha.calls[2][2]["local_key"], KEY)
        self.assertEqual(ha.calls[2][2]["protocol_version"], "3.5")
        self.assertEqual(ha.calls[3][2], {"type": "bulb||maker||model"})
        self.assertEqual(ha.calls[4][2], {"name": "Example Lamp"})

    def test_failed_import_aborts_incomplete_flow(self):
        ha = FakeHA([form("user"), form("local"), form("local", errors={"base": "connection"}),
                     {"message": "Flow aborted"}])
        with self.assertRaises(migrate.MigrationError):
            migrate.import_device(ha, device(), "192.0.2.5", "3.5",
                                  None, None, False, False)
        self.assertEqual(ha.calls[-1][0], "DELETE")
        self.assertEqual(ha.calls[-1][1], "config/config_entries/flow/flow001")

    def test_noninteractive_import_lists_mappings_then_cancels_flow(self):
        choices = [{"name": "type", "selector": {"select": {"options": [
            {"value": "bulb||example||lamp", "label": "Example Lamp (bulb)"}
        ]}}}]
        ha = FakeHA([form("user"), form("local"),
                     form("select_type", data_schema=choices),
                     {"message": "Flow aborted"}])
        output = StringIO()
        with redirect_stdout(output), self.assertRaises(migrate.MigrationError):
            migrate.import_device(ha, device(), "192.0.2.5", "3.5",
                                  None, None, False, False)
        self.assertIn("bulb||example||lamp", output.getvalue())
        self.assertNotIn(KEY, output.getvalue())
        self.assertEqual(ha.calls[-1][0], "DELETE")

    def test_duplicate_name_requires_fingerprint(self):
        second = migrate.Device("dev002", "Example Lamp", "dj", KEY, True, False, None, None)
        with self.assertRaises(migrate.MigrationError):
            migrate.select_device([device(), second], "Example Lamp")
        self.assertEqual(migrate.select_device([device(), second], second.fingerprint), second)

    def test_probe_closes_socket_after_status(self):
        class FakeClient:
            instance = None

            def __init__(self, *args):
                self.closed = False
                self.version = None
                FakeClient.instance = self

            def set_version(self, version):
                self.version = version

            def status(self):
                return {"dps": {"1": True}}

            def close(self):
                self.closed = True

        with patch.dict(sys.modules, {"tinytuya": SimpleNamespace(Device=FakeClient)}):
            healthy, elapsed = migrate.probe(device(), "192.0.2.5", "3.5")
        self.assertTrue(healthy)
        self.assertGreaterEqual(elapsed, 0)
        self.assertEqual(FakeClient.instance.version, 3.5)
        self.assertTrue(FakeClient.instance.closed)

    def test_default_audit_survives_optional_scan_failure(self):
        fake_ha = SimpleNamespace(
            xtend_entry_id=lambda _: "xtend001",
            diagnostics=lambda _: [device()],
        )
        out, err = StringIO(), StringIO()
        with patch.object(migrate, "HomeAssistant", return_value=fake_ha), \
             patch.object(migrate, "token_from_args", return_value=TOKEN), \
             patch.object(migrate, "scan_lan", side_effect=migrate.MigrationError("scan failed")), \
             redirect_stdout(out), patch("sys.stderr", err):
            result = migrate.main(["--ha-url", "http://192.0.2.10:8123"])
        self.assertEqual(result, 0)
        self.assertIn("Example Lamp", out.getvalue())
        self.assertIn("LAN advertisements: not scanned", out.getvalue())
        self.assertIn("n/a", out.getvalue())
        self.assertIn("LAN scan unavailable", err.getvalue())
        self.assertNotIn(KEY, out.getvalue() + err.getvalue())
        self.assertNotIn(TOKEN, out.getvalue() + err.getvalue())


if __name__ == "__main__":
    unittest.main()
