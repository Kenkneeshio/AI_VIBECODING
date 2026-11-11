import {powerHistorySamples, powerPanelModel} from './storybook-power.mjs';
import {readRoomcraftEnergy} from './storybook-energy.mjs';
import {bindEnergyExplorer, ENERGY_EXPLORER_MARKUP, ENERGY_EXPLORER_STYLE} from './storybook-energy-panel.mjs';

const HOUR = 60 * 60 * 1000;
const REFRESH = 60 * 1000;
const format = new Intl.NumberFormat(undefined, {maximumFractionDigits: 2});

function readingMarkup(className, decoration = '') {
  return `<button type="button" class="${className}" disabled>${decoration}
    <span class="power-label"></span><span class="power-reading"><b class="power-value"></b>
    <span class="power-unit"></span></span><span class="power-link" aria-hidden="true">↗</span></button>`;
}

export const POWER_PANEL_MARKUP = `
  <dialog class="power-dialog" aria-labelledby="power-title">
    <header class="power-heading">
      <h2 id="power-title"><span class="power-emblem" aria-hidden="true"><i class="power-glyph"></i></span> Power</h2>
      <button type="button" class="power-close" aria-label="Close Power" autofocus>×</button>
    </header>
    <div class="power-grid">
      <div class="power-meter" data-flow="unavailable">
        <div class="power-meter-top">
          ${readingMarkup('power-main')}
          <div class="power-house-art" aria-hidden="true">
            <i class="power-orbit"></i><i class="power-orbit power-orbit-inner"></i>
            <i class="power-light"></i><i class="power-house"></i><i class="power-window"></i>
          </div>
        </div>
        <section class="power-history" aria-labelledby="power-history-title">
          <div class="power-chart-head"><h3 id="power-history-title">Last hour</h3><span class="power-peak" hidden></span></div>
          <div class="power-graph">
            <canvas role="img" aria-label="Recorded power over the last hour" hidden></canvas>
            <p class="power-history-status" role="status">Loading history…</p>
          </div>
          <div class="power-time" aria-hidden="true"><span>1h ago</span><span>Now</span></div>
        </section>
      </div>
      <div class="power-periods">
        <div data-period="today">${readingMarkup('power-period', '<span class="power-day-art" aria-hidden="true"></span>')}</div>
        <div data-period="month">${readingMarkup('power-period', '<span class="power-month-art" aria-hidden="true"></span>')}</div>
      </div>
    </div>
    ${ENERGY_EXPLORER_MARKUP}
    <section class="power-other" hidden aria-label="Other readings">
      <h3>Other readings</h3><div class="power-other-rows"></div>
    </section>
  </dialog>`;

export const POWER_PANEL_STYLE = `
  .power-dialog{box-sizing:border-box;width:min(680px,calc(100% - 24px));max-height:calc(100dvh - 24px);
    padding:clamp(12px,2.5vw,20px);border:1px solid #ad9678;border-radius:21px;overflow:auto;
    background:radial-gradient(ellipse at 86% 4%,#fff8e9 0,transparent 55%),#f3e9d8;
    color:#312b2d;box-shadow:0 18px 75px #121b2590;color-scheme:light}
  .power-dialog::backdrop{background:#14202ba6}
  .power-heading,.power-chart-head,.power-time{display:flex;align-items:center;justify-content:space-between;gap:10px}
  .power-heading{margin-bottom:12px}
  .power-heading h2,.power-chart-head h3,.power-other h3{margin:0}
  .power-heading h2{display:flex;align-items:center;gap:10px;font-size:22px;letter-spacing:-.035em}
  .power-emblem{display:grid;place-items:center;width:33px;height:33px;border-radius:11px;
    background:#e3c495;color:#523529;border:1px solid #b88f60;box-shadow:inset 0 1px #ffe5bf}
  .power-dialog button{box-sizing:border-box;font:inherit;min-height:44px;color:inherit;cursor:pointer}
  .power-dialog button:focus-visible{outline:2px solid currentColor;outline-offset:2px}
  .power-dialog button:disabled{cursor:default}
  .power-dialog .power-close{min-width:44px;border:1px solid #c0aa8f;border-radius:12px;background:#fff8eb;font-size:24px;line-height:1}
  .power-close:hover{background:#e7d6bc}
  .power-grid{display:grid;grid-template-columns:minmax(0,1.75fr) minmax(0,1fr);gap:10px}
  .power-grid:has(.power-periods[hidden]){grid-template-columns:minmax(0,1fr)}
  .power-meter{min-width:0;overflow:hidden;padding:clamp(12px,2.4vw,18px);border:1px solid #6c6a59;border-radius:17px;
    background:radial-gradient(ellipse at 92% 10%,#435452 0,transparent 58%),linear-gradient(156deg,#283b42,#202b34 70%);
    color:#fff2db;box-shadow:inset 0 1px #7b777057,0 3px 8px #382e3324}
  .power-meter-top{display:flex;align-items:center;justify-content:space-between;gap:6px}
  .power-main,.power-period,.power-other-row{position:relative;display:grid;align-content:center;justify-items:start;
    min-width:0;text-align:left;overflow-wrap:anywhere}
  .power-main{border:1px solid transparent;border-radius:10px;padding:6px 21px 6px 7px;margin-inline-start:-7px;background:transparent}
  .power-main:not(:disabled):hover{border-color:#cdb18d8c;background:#ffe7bb12}
  .power-label{font-weight:700}
  .power-main .power-label{color:#e8d8bd;font-size:13px}
  .power-reading{display:flex;align-items:baseline;flex-wrap:wrap;column-gap:6px;font-variant-numeric:tabular-nums}
  .power-value{font-weight:800;letter-spacing:-.048em;line-height:1.04;font-size:clamp(24px,4vw,38px)}
  .power-main .power-value{font-size:clamp(34px,6vw,54px);color:#ffdda6}
  .power-main[data-available=false] .power-value{font-size:clamp(20px,4vw,32px);color:#e0d6c7}
  .power-main .power-unit{color:#edd5ae}
  .power-unit{font-size:13px;font-weight:650}
  .power-link{position:absolute;right:9px;top:8px;font-weight:700;font-size:15px;opacity:.75}
  .power-dialog button:disabled .power-link,.power-dialog [hidden]{display:none}
  .power-house-art{position:relative;isolation:isolate;flex:0 0 auto;width:clamp(65px,13vw,105px);aspect-ratio:1;pointer-events:none}
  .power-orbit{position:absolute;inset:9%;border-radius:50%;border:1px solid #e9be7a83;
    box-shadow:inset 0 0 12px #ffd39328,0 0 10px #ffd3931a}
  .power-orbit::after{content:"";position:absolute;top:10%;right:10%;width:6px;height:6px;border-radius:50%;background:#d3b180}
  .power-orbit-inner{inset:19%;border-style:dashed;border-color:#dfb47865;transform:rotate(-48deg);box-shadow:none}
  .power-orbit-inner::after{width:4px;height:4px;background:#e4bc82}
  .power-light{position:absolute;inset:12%;border-radius:50%;background:radial-gradient(circle,#fcd08978,transparent 64%);opacity:.17}
  .power-house{position:absolute;inset:30% 31% 27%;clip-path:polygon(50% 1%,99% 42%,88% 42%,88% 98%,12% 98%,12% 42%,1% 42%);
    background:linear-gradient(150deg,#f5cb89,#9c7451 65%,#634f46)}
  .power-window{position:absolute;top:52%;left:44%;width:12%;height:13%;border-radius:1px;
    background:linear-gradient(90deg,transparent 43%,#816a52 43% 57%,transparent 57%),#ac9976}
  .power-meter[data-flow=draw] .power-window{background-color:#fff0b5;box-shadow:0 0 12px #ffe1a68a}
  .power-meter[data-flow=reverse] .power-window{background-color:#a0eee0;box-shadow:0 0 12px #a0eee08a}
  .power-meter[data-flow=reverse] .power-main .power-value{color:#b3eedc}
  .power-meter:is([data-flow=draw],[data-flow=reverse]) .power-light{opacity:.75;animation:power-glow 5s ease-in-out infinite}
  .power-meter[data-flow=reverse] .power-light{background:radial-gradient(circle,#90e4c77a,transparent 64%)}
  .power-meter[data-flow=unavailable] .power-house-art{opacity:.45}
  @keyframes power-glow{50%{opacity:.38}}
  .power-dialog[data-reduced-motion] .power-light{animation:none}
  @media(prefers-reduced-motion:reduce){.power-meter[data-flow] .power-light{animation:none}}
  .power-history{margin-top:9px;padding-top:9px;border-top:1px solid #e0c8a13c}
  .power-chart-head h3,.power-other h3{font-size:13px}
  .power-peak,.power-time{font-size:11px;color:#edd5b3}
  .power-graph{display:grid;grid-template-columns:minmax(0,1fr);place-items:center;min-height:82px}
  .power-graph canvas{display:block;width:100%;height:88px}
  .power-history-status{margin:6px 0;color:#ded6c9;font-size:12px;text-align:center}
  .power-time{margin-top:2px}
  .power-periods{display:grid;grid-auto-rows:1fr;gap:9px}
  .power-periods:has(> [hidden]){grid-auto-rows:auto}
  .power-period{width:100%;height:100%;min-height:104px;overflow:hidden;isolation:isolate;padding:12px 25px 11px 12px;
    border:1px solid #c4a77f;border-radius:15px;background:linear-gradient(148deg,#fff7e5,#ead1a8)}
  [data-period=month] .power-period{background:linear-gradient(148deg,#f9efe4,#dbc7bd);border-color:#c0a398}
  .power-period:not(:disabled):hover{box-shadow:inset 0 0 0 2px #98714b7a}
  .power-period .power-label,.power-period .power-unit{color:#544137}
  .power-period[data-available=false] .power-value{font-size:clamp(16px,3vw,22px);letter-spacing:-.025em}
  .power-day-art,.power-month-art{position:absolute;z-index:-1;right:0;bottom:0;width:68px;height:60px;opacity:.48;
    background:radial-gradient(ellipse at 65% 65%,#c5824e8f 0 15%,transparent 16%),
      repeating-radial-gradient(ellipse at 65% 100%,transparent 0 10px,#b77d4a5b 11px 12px,transparent 13px 15px)}
  .power-month-art{width:58px;height:41px;right:9px;bottom:8px;border:1px solid #896960;border-radius:6px;
    background:repeating-linear-gradient(0deg,transparent 0 8px,#a48a7c6e 9px 10px),
      repeating-linear-gradient(90deg,transparent 0 8px,#a48a7c6e 9px 10px)}
  .power-other{margin-top:12px}
  .power-other-rows{display:grid;gap:5px;margin-top:5px}
  .power-other-row{display:flex;justify-content:space-between;align-items:center;width:100%;gap:7px;
    border:1px solid #d5c2a4;border-radius:9px;background:#fff8eb;padding:6px 9px}
  .power-other-row:not(:disabled):hover{background:#f2e1c6}
  .power-other-row span:last-child{text-align:right;font-variant-numeric:tabular-nums}
  @media(max-width:560px){
    .power-grid{grid-template-columns:1fr}
    .power-periods{grid-template-columns:repeat(2,minmax(0,1fr))}
    .power-periods:has(> [hidden]){grid-template-columns:1fr}
    .power-period{min-height:82px}
  }
  ${ENERGY_EXPLORER_STYLE}
`;

function makeReadingButton(button, onDetails) {
  const name = button.querySelector('.power-label');
  const value = button.querySelector('.power-value');
  const unit = button.querySelector('.power-unit');
  let entity;
  button.addEventListener('click', () => onDetails(entity));
  return (row, states, fallback = '') => {
    entity = row?.entity;
    const number = row?.available && Number.isFinite(row.value);
    name.textContent = row?.name || fallback;
    value.textContent = number ? format.format(row.value) : row?.reading || 'Unavailable';
    unit.textContent = number ? row.unit : '';
    button.disabled = !states?.[entity];
    button.dataset.available = String(Boolean(row?.available));
  };
}

function wattsLabel(watts) {
  return Math.abs(watts) >= 1000 ? `${format.format(watts / 1000)} kW` : `${format.format(watts)} W`;
}

function drawPowerHistory(canvas, history) {
  const {width, height} = canvas.getBoundingClientRect();
  const ctx = canvas.getContext('2d');
  if (!ctx || !width || !height || !history) return;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.scale(ratio, ratio);
  const {start, end, samples, values} = history;
  const low = Math.min(0, ...values);
  const high = Math.max(0, ...values);
  const x = time => 2 + (time - start) / (end - start) * (width - 4);
  const y = watts => high === low ? height / 2 : 7 + (high - watts) / (high - low) * (height - 14);
  ctx.strokeStyle = '#e2c5a02f';
  for (const fraction of [.25, .5, .75]) {
    ctx.beginPath();
    ctx.moveTo(0, height * fraction);
    ctx.lineTo(width, height * fraction);
    ctx.stroke();
  }
  ctx.strokeStyle = '#e2c5a055';
  ctx.beginPath();
  ctx.moveTo(0, y(0));
  ctx.lineTo(width, y(0));
  ctx.stroke();

  function segment(points) {
    if (!points.length) return;
    const first = points[0];
    const last = points.at(-1);
    ctx.beginPath();
    ctx.moveTo(x(first.time), y(first.watts));
    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      ctx.lineTo(x(point.time), y(points[i - 1].watts));
      ctx.lineTo(x(point.time), y(point.watts));
    }
    ctx.strokeStyle = '#ffdda0';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.lineTo(x(last.time), y(0));
    ctx.lineTo(x(first.time), y(0));
    ctx.closePath();
    const fill = ctx.createLinearGradient(0, 0, 0, height);
    fill.addColorStop(0, '#ffd68c4d');
    fill.addColorStop(1, '#ffd68c12');
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x(last.time), y(last.watts), 2.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffe0a7';
    ctx.fill();
  }
  let points = [];
  for (const point of samples) {
    if (point.watts === null) {
      segment(points);
      points = [];
    } else points.push(point);
  }
  segment(points);
}

export function bindStorybookPower(card) {
  const dialog = card.shadowRoot.querySelector('.power-dialog');
  const meter = dialog.querySelector('.power-meter');
  const periods = dialog.querySelector('.power-periods');
  const today = dialog.querySelector('[data-period=today]');
  const month = dialog.querySelector('[data-period=month]');
  const canvas = dialog.querySelector('canvas');
  const historyStatus = dialog.querySelector('.power-history-status');
  const peak = dialog.querySelector('.power-peak');
  const other = dialog.querySelector('.power-other');
  const otherRows = dialog.querySelector('.power-other-rows');
  let entries = [];
  let primary;
  let history;
  let request;
  let refreshTimer;
  let otherSignature;
  let energyConfig;

  const offline = () => card.session?.connected === false;
  function details(entityId) {
    if (offline() || !card.session?.states?.[entityId]) return;
    dialog.close();
    card.dispatchEvent(new CustomEvent('hass-more-info',
      {bubbles: true, composed: true, detail: {entityId}}));
  }
  const energy = bindEnergyExplorer(card, dialog, details);
  const paintMain = makeReadingButton(dialog.querySelector('.power-main'), details);
  const paintToday = makeReadingButton(today.querySelector('button'), details);
  const paintMonth = makeReadingButton(month.querySelector('button'), details);
  const redraw = () => drawPowerHistory(canvas, history);
  const resize = new ResizeObserver(redraw);
  const closeButton = dialog.querySelector('.power-close');
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (dialog.open) return;
    clearInterval(refreshTimer);
    resize.disconnect();
    request = undefined;
    energy.close();
  });

  function showHistory(data, message = '') {
    history = data;
    canvas.hidden = peak.hidden = !data;
    historyStatus.hidden = Boolean(data);
    historyStatus.textContent = message;
    if (!data) return;
    const high = wattsLabel(Math.max(...data.values));
    const low = wattsLabel(Math.min(...data.values));
    peak.textContent = `High ${high}`;
    canvas.setAttribute('aria-label', `Recorded power over the last hour, from ${low} to ${high}.`);
    redraw();
  }

  async function fetchHistory() {
    if (!dialog.open) return;
    if (offline() || !primary?.wattsPerUnit || !card.session?.callWS) {
      request = undefined;
      showHistory(undefined, offline() ? 'Home Assistant is offline.' : 'No meter history available.');
      return;
    }
    const {entity, wattsPerUnit} = primary;
    const key = `${entity}|${wattsPerUnit}`;
    const end = Date.now();
    if (request?.key === key && end - request.end < REFRESH) return;
    const start = end - HOUR;
    const pending = {key, end};
    request = pending;
    if (history?.key !== key) showHistory(undefined, 'Loading history…');
    try {
      const result = await card.session.callWS({
        type: 'history/history_during_period', entity_ids: [entity], minimal_response: false,
        start_time: new Date(start).toISOString(), end_time: new Date(end).toISOString(),
      });
      if (request !== pending || !dialog.open) return;
      const samples = powerHistorySamples(result?.[entity], {start, end, wattsPerUnit});
      const values = samples.filter(point => point.watts !== null).map(point => point.watts);
      if (values.length) showHistory({key, start, end, samples, values});
      else showHistory(undefined, 'No power readings were recorded in the last hour.');
    } catch {
      if (request === pending && dialog.open) showHistory(undefined, 'Power history is unavailable.');
    }
  }

  function refresh(previous) {
    if (!dialog.open) return;
    energy.refresh(previous);
    const session = card.session;
    if (previous && previous.connected === session?.connected &&
        entries.every(({entity}) => previous.states?.[entity] === session?.states?.[entity])) return;
    const states = session?.states || {};
    const readings = offline() ? Object.fromEntries(entries.map(({entity}) =>
      [entity, {...states[entity], state: 'unavailable'}])) : states;
    const model = powerPanelModel(entries, readings);
    primary = model.primary;
    const actions = offline() ? undefined : states;
    paintMain(primary, actions, 'Current power');
    meter.dataset.flow = primary?.watts == null ? 'unavailable' :
      primary.watts === 0 ? 'idle' : primary.watts < 0 ? 'reverse' : 'draw';
    today.hidden = !model.today;
    month.hidden = !model.month;
    periods.hidden = today.hidden && month.hidden;
    paintToday(model.today, actions);
    const billed = model.month?.entity === energyConfig?.home.billing;
    paintMonth(billed && model.month ? {...model.month, name: 'Billing cycle'} : model.month, actions);

    const rows = [...model.loads, ...model.other, ...model.unavailable];
    const signature = JSON.stringify(rows.map(row => [row.entity, row.name, row.reading, Boolean(actions?.[row.entity])]));
    if (signature !== otherSignature) {
      otherSignature = signature;
      other.hidden = !rows.length;
      otherRows.replaceChildren(...rows.map(row => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'power-other-row';
        button.disabled = !actions?.[row.entity];
        const name = document.createElement('strong');
        name.textContent = row.name;
        const value = document.createElement('span');
        value.textContent = row.reading;
        button.append(name, value);
        button.addEventListener('click', () => details(row.entity));
        return button;
      }));
    }
    fetchHistory();
  }

  return {
    open(readings) {
      if (dialog.open) return;
      clearInterval(refreshTimer);
      request = undefined;
      entries = readings;
      dialog.showModal();
      resize.observe(canvas);
      energy.open();
      refresh();
      refreshTimer = setInterval(fetchHistory, REFRESH);
    },
    refresh,
    close() { if (dialog.open) dialog.close(); },
    setEnergyConfig(raw) {
      energyConfig = readRoomcraftEnergy(raw);
      energy.setConfig(energyConfig);
    },
    reducedMotion(reduced) {
      dialog.toggleAttribute('data-reduced-motion', reduced);
      energy.setReducedMotion(reduced);
    },
  };
}
