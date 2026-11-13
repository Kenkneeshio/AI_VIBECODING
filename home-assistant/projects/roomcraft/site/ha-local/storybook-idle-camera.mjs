/** Presentation-only camera direction. Every time and interest is an explicit
 * input; this module never reads a clock, operates a device or changes a layout.
 */
export const IDLE_CAMERA_DEFAULTS = Object.freeze({
  idleAfterMs: 30_000, travelMs: 24_000, lingerMs: 16_000, homeMs: 45_000, seed: 37,
});

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const bounded = (value, fallback, min, max) => Number.isFinite(value) ? clamp(value, min, max) : fallback;
const smooth = value => value * value * (3 - 2 * value);

export function normalizeIdleCameraSettings(value = {}) {
  const input = value ?? {};
  return {
    idleAfterMs: bounded(input.idleAfterMs, IDLE_CAMERA_DEFAULTS.idleAfterMs, 5_000, 300_000),
    travelMs: bounded(input.travelMs, IDLE_CAMERA_DEFAULTS.travelMs, 12_000, 90_000),
    lingerMs: bounded(input.lingerMs, IDLE_CAMERA_DEFAULTS.lingerMs, 5_000, 60_000),
    homeMs: bounded(input.homeMs, IDLE_CAMERA_DEFAULTS.homeMs, 30_000, 180_000),
    seed: Math.trunc(bounded(input.seed, IDLE_CAMERA_DEFAULTS.seed, 0, 2_147_483_647)),
  };
}

function hash(text) {
  let value = 2166136261;
  for (let i = 0; i < text.length; i++) value = Math.imul(value ^ text.charCodeAt(i), 16777619);
  value = Math.imul(value ^ value >>> 16, 2246822507);
  value = Math.imul(value ^ value >>> 13, 3266489909);
  // Strictly inside (0,1), so the weighted exponential race remains finite.
  return ((value ^ value >>> 16) >>> 0) / 4_294_967_296 + 1 / 8_589_934_592;
}

function interestsFrom(value) {
  if (!Array.isArray(value)) return [];
  const candidates = value.filter(item => typeof item?.id === 'string' && item.id.length > 0 &&
    [item.focus?.x, item.focus?.y, item.focus?.z].every(n => Number.isFinite(n) && Math.abs(n) <= 1_000_000) &&
    (item.weight === undefined || (Number.isFinite(item.weight) && item.weight > 0)))
    .map(item => ({
      id: item.id,
      focus: {x: item.focus.x, y: item.focus.y, z: item.focus.z},
      weight: bounded(item.weight, 1, .05, 20),
      zoomFactor: bounded(item.zoomFactor, 1.6, 1, 3),
    }));
  // Canonical order and duplicate handling do not depend on adapter enumeration.
  const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
  candidates.sort((a, b) => compare(a.id, b.id) || a.focus.x - b.focus.x || a.focus.y - b.focus.y ||
    a.focus.z - b.focus.z || a.weight - b.weight || a.zoomFactor - b.zoomFactor);
  return candidates.filter((item, index) => !index || item.id !== candidates[index - 1].id);
}

function chooseInterest(interests, seed, excursion) {
  let selected, best = Infinity;
  for (const item of interestsFrom(interests)) {
    const score = -Math.log(hash(`${seed}:${excursion}:${item.id}`)) / item.weight;
    if (score < best) { selected = item; best = score; }
  }
  return selected;
}

const atHome = (active, phase, nextWakeAt) => ({
  active, targetId: null, focus: undefined, zoomFactor: 1, phase, nextWakeAt,
});

/**
 * One slow excursion is followed by a long home interlude. Interests are
 * snapshotted once per excursion, preventing moving people/animals from pulling
 * the camera around. A disappearing interest completes its existing gentle
 * return. Skipped render frames never require replaying earlier excursions.
 */
export function createIdleCameraDirector(options = {}) {
  const settings = normalizeIdleCameraSettings(options);
  const {idleAfterMs, travelMs, lingerMs, homeMs, seed} = settings;
  const returningAt = travelMs + lingerMs;
  const homeAt = returningAt + travelMs;
  const cycleMs = homeAt + homeMs;
  let lastTime, lastTouch, startedAt, cycle = -1, target, suspended = false;

  function timeFrom(value) {
    return Number.isFinite(value) ? Math.max(0, value) : lastTime ?? 0;
  }
  function reset(time) {
    lastTime = time; lastTouch = time; startedAt = undefined; cycle = -1; target = undefined;
  }
  function touch(now) {
    const time = timeFrom(now);
    reset(time); suspended = false;
    return atHome(false, 'waiting', time + idleAfterMs);
  }
  function start(now) {
    const time = timeFrom(now);
    reset(time); startedAt = time; suspended = false;
    return atHome(true, 'outbound', time + travelMs);
  }
  function sample(now, options = {}) {
    const time = timeFrom(now);
    const {blocked = false, reducedMotion = false, enabled = true, interests = []} = options ?? {};
    if (lastTime !== undefined && time < lastTime) reset(time);
    if (lastTouch === undefined) reset(time);
    lastTime = time;
    if (blocked || reducedMotion || !enabled) {
      reset(time); suspended = true;
      return atHome(false, 'blocked', null);
    }
    if (suspended) { reset(time); suspended = false; }
    if (startedAt === undefined) {
      const deadline = lastTouch + idleAfterMs;
      if (time < deadline) return atHome(false, 'waiting', deadline);
      startedAt = deadline;
    }
    const elapsed = Math.max(0, time - startedAt);
    const nextCycle = Math.floor(elapsed / cycleMs);
    const local = elapsed % cycleMs;
    const cycleStart = startedAt + nextCycle * cycleMs;
    if (nextCycle !== cycle) {
      cycle = nextCycle;
      target = chooseInterest(interests, seed, cycle);
    }
    if (!target || local >= homeAt) return atHome(true, 'home', cycleStart + cycleMs);
    const outbound = local < travelMs;
    const returning = local >= returningAt;
    const progress = outbound ? smooth(local / travelMs)
      : returning ? 1 - smooth((local - returningAt) / travelMs) : 1;
    return {
      active: true,
      targetId: target.id,
      focus: {...target.focus, weight: progress},
      zoomFactor: 1 + (target.zoomFactor - 1) * progress,
      phase: outbound ? 'outbound' : returning ? 'return' : 'linger',
      nextWakeAt: cycleStart + (outbound ? travelMs : returning ? homeAt : returningAt),
    };
  }
  return {touch, start, sample};
}
