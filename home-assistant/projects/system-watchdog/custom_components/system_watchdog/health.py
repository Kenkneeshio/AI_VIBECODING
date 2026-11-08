"""Pure watchdog report construction, kept independent for fast unit tests."""

from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Iterable, Mapping

BAD_ENTITY_STATES = {"unavailable", "unknown"}
BAD_ENTRY_STATES = {"setup_error", "setup_retry", "migration_error", "failed_unload"}


def _category(status: str, message: str, issues: Iterable[str] = (), **details: Any) -> dict[str, Any]:
    issue_list = list(issues)
    return {"status": status, "message": message, "issues": issue_list[:50], **details}


def entity_health(states: Mapping[str, Any], entity_ids: Iterable[str], label: str) -> dict[str, Any]:
    monitored = sorted(set(entity_ids))
    issues: list[str] = []
    for entity_id in monitored:
        state = states.get(entity_id)
        value = getattr(state, "state", None) if state is not None else None
        if state is None:
            issues.append(f"{entity_id}: missing")
        elif value in BAD_ENTITY_STATES:
            issues.append(f"{entity_id}: {value}")
    return _category(
        "healthy" if not issues else "warning",
        f"{len(monitored) - len(issues)}/{len(monitored)} {label} available",
        issues,
        monitored=len(monitored),
        available=len(monitored) - len(issues),
    )


def integration_health(entries: Iterable[Any]) -> dict[str, Any]:
    active = [entry for entry in entries if not getattr(entry, "disabled_by", None)]
    issues: list[str] = []
    for entry in active:
        raw_state = getattr(entry, "state", "unknown")
        state = getattr(raw_state, "value", str(raw_state)).lower()
        if state in BAD_ENTRY_STATES:
            label = getattr(entry, "title", None) or getattr(entry, "domain", "integration")
            issues.append(f"{label}: {state}")
    return _category(
        "healthy" if not issues else "warning",
        f"{len(active) - len(issues)}/{len(active)} integrations free of setup errors",
        issues,
        monitored=len(active),
        healthy=len(active) - len(issues),
    )


def external_health(
    heartbeat: Mapping[str, Any] | None,
    now: datetime,
    stale_after: int,
) -> dict[str, dict[str, Any]]:
    names = ("workstation", "codex", "tablet", "apps")
    if not heartbeat:
        return {name: _category("critical", "No heartbeat received", ["heartbeat missing"]) for name in names}
    received = heartbeat.get("received_at")
    try:
        received_at = datetime.fromisoformat(str(received).replace("Z", "+00:00"))
        age = max(0, int((now - received_at.astimezone(timezone.utc)).total_seconds()))
    except (TypeError, ValueError):
        age = stale_after + 1
    if age > stale_after:
        return {name: _category("critical", f"Heartbeat stale by {age}s", ["heartbeat stale"], age_seconds=age)
                for name in names}
    result: dict[str, dict[str, Any]] = {}
    checks = heartbeat.get("checks", {})
    for name in names:
        check = checks.get(name, {}) if isinstance(checks, Mapping) else {}
        healthy = check.get("healthy") is True
        message = str(check.get("message") or ("Healthy" if healthy else "Failed check"))[:240]
        issues = check.get("issues", []) if isinstance(check.get("issues", []), list) else []
        result[name] = _category("healthy" if healthy else "critical", message,
                                 [str(issue)[:240] for issue in issues], age_seconds=age)
    return result


def build_report(
    *,
    now: datetime,
    states: Mapping[str, Any],
    entries: Iterable[Any],
    roomcraft_entities: Iterable[str],
    sensor_entities: Iterable[str],
    heartbeat: Mapping[str, Any] | None,
    stale_after: int,
) -> dict[str, Any]:
    categories = {
        "home_assistant": _category("healthy", "Home Assistant watchdog is running"),
        "integrations": integration_health(entries),
        "roomcraft": entity_health(states, roomcraft_entities, "Roomcraft objects"),
        "sensors": entity_health(states, sensor_entities, "sensors"),
        **external_health(heartbeat, now, stale_after),
    }
    issues = [f"{name}: {issue}" for name, item in categories.items() for issue in item["issues"]]
    statuses = {item["status"] for item in categories.values()}
    overall = "critical" if "critical" in statuses else "warning" if "warning" in statuses else "healthy"
    return {
        "updated_at": now.astimezone(timezone.utc).isoformat(),
        "overall": overall,
        "issue_count": len(issues),
        "issues": issues[:100],
        "categories": categories,
    }

