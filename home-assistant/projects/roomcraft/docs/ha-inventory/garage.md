# Garage — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 69 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 14 |
| [button](#button) | 6 |
| [camera](#camera) | 1 |
| [cover](#cover) | 2 |
| [event](#event) | 1 |
| [image](#image) | 1 |
| [number](#number) | 1 |
| [select](#select) | 7 |
| [sensor](#sensor) | 19 |
| [switch](#switch) | 17 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.garage_camera_crying_detected` | Crying detected | eufy_security | Available | Garage Camera |
| `binary_sensor.garage_camera_debug_device` | Debug (device) | eufy_security | Available | Garage Camera |
| `binary_sensor.garage_camera_dog_detected` | Dog detected | eufy_security | Disabled (integration) | Garage Camera |
| `binary_sensor.garage_camera_dog_lick_detected` | Dog Lick detected | eufy_security | Disabled (integration) | Garage Camera |
| `binary_sensor.garage_camera_dog_poop_detected` | Dog Poop detected | eufy_security | Disabled (integration) | Garage Camera |
| `binary_sensor.garage_camera_identity_person_detected` | Identity Person detected | eufy_security | Disabled (integration) | Garage Camera |
| `binary_sensor.garage_camera_motion_detected` | Motion detected | eufy_security | Available | Garage Camera |
| `binary_sensor.garage_camera_person_detected` | Person detected | eufy_security | Available | Garage Camera |
| `binary_sensor.garage_camera_pet_detected` | Pet detected | eufy_security | Available | Garage Camera |
| `binary_sensor.garage_camera_snooze` | Snooze | eufy_security | Available | Garage Camera |
| `binary_sensor.garage_camera_sound_detected` | Sound detected | eufy_security | Available | Garage Camera |
| `binary_sensor.garage_camera_stranger_person_detected` | Stranger Person detected | eufy_security | Disabled (integration) | Garage Camera |
| `binary_sensor.garage_camera_vehicle_detected` | Vehicle detected | eufy_security | Disabled (integration) | Garage Camera |
| `binary_sensor.garage_door_door_contact` | Door contact | xtend_tuya | Available | Garage door  |

## button

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `button.garage_camera_reset_alarm` | Reset Alarm | eufy_security | Disabled (integration) | Garage Camera |
| `button.garage_camera_start_p2p_stream` | Start P2P Stream | eufy_security | Disabled (integration) | Garage Camera |
| `button.garage_camera_start_rtsp_stream` | Start RTSP Stream | eufy_security | Disabled (integration) | Garage Camera |
| `button.garage_camera_stop_p2p_stream` | Stop P2P Stream | eufy_security | Disabled (integration) | Garage Camera |
| `button.garage_camera_stop_rtsp_stream` | Stop RTSP Stream | eufy_security | Disabled (integration) | Garage Camera |
| `button.garage_camera_trigger_alarm` | Trigger Alarm | eufy_security | Disabled (integration) | Garage Camera |

## camera

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `camera.garage_camera` | Garage Camera | eufy_security | Available | Garage Camera |

## cover

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `cover.garage_door_door` | Door 1 | tuya | Disabled (user) | Garage door  |
| `cover.garage_door_door_1` | Door 1 | xtend_tuya | Available | Garage door  |

## event

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `event.garage_door_device_notifications` | Device notifications | xtend_tuya | Unknown | Garage door  |

## image

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `image.garage_camera_event_image` | Event Image | eufy_security | Unknown | Garage Camera |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.garage_camera_motion_detection_sensitivity` | Motion Detection Sensitivity | eufy_security | Available | Garage Camera |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.garage_camera_light_brightness_manual` | Light Brightness Manual | eufy_security | Available | Garage Camera |
| `select.garage_camera_nightvision` | Nightvision | eufy_security | Available | Garage Camera |
| `select.garage_camera_power_source` | Power Source | eufy_security | Disabled (integration) | Garage Camera |
| `select.garage_camera_power_working_mode` | Power Working Mode | eufy_security | Disabled (integration) | Garage Camera |
| `select.garage_camera_speaker_volume` | Speaker Volume | eufy_security | Available | Garage Camera |
| `select.garage_camera_video_recording_quality` | Video Recording Quality | eufy_security | Available | Garage Camera |
| `select.garage_camera_video_streaming_quality` | Video Streaming Quality | eufy_security | Available | Garage Camera |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.garage_camera_audio_queue_size` | Audio Queue Size | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_battery_percentage` | Battery percentage | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_battery_temperature` | Battery Temperature | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_charging_status` | Charging Status | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_person_name` | Person Name | eufy_security | Available | Garage Camera |
| `sensor.garage_camera_rtsp_stream_url` | RTSP Stream URL | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_snooze_start_time` | Snooze Start Time | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_snooze_time` | Snooze Time | eufy_security | Available | Garage Camera |
| `sensor.garage_camera_stream_provider` | Stream Provider | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_stream_status` | Stream Status | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_stream_url` | Stream URL | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_video_queue_size` | Video Queue Size | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_wifi_rssi` | Wifi RSSI | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_camera_wifi_signal_level` | Wifi Signal Level | eufy_security | Disabled (integration) | Garage Camera |
| `sensor.garage_door_cover_controls_inverted` | Cover controls inverted | xtend_tuya | Unavailable | Garage door  |
| `sensor.garage_door_cover_status_inverted` | Cover status inverted | xtend_tuya | Unavailable | Garage door  |
| `sensor.garage_energy_this_month` | Energy This Month | emporia_vue | Available | Unassigned |
| `sensor.garage_energy_today` | Energy Today | emporia_vue | Available | Unassigned |
| `sensor.garage_power_minute_average` | Power Minute Average | emporia_vue | Available | Unassigned |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.garage_camera_audio_recording` | Audio Recording | eufy_security | Available | Garage Camera |
| `switch.garage_camera_camera_enabled` | Camera enabled | eufy_security | Available | Garage Camera |
| `switch.garage_camera_light` | Light | eufy_security | Available | Garage Camera |
| `switch.garage_camera_light_enable` | Light Enable | eufy_security | Available | Garage Camera |
| `switch.garage_camera_motion_detection` | Motion Detection | eufy_security | Available | Garage Camera |
| `switch.garage_camera_motion_detection_type_all_other_motions` | Motion Detection Type All Other Motions | eufy_security | Available | Garage Camera |
| `switch.garage_camera_motion_detection_type_human` | Motion Detection Type Human | eufy_security | Available | Garage Camera |
| `switch.garage_camera_motion_detection_type_human_recognition` | Motion Detection Type Human Recognition | eufy_security | Available | Garage Camera |
| `switch.garage_camera_motion_detection_type_pet` | Motion Detection Type Pet | eufy_security | Available | Garage Camera |
| `switch.garage_camera_motion_detection_type_vehicle` | Motion Detection Type Vehicle | eufy_security | Available | Garage Camera |
| `switch.garage_camera_rtsp_stream` | RTSP Stream | eufy_security | Available | Garage Camera |
| `switch.garage_camera_speaker` | Speaker | eufy_security | Available | Garage Camera |
| `switch.garage_camera_status_led` | Status LED | eufy_security | Available | Garage Camera |
| `switch.garage_door_invert_cover_controls` | Invert cover controls | xtend_tuya | Unavailable | Garage door  |
| `switch.garage_door_invert_cover_status` | Invert cover status | xtend_tuya | Unavailable | Garage door  |
| `switch.garage_door_switch_1` | Switch 1 | xtend_tuya | Available | Garage door  |
| `switch.private_0671` | — | eufy_security | Available | — |
