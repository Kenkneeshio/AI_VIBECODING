# Occupancy on the condo and stairs

The household uses the wall panel to see whether the condo is occupied. The layout author uses Studio to check the same stair geometry. A linked occupancy sensor can report on even when a seated or still person stops generating position updates. The scene must keep a character visible and grounded until the occupancy signal clears.

| Situation | Expected result |
| --- | --- |
| Occupied with fresh, supported radar coordinates | The character uses the measured location or stays clear of an obstacle while the mark shows the measurement. |
| Occupied after positional data expires | Keep one character at the latest usable location with an amber location ring. |
| Occupied with no usable coordinate in the session | Show an approximate spot on the supported floor near the configured detection area. |
| Native vacancy or no current presence signal | Clear the fallback. An expired coordinate alone cannot establish occupancy. |
| Lower treads and the upper condo | Use each rendered surface height. Keep the character out of walls, furniture, the yard and the detached garage. |
| Restart or browser reload | Recover from the current Home Assistant radar frame if available. After a Core restart, use the approximate area until the next usable report. |

The layout, calibration, floor levels and avatar artwork keep their existing versions. The tracking adapter stores only one ephemeral report in Home Assistant and projects it with the current calibration. It excludes this report from Recorder, and the heat map still uses only actual samples. Google Maps and other location-sharing sources remain independent of indoor tracking.

Run the [release gate](release-standard.md) and the tests in `ha-presence/tests`. Check a fixture with empty, fresh, stale and zero radar frames. Test a separate stair track from an angled view and verify the feet against tread height. Compare the live layout and projection against the protected pre-install backup after installation.

For rollback, rebuild and reinstall Roomcraft source `5567b59`, restore private Studio version 86, and restore the pre-install Roomcraft Presence component archive before restarting Core. [Deployment and rollback](deployment.md)
