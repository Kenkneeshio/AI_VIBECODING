# Porch — Home Assistant entities

Snapshot: **2026-10-31 19:14 UTC**. 8 sanitized entities. [Inventory index](README.md) · [JSON](entity-inventory.json).

| Domain | Count |
| --- | ---: |
| [binary_sensor](#binary-sensor) | 1 |
| [button](#button) | 2 |
| [camera](#camera) | 2 |
| [switch](#switch) | 3 |

## binary sensor

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `binary_sensor.porch_camera_cell_motion_detection` | Cell Motion Detection | onvif | Available | IP-camera |

## button

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `button.porch_camera_reboot` | Reboot | onvif | Unknown | IP-camera |
| `button.porch_camera_set_system_date_and_time` | Set System Date and Time | onvif | Unknown | IP-camera |

## camera

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `camera.porch_camera_profile_000` | PROFILE_000 | onvif | Available | IP-camera |
| `camera.porch_camera_profile_001` | PROFILE_001 | onvif | Disabled (integration) | IP-camera |

## switch

| Entity ID | Name | Platform | Status at audit | Device |
| --- | --- | --- | --- | --- |
| `switch.porch_camera_autofocus` | Autofocus | onvif | Unknown | IP-camera |
| `switch.porch_camera_ir_lamp` | IR lamp | onvif | Unknown | IP-camera |
| `switch.porch_camera_wiper` | Wiper | onvif | Unknown | IP-camera |
