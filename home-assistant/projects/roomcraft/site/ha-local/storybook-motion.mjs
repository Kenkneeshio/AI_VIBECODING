const REACQUIRE_SECONDS = .24;
const NEARBY_CONFIRMATION = 48;
const clamp01 = value => Math.max(0, Math.min(1, value));
const samePoint = (a, b) => a?.x === b?.x && a?.y === b?.y;

/** Route only along measured segments. Confirmation may reacquire a measurement without drawing a crossing. */
export function createStorybookMotion({allowsPoint, allowsRoute, duration = .32, maximumDistance = 125}) {
  let accepted;
  let from;
  let start = 0;
  let span = 0;
  let hiddenUntil = 0;
  let lastSampled = 0;
  let heading = 0;
  let latest;
  let lastObservation;
  let pending;

  function place(point, seconds) {
    accepted = from = point;
    start = seconds;
    span = 0;
  }

  function sample(seconds, reduceMotion = false) {
    lastSampled = seconds;
    if (!accepted || seconds < hiddenUntil) return null;
    if (reduceMotion) span = 0;
    const progress = span > 0 ? clamp01((seconds - start) / span) : 1;
    const x = from.x + (accepted.x - from.x) * progress;
    const y = from.y + (accepted.y - from.y) * progress;
    if (!allowsPoint(x, y)) {
      // A changed surface can interrupt an already accepted segment.
      place(accepted, seconds);
      hiddenUntil = seconds + REACQUIRE_SECONDS;
      return null;
    }
    return {x, y, progress, heading, current:samePoint(latest, accepted), walking:!reduceMotion && progress < 1 &&
      Math.hypot(accepted.x - from.x, accepted.y - from.y) > 2};
  }

  function observe(point, seconds, {observation, reduceMotion = false} = {}) {
    if (!Number.isFinite(point?.x) || !Number.isFinite(point?.y) ||
        !allowsPoint(point.x, point.y)) return false;
    if (samePoint(point, latest) && observation === lastObservation) return true;
    latest = point;
    lastObservation = observation;
    if (!accepted) {
      place(point, seconds);
      return true;
    }
    const current = sample(seconds, reduceMotion) ?? accepted;
    const distance = Math.hypot(point.x - current.x, point.y - current.y);
    if (samePoint(point, accepted)) {
      pending = null;
    } else if (distance <= maximumDistance && allowsRoute(current.x, current.y, point.x, point.y)) {
      pending = null;
      from = current;
      accepted = point;
      start = seconds;
      span = reduceMotion ? 0 : duration;
      if (distance > 1) heading = Math.atan2(point.x - from.x, point.y - from.y);
    } else if (pending && Math.hypot(point.x - pending.x, point.y - pending.y) <= NEARBY_CONFIRMATION &&
        allowsRoute(pending.x, pending.y, point.x, point.y)) {
      // Distinct measurements agree about the destination. The model disappears
      // briefly and returns there without suggesting a path through an obstacle.
      place(point, seconds);
      hiddenUntil = seconds + REACQUIRE_SECONDS;
      pending = null;
    } else {
      pending = point;
    }
    return true;
  }

  function clear() {
    accepted = from = latest = pending = undefined;
    lastObservation = undefined;
    hiddenUntil = heading = 0;
  }

  return {observe, sample, clear, get hasPosition() { return Boolean(accepted); },
    get pendingReacquisition() { return Boolean(accepted) && hiddenUntil > lastSampled; }};
}
