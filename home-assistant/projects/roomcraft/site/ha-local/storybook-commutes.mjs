const SENSOR = /^sensor\.[a-z0-9_]+$/;
const EXPIRY_MS = 20 * 60 * 1000;
const TO_MINUTES = new Map([['s', 1 / 60], ['min', 1], ['h', 60]]);

export const COMMUTE_DIALOG_MARKUP = `
  <dialog class="link-dialog commute-dialog" aria-labelledby="commute-title">
    <header><h2 id="commute-title">Commute traffic</h2><button type="button" data-close-link>Close</button></header>
    <label class="commute-route" hidden>Route <select class="commute-select"></select></label>
    <p class="commute-reading" role="status">Add a Home Assistant travel-time sensor to connect a commute.</p>
    <button type="button" class="commute-details" hidden>Travel-time sensor details</button>
    <a href="https://www.home-assistant.io/integrations/waze_travel_time/" target="_blank" rel="noopener noreferrer"
      class="commute-setup">Set up a travel-time sensor ↗</a>
  </dialog>`;

export function readStorybookCommutes(value) {
  if (value?.version !== 1 || !Array.isArray(value.routes)) return [];
  const routes = new Map();
  for (const route of value.routes) {
    if (typeof route?.entity !== 'string' || !SENSOR.test(route.entity) || routes.has(route.entity) ||
        typeof route.name !== 'string' || !route.name.trim()) continue;
    routes.set(route.entity, {
      entity: route.entity, name: route.name.trim().slice(0, 80),
      baselineMinutes: Number.isFinite(route.baselineMinutes) && route.baselineMinutes > 0 ? route.baselineMinutes : undefined,
      baselineEntity: typeof route.baselineEntity === 'string' && route.baselineEntity !== route.entity &&
        SENSOR.test(route.baselineEntity) ? route.baselineEntity : undefined,
    });
  }
  return [...routes.values()];
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

/** Read only published HA travel time. Positive, current data is needed to animate the road. */
export function commuteReading(route, states, now) {
  if (!route) return {reason: 'setup'};
  const state = states?.[route.entity];
  const live = minutes(state);
  const updated = Date.parse(state?.last_reported ?? state?.last_updated ?? '');
  const expiresAt = updated + EXPIRY_MS;
  if (!live || !Number.isFinite(expiresAt)) return {reason: 'unavailable'};
  if (expiresAt <= now || updated > now + 60_000) return {reason: 'stale'};
  const baseline = route.baselineMinutes ?? minutes(states?.[route.baselineEntity]);
  const speedFactor = commuteSpeed(baseline, live);
  if (speedFactor === null) return {reason: 'baseline', live, expiresAt};
  const severity = speedFactor < .65 ? 'heavy' : speedFactor < .85 ? 'slow' : 'clear';
  return {live, baseline, expiresAt, profile: {severity, speedFactor}};
}

export function bindStorybookCommutes(card) {
  const dialog = card.shadowRoot.querySelector('.commute-dialog');
  const select = dialog.querySelector('select');
  const status = dialog.querySelector('.commute-reading');
  const details = dialog.querySelector('.commute-details');
  const setup = dialog.querySelector('.commute-setup');
  const format = new Intl.NumberFormat(undefined, {maximumFractionDigits: 0});
  let routes = [];

  const current = () => routes[Number(select.value)];
  select.addEventListener('change', () => card.refresh());
  details.addEventListener('click', () => {
    const entityId = current()?.entity;
    if (!entityId || card.session?.connected === false || !card.session?.states?.[entityId]) return;
    dialog.close();
    card.dispatchEvent(new CustomEvent('hass-more-info', {bubbles: true, composed: true, detail: {entityId}}));
  });
  return {
    configure(value) {
      const previous = current()?.entity;
      routes = readStorybookCommutes(value);
      select.replaceChildren(...routes.map((route, index) => new Option(route.name, String(index))));
      select.value = String(Math.max(0, routes.findIndex(route => route.entity === previous)));
      select.parentElement.hidden = !routes.length;
      setup.hidden = Boolean(routes.length);
      return routes.flatMap(({entity, baselineEntity}) => [entity, baselineEntity].filter(Boolean));
    },
    update(states, now) {
      const route = current();
      const reading = commuteReading(route, states, now);
      const messages = {
        setup: 'Add a Home Assistant travel-time sensor to connect a commute.',
        unavailable: 'Travel time unavailable.',
        stale: 'Waiting for a fresh travel-time reading.',
        baseline: reading.live ? `${format.format(reading.live)} min · Set a clear-road time to show delays.` : '',
      };
      const delay = reading.profile ? Math.max(0, reading.live - reading.baseline) : 0;
      const message = reading.profile
        ? `${format.format(reading.live)} min · ${delay >= 1 ? `+${format.format(delay)} min delay` : 'Clear-road pace'}`
        : messages[reading.reason];
      if (status.textContent !== message) status.textContent = message;
      details.hidden = !states?.[route?.entity];
      return reading;
    },
  };
}
