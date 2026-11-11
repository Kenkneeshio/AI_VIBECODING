import test from 'node:test';
import assert from 'node:assert/strict';
import {coastalSkyFrame, updateCoastalSky} from '../ha-local/storybook-coastal-sky.mjs';
import {storybookWeather} from '../ha-local/storybook-weather.mjs';

const daytime = {condition: 'sunny', daylightKnown: true, night: false};
const nighttime = {condition: 'clear-night', daylightKnown: true, night: true};
const sample = (skyProgress, environment = daytime) =>
  coastalSkyFrame({...environment, skyProgress, skyTimeSeconds: skyProgress * 10});

test('received celestial angles control position, with deterministic arcs for a showcase', () => {
  const east = coastalSkyFrame({...daytime, sunAzimuth: 90, sunElevation: 3});
  const south = coastalSkyFrame({...daytime, sunAzimuth: 180, sunElevation: 63});
  const west = coastalSkyFrame({...daytime, sunAzimuth: 270, sunElevation: 4});
  assert.deepEqual([east.sunX, south.sunX, west.sunX], [12, 50, 88]);
  assert.ok(east.sunY > south.sunY && west.sunY > south.sunY);
  assert.equal(east.light, 'twilight');
  assert.equal(south.light, 'regular');
  const crescent = {...nighttime, moonPhase: 'waxing_crescent'};
  assert.ok(sample(0, crescent).moonX < sample(.5, crescent).moonX);
  assert.ok(sample(.5, crescent).moonY < sample(1, crescent).moonY);
  assert.deepEqual(sample(.5, crescent), sample(.5, crescent));
  assert.equal(coastalSkyFrame({...crescent, moonAzimuth: 270, moonElevation: 3, skyProgress: 0}).moonX, 88);
  assert.equal(coastalSkyFrame(crescent).moonMotion, 'ambient');
  assert.equal(sample(.5, crescent).moonMotion, 'fixed');
  assert.ok(coastalSkyFrame({...crescent, skyTimeSeconds: 20}).moonX <
    coastalSkyFrame({...crescent, skyTimeSeconds: 90}).moonX);
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

test('reduced motion freezes demo positions, and offline clears visible telemetry', () => {
  const environment = {...nighttime, moonPhase: 'full_moon', windSpeed: 3, windBearing: 80, reduceMotion: true};
  assert.deepEqual(sample(0, environment), sample(1, environment));
  const properties = new Map();
  const element = {dataset: {}, style: {getPropertyValue: key => properties.get(key),
    setProperty: (key, value) => properties.set(key, value)}};
  updateCoastalSky(element, {...environment, reduceMotion: false, skyTimeSeconds: 5.2});
  assert.equal(element.dataset.skyClock, 'sample');
  assert.equal(element.dataset.moon, 'full_moon');
  assert.equal(properties.get('--coastal-clock'), '5.200s');
  updateCoastalSky(element, environment);
  assert.equal(element.dataset.skyReduced, 'true');
  assert.equal(element.dataset.skyClock, 'live');
  updateCoastalSky(element, environment, true);
  assert.equal(element.dataset.sky, 'unknown');
  assert.equal(element.dataset.cloud, 'none');
  assert.equal(element.dataset.moon, '');
});
