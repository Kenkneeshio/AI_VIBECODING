import {validTrackTransform} from './storybook-tracking.mjs';

const SENSOR = /^sensor\.[a-z0-9_]+$/;
const SOURCE_LIMIT = 12;
const RAW_CELL_SIZE = 25;
const RAW_CELL_LIMIT = 65 ** 2;
const SAMPLE_LIMIT = 10080 * 12;
const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;
const PLAN_CELL_SIZE = 24;

function coverageCalibrations(items) {
  const sources = new Map();
  for (const item of items) {
    const entity = item.presenceTrackEntityId;
    if (item.type !== 'presenceSwitch' || !SENSOR.test(entity || '') || sources.has(entity) ||
        !validTrackTransform(item.presenceTrackTransform)) continue;
    sources.set(entity, item.presenceTrackTransform);
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
  let sourceCount = 0;
  let furthestCm = 0;
  for (const [entity, [a,b,c,d,e,f]] of coverageCalibrations(items)) {
    if (!Object.hasOwn(sources, entity)) continue;
    const {samples: count, cells: bins} = sources[entity] ?? {};
    if (!Number.isInteger(count) || count < 0 || count > SAMPLE_LIMIT || !Array.isArray(bins)) continue;
    sourceCount++;
    samples += count;
    const seen = new Set();
    for (const bin of bins.slice(0, RAW_CELL_LIMIT)) {
      const {x, y, hits} = bin ?? {};
      const validCenter = value => Number.isInteger(value) && Math.abs(value) <= 800 && value % RAW_CELL_SIZE === 0;
      if (!validCenter(x) || !validCenter(y) || !Number.isInteger(hits) || hits < 1 || hits > count) continue;
      const rawKey = `${x}:${y}`;
      if (seen.has(rawKey)) continue;
      seen.add(rawKey);
      reportedCells++;
      furthestCm = Math.max(furthestCm, Math.hypot(x, y));
      const px = a * x + b * y + c;
      const py = d * x + e * y + f;
      if (px < 0 || py < 0 || px >= PLAN_WIDTH || py >= PLAN_HEIGHT) {
        outsidePlan++;
        continue;
      }
      const column = Math.floor(px / PLAN_CELL_SIZE);
      const row = Math.floor(py / PLAN_CELL_SIZE);
      const key = row * Math.ceil(PLAN_WIDTH / PLAN_CELL_SIZE) + column;
      const position = cells.get(key) ?? {
        x: (column + .5) * PLAN_CELL_SIZE,
        y: Math.min((row + .5) * PLAN_CELL_SIZE, PLAN_HEIGHT - 1),
        hits: 0,
      };
      position.hits += hits;
      cells.set(key, position);
    }
  }
  return {from, to, cellSize: PLAN_CELL_SIZE, samples, reportedCells, outsidePlan, sourceCount, furthestCm,
    cells: [...cells].sort(([a], [b]) => a - b).map(([, cell]) => cell)};
}
