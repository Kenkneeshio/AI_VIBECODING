import {powerMeterReading} from './storybook-power.mjs';
import {energyResetDate} from './storybook-energy-periods.mjs';

export const ENERGY_PERIODS = Object.freeze({
  live: 'Live power', today: 'Today', month: 'Calendar month', billing: 'Billing cycle',
});

const ENTITY = /^sensor\.[a-z0-9_]+$/;
const ID = /^[a-zA-Z0-9_-]{1,96}$/;
const KINDS = new Set(['circuit', 'outlet', 'other']);
const METERS = ['power', 'today', 'billing', 'statistic'];
const format = new Intl.NumberFormat(undefined, {maximumFractionDigits: 2});

function readMeters(row) {
  return Object.fromEntries(METERS.filter(key => typeof row?.[key] === 'string' && ENTITY.test(row[key]))
    .map(key => [key, row[key]]));
}

/** Parse the optional private dashboard mapping. Each reading has one owner. */
export function readRoomcraftEnergy(value) {
  if (value?.version !== 1 || !Array.isArray(value.groups)) return null;
  const home = readMeters(value.home);
  if (!Object.keys(home).length) return null;
  const groups = [];
  const ids = new Set();
  const used = new Set(Object.values(home));
  for (const row of value.groups) {
    if (typeof row?.id !== 'string' || !ID.test(row.id) || ids.has(row.id) ||
        typeof row.label !== 'string' || !row.label.trim() || !KINDS.has(row.kind)) continue;
    const meters = Object.fromEntries(Object.entries(readMeters(row)).filter(([, entity]) => !used.has(entity)));
    if (!Object.keys(meters).length) continue;
    ids.add(row.id);
    for (const entity of Object.values(meters)) used.add(entity);
    groups.push({id: row.id, label: row.label.trim().slice(0, 120), kind: row.kind,
      shared: row.shared === true, ...meters});
  }
  return {home: {id: null, label: 'Whole home', ...home}, groups};
}

function direct(entity, states, kind) {
  if (!entity) return {reading: 'Unavailable', available: false};
  const row = powerMeterReading({entity}, states);
  const measured = kind === 'power' ? row.watts : row.kwh;
  if (!Number.isFinite(measured)) return {entity, reading: row.reading === 'Unknown' ? 'Unknown' : 'Unavailable', available: false};
  return {entity, reading: `${format.format(row.value)} ${row.unit}`, available: true,
    watts: kind === 'power' ? measured : undefined, value: measured};
}

function calendar(entity, totals) {
  if (!entity) return {reading: 'Unavailable', available: false};
  const total = totals?.[entity];
  if (!Number.isFinite(total?.value)) return {entity, reading: 'Unavailable', available: false};
  return {entity, reading: `${format.format(total.value)} kWh`, available: true, value: total.value,
    through: total.through};
}

/** Give the hub and each branch only its own readings, keeping overlapping meters independent. */
export function roomcraftEnergyFrame(config, states, totals, timeZone) {
  const reset = entity => energyResetDate(states?.[entity]?.attributes?.last_reset, timeZone);
  const billingStart = reset(config.home.billing);
  const frame = row => {
    const billing = row.billing && billingStart && reset(row.billing) === billingStart
      ? direct(row.billing, states, 'energy') : {entity: row.billing, reading: 'Unavailable', available: false};
    return {id: row.id, label: row.label, kind: row.kind, shared: row.shared, metrics: {
      live: direct(row.power, states, 'power'), today: direct(row.today, states, 'energy'),
      month: calendar(row.statistic, totals), billing,
    }};
  };
  return {billingStart, center: frame(config.home), groups: config.groups.map(frame)};
}
