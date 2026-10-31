# Entryway — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 43 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 9 |
| [button](#button) | 4 |
| [camera](#camera) | 1 |
| [image](#image) | 1 |
| [lock](#lock) | 1 |
| [number](#number) | 2 |
| [select](#select) | 4 |
| [sensor](#sensor) | 15 |
| [switch](#switch) | 6 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.front_door_debug_device` | Debug (device) | eufy_security | Available | Front Door |
| `binary_sensor.front_door_motion_detected` | Motion detected | eufy_security | Available | Front Door |
| `binary_sensor.front_door_person_detected` | Person detected | eufy_security | Available | Front Door |
| `binary_sensor.front_door_ringing` | Ringing | eufy_security | Available | Front Door |
| `binary_sensor.front_door_snooze` | Snooze | eufy_security | Available | Front Door |
| `binary_sensor.front_door_snooze_chime` | Snooze Chime | eufy_security | Disabled (integration) | Front Door |
| `binary_sensor.front_door_snooze_homebase` | Snooze Homebase | eufy_security | Disabled (integration) | Front Door |
| `binary_sensor.front_door_snooze_motion` | Snooze Motion | eufy_security | Disabled (integration) | Front Door |
| `binary_sensor.front_door_someone_loitering` | Someone Loitering | eufy_security | Available | Front Door |

## button

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `button.front_door_reset_alarm` | Reset Alarm | eufy_security | Disabled (integration) | Front Door |
| `button.front_door_start_p2p_stream` | Start P2P Stream | eufy_security | Disabled (integration) | Front Door |
| `button.front_door_stop_p2p_stream` | Stop P2P Stream | eufy_security | Disabled (integration) | Front Door |
| `button.front_door_trigger_alarm` | Trigger Alarm | eufy_security | Disabled (integration) | Front Door |

## camera

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `camera.front_door` | Front Door | eufy_security | Available | Front Door |

## image

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `image.front_door_event_image` | Event Image | eufy_security | Available | Front Door |

## lock

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `lock.front_door` | — | eufy_security | Disabled (integration) | Front Door |

## number

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `number.front_door_homebase_chime_ringtone_volume` | Homebase Chime Ringtone Volume | eufy_security | Available | Front Door |
| `number.front_door_speaker_volume` | Speaker Volume | eufy_security | Available | Front Door |

## select

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `select.front_door_motion_detection_type` | Motion Detection Type | eufy_security | Available | Front Door |
| `select.front_door_power_working_mode` | Power Working Mode | eufy_security | Disabled (integration) | Front Door |
| `select.front_door_video_recording_quality` | Video Recording Quality | eufy_security | Available | Front Door |
| `select.front_door_video_streaming_quality` | Video Streaming Quality | eufy_security | Available | Front Door |

## sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `sensor.front_door_audio_queue_size` | Audio Queue Size | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_battery_percentage` | Battery percentage | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_battery_temperature` | Battery Temperature | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_charging_status` | Charging Status | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_days_since_last_charging` | Days since last charging | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_lock_status` | Lock status | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_person_name` | Person Name | eufy_security | Available | Front Door |
| `sensor.front_door_snooze_start_time` | Snooze Start Time | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_snooze_time` | Snooze Time | eufy_security | Available | Front Door |
| `sensor.front_door_stream_provider` | Stream Provider | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_stream_status` | Stream Status | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_stream_url` | Stream URL | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_video_queue_size` | Video Queue Size | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_wifi_rssi` | Wifi RSSI | eufy_security | Disabled (integration) | Front Door |
| `sensor.front_door_wifi_signal_level` | Wifi Signal Level | eufy_security | Disabled (integration) | Front Door |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.front_door_audio_recording` | Audio Recording | eufy_security | Available | Front Door |
| `switch.front_door_auto_nightvision` | Auto Nightvision | eufy_security | Available | Front Door |
| `switch.front_door_camera_enabled` | Camera enabled | eufy_security | Available | Front Door |
| `switch.front_door_indoor_chime_enabled` | Indoor Chime Enabled | eufy_security | Available | Front Door |
| `switch.front_door_loitering_detection` | Loitering Detection | eufy_security | Available | Front Door |
| `switch.front_door_motion_detection` | Motion Detection | eufy_security | Available | Front Door |
