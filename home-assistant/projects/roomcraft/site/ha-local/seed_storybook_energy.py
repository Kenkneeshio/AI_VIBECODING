#!/usr/bin/env python3
"""Build a private Roomcraft energy mapping from the configured Emporia meter."""

from __future__ import annotations

import argparse
from collections import Counter, defaultdict
from datetime import datetime, timezone
import importlib.util
import json
from pathlib import Path
import re
from tempfile import NamedTemporaryFile


DASHBOARD = "roomcraft-home"
PLATFORM = "emporia_vue"
ENTITY_ID = re.compile(r"sensor\.[a-z0-9_]+")
CHANNEL = re.compile(r"sensor\.emporia_vue\.(instant|1D|1MON)\.(\d+)-([a-zA-Z0-9,]+)")
METRICS = {"instant": "power", "1D": "today", "1MON": "billing"}
GRID_LABELS = {"MainsFromGrid": "Grid import", "MainsToGrid": "Grid export"}
OMIT_CHANNELS = {"Balance", "TotalUsage"}
ENERGY_UNITS = {"Wh", "kWh", "MWh"}


def matching_entries(entries: list[dict]) -> list[dict]:
    """Keep enabled Emporia meter channels with known integration metric keys."""
    return [
        entry for entry in entries
        if entry.get("platform") == PLATFORM
        and not entry.get("disabled_by")
        and ENTITY_ID.fullmatch(entry.get("entity_id") or "")
        and CHANNEL.fullmatch(entry.get("unique_id") or "")
        and entry.get("device_id")
        and entry.get("config_entry_id")
    ]


def configured_home(config: dict, entries: list[dict]) -> dict:
    plan = config.get("roomcraft_plan") or {}
    popup = next(
        (element for element in plan.get("elements", [])
         if element.get("type") == "custom:roomcraft-status-popup"
         and element.get("roomcraft_status_kind") == "electrical"),
        {},
    )
    configured = {
        entry if isinstance(entry, str) else entry.get("entity")
        for entry in popup.get("entities", [])
        if isinstance(entry, (str, dict))
    }
    meters = [
        entry for entry in entries
        if entry["entity_id"] in configured
        and CHANNEL.fullmatch(entry["unique_id"]).group(1) == "instant"
    ]
    if len(meters) != 1:
        raise ValueError("Expected exactly one enabled Emporia power sensor in the saved Power panel.")
    return meters[0]


def supported_statistics(metadata: list[dict]) -> set[str]:
    return {
        entry["statistic_id"] for entry in metadata
        if isinstance(entry.get("statistic_id"), str)
        and entry.get("has_sum") is True
        and (entry.get("statistics_unit_of_measurement") or entry.get("unit_of_measurement"))
        in ENERGY_UNITS
    }


def build_mapping(config: dict, entities: list[dict], devices: list[dict], metadata: list[dict]) -> dict:
    entities = matching_entries(entities)
    primary = configured_home(config, entities)
    scope = primary["config_entry_id"]
    primary_device = primary["device_id"]
    devices_by_id = {device["id"]: device for device in devices}
    statistics = supported_statistics(metadata)
    by_device: dict[str, list[dict]] = defaultdict(list)
    for entity in entities:
        if entity["config_entry_id"] == scope:
            by_device[entity["device_id"]].append(entity)

    def meter(entries: list[dict]) -> tuple[str, dict] | None:
        parsed = [(entry, CHANNEL.fullmatch(entry["unique_id"]).groups()) for entry in entries]
        keys = {(site, channel) for _, (_, site, channel) in parsed}
        kinds = [kind for _, (kind, _, _) in parsed]
        if len(keys) != 1 or len(kinds) != len(set(kinds)):
            return None
        _, channel = next(iter(keys))
        result = {METRICS[kind]: entry["entity_id"] for entry, (kind, _, _) in parsed}
        if result.get("today") in statistics:
            result["statistic"] = result["today"]
        return channel, result

    aggregate = meter(by_device[primary_device])
    if not aggregate or not all(key in aggregate[1] for key in ("power", "today", "billing")):
        raise ValueError("The configured meter does not have an unambiguous Power, Today, and billing trio.")
    main_model = str(devices_by_id.get(primary_device, {}).get("model") or "").upper()
    if not main_model.startswith("VUE") or ("," not in aggregate[0] and aggregate[0] not in {"TotalUsage", "MainsFromGrid"}):
        raise ValueError("The configured Power sensor is not a recognized Emporia Vue aggregate.")
    home = aggregate[1]

    groups = []
    labels: dict[tuple[str, str], list[tuple[dict, str]]] = defaultdict(list)
    for device_id, entries in by_device.items():
        if device_id == primary_device:
            continue
        device = devices_by_id.get(device_id, {})
        model = str(device.get("model") or "").upper()
        resolved = meter(entries)
        label = str(device.get("name_by_user") or device.get("name") or "").strip()
        if not resolved or not label:
            continue
        channel, readings = resolved
        if channel in OMIT_CHANNELS:
            continue
        # Composite Vue mains can duplicate the configured whole-home meter.
        # Smart plugs can also use a composite key for their own single outlet.
        if model.startswith("VUE") and "," in channel:
            continue
        if model.startswith("SSO"):
            kind = "outlet"
        elif model.startswith("VUE") and channel.isdigit():
            kind = "circuit"
        else:
            kind = "other"
            label = GRID_LABELS.get(channel, label)
        group = {
            "id": device_id, "label": label[:100], "kind": kind,
            **({"shared": True} if kind == "circuit" else {}),
            **readings,
        }
        groups.append(group)
        labels[kind, group["label"].casefold()].append((group, channel))
    for matches in labels.values():
        if len(matches) < 2:
            continue
        distinct_inputs = (all(group["kind"] == "circuit" and channel.isdigit() for group, channel in matches)
                           and len({channel for _, channel in matches}) == len(matches))
        for index, (group, channel) in enumerate(sorted(matches, key=lambda pair: pair[0]["id"]), start=1):
            suffix = f" · Input {channel}" if distinct_inputs else f" · {index}"
            group["label"] = f"{group['label'][:100 - len(suffix)]}{suffix}"
    groups.sort(key=lambda group: (group["kind"], group["label"].casefold(), group["id"]))
    return {"version": 1, "home": home, "groups": groups}


def save_backup(config: dict, root: Path) -> Path:
    directory = root / "backups"
    directory.mkdir(exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S")
    with NamedTemporaryFile(
        mode="w", encoding="utf-8", dir=directory, delete=False,
        prefix=f"roomcraft-home-before-energy-seed-{stamp}-", suffix=".json",
    ) as file:
        json.dump(config, file, indent=2)
        return Path(file.name)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--management-root", required=True, type=Path)
    parser.add_argument("--apply", action="store_true", help="Back up, write, and verify the mapping.")
    args = parser.parse_args()
    root = args.management_root.resolve()
    spec = importlib.util.spec_from_file_location("roomcraft_ha_manage", root / "ha_manage.py")
    if not spec or not spec.loader:
        raise SystemExit("Home Assistant management adapter is unavailable.")
    adapter = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(adapter)

    with adapter.API() as api:
        config = api.call("lovelace/config", url_path=DASHBOARD)
        entities = matching_entries(api.call("config/entity_registry/list"))
        primary = configured_home(config, entities)
        devices = api.call("config/device_registry/list")
        ids = sorted(
            entry["entity_id"] for entry in entities
            if entry["config_entry_id"] == primary["config_entry_id"]
            and CHANNEL.fullmatch(entry["unique_id"]).group(1) == "1D"
        )
        metadata = api.call("recorder/get_statistics_metadata", statistic_ids=ids) if ids else []
        mapping = build_mapping(config, entities, devices, metadata)
        counts = Counter(group["kind"] for group in mapping["groups"])
        print("Verified meter groups:", ", ".join(f"{counts[kind]} {kind}" for kind in sorted(counts)) or "none")
        print("Calendar month statistic sources registered for:",
              int("statistic" in mapping["home"]) + sum("statistic" in group for group in mapping["groups"]),
              "groups including home")
        if config.get("roomcraft_energy") == mapping:
            print("The saved energy mapping already matches.")
            return
        if not args.apply:
            print("Dry run complete.")
            return
        backup = save_backup(config, root)
        if api.call("lovelace/config", url_path=DASHBOARD) != config:
            raise SystemExit("Roomcraft Home changed during preparation. Review the latest config and retry.")
        api.call("lovelace/config/save", url_path=DASHBOARD, config={**config, "roomcraft_energy": mapping})
        if api.call("lovelace/config", url_path=DASHBOARD) != {**config, "roomcraft_energy": mapping}:
            raise SystemExit("The saved dashboard differed from the intended configuration. Check the private backup.")
        print("Saved and verified the energy mapping.")
        print("Private dashboard backup:", backup.name)


if __name__ == "__main__":
    main()
