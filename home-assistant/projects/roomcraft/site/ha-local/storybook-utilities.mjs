const ENTITY_ID = /^[a-z_]+\.[a-z0-9_]+$/;
const UTILITY_TITLES = {electrical: 'Electrical', air: 'Indoor air', health: 'System health'};

function utilityEntities(entries) {
  const rows = new Map();
  for (const entry of entries) {
    const entity = typeof entry === 'string' ? entry : entry?.entity;
    if (typeof entity !== 'string' || !ENTITY_ID.test(entity) || rows.has(entity)) continue;
    rows.set(entity, {entity, name: typeof entry?.name === 'string' ? entry.name.slice(0, 80) : ''});
  }
  return [...rows.values()].slice(0, 30);
}

export function readStorybookUtilities(config) {
  const views = Array.isArray(config?.views) ? config.views : [];
  const legacyPlanCards = views.find(view => view?.path === 'plan')?.cards;
  const plan = config?.roomcraft_plan ?? (Array.isArray(legacyPlanCards)
    ? legacyPlanCards.find(card => card?.type === 'picture-elements') : undefined);
  const elements = Array.isArray(plan?.elements) ? plan.elements : [];
  const health = config?.roomcraft_health ?? views.find(view => view?.path === 'health');
  const panels = {};
  for (const kind of ['electrical', 'air']) {
    const source = elements.find(element =>
      element?.type === 'custom:roomcraft-status-popup' && element.roomcraft_status_kind === kind);
    const entities = utilityEntities(Array.isArray(source?.entities) ? source.entities : []);
    if (entities.length) panels[kind] = {kind, title: UTILITY_TITLES[kind], entities};
  }
  if (Array.isArray(health?.cards)) {
    const watchdog = health.cards.find(card => card?.type === 'custom:system-watchdog-card');
    const diagnostics = health.cards.filter(card => card?.type === 'entities' && Array.isArray(card.entities))
      .flatMap(card => card.entities);
    const entities = utilityEntities([watchdog?.summary_entity, watchdog?.issue_entity, ...diagnostics]);
    if (entities.length) panels.health = {kind: 'health', title: UTILITY_TITLES.health, entities};
  }
  const devices = elements.find(element => element?.type === 'custom:roomcraft-entity-menu' &&
    element.roomcraft_menu === true);
  return {panels, devices};
}

export function utilityReading(entry, snapshot, health) {
  const state = snapshot?.[entry.entity];
  const attributes = state?.attributes;
  const value = state?.state ?? 'unavailable';
  const available = !['unknown', 'unavailable', ''].includes(value);
  const unit = available && typeof attributes?.unit_of_measurement === 'string'
    ? ` ${attributes.unit_of_measurement}` : '';
  const healthStatus = health ? attributes?.status || value : '';
  const level = !available ? 'unavailable'
    : ['healthy', 'warning', 'critical'].includes(healthStatus) ? healthStatus : '';
  return {
    name: entry.name || attributes?.friendly_name || entry.entity,
    reading: available ? `${value}${unit}` : value === 'unknown' ? 'Unknown' : 'Unavailable',
    level,
    message: health && available && typeof attributes?.message === 'string' ? attributes.message.slice(0, 240) : '',
    issues: health && available && Array.isArray(attributes?.issues)
      ? attributes.issues.filter(issue => typeof issue === 'string').slice(0, 5).map(issue => issue.slice(0, 180)) : [],
  };
}
