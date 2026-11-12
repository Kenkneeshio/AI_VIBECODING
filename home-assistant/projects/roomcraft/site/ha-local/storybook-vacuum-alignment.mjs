const MAX_ANCHORS = 12;
const TRANSFORM_LIMIT = 10000;
const MIN_PLAN_SPREAD = 8;

function validPoint(point) {
  return Number.isFinite(point?.x) && Number.isFinite(point?.y);
}

function validTransform(transform) {
  return Array.isArray(transform) && transform.length === 6 &&
    Array.from(transform).every(Number.isFinite);
}

function validAnchor(anchor) {
  const {map, plan} = anchor ?? {};
  return validPoint(map) && Math.abs(map.x) <= 1e9 && Math.abs(map.y) <= 1e9 &&
    validPoint(plan) && plan.x >= 0 && plan.x <= 1536 && plan.y >= 0 && plan.y <= 1024;
}

function validUnits(units) {
  return units === null || Number.isFinite(units) && units > 0;
}

function centroid(anchors, key) {
  const sum = anchors.reduce((total, anchor) => ({
    x: total.x + anchor[key].x, y: total.y + anchor[key].y,
  }), {x:0, y:0});
  return {x:sum.x / anchors.length, y:sum.y / anchors.length};
}

export function applyVacuumAlignment(transform, point) {
  if (!validTransform(transform) || !validPoint(point)) return undefined;
  const [a, b, c, d, e, f] = transform;
  return {x:a * point.x + b * point.y + c, y:d * point.x + e * point.y + f};
}

export function invertVacuumAlignment(transform) {
  if (!validTransform(transform)) return undefined;
  const [a, b, c, d, e, f] = transform;
  const determinant = a * e - b * d;
  const columnProduct = Math.hypot(a, d) * Math.hypot(b, e);
  if (!columnProduct || Math.abs(determinant) / columnProduct < 1e-6) return undefined;
  const inverse = [e, -b, b * f - e * c, -d, a, d * c - a * f]
    .map(value => value / determinant);
  return validTransform(inverse) ? inverse : undefined;
}

/** Compose the vendor raster transform with the authored vacuum-to-plan transform. */
export function composeVacuumAlignment(outer, inner) {
  if (!validTransform(outer) || !validTransform(inner)) return undefined;
  const [a, b, c, d, e, f] = outer;
  const [g, h, i, j, k, l] = inner;
  const result = [a * g + b * j, a * h + b * k, a * i + b * l + c,
    d * g + e * j, d * h + e * k, d * i + e * l + f];
  return validTransform(result) ? result : undefined;
}

function calibrationBasis([origin, along, across]) {
  return [along.x - origin.x, across.x - origin.x, origin.x,
    along.y - origin.y, across.y - origin.y, origin.y];
}

function mapIdentifier(value) {
  const number = typeof value === 'string' && /^\d+$/.test(value) ? Number(value) : value;
  return Number.isSafeInteger(number) && number > 0 ? number : undefined;
}

/** Read only the Dreame map camera attributes required to align its raster. */
export function vacuumMapMetadata(state) {
  if (typeof state?.state !== 'string' || ['unknown', 'unavailable'].includes(state.state)) return undefined;
  const attrs = state.attributes;
  const mapId = mapIdentifier(attrs?.saved_map_id) ?? mapIdentifier(attrs?.map_id);
  const rawPoints = attrs?.calibration_points;
  if (attrs?.is_empty === true || !mapId || !Array.isArray(rawPoints) || rawPoints.length !== 3 ||
    !rawPoints.every(point => [point?.map, point?.vacuum].every(validPoint))) return undefined;
  const calibrationPoints = rawPoints.map(({map, vacuum}) => ({
    map:{x:map.x, y:map.y}, vacuum:{x:vacuum.x, y:vacuum.y},
  }));
  const image = calibrationBasis(calibrationPoints.map(point => point.map));
  const raw = calibrationBasis(calibrationPoints.map(point => point.vacuum));
  const inverseImage = invertVacuumAlignment(image);
  if (!inverseImage || !invertVacuumAlignment(raw)) return undefined;
  const pixelToMap = composeVacuumAlignment(raw, inverseImage);
  if (!pixelToMap) return undefined;
  return {pixelToMap, mapUnitsPerMetre:1000, mapId, calibrationPoints};
}

function pointError(transform, {map, plan}) {
  const projected = applyVacuumAlignment(transform, map);
  return Math.hypot(projected.x - plan.x, projected.y - plan.y);
}

function solve(anchors, flipY, units) {
  const mapCenter = centroid(anchors, 'map');
  const planCenter = centroid(anchors, 'plan');
  const sign = flipY ? -1 : 1;
  let dot = 0;
  let cross = 0;
  let mapSquared = 0;
  let planSquared = 0;
  for (const {map, plan} of anchors) {
    const x = map.x - mapCenter.x;
    const y = sign * (map.y - mapCenter.y);
    const u = plan.x - planCenter.x;
    const v = plan.y - planCenter.y;
    dot += x * u + y * v;
    cross += x * v - y * u;
    mapSquared += x * x + y * y;
    planSquared += u * u + v * v;
  }
  // Very short baselines turn a small tap error into a large scale error.
  const minMapSpread = units === null ? 1e-6 : units * .05;
  if (Math.sqrt(mapSquared / anchors.length) < minMapSpread ||
    Math.sqrt(planSquared / anchors.length) < MIN_PLAN_SPREAD) return undefined;
  const along = dot / mapSquared;
  const across = cross / mapSquared;
  const scale = Math.hypot(along, across);
  if (!Number.isFinite(scale) || scale <= 1e-12) return undefined;
  const b = -sign * across;
  const e = sign * along;
  const transform = [
    along, b, planCenter.x - along * mapCenter.x - b * mapCenter.y,
    across, e, planCenter.y - across * mapCenter.x - e * mapCenter.y,
  ];
  if (!transform.every(value => Number.isFinite(value) && Math.abs(value) <= TRANSFORM_LIMIT)) return undefined;
  return {transform:transform.map(value => Object.is(value, -0) ? 0 : value), scale,
    rotationDegrees:Math.atan2(across, along) * 180 / Math.PI};
}

/** Fit a single distance scale, a rotation, a translation and an explicit Y flip. */
export function fitVacuumAlignment(samples, {flipY = false, mapUnitsPerMetre = 1000} = {}) {
  if (!Array.isArray(samples) || samples.length < 2 || samples.length > MAX_ANCHORS ||
    !samples.every(validAnchor) || !validUnits(mapUnitsPerMetre)) return undefined;
  const fit = solve(samples, flipY, mapUnitsPerMetre);
  if (!fit) return undefined;
  const errors = samples.map(sample => pointError(fit.transform, sample));
  let leaveOneOutError;
  if (samples.length >= 3) {
    const validation = samples.map((sample, index) => {
      const training = samples.filter((_, other) => index !== other);
      const candidate = solve(training, flipY, mapUnitsPerMetre);
      return candidate && pointError(candidate.transform, sample);
    });
    if (validation.every(Number.isFinite)) leaveOneOutError = Math.max(...validation);
  }
  return {
    ...fit,
    pixelsPerMetre:mapUnitsPerMetre === null ? undefined : fit.scale * mapUnitsPerMetre,
    errors,
    rmse:Math.sqrt(errors.reduce((sum, error) => sum + error * error, 0) / errors.length),
    maxError:Math.max(...errors),
    leaveOneOutError,
  };
}

function solveDirectional(samples, units) {
  const map = centroid(samples, 'map');
  const plan = centroid(samples, 'plan');
  let xx = 0, xy = 0, yy = 0, xu = 0, yu = 0, xv = 0, yv = 0;
  for (const anchor of samples) {
    const x = anchor.map.x - map.x;
    const y = anchor.map.y - map.y;
    const u = anchor.plan.x - plan.x;
    const v = anchor.plan.y - plan.y;
    xx += x * x;
    xy += x * y;
    yy += y * y;
    xu += x * u;
    yu += y * u;
    xv += x * v;
    yv += y * v;
  }
  const determinant = xx * yy - xy * xy;
  if (xx + yy < samples.length * (units ? units * .05 : 1e-6) ** 2 ||
      determinant <= .018 * (xx + yy) ** 2) return undefined;
  const a = (yy * xu - xy * yu) / determinant;
  const b = (xx * yu - xy * xu) / determinant;
  const d = (yy * xv - xy * yv) / determinant;
  const e = (xx * yv - xy * xv) / determinant;
  const transform = [a,b,plan.x-a*map.x-b*map.y,d,e,plan.y-d*map.x-e*map.y];
  const area = Math.abs(a * e - b * d);
  const norm = a*a + b*b + d*d + e*e;
  const maxScale = Math.sqrt((norm + Math.sqrt(Math.max(0,norm*norm - 4*area*area))) / 2);
  const minScale = area / maxScale;
  if (!(minScale > 0) || maxScale / minScale > 1.5 ||
      !transform.every(value => Number.isFinite(value) && Math.abs(value) <= TRANSFORM_LIMIT)) return undefined;
  return {transform, scale:Math.sqrt(area), scaleRange:[minScale,maxScale],
    rotationDegrees:Math.atan2(d,a) * 180 / Math.PI};
}

/** Use directional correction only when held-out landmarks corroborate it. */
export function fitBestVacuumAlignment(samples, {mapUnitsPerMetre = 1000} = {}) {
  const straight = fitVacuumAlignment(samples, {mapUnitsPerMetre});
  const mirrored = fitVacuumAlignment(samples, {mapUnitsPerMetre, flipY:true});
  const best = !straight || mirrored?.rmse < straight.rmse ? mirrored : straight;
  if (!best || samples.length < 4 || !Number.isFinite(best.leaveOneOutError)) return best;
  const directional = solveDirectional(samples, mapUnitsPerMetre);
  if (!directional) return best;
  const validation = samples.map((anchor, index) => {
    const fit = solveDirectional(samples.filter((_, other) => index !== other), mapUnitsPerMetre);
    return fit ? pointError(fit.transform, anchor) : Infinity;
  });
  const leaveOneOutError = Math.max(...validation);
  if (!(leaveOneOutError + 2 < best.leaveOneOutError * .7)) return best;
  const errors = samples.map(anchor => pointError(directional.transform, anchor));
  return {...directional, errors, leaveOneOutError, maxError:Math.max(...errors),
    rmse:Math.sqrt(errors.reduce((sum, error) => sum + error * error, 0) / errors.length)};
}

/** Convert two image or plan points into physical LiDAR coordinates before measuring. */
export function vacuumMetricDistance(first, second, pointToMap, mapUnitsPerMetre) {
  if (!Number.isFinite(mapUnitsPerMetre) || mapUnitsPerMetre <= 0) return undefined;
  const from = applyVacuumAlignment(pointToMap, first);
  const to = applyVacuumAlignment(pointToMap, second);
  if (!from || !to) return undefined;
  const metres = Math.hypot(to.x - from.x, to.y - from.y) / mapUnitsPerMetre;
  return Number.isFinite(metres) ? metres : undefined;
}

/** Compare a surveyed baseline on the two maps at the fitted physical scale. */
export function vacuumAlignmentDistance(first, second, transform, mapUnitsPerMetre = 1000) {
  if (!validAnchor(first) || !validAnchor(second) || !validUnits(mapUnitsPerMetre)) return undefined;
  const firstProjected = applyVacuumAlignment(transform, first.map);
  const secondProjected = applyVacuumAlignment(transform, second.map);
  if (!firstProjected || !secondProjected) return undefined;
  const mapDistance = Math.hypot(second.map.x - first.map.x, second.map.y - first.map.y);
  const planDistance = Math.hypot(second.plan.x - first.plan.x, second.plan.y - first.plan.y);
  const projectedDistance = Math.hypot(secondProjected.x - firstProjected.x, secondProjected.y - firstProjected.y);
  if (!mapDistance || !projectedDistance) return undefined;
  const mapMetres = mapUnitsPerMetre === null ? undefined : mapDistance / mapUnitsPerMetre;
  const planMetres = vacuumMetricDistance(first.plan, second.plan, invertVacuumAlignment(transform), mapUnitsPerMetre);
  return {mapDistance, planDistance, mapMetres, planMetres,
    deltaMetres:planMetres === undefined ? undefined : planMetres - mapMetres};
}
