const PROVIDERS = new Map([
  ['google_maps', 'Google Maps'],
  ['home_assistant', 'Home Assistant'],
]);
const TRACKER_ID = /^(?:device_tracker|person)\.[a-z0-9_]+$/;
const MAP_LOAD_TIMEOUT_MS = 8000;

export const STORYBOOK_LOCATION_MARKUP = `
  <dialog class="link-dialog location-dialog" aria-labelledby="location-title">
    <header><h2 id="location-title">Location sharing</h2><button type="button" data-close-link>Close</button></header>
    <p class="location-status" data-location-status role="status"></p>
    <div class="location-map" data-location-map hidden></div>
    <ul class="location-sources" data-location-sources aria-label="Location sources" hidden></ul>
    <div class="location-links">
      <a href="https://myaccount.google.com/locationsharing" target="_blank" rel="noopener noreferrer">Google sharing settings ↗</a>
      <a href="https://www.home-assistant.io/integrations/google_maps/" target="_blank" rel="noopener noreferrer">Connect Google trackers ↗</a>
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
  .location-links{display:flex;flex-wrap:wrap;gap:0 8px}
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
  let sources = [];
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

  function paintSources() {
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
    paintSources();
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

  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    clear();
    say('');
    visibleRows = undefined;
    list.replaceChildren();
    list.hidden = true;
  });
  return {
    configure(config) {
      sources = readLocationSources(config);
      update(hass);
    },
    update,
  };
}
