import {coverageHistorySources, readCoverageHistory} from './storybook-coverage-history.mjs';

const DEFAULT_RANGE = 60;
const REFRESH_MS = 60_000;
const REQUEST_TIMEOUT_MS = 10_000;
const counts = new Intl.NumberFormat();
const measure = (count, noun) => `${counts.format(count)} ${noun}${count === 1 ? '' : 's'}`;

export const HEAT_MAP_TOGGLE = `
  <button type="button" class="map-toggle toggle-heat-map" aria-controls="radar-heat-map-legend" aria-pressed="false" hidden>
    Radar heat map <span class="menu-toggle" aria-hidden="true"></span>
  </button>`;

export const HEAT_MAP_LEGEND = `
  <section class="heat-map-legend" id="radar-heat-map-legend" aria-label="Radar heat map" hidden>
    <div class="heat-map-heading">
      <strong>Radar heat map</strong>
      <select class="heat-map-range" aria-label="Radar history range">
        <option value="15">15 min</option>
        <option value="60" selected>1 hour</option>
        <option value="1440">24 hours</option>
        <option value="10080">7 days</option>
      </select>
    </div>
    <div class="heat-map-key" aria-label="Relative recorded detections" hidden>
      <span>Fewer</span><i aria-hidden="true"></i><span>More</span>
    </div>
    <span class="heat-map-status" role="status" aria-live="polite"></span>
    <small class="heat-map-calibration" hidden></small>
  </section>`;

export const HEAT_MAP_STYLE = `
  .heat-map-legend{position:absolute;left:12px;bottom:12px;z-index:3;box-sizing:border-box;display:grid;
    width:min(242px,calc(100% - 24px));gap:6px;padding:8px 10px;border:1px solid #aaa7c57f;border-radius:11px;
    color:#f4edfc;background:#1e2437e8;box-shadow:0 4px 15px #1920334d;font-size:11px}
  .heat-map-legend[hidden],.heat-map-legend [hidden]{display:none}
  .heat-map-heading,.heat-map-key{display:flex;align-items:center;justify-content:space-between;gap:8px}
  .heat-map-heading strong{font-size:12px}
  .heat-map-range{min-width:80px;min-height:44px;border:1px solid #b8b5cd83;border-radius:6px;
    padding:0 5px;color:inherit;background:#34364f;font:inherit;color-scheme:dark}
  .heat-map-range:focus-visible{outline:2px solid #f8d58d;outline-offset:2px}
  .heat-map-key i{height:8px;flex:1;border-radius:10px;background:linear-gradient(90deg,#465fc4,#cc548d,#ffd572)}
  .heat-map-status,.heat-map-calibration{font-size:11px;color:#ded8ee}
  .heat-map-calibration{color:#c6c1db;line-height:1.35}
  .world[data-demo-beat] .heat-map-legend{visibility:hidden}
  @media(max-width:560px){
    .stage:has(.zone-legend:not([hidden])) .heat-map-legend{bottom:88px}
  }
`;

export function bindStorybookHeatMap(root, {getSession, setHistory, dismissMenu, isPaused, host = window}) {
  const document = root.ownerDocument;
  const button = root.querySelector('.toggle-heat-map');
  const legend = root.querySelector('.heat-map-legend');
  const range = legend.querySelector('.heat-map-range');
  const key = legend.querySelector('.heat-map-key');
  const message = legend.querySelector('.heat-map-status');
  const calibration = legend.querySelector('.heat-map-calibration');
  let items = [];
  let entities = [];
  let open = false;
  let connection = 'closed';
  let generation = 0;
  let refreshTimer;

  function paint(state, text = '', detail = '') {
    legend.dataset.state = state;
    if (message.textContent !== text) message.textContent = text;
    if (calibration.textContent !== detail) calibration.textContent = detail;
    calibration.hidden = detail === '';
    key.hidden = state !== 'ready';
  }

  function cancel() {
    host.clearTimeout(refreshTimer);
    generation++;
  }

  async function read(showLoading) {
    cancel();
    if (connection !== 'ready') return;
    const request = generation;
    if (showLoading) {
      setHistory(null);
      paint('loading', 'Loading radar history…');
    }
    let timeout;
    try {
      const session = getSession();
      const response = await Promise.race([
        session.callWS({type: 'roomcraft_presence/heatmap', entity_ids: entities, minutes: Number(range.value)}),
        new Promise((_, reject) => {
          timeout = host.setTimeout(() => reject(new Error('Radar history timed out')), REQUEST_TIMEOUT_MS);
        }),
      ]);
      if (generation !== request) return;
      const history = readCoverageHistory(items, response);
      if (!history?.sourceCount) throw new Error('Radar history unavailable');
      const drawn = setHistory(history) ?? 0;
      const outsideFloor = Math.max(0, history.cells.length - drawn);
      const detail = [];
      if (history.outsideConfigured) detail.push(`${measure(history.outsideConfigured, 'raw bin')} outside configured bounds`);
      if (history.outsidePlan) detail.push(`${measure(history.outsidePlan, 'raw bin')} off the plan`);
      if (outsideFloor) detail.push(`${measure(outsideFloor, 'mapped bin')} off the floor`);
      if (history.furthestCm > 0) detail.push(`Farthest sampled bin about ${(history.furthestCm / 100).toFixed(1)} m`);
      const explanation = detail.join(' · ');
      if (drawn > 0) {
        paint('ready', `${measure(history.samples, 'sample')} · ${measure(drawn, 'floor bin')}`, explanation);
      } else {
        const reason = history.reportedCells > 0 ? 'No recorded bins landed on the mapped floor.' :
          'No radar positions recorded in this range.';
        paint('empty', reason, explanation);
      }
    } catch {
      if (generation !== request) return;
      setHistory(null);
      paint('unavailable', 'Radar history is unavailable.');
    } finally {
      host.clearTimeout(timeout);
      if (generation === request) refreshTimer = host.setTimeout(() => void read(false), REFRESH_MS);
    }
  }

  function sync() {
    button.hidden = entities.length === 0;
    button.setAttribute('aria-pressed', String(open));
    legend.hidden = !open;
    const session = getSession();
    const next = !open ? 'closed' : !session || session.connected === false ? 'offline' :
      document.hidden || isPaused() ? 'paused' : 'ready';
    if (connection === next) return;
    connection = next;
    cancel();
    if (next === 'paused') return;
    if (next === 'ready') void read(true);
    else {
      setHistory(null);
      if (next === 'offline') paint('offline', 'Home Assistant is offline.');
      else paint('closed');
    }
  }

  button.addEventListener('click', () => {
    if (!entities.length) return;
    open = !open;
    dismissMenu();
    sync();
  });
  range.addEventListener('change', () => {
    if (![15, DEFAULT_RANGE, 1440, 10080].includes(Number(range.value))) range.value = String(DEFAULT_RANGE);
    void read(true);
  });

  return {
    configure(layoutItems = []) {
      items = layoutItems;
      entities = coverageHistorySources(items);
      if (!entities.length) open = false;
      sync();
    },
    sync,
  };
}
