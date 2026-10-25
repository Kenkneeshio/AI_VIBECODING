# Synthetic examples

These files are hand-authored demonstration data. They contain no live states, registry export, camera URL, network host, access token, serial number, personal calendar, or precise location.

- `dashboard.json`: complete four-view dashboard object. Replace the example IDs with your own before using it. Its URL path is `prototype-copy`; for another path, set `dashboard_path` to that slug on all four cards or let the card derive it from the current page.
- `catalog.json`: small synthetic metadata catalog illustrating exact area membership and unassigned entities. An installed copy belongs at `/config/www/ishioho/catalog.json`.
- `robot.json`: synthetic room segment names used for duplicate-name detection. An installed copy belongs at `/config/www/ishioho/robot.json`.

Home Assistant serves `www/` at `/local/` **without authentication**. Keep private device inventories, addresses, serial numbers, camera URLs, and credentials out of any installed catalog or robot file. Empty metadata is valid: use `{"entities":[],"areas":[]}` for the catalog and `{"room_segments":[]}` for the robot file. The dashboard still lists current runtime entities; area labels and robot duplicate-room detection will have less detail. See the [project installation and privacy notes](../README.md#install).

The camera and vacuum names follow conventional integration ID formats so the example matches the current prototype's source assumptions. Their presence is not a verified claim that an equivalent camera or robot works on any installation.

The Pokémon and Stardew views share their control configuration. Both place Entry inside, Balcony on the left, and garage popup access on the stairs. Stardew v2 places its Porch pin on the upstairs landing; Pokémon retains the pin for its earlier artwork. Their Porch finds the synthetic example camera through the catalog's Porch area. Pokédex and Animal Crossing keep their earlier room geometry and do not add that pin. The catalog assignments are illustrative and must be replaced with confirmed local assignments.

The active Stardew artwork is v2 PNG: the upstairs Porch is covered, the blue door opens to the inside Entry, and railed exterior stairs descend toward the single-car garage below. The v1 PNG/SVG assets are historical; the v1 SVGs do not reproduce v2. The JSON example's room pin percentages are the live configuration, so verify alignment if you replace the art.

The dashboard example shows an Eufy garage camera with `start_p2p_livestream` and `stop_p2p_livestream`. Opening that example camera may request those services; the integration must support them. The card releases streams it started when viewing ends. Delete the service fields for a camera that already provides a continuous supported stream, or remove the camera entry if it cannot provide one.

For a different vacuum, set `vacuum` and related IDs, then use `robot_entity_prefix`, `robot_entities`, `robot_metrics`, and `robot_room_aliases` where its entity naming or room labels differ. `garage_camera` can explicitly select one of the configured `cameras` for the garage popup. If no garage cover or vacuum is configured, their dedicated controls are hidden; keep required collection fields as empty arrays when unused.

The metadata files hold labels and relationships only. Actual state values come from Home Assistant. All current entities remain searchable without a complete catalog; no area is inferred from an entity's friendly name.
