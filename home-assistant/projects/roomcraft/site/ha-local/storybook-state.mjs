import {combineCommuteReadings, commuteReading, readStorybookCommutes} from './storybook-commutes.mjs';
import '../public/light-capabilities.js';

const CONTROL = 'custom:roomcraft-object-control';
const CAMERA = 'custom:roomcraft-camera-thumbnail';
const MOTION_WEATHER = new Set(['pouring', 'rainy', 'lightning', 'lightning-rainy', 'snowy',
  'snowy-rainy', 'hail', 'windy', 'windy-variant', 'fog']);
const ACTIVE_HVAC = new Set(['cooling', 'heating', 'drying', 'fan', 'preheating', 'defrosting']);
const ACTIVE_TV = new Set(['on', 'playing', 'paused', 'buffering']);
const VACUUM_POSITION_MAX_AGE_MS = 20 * 60 * 1000;
const SPEED_FACTORS = new Map([['m/s', 1], ['km/h', 1 / 3.6], ['mph', .44704], ['kn', .514444], ['ft/s', .3048]]);
const COMPASS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const BEACH_CLOCKS = new Map();

/** Send only the available control names to Studio's authenticated entity picker. */
export function storybookLightControlLabels(entityId, attributes) {
  if (typeof entityId !== 'string' || !entityId.startsWith('light.')) return undefined;
  const root = typeof window === 'undefined' ? globalThis : window;
  return root.RoomcraftLightCapabilities.describe(attributes).labels;
}

function beachClock(now, timeZone, night) {
  if (typeof timeZone !== 'string' || !timeZone || !Number.isFinite(now)) {
    return {activity: night ? 'overnight' : 'day'};
  }
  if (!BEACH_CLOCKS.has(timeZone)) {
    let clock;
    try {
      clock = new Intl.DateTimeFormat('en-US', {
        timeZone, hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23',
      });
    } catch (error) {
      if (!(error instanceof RangeError)) throw error;
    }
    BEACH_CLOCKS.set(timeZone, clock);
  }
  const clock = BEACH_CLOCKS.get(timeZone);
  if (!clock) return {activity: night ? 'overnight' : 'day'};
  const {hour, minute, second} = Object.fromEntries(clock.formatToParts(now)
    .filter(part => part.type !== 'literal').map(({type, value}) => [type, Number(value)]));
  const nextHour = Math.floor(now / 1000) * 1000 + ((60 - minute) * 60 - second) * 1000;
  if (hour < 5 || hour >= 23 || (night && hour < 11)) return {activity: 'overnight', nextHour};
  if (night) return {activity: 'evening', nextHour};
  return {activity: hour < 11 ? 'morning' : 'day', nextHour};
}

function bearing(value) {
  if (Number.isFinite(value) && value >= 0 && value <= 360) return value % 360;
  const index = typeof value === 'string' ? COMPASS.indexOf(value.trim().toUpperCase()) : -1;
  return index >= 0 ? index * 22.5 : undefined;
}

function windSpeed(value, unit) {
  if (!Number.isFinite(value) || value < 0) return undefined;
  if (unit === 'Beaufort' && value <= 12) return .836 * value ** 1.5;
  const factor = SPEED_FACTORS.get(unit);
  return factor === undefined ? undefined : value * factor;
}

/** Select data from the same dashboard projection that powers the plan. */
export function readStorybookConfig(config) {
  const layout = config?.roomcraft_layout;
  const plan = config && Object.hasOwn(config, 'roomcraft_plan') ? config.roomcraft_plan :
    config?.views?.find(view => view.path === 'plan')?.cards?.find(card => card.type === 'picture-elements');
  if (layout?.version !== 2 || !Array.isArray(layout.items) || !Array.isArray(layout.rooms) ||
      !Array.isArray(layout.walls) || plan?.type !== 'picture-elements' || !Array.isArray(plan.elements)) {
    throw new Error('A published Roomcraft layout is required.');
  }
  const items = new Map(layout.items.map(item => [item.id, item]));
  const controls = plan.elements.filter(element => {
    const item = items.get(element.roomcraft_item_id);
    return item && (element.type === CONTROL && item.entityId === element.entity ||
      element.type === CAMERA && item.type === 'cameraThumbnail' && item.entityId === element.camera_entity);
  });
  const weather = plan.elements.find(element => element.type === 'custom:roomcraft-weather-outdoor') ?? {};
  const watch = new Set([weather.weather_entity, weather.sun_entity, weather.moon_entity, 'sun.sun']);
  const televisions = new Map();
  for (const item of layout.items) {
    if (item.type === 'presenceSwitch' && item.presenceTrackEntityId) watch.add(item.presenceTrackEntityId);
    if (item.type === 'tv' && /^media_player\.[a-z0-9_]+$/.test(item.entityId || '')) {
      televisions.set(item.id, item.entityId);
      watch.add(item.entityId);
    }
  }
  for (const element of controls) {
    for (const key of ['entity', 'roomcraft_tap_entity', 'roomcraft_hold_entity',
      'roomcraft_presence_entity', 'roomcraft_vacuum_map_entity', 'camera_entity', 'image_entity']) {
      if (element[key]) watch.add(element[key]);
    }
    for (const event of element.event_entities ?? []) watch.add(event);
  }
  watch.delete(undefined);
  return { layout, items, controls, weather, watch, televisions };
}

function vacuumPosition(element, snapshot, state, active, now) {
  const map = snapshot[element.roomcraft_vacuum_map_entity];
  const p = map?.attributes?.vacuum_position;
  const transform = element.roomcraft_vacuum_position_transform;
  const validCoordinate = value => Number.isFinite(value) ||
    (typeof value === 'string' && value.trim() !== '' && Number.isFinite(Number(value)));
  const expiresAt = Date.parse(map?.last_updated ?? '') + VACUUM_POSITION_MAX_AGE_MS;
  if (['unavailable', 'unknown'].includes(state) || ['unavailable', 'unknown'].includes(map?.state) ||
      !p || !validCoordinate(p.x) || !validCoordinate(p.y) ||
      !Array.isArray(transform) || transform.length !== 6 || !transform.every(Number.isFinite) ||
      !Number.isFinite(expiresAt) || (active && now >= expiresAt)) return;
  const [a, b, c, d, e, f] = transform;
  const x = a * Number(p.x) + b * Number(p.y) + c;
  const y = d * Number(p.x) + e * Number(p.y) + f;
  if (Number.isFinite(x) && Number.isFinite(y) && x >= 0 && x <= 1536 && y >= 80 && y <= 944) {
    return {position: {x, y}, observedAt: expiresAt - VACUUM_POSITION_MAX_AGE_MS,
      expiresAt: active ? expiresAt : undefined};
  }
}

/** A render input only. The snapshot and clock never enter the saved project. */
export function storybookFrame(model, snapshot = {}, now = 0, timeZone) {
  const states = Object.create(null);
  const weather = snapshot[model.weather.weather_entity];
  const sun = snapshot[model.weather.sun_entity || 'sun.sun'];
  const moon = snapshot[model.weather.moon_entity];
  const {elevation, azimuth, rising} = sun?.attributes ?? {};
  const weatherAttributes = weather?.attributes ?? {};
  const daylightKnown = sun?.state === 'above_horizon' || sun?.state === 'below_horizon';
  const environment = {
    night: daylightKnown ? sun.state === 'below_horizon' : weather?.state === 'clear-night',
    daylightKnown,
    condition: weather?.state ?? 'unavailable',
    moonPhase: moon?.state ?? '',
    temperature: weatherAttributes.temperature,
    unit: weatherAttributes.temperature_unit ?? '',
    windSpeed: windSpeed(weatherAttributes.wind_speed, weatherAttributes.wind_speed_unit),
    windBearing: bearing(weatherAttributes.wind_bearing),
  };
  if (Number.isFinite(weatherAttributes.cloud_coverage) && weatherAttributes.cloud_coverage >= 0 &&
      weatherAttributes.cloud_coverage <= 100) environment.cloudCoverage = weatherAttributes.cloud_coverage;
  const {activity, nextHour} = beachClock(now, timeZone, environment.night);
  environment.beachActivity = activity;
  if (environment.daylightKnown) {
    if (Number.isFinite(elevation) && Math.abs(elevation) <= 90) environment.sunElevation = elevation;
    if (Number.isFinite(azimuth)) environment.sunAzimuth = bearing(azimuth);
    if (typeof rising === 'boolean') environment.sunRising = rising;
  }
  if (Number.isFinite(moon?.attributes?.azimuth)) environment.moonAzimuth = bearing(moon.attributes.azimuth);
  if (Number.isFinite(moon?.attributes?.elevation) && Math.abs(moon.attributes.elevation) <= 90) {
    environment.moonElevation = moon.attributes.elevation;
  }
  let moving = MOTION_WEATHER.has(environment.condition) || environment.windSpeed > 0;
  let nextRefreshAt = nextHour;
  for (const element of model.controls) {
    if (element.type !== CONTROL) continue;
    const entity = snapshot[element.entity];
    const state = entity?.state ?? 'unavailable';
    const attributes = entity?.attributes ?? {};
    const presence = snapshot[element.roomcraft_presence_entity]?.state ?? 'unavailable';
    const kind = element.roomcraft_visual_kind;
    const domain = element.entity.split('.')[0];
    const active = domain === 'climate' ? state !== 'off' && state !== 'unknown' &&
      state !== 'unavailable' && ACTIVE_HVAC.has(attributes.hvac_action) :
      domain === 'vacuum' ? ['cleaning', 'returning'].includes(state) : state === 'on';
    const telemetry = kind === 'vacuum' ? vacuumPosition(element, snapshot, state, active, now) : undefined;
    const position = telemetry?.position;
    if (telemetry?.expiresAt !== undefined) nextRefreshAt = Math.min(nextRefreshAt ?? Infinity, telemetry.expiresAt);
    states[element.roomcraft_item_id] = {state, attributes, presence, active, position,
      positionObservedAt: telemetry?.observedAt};
    moving ||= presence === 'on' || ['opening', 'closing'].includes(state) ||
      active && (['fan', 'climate', 'device'].includes(kind) || kind === 'vacuum' && Boolean(position));
  }
  for (const [id, entity] of model.televisions ?? []) {
    const state = snapshot[entity]?.state ?? 'unavailable';
    const active = ACTIVE_TV.has(state);
    states[id] = {state, active, presence: 'unavailable', attributes: {}};
    moving ||= active;
  }
  return {states, environment, moving, nextRefreshAt};
}

/** Render-only dashboard appearance for Studio. Send only attributes used by the miniature. */
export function storybookPreview(config, snapshot, now = 0, timeZone) {
  let model;
  try {
    model = readStorybookConfig(config);
  } catch {
    return null;
  }
  const frame = storybookFrame(model, snapshot, now, timeZone);
  const states = Object.create(null);
  for (const [id, state] of Object.entries(frame.states)) {
    const attributes = {};
    for (const key of ['brightness', 'percentage', 'current_position', 'current_tilt_position']) {
      if (Number.isFinite(state.attributes[key])) attributes[key] = state.attributes[key];
    }
    const rgb = state.attributes.rgb_color;
    if (Array.isArray(rgb) && rgb.length === 3 && rgb.every(Number.isFinite)) attributes.rgb_color = rgb;
    if (ACTIVE_HVAC.has(state.attributes.hvac_action)) attributes.hvac_action = state.attributes.hvac_action;
    states[id] = {entityId: model.items.get(id).entityId, state: state.state,
      active: state.active, presence: state.presence, attributes};
  }
  const routes = readStorybookCommutes(config.roomcraft_commutes);
  const traffic = combineCommuteReadings(routes.map(route => commuteReading(route, snapshot, now))).profile
    ?? {severity: 'ambient'};
  return {states, environment: {...frame.environment, traffic}};
}

/**
 * Keep targets centered whenever possible. Prioritize the most precise fixture
 * first and place nearby targets on a bounded grid when hit areas intersect.
 * Prefer clear space around optional screen-space regions while keeping the
 * ordinary collision-free placement available as a fallback.
 */
export function placeStorybookTargets(targets, width, height) {
  const placed = [];
  const directions = [[0,0], [1,0], [-1,0], [0,1], [0,-1], [1,1], [-1,1], [1,-1], [-1,-1]];
  const ordered = [...targets].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  for (const target of ordered) {
    const w = Math.min(target.w, width);
    const h = Math.min(target.h, height);
    const keepClear = target.keepClear ?? [];
    const preferClear = keepClear.length > 0;
    const maxRing = preferClear ? 5 : 3;
    let fallback;
    let nearest;
    let nearestDistance = Infinity;
    for (let ring = 0; ring <= maxRing && (preferClear || !fallback); ring++) {
      for (const [dx, dy] of ring === 0 ? directions.slice(0, 1) : directions.slice(1)) {
        const x = clamp(target.x + dx * ring * 34, w / 2, width - w / 2);
        const y = clamp(target.y + dy * ring * 34, h / 2, height - h / 2);
        const overlapsTarget = placed.some(p => Math.abs(x - p.x) < (w + p.w) / 2 + 2 &&
          Math.abs(y - p.y) < (h + p.h) / 2 + 2);
        if (overlapsTarget) continue;
        if (ring <= 3 && !fallback) fallback = {...target, x, y, w, h};
        if (!preferClear) break;
        if (keepClear.some(rect => x + w / 2 > rect.left && x - w / 2 < rect.right &&
            y + h / 2 > rect.top && y - h / 2 < rect.bottom)) continue;
        const distance = Math.hypot(x - target.x, y - target.y);
        if (distance < nearestDistance) {
          nearest = {...target, x, y, w, h};
          nearestDistance = distance;
        }
      }
    }
    const chosen = nearest ?? fallback;
    if (chosen) placed.push(chosen);
  }
  return placed;
}

/** Keep measured detail labels near their controls and away from other hit areas. */
export function placeStorybookDetails(targets, width, height) {
  if (width <= 0 || height <= 0) return [];
  const obstacles = targets.map(({x, y, w, h}) => ({
    left: x - w / 2, top: y - h / 2, right: x + w / 2, bottom: y + h / 2,
  }));
  const placed = [];
  const gap = 7;
  const clamp = (value, max) => Math.min(Math.max(value, 0), max);
  for (const {id, x, y, w, h, detail} of targets) {
    if (!detail || !(detail.width > 0 && detail.height > 0)) continue;
    const labelWidth = Math.min(width, detail.width);
    const labelHeight = Math.min(height, detail.height);
    const maxLeft = width - labelWidth;
    const maxTop = height - labelHeight;
    const lefts = [x - w / 2 - labelWidth - gap, x - labelWidth / 2, x + w / 2 + gap];
    const tops = [y - h / 2 - labelHeight - gap, y - labelHeight / 2, y + h / 2 + gap];
    let best;
    function consider(left, top) {
      left = clamp(left, maxLeft);
      top = clamp(top, maxTop);
      const right = left + labelWidth;
      const bottom = top + labelHeight;
      const distance = (left - lefts[1]) ** 2 + (top - tops[1]) ** 2;
      let overlap = 0;
      for (const obstacle of obstacles) {
        const spanX = Math.min(right, obstacle.right) - Math.max(left, obstacle.left);
        const spanY = Math.min(bottom, obstacle.bottom) - Math.max(top, obstacle.top);
        if (spanX > 0 && spanY > 0) overlap += spanX * spanY;
        if (best && overlap > best.overlap) return;
      }
      if (!best || overlap < best.overlap || (overlap === best.overlap && distance < best.distance)) {
        best = {left, top, right, bottom, overlap, distance};
      }
    }
    for (let col = 0; col < lefts.length; col++) {
      for (let row = 0; row < tops.length; row++) {
        if (col !== 1 || row !== 1) consider(lefts[col], tops[row]);
      }
    }
    if (best.overlap > 0) {
      // In a tight cluster, overlap only changes when two rectangle edges cross.
      // Try those alignments and the centered axes to find free space or the least overlap.
      const availableLefts = new Set([0, maxLeft, clamp(lefts[1], maxLeft)]);
      const availableTops = new Set([0, maxTop, clamp(tops[1], maxTop)]);
      for (const obstacle of obstacles) {
        for (const edge of [obstacle.left, obstacle.right]) {
          availableLefts.add(clamp(edge, maxLeft));
          availableLefts.add(clamp(edge - labelWidth, maxLeft));
        }
        for (const edge of [obstacle.top, obstacle.bottom]) {
          availableTops.add(clamp(edge, maxTop));
          availableTops.add(clamp(edge - labelHeight, maxTop));
        }
      }
      for (const left of availableLefts) {
        for (const top of availableTops) consider(left, top);
      }
    }
    obstacles.push(best);
    placed.push({id, left: best.left, top: best.top});
  }
  return placed;
}
