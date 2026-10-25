# Synthetic examples

These files are hand-authored demonstration data. They contain no live states, registry export, camera URL, network host, access token, serial number, personal calendar, or precise location.

- `dashboard.json`: complete three-view dashboard object. Replace the example IDs with your own before using it. Keep URL path `prototype-copy`, or update the theme navigation in the source.
- `catalog.json`: small synthetic metadata catalog illustrating exact area membership and unassigned entities. Copy a locally edited version to `/config/www/ishioho/catalog.json`.
- `robot.json`: synthetic room segment names used for duplicate-name detection. Copy a locally edited version to `/config/www/ishioho/robot.json`.

The camera and vacuum names follow conventional integration ID formats so the example matches the current prototype's source assumptions. Their presence is not a verified claim that an equivalent camera or robot works on any installation.

The dashboard example shows an Eufy garage camera with `start_p2p_livestream` and `stop_p2p_livestream`. Those services are called only when that example camera is opened and only if the integration supports them. Delete the service fields for a camera that already provides a continuous supported stream, or remove the camera entry if it cannot provide one.

The metadata files hold labels and relationships only. Actual state values come from Home Assistant. All current entities remain searchable without a complete catalog; no area is inferred from an entity's friendly name.
