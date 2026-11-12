import test from 'node:test';
import assert from 'node:assert/strict';
import {COASTAL_SKY_MARKUP, coastalSkyFrame, updateCoastalSky} from '../ha-local/storybook-coastal-sky.mjs';
import {storybookWeather} from '../ha-local/storybook-weather.mjs';

const daytime = {condition: 'sunny', daylightKnown: true, night: false};
const nighttime = {condition: 'clear-night', daylightKnown: true, night: true};
const sample = (skyProgress, environment = daytime) =>
  coastalSkyFrame({...environment, skyProgress, skyTimeSeconds: skyProgress * 10});

test('received celestial angles control position, with deterministic arcs for a showcase', () => {
  const east = coastalSkyFrame({...daytime, sunAzimuth: 90, sunElevation: 3});
  const south = coastalSkyFrame({...daytime, sunAzimuth: 180, sunElevation: 63});
  const west = coastalSkyFrame({...daytime, sunAzimuth: 270, sunElevation: 4});
  assert.deepEqual([east.sunX, south.sunX, west.sunX].map(Math.round), [88, 50, 12]);
  assert.ok(east.sunY > south.sunY && west.sunY > south.sunY);
  assert.equal(east.light, 'twilight');
  assert.equal(south.light, 'regular');
  const crescent = {...nighttime, moonPhase: 'waxing_crescent'};
  assert.ok(sample(0, crescent).moonX < sample(.5, crescent).moonX);
  assert.ok(sample(.5, crescent).moonY < sample(1, crescent).moonY);
  assert.deepEqual(sample(.5, crescent), sample(.5, crescent));
  assert.equal(coastalSkyFrame({...crescent, moonAzimuth: 270, moonElevation: 3, skyProgress: 0}).moonX, 12);
  assert.equal(coastalSkyFrame(crescent).moonMotion, 'ambient');
  assert.equal(sample(.5, crescent).moonMotion, 'fixed');
  assert.ok(coastalSkyFrame({...crescent, skyTimeSeconds: 20}).moonX <
    coastalSkyFrame({...crescent, skyTimeSeconds: 90}).moonX);
});

test('live elevation and bearing distinguish sunrise, sunset, and low-sun visibility', () => {
  const beforeDawn = {...nighttime, sunElevation: -5, sunAzimuth: 75, sunRising: true};
  const dawn = coastalSkyFrame(beforeDawn);
  const afterDawn = coastalSkyFrame({...daytime, sunElevation: 4, sunAzimuth: 82, sunRising: true});
  const evening = coastalSkyFrame({...nighttime, sunElevation: -5, sunAzimuth: 285, sunRising: false});
  const midday = coastalSkyFrame({...daytime, sunElevation: 45, sunAzimuth: 170, sunRising: false});
  const dark = coastalSkyFrame({...nighttime, sunElevation: -20, sunAzimuth: 300, sunRising: false});
  assert.deepEqual([dawn.solarPhase, evening.solarPhase, midday.solarPhase, dark.solarPhase],
    ['sunrise', 'sunset', 'day', 'night']);
  assert.ok(dawn.sunX > 50 && evening.sunX < 50);
  assert.equal(dawn.solarDisc, 0);
  assert.equal(afterDawn.solarDisc, 1);
  assert.ok(dawn.twilightGlow > 0 && evening.horizonHaze > 0);
  assert.ok(dawn.solarDaylight < afterDawn.solarDaylight && afterDawn.solarDaylight < midday.solarDaylight);
  assert.equal(dark.twilightGlow, 0);
  assert.equal(dark.starOpacity, 1);
  const storm = coastalSkyFrame({...beforeDawn, condition: 'pouring', cloudCoverage: 99});
  assert.ok(storm.twilightGlow < dawn.twilightGlow && storm.horizonHaze > dawn.horizonHaze);
});

test('all named moon phases retain distinct geometry and daytime never shows the moon', () => {
  const outlines = new Set();
  for (const moonPhase of ['waxing_crescent', 'first_quarter', 'waxing_gibbous',
    'waning_crescent', 'last_quarter', 'waning_gibbous']) {
    const frame = coastalSkyFrame({...nighttime, moonPhase});
    assert.equal(frame.moon, moonPhase);
    assert.match(frame.moonOutline, /^polygon\(/);
    outlines.add(frame.moonOutline);
  }
  assert.equal(outlines.size, 6);
  assert.equal(coastalSkyFrame({...nighttime, moonPhase: 'full_moon'}).moonOutline, 'circle(50%)');
  assert.equal(coastalSkyFrame({...nighttime, moonPhase: 'new_moon'}).moon, 'new_moon');
  assert.equal(coastalSkyFrame({...daytime, moonPhase: 'full_moon'}).moon, '');
  assert.equal(coastalSkyFrame({...nighttime, moonPhase: 'invalid'}).moon, '');
});

test('sky formations distinguish high, puffy, layered, storm and fog scenes', () => {
  const cases = [['sunny', 'cirrus'], ['partlycloudy', 'cumulus'], ['cloudy', 'stratus'],
    ['rainy', 'nimbostratus'], ['lightning-rainy', 'cumulonimbus'], ['fog', 'fog'],
    ['windy-variant', 'altocumulus']];
  for (const [condition, shape] of cases) {
    assert.equal(coastalSkyFrame({...daytime, condition}).cloud, shape);
  }
  assert.equal(coastalSkyFrame({condition: 'unavailable'}).cloud, 'none');
  assert.equal(coastalSkyFrame({...daytime, cloudCoverage: 0}).cloudOpacity, 0);
  assert.equal(coastalSkyFrame({...daytime, cloudCoverage: 100}).cloudOpacity, 1);
});

test('cloud direction follows the received wind from bearing and pace tracks wind speed', () => {
  const easterly = coastalSkyFrame({...daytime, windSpeed: 5, windBearing: 90});
  const westerly = coastalSkyFrame({...daytime, windSpeed: 5, windBearing: 270});
  const faster = coastalSkyFrame({...daytime, windSpeed: 12, windBearing: -90});
  const calm = coastalSkyFrame({...daytime, windSpeed: 0, windBearing: 90});
  assert.ok(easterly.windX < 0);
  assert.ok(westerly.windX > 0);
  assert.equal(easterly.cloudSpeed, westerly.cloudSpeed);
  assert.ok(faster.cloudSpeed > westerly.cloudSpeed);
  assert.equal(calm.cloudSpeed, 0);
  assert.equal(storybookWeather({...daytime, windSpeed: 5, windBearing: -90}).windReading, 'Wind from W at 5 m/s');
  assert.equal(storybookWeather({...daytime, windSpeed: -5, windBearing: 90}).windReading, '');
  assert.equal(storybookWeather({...daytime, windSpeed: 0}).windReading, 'Calm wind');
});

test('constellations and stars follow known dark skies and cloud cover', () => {
  const clear = coastalSkyFrame(nighttime);
  const partial = coastalSkyFrame({...nighttime, condition: 'partlycloudy'});
  assert.ok(clear.starOpacity > partial.starOpacity && partial.starOpacity > 0);
  assert.equal(clear.meteor, 'live');
  assert.equal(partial.meteor, 'off');
  assert.ok(coastalSkyFrame({...nighttime, cloudCoverage: 30}).starOpacity < clear.starOpacity);
  for (const frame of [coastalSkyFrame(daytime), coastalSkyFrame({...nighttime, sunElevation: -3}),
    coastalSkyFrame({...nighttime, cloudCoverage: 100}), coastalSkyFrame(nighttime, true),
    ...['cloudy', 'fog', 'rainy', 'lightning-rainy', 'snowy', 'unavailable']
      .map(condition => coastalSkyFrame({...nighttime, condition}))]) {
    assert.equal(frame.starOpacity, 0);
    assert.equal(frame.meteor, 'off');
  }
  for (const name of ['dipper', 'cassiopeia', 'orion']) {
    assert.match(COASTAL_SKY_MARKUP, new RegExp(`<svg class="coastal-constellation coastal-${name}"`));
  }
});

test('showcase shooting star follows a single deterministic path and freezes with reduced motion', () => {
  const before = sample(.2, nighttime);
  const early = sample(.43, nighttime);
  const late = sample(.55, nighttime);
  const after = sample(.8, nighttime);
  assert.equal(early.meteor, 'sample');
  assert.ok(early.meteorProgress > before.meteorProgress && late.meteorProgress > early.meteorProgress);
  assert.ok(early.meteorOpacity > 0 && late.meteorOpacity > 0);
  assert.equal(before.meteorOpacity, 0);
  assert.equal(after.meteorOpacity, 0);
  assert.deepEqual(early, sample(.43, nighttime));
  assert.ok(coastalSkyFrame({...nighttime, skyTimeSeconds: 12.5}).meteorOpacity > 0);
  const reduced = sample(.43, {...nighttime, reduceMotion: true});
  assert.equal(reduced.starOpacity, early.starOpacity);
  assert.equal(reduced.meteor, 'off');
  assert.equal(reduced.meteorOpacity, 0);
});

test('reduced motion freezes demo positions, and offline clears visible telemetry', () => {
  const environment = {...nighttime, moonPhase: 'full_moon', windSpeed: 3, windBearing: 80, reduceMotion: true};
  assert.deepEqual(sample(0, environment), sample(1, environment));
  const properties = new Map();
  const element = {dataset: {}, style: {getPropertyValue: key => properties.get(key),
    setProperty: (key, value) => properties.set(key, value)}};
  updateCoastalSky(element, {...environment, reduceMotion: false, skyTimeSeconds: 5.2});
  assert.equal(element.dataset.skyClock, 'sample');
  assert.equal(element.dataset.moon, 'full_moon');
  assert.equal(element.dataset.stars, 'visible');
  assert.equal(element.dataset.meteor, 'sample');
  assert.equal(properties.get('--coastal-clock'), '5.200s');
  updateCoastalSky(element, environment);
  assert.equal(element.dataset.skyReduced, 'true');
  assert.equal(element.dataset.skyClock, 'live');
  assert.equal(element.dataset.stars, 'visible');
  assert.equal(element.dataset.meteor, 'off');
  updateCoastalSky(element, environment, true);
  assert.equal(element.dataset.sky, 'unknown');
  assert.equal(element.dataset.solarPhase, 'unknown');
  assert.equal(element.dataset.cloud, 'none');
  assert.equal(element.dataset.moon, '');
  assert.equal(element.dataset.stars, 'hidden');
});
