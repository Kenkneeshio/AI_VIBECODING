import assert from 'node:assert/strict';
import test from 'node:test';

globalThis.HTMLElement = class {};
globalThis.customElements = { registry: new Map(), get(name) { return this.registry.get(name); }, define(name, value) { this.registry.set(name, value); } };
globalThis.window = { customCards: [] };

const { normalizeStatus, categorySnapshot, compactMetric } = await import('./system-watchdog-card.js');

test('watchdog status is strict and unavailable is not presented as healthy', () => {
  assert.equal(normalizeStatus({ state: 'healthy', attributes: {} }), 'healthy');
  assert.equal(normalizeStatus({ state: 'on', attributes: { status: 'critical' } }), 'critical');
  assert.equal(normalizeStatus({ state: 'unavailable', attributes: {} }), 'unavailable');
  assert.equal(normalizeStatus({ state: 'surprising', attributes: {} }), 'warning');
});

test('category snapshot bounds issues and reports verified metrics', () => {
  const hass = { states: { 'sensor.system_watchdog_integrations': { state: 'warning', attributes: {
    status: 'warning', message: '46/47 integrations free of setup errors', monitored: 47, healthy: 46,
    issues: Array.from({ length: 12 }, (_, index) => `Issue ${index}`),
  } } } };
  const snapshot = categorySnapshot(hass, 'integrations');
  assert.equal(snapshot.status, 'warning');
  assert.equal(snapshot.issues.length, 8);
  assert.equal(compactMetric(snapshot), '46/47');
});

test('external heartbeat age is compact without claiming availability counts', () => {
  const snapshot = categorySnapshot({ states: { 'sensor.system_watchdog_tablet': {
    state: 'healthy', attributes: { status: 'healthy', message: 'ADB connected', age_seconds: 125 },
  } } }, 'tablet');
  assert.equal(compactMetric(snapshot), '2m');
  assert.equal(snapshot.message, 'ADB connected');
});

test('card registers once for Home Assistant discovery', () => {
  assert.ok(customElements.get('system-watchdog-card'));
  assert.equal(window.customCards.filter(card => card.type === 'system-watchdog-card').length, 1);
});
