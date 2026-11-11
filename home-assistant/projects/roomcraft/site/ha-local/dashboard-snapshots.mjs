export const DASHBOARD_SNAPSHOT_LIMIT = 3;

function object(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function stableDashboardJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableDashboardJson).join(',')}]`;
  if (!object(value)) return JSON.stringify(value);
  return `{${Object.keys(value).sort().map(key =>
    `${JSON.stringify(key)}:${stableDashboardJson(value[key])}`).join(',')}}`;
}

function design(layout, plan) {
  if (layout?.version !== 2 ||
      !['rooms', 'walls', 'items', 'hotspots'].every(key => Array.isArray(layout[key]) && layout[key].every(object)) ||
      plan?.type !== 'picture-elements' || !Array.isArray(plan.elements) || !plan.elements.every(object) ||
      typeof plan.image !== 'string' || !/^\/api\/image\/serve\/[0-9a-f]{32}\/original$/.test(plan.image)) return null;
  return {layout, plan};
}

function currentDesign(config) {
  return design(config?.roomcraft_layout, config?.roomcraft_plan);
}

function designKey({layout, plan}) {
  // Uploading an unchanged projection gives it a new image ID. Keep the
  // previous slots for distinct layout or binding changes.
  const projection = {...plan};
  delete projection.image;
  return stableDashboardJson([layout, projection]);
}

function validTimestamp(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d{3})?Z$/.test(value)) return false;
  const timestamp = new Date(value);
  return Number.isFinite(timestamp.valueOf()) &&
    (timestamp.toISOString() === value || timestamp.toISOString().replace('.000Z', 'Z') === value);
}

function distinctSnapshots(entries, active) {
  const seen = new Set(active ? [designKey(active)] : []);
  const result = [];
  for (const entry of entries) {
    if (!validTimestamp(entry?.savedAt)) continue;
    const saved = design(entry.layout, entry.plan);
    if (!saved) continue;
    const key = designKey(saved);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push({savedAt: entry.savedAt, ...saved});
    if (result.length === DASHBOARD_SNAPSHOT_LIMIT) break;
  }
  return result;
}

export function readDashboardSnapshots(config) {
  const active = currentDesign(config);
  if (!active || !Array.isArray(config.roomcraft_snapshots)) return [];
  return distinctSnapshots(config.roomcraft_snapshots, active);
}

/** Save the displaced design alongside the next design in the same dashboard write. */
export function keepPreviousDashboardDesign(current, next, savedAt) {
  const previous = currentDesign(current);
  const active = currentDesign(next);
  if (!previous || !active || designKey(previous) === designKey(active)) return next;
  return {...next, roomcraft_snapshots: distinctSnapshots([
    {savedAt, ...previous}, ...readDashboardSnapshots(current),
  ], active)};
}

/** Rotate history without changing dashboard views, health, or resources. */
export function restoreDashboardDesign(config, index, savedAt) {
  const saved = readDashboardSnapshots(config)[index];
  if (!saved) return null;
  return keepPreviousDashboardDesign(config, {
    ...config, roomcraft_layout: saved.layout, roomcraft_plan: saved.plan,
  }, savedAt);
}
