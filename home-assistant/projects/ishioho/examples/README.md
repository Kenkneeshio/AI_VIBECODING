# Synthetic examples

These files are hand-authored demonstration data. They contain no live states, registry export, camera URL, network host, access token, serial number, personal calendar, or precise location.

- `dashboard.json`: complete four-view dashboard object. Replace the example IDs with your own before using it. Keep URL path `prototype-copy`, or update the theme navigation in the source.
- `catalog.json`: small synthetic metadata catalog illustrating exact area membership and unassigned entities. Copy a locally edited version to `/config/www/ishioho/catalog.json`.
- `robot.json`: synthetic room segment names used for duplicate-name detection. Copy a locally edited version to `/config/www/ishioho/robot.json`.

The camera and vacuum names follow conventional integration ID formats so the example matches the current prototype's source assumptions. Their presence is not a verified claim that an equivalent camera or robot works on any installation.

The Pokémon and Stardew views share their control configuration and corrected room pins: Porch outside, Entry inside, Balcony on the left, and garage access through the porch stairs. Their Porch finds the synthetic example camera through the catalog's Porch area. Pokédex and Animal Crossing keep their earlier room geometry and do not add that pin. The catalog assignments are illustrative and must be replaced with confirmed local assignments.

The dashboard example shows an Eufy garage camera with `start_p2p_livestream` and `stop_p2p_livestream`. Opening that example camera may request those services; the integration must support them. The card releases streams it started when viewing ends. Delete the service fields for a camera that already provides a continuous supported stream, or remove the camera entry if it cannot provide one.

The metadata files hold labels and relationships only. Actual state values come from Home Assistant. All current entities remain searchable without a complete catalog; no area is inferred from an entity's friendly name.
