/**
 * Roomcraft's Home Assistant transport. The editor artwork and interaction
 * live in /local/roomcraft/editor.html; this card supplies the authenticated
 * `hass` methods that only a Lovelace card receives. No token is serialized
 * into the iframe or stored in its local draft.
 */
const CHANNEL = 'roomcraft-ha';
const DASHBOARD = 'second-floor';
const PLAN_VIEW = 'plan';
const MAX_PNG_BYTES = 10 * 1024 * 1024;
const MAX_JSON_BYTES = 16 * 1024 * 1024;
const EDITOR_URL = '/local/roomcraft/editor.html';
const CAMERA_ELEMENT_TYPE = 'custom:roomcraft-camera-thumbnail';
const OBJECT_ELEMENT_TYPE = 'custom:roomcraft-object-control';
const MENU_ELEMENT_TYPE = 'custom:roomcraft-entity-menu';
const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;
const SCENE_WIDTH = 1536;
const SCENE_HEIGHT = 864;
const SCENE_LEFT = 0;
const SCENE_TOP = 80;
const ROOMCRAFT_SCENE = 'full-width-v1';
const PREVIOUS_SCENE = 'wall-to-wall-v1';
const PREVIOUS_SCENE_BOUNDS = { width: 1472, height: 828, left: 20, top: 96 };
const HEADER_TOP = '5.3%';
const CONTROL_ACTIONS = ['auto', 'toggle', 'activate', 'more-info', 'none'];
const VISUAL_KINDS = ['light', 'fan', 'climate', 'window', 'door', 'vacuum', 'device', 'none'];
const ACTIVATION_SERVICES = new Map([['scene', 'turn_on'], ['script', 'turn_on'], ['button', 'press']]);
const DETAIL_VISIBILITY_EVENT = 'roomcraft-detail-visibility';
const DETAIL_VISIBILITY_KEY = 'roomcraft.show-object-details.v1';

function readDetailVisibility() {
  try { return window.localStorage?.getItem(DETAIL_VISIBILITY_KEY) === 'true'; }
  catch { return false; }
}

let roomcraftDetailsVisible = readDetailVisibility();

function setDetailVisibility(visible) {
  roomcraftDetailsVisible = Boolean(visible);
  try { window.localStorage?.setItem(DETAIL_VISIBILITY_KEY, String(roomcraftDetailsVisible)); }
  catch { /* Storage can be unavailable in a locked-down WebView. */ }
  window.dispatchEvent?.(new CustomEvent(DETAIL_VISIBILITY_EVENT, {
    detail: { visible: roomcraftDetailsVisible },
  }));
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

class BridgeError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  if (isObject(value)) {
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function findPlanCard(config) {
  const view = Array.isArray(config.views)
    ? config.views.find(candidate => isObject(candidate) && candidate.path === PLAN_VIEW)
    : null;
  const card = Array.isArray(view?.cards)
    ? view.cards.find(candidate => isObject(candidate) && candidate.type === 'picture-elements')
    : null;
  if (!card) throw new Error('The Second Floor picture plan was not found.');
  return card;
}

function percent(value, span) { return `${Math.round(value / span * 10000) / 100}%`; }

function stylePercent(value) {
  if (typeof value !== 'string' || !/^-?\d{1,3}(?:\.\d+)?%$/.test(value)) return null;
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : null;
}

function sceneHotspot(hotspot) {
  const element = structuredClone(hotspot);
  if (isObject(element.style)) {
    const left = stylePercent(element.style.left);
    if (left !== null) element.style.left = percent(PLAN_WIDTH * left / 100 - SCENE_LEFT, SCENE_WIDTH);
    const width = stylePercent(element.style.width);
    if (width !== null) element.style.width = percent(PLAN_WIDTH * width / 100, SCENE_WIDTH);
    const top = stylePercent(element.style.top);
    if (top !== null) element.style.top = percent(PLAN_HEIGHT * top / 100 - SCENE_TOP, SCENE_HEIGHT);
    const height = stylePercent(element.style.height);
    if (height !== null) element.style.height = percent(PLAN_HEIGHT * height / 100, SCENE_HEIGHT);
  }
  return element;
}

function projectHotspot(element, scene) {
  const hotspot = structuredClone(element);
  const bounds = scene === PREVIOUS_SCENE ? PREVIOUS_SCENE_BOUNDS :
    { width: SCENE_WIDTH, height: SCENE_HEIGHT, left: SCENE_LEFT, top: SCENE_TOP };
  if (isObject(hotspot.style)) {
    const left = stylePercent(hotspot.style.left);
    if (left !== null) hotspot.style.left = percent(bounds.width * left / 100 + bounds.left, PLAN_WIDTH);
    const width = stylePercent(hotspot.style.width);
    if (width !== null) hotspot.style.width = percent(bounds.width * width / 100, PLAN_WIDTH);
    const top = stylePercent(hotspot.style.top);
    if (top !== null) hotspot.style.top = percent(bounds.height * top / 100 + bounds.top, PLAN_HEIGHT);
    const height = stylePercent(hotspot.style.height);
    if (height !== null) hotspot.style.height = percent(bounds.height * height / 100, PLAN_HEIGHT);
  }
  return hotspot;
}

function editableHotspots(elements, scene = null) {
  return Array.isArray(elements)
    ? elements.filter(element => isObject(element) && element.type === 'state-icon')
      .map((element, index) => ({
        ...((scene === ROOMCRAFT_SCENE || scene === PREVIOUS_SCENE)
          ? projectHotspot(element, scene) : structuredClone(element)),
        id: typeof element.id === 'string' ? element.id : `ha-dashboard-${index + 1}`,
      }))
    : [];
}

function validCameraThumbnail(item) {
  if (!isObject(item) || item.type !== 'cameraThumbnail') return false;
  const entity = item.entityId ?? '';
  const image = item.imageEntityId ?? '';
  const events = item.eventEntityIds ?? [];
  return typeof item.id === 'string' && item.id.length > 0 && item.id.length <= 128 &&
    typeof entity === 'string' && (entity === '' || /^camera\.[a-z0-9_]+$/.test(entity)) &&
    typeof image === 'string' && (image === '' || /^image\.[a-z0-9_]+$/.test(image)) &&
    (item.previewMode === undefined || ['event', 'live', 'live_auto', 'event_live', 'offline'].includes(item.previewMode)) &&
    Array.isArray(events) && events.length <= 6 &&
    events.every(id => typeof id === 'string' && /^binary_sensor\.[a-z0-9_]+$/.test(id)) &&
    new Set(events).size === events.length &&
    [item.x, item.y, item.w, item.h, item.rotation ?? 0].every(value => typeof value === 'number' && Number.isFinite(value)) &&
    item.x >= 0 && item.x <= PLAN_WIDTH && item.y >= 0 && item.y <= PLAN_HEIGHT &&
    item.w >= 40 && item.w <= PLAN_WIDTH && item.h >= 40 && item.h <= PLAN_HEIGHT;
}

function cameraThumbnailElements(items) {
  return items.filter(item => isObject(item) && item.type === 'cameraThumbnail').map(item => {
    if (!validCameraThumbnail(item)) throw new Error('The layout has an invalid camera thumbnail.');
    return {
      type: CAMERA_ELEMENT_TYPE,
      roomcraft_item_id: item.id,
      title: typeof item.name === 'string' ? item.name.slice(0, 120) : 'Camera',
      camera_entity: item.entityId || '',
      image_entity: item.imageEntityId || '',
      preview_mode: item.previewMode || 'event',
      event_entities: item.eventEntityIds || [],
      style: {
        left: percent(item.x - SCENE_LEFT, SCENE_WIDTH), top: percent(item.y - SCENE_TOP, SCENE_HEIGHT),
        width: percent(item.w, SCENE_WIDTH), height: percent(item.h, SCENE_HEIGHT),
        transform: `translate(-50%, -50%) rotate(${item.rotation || 0}deg)`,
        'z-index': 3,
      },
    };
  });
}

function validObjectControl(item) {
  if (!isObject(item) || item.type === 'cameraThumbnail') return false;
  return typeof item.id === 'string' && item.id.length > 0 && item.id.length <= 128 &&
    typeof item.entityId === 'string' && /^[a-z_]+\.[a-z0-9_]+$/.test(item.entityId) &&
    (item.controlLabel === undefined || typeof item.controlLabel === 'string' && item.controlLabel.length <= 80) &&
    (item.controlIcon === undefined || item.controlIcon === '' || typeof item.controlIcon === 'string' && /^mdi:[a-z0-9-]+$/.test(item.controlIcon)) &&
    (item.visualKind === undefined || item.visualKind === 'auto' || VISUAL_KINDS.includes(item.visualKind)) &&
    (item.tapAction === undefined || CONTROL_ACTIONS.includes(item.tapAction)) &&
    (item.holdAction === undefined || CONTROL_ACTIONS.includes(item.holdAction)) &&
    (item.tapEntityId === undefined || typeof item.tapEntityId === 'string' &&
      (item.tapEntityId === '' || /^[a-z_]+\.[a-z0-9_]+$/.test(item.tapEntityId))) &&
    (item.holdEntityId === undefined || typeof item.holdEntityId === 'string' &&
      (item.holdEntityId === '' || /^[a-z_]+\.[a-z0-9_]+$/.test(item.holdEntityId))) &&
    (item.vacuumMapEntityId === undefined || typeof item.vacuumMapEntityId === 'string' &&
      (item.vacuumMapEntityId === '' || /^camera\.[a-z0-9_]+$/.test(item.vacuumMapEntityId))) &&
    [item.x, item.y, item.w, item.h, item.rotation ?? 0].every(value => typeof value === 'number' && Number.isFinite(value)) &&
    item.x >= 0 && item.x <= PLAN_WIDTH && item.y >= 0 && item.y <= PLAN_HEIGHT &&
    item.w >= 12 && item.w <= PLAN_WIDTH && item.h >= 12 && item.h <= PLAN_HEIGHT;
}

function objectVisualKind(item) {
  if (VISUAL_KINDS.includes(item.visualKind)) return item.visualKind;
  const type = String(item.type || '').toLowerCase();
  const entity = String(item.entityId || '').toLowerCase();
  const label = String(item.controlLabel || item.name || '').toLowerCase();
  const domain = entity.split('.')[0];
  if (domain === 'vacuum' || type.includes('robotvacuum') || /\b(robot )?vacuum\b/.test(label)) return 'vacuum';
  if (domain === 'fan' || (type.includes('fan') && !label.includes('fan light')) ||
      (domain === 'switch' && /\bfan\b/.test(label) && !/\blight\b/.test(label))) return 'fan';
  if (domain === 'climate' || /\b(air conditioner|thermostat|a\/c)\b/.test(label)) return 'climate';
  if (domain === 'lock' || /\b(door|garage)\b/.test(label)) return 'door';
  if (domain === 'cover' || type === 'window' || /\b(window|blind|blinds|shade|shades)\b/.test(label)) return 'window';
  if (domain === 'light' || /light|lamp|sconce/.test(type) || /\b(light|lamp)\b/.test(label)) return 'light';
  return 'device';
}

function objectControlElements(items) {
  return items.filter(item => isObject(item) && item.type !== 'cameraThumbnail' && item.entityId).map(item => {
    if (!validObjectControl(item)) throw new Error('The layout has an invalid object control.');
    const visualKind = objectVisualKind(item);
    return {
      type: OBJECT_ELEMENT_TYPE,
      roomcraft_item_id: item.id,
      entity: item.entityId,
      title: item.controlLabel || item.name || item.entityId,
      control_icon: item.controlIcon || '',
      control_zone: item.type === 'controlZone',
      roomcraft_visual_kind: visualKind,
      ...(visualKind === 'light' && ['lamp', 'tableLamp'].includes(item.type) ?
        { roomcraft_light_form: 'table_lamp' } : {}),
      ...(visualKind === 'window' ? { roomcraft_window_axis: item.w < item.h ? 'vertical' : 'horizontal' } : {}),
      roomcraft_tap_action: item.tapAction || 'auto',
      roomcraft_hold_action: item.holdAction || 'auto',
      ...(item.tapEntityId ? { roomcraft_tap_entity: item.tapEntityId } : {}),
      ...(item.holdEntityId ? { roomcraft_hold_entity: item.holdEntityId } : {}),
      ...(item.vacuumMapEntityId ? { roomcraft_vacuum_map_entity: item.vacuumMapEntityId } : {}),
      style: {
        left: percent(item.x - SCENE_LEFT, SCENE_WIDTH), top: percent(item.y - SCENE_TOP, SCENE_HEIGHT),
        width: percent(item.w, SCENE_WIDTH), height: percent(item.h, SCENE_HEIGHT),
        transform: `translate(-50%, -50%) rotate(${item.rotation || 0}deg)`,
        'z-index': 4,
      },
    };
  });
}

function entityMenuElement(items = [], existing = []) {
  const previous = existing.find(element => isObject(element) &&
    element.type === MENU_ELEMENT_TYPE && element.roomcraft_menu === true);
  const sections = Array.isArray(previous?.sections) ? previous.sections.slice(0, 12)
    .filter(section => isObject(section) && typeof section.title === 'string' &&
      section.title.length <= 60 && Array.isArray(section.entities))
    .map(section => ({ title: section.title, entities: section.entities.filter(entity =>
      typeof entity === 'string' && /^[a-z_]+\.[a-z0-9_]+$/.test(entity)).slice(0, 200) })) : [];
  const boundObjects = items.filter(item => isObject(item) &&
    typeof item.entityId === 'string' && /^[a-z_]+\.[a-z0-9_]+$/.test(item.entityId))
    .map(item => ({ entity_id: item.entityId,
      label: item.controlLabel || item.name || item.entityId,
      icon: item.controlIcon || '' }));
  return { type: MENU_ELEMENT_TYPE, roomcraft_menu: true, title: 'Devices and sensors',
    sections, bound_objects: boundObjects,
    style: { left: '5.2%', top: HEADER_TOP, 'z-index': 12 } };
}

function migrateHeaderChrome(element, previousScene) {
  const result = structuredClone(element);
  const previousTop = previousScene === PREVIOUS_SCENE ? '3.6%' : '9%';
  const stateLabel = result.type === 'state-label' && typeof result.entity === 'string' &&
    (result.entity === 'sensor.time' || result.entity.startsWith('weather.'));
  if (stateLabel) {
    if (typeof result.prefix === 'string' && /^(weather|time)\s*[Â·:]?\s*$/i.test(result.prefix)) {
      delete result.prefix;
    }
    result.style = isObject(result.style) ? result.style : {};
    Object.assign(result.style, {
      color: '#f5f9f5', 'font-size': 'clamp(11px, 1vw, 14px)', 'font-weight': '600',
      background: 'rgba(17, 33, 35, 0.42)', 'border-radius': '9px', padding: '4px 7px',
      'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.55)',
    });
  }
  if (previousScene === ROOMCRAFT_SCENE || !isObject(result.style) || result.style.top !== previousTop) return result;
  const action = isObject(result.tap_action) ? result.tap_action : {};
  const editorLink = result.type === 'icon' && result.icon === 'mdi:pencil-ruler' &&
    action.navigation_path === '/second-floor/studio';
  if (stateLabel || editorLink) result.style.top = HEADER_TOP;
  return result;
}

function updatePlanCard(config, image, hotspots, items = []) {
  const next = structuredClone(config);
  const card = findPlanCard(next);
  const previousScene = card.roomcraft_scene;
  const objects = objectControlElements(items);
  const linkedEntities = new Set(objects.map(element => element.entity));
  const retained = Array.isArray(card.elements)
    ? card.elements.filter(element => isObject(element) && element.type !== 'state-icon' &&
      !((element.type === CAMERA_ELEMENT_TYPE || element.type === OBJECT_ELEMENT_TYPE) &&
        typeof element.roomcraft_item_id === 'string') &&
      !(element.type === MENU_ELEMENT_TYPE && element.roomcraft_menu === true))
    : [];
  card.image = image;
  card.roomcraft_scene = ROOMCRAFT_SCENE;
  card.elements = [...hotspots.filter(hotspot => !linkedEntities.has(hotspot.entity)).map(hotspot => {
    const element = sceneHotspot(hotspot);
    delete element.id;
    return element;
  }), ...objects, ...cameraThumbnailElements(items), entityMenuElement(items, card.elements || []),
    ...retained.map(element => migrateHeaderChrome(element, previousScene))];
  return { next, card };
}

function validateProject(project) {
  if (!isObject(project) || project.version !== 2 ||
      !Array.isArray(project.rooms) || !Array.isArray(project.walls) ||
      !Array.isArray(project.items) || !Array.isArray(project.hotspots)) {
    throw new Error('The layout is not a supported Roomcraft project.');
  }
  if (project.rooms.length > 200 || project.walls.length > 2000 ||
      project.items.length > 2000 || project.hotspots.length > 100) {
    throw new Error('The layout exceeds supported limits.');
  }
  for (const hotspot of project.hotspots) {
    if (!isObject(hotspot) || hotspot.type !== 'state-icon' ||
        !/^[a-z_]+\.[a-z0-9_]+$/i.test(hotspot.entity || '') ||
        !isObject(hotspot.style)) {
      throw new Error('The layout has an invalid Home Assistant control.');
    }
  }
  for (const item of project.items) {
    if (isObject(item) && item.type === 'cameraThumbnail' && !validCameraThumbnail(item)) {
      throw new Error('The layout has an invalid camera thumbnail.');
    }
    if (isObject(item) && item.type !== 'cameraThumbnail' && item.entityId && !validObjectControl(item)) {
      throw new Error('The layout has an invalid object control.');
    }
  }
  return project;
}

function decodePng(dataUrl) {
  const prefix = 'data:image/png;base64,';
  if (typeof dataUrl !== 'string' || !dataUrl.startsWith(prefix)) {
    throw new Error('A rendered PNG is required.');
  }
  const encoded = dataUrl.slice(prefix.length);
  if (encoded.length > Math.ceil(MAX_PNG_BYTES / 3) * 4 + 4 ||
      !/^[A-Za-z0-9+/]*={0,2}$/.test(encoded)) {
    throw new Error('The PNG is too large or malformed.');
  }
  let binary;
  try { binary = atob(encoded); }
  catch { throw new Error('The PNG is malformed.'); }
  if (binary.length < 24 || binary.length > MAX_PNG_BYTES) {
    throw new Error('The PNG is malformed or too large.');
  }
  const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
  const signature = [137, 80, 78, 71, 13, 10, 26, 10];
  if (signature.some((part, index) => bytes[index] !== part)) {
    throw new Error('The PNG signature is invalid.');
  }
  const size = offset => ((bytes[offset] << 24) | (bytes[offset + 1] << 16) |
    (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0;
  if (size(16) !== SCENE_WIDTH || size(20) !== SCENE_HEIGHT) {
    throw new Error('The plan PNG must be 1536 Ã— 864 pixels.');
  }
  return bytes;
}

class RoomcraftEditorCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._revisionSerial = 0;
    this._revisions = new Map();
    this._writeBusy = false;
    this._frameAttempts = 0;
    this._frameTimer = null;
    this._onMessage = this._onMessage.bind(this);
  }

  setConfig(config) {
    this._config = config || {};
    if (this._iframe) return;
    const style = document.createElement('style');
    style.textContent = ':host{display:block;min-width:0}ha-card{display:block;overflow:hidden;background:#f4f6f1;border-radius:14px}.launch{display:flex;justify-content:flex-end;padding:6px 12px;background:#f4f6f1}button{font:inherit;color:#365a46;background:white;border:1px solid #cbd9cc;border-radius:8px;padding:8px 12px;cursor:pointer}.launch button{font-size:12px;padding:6px 10px}iframe{display:block;width:100%;height:calc(100dvh - 174px);min-height:650px;border:0}iframe[hidden],.fallback[hidden]{display:none}.fallback{min-height:320px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:24px;color:#253a2b}.fallback h2{font-size:20px;margin:0}.fallback p{max-width:460px;line-height:1.5;margin:0}@media(max-width:700px){iframe{height:calc(100dvh - 150px);min-height:530px}}';
    const card = document.createElement('ha-card');
    const launch = document.createElement('div');
    launch.className = 'launch';
    const openEditor = () => {
      const popup = window.open(this._editorUrl(), '_blank');
      if (popup) this._popup = popup;
    };
    const openButton = document.createElement('button');
    openButton.type = 'button';
    openButton.textContent = 'Open editor in a new tab';
    openButton.addEventListener('click', openEditor);
    launch.append(openButton);
    const iframe = document.createElement('iframe');
    iframe.title = 'Roomcraft second-floor layout editor';
    iframe.setAttribute('referrerpolicy', 'same-origin');
    iframe.setAttribute('loading', 'eager');
    const fallback = document.createElement('section');
    fallback.className = 'fallback';
    fallback.hidden = true;
    const title = document.createElement('h2');
    title.textContent = 'Open Roomcraft in its own tab';
    const detail = document.createElement('p');
    detail.textContent = 'The embedded editor did not load in this browser tab. Open the full editor below and keep this Studio tab open for dashboard import and export.';
    const fallbackButton = document.createElement('button');
    fallbackButton.type = 'button';
    fallbackButton.textContent = 'Open editor in a new tab';
    fallbackButton.addEventListener('click', openEditor);
    fallback.append(title, detail, fallbackButton);
    iframe.addEventListener('load', () => {
      if (iframe.contentDocument?.URL !== 'about:blank') {
        iframe.hidden = false;
        fallback.hidden = true;
        clearTimeout(this._frameTimer);
      }
    });
    card.append(launch, iframe, fallback);
    this.shadowRoot.append(style, card);
    this._iframe = iframe;
    this._fallback = fallback;
    // Lovelace can create/configure a custom card while it is detached. Chrome
    // may leave an iframe added at that stage on about:blank after attachment.
    // Navigate only once the card and its shadow tree are in the live document.
    if (this.isConnected) this._navigateIframe();
  }

  set hass(value) { this._hass = value; }
  getCardSize() { return 12; }

  _editorUrl() {
    return `${EDITOR_URL}?v=${encodeURIComponent(this._config.asset_version || 'current')}`;
  }

  _navigateIframe() {
    if (!this._iframe) return;
    if (!this._iframe.hasAttribute('src')) this._iframe.src = this._editorUrl();
    this._watchIframe();
  }

  _watchIframe() {
    clearTimeout(this._frameTimer);
    if (!this.isConnected || !this._iframe) return;
    this._frameTimer = setTimeout(() => {
      if (!this.isConnected || !this._iframe) return;
      let current;
      try { current = this._iframe.contentDocument?.URL; }
      catch { return; }
      if (current === 'about:blank') {
        if (this._frameAttempts >= 3) {
          this._iframe.hidden = true;
          this._fallback.hidden = false;
          return;
        }
        this._frameAttempts += 1;
        this._iframe.src = `${this._editorUrl()}&retry=${this._frameAttempts}`;
        this._watchIframe();
      }
    }, 1500);
  }

  connectedCallback() {
    window.addEventListener('message', this._onMessage);
    this._navigateIframe();
  }
  disconnectedCallback() {
    window.removeEventListener('message', this._onMessage);
    clearTimeout(this._frameTimer);
  }

  async _onMessage(event) {
    if (event.origin !== location.origin ||
        (event.source !== this._iframe?.contentWindow &&
         (event.source !== this._popup || this._popup?.closed))) return;
    const message = event.data;
    if (!message || message.channel !== CHANNEL || message.kind !== 'request' ||
        !Number.isSafeInteger(message.id) || message.id < 1 ||
        !['GET', 'POST'].includes(message.method)) return;
    let response;
    try {
      if (!this._hass?.connected) throw new Error('Home Assistant is disconnected.');
      const data = message.method === 'GET'
        ? await this._readDashboard()
        : await this._writeDashboard(message.payload);
      response = { channel: CHANNEL, kind: 'response', id: message.id, ok: true, data };
    } catch (error) {
      response = { channel: CHANNEL, kind: 'response', id: message.id, ok: false,
        error: error instanceof Error ? error.message : 'Home Assistant transfer failed.',
        status: Number.isInteger(error?.status) ? error.status : undefined };
    }
    event.source?.postMessage(response, location.origin);
  }

  async _getConfig() {
    const config = await this._hass.callWS({ type: 'lovelace/config', url_path: DASHBOARD });
    if (!isObject(config)) throw new Error('Home Assistant returned an invalid dashboard.');
    findPlanCard(config);
    return config;
  }

  _recordRevision(config) {
    const revision = `local-${Date.now()}-${++this._revisionSerial}`;
    this._revisions.set(revision, stableStringify(config));
    while (this._revisions.size > 4) this._revisions.delete(this._revisions.keys().next().value);
    return revision;
  }

  _result(config, revision) {
    const card = findPlanCard(config);
    const imageUrl = typeof card.image === 'string'
      ? new URL(card.image, location.origin).href : null;
    const entityOptions = Object.entries(this._hass?.states || {}).map(([entity_id, state]) => ({
      entity_id,
      name: typeof state.attributes?.friendly_name === 'string'
        ? state.attributes.friendly_name.slice(0, 120) : entity_id,
      domain: entity_id.split('.')[0],
      area: this._hass?.areas?.[this._hass?.entities?.[entity_id]?.area_id]?.name || '',
    }));
    return {
      project: isObject(config.roomcraft_layout) ? config.roomcraft_layout : null,
      imageUrl,
      hotspots: editableHotspots(card.elements, card.roomcraft_scene),
      entityOptions,
      source: `${location.origin}/${DASHBOARD}/${PLAN_VIEW}`,
      revision,
    };
  }

  async _readDashboard() {
    const config = await this._getConfig();
    return this._result(config, this._recordRevision(config));
  }

  async _uploadPng(bytes) {
    const form = new FormData();
    form.append('file', new Blob([bytes], { type: 'image/png' }), 'roomcraft-second-floor.png');
    const response = await this._hass.fetchWithAuth(
      '/api/image/upload', { method: 'POST', body: form });
    if (!response.ok) throw new Error(`Home Assistant image upload failed (${response.status}).`);
    const result = await response.json();
    if (!result || typeof result.id !== 'string' || !/^[a-f0-9]{32}$/.test(result.id)) {
      throw new Error('Home Assistant returned an invalid image ID.');
    }
    return `/api/image/serve/${result.id}/original`;
  }

  async _writeDashboard(payload) {
    if (!this._hass.user?.is_admin) throw new BridgeError(403, 'An administrator Home Assistant login is required to publish a layout.');
    if (this._writeBusy) throw new Error('A dashboard transfer is already in progress.');
    if (!isObject(payload) || typeof payload.revision !== 'string' ||
        !this._revisions.has(payload.revision)) {
      throw new BridgeError(409, 'Import the current dashboard layout before publishing.');
    }
    if (JSON.stringify(payload).length > MAX_JSON_BYTES) throw new Error('The layout transfer is too large.');
    const project = validateProject(payload.project);
    const bytes = decodePng(payload.pngDataUrl);
    this._writeBusy = true;
    try {
      const expected = this._revisions.get(payload.revision);
      const original = await this._getConfig();
      if (stableStringify(original) !== expected) {
        throw new BridgeError(409, 'The dashboard changed. Import it again before exporting.');
      }
      const image = await this._uploadPng(bytes);
      const latest = await this._getConfig();
      if (stableStringify(latest) !== expected) {
        throw new BridgeError(409, 'The dashboard changed during image upload. Import it again before exporting.');
      }
      const { next } = updatePlanCard(latest, image, project.hotspots, project.items);
      next.roomcraft_layout = project;
      await this._hass.callWS({ type: 'lovelace/config/save', url_path: DASHBOARD, config: next });
      const verified = await this._getConfig();
      if (stableStringify(verified) !== stableStringify(next)) {
        throw new Error('Dashboard save could not be verified. Reload before trying again.');
      }
      this._revisions.clear();
      return this._result(verified, this._recordRevision(verified));
    } finally {
      this._writeBusy = false;
    }
  }
}

function controlVisualKind(config) {
  if (VISUAL_KINDS.includes(config.roomcraft_visual_kind)) return config.roomcraft_visual_kind;
  return objectVisualKind({ type: config.control_zone ? 'controlZone' : '',
    entityId: config.entity, name: config.title, controlLabel: config.title });
}

function controlDisplayState(value, domain) {
  if (!value || value === 'unavailable' || value === 'unknown') return 'unavailable';
  if (['scene', 'script', 'button'].includes(domain)) return 'ready';
  // A motor or light never lights up because another domain reports a mode,
  // sensor value, or the last time an action-only scene ran.
  if (['light', 'switch', 'fan', 'input_boolean', 'binary_sensor'].includes(domain)) {
    if (value === 'on') return 'on';
    if (value === 'off') return 'off';
    return 'unavailable';
  }
  if (domain === 'cover') {
    if (['open', 'opening'].includes(value)) return 'on';
    if (['closed', 'closing'].includes(value)) return 'off';
    return 'unavailable';
  }
  if (domain === 'lock') {
    if (['unlocked', 'unlocking'].includes(value)) return 'on';
    if (['locked', 'locking'].includes(value)) return 'off';
    return 'unavailable';
  }
  if (domain === 'climate') {
    if (['heat', 'cool', 'heat_cool', 'auto', 'dry', 'fan_only'].includes(value)) return 'on';
    if (value === 'off') return 'off';
    return 'unavailable';
  }
  if (domain === 'media_player') {
    if (value === 'playing') return 'on';
    if (['off', 'idle', 'paused', 'standby'].includes(value)) return 'off';
    return 'unavailable';
  }
  if (domain === 'vacuum') {
    if (['cleaning', 'returning'].includes(value)) return 'on';
    if (['off', 'idle', 'paused', 'docked'].includes(value)) return 'off';
    return 'unavailable';
  }
  if (value === 'on') return 'on';
  if (value === 'off') return 'off';
  return 'unavailable';
}

/** The linked object's own artwork and state treatment form its hit target. */
class RoomcraftObjectControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._holdTimer = null;
    this._feedbackTimer = null;
    this._held = false;
    this._moved = false;
    this._detailsVisible = roomcraftDetailsVisible;
    this._onDetailVisibility = event => {
      this._detailsVisible = Boolean(event.detail?.visible);
      this._refreshDetailVisibility();
    };
    this._onDetailResize = () => this._refreshDetailPosition();
  }

  setConfig(config) {
    if (!isObject(config) || typeof config.entity !== 'string' ||
        !/^[a-z_]+\.[a-z0-9_]+$/.test(config.entity) ||
        !CONTROL_ACTIONS.includes(config.roomcraft_tap_action || 'auto') ||
        !CONTROL_ACTIONS.includes(config.roomcraft_hold_action || 'auto') ||
        (config.roomcraft_tap_entity !== undefined &&
          (typeof config.roomcraft_tap_entity !== 'string' ||
            !/^[a-z_]+\.[a-z0-9_]+$/.test(config.roomcraft_tap_entity))) ||
        (config.roomcraft_hold_entity !== undefined &&
          (typeof config.roomcraft_hold_entity !== 'string' ||
            !/^[a-z_]+\.[a-z0-9_]+$/.test(config.roomcraft_hold_entity))) ||
        (config.roomcraft_visual_kind !== undefined && config.roomcraft_visual_kind !== 'auto' &&
          !VISUAL_KINDS.includes(config.roomcraft_visual_kind)) ||
        (config.roomcraft_light_form !== undefined && config.roomcraft_light_form !== 'table_lamp') ||
        (config.roomcraft_window_axis !== undefined &&
          !['horizontal', 'vertical'].includes(config.roomcraft_window_axis)) ||
        (config.roomcraft_vacuum_map_entity !== undefined &&
          (typeof config.roomcraft_vacuum_map_entity !== 'string' ||
            !/^camera\.[a-z0-9_]+$/.test(config.roomcraft_vacuum_map_entity)))) {
      throw new Error('The Roomcraft object has an invalid device binding.');
    }
    this._config = config;
    if (!this._button) this._build();
    this._refresh();
  }

  set hass(value) { this._hass = value; this._refresh(); }
  connectedCallback() {
    window.addEventListener?.(DETAIL_VISIBILITY_EVENT, this._onDetailVisibility);
    window.addEventListener?.('resize', this._onDetailResize);
    this._refreshDetailVisibility();
  }
  disconnectedCallback() {
    window.removeEventListener?.(DETAIL_VISIBILITY_EVENT, this._onDetailVisibility);
    window.removeEventListener?.('resize', this._onDetailResize);
    clearTimeout(this._holdTimer);
    clearTimeout(this._feedbackTimer);
    this._button?.removeAttribute('data-feedback');
  }

  _build() {
    const style = document.createElement('style');
    style.textContent = `
      :host{display:block;box-sizing:border-box;min-width:32px;min-height:32px}
      .target{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;border-radius:12px;background:transparent;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
      .target:hover,.target:focus-visible{outline:2px solid #7ee8d2;outline-offset:1px}
      .target:active{filter:brightness(1.25)}
      .target[data-feedback]::after{content:"";position:absolute;inset:1px;z-index:2;border:3px solid #d9fff4;border-radius:12px;background:#b8fff035;box-shadow:0 0 0 3px #15313cbb,0 0 14px 5px #6eead5c9;pointer-events:none}
      .target[data-feedback="hold"]::after{border-color:#fff2bc;background:#ffe8a42d;box-shadow:0 0 0 3px #372a1fbb,0 0 14px 5px #ffd47bc9}
      .target[data-state="unavailable"]{cursor:help}
      .target[data-state="unavailable"]:focus-visible{outline-color:#f8c36b}
      .art,.rotor,.blade,.hub{position:absolute;pointer-events:none;box-sizing:border-box}
      .art{inset:5%;border-radius:50%;opacity:1;transition:background .18s,box-shadow .18s,filter .18s}
      .target[data-visual="none"] .art,.target[data-state="ready"] .art,
      .target[data-zone="true"][data-visual="device"] .art{display:none}
      .target[data-visual="light"][data-state="off"] .art{
        background:radial-gradient(circle,#14222b 0 25%,#182731e8 43%,#111e28a8 66%,transparent 84%);
        backdrop-filter:brightness(.22) saturate(.3);box-shadow:inset 0 0 0 2px #7d8c97,0 2px 9px #05141b99}
      .target[data-visual="light"][data-state="on"] .art{
        background:radial-gradient(circle,#fffef2 0 15%,#ffe6a5e8 31%,#ffca68a0 50%,transparent 78%);
        box-shadow:0 0 18px 9px #ffd865a6,0 0 34px 17px #ffd86562,inset 0 0 0 2px #fff8dd}
      .target[data-visual="light"][data-form="table_lamp"] .art{
        inset:7% 17% auto;height:58%;border-radius:46% 46% 50% 50%;
        transition:background .18s,box-shadow .18s,backdrop-filter .18s}
      .target[data-visual="light"][data-form="table_lamp"][data-state="off"] .art{
        background:radial-gradient(ellipse at 45% 39%,#1d2730bb 0 39%,#101a2399 67%,transparent 83%);
        backdrop-filter:brightness(.35) saturate(.42);
        box-shadow:inset 0 0 0 1px #74838a,0 1px 4px #07131a99}
      .target[data-visual="light"][data-form="table_lamp"][data-state="on"] .art{
        background:radial-gradient(ellipse at 45% 39%,#fff8dfeb 0 32%,#ffdd8dbe 55%,transparent 82%);
        backdrop-filter:none;
        box-shadow:0 0 8px 3px #ffd46b9c,0 0 16px 7px #ffd46b59,inset 0 0 0 1px #fff5d4}
      .target[data-visual="fan"] .art{inset:0;border-radius:0;background:radial-gradient(ellipse at center,#172630e8 0 26%,#172630a6 49%,transparent 76%);backdrop-filter:none;box-shadow:none}
      .target[data-visual="fan"][data-state="on"] .art{background:radial-gradient(ellipse at center,#22303ad9 0 27%,#263c468c 48%,transparent 76%);backdrop-filter:none;box-shadow:none}
      .rotor{inset:7%;display:none;transform-origin:50% 50%}
      .target[data-visual="fan"] .rotor{display:block}
      .target[data-visual="fan"][data-state="on"] .rotor{animation:roomcraft-spin 2.8s steps(8,end) infinite;filter:drop-shadow(0 0 4px #9bc9d69c)}
      .blade{width:14%;height:38%;top:11%;left:43%;transform-origin:50% 103%;
        background:linear-gradient(90deg,#8999a0,#d7e3e0 40%,#f6faf0 65%,#91a4a8);border:1px solid #5b7079;border-radius:48%}
      .blade:nth-child(1){transform:rotate(0deg)}
      .blade:nth-child(2){transform:rotate(72deg)}
      .blade:nth-child(3){transform:rotate(144deg)}
      .blade:nth-child(4){transform:rotate(216deg)}
      .blade:nth-child(5){transform:rotate(288deg)}
      .target[data-visual="fan"][data-state="off"] .blade{background:linear-gradient(90deg,#34464c,#6b7a7f 55%,#394b52);border-color:#26353b}
      .hub{width:28%;height:28%;top:36%;left:36%;border-radius:50%;background:radial-gradient(circle at 38% 35%,#c7d4d4,#7d9396 70%,#4c6469);border:2px solid #4e666b;box-shadow:0 1px 4px #17232a88}
      .target[data-visual="fan"][data-state="off"] .hub{background:radial-gradient(circle at 38% 35%,#8f9b9d,#34474d 75%)}
      .target[data-visual="window"] .art{border-radius:5px;backdrop-filter:none}
      .target[data-visual="window"][data-axis="horizontal"] .art{inset:auto 7%;top:50%;height:clamp(8px,22%,18px);transform:translateY(-50%)}
      .target[data-visual="window"][data-axis="vertical"] .art{inset:7% auto;left:50%;width:clamp(8px,22%,18px);transform:translateX(-50%)}
      .target[data-visual="door"] .art{inset:6%;border-radius:7px}
 /4ë«h‘éì¶»§q«^t€€½¹ÍÐÍÑå±”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÑå±”œ¤ì4(€€€ÍÑå±”¹Ñ•áÑ½¹Ñ•¹Ð€ô€œé¡½ÍÑíÁ½Í¥Ñ¥½¸é™¥á•í¥¹Í•ÐèÀíèµ¥¹‘•àèÄÀÀÀÀí‘¥ÍÁ±…äé‰±½¬í™½¹ÐèÄÑÁà¼Ä¸ÐÍåÍÑ•´µÕ¤±Í…¹ÌµÍ•É¥˜í½±½Èè•˜Ñ••ô¹ÍÉ¥µíÁ½Í¥Ñ¥½¸é…‰Í½±ÕÑ”í¥¹Í•ÐèÀí‰…­É½Õ¹èŒÀÜÄÔÄÝˆáô¹‘É…Ý•ÉíÁ½Í¥Ñ¥½¸é…‰Í½±ÕÑ”íÑ½ÀèÀí‰½ÑÑ½´èÀí±•™ÐèÀíÝ¥‘Ñ éµ¥¸ ØÈÁÁà°ÄÀÁÙÜ¤í‰½àµÍ¥é¥¹œé‰½É‘•Èµ‰½àí‘¥ÍÁ±…äé™±•àí™±•àµ‘¥É•Ñ¥½¸é½±Õµ¸í‰…­É½Õ¹èŒÄÐÉ„ÉŒí‰½àµÍ¡…‘½ÜèÄÉÁà€À€ÌÉÁà€ŒÀÀÀáô¹¡•…‘íÁ…‘‘¥¹œèÄÙÁà€ÄáÁà€áÁàí‰½É‘•Èµ‰½ÑÑ½´èÅÁàÍ½±¥€™™™™™˜ÈÑô¹Ñ¥Ñ±•í‘¥ÍÁ±…äé™±•àí…±¥¸µ¥Ñ•µÌé•¹Ñ•Èí©ÕÍÑ¥™äµ½¹Ñ•¹ÐéÍÁ…”µ‰•ÑÝ••¸í…ÀèÄÁÁáô¹Ñ¥Ñ±”ÍÑÉ½¹í™½¹ÐµÍ¥é”èÄåÁáô¹±½Í•í‰½É‘•ÈèÅÁàÍ½±¥€„å‰ŒÈÔÀí‰…­É½Õ¹èŒÈäÐÐÐÜí½±½ÈéÝ¡¥Ñ”í‰½É‘•ÈµÉ…‘¥ÕÌèåÁàíµ¥¸µÝ¥‘Ñ èÌáÁàíµ¥¸µ¡•¥¡ÐèÌáÁàíÕÉÍ½ÈéÁ½¥¹Ñ•Éô¹±¥¹­Íí‘¥ÍÁ±…äé™±•àí…ÀèÄÉÁàí™±•àµÝÉ…ÀéÝÉ…Àíµ…É¥¸èåÁà€À€ÕÁáô¹±¥¹­Ì…í½±½Èè…”ÕÔíÑ•áÐµ‘•½É…Ñ¥½¸é¹½¹”í™½¹ÐµÝ•¥¡ÐèØÀÁô¹Á½ÉÑ…°µ±¥¹­Ííµ…É¥¸èÀ€À€ÄÉÁàí½±½ÈèŒá™ˆÑ…„í™½¹ÐµÍ¥é”èÄÉÁáô¹Á½ÉÑ…°µ±¥¹­Ìèé‰•™½É•í½¹Ñ•¹Ðè‰•Ù¥”Á½ÉÑ…±Ìƒ
Ü€ˆí½±½Èè„åŒåŒÁô¹Á½ÉÑ…°µ±¥¹­Ì…í™½¹ÐµÝ•¥¡ÐèØÀÁô¹‘•Ñ…¥°µµ½‘•í‘¥ÍÁ±…äé™±•àí…±¥¸µ¥Ñ•µÌé•¹Ñ•Èí©ÕÍÑ¥™äµ½¹Ñ•¹ÐéÍÁ…”µ‰•ÑÝ••¸í…ÀèÄÉÁàíÝ¥‘Ñ èÄÀÀ”í‰½àµÍ¥é¥¹œé‰½É‘•Èµ‰½àíµ…É¥¸èÀ€À€ÄÁÁàíÁ…‘‘¥¹œèåÁà€ÄÅÁàí‰½É‘•ÈèÅÁàÍ½±¥€ŒàÝ‰ˆÀí‰½É‘•ÈµÉ…‘¥ÕÌèåÁàí‰…­É½Õ¹èŒÈÀÍˆÍí½±½Èè••˜á˜ÌíÕÉÍ½ÈéÁ½¥¹Ñ•Èí™½¹Ðé¥¹¡•É¥ÐíÑ•áÐµ…±¥¸é±•™Ñô¹‘•Ñ…¥°µµ½‘”ÍÑÉ½¹œ°¹‘•Ñ…¥°µµ½‘”Íµ…±±í‘¥ÍÁ±…äé‰±½­ô¹‘•Ñ…¥°µµ½‘”Íµ…±±íµ…É¥¸µÑ½ÀèÉÁàí½±½Èè„åŒåŒÁô¹‘•Ñ…¥°µµ½‘”€¹ÍÝ¥Ñ¡í™±•àé¹½¹”íµ¥¸µÝ¥‘Ñ èÐáÁàíÁ…‘‘¥¹œèÑÁà€ÝÁàí‰½É‘•ÈµÉ…‘¥ÕÌèääåÁàí‰…­É½Õ¹èŒÔäÙÙ„í½±½Èè™™˜íÑ•áÐµ…±¥¸é•¹Ñ•Èí™½¹ÐµÍ¥é”èÄÅÁáô¹‘•Ñ…¥°µµ½‘•m…É¥„µÁÉ•ÍÍ•ô‰ÑÉÕ”‰uí‰½É‘•Èµ½±½Èè‰™”åàí‰…­É½Õ¹èŒÈäÑÐÝô¹‘•Ñ…¥°µµ½‘•m…É¥„µÁÉ•ÍÍ•ô‰ÑÉÕ”‰t€¹ÍÝ¥Ñ¡í‰…­É½Õ¹èŒÄØáˆØÉô¹Í•…É¡í‰½àµÍ¥é¥¹œé‰½É‘•Èµ‰½àíÝ¥‘Ñ èÄÀÀ”íµ¥¸µ¡•¥¡ÐèÐÍÁàí‰½É‘•ÈèÅÁàÍ½±¥€Œá…ˆÍ„äí‰½É‘•ÈµÉ…‘¥ÕÌèåÁàí‰…­É½Õ¹è˜Ñ˜å˜Øí½±½ÈèŒÄÔÌÀÌÈíÁ…‘‘¥¹œèáÁà€ÄÅÁàí™½¹Ðé¥¹¡•É¥Ñô¹Í•Ñ¥½¹Íí‘¥ÍÁ±…äé™±•àí…ÀèÝÁàí½Ù•É™±½Üµàé…ÕÑ¼íÁ…‘‘¥¹œèÄÁÁà€ÄáÁàí‰½É‘•Èµ‰½ÑÑ½´èÅÁàÍ½±¥€™™™™™˜ÈÁô¹Í•Ñ¥½¹í™±•àé¹½¹”í‰½É‘•ÈèÅÁàÍ½±¥€ŒÜäå„äÀí‰½É‘•ÈµÉ…‘¥ÕÌèääåÁàí‰…­É½Õ¹éÑÉ…¹ÍÁ…É•¹Ðí½±½Èè‘••‰”ÔíÁ…‘‘¥¹œèÝÁà€ÄÅÁàíÕÉÍ½ÈéÁ½¥¹Ñ•Èí™½¹Ðé¥¹¡•É¥Ñô¹Í•Ñ¥½¹m…É¥„µÁÉ•ÍÍ•ô‰ÑÉÕ”‰uí‰…­É½Õ¹è‰™”åàí½±½ÈèŒÄÔÌÔÉí‰½É‘•Èµ½±½Èè‰™”åàí™½¹ÐµÝ•¥¡ÐèÜÀÁô¹ÍÕµµ…ÉåíÁ…‘‘¥¹œèáÁà€ÄáÁàí½±½Èè„åŒåŒÀí™½¹ÐµÍ¥é”èÄÉÁáô¹É½ÝÍí½Ù•É™±½Üé…ÕÑ¼í™±•àèÄíÁ…‘‘¥¹œèÀ€ÄÉÁà€ÄÑÁáô¹É½Ýí‘¥ÍÁ±…äé™±•àí…±¥¸µ¥Ñ•µÌé•¹Ñ•Èí…ÀèáÁàíµ…É¥¸èÕÁà€Àí‰½É‘•ÈèÅÁàÍ½±¥€™™™™™˜ÈÈí‰½É‘•ÈµÉ…‘¥ÕÌèÄÁÁàí‰…­É½Õ¹èŒÈÀÍˆÍ‘ô¹‘•Ñ…¥±í™±•àèÄíµ¥¸µÝ¥‘Ñ èÀí‘¥ÍÁ±…äé™±•àí™±•àµ‘¥É•Ñ¥½¸é½±Õµ¸í…±¥¸µ¥Ñ•µÌé™±•àµÍÑ…ÉÐí…ÀèÉÁàíÁ…‘‘¥¹œèåÁà€ÄÅÁàí‰½É‘•ÈèÀí‰…­É½Õ¹éÑÉ…¹ÍÁ…É•¹Ðí½±½Èé¥¹¡•É¥ÐíÑ•áÐµ…±¥¸é±•™ÐíÕÉÍ½ÈéÁ½¥¹Ñ•Èí™½¹Ðé¥¹¡•É¥Ñô¹É½Üµ¥½¹í™±•àé¹½¹”íÝ¥‘Ñ èÈÁÁàí¡•¥¡ÐèÈÁÁàíµ…É¥¸µ±•™ÐèáÁàí½±½Èè‰™”åáô¹¹…µ•í™½¹ÐµÝ•¥¡ÐèØÔÀíÝ¡¥Ñ”µÍÁ…”é¹½ÝÉ…Àí½Ù•É™±½Üé¡¥‘‘•¸íÑ•áÐµ½Ù•É™±½Üé•±±¥ÁÍ¥Ìíµ…àµÝ¥‘Ñ èÄÀÀ•ô¹µ•Ñ…í½±½Èè„åŒÕ‰í™½¹ÐµÍ¥é”èÄÅÁàí½Ù•É™±½Üé¡¥‘‘•¸íÑ•áÐµ½Ù•É™±½Üé•±±¥ÁÍ¥ÌíÝ¡¥Ñ”µÍÁ…”é¹½ÝÉ…Àíµ…àµÝ¥‘Ñ èÄÀÀ•ô¹ÍÑ…Ñ•í™±•àé¹½¹”í™½¹ÐµÍ¥é”èÄÅÁàí½±½Èè‘”á‘˜íµ…àµÝ¥‘Ñ èÄÈÁÁàí½Ù•É™±½Üé¡¥‘‘•¸íÑ•áÐµ½Ù•É™±½Üé•±±¥ÁÍ¥ÌíÝ¡¥Ñ”µÍÁ…”é¹½ÝÉ…Áô¹Ñ½±•í™±•àé¹½¹”íµ¥¸µÝ¥‘Ñ èÐÉÁàíµ¥¸µ¡•¥¡ÐèÌáÁàíµ…É¥¸µÉ¥¡ÐèÕÁàí‰½É‘•ÈèÅÁàÍ½±¥€ŒàÝ‰ˆÀí‰½É‘•ÈµÉ…‘¥ÕÌèáÁàí‰…­É½Õ¹èŒÌÄÔäÑí½±½ÈéÝ¡¥Ñ”íÕÉÍ½ÈéÁ½¥¹Ñ•Éô¹Ñ½±•m‘¥Í…‰±•‘uí½Á…¥Ñäè¸ÐÔíÕÉÍ½Èé‘•™…Õ±Ñô¹µ½É•í‘¥ÍÁ±…äé‰±½¬íÝ¥‘Ñ èÄÀÀ”íµ…É¥¸èáÁà€ÀíÁ…‘‘¥¹œèÄÁÁàí‰½É‘•ÈèÅÁàÍ½±¥€ŒàÝ‰ˆÀí‰½É‘•ÈµÉ…‘¥ÕÌèáÁàí‰…­É½Õ¹èŒÌÄÔäÑí½±½ÈéÝ¡¥Ñ”íÕÉÍ½ÈéÁ½¥¹Ñ•Éô¹•µÁÑåíÁ…‘‘¥¹œèÈáÁà€ÄÁÁàíÑ•áÐµ…±¥¸é•¹Ñ•Èí½±½ÈèˆáÅŒáõµ•‘¥„¡µ…àµÝ¥‘Ñ èÔÐÁÁà¥ì¹¡•…‘íÁ…‘‘¥¹œèÄÅÁà€ÄÉÁà€ÙÁáô¹Í•Ñ¥½¹ÍíÁ…‘‘¥¹œèáÁà€ÄÉÁáô¹É½ÝÍíÁ…‘‘¥¹œèÀ€áÁà€ÄÁÁáô¹ÍÑ…Ñ•íµ…àµÝ¥‘Ñ èÜÑÁáõôœì4(€€€½¹ÍÐÍÉ¥´€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€ÍÉ¥´¹±…ÍÍ9…µ”€ô€ÍÉ¥´œì4(€€€ÍÉ¥´¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøÑ¡¥Ì¹}±½Í” ¤¤ì4(€€€½¹ÍÐ‘É…Ý•È€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð Í•Ñ¥½¸œ¤ì4(€€€‘É…Ý•È¹±…ÍÍ9…µ”€ô€‘É…Ý•Èœì4(€€€‘É…Ý•È¹Í•ÑÑÑÉ¥‰ÕÑ” É½±”œ°€‘¥…±½œœ¤ì4(€€€‘É…Ý•È¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µµ½‘…°œ°€ÑÉÕ”œ¤ì4(€€€‘É…Ý•È¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°€•Ù¥•Ì…¹Í•¹Í½ÉÌœ¤ì4(€€€½¹ÍÐ¡•…€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ¡•…‘•Èœ¤ì4(€€€¡•…¹±…ÍÍ9…µ”€ô€¡•…œì4(€€€½¹ÍÐÑ¥Ñ±”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€Ñ¥Ñ±”¹±…ÍÍ9…µ”€ô€Ñ¥Ñ±”œì4(€€€½¹ÍÐ¡•…‘¥¹œ€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÑÉ½¹œœ¤ì4(€€€¡•…‘¥¹œ¹Ñ•áÑ½¹Ñ•¹Ð€ô€!½µ”½¹ÑÉ½±Ìœì4(€€€½¹ÍÐ±½Í”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€±½Í”¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€±½Í”¹±…ÍÍ9…µ”€ô€±½Í”œì4(€€€±½Í”¹Ñ•áÑ½¹Ñ•¹Ð€ô€Ÿ\œì4(€€€±½Í”¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°€±½Í”‘•Ù¥•Ì…¹Í•¹Í½ÉÌœ¤ì4(€€€±½Í”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøÑ¡¥Ì¹}±½Í” ¤¤ì4(€€€Ñ¥Ñ±”¹…ÁÁ•¹¡¡•…‘¥¹œ°±½Í”¤ì4(€€€½¹ÍÐ±¥¹­Ì€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ¹…Øœ¤ì4(€€€±¥¹­Ì¹±…ÍÍ9…µ”€ô€±¥¹­Ìœì4(€€€™½È€¡½¹ÍÐm±…‰•°°¡É•™t½˜l4(€€€€€l1¥Ù”!½µ”œ°€œ½Í•½¹µ™±½½È½±¥Ù”t°l1…å½ÕÐMÑÕ‘¥¼œ°€œ½Í•½¹µ™±½½È½ÍÑÕ‘¥¼t°4(€€€€€lMåÍÑ•´!•…±Ñ œ°€œ½Í•½¹µ™±½½È½¡•…±Ñ t°l5…¥¸…Í¡‰½…Éœ°€œ½‘…Í¡‰½…Éµ‘…Í¡‰½…É¼Àt°4(€€€t¤ì4(€€€€€½¹ÍÐ±¥¹¬€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð „œ¤ì4(€€€€€±¥¹¬¹¡É•˜€ô¡É•˜ì4(€€€€€±¥¹¬¹Ñ•áÑ½¹Ñ•¹Ð€ô±…‰•°ì4(€€€€€±¥¹­Ì¹…ÁÁ•¹¡±¥¹¬¤ì4(€€€ô4(€€€½¹ÍÐÁ½ÉÑ…±1¥¹­Ì€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ¹…Øœ¤ì4(€€€Á½ÉÑ…±1¥¹­Ì¹±…ÍÍ9…µ”€ô€±¥¹­ÌÁ½ÉÑ…°µ±¥¹­Ìœì4(€€€Á½ÉÑ…±1¥¹­Ì¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°€=™™¥¥…°‘•Ù¥”Ý•ˆÁ½ÉÑ…±Ìœ¤ì4(€€€™½È€¡½¹ÍÐm±…‰•°°¡É•™t½˜l4(€€€€€lÉ•…µ”œ°€¡ÑÑÁÌè¼½Íµ…ÉÑ¡½µ”¹‘É•…µ”¹Ñ• ¼t°4(€€€€€l•¼œ°€¡ÑÑÀè¼½ÑÁ±¥¹­‘•¼¹¹•Ð¼t°4(€€€t¤ì4(€€€€€½¹ÍÐ±¥¹¬€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð „œ¤ì4(€€€€€±¥¹¬¹¡É•˜€ô¡É•˜ì4(€€€€€±¥¹¬¹Ñ…É•Ð€ô€}‰±…¹¬œì4(€€€€€±¥¹¬¹É•°€ô€¹½½Á•¹•È¹½É•™•ÉÉ•Èœì4(€€€€€±¥¹¬¹Ñ•áÑ½¹Ñ•¹Ð€ô±…‰•°ì4(€€€€€Á½ÉÑ…±1¥¹­Ì¹…ÁÁ•¹¡±¥¹¬¤ì4(€€€ô4(€€€½¹ÍÐ‘•Ñ…¥±5½‘”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€‘•Ñ…¥±5½‘”¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€‘•Ñ…¥±5½‘”¹±…ÍÍ9…µ”€ô€‘•Ñ…¥°µµ½‘”œì4(€€€‘•Ñ…¥±5½‘”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøÍ•Ñ•Ñ…¥±Y¥Í¥‰¥±¥Ñä …É½½µÉ…™Ñ•Ñ…¥±ÍY¥Í¥‰±”¤¤ì4(€€€½¹ÍÐ‘•Ñ…¥±½Áä€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÁ…¸œ¤ì4(€€€½¹ÍÐ‘•Ñ…¥±Q¥Ñ±”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÑÉ½¹œœ¤ì4(€€€‘•Ñ…¥±Q¥Ñ±”¹Ñ•áÑ½¹Ñ•¹Ð€ô€M¡½Ü½‰©•Ð‘•Ñ…¥±Ì½¸Á±…¸œì4(€€€½¹ÍÐ‘•Ñ…¥±!¥¹Ð€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð Íµ…±°œ¤ì4(€€€‘•Ñ…¥±!¥¹Ð¹Ñ•áÑ½¹Ñ•¹Ð€ô€9…µ•Ì°±¥Ù”ÍÑ…Ñ•Ì°…¹•¹Ñ¥Ñä%Ìœì4(€€€‘•Ñ…¥±½Áä¹…ÁÁ•¹¡‘•Ñ…¥±Q¥Ñ±”°‘•Ñ…¥±!¥¹Ð¤ì4(€€€½¹ÍÐ‘•Ñ…¥±MÝ¥Ñ €ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÁ…¸œ¤ì4(€€€‘•Ñ…¥±MÝ¥Ñ ¹±…ÍÍ9…µ”€ô€ÍÝ¥Ñ œì4(€€€‘•Ñ…¥±5½‘”¹…ÁÁ•¹¡‘•Ñ…¥±½Áä°‘•Ñ…¥±MÝ¥Ñ ¤ì4(€€€½¹ÍÐÍ•…É €ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ¥¹ÁÕÐœ¤ì4(€€€Í•…É ¹ÑåÁ”€ô€Í•…É œì4(€€€Í•…É ¹±…ÍÍ9…µ”€ô€Í•…É œì4(€€€Í•…É ¹Á±…•¡½±‘•È€ô€M•…É •Ù•Éä•¹Ñ¥Ñä°É½½´°½È‘•Ù¥”œì4(€€€Í•…É ¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°€M•…É ‘•Ù¥•Ì…¹Í•¹Í½ÉÌœ¤ì4(€€€Í•…É ¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¥¹ÁÕÐœ°€ ¤€ôøìÑ¡¥Ì¹}±¥µ¥Ð€ô€àÀìÑ¡¥Ì¹}É•¹‘•ÉI½ÝÌ ¤ìô¤ì4(€€€¡•…¹…ÁÁ•¹¡Ñ¥Ñ±”°±¥¹­Ì°Á½ÉÑ…±1¥¹­Ì°‘•Ñ…¥±5½‘”°Í•…É ¤ì4(€€€½¹ÍÐÍ•Ñ¥½¹Ì€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€Í•Ñ¥½¹Ì¹±…ÍÍ9…µ”€ô€Í•Ñ¥½¹Ìœì4(€€€½¹ÍÐÍÕµµ…Éä€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€ÍÕµµ…Éä¹±…ÍÍ9…µ”€ô€ÍÕµµ…Éäœì4(€€€½¹ÍÐÉ½ÝÌ€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€É½ÝÌ¹±…ÍÍ9…µ”€ô€É½ÝÌœì4(€€€‘É…Ý•È¹…ÁÁ•¹¡¡•…°Í•Ñ¥½¹Ì°ÍÕµµ…Éä°É½ÝÌ¤ì4(€€€É½½Ð¹…ÁÁ•¹¡ÍÑå±”°ÍÉ¥´°‘É…Ý•È¤ì4(€€€‘½Õµ•¹Ð¹‰½‘ä¹…ÁÁ•¹¡Á½ÉÑ…°¤ì4(€€€‘½Õµ•¹Ð¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ­•å‘½Ý¸œ°Ñ¡¥Ì¹}½¹-•å½Ý¸¤ì4(€€€Ñ¡¥Ì¹}Á½ÉÑ…°€ôÁ½ÉÑ…°ì4(€€€Ñ¡¥Ì¹}Í•Ñ¥½¹Ì€ôÍ•Ñ¥½¹Ìì4(€€€Ñ¡¥Ì¹}ÍÕµµ…Éä€ôÍÕµµ…Éäì4(€€€Ñ¡¥Ì¹}É½ÝÌ€ôÉ½ÝÌì4(€€€Ñ¡¥Ì¹}Í•…É €ôÍ•…É ì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±Q½±”€ô‘•Ñ…¥±5½‘”ì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±MÝ¥Ñ €ô‘•Ñ…¥±MÝ¥Ñ ì4(€€€Ñ¡¥Ì¹}É•¹‘•É•Ñ…¥±Q½±” ¤ì4(€€€Ñ¡¥Ì¹}É•¹‘•ÉM•Ñ¥½¹Ì ¤ì4(€€€Ñ¡¥Ì¹}É•¹‘•ÉI½ÝÌ ¤ì4(€€€Í•…É ¹™½ÕÌ ¤ì4(€€€Ñ¡¥Ì¹}±½…‘I•¥ÍÑÉä ¤ì4(€ô4(4(€}É•¹‘•É•Ñ…¥±Q½±” ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}‘•Ñ…¥±Q½±”ñð€…Ñ¡¥Ì¹}‘•Ñ…¥±MÝ¥Ñ ¤É•ÑÕÉ¸ì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±Q½±”¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µÁÉ•ÍÍ•œ°MÑÉ¥¹œ¡É½½µÉ…™Ñ•Ñ…¥±ÍY¥Í¥‰±”¤¤ì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±Q½±”¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°É½½µÉ…™Ñ•Ñ…¥±ÍY¥Í¥‰±”4(€€€€€€ü€!¥‘”½‰©•Ð‘•Ñ…¥±Ì½¸Á±…¸œ€è€M¡½Ü½‰©•Ð‘•Ñ…¥±Ì½¸Á±…¸œ¤ì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±MÝ¥Ñ ¹Ñ•áÑ½¹Ñ•¹Ð€ôÉ½½µÉ…™Ñ•Ñ…¥±ÍY¥Í¥‰±”€ü€=8œ€è€=œì4(€ô4(4(€…Íå¹Œ}±½…‘I•¥ÍÑÉä ¤ì4(€€€¥˜€¡ÑåÁ•½˜Ñ¡¥Ì¹}¡…ÍÌü¹…±±]L€„ôô€™Õ¹Ñ¥½¸œ¤É•ÑÕÉ¸ì4(€€€½¹ÍÐÉ•ÅÕ•ÍÑÌ€ôl½¹™¥œ½•¹Ñ¥Ñå}É•¥ÍÑÉä½±¥ÍÐœ°€½¹™¥œ½‘•Ù¥•}É•¥ÍÑÉä½±¥ÍÐœ°€½¹™¥œ½…É•…}É•¥ÍÑÉä½±¥ÍÐtì4(€€€½¹ÍÐÉ•ÍÕ±ÑÌ€ô…Ý…¥ÐAÉ½µ¥Í”¹…±±M•ÑÑ±•¡É•ÅÕ•ÍÑÌ¹µ…À¡ÑåÁ”€ôøÑ¡¥Ì¹}¡…ÍÌ¹…±±]L¡ìÑåÁ”ô¤¤¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}Á½ÉÑ…°¤É•ÑÕÉ¸ì4(€€€mÑ¡¥Ì¹}É•¥ÍÑÉä°Ñ¡¥Ì¹}‘•Ù¥•Ì°Ñ¡¥Ì¹}…É•…Ít€ôÉ•ÍÕ±ÑÌ¹µ…À¡É•ÍÕ±Ð€ôø4(€€€€€É•ÍÕ±Ð¹ÍÑ…ÑÕÌ€ôôô€™Õ±™¥±±•œ€˜˜ÉÉ…ä¹¥ÍÉÉ…ä¡É•ÍÕ±Ð¹Ù…±Õ”¤€üÉ•ÍÕ±Ð¹Ù…±Õ”€èmt¤ì4(€€€Ñ¡¥Ì¹}É•¹‘•ÉI½ÝÌ ¤ì4(€ô4(4(€}É•¹‘•ÉM•Ñ¥½¹Ì ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}Í•Ñ¥½¹Ì¤É•ÑÕÉ¸ì4(€€€Ñ¡¥Ì¹}Í•Ñ¥½¹Ì¹É•Á±…•¡¥±‘É•¸ ¤ì4(€€€½¹ÍÐ¡½¥•Ì€ôml½¸µÁ±…¸œ°€=¸Á±…¸t°l…±°œ°€±°•¹Ñ¥Ñ¥•Ìt°4(€€€€€€¸¸¸¡ÉÉ…ä¹¥ÍÉÉ…ä¡Ñ¡¥Ì¹}½¹™¥œü¹Í•Ñ¥½¹Ì¤€üÑ¡¥Ì¹}½¹™¥œ¹Í•Ñ¥½¹Ì4(€€€€€€€€¹™¥±Ñ•È¡Í•Ñ¥½¸€ôø¥Í=‰©•Ð¡Í•Ñ¥½¸¤€˜˜ÑåÁ•½˜Í•Ñ¥½¸¹Ñ¥Ñ±”€ôôô€ÍÑÉ¥¹œœ€˜˜ÉÉ…ä¹¥ÍÉÉ…ä¡Í•Ñ¥½¸¹•¹Ñ¥Ñ¥•Ì¤¤4(€€€€€€€€¹µ…À¡Í•Ñ¥½¸€ôømÍ•Ñ¥½¸¹Ñ¥Ñ±”°Í•Ñ¥½¸¹Ñ¥Ñ±•t¤€èmt¥tì4(€€€™½È€¡½¹ÍÐm­•ä°±…‰•±t½˜¡½¥•Ì¤ì4(€€€€€½¹ÍÐ‰ÕÑÑ½¸€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€€€‰ÕÑÑ½¸¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€€€‰ÕÑÑ½¸¹±…ÍÍ9…µ”€ô€Í•Ñ¥½¸œì4(€€€€€‰ÕÑÑ½¸¹Ñ•áÑ½¹Ñ•¹Ð€ô±…‰•°ì4(€€€€€‰ÕÑÑ½¸¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µÁÉ•ÍÍ•œ°MÑÉ¥¹œ¡Ñ¡¥Ì¹}Í•Ñ¥½¸€ôôô­•ä¤¤ì4(€€€€€‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì4(€€€€€€€Ñ¡¥Ì¹}Í•Ñ¥½¸€ô­•äì4(€€€€€€€Ñ¡¥Ì¹}±¥µ¥Ð€ô€àÀì4(€€€€€€€Ñ¡¥Ì¹}É•¹‘•ÉM•Ñ¥½¹Ì ¤ì4(€€€€€€€Ñ¡¥Ì¹}É•¹‘•ÉI½ÝÌ ¤ì4(€€€€€ô¤ì4(€€€€€Ñ¡¥Ì¹}Í•Ñ¥½¹Ì¹…ÁÁ•¹¡‰ÕÑÑ½¸¤ì4(€€€ô4(€ô4(4(€}…Ñ…±½œ ¤ì4(€€€½¹ÍÐÍÑ…Ñ•Ì€ôÑ¡¥Ì¹}¡…ÍÌü¹ÍÑ…Ñ•Ìñðíôì4(€€€½¹ÍÐ‰å%€ô¹•Ü5…À ¤ì4(€€€™½È€¡½¹ÍÐm•¹Ñ¥Ñå%°ÍÑ…Ñ•t½˜=‰©•Ð¹•¹ÑÉ¥•Ì¡ÍÑ…Ñ•Ì¤¤ì4(€€€€€‰å%¹Í•Ð¡•¹Ñ¥Ñå%°ì•¹Ñ¥Ñå%°¹…µ”èÍÑ…Ñ”¹…ÑÑÉ¥‰ÕÑ•Ìü¹™É¥•¹‘±å}¹…µ”ñð•¹Ñ¥Ñå%°4(€€€€€€€ÍÑ…Ñ”èÍÑ…Ñ”¹ÍÑ…Ñ”°‘¥Í…‰±•è™…±Í”°…É•„è€œœ°‘½µ…¥¸è•¹Ñ¥Ñå%¹ÍÁ±¥Ð œ¸œ¥lÁtô¤ì4(€€€ô4(€€€½¹ÍÐ…É•…Ì€ô¹•Ü5…À¡Ñ¡¥Ì¹}…É•…Ì¹µ…À¡…É•„€ôøm…É•„¹…É•…}¥°…É•„¹¹…µ•t¤¤ì4(€€€½¹ÍÐ‘•Ù¥•Ì€ô¹•Ü5…À¡Ñ¡¥Ì¹}‘•Ù¥•Ì¹µ…À¡‘•Ù¥”€ôøm‘•Ù¥”¹¥°‘•Ù¥•t¤¤ì4(€€€™½È€¡½¹ÍÐ•¹Ñ¥Ñä½˜Ñ¡¥Ì¹}É•¥ÍÑÉä¤ì4(€€€€€¥˜€¡ÑåÁ•½˜•¹Ñ¥Ñä¹•¹Ñ¥Ñå}¥€„ôô€ÍÑÉ¥¹œœ¤½¹Ñ¥¹Õ”ì4(€€€€€½¹ÍÐÉ•½É€ô‰å%¹•Ð¡•¹Ñ¥Ñä¹•¹Ñ¥Ñå}¥¤ñðì•¹Ñ¥Ñå%è•¹Ñ¥Ñä¹•¹Ñ¥Ñå}¥°4(€€€€€€€¹…µ”è•¹Ñ¥Ñä¹•¹Ñ¥Ñå}¥°ÍÑ…Ñ”è€‘¥Í…‰±•œ°‘¥Í…‰±•èÑÉÕ”°4(€€€€€€€…É•„è€œœ°‘½µ…¥¸è•¹Ñ¥Ñä¹•¹Ñ¥Ñå}¥¹ÍÁ±¥Ð œ¸œ¥lÁtôì4(€€€€€É•½É¹¹…µ”€ô•¹Ñ¥Ñä¹¹…µ”ñð•¹Ñ¥Ñä¹½É¥¥¹…±}¹…µ”ñðÉ•½É¹¹…µ”ì4(€€€€€É•½É¹‘¥Í…‰±•€ô	½½±•…¸¡•¹Ñ¥Ñä¹‘¥Í…‰±•‘}‰ä¤ñð€…‰å%¹¡…Ì¡•¹Ñ¥Ñä¹•¹Ñ¥Ñå}¥¤ì4(€€€€€É•½É¹…É•„€ô…É•…Ì¹•Ð¡•¹Ñ¥Ñä¹…É•…}¥ñð‘•Ù¥•Ì¹•Ð¡•¹Ñ¥Ñä¹‘•Ù¥•}¥¤ü¹…É•…}¥¤ñð€œœì4(€€€€€‰å%¹Í•Ð¡•¹Ñ¥Ñä¹•¹Ñ¥Ñå}¥°É•½É¤ì4(€€€ô4(€€€½¹ÍÐ‰½Õ¹€ô¹•Ü5…À ¡ÉÉ…ä¹¥ÍÉÉ…ä¡Ñ¡¥Ì¹}½¹™¥œü¹‰½Õ¹‘}½‰©•ÑÌ¤€üÑ¡¥Ì¹}½¹™¥œ¹‰½Õ¹‘}½‰©•ÑÌ€èmt¤4(€€€€€€¹™¥±Ñ•È¡¥Ñ•´€ôø¥Í=‰©•Ð¡¥Ñ•´¤€˜˜ÑåÁ•½˜¥Ñ•´¹•¹Ñ¥Ñå}¥€ôôô€ÍÑÉ¥¹œœ¤4(€€€€€€¹µ…À¡¥Ñ•´€ôøm¥Ñ•´¹•¹Ñ¥Ñå}¥°¥Ñ•µt¤¤ì4(€€€™½È€¡½¹ÍÐÉ•½É½˜‰å%¹Ù…±Õ•Ì ¤¤ì4(€€€€€½¹ÍÐ¥Ñ•´€ô‰½Õ¹¹•Ð¡É•½É¹•¹Ñ¥Ñå%¤ì4(€€€€€¥˜€¡¥Ñ•´¤É•½É¹¹…µ”€ô¥Ñ•´¹±…‰•°ñðÉ•½É¹¹…µ”ì4(€€€€€É•½É¹½¹A±…¸€ô	½½±•…¸¡¥Ñ•´¤ì4(€€€€€É•½É¹¥½¸€ô¥Ñ•´ü¹¥½¸ñð€œœì4(€€€ô4(€€€É•ÑÕÉ¸l¸¸¹‰å%¹Ù…±Õ•Ì ¥tì4(€ô4(4(€}É•¹‘•ÉI½ÝÌ ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}Á½ÉÑ…°ñð€…Ñ¡¥Ì¹}É½ÝÌ¤É•ÑÕÉ¸ì4(€€€½¹ÍÐÍ•…É €ôÑ¡¥Ì¹}Í•…É ¹Ù…±Õ”¹ÑÉ¥´ ¤¹Ñ½1½…±•1½Ý•É…Í” ¤ì4(€€€½¹ÍÐ™•…ÑÕÉ•€ôÉÉ…ä¹¥ÍÉÉ…ä¡Ñ¡¥Ì¹}½¹™¥œü¹Í•Ñ¥½¹Ì¤4(€€€€€€üÑ¡¥Ì¹}½¹™¥œ¹Í•Ñ¥½¹Ì¹™¥¹¡Í•Ñ¥½¸€ôø¥Í=‰©•Ð¡Í•Ñ¥½¸¤€˜˜Í•Ñ¥½¸¹Ñ¥Ñ±”€ôôôÑ¡¥Ì¹}Í•Ñ¥½¸¤€è¹Õ±°ì4(€€€½¹ÍÐ™•…ÑÕÉ•‘%‘Ì€ô¹•ÜM•Ð¡ÉÉ…ä¹¥ÍÉÉ…ä¡™•…ÑÕÉ•ü¹•¹Ñ¥Ñ¥•Ì¤€ü™•…ÑÕÉ•¹•¹Ñ¥Ñ¥•Ì€èmt¤ì4(€€€½¹ÍÐµ…Ñ¡•Ì€ôÑ¡¥Ì¹}…Ñ…±½œ ¤¹™¥±Ñ•È¡¥Ñ•´€ôøì4(€€€€€¥˜€¡Í•…É ¤É•ÑÕÉ¸€‘í¥Ñ•´¹¹…µ•ô€‘í¥Ñ•´¹•¹Ñ¥Ñå%‘ô€‘í¥Ñ•´¹…É•…ô€‘í¥Ñ•´¹‘½µ…¥¹õ€¹Ñ½1½…±•1½Ý•É…Í” ¤¹¥¹±Õ‘•Ì¡Í•…É ¤ì4(€€€€€¥˜€¡Ñ¡¥Ì¹}Í•Ñ¥½¸€ôôô€½¸µÁ±…¸œ¤É•ÑÕÉ¸¥Ñ•´¹½¹A±…¸ì4(€€€€€¥˜€¡Ñ¡¥Ì¹}Í•Ñ¥½¸€ôôô€…±°œ¤É•ÑÕÉ¸ÑÉÕ”ì4(€€€€€É•ÑÕÉ¸™•…ÑÕÉ•‘%‘Ì¹¡…Ì¡¥Ñ•´¹•¹Ñ¥Ñå%¤ì4(€€€ô¤¹Í½ÉÐ ¡„°ˆ¤€ôø€¡„¹…É•„ñð€éèœ¤¹±½…±•½µÁ…É”¡ˆ¹…É•„ñð€éèœ¤ñð4(€€€€€„¹‘½µ…¥¸¹±½…±•½µÁ…É”¡ˆ¹‘½µ…¥¸¤ñð„¹¹…µ”¹±½…±•½µÁ…É”¡ˆ¹¹…µ”¤¤ì4(€€€Ñ¡¥Ì¹}ÍÕµµ…Éä¹Ñ•áÑ½¹Ñ•¹Ð€ô€‘íµ…Ñ¡•Ì¹±•¹Ñ¡ô•¹Ñ¥Ñ¥•Ìƒ
Ü€‘íÑ¡¥Ì¹}É•¥ÍÑÉä¹±•¹Ñ €ü€¥¹±Õ‘¥¹œ‘¥Í…‰±•É•¥ÍÑÉ…Ñ¥½¹Ìœ€è€±¥Ù”ÍÑ…Ñ•Ìõ€ì4(€€€Ñ¡¥Ì¹}É½ÝÌ¹É•Á±…•¡¥±‘É•¸ ¤ì4(€€€™½È€¡½¹ÍÐ¥Ñ•´½˜µ…Ñ¡•Ì¹Í±¥” À°Ñ¡¥Ì¹}±¥µ¥Ð¤¤ì4(€€€€€½¹ÍÐÉ½Ü€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€€€É½Ü¹±…ÍÍ9…µ”€ô€É½Üœì4(€€€€€¥˜€¡¥Ñ•´¹¥½¸¤ì4(€€€€€€€½¹ÍÐ¥½¸€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ¡„µ¥½¸œ¤ì4(€€€€€€€¥½¸¹±…ÍÍ9…µ”€ô€É½Üµ¥½¸œì4(€€€€€€€¥½¸¹¥½¸€ô¥Ñ•´¹¥½¸ì4(€€€€€€€É½Ü¹…ÁÁ•¹¡¥½¸¤ì4(€€€€€ô4(€€€€€½¹ÍÐ‘•Ñ…¥°€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€€€‘•Ñ…¥°¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€€€‘•Ñ…¥°¹±…ÍÍ9…µ”€ô€‘•Ñ…¥°œì4(€€€€€½¹ÍÐ¹…µ”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÁ…¸œ¤ì4(€€€€€¹…µ”¹±…ÍÍ9…µ”€ô€¹…µ”œì4(€€€€€¹…µ”¹Ñ•áÑ½¹Ñ•¹Ð€ô¥Ñ•´¹¹…µ”ì4(€€€€€½¹ÍÐµ•Ñ„€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÁ…¸œ¤ì4(€€€€€µ•Ñ„¹±…ÍÍ9…µ”€ô€µ•Ñ„œì4(€€€€€µ•Ñ„¹Ñ•áÑ½¹Ñ•¹Ð€ô€‘í¥Ñ•´¹…É•„€ü¥Ñ•´¹…É•„€¬€œƒ
Ü€œ€è€œô‘í¥Ñ•´¹•¹Ñ¥Ñå%‘õ€ì4(€€€€€‘•Ñ…¥°¹…ÁÁ•¹¡¹…µ”°µ•Ñ„¤ì4(€€€€€‘•Ñ…¥°¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøìÑ¡¥Ì¹}±½Í” ¤ìÑ¡¥Ì¹}Í¡½Ý•Ñ…¥±Ì¡¥Ñ•´¹•¹Ñ¥Ñå%¤ìô¤ì4(€€€€€½¹ÍÐÍÑ…ÑÕÌ€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÁ…¸œ¤ì4(€€€€€ÍÑ…ÑÕÌ¹±…ÍÍ9…µ”€ô€ÍÑ…Ñ”œì4(€€€€€ÍÑ…ÑÕÌ¹Ñ•áÑ½¹Ñ•¹Ð€ô¥Ñ•´¹‘¥Í…‰±•€ü€¥Í…‰±•œ€è4(€€€€€€€lÍ•¹”œ°€‰ÕÑÑ½¸t¹¥¹±Õ‘•Ì¡¥Ñ•´¹‘½µ…¥¸¤€˜˜€…lÕ¹…Ù…¥±…‰±”œ°€Õ¹­¹½Ý¸t¹¥¹±Õ‘•Ì¡¥Ñ•´¹ÍÑ…Ñ”¤4(€€€€€€€€€€ü€I•…‘äœ€è¥Ñ•´¹ÍÑ…Ñ”ñð€U¹­¹½Ý¸œì4(€€€€€É½Ü¹…ÁÁ•¹¡‘•Ñ…¥°°ÍÑ…ÑÕÌ¤ì4(€€€€€¥˜€¡l±¥¡Ðœ°€ÍÝ¥Ñ œ°€™…¸œ°€¥¹ÁÕÑ}‰½½±•…¸t¹¥¹±Õ‘•Ì¡¥Ñ•´¹‘½µ…¥¸¤¤ì4(€€€€€€€½¹ÍÐÑ½±”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€€€€€Ñ½±”¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€€€€€Ñ½±”¹±…ÍÍ9…µ”€ô€Ñ½±”œì4(€€€€€€€Ñ½±”¹Ñ•áÑ½¹Ñ•¹Ð€ô€ŸŠ>ìœì4(€€€€€€€Ñ½±”¹Ñ¥Ñ±”€ôQ½±”€‘í¥Ñ•´¹¹…µ•õ€ì4(€€€€€€€Ñ½±”¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°Q½±”€‘í¥Ñ•´¹¹…µ•õ€¤ì4(€€€€€€€Ñ½±”¹‘¥Í…‰±•€ô¥Ñ•´¹‘¥Í…‰±•ñðlÕ¹…Ù…¥±…‰±”œ°€Õ¹­¹½Ý¸t¹¥¹±Õ‘•Ì¡¥Ñ•´¹ÍÑ…Ñ”¤ì4(€€€€€€€Ñ½±”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì4(€€€€€€€€€ÑÉäì4(€€€€€€€€€€€AÉ½µ¥Í”¹É•Í½±Ù”¡Ñ¡¥Ì¹}¡…ÍÌ¹…±±M•ÉÙ¥” ¡½µ•…ÍÍ¥ÍÑ…¹Ðœ°€Ñ½±”œ°ì•¹Ñ¥Ñå}¥è¥Ñ•´¹•¹Ñ¥Ñå%ô¤¤4(€€€€€€€€€€€€€€¹…Ñ   ¤€ôøÑ¡¥Ì¹}Í¡½Ý•Ñ…¥±Ì¡¥Ñ•´¹•¹Ñ¥Ñå%¤¤ì4(€€€€€€€€€ô…Ñ ìÑ¡¥Ì¹}Í¡½Ý•Ñ…¥±Ì¡¥Ñ•´¹•¹Ñ¥Ñå%¤ìô4(€€€€€€€ô¤ì4(€€€€€€€É½Ü¹…ÁÁ•¹¡Ñ½±”¤ì4(€€€€€ô•±Í”¥˜€¡Q%YQ%=9}MIY%L¹¡…Ì¡¥Ñ•´¹‘½µ…¥¸¤¤ì4(€€€€€€€½¹ÍÐÉÕ¸€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€€€€€ÉÕ¸¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€€€€€ÉÕ¸¹±…ÍÍ9…µ”€ô€Ñ½±”œì4(€€€€€€€ÉÕ¸¹Ñ•áÑ½¹Ñ•¹Ð€ô€IÕ¸œì4(€€€€€€€ÉÕ¸¹Ñ¥Ñ±”€ôIÕ¸€‘í¥Ñ•´¹¹…µ•õ€ì4(€€€€€€€ÉÕ¸¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°IÕ¸€‘í¥Ñ•´¹¹…µ•õ€¤ì4(€€€€€€€ÉÕ¸¹‘¥Í…‰±•€ô¥Ñ•´¹‘¥Í…‰±•ñðlÕ¹…Ù…¥±…‰±”œ°€Õ¹­¹½Ý¸t¹¥¹±Õ‘•Ì¡¥Ñ•´¹ÍÑ…Ñ”¤ì4(€€€€€€€ÉÕ¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì4(€€€€€€€€€ÑÉäì4(€€€€€€€€€€€AÉ½µ¥Í”¹É•Í½±Ù”¡Ñ¡¥Ì¹}¡…ÍÌ¹…±±M•ÉÙ¥”¡¥Ñ•´¹‘½µ…¥¸°Q%YQ%=9}MIY%L¹•Ð¡¥Ñ•´¹‘½µ…¥¸¤°4(€€€€€€€€€€€€€ì•¹Ñ¥Ñå}¥è¥Ñ•´¹•¹Ñ¥Ñå%ô¤¤¹…Ñ   ¤€ôøÑ¡¥Ì¹}Í¡½Ý•Ñ…¥±Ì¡¥Ñ•´¹•¹Ñ¥Ñå%¤¤ì4(€€€€€€€€€ô…Ñ ìÑ¡¥Ì¹}Í¡½Ý•Ñ…¥±Ì¡¥Ñ•´¹•¹Ñ¥Ñå%¤ìô4(€€€€€€€ô¤ì4(€€€€€€€É½Ü¹…ÁÁ•¹¡ÉÕ¸¤ì4(€€€€€ô4(€€€€€Ñ¡¥Ì¹}É½ÝÌ¹…ÁÁ•¹¡É½Ü¤ì4(€€€ô4(€€€¥˜€ …µ…Ñ¡•Ì¹±•¹Ñ ¤ì4(€€€€€½¹ÍÐ•µÁÑä€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð Àœ¤ì4(€€€€€•µÁÑä¹±…ÍÍ9…µ”€ô€•µÁÑäœì4(€€€€€•µÁÑä¹Ñ•áÑ½¹Ñ•¹Ð€ôÍ•…É €ü€9¼µ…Ñ¡¥¹œ‘•Ù¥•Ì½ÈÍ•¹Í½ÉÌ¸œ€è€9¼½¹ÑÉ½±Ì¥¸Ñ¡¥ÌÉ½ÕÀå•Ð¸œì4(€€€€€Ñ¡¥Ì¹}É½ÝÌ¹…ÁÁ•¹¡•µÁÑä¤ì4(€€€ô•±Í”¥˜€¡µ…Ñ¡•Ì¹±•¹Ñ €øÑ¡¥Ì¹}±¥µ¥Ð¤ì4(€€€€€½¹ÍÐµ½É”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€€€µ½É”¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€€€µ½É”¹±…ÍÍ9…µ”€ô€µ½É”œì4(€€€€€µ½É”¹Ñ•áÑ½¹Ñ•¹Ð€ôM¡½Üµ½É”€ ‘íµ…Ñ¡•Ì¹±•¹Ñ €´Ñ¡¥Ì¹}±¥µ¥ÑôÉ•µ…¥¹¥¹œ¥€ì4(€€€€€µ½É”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøìÑ¡¥Ì¹}±¥µ¥Ð€¬ô€àÀìÑ¡¥Ì¹}É•¹‘•ÉI½ÝÌ ¤ìô¤ì4(€€€€€Ñ¡¥Ì¹}É½ÝÌ¹…ÁÁ•¹¡µ½É”¤ì4(€€€ô4(€ô4(4(€}Í¡½Ý•Ñ…¥±Ì¡•¹Ñ¥Ñå%¤ì4(€€€Ñ¡¥Ì¹‘¥ÍÁ…Ñ¡Ù•¹Ð¡¹•ÜÕÍÑ½µÙ•¹Ð ¡…ÍÌµµ½É”µ¥¹™¼œ°ì4(€€€€€‰Õ‰‰±•ÌèÑÉÕ”°½µÁ½Í•èÑÉÕ”°‘•Ñ…¥°èì•¹Ñ¥Ñå%ô°4(€€€ô¤¤ì4(€ô4)ô4(4(¼¨¨4(€¨Á¥ÑÕÉ”µ•±•µ•¹ÑÌ½Ù•É±…ä¸Q¡”ÍÑ¥±°¥Ì™•Ñ¡•Ñ¡É½Õ Ñ¡”ÕÉÉ•¹Ð!4(€¨Í•ÍÍ¥½¸ì¹¼…µ•É„Ñ½­•¸½ÈÍ¹…ÁÍ¡½ÐUI0¥ÌÍÑ½É•¥¸ÁÕ‰±¥ŒM¥Ñ”…ÍÍ•ÑÌ¸4(€¨	…ÑÑ•Éä…µ•É…Ì…É”Ý½­•¸½¹±ä‰ä„Ñ…À½È„½¹™¥ÕÉ••Ù•¹ÐÍ•¹Í½È¸4(€¨!Ì¹…Ñ¥Ù”¥µ…”•±•µ•¹Ð½Ý¹ÌÍÑÉ•…´ÑÉ…¹ÍÁ½ÉÐ…¹É•‘•¹Ñ¥…±Ì¸4(€¨¼4)±…ÍÌI½½µÉ…™Ñ…µ•É…Q¡Õµ‰¹…¥°•áÑ•¹‘Ì!Q51±•µ•¹Ðì4(€½¹ÍÑÉÕÑ½È ¤ì4(€€€ÍÕÁ•È ¤ì4(€€€Ñ¡¥Ì¹…ÑÑ…¡M¡…‘½Ü¡ìµ½‘”è€½Á•¸œô¤ì4(€€€Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°€ô€Àì4(€€€Ñ¡¥Ì¹}¥µ…•-•ä€ô€œœì4(€€€Ñ¡¥Ì¹}Á•¹‘¥¹-•ä€ô€œœì4(€€€Ñ¡¥Ì¹}½‰©•ÑUÉ°€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±…ÍÑ…¥±ÕÉ”€ô€Àì4(€€€Ñ¡¥Ì¹}™…¥±•‘%µ…•-•ä€ô€œœì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±I•…‘ä€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±A•¹‘¥¹œ€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±ÉÉ½È€ô€1…Ñ•ÍÐ•Ù•¹ÐÕ¹…Ù…¥±…‰±”œì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±½½Ñ•È€ô€1QMPY9Pœì4(€€€Ñ¡¥Ì¹}¥µ…•1½…‘Q¥µ•È€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±¥Ù•I•…‘ä€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}±¥Ù•Q¥µ•È€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±¥Ù•MÑ…ÉÑ•‘Ð€ô€Àì4(€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘Ð€ô€Àì4(€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ô€œœì4(€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô€Àì4(€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑQÉ¥•ÉMÑ…Ñ•Ì€ô¹•Ü5…À ¤ì4(€€€Ñ¡¥Ì¹}•Ù•¹Ñ1¥Ù•U¹Ñ¥°€ô€Àì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑQ¥µ•È€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%€ô€œœì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÑÑ•µÁÑ•€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½È€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑM•ÅÕ•¹”€ô€Àì4(€€€Ñ¡¥Ì¹}Ù¥‘•½M…µÁ±”€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±…ÍÑY¥‘•½‘Ù…¹•Ð€ô€Àì4(€€€Ñ¡¥Ì¹}¡½±‘Q¥µ•È€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}¡•±€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±ÍY¥Í¥‰±”€ôÉ½½µÉ…™Ñ•Ñ…¥±ÍY¥Í¥‰±”ì4(€€€Ñ¡¥Ì¹}½¹•Ñ…¥±Y¥Í¥‰¥±¥Ñä€ô•Ù•¹Ð€ôøì4(€€€€€Ñ¡¥Ì¹}‘•Ñ…¥±ÍY¥Í¥‰±”€ô	½½±•…¸¡•Ù•¹Ð¹‘•Ñ…¥°ü¹Ù¥Í¥‰±”¤ì4(€€€€€Ñ¡¥Ì¹}É•™É•Í¡•Ñ…¥±Y¥Í¥‰¥±¥Ñä ¤ì4(€€€ôì4(€€€Ñ¡¥Ì¹}½¹•Ñ…¥±I•Í¥é”€ô€ ¤€ôøÑ¡¥Ì¹}É•™É•Í¡•Ñ…¥±A½Í¥Ñ¥½¸ ¤ì4(€ô4(4(€Í•Ñ½¹™¥œ¡½¹™¥œ¤ì4(€€€¥˜€ …¥Í=‰©•Ð¡½¹™¥œ¤ñðÑåÁ•½˜½¹™¥œ¹…µ•É…}•¹Ñ¥Ñä€„ôô€ÍÑÉ¥¹œœñð4(€€€€€€€€¡½¹™¥œ¹…µ•É…}•¹Ñ¥Ñä€˜˜€„½y…µ•É…p¹m„µèÀ´å}t¬¼¹Ñ•ÍÐ¡½¹™¥œ¹…µ•É…}•¹Ñ¥Ñä¤¤ñð4(€€€€€€€ÑåÁ•½˜½¹™¥œ¹¥µ…•}•¹Ñ¥Ñä€„ôô€ÍÑÉ¥¹œœñð4(€€€€€€€€¡½¹™¥œ¹¥µ…•}•¹Ñ¥Ñä€˜˜€„½y¥µ…•p¹m„µèÀ´å}t¬¼¹Ñ•ÍÐ¡½¹™¥œ¹¥µ…•}•¹Ñ¥Ñä¤¤ñð4(€€€€€€€€…l•Ù•¹Ðœ°€±¥Ù”œ°€±¥Ù•}…ÕÑ¼œ°€•Ù•¹Ñ}±¥Ù”œ°€½™™±¥¹”t¹¥¹±Õ‘•Ì¡½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€üü€•Ù•¹Ðœ¤ñð4(€€€€€€€€¡½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ì€„ôôÕ¹‘•™¥¹•€˜˜4(€€€€€€€€€€ …ÉÉ…ä¹¥ÍÉÉ…ä¡½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ì¤ñð½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ì¹±•¹Ñ €ø€Øñð4(€€€€€€€€€€€½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ì¹Í½µ”¡¥€ôøÑåÁ•½˜¥€„ôô€ÍÑÉ¥¹œœñð€„½y‰¥¹…Éå}Í•¹Í½Ép¹m„µèÀ´å}t¬¼¹Ñ•ÍÐ¡¥¤¤ñð4(€€€€€€€€€€€¹•ÜM•Ð¡½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ì¤¹Í¥é”€„ôô½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ì¹±•¹Ñ ¤¤¤ì4(€€€€€Ñ¡É½Ü¹•ÜÉÉ½È Q¡”I½½µÉ…™Ð…µ•É„Ñ¡Õµ‰¹…¥°¡…Ì…¸¥¹Ù…±¥•¹Ñ¥Ñä¸œ¤ì4(€€€ô4(€€€¥˜€¡Ñ¡¥Ì¹}½¹™¥œ€˜˜€¡Ñ¡¥Ì¹}½¹™¥œ¹…µ•É…}•¹Ñ¥Ñä€„ôô½¹™¥œ¹…µ•É…}•¹Ñ¥Ñäñð4(€€€€€€€Ñ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€„ôô½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”ñð4(€€€€€€€)M=8¹ÍÑÉ¥¹¥™ä¡Ñ¡¥Ì¹}½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ìñðmt¤€„ôô)M=8¹ÍÑÉ¥¹¥™ä¡½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ìñðmt¤¤¤ì4(€€€€€Ñ¡¥Ì¹}±½Í•Ù•¹Ñ]¥¹‘½Ü ¤ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹ÑQÉ¥•ÉMÑ…Ñ•Ì¹±•…È ¤ì4(€€€ô4(€€€Ñ¡¥Ì¹}½¹™¥œ€ô½¹™¥œì4(€€€¥˜€ …Ñ¡¥Ì¹}™É…µ”¤Ñ¡¥Ì¹}‰Õ¥± ¤ì4(€€€Ñ¡¥Ì¹}¹…µ”¹Ñ•áÑ½¹Ñ•¹Ð€ôÑåÁ•½˜½¹™¥œ¹Ñ¥Ñ±”€ôôô€ÍÑÉ¥¹œœ€ü½¹™¥œ¹Ñ¥Ñ±”€è€…µ•É„œì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±¹Ñ¥Ñä¹Ñ•áÑ½¹Ñ•¹Ð€ô½¹™¥œ¹…µ•É…}•¹Ñ¥Ñäñð½¹™¥œ¹¥µ…•}•¹Ñ¥Ñäñð€9¼…µ•É„•¹Ñ¥Ñäœì4(€€€Ñ¡¥Ì¹}™É…µ”¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°=Á•¸€‘íÑ¡¥Ì¹}¹…µ”¹Ñ•áÑ½¹Ñ•¹Ñô…µ•É„‘•Ñ…¥±Í€¤ì4(€€€Ñ¡¥Ì¹}É•™É•Í  ¤ì4(€ô4(4(€Í•Ð¡…ÍÌ¡Ù…±Õ”¤ì4(€€€Ñ¡¥Ì¹}¡…ÍÌ€ôÙ…±Õ”ì4(€€€Ñ¡¥Ì¹}É•™É•Í  ¤ì4(€ô4(4(€½¹¹•Ñ•‘…±±‰…¬ ¤ì4(€€€Ý¥¹‘½Ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•Èü¸¡Q%1}Y%M%	%1%Qe}Y9P°Ñ¡¥Ì¹}½¹•Ñ…¥±Y¥Í¥‰¥±¥Ñä¤ì4(€€€Ý¥¹‘½Ü¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•Èü¸ É•Í¥é”œ°Ñ¡¥Ì¹}½¹•Ñ…¥±I•Í¥é”¤ì4(€€€Ñ¡¥Ì¹}É•™É•Í¡•Ñ…¥±Y¥Í¥‰¥±¥Ñä ¤ì4(€€€Ñ¡¥Ì¹}É•™É•Í  ¤ì4(€ô4(4(€‘¥Í½¹¹•Ñ•‘…±±‰…¬ ¤ì4(€€€Ý¥¹‘½Ü¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•Èü¸¡Q%1}Y%M%	%1%Qe}Y9P°Ñ¡¥Ì¹}½¹•Ñ…¥±Y¥Í¥‰¥±¥Ñä¤ì4(€€€Ý¥¹‘½Ü¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•Èü¸ É•Í¥é”œ°Ñ¡¥Ì¹}½¹•Ñ…¥±I•Í¥é”¤ì4(€€€€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ì4(€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}¡½±‘Q¥µ•È¤ì4(€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¤ì4(€€€Ñ¡¥Ì¹}±½Í•Ù•¹Ñ]¥¹‘½Ü ¤ì4(€€€Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€Ñ¡¥Ì¹}É•Ù½­•%µ…” ¤ì4(€ô4(4(€}‰Õ¥± ¤ì4(€€€½¹ÍÐÍÑå±”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ÍÑå±”œ¤ì4(€€€ÍÑå±”¹Ñ•áÑ½¹Ñ•¹Ð€ô€œé¡½ÍÑí‘¥ÍÁ±…äé‰±½¬í‰½àµÍ¥é¥¹œé‰½É‘•Èµ‰½àíµ¥¸µÝ¥‘Ñ èÐÁÁàíµ¥¸µ¡•¥¡ÐèÐÁÁáô¹™É…µ•í‰½àµÍ¥é¥¹œé‰½É‘•Èµ‰½àí‘¥ÍÁ±…äé‰±½¬íÁ½Í¥Ñ¥½¸éÉ•±…Ñ¥Ù”íÝ¥‘Ñ èÄÀÀ”í¡•¥¡ÐèÄÀÀ”íµ¥¸µ¡•¥¡ÐèÐÁÁàí½Ù•É™±½Üé¡¥‘‘•¸íÁ…‘‘¥¹œèÀí‰½É‘•ÈèÉÁàÍ½±¥€”Ñ•‰‘˜í‰½É‘•ÈµÉ…‘¥ÕÌèåÁàí‰…­É½Õ¹èŒÄàÉ„ÉŒí½±½Èè™™˜í‰½àµÍ¡…‘½ÜèÀ€ÑÁà€ÄÕÁà€ŒÄÄÄàíÕÉÍ½ÈéÁ½¥¹Ñ•Èí™½¹Ðé¥¹¡•É¥ÐíÑ•áÐµ…±¥¸é±•™Ñô¹™É…µ”é…Ñ¥Ù•í™¥±Ñ•Èé‰É¥¡Ñ¹•ÍÌ Ä¸Äà¤íÑÉ…¹Í™½É´éÍ…±” ¸äàÔ¥ô¹µ•‘¥„°¹ÍÑ¥±°°¹±¥Ù•íÁ½Í¥Ñ¥½¸é…‰Í½±ÕÑ”í¥¹Í•ÐèÀíÝ¥‘Ñ èÄÀÀ”í¡•¥¡ÐèÄÀÀ•ô¹ÍÑ¥±±í½‰©•Ðµ™¥Ðé½Ù•Éô¹±¥Ù•í‘¥ÍÁ±…äé‰±½¬í½Ù•É™±½Üé¡¥‘‘•¸í½Á…¥ÑäèÀíÁ½¥¹Ñ•Èµ•Ù•¹ÑÌé¹½¹•ô¹Ù•¥±íÁ½Í¥Ñ¥½¸é…‰Í½±ÕÑ”í¥¹Í•ÐèÀí‰…­É½Õ¹é±¥¹•…ÈµÉ…‘¥•¹Ð ŒÀÀÀà±ÑÉ…¹ÍÁ…É•¹Ð€ÌØ”±ÑÉ…¹ÍÁ…É•¹Ð€ØÈ”°ŒÀÀÁ„¤íÁ½¥¹Ñ•Èµ•Ù•¹ÑÌé¹½¹•ô¹¡•…°¹™½½ÑíÁ½Í¥Ñ¥½¸é…‰Í½±ÕÑ”í±•™ÐèÝÁàíÉ¥¡ÐèÝÁàíèµ¥¹‘•àèÈí™½¹ÐèØÀÀ€ÄÁÁà¼Ä¸ÈÍåÍÑ•´µÕ¤±Í…¹ÌµÍ•É¥˜íÑ•áÐµÍ¡…‘½ÜèÀ€ÅÁà€ÍÁà€ŒÀÀÁô¹¡•…‘íÑ½ÀèÙÁàí½Ù•É™±½Üé¡¥‘‘•¸íÑ•áÐµ½Ù•É™±½Üé•±±¥ÁÍ¥ÌíÝ¡¥Ñ”µÍÁ…”é¹½ÝÉ…Áô¹™½½Ñí‰½ÑÑ½´èÙÁáô¹‘•Ñ…¥°µ•¹Ñ¥Ñåí‘¥ÍÁ±…äé¹½¹”íÁ½Í¥Ñ¥½¸é…‰Í½±ÕÑ”íèµ¥¹‘•àèÈÀí‰½àµÍ¥é¥¹œé‰½É‘•Èµ‰½àíÝ¥‘Ñ éµ…àµ½¹Ñ•¹Ðíµ…àµÝ¥‘Ñ èÄäÁÁàí½Ù•É™±½Üé¡¥‘‘•¸íÁ…‘‘¥¹œèÕÁà€ÝÁàí‰½É‘•ÈèÅÁàÍ½±¥€‘™˜å•˜í‰½É‘•ÈµÉ…‘¥ÕÌèÝÁàí‰…­É½Õ¹èŒÄÀÈÜÉ•˜Èí½±½ÈèŒá”á‘˜í‰½àµÍ¡…‘½ÜèÀ€ÍÁà€ÄÉÁà€ŒÀÜÄÜÅ‘ˆàíÑ•áÐµ½Ù•É™±½Üé•±±¥ÁÍ¥ÌíÝ¡¥Ñ”µÍÁ…”é¹½ÝÉ…ÀíÁ½¥¹Ñ•Èµ•Ù•¹ÑÌé¹½¹”í™½¹ÐèÔÀÀ€áÁà¼Ä¸ÈÕ¤µµ½¹½ÍÁ…”±M5½¹¼µI•Õ±…È±½¹Í½±…Ì±µ½¹½ÍÁ…”íÑ•áÐµÍ¡…‘½ÜèÀ€ÅÁà€ÉÁà€ŒÀÀÁôé¡½ÍÐ¡m‘…Ñ„µÍ¡½Üµ‘•Ñ…¥±Ìô‰ÑÉÕ”‰t¤€¹‘•Ñ…¥°µ•¹Ñ¥Ñåí‘¥ÍÁ±…äé‰±½­ôé¡½ÍÐ¡m‘…Ñ„µ‘•Ñ…¥°µÍ¥‘”ô‰É¥¡Ð‰t¤€¹‘•Ñ…¥°µ•¹Ñ¥Ñåí±•™Ðé…±Œ ÄÀÀ”€¬€ÝÁà¤íÑ½ÀèÔÀ”íÑÉ…¹Í™½É´éÑÉ…¹Í±…Ñ•d ´ÔÀ”¥ôé¡½ÍÐ¡m‘…Ñ„µ‘•Ñ…¥°µÍ¥‘”ô‰±•™Ð‰t¤€¹‘•Ñ…¥°µ•¹Ñ¥ÑåíÉ¥¡Ðé…±Œ ÄÀÀ”€¬€ÝÁà¤íÑ½ÀèÔÀ”íÑÉ…¹Í™½É´éÑÉ…¹Í±…Ñ•d ´ÔÀ”¥ôé¡½ÍÐ¡m‘…Ñ„µ‘•Ñ…¥°µÍ¥‘”ô‰Ñ½À‰t¤€¹‘•Ñ…¥°µ•¹Ñ¥Ñåí±•™ÐèÔÀ”í‰½ÑÑ½´é…±Œ ÄÀÀ”€¬€ÝÁà¤íÑÉ…¹Í™½É´éÑÉ…¹Í±…Ñ•` ´ÔÀ”¥ôé¡½ÍÐ¡m‘…Ñ„µ‘•Ñ…¥°µÍ¥‘”ô‰‰½ÑÑ½´‰t¤€¹‘•Ñ…¥°µ•¹Ñ¥Ñåí±•™ÐèÔÀ”íÑ½Àé…±Œ ÄÀÀ”€¬€ÝÁà¤íÑÉ…¹Í™½É´éÑÉ…¹Í±…Ñ•` ´ÔÀ”¥ô¹µ•ÍÍ…•íÁ½Í¥Ñ¥½¸é…‰Í½±ÕÑ”í¥¹Í•ÐèÈÕÁà€ÝÁà€ÈÁÁàí‘¥ÍÁ±…äé™±•àí…±¥¸µ¥Ñ•µÌé•¹Ñ•Èí©ÕÍÑ¥™äµ½¹Ñ•¹Ðé•¹Ñ•ÈíÑ•áÐµ…±¥¸é•¹Ñ•Èí½±½Èè”Å”å”Ìí™½¹ÐèÔÀÀ€ÄÁÁà¼Ä¸ÈÍåÍÑ•´µÕ¤±Í…¹ÌµÍ•É¥™ô¹ÍÑ¥±±m¡¥‘‘•¹t°¹µ•ÍÍ…•m¡¥‘‘•¹uí‘¥ÍÁ±…äé¹½¹•ôœì4(€€€½¹ÍÐ™É…µ”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰ÕÑÑ½¸œ¤ì4(€€€™É…µ”¹ÑåÁ”€ô€‰ÕÑÑ½¸œì4(€€€™É…µ”¹±…ÍÍ9…µ”€ô€™É…µ”œì4(€€€™É…µ”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±¥¬œ°€ ¤€ôøì4(€€€€€¥˜€¡Ñ¡¥Ì¹}¡•±¤ìÑ¡¥Ì¹}¡•±€ô™…±Í”ìÉ•ÑÕÉ¸ìô4(€€€€€Ñ¡¥Ì¹}…Ñ¥Ù…Ñ•…µ•É„ ¤ì4(€€€ô¤ì4(€€€™É…µ”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È Á½¥¹Ñ•É‘½Ý¸œ°•Ù•¹Ð€ôøì4(€€€€€¥˜€¡•Ù•¹Ð¹‰ÕÑÑ½¸€„ôô€À¤É•ÑÕÉ¸ì4(€€€€€Ñ¡¥Ì¹}¡•±€ô™…±Í”ì4(€€€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}¡½±‘Q¥µ•È¤ì4(€€€€€Ñ¡¥Ì¹}¡½±‘Q¥µ•È€ôÍ•ÑQ¥µ•½ÕÐ  ¤€ôøì4(€€€€€€€Ñ¡¥Ì¹}¡•±€ôÑÉÕ”ì4(€€€€€€€Ñ¡¥Ì¹}½Á•¹•Ñ…¥±Ì ¤ì4(€€€€€ô°€ÔÔÀ¤ì4(€€€ô¤ì4(€€€™½È€¡½¹ÍÐ¹…µ”½˜lÁ½¥¹Ñ•ÉÕÀœ°€Á½¥¹Ñ•É…¹•°œ°€Á½¥¹Ñ•É±•…Ù”t¤ì4(€€€€€™É…µ”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È¡¹…µ”°€ ¤€ôø±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}¡½±‘Q¥µ•È¤¤ì4(€€€ô4(€€€™É…µ”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ½¹Ñ•áÑµ•¹Ôœ°•Ù•¹Ð€ôøì4(€€€€€•Ù•¹Ð¹ÁÉ•Ù•¹Ñ•™…Õ±Ð ¤ì4(€€€€€Ñ¡¥Ì¹}½Á•¹•Ñ…¥±Ì ¤ì4(€€€ô¤ì4(€€€½¹ÍÐµ•‘¥„€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€µ•‘¥„¹±…ÍÍ9…µ”€ô€µ•‘¥„œì4(€€€½¹ÍÐÍÑ¥±°€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ¥µœœ¤ì4(€€€ÍÑ¥±°¹±…ÍÍ9…µ”€ô€ÍÑ¥±°œì4(€€€ÍÑ¥±°¹…±Ð€ô€œœì4(€€€ÍÑ¥±°¹¡¥‘‘•¸€ôÑÉÕ”ì4(€€€ÍÑ¥±°¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ±½…œ°€ ¤€ôøì4(€€€€€¥˜€ …Ñ¡¥Ì¹}½‰©•ÑUÉ°ñðÍÑ¥±°¹ÍÉŒ€„ôôÑ¡¥Ì¹}½‰©•ÑUÉ°¤É•ÑÕÉ¸ì4(€€€€€¥˜€ …ÍÑ¥±°¹¹…ÑÕÉ…±]¥‘Ñ ñð€…ÍÑ¥±°¹¹…ÑÕÉ…±!•¥¡Ð¤ìÑ¡¥Ì¹}ÍÑ¥±±…¥±• ¤ìÉ•ÑÕÉ¸ìô4(€€€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}¥µ…•1½…‘Q¥µ•È¤ì4(€€€€€Ñ¡¥Ì¹}¥µ…•1½…‘Q¥µ•È€ô¹Õ±°ì4(€€€€€Ñ¡¥Ì¹}Á•¹‘¥¹-•ä€ô€œœì4(€€€€€Ñ¡¥Ì¹}ÍÑ¥±±A•¹‘¥¹œ€ô™…±Í”ì4(€€€€€Ñ¡¥Ì¹}ÍÑ¥±±I•…‘ä€ôÑÉÕ”ì4(€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€ô¤ì4(€€€ÍÑ¥±°¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È •ÉÉ½Èœ°€ ¤€ôøì4(€€€€€¥˜€¡Ñ¡¥Ì¹}½‰©•ÑUÉ°€˜˜ÍÑ¥±°¹ÍÉŒ€ôôôÑ¡¥Ì¹}½‰©•ÑUÉ°¤Ñ¡¥Ì¹}ÍÑ¥±±…¥±• ¤ì4(€€€ô¤ì4(€€€½¹ÍÐÙ•¥°€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€Ù•¥°¹±…ÍÍ9…µ”€ô€Ù•¥°œì4(€€€½¹ÍÐ¹…µ”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€¹…µ”¹±…ÍÍ9…µ”€ô€¡•…œì4(€€€½¹ÍÐ™½½Ð€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€™½½Ð¹±…ÍÍ9…µ”€ô€™½½Ðœì4(€€€½¹ÍÐ‘•Ñ…¥±¹Ñ¥Ñä€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€‘•Ñ…¥±¹Ñ¥Ñä¹±…ÍÍ9…µ”€ô€‘•Ñ…¥°µ•¹Ñ¥Ñäœì4(€€€½¹ÍÐµ•ÍÍ…”€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‘¥Øœ¤ì4(€€€µ•ÍÍ…”¹±…ÍÍ9…µ”€ô€µ•ÍÍ…”œì4(€€€µ•‘¥„¹…ÁÁ•¹¡ÍÑ¥±°¤ì4(€€€™É…µ”¹…ÁÁ•¹¡µ•‘¥„°Ù•¥°°¹…µ”°™½½Ð°µ•ÍÍ…”¤ì4(€€€Ñ¡¥Ì¹Í¡…‘½ÝI½½Ð¹…ÁÁ•¹¡ÍÑå±”°™É…µ”°‘•Ñ…¥±¹Ñ¥Ñä¤ì4(€€€Ñ¡¥Ì¹}™É…µ”€ô™É…µ”ì4(€€€Ñ¡¥Ì¹}µ•‘¥„€ôµ•‘¥„ì4(€€€Ñ¡¥Ì¹}ÍÑ¥±°€ôÍÑ¥±°ì4(€€€Ñ¡¥Ì¹}¹…µ”€ô¹…µ”ì4(€€€Ñ¡¥Ì¹}™½½Ð€ô™½½Ðì4(€€€Ñ¡¥Ì¹}‘•Ñ…¥±¹Ñ¥Ñä€ô‘•Ñ…¥±¹Ñ¥Ñäì4(€€€Ñ¡¥Ì¹}µ•ÍÍ…”€ôµ•ÍÍ…”ì4(€€€Ñ¡¥Ì¹}É•™É•Í¡•Ñ…¥±Y¥Í¥‰¥±¥Ñä ¤ì4(€ô4(4(€}É•™É•Í¡•Ñ…¥±Y¥Í¥‰¥±¥Ñä ¤ì4(€€€Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” ‘…Ñ„µÍ¡½Üµ‘•Ñ…¥±Ìœ°MÑÉ¥¹œ¡Ñ¡¥Ì¹}‘•Ñ…¥±ÍY¥Í¥‰±”¤¤ì4(€€€Ñ¡¥Ì¹}É•™É•Í¡•Ñ…¥±A½Í¥Ñ¥½¸ ¤ì4(€ô4(4(€}É•™É•Í¡•Ñ…¥±A½Í¥Ñ¥½¸ ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}‘•Ñ…¥±ÍY¥Í¥‰±”ñðÑåÁ•½˜Ñ¡¥Ì¹•Ñ	½Õ¹‘¥¹±¥•¹ÑI•Ð€„ôô€™Õ¹Ñ¥½¸œ¤É•ÑÕÉ¸ì4(€€€½¹ÍÐÉ•Ð€ôÑ¡¥Ì¹•Ñ	½Õ¹‘¥¹±¥•¹ÑI•Ð ¤ì4(€€€½¹ÍÐÝ¥‘Ñ €ô9Õµ‰•È¡Ý¥¹‘½Ü¹¥¹¹•É]¥‘Ñ ¤ñð‘½Õµ•¹Ð¹‘½Õµ•¹Ñ±•µ•¹Ðü¹±¥•¹Ñ]¥‘Ñ ñð€Àì4(€€€½¹ÍÐ¡•¥¡Ð€ô9Õµ‰•È¡Ý¥¹‘½Ü¹¥¹¹•É!•¥¡Ð¤ñð‘½Õµ•¹Ð¹‘½Õµ•¹Ñ±•µ•¹Ðü¹±¥•¹Ñ!•¥¡Ðñð€Àì4(€€€½¹ÍÐÍÁ…”€ô€ÈÀÀì4(€€€½¹ÍÐÍ¥‘”€ô€…Ý¥‘Ñ ñðÉ•Ð¹É¥¡Ð€¬ÍÁ…”€ðôÝ¥‘Ñ €ü€É¥¡Ðœ4(€€€€€€èÉ•Ð¹±•™Ð€øôÍÁ…”€ü€±•™Ðœ4(€€€€€€èÉ•Ð¹Ñ½À€øô€àØ€ü€Ñ½Àœ4(€€€€€€èÉ•Ð¹‰½ÑÑ½´€¬€àØ€ðô¡•¥¡Ð€ü€‰½ÑÑ½´œ€è€É¥¡Ðœì4(€€€Ñ¡¥Ì¹Í•ÑÑÑÉ¥‰ÕÑ” ‘…Ñ„µ‘•Ñ…¥°µÍ¥‘”œ°Í¥‘”¤ì4(€ô4(4(€}½Á•¹•Ñ…¥±Ì ¤ì4(€€€½¹ÍÐ•¹Ñ¥Ñå%€ôÑ¡¥Ì¹}½¹™¥œü¹…µ•É…}•¹Ñ¥Ñäì4(€€€¥˜€¡•¹Ñ¥Ñå%¤Ñ¡¥Ì¹‘¥ÍÁ…Ñ¡Ù•¹Ð¡¹•ÜÕÍÑ½µÙ•¹Ð ¡…ÍÌµµ½É”µ¥¹™¼œ°ì4(€€€€€‰Õ‰‰±•ÌèÑÉÕ”°½µÁ½Í•èÑÉÕ”°‘•Ñ…¥°èì•¹Ñ¥Ñå%ô°4(€€€ô¤¤ì4(€ô4(4(€}…Ñ¥Ù…Ñ•…µ•É„ ¤ì4(€€€½¹ÍÐ•¹Ñ¥Ñå%€ôÑ¡¥Ì¹}½¹™¥œü¹…µ•É…}•¹Ñ¥Ñäì4(€€€½¹ÍÐÍÑ…Ñ”€ôÑ¡¥Ì¹}¡…ÍÌü¹ÍÑ…Ñ•Ìü¹m•¹Ñ¥Ñå%‘tü¹ÍÑ…Ñ”ì4(€€€¥˜€¡Ñ¡¥Ì¹}½¹™¥œü¹ÁÉ•Ù¥•Ý}µ½‘”€„ôô€±¥Ù”œñðÍÑ…Ñ”€„ôô€¥‘±”œñð4(€€€€€€€ÑåÁ•½˜Ñ¡¥Ì¹}¡…ÍÌü¹…±±M•ÉÙ¥”€„ôô€™Õ¹Ñ¥½¸œ¤ì4(€€€€€Ñ¡¥Ì¹}½Á•¹•Ñ…¥±Ì ¤ì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€¥˜€¡Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€˜˜…Ñ”¹¹½Ü ¤€´Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ð€ÄÔÀÀÀ¤É•ÑÕÉ¸ì4(€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô…Ñ”¹¹½Ü ¤ì4(€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ô™…±Í”ì4(€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¤ì4(€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È€ôÍ•ÑQ¥µ•½ÕÐ  ¤€ôøì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô€Àì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ôÑÉÕ”ì4(€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€ô°€ÄÔÀÀÀ¤ì4(€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¹Õ¹É•˜ü¸ ¤ì4(€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€ÑÉäì4(€€€€€AÉ½µ¥Í”¹É•Í½±Ù”¡Ñ¡¥Ì¹}¡…ÍÌ¹…±±M•ÉÙ¥” …µ•É„œ°€ÑÕÉ¹}½¸œ°ì•¹Ñ¥Ñå}¥è•¹Ñ¥Ñå%ô¤¤4(€€€€€€€€¹…Ñ   ¤€ôøì4(€€€€€€€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¤ì4(€€€€€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô€Àì4(€€€€€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ôÑÉÕ”ì4(€€€€€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€€€€€ô¤ì4(€€€ô…Ñ ì4(€€€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¤ì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô€Àì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ôÑÉÕ”ì4(€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€ô4(€ô4(4(€}É•Ù½­•%µ…” ¤ì4(€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}¥µ…•1½…‘Q¥µ•È¤ì4(€€€Ñ¡¥Ì¹}¥µ…•1½…‘Q¥µ•È€ô¹Õ±°ì4(€€€¥˜€¡Ñ¡¥Ì¹}½‰©•ÑUÉ°¤UI0¹É•Ù½­•=‰©•ÑUI0¡Ñ¡¥Ì¹}½‰©•ÑUÉ°¤ì4(€€€Ñ¡¥Ì¹}½‰©•ÑUÉ°€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}¥µ…•-•ä€ô€œœì4(€€€Ñ¡¥Ì¹}Á•¹‘¥¹-•ä€ô€œœì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±I•…‘ä€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±A•¹‘¥¹œ€ô™…±Í”ì4(€ô4(4(€}ÍÑ¥±±…¥±• ¤ì4(€€€Ñ¡¥Ì¹}™…¥±•‘%µ…•-•ä€ôÑ¡¥Ì¹}Á•¹‘¥¹-•äñðÑ¡¥Ì¹}¥µ…•-•äì4(€€€Ñ¡¥Ì¹}±…ÍÑ…¥±ÕÉ”€ô…Ñ”¹¹½Ü ¤ì4(€€€Ñ¡¥Ì¹}É•Ù½­•%µ…” ¤ì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±ÉÉ½È€ô€1…Ñ•ÍÐ•Ù•¹ÐÕ¹…Ù…¥±…‰±”œì4(€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€ô4(4(€}ÍÑ½Á1¥Ù” ¤ì4(€€€¥˜€¡Ñ¡¥Ì¹}±¥Ù•Q¥µ•È¤±•…É%¹Ñ•ÉÙ…°¡Ñ¡¥Ì¹}±¥Ù•Q¥µ•È¤ì4(€€€Ñ¡¥Ì¹}±¥Ù•Q¥µ•È€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ðü¹É•µ½Ù” ¤ì4(€€€Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±¥Ù•…µ•É…%€ô€œœì4(€€€Ñ¡¥Ì¹}±¥Ù•I•…‘ä€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}±¥Ù•MÑ…ÉÑ•‘Ð€ô€Àì4(€€€Ñ¡¥Ì¹}Ù¥‘•½M…µÁ±”€ô¹Õ±°ì4(€€€Ñ¡¥Ì¹}±…ÍÑY¥‘•½‘Ù…¹•Ð€ô€Àì4(€ô4(4(€}•Ù•¹Ñ]¥¹‘½Ý=Á•¸¡¹½Ü€ô…Ñ”¹¹½Ü ¤¤ì4(€€€É•ÑÕÉ¸Ñ¡¥Ì¹}½¹™¥œü¹ÁÉ•Ù¥•Ý}µ½‘”€ôôô€•Ù•¹Ñ}±¥Ù”œ€˜˜4(€€€€€Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%€ôôôÑ¡¥Ì¹}½¹™¥œ¹…µ•É…}•¹Ñ¥Ñä€˜˜4(€€€€€Ñ¡¥Ì¹}•Ù•¹Ñ1¥Ù•U¹Ñ¥°€ø¹½Üì4(€ô4(4(€}ÍÑ½ÁMÑ…ÉÑ•‘Ù•¹ÑMÑÉ•…´¡…µ•É…%¤ì4(€€€¥˜€ ……µ•É…%ñðÑåÁ•½˜Ñ¡¥Ì¹}¡…ÍÌü¹…±±M•ÉÙ¥”€„ôô€™Õ¹Ñ¥½¸œ¤É•ÑÕÉ¸ì4(€€€ÑÉäì4(€€€€€AÉ½µ¥Í”¹É•Í½±Ù”¡Ñ¡¥Ì¹}¡…ÍÌ¹…±±M•ÉÙ¥” …µ•É„œ°€ÑÕÉ¹}½™˜œ°ì•¹Ñ¥Ñå}¥è…µ•É…%ô¤¤4(€€€€€€€€¹…Ñ   ¤€ôøíô¤ì4(€€€ô…Ñ ì€¼¨™…¥±•±•…¹ÕÀµÕÍÐ¹½Ð¡¥‘”Ñ¡”±…ÍÐ•Ù•¹Ð¥µ…”¸€¨¼ô4(€ô4(4(€}É•±•…Í•Ù•¹ÑMÑÉ•…´ ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´¤É•ÑÕÉ¸ì4(€€€Ñ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}ÍÑ½ÁMÑ…ÉÑ•‘Ù•¹ÑMÑÉ•…´¡Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%¤ì4(€ô4(4(€}±½Í•Ù•¹Ñ]¥¹‘½Ü ¤ì4(€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}•Ù•¹ÑQ¥µ•È¤ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑQ¥µ•È€ô¹Õ±°ì4(€€€€¬­Ñ¡¥Ì¹}•Ù•¹ÑM•ÅÕ•¹”ì4(€€€Ñ¡¥Ì¹}É•±•…Í•Ù•¹ÑMÑÉ•…´ ¤ì4(€€€Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%€ô€œœì4(€€€Ñ¡¥Ì¹}•Ù•¹Ñ1¥Ù•U¹Ñ¥°€ô€Àì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÑÑ•µÁÑ•€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ€ô™…±Í”ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½È€ô™…±Í”ì4(€ô4(4(€}É•ÅÕ•ÍÑÙ•¹ÑMÑÉ•…´¡…µ•É…%¤ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÑÑ•µÁÑ•€ôÑÉÕ”ì4(€€€¥˜€¡ÑåÁ•½˜Ñ¡¥Ì¹}¡…ÍÌü¹…±±M•ÉÙ¥”€„ôô€™Õ¹Ñ¥½¸œ¤ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½È€ôÑÉÕ”ì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ€ôÑÉÕ”ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½È€ô™…±Í”ì4(€€€½¹ÍÐÍ•ÅÕ•¹”€ô€¬­Ñ¡¥Ì¹}•Ù•¹ÑM•ÅÕ•¹”ì4(€€€±•ÐÉ•ÅÕ•ÍÐì4(€€€ÑÉäìÉ•ÅÕ•ÍÐ€ôÑ¡¥Ì¹}¡…ÍÌ¹…±±M•ÉÙ¥” …µ•É„œ°€ÑÕÉ¹}½¸œ°ì•¹Ñ¥Ñå}¥è…µ•É…%ô¤ìô4(€€€…Ñ ìÉ•ÅÕ•ÍÐ€ôAÉ½µ¥Í”¹É•©•Ð¡¹•ÜÉÉ½È …µ•É„ÍÑ…ÉÐ™…¥±•¸œ¤¤ìô4(€€€AÉ½µ¥Í”¹É•Í½±Ù”¡É•ÅÕ•ÍÐ¤¹Ñ¡•¸  ¤€ôøì4(€€€€€¥˜€¡Í•ÅÕ•¹”€„ôôÑ¡¥Ì¹}•Ù•¹ÑM•ÅÕ•¹”ñð€…Ñ¡¥Ì¹}•Ù•¹Ñ]¥¹‘½Ý=Á•¸ ¤¤ì4(€€€€€€€€¼¼Q¡”É•ÅÕ•ÍÐµ…ä™¥¹¥Í …™Ñ•ÈÑ¡”€ØÀµÍ•½¹•Ù•¹ÐÝ¥¹‘½Ü¡…Ì±½Í•¸4(€€€€€€€Ñ¡¥Ì¹}ÍÑ½ÁMÑ…ÉÑ•‘Ù•¹ÑMÑÉ•…´¡…µ•É…%¤ì4(€€€€€€€É•ÑÕÉ¸ì4(€€€€€ô4(€€€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ€ô™…±Í”ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´€ôÑÉÕ”ì4(€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€ô¤¹…Ñ   ¤€ôøì4(€€€€€¥˜€¡Í•ÅÕ•¹”€„ôôÑ¡¥Ì¹}•Ù•¹ÑM•ÅÕ•¹”¤É•ÑÕÉ¸ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ€ô™…±Í”ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½È€ôÑÉÕ”ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘Ð€ô…Ñ”¹¹½Ü ¤ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ô…µ•É…%ì4(€€€€€Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€€€Ñ¡¥Ì¹}É•™É•Í¡MÑ¥±° ¤ì4(€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€ô¤ì4(€ô4(4(€}Íå¹Ù•¹Ñ]¥¹‘½Ü¡…µ•É…%¤ì4(€€€¥˜€¡Ñ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€„ôô€•Ù•¹Ñ}±¥Ù”œñð€……µ•É…%ñð4(€€€€€€€Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%€˜˜Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%€„ôô…µ•É…%¤ì4(€€€€€¥˜€¡Ñ¡¥Ì¹}•Ù•¹Ñ1¥Ù•U¹Ñ¥°ñðÑ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´ñðÑ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ¤Ñ¡¥Ì¹}±½Í•Ù•¹Ñ]¥¹‘½Ü ¤ì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€½¹ÍÐ¹½Ü€ô…Ñ”¹¹½Ü ¤ì4(€€€±•ÐÑÉ¥•É•€ô™…±Í”ì4(€€€™½È€¡½¹ÍÐ•¹Ñ¥Ñå%½˜Ñ¡¥Ì¹}½¹™¥œ¹•Ù•¹Ñ}•¹Ñ¥Ñ¥•Ìñðmt¤ì4(€€€€€½¹ÍÐ½¸€ôÑ¡¥Ì¹}¡…ÍÌ¹ÍÑ…Ñ•Ìü¹m•¹Ñ¥Ñå%‘tü¹ÍÑ…Ñ”€ôôô€½¸œì4(€€€€€¥˜€¡½¸€˜˜€…Ñ¡¥Ì¹}•Ù•¹ÑQÉ¥•ÉMÑ…Ñ•Ì¹•Ð¡•¹Ñ¥Ñå%¤¤ÑÉ¥•É•€ôÑÉÕ”ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹ÑQÉ¥•ÉMÑ…Ñ•Ì¹Í•Ð¡•¹Ñ¥Ñå%°½¸¤ì4(€€€ô4(€€€¥˜€¡ÑÉ¥•É•¤ì4(€€€€€½¹ÍÐÝ…Í=Á•¸€ôÑ¡¥Ì¹}•Ù•¹Ñ]¥¹‘½Ý=Á•¸¡¹½Ü¤ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%€ô…µ•É…%ì4(€€€€€Ñ¡¥Ì¹}•Ù•¹Ñ1¥Ù•U¹Ñ¥°€ô¹½Ü€¬€ØÀÀÀÀì4(€€€€€¥˜€ …Ý…Í=Á•¸ñðÑ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½Èñð4(€€€€€€€€€€…Ñ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´€˜˜€…Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ¤ì4(€€€€€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÑÑ•µÁÑ•€ô™…±Í”ì4(€€€€€€€Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½È€ô™…±Í”ì4(€€€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘Ð€ô€Àì4(€€€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ô€œœì4(€€€€€ô4(€€€ô4(€€€¥˜€ …Ñ¡¥Ì¹}•Ù•¹Ñ]¥¹‘½Ý=Á•¸¡¹½Ü¤¤ì4(€€€€€¥˜€¡Ñ¡¥Ì¹}•Ù•¹Ñ1¥Ù•U¹Ñ¥°ñðÑ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´ñðÑ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ¤Ñ¡¥Ì¹}±½Í•Ù•¹Ñ]¥¹‘½Ü ¤ì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}•Ù•¹ÑQ¥µ•È¤ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑQ¥µ•È€ôÍ•ÑQ¥µ•½ÕÐ  ¤€ôøÑ¡¥Ì¹}É•™É•Í  ¤°5…Ñ ¹µ…à Ä°Ñ¡¥Ì¹}•Ù•¹Ñ1¥Ù•U¹Ñ¥°€´¹½Ü¤¤ì4(€€€Ñ¡¥Ì¹}•Ù•¹ÑQ¥µ•È¹Õ¹É•˜ü¸ ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÑÑ•µÁÑ•€˜˜€…Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ€˜˜€…Ñ¡¥Ì¹}•Ù•¹Ñ=Ý¹ÍMÑÉ•…´€˜˜4(€€€€€€€€…Ñ¡¥Ì¹}…µ•É…U¹…Ù…¥±…‰±”¤ì4(€€€€€¥˜€¡Ñ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôôô€ÍÑÉ•…µ¥¹œœ¤Ñ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÑÑ•µÁÑ•€ôÑÉÕ”ì4(€€€€€•±Í”Ñ¡¥Ì¹}É•ÅÕ•ÍÑÙ•¹ÑMÑÉ•…´¡…µ•É…%¤ì4(€€€ô4(€ô4(4(€}É•¹‘•É…µ•É„ ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}™É…µ”ñð€…Ñ¡¥Ì¹}½¹™¥œ¤É•ÑÕÉ¸ì4(€€€½¹ÍÐ½™™±¥¹”€ôÑ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€ôôô€½™™±¥¹”œì4(€€€½¹ÍÐ•Ù•¹Ñ…Ñ”€ôÑ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€„ôô€•Ù•¹Ñ}±¥Ù”œñðÑ¡¥Ì¹}•Ù•¹Ñ]¥¹‘½Ý=Á•¸ ¤ì4(€€€½¹ÍÐ±¥Ù”€ô€…½™™±¥¹”€˜˜•Ù•¹Ñ…Ñ”€˜˜Ñ¡¥Ì¹}±¥Ù•I•…‘ä€˜˜Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ðü¹Á…É•¹Ñ9½‘”€ôôôÑ¡¥Ì¹}µ•‘¥„ì4(€€€½¹ÍÐÍÑ¥±°€ô€…½™™±¥¹”€˜˜Ñ¡¥Ì¹}ÍÑ¥±±I•…‘ä€˜˜€„…Ñ¡¥Ì¹}½‰©•ÑUÉ°ì4(€€€½¹ÍÐÍÑ…ÉÑ…‰±”€ôÑ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€ôôô€±¥Ù”œ€˜˜Ñ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôôô€¥‘±”œì4(€€€Ñ¡¥Ì¹}™É…µ”¹Í•ÑÑÑÉ¥‰ÕÑ” …É¥„µ±…‰•°œ°ÍÑ…ÉÑ…‰±”4(€€€€€€ü€MÑ…ÉÐ€œ€¬Ñ¡¥Ì¹}¹…µ”¹Ñ•áÑ½¹Ñ•¹Ð€¬€œ…µ•É„ÍÑÉ•…´ì¡½±™½È‘•Ñ…¥±Ìœ4(€€€€€€è€=Á•¸€œ€¬Ñ¡¥Ì¹}¹…µ”¹Ñ•áÑ½¹Ñ•¹Ð€¬€œ…µ•É„‘•Ñ…¥±Ìœ¤ì4(€€€Ñ¡¥Ì¹}™É…µ”¹Ñ¥Ñ±”€ôÍÑ…ÉÑ…‰±”€ü€Q…ÀÑ¼ÍÑ…ÉÐÍÑÉ•…´ƒ
Ü!½±™½È‘•Ñ…¥±Ìœ€è€=Á•¸…µ•É„‘•Ñ…¥±Ìœì4(€€€¥˜€¡Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð¤Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð¹ÍÑå±”¹½Á…¥Ñä€ô±¥Ù”€ü€œÄœ€è€œÀœì4(€€€Ñ¡¥Ì¹}ÍÑ¥±°¹¡¥‘‘•¸€ô€…ÍÑ¥±°ñð±¥Ù”ì4(€€€Ñ¡¥Ì¹}µ•ÍÍ…”¹¡¥‘‘•¸€ô€„„¡±¥Ù”ñðÍÑ¥±°¤ì4(€€€¥˜€¡±¥Ù”¤ì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ô€1%Yœì4(€€€ô•±Í”¥˜€¡ÍÑ¥±°¤ì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ôÑ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘ÐñðÑ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ€ü€=99Q%9ƒ
ÜAIY%\œ4(€€€€€€€€èÑ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½ÈñðÑ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑÉÉ½È€ü€AIY%\ƒ
Ü1%YU9Y%1	1œ4(€€€€€€€€èÑ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ôôôÑ¡¥Ì¹}½¹™¥œ¹…µ•É…}•¹Ñ¥Ñä€˜˜Ñ¡¥Ì¹}±¥Ù•…¥±•‘Ð4(€€€€€€€€€€ü€AIY%\ƒ
Ü1%YU9Y%1	1œ4(€€€€€€€€èÑ¡¥Ì¹}Ý…¹ÑÍ1¥Ù”€üÑ¡¥Ì¹}ÍÑ¥±±½½Ñ•È¹É•Á±…” ½y1QMPY9P¼°€AIY%\œ¤4(€€€€€€€€èÑ¡¥Ì¹}ÍÑ¥±±½½Ñ•Èì4(€€€ô•±Í”¥˜€¡½™™±¥¹”¤ì4(€€€€€Ñ¡¥Ì¹}µ•ÍÍ…”¹Ñ•áÑ½¹Ñ•¹Ð€ô€…µ•É„ÁÉ•Ù¥•Ü½™˜œì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ô€=œì4(€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹}±¥Ù•Q¥µ•ÈñðÑ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘ÐñðÑ¡¥Ì¹}•Ù•¹ÑMÑ…ÉÑA•¹‘¥¹œ¤ì4(€€€€€Ñ¡¥Ì¹}µ•ÍÍ…”¹Ñ•áÑ½¹Ñ•¹Ð€ô€½¹¹•Ñ¥¹œÑ¼…µ•É‡Š˜œì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ô€=99Q%9œì4(€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹}ÍÑ¥±±A•¹‘¥¹œ¤ì4(€€€€€Ñ¡¥Ì¹}µ•ÍÍ…”¹Ñ•áÑ½¹Ñ•¹Ð€ô€1½…‘¥¹œ±…Ñ•ÍÐ•Ù•¹ÓŠ˜œì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ô€1=%9œì4(€€€ô•±Í”¥˜€¡ÍÑ…ÉÑ…‰±”€˜˜€…Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È¤ì4(€€€€€Ñ¡¥Ì¹}µ•ÍÍ…”¹Ñ•áÑ½¹Ñ•¹Ð€ô€Q…ÀÑ¼ÍÑ…ÉÐ…µ•É„œì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ô€Idœì4(€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹}Ý…¹ÑÍ1¥Ù”ñðÑ¡¥Ì¹}…µ•É…U¹…Ù…¥±…‰±”¤ì4(€€€€€Ñ¡¥Ì¹}µ•ÍÍ…”¹Ñ•áÑ½¹Ñ•¹Ð€ô€…µ•É„Õ¹…Ù…¥±…‰±”œì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ô€U9Y%1	1œì4(€€€ô•±Í”ì4(€€€€€Ñ¡¥Ì¹}µ•ÍÍ…”¹Ñ•áÑ½¹Ñ•¹Ð€ôÑ¡¥Ì¹}ÍÑ¥±±ÉÉ½Èì4(€€€€€Ñ¡¥Ì¹}™½½Ð¹Ñ•áÑ½¹Ñ•¹Ð€ôÑ¡¥Ì¹}ÍÑ¥±±½½Ñ•Èì4(€€€ô4(€ô4(4(€}•Ù•¹ÑQ¥µ”¡ÍÑ…Ñ”¤ì4(€€€€¼¼%µ…”•¹Ñ¥ÑäÍÑ…Ñ”¥ÌÑ¡”•Ù•¹ÐÑ¥µ•ÍÑ…µÀ¸±…ÍÑ}ÕÁ‘…Ñ•½Õ±Í¥µÁ±ä‰”4(€€€€¼¼…¸!É•ÍÑ…ÉÐ°Í¼‘¼¹½ÐÁÉ•Í•¹Ð¥Ð…ÌÑ¡”•Ù•¹ÐÑ¥µ”¸4(€€€½¹ÍÐÑ¥µ•ÍÑ…µÀ€ôÑåÁ•½˜ÍÑ…Ñ”ü¹ÍÑ…Ñ”€ôôô€ÍÑÉ¥¹œœ€ü…Ñ”¹Á…ÉÍ”¡ÍÑ…Ñ”¹ÍÑ…Ñ”¤€è9…8ì4(€€€¥˜€ …9Õµ‰•È¹¥Í¥¹¥Ñ”¡Ñ¥µ•ÍÑ…µÀ¤¤É•ÑÕÉ¸€œœì4(€€€É•ÑÕÉ¸¹•Ü%¹Ñ°¹…Ñ•Q¥µ•½Éµ…Ð¡Õ¹‘•™¥¹•°ì4(€€€€€µ½¹Ñ è€Í¡½ÉÐœ°‘…äè€¹Õµ•É¥Œœ°¡½ÕÈè€¹Õµ•É¥Œœ°µ¥¹ÕÑ”è€œÈµ‘¥¥Ðœ°4(€€€ô¤¹™½Éµ…Ð¡¹•Ü…Ñ”¡Ñ¥µ•ÍÑ…µÀ¤¤ì4(€ô4(4(€}ÍÑ…ÉÑ1¥Ù”¡…µ•É…%¤ì4(€€€¥˜€¡Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð€˜˜Ñ¡¥Ì¹}±¥Ù•…µ•É…%€„ôô…µ•É…%¤Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€¥˜€¡Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð¤ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð¹¡…ÍÌ€ôÑ¡¥Ì¹}¡…ÍÌì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€¥˜€¡Ñ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ôôô…µ•É…%€˜˜…Ñ”¹¹½Ü ¤€´Ñ¡¥Ì¹}±¥Ù•…¥±•‘Ð€ð€ÌÀÀÀÀ¤É•ÑÕÉ¸ì4(€€€¥˜€¡ÑåÁ•½˜ÕÍÑ½µ±•µ•¹ÑÌ¹•Ð ¡Õ¤µ¥µ…”µ•±•µ•¹Ðœ¤€„ôô€™Õ¹Ñ¥½¸œ¤É•ÑÕÉ¸ì4(€€€½¹ÍÐ•±•µ•¹Ð€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ¡Õ¤µ¥µ…”µ•±•µ•¹Ðœ¤ì4(€€€¥˜€¡ÑåÁ•½˜•±•µ•¹Ð¹Í•Ñ½¹™¥œ€„ôô€™Õ¹Ñ¥½¸œ¤É•ÑÕÉ¸ì4(€€€•±•µ•¹Ð¹±…ÍÍ9…µ”€ô€±¥Ù”œì4(€€€ÑÉäì4(€€€€€•±•µ•¹Ð¹Í•Ñ½¹™¥œ¡ì4(€€€€€€€ÑåÁ”è€¥µ…”œ°•¹Ñ¥Ñäè…µ•É…%°4(€€€€€€€…µ•É…}¥µ…”è…µ•É…%°…µ•É…}Ù¥•Üè€±¥Ù”œ°4(€€€€€€€Ñ…Á}…Ñ¥½¸èì…Ñ¥½¸è€¹½¹”œô°¡½±‘}…Ñ¥½¸èì…Ñ¥½¸è€¹½¹”œô°4(€€€€€ô¤ì4(€€€ô…Ñ ìÉ•ÑÕÉ¸ìô4(€€€Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð€ô•±•µ•¹Ðì4(€€€Ñ¡¥Ì¹}±¥Ù•…µ•É…%€ô…µ•É…%ì4(€€€Ñ¡¥Ì¹}±¥Ù•MÑ…ÉÑ•‘Ð€ô…Ñ”¹¹½Ü ¤ì4(€€€Ñ¡¥Ì¹}µ•‘¥„¹…ÁÁ•¹¡•±•µ•¹Ð¤ì4(€€€•±•µ•¹Ð¹¡…ÍÌ€ôÑ¡¥Ì¹}¡…ÍÌì4(€€€Ñ¡¥Ì¹}±¥Ù•Q¥µ•È€ôÍ•Ñ%¹Ñ•ÉÙ…°  ¤€ôøÑ¡¥Ì¹}Á½±±1¥Ù” ¤°€ÔÀÀ¤ì4(€€€Ñ¡¥Ì¹}±¥Ù•Q¥µ•È¹Õ¹É•˜ü¸ ¤ì4(€€€Ñ¡¥Ì¹}Á½±±1¥Ù” ¤ì4(€ô4(4(€}Á½±±1¥Ù” ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}±¥Ù•±•µ•¹Ð¤É•ÑÕÉ¸ì4(€€€½¹ÍÐµ½‘”€ôÑ¡¥Ì¹}½¹™¥œü¹ÁÉ•Ù¥•Ý}µ½‘”ì4(€€€½¹ÍÐÍÑ…Ñ”€ôÑ¡¥Ì¹}¡…ÍÌü¹ÍÑ…Ñ•Ìü¹mÑ¡¥Ì¹}±¥Ù•…µ•É…%‘tü¹ÍÑ…Ñ”ì4(€€€½¹ÍÐ…±±½Ý•€ôµ½‘”€ôôô€•Ù•¹Ñ}±¥Ù”œ€üÑ¡¥Ì¹}•Ù•¹Ñ]¥¹‘½Ý=Á•¸ ¤4(€€€€€€èµ½‘”€ôôô€±¥Ù•}…ÕÑ¼œ€ü€„…ÍÑ…Ñ”€˜˜ÍÑ…Ñ”€„ôô€Õ¹…Ù…¥±…‰±”œ€˜˜ÍÑ…Ñ”€„ôô€Õ¹­¹½Ý¸œ4(€€€€€€èÍÑ…Ñ”€ôôô€ÍÑÉ•…µ¥¹œœì4(€€€¥˜€ ……±±½Ý•¤ì4(€€€€€Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€€€Ñ¡¥Ì¹}É•™É•Í¡MÑ¥±° ¤ì4(€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€€¼¼!½µ”ÍÍ¥ÍÑ…¹Ð¹•ÍÑÌÙ¥‘•¼½È5)A¥µ…•Ì¥¹Í¥‘”½Á•¸Í¡…‘½ÜÉ½½ÑÌ¸4(€€€€¼¼%¹ÍÁ•Ð‘•½‘•µ•‘¥„ì„µ½Õ¹Ñ••±•µ•¹Ð…¸ÍÑ¥±°‰”‰±…¹¬½È™…¥±•¸4(€€€½¹ÍÐÍÑ…¬€ômÑ¡¥Ì¹}±¥Ù•±•µ•¹Ñtì4(€€€±•ÐÁ±…å¥¹œ€ô™…±Í”ì4(€€€Ý¡¥±”€¡ÍÑ…¬¹±•¹Ñ €˜˜€…Á±…å¥¹œ¤ì4(€€€€€½¹ÍÐ¹½‘”€ôÍÑ…¬¹Á½À ¤ì4(€€€€€½¹ÍÐÑ…œ€ôMÑÉ¥¹œ¡¹½‘”¹Ñ…9…µ”ñð¹½‘”¹Ñ…œñð€œœ¤¹Ñ½1½Ý•É…Í” ¤ì4(€€€€€¥˜€¡Ñ…œ€ôôô€Ù¥‘•¼œ€˜˜4(€€€€€€€€€¹½‘”¹É•…‘åMÑ…Ñ”€øô€È€˜˜¹½‘”¹Ù¥‘•½]¥‘Ñ €ø€À€˜˜¹½‘”¹Ù¥‘•½!•¥¡Ð€ø€À€˜˜4(€€€€€€€€€€…¹½‘”¹Á…ÕÍ•€˜˜€…¹½‘”¹•¹‘•¤ì4(€€€€€€€¥˜€¡µ½‘”€„ôô€±¥Ù•}…ÕÑ¼œ¤ì4(€€€€€€€€€Á±…å¥¹œ€ôÑÉÕ”ì4(€€€€€€€€€‰É•…¬ì4(€€€€€€€ô4(€€€€€€€€¼¼=9Y%½]•‰IQ…µ•É…Ì…¸É•µ…¥¸€‰¥‘±”ˆ¥¸!Ý¡¥±”Ù¥‘•¼¥ÌÁ±…å¥¹œ¸4(€€€€€€€€¼¼‘•½‘•™¥ÉÍÐ™É…µ”…±½¹”¥Ì¥¹ÍÕ™™¥¥•¹Ð•Ù¥‘•¹”½˜„±¥Ù”™••¸4(€€€€€€€½¹ÍÐÑ¥µ”€ô9Õµ‰•È¡¹½‘”¹ÕÉÉ•¹ÑQ¥µ”¤ì4(€€€€€€€½¹ÍÐÅÕ…±¥Ñä€ôÑåÁ•½˜¹½‘”¹•ÑY¥‘•½A±…å‰…­EÕ…±¥Ñä€ôôô€™Õ¹Ñ¥½¸œ4(€€€€€€€€€€ü¹½‘”¹•ÑY¥‘•½A±…å‰…­EÕ…±¥Ñä ¤ü¹Ñ½Ñ…±Y¥‘•½É…µ•Ì€èÕ¹‘•™¥¹•ì4(€€€€€€€½¹ÍÐ™É…µ•Ì€ô9Õµ‰•È¹¥Í¥¹¥Ñ”¡ÅÕ…±¥Ñä¤€üÅÕ…±¥Ñä4(€€€€€€€€€€è9Õµ‰•È¹¥Í¥¹¥Ñ”¡¹½‘”¹Ý•‰­¥Ñ•½‘•‘É…µ•½Õ¹Ð¤€ü¹½‘”¹Ý•‰­¥Ñ•½‘•‘É…µ•½Õ¹Ð4(€€€€€€€€€€è9Õµ‰•È¹¥Í¥¹¥Ñ”¡¹½‘”¹µ½éA…¥¹Ñ•‘É…µ•Ì¤€ü¹½‘”¹µ½éA…¥¹Ñ•‘É…µ•Ì€è9…8ì4(€€€€€€€¥˜€¡Ñ¡¥Ì¹}Ù¥‘•½M…µÁ±”ü¹¹½‘”€ôôô¹½‘”€˜˜4(€€€€€€€€€€€€¡9Õµ‰•È¹¥Í¥¹¥Ñ”¡Ñ¥µ”¤€˜˜Ñ¥µ”€øÑ¡¥Ì¹}Ù¥‘•½M…µÁ±”¹Ñ¥µ”€¬€À¸ÀÄÔñð4(€€€€€€€€€€€€9Õµ‰•È¹¥Í¥¹¥Ñ”¡™É…µ•Ì¤€˜˜™É…µ•Ì€øÑ¡¥Ì¹}Ù¥‘•½M…µÁ±”¹™É…µ•Ì¤¤ì4(€€€€€€€€€Ñ¡¥Ì¹}±…ÍÑY¥‘•½‘Ù…¹•Ð€ô…Ñ”¹¹½Ü ¤ì4(€€€€€€€ô4(€€€€€€€Ñ¡¥Ì¹}Ù¥‘•½M…µÁ±”€ôì¹½‘”°Ñ¥µ”°™É…µ•Ìôì4(€€€€€€€Á±…å¥¹œ€ôÑ¡¥Ì¹}±…ÍÑY¥‘•½‘Ù…¹•Ð€ø€À€˜˜…Ñ”¹¹½Ü ¤€´Ñ¡¥Ì¹}±…ÍÑY¥‘•½‘Ù…¹•Ð€ð€ÈÀÀÀì4(€€€€€€€¥˜€¡Á±…å¥¹œ¤‰É•…¬ì4(€€€€€ô4(€€€€€¥˜€¡Ñ…œ€ôôô€¥µœœ€˜˜¹½‘”¹½µÁ±•Ñ”€˜˜¹½‘”¹¹…ÑÕÉ…±]¥‘Ñ €ø€À€˜˜¹½‘”¹¹…ÑÕÉ…±!•¥¡Ð€ø€À¤ì4(€€€€€€€€¼¼‘•½‘•ÍÑ¥±°…¸…±Í¼…ÁÁ•…È¥¸¡Õ¤µ¥µ…”µ•±•µ•¹Ð¸•ÁÐ½¹±ä4(€€€€€€€€¼¼Ñ¡¥Ì…µ•É„ÌÍ…µ”µ½É¥¥¸ÍÑÉ•…´•¹‘Á½¥¹Ð…Ì5)A±¥Ù”µ•‘¥„¸4(€€€€€€€ÑÉäì4(€€€€€€€€€½¹ÍÐÕÉ°€ô¹•ÜUI0¡¹½‘”¹ÕÉÉ•¹ÑMÉŒñð¹½‘”¹ÍÉŒ°±½…Ñ¥½¸¹½É¥¥¸¤ì4(€€€€€€€€€½¹ÍÐÁÉ•™¥à€ô€œ½…Á¤½…µ•É…}ÁÉ½áå}ÍÑÉ•…´¼œì4(€€€€€€€€€¥˜€¡ÕÉ°¹½É¥¥¸€ôôô±½…Ñ¥½¸¹½É¥¥¸€˜˜ÕÉ°¹Á…Ñ¡¹…µ”¹ÍÑ…ÉÑÍ]¥Ñ ¡ÁÉ•™¥à¤€˜˜4(€€€€€€€€€€€€€‘•½‘•UI%½µÁ½¹•¹Ð¡ÕÉ°¹Á…Ñ¡¹…µ”¹Í±¥”¡ÁÉ•™¥à¹±•¹Ñ ¤¤€ôôôÑ¡¥Ì¹}±¥Ù•…µ•É…%¤ì4(€€€€€€€€€€€Á±…å¥¹œ€ôÑÉÕ”ì4(€€€€€€€€€€€‰É•…¬ì4(€€€€€€€€€ô4(€€€€€€€ô…Ñ ì€¼¨%¹½É”µ…±™½Éµ•¥µ…”UI1Ì¸€¨¼ô4(€€€€€ô4(€€€€€¥˜€¡¹½‘”¹Í¡…‘½ÝI½½Ð¤ÍÑ…¬¹ÁÕÍ ¡¹½‘”¹Í¡…‘½ÝI½½Ð¤ì4(€€€€€™½È€¡½¹ÍÐ¡¥±½˜¹½‘”¹¡¥±‘É•¸ñðmt¤ÍÑ…¬¹ÁÕÍ ¡¡¥±¤ì4(€€€ô4(€€€¥˜€¡Á±…å¥¹œ¤ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•I•…‘ä€ôÑÉÕ”ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘Ð€ô€Àì4(€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ô€œœì4(€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹}±¥Ù•I•…‘ä¤ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•I•…‘ä€ô™…±Í”ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•MÑ…ÉÑ•‘Ð€ô…Ñ”¹¹½Ü ¤ì4(€€€€€Ñ¡¥Ì¹}É•™É•Í¡MÑ¥±° ¤ì4(€€€ô•±Í”¥˜€¡…Ñ”¹¹½Ü ¤€´Ñ¡¥Ì¹}±¥Ù•MÑ…ÉÑ•‘Ð€øô€ÄÔÀÀÀ¤ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘Ð€ô…Ñ”¹¹½Ü ¤ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ôÑ¡¥Ì¹}±¥Ù•…µ•É…%ì4(€€€€€Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€€€¥˜€¡µ½‘”€ôôô€•Ù•¹Ñ}±¥Ù”œ¤Ñ¡¥Ì¹}É•±•…Í•Ù•¹ÑMÑÉ•…´ ¤ì4(€€€ô4(€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€ô4(4(€}É•™É•Í  ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}™É…µ”ñð€…Ñ¡¥Ì¹}¡…ÍÌñð€…Ñ¡¥Ì¹}½¹™¥œ¤É•ÑÕÉ¸ì4(€€€½¹ÍÐ…µ•É…%€ôÑ¡¥Ì¹}½¹™¥œ¹…µ•É…}•¹Ñ¥Ñäì4(€€€¥˜€¡Ñ¡¥Ì¹}ÁÉ•Ù¥½ÕÍ…µ•É…%€„ôô…µ•É…%¤ì4(€€€€€¥˜€¡Ñ¡¥Ì¹}•Ù•¹Ñ…µ•É…%¤Ñ¡¥Ì¹}±½Í•Ù•¹Ñ]¥¹‘½Ü ¤ì4(€€€€€Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€€€Ñ¡¥Ì¹}±¥Ù•…¥±•‘…µ•É…%€ô€œœì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô€Àì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ô™…±Í”ì4(€€€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¤ì4(€€€€€Ñ¡¥Ì¹}ÁÉ•Ù¥½ÕÍ…µ•É…%€ô…µ•É…%ì4(€€€ô4(€€€Ñ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôÑ¡¥Ì¹}¡…ÍÌ¹ÍÑ…Ñ•Ìü¹m…µ•É…%‘tü¹ÍÑ…Ñ”ì4(€€€Ñ¡¥Ì¹}…µ•É…U¹…Ù…¥±…‰±”€ô€„……µ•É…%€˜˜4(€€€€€€ …Ñ¡¥Ì¹}…µ•É…MÑ…Ñ”ñðÑ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôôô€Õ¹…Ù…¥±…‰±”œñðÑ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôôô€Õ¹­¹½Ý¸œ¤ì4(€€€Ñ¡¥Ì¹}Íå¹Ù•¹Ñ]¥¹‘½Ü¡…µ•É…%¤ì4(€€€½¹ÍÐµ½‘”€ôÑ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”ì4(€€€½¹ÍÐ•Ù•¹Ñ…Ñ”€ôÑ¡¥Ì¹}•Ù•¹Ñ]¥¹‘½Ý=Á•¸ ¤ì4(€€€Ñ¡¥Ì¹}Ý…¹ÑÍ1¥Ù”€ôµ½‘”€ôôô€±¥Ù”œñðµ½‘”€ôôô€±¥Ù•}…ÕÑ¼œñð4(€€€€€€¡µ½‘”€ôôô€•Ù•¹Ñ}±¥Ù”œ€ü•Ù•¹Ñ…Ñ”€èÑ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôôô€ÍÑÉ•…µ¥¹œœ¤ì4(€€€¥˜€¡Ñ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôôô€ÍÑÉ•…µ¥¹œœ¤ì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô€Àì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ô™…±Í”ì4(€€€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¤ì4(€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€„ôô€±¥Ù”œ¤ì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹I•ÅÕ•ÍÑ•‘Ð€ô€Àì4(€€€€€Ñ¡¥Ì¹}ÑÕÉ¹=¹ÉÉ½È€ô™…±Í”ì4(€€€€€±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹}ÑÕÉ¹=¹Q¥µ•È¤ì4(€€€ô4(€€€¥˜€¡Ñ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€ôôô€½™™±¥¹”œ¤ì4(€€€€€Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€€€€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ì4(€€€€€Ñ¡¥Ì¹}É•Ù½­•%µ…” ¤ì4(€€€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€€¼¼ÕÑ¼µ½‘”¥Ì™½È…µ•É…ÌÝ¡½Í”¹…Ñ¥Ù”]•‰IQÍÑÉ•…´Á±…åÌ•Ù•¸Ý¡•¸!4(€€€€¼¼É•Á½ÉÑÌ¥‘±”¸Ù•¹Ðµ½‘”µ½Õ¹ÑÌ½¹±ä¥¹Í¥‘”„Í•¹Í½ÈµÑÉ¥•É•Ý¥¹‘½Ü¸4(€€€½¹ÍÐµ½Õ¹Ñ1¥Ù”€ô…µ•É…%€˜˜€…Ñ¡¥Ì¹}…µ•É…U¹…Ù…¥±…‰±”€˜˜4(€€€€€€¡µ½‘”€ôôô€±¥Ù•}…ÕÑ¼œñðµ½‘”€ôôô€•Ù•¹Ñ}±¥Ù”œ€˜˜•Ù•¹Ñ…Ñ”ñð4(€€€€€€µ½‘”€„ôô€•Ù•¹Ñ}±¥Ù”œ€˜˜Ñ¡¥Ì¹}…µ•É…MÑ…Ñ”€ôôô€ÍÑÉ•…µ¥¹œœ¤ì4(€€€¥˜€¡µ½Õ¹Ñ1¥Ù”¤Ñ¡¥Ì¹}ÍÑ…ÉÑ1¥Ù”¡…µ•É…%¤ì4(€€€•±Í”Ñ¡¥Ì¹}ÍÑ½Á1¥Ù” ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}±¥Ù•I•…‘ä¤Ñ¡¥Ì¹}É•™É•Í¡MÑ¥±° ¤ì4(€€€Ñ¡¥Ì¹}É•¹‘•É…µ•É„ ¤ì4(€ô4(4(€}É•™É•Í¡MÑ¥±° ¤ì4(€€€¥˜€ …Ñ¡¥Ì¹}¡…ÍÌñð€…Ñ¡¥Ì¹}½¹™¥œñðÑ¡¥Ì¹}½¹™¥œ¹ÁÉ•Ù¥•Ý}µ½‘”€ôôô€½™™±¥¹”œ¤É•ÑÕÉ¸ì4(€€€½¹ÍÐ…µ•É…%€ôÑ¡¥Ì¹}½¹™¥œ¹…µ•É…}•¹Ñ¥Ñäì4(€€€½¹ÍÐ¥µ…•%€ôÑ¡¥Ì¹}½¹™¥œ¹¥µ…•}•¹Ñ¥Ñäì4(€€€¥˜€ …¥µ…•%¤ì4(€€€€€€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ì4(€€€€€Ñ¡¥Ì¹}É•Ù½­•%µ…” ¤ì4(€€€€€Ñ¡¥Ì¹}ÍÑ¥±±ÉÉ½È€ô…µ•É…%€ü€1…Ñ•ÍÐ•Ù•¹Ð¥µ…”¹½Ð…ÍÍ¥¹•œ€è€ÍÍ¥¸„…µ•É„¥¸I½½µÉ…™Ðœì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€½¹ÍÐ•Ù•¹ÑMÑ…Ñ”€ôÑ¡¥Ì¹}¡…ÍÌ¹ÍÑ…Ñ•Ìü¹m¥µ…•%‘tì4(€€€½¹ÍÐÁ¥ÑÕÉ”€ô•Ù•¹ÑMÑ…Ñ”ü¹…ÑÑÉ¥‰ÕÑ•Ìü¹•¹Ñ¥Ñå}Á¥ÑÕÉ”ì4(€€€½¹ÍÐ•Ù•¹ÑQ¥µ”€ôÑ¡¥Ì¹}•Ù•¹ÑQ¥µ”¡•Ù•¹ÑMÑ…Ñ”¤ì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±½½Ñ•È€ô•Ù•¹ÑQ¥µ”€ü€1QMPY9Pƒ
Ü€œ€¬•Ù•¹ÑQ¥µ”€è€1QMPY9Pœì4(€€€¥˜€¡ÑåÁ•½˜Á¥ÑÕÉ”€„ôô€ÍÑÉ¥¹œœñð€…Á¥ÑÕÉ”¤ì4(€€€€€€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ì4(€€€€€Ñ¡¥Ì¹}É•Ù½­•%µ…” ¤ì4(€€€€€Ñ¡¥Ì¹}ÍÑ¥±±ÉÉ½È€ô€1…Ñ•ÍÐ•Ù•¹ÐÕ¹…Ù…¥±…‰±”œì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€±•ÐÕÉ°ì4(€€€ÑÉäìÕÉ°€ô¹•ÜUI0¡Á¥ÑÕÉ”°±½…Ñ¥½¸¹½É¥¥¸¤ìô4(€€€…Ñ ì€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ìÑ¡¥Ì¹}É•Ù½­•%µ…” ¤ìÑ¡¥Ì¹}ÍÑ¥±±ÉÉ½È€ô€1…Ñ•ÍÐ•Ù•¹ÐÕ¹…Ù…¥±…‰±”œìÉ•ÑÕÉ¸ìô4(€€€€¼¼I•ÍÑÉ¥Ð…ÕÑ¡•¹Ñ¥…Ñ•É•ÅÕ•ÍÑÌÑ¼!Ì½Ý¸¥µ…”•¹‘Á½¥¹Ð¸9•Ù•ÈÍ•¹4(€€€€¼¼Ñ¡”!‰•…É•ÈÑ½­•¸Ñ¼„UI0ÍÕÁÁ±¥•‰ä…¸…É‰¥ÑÉ…Éä•¹Ñ¥ÑäÍÑ…Ñ”¸4(€€€¥˜€¡ÕÉ°¹½É¥¥¸€„ôô±½…Ñ¥½¸¹½É¥¥¸ñð€…ÕÉ°¹Á…Ñ¡¹…µ”¹ÍÑ…ÉÑÍ]¥Ñ  œ½…Á¤½¥µ…•}ÁÉ½áä¼œ¤¤ì4(€€€€€€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ì4(€€€€€Ñ¡¥Ì¹}É•Ù½­•%µ…” ¤ì4(€€€€€Ñ¡¥Ì¹}ÍÑ¥±±ÉÉ½È€ô€1…Ñ•ÍÐ•Ù•¹ÐÕ¹…Ù…¥±…‰±”œì4(€€€€€É•ÑÕÉ¸ì4(€€€ô4(€€€½¹ÍÐ­•ä€ô¥µ…•%€¬€ðœ€¬Á¥ÑÕÉ”€¬€ðœ€¬•Ù•¹ÑMÑ…Ñ”¹ÍÑ…Ñ”ì4(€€€¥˜€¡Ñ¡¥Ì¹}¥µ…•-•ä€ôôô­•ä€˜˜Ñ¡¥Ì¹}½‰©•ÑUÉ°¤É•ÑÕÉ¸ì4(€€€¥˜€¡Ñ¡¥Ì¹}Á•¹‘¥¹-•ä€ôôô­•ä¤É•ÑÕÉ¸ì4(€€€¥˜€¡Ñ¡¥Ì¹}™…¥±•‘%µ…•-•ä€ôôô­•ä€˜˜…Ñ”¹¹½Ü ¤€´Ñ¡¥Ì¹}±…ÍÑ…¥±ÕÉ”€ð€ÌÀÀÀÀ¤É•ÑÕÉ¸ì4(€€€Ñ¡¥Ì¹}É•Ù½­•%µ…” ¤ì4(€€€Ñ¡¥Ì¹}Á•¹‘¥¹-•ä€ô­•äì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±A•¹‘¥¹œ€ôÑÉÕ”ì4(€€€Ñ¡¥Ì¹}ÍÑ¥±±ÉÉ½È€ô€1…Ñ•ÍÐ•Ù•¹ÐÕ¹…Ù…¥±…‰±”œì4(€€€½¹ÍÐÍ•É¥…°€ô€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ì4(€€€Ñ¡¥Ì¹}¥µ…•1½…‘Q¥µ•È€ôÍ•ÑQ¥µ•½ÕÐ  ¤€ôøì4(€€€€€¥˜€¡Í•É¥…°€„ôôÑ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ñðÑ¡¥Ì¹}Á•¹‘¥¹-•ä€„ôô­•äñðÑ¡¥Ì¹}ÍÑ¥±±I•…‘ä¤É•ÑÕÉ¸ì4(€€€€€€¬­Ñ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°ì4(€€€€€Ñ¡¥Ì¹}ÍÑ¥±±…¥±• ¤ì4(€€€ô°€ÄÈÀÀÀ¤ì4(€€€Ñ¡¥Ì¹}¥µ…•1½…‘Q¥µ•È¹Õ¹É•˜ü¸ ¤ì4(€€€AÉ½µ¥Í”¹É•Í½±Ù” ¤¹Ñ¡•¸  ¤€ôøÑ¡¥Ì¹}¡…ÍÌ¹™•Ñ¡]¥Ñ¡ÕÑ ¡ÕÉ°¹Á…Ñ¡¹…µ”€¬ÕÉ°¹Í•…É ¤¤4(€€€€€€¹Ñ¡•¸¡É•ÍÁ½¹Í”€ôøì4(€€€€€€€¥˜€ …É•ÍÁ½¹Í”¹½¬¤Ñ¡É½Ü¹•ÜÉÉ½È %µ…”É•ÅÕ•ÍÐ™…¥±•€ œ€¬É•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ€¬€œ¤¸œ¤ì4(€€€€€€€É•ÑÕÉ¸É•ÍÁ½¹Í”¹‰±½ˆ ¤ì4(€€€€€ô¤4(€€€€€€¹Ñ¡•¸¡‰±½ˆ€ôøì4(€€€€€€€¥˜€ …‰±½ˆ¹ÑåÁ”¹ÍÑ…ÉÑÍ]¥Ñ  ¥µ…”¼œ¤¤Ñ¡É½Ü¹•ÜÉÉ½È %µ…”É•ÍÁ½¹Í”Ý…Ì¹½Ð…¸¥µ…”¸œ¤ì4(€€€€€€€¥˜€¡Í•É¥…°€„ôôÑ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°¤É•ÑÕÉ¸ì4(€€€€€€€Ñ¡¥Ì¹}¥µ…•-•ä€ô­•äì4(€€€€€€€Ñ¡¥Ì¹}½‰©•ÑUÉ°€ôUI0¹É•…Ñ•=‰©•ÑUI0¡‰±½ˆ¤ì4(€€€€€€€€¼¼-••ÀÑ¡”Á±…•¡½±‘•ÈÕ¹Ñ¥°Ñ¡”‰É½ÝÍ•È…ÑÕ…±±ä‘•½‘•ÌÑ¡”¥µ…”¸4(€€€€€€€Ñ¡¥Ì¹}ÍÑ¥±°¹ÍÉŒ€ôÑ¡¥Ì¹}½‰©•ÑUÉ°ì4(€€€€€ô¤4(€€€€€€¹…Ñ   ¤€ôøì4(€€€€€€€¥˜€¡Í•É¥…°€„ôôÑ¡¥Ì¹}É•ÅÕ•ÍÑM•É¥…°¤É•ÑÕÉ¸ì4(€€€€€€€Ñ¡¥Ì¹}ÍÑ¥±±…¥±• ¤ì4(€€€€€ô¤ì4(€ô4)ô4(4)¥˜€ …ÕÍÑ½µ±•µ•¹ÑÌ¹•Ð É½½µÉ…™Ðµ•‘¥Ñ½Èµ…Éœ¤¤ì4(€ÕÍÑ½µ±•µ•¹ÑÌ¹‘•™¥¹” É½½µÉ…™Ðµ•‘¥Ñ½Èµ…Éœ°I½½µÉ…™Ñ‘¥Ñ½É…É¤ì4)ô4)¥˜€ …ÕÍÑ½µ±•µ•¹ÑÌ¹•Ð É½½µÉ…™Ðµ…µ•É„µÑ¡Õµ‰¹…¥°œ¤¤ì4(€ÕÍÑ½µ±•µ•¹ÑÌ¹‘•™¥¹” É½½µÉ…™Ðµ…µ•É„µÑ¡Õµ‰¹…¥°œ°I½½µÉ…™Ñ…µ•É…Q¡Õµ‰¹…¥°¤ì4)ô4)¥˜€ …ÕÍÑ½µ±•µ•¹ÑÌ¹•Ð É½½µÉ…™Ðµ½‰©•Ðµ½¹ÑÉ½°œ¤¤ì4(€ÕÍÑ½µ±•µ•¹ÑÌ¹‘•™¥¹” É½½µÉ…™Ðµ½‰©•Ðµ½¹ÑÉ½°œ°I½½µÉ…™Ñ=‰©•Ñ½¹ÑÉ½°¤ì4)ô4)¥˜€ …ÕÍÑ½µ±•µ•¹ÑÌ¹•Ð É½½µÉ…™Ðµ•¹Ñ¥Ñäµµ•¹Ôœ¤¤ì4(€ÕÍÑ½µ±•µ•¹ÑÌ¹‘•™¥¹” É½½µÉ…™Ðµ•¹Ñ¥Ñäµµ•¹Ôœ°I½½µÉ…™Ñ¹Ñ¥Ñå5•¹Ô¤ì4)ô4)¥˜€ …ÉÉ…ä¹¥ÍÉÉ…ä¡Ý¥¹‘½Ü¹ÕÍÑ½µ…É‘Ì¤¤Ý¥¹‘½Ü¹ÕÍÑ½µ…É‘Ì€ômtì4)¥˜€ …Ý¥¹‘½Ü¹ÕÍÑ½µ…É‘Ì¹Í½µ”¡…É€ôø…É¹ÑåÁ”€ôôô€É½½µÉ…™Ðµ•‘¥Ñ½Èµ…Éœ¤¤ì4(€Ý¥¹‘½Ü¹ÕÍÑ½µ…É‘Ì¹ÁÕÍ ¡ìÑåÁ”è€É½½µÉ…™Ðµ•‘¥Ñ½Èµ…Éœ°¹…µ”è€I½½µÉ…™Ð‘¥Ñ½Èœ°4(€€€‘•ÍÉ¥ÁÑ¥½¸è€‘¥Ð…¹ÁÕ‰±¥Í Ñ¡”M•½¹±½½È±…å½ÕÐÕÍ¥¹œ!½µ”ÍÍ¥ÍÑ…¹Ð…ÕÑ¡•¹Ñ¥…Ñ¥½¸¸œô¤ì4)ô4