# Hallway — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 34 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 4 |
| [climate](#climate) | 1 |
| [select](#select) | 6 |
| [sensor](#sensor) | 19 |
| [switch](#switch) | 4 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.washer_child_lock` | Child lock | smartthings | Available | Washer |
| `binary_sensor.washer_power` | Power | smartthings | Available | Washer |
| `binary_sensor.washer_remote_control` | Remote control | smartthings | Available | Washer |
| `binary_sensor.washer_wrinkle_prevent_active` | Wrinkle prevent active | smartthings | Available | Washer |

## climate

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `climate.thermostat_2` | THERMOSTAT | honeywell | Available | THERMOSTAT |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.washer` | Washer | smartthings | Available | Washer |
| `select.washer_detergent_dispense_amount` | Detergent dispense amount | smartthings | Available | Washer |
| `select.washer_flexible_compartment_dispense_amount` | Flexible compartment dispense amount | smartthings | Available | Washer |
| `select.washer_soil_level` | Soil level | smartthings | Available | Washer |
| `select.washer_spin_level` | Spin level | smartthings | Available | Washer |
| `select.washer_water_temperature` | Water temperature | smartthings | Available | Washer |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.ac_2_energy_this_month` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.ac_2_energy_today` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.ac_2_power_minute_average` | Power Minute Average | emporia_vue | Available | Unassigned |
| `sensor.laundry_bath_gfi_energy_this_month` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.laundry_bath_gfi_energy_today` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.laundry_bath_gfi_power_minute_average` | Power Minute Average | emporia_vue | Available | Unassigned |
| `sensor.thermostat_humidity_2` | Humidity | honeywell | Available | THERMOSTAT |
| `sensor.thermostat_temperature_2` | Temperature | honeywell | Available | THERMOSTAT |
| `sensor.washer_deltaenergy` | Energy difference | smartthings | Available | Washer |
| `sensor.washer_energy` | Energy | smartthings | Available | Washer |
| `sensor.washer_energy_meter` | Energy Meter | smartthings | Unavailable | Washer |
| `sensor.washer_energysaved` | Energy saved | smartthings | Available | Washer |
| `sensor.washer_power` | Power | smartthings | Available | Washer |
| `sensor.washer_power_meter` | Power Meter | smartthings | Unavailable | Washer |
| `sensor.washer_powerenergy` | Power energy | smartthings | Available | Washer |
| `sensor.washer_washer_completion_time` | Completion time | smartthings | Available | Washer |
| `sensor.washer_washer_job_state` | Job state | smartthings | Available | Washer |
| `sensor.washer_washer_machine_state` | Machine state | smartthings | Available | Washer |
| `sensor.washer_water_consumption` | Water consumption | smartthings | Available | Washer |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.thermostat_emergency_heat` | Emergency heat | honeywell | Available | THERMOSTAT |
| `switch.washer` | Washer | smartthings | Available | Washer |
| `switch.washer_bubble_soak` | Bubble Soak | smartthings | Available | Washer |
| `switch.washer_wrinkle_prevent` | Wrinkle prevent | smartthings | Available | Washer |
