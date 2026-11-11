import {ENERGY_PERIODS, roomcraftEnergyFrame} from './storybook-energy.mjs';
import {energyPeriodRange, energyStatisticTotal, energyStatisticsRequests} from './storybook-energy-periods.mjs';
import {bindEnergyTree, ENERGY_TREE_MARKUP, ENERGY_TREE_STYLE} from './storybook-energy-tree.mjs';

const MONTH_REFRESH = 5 * 60 * 1000;
const periods = Object.entries(ENERGY_PERIODS);
const dateLabel = new Intl.DateTimeFormat(undefined, {month: 'short', day: 'numeric', timeZone: 'UTC'});
const kinds = {circuit: 'Circuit', outlet: 'Smart plug', other: 'Meter'};

export const ENERGY_EXPLORER_MARKUP = `
  <section class="energy-explorer" aria-labelledby="energy-explorer-title" hidden>
    <div class="energy-heading">
      <h3 id="energy-explorer-title">Energy map</h3>
      <span class="energy-period-status" role="status"></span>
    </div>
    <nav class="energy-periods" aria-label="Energy period">
      ${periods.map(([id, label]) => `<button type="button" data-energy-period="${id}" aria-pressed="false">${label}</button>`).join('')}
    </nav>
    <div class="energy-explorer-grid">
      ${ENERGY_TREE_MARKUP}
      <section class="energy-inspector" aria-labelledby="energy-selection">
        <h4 id="energy-selection"></h4>
        <p class="energy-source-type" hidden></p>
        <div class="energy-metrics">
          ${periods.map(([id, label]) => `<button type="button" data-energy-metric="${id}">
            <span>${label}</span><strong></strong><i aria-hidden="true">↗</i></button>`).join('')}
        </div>
        <label class="energy-search">Find a circuit or plug
          <input type="search" placeholder="Search meters" autocomplete="off">
        </label>
        <div class="energy-directory" aria-label="Meter readings"></div>
        <p class="energy-no-matches" hidden>No matching meters.</p>
      </section>
    </div>
  </section>`;

export const ENERGY_EXPLORER_STYLE = `
  ${ENERGY_TREE_STYLE}
  .power-dialog:has(.energy-explorer:not([hidden])){width:min(980px,calc(100% - 24px))}
  .energy-explorer{margin-top:15px;padding-top:13px;border-top:1px solid #ccb597}
  .energy-heading{display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:4px 12px;margin-bottom:8px}
  .energy-heading h3,.energy-inspector h4{margin:0;font-size:17px;letter-spacing:-.02em}
  .energy-period-status,.energy-source-type{color:#655043;font-size:12px}
  .energy-periods{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;margin-bottom:9px}
  .energy-periods button{padding:4px 5px;border:1px solid #d1bc9e;border-radius:10px;background:#fff8eb;
    font-weight:700;line-height:1.15}
  .energy-periods button[aria-pressed=true]{background:#40504e;border-color:#40504e;color:#fff4db}
  .energy-explorer-grid{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(205px,1fr);gap:10px;align-items:start}
  .energy-inspector{min-width:0;padding:12px;border:1px solid #d3bda3;border-radius:15px;background:#fdf4e5}
  .energy-inspector h4{overflow-wrap:anywhere}
  .energy-source-type{margin:2px 0 0}
  .energy-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px;margin:8px 0 10px}
  .energy-metrics button{position:relative;min-width:0;padding:7px 19px 6px 8px;border:1px solid #dac6aa;
    border-radius:9px;background:#fffaf1;text-align:left}
  .energy-metrics button span,.energy-metrics button strong{display:block;overflow-wrap:anywhere}
  .energy-metrics button span{font-size:11px;color:#645144}
  .energy-metrics button strong{font-size:15px;font-variant-numeric:tabular-nums}
  .energy-metrics button i{position:absolute;right:6px;top:5px;color:#725340;font-style:normal}
  .energy-metrics button:disabled i{display:none}
  .energy-metrics button:not(:disabled):hover,.energy-directory button:hover{background:#f0dfc3}
  .energy-search{display:block;color:#57493c;font-size:12px;font-weight:700}
  .energy-search input{display:block;box-sizing:border-box;width:100%;min-height:40px;margin:4px 0 6px;padding:6px 9px;
    border:1px solid #cdb89d;border-radius:9px;background:#fffdf7;color:#342d2c;font:inherit;font-weight:500}
  .energy-directory{display:grid;gap:4px;max-height:181px;overflow:auto;overscroll-behavior:contain;padding:1px 3px 1px 1px}
  .energy-directory button{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;text-align:left;gap:8px;
    min-height:42px;border:1px solid #ddcbb0;border-radius:8px;background:#fffbf3;padding:5px 7px}
  .energy-directory button[aria-pressed=true]{border-color:#89664a;background:#f0dbbc}
  .energy-directory button span:first-child{overflow-wrap:anywhere;font-weight:650}
  .energy-directory button span:last-child{font-size:11px;color:#684d3b;text-align:right;font-variant-numeric:tabular-nums}
  .energy-no-matches{margin:5px 0;color:#665344;font-size:12px}
  @media(max-width:660px){.energy-explorer-grid{grid-template-columns:minmax(0,1fr)}}
`;

export function bindEnergyExplorer(card, root, onDetails) {
  const section = root.querySelector('.energy-explorer');
  const status = section.querySelector('.energy-period-status');
  const title = section.querySelector('#energy-selection');
  const sourceType = section.querySelector('.energy-source-type');
  const search = section.querySelector('input');
  const directory = section.querySelector('.energy-directory');
  const noMatches = section.querySelector('.energy-no-matches');
  const tabs = [...section.querySelectorAll('[data-energy-period]')];
  const buttons = [...section.querySelectorAll('[data-energy-metric]')].map(button => ({
    button, period: button.dataset.energyMetric, value: button.querySelector('strong'),
  }));
  const tree = bindEnergyTree(section, id => {
    select(id);
    if (matchMedia('(max-width:660px)').matches) title.scrollIntoView({block: 'nearest'});
  });
  const rows = new Map();
  let config;
  let active = false;
  let selected = null;
  let period = 'live';
  let month;
  let frame;
  let observed;
  let treeOrder = [];

  function select(id) {
    selected = id;
    render();
  }

  function filterDirectory() {
    const phrase = search.value.trim().toLocaleLowerCase();
    let matches = 0;
    for (const row of rows.values()) {
      row.button.hidden = !row.name.toLocaleLowerCase().includes(phrase);
      if (!row.button.hidden) matches++;
    }
    noMatches.hidden = matches !== 0;
  }

  function setConfig(next) {
    config = next;
    month = undefined;
    selected = null;
    observed = config ? [...new Set([config.home, ...config.groups]
      .flatMap(item => [item.power, item.today, item.billing, item.statistic]).filter(Boolean))] : [];
    const kindsForTree = ['circuit', 'outlet', 'other'].map(kind => config?.groups.filter(item => item.kind === kind) ?? []);
    treeOrder = Array.from({length: Math.max(...kindsForTree.map(group => group.length))}, (_, index) =>
      kindsForTree.map(group => group[index]?.id).filter(Boolean)).flat();
    rows.clear();
    directory.replaceChildren();
    if (config) for (const {id, label} of [config.home, ...config.groups]) {
      const button = document.createElement('button');
      button.type = 'button';
      const name = document.createElement('span');
      const reading = document.createElement('span');
      name.textContent = label;
      button.append(name, reading);
      button.addEventListener('click', () => select(id));
      rows.set(id, {name: label, button, reading});
      directory.append(button);
    }
    section.hidden = !config;
    filterDirectory();
  }

  function selectedReading() {
    return frame?.groups.find(group => group.id === selected) ?? frame?.center;
  }

  function periodMessage(states) {
    if (!states) return 'Home Assistant is offline.';
    if (period === 'billing') return frame.billingStart
      ? `Cycle began ${dateLabel.format(new Date(`${frame.billingStart}T12:00:00Z`))}`
      : 'Billing cycle start unavailable';
    if (period === 'month') {
      const through = selectedReading()?.metrics.month.through;
      if (through) return `Recorded through ${new Intl.DateTimeFormat(undefined,
        {month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
          timeZone: card.session?.config?.time_zone}).format(new Date(through))}`;
      return month?.loading ? 'Loading recorded totals…' : 'Calendar-month history unavailable';
    }
    const count = frame.groups.filter(item => item.metrics[period].available).length;
    return `${count} of ${frame.groups.length} meters reporting`;
  }

  function render() {
    if (!active || !config) return;
    const states = card.session?.connected === false ? undefined : card.session?.states;
    frame = roomcraftEnergyFrame(config, states, states ? month?.totals : undefined, card.session?.config?.time_zone);
    const view = item => ({id: item.id, label: item.label, kind: item.kind, shared: item.shared,
      ...item.metrics[period]});
    const groups = new Map(frame.groups.map(group => [group.id, group]));
    tree.update({center: view(frame.center), groups: treeOrder.map(id => view(groups.get(id))), selected, period});
    for (const item of [frame.center, ...frame.groups]) {
      const row = rows.get(item.id);
      row.button.setAttribute('aria-pressed', String(item.id === selected));
      row.reading.textContent = item.metrics[period].reading;
    }
    const item = selectedReading();
    title.textContent = item.label;
    sourceType.textContent = item.shared ? 'Shared circuit' : kinds[item.kind] || '';
    sourceType.hidden = !sourceType.textContent;
    for (const {button, period: metric, value} of buttons) {
      const reading = item.metrics[metric];
      value.textContent = metric === 'month' && month?.loading && !reading.available ? 'Loading…' : reading.reading;
      button.disabled = !states?.[reading.entity];
      button.title = button.disabled ? '' : 'Open source sensor in Home Assistant';
    }
    for (const tab of tabs) tab.setAttribute('aria-pressed', String(tab.dataset.energyPeriod === period));
    const message = periodMessage(states);
    if (status.textContent !== message) status.textContent = message;
  }

  async function refreshMonth() {
    if (!active || !config || card.session?.connected === false || !card.session?.callWS) return;
    const timeZone = card.session.config?.time_zone;
    const range = energyPeriodRange('month', {timeZone});
    const ids = [...new Set([config.home, ...config.groups].map(item => item.statistic).filter(Boolean))];
    if (!range || !ids.length) return;
    const now = Date.now();
    if (month?.start === range.start && now - month.requestedAt < MONTH_REFRESH) return;
    const request = {start: range.start, requestedAt: now, loading: true,
      totals: month?.start === range.start ? month.totals : undefined};
    month = request;
    render();
    try {
      const [baseline, latest] = await Promise.all(energyStatisticsRequests(range, ids)
        .map(command => card.session.callWS(command)));
      if (!active || month !== request) return;
      request.totals = Object.fromEntries(ids.map(id => [id, energyStatisticTotal(
        [...(baseline?.[id] ?? []), ...(latest?.[id] ?? [])], range)]));
    } catch {
      // Keep the last successfully recorded totals, with their actual timestamps.
    } finally {
      if (active && month === request) {
        request.loading = false;
        render();
      }
    }
  }

  search.addEventListener('input', filterDirectory);
  for (const tab of tabs) tab.addEventListener('click', () => {
    period = tab.dataset.energyPeriod;
    if (period === 'month') refreshMonth();
    render();
  });
  for (const {button, period: metric} of buttons) button.addEventListener('click', () => {
    const entity = selectedReading()?.metrics[metric].entity;
    if (entity) onDetails(entity);
  });

  return {
    setConfig,
    open() {
      active = true;
      period = 'live';
      selected = null;
      search.value = '';
      filterDirectory();
      refreshMonth();
      render();
    },
    close() {
      active = false;
      frame = undefined;
      if (month?.loading) month = undefined;
      tree.clear();
    },
    refresh(previous) {
      if (!active || !config) return;
      if (period === 'month') refreshMonth();
      const session = card.session;
      if (previous && previous.connected === session?.connected &&
          observed.every(id => previous.states?.[id] === session?.states?.[id])) return;
      render();
    },
    setReducedMotion(reduced) { tree.setReducedMotion(reduced); },
  };
}
