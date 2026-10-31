# Master Bedroom — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 25 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [alarm_control_panel](#alarm-control-panel) | 1 |
| [binary_sensor](#binary-sensor) | 3 |
| [button](#button) | 3 |
| [number](#number) | 4 |
| [select](#select) | 1 |
| [sensor](#sensor) | 13 |

## alarm control panel

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `alarm_control_panel.chime` | Chime | eufy_security | Available | Chime |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.chime_alarm` | Alarm | eufy_security | Disabled (integration) | Chime |
| `binary_sensor.chime_connected` | Connected | eufy_security | Disabled (integration) | Chime |
| `binary_sensor.chime_debug_station` | Debug (station) | eufy_security | Available | Chime |

## button

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `button.chime_reboot` | Reboot | eufy_security | Disabled (integration) | Chime |
| `button.chime_reset_alarm` | Reset Alarm | eufy_security | Disabled (integration) | Chime |
| `button.chime_trigger_alarm` | Trigger Alarm | eufy_security | Disabled (integration) | Chime |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.chime_alarm_arm_delay` | Alarm Arm Delay | eufy_security | Disabled (integration) | Chime |
| `number.chime_alarm_delay` | Alarm Delay | eufy_security | Disabled (integration) | Chime |
| `number.chime_alarm_volume` | Alarm Volume | eufy_security | Available | Chime |
| `number.chime_prompt_volume` | Prompt Volume | eufy_security | Available | Chime |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.chime_guard_mode` | Guard Mode | eufy_security | Available | Chime |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.balance_energy_this_month` | Energy This Month | emporia_vue | Available | Balance |
| `sensor.balance_energy_today` | Energy Today | emporia_vue | Available | Balance |
| `sensor.balance_power_minute_average` | Power Minute Average | emporia_vue | Available | Balance |
| `sensor.both_bedrooms_energy_this_month` | Energy This Month | emporia_vue | Available | Bedrooms |
| `sensor.both_bedrooms_energy_today` | Energy Today | emporia_vue | Available | Bedrooms |
| `sensor.both_bedrooms_power_minute_average` | Power Minute Average | emporia_vue | Available | Bedrooms |
| `sensor.chime_current_mode` | Current Mode | eufy_security | Available | Chime |
| `sensor.vue_energy_energy_this_month` | Energy This Month | emporia_vue | Available | Main Circuit Vue |
| `sensor.vue_energy_energy_this_month_2` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.vue_energy_energy_today` | Energy Today | emporia_vue | Available | Main Circuit Vue |
| `sensor.vue_energy_energy_today_2` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.vue_energy_power_minute_average` | Power Minute Average | emporia_vue | Available | Main Circuit Vue |
| `sensor.vue_energy_power_minute_average_2` | Power Minute Average | emporia_vue | Available | Unassigned |
