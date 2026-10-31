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
const ACTIVATION_SERVICES = new Map([['scene', 'turn_on'], ['script', 'turn_on'], ['button', 'press']]);

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
  return typeof item.id === 'string' && item.id.length > 0 && item.id.length <= 128 &&
    typeof entity === 'string' && (entity === '' || /^camera\.[a-z0-9_]+$/.test(entity)) &&
    typeof image === 'string' && (image === '' || /^image\.[a-z0-9_]+$/.test(image)) &&
    (item.previewMode === undefined || ['event', 'live', 'offline'].includes(item.previewMode)) &&
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
    (item.tapAction === undefined || CONTROL_ACTIONS.includes(item.tapAction)) &&
    (item.holdAction === undefined || CONTROL_ACTIONS.includes(item.holdAction)) &&
    (item.tapEntityId === undefined || typeof item.tapEntityId === 'string' &&
      (item.tapEntityId === '' || /^[a-z_]+\.[a-z0-9_]+$/.test(item.tapEntityId))) &&
    (item.holdEntityId === undefined || typeof item.holdEntityId === 'string' &&
      (item.holdEntityId === '' || /^[a-z_]+\.[a-z0-9_]+$/.test(item.holdEntityId))) &&
    [item.x, item.y, item.w, item.h, item.rotation ?? 0].every(value => typeof value === 'number' && Number.isFinite(value)) &&
    item.x >= 0 && item.x <= PLAN_WIDTH && item.y >= 0 && item.y <= PLAN_HEIGHT &&
    item.w >= 12 && item.w <= PLAN_WIDTH && item.h >= 12 && item.h <= PLAN_HEIGHT;
}

function objectControlElements(items) {
  return items.filter(item => isObject(item) && item.type !== 'cameraThumbnail' && item.entityId).map(item => {
    if (!validObjectControl(item)) throw new Error('The layout has an invalid object control.');
    return {
      type: OBJECT_ELEMENT_TYPE,
      roomcraft_item_id: item.id,
      entity: item.entityId,
      title: item.controlLabel || item.name || item.entityId,
      control_icon: item.controlIcon || '',
      control_zone: item.type === 'controlZone',
      roomcraft_tap_action: item.tapAction || 'auto',
      roomcraft_hold_action: item.holdAction || 'auto',
      ...(item.tapEntityId ? { roomcraft_tap_entity: item.tapEntityId } : {}),
      ...(item.holdEntityId ? { roomcraft_hold_entity: item.holdEntityId } : {}),
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
  if (!isObject(result.style) || result.style.top !== previousTop) return result;
  const stateLabel = result.type === 'state-label' && typeof result.entity === 'string' &&
    (result.entity === 'sensor.time' || result.entity.startsWith('weather.'));
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
    ...retained.map(element => previousScene !== ROOMCRAFT_SCENE
      ? migrateHeaderChrome(element, previousScene) : structuredClone(element))];
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
    throw new Error('The plan PNG must be 1536 × 864 pixels.');
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

/** The artwork stays untouched: the object's own footprint is its hit target. */
class RoomcraftObjectControl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._holdTimer = null;
    this._held = false;
    this._moved = false;
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
            !/^[a-z_]+\.[a-z0-9_]+$/.test(config.roomcraft_hold_entity)))) {
      throw new Error('The Roomcraft object has an invalid device binding.');
    }
    this._config = config;
    if (!this._button) this._build();
    this._refresh();
  }

  set hass(value) { this._hass = value; this._refresh(); }
  disconnectedCallback() { clearTimeout(this._holdTimer); }

  _build() {
    const style = document.createElement('style');
    style.textContent = ':host{display:block;box-sizing:border-box;min-width:32px;min-height:32px}.target{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;border-radius:12px;background:transparent;cursor:pointer;touch-action:manipulation}.target:hover,.target:focus-visible{outline:2px solid #7ee8d2;outline-offset:1px;background:#42bba81c}.target[data-state="on"]:not([data-zone="true"])::after{content:"";position:absolute;inset:15%;border-radius:50%;box-shadow:0 0 16px 6px #ffe79a75;pointer-events:none}.target[data-state="unavailable"]{cursor:help}.target[data-state="unavailable"]:focus-visible{outline-color:#f8c36b}.hint{display:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:22px;height:22px;color:#ecfff7;filter:drop-shadow(0 1px 3px #102a2a)}.target:hover .hint,.target:focus-visible .hint{display:block}';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'target';
    button.addEventListener('pointerdown', event => {
      if (event.button !== undefined && event.button !== 0) return;
      clearTimeout(this._holdTimer);
      this._held = false;
      this._moved = false;
      this._pointerStart = [event.clientX, event.clientY];
      this._holdTimer = setTimeout(() => {
        if (this._moved) return;
        this._held = true;
        this._activate('hold');
      }, 550);
    });
    button.addEventListener('pointermove', event => {
      if (!this._pointerStart) return;
      if (Math.hypot(event.clientX - this._pointerStart[0], event.clientY - this._pointerStart[1]) > 8) {
        this._moved = true;
        clearTimeout(this._holdTimer);
      }
    });
    const stopHold = () => { clearTimeout(this._holdTimer); this._pointerStart = null; };
    button.addEventListener('pointerup', stopHold);
    button.addEventListener('pointercancel', stopHold);
    button.addEventListener('click', () => {
      if (this._held || this._moved) { this._held = false; this._moved = false; return; }
      this._activate('tap');
    });
    button.addEventListener('contextmenu', event => {
      event.preventDefault();
      clearTimeout(this._holdTimer);
      if (this._held) { this._held = false; return; }
      this._activate('hold');
    });
    const icon = document.createElement('ha-icon');
    icon.className = 'hint';
    button.append(icon);
    this.shadowRoot.append(style, button);
    this._button = button;
    this._icon = icon;
  }

  _refresh() {
    if (!this._button || !this._config) return;
    const state = this._hass?.states?.[this._config.entity];
    const value = state?.state || 'unavailable';
    const domain = this._config.entity.split('.')[0];
    const actionOnly = domain === 'scene' || domain === 'button';
    const displayValue = actionOnly && !['unavailable', 'unknown'].includes(value) ? 'ready' : value;
    const active = !actionOnly && ['on', 'open', 'playing', 'cleaning', 'heat', 'cool', 'heating', 'cooling'].includes(value);
    this._button.setAttribute('data-state', value === 'unavailable' || value === 'unknown' ? 'unavailable' : active ? 'on' : 'off');
    this._button.setAttribute('data-zone', String(this._config.control_zone === true));
    this._icon.icon = this._config.control_icon || state?.attributes?.icon || 'mdi:gesture-tap';
    const label = this._config.title || state?.attributes?.friendly_name || this._config.entity;
    const tap = this._actionFor('tap');
    const hold = this._actionFor('hold');
    const describe = (action, gesture) => action === 'toggle' ? `${gesture} to toggle` :
      action === 'activate' ? `${gesture} to run` :
      action === 'more-info' ? `${gesture} for details` : `${gesture} disabled`;
    this._button.setAttribute('aria-label', `${label}: ${displayValue}. ${describe(tap, 'Tap')}; ${describe(hold, 'hold')}.`);
    this._button.title = `${label} · ${displayValue}`;
  }

  _actionFor(kind) {
    const target = this._targetFor(kind);
    const domain = target.split('.')[0];
    let action = this._config[kind === 'hold' ? 'roomcraft_hold_action' : 'roomcraft_tap_action'] || 'auto';
    if (action === 'auto') action = kind === 'hold' ? 'more-info' :
      ACTIVATION_SERVICES.has(domain) ? 'activate' :
      ['light', 'switch', 'fan', 'input_boolean'].includes(domain) ? 'toggle' : 'more-info';
    if (action === 'activate' && !ACTIVATION_SERVICES.has(domain)) action = 'more-info';
    return action;
  }

  _targetFor(kind) {
    return this._config?.[kind === 'hold' ? 'roomcraft_hold_entity' : 'roomcraft_tap_entity'] ||
      this._config?.entity || '';
  }

  _activate(kind) {
    const entityId = this._config?.entity;
    if (!entityId || !this._hass) return;
    let action = this._actionFor(kind);
    if (action === 'none') return;
    const targetId = this._targetFor(kind);
    if (['toggle', 'activate'].includes(action) &&
        ['unavailable', 'unknown'].includes(this._hass.states?.[targetId]?.state)) {
      action = 'more-info';
    }
    if (action === 'toggle' || action === 'activate') {
      try {
        const domain = targetId.split('.')[0];
        const service = action === 'activate' ? ACTIVATION_SERVICES.get(domain) : 'toggle';
        Promise.resolve(this._hass.callService(action === 'activate' ? domain : 'homeassistant',
          service, { entity_id: targetId }))
          .catch(() => this._showDetails(targetId));
      } catch { this._showDetails(targetId); }
    } else {
      this._showDetails(targetId);
    }
  }

  _showDetails(entityId) {
    this.dispatchEvent(new CustomEvent('hass-more-info', {
      bubbles: true, composed: true, detail: { entityId },
    }));
  }
}

/** A single doorway into every HA entity; the plan itself stays uncluttered. */
class RoomcraftEntityMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._section = 'on-plan';
    this._limit = 80;
    this._registry = [];
    this._devices = [];
    this._areas = [];
    this._onKeyDown = event => { if (event.key === 'Escape') this._close(); };
  }

  setConfig(config) {
    if (!isObject(config)) throw new Error('Invalid Roomcraft entity menu.');
    this._config = config;
    if (!this._launch) this._build();
  }

  set hass(value) {
    this._hass = value;
    if (this._portal) this._renderRows();
  }

  disconnectedCallback() { this._close(); }

  _build() {
    const style = document.createElement('style');
    style.textContent = ':host{display:block}.launch{width:43px;height:43px;display:grid;place-items:center;border:1px solid #d8e3d5;border-radius:12px;background:#183336ed;color:#f5f7ee;box-shadow:0 3px 12px #14242180;cursor:pointer;font:700 24px/1 system-ui}.launch:focus-visible{outline:3px solid #81dfcc;outline-offset:2px}';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'launch';
    button.textContent = '☰';
    button.title = 'Devices and sensors';
    button.setAttribute('aria-label', 'Open devices and sensors menu');
    button.addEventListener('click', () => this._open());
    this.shadowRoot.append(style, button);
    this._launch = button;
  }

  _close() {
    document.removeEventListener('keydown', this._onKeyDown);
    this._portal?.remove();
    this._portal = null;
  }

  _open() {
    if (this._portal) return;
    this._limit = 80;
    const portal = document.createElement('div');
    const root = portal.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = ':host{position:fixed;inset:0;z-index:10000;display:block;font:14px/1.4 system-ui,sans-serif;color:#ecf4ee}.scrim{position:absolute;inset:0;background:#071517b8}.drawer{position:absolute;top:0;bottom:0;left:0;width:min(620px,100vw);box-sizing:border-box;display:flex;flex-direction:column;background:#142a2c;box-shadow:12px 0 32px #0008}.head{padding:16px 18px 8px;border-bottom:1px solid #ffffff24}.title{display:flex;align-items:center;justify-content:space-between;gap:10px}.title strong{font-size:19px}.close{border:1px solid #a9cbc250;background:#294447;color:white;border-radius:9px;min-width:38px;min-height:38px;cursor:pointer}.links{display:flex;gap:12px;flex-wrap:wrap;margin:9px 0 12px}.links a{color:#ace5d5;text-decoration:none;font-weight:600}.search{box-sizing:border-box;width:100%;min-height:43px;border:1px solid #8ab3a9;border-radius:9px;background:#f4f9f6;color:#153032;padding:8px 11px;font:inherit}.sections{display:flex;gap:7px;overflow-x:auto;padding:10px 18px;border-bottom:1px solid #ffffff20}.section{flex:none;border:1px solid #799a90;border-radius:999px;background:transparent;color:#deebe5;padding:7px 11px;cursor:pointer;font:inherit}.section[aria-pressed="true"]{background:#bfe9d8;color:#15352d;border-color:#bfe9d8;font-weight:700}.summary{padding:8px 18px;color:#a9c9c0;font-size:12px}.rows{overflow:auto;flex:1;padding:0 12px 14px}.row{display:flex;align-items:center;gap:8px;margin:5px 0;border:1px solid #ffffff22;border-radius:10px;background:#203b3d}.detail{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:2px;padding:9px 11px;border:0;background:transparent;color:inherit;text-align:left;cursor:pointer;font:inherit}.row-icon{flex:none;width:20px;height:20px;margin-left:8px;color:#bfe9d8}.name{font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.meta{color:#a9c5bd;font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}.state{flex:none;font-size:11px;color:#cde8df;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.toggle{flex:none;min-width:42px;min-height:38px;margin-right:5px;border:1px solid #87bcb0;border-radius:8px;background:#31594d;color:white;cursor:pointer}.toggle[disabled]{opacity:.45;cursor:default}.more{display:block;width:100%;margin:8px 0;padding:10px;border:1px solid #87bcb0;border-radius:8px;background:#31594d;color:white;cursor:pointer}.empty{padding:28px 10px;text-align:center;color:#b8d1c8}@media(max-width:540px){.head{padding:11px 12px 6px}.sections{padding:8px 12px}.rows{padding:0 8px 10px}.state{max-width:74px}}';
    const scrim = document.createElement('div');
    scrim.className = 'scrim';
    scrim.addEventListener('click', () => this._close());
    const drawer = document.createElement('section');
    drawer.className = 'drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Devices and sensors');
    const head = document.createElement('header');
    head.className = 'head';
    const title = document.createElement('div');
    title.className = 'title';
    const heading = document.createElement('strong');
    heading.textContent = 'Home controls';
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'close';
    close.textContent = '×';
    close.setAttribute('aria-label', 'Close devices and sensors');
    close.addEventListener('click', () => this._close());
    title.append(heading, close);
    const links = document.createElement('nav');
    links.className = 'links';
    for (const [label, href] of [
      ['Live Home', '/second-floor/live'], ['Layout Studio', '/second-floor/studio'],
      ['Main Dashboard', '/dashboard-dashboard/0'],
    ]) {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      links.append(link);
    }
    const search = document.createElement('input');
    search.type = 'search';
    search.className = 'search';
    search.placeholder = 'Search every entity, room, or device';
    search.setAttribute('aria-label', 'Search devices and sensors');
    search.addEventListener('input', () => { this._limit = 80; this._renderRows(); });
    head.append(title, links, search);
    const sections = document.createElement('div');
    sections.className = 'sections';
    const summary = document.createElement('div');
    summary.className = 'summary';
    const rows = document.createElement('div');
    rows.className = 'rows';
    drawer.append(head, sections, summary, rows);
    root.append(style, scrim, drawer);
    document.body.append(portal);
    document.addEventListener('keydown', this._onKeyDown);
    this._portal = portal;
    this._sections = sections;
    this._summary = summary;
    this._rows = rows;
    this._search = search;
    this._renderSections();
    this._renderRows();
    search.focus();
    this._loadRegistry();
  }

  async _loadRegistry() {
    if (typeof this._hass?.callWS !== 'function') return;
    const requests = ['config/entity_registry/list', 'config/device_registry/list', 'config/area_registry/list'];
    const results = await Promise.allSettled(requests.map(type => this._hass.callWS({ type })));
    if (!this._portal) return;
    [this._registry, this._devices, this._areas] = results.map(result =>
      result.status === 'fulfilled' && Array.isArray(result.value) ? result.value : []);
    this._renderRows();
  }

  _renderSections() {
    if (!this._sections) return;
    this._sections.replaceChildren();
    const choices = [['on-plan', 'On plan'], ['all', 'All entities'],
      ...(Array.isArray(this._config?.sections) ? this._config.sections
        .filter(section => isObject(section) && typeof section.title === 'string' && Array.isArray(section.entities))
        .map(section => [section.title, section.title]) : [])];
    for (const [key, label] of choices) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'section';
      button.textContent = label;
      button.setAttribute('aria-pressed', String(this._section === key));
      button.addEventListener('click', () => {
        this._section = key;
        this._limit = 80;
        this._renderSections();
        this._renderRows();
      });
      this._sections.append(button);
    }
  }

  _catalog() {
    const states = this._hass?.states || {};
    const byId = new Map();
    for (const [entityId, state] of Object.entries(states)) {
      byId.set(entityId, { entityId, name: state.attributes?.friendly_name || entityId,
        state: state.state, disabled: false, area: '', domain: entityId.split('.')[0] });
    }
    const areas = new Map(this._areas.map(area => [area.area_id, area.name]));
    const devices = new Map(this._devices.map(device => [device.id, device]));
    for (const entity of this._registry) {
      if (typeof entity.entity_id !== 'string') continue;
      const record = byId.get(entity.entity_id) || { entityId: entity.entity_id,
        name: entity.entity_id, state: 'disabled', disabled: true,
        area: '', domain: entity.entity_id.split('.')[0] };
      record.name = entity.name || entity.original_name || record.name;
      record.disabled = Boolean(entity.disabled_by) || !byId.has(entity.entity_id);
      record.area = areas.get(entity.area_id || devices.get(entity.device_id)?.area_id) || '';
      byId.set(entity.entity_id, record);
    }
    const bound = new Map((Array.isArray(this._config?.bound_objects) ? this._config.bound_objects : [])
      .filter(item => isObject(item) && typeof item.entity_id === 'string')
      .map(item => [item.entity_id, item]));
    for (const record of byId.values()) {
      const item = bound.get(record.entityId);
      if (item) record.name = item.label || record.name;
      record.onPlan = Boolean(item);
      record.icon = item?.icon || '';
    }
    return [...byId.values()];
  }

  _renderRows() {
    if (!this._portal || !this._rows) return;
    const search = this._search.value.trim().toLocaleLowerCase();
    const featured = Array.isArray(this._config?.sections)
      ? this._config.sections.find(section => isObject(section) && section.title === this._section) : null;
    const featuredIds = new Set(Array.isArray(featured?.entities) ? featured.entities : []);
    const matches = this._catalog().filter(item => {
      if (search) return `${item.name} ${item.entityId} ${item.area} ${item.domain}`.toLocaleLowerCase().includes(search);
      if (this._section === 'on-plan') return item.onPlan;
      if (this._section === 'all') return true;
      return featuredIds.has(item.entityId);
    }).sort((a, b) => (a.area || 'zz').localeCompare(b.area || 'zz') ||
      a.domain.localeCompare(b.domain) || a.name.localeCompare(b.name));
    this._summary.textContent = `${matches.length} entities · ${this._registry.length ? 'including disabled registrations' : 'live states'}`;
    this._rows.replaceChildren();
    for (const item of matches.slice(0, this._limit)) {
      const row = document.createElement('div');
      row.className = 'row';
      if (item.icon) {
        const icon = document.createElement('ha-icon');
        icon.className = 'row-icon';
        icon.icon = item.icon;
        row.append(icon);
      }
      const detail = document.createElement('button');
      detail.type = 'button';
      detail.className = 'detail';
      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = item.name;
      const meta = document.createElement('span');
      meta.className = 'meta';
      meta.textContent = `${item.area ? item.area + ' · ' : ''}${item.entityId}`;
      detail.append(name, meta);
      detail.addEventListener('click', () => { this._close(); this._showDetails(item.entityId); });
      const status = document.createElement('span');
      status.className = 'state';
      status.textContent = item.disabled ? 'Disabled' :
        ['scene', 'button'].includes(item.domain) && !['unavailable', 'unknown'].includes(item.state)
          ? 'Ready' : item.state || 'Unknown';
      row.append(detail, status);
      if (['light', 'switch', 'fan', 'input_boolean'].includes(item.domain)) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'toggle';
        toggle.textContent = '⏻';
        toggle.title = `Toggle ${item.name}`;
        toggle.setAttribute('aria-label', `Toggle ${item.name}`);
        toggle.disabled = item.disabled || ['unavailable', 'unknown'].includes(item.state);
        toggle.addEventListener('click', () => {
          try {
            Promise.resolve(this._hass.callService('homeassistant', 'toggle', { entity_id: item.entityId }))
              .catch(() => this._showDetails(item.entityId));
          } catch { this._showDetails(item.entityId); }
        });
        row.append(toggle);
      } else if (ACTIVATION_SERVICES.has(item.domain)) {
        const run = document.createElement('button');
        run.type = 'button';
        run.className = 'toggle';
        run.textContent = 'Run';
        run.title = `Run ${item.name}`;
        run.setAttribute('aria-label', `Run ${item.name}`);
        run.disabled = item.disabled || ['unavailable', 'unknown'].includes(item.state);
        run.addEventListener('click', () => {
          try {
            Promise.resolve(this._hass.callService(item.domain, ACTIVATION_SERVICES.get(item.domain),
              { entity_id: item.entityId })).catch(() => this._showDetails(item.entityId));
          } catch { this._showDetails(item.entityId); }
        });
        row.append(run);
      }
      this._rows.append(row);
    }
    if (!matches.length) {
      const empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = search ? 'No matching devices or sensors.' : 'No controls in this group yet.';
      this._rows.append(empty);
    } else if (matches.length > this._limit) {
      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'more';
      more.textContent = `Show more (${matches.length - this._limit} remaining)`;
      more.addEventListener('click', () => { this._limit += 80; this._renderRows(); });
      this._rows.append(more);
    }
  }

  _showDetails(entityId) {
    this.dispatchEvent(new CustomEvent('hass-more-info', {
      bubbles: true, composed: true, detail: { entityId },
    }));
  }
}

/**
 * A picture-elements overlay. The still is fetched through the current HA
 * session; no camera token or snapshot URL is stored in public Site assets.
 * A battery doorbell is never woken by rendering this element. When HA itself
 * reports an active stream, its native image element can show that stream.
 */
class RoomcraftCameraThumbnail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._requestSerial = 0;
    this._imageKey = '';
    this._pendingKey = '';
    this._objectUrl = null;
    this._liveElement = null;
    this._lastFailure = 0;
  }

  setConfig(config) {
    if (!isObject(config) || typeof config.camera_entity !== 'string' ||
        (config.camera_entity && !/^camera\.[a-z0-9_]+$/.test(config.camera_entity)) ||
        typeof config.image_entity !== 'string' ||
        (config.image_entity && !/^image\.[a-z0-9_]+$/.test(config.image_entity))) {
      throw new Error('The Roomcraft camera thumbnail has an invalid entity.');
    }
    this._config = config;
    if (!this._frame) this._build();
    this._name.textContent = typeof config.title === 'string' ? config.title : 'Camera';
    this._frame.setAttribute('aria-label', `Open ${this._name.textContent} camera details`);
    this._refresh();
  }

  set hass(value) {
    this._hass = value;
    this._refresh();
  }

  connectedCallback() { this._refresh(); }

  disconnectedCallback() {
    ++this._requestSerial;
    this._revokeImage();
  }

  _build() {
    const style = document.createElement('style');
    style.textContent = ':host{display:block;box-sizing:border-box;min-width:40px;min-height:40px}.frame{box-sizing:border-box;display:block;position:relative;width:100%;height:100%;min-height:40px;overflow:hidden;padding:0;border:2px solid #e4ebdf;border-radius:9px;background:#182a2c;color:#fff;box-shadow:0 4px 15px #1118;cursor:pointer;font:inherit;text-align:left}.media,.still,.live{position:absolute;inset:0;width:100%;height:100%}.still{object-fit:cover}.live{display:block;overflow:hidden}.veil{position:absolute;inset:0;background:linear-gradient(#0008,transparent 36%,transparent 62%,#000a);pointer-events:none}.head,.foot{position:absolute;left:7px;right:7px;z-index:2;font:600 10px/1.2 system-ui,sans-serif;text-shadow:0 1px 3px #000}.head{top:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.foot{bottom:6px}.message{position:absolute;inset:25px 7px 20px;display:flex;align-items:center;justify-content:center;text-align:center;color:#e1e9e3;font:500 10px/1.2 system-ui,sans-serif}.still[hidden],.message[hidden]{display:none}';
    const frame = document.createElement('button');
    frame.type = 'button';
    frame.className = 'frame';
    frame.addEventListener('click', () => {
      const entityId = this._config?.camera_entity;
      if (entityId) this.dispatchEvent(new CustomEvent('hass-more-info', {
        bubbles: true, composed: true, detail: { entityId },
      }));
    });
    const media = document.createElement('div');
    media.className = 'media';
    const still = document.createElement('img');
    still.className = 'still';
    still.alt = '';
    still.hidden = true;
    still.addEventListener('error', () => this._showUnavailable('Latest event unavailable'));
    const veil = document.createElement('div');
    veil.className = 'veil';
    const name = document.createElement('div');
    name.className = 'head';
    const foot = document.createElement('div');
    foot.className = 'foot';
    const message = document.createElement('div');
    message.className = 'message';
    media.append(still);
    frame.append(media, veil, name, foot, message);
    this.shadowRoot.append(style, frame);
    this._frame = frame;
    this._media = media;
    this._still = still;
    this._name = name;
    this._foot = foot;
    this._message = message;
  }

  _revokeImage() {
    if (this._objectUrl) URL.revokeObjectURL(this._objectUrl);
    this._objectUrl = null;
    this._imageKey = '';
    this._pendingKey = '';
  }

  _showUnavailable(message, footer = 'LATEST EVENT') {
    if (!this._frame) return;
    this._still.hidden = true;
    this._message.hidden = false;
    this._message.textContent = message;
    this._foot.textContent = footer;
  }

  _eventTime(state) {
    // Image entity state is the event timestamp. last_updated could simply be
    // an HA restart, so do not present it as the event time.
    const timestamp = typeof state?.state === 'string' ? Date.parse(state.state) : NaN;
    if (!Number.isFinite(timestamp)) return '';
    return new Intl.DateTimeFormat(undefined, {
      month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
    }).format(new Date(timestamp));
  }

  _showLive() {
    if (typeof customElements.get('hui-image-element') !== 'function') return false;
    if (this._liveCameraId !== this._config.camera_entity) {
      this._liveElement?.remove();
      this._liveElement = null;
    }
    if (!this._liveElement) {
      const element = document.createElement('hui-image-element');
      if (typeof element.setConfig !== 'function') return false;
      element.className = 'live';
      try {
        element.setConfig({
          type: 'image', entity: this._config.camera_entity,
          camera_image: this._config.camera_entity, camera_view: 'live',
          tap_action: { action: 'none' }, hold_action: { action: 'none' },
        });
      } catch { return false; }
      this._liveElement = element;
      this._liveCameraId = this._config.camera_entity;
    }
    if (this._liveElement.parentNode !== this._media) this._media.append(this._liveElement);
    this._liveElement.hass = this._hass;
    this._still.hidden = true;
    this._message.hidden = true;
    this._foot.textContent = 'LIVE';
    return true;
  }

  _refresh() {
    if (!this._frame || !this._hass || !this._config) return;
    const cameraId = this._config.camera_entity;
    const imageId = this._config.image_entity;
    const cameraState = this._hass.states?.[cameraId];
    const wantsLive = this._config.preview_mode === 'live';
    if (cameraId && (wantsLive || cameraState?.state === 'streaming') && this._showLive()) {
      ++this._requestSerial;
      this._revokeImage();
      return;
    }
    if (this._liveElement?.parentNode === this._media) this._liveElement.remove();
    if (wantsLive) {
      ++this._requestSerial;
      this._revokeImage();
      this._showUnavailable('Live view unavailable', 'LIVE');
      return;
    }
    if (this._config.preview_mode === 'offline') {
      ++this._requestSerial;
      this._revokeImage();
      this._showUnavailable('Camera preview off');
      return;
    }
    if (!imageId) {
      ++this._requestSerial;
      this._revokeImage();
      this._showUnavailable(cameraId ? 'Latest event image not assigned' : 'Assign a camera in Roomcraft');
      return;
    }
    const eventState = this._hass.states?.[imageId];
    const picture = eventState?.attributes?.entity_picture;
    const eventTime = this._eventTime(eventState);
    const footer = eventTime ? `LATEST EVENT · ${eventTime}` : 'LATEST EVENT';
    this._foot.textContent = footer;
    if (typeof picture !== 'string' || !picture) {
      ++this._requestSerial;
      this._revokeImage();
      this._showUnavailable('Latest event unavailable', footer);
      return;
    }
    let url;
    try { url = new URL(picture, location.origin); }
    catch { ++this._requestSerial; this._revokeImage(); this._showUnavailable('Latest event unavailable', footer); return; }
    // Restrict authenticated requests to HA's own image endpoint. Never send
    // the HA bearer token to a URL supplied by an arbitrary entity state.
    if (url.origin !== location.origin || !url.pathname.startsWith('/api/image_proxy/')) {
      ++this._requestSerial;
      this._revokeImage();
      this._showUnavailable('Latest event unavailable', footer);
      return;
    }
    const key = `${imageId}|${picture}|${eventState.state}`;
    if (this._imageKey === key && this._objectUrl) {
      this._still.hidden = false;
      this._message.hidden = true;
      return;
    }
    if (this._pendingKey === key) return;
    if (this._imageKey === key && Date.now() - this._lastFailure < 30000) return;
    if (this._imageKey !== key) this._revokeImage();
    this._imageKey = key;
    this._pendingKey = key;
    this._showUnavailable('Loading latest event…', footer);
    const serial = ++this._requestSerial;
    this._hass.fetchWithAuth(url.pathname + url.search)
      .then(response => {
        if (!response.ok) throw new Error(`Image request failed (${response.status}).`);
        return response.blob();
      })
      .then(blob => {
        if (!blob.type.startsWith('image/')) throw new Error('Image response was not an image.');
        if (serial !== this._requestSerial) return;
        this._revokeImage();
        this._imageKey = key;
        this._objectUrl = URL.createObjectURL(blob);
        this._still.src = this._objectUrl;
        this._still.hidden = false;
        this._message.hidden = true;
        this._foot.textContent = footer;
      })
      .catch(() => {
        if (serial !== this._requestSerial) return;
        this._pendingKey = '';
        this._lastFailure = Date.now();
        this._showUnavailable('Latest event unavailable', footer);
      });
  }
}

if (!customElements.get('roomcraft-editor-card')) {
  customElements.define('roomcraft-editor-card', RoomcraftEditorCard);
}
if (!customElements.get('roomcraft-camera-thumbnail')) {
  customElements.define('roomcraft-camera-thumbnail', RoomcraftCameraThumbnail);
}
if (!customElements.get('roomcraft-object-control')) {
  customElements.define('roomcraft-object-control', RoomcraftObjectControl);
}
if (!customElements.get('roomcraft-entity-menu')) {
  customElements.define('roomcraft-entity-menu', RoomcraftEntityMenu);
}
if (!Array.isArray(window.customCards)) window.customCards = [];
if (!window.customCards.some(card => card.type === 'roomcraft-editor-card')) {
  window.customCards.push({ type: 'roomcraft-editor-card', name: 'Roomcraft Editor',
    description: 'Edit and publish the Second Floor layout using Home Assistant authentication.' });
}
