# Unassigned — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 1,182 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 130 |
| [button](#button) | 2 |
| [calendar](#calendar) | 10 |
| [conversation](#conversation) | 1 |
| [cover](#cover) | 3 |
| [device_tracker](#device-tracker) | 5 |
| [event](#event) | 36 |
| [fan](#fan) | 1 |
| [image](#image) | 2 |
| [light](#light) | 33 |
| [media_player](#media-player) | 2 |
| [notify](#notify) | 5 |
| [number](#number) | 16 |
| [person](#person) | 1 |
| [scene](#scene) | 4 |
| [select](#select) | 30 |
| [sensor](#sensor) | 683 |
| [siren](#siren) | 4 |
| [stt](#stt) | 1 |
| [sun](#sun) | 1 |
| [switch](#switch) | 120 |
| [todo](#todo) | 6 |
| [tts](#tts) | 1 |
| [update](#update) | 83 |
| [weather](#weather) | 1 |
| [zone](#zone) | 1 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.ac_cooling_active` | AC Cooling Active | template | Available | — |
| `binary_sensor.air_quality_monitor_2_safety` | Safety | tuya | Available | Air quality monitor 2 |
| `binary_sensor.air_quality_monitor_2_safety_2` | Safety | xtend_tuya | Unavailable | Air quality monitor 2 |
| `binary_sensor.air_quality_monitor_safety` | Safety | tuya | Available | Air quality monitor |
| `binary_sensor.air_quality_monitor_safety_2` | Safety | xtend_tuya | Unavailable | Air quality monitor |
| `binary_sensor.blinds_small_sofa_calibration` | Calibration | switchbot_cloud | Available | Blinds Small Sofa |
| `binary_sensor.blinds_sofa_calibration` | Calibration | switchbot_cloud | Available | Blinds Sofa |
| `binary_sensor.blinds_tv_calibration` | Calibration | switchbot_cloud | Available | Blinds TV |
| `binary_sensor.esphome_running` | Running | hassio | Disabled (integration) | ESPHome Device Builder |
| `binary_sensor.eufy_security_ws_running` | Running | hassio | Disabled (integration) | eufy-security-ws |
| `binary_sensor.file_editor_running` | Running | hassio | Disabled (integration) | File editor |
| `binary_sensor.get_hacs_running` | Running | hassio | Disabled (integration) | Get HACS |
| `binary_sensor.matter_server_running` | Running | hassio | Disabled (integration) | Matter Server |
| `binary_sensor.private_0001` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0002` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0003` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0004` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0005` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0006` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0007` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0008` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0009` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0010` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0011` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0012` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0013` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0014` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0015` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0016` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0017` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0018` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0019` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0020` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0021` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0022` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0023` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0024` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0025` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0026` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0027` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0028` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0029` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0030` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0031` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0032` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0033` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0034` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0035` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0036` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0037` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0038` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0039` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0040` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0041` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0042` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0043` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0044` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0045` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0046` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0047` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0048` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0049` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0050` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0051` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0052` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0053` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0054` | — | bambu_lab | Available | — |
| `binary_sensor.private_0055` | — | bambu_lab | Available | — |
| `binary_sensor.private_0056` | — | bambu_lab | Available | — |
| `binary_sensor.private_0057` | — | bambu_lab | Available | — |
| `binary_sensor.private_0058` | — | bambu_lab | Available | — |
| `binary_sensor.private_0059` | — | bambu_lab | Available | — |
| `binary_sensor.private_0060` | — | bambu_lab | Available | — |
| `binary_sensor.private_0061` | — | bambu_lab | Available | — |
| `binary_sensor.private_0062` | — | bambu_lab | Available | — |
| `binary_sensor.private_0063` | — | bambu_lab | Available | — |
| `binary_sensor.private_0064` | — | bambu_lab | Available | — |
| `binary_sensor.private_0065` | — | bambu_lab | Available | — |
| `binary_sensor.private_0066` | — | bambu_lab | Available | — |
| `binary_sensor.private_0067` | — | bambu_lab | Available | — |
| `binary_sensor.private_0068` | — | bambu_lab | Available | — |
| `binary_sensor.private_0069` | — | bambu_lab | Available | — |
| `binary_sensor.private_0070` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0071` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0072` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0073` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0074` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0075` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0076` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0077` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0078` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0079` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0080` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0081` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0082` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0083` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0084` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0085` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0086` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0087` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0088` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0089` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0090` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0091` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0092` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0093` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0094` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0095` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0096` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0097` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0098` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0099` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0100` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0101` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0102` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0103` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0104` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0105` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0106` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0107` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0108` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0109` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0110` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0111` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0112` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.private_0113` | — | mobile_app | Disabled (integration) | — |
| `binary_sensor.remote_ui` | Remote UI | cloud | Available | — |
| `binary_sensor.scrypted_running` | Running | hassio | Disabled (integration) | Scrypted |
| `binary_sensor.sun_solar_rising` | Solar rising | sun | Disabled (integration) | Sun |
| `binary_sensor.terminal_ssh_running` | Running | hassio | Disabled (integration) | Terminal & SSH |

## button

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `button.window_fan_import_consumption_history` | Import consumption history | xtend_tuya | Unknown | Office Window Fan |
| `button.window_fan_reset_consumption` | Reset consumption | xtend_tuya | Unknown | Office Window Fan |

## calendar

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `calendar.private_0114` | — | google | Available | — |
| `calendar.private_0115` | — | google | Available | — |
| `calendar.private_0116` | — | todoist | Available | — |
| `calendar.private_0117` | — | google | Available | — |
| `calendar.private_0118` | — | google | Available | — |
| `calendar.private_0119` | — | google | Available | — |
| `calendar.private_0120` | — | google | Available | — |
| `calendar.private_0121` | — | todoist | Available | — |
| `calendar.private_0122` | — | google | Available | — |
| `calendar.private_0123` | — | google | Disabled (integration) | — |

## conversation

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `conversation.private_0124` | — | — | Unknown | — |

## cover

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `cover.blinds_small_sofa_2` | Blinds Small Sofa | switchbot_cloud | Available | Blinds Small Sofa |
| `cover.blinds_sofa_2` | Blinds Sofa | switchbot_cloud | Available | Blinds Sofa |
| `cover.blinds_tv_2` | Blinds TV | switchbot_cloud | Available | Blinds TV |

## device tracker

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `device_tracker.private_0125` | — | mobile_app | Available | — |
| `device_tracker.private_0126` | — | mobile_app | Available | — |
| `device_tracker.private_0127` | — | mobile_app | Unknown | — |
| `device_tracker.private_0128` | — | mobile_app | Unknown | — |
| `device_tracker.private_0129` | — | mobile_app | Available | — |

## event

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `event.air_quality_monitor_2_device_notifications` | Device notifications | xtend_tuya | Unknown | Air quality monitor 2 |
| `event.air_quality_monitor_device_notifications` | Device notifications | xtend_tuya | Unknown | Air quality monitor |
| `event.air_volume_device_notifications` | Device notifications | xtend_tuya | Unknown | Air volume |
| `event.backup_automatic_backup` | Automatic backup | backup | Available | Backup |
| `event.ceiling_fan_light_device_notifications` | Device notifications | xtend_tuya | Unknown | Ceiling Fan Light |
| `event.diy_device_notifications` | Device notifications | xtend_tuya | Unknown | DIY |
| `event.dual_outlet_1_xmas_device_notifications` | Device notifications | xtend_tuya | Unknown | Dual Outlet 1 (Xmas) |
| `event.entryway_bulb_device_notifications` | Device notifications | xtend_tuya | Unavailable | Entryway Bulb |
| `event.fan_device_notifications` | Device notifications | xtend_tuya | Unknown | Fan |
| `event.hallway_bulb_1_device_notifications` | Device notifications | xtend_tuya | Unavailable | Hallway Bulb 1 |
| `event.hallway_bulb_2_device_notifications` | Device notifications | xtend_tuya | Unavailable | Hallway Bulb 2 |
| `event.hallway_switch_device_notifications` | Device notifications | xtend_tuya | Unknown | Hallway Switch |
| `event.kitchen_counter_lights_device_notifications` | Device notifications | xtend_tuya | Unknown | Kitchen Counter Lights |
| `event.kitchen_light_bulb_1_device_notifications` | Device notifications | xtend_tuya | Unavailable | Kitchen Light Bulb 1 |
| `event.kitchen_light_bulb_2_device_notifications` | Device notifications | xtend_tuya | Unavailable | Kitchen Light Bulb 2 |
| `event.kitchen_light_bulb_3_device_notifications` | Device notifications | xtend_tuya | Unavailable | Kitchen Light Bulb 3 |
| `event.kitchen_light_bulb_4_device_notifications` | Device notifications | xtend_tuya | Unavailable | Kitchen Light Bulb 4 |
| `event.kitchen_sink_light_bulb_device_notifications` | Device notifications | xtend_tuya | Unavailable | Kitchen Sink Light Bulb |
| `event.master_bulb_device_notifications` | Device notifications | xtend_tuya | Unknown | Master Light Bulb |
| `event.master_switch_1_device_notifications` | Device notifications | xtend_tuya | Unknown | Master Switch 1 |
| `event.office_bulb_device_notifications` | Device notifications | xtend_tuya | Unavailable | Office Bulb |
| `event.office_window_fan_device_notifications` | Device notifications | xtend_tuya | Unknown | Office Window Fan |
| `event.quad_kitchen_switch_device_notifications` | Device notifications | xtend_tuya | Unknown | Quad Kitchen Switch |
| `event.register_booster_fan_device_notifications` | Device notifications | xtend_tuya | Unavailable | REGISTER BOOSTER FAN  |
| `event.sink_light_device_notifications` | Device notifications | xtend_tuya | Unknown | Sink Switch Track Light |
| `event.sink_smart_gu10_light_bulb_6_device_notifications` | Device notifications | xtend_tuya | Unknown | Sink Smart GU10 Light Bulb 6 Dining |
| `event.smart_gu10_light_bulb_2_device_notifications` | Device notifications | xtend_tuya | Unknown | Smart GU10 Light Bulb 2 Living |
| `event.smart_gu10_light_bulb_3_device_notifications` | Device notifications | xtend_tuya | Unknown | Smart GU10 Light Bulb 3 Dining |
| `event.smart_gu10_light_bulb_4_device_notifications` | Device notifications | xtend_tuya | Unknown | Smart GU10 Light Bulb 4 Photo Wall |
| `event.smart_gu10_light_bulb_5_device_notifications` | Device notifications | xtend_tuya | Unknown | Smart GU10 Light Bulb 5 Sink |
| `event.smart_gu10_light_bulb_7_device_notifications` | Device notifications | xtend_tuya | Unknown | Smart GU10 Light Bulb 7 Pantry |
| `event.smart_gu10_light_bulb_8_device_notifications` | Device notifications | xtend_tuya | Unknown | Smart GU10 Light Bulb 8 Cooking |
| `event.smart_gu10_light_bulb_device_notifications` | Device notifications | xtend_tuya | Unknown | Smart GU10 Light Bulb Photo Wall |
| `event.track_light_switch_device_notifications` | Device notifications | xtend_tuya | Unknown | Track Light Switch |
| `event.universal_remote_device_notifications` | Device notifications | xtend_tuya | Unknown | Universal Remote |
| `event.wall_switch_cf_device_notifications` | Device notifications | xtend_tuya | Unknown | Wall Switch (CF) |

## fan

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `fan.register_booster_fan` | REGISTER BOOSTER FAN  | xtend_tuya | Unavailable | REGISTER BOOSTER FAN  |

## image

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `image.private_0130` | — | bambu_lab | Available | — |
| `image.private_0131` | — | bambu_lab | Available | — |

## light

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `light.entryway_bulb` | Entryway Bulb | tuya | Unavailable | Entryway Bulb |
| `light.entryway_bulb_2` | Entryway Bulb | xtend_tuya | Unavailable | Entryway Bulb |
| `light.hallway_bulb_1` | Hallway Bulb 1 | tuya | Unavailable | Hallway Bulb 1 |
| `light.hallway_bulb_1_2` | Hallway Bulb 1 | xtend_tuya | Unavailable | Hallway Bulb 1 |
| `light.hallway_bulb_2` | Hallway Bulb 2 | xtend_tuya | Unavailable | Hallway Bulb 2 |
| `light.hallway_light_bulb_2` | Hallway Bulb 2 | tuya | Unavailable | Hallway Bulb 2 |
| `light.hallway_light_bulb_group` | Hallway Light Bulb Group | group | Unavailable | — |
| `light.hallway_switch_light_1` | Light 1 | tuya | Available | Hallway Switch |
| `light.kitchen_2` | Kitchen Light Bulb 2 | tuya | Unavailable | Kitchen Light Bulb 2 |
| `light.kitchen_3` | Kitchen Light Bulb 3 | tuya | Unavailable | Kitchen Light Bulb 3 |
| `light.kitchen_4` | Kitchen Light Bulb 4 | tuya | Unavailable | Kitchen Light Bulb 4 |
| `light.kitchen_bulb_1` | Kitchen Light Bulb 1 | tuya | Unavailable | Kitchen Light Bulb 1 |
| `light.kitchen_light_bulb_1` | Kitchen Light Bulb 1 | xtend_tuya | Unavailable | Kitchen Light Bulb 1 |
| `light.kitchen_light_bulb_2` | Kitchen Light Bulb 2 | xtend_tuya | Unavailable | Kitchen Light Bulb 2 |
| `light.kitchen_light_bulb_3` | Kitchen Light Bulb 3 | xtend_tuya | Unavailable | Kitchen Light Bulb 3 |
| `light.kitchen_light_bulb_4` | Kitchen Light Bulb 4 | xtend_tuya | Unavailable | Kitchen Light Bulb 4 |
| `light.kitchen_light_bulb_group` | Kitchen Light Bulb Group | group | Unavailable | — |
| `light.kitchen_sink` | Kitchen Sink Light Bulb | tuya | Unavailable | Kitchen Sink Light Bulb |
| `light.kitchen_sink_light_bulb` | Kitchen Sink Light Bulb | xtend_tuya | Unavailable | Kitchen Sink Light Bulb |
| `light.lab_light` | Office Bulb | tuya | Unavailable | Office Bulb |
| `light.master_bulb` | Master Light Bulb | xtend_tuya | Unavailable | Master Light Bulb |
| `light.master_light` | Master Light Bulb | tuya | Available | Master Light Bulb |
| `light.private_0132` | — | bambu_lab | Available | — |
| `light.private_0133` | — | bambu_lab | Unknown | — |
| `light.sink_light_light_1` | Light 1 | tuya | Available | Sink Switch Track Light |
| `light.smart_gu10_light_bulb` | Smart GU10 Light Bulb Photo Wall | tuya | Available | Smart GU10 Light Bulb Photo Wall |
| `light.smart_gu10_light_bulb_2` | Smart GU10 Light Bulb 2 Living | tuya | Available | Smart GU10 Light Bulb 2 Living |
| `light.smart_gu10_light_bulb_3` | Smart GU10 Light Bulb 3 Dining | tuya | Available | Smart GU10 Light Bulb 3 Dining |
| `light.smart_gu10_light_bulb_4` | Smart GU10 Light Bulb 4 Photo Wall | tuya | Available | Smart GU10 Light Bulb 4 Photo Wall |
| `light.smart_gu10_light_bulb_5` | Smart GU10 Light Bulb 5 Sink | tuya | Available | Smart GU10 Light Bulb 5 Sink |
| `light.smart_gu10_light_bulb_6` | Sink Smart GU10 Light Bulb 6 Dining | tuya | Available | Sink Smart GU10 Light Bulb 6 Dining |
| `light.smart_gu10_light_bulb_7` | Smart GU10 Light Bulb 7 Pantry | tuya | Available | Smart GU10 Light Bulb 7 Pantry |
| `light.smart_gu10_light_bulb_8` | Smart GU10 Light Bulb 8 Cooking | tuya | Available | Smart GU10 Light Bulb 8 Cooking |

## media player

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `media_player.living_room_speaker` | Living Room speaker | cast | Unavailable | Living Room speaker |
| `media_player.tcl_tv_3` | TCL TV | cast | Unavailable | TCL TV |

## notify

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `notify.private_0134` | — | mobile_app | Unknown | — |
| `notify.private_0135` | — | mobile_app | Available | — |
| `notify.private_0136` | — | mobile_app | Unknown | — |
| `notify.private_0137` | — | mobile_app | Unknown | — |
| `notify.private_0138` | — | mobile_app | Unknown | — |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.air_quality_monitor_2_alarm_duration` | Alarm duration | tuya | Available | Air quality monitor 2 |
| `number.air_quality_monitor_2_alarm_duration_2` | Alarm duration | xtend_tuya | Unavailable | Air quality monitor 2 |
| `number.air_quality_monitor_alarm_duration` | Alarm duration | tuya | Available | Air quality monitor |
| `number.air_quality_monitor_alarm_duration_2` | Alarm duration | xtend_tuya | Unavailable | Air quality monitor |
| `number.ceiling_fan_switch_countdown_1` | Countdown 1 | xtend_tuya | Available | Wall Switch (CF) |
| `number.hallway_switch_maximum_brightness_1` | Maximum brightness 1 | tuya | Available | Hallway Switch |
| `number.hallway_switch_minimum_brightness_1` | Minimum brightness 1 | tuya | Available | Hallway Switch |
| `number.kitchen_counter_light_switch_countdown_1` | Countdown 1 | xtend_tuya | Available | Kitchen Counter Lights |
| `number.kitchen_overhead_light_switch_countdown_1` | Countdown 1 | xtend_tuya | Available | Track Light Switch |
| `number.master_switch_1_countdown_1` | Countdown 1 | xtend_tuya | Available | Master Switch 1 |
| `number.sink_light_maximum_brightness_1` | Maximum brightness 1 | tuya | Available | Sink Switch Track Light |
| `number.sink_light_minimum_brightness_1` | Minimum brightness 1 | tuya | Available | Sink Switch Track Light |
| `number.smart_switch_countdown_1` | Countdown 1 | xtend_tuya | Available | Quad Kitchen Switch |
| `number.smart_switch_countdown_2` | Countdown 2 | xtend_tuya | Available | Quad Kitchen Switch |
| `number.smart_switch_countdown_3` | Countdown 3 | xtend_tuya | Available | Quad Kitchen Switch |
| `number.smart_switch_countdown_4` | Countdown 4 | xtend_tuya | Available | Quad Kitchen Switch |

## person

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `person.private_0139` | — | person | Available | — |

## scene

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `scene.ceiling_fan_light_toggle` | Ceiling Fan Light Toggle | xtend_tuya | Available | Ceiling Fan Light Toggle |
| `scene.ceiling_fan_off` | Ceiling Fan Off | xtend_tuya | Available | Ceiling Fan Off |
| `scene.ceiling_fan_on_scene` | Ceiling Fan On Scene | xtend_tuya | Available | Ceiling Fan On Scene |
| `scene.dining_table_light` | Dining Table Light | xtend_tuya | Unknown | Dining Table Light |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.air_quality_monitor_2_volume` | Volume | tuya | Available | Air quality monitor 2 |
| `select.air_quality_monitor_2_volume_2` | Volume | xtend_tuya | Unavailable | Air quality monitor 2 |
| `select.air_quality_monitor_volume` | Volume | tuya | Available | Air quality monitor |
| `select.air_quality_monitor_volume_2` | Volume | xtend_tuya | Unavailable | Air quality monitor |
| `select.ceiling_fan_switch_indicator_light_mode` | Indicator light mode | xtend_tuya | Unavailable | Wall Switch (CF) |
| `select.ceiling_fan_switch_power_on_behavior` | Power on behavior | xtend_tuya | Unavailable | Wall Switch (CF) |
| `select.dual_outlet_1_xmas_indicator_light_mode` | Indicator light mode | xtend_tuya | Unavailable | Dual Outlet 1 (Xmas) |
| `select.dual_outlet_1_xmas_power_on_behavior` | Power on behavior | xtend_tuya | Unavailable | Dual Outlet 1 (Xmas) |
| `select.dual_switch_corner_indicator_light_mode` | Indicator light mode | tuya | Available | Dual Outlet 1 (Xmas) |
| `select.dual_switch_corner_power_on_behavior` | Power-on behavior | tuya | Available | Dual Outlet 1 (Xmas) |
| `select.hallway_switch_indicator_light_mode` | Indicator light mode | tuya | Available | Hallway Switch |
| `select.hallway_switch_light_1_source_type` | Light 1 source type | tuya | Available | Hallway Switch |
| `select.hallway_switch_power_on_behavior` | Power-on behavior | tuya | Available | Hallway Switch |
| `select.kitchen_counter_light_switch_indicator_light_mode` | Indicator light mode | xtend_tuya | Unavailable | Kitchen Counter Lights |
| `select.kitchen_counter_light_switch_power_on_behavior` | Power on behavior | xtend_tuya | Unavailable | Kitchen Counter Lights |
| `select.kitchen_overhead_light_switch_indicator_light_mode` | Indicator light mode | xtend_tuya | Unavailable | Track Light Switch |
| `select.kitchen_overhead_light_switch_power_on_behavior` | Power on behavior | xtend_tuya | Unavailable | Track Light Switch |
| `select.master_switch_1_indicator_light_mode` | Indicator light mode | tuya | Available | Master Switch 1 |
| `select.master_switch_1_power_on_behavior` | Power-on behavior | tuya | Available | Master Switch 1 |
| `select.sink_light_indicator_light_mode` | Indicator light mode | tuya | Available | Sink Switch Track Light |
| `select.sink_light_light_1_source_type` | Light 1 source type | tuya | Available | Sink Switch Track Light |
| `select.sink_light_power_on_behavior` | Power-on behavior | tuya | Available | Sink Switch Track Light |
| `select.smart_switch_2_indicator_light_mode` | Indicator light mode | tuya | Available | Track Light Switch |
| `select.smart_switch_2_power_on_behavior` | Power-on behavior | tuya | Available | Track Light Switch |
| `select.smart_switch_3_indicator_light_mode` | Indicator light mode | tuya | Available | Kitchen Counter Lights |
| `select.smart_switch_3_power_on_behavior` | Power-on behavior | tuya | Available | Kitchen Counter Lights |
| `select.smart_switch_4_indicator_light_mode` | Indicator light mode | tuya | Available | Wall Switch (CF) |
| `select.smart_switch_4_power_on_behavior` | Power-on behavior | tuya | Available | Wall Switch (CF) |
| `select.smart_switch_indicator_light_mode_2` | Indicator light mode | tuya | Available | Quad Kitchen Switch |
| `select.smart_switch_power_on_behavior_2` | Power-on behavior | tuya | Available | Quad Kitchen Switch |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.ac_c8c10_energy_this_month` | Energy This Month | emporia_vue | Unavailable | AC C4C6C8C10 |
| `sensor.ac_c8c10_energy_today` | Energy Today | emporia_vue | Unavailable | AC C4C6C8C10 |
| `sensor.ac_c8c10_power_minute_average` | Power Minute Average | emporia_vue | Unavailable | AC C4C6C8C10 |
| `sensor.air_quality_monitor_2_battery` | Battery | tuya | Available | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_battery_2` | Battery | xtend_tuya | Unavailable | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_carbon_dioxide` | Carbon dioxide | tuya | Available | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_carbon_dioxide_2` | Carbon dioxide | xtend_tuya | Unavailable | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_formaldehyde` | Formaldehyde | tuya | Available | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_formaldehyde_2` | Formaldehyde | xtend_tuya | Unavailable | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_humidity` | Humidity | tuya | Available | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_humidity_2` | Humidity | xtend_tuya | Unavailable | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_pm2_5` | PM2.5 | tuya | Available | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_pm2_5_2` | PM2.5 | xtend_tuya | Unavailable | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_temperature` | Temperature | tuya | Available | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_temperature_2` | Temperature | xtend_tuya | Unavailable | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_volatile_organic_compounds` | Volatile organic compounds | tuya | Available | Air quality monitor 2 |
| `sensor.air_quality_monitor_2_volatile_organic_compounds_2` | Volatile organic compounds | xtend_tuya | Unavailable | Air quality monitor 2 |
| `sensor.air_quality_monitor_battery` | Battery | tuya | Available | Air quality monitor |
| `sensor.air_quality_monitor_battery_2` | Battery | xtend_tuya | Unavailable | Air quality monitor |
| `sensor.air_quality_monitor_carbon_dioxide` | Carbon Dioxide CO2 | tuya | Available | Air quality monitor |
| `sensor.air_quality_monitor_carbon_dioxide_2` | Carbon dioxide | xtend_tuya | Unavailable | Air quality monitor |
| `sensor.air_quality_monitor_formaldehyde` | Formaldehyde | tuya | Available | Air quality monitor |
| `sensor.air_quality_monitor_formaldehyde_2` | Formaldehyde | xtend_tuya | Unavailable | Air quality monitor |
| `sensor.air_quality_monitor_humidity` | Humidity | tuya | Available | Air quality monitor |
| `sensor.air_quality_monitor_humidity_2` | Humidity | xtend_tuya | Unavailable | Air quality monitor |
| `sensor.air_quality_monitor_pm2_5` | PM2.5 | tuya | Available | Air quality monitor |
| `sensor.air_quality_monitor_pm2_5_2` | PM2.5 | xtend_tuya | Unavailable | Air quality monitor |
| `sensor.air_quality_monitor_temperature` | Temperature | tuya | Available | Air quality monitor |
| `sensor.air_quality_monitor_temperature_2` | Temperature | xtend_tuya | Unavailable | Air quality monitor |
| `sensor.air_quality_monitor_volatile_organic_compounds` | Volatile organic compounds | tuya | Available | Air quality monitor |
| `sensor.air_quality_monitor_volatile_organic_compounds_2` | Volatile organic compounds | xtend_tuya | Unavailable | Air quality monitor |
| `sensor.all_circuits_total_power` | All Circuits Total Power | template | Unavailable | — |
| `sensor.aquarium_dishwasher_total_power` | Aquarium Dishwasher Total Power | template | Unavailable | — |
| `sensor.backup_backup_manager_state` | Backup Manager state | backup | Available | Backup |
| `sensor.backup_last_attempted_automatic_backup` | Last attempted automatic backup | backup | Unknown | Backup |
| `sensor.backup_last_successful_automatic_backup` | Last successful automatic backup | backup | Unknown | Backup |
| `sensor.backup_next_scheduled_automatic_backup` | Next scheduled automatic backup | backup | Unknown | Backup |
| `sensor.bath_hall_living_garage_switches_c1c3_energy_this_month` | Energy This Month | emporia_vue | Unavailable | Bath Hall Living Garage Switches C1C3 |
| `sensor.bath_hall_living_garage_switches_c1c3_energy_today` | Energy Today | emporia_vue | Unavailable | Bath Hall Living Garage Switches C1C3 |
| `sensor.bath_hall_living_garage_switches_c1c3_power_minute_average` | Power Minute Average | emporia_vue | Unavailable | Bath Hall Living Garage Switches C1C3 |
| `sensor.bath_hall_total_power` | Bath Hall Total Power | template | Unavailable | — |
| `sensor.bedrooms_total_power` | Bedrooms Total Power | template | Unavailable | — |
| `sensor.blinds_small_sofa_battery` | Battery | switchbot_cloud | Unknown | Blinds Small Sofa |
| `sensor.blinds_sofa_battery` | Battery | switchbot_cloud | Available | Blinds Sofa |
| `sensor.blinds_tv_battery` | Battery | switchbot_cloud | Unknown | Blinds TV |
| `sensor.dining_tv_total_power` | Dining TV Total Power | template | Unavailable | — |
| `sensor.emporia_api_latency` | Emporia API Latency | emporia_vue | Available | — |
| `sensor.emporia_api_retries` | Emporia API Retries | emporia_vue | Available | — |
| `sensor.emporia_outlet_1_energy_this_month` | Energy This Month | emporia_vue | Available | Reef Light |
| `sensor.emporia_outlet_1_energy_today` | Energy Today | emporia_vue | Available | Reef Light |
| `sensor.emporia_outlet_1_power_minute_average` | Power Minute Average | emporia_vue | Available | Reef Light |
| `sensor.emporia_outlet_2_energy_this_month` | Energy This Month | emporia_vue | Available | Office Computer |
| `sensor.emporia_outlet_2_energy_today` | Energy Today | emporia_vue | Available | Office Computer |
| `sensor.emporia_outlet_2_power_minute_average` | Power Minute Average | emporia_vue | Available | Office Computer |
| `sensor.emporia_outlet_3_energy_this_month` | Energy This Month | emporia_vue | Available | WiFi Smart Home |
| `sensor.emporia_outlet_3_energy_today` | Energy Today | emporia_vue | Available | WiFi Smart Home |
| `sensor.emporia_outlet_3_power_minute_average` | Power Minute Average | emporia_vue | Available | WiFi Smart Home |
| `sensor.emporia_outlet_4_tv_station_energy_this_month` | Energy This Month | emporia_vue | Available | Reef Pump |
| `sensor.emporia_outlet_4_tv_station_energy_today` | Energy Today | emporia_vue | Available | Reef Pump |
| `sensor.emporia_outlet_4_tv_station_power_minute_average` | Power Minute Average | emporia_vue | Available | Reef Pump |
| `sensor.entryway_fan_consumption` | Consumption 1 | xtend_tuya | Available | Office Window Fan |
| `sensor.entryway_fan_consumption_method_b` | Consumption (method B) | xtend_tuya | Disabled (integration) | Office Window Fan |
| `sensor.entryway_fan_current` | Current | xtend_tuya | Disabled (integration) | Office Window Fan |
| `sensor.entryway_fan_daily_consumption` | Daily consumption 1 | xtend_tuya | Available | Office Window Fan |
| `sensor.entryway_fan_monthly_consumption` | Monthly consumption 1 | xtend_tuya | Available | Office Window Fan |
| `sensor.entryway_fan_power` | Power | xtend_tuya | Available | Office Window Fan |
| `sensor.entryway_fan_voltage` | Voltage | xtend_tuya | Disabled (integration) | Office Window Fan |
| `sensor.entryway_fan_yearly_consumption` | Yearly consumption 1 | xtend_tuya | Available | Office Window Fan |
| `sensor.esphome_cpu_percent` | CPU percent | hassio | Disabled (integration) | ESPHome Device Builder |
| `sensor.esphome_memory_percent` | Memory percent | hassio | Disabled (integration) | ESPHome Device Builder |
| `sensor.esphome_newest_version` | Newest version | hassio | Disabled (integration) | ESPHome Device Builder |
| `sensor.esphome_version` | Version | hassio | Disabled (integration) | ESPHome Device Builder |
| `sensor.eufy_security_ws_cpu_percent` | CPU percent | hassio | Disabled (integration) | eufy-security-ws |
| `sensor.eufy_security_ws_memory_percent` | Memory percent | hassio | Disabled (integration) | eufy-security-ws |
| `sensor.eufy_security_ws_newest_version` | Newest version | hassio | Disabled (integration) | eufy-security-ws |
| `sensor.eufy_security_ws_version` | Version | hassio | Disabled (integration) | eufy-security-ws |
| `sensor.extras_total_power` | Extras Total Power | template | Unavailable | — |
| `sensor.file_editor_cpu_percent` | CPU percent | hassio | Disabled (integration) | File editor |
| `sensor.file_editor_memory_percent` | Memory percent | hassio | Disabled (integration) | File editor |
| `sensor.file_editor_newest_version` | Newest version | hassio | Disabled (integration) | File editor |
| `sensor.file_editor_version` | Version | hassio | Disabled (integration) | File editor |
| `sensor.garage_total_power_grouped` | Garage Total Power Grouped | template | Unavailable | — |
| `sensor.get_hacs_cpu_percent` | CPU percent | hassio | Disabled (integration) | Get HACS |
| `sensor.get_hacs_memory_percent` | Memory percent | hassio | Disabled (integration) | Get HACS |
| `sensor.get_hacs_newest_version` | Newest version | hassio | Disabled (integration) | Get HACS |
| `sensor.get_hacs_version` | Version | hassio | Disabled (integration) | Get HACS |
| `sensor.home_assistant_core_cpu_percent` | CPU percent | hassio | Disabled (integration) | Home Assistant Core |
| `sensor.home_assistant_core_memory_percent` | Memory percent | hassio | Disabled (integration) | Home Assistant Core |
| `sensor.home_assistant_host_apparmor_version` | AppArmor version | hassio | Disabled (integration) | Home Assistant Host |
| `sensor.home_assistant_host_disk_free` | Disk free | hassio | Disabled (integration) | Home Assistant Host |
| `sensor.home_assistant_host_disk_total` | Disk total | hassio | Disabled (integration) | Home Assistant Host |
| `sensor.home_assistant_host_disk_used` | Disk used | hassio | Disabled (integration) | Home Assistant Host |
| `sensor.home_assistant_host_os_agent_version` | OS Agent version | hassio | Disabled (integration) | Home Assistant Host |
| `sensor.home_assistant_operating_system_newest_version` | Newest version | hassio | Disabled (integration) | Home Assistant Operating System |
| `sensor.home_assistant_operating_system_version` | Version | hassio | Disabled (integration) | Home Assistant Operating System |
| `sensor.home_assistant_supervisor_cpu_percent` | CPU percent | hassio | Disabled (integration) | Home Assistant Supervisor |
| `sensor.home_assistant_supervisor_memory_percent` | Memory percent | hassio | Disabled (integration) | Home Assistant Supervisor |
| `sensor.hvac_fan_ctrl_c4c6_energy_this_month` | Energy This Month | emporia_vue | Unavailable | Unused Oven C12C14 |
| `sensor.hvac_fan_ctrl_c4c6_energy_today` | Energy Today | emporia_vue | Unavailable | Unused Oven C12C14 |
| `sensor.hvac_fan_ctrl_c4c6_power_minute_average` | Power Minute Average | emporia_vue | Unavailable | Unused Oven C12C14 |
| `sensor.hvac_setpoint_line` | HVAC Setpoint Line | template | Unknown | — |
| `sensor.hvac_total_power` | HVAC Total Power | template | Unavailable | — |
| `sensor.kitchen_total_power` | Kitchen Total Power | template | Unavailable | — |
| `sensor.laundry_utility_total_power` | Laundry Utility Total Power | template | Unavailable | — |
| `sensor.living_garage_total_power` | Living Garage Total Power | template | Unavailable | — |
| `sensor.main_light_current` | Current | tuya | Disabled (integration) | Office Window Fan |
| `sensor.main_light_power` | Power | tuya | Disabled (integration) | Office Window Fan |
| `sensor.main_light_total_energy` | Total energy | tuya | Available | Office Window Fan |
| `sensor.main_light_voltage` | Voltage | tuya | Disabled (integration) | Office Window Fan |
| `sensor.mainsfromgrid_energy_this_month` | Energy This Month | emporia_vue | Available | MainsFromGrid |
| `sensor.mainsfromgrid_energy_today` | Energy Today | emporia_vue | Available | MainsFromGrid |
| `sensor.mainstogrid_energy_this_month` | Energy This Month | emporia_vue | Available | MainsToGrid |
| `sensor.mainstogrid_energy_today` | Energy Today | emporia_vue | Available | MainsToGrid |
| `sensor.matter_server_cpu_percent` | CPU percent | hassio | Disabled (integration) | Matter Server |
| `sensor.matter_server_memory_percent` | Memory percent | hassio | Disabled (integration) | Matter Server |
| `sensor.matter_server_newest_version` | Newest version | hassio | Disabled (integration) | Matter Server |
| `sensor.matter_server_version` | Version | hassio | Disabled (integration) | Matter Server |
| `sensor.moon_phase` | Phase | moon | Available | Moon |
| `sensor.network_total_power` | Network Total Power | template | Unavailable | — |
| `sensor.not_connected_energy_this_month` | Energy This Month | emporia_vue | Available | Dishwasher |
| `sensor.not_connected_energy_this_month_2` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.not_connected_energy_today` | Energy Today | emporia_vue | Available | Dishwasher |
| `sensor.not_connected_energy_today_2` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.not_connected_power_minute_average` | Power Minute Average | emporia_vue | Available | Dishwasher |
| `sensor.not_connected_power_minute_average_2` | Power Minute Average | emporia_vue | Available | Unassigned |
| `sensor.oven_c12c14_energy_this_month` | Energy This Month | emporia_vue | Unavailable | Oven C12C14 |
| `sensor.oven_c12c14_energy_today` | Energy Today | emporia_vue | Unavailable | Oven C12C14 |
| `sensor.oven_c12c14_power_minute_average` | Power Minute Average | emporia_vue | Unavailable | Oven C12C14 |
| `sensor.private_0140` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0141` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0142` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0143` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0144` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0145` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0146` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0147` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0148` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0149` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0150` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0151` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0152` | — | mobile_app | Available | — |
| `sensor.private_0153` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0154` | — | mobile_app | Available | — |
| `sensor.private_0155` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0156` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0157` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0158` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0159` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0160` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0161` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0162` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0163` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0164` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0165` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0166` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0167` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0168` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0169` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0170` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0171` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0172` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0173` | — | mobile_app | Available | — |
| `sensor.private_0174` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0175` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0176` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0177` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0178` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0179` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0180` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0181` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0182` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0183` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0184` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0185` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0186` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0187` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0188` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0189` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0190` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0191` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0192` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0193` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0194` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0195` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0196` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0197` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0198` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0199` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0200` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0201` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0202` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0203` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0204` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0205` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0206` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0207` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0208` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0209` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0210` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0211` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0212` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0213` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0214` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0215` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0216` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0217` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0218` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0219` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0220` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0221` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0222` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0223` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0224` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0225` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0226` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0227` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0228` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0229` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0230` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0231` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0232` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0233` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0234` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0235` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0236` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0237` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0238` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0239` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0240` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0241` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0242` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0243` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0244` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0245` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0246` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0247` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0248` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0249` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0250` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0251` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0252` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0253` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0254` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0255` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0256` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0257` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0258` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0259` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0260` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0261` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0262` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0263` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0264` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0265` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0266` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0267` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0268` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0269` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0270` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0271` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0272` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0273` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0274` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0275` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0276` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0277` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0278` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0279` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0280` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0281` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0282` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0283` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0284` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0285` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0286` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0287` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0288` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0289` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0290` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0291` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0292` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0293` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0294` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0295` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0296` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0297` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0298` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0299` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0300` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0301` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0302` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0303` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0304` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0305` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0306` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0307` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0308` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0309` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0310` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0311` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0312` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0313` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0314` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0315` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0316` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0317` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0318` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0319` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0320` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0321` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0322` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0323` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0324` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0325` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0326` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0327` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0328` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0329` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0330` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0331` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0332` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0333` | — | mobile_app | Available | — |
| `sensor.private_0334` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0335` | — | mobile_app | Available | — |
| `sensor.private_0336` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0337` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0338` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0339` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0340` | — | mobile_app | Available | — |
| `sensor.private_0341` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0342` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0343` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0344` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0345` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0346` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0347` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0348` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0349` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0350` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0351` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0352` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0353` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0354` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0355` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0356` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0357` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0358` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0359` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0360` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0361` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0362` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0363` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0364` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0365` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0366` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0367` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0368` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0369` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0370` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0371` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0372` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0373` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0374` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0375` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0376` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0377` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0378` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0379` | — | bambu_lab | Available | — |
| `sensor.private_0380` | — | bambu_lab | Available | — |
| `sensor.private_0381` | — | bambu_lab | Available | — |
| `sensor.private_0382` | — | bambu_lab | Available | — |
| `sensor.private_0383` | — | bambu_lab | Available | — |
| `sensor.private_0384` | — | bambu_lab | Available | — |
| `sensor.private_0385` | — | bambu_lab | Available | — |
| `sensor.private_0386` | — | bambu_lab | Available | — |
| `sensor.private_0387` | — | bambu_lab | Available | — |
| `sensor.private_0388` | — | bambu_lab | Available | — |
| `sensor.private_0389` | — | bambu_lab | Available | — |
| `sensor.private_0390` | — | bambu_lab | Available | — |
| `sensor.private_0391` | — | bambu_lab | Available | — |
| `sensor.private_0392` | — | bambu_lab | Available | — |
| `sensor.private_0393` | — | bambu_lab | Available | — |
| `sensor.private_0394` | — | bambu_lab | Available | — |
| `sensor.private_0395` | — | bambu_lab | Available | — |
| `sensor.private_0396` | — | bambu_lab | Available | — |
| `sensor.private_0397` | — | bambu_lab | Available | — |
| `sensor.private_0398` | — | bambu_lab | Available | — |
| `sensor.private_0399` | — | bambu_lab | Available | — |
| `sensor.private_0400` | — | bambu_lab | Available | — |
| `sensor.private_0401` | — | bambu_lab | Available | — |
| `sensor.private_0402` | — | bambu_lab | Available | — |
| `sensor.private_0403` | — | bambu_lab | Unavailable | — |
| `sensor.private_0404` | — | bambu_lab | Available | — |
| `sensor.private_0405` | — | bambu_lab | Available | — |
| `sensor.private_0406` | — | bambu_lab | Unavailable | — |
| `sensor.private_0407` | — | bambu_lab | Available | — |
| `sensor.private_0408` | — | bambu_lab | Available | — |
| `sensor.private_0409` | — | bambu_lab | Available | — |
| `sensor.private_0410` | — | bambu_lab | Available | — |
| `sensor.private_0411` | — | bambu_lab | Available | — |
| `sensor.private_0412` | — | bambu_lab | Available | — |
| `sensor.private_0413` | — | bambu_lab | Available | — |
| `sensor.private_0414` | — | bambu_lab | Available | — |
| `sensor.private_0415` | — | bambu_lab | Available | — |
| `sensor.private_0416` | — | bambu_lab | Available | — |
| `sensor.private_0417` | — | bambu_lab | Available | — |
| `sensor.private_0418` | — | bambu_lab | Available | — |
| `sensor.private_0419` | — | bambu_lab | Available | — |
| `sensor.private_0420` | — | bambu_lab | Unknown | — |
| `sensor.private_0421` | — | bambu_lab | Available | — |
| `sensor.private_0422` | — | bambu_lab | Available | — |
| `sensor.private_0423` | — | bambu_lab | Available | — |
| `sensor.private_0424` | — | bambu_lab | Available | — |
| `sensor.private_0425` | — | bambu_lab | Available | — |
| `sensor.private_0426` | — | bambu_lab | Available | — |
| `sensor.private_0427` | — | bambu_lab | Available | — |
| `sensor.private_0428` | — | bambu_lab | Available | — |
| `sensor.private_0429` | — | bambu_lab | Available | — |
| `sensor.private_0430` | — | bambu_lab | Available | — |
| `sensor.private_0431` | — | bambu_lab | Available | — |
| `sensor.private_0432` | — | bambu_lab | Available | — |
| `sensor.private_0433` | — | bambu_lab | Available | — |
| `sensor.private_0434` | — | bambu_lab | Available | — |
| `sensor.private_0435` | — | bambu_lab | Available | — |
| `sensor.private_0436` | — | bambu_lab | Available | — |
| `sensor.private_0437` | — | bambu_lab | Unavailable | — |
| `sensor.private_0438` | — | bambu_lab | Available | — |
| `sensor.private_0439` | — | bambu_lab | Available | — |
| `sensor.private_0440` | — | bambu_lab | Available | — |
| `sensor.private_0441` | — | bambu_lab | Available | — |
| `sensor.private_0442` | — | bambu_lab | Available | — |
| `sensor.private_0445` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0446` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0447` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0448` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0449` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0450` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0451` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0452` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0453` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0454` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0455` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0456` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0457` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0458` | — | mobile_app | Available | — |
| `sensor.private_0459` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0460` | — | mobile_app | Available | — |
| `sensor.private_0461` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0462` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0463` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0464` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0465` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0466` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0467` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0468` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0469` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0470` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0471` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0472` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0473` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0474` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0475` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0476` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0477` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0478` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0479` | — | mobile_app | Available | — |
| `sensor.private_0480` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0481` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0482` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0483` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0484` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0485` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0486` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0487` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0488` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0489` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0490` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0491` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0492` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0493` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0494` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0495` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0496` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0497` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0498` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0499` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0500` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0501` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0502` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0503` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0504` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0505` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0506` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0507` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0508` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0509` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0510` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0511` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0512` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0513` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0514` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0515` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0516` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0517` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0518` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0519` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0520` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0521` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0522` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0523` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0524` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0525` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0526` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0527` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0528` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0529` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0530` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0531` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0532` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0533` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0534` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0535` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0536` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0537` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0538` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0539` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0540` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0541` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0542` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0543` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0544` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0545` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0546` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0547` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0548` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0549` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0550` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0551` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0552` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0553` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0554` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0559` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0560` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0561` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0562` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0563` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0564` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0565` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0566` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0567` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0568` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0569` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0570` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0571` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0572` | — | mobile_app | Available | — |
| `sensor.private_0573` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0574` | — | mobile_app | Available | — |
| `sensor.private_0575` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0576` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0577` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0578` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0579` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0580` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0581` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0582` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0583` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0584` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0585` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0586` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0587` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0588` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0589` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0590` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0591` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0592` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0593` | — | mobile_app | Available | — |
| `sensor.private_0594` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0595` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0596` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0597` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0598` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0599` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0600` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0601` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0602` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0603` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0604` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0605` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0606` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0607` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0608` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0609` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0610` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0611` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0612` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0613` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0614` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0615` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0616` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0617` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0618` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0619` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0620` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0621` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0622` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0623` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0624` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0625` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0626` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0627` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0628` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0629` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0630` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0631` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0632` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0633` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0634` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0635` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0636` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0637` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0638` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0639` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0640` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0641` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0642` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0643` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0644` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0645` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0646` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0647` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0648` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0649` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0650` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0651` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0652` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0653` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0654` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0655` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0656` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0657` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0658` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0659` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0660` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0661` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0662` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0663` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0664` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0665` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0666` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0667` | — | mobile_app | Disabled (integration) | — |
| `sensor.private_0668` | — | mobile_app | Disabled (integration) | — |
| `sensor.reef_dish_vac_micro_c7c9_energy_this_month` | Energy This Month | emporia_vue | Unavailable | Reef Dish Vac Micro C7C9 |
| `sensor.reef_dish_vac_micro_c7c9_energy_today` | Energy Today | emporia_vue | Unavailable | Reef Dish Vac Micro C7C9 |
| `sensor.reef_dish_vac_micro_c7c9_power_minute_average` | Power Minute Average | emporia_vue | Unavailable | Reef Dish Vac Micro C7C9 |
| `sensor.register_booster_fan_temperature` | Temperature | xtend_tuya | Unavailable | REGISTER BOOSTER FAN  |
| `sensor.scrypted_cpu_percent` | CPU percent | hassio | Disabled (integration) | Scrypted |
| `sensor.scrypted_memory_percent` | Memory percent | hassio | Disabled (integration) | Scrypted |
| `sensor.scrypted_newest_version` | Newest version | hassio | Disabled (integration) | Scrypted |
| `sensor.scrypted_version` | Version | hassio | Disabled (integration) | Scrypted |
| `sensor.secondary_feed_total_power` | Secondary Feed Total Power | template | Unavailable | — |
| `sensor.smart_outlets_total_power` | Smart Outlets Total Power | template | Unavailable | — |
| `sensor.sun_next_dawn` | Next dawn | sun | Available | Sun |
| `sensor.sun_next_dusk` | Next dusk | sun | Available | Sun |
| `sensor.sun_next_midnight` | Next midnight | sun | Available | Sun |
| `sensor.sun_next_noon` | Next noon | sun | Available | Sun |
| `sensor.sun_next_rising` | Next rising | sun | Available | Sun |
| `sensor.sun_next_setting` | Next setting | sun | Available | Sun |
| `sensor.sun_solar_azimuth` | Solar azimuth | sun | Disabled (integration) | Sun |
| `sensor.sun_solar_elevation` | Solar elevation | sun | Disabled (integration) | Sun |
| `sensor.terminal_ssh_cpu_percent` | CPU percent | hassio | Disabled (integration) | Terminal & SSH |
| `sensor.terminal_ssh_memory_percent` | Memory percent | hassio | Disabled (integration) | Terminal & SSH |
| `sensor.terminal_ssh_newest_version` | Newest version | hassio | Disabled (integration) | Terminal & SSH |
| `sensor.terminal_ssh_version` | Version | hassio | Disabled (integration) | Terminal & SSH |
| `sensor.time` | Time | time_date | Available | — |
| `sensor.todoist_list` | todoist_list | — | Unknown | — |
| `sensor.totalusage_energy_this_month` | Energy This Month | emporia_vue | Available | TotalUsage |
| `sensor.totalusage_energy_today` | Energy Today | emporia_vue | Available | TotalUsage |
| `sensor.totalusage_power_minute_average` | Power Minute Average | emporia_vue | Available | TotalUsage |
| `sensor.unsorted_total_power` | Unsorted Total Power | template | Unavailable | — |
| `sensor.window_fan_consumption_1_method_b` | Consumption 1 (method B) | xtend_tuya | Disabled (integration) | Office Window Fan |
| `sensor.window_fan_daily_consumption_1_method_b` | Daily consumption 1 (method B) | xtend_tuya | Disabled (integration) | Office Window Fan |
| `sensor.window_fan_monthly_consumption_1_method_b` | Monthly consumption 1 (method B) | xtend_tuya | Disabled (integration) | Office Window Fan |
| `sensor.window_fan_yearly_consumption_1_method_b` | Yearly consumption 1 (method B) | xtend_tuya | Disabled (integration) | Office Window Fan |

## siren

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `siren.air_quality_monitor` | Siren | tuya | Available | Air quality monitor |
| `siren.air_quality_monitor_2` | Siren | tuya | Available | Air quality monitor 2 |
| `siren.air_quality_monitor_2_2` | Air quality monitor 2 | xtend_tuya | Unavailable | Air quality monitor 2 |
| `siren.air_quality_monitor_3` | Air quality monitor | xtend_tuya | Unavailable | Air quality monitor |

## stt

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `stt.private_0669` | — | cloud | Unknown | — |

## sun

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sun.sun` | Sun | — | Available | — |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.ai_agent_ha_pre_release` | Pre-release | hacs | Disabled (integration) | AI Agent HA |
| `switch.apex_pre_release` | Pre-release | hacs | Disabled (integration) | Apex |
| `switch.apexcharts_card_pre_release` | Pre-release | hacs | Disabled (integration) | apexcharts-card |
| `switch.auto_entities_pre_release` | Pre-release | hacs | Disabled (integration) | auto-entities |
| `switch.bambu_lab_pre_release` | Pre-release | hacs | Disabled (integration) | Bambu Lab |
| `switch.bubble_card_pre_release` | Pre-release | hacs | Disabled (integration) | Bubble Card |
| `switch.bubble_card_tools_pre_release` | Pre-release | hacs | Disabled (integration) | Bubble Card Tools |
| `switch.calendar_card_pro_pre_release` | Pre-release | hacs | Disabled (integration) | Calendar Card Pro |
| `switch.calendar_heatmap_card_pre_release` | Pre-release | hacs | Disabled (integration) | Calendar Heatmap Card |
| `switch.canary_pre_release` | Pre-release | hacs | Disabled (integration) | Canary |
| `switch.card_mod_pre_release` | Pre-release | hacs | Disabled (integration) | card-mod |
| `switch.ceiling_fan` | Ceiling Fan | smartthings | Available | Ceiling Fan |
| `switch.ceiling_fan_switch_switch_1` | Switch 1 | xtend_tuya | Unavailable | Wall Switch (CF) |
| `switch.chores4kids_pre_release` | Pre-release | hacs | Disabled (integration) | Chores4Kids |
| `switch.chores4kids_pre_release_2` | Pre-release | hacs | Disabled (integration) | Chores4Kids |
| `switch.counter` | Counter | smartthings | Available | Counter |
| `switch.custom_features_for_home_assistant_cards_pre_release` | Pre-release | hacs | Disabled (integration) | Custom Features for Home Assistant Cards |
| `switch.day_gecko_light` | Day Gecko Light | smartthings | Unavailable | Day Gecko Light |
| `switch.dreame_vacuum_map_card_pre_release` | Pre-release | hacs | Disabled (integration) | Dreame Vacuum Map Card |
| `switch.dreame_vacuum_pre_release` | Pre-release | hacs | Disabled (integration) | Dreame Vacuum |
| `switch.dreo_smart_device_integration_pre_release` | Pre-release | hacs | Disabled (integration) | Dreo Smart Device Integration |
| `switch.dual_outlet_1_xmas` | Dual Outlet 1 (Xmas) | smartthings | Available | Dual Outlet 1 (Xmas) |
| `switch.dual_outlet_1_xmas_child_lock` | Child lock | xtend_tuya | Unavailable | Dual Outlet 1 (Xmas) |
| `switch.dual_outlet_1_xmas_socket_1` | Socket 1 | xtend_tuya | Unavailable | Dual Outlet 1 (Xmas) |
| `switch.dual_outlet_1_xmas_socket_2` | Socket 2 | xtend_tuya | Unavailable | Dual Outlet 1 (Xmas) |
| `switch.dual_switch_corner_child_lock` | Child lock | tuya | Available | Dual Outlet 1 (Xmas) |
| `switch.dual_switch_corner_socket_1` | Socket 1 | tuya | Available | Dual Outlet 1 (Xmas) |
| `switch.dual_switch_corner_socket_2` | Socket 2 | tuya | Available | Dual Outlet 1 (Xmas) |
| `switch.emporia_outlet_1` | Reef Light | emporia_vue | Available | Reef Light |
| `switch.emporia_outlet_2` | Office Computer | emporia_vue | Available | Office Computer |
| `switch.emporia_outlet_3` | WiFi Smart Home | emporia_vue | Available | WiFi Smart Home |
| `switch.emporia_outlet_4_tv_station` | Reef Pump | emporia_vue | Available | Reef Pump |
| `switch.emporia_vue_pre_release` | Pre-release | hacs | Disabled (integration) | Emporia Vue |
| `switch.energy_sankey_card_pre_release` | Pre-release | hacs | Disabled (integration) | Energy Sankey Card |
| `switch.entity_progress_card_pre_release` | Pre-release | hacs | Disabled (integration) | Entity Progress Card |
| `switch.entryway_fan_socket_1` | Socket 1 | xtend_tuya | Unavailable | Office Window Fan |
| `switch.esphome_device_builder` | — | hassio | Disabled (integration) | ESPHome Device Builder |
| `switch.eufy_security_pre_release` | Pre-release | hacs | Disabled (integration) | Eufy Security |
| `switch.eufy_security_ws` | — | hassio | Disabled (integration) | eufy-security-ws |
| `switch.file_editor` | — | hassio | Disabled (integration) | File editor |
| `switch.frigate_pre_release` | Pre-release | hacs | Disabled (integration) | Frigate |
| `switch.gauge_card_pro_pre_release` | Pre-release | hacs | Disabled (integration) | Gauge Card Pro |
| `switch.gecko_lights` | Gecko Lights | smartthings | Unavailable | Gecko Lights |
| `switch.get_hacs` | — | hassio | Disabled (integration) | Get HACS |
| `switch.google_home_pre_release` | Pre-release | hacs | Disabled (integration) | Google Home |
| `switch.ha_floorplan_your_imagination_just_became_the_new_limit_pre_release` | Pre-release | hacs | Disabled (integration) | ha-floorplan 🖌🎨 \| Your imagination (almost) defines the limits |
| `switch.heater_day` | Heater Day | smartthings | Available | Heater Day |
| `switch.heater_leo` | Heater Leo | smartthings | Available | Heater Leo |
| `switch.heaters_geckos` | Heaters Geckos | smartthings | Available | Heaters Geckos |
| `switch.home_assistant_media_card_pre_release` | Pre-release | hacs | Disabled (integration) | Media Viewer Card |
| `switch.home_connect_alt_pre_release` | Pre-release | hacs | Disabled (integration) | Home Connect Alt |
| `switch.improved_shopping_list_card_pre_release` | Pre-release | hacs | Disabled (integration) | Improved Shopping List Card |
| `switch.ingress_webpage_card_pre_release` | Pre-release | hacs | Disabled (integration) | Ingress webpage card |
| `switch.kiosk_mode_pre_release` | Pre-release | hacs | Disabled (integration) | Kiosk Mode |
| `switch.kitchen_counter_light_switch_switch_1` | Switch 1 | xtend_tuya | Unavailable | Kitchen Counter Lights |
| `switch.kitchen_overhead_light_switch_switch_1` | Switch 1 | xtend_tuya | Unavailable | Track Light Switch |
| `switch.layout_card_pre_release` | Pre-release | hacs | Disabled (integration) | layout-card |
| `switch.leopard_gecko_light` | Leopard Gecko Light | smartthings | Unavailable | Leopard Gecko Light |
| `switch.llm_vision_pre_release` | Pre-release | hacs | Disabled (integration) | LLM Vision |
| `switch.local_tuya_pre_release` | Pre-release | hacs | Disabled (integration) | Local Tuya |
| `switch.lovelace_google_keep_card_pre_release` | Pre-release | hacs | Disabled (integration) | Lovelace Google Keep Card |
| `switch.lovelace_lock_card_pre_release` | Pre-release | hacs | Disabled (integration) | Lovelace Lock Card |
| `switch.mail_and_packages_pre_release` | Pre-release | hacs | Disabled (integration) | Mail and Packages |
| `switch.main_light_socket_1` | Socket 1 | tuya | Available | Office Window Fan |
| `switch.master_switch_1` | Master Switch 1 | smartthings | Unavailable | Master Switch 1 |
| `switch.master_switch_1_switch_1` | Switch 1 | tuya | Available | Master Switch 1 |
| `switch.matter_server` | — | hassio | Disabled (integration) | Matter Server |
| `switch.media_index_pre_release` | Pre-release | hacs | Disabled (integration) | Media Index |
| `switch.midea_air_appliances_lan_pre_release` | Pre-release | hacs | Disabled (integration) | Midea Air Appliances (LAN) |
| `switch.mini_climate_card_pre_release` | Pre-release | hacs | Disabled (integration) | mini climate card |
| `switch.mini_graph_card_pre_release` | Pre-release | hacs | Disabled (integration) | mini-graph-card |
| `switch.modern_circular_gauge_pre_release` | Pre-release | hacs | Disabled (integration) | Modern Circular Gauge |
| `switch.mushroom_dashboard_strategy_pre_release` | Pre-release | hacs | Disabled (integration) | Mushroom Dashboard Strategy |
| `switch.mushroom_pre_release` | Pre-release | hacs | Disabled (integration) | Mushroom |
| `switch.navbar_card_pre_release` | Pre-release | hacs | Disabled (integration) | Navbar card |
| `switch.nspanel_lovelace_ui_backend_pre_release` | Pre-release | hacs | Disabled (integration) | NSPanel Lovelace UI Backend |
| `switch.outlet_filter` | Outlet(Filter) | smartthings | Available | Outlet(Filter) |
| `switch.overlay_pro_card_pre_release` | Pre-release | hacs | Disabled (integration) | Overlay Pro Card |
| `switch.passive_ble_monitor_integration_pre_release` | Pre-release | hacs | Disabled (integration) | Passive BLE monitor integration |
| `switch.plotly_graph_card_pre_release` | Pre-release | hacs | Disabled (integration) | Plotly Graph Card |
| `switch.power_flow_card_plus_pre_release` | Pre-release | hacs | Disabled (integration) | Power Flow Card Plus |
| `switch.powertodoist_card_pre_release` | Pre-release | hacs | Disabled (integration) | PowerTodoist Card |
| `switch.private_0672` | — | bambu_lab | Available | — |
| `switch.pulse_photo_card_pre_release` | Pre-release | hacs | Disabled (integration) | Pulse Photo Card |
| `switch.raptor_bar_next_card_pre_release` | Pre-release | hacs | Disabled (integration) | raptor bar next card |
| `switch.register_booster_fan_child_lock` | Child lock | xtend_tuya | Unavailable | REGISTER BOOSTER FAN  |
| `switch.register_booster_fan_switch` | Switch | xtend_tuya | Unavailable | REGISTER BOOSTER FAN  |
| `switch.sankey_chart_card_pre_release` | Pre-release | hacs | Disabled (integration) | Sankey Chart Card |
| `switch.scrypted` | — | hassio | Disabled (integration) | Scrypted |
| `switch.simple_swipe_card_pre_release` | Pre-release | hacs | Disabled (integration) | Simple Swipe Card |
| `switch.simple_timer_card_pre_release` | Pre-release | hacs | Disabled (integration) | Simple Timer Card |
| `switch.skylight_calendar_card_pre_release` | Pre-release | hacs | Disabled (integration) | Daylight Calendar Card |
| `switch.slider_entity_row_pre_release` | Pre-release | hacs | Disabled (integration) | slider-entity-row |
| `switch.smart_switch_2_switch_1` | Switch 1 | tuya | Available | Track Light Switch |
| `switch.smart_switch_3_switch_1` | Switch 1 | tuya | Available | Kitchen Counter Lights |
| `switch.smart_switch_4_switch_1` | Switch 1 | tuya | Available | Wall Switch (CF) |
| `switch.smart_switch_switch_1_2` | Switch 1 | tuya | Available | Quad Kitchen Switch |
| `switch.smart_switch_switch_2_2` | Switch 2 | tuya | Available | Quad Kitchen Switch |
| `switch.smart_switch_switch_3_2` | Switch 3 | tuya | Available | Quad Kitchen Switch |
| `switch.smart_switch_switch_4_2` | Switch 4 | tuya | Available | Quad Kitchen Switch |
| `switch.stack_in_card_pre_release` | Pre-release | hacs | Disabled (integration) | Stack In Card |
| `switch.surveillance_card_pre_release` | Pre-release | hacs | Disabled (integration) | surveillance-card |
| `switch.switchbot_remote_ir_pre_release` | Pre-release | hacs | Disabled (integration) | SwitchBot Remote IR |
| `switch.switchs1` | switchs1 | smartthings | Available | switchs1 |
| `switch.terminal_ssh` | — | hassio | Disabled (integration) | Terminal & SSH |
| `switch.todoist_card_pre_release` | Pre-release | hacs | Disabled (integration) | Todoist Card |
| `switch.todoist_task_list_pre_release` | Pre-release | hacs | Disabled (integration) | todoist-task-list |
| `switch.tp_link_deco_pre_release` | Pre-release | hacs | Disabled (integration) | TP-Link Deco |
| `switch.tp_link_router_card_pre_release` | Pre-release | hacs | Disabled (integration) | TP-Link Router Card |
| `switch.tp_link_router_pre_release` | Pre-release | hacs | Disabled (integration) | TP-Link Router |
| `switch.unused` | Unused | smartthings | Available | Unused |
| `switch.vacuum_card_pre_release` | Pre-release | hacs | Disabled (integration) | Vacuum Card |
| `switch.vertical_stack_in_card_pre_release` | Pre-release | hacs | Disabled (integration) | Vertical Stack In Card |
| `switch.view_assist_companion_app_pre_release` | Pre-release | hacs | Disabled (integration) | View Assist Companion App |
| `switch.wallpanel_pre_release` | Pre-release | hacs | Disabled (integration) | WallPanel |
| `switch.webrtc_camera_pre_release` | Pre-release | hacs | Disabled (integration) | WebRTC Camera |
| `switch.windy_card_pre_release` | Pre-release | hacs | Disabled (integration) | Windy Card |
| `switch.xiaomi_vacuum_map_card_pre_release` | Pre-release | hacs | Disabled (integration) | Xiaomi Vacuum Map Card |
| `switch.xmas_tree` | Xmas Tree | smartthings | Available | Xmas Tree |
| `switch.xtend_tuya_pre_release` | Pre-release | hacs | Disabled (integration) | Xtend Tuya |

## todo

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `todo.private_0673` | — | todoist | Available | — |
| `todo.private_0674` | — | google_tasks | Disabled (user) | — |
| `todo.private_0675` | — | google_tasks | Available | — |
| `todo.private_0676` | — | google_tasks | Available | — |
| `todo.private_0677` | — | shopping_list | Available | — |
| `todo.private_0678` | — | todoist | Available | — |

## tts

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `tts.private_0679` | — | cloud | Unknown | — |

## update

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `update.ai_agent_ha_update` | Update | hacs | Disabled (device) | AI Agent HA |
| `update.apex_update` | Update | hacs | Available | Apex |
| `update.apexcharts_card_update` | Update | hacs | Available | apexcharts-card |
| `update.auto_entities_update` | Update | hacs | Available | auto-entities |
| `update.bambu_lab_update` | Update | hacs | Available | Bambu Lab |
| `update.bubble_card_tools_update` | Update | hacs | Available | Bubble Card Tools |
| `update.bubble_card_update` | Update | hacs | Available | Bubble Card |
| `update.calendar_card_pro_update` | Update | hacs | Available | Calendar Card Pro |
| `update.calendar_heatmap_card_update` | Update | hacs | Available | Calendar Heatmap Card |
| `update.canary_update` | Update | hacs | Available | Canary |
| `update.card_mod_update` | Update | hacs | Available | card-mod |
| `update.chores4kids_update` | Update | hacs | Available | Chores4Kids |
| `update.chores4kids_update_2` | Update | hacs | Available | Chores4Kids |
| `update.custom_features_for_home_assistant_cards_update` | Update | hacs | Available | Custom Features for Home Assistant Cards |
| `update.dreame_vacuum_map_card_update` | Update | hacs | Available | Dreame Vacuum Map Card |
| `update.dreame_vacuum_update` | Update | hacs | Available | Dreame Vacuum |
| `update.dreo_smart_device_integration_update` | Update | hacs | Available | Dreo Smart Device Integration |
| `update.emporia_vue_update` | Update | hacs | Available | Emporia Vue |
| `update.energy_sankey_card_update` | Update | hacs | Available | Energy Sankey Card |
| `update.entity_progress_card_update` | Update | hacs | Available | Entity Progress Card |
| `update.esphome_update` | Update | hassio | Available | ESPHome Device Builder |
| `update.eufy_security_update` | Update | hacs | Available | Eufy Security |
| `update.eufy_security_ws_update` | Update | hassio | Available | eufy-security-ws |
| `update.file_editor_update` | Update | hassio | Available | File editor |
| `update.frigate_update` | Update | hacs | Available | Frigate |
| `update.gauge_card_pro_update` | Update | hacs | Available | Gauge Card Pro |
| `update.get_hacs_update` | Update | hassio | Available | Get HACS |
| `update.google_home_update` | Update | hacs | Available | Google Home |
| `update.ha_floorplan_your_imagination_just_became_the_new_limit_update` | Update | hacs | Available | ha-floorplan 🖌🎨 \| Your imagination (almost) defines the limits |
| `update.home_assistant_core_update` | Update | hassio | Available | Home Assistant Core |
| `update.home_assistant_media_card_update` | Update | hacs | Available | Media Viewer Card |
| `update.home_assistant_operating_system_update` | Update | hassio | Available | Home Assistant Operating System |
| `update.home_assistant_supervisor_update` | Update | hassio | Available | Home Assistant Supervisor |
| `update.home_connect_alt_update` | Update | hacs | Available | Home Connect Alt |
| `update.improved_shopping_list_card_update` | Update | hacs | Available | Improved Shopping List Card |
| `update.ingress_webpage_card_update` | Update | hacs | Available | Ingress webpage card |
| `update.kiosk_mode_update` | Update | hacs | Available | Kiosk Mode |
| `update.layout_card_update` | Update | hacs | Available | layout-card |
| `update.llm_vision_update` | Update | hacs | Disabled (device) | LLM Vision |
| `update.local_tuya_update` | Update | hacs | Available | Local Tuya |
| `update.lovelace_google_keep_card_update` | Update | hacs | Available | Lovelace Google Keep Card |
| `update.lovelace_lock_card_update` | Update | hacs | Available | Lovelace Lock Card |
| `update.mail_and_packages_update` | Update | hacs | Available | Mail and Packages |
| `update.matter_server_update` | Update | hassio | Available | Matter Server |
| `update.media_index_update` | Update | hacs | Available | Media Index |
| `update.midea_air_appliances_lan_update` | Update | hacs | Available | Midea Air Appliances (LAN) |
| `update.mini_climate_card_update` | Update | hacs | Available | mini climate card |
| `update.mini_graph_card_update` | Update | hacs | Disabled (device) | mini-graph-card |
| `update.modern_circular_gauge_update` | Update | hacs | Disabled (device) | Modern Circular Gauge |
| `update.mushroom_dashboard_strategy_update` | Update | hacs | Available | Mushroom Dashboard Strategy |
| `update.mushroom_update` | Update | hacs | Available | Mushroom |
| `update.navbar_card_update` | Update | hacs | Disabled (device) | Navbar card |
| `update.nspanel_lovelace_ui_backend_update` | Update | hacs | Available | NSPanel Lovelace UI Backend |
| `update.overlay_pro_card_update` | Update | hacs | Available | Overlay Pro Card |
| `update.passive_ble_monitor_integration_update` | Update | hacs | Available | Passive BLE monitor integration |
| `update.plotly_graph_card_update` | Update | hacs | Available | Plotly Graph Card |
| `update.power_flow_card_plus_update` | Update | hacs | Available | Power Flow Card Plus |
| `update.powertodoist_card_update` | Update | hacs | Available | PowerTodoist Card |
| `update.pulse_photo_card_update` | Update | hacs | Available | Pulse Photo Card |
| `update.raptor_bar_next_card_update` | Update | hacs | Available | raptor bar next card |
| `update.sankey_chart_card_update` | Update | hacs | Available | Sankey Chart Card |
| `update.scrypted_update` | Update | hassio | Available | Scrypted |
| `update.simple_swipe_card_update` | Update | hacs | Available | Simple Swipe Card |
| `update.simple_timer_card_update` | Update | hacs | Available | Simple Timer Card |
| `update.skylight_calendar_card_update` | Update | hacs | Available | Daylight Calendar Card |
| `update.slider_entity_row_update` | Update | hacs | Available | slider-entity-row |
| `update.stack_in_card_update` | Update | hacs | Available | Stack In Card |
| `update.surveillance_card_update` | Update | hacs | Available | surveillance-card |
| `update.switchbot_remote_ir_update` | Update | hacs | Disabled (device) | SwitchBot Remote IR |
| `update.terminal_ssh_update` | Update | hassio | Available | Terminal & SSH |
| `update.todoist_card_update` | Update | hacs | Available | Todoist Card |
| `update.todoist_task_list_update` | Update | hacs | Available | todoist-task-list |
| `update.tp_link_deco_update` | Update | hacs | Available | TP-Link Deco |
| `update.tp_link_router_card_update` | Update | hacs | Available | TP-Link Router Card |
| `update.tp_link_router_update` | Update | hacs | Available | TP-Link Router |
| `update.vacuum_card_update` | Update | hacs | Available | Vacuum Card |
| `update.vertical_stack_in_card_update` | Update | hacs | Available | Vertical Stack In Card |
| `update.view_assist_companion_app_update` | Update | hacs | Available | View Assist Companion App |
| `update.wallpanel_update` | Update | hacs | Available | WallPanel |
| `update.webrtc_camera_update` | Update | hacs | Available | WebRTC Camera |
| `update.windy_card_update` | Update | hacs | Available | Windy Card |
| `update.xiaomi_vacuum_map_card_update` | Update | hacs | Available | Xiaomi Vacuum Map Card |
| `update.xtend_tuya_update` | Update | hacs | Available | Xtend Tuya |

## weather

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `weather.forecast_ishioho_city` | ishioho city | met | Available | Forecast |

## zone

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `zone.private_0681` | — | — | Available | — |
