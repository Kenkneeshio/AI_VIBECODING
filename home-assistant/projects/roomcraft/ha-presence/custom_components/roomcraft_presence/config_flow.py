"""Create a single local bridge without re-pairing a Zigbee device."""

from homeassistant import config_entries

from .const import DOMAIN


class RoomcraftPresenceConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Support a manual integration entry or a YAML import."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        if user_input is None:
            return self.async_show_form(step_id="user")
        return await self.async_step_import(user_input)

    async def async_step_import(self, import_config):
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()
        return self.async_create_entry(title="Roomcraft Presence", data={})
