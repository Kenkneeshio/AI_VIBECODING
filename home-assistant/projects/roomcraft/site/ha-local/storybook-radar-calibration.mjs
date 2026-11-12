const MIN_SAMPLES = 3;
const MAX_SAMPLES = 12;
const MIN_PIXELS_PER_METRE = 8;
const MAX_PIXELS_PER_METRE = 600;
const MEASURED_SPREAD = {radar:[32,12], plan:[20,8]};

function centroid(points) {
  const total = points.reduce((sum, point) => [sum[0] + point.x, sum[1] + point.y], [0,0]);
  return total.map(value => value / points.length);
}

function sufficientSpread(points, [majorMin, minorMin]) {
  const [cx, cy] = centroid(points);
  let xx = 0;
  let yy = 0;
  let xy = 0;
  for (const {x,y} of points) {
    const dx = x - cx;
    const dy = y - cy;
    xx += dx * dx;
    yy += dy * dy;
    xy += dx * dy;
  }
  const spread = Math.hypot(xx - yy, 2 * xy);
  const major = Math.sqrt((xx + yy + spread) / (2 * points.length));
  const minor = Math.sqrt(Math.max(0, (xx + yy - spread) / (2 * points.length)));
  return major >= majorMin && minor >= minorMin && minor >= major * .10;
}

function errorPixels([a,b,c,d,e,f], {radar,plan}) {
  return Math.hypot(a * radar.x + b * radar.y + c - plan.x, d * radar.x + e * radar.y + f - plan.y);
}

function similarity(samples, flipped) {
  const sign = flipped ? -1 : 1;
  const [rx, ry] = centroid(samples.map(({radar}) => radar));
  const [px, py] = centroid(samples.map(({plan}) => plan));
  let along = 0;
  let across = 0;
  let norm = 0;
  for (const {radar,plan} of samples) {
    const x = sign * (radar.x - rx);
    const y = radar.y - ry;
    const u = plan.x - px;
    const v = plan.y - py;
    along += u * x + v * y;
    across += v * x - u * y;
    norm += x * x + y * y;
  }
  const a = along / norm;
  const b = across / norm;
  const c = px - sign * a * rx + b * ry;
  const f = py - sign * b * rx - a * ry;
  const transform = [sign * a,-b,c,sign * b,a,f];
  const errors = samples.map(sample => errorPixels(transform, sample));
  return {transform, errors, flipped, scale:Math.hypot(a,b), squared:errors.reduce((sum,error) => sum + error * error, 0)};
}

function fits(samples) {
  const normal = similarity(samples, false);
  const mirrored = similarity(samples, true);
  return mirrored.squared < normal.squared ? mirrored : normal;
}

function validSample({radar, plan} = {}) {
  return [radar?.x,radar?.y,plan?.x,plan?.y].every(Number.isFinite) &&
    Math.abs(radar.x) <= 600 && Math.abs(radar.y) <= 600 &&
    plan.x >= 0 && plan.x <= 1536 && plan.y >= 0 && plan.y <= 1024;
}

function enoughArea(samples) {
  return Object.entries(MEASURED_SPREAD).every(([field, threshold]) =>
    sufficientSpread(samples.map(sample => sample[field]), threshold));
}

/** Fit one scale, one rotation, and an optional lateral reflection from surveyed points. */
export function fitRadarCalibration(samples) {
  if (!Array.isArray(samples) || samples.length < MIN_SAMPLES || samples.length > MAX_SAMPLES ||
      !samples.every(sample => sample && validSample(sample))) {
    return {error:'Use 3–12 valid pairs of radar centimetres and plan coordinates.'};
  }
  if (!enoughArea(samples)) {
    return {error:'Choose survey points spread across the area, including one well off the line between the others.'};
  }
  const result = fits(samples);
  const pixelsPerMetre = result.scale * 100;
  if (pixelsPerMetre < MIN_PIXELS_PER_METRE || pixelsPerMetre > MAX_PIXELS_PER_METRE) {
    return {error:'The fitted scale is outside the supported range. Check the radar units and matched plan points.'};
  }
  let validationCm;
  if (samples.length > MIN_SAMPLES) {
    validationCm = 0;
    for (const [index, sample] of samples.entries()) {
      const others = samples.filter((_, other) => index !== other);
      if (!enoughArea(others)) {
        return {error:'Spread the survey points so that three or more still cover the area when any one point is removed.'};
      }
      const check = fits(others);
      if (check.scale * 100 < MIN_PIXELS_PER_METRE || check.scale * 100 > MAX_PIXELS_PER_METRE) {
        return {error:'The fitted scale changes too much when a point is withheld. Check which radar report matches each point.'};
      }
      validationCm = Math.max(validationCm, errorPixels(check.transform, sample) / check.scale);
    }
  }
  const {transform, errors, flipped, scale, squared} = result;
  return {transform, pixelsPerMetre, flipped, origin:{x:transform[2], y:transform[5]},
    rmsCm:Math.sqrt(squared / samples.length) / scale,
    maxErrorCm:Math.max(...errors) / scale, ...(validationCm === undefined ? {} : {validationCm})};
}
