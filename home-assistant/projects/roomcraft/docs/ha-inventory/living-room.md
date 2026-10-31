# Living Room — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 53 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [alarm_control_panel](#alarm-control-panel) | 1 |
| [binary_sensor](#binary-sensor) | 4 |
| [button](#button) | 3 |
| [event](#event) | 5 |
| [media_player](#media-player) | 2 |
| [number](#number) | 4 |
| [remote](#remote) | 1 |
| [select](#select) | 5 |
| [sensor](#sensor) | 20 |
| [switch](#switch) | 7 |
| [update](#update) | 1 |

## alarm control panel

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `alarm_control_panel.homebase` | Homebase | eufy_security | Available | Homebase |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.be63_wan_status` | WAN status | upnp | Available | BE63 |
| `binary_sensor.homebase_alarm` | Alarm | eufy_security | Disabled (integration) | Homebase |
| `binary_sensor.homebase_connected` | Connected | eufy_security | Disabled (integration) | Homebase |
| `binary_sensor.homebase_debug_station` | Debug (station) | eufy_security | Available | Homebase |

## button

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `button.homebase_reboot` | Reboot | eufy_security | Disabled (integration) | Homebase |
| `button.homebase_reset_alarm` | Reset Alarm | eufy_security | Disabled (integration) | Homebase |
| `button.homebase_trigger_alarm` | Trigger Alarm | eufy_security | Disabled (integration) | Homebase |

## event

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `event.audio_device_notifications` | Device notifications | xtend_tuya | Unknown | Audio |
| `event.heaters_geckos_device_notifications` | Device notifications | xtend_tuya | Unknown | Heaters Geckos |
| `event.quad_remote_switch_device_notifications` | Device notifications | xtend_tuya | Unknown | Quad Remote Switch |
| `event.universal_ir_remote_device_notifications` | Device notifications | xtend_tuya | Unknown | Universal IR Remote |
| `event.zigbee_gateway_device_notifications` | Device notifications | xtend_tuya | Unknown | Zigbee Gateway |

## media player

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `media_player.tcl_tv` | TCL TV | androidtv_remote | Unavailable | TCL TV |
| `media_player.tcl_tv_2` | TCL TV | dlna_dmr | Unavailable | — |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.homebase_alarm_arm_delay` | Alarm Arm Delay | eufy_security | Disabled (integration) | Homebase |
| `number.homebase_alarm_delay` | Alarm Delay | eufy_security | Disabled (integration) | Homebase |
| `number.homebase_alarm_volume` | Alarm Volume | eufy_security | Available | Homebase |
| `number.homebase_prompt_volume` | Prompt Volume | eufy_security | Available | Homebase |

## remote

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `remote.tcl_tv` | TCL TV | androidtv_remote | Unavailable | TCL TV |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.heaters_geckos_indicator_light_mode` | Indicator light mode | tuya | Available | Heaters Geckos |
| `select.heaters_geckos_indicator_light_mode_2` | Indicator light mode | xtend_tuya | Unavailable | Heaters Geckos |
| `select.heaters_geckos_power_on_behavior` | Power-on behavior | tuya | Available | Heaters Geckos |
| `select.heaters_geckos_power_on_behavior_2` | Power on behavior | xtend_tuya | Unavailable | Heaters Geckos |
| `select.homebase_guard_mode` | Guard Mode | eufy_security | Available | Homebase |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.4_switch_battery` | Battery | tuya | Available | Quad Remote Switch |
| `sensor.be63_data_received` | Data received | upnp | Disabled (integration) | BE63 |
| `sensor.be63_data_sent` | Data sent | upnp | Disabled (integration) | BE63 |
| `sensor.be63_download_speed` | Download speed | upnp | Available | BE63 |
| `sensor.be63_external_ip` | External IP | upnp | Available | BE63 |
| `sensor.be63_number_of_port_mapping_entries_ipv4` | Number of port mapping entries (IPv4) | upnp | Disabled (integration) | BE63 |
| `sensor.be63_packet_download_speed` | Packet download speed | upnp | Disabled (integration) | BE63 |
| `sensor.be63_packet_upload_speed` | Packet upload speed | upnp | Disabled (integration) | BE63 |
| `sensor.be63_packets_received` | Packets received | upnp | Disabled (integration) | BE63 |
| `sensor.be63_packets_sent` | Packets sent | upnp | Disabled (integration) | BE63 |
| `sensor.be63_upload_speed` | Upload speed | upnp | Available | BE63 |
| `sensor.be63_wan_status` | WAN status | upnp | Disabled (integration) | BE63 |
| `sensor.homebase_current_mode` | Current Mode | eufy_security | Available | Homebase |
| `sensor.living_room_router_chargers_tanks_garage_energy_this_month` | Energy This Month | emporia_vue | Available | Living Switches Garage |
| `sensor.living_room_router_chargers_tanks_garage_energy_today` | Energy Today | emporia_vue | Available | Living Switches Garage |
| `sensor.living_room_router_chargers_tanks_garage_power_minute_average` | Power Minute Average | emporia_vue | Available | Living Switches Garage |
| `sensor.living_room_router_tplink_download_speed_no_rollover_handling` | Download speed (no rollover handling) | upnp | Disabled (integration) | BE63 |
| `sensor.living_room_router_tplink_packet_download_speed_no_rollover_handling` | Packet download speed (no rollover handling) | upnp | Disabled (integration) | BE63 |
| `sensor.living_room_router_tplink_packet_upload_speed_no_rollover_handling` | Packet upload speed (no rollover handling) | upnp | Disabled (integration) | BE63 |
| `sensor.living_room_router_tplink_upload_speed_no_rollover_handling` | Upload speed (no rollover handling) | upnp | Disabled (integration) | BE63 |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.hacs_pre_release` | Pre-release | hacs | Disabled (integration) | HACS |
| `switch.heaters_geckos_child_lock` | Child lock | tuya | Available | Heaters Geckos |
| `switch.heaters_geckos_child_lock_2` | Child lock | xtend_tuya | Unavailable | Heaters Geckos |
| `switch.heaters_geckos_socket_1` | Socket 1 | tuya | Available | Heaters Geckos |
| `switch.heaters_geckos_socket_1_2` | Socket 1 | xtend_tuya | Unavailable | Heaters Geckos |
| `switch.heaters_geckos_socket_2` | Socket 2 | tuya | Available | Heaters Geckos |
| `switch.heaters_geckos_socket_2_2` | Socket 2 | xtend_tuya | Unavailable | Heaters Geckos |

## update

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `update.hacs_update` | Update | hacs | Available | HACS |
