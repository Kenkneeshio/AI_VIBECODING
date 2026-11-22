# Camera Lab

Camera Lab is a Home Assistant app for adjusting a live camera preview. It targets
Home Assistant Green (ARM64) and x86-64 Home Assistant OS.

- Adjust crop on all four sides, horizontal and vertical skew, and radial lens correction.
- Highlight frame-to-frame changes in amber. A threshold of zero turns highlighting off.
- Adjustments are saved separately for each camera on this browser. Reset clears them.

Home Assistant serves camera snapshots through authenticated ingress. The browser
does the image processing at 480 × 270. The preview requests up to two snapshots
per second, pauses in a hidden tab, and has no recording or recognition. It
does not alter the camera or publish a corrected stream for other cards.

Install Camera Lab from the Roomcraft app repository, configure allowed
`camera.*` entities in the app settings, and start the app. Use **Open Web UI**
or **Show in sidebar** to reach Camera Lab. Stop Camera Lab to end all requests
and uninstall it to roll back. Existing dashboards and integrations are independent.
