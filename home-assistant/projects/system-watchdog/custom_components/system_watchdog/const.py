DOMAIN = "system_watchdog"
PLATFORMS = ("sensor", "binary_sensor")
DEFAULT_SCAN_INTERVAL = 60
DEFAULT_STALE_AFTER = 600
STORE_VERSION = 1
STORE_KEY = f"{DOMAIN}.heartbeat"

CATEGORIES = (
    "home_assistant",
    "integrations",
    "roomcraft",
    "sensors",
    "workstation",
    "codex",
    "tablet",
    "apps",
)

