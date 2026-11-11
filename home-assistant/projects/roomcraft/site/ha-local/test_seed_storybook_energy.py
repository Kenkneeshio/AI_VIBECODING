import unittest

from seed_storybook_energy import build_mapping


def metric(device, channel, scale, suffix, *, site="123", scope="monitor", disabled=None):
    return {
        "entity_id": f"sensor.{device}_{suffix}",
        "unique_id": f"sensor.emporia_vue.{scale}.{site}-{channel}",
        "platform": "emporia_vue",
        "device_id": device,
        "config_entry_id": scope,
        "disabled_by": disabled,
    }


def readings(device, channel, **options):
    return [
        metric(device, channel, scale, suffix, **options)
        for scale, suffix in [("instant", "w"), ("1D", "today"), ("1MON", "cycle")]
    ]


def device(name, model):
    return {"id": name, "name": name.capitalize(), "model": model}


def stats(name, **options):
    return {
        "statistic_id": f"sensor.{name}_today",
        "statistics_unit_of_measurement": "kWh",
        "has_sum": True,
        **options,
    }


class StorybookEnergySeedTests(unittest.TestCase):
    def setUp(self):
        self.config = {
            "roomcraft_plan": {"elements": [{
                "type": "custom:roomcraft-status-popup",
                "roomcraft_status_kind": "electrical",
                "entities": [{"entity": "sensor.home_w", "name": "Main"}],
            }]},
        }
        self.home = readings("home", "1,2,3")
        self.devices = [device("home", "VUE002")]

    def test_meters_are_scoped_labeled_and_do_not_duplicate_aggregates(self):
        entries = self.home + readings("kitchen", "2") + readings("plug", "1,2,3", site="456")
        entries += readings("mains", "1,2,3", site="555") + readings("total", "TotalUsage")
        entries += readings("balance", "Balance") + readings("export", "MainsToGrid")
        entries += readings("different_config", "7", site="789", scope="unrelated")
        entries += readings("disabled", "8", disabled="user")
        devices = self.devices + [device("plug", "SSO001")]
        devices += [device(name, "VUE002") for name in
                    ["kitchen", "mains", "total", "balance", "export", "different_config", "disabled"]]
        result = build_mapping(self.config, entries, devices, [stats("home"), stats("plug")])
        self.assertEqual(result, {
            "version": 1,
            "home": {
                "power": "sensor.home_w", "today": "sensor.home_today",
                "billing": "sensor.home_cycle", "statistic": "sensor.home_today",
            },
            "groups": [
                {"id": "kitchen", "label": "Kitchen", "kind": "circuit", "shared": True,
                 "power": "sensor.kitchen_w", "today": "sensor.kitchen_today", "billing": "sensor.kitchen_cycle"},
                {"id": "export", "label": "Grid export", "kind": "other",
                 "power": "sensor.export_w", "today": "sensor.export_today", "billing": "sensor.export_cycle"},
                {"id": "plug", "label": "Plug", "kind": "outlet", "power": "sensor.plug_w",
                 "today": "sensor.plug_today", "billing": "sensor.plug_cycle", "statistic": "sensor.plug_today"},
            ],
        })
        self.assertEqual(result, build_mapping(self.config, list(reversed(entries)), list(reversed(devices)),
                                               [stats("plug"), stats("home")]))

    def test_missing_live_watts_can_keep_direct_energy_readings(self):
        devices = self.devices + [device("circuit", "VUE002")]
        sources = [stats("home", has_sum=False), stats("circuit", statistics_unit_of_measurement="V")]
        result = build_mapping(self.config, self.home + readings("circuit", "9")[1:], devices, sources)
        self.assertNotIn("statistic", result["home"])
        self.assertEqual(result["groups"], [{"id": "circuit", "label": "Circuit", "kind": "circuit", "shared": True,
                                            "today": "sensor.circuit_today", "billing": "sensor.circuit_cycle"}])

    def test_refuses_to_treat_an_outlet_as_the_whole_home_meter(self):
        with self.assertRaisesRegex(ValueError, "recognized Emporia Vue aggregate"):
            build_mapping(self.config, self.home, [device("home", "SSO001")], [])

    def test_refuses_multiple_configured_primary_power_candidates(self):
        self.config["roomcraft_plan"]["elements"][0]["entities"].append("sensor.secondary_w")
        with self.assertRaisesRegex(ValueError, "exactly one"):
            build_mapping(self.config, self.home + readings("secondary", "1,2,3", site="789"), self.devices, [])

    def test_repeated_labels_show_verified_input_numbers(self):
        entries = self.home + readings("first", "3") + readings("second", "8")
        devices = self.devices + [{"id": name, "name": "Shared outlets", "model": "VUE002"}
                                  for name in ["first", "second"]]
        result = build_mapping(self.config, entries, devices, [])
        self.assertEqual([group["label"] for group in result["groups"]],
                         ["Shared outlets · Input 3", "Shared outlets · Input 8"])
