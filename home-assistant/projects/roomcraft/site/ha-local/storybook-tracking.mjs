import polygonClipping from 'polygon-clipping';

const SCHEMA = 'roomcraft-presence-v1';
const TRACK_MAX_AGE = 4500;
const SENSOR_ID = /^sensor\.[a-z0-9_]+$/;
const MAX_TRACKS = 4;
const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;
const PLAN_BOUNDARY = [[[0,0], [PLAN_WIDTH,0], [PLAN_WIDTH,PLAN_HEIGHT], [0,PLAN_HEIGHT], [0,0]]];
// Approximate horizontal field from the VZM32-SN manual, printed page 33.
// Each row is forward Y, left X, right X in centimetres.
const INOVELLI_FIELD = [
  [0, 0, 0], [25, -135, 100], [50, -170, 140], [100, -210, 210], [150, -240, 270],
  [200, -260, 290], [250, -290, 310], [300, -320, 340], [350, -320, 360], [400, -300, 340],
  [450, -290, 310], [500, -250, 280], [550, -190, 200], [580, -100, 120], [600, 0, 0],
];
const RADAR_FIELDS = new Map([
  ['inovelli-vzm32-sn', {
    rangeMeters: 6,
    ring: [
      ...INOVELLI_FIELD.map(([forward, left]) => [left, forward]),
      ...INOVELLI_FIELD.slice(1, -1).reverse().map(([forward, , right]) => [right, forward]),
    ],
  }],
]);

function inPlan(x, y) {
  return x >= 0 && x <= PLAN_WIDTH && y >= 0 && y <= PLAN_HEIGHT;
}

export function validTrackTransform(value) {
  return Array.isArray(value) && value.length === 6 &&
    value.every(n => Number.isFinite(n) && Math.abs(n) <= 10000) &&
    Math.abs(value[0] * value[4] - value[1] * value[3]) > 1e-5;
}

function configuredRing(bounds) {
  if (!Array.isArray(bounds) || bounds.length !== 4 ||
      !bounds.every(value => Number.isFinite(value) && Math.abs(value) <= 600)) return null;
  const [xMin, xMax, yMin, yMax] = bounds;
  if (xMin >= xMax || yMin >= yMax) return null;
  return [[xMin,yMin], [xMax,yMin], [xMax,yMax], [xMin,yMax]];
}

/** Project configured bounds and nominal coverage with the live tracking calibration. */
export function readDetectionZones(items) {
  const zones = [];
  let sensorCount = 0;
  for (const item of items) {
    const transform = item.presenceTrackTransform;
    if (item.type !== 'presenceSwitch' || !validTrackTransform(transform)) continue;
    const [a,b,c,d,e,f] = transform;
    const profile = RADAR_FIELDS.get(item.presenceTrackProfile);
    // Radar +Y projects along the second column of the affine transform.
    const forwardLength = Math.hypot(b, e);
    const marker = inPlan(c, f) ? {origin: {x:c, y:f}, forward: {x:b / forwardLength, y:e / forwardLength}} : {};
    const start = zones.length;
    for (const [kind, ring] of [
      ['configured', configuredRing(item.presenceTrackZone)],
      ['nominal', profile?.ring],
    ]) {
      if (!ring) continue;
      const projected = ring.map(([x,y]) => [a*x + b*y + c, d*x + e*y + f]);
      for (const [outline] of polygonClipping.intersection([projected], PLAN_BOUNDARY)) {
        zones.push({
          id: item.id, kind, points: outline.slice(0, -1).map(([x,y]) => ({x,y})), ...marker,
          ...(kind === 'nominal' ? {rangeMeters: profile.rangeMeters} : {}),
        });
      }
    }
    if (zones.length > start && ++sensorCount === 12) break;
  }
  return zones;
}

export function trackingSnapshots(snapshot = {}, ids = []) {
  const result = {};
  for (const id of new Set(ids)) {
    if (!SENSOR_ID.test(id)) continue;
    const state = snapshot[id];
    const attrs = state?.attributes;
    if (attrs?.tracking_schema !== SCHEMA) continue;
    const seen = new Set();
    const tracks = [];
    for (const track of Array.isArray(attrs.tracks) ? attrs.tracks.slice(0, MAX_TRACKS) : []) {
      if (!Number.isInteger(track?.id) || track.id < -128 || track.id > 255 || seen.has(track.id) ||
          ![track.x, track.y].every(value => Number.isFinite(value) && Math.abs(value) <= 800)) continue;
      seen.add(track.id);
      const position = {id: track.id, x: track.x, y: track.y};
      if (Number.isFinite(track.z) && Math.abs(track.z) <= 800) position.z = track.z;
      if (Number.isFinite(track.speed) && Math.abs(track.speed) <= 32768) position.speed = track.speed;
      tracks.push(position);
    }
    result[id] = {state: state.state, attributes: {
      tracking_schema: SCHEMA,
      observed_at: Number.isFinite(attrs.observed_at) ? attrs.observed_at : null,
      zones_observed_at: Number.isFinite(attrs.zones_observed_at) ? attrs.zones_observed_at : null,
      zones: Array.isArray(attrs.zones) ? attrs.zones.slice(0, 4).map(value => typeof value === 'boolean' ? value : null) : [],
      tracks,
    }};
  }
  return result;
}

export function trackingStatus(item, snapshot, now) {
  const state = trackingSnapshots(snapshot, [item.presenceTrackEntityId])[item.presenceTrackEntityId];
  if (!state || state.state === 'unavailable') return {count: null, zones: []};
  const {observed_at: observed, zones_observed_at: zoneAt, tracks, zones} = state.attributes;
  const recent = time => Number.isFinite(time) && time <= now + 1000 && now - time < TRACK_MAX_AGE;
  const count = state.state === '0' ? 0 : state.state !== 'unknown' && recent(observed) ? tracks.length : null;
  return {count, zones: recent(zoneAt) ? zones : []};
}

/** Turn current device coordinates into anonymous layout markers. */
export function readPersonTracks(items, snapshots, now = Date.now()) {
  const result = [];
  const used = new Set();
  for (const item of items) {
    const entity = item.presenceTrackEntityId;
    const transform = item.presenceTrackTransform;
    if (item.type !== 'presenceSwitch' || !SENSOR_ID.test(entity || '') ||
        used.has(entity) || !validTrackTransform(transform)) continue;
    used.add(entity);
    const state = trackingSnapshots(snapshots, [entity])[entity];
    if (!state || ['unknown', 'unavailable'].includes(state.state)) continue;
    const {observed_at: observed, tracks} = state.attributes;
    if (!Number.isFinite(observed) || observed > now + 1000 || now - observed >= TRACK_MAX_AGE) continue;
    const [a,b,c,d,e,f] = transform;
    for (const track of tracks) {
      const x = a * track.x + b * track.y + c;
      const y = d * track.x + e * track.y + f;
      if (inPlan(x, y)) {
        result.push({id: entity + ':' + track.id, x, y, expiresAt: observed + TRACK_MAX_AGE});
      }
    }
  }
  return result;
}
