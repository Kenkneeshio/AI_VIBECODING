import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)),
  'roomcraft-weather-outdoor.js'), 'utf8');
const NOW = Date.parse('2026-10-31T12:00:00Z');
const hour = 60 * 60 * 1000;

class FakeNode {
  constructor(tag = 'div') {
    this.tag = tag;
    this.dataset = {};
    this.children = [];
    this.attributes = {};
    this.style = {
      left: '',
      properties: {},
      setProperty: (name, value) => { this.style.properties[name] = value; },
    };
    this.textContent = '';
  }
  addEventListener() {}
  setAttribute(name, value) { this.attributes[name] = value; }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = [...children]; }
  closest(selector) { return selector === 'button[data-at]' && this.tag === 'button' ? this : null; }
}

class FakeShadow {
  constructor() {
    this.nodes = new Map([
      ['.world', new FakeNode()],
      ['.forecast', new FakeNode()],
      ['.moon-lit', new FakeNode()],
      ['.preview-note', new FakeNode()],
      ['.sr-only', new FakeNode()],
    ]);
    this.innerHTML = '';
  }
  querySelector(selector) { return this.nodes.get(selector); }
}

function loadModule() {
  const definitions = new Map();
  class FakeElement {
    constructor() { this.dataset = {}; }
    attachShadow() { this.shadowRoot = new FakeShadow(); return this.shadowRoot; }
  }
  class FrozenDate extends Date {
    static now() { return NOW; }
  }
  const context = {
    HTMLElement: FakeElement,
    customElements: {
      get: name => definitions.get(name),
      define: (name, definition) => definitions.set(name, definition),
    },
    document: {
      visibilityState: 'visible',
      createElement: tag => new FakeNode(tag),
      addEventListener() {},
      removeEventListener() {},
    },
    Date: FrozenDate,
    Intl,
    setInterval: () => 1,
    clearInterval() {},
    setTimeout: () => 1,
    clearTimeout() {},
  };
  vm.runInNewContext(source, context);
  return {
    helpers: context.RoomcraftWeatherOutdoor,
    Card: definitions.get('roomcraft-weather-outdoor'),
    context,
  };
}

test('condition mapping distinguishes observed precipitation, snow and haze', () => {
  const { helpers } = loadModule();
  assert.equal(helpers.weatherKind('pouring'), 'rain');
  assert.equal(helpers.weatherKind('lightning-rainy'), 'storm');
  assert.equal(helpers.weatherKind('snowy-rainy'), 'snow');
  assert.equal(helpers.weatherKind('fog'), 'fog');
  assert.equal(helpers.weatherKind('clear-night'), 'clear');
});

test('hourly forecast uses timestamps inside the next 12 hours, sorted and unique', () => {
  const { helpers } = loadModule();
  const rows = [
    { datetime: new Date(NOW + 13 * hour).toISOString(), condition: 'sunny' },
    { datetime: new Date(NOW + 11 * hour).toISOString(), condition: 'cloudy', temperature: 65 },
    { datetime: 'invalid', condition: 'rainy' },
    { datetime: new Date(NOW - hour).toISOString(), condition: 'rainy' },
    { datetime: new Date(NOW + hour).toISOString(), condition: 'rainy', temperature: 70 },
    { datetime: new Date(NOW + hour).toISOString(), condition: 'rainy', temperature: 70 },
  ];
  const forecast = helpers.normalizeHourlyForecast(rows, NOW);
  assert.deepEqual(Array.from(forecast, row => row.at), [NOW + hour, NOW + 11 * hour]);
  assert.deepEqual(Array.from(forecast, row => row.temperature), [70, 65]);
  assert.equal(helpers.normalizeHourlyForecast(null, NOW).length, 0);
  assert.equal(helpers.normalizeHourlyForecast([
    { datetime: new Date(NOW + hour).toISOString(), condition: 'sunny', temperature: null },
  ], NOW)[0].temperature, null);
});

test('daylight transitions at Home Assistant sunrise and sunset', () => {
  const { helpers } = loadModule();
  const sun = {
    state: 'above_horizon',
    attributes: {
      next_setting: new Date(NOW + 3 * hour).toISOString(),
      next_rising: new Date(NOW + 19 * hour).toISOString(),
    },
  };
  assert.equal(helpers.daylightAt(NOW + 2 * hour, sun, NOW), true);
  assert.equal(helpers.daylightAt(NOW + 4 * hour, sun, NOW), false);
  assert.equal(helpers.daylightAt(NOW + 12 * hour, sun, NOW), false);
  assert.equal(helpers.daylightAt(NOW, null, NOW), null);
});

test('moon phase path changes between new, quarter and full moon', () => {
  const { helpers } = loadModule();
  assert.equal(helpers.moonPhasePath('new_moon'), '');
  assert.notEqual(helpers.moonPhasePath('first_quarter'), helpers.moonPhasePath('last_quarter'));
  assert.notEqual(helpers.moonPhasePath('full_moon'), '');
});

test('card requests hourly forecasts once, previews a future hour and masks the house', async () => {
  const { Card } = loadModule();
  const calls = [];
  const card = new Card();
  card.setConfig({
    weather_entity: 'weather.sample',
    sun_entity: 'sun.sun',
    moon_entity: 'sensor.moon_phase',
  });
  const futureAt = NOW + hour;
  const response = {
    response: {
      'weather.sample': {
        forecast: [
          { datetime: new Date(futureAt).toISOString(), condition: 'snowy', temperature: 35 },
          { datetime: new Date(NOW + 15 * hour).toISOString(), condition: 'sunny', temperature: 70 },
        ],
      },
    },
  };
  const hass = {
    config: { time_zone: 'UTC' },
    states: {
      'weather.sample': {
        state: 'rainy',
        attributes: { temperature: 43, temperature_unit: '°F' },
      },
      'sun.sun': {
        state: 'below_horizon',
        attributes: { next_rising: new Date(NOW + 8 * hour).toISOString() },
      },
      'sensor.moon_phase': { state: 'waxing_crescent', attributes: {} },
    },
    callWS: async payload => { calls.push(payload); return response; },
  };
  card.hass = hass;
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(calls.length, 1);
  assert.deepEqual(JSON.parse(JSON.stringify(calls[0])), {
    type: 'call_service',
    domain: 'weather',
    service: 'get_forecasts',
    service_data: { entity_id: 'weather.sample', type: 'hourly' },
    return_response: true,
  });
  assert.equal(card._forecast.length, 1);
  assert.equal(card._world.dataset.weather, 'rain');
  assert.equal(card._world.dataset.day, 'false');
  assert.equal(card._world.dataset.moon, 'true');
  assert.equal(card._strip.children.length, 2);
  assert.match(card.shadowRoot.innerHTML, /<rect x="0" y="0" width="1536" height="75"/);
  assert.match(card.shadowRoot.innerHTML, /<rect x="0" y="75" width="145" height="740"/);
  assert.match(card.shadowRoot.innerHTML, /<rect x="145" y="75" width="235" height="305"/);
  assert.match(card.shadowRoot.innerHTML, /<rect x="0" y="815" width="1536" height="49"/);
  assert.match(card.shadowRoot.innerHTML, /<stop offset="76%" stop-color="#fff"\/>/);
  assert.match(card.shadowRoot.innerHTML, /<stop offset="100%" stop-color="#000"\/>/);
  assert.match(card.shadowRoot.innerHTML, /class="night-wash"[^>]+mask="url\(#roomcraft-wash-mask\)"/);
  assert.match(card.shadowRoot.innerHTML, /<g clip-path="url\(#roomcraft-outside\)">/);
  card.hass = hass;
  assert.equal(calls.length, 1, 'HA state updates must not refetch the forecast');
  card._handleForecastClick({ target: card._strip.children[1] });
  assert.equal(card._world.dataset.weather, 'snow');
  assert.equal(card._world.dataset.preview, 'true');
  card._handleForecastClick({ target: card._strip.children[0] });
  assert.equal(card._world.dataset.weather, 'rain');
  assert.equal(card._world.dataset.preview, 'false');
});

test('forecast failure leaves current observed weather visible', async () => {
  const { Card } = loadModule();
  const card = new Card();
  card.setConfig({ weather_entity: 'weather.sample' });
  card.hass = {
    states: { 'weather.sample': { state: 'sunny', attributes: {} } },
    config: {},
    callWS: async () => { throw new Error('forecast not supported'); },
  };
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(card._world.dataset.weather, 'sun');
  assert.equal(card._world.dataset.moon, 'false');
  assert.equal(card._moonLit.attributes.d, '');
  assert.equal(card._strip.children.length, 1);
});

test('changing the weather entity during a request fetches the new entity', async () => {
  const { Card } = loadModule();
  const card = new Card();
  let finishFirst;
  const calls = [];
  card.setConfig({ weather_entity: 'weather.first' });
  card.hass = {
    states: {
      'weather.first': { state: 'rainy', attributes: {} },
      'weather.second': { state: 'cloudy', attributes: {} },
    },
    config: {},
    callWS: payload => {
      calls.push(payload.service_data.entity_id);
      if (calls.length === 1) return new Promise(resolve => { finishFirst = resolve; });
      return Promise.resolve({ response: { 'weather.second': { forecast: [
        { datetime: new Date(NOW + hour).toISOString(), condition: 'sunny' },
      ] } } });
    },
  };
  card.setConfig({ weather_entity: 'weather.second' });
  assert.deepEqual(calls, ['weather.first']);
  finishFirst({ response: { 'weather.first': { forecast: [] } } });
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(calls, ['weather.first', 'weather.second']);
  assert.equal(card._forecast[0].condition, 'sunny');
});
