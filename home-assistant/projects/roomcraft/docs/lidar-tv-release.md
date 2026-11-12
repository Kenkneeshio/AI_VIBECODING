# Vacuum LiDAR alignment and television status

| Customer | Outcome | Acceptance |
| --- | --- | --- |
| Layout author | Compare Roomcraft dimensions with a measured map and undo changes | Load the bound LiDAR image, choose three matching landmarks, review scale and independent error, toggle the overlay, apply to draft, and undo. |
| Household operator | Compare the current home layout with the vacuum scan | Toggle a translucent map in Home. Hide the overlay and stop projecting robot coordinates if the vacuum selects a different saved floor. |
| Household operator | Read TV power and playback context from the drawing | Show a white screen and the reported title, app or input while on. Show a dark screen while off or unavailable. |

The Dreame integration supplies three raster calibration anchors with raw millimetre coordinates. The Home Assistant bridge reads the image through the authenticated camera proxy, validates its size and media type, and retries once if the crop or map changes during retrieval. No vacuum control action is needed. The private image stays in memory. The optional map ID and position transform are the only survey results stored in the layout. The hosted editor can fit manually entered points. It does not proxy a private camera.

Use widely spaced, non-collinear landmarks. A measured tape distance and the independent fit check can reveal differences between the artist’s plan and the scanned floor. Applying an alignment calibrates the robot projection and overlay without resizing rooms or altering the physical vacuum map. If the integration changes floors, select the aligned condo map before showing that overlay.

Home passes the TV’s short display text to its screen material while the device is on. Studio preview and saved layouts omit playback titles. [Home Assistant media player states](https://www.home-assistant.io/integrations/media_player/)

Run the [release gate](release-standard.md) and check the same Home and Studio bundles in Chromium. Verify the saved plan by readback and test the vacuum proxy without issuing a service call. The pre-install layout remains the rollback point for any later alignment exported by the user.

## Verified release

- Source `fe7610a8de36f462f4eed5a5ad508882235e4a7e` produced the 283-input manifest `sha256:08cf65cc2764403e45b9c08b01fda4ef25ff1cb5fb7588fc918da67efb4475dd`. The release gate passed 441 JavaScript tests, 38 Python tests, TypeScript, lint with zero errors and 17 existing warnings, and the production build.
- Exact Chromium Studio loaded a fixture map and verified landmark selection, scale, tape comparison, overlay, draft apply and Undo. Exact Chromium Home verified a private-map fixture, floor identity change, white and black TV rendering, and text painted on the screen. The fixture made no household device calls.
- The actual Dreame map returned a valid PNG and three calibration anchors. The live overlay rendered on the wall tablet. A comparison with the existing alignment showed differences between the drawing and scan, so the published transform and layout were preserved. The linked TV entity was unavailable during production checks.
- Home Assistant served the verified Home, native bridge and Studio artifacts byte-for-byte. The dashboard layout, plan projection and location configuration matched the pre-install backup. Private Studio version 87 contains hosted source `18d8b5424920a45007dd3933a131873490387527`.

To roll back LiDAR and TV while keeping the native occupancy changes, rebuild and reinstall `4ff0fa214006e3eb43a4b349fd2be4981bf38315`. Private Studio version 86 is the previous published editor.
