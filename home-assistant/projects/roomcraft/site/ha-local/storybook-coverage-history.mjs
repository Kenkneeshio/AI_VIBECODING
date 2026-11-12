import {projectRadarPoint, validTrackTransform} from './storybook-tracking.mjs';

const SENSOR = /^sensor\.[a-z0-9_]+$/;
const SOURCE_LIMIT = 12;
const RAW_CELL_SIZE = 25;
const RAW_CELL_LIMIT = 65 ** 2;
const SAMPLE_LIMIT = 10080 * 12;
const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;
const HALF_BIN = RAW_CELL_SIZE / 2;
const BIN_CORNERS = [[-HALF_BIN, -HALF_BIN], [HALF_BIN, -HALF_BIN],
  [HALF_BIN, HALF_BIN], [-HALF_BIN, HALF_BIN]];
const validCenter = value => Number.isInteger(value) && Math.abs(value) <= 800 && value % RAW_CELL_SIZE === 0;

function coverageCalibrations(items) {
  const sources = new Map();
  for (const item of items) {
    const entity = item.presenceTrackEntityId;
    if (item.type !== 'presenceSwitch' || !SENSOR.test(entity || '') || sources.has(entity) ||
        !validTrackTransform(item.presenceTrackTransform)) continue;
    const zone = item.presenceTrackZone;
    const validZone = Array.isArray(zone) && zone.length === 4 && zone.every(Number.isFinite) &&
      zone[0] < zone[1] && zone[2] < zone[3];
    sources.set(entity, {transform: item.presenceTrackTransform, zone: validZone ? zone : undefined});
    if (sources.size === SOURCE_LIMIT) break;
  }
  return sources;
}

export function coverageHistorySources(items = []) {
  return [...coverageCalibrations(items).keys()];
}

/** Project anonymous sensor-local bins with the current layout calibration. */
export function readCoverageHistory(items, response) {
  const {from, to, cellSize, sources} = response ?? {};
  if (![from, to].every(Number.isFinite) || from >= to || cellSize !== RAW_CELL_SIZE ||
      !sources || typeof sources !== 'object' || Array.isArray(sources)) return null;
  const cells = new Map();
  let samples = 0;
  let reportedCells = 0;
  let outsidePlan = 0;
  let outsideConfigured = 0;
  let sourceCount = 0;
  let furthestCm = 0;
  for (const [entity, {transform, zone}] of coverageCalibrations(items)) {
    if (!Object.hasOwn(sources, entity)) continue;
    const {samples: count, cells: bins} = sources[entity] ?? {};
    if (!Number.isInteger(count) || count < 0 || count > SAMPLE_LIMIT || !Array.isArray(bins)) continue;
    sourceCount++;
    samples += count;
    const seen = new Set();
    for (const bin of bins.slice(0, RAW_CELL_LIMIT)) {
      const {x, y, hits} = bin ?? {};
      if (!validCenter(x) || !validCenter(y) || !Number.isInteger(hits) || hits < 1 || hits > count) continue;
      const rawKey = `${x}:${y}`;
      if (seen.has(rawKey)) continue;
      seen.add(rawKey);
      reportedCells++;
      furthestCm = Math.max(furthestCm, Math.hypot(x, y));
      if (zone && (x < zone[0] || x > zone[1] || y < zone[2] || y > zone[3])) outsideConfigured++;
      const {x: px, y: py} = projectRadarPoint(transform, x, y);
      if (px < 0 || py < 0 || px >= PLAN_WIDTH || py >= PLAN_HEIGHT) {
        outsidePlan++;
        continue;
      }
      const corners = BIN_CORNERS.map(([dx, dy]) => {
        const point = projectRadarPoint(transform, x + dx, y + dy);
        return [point.x, point.y];
      });
      // Equal transformed cells can overlap when two sensors see the same patch.
      const key = corners.map(([cx, cy]) => `${cx.toFixed(4)}:${cy.toFixed(4)}`).sort().join('|');
      const position = cells.get(key) ?? {x: px, y: py, corners, hits: 0};
      position.hits += hits;
      cells.set(key, position);
    }
  }
  return {from, to, cellSize, samples, reportedCells, outsidePlan, outsideConfigured, sourceCount, furthestCm,
    cells: [...cells.values()].sort((a, b) => a.y - b.y || a.x - b.x || b.hits - a.hits)};
}
