# Kitchen — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 33 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 3 |
| [number](#number) | 2 |
| [sensor](#sensor) | 24 |
| [switch](#switch) | 4 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.refrigerator_contact` | Door | smartthings | Unavailable | Refrigerator |
| `binary_sensor.refrigerator_cooler_door` | Fridge door | smartthings | Available | Refrigerator |
| `binary_sensor.refrigerator_freezer_door` | Freezer door | smartthings | Available | Refrigerator |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.refrigerator_freezer_temperature` | Freezer temperature | smartthings | Available | Refrigerator |
| `number.refrigerator_fridge_temperature` | Fridge temperature | smartthings | Available | Refrigerator |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.b11_fridge_kitchen_outlets_energy_this_month` | Energy This Month | emporia_vue | Available | HVAC Compressor and Control |
| `sensor.b11_fridge_kitchen_outlets_energy_today` | Energy Today | emporia_vue | Available | HVAC Compressor and Control |
| `sensor.b11_fridge_kitchen_outlets_power_minute_average` | Power Minute Average | emporia_vue | Available | HVAC Compressor and Control |
| `sensor.b12_14oven_energy_this_month` | Energy This Month | emporia_vue | Available | HVAC Fan and Oven |
| `sensor.b12_14oven_energy_today` | Energy Today | emporia_vue | Available | HVAC Fan and Oven |
| `sensor.b12_14oven_power_minute_average` | Power Minute Average | emporia_vue | Available | HVAC Fan and Oven |
| `sensor.microwave_energy_this_month` | Energy This Month | emporia_vue | Available | Kitchen |
| `sensor.microwave_energy_today` | Energy Today | emporia_vue | Available | Kitchen |
| `sensor.microwave_power_minute_average` | Power Minute Average | emporia_vue | Available | Kitchen |
| `sensor.oven_energy_this_month` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.oven_energy_this_month_2` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.oven_energy_today` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.oven_energy_today_2` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.oven_power_minute_average` | Power Minute Average | emporia_vue | Available | Unassigned |
| `sensor.oven_power_minute_average_2` | Power Minute Average | emporia_vue | Available | Unassigned |
| `sensor.refrigerator_deltaenergy` | Energy difference | smartthings | Available | Refrigerator |
| `sensor.refrigerator_energy` | Energy | smartthings | Available | Refrigerator |
| `sensor.refrigerator_energysaved` | Energy saved | smartthings | Available | Refrigerator |
| `sensor.refrigerator_freezer_temperature` | Freezer temperature | smartthings | Available | Refrigerator |
| `sensor.refrigerator_fridge_temperature` | Fridge temperature | smartthings | Available | Refrigerator |
| `sensor.refrigerator_power` | Power | smartthings | Available | Refrigerator |
| `sensor.refrigerator_powerenergy` | Power energy | smartthings | Available | Refrigerator |
| `sensor.refrigerator_temperature_measurement` | Temperature Measurement | smartthings | Unavailable | Refrigerator |
| `sensor.refrigerator_thermostat_cooling_setpoint` | Thermostat Cooling Setpoint | smartthings | Unavailable | Refrigerator |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.refrigerator_ice_maker` | Cubed ice | smartthings | Available | Refrigerator |
| `switch.refrigerator_power_cool` | Power cool | smartthings | Available | Refrigerator |
| `switch.refrigerator_power_freeze` | Power freeze | smartthings | Available | Refrigerator |
| `switch.refrigerator_sabbath_mode` | Sabbath mode | smartthings | Available | Refrigerator |
