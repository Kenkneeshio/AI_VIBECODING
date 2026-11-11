const CONTROL = 'custom:roomcraft-object-control';
const CAMERA = 'custom:roomcraft-camera-thumbnail';
const MOTION_WEATHER = new Set(['pouring', 'rainy', 'lightning-rainy', 'snowy',
  'snowy-rainy', 'hail', 'windy', 'windy-variant', 'fog']);
const ACTIVE_HVAC = new Set(['cooling', 'heating', 'drying', 'fan', 'preheating', 'defrosting']);

/** Select data from the same dashboard projection that powers the plan. */
export function readStorybookConfig(config) {
  const layout = config?.roomcraft_layout;
  const plan = config?.views?.find(view => view.path === 'plan')?.cards
    ?.find(card => card.type === 'picture-elements');
  if (layout?.version !== 2 || !Array.isArray(layout.items) || !Array.isArray(layout.rooms) ||
      !Array.isArray(layout.walls) || !Array.isArray(plan?.elements)) {
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
  for (const item of layout.items) {
    if (item.type === 'presenceSwitch' && item.presenceTrackEntityId) watch.add(item.presenceTrackEntityId);
  }
  for (const element of controls) {
    for (const key of ['entity', 'roomcraft_tap_entity', 'roomcraft_hold_entity',
      'roomcraft_presence_entity', 'roomcraft_vacuum_map_entity', 'camera_entity', 'image_entity']) {
      if (element[key]) watch.add(element[key]);
    }
    for (const event of element.event_entities ?? []) watch.add(event);
  }
  watch.delete(undefined);
  return { layout, items, controls, weather, watch };
}

function vacuumPosition(element, snapshot, state, now) {
  const map = snapshot[element.roomcraft_vacuum_map_entity];
  const p = map?.attributes?.vacuum_position;
  const transform = element.roomcraft_vacuum_position_transform;
  const age = now - Date.parse(map?.last_updated ?? '');
  if (!p || p.x == null || p.y == null || !Array.isArray(transform) || transform.length !== 6 ||
      !Number.isFinite(age) || (['cleaning', 'returning'].includes(state) && age > 20 * 60 * 1000)) return;
  const [a, b, c, d, e, f] = transform;
  const x = a * Number(p.x) + b * Number(p.y) + c;
  const y = d * Number(p.x) + e * Number(p.y) + f;
  if (Number.isFinite(x) && Number.isFinite(y) && x >= 0 && x <= 1536 && y >= 80 && y <= 944) return {x, y};
}

/** A render input only. The snapshot and clock never enter the saved project. */
export function storybookFrame(model, snapshot = {}, now = 0) {
  const states = Object.create(null);
  const weather = snapshot[model.weather.weather_entity];
  const sun = snapshot[model.weather.sun_entity || 'sun.sun']?.state;
  const environment = {
    night: sun === 'below_horizon',
    daylightKnown: sun === 'above_horizon' || sun === 'below_horizon',
    condition: weather?.state ?? 'unavailable',
    moonPhase: snapshot[model.weather.moon_entity]?.state ?? '',
    temperature: weather?.attributes?.temperature,
    unit: weather?.attributes?.temperature_unit ?? ''
  };
  let moving = MOTION_WEATHER.has(environment.condition);
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
    const position = kind === 'vacuum' ? vacuumPosition(element, snapshot, state, now) : undefined;
    states[element.roomcraft_item_id] = {state, attributes, presence, active, position};
    moving ||= presence === 'on' || ['opening', 'closing'].includes(state) ||
      active && ['fan', 'climate', 'vacuum', 'device'].includes(kind);
  }
  return {states, environment, moving};
}

/** Render-only dashboard appearance for Studio. Send only attributes used by the miniature. */
export function storybookPreview(config, snapshot) {
  let model;
  try {
    model = readStorybookConfig(config);
  } catch {
    return null;
  }
  const frame = storybookFrame(model, snapshot);
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
  return {states, environment: frame.environment};
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
