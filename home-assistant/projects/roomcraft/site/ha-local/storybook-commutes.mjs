import {stableDashboardJson} from './dashboard-snapshots.mjs';
import {STORYBOOK_VEHICLES} from './storybook-vehicles.mjs';

const SENSOR = /^sensor\.[a-z0-9_]+$/;
const EXPIRY_MS = 20 * 60 * 1000;
const TO_MINUTES = new Map([['s', 1 / 60], ['min', 1], ['h', 60]]);
const ALL_ROUTES = 'all';
const DESTINATION_LIMIT = 200;
const VEHICLE_STYLE_KEY = 'roomcraft.traffic-vehicle-style.v1';

export function readStorybookVehicleStyle(host) {
  try {
    const value = host.localStorage.getItem(VEHICLE_STYLE_KEY);
    return STORYBOOK_VEHICLES.some(({id}) => id === value) ? value : '';
  } catch { return ''; }
}

export const COMMUTE_DIALOG_MARKUP = `
  <dialog class="link-dialog commute-dialog" aria-labelledby="commute-title">
    <header><h2 id="commute-title">Commute traffic</h2><button type="button" data-close-link>Close</button></header>
    <label class="commute-route" hidden>Route <select class="commute-select"></select></label>
    <p class="commute-reading" role="status">Add a Home Assistant travel-time sensor to connect a commute.</p>
    <p class="commute-ambient" hidden>Road preview · About one vehicle passes every three seconds while live traffic is unavailable.</p>
    <ul class="commute-breakdown" aria-label="Travel times by route" hidden></ul>
    <label class="commute-route commute-vehicle-picker">Vehicle style <select class="commute-vehicle-style"></select></label>
    <button type="button" class="commute-details" hidden>Travel-time sensor details</button>
    <a href="https://www.home-assistant.io/integrations/google_travel_time/" target="_blank" rel="noopener noreferrer"
      class="commute-setup">Set up Google Maps Travel Time ↗</a>
    <button type="button" class="commute-configure" hidden>Configure routes</button>
    <form class="commute-form" hidden>
      <p>Assign each trip a Home Assistant travel-time sensor and its clear-road time. An optional destination adds a Google Maps directions link.</p>
      <datalist id="commute-sensors"></datalist>
      <div class="commute-fields"></div>
      <div class="commute-form-actions">
        <button type="button" class="commute-add">Add route</button>
        <button type="button" class="commute-cancel">Cancel</button>
        <button type="submit" class="commute-save">Save routes</button>
      </div>
    </form>
    <p class="commute-config-status" role="status" hidden></p>
  </dialog>`;

export const COMMUTE_DIALOG_STYLE = `
  .commute-dialog .commute-ambient{font-size:.84em}
  .commute-vehicle-picker{margin-bottom:10px}
  .commute-breakdown{list-style:none;margin:0 0 12px;padding:0;border-block:1px solid #dfd1bc}
  .commute-breakdown li{display:flex;justify-content:space-between;align-items:baseline;gap:8px;padding:7px 3px}
  .commute-breakdown li+li{border-top:1px solid #eee4d3}
  .commute-breakdown small{text-align:right;color:#665849}
  .commute-route-meta{display:grid;justify-items:end;gap:4px}
  .commute-breakdown .commute-directions{display:inline-flex;align-items:center;min-height:36px;padding:3px 8px;text-align:center}
  .commute-configure{margin-top:8px}
  .commute-form,.commute-fields,.commute-fields fieldset{display:grid;gap:9px}
  .commute-fields fieldset{min-width:0;margin:0;padding:9px;border:1px solid #d6c6ae;border-radius:9px}
  .commute-fields legend,.commute-fields label{font-size:.84rem}
  .commute-fields label{display:grid;gap:2px}
  .commute-fields input{min-width:0;min-height:35px;border:1px solid #c9b8a0;border-radius:7px;
    padding:4px 8px;background:#fff8ec;color:#352d2b;font:inherit}
  .commute-form p,.commute-config-status{font-size:.86rem}
  .commute-form-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px}
`;

export function readStorybookCommutes(value) {
  if (value?.version !== 1 || !Array.isArray(value.routes)) return [];
  const routes = [];
  const entities = new Set();
  for (const route of value.routes) {
    if (typeof route?.name !== 'string' || !route.name.trim()) continue;
    const entity = route.entity === '' ? undefined : route.entity ?? undefined;
    if (entity !== undefined && (typeof entity !== 'string' || !SENSOR.test(entity) || entities.has(entity))) continue;
    if (entity) entities.add(entity);
    const destination = typeof route.destination === 'string' ? route.destination.trim() : '';
    routes.push({
      entity, name: route.name.trim().slice(0, 80),
      baselineMinutes: Number.isFinite(route.baselineMinutes) && route.baselineMinutes > 0 ? route.baselineMinutes : undefined,
      baselineEntity: typeof route.baselineEntity === 'string' && route.baselineEntity !== entity &&
        SENSOR.test(route.baselineEntity) ? route.baselineEntity : undefined,
      ...(destination && destination.length <= DESTINATION_LIMIT ? {destination} : {}),
    });
  }
  return routes;
}

/** Directions use Google's public launch URL and the user's location choice in Maps. */
export function googleDirectionsUrl(destination) {
  if (typeof destination !== 'string' || !destination.trim() || destination.length > DESTINATION_LIMIT) return;
  const url = new URL('https://www.google.com/maps/dir/');
  url.search = new URLSearchParams({api: '1', destination: destination.trim(), travelmode: 'driving'}).toString();
  return url.toString();
}

function minutes(state) {
  const unit = TO_MINUTES.get(state?.attributes?.unit_of_measurement);
  const value = typeof state?.state === 'string' ? Number(state.state) : NaN;
  return unit && Number.isFinite(value) && value > 0 ? value * unit : undefined;
}

export function commuteSpeed(baseline, live) {
  return Number.isFinite(baseline) && baseline > 0 && Number.isFinite(live) && live > 0
    ? Math.min(1, baseline / live) : null;
}

function trafficProfile(speedFactor) {
  return {severity: speedFactor < .65 ? 'heavy' : speedFactor < .85 ? 'slow' : 'clear', speedFactor};
}

/** Read only published HA travel time. Positive, current data is needed to animate the road. */
export function commuteReading(route, states, now) {
  if (!route) return {reason: 'setup'};
  if (!route.entity) return {reason: 'pending'};
  const state = states?.[route.entity];
  const live = minutes(state);
  const updated = Date.parse(state?.last_reported ?? state?.last_updated ?? '');
  const expiresAt = updated + EXPIRY_MS;
  if (!live || !Number.isFinite(expiresAt)) return {reason: 'unavailable'};
  if (expiresAt <= now || updated > now + 60_000) return {reason: 'stale'};
  const baseline = route.baselineMinutes ?? minutes(states?.[route.baselineEntity]);
  const speedFactor = commuteSpeed(baseline, live);
  if (speedFactor === null) return {reason: 'baseline', live, expiresAt};
  return {live, baseline, expiresAt, profile: trafficProfile(speedFactor)};
}

/** Give each fresh calibrated route the same weight, regardless of trip length. */
export function combineCommuteReadings(readings) {
  const profiles = readings.flatMap(reading => reading.profile ? [reading.profile] : []);
  const earliest = Math.min(...readings.map(reading => reading.expiresAt ?? Infinity));
  return {
    reporting: profiles.length, total: readings.length,
    expiresAt: Number.isFinite(earliest) ? earliest : undefined,
    profile: profiles.length ? trafficProfile(
      profiles.reduce((sum, profile) => sum + profile.speedFactor, 0) / profiles.length) : undefined,
  };
}

export function validateCommuteEdits(rows) {
  const entities = new Set();
  const routes = [];
  for (const [index, row] of rows.entries()) {
    const input = key => typeof row?.[key] === 'string' ? row[key].trim() : '';
    const name = input('name');
    const entity = input('entity');
    const baselineEntity = input('baselineEntity');
    const baseline = input('baselineMinutes');
    const destination = input('destination');
    const baselineMinutes = baseline ? Number(baseline) : undefined;
    if (!name || name.length > 80) return {error: `Enter a name for route ${index + 1} (up to 80 characters).`};
    if (entity && (!SENSOR.test(entity) || entities.has(entity))) {
      return {error: `Route ${index + 1} needs a unique Home Assistant sensor ID.`};
    }
    if (baselineEntity && (!SENSOR.test(baselineEntity) || baselineEntity === entity)) {
      return {error: `Route ${index + 1} needs a different sensor for its clear-road time.`};
    }
    if (baseline && !(Number.isFinite(baselineMinutes) && baselineMinutes > 0)) {
      return {error: `Route ${index + 1} needs a positive clear-road time.`};
    }
    if (destination.length > DESTINATION_LIMIT) return {error: `Shorten the Google Maps destination for route ${index + 1}.`};
    if (entity) entities.add(entity);
    routes.push({name, ...(entity ? {entity} : {}), ...(baselineEntity ? {baselineEntity} : {}),
      ...(baselineMinutes ? {baselineMinutes} : {}), ...(destination ? {destination} : {})});
  }
  return {routes};
}

/** Preserve the latest dashboard and reject a stale route editor before writing. */
export async function saveCommuteRoutes(session, dashboard, expected, routes, stillAuthorized) {
  const read = () => session.callWS({type: 'lovelace/config', url_path: dashboard});
  if (dashboard !== 'roomcraft-home' || session?.user?.is_admin !== true || !stillAuthorized()) return {status: 'closed'};
  const current = await read();
  if (!stillAuthorized()) return {status: 'closed'};
  if (stableDashboardJson(current.roomcraft_commutes) !== stableDashboardJson(expected)) {
    return {status: 'changed', value: current.roomcraft_commutes};
  }
  const value = {...current.roomcraft_commutes, version: 1, routes};
  if (stableDashboardJson(value) === stableDashboardJson(current.roomcraft_commutes)) return {status: 'saved', value};
  await session.callWS({type: 'lovelace/config/save', url_path: dashboard, config: {...current, roomcraft_commutes: value}});
  const saved = await read();
  if (stableDashboardJson(saved.roomcraft_commutes) !== stableDashboardJson(value)) {
    return {status: 'unverified'};
  }
  return {status: 'saved', value};
}

export function bindStorybookCommutes(card) {
  const dialog = card.shadowRoot.querySelector('.commute-dialog');
  const select = dialog.querySelector('.commute-select');
  const vehicles = dialog.querySelector('.commute-vehicle-style');
  const ambient = dialog.querySelector('.commute-ambient');
  const status = dialog.querySelector('.commute-reading');
  const details = dialog.querySelector('.commute-details');
  const setup = dialog.querySelector('.commute-setup');
  const breakdown = dialog.querySelector('.commute-breakdown');
  const configureButton = dialog.querySelector('.commute-configure');
  const editor = dialog.querySelector('.commute-form');
  const fields = editor.querySelector('.commute-fields');
  const suggestions = editor.querySelector('datalist');
  const addButton = editor.querySelector('.commute-add');
  const saveButton = editor.querySelector('.commute-save');
  const cancelButton = editor.querySelector('.commute-cancel');
  const closeButton = dialog.querySelector('[data-close-link]');
  const editorStatus = dialog.querySelector('.commute-config-status');
  const format = new Intl.NumberFormat(undefined, {maximumFractionDigits: 0});
  const formatPercent = new Intl.NumberFormat(undefined, {style: 'percent', maximumFractionDigits: 0});
  let routes = [];
  let routeRows = [];
  let editorRun;
  let busy = false;

  vehicles.replaceChildren(new Option('Mixed vehicles', ''),
    ...STORYBOOK_VEHICLES.map(({id, label}) => new Option(label, id)));
  vehicles.value = readStorybookVehicleStyle(window);
  vehicles.addEventListener('change', () => {
    try { window.localStorage.setItem(VEHICLE_STYLE_KEY, vehicles.value); }
    catch { /* The choice still applies to this session. */ }
    card.refresh();
  });

  const current = () => select.value !== ALL_ROUTES ? routes[Number(select.value)] : undefined;
  const canEdit = () => card.dashboard === 'roomcraft-home' && card.session?.connected === true
    && card.session?.user?.is_admin === true;
  const isCurrent = run => card.isConnected && canEdit() && card.dashboard === run.dashboard &&
    card.session.connection === run.session.connection && run === editorRun;
  const showStatus = message => {
    editorStatus.hidden = !message;
    editorStatus.textContent = message;
  };
  const closeEditor = () => {
    editorRun = undefined;
    editor.hidden = true;
    showStatus('');
  };
  function sync() {
    configureButton.hidden = !canEdit();
    if (configureButton.hidden && editorRun) closeEditor();
  }

  function addRow(route = {}) {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Commute';
    fieldset.append(legend);
    for (const [key, labelText, type] of [
      ['name', 'Name', 'text'], ['entity', 'Travel-time sensor', 'text'],
      ['baselineMinutes', 'Clear-road time in minutes', 'number'], ['baselineEntity', 'Or use a clear-road sensor', 'text'],
      ['destination', 'Google Maps destination (address or place name)', 'text'],
    ]) {
      const label = document.createElement('label');
      label.textContent = labelText;
      const input = document.createElement('input');
      input.name = key;
      input.type = type;
      input.value = route[key] ?? '';
      if (key === 'name') { input.maxLength = 80; input.required = true; }
      if (key === 'destination') input.maxLength = DESTINATION_LIMIT;
      if (type === 'number') { input.min = '0'; input.step = 'any'; }
      if (key.endsWith('Entity') || key === 'entity') {
        input.setAttribute('list', suggestions.id);
        input.spellcheck = false;
        input.autocomplete = 'off';
      }
      label.append(input);
      fieldset.append(label);
    }
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Remove route';
    remove.addEventListener('click', () => { fieldset.remove(); (fields.lastElementChild?.querySelector('input') ?? addButton).focus(); });
    fieldset.append(remove);
    fields.append(fieldset);
    return fieldset;
  }

  function paintEditor(value) {
    fields.replaceChildren();
    for (const route of readStorybookCommutes(value)) addRow(route);
    suggestions.replaceChildren(...Object.entries(card.session?.states ?? {}).flatMap(([id, state]) => {
      if (!SENSOR.test(id) || !TO_MINUTES.has(state.attributes?.unit_of_measurement)) return [];
      return [new Option(state.attributes?.friendly_name ?? id, id)];
    }));
    editor.hidden = false;
    (fields.firstElementChild?.querySelector('input') ?? addButton).focus();
  }

  function configure(value) {
    const previous = current();
    routes = readStorybookCommutes(value);
    select.replaceChildren(new Option('All routes', ALL_ROUTES),
      ...routes.map((route, index) => new Option(route.name, String(index))));
    const previousIndex = routes.findIndex(route => previous && route.entity === previous.entity && route.name === previous.name);
    select.value = previousIndex < 0 ? ALL_ROUTES : String(previousIndex);
    select.parentElement.hidden = routes.length === 0;
    setup.hidden = routes.length > 0 && routes.every(route => route.entity);
    routeRows = routes.map(route => {
      const row = document.createElement('li');
      const name = document.createElement('strong');
      const reading = document.createElement('small');
      const meta = document.createElement('span');
      meta.className = 'commute-route-meta';
      name.textContent = route.name;
      meta.append(reading);
      const directionsUrl = googleDirectionsUrl(route.destination);
      if (directionsUrl) {
        const link = document.createElement('a');
        link.className = 'commute-directions';
        link.href = directionsUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Open in Google Maps ↗';
        link.setAttribute('aria-label', `Open ${route.name} directions in Google Maps`);
        meta.append(link);
      }
      row.append(name, meta);
      return {row, reading};
    });
    breakdown.replaceChildren(...routeRows.map(({row}) => row));
    breakdown.hidden = !routes.length;
    return routes.flatMap(({entity, baselineEntity}) => [entity, baselineEntity].filter(Boolean));
  }

  configureButton.addEventListener('click', async () => {
    if (!canEdit() || busy || editorRun) return;
    const run = {session: card.session, dashboard: card.dashboard};
    editorRun = run;
    showStatus('Loading routes…');
    try {
      const config = await run.session.callWS({type: 'lovelace/config', url_path: run.dashboard});
      if (!isCurrent(run) || !dialog.open) return;
      run.value = config.roomcraft_commutes;
      if (run.value && run.value.version !== 1) throw new Error('Unsupported commute configuration.');
      paintEditor(run.value);
      showStatus('');
    } catch {
      if (!isCurrent(run) || !dialog.open) return;
      closeEditor();
      showStatus('Could not load editable routes.');
    }
  });
  addButton.addEventListener('click', () => addRow().querySelector('input').focus());
  cancelButton.addEventListener('click', () => { closeEditor(); configureButton.focus(); });
  dialog.addEventListener('cancel', event => { if (busy) event.preventDefault(); });
  dialog.addEventListener('close', () => { if (!busy) closeEditor(); });
  editor.addEventListener('submit', async event => {
    event.preventDefault();
    const run = editorRun;
    if (!run || !isCurrent(run) || !dialog.open || busy) return;
    const rows = [...fields.children].map(fieldset => Object.fromEntries(
      [...fieldset.querySelectorAll('input')].map(input => [input.name, input.value])));
    const edit = validateCommuteEdits(rows);
    if (edit.error) { showStatus(edit.error); return; }
    busy = saveButton.disabled = addButton.disabled = cancelButton.disabled = closeButton.disabled = true;
    for (const field of fields.children) field.disabled = true;
    showStatus('Saving routes…');
    try {
      const result = await saveCommuteRoutes(run.session, run.dashboard, run.value, edit.routes,
        () => isCurrent(run) && dialog.open);
      if (!isCurrent(run)) return;
      if (result.status === 'changed') {
        if (result.value && result.value.version !== 1) {
          closeEditor();
          showStatus('The saved route format changed. Reopen the panel.');
          return;
        }
        run.value = result.value;
        for (const id of configure(run.value)) card.model?.watch.add(id);
        card.refresh();
        paintEditor(run.value);
        showStatus('Routes changed elsewhere. Review the refreshed settings.');
        return;
      }
      if (result.status === 'unverified') throw new Error('Commute routes readback did not match.');
      if (result.status !== 'saved') return;
      const ids = configure(result.value);
      for (const id of ids) card.model?.watch.add(id);
      card.refresh();
      closeEditor();
      showStatus('Routes saved.');
      if (dialog.open) configureButton.focus();
    } catch {
      if (isCurrent(run)) showStatus('Could not verify the save. Reopen route settings to check the current values.');
    } finally {
      busy = saveButton.disabled = addButton.disabled = cancelButton.disabled = closeButton.disabled = false;
      for (const field of fields.children) field.disabled = false;
      if (!dialog.open && editorRun) closeEditor();
    }
  });
  select.addEventListener('change', () => card.refresh());
  details.addEventListener('click', () => {
    const entityId = current()?.entity;
    if (!entityId || card.session?.connected === false || !card.session?.states?.[entityId]) return;
    dialog.close();
    card.dispatchEvent(new CustomEvent('hass-more-info', {bubbles: true, composed: true, detail: {entityId}}));
  });
  function describe(reading) {
    if (reading.profile) {
      const delay = Math.max(0, reading.live - reading.baseline);
      return `${format.format(reading.live)} min · ${delay >= 1 ? `+${format.format(delay)} min delay` : 'Clear-road pace'}`;
    }
    return {
      setup: 'Add a Home Assistant travel-time sensor to connect a commute.',
      pending: 'Sensor not assigned.',
      unavailable: 'Travel time unavailable.',
      stale: 'Waiting for a fresh travel-time reading.',
      baseline: reading.live ? `${format.format(reading.live)} min · Set a clear-road time to show delays.` : '',
    }[reading.reason];
  }
  return {
    configure,
    sync,
    vehicleStyle: () => vehicles.value || undefined,
    update(states, now) {
      sync();
      const readings = routes.map(route => commuteReading(route, states, now));
      const mixed = combineCommuteReadings(readings);
      const index = select.value === ALL_ROUTES ? -1 : Number(select.value);
      const route = current();
      const reading = readings[index];
      const message = reading ? describe(reading) : !routes.length ? describe({reason: 'setup'}) :
        mixed.profile ? `${mixed.reporting} of ${mixed.total} live · ${formatPercent.format(mixed.profile.speedFactor)} of clear-road pace` :
          `0 of ${mixed.total} live · Waiting for fresh travel times and clear-road times.`;
      if (status.textContent !== message) status.textContent = message;
      const active = reading ? {...reading, expiresAt: mixed.expiresAt} : mixed;
      ambient.hidden = Boolean(active.profile);
      for (const [i, entry] of routeRows.entries()) {
        const text = describe(readings[i]);
        if (entry.reading.textContent !== text) entry.reading.textContent = text;
      }
      details.hidden = !states?.[route?.entity];
      return active;
    },
  };
}
