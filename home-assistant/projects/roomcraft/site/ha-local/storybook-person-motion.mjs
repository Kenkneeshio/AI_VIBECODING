const STILL_RADIUS = 20;
const DEAD_BAND = 7;
const DWELL_MS = 3000;
const MAX_GAP_MS = 3100;
const WALK_SPEED = 115;

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a, b, t) => a + (b - a) * t;

/** Filter displayed motion only. The observation marker and heat map keep their measured coordinates. */
export function createStorybookPersonSignal() {
  let filtered;
  let target;
  let lastMarker;
  let origin;
  let started;
  let observations = 0;
  let pendingJump;
  let settled = false;

  function resetDwell(marker) {
    origin = filtered;
    started = marker;
    observations = 1;
    settled = false;
  }

  function observe(point, seconds) {
    if (point.quality === 'area') {
      target = filtered = {x:point.x, y:point.y};
      lastMarker = pendingJump = undefined;
      resetDwell(undefined);
      return {target, settled:false};
    }
    if (point.quality === 'last-known') {
      return {target:target ?? point, settled:false};
    }
    const measured = Number.isFinite(point.expiresAt);
    const marker = measured ? point.expiresAt : seconds * 1000;
    if (measured && lastMarker !== undefined && marker <= lastMarker) return {target, settled};
    const gap = lastMarker === undefined ? 0 : marker - lastMarker;
    lastMarker = marker;

    if (!measured || !filtered) {
      target = filtered = {x:point.x, y:point.y};
      resetDwell(marker);
      return {target, settled:false};
    }
    const change = distance(filtered, point);
    const jump = change > Math.max(76, gap * .24);
    if (jump && !(pendingJump && marker - pendingJump.marker <= MAX_GAP_MS &&
        distance(pendingJump, point) <= 32)) {
      pendingJump = {x:point.x, y:point.y, marker};
      resetDwell(marker);
      return {target, settled:false};
    }
    pendingJump = undefined;
    const response = change > 42 ? .14 : .42;
    const weight = 1 - Math.exp(-Math.max(.04, gap / 1000) / response);
    filtered = {x:lerp(filtered.x, point.x, weight), y:lerp(filtered.y, point.y, weight)};
    if (distance(target, filtered) >= DEAD_BAND) target = filtered;

    if (!origin || gap > MAX_GAP_MS || distance(origin, point) > STILL_RADIUS) {
      resetDwell(marker);
    } else {
      observations++;
      settled = observations >= 3 && marker - started >= DWELL_MS;
    }
    return {target, settled};
  }

  return {observe};
}

/** Advance the actor along an already swept path. Hold the last safe point when disconnected. */
export function createStorybookPersonMotion({allowsPoint, findRoute, geometryRevision}) {
  let position;
  let destination;
  let route = [];
  let travelled = 0;
  let heading = 0;
  let lastTime;
  let revision;

  function sample(seconds, reduceMotion) {
    let remaining = lastTime === undefined ? 0 : Math.max(0, seconds - lastTime) * WALK_SPEED;
    lastTime = seconds;
    if (geometryRevision && revision !== geometryRevision()) {
      route = [];
      destination = undefined;
    }
    if (!position || !allowsPoint(position.x, position.y)) {
      position = destination = undefined;
      route = [];
      return null;
    }
    if (reduceMotion && route.length) remaining = Infinity;
    while (route.length && remaining > 0) {
      const next = route[0];
      const span = distance(position, next);
      if (span > 0) heading = Math.atan2(next.x - position.x, next.y - position.y);
      if (span > remaining) {
        position = {x:lerp(position.x, next.x, remaining / span), y:lerp(position.y, next.y, remaining / span)};
        travelled += remaining;
        break;
      }
      position = route.shift();
      travelled += span;
      remaining -= span;
    }
    return {...position, heading, step:travelled / 33, walking:!reduceMotion && route.length > 0};
  }

  function aim(point, seconds, reduceMotion) {
    const here = sample(seconds, reduceMotion);
    revision = geometryRevision?.();
    if (!point || !allowsPoint(point.x, point.y)) return false;
    if (!here) {
      position = destination = point;
      return true;
    }
    if (destination && distance(destination, point) < .1) return true;
    const waypoints = findRoute(here, point);
    if (!waypoints) {
      route = [];
      destination = undefined;
      return false;
    }
    route = [...waypoints];
    destination = point;
    if (reduceMotion) sample(seconds, true);
    return true;
  }

  return {aim, sample};
}
