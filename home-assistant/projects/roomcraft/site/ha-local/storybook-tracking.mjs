import polygonClipping from 'polygon-clipping';

const SCHEMA = 'roomcraft-presence-v1';
const TRACK_MAX_AGE = 4500;
const SENSOR_ID = /^sensor\.[a-z0-9_]+$/;
const MAX_TRACKS = 4;
const PLAN_BOUNDARY = [[[0,0], [1536,0], [1536,1024], [0,1024], [0,0]]];

export function validTrackTransform(value) {
  return Array.isArray(value) && value.length === 6 &&
    value.every(n => Number.isFinite(n) && Math.abs(n) <= 10000) &&
    Math.abs(value[0] * value[4] - value[1] * value[3]) > 1e-5;
}

/** Project the configured XY bounds onto the same floor map used by live targets. */
export function readDetectionZones(items) {
  const zones = [];
  for (const item of items) {
    const bounds = item.presenceTrackZone;
    const transform = item.presenceTrackTransform;
    if (item.type !== 'presenceSwitch' || !validTrackTransform(transform) ||
        !Array.isArray(bounds) || bounds.length !== 4 ||
        !bounds.every(value => Number.isFinite(value) && Math.abs(value) <= 600)) continue;
    const [xMin, xMax, yMin, yMax] = bounds;
    if (xMin >= xMax || yMin >= yMax) continue;
    const [a,b,c,d,e,f] = transform;
    const corners = [[xMin,yMin], [xMax,yMin], [xMax,yMax], [xMin,yMax], [xMin,yMin]]
      .map(([x,y]) => [a*x + b*y + c, d*x + e*y + f]);
    const clipped = polygonClipping.intersection([corners], PLAN_BOUNDARY)[0]?.[0];
    if (!clipped || clipped.length < 4) continue;
    zones.push({id: item.id, points: clipped.slice(0, -1).map(([x,y]) => ({x,y}))});
    if (zones.length === 12) break;
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
      if (x >= 0 && x <= 1536 && y >= 0 && y <= 1024) {
        result.push({id: entity + ':' + track.id, x, y, expiresAt: observed + TRACK_MAX_AGE});
      }
    }
  }
  return result;
}
