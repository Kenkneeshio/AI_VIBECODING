import assert from 'node:assert/strict';
import test from 'node:test';
import {normalizeWeatherForecast, windyMapUrl} from '../ha-local/storybook-weather-panel.mjs';

test('hourly forecast preserves provider values in chronological order within the next 12 hours', () => {
  const now = Date.parse('2026-01-01T00:30Z');
  const forecasts = Array.from({length:14}, (_, index) => ({
    datetime:new Date(now + (index + .5) * 3_600_000).toISOString(),
    condition:'rainy', temperature:index - 3, precipitation_probability:index * 5,
  }));
  const input = [
    ...forecasts.reverse(),
    {datetime:'2026-01-01T00:00Z', temperature:11},
    {datetime:'invalid'},
    null,
  ];
  const result = normalizeWeatherForecast(input, 'hourly', now);
  assert.equal(result.length, 12);
  assert.deepEqual(result[0], {
    datetime:Date.parse('2026-01-01T01:00Z'), condition:'rainy',
    temperature:-3, low:undefined, precipitation:0,
  });
  assert.equal(result.at(-1).datetime, Date.parse('2026-01-01T12:00Z'));
  assert.deepEqual(normalizeWeatherForecast(input, '__proto__', now), []);
});

test('daily forecast includes the current calendar bucket and keeps provider high and low', () => {
  const entries = [
    {datetime:'2026-02-12T00:00Z', temperature:19, templow:12},
    {datetime:'2026-02-11T00:00Z', temperature:22, templow:16},
  ];
  const result = normalizeWeatherForecast(entries, 'daily', Date.parse('2026-02-12T23:00Z'));
  assert.equal(result.length, 1);
  assert.equal(result[0].temperature, 19);
  assert.equal(result[0].low, 12);
});

test('Windy receives only coarse coordinates in its official embed URL', () => {
  const url = new URL(windyMapUrl({latitude:34.123456, longitude:-118.765432}));
  assert.equal(url.origin, 'https://embed.windy.com');
  assert.equal(url.pathname, '/embed.html');
  assert.equal(url.searchParams.get('lat'), '34.1');
  assert.equal(url.searchParams.get('lon'), '-118.8');
  assert.equal(url.searchParams.get('overlay'), 'wind');
  assert.equal(new URL(windyMapUrl({latitude:90.1, longitude:5})).searchParams.get('zoom'), '2');
});
