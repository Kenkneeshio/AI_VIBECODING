import {connectGoogleMaps} from './storybook-google-flow.mjs';

const PROVIDERS = new Map([
  ['google_maps', 'Google Maps'],
  ['home_assistant', 'Home Assistant'],
]);
const TRACKER_ID = /^(?:device_tracker|person)\.[a-z0-9_]+$/;
const GOOGLE_TRACKER_ID = /^device_tracker\.[a-z0-9_]+$/;
const GOOGLE_ATTRIBUTION = 'Data from Google Maps';
const GOOGLE_DISPLAY_PREF = 'roomcraft.show-google-shared-locations.v1';
const MAP_LOAD_TIMEOUT_MS = 8000;

export const STORYBOOK_LOCATION_MARKUP = `
  <dialog class="link-dialog location-dialog" aria-labelledby="location-title">
    <header><h2 id="location-title">Location sharing</h2><button type="button" data-close-link>Close</button></header>
    <details class="location-setup" data-location-setup hidden>
      <summary>Connect Google Maps</summary>
      <p data-google-connect-insecure hidden>Open Roomcraft at your secure Home Assistant address (HTTPS) to connect Google Maps.</p>
      <form data-google-connect>
        <p>
          In a private browser window, sign in to <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Google Maps</a> with the account that receives your family’s shares.
          <a href="https://github.com/pnbruckner/ha-google-maps/tree/2.1.0#obtaining-a-cookies-file" target="_blank" rel="noopener noreferrer">Export the session file</a> and close the private window without signing out.
        </p>
        <label class="location-setup-field">Google account email
          <input type="email" autocomplete="email" data-google-connect-email required>
        </label>
        <label class="location-setup-field">Google Maps session file (.txt)
          <input type="file" accept=".txt,text/plain" data-google-connect-file required>
        </label>
        <label class="location-google-pref">
          <input type="checkbox" data-google-connect-include>
          Include my own location
        </label>
        <button type="submit" data-google-connect-submit>Connect and show on this screen</button>
        <div class="location-links">
          <a href="/config/integrations/dashboard/add?domain=google_maps" target="_blank" rel="noopener noreferrer">Open Home Assistant setup ↗</a>
          <a href="/config/integrations/integration/google_maps" target="_blank" rel="noopener noreferrer">Manage existing connections ↗</a>
        </div>
      </form>
    </details>
    <p class="location-setup-result" data-google-connect-result role="status"></p>
    <p class="location-status" data-location-status role="status"></p>
    <div class="location-map" data-location-map hidden></div>
    <ul class="location-sources" data-location-sources aria-label="Location sources" hidden></ul>
    <label class="location-google-pref">
      <input type="checkbox" data-location-google>
      Show Google shared locations on this screen
    </label>
    <p class="location-google-status" data-location-google-status role="status" hidden></p>
    <div class="location-links">
      <a href="https://myaccount.google.com/locationsharing" target="_blank" rel="noopener noreferrer">Google sharing settings ↗</a>
    </div>
  </dialog>`;

export const STORYBOOK_LOCATION_STYLE = `
  .link-dialog.location-dialog{width:min(760px,calc(100% - 24px));max-height:88dvh}
  .location-dialog [hidden]{display:none}
  .location-status{margin:8px 0;font-size:.9em}
  .location-map{min-width:0;margin:12px 0;border-radius:12px;overflow:hidden}
  .location-map>hui-map-card{display:block;min-height:200px}
  .location-sources{display:grid;gap:6px;padding:0;margin:10px 0;list-style:none}
  .location-sources li{display:flex;flex-wrap:wrap;justify-content:space-between;gap:4px 12px;
    padding:7px 9px;border-radius:7px;background:#f2e6d3;overflow-wrap:anywhere}
  .location-sources li span{color:#665849;font-size:.86em}
  .location-google-pref{display:flex;align-items:center;gap:8px;min-height:40px}
  .location-google-pref input{width:18px;height:18px;accent-color:#286858}
  .location-google-status{margin:0 0 8px;font-size:.9em}
  .location-links{display:flex;flex-wrap:wrap;gap:0 8px}
  .location-setup{margin:4px 0 10px;padding:10px 12px;border:1px solid #8a725047;border-radius:10px;background:#f8eddc}
  .location-setup summary{cursor:pointer;font-weight:700}
  .location-setup p{margin:8px 0;font-size:.9em;line-height:1.45}
  .location-setup-field{display:grid;gap:4px;margin:8px 0;font-size:.9em;font-weight:600}
  .location-setup-field input{box-sizing:border-box;width:100%;min-width:0;min-height:38px;
    padding:6px 8px;border:1px solid #8a725070;border-radius:7px;background:#fffbf2;color:#2e241c;font:inherit}
  .location-setup button:disabled{opacity:.65;cursor:wait}
  .location-setup-result{margin:8px 0;font-size:.9em;line-height:1.45}
  .location-setup-result:empty{display:none}
  @media(max-width:420px){.location-dialog .location-sources li{display:grid}}
`;

export function readLocationSources(config) {
  const sources = new Map();
  for (const source of Array.isArray(config?.sources) ? config.sources : []) {
    const entity = source?.entity;
    const provider = source?.provider ?? 'home_assistant';
    if (typeof entity !== 'string' || !TRACKER_ID.test(entity) || !PROVIDERS.has(provider) || sources.has(entity)) continue;
    const label = typeof source.label === 'string' ? source.label.trim().slice(0, 80) : '';
    sources.set(entity, {entity, provider, label});
  }
  return [...sources.values()];
}

function locationState(source, hass) {
  if (hass?.connected === false) return {status: 'Connection offline'};
  const entity = hass?.states?.[source.entity];
  if (!entity) return {status: 'Source unavailable'};
  const {latitude, longitude, friendly_name: name} = entity.attributes ?? {};
  const {state} = entity;
  if (state === 'unavailable' || state === 'unknown') return {name, status: 'Source unavailable'};
  if (![latitude, longitude].every(Number.isFinite) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
    return {name, status: 'Waiting for GPS'};
  }
  return {name, status: 'Location available', ready: true};
}

export function locationMapConfig(sources, hass) {
  const entities = sources.filter(source => locationState(source, hass).ready)
    .map(({entity, label}) => label ? {entity, name: label} : {entity});
  if (!entities.length) return null;
  return {type: 'map', entities, aspect_ratio: '16:10', default_zoom: 14,
    auto_fit: true, fit_zones: false, show_all: false, hours_to_show: 0};
}

function googleLocationSources(hass, configured) {
  if (hass?.connected === false) return [];
  const excluded = new Set(configured.map(({entity}) => entity));
  for (const source of configured) {
    if (source.entity.startsWith('person.') && locationState(source, hass).ready) {
      excluded.add(hass.states[source.entity].attributes?.source);
    }
  }
  return Object.keys(hass?.states ?? {}).filter(entity => {
    const entry = hass?.entities?.[entity];
    return GOOGLE_TRACKER_ID.test(entity) && !excluded.has(entity) && !entry?.hidden &&
      (entry?.platform === 'google_maps' || hass.states[entity]?.attributes?.attribution === GOOGLE_ATTRIBUTION);
  }).sort().map(entity => ({entity, provider: 'google_maps', label: ''}));
}

function withLoadTimeout(promise) {
  let timer;
  const limit = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('Home Assistant map load timed out.')), MAP_LOAD_TIMEOUT_MS);
  });
  return Promise.race([promise, limit]).finally(() => clearTimeout(timer));
}

export function createStorybookLocation(dialog) {
  const doc = dialog.ownerDocument;
  const host = doc.defaultView;
  const status = dialog.querySelector('[data-location-status]');
  const list = dialog.querySelector('[data-location-sources]');
  const map = dialog.querySelector('[data-location-map]');
  const googleToggle = dialog.querySelector('[data-location-google]');
  const googleStatus = dialog.querySelector('[data-location-google-status]');
  const googleSetup = dialog.querySelector('[data-location-setup]');
  const googleForm = dialog.querySelector('[data-google-connect]');
  const googleEmail = dialog.querySelector('[data-google-connect-email]');
  const googleFile = dialog.querySelector('[data-google-connect-file]');
  const googleInclude = dialog.querySelector('[data-google-connect-include]');
  const googleSubmit = dialog.querySelector('[data-google-connect-submit]');
  const googleResult = dialog.querySelector('[data-google-connect-result]');
  const googleInsecure = dialog.querySelector('[data-google-connect-insecure]');
  const secureSetup = host?.isSecureContext === true;
  googleForm.hidden = !secureSetup;
  googleInsecure.hidden = secureSetup;
  let connecting = false;
  let configured = [];
  let showGoogle = false;
  try { showGoogle = host?.localStorage?.getItem(GOOGLE_DISPLAY_PREF) === 'true'; } catch { /* Storage may be disabled. */ }
  googleToggle.checked = showGoogle;
  let hass;
  let visibleRows;
  let card;
  let request;
  let currentKey;

  function say(message) {
    if (status.textContent !== message) status.textContent = message;
  }

  function clear() {
    request = undefined;
    currentKey = undefined;
    card = undefined;
    map.replaceChildren();
    map.hidden = true;
  }

  function paintSources(sources) {
    const rows = sources.map(source => {
      const {name, status: state} = locationState(source, hass);
      return [source.label || name || source.entity, `${PROVIDERS.get(source.provider)} · ${state}`];
    });
    const key = JSON.stringify(rows);
    if (key === visibleRows) return;
    visibleRows = key;
    list.hidden = rows.length === 0;
    list.replaceChildren(...rows.map(([name, state]) => {
      const item = doc.createElement('li');
      const label = doc.createElement('strong');
      const detail = doc.createElement('span');
      label.textContent = name;
      detail.textContent = state;
      item.append(label, detail);
      return item;
    }));
  }

  async function createMap(config, token) {
    try {
      const nextCard = await withLoadTimeout((async () => {
        const helpers = await host?.loadCardHelpers?.();
        const element = helpers?.createCardElement(config);
        if (element?.localName !== 'hui-map-card') throw new Error('Native map unavailable.');
        // The Home Assistant helper can return the element before its lazy class is defined.
        if (typeof element.setConfig !== 'function') await host.customElements.whenDefined('hui-map-card');
        return element;
      })());
      if (request !== token || !dialog.open) return;
      nextCard.hass = hass;
      map.replaceChildren(nextCard);
      card = nextCard;
      map.hidden = false;
      say('');
    } catch {
      if (request === token && dialog.open) say('Home Assistant could not load the map. Reopen this panel to retry.');
    }
  }

  function update(nextHass) {
    hass = nextHass;
    if (!dialog.open) return;
    const google = showGoogle ? googleLocationSources(hass, configured) : [];
    const sources = [...configured, ...google];
    const hasGoogleSource = sources.some(source => source.provider === 'google_maps');
    googleSetup.hidden = !hass?.user?.is_admin;
    googleStatus.hidden = !showGoogle || hass?.connected === false || hasGoogleSource;
    googleStatus.textContent = googleStatus.hidden ? '' : 'No Google shared locations are available yet.';
    paintSources(sources);
    const config = locationMapConfig(sources, hass);
    if (!config) {
      clear();
      say(hass?.connected === false ? 'Home Assistant is offline.'
        : sources.length ? 'Waiting for a location from an enabled source.'
          : 'Add a shared location source to see it here.');
      return;
    }
    const key = JSON.stringify(config.entities);
    if (key === currentKey) {
      if (card) card.hass = hass;
      return;
    }
    clear();
    currentKey = key;
    request = {};
    say('Loading location map…');
    void createMap(config, request);
  }

  function saveGooglePreference() {
    showGoogle = googleToggle.checked;
    try { host?.localStorage?.setItem(GOOGLE_DISPLAY_PREF, String(showGoogle)); } catch { /* Keep the setting for this tab. */ }
    update(hass);
  }

  googleToggle.addEventListener('change', saveGooglePreference);
  googleForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (connecting || !secureSetup || !hass?.user?.is_admin) return;
    connecting = true;
    googleSubmit.disabled = true;
    googleResult.textContent = 'Connecting Google Maps through Home Assistant…';
    try {
      await connectGoogleMaps(hass, {
        username: googleEmail.value,
        file: googleFile.files?.[0],
        includeAccount: googleInclude.checked,
      });
      googleForm.reset();
      googleSetup.open = false;
      googleToggle.checked = true;
      saveGooglePreference();
      googleResult.textContent = 'Google Maps is connected. Shared locations appear as Home Assistant receives them.';
    } catch (error) {
      googleResult.textContent = error.message;
    } finally {
      connecting = false;
      googleSubmit.disabled = false;
      if (!dialog.open) googleForm.reset();
    }
  });
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    if (!connecting) googleForm.reset();
    clear();
    say('');
    visibleRows = undefined;
    list.replaceChildren();
    list.hidden = true;
  });
  return {
    openGoogleSetup() {
      if (!hass?.user?.is_admin) return;
      if (!dialog.open) dialog.showModal();
      googleSetup.open = true;
      update(hass);
    },
    configure(config) {
      configured = readLocationSources(config);
      update(hass);
    },
    update,
  };
}
