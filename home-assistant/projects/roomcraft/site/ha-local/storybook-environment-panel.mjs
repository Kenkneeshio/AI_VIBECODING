const svgNS = 'http://www.w3.org/2000/svg';
const HOUR = 3_600_000;
const RANGES = [1, 24, 168];

export function environmentSeries(rows, start, end) {
  return (Array.isArray(rows) ? rows : []).flatMap(row => {
    const stamp = row.lu ?? row.last_updated ?? row.last_changed;
    const time = typeof stamp === 'number' ? stamp * 1000 : Date.parse(stamp);
    if (!Number.isFinite(time) || time > end) return [];
    const state = row.s ?? row.state;
    const value = typeof state === 'string' && state.trim() ? Number(state) : NaN;
    return [{time:Math.max(start,time), value:Number.isFinite(value) ? value : null}];
  }).sort((a,b) => a.time-b.time);
}

function chart(doc, rows, start, end, label, unit) {
  const points = environmentSeries(rows,start,end);
  const values = points.flatMap(({value}) => value === null ? [] : [value]);
  if (!values.length) return null;
  let low = values[0], high = low;
  for (const value of values) {low = Math.min(low,value); high = Math.max(high,value);}
  const svg = doc.createElementNS(svgNS,'svg');
  svg.setAttribute('viewBox','0 0 240 68');
  svg.setAttribute('role','img');
  svg.setAttribute('aria-label',label + ', recorded range ' + low + ' to ' + high + ' ' + unit);
  for (const y of [12,34,56]) {
    const rule = doc.createElementNS(svgNS,'path');
    rule.setAttribute('d','M 1 ' + y + ' H 239');
    rule.setAttribute('class','climate-gridline');
    svg.append(rule);
  }
  const line = doc.createElementNS(svgNS,'path');
  let lastX, lastY, path = '';
  for (const point of points) {
    const x = 2 + 236 * (point.time-start) / (end-start);
    if (lastY !== undefined && x !== lastX) path += ' H' + x.toFixed(2);
    if (point.value === null) {lastY = undefined; continue;}
    const y = high === low ? 34 : 56 - 44 * (point.value-low) / (high-low);
    path += lastY === undefined ? ' M' + x.toFixed(2) + ' ' + y.toFixed(2) : ' V' + y.toFixed(2);
    lastX = x;
    lastY = y;
  }
  if (lastY !== undefined) path += ' H238';
  line.setAttribute('d',path);
  line.setAttribute('class','climate-graph-line');
  svg.append(line);
  return {svg,low,high};
}

const roomColors = ['#b85c10','#0879a1','#c03951','#7a3e9b'];

function compareTemperature(doc, series, start, end) {
  const ranges = series.flatMap(item => item.points.flatMap(point => point.value === null ? [] : [point.value]));
  if (!ranges.length) return null;
  const low = 5 * Math.floor(Math.min(...ranges) / 5);
  const high = Math.max(low + 5, 5 * Math.ceil(Math.max(...ranges) / 5));
  const svg = doc.createElementNS(svgNS,'svg');
  svg.setAttribute('viewBox','0 0 760 225');
  svg.setAttribute('role','img');
  svg.setAttribute('aria-label','Room temperatures on a shared Fahrenheit scale');
  function draw(name,attrs,text) {
    const element = doc.createElementNS(svgNS,name);
    for (const [key,value] of Object.entries(attrs)) element.setAttribute(key,value);
    if (text) element.textContent = text;
    svg.append(element);
    return element;
  }
  for (let tick=0;tick<=4;tick++) {
    const y = 181-tick*41;
    draw('path',{d:`M49 ${y} H745`,class:'climate-gridline'});
    draw('text',{x:41,y:y+4,'text-anchor':'end'},Math.round(low+(high-low)*tick/4)+'°');
  }
  const time = new Intl.DateTimeFormat(undefined,end-start > 2*24*HOUR
    ? {month:'short',day:'numeric'} : {hour:'numeric',minute:'2-digit'});
  for (let tick=0;tick<=4;tick++) {
    draw('text',{x:49+174*tick,y:207,'text-anchor':tick===0?'start':tick===4?'end':'middle'},
      time.format(start+(end-start)*tick/4));
  }
  for (const {points,color} of series) {
    let path = '', active = false;
    for (const {value,time} of points) {
      const x = 49+696*(time-start)/(end-start);
      if (value === null) {
        if (active) path += 'H'+x.toFixed(1);
        active = false;
      } else {
        const y = 181-164*(value-low)/(high-low);
        path += active ? 'H'+x.toFixed(1)+'V'+y.toFixed(1) : 'M'+x.toFixed(1)+' '+y.toFixed(1);
        active = true;
      }
    }
    if (active) path += 'H745';
    draw('path',{d:path,fill:'none',stroke:color,'stroke-width':2.4,'stroke-linejoin':'round',
      'vector-effect':'non-scaling-stroke'});
  }
  return svg;
}

export function createEnvironmentPanel(card) {
  const doc = card.ownerDocument;
  const dialog = doc.createElement('dialog');
  dialog.className = 'environment-dialog';
  dialog.setAttribute('aria-label','Environment');
  dialog.innerHTML = `<style>
    .environment-dialog{color:#233c39;background:#f6f7ed;border:1px solid #7aaf9a;border-radius:20px;box-sizing:border-box;
      width:min(1130px,calc(100% - 22px));max-height:92dvh;padding:0;overflow:auto;box-shadow:0 24px 70px #12252366}
    .environment-dialog::backdrop{background:#112c2bbb}
    .environment-dialog header{position:sticky;top:0;z-index:1;display:flex;flex-wrap:wrap;align-items:center;gap:8px;
      padding:14px 18px;background:#e7f3e7;border-bottom:1px solid #c7ddce}
    .environment-dialog h2{font-size:1.28rem;margin:0;margin-inline-end:auto}
    .environment-dialog h3{margin:0 0 9px}
    .environment-dialog button{font:inherit;background:#fffdf4;color:inherit;min-height:44px;padding:6px 11px;border:1px solid #8bb5a6;border-radius:10px;cursor:pointer}
    .environment-dialog button[aria-pressed=true]{background:#20614f;color:white}
    .environment-dialog .room-grid{padding:14px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
    .environment-compare{margin:12px 14px 0;padding:14px;border:1px solid #b9d8c9;border-radius:14px;background:#fffef8}
    .environment-compare svg text{font:13px system-ui;fill:#43625a}
    .compare-rooms{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:8px 0}
    .compare-room{color:var(--room-color);border-top:3px solid var(--room-color);border-radius:8px;background:#f1f6ee;padding:7px 8px}
    .compare-room strong,.compare-room small{display:block;overflow-wrap:anywhere}
    .compare-room b{font-size:1.22em}
    @media(max-width:630px){.compare-rooms{grid-template-columns:repeat(2,minmax(0,1fr))}}
    .environment-dialog section{border:1px solid #bfd7ca;border-radius:14px;padding:12px;min-width:0;background:#fffef7}
    .environment-dialog section[data-selected=true]{border-color:#39896e;box-shadow:inset 0 0 0 1px #39896e}
    .environment-dialog .metric-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    .environment-dialog .climate-metric{min-width:0;padding:9px;background:#edf4e9;border-radius:10px}
    .environment-dialog .climate-metric span,.environment-dialog .climate-metric small{display:block;overflow-wrap:anywhere}
    .environment-dialog .climate-metric strong{font-size:1.12rem;font-variant-numeric:tabular-nums}
    .environment-dialog svg{display:block;width:100%;height:auto}
    .climate-gridline,.climate-graph-line{fill:none;vector-effect:non-scaling-stroke}
    .climate-gridline{stroke:#c8dbce}.climate-graph-line{stroke:#217665;stroke-width:1.7;stroke-linejoin:round}
    .environment-dialog [role=status]{margin:10px 18px 0;font-size:.88rem;color:#365a54}
    @media(max-width:630px){.environment-dialog .room-grid{grid-template-columns:1fr}}
  </style><header><h2>Environment</h2>
    <button type="button" data-hours="1">1h</button><button type="button" data-hours="24">24h</button>
    <button type="button" data-hours="168">7d</button><button type="button" data-close>Close</button>
  </header><p role="status"></p><div class="environment-compare">
    <h3>Temperature across rooms</h3><div class="compare-rooms"></div><div class="compare-graph"></div>
  </div><div class="room-grid"></div>`;
  card.shadowRoot.append(dialog);
  const grid = dialog.querySelector('.room-grid');
  const compareRooms = dialog.querySelector('.compare-rooms');
  const compareGraph = dialog.querySelector('.compare-graph');
  const status = dialog.querySelector('[role=status]');
  const buttons = [...dialog.querySelectorAll('[data-hours]')];
  let rooms = [], markers = [], metrics = [], request = 0, hours = 24;
  let comparison = [];
  function reading(entry) {
    const state = card.session?.connected === false ? undefined : card.session?.states?.[entry?.entity];
    return state?.state && Number.isFinite(Number(state.state)) && state.state.trim()
      ? state.state + (state.attributes?.unit_of_measurement ? ' ' + state.attributes.unit_of_measurement : '')
      : 'Unavailable';
  }
  function refresh() {
    if (!dialog.open) return;
    for (const {entry,value} of metrics) value.textContent = reading(entry);
    for (const row of comparison) {
      row.value.textContent = reading(row.temperature);
      row.moisture.textContent = reading(row.humidity);
    }
  }
  async function load() {
    const token = ++request;
    const end = Date.now(), start = end-hours*HOUR;
    for (const button of buttons) button.setAttribute('aria-pressed',String(Number(button.dataset.hours) === hours));
    for (const metric of metrics) metric.history.replaceChildren();
    compareGraph.replaceChildren();
    status.textContent = 'Loading Home Assistant history…';
    try {
      const result = await card.session.callWS({
        type:'history/history_during_period', entity_ids:[...new Set(metrics.map(({entry}) => entry.entity))],
        start_time:new Date(start).toISOString(),end_time:new Date(end).toISOString(),
        minimal_response:true,no_attributes:true,
      });
      if (token !== request || !dialog.open) return;
      const range = new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
      status.textContent = range.format(start) + ' – ' + range.format(end) + ' · Home Assistant history';
      const series = comparison.flatMap(row => {
        const id = row.temperature?.entity;
        const unit = card.session?.states?.[id]?.attributes?.unit_of_measurement;
        if (!['°F','°C'].includes(unit)) return [];
        const points = environmentSeries(result?.[id],start,end).map(point => unit === '°C' && point.value !== null
          ? {...point,value:point.value*9/5+32} : point);
        return [{color:row.color,points}];
      });
      const combined = compareTemperature(doc,series,start,end);
      if (combined) compareGraph.append(combined);
      else compareGraph.textContent = 'No temperature history in this range.';
      for (const {entry,history} of metrics) {
        const unit = card.session?.states?.[entry.entity]?.attributes?.unit_of_measurement ?? '';
        const trend = chart(doc,result?.[entry.entity],start,end,entry.label,unit);
        const note = doc.createElement('small');
        note.textContent = trend ? trend.low + (trend.low === trend.high ? '' : ' – ' + trend.high) + ' ' + unit : 'No recorded samples';
        if (trend) history.append(trend.svg);
        history.append(note);
      }
    } catch {
      if (token === request && dialog.open) status.textContent = 'Home Assistant history is unavailable.';
    }
  }
  function open(selected) {
    if (!rooms.length || dialog.open) return;
    card.setMainMenu(false,!card.mainMenu.hidden);
    metrics = [];
    comparison = [];
    grid.replaceChildren();
    compareRooms.replaceChildren();
    for (const room of rooms.slice(0,4)) {
      const tile = doc.createElement('div');
      tile.className = 'compare-room';
      const color = roomColors[comparison.length];
      tile.style.setProperty('--room-color',color);
      const title = doc.createElement('strong'), value = doc.createElement('b'), moisture = doc.createElement('small');
      title.textContent = room.label;
      const temperature = room.metrics.find(metric => /temperature$/i.test(metric.label));
      const humidity = room.metrics.find(metric => /humidity$/i.test(metric.label));
      tile.append(title,value,moisture);
      compareRooms.append(tile);
      comparison.push({temperature,humidity,value,moisture,color});
    }
    for (const room of rooms) {
      const section = doc.createElement('section');
      section.dataset.selected = String(room.id === selected);
      const heading = doc.createElement('h3');
      heading.textContent = room.label;
      const readings = doc.createElement('div');
      readings.className = 'metric-grid';
      for (const entry of room.metrics) {
        const tile = doc.createElement('div');
        tile.className = 'climate-metric';
        const label = doc.createElement('span'), value = doc.createElement('strong'), history = doc.createElement('div');
        label.textContent = entry.label;
        tile.append(label,value,history);
        readings.append(tile);
        metrics.push({entry,value,history});
      }
      section.append(heading,readings);
      grid.append(section);
    }
    dialog.showModal();
    if (selected) grid.querySelector('[data-selected=true]')?.scrollIntoView({block:'nearest'});
    refresh();
    void load();
  }
  function configure(config, items = []) {
    if (dialog.open) dialog.close();
    markers.forEach(({button}) => button.remove());
    markers = [];
    rooms = (Array.isArray(config) ? config : []).slice(0,12).flatMap(room => {
      if (typeof room?.id !== 'string' || typeof room.label !== 'string' || !Array.isArray(room.metrics)) return [];
      const metrics = room.metrics.filter(metric => /^sensor\.[a-z0-9_]+$/.test(metric?.entity ?? '') &&
        typeof metric.label === 'string').slice(0,12);
      return metrics.length ? [{...room,metrics}] : [];
    });
    for (const item of items) {
      if (item.type !== 'climateDisplay') continue;
      const room = rooms.find(zone => zone.marker === item.entityId);
      if (!room) continue;
      const button = doc.createElement('button');
      button.type = 'button';
      button.className = 'environment-marker';
      button.hidden = true;
      button.setAttribute('aria-label',room.label + ' environment');
      button.setAttribute('aria-haspopup','dialog');
      button.addEventListener('click',() => open(room.id));
      card.overlay.append(button);
      markers.push({button,id:item.id});
    }
  }
  function position(scene,width,height) {
    for (const {id,button} of markers) {
      const anchor = scene.anchor(id);
      button.hidden = !anchor || anchor.x < 0 || anchor.x > 1 || anchor.y < 0 || anchor.y > 1;
      if (!button.hidden) {
        button.style.left = anchor.x * width + 'px';
        button.style.top = anchor.y * height + 'px';
      }
    }
  }
  dialog.querySelector('[data-close]').addEventListener('click',() => dialog.close());
  dialog.addEventListener('close',() => {++request; card.schedule();});
  for (const button of buttons) button.addEventListener('click',() => {
    const next = Number(button.dataset.hours);
    if (!RANGES.includes(next) || next === hours) return;
    hours = next;
    void load();
  });
  return {configure,open,position,refresh,get available(){return rooms.length > 0;},get isOpen(){return dialog.open;}};
}
