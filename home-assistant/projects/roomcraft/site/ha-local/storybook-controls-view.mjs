import '../public/control-actions.js';
import {createFloorSupport} from './storybook-floor-support.mjs';
import {readStorybookConfig} from './storybook-state.mjs';
import {readStorybookUtilities, utilityReading} from './storybook-utilities.mjs';

const TAG = 'roomcraft-controls-card';
const ENTITY = /^[a-z_]+\.[a-z0-9_]+$/;
const OUTSIDE_GROUP = 'shared';
const WALL_MARGIN = 20;
const AREA_CONTROLS = new Set(['light','switch','fan','climate','cover','lock','media_player','vacuum','humidifier','water_heater']);
const AREA_SENSORS = new Set(['temperature','humidity','illuminance','power','energy','aqi','carbon_dioxide','pm25',
  'occupancy','motion','presence','door','window','opening','moisture','smoke']);
const AREA_TOGGLE = new Set(['light','switch','fan']);
const labels = {on:'On', off:'Off', open:'Open', opening:'Opening', closing:'Closing', closed:'Closed',
  locked:'Locked', unlocked:'Unlocked', idle:'Idle', docked:'Docked', cleaning:'Cleaning', paused:'Paused',
  unavailable:'Unavailable', unknown:'Unknown', ready:'Ready'};
const isEntity = value => typeof value === 'string' && ENTITY.test(value);
const nameKey = value => typeof value === 'string' ? value.trim().toLowerCase() : '';
const domainOf = entity => entity.split('.')[0];
const actions = () => (typeof window === 'undefined' ? globalThis : window).RoomcraftControlActions;

function makeRoom(room) {
  if (!Array.isArray(room?.points) || room.points.length < 3 ||
      !room.points.every(point => Number.isFinite(point?.x) && Number.isFinite(point?.y))) return null;
  const ring = room.points.map(point => [point.x, point.y]);
  const [firstX, firstY] = ring[0];
  ring.push([firstX, firstY]);
  return {id:room.id, name:room.name || 'Room', ring, support:createFloorSupport([[ring]])};
}

function wallDistance([x,y], ring) {
  let closest = Infinity;
  for (let i = 1; i < ring.length; i++) {
    const [ax, ay] = ring[i - 1];
    const [bx, by] = ring[i];
    const dx = bx - ax;
    const dy = by - ay;
    const length = dx * dx + dy * dy;
    if (!length) continue;
    const fraction = Math.min(1, Math.max(0, ((x - ax) * dx + (y - ay) * dy) / length));
    closest = Math.min(closest, Math.hypot(x - ax - fraction * dx, y - ay - fraction * dy));
  }
  return closest;
}

function roomFor(rooms, item) {
  if (!Number.isFinite(item.x) || !Number.isFinite(item.y)) return OUTSIDE_GROUP;
  const contained = rooms.find(room => room.support.contains(item.x, item.y));
  if (contained) return contained.id;
  let nearest;
  let minimum = WALL_MARGIN;
  for (const room of rooms) {
    const distance = wallDistance([item.x, item.y], room.ring);
    if (distance < minimum) {
      nearest = room;
      minimum = distance;
    }
  }
  return nearest?.id ?? OUTSIDE_GROUP;
}

function sectionHeading(entry) {
  return typeof entry?.name === 'string' ? entry.name.trim().slice(0, 80) : '';
}

/** Derive the traditional view from the same authored bindings that power Home. */
export function readRoomControls(config, hass = {}) {
  hass ??= {};
  const {layout, controls, weather} = readStorybookConfig(config);
  const rooms = layout.rooms.map(makeRoom).filter(Boolean);
  const groups = new Map(rooms.map(room => [room.id, {id:room.id, title:room.name, rows:[]}]));
  groups.set(OUTSIDE_GROUP, {id:OUTSIDE_GROUP, title:'Shared and exterior', rows:[]});
  const seen = new Set();
  const projected = new Map(controls.map(element => [element.roomcraft_item_id, element]));
  function addReading(entity, name, group, icon) {
    if (!isEntity(entity) || seen.has(entity)) return;
    seen.add(entity);
    group.rows.push({id:entity, entity, name, icon, tap:'more-info', hold:'none'});
  }
  // Resolve primary bindings first so auxiliary readouts cannot duplicate another object.
  for (const item of layout.items) {
    if (!isEntity(item.entityId)) continue;
    const element = projected.get(item.id);
    const camera = element?.type === 'custom:roomcraft-camera-thumbnail';
    const group = groups.get(roomFor(rooms, item));
    const name = item.controlLabel || element?.title || item.name;
    group.rows.push({id:item.id, entity:item.entityId, name, icon:item.controlIcon,
      tap:camera ? 'more-info' : (element?.roomcraft_tap_action || item.tapAction || 'auto'),
      hold:camera ? 'none' : (element?.roomcraft_hold_action || item.holdAction || 'auto'),
      tapEntity:element?.roomcraft_tap_entity || item.tapEntityId,
      holdEntity:element?.roomcraft_hold_entity || item.holdEntityId});
    seen.add(item.entityId);
  }
  for (const item of layout.items) {
    const group = groups.get(roomFor(rooms, item));
    for (const entity of [item.presenceEntityId,item.presenceTrackEntityId,item.vacuumMapEntityId]) {
      addReading(entity, '', group);
    }
  }
  const {panels, devices} = readStorybookUtilities(config);
  for (const [id, panel] of Object.entries(panels)) {
    const group = {id:`utility-${id}`, title:panel.title, rows:[]};
    for (const entry of panel.entities) addReading(entry.entity, sectionHeading(entry), group);
    groups.set(group.id, group);
  }
  addReading(weather.weather_entity, 'Weather', groups.get(OUTSIDE_GROUP));
  for (const section of Array.isArray(devices?.sections) ? devices.sections : []) {
    const title = typeof section?.title === 'string' ? section.title.trim().slice(0, 80) : '';
    if (!title || !Array.isArray(section.entities)) continue;
    const match = [...groups.values()].find(group => nameKey(group.title) === nameKey(title));
    const group = match || {id:`devices-${groups.size}`, title, rows:[]};
    for (const entity of section.entities) addReading(entity, '', group);
    if (!match) groups.set(group.id, group);
  }
  // HA area members without a layout object remain available in their area.
  for (const [entity, record] of Object.entries(hass.entities || {})) {
    if (!isEntity(entity) || seen.has(entity) || !record || record.hidden || record.hidden_by ||
        record.disabled_by || record.entity_category != null) continue;
    const state = hass.states?.[entity];
    const domain = domainOf(entity);
    if (!state || (!AREA_CONTROLS.has(domain) &&
      !(['sensor','binary_sensor'].includes(domain) && AREA_SENSORS.has(state.attributes?.device_class)))) continue;
    const areaId = record.area_id || hass.devices?.[record.device_id]?.area_id;
    const areaName = hass.areas?.[areaId]?.name;
    if (!areaId || !areaName) continue;
    const match = [...groups.values()].find(group => nameKey(group.title) === nameKey(areaName));
    const group = match || {id:`area-${areaId}`, title:areaName, rows:[]};
    const toggle = AREA_TOGGLE.has(domain);
    group.rows.push({id:entity, entity, tap:toggle ? 'toggle' : 'more-info', hold:'none'});
    if (!match) groups.set(group.id, group);
    seen.add(entity);
  }
  return [...groups.values()].filter(group => group.rows.length);
}

export function roomControlAction(row, gesture, hass) {
  const target = row[`${gesture}Entity`] || row.entity;
  let action = actions().resolve(row[gesture], gesture, target, row.entity, hass?.services);
  if (action === 'vacuum-panel') action = 'more-info';
  const domain = domainOf(target);
  const state = hass?.states?.[target]?.state;
  const available = hass?.connected !== false && !!state && !['unknown','unavailable'].includes(state);
  if (action === 'toggle') {
    const label = domain === 'cover' ? 'Toggle' : state === 'on' ? 'Turn off' : state === 'off' ? 'Turn on' : 'Toggle';
    return {target, label, available, domain:'homeassistant', service:'toggle'};
  }
  if (action === 'activate') {
    const service = actions().activationService(domain);
    return {target, label:service === 'press' ? 'Press' : 'Run', available, domain, service};
  }
  if (action === 'more-info') return {target};
  return null;
}

const MARKUP = `
  <main>
    <header>
      <div><p class="brand">Roomcraft</p><h1>Home controls</h1></div>
      <nav aria-label="Roomcraft views"><a data-live>Live Home</a><a data-studio>Studio</a></nav>
    </header>
    <label class="search">Find a room or device <input type="search" placeholder="Search controls"></label>
    <div class="status" role="status" aria-live="polite"></div>
    <button class="retry" type="button" hidden>Try again</button>
    <div class="rooms"></div>
  </main>`;

const STYLE = `
  :host{display:block;color:var(--primary-text-color,#202b28);font:inherit}
  *{box-sizing:border-box}
  main{max-width:1440px;margin:auto;padding:clamp(12px,3vw,32px) clamp(12px,3vw,32px) max(24px,env(safe-area-inset-bottom))}
  header{display:flex;align-items:end;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:16px}
  h1,h2,p{margin:0}
  h1{font-size:clamp(25px,4vw,38px);line-height:1.13}
  h2{font-size:18px;padding:15px 16px 10px;line-height:1.2}
  .brand{color:var(--secondary-text-color,#5a7067);font-size:13px;margin-bottom:4px}
  nav{display:flex;gap:8px;flex-wrap:wrap}
  nav a,button{min-height:44px;border:1px solid var(--divider-color,#cfddd4);border-radius:9px;
    background:var(--card-background-color,#fff);color:var(--primary-text-color,#202b28);font:inherit}
  nav a{display:inline-flex;align-items:center;text-decoration:none;padding:8px 14px;font-weight:600}
  button{padding:6px 12px;cursor:pointer}
  button:disabled{opacity:.45;cursor:default}
  .search{display:grid;gap:5px;font-size:13px;max-width:400px;margin-bottom:12px}
  input{min-height:44px;width:100%;border:1px solid var(--divider-color,#cfddd4);border-radius:9px;
    color:inherit;background:var(--card-background-color,#fff);font:inherit;padding:8px 12px}
  .status{color:var(--secondary-text-color,#5a7067);font-size:13px;margin:0 0 12px}
  .status:empty{display:none}
  .rooms{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,315px),1fr));align-items:start;gap:12px}
  section{background:var(--card-background-color,#fff);border:1px solid var(--divider-color,#cfddd4);
    border-radius:13px;overflow:hidden}
  .row{display:flex;align-items:center;gap:8px;padding:7px 10px;border-top:1px solid var(--divider-color,#e0e8e1)}
  .details{flex:1;display:flex;align-items:center;gap:9px;min-width:0;text-align:left;border-color:transparent;background:none}
  ha-icon{flex:none;width:22px;height:22px;color:var(--primary-color,#27634f)}
  .copy{min-width:0;overflow-wrap:anywhere}
  .name{display:block;font-weight:600;font-size:14px}
  .value{display:block;color:var(--secondary-text-color,#5a7067);font-size:13px}
  .actions{display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end}
  .actions button{font-size:13px;white-space:nowrap}
  .primary{border-color:var(--primary-color,#27634f);font-weight:600}
  .retry{margin:0 0 12px}
  :focus-visible{outline:2px solid var(--primary-color,#27634f);outline-offset:2px}
  [hidden]{display:none!important}
  @media(max-width:400px){.row{padding:6px;gap:4px}.details{padding:4px;gap:5px}.actions button{padding:5px 7px}}
`;

const DEFAULT_ICONS = {light:'mdi:lightbulb-outline',switch:'mdi:toggle-switch-outline',fan:'mdi:fan',
  climate:'mdi:thermostat',cover:'mdi:blinds',lock:'mdi:lock-outline',media_player:'mdi:television',
  camera:'mdi:video-outline',vacuum:'mdi:robot-vacuum',sensor:'mdi:gauge',binary_sensor:'mdi:radar',
  weather:'mdi:weather-partly-cloudy',scene:'mdi:palette-outline',script:'mdi:script-text-outline'};

const ElementBase = globalThis.HTMLElement ?? class {};

class RoomcraftControlsCard extends ElementBase {
  constructor() {
    super();
    const shadow = this.attachShadow({mode:'open'});
    shadow.innerHTML = `<style>${STYLE}</style>${MARKUP}`;
    this.rooms = shadow.querySelector('.rooms');
    this.status = shadow.querySelector('.status');
    this.search = shadow.querySelector('input');
    this.retry = shadow.querySelector('.retry');
    this.search.addEventListener('input', () => this.filter());
    this.retry.addEventListener('click', () => this.load());
    this.sections = [];
  }

  setConfig(config) {
    const dashboard = config?.dashboard;
    if (typeof dashboard !== 'string' || !/^[a-z0-9-]+$/.test(dashboard)) throw new Error('Invalid Roomcraft dashboard.');
    if (this.dashboard !== dashboard) {
      this.config = undefined;
      this.loading = undefined;
      this.sections = [];
      this.rooms.replaceChildren();
    }
    this.dashboard = dashboard;
    this.shadowRoot.querySelector('[data-live]').href = `/${dashboard}/home`;
    this.shadowRoot.querySelector('[data-studio]').href = `/${dashboard}/studio`;
    this.load();
  }

  set hass(hass) {
    const previous = this.session;
    this.session = hass;
    if (this.config) {
      if (previous?.connected === false && hass?.connected !== false) this.load();
      else if (previous?.entities !== hass?.entities || previous?.areas !== hass?.areas || previous?.devices !== hass?.devices) {
        this.paint(readRoomControls(this.config, hass));
      } else this.refresh(previous);
    } else if (!this.retry.hidden && previous?.connected === hass?.connected) return;
    else this.load();
    this.watchPublishedLayout();
  }

  connectedCallback() {
    this.watchPublishedLayout();
    this.load();
  }
  disconnectedCallback() {
    this.loading = undefined;
    this.watchPublishedLayout();
  }
  getCardSize() { return 6; }

  watchPublishedLayout() {
    const connection = this.isConnected ? this.session?.connection : undefined;
    if (connection === this.configConnection) return;
    this.configSubscription?.then(unsubscribe => unsubscribe()).catch(() => {});
    this.configConnection = connection;
    this.configSubscription = connection?.subscribeEvents?.(event => {
      if (!this.isConnected || this.configConnection !== connection || event?.data?.url_path !== this.dashboard) return;
      this.loading = undefined;
      this.load();
    }, 'lovelace_updated');
    this.configSubscription?.catch(() => {});
  }

  async load() {
    if (!this.isConnected || !this.dashboard || this.loading) return;
    const session = this.session;
    if (session?.connected === false || typeof session?.callWS !== 'function') {
      this.status.textContent = 'Waiting for Home Assistant…';
      return;
    }
    const request = {};
    this.loading = request;
    this.retry.hidden = true;
    this.status.textContent = 'Loading room controls…';
    try {
      const config = await session.callWS({type:'lovelace/config', url_path:this.dashboard});
      if (this.loading !== request || !this.isConnected) return;
      const groups = readRoomControls(config, this.session);
      this.config = config;
      this.paint(groups);
    } catch {
      if (this.loading !== request || !this.isConnected) return;
      this.status.textContent = 'Room controls could not be loaded.';
      this.retry.hidden = false;
    } finally {
      if (this.loading === request) this.loading = undefined;
    }
  }

  paint(groups) {
    this.sections = groups.map(({title, rows}) => {
      const section = document.createElement('section');
      const heading = document.createElement('h2');
      heading.textContent = title;
      const controls = rows.map(row => this.makeRow(row));
      section.append(heading, ...controls.map(control => control.element));
      return {section, title, controls};
    });
    this.rooms.replaceChildren(...this.sections.map(section => section.section));
    this.refresh();
  }

  makeRow(row) {
    const element = document.createElement('div');
    element.className = 'row';
    const details = document.createElement('button');
    details.type = 'button';
    details.className = 'details';
    const icon = document.createElement('ha-icon');
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('icon', row.icon || DEFAULT_ICONS[domainOf(row.entity)] || 'mdi:circle-small');
    const copy = document.createElement('span');
    copy.className = 'copy';
    const name = document.createElement('span');
    name.className = 'name';
    const value = document.createElement('span');
    value.className = 'value';
    copy.append(name,value);
    details.append(icon,copy);
    details.addEventListener('click', () => {
      const action = roomControlAction(row, 'tap', this.session);
      this.showDetails(action && !action.service ? action.target : row.entity);
    });
    const commands = document.createElement('div');
    commands.className = 'actions';
    const control = {element, row, details, name, value, buttons:[], pending:false};
    for (const gesture of ['tap','hold']) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = gesture === 'tap' ? 'primary' : '';
      button.addEventListener('click', () => this.activate(control, gesture));
      commands.append(button);
      control.buttons.push(button);
    }
    element.append(details,commands);
    return control;
  }

  refresh(previous) {
    const hass = this.session;
    const globalChange = !previous || previous.connected !== hass?.connected || previous.services !== hass?.services;
    let needsFilter = globalChange;
    for (const {controls} of this.sections) for (const control of controls) {
      const {row, name, value, details, buttons, pending} = control;
      if (!globalChange && [row.entity, row.tapEntity, row.holdEntity].every(entity =>
        !entity || previous.states?.[entity] === hass?.states?.[entity])) continue;
      const actionOnly = !!actions().activationService(domainOf(row.entity));
      const state = hass?.states?.[row.entity];
      const entry = utilityReading(row, hass?.states);
      if (name.textContent !== entry.name) {
        name.textContent = entry.name;
        needsFilter = true;
      }
      const fallback = actionOnly && state && !['unavailable','unknown'].includes(state.state) ? 'Ready' :
        Object.hasOwn(labels, entry.reading) ? labels[entry.reading] : entry.reading;
      value.textContent = hass?.connected === false ? 'Offline' : fallback;
      details.disabled = hass?.connected === false;
      details.setAttribute('aria-label', `${entry.name} details`);
      const primary = roomControlAction(row, 'tap', hass);
      const alternate = roomControlAction(row, 'hold', hass);
      for (const [index, action] of [primary,alternate].entries()) {
        const button = buttons[index];
        button.hidden = !action?.service || (index === 1 && primary?.service === action.service &&
          primary.target === action.target);
        button.disabled = pending || !action?.available;
        const targetName = hass?.states?.[action?.target]?.attributes?.friendly_name;
        button.textContent = action?.label || '';
        button.setAttribute('aria-label', `${action?.label || ''} ${action?.target !== row.entity && targetName ? targetName : entry.name}`);
        button.title = targetName && action?.target !== row.entity ? targetName : '';
      }
    }
    if (needsFilter) this.filter();
  }

  filter() {
    if (!this.config) return;
    const query = nameKey(this.search.value);
    let visible = false;
    for (const {section,title,controls} of this.sections) {
      const roomMatches = nameKey(title).includes(query);
      let shown = false;
      for (const {element, name, row} of controls) {
        element.hidden = !roomMatches && !nameKey(name.textContent).includes(query) && !nameKey(row.entity).includes(query);
        shown ||= !element.hidden;
      }
      section.hidden = !shown;
      visible ||= shown;
    }
    this.status.textContent = this.session?.connected === false ? 'Home Assistant is offline.' :
      visible ? '' : query ? 'No matching controls.' : 'No linked controls or readings.';
  }

  showDetails(entityId) {
    if (isEntity(entityId)) this.dispatchEvent(new CustomEvent('hass-more-info', {
      bubbles:true, composed:true, detail:{entityId},
    }));
  }

  async activate(control, gesture) {
    if (control.pending) return;
    const hass = this.session;
    const action = roomControlAction(control.row, gesture, hass);
    if (!action?.service || !action.available || typeof hass?.callService !== 'function') return;
    control.pending = true;
    this.refresh();
    try {
      await hass.callService(action.domain, action.service, {entity_id:action.target});
    } catch {
      this.showDetails(action.target);
    } finally {
      control.pending = false;
      this.refresh();
    }
  }
}

if (globalThis.customElements && !customElements.get(TAG)) customElements.define(TAG, RoomcraftControlsCard);
