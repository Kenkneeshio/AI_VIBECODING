import assert from 'node:assert/strict';
import test from 'node:test';
import {bindStorybookHeatMap} from '../ha-local/storybook-heatmap-panel.mjs';

const sensor = 'sensor.radar_fixture';
const items = [{
  type: 'presenceSwitch', presenceTrackEntityId: sensor, presenceTrackTransform: [1, 0, 200, 0, 1, 200],
}];
const tick = () => new Promise(resolve => setImmediate(resolve));
const from = Date.UTC(2026, 10, 10);
const history = (samples, cells) => ({
  from, to: from + 60 * 60_000, cellSize: 25, sources: {[sensor]: {samples, cells}},
});

class Element extends EventTarget {
  constructor() {
    super();
    this.dataset = {};
    this.attributes = new Map();
    this.hidden = true;
    this.value = '60';
    this.textContent = '';
  }

  setAttribute(key, value) { this.attributes.set(key, value); }
  querySelector(key) { return this.children[key]; }
}

function fixture() {
  const root = new Element();
  const button = new Element();
  const legend = new Element();
  const range = new Element();
  const key = new Element();
  const status = new Element();
  const calibration = new Element();
  root.ownerDocument = {hidden: false};
  root.children = {'.toggle-heat-map': button, '.heat-map-legend': legend};
  legend.children = {'.heat-map-range': range, '.heat-map-key': key,
    '.heat-map-status': status, '.heat-map-calibration': calibration};
  const requests = [];
  const renders = [];
  const timers = new Map();
  const session = {connected: true, callWS: payload => new Promise((resolve, reject) =>
    requests.push({payload, resolve, reject}))};
  let paused = false;
  let dismissals = 0;
  let timerId = 0;
  const panel = bindStorybookHeatMap(root, {
    getSession: () => session,
    setHistory: value => { renders.push(value); return value?.cells.length ? 1 : 0; },
    dismissMenu: () => dismissals++,
    isPaused: () => paused,
    host: {
      setTimeout(callback, timeout) { timers.set(++timerId, {callback, timeout}); return timerId; },
      clearTimeout(id) { timers.delete(id); },
    },
  });
  return {panel, button, legend, range, status, calibration, requests, renders, timers, session,
    dismissals: () => dismissals,
    toggle: () => button.dispatchEvent(new Event('click')),
    choose: value => { range.value = value; range.dispatchEvent(new Event('change')); },
    pause: value => { paused = value; panel.sync(); },
  };
}

test('radar history is opt-in, range-specific and read-only, with calibrated coverage omissions', async () => {
  const ui = fixture();
  ui.panel.configure();
  assert.equal(ui.button.hidden, true);
  ui.panel.configure(items);
  assert.equal(ui.button.hidden, false);
  assert.equal(ui.requests.length, 0);
  ui.toggle();
  assert.equal(ui.legend.hidden, false);
  assert.equal(ui.button.attributes.get('aria-pressed'), 'true');
  assert.equal(ui.legend.dataset.state, 'loading');
  assert.deepEqual(ui.requests[0].payload, {type: 'roomcraft_presence/heatmap', entity_ids: [sensor], minutes: 60});
  ui.choose('15');
  assert.equal(ui.requests[1].payload.minutes, 15);
  ui.requests[0].resolve(history(0, []));
  ui.requests[1].resolve(history(9, [{x: 0, y: 100, hits: 5}, {x: 100, y: 100, hits: 4},
    {x: -500, y: 100, hits: 2}]));
  await tick();
  assert.equal(ui.legend.dataset.state, 'ready');
  assert.equal(ui.status.textContent, '9 samples · 1 floor bin');
  assert.match(ui.calibration.textContent, /1 raw bin off the plan · 1 mapped bin off the floor/);
  assert.equal(ui.renders.filter(Boolean).length, 1);
  ui.toggle();
  assert.equal(ui.dismissals(), 2);
  assert.equal(ui.legend.hidden, true);
  assert.equal(ui.renders.at(-1), null);
  assert.equal(ui.timers.size, 0);
});

test('empty, paused, offline and unavailable states do not display stale heat', async () => {
  const ui = fixture();
  ui.panel.configure(items);
  ui.toggle();
  ui.requests[0].resolve(history(0, []));
  await tick();
  assert.equal(ui.legend.dataset.state, 'empty');
  ui.pause(true);
  assert.equal(ui.timers.size, 0);
  ui.choose('10080');
  assert.equal(ui.requests.length, 1);
  ui.pause(false);
  assert.equal(ui.requests[1].payload.minutes, 10080);
  ui.session.connected = false;
  ui.panel.sync();
  ui.requests[1].resolve(history(10, [{x: 100, y: 100, hits: 8}]));
  await tick();
  assert.equal(ui.legend.dataset.state, 'offline');
  assert.equal(ui.renders.at(-1), null);
  ui.session.connected = true;
  ui.panel.sync();
  ui.requests[2].reject(new Error('Synthetic endpoint unavailable'));
  await tick();
  assert.equal(ui.legend.dataset.state, 'unavailable');
  ui.panel.configure();
  assert.equal(ui.timers.size, 0);
});
