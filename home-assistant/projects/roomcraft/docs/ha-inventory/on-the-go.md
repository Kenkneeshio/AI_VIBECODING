# On the go — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 10 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 1 |
| [climate](#climate) | 1 |
| [cover](#cover) | 3 |
| [sensor](#sensor) | 5 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.dishwasher_power` | Power | smartthings | Unavailable | Dishwasher |

## climate

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `climate.thermostat` | Thermostat | smartthings | Available | Thermostat |

## cover

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `cover.blinds_small_sofa` | Blinds Small Sofa | smartthings | Available | Blinds Small Sofa |
| `cover.blinds_sofa` | Blinds Sofa | smartthings | Unavailable | Blinds Sofa |
| `cover.blinds_tv` | Blinds TV | smartthings | Available | Blinds TV |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.hub_blinds_battery` | Battery | smartthings | Available | Switchbot Hub |
| `sensor.hub_blinds_humidity` | Humidity | smartthings | Available | Switchbot Hub |
| `sensor.hub_blinds_temperature` | Temperature | smartthings | Available | Switchbot Hub |
| `sensor.thermostat_humidity` | Humidity | smartthings | Available | Thermostat |
| `sensor.thermostat_temperature` | Temperature | smartthings | Available | Thermostat |
