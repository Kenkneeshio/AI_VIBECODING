# Main Dashboard migration map

Read-only mapping of the existing **Main Dashboard** (`dashboard-dashboard`) at 2026-10-31 19:14 UTC. It has one sections-style view, 6 sections, and 65 direct entity references. The Roomcraft drawer now includes **On plan**, **All entities**, search, registry availability, and these six curated sections. This map explains their source; it does not delete or overwrite the Main Dashboard.

At audit time, 56 direct references were available, eight unavailable, and one had no live state. Dynamic references inside templates may not be included. Recheck states before migrating a control.

| Existing section | Drawer section | Direct references |
| --- | --- | ---: |
| [Planning](#planning) | Planning | 2 |
| [Weather and Air Quality](#weather-and-air-quality) | Weather and Air Quality | 8 |
| [Lighting](#lighting) | Lighting | 17 |
| [Security and Control](#security-and-control) | Security and Control | 6 |
| [Energy](#energy) | Energy | 29 |
| [Robot Vacuum](#robot-vacuum) | Robot Vacuum | 3 |

## Sections and direct entity references

### Planning

Top-level cards: 2. Drawer section: **Planning**.

| Entity ID | Audit status |
| --- | --- |
| `calendar.private_0117` | available |
| `calendar.private_0122` | available |

### Weather and Air Quality

Top-level cards: 2. Drawer section: **Weather and Air Quality**.

| Entity ID | Audit status |
| --- | --- |
| `binary_sensor.ac_cooling_active` | available |
| `climate.thermostat_2` | available |
| `humidifier.humidifier` | available |
| `sensor.air_filter_temperature` | available |
| `sensor.air_quality_monitor_2_temperature` | available |
| `sensor.air_quality_monitor_temperature` | available |
| `sensor.private_0444` | available |
| `switch.main_light_socket_1` | available |

### Lighting

Top-level cards: 2. Drawer section: **Lighting**.

| Entity ID | Audit status |
| --- | --- |
| `cover.blinds_small_sofa_2` | available |
| `cover.blinds_sofa_2` | available |
| `cover.blinds_tv_2` | available |
| `light.entryway_bulb` | unavailable |
| `light.hallway_light_bulb_group` | unavailable |
| `light.kitchen_light_bulb_group` | unavailable |
| `light.kitchen_sink` | unavailable |
| `light.lab_light` | unavailable |
| `light.master_light` | available |
| `scene.ceiling_fan_light_toggle` | available |
| `scene.ceiling_fan_off` | available |
| `scene.ceiling_fan_on_scene` | available |
| `switch.ceiling_fan` | available |
| `switch.master_switch_1` | unavailable |
| `switch.smart_switch_3_switch_1` | available |
| `switch.smart_switch_switch_1` | no_live_state |
| `switch.smart_switch_switch_1_2` | available |

### Security and Control

Top-level cards: 3. Drawer section: **Security and Control**.

| Entity ID | Audit status |
| --- | --- |
| `binary_sensor.front_door_motion_detected` | available |
| `binary_sensor.front_door_ringing` | available |
| `binary_sensor.garage_door_door_contact` | available |
| `camera.porch_camera_profile_000` | available |
| `cover.garage_door_door_1` | available |
| `sensor.front_door_person_name` | available |

### Energy

Top-level cards: 2. Drawer section: **Energy**.

| Entity ID | Audit status |
| --- | --- |
| `sensor.aquarium_dishwasher_energy_this_month` | available |
| `sensor.aquarium_dishwasher_power_minute_average` | available |
| `sensor.b11_fridge_kitchen_outlets_energy_this_month` | available |
| `sensor.b11_fridge_kitchen_outlets_power_minute_average` | available |
| `sensor.b12_14oven_energy_this_month` | available |
| `sensor.b12_14oven_power_minute_average` | available |
| `sensor.balance_energy_this_month` | available |
| `sensor.balance_power_minute_average` | available |
| `sensor.both_bathrooms_and_hall_toilet_seat_energy_this_month` | available |
| `sensor.both_bathrooms_and_hall_toilet_seat_power_minute_average` | available |
| `sensor.both_bedrooms_energy_this_month` | available |
| `sensor.both_bedrooms_power_minute_average` | available |
| `sensor.emporia_outlet_1_energy_this_month` | available |
| `sensor.emporia_outlet_1_power_minute_average` | available |
| `sensor.emporia_outlet_2_energy_this_month` | available |
| `sensor.emporia_outlet_2_power_minute_average` | available |
| `sensor.emporia_outlet_3_energy_this_month` | available |
| `sensor.emporia_outlet_3_power_minute_average` | available |
| `sensor.emporia_outlet_4_tv_station_energy_this_month` | available |
| `sensor.emporia_outlet_4_tv_station_power_minute_average` | available |
| `sensor.laundry_bath_gfi_energy_this_month` | available |
| `sensor.laundry_bath_gfi_power_minute_average` | available |
| `sensor.living_room_router_chargers_tanks_garage_energy_this_month` | available |
| `sensor.living_room_router_chargers_tanks_garage_power_minute_average` | available |
| `sensor.microwave_energy_this_month` | available |
| `sensor.microwave_power_minute_average` | available |
| `sensor.tv_dining_kitchen_not_microwave_energy_this_month` | available |
| `sensor.tv_dining_kitchen_not_microwave_power_minute_average` | available |
| `sensor.vue_energy_power_minute_average` | available |

### Robot Vacuum

Top-level cards: 6. Drawer section: **Robot Vacuum**.

| Entity ID | Audit status |
| --- | --- |
| `sensor.apex_feed_cycle_countdown` | unavailable |
| `switch.apex_feed_a` | unavailable |
| `vacuum.l10s_ultra` | available |

## Migration notes

- The Lighting section still references unavailable entryway, hallway-group, kitchen-group, sink, and office bulbs. Use verified working entities for new fixture bindings; show unavailable state for a deliberate old binding.
- The Robot Vacuum source section contains two unavailable Apex feed references, which are unrelated to the Dreame vacuum. Do not present them as vacuum commands in the curated drawer.
- Keep calendars behind authenticated Planning views; the two calendar IDs in this public map are masked.
- The drawer's **All entities** tab searches the registry and shows availability; **On plan** lists the entities represented by floor-plan objects. Keep the plan canvas for physical controls and a few nearby readouts.
- Preserve the existing Main Dashboard as a reference while the new drawer is checked on the target tablet. A documentation commit does not change any Home Assistant dashboard.
