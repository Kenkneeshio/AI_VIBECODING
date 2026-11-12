import {storybookWeather} from './storybook-weather.mjs';

const WEATHER_ENTITY = /^weather\.[a-z0-9_]+$/;
const PROVIDER_KEY = 'roomcraft.weather-provider.v1';
const FORECAST_TTL = 10 * 60_000;
const RETRY_DELAY = 60_000;
const DAY = 86_400_000;
const PROVIDER_NAMES = new Map([['met','Met.no'], ['open_meteo','Open-Meteo']]);
const FORECAST_TYPES = {
  hourly:{bit:2, limit:12, interval:3_600_000, label:'Hourly'},
  daily:{bit:1, limit:7, interval:DAY, label:'Daily'},
};

const weatherArt = `<span class="weather-art" aria-hidden="true">
  <i class="weather-art-sun"></i><i class="weather-art-cloud"></i><i class="weather-art-drops"></i>
</span>`;

export const STORYBOOK_WEATHER_PANEL_MARKUP = `
  <dialog class="storybook-weather-dialog" aria-labelledby="weather-dialog-title">
    <header class="weather-dialog-header">
      <h2 id="weather-dialog-title">Weather</h2>
      <button type="button" data-weather-close>Close</button>
    </header>
    <section class="weather-feature" data-weather-current data-effect="unknown">
      <div class="weather-feature-text">
        <p class="weather-provider-name" data-weather-provider-name></p>
        <p class="weather-feature-temperature" data-weather-temperature></p>
        <h3 data-weather-condition>Weather unavailable</h3>
        <p class="weather-feature-readings" data-weather-readings></p>
        <p class="weather-attribution" data-weather-attribution></p>
      </div>
      ${weatherArt}
    </section>
    <div class="weather-toolbar">
      <div class="weather-views" role="group" aria-label="Weather view">
        <button type="button" data-weather-view="hourly" aria-pressed="true">Next 12 hours</button>
        <button type="button" data-weather-view="daily" aria-pressed="false">7-day outlook</button>
        <button type="button" data-weather-view="windy" aria-pressed="false">Windy map</button>
      </div>
      <label class="weather-provider-choice">Provider
        <select data-weather-provider aria-label="Weather provider"></select>
      </label>
    </div>
    <section data-weather-forecast>
      <p data-weather-status class="weather-forecast-status" role="status"></p>
      <ol data-weather-hours class="weather-periods" aria-label="Weather forecast"></ol>
    </section>
    <section data-weather-windy class="weather-windy" hidden>
      <div class="weather-windy-map" data-weather-map></div>
      <a href="https://www.windy.com/" target="_blank" rel="noopener noreferrer">Open Windy ↗</a>
    </section>
  </dialog>`;

export const STORYBOOK_WEATHER_PANEL_STYLE = `
  .storybook-weather-dialog{box-sizing:border-box;width:min(86vw,1680px);height:min(88dvh,1100px);max-height:calc(100dvh - 24px);
    overflow:auto;padding:clamp(12px,2vw,24px);border:1px solid #ccd7d4;border-radius:20px;color:#254046;background:#f7fbf9;
    box-shadow:0 18px 64px #142e3a44;font-family:inherit;color-scheme:light;overscroll-behavior:contain}
  .storybook-weather-dialog[open]{display:flex;flex-direction:column}
  .storybook-weather-dialog::backdrop{background:#122b3b85}
  .storybook-weather-dialog [hidden]{display:none}
  .weather-dialog-header,.weather-toolbar,.weather-views{display:flex;align-items:center;gap:8px}
  .weather-dialog-header,.weather-toolbar{justify-content:space-between}
  .weather-dialog-header{margin-bottom:12px}
  .weather-dialog-header h2{font-size:clamp(19px,2.7vw,27px);margin:0;letter-spacing:-.025em}
  .storybook-weather-dialog button,.storybook-weather-dialog select{box-sizing:border-box;min-height:42px;
    padding:6px 12px;border:1px solid #bdcecb;border-radius:11px;background:#fff;color:#254046;font:inherit}
  .storybook-weather-dialog button{cursor:pointer;font-weight:600}
  .weather-views button[aria-pressed=true]{border-color:#305a64;background:#305a64;color:#fff}
  .weather-toolbar{margin:14px 0 12px;flex-wrap:wrap}
  .weather-views{flex-wrap:wrap}
  .weather-provider-choice{display:flex;align-items:center;gap:7px;font-size:.9em}
  .weather-provider-choice select{max-width:min(50vw,230px)}
  .weather-feature{--sky:#deeeec;--horizon:#c1dedd;--ink:#254046;--sun:#ffcc77;--cloud:#fffdf2;
    position:relative;flex:1 0 auto;min-height:clamp(152px,31vh,310px);display:flex;align-items:center;isolation:isolate;
    overflow:hidden;border-radius:16px;color:var(--ink);background:linear-gradient(145deg,var(--sky),var(--horizon))}
  .storybook-weather-dialog[data-weather-view=windy] .weather-feature{display:none}
  .weather-feature::before,.weather-feature::after{content:"";position:absolute;inset:auto -20% -98% -20%;height:150%;
    border-radius:50%;background:#effbff55;z-index:-1;transform:rotate(-6deg)}
  .weather-feature::after{inset:auto -20% -115% -20%;background:#ffffff26;transform:rotate(8deg)}
  .weather-feature:is([data-effect=rain],[data-effect=storm],[data-effect=thunder],[data-effect=sleet]){
    --sky:#c1d3e1;--horizon:#8bb2c3;--cloud:#e5eff3}
  .weather-feature:is([data-effect=snow],[data-effect=fog]){--sky:#e9f2f3;--horizon:#c5dddf}
  .weather-feature[data-sky=night]{--sky:#253958;--horizon:#41576d;--ink:#f6fcff;--sun:#fff0bd;--cloud:#d5e7f0}
  .weather-feature-text{z-index:1;max-width:70%;padding:clamp(17px,5vw,82px)}
  .weather-provider-name,.weather-feature-readings{margin:0;line-height:1.35;font-weight:600}
  .weather-provider-name{font-size:.85em}
  .weather-feature-readings{font-size:.86em;margin-top:8px}
  .weather-attribution{margin:5px 0 0;font-size:.73em;line-height:1.2;opacity:.84}
  .weather-provider-name:empty,.weather-feature-temperature:empty,.weather-feature-readings:empty,.weather-attribution:empty{display:none}
  .weather-feature-temperature{margin:4px 0;font-size:clamp(44px,8vw,120px);line-height:.98;letter-spacing:-.055em;
    font-weight:750;font-variant-numeric:tabular-nums}
  .weather-feature h3{margin:3px 0;font-size:clamp(18px,3vw,31px);line-height:1.15}
  .weather-art{--sun:#e4a851;--cloud:#d1e7eb;display:block;position:relative;width:40px;height:31px;flex:none}
  .weather-feature>.weather-art{--sun:inherit;--cloud:inherit;position:absolute;inset:auto 17% auto auto;
    width:40px;height:31px;scale:5.5;transform-origin:center}
  .weather-art i{position:absolute;display:none}
  .weather-art-sun{width:19px;height:19px;top:1px;left:7px;border-radius:50%;background:var(--sun)}
  [data-sky=night] .weather-art-sun{background:#ffe9ae;box-shadow:-5px 2px 0 0 #405b7b inset}
  .weather-art-cloud{width:31px;height:10px;bottom:6px;left:5px;border-radius:12px;background:var(--cloud);
    box-shadow:-2px -7px 0 -1px var(--cloud),7px -9px 0 -3px var(--cloud)}
  .weather-art-drops{width:2px;height:5px;left:10px;bottom:0;border-radius:4px;
    background:#68a2bf;box-shadow:7px 0 #68a2bf,14px 0 #68a2bf;transform:skewX(-13deg)}
  [data-effect=clear] .weather-art-sun,[data-effect=partial] .weather-art-sun{display:block}
  [data-effect=clear] .weather-art-sun{left:11px;top:5px;width:20px;height:20px}
  [data-effect=clear][data-sky=night] .weather-art-sun{box-shadow:-5px 2px 0 0 #41576d inset}
  :is([data-effect=partial],[data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=rain],
    [data-effect=thunder],[data-effect=storm],[data-effect=sleet],[data-effect=snow]) .weather-art-cloud{display:block}
  :is([data-effect=rain],[data-effect=storm],[data-effect=sleet],[data-effect=snow]) .weather-art-drops{display:block}
  :is([data-effect=snow],[data-effect=sleet]) .weather-art-drops{width:3px;height:3px;background:#fff;
    box-shadow:7px 0 #fff,14px 0 #fff}
  [data-effect=fog] .weather-art-cloud{height:4px;bottom:10px;box-shadow:3px -6px 0 #ebf5f4,-3px 6px 0 #ebf5f4}
  [data-effect=wind] .weather-art-cloud{display:block;height:3px;bottom:12px;
    box-shadow:3px -5px 0 -1px var(--cloud),-3px 5px 0 -1px var(--cloud)}
  [data-effect=thunder] .weather-art-drops,[data-effect=storm] .weather-art-drops{display:block;left:19px;bottom:0;
    width:5px;height:8px;border-radius:0;background:#ffd279;box-shadow:none;
    clip-path:polygon(44% 0,100% 0,62% 43%,100% 43%,23% 100%,43% 57%,0 57%)}
  .weather-feature .weather-art-cloud{animation:weather-cloud-drift 5s ease-in-out infinite alternate}
  .weather-feature .weather-art-drops{animation:weather-rain-fall 1.1s linear infinite}
  .weather-feature[data-effect=clear] .weather-art-sun{animation:weather-sun-glow 4s ease-in-out infinite alternate}
  @keyframes weather-cloud-drift{to{translate:4px -1px}}
  @keyframes weather-rain-fall{from{translate:0 -2px;opacity:0}50%{opacity:1}to{translate:-1px 2px;opacity:.45}}
  @keyframes weather-sun-glow{to{filter:drop-shadow(0 0 6px #ffe5a6)}}
  .weather-periods{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(95px,1fr);gap:7px;overflow:auto;
    padding:2px 2px 8px;margin:0;list-style:none;scroll-snap-type:x proximity}
  .weather-periods:empty,.weather-forecast-status:empty{display:none}
  .weather-periods li{scroll-snap-align:start;display:flex;min-width:0;flex-direction:column;align-items:center;gap:4px;
    padding:clamp(10px,2vh,22px) 5px;border:1px solid #dbe8e4;border-radius:11px;background:#fff;text-align:center}
  .weather-periods time{font-size:.81em;font-weight:650;white-space:nowrap}
  .weather-periods strong{font-size:1.1em;font-variant-numeric:tabular-nums}
  .weather-periods small{color:#3f6671;font-size:.77em;line-height:1.2}
  .weather-forecast-status{margin:14px 0;color:#4b6365}
  .weather-windy{flex:1;min-height:0;display:flex;flex-direction:column}
  .weather-windy-map{flex:1;min-height:250px}
  .weather-windy-map iframe{display:block;box-sizing:border-box;width:100%;height:100%;min-height:250px;
    border:1px solid #bdcecb;border-radius:12px}
  .weather-windy a{display:inline-block;margin-top:8px;color:#245560}
  .storybook-weather-dialog[data-reduced-motion] .weather-feature i{animation:none}
  @media (prefers-reduced-motion:reduce){.weather-feature i{animation:none}}
  @media (max-width:700px){
    .storybook-weather-dialog{width:calc(100vw - 20px)}
    .weather-feature>.weather-art{right:16%;scale:2.6}
    .weather-toolbar{gap:8px}
    .weather-views button{font-size:.83em;padding-inline:7px}
    .weather-periods{grid-auto-columns:minmax(83px,1fr)}
  }
`;

function asTemperature(value, unit) {
  return Number.isFinite(value) ? `${Math.round(value)}${unit || '°'}` : '';
}

export function normalizeWeatherForecast(entries, type, now = Date.now()) {
  if (!Array.isArray(entries) || !Object.hasOwn(FORECAST_TYPES, type)) return [];
  const {limit, interval} = FORECAST_TYPES[type];
  const cutoff = now - (type === 'daily' ? DAY : 0);
  const horizon = now + limit * interval;
  return entries.flatMap(row => {
    const datetime = typeof row?.datetime === 'string' ? Date.parse(row.datetime) : NaN;
    return Number.isFinite(datetime) && datetime >= cutoff && datetime <= horizon ? [{
      datetime, condition:row.condition, temperature:row.temperature,
      low:row.templow, precipitation:row.precipitation_probability,
    }] : [];
  }).sort((a, b) => a.datetime - b.datetime).slice(0, limit);
}

export function windyMapUrl({latitude, longitude} = {}) {
  const located = Number.isFinite(latitude) && Math.abs(latitude) <= 90 &&
    Number.isFinite(longitude) && Math.abs(longitude) <= 180;
  const url = new URL('https://embed.windy.com/embed.html');
  url.search = new URLSearchParams({
    type:'map', location:'coordinates', overlay:'wind', level:'surface', zoom:located ? '8' : '2',
    metricRain:'default', metricTemp:'default', metricWind:'default',
    lat:located ? latitude.toFixed(1) : '0', lon:located ? longitude.toFixed(1) : '0',
  }).toString();
  return url.href;
}

function localTime(hass, type, datetime) {
  const options = type === 'daily' ? {weekday:'short'} : {hour:'numeric', minute:'2-digit'};
  try {
    return new Intl.DateTimeFormat(hass.locale?.language, {...options, timeZone:hass.config?.time_zone}).format(datetime);
  } catch {
    return new Intl.DateTimeFormat(undefined, options).format(datetime);
  }
}

export function createStorybookWeatherPanel(dialog, {onProviderChange} = {}) {
  const doc = dialog.ownerDocument;
  const host = doc.defaultView;
  const select = name => dialog.querySelector(`[data-weather-${name}]`);
  const provider = select('provider');
  const current = select('current');
  const providerName = select('provider-name');
  const temperature = select('temperature');
  const condition = select('condition');
  const readings = select('readings');
  const attribution = select('attribution');
  const forecast = select('forecast');
  const status = select('status');
  const periods = select('hours');
  const windy = select('windy');
  const map = select('map');
  const tabs = [...dialog.querySelectorAll('[data-weather-view]')];
  const cache = new Map();
  const pending = new Set();
  let hass;
  let fallback;
  let providerKey;
  let paintKey;
  let currentId;
  let currentObservation;
  let currentSolar;
  let currentOnline;
  let selected;
  let view = 'hourly';
  try { selected = host?.localStorage.getItem(PROVIDER_KEY); }
  catch { /* The current page can still use a provider override. */ }

  const providers = () => Object.keys(hass?.states ?? {}).filter(id => WEATHER_ENTITY.test(id));
  const selectedId = () => WEATHER_ENTITY.test(selected ?? '') && hass?.states?.[selected] ? selected : null;
  const defaultId = () => WEATHER_ENTITY.test(fallback ?? '') && hass?.states?.[fallback] ? fallback : providers()[0];
  const entityId = () => selectedId() ?? defaultId();
  const entity = () => hass?.states?.[entityId()];
  const entityName = id => {
    const attributes = hass?.states?.[id]?.attributes ?? {};
    const label = String(attributes.friendly_name || id);
    const attribution = typeof attributes.attribution === 'string' ? attributes.attribution.toLowerCase() : '';
    const platform = PROVIDER_NAMES.get(hass?.entities?.[id]?.platform) ??
      [...PROVIDER_NAMES.values()].find(name => attribution.includes(name.toLowerCase()));
    return platform && !label.toLowerCase().includes(platform.toLowerCase()) ? `${platform} · ${label}` : label;
  };
  const connected = () => Boolean(hass && hass.connected !== false);
  const hasForecast = type => {
    const features = entity()?.attributes?.supported_features;
    return !Number.isInteger(features) || Boolean(features & FORECAST_TYPES[type].bit);
  };

  function paintProviders() {
    const names = providers().map(id => [id, String(entityName(id))])
      .sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]));
    const signature = JSON.stringify([defaultId(), names]);
    if (providerKey !== signature) {
      const option = (id, label) => {
        const element = doc.createElement('option');
        element.value = id;
        element.textContent = label;
        return element;
      };
      provider.replaceChildren(option('', 'Dashboard default'), ...names.map(([id, name]) => option(id, name)));
      providerKey = signature;
    }
    provider.value = selectedId() ?? '';
    provider.disabled = !names.length;
  }

  function paintCurrent() {
    const id = entityId();
    const observation = entity();
    const attributes = observation?.attributes ?? {};
    const solar = hass?.states?.['sun.sun']?.state;
    const online = connected();
    if (currentId === id && currentObservation === observation && currentSolar === solar && currentOnline === online) return;
    currentId = id;
    currentObservation = observation;
    currentSolar = solar;
    currentOnline = online;
    const available = online && observation && !['unavailable','unknown'].includes(observation.state);
    const art = storybookWeather({condition:available ? observation.state : undefined, daylightKnown:
      ['above_horizon','below_horizon'].includes(solar), night:solar === 'below_horizon'}, !connected());
    current.dataset.effect = art.effect;
    current.dataset.sky = art.sky;
    providerName.textContent = id ? entityName(id) : '';
    condition.textContent = art.label;
    temperature.textContent = available ? asTemperature(attributes.temperature, attributes.temperature_unit) : '';
    const details = [];
    if (available && Number.isFinite(attributes.apparent_temperature)) {
      details.push(`Feels like ${asTemperature(attributes.apparent_temperature, attributes.temperature_unit)}`);
    }
    if (available && Number.isFinite(attributes.wind_speed) && attributes.wind_speed >= 0) {
      details.push(`Wind ${Math.round(attributes.wind_speed * 10) / 10} ${attributes.wind_speed_unit || ''}`.trim());
    }
    if (available && Number.isFinite(attributes.humidity)) details.push(`Humidity ${Math.round(attributes.humidity)}%`);
    readings.textContent = details.join(' · ');
    attribution.textContent = available && typeof attributes.attribution === 'string' ? attributes.attribution : '';
  }

  function makePeriod(row, type) {
    const unit = entity()?.attributes?.temperature_unit;
    const period = doc.createElement('li');
    const time = doc.createElement('time');
    time.dateTime = new Date(row.datetime).toISOString();
    time.textContent = localTime(hass, type, row.datetime);
    period.insertAdjacentHTML('afterbegin', weatherArt);
    const art = storybookWeather({condition:row.condition});
    period.dataset.effect = art.effect;
    period.dataset.sky = art.sky;
    const reading = doc.createElement('strong');
    reading.textContent = [asTemperature(row.temperature, unit), asTemperature(row.low, unit)].filter(Boolean).join(' / ') || '–';
    const detail = doc.createElement('small');
    detail.textContent = art.label;
    period.prepend(time);
    period.append(reading, detail);
    if (Number.isFinite(row.precipitation) && row.precipitation >= 0 && row.precipitation <= 100) {
      const chance = doc.createElement('small');
      chance.textContent = `${Math.round(row.precipitation)}% precip.`;
      period.append(chance);
    }
    return period;
  }

  async function fetchForecast(id, type, key) {
    const session = hass;
    pending.add(key);
    try {
      const result = await session.callWS({type:'call_service', domain:'weather', service:'get_forecasts',
        target:{entity_id:id}, service_data:{type}, return_response:true});
      const response = result?.response ?? result?.result?.response ?? result;
      const rows = normalizeWeatherForecast(response?.[id]?.forecast, type);
      cache.set(key, {rows, expires:Date.now() + (rows.length ? FORECAST_TTL : RETRY_DELAY)});
    } catch {
      cache.set(key, {rows:[], expires:Date.now() + RETRY_DELAY});
    } finally {
      pending.delete(key);
      if (dialog.open && entityId() === id && view === type) paintForecast();
    }
  }

  function paintForecast() {
    if (view === 'windy') return;
    const id = entityId();
    const type = view;
    const available = connected() && id && hasForecast(type) && typeof hass.callWS === 'function';
    const key = `${id}:${type}`;
    const entry = cache.get(key);
    const fresh = entry && entry.expires > Date.now();
    if (available && !fresh && !pending.has(key)) void fetchForecast(id, type, key);
    const rows = available && fresh ? entry.rows : [];
    const message = !connected() ? 'Home Assistant is offline.' : !id ? 'Connect a weather provider in Home Assistant.' :
      !available || fresh && !rows.length ? `${FORECAST_TYPES[type].label} forecast is unavailable from this provider.` :
        fresh ? '' : 'Loading forecast…';
    const signature = JSON.stringify([key, message, entity()?.attributes?.temperature_unit, rows]);
    if (signature === paintKey) return;
    paintKey = signature;
    status.textContent = message;
    periods.replaceChildren(...rows.map(row => makePeriod(row, type)));
  }

  function setView(next) {
    view = next;
    dialog.dataset.weatherView = view;
    for (const tab of tabs) tab.setAttribute('aria-pressed', String(tab.dataset.weatherView === view));
    windy.hidden = view !== 'windy';
    forecast.hidden = view === 'windy';
    if (view !== 'windy') {
      map.replaceChildren();
      paintForecast();
    } else if (!map.firstChild) {
      const frame = doc.createElement('iframe');
      frame.title = 'Windy weather map';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer';
      frame.src = windyMapUrl(hass?.config);
      map.append(frame);
    }
  }

  function open() {
    if (dialog.open) return;
    dialog.showModal();
    paintProviders();
    paintCurrent();
    setView(!hasForecast('hourly') && hasForecast('daily') ? 'daily' : 'hourly');
  }

  provider.addEventListener('change', () => {
    selected = provider.value;
    try {
      if (selected) host?.localStorage.setItem(PROVIDER_KEY, selected);
      else host?.localStorage.removeItem(PROVIDER_KEY);
    } catch { /* Preserve the selection for this page. */ }
    paintCurrent();
    if (view === 'hourly' && !hasForecast('hourly') && hasForecast('daily')) setView('daily');
    else if (view === 'daily' && !hasForecast('daily') && hasForecast('hourly')) setView('hourly');
    else paintForecast();
    onProviderChange?.(selectedId());
  });
  for (const tab of tabs) tab.addEventListener('click', () => setView(tab.dataset.weatherView));
  select('close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (!dialog.open) map.replaceChildren(); });

  return {
    open,
    close() { if (dialog.open) dialog.close(); },
    update(nextHass, defaultEntityId, {reduceMotion = false} = {}) {
      hass = nextHass;
      fallback = defaultEntityId;
      dialog.toggleAttribute('data-reduced-motion', reduceMotion);
      if (!dialog.open) return;
      paintProviders();
      paintCurrent();
      paintForecast();
    },
    get selectedEntityId() { return selectedId(); },
    get effectiveEntityId() { return entityId(); },
  };
}
