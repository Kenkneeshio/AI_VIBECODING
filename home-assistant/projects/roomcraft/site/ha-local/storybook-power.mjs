import {utilityReading} from './storybook-utilities.mjs';

const WATTS = new Map([['mW', .001], ['W', 1], ['kW', 1_000], ['MW', 1_000_000]]);
const KILOWATT_HOURS = new Map([['Wh', .001], ['kWh', 1], ['MWh', 1_000]]);
const NUMBER = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
const WHOLE_HOME = /^(?:(?:whole|total) (?:home|house)|(?:home|house) total|home|house|mains?|total)(?: (?:power|draw|demand|load|usage|consumption|meter)(?: (?:now|average))?)?$/;

function numeric(state) {
  if (typeof state === 'string' && NUMBER.test(state.trim())) state = Number(state);
  return Number.isFinite(state) ? state || 0 : null;
}

function normalized(value) {
  return typeof value === 'string' ? value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() : '';
}

function reading(entry, snapshot) {
  const state = snapshot?.[entry.entity];
  const attributes = state?.attributes;
  const unit = typeof attributes?.unit_of_measurement === 'string' ? attributes.unit_of_measurement.trim() : '';
  const wattsPerUnit = WATTS.get(unit) ?? null;
  const energyPerUnit = KILOWATT_HOURS.get(unit) ?? null;
  const kind = wattsPerUnit ? 'power' : energyPerUnit ? 'energy' : 'other';
  const value = numeric(state?.state);
  const formatted = utilityReading(entry, snapshot, false);
  const available = formatted.level !== 'unavailable' && (kind === 'other' || value !== null);
  const labels = [entry.name, attributes?.friendly_name].map(normalized);
  return {
    entity: entry.entity,
    name: formatted.name,
    reading: available || formatted.level === 'unavailable' ? formatted.reading : 'Unavailable',
    available,
    kind,
    wholeHome: kind === 'power' && labels.some(label => WHOLE_HOME.test(label)),
    value,
    unit,
    watts: available && wattsPerUnit ? numeric(value * wattsPerUnit) : null,
    wattsPerUnit,
    kwh: available && energyPerUnit ? numeric(value * energyPerUnit) : null,
    labels,
  };
}

function period(row, expression) {
  return row.kind === 'energy' && row.labels.some(label =>
    expression.test(label) && !/\b(?:average|last|previous|yesterday)\b/.test(label));
}

/** Classify configured meter readings without estimating or adding independent values. */
export function powerPanelModel(entries, snapshot) {
  const rows = (entries ?? []).map(entry => reading(entry, snapshot));
  const power = rows.filter(row => row.kind === 'power');
  const main = power.filter(row => row.wholeHome);
  const primary = main.find(row => row.available) ?? main[0] ??
    power.find(row => row.available) ?? power[0] ?? null;
  const today = rows.find(row => period(row, /\b(?:today|daily)\b/)) ?? null;
  const month = rows.find(row => row !== today && period(row, /\b(?:this month|month to date|monthly)\b/)) ?? null;
  const featured = new Set([primary, today, month]);
  const remaining = rows.filter(row => !featured.has(row));
  const comparable = remaining.filter(row => !row.wholeHome && row.watts !== null && row.watts >= 0)
    .sort((a, b) => b.watts - a.watts);
  const peak = comparable[0]?.watts ?? 0;
  const loads = comparable.map(row => ({...row, fraction: peak ? row.watts / peak : 0}));
  const compared = new Set(comparable);
  return {
    primary, today, month, loads,
    other: remaining.filter(row => row.available && !compared.has(row)),
    unavailable: remaining.filter(row => !row.available),
    availableCount: rows.filter(row => row.available).length,
    totalCount: rows.length,
  };
}

/** Convert an authenticated Recorder response into points, keeping missing-state gaps. */
export function powerHistorySamples(rawRows, {start, end, wattsPerUnit} = {}) {
  if (!Array.isArray(rawRows) || !Number.isFinite(start) || !Number.isFinite(end) ||
      !Number.isFinite(wattsPerUnit) || wattsPerUnit <= 0 || start > end) return [];
  const samples = new Map();
  for (const row of rawRows) {
    const stamp = row?.lu ?? row?.last_updated;
    const time = typeof stamp === 'number' ? stamp * 1000
      : typeof stamp === 'string' ? Date.parse(stamp) : NaN;
    if (!Number.isFinite(time) || time < start || time > end) continue;
    const value = numeric(row?.s ?? row?.state);
    const attributes = row?.a ?? row?.attributes;
    const scale = attributes && Object.hasOwn(attributes, 'unit_of_measurement')
      ? WATTS.get(attributes.unit_of_measurement) : wattsPerUnit;
    samples.set(time, {time, watts: value === null || !scale ? null : numeric(value * scale)});
  }
  return [...samples.values()].sort((a, b) => a.time - b.time);
}
