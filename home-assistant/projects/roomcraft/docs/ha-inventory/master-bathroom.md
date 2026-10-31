# Master Bathroom — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 21 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 1 |
| [humidifier](#humidifier) | 1 |
| [light](#light) | 1 |
| [number](#number) | 4 |
| [select](#select) | 1 |
| [sensor](#sensor) | 8 |
| [switch](#switch) | 5 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.humidifier_water_empty` | Water Empty | dreo | Available | Humidifier |

## humidifier

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `humidifier.humidifier` | Humidifier | dreo | Available | Humidifier |

## light

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `light.master_bathroom_humidifier_ambient_light` | Ambient Light | dreo | Available | Humidifier |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.humidifier_ambient_light_threshold_high` | Ambient Light Humidity High Threshold | dreo | Available | Humidifier |
| `number.humidifier_ambient_light_threshold_low` | Ambient Light Humidity Low Threshold | dreo | Available | Humidifier |
| `number.humidifier_fog_level` | Fog Level | dreo | Available | Humidifier |
| `number.humidifier_sleep_target_humidity` | Sleep Target Humidity | dreo | Available | Humidifier |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.humidifier_mist_level` | Mist Level | dreo | Available | Humidifier |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.humidifier_ambient_light_humidifier` | Ambient Light Humidifier | dreo | Unavailable | Humidifier |
| `sensor.humidifier_humidity` | Humidity | dreo | Available | Humidifier |
| `sensor.humidifier_use_since_cleaning` | Use since cleaning | dreo | Unavailable | Humidifier |
| `sensor.humidifier_use_since_cleaning_hm` | Use Since Cleaning | dreo | Available | Humidifier |
| `sensor.humidifier_water_level` | Water Level | dreo | Unavailable | Humidifier |
| `sensor.master_bathroom_humidifier_filter_active` | Filter Active | dreo | Available | Humidifier |
| `sensor.master_bathroom_humidifier_filter_life` | Filter Life | dreo | Available | Humidifier |
| `sensor.master_bathroom_humidifier_target_humidity_reached` | Target Humidity Reached | dreo | Available | Humidifier |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.humidifier_ambient_light` | Ambient Light | dreo | Unavailable | Humidifier |
| `switch.humidifier_display_light` | Display Light | dreo | Available | Humidifier |
| `switch.humidifier_panel_sound` | Panel Sound | dreo | Available | Humidifier |
| `switch.humidifier_schedule` | Schedule | dreo | Available | Humidifier |
| `switch.humidifier_water_level_indicator` | Water Level Indicator | dreo | Unavailable | Humidifier |
