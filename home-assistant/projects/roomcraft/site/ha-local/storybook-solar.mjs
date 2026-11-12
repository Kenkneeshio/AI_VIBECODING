const CLOUD_FLOORS = new Map([
  ['partlycloudy', .32], ['cloudy', .84], ['windy-variant', .7], ['fog', .95],
  ['snowy', .82], ['snowy-rainy', .92], ['hail', .94], ['rainy', .88],
  ['pouring', .97], ['lightning', .91], ['lightning-rainy', .98],
]);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const radians = degrees => degrees * Math.PI / 180;

function smooth(value, from, to) {
  const t = clamp((value - from) / (to - from), 0, 1);
  return t * t * (3 - 2 * t);
}

/** One daylight sample for the north-up miniature, sky, and water. Bearings are clockwise from north. */
export function storybookSolar(environment = {}) {
  const {sunElevation, sunAzimuth, sunRising, condition, night, cloudCoverage} = environment;
  const elevation = Number.isFinite(sunElevation) && Math.abs(sunElevation) <= 90
    ? sunElevation : night || condition === 'clear-night' ? -18 : 38;
  const bearing = Number.isFinite(sunAzimuth) && sunAzimuth >= 0 && sunAzimuth <= 360 ? sunAzimuth % 360 : undefined;
  const rising = typeof sunRising === 'boolean' ? sunRising : bearing !== undefined && bearing < 180;
  const nearHorizon = elevation < 19 && elevation > -12;
  const azimuth = bearing ?? (nearHorizon ? (rising ? 90 : 270) : 150);
  const cloud = Math.max(CLOUD_FLOORS.get(condition) ?? 0,
    Number.isFinite(cloudCoverage) && cloudCoverage >= 0 && cloudCoverage <= 100 ? cloudCoverage / 100 : 0);
  return {
    elevation, azimuth, rising, cloud,
    phase: nearHorizon ? (rising ? 'sunrise' : 'sunset') : elevation <= -12 ? 'night' : 'day',
    daylight: smooth(elevation, -10, 18),
    twilight: smooth(elevation, -12, -3) * (1 - smooth(elevation, 3, 19)),
    lowSun: smooth(elevation, -1, 4) * (1 - smooth(elevation, 9, 33)),
    disc: smooth(elevation, -.9, .8),
    east: Math.sin(radians(azimuth)), north: Math.cos(radians(azimuth)),
  };
}

/** Smooth new readings without changing the observed position or the demo clock. */
export function createStorybookSolarFade() {
  let from;
  let target;
  let start = 0;

  function sample(now) {
    const progress = smooth(now - start, 0, .8);
    if (!from || progress >= 1) return target;
    const bearingDelta = ((target.azimuth - from.azimuth + 540) % 360) - 180;
    return storybookSolar({
      sunElevation: from.elevation + (target.elevation - from.elevation) * progress,
      sunAzimuth: (from.azimuth + bearingDelta * progress + 360) % 360,
      sunRising: target.rising,
      cloudCoverage: (from.cloud + (target.cloud - from.cloud) * progress) * 100,
    });
  }

  return (reading, now, reduceMotion = false) => {
    if (!target || reduceMotion || !Number.isFinite(now) || now < start) {
      from = undefined;
      target = reading;
      start = Number.isFinite(now) ? now : 0;
      return target;
    }
    if (reading.elevation !== target.elevation || reading.azimuth !== target.azimuth ||
        reading.rising !== target.rising || reading.cloud !== target.cloud) {
      from = sample(now);
      target = reading;
      start = now;
    }
    return sample(now);
  };
}
