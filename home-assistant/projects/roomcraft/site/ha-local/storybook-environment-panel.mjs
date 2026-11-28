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

const roomColors = ['#ac5410','#0879a1','#bb3149','#793f98','#467746','#705845'];
const measures = [
  {id:'temperature', label:'Temperature', unit:'°F', match:/temperature$/i},
  {id:'humidity', label:'Humidity', unit:'%', match:/humidity$/i},
  {id:'co2', label:'CO₂', unit:'ppm', match:/^CO₂$/i},
  {id:'pm25', label:'PM2.5', unit:'µg/m³', match:/^PM2\.5$/i},
  {id:'formaldehyde', label:'Formaldehyde', unit:'mg/m³', match:/^formaldehyde$/i},
  {id:'voc', label:'VOCs', unit:'mg/m³', match:/^VOCs$/i},
];
const axisNumber = new Intl.NumberFormat(undefined,{maximumSignificantDigits:4});

export function comparisonScale(unit, measure) {
  const native = typeof unit === 'string' ? unit.replace(/μ/g,'µ') : '';
  if (native === measure.unit) return value => value;
  if (measure.unit === '°F' && native === '°C') return value => value*9/5+32;
  if (measure.unit === 'mg/m³' && native === 'µg/m³') return value => value/1000;
  if (measure.unit === 'µg/m³' && native === 'mg/m³') return value => value*1000;
  return null;
}

function compareMetric(doc, series, start, end, measure) {
  let min = Infinity, max = -Infinity;
  for (const {points} of series) for (const {value} of points) {
    if (value === null) continue;
    min = Math.min(min,value);
    max = Math.max(max,value);
  }
  if (!Number.isFinite(min)) return null;
  const span = max-min || Math.max(Math.abs(max)*.1,.001);
  const step = 10 ** Math.floor(Math.log10(span/3));
  const low = Math.floor(min/step)*step;
  const high = Math.max(low+step,Math.ceil(max/step)*step);
  const svg = doc.createElementNS(svgNS,'svg');
  svg.setAttribute('viewBox','0 0 760 225');
  svg.setAttribute('role','img');
  svg.setAttribute('aria-label',measure.label+' across rooms, shared scale in '+measure.unit);
  function draw(name,attrs,text) {
    const element = doc.createElementNS(svgNS,name);
    for (const [key,value] of Object.entries(attrs)) element.setAttribute(key,value);
    if (text) element.textContent = text;
    svg.append(element);
    return element;
  }
  for (let tick=0;tick<=4;tick++) {
    const y = 181-tick*41;
    draw('path',{d:`M63 ${y} H745`,class:'climate-gridline'});
    draw('text',{x:55,y:y+4,'text-anchor':'end'},axisNumber.format(low+(high-low)*tick/4));
  }
  const time = new Intl.DateTimeFormat(undefined,end-start > 2*24*HOUR
    ? {month:'short',day:'numeric'} : {hour:'numeric',minute:'2-digit'});
  for (let tick=0;tick<=4;tick++) {
    draw('text',{x:63+170.5*tick,y:207,'text-anchor':tick===0?'start':tick===4?'end':'middle'},
      time.format(start+(end-start)*tick/4));
  }
  for (const {points,color,dashed} of series) {
    let path = '', active = false;
    for (const {value,time} of points) {
      const x = 63+682*(time-start)/(end-start);
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
      'vector-effect':'non-scaling-stroke',...(dashed ? {'stroke-dasharray':'6 4'} : {})});
  }
  return svg;
}

export function createEnvironmentPanel(card) {
  const doc = card.ownerDocument;
  const dialog = doc.createElement('dialog');
  dialog.className = 'environment-dialog';
  dialog.setAttribute('aria-label','Environment');
  dialog.innerHTML = `<style>
    .environment-dialog{color:#233c39;background:#f6f7ed;border:1px solid #7aaf9a;border-radius:18px;box-sizing:border-box;
      width:min(1130px,calc(100% - 16px));max-height:calc(100dvh - 12px);padding:0;overflow:hidden;box-shadow:0 24px 70px #12252366}
    .environment-dialog::backdrop{background:#112c2bbb}
    .environment-dialog header,.environment-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px 12px}
    .environment-dialog header{background:#e7f3e7;border-bottom:1px solid #c7ddce}
    .environment-dialog h2{font-size:1.15rem;margin:0;margin-inline-end:auto}
    .environment-dialog h3{margin:0;font-size:1rem}
    .environment-dialog button,.environment-dialog select{font:inherit;background:#fffdf4;color:inherit;min-height:40px;
      padding:4px 8px;border:1px solid #8bb5a6;border-radius:8px;cursor:pointer}
    .environment-dialog button[aria-pressed=true]{background:#20614f;color:white}
    .environment-toolbar label[hidden]{display:none}
    .environment-toolbar label{display:flex;gap:5px;align-items:center}
    .environment-pane{padding:0 12px 10px}
    .environment-heading{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
    .environment-pane svg{display:block;width:100%;height:min(30dvh,300px)}
    .environment-pane svg text{font:14px system-ui;fill:#43625a}
    .compare-rooms{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:5px;margin:6px 0}
    .compare-room{color:var(--room-color);border-inline-start:3px solid var(--room-color);border-radius:6px;background:#edf4e9;padding:4px 7px}
    .compare-room strong,.compare-room small{display:block;overflow-wrap:anywhere}
    .compare-room small{font-size:.78rem}
    .compare-room b{font-size:1.10rem;font-variant-numeric:tabular-nums}
    .environment-detail-card{margin:7px 0;padding:8px;background:#edf4e9;border-radius:8px}
    .environment-detail-card strong{font-size:1.2rem}
    .climate-gridline,.climate-graph-line{fill:none;vector-effect:non-scaling-stroke}
    .climate-gridline{stroke:#c8dbce}.climate-graph-line{stroke:#217665;stroke-width:1.7}
    .environment-dialog [role=status]{margin:0 12px 8px;font-size:.78rem;color:#365a54}
    @media(max-width:630px){.compare-rooms{grid-template-columns:repeat(2,minmax(0,1fr))}.environment-pane svg{height:min(25dvh,200px)}}
    @media(max-height:550px){.environment-pane svg{height:min(24dvh,145px)}.compare-room strong,.compare-room small{font-size:.73rem}
      .environment-dialog header,.environment-toolbar{padding-block:4px}.environment-dialog button,.environment-dialog select{min-height:34px}}
    @media(max-height:450px) and (min-width:640px){.compare-rooms{grid-template-columns:repeat(5,minmax(0,1fr))}}
  </style><header><h2>Environment</h2>
    <button type="button" data-hours="1">1h</button><button type="button" data-hours="24">24h</button>
    <button type="button" data-hours="168">7d</button><button type="button" data-close>Close</button>
  </header>
  <div class="environment-toolbar">
    <button type="button" data-page="compare">Across rooms</button><button type="button" data-page="details">Room details</button>
    <label data-compare-filter>Metric <select aria-label="Compare metric"></select></label>
    <label data-room-filter hidden>Room <select aria-label="Room"></select></label>
    <label data-sensor-filter hidden>Sensor <select aria-label="Sensor"></select></label>
  </div>
  <div class="environment-pane environment-compare">
    <div class="environment-heading"><h3></h3><small class="compare-unit"></small></div>
    <div class="compare-rooms"></div><div class="compare-graph"></div>
  </div>
  <div class="environment-pane environment-details" hidden>
    <h3></h3><div class="environment-detail-card"><strong></strong><div class="detail-graph"></div></div>
  </div><p role="status"></p>`;
  card.shadowRoot.append(dialog);
  const compare = dialog.querySelector('.environment-compare');
  const details = dialog.querySelector('.environment-details');
  const compareRooms = dialog.querySelector('.compare-rooms');
  const compareGraph = dialog.querySelector('.compare-graph');
  const detailGraph = dialog.querySelector('.detail-graph');
  const measureSelect = dialog.querySelector('[data-compare-filter] select');
  const roomSelect = dialog.querySelector('[data-room-filter] select');
  const sensorSelect = dialog.querySelector('[data-sensor-filter] select');
  const status = dialog.querySelector('[role=status]');
  const buttons = [...dialog.querySelectorAll('[data-hours]')];
  const pages = [...dialog.querySelectorAll('[data-page]')];
  let rooms = [], markers = [], request = 0, hours = 24;
  let history, page = 'compare';
  let liveReadings = [];
  function option(value,label) {
    const element = doc.createElement('option');
    element.value = value;
    element.textContent = label;
    return element;
  }
  function reading(entry) {
    const state = card.session?.connected === false ? undefined : card.session?.states?.[entry?.entity];
    return state?.state && Number.isFinite(Number(state.state)) && state.state.trim()
      ? state.state + (state.attributes?.unit_of_measurement ? ' ' + state.attributes.unit_of_measurement : '')
      : 'Unavailable';
  }
  function refresh() {
    if (!dialog.open) return;
    for (const {element,entry,prefix=''} of liveReadings) element.textContent = prefix + reading(entry);
  }
  function unitOf(entry) {
    return card.session?.states?.[entry?.entity]?.attributes?.unit_of_measurement ?? '';
  }
  function render() {
    const across = page === 'compare';
    compare.hidden = !across;
    details.hidden = across;
    dialog.querySelector('[data-compare-filter]').hidden = !across;
    dialog.querySelector('[data-room-filter]').hidden = across;
    dialog.querySelector('[data-sensor-filter]').hidden = across;
    for (const button of pages) button.setAttribute('aria-pressed',String(button.dataset.page === page));
    liveReadings = [];
    if (across) renderComparison();
    else renderDetails();
    refresh();
  }
  function renderComparison() {
    const measure = measures.find(item => item.id === measureSelect.value) ?? measures[0];
    compare.querySelector('h3').textContent = measure.label + ' across rooms';
    compare.querySelector('.compare-unit').textContent = measure.unit;
    compareRooms.replaceChildren();
    compareGraph.replaceChildren();
    const series = [];
    for (const [index,room] of rooms.entries()) {
      const entries = room.metrics.filter(entry => measure.match.test(entry.label));
      if (!entries.length && index >= 4) continue;
      const tile = doc.createElement('div');
      tile.className = 'compare-room';
      const color = roomColors[index % roomColors.length];
      tile.style.setProperty('--room-color',color);
      const title = doc.createElement('strong'), value = doc.createElement('b');
      title.textContent = room.label;
      tile.append(title,value);
      compareRooms.append(tile);
      if (!entries.length) {
        value.textContent = 'No sensor';
        continue;
      }
      liveReadings.push({element:value,entry:entries[0]});
      const extra = measure.id === 'temperature' ? room.metrics.find(entry => /humidity$/i.test(entry.label)) : entries[1];
      if (extra) {
        const label = doc.createElement('small');
        tile.append(label);
        liveReadings.push({element:label,entry:extra,prefix:extra.label+(measure.id==='temperature' ? ' · ' : ' (dashed) · ')});
      }
      if (!history) continue;
      for (const [sensorIndex,entry] of entries.entries()) {
        const convert = comparisonScale(unitOf(entry),measure);
        if (!convert) continue;
        const points = environmentSeries(history.result?.[entry.entity],history.start,history.end)
          .map(point => point.value === null ? point : {...point,value:convert(point.value)});
        series.push({color,points,dashed:sensorIndex>0});
      }
    }
    if (!history) return;
    const graph = compareMetric(doc,series,history.start,history.end,measure);
    if (graph) compareGraph.append(graph);
    else compareGraph.textContent = 'No comparable samples in this range.';
  }
  function renderDetails() {
    const room = rooms.find(item => item.id === roomSelect.value);
    const entry = room?.metrics.find(item => item.entity === sensorSelect.value);
    if (!entry) return;
    details.querySelector('h3').textContent = room.label + ' · ' + entry.label;
    liveReadings.push({entry,element:details.querySelector('strong')});
    detailGraph.replaceChildren();
    if (!history) return;
    const unit = unitOf(entry);
    const trend = chart(doc,history.result?.[entry.entity],history.start,history.end,entry.label,unit);
    if (!trend) {detailGraph.textContent = 'No recorded samples.'; return;}
    const note = doc.createElement('small');
    note.textContent = axisNumber.format(trend.low)+' – '+axisNumber.format(trend.high)+' '+unit;
    detailGraph.append(trend.svg,note);
  }
  function selectRoom() {
    const room = rooms.find(item => item.id === roomSelect.value);
    sensorSelect.replaceChildren(...(room?.metrics ?? []).map(entry => option(entry.entity,entry.label)));
  }
  async function load() {
    const token = ++request;
    const end = Date.now(), start = end-hours*HOUR;
    for (const button of buttons) button.setAttribute('aria-pressed',String(Number(button.dataset.hours) === hours));
    history = undefined;
    render();
    status.textContent = 'Loading Home Assistant history…';
    try {
      const result = await card.session.callWS({
        type:'history/history_during_period',
        entity_ids:[...new Set(rooms.flatMap(room => room.metrics.map(entry => entry.entity)))],
        start_time:new Date(start).toISOString(),end_time:new Date(end).toISOString(),
        minimal_response:true,no_attributes:true,
      });
      if (token !== request || !dialog.open) return;
      history = {result,start,end};
      const range = new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
      status.textContent = range.format(start) + ' – ' + range.format(end);
      render();
    } catch {
      if (token === request && dialog.open) status.textContent = 'Home Assistant history is unavailable.';
    }
  }
  function open(selected) {
    if (!rooms.length || dialog.open) return;
    card.setMainMenu(false,!card.mainMenu.hidden);
    page = 'compare';
    measureSelect.replaceChildren(...measures.filter(measure =>
      rooms.some(room => room.metrics.some(entry => measure.match.test(entry.label))))
      .map(measure => option(measure.id,measure.label)));
    roomSelect.replaceChildren(...rooms.map(room => option(room.id,room.label)));
    roomSelect.value = selected ?? rooms[0].id;
    selectRoom();
    dialog.showModal();
    void load();
  }
  for (const button of pages) button.addEventListener('click',() => {page = button.dataset.page; render();});
  measureSelect.addEventListener('change',render);
  roomSelect.addEventListener('change',() => {selectRoom(); render();});
  sensorSelect.addEventListener('change',render);
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
