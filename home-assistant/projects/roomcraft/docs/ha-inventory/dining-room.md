# Dining room — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 272 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 3 |
| [button](#button) | 17 |
| [camera](#camera) | 8 |
| [event](#event) | 1 |
| [fan](#fan) | 2 |
| [number](#number) | 2 |
| [select](#select) | 89 |
| [sensor](#sensor) | 92 |
| [switch](#switch) | 53 |
| [time](#time) | 2 |
| [update](#update) | 2 |
| [vacuum](#vacuum) | 1 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.l10s_ultra_charging_state` | Charging State | dreame_vacuum | Available | L10s Ultra |
| `binary_sensor.l10s_ultra_maintenance` | Maintenance | dreame_vacuum | Available | L10s Ultra |
| `binary_sensor.l10s_ultra_problem` | Problem | dreame_vacuum | Available | L10s Ultra |

## button

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `button.l10s_ultra_backup_saved_map` | Backup Saved Map | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_base_station_self_repair` | Base Station Self Repair | dreame_vacuum | Unavailable | L10s Ultra |
| `button.l10s_ultra_clear_warning` | Clear Warning | dreame_vacuum | Unavailable | L10s Ultra |
| `button.l10s_ultra_manual_drying` | Manual Drying | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reload_shortcuts` | Reload Shortcuts | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reset_detergent` | Reset Detergent | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reset_filter` | Reset Filter | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reset_main_brush` | Reset Main Brush | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reset_mop_pad` | Reset Mop Pad | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reset_sensor` | Reset Sensor | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reset_side_brush` | Reset Side Brush | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_reset_silver_ion` | Reset Silver-ion | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_self_clean` | Self Clean | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_start_auto_empty` | Start Auto Empty | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_start_fast_mapping` | Start Fast Mapping | dreame_vacuum | Unknown | L10s Ultra |
| `button.l10s_ultra_start_mapping` | Start Mapping | dreame_vacuum | Disabled (integration) | L10s Ultra |
| `button.l10s_ultra_water_tank_draining` | Water Tank Draining | dreame_vacuum | Unavailable | L10s Ultra |

## camera

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `camera.l10s_ultra_map` | Current Map | dreame_vacuum | Available | L10s Ultra |
| `camera.l10s_ultra_map_1` | Saved Map 1 | dreame_vacuum | Available | L10s Ultra |
| `camera.l10s_ultra_map_2` | Saved Map 2 | dreame_vacuum | Available | L10s Ultra |
| `camera.l10s_ultra_map_3` | Saved Map 3 | dreame_vacuum | Available | L10s Ultra |
| `camera.l10s_ultra_map_data` | Current Map Data | dreame_vacuum | Disabled (integration) | L10s Ultra |
| `camera.l10s_ultra_wifi_map_1` | Saved Wifi Map 1 | dreame_vacuum | Disabled (integration) | L10s Ultra |
| `camera.l10s_ultra_wifi_map_2` | Saved Wifi Map 2 | dreame_vacuum | Disabled (integration) | L10s Ultra |
| `camera.l10s_ultra_wifi_map_3` | Saved Wifi Map 3 | dreame_vacuum | Disabled (integration) | L10s Ultra |

## event

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `event.air_filter_device_notifications` | Device notifications | xtend_tuya | Unknown | Air Filter |

## fan

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `fan.air_filter` | — | tuya | Disabled (user) | Air Filter |
| `fan.air_filter_2` | Air Filter | xtend_tuya | Available | Air Filter |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.l10s_ultra_self_clean_area` | Self-Clean Area | dreame_vacuum | Available | L10s Ultra |
| `number.l10s_ultra_volume` | Volume | dreame_vacuum | Available | L10s Ultra |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.air_filter_countdown` | Countdown | tuya | Unknown | Air Filter |
| `select.air_filter_countdown_2` | Countdown | xtend_tuya | Unavailable | Air Filter |
| `select.l10s_ultra_auto_empty_frequency` | Auto-Empty Frequency | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_cleaning_mode` | Cleaning Mode | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_drying_time` | Drying Time | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_map_rotation` | Map Rotation | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_mop_pad_humidity` | Mop Pad Humidity | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_mop_wash_level` | Mop Washing Mode | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_mopping_type` | Mopping Type | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_10_cleaning_mode` | Cleaning Mode Balcony | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_10_cleaning_times` | Cleaning Times Balcony | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_10_floor_material` | Floor Material Balcony | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_10_mop_pad_humidity` | Mop Pad Humidity Balcony | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_10_name` | Room 10 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_10_order` | Order Balcony | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_10_suction_level` | Suction Level Balcony | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_11_cleaning_mode` | Cleaning Mode Room 11 | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_11_cleaning_times` | Cleaning Times Room 11 | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_11_floor_material` | Floor Material Room 11 | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_11_mop_pad_humidity` | Mop Pad Humidity Room 11 | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_11_name` | Room 11 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_11_order` | Order Room 11 | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_11_suction_level` | Suction Level Room 11 | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_1_cleaning_mode` | Cleaning Mode Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_1_cleaning_times` | Cleaning Times Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_1_floor_material` | Floor Material Bathroom | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_1_mop_pad_humidity` | Mop Pad Humidity Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_1_name` | Room 1 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_1_order` | Order Bathroom | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_1_suction_level` | Suction Level Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_2_cleaning_mode` | Cleaning Mode Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_2_cleaning_times` | Cleaning Times Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_2_floor_material` | Floor Material Bathroom | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_2_mop_pad_humidity` | Mop Pad Humidity Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_2_name` | Room 2 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_2_order` | Order Bathroom | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_2_suction_level` | Suction Level Bathroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_3_cleaning_mode` | Cleaning Mode Kitchen | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_3_cleaning_times` | Cleaning Times Kitchen | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_3_floor_material` | Floor Material Kitchen | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_3_mop_pad_humidity` | Mop Pad Humidity Kitchen | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_3_name` | Room 3 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_3_order` | Order Kitchen | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_3_suction_level` | Suction Level Kitchen | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_4_cleaning_mode` | Cleaning Mode Hallway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_4_cleaning_times` | Cleaning Times Hallway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_4_floor_material` | Floor Material Hallway | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_4_mop_pad_humidity` | Mop Pad Humidity Hallway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_4_name` | Room 4 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_4_order` | Order Hallway | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_4_suction_level` | Suction Level Hallway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_5_cleaning_mode` | Cleaning Mode Master Bedroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_5_cleaning_times` | Cleaning Times Master Bedroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_5_floor_material` | Floor Material Master Bedroom | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_5_mop_pad_humidity` | Mop Pad Humidity Master Bedroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_5_name` | Room 5 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_5_order` | Order Master Bedroom | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_5_suction_level` | Suction Level Master Bedroom | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_6_cleaning_mode` | Cleaning Mode Dining | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_6_cleaning_times` | Cleaning Times Dining | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_6_floor_material` | Floor Material Dining | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_6_mop_pad_humidity` | Mop Pad Humidity Dining | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_6_name` | Room 6 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_6_order` | Order Dining | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_6_suction_level` | Suction Level Dining | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_7_cleaning_mode` | Cleaning Mode Living Room | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_7_cleaning_times` | Cleaning Times Living Room | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_7_floor_material` | Floor Material Living Room | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_7_mop_pad_humidity` | Mop Pad Humidity Living Room | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_7_name` | Room 7 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_7_order` | Order Living Room | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_7_suction_level` | Suction Level Living Room | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_8_cleaning_mode` | Cleaning Mode Entryway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_8_cleaning_times` | Cleaning Times Entryway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_8_floor_material` | Floor Material Entryway | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_8_mop_pad_humidity` | Mop Pad Humidity Entryway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_8_name` | Room 8 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_8_order` | Order Entryway | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_8_suction_level` | Suction Level Entryway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_9_cleaning_mode` | Cleaning Mode Walkway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_9_cleaning_times` | Cleaning Times Walkway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_9_floor_material` | Floor Material Walkway | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_9_mop_pad_humidity` | Mop Pad Humidity Walkway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_room_9_name` | Room 9 Name | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_9_order` | Order Walkway | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_room_9_suction_level` | Suction Level Walkway | dreame_vacuum | Unavailable | L10s Ultra |
| `select.l10s_ultra_selected_map` | Selected Map | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_suction_level` | Suction Level | dreame_vacuum | Available | L10s Ultra |
| `select.l10s_ultra_wider_corner_coverage` | Wider Corner Coverage | dreame_vacuum | Available | L10s Ultra |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.air_filter_filter_utilization` | Filter utilization | tuya | Available | Air Filter |
| `sensor.air_filter_filter_utilization_2` | Filter utilization | xtend_tuya | Unavailable | Air Filter |
| `sensor.air_filter_humidity` | Humidity | tuya | Available | Air Filter |
| `sensor.air_filter_humidity_2` | Humidity | xtend_tuya | Unavailable | Air Filter |
| `sensor.air_filter_pm2_5` | Pollution | tuya | Available | Air Filter |
| `sensor.air_filter_pm2_5_2` | PM2.5 | xtend_tuya | Unavailable | Air Filter |
| `sensor.air_filter_temperature` | Temperture | tuya | Available | Air Filter |
| `sensor.air_filter_temperature_2` | Temperature | xtend_tuya | Unavailable | Air Filter |
| `sensor.apex_alkx3` | apex_Alkx3 | apex | Unavailable | — |
| `sensor.apex_ato_unuseda` | apex_ATO_UnusedA | apex | Unavailable | — |
| `sensor.apex_ato_unusedw` | apex_ATO_UnusedW | apex | Unavailable | — |
| `sensor.apex_autotopoffa` | apex_AutoTopOffA | apex | Unavailable | — |
| `sensor.apex_autotopoffw` | apex_AutoTopOffW | apex | Unavailable | — |
| `sensor.apex_cax3` | apex_Cax3 | apex | Unavailable | — |
| `sensor.apex_conduc` | apex_Conduc | apex | Unavailable | — |
| `sensor.apex_coolinga` | apex_CoolingA | apex | Unavailable | — |
| `sensor.apex_coolingw` | apex_CoolingW | apex | Unavailable | — |
| `sensor.apex_feed_cycle_countdown` | apex_Feed Cycle Countdown | apex | Unavailable | — |
| `sensor.apex_heatera` | apex_HeaterA | apex | Unavailable | — |
| `sensor.apex_heaterw` | apex_HeaterW | apex | Unavailable | — |
| `sensor.apex_kalk` | apex_Kalk | apex | Unavailable | — |
| `sensor.apex_mgx3` | apex_Mgx3 | apex | Unavailable | — |
| `sensor.apex_no3pox4` | apex_NO3POX4 | apex | Unavailable | — |
| `sensor.apex_ph` | apex_pH | apex | Unavailable | — |
| `sensor.apex_pumpa` | apex_PumpA | apex | Unavailable | — |
| `sensor.apex_pumpw` | apex_PumpW | apex | Unavailable | — |
| `sensor.apex_refuglighta` | apex_RefugLightA | apex | Unavailable | — |
| `sensor.apex_refuglightw` | apex_RefugLightW | apex | Unavailable | — |
| `sensor.apex_refugpumpa` | apex_RefugPumpA | apex | Unavailable | — |
| `sensor.apex_refugpumpw` | apex_RefugPumpW | apex | Unavailable | — |
| `sensor.apex_rodia` | apex_RODIA | apex | Unavailable | — |
| `sensor.apex_rodiw` | apex_RODIW | apex | Unavailable | — |
| `sensor.apex_sw1` | apex_Sw1 | apex | Unavailable | — |
| `sensor.apex_sw2` | apex_Sw2 | apex | Unavailable | — |
| `sensor.apex_sw3` | apex_Sw3 | apex | Unavailable | — |
| `sensor.apex_sw4` | apex_Sw4 | apex | Unavailable | — |
| `sensor.apex_sw5` | apex_Sw5 | apex | Unavailable | — |
| `sensor.apex_sw6` | apex_Sw6 | apex | Unavailable | — |
| `sensor.apex_swx4_1` | apex_Swx4_1 | apex | Unavailable | — |
| `sensor.apex_swx4_2` | apex_Swx4_2 | apex | Unavailable | — |
| `sensor.apex_swx4_3` | apex_Swx4_3 | apex | Unavailable | — |
| `sensor.apex_swx4_4` | apex_Swx4_4 | apex | Unavailable | — |
| `sensor.apex_swx4_5` | apex_Swx4_5 | apex | Unavailable | — |
| `sensor.apex_swx4_6` | apex_Swx4_6 | apex | Unavailable | — |
| `sensor.apex_tmp` | apex_Tmp | apex | Unavailable | — |
| `sensor.apex_volt_2` | apex_Volt_2 | apex | Unavailable | — |
| `sensor.apex_wave70120a` | apex_WAVE70120A | apex | Unavailable | — |
| `sensor.apex_wave70120w` | apex_WAVE70120W | apex | Unavailable | — |
| `sensor.aquarium_dishwasher_energy_this_month` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.aquarium_dishwasher_energy_today` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.aquarium_dishwasher_power_minute_average` | Power Minute Average | emporia_vue | Available | Unassigned |
| `sensor.l10s_ultra_auto_empty_status` | Auto Empty Status | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_battery_level` | Battery Level | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_charging_status` | Charging Status | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_cleaned_area` | Cleaned Area | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_cleaning_count` | Cleaning Count | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_cleaning_history` | Cleaning History | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_cleaning_time` | Cleaning Time | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_cruising_history` | Cruising History | dreame_vacuum | Unavailable | L10s Ultra |
| `sensor.l10s_ultra_current_room` | Current Room | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_detergent_left` | Detergent | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_detergent_time_left` | Detergent Time Left | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_dust_collection` | Dust Collection | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_error` | Error | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_filter_left` | Filter | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_filter_time_left` | Filter Time Left | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_firmware_version` | Firmware Version | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_first_cleaning_date` | First Cleaning Date | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_low_water_warning` | Low Water Warning | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_main_brush_left` | Main Brush | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_main_brush_time_left` | Main Brush Time Left | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_mapping_time` | Mapping Time | dreame_vacuum | Unavailable | L10s Ultra |
| `sensor.l10s_ultra_mop_pad` | Mop Pad | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_mop_pad_left` | Mop Pad | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_mop_pad_time_left` | Mop Pad Time Left | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_relocation_status` | Relocation Status | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_self_wash_base_status` | Self-Wash Base Status | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_sensor_dirty_left` | Sensor Cleaning | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_sensor_dirty_time_left` | Sensor Dirty Time Left | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_side_brush_left` | Side Brush | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_side_brush_time_left` | Side Brush Time Left | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_silver_ion_left` | Silver Ion | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_silver_ion_time_left` | Silver-ion Time Left | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_state` | State | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_status` | Status | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_stream_status` | Stream Status | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_task_status` | Task Status | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_total_cleaned_area` | Total Cleaned Area | dreame_vacuum | Available | L10s Ultra |
| `sensor.l10s_ultra_total_cleaning_time` | Total Cleaning Time | dreame_vacuum | Available | L10s Ultra |
| `sensor.tv_dining_kitchen_not_microwave_energy_this_month` | Energy This Month | emporia_vue | Available | Dining and Island |
| `sensor.tv_dining_kitchen_not_microwave_energy_today` | Energy Today | emporia_vue | Available | Dining and Island |
| `sensor.tv_dining_kitchen_not_microwave_power_minute_average` | Power Minute Average | emporia_vue | Available | Dining and Island |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.air_filter_child_lock` | Child lock | tuya | Available | Air Filter |
| `switch.air_filter_child_lock_2` | Child lock | xtend_tuya | Unavailable | Air Filter |
| `switch.air_filter_filter_cartridge_reset` | Filter cartridge reset | tuya | Available | Air Filter |
| `switch.air_filter_filter_cartridge_reset_2` | Filter cartridge reset | xtend_tuya | Unavailable | Air Filter |
| `switch.air_filter_power` | Power | tuya | Available | Air Filter |
| `switch.air_filter_power_2` | Power | xtend_tuya | Unavailable | Air Filter |
| `switch.apex_alk_3_4` | apex_Alk_3_4 | apex | Unavailable | — |
| `switch.apex_autotopoff` | apex_ATO_Unused | apex | Unavailable | — |
| `switch.apex_cooling` | apex_Cooling | apex | Unavailable | — |
| `switch.apex_dos_left_afr` | apex_DOS-Left-AFR | apex | Unavailable | — |
| `switch.apex_dos_right_kh` | apex_DOS-Right-KH | apex | Unavailable | — |
| `switch.apex_feed_a` | apex_Feed A | apex | Unavailable | — |
| `switch.apex_feed_b` | apex_Feed B | apex | Unavailable | — |
| `switch.apex_feed_c` | apex_Feed C | apex | Unavailable | — |
| `switch.apex_feed_d` | apex_Feed D | apex | Unavailable | — |
| `switch.apex_heater` | apex_Heater | apex | Unavailable | — |
| `switch.apex_kalk` | apex_Kalk | apex | Unavailable | — |
| `switch.apex_linka_2_9` | apex_LinkA_2_9 | apex | Unavailable | — |
| `switch.apex_linkb_2_10` | apex_LinkB_2_10 | apex | Unavailable | — |
| `switch.apex_monitor_pre_release` | Pre-release | hacs | Disabled (integration) | Apex Monitor |
| `switch.apex_no3pox4` | apex_NO3POX4 | apex | Unavailable | — |
| `switch.apex_pump` | apex_Pump | apex | Unavailable | — |
| `switch.apex_refuglight` | apex_RefugLight | apex | Unavailable | — |
| `switch.apex_refugpump` | apex_RefugPump | apex | Unavailable | — |
| `switch.apex_rodi` | apex_RODI | apex | Unavailable | — |
| `switch.apex_sndalm_i6` | apex_SndAlm_I6 | apex | Unavailable | — |
| `switch.apex_sndwrn_i7` | apex_SndWrn_I7 | apex | Unavailable | — |
| `switch.apex_trident_3_3` | apex_Trident_3_3 | apex | Unavailable | — |
| `switch.apex_wave70120` | apex_WAVE70120 | apex | Unavailable | — |
| `switch.l10s_ultra_ai_furniture_detection` | AI Furniture Detection | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_ai_obstacle_detection` | AI Obstacle Detection | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_ai_obstacle_image_upload` | AI Obstacle Image Upload | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_ai_obstacle_picture` | Obstacle Pictures | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_ai_pet_detection` | Pet Detection | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_auto_add_detergent` | Auto-Add Detergent | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_auto_drying` | Auto Drying | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_auto_dust_collecting` | Auto-Empty | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_carpet_avoidance` | Carpet Avoidance | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_carpet_boost` | Carpet Boost | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_carpet_recognition` | Carpet Recognition | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_child_lock` | Child Lock | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_cleaning_sequence` | Cleaning Sequence | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_collision_avoidance` | Collision Avoidance | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_customized_cleaning` | Customized Cleaning | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_dnd` | DnD | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_fuzzy_obstacle_detection` | Fuzzy Obstacle Detection | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_multi_floor_map` | Multi-Floor Map | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_obstacle_avoidance` | Obstacle Avoidance | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_pet_picture` | Pet Picture | dreame_vacuum | Unavailable | L10s Ultra |
| `switch.l10s_ultra_resume_cleaning` | Resume Cleaning | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_self_clean` | Self-Clean | dreame_vacuum | Available | L10s Ultra |
| `switch.l10s_ultra_self_clean_by_zone` | Self Clean By Zone | dreame_vacuum | Available | L10s Ultra |
| `switch.private_0670` | — | apex | Unavailable | — |

## time

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `time.l10s_ultra_dnd_end` | DnD End Time | dreame_vacuum | Available | L10s Ultra |
| `time.l10s_ultra_dnd_start` | DnD Start Time | dreame_vacuum | Available | L10s Ultra |

## update

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `update.apex_monitor_update` | Update | hacs | Available | Apex Monitor |
| `update.apex_update_2` | apex_update | apex | Unavailable | — |

## vacuum

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `vacuum.l10s_ultra` |  L10s Ultra | dreame_vacuum | Available | L10s Ultra |
