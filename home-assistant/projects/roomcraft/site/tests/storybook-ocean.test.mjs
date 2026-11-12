import assert from 'node:assert/strict';
import test from 'node:test';
import {createStorybookOcean} from '../ha-local/storybook-ocean.mjs';

const bounds = {y:-110, farZ:-2500, focusX:0, shoreline:[{x:-800,z:-470},{x:800,z:-450}]};
const solarEnvironment = {daylightKnown:true, night:false, condition:'sunny'};

function sampleOcean(environment, time = 3) {
  const ocean = createStorybookOcean(bounds);
  ocean.update(time, {...solarEnvironment, ...environment});
  const sample = Object.fromEntries(Object.entries(ocean.mesh.material.uniforms).map(([name, {value}]) =>
    [name, value.isColor ? value.getHexString() : value.isVector2 ? value.toArray() : value]));
  ocean.mesh.geometry.dispose();
  ocean.mesh.material.dispose();
  return sample;
}

test('local bearings move the reflected sun and its twilight band to the same side of the north-up ocean', () => {
  const dawn = sampleOcean({sunElevation:1, sunAzimuth:94, sunRising:true, skyProgress:.9});
  const dusk = sampleOcean({sunElevation:1, sunAzimuth:266, sunRising:false, skyProgress:.1});
  assert.ok(dawn.solarPosition[0] > 150);
  assert.ok(dusk.solarPosition[0] < -150);
  assert.deepEqual(dawn.bodyPosition, dawn.solarPosition);
  assert.deepEqual(dusk.bodyPosition, dusk.solarPosition);
  for (const name of ['solarWarmTint','solarCoolTint','deepTint','bodyTint']) {
    assert.notEqual(dawn[name], dusk[name]);
  }
});

test('twilight color remains after the sun drops below the horizon and fades through deep night and high sun', () => {
  const dim = sampleOcean({night:true, sunElevation:-5, sunAzimuth:271, sunRising:false});
  const horizon = sampleOcean({night:true, sunElevation:0, sunAzimuth:271, sunRising:false});
  const risen = sampleOcean({sunElevation:2, sunAzimuth:271, sunRising:false});
  const dark = sampleOcean({night:true, sunElevation:-17, sunAzimuth:271, sunRising:false});
  const high = sampleOcean({sunElevation:48, sunAzimuth:191, sunRising:false});
  assert.equal(dim.bodyVisibility, 0);
  assert.ok(dim.solarBand > .6);
  assert.ok(horizon.bodyVisibility > 0 && horizon.bodyVisibility < risen.bodyVisibility);
  assert.equal(dark.solarBand, 0);
  assert.equal(high.solarBand, 0);
  assert.ok(high.solarPosition[1] > risen.solarPosition[1]);
});

test('reflections, clouds, moon phase and reduced motion keep their independent controls', () => {
  const dawn = {sunElevation:4, sunAzimuth:90, sunRising:true};
  const clear = sampleOcean(dawn);
  const partial = sampleOcean({...dawn, condition:'partlycloudy'});
  const gray = sampleOcean({...dawn, condition:'cloudy'});
  assert.ok(gray.cloudCover > partial.cloudCover && partial.cloudCover > clear.cloudCover);
  assert.ok(gray.solarBand > 0 && gray.solarBand < partial.solarBand && partial.solarBand < clear.solarBand);
  assert.equal(gray.bodyVisibility, 0);
  const off = sampleOcean({...dawn, reflections:false});
  assert.equal(off.solarBand, 0);
  assert.equal(off.bodyVisibility, 0);
  assert.equal(off.cloudCover, 0);
  const moon = {night:true, sunElevation:-18, moonPhase:'first_quarter', condition:'clear-night', reduceMotion:true};
  const still = sampleOcean(moon, 1);
  assert.equal(still.moon, 1);
  assert.ok(still.bodyVisibility > .9);
  assert.ok(still.moonLight[0] > .99);
  assert.equal(still.waterTime, 0);
  assert.deepEqual(still, sampleOcean(moon, 200));
});

test('rain changes the swell and ripple inputs even with reflections off', () => {
  const wet = {condition:'rainy', windSpeed:16, windBearing:290, reflections:false};
  const clear = sampleOcean({reflections:false});
  const rain = sampleOcean(wet);
  assert.equal(clear.rain, 0);
  assert.equal(rain.rain, 1);
  assert.equal(rain.cloudCover, 0);
  assert.ok(rain.roughness > clear.roughness);
  assert.notEqual(rain.deepTint, clear.deepTint);
  assert.notEqual(rain.reflectedWind, 0);
  assert.deepEqual(sampleOcean(wet), rain);
});
