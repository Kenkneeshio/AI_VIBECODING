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
const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;

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

function editableHotspots(elements) {
  return Array.isArray(elements)
    ? elements.filter(element => isObject(element) && element.type === 'state-icon')
      .map((element, index) => ({ ...element, id: typeof element.id === 'string' ? element.id : `ha-dashboard-${index + 1}` }))
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
  const percent = (value, span) => `${Math.round(value / span * 10000) / 100}%`;
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
        left: percent(item.x, PLAN_WIDTH), top: percent(item.y, PLAN_HEIGHT),
        width: percent(item.w, PLAN_WIDTH), height: percent(item.h, PLAN_HEIGHT),
        transform: `translate(-50%, -50%) rotate(${item.rotation || 0}deg)`,
        'z-index': 3,
      },
    };
  });
}

function updatePlanCard(config, image, hotspots, items = []) {
  const next = structuredClone(config);
  const card = findPlanCard(next);
  const retained = Array.isArray(card.elements)
    ? card.elements.filter(element => isObject(element) && element.type !== 'state-icon' &&
      !(element.type === CAMERA_ELEMENT_TYPE && typeof element.roomcraft_item_id === 'string'))
    : [];
  card.image = image;
  card.elements = [...hotspots.map(hotspot => {
    const element = { ...hotspot };
    delete element.id;
    return element;
  }), ...cameraThumbnailElements(items), ...retained];
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
  if (size(16) !== 1536 || size(20) !== 1024) {
    throw new Error('The plan PNG must be 1536 × 1024 pixels.');
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
    return {
      project: isObject(config.roomcraft_layout) ? config.roomcraft_layout : null,
      imageUrl,
      hotspots: editableHotspots(card.elements),
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
    if (this._config.preview_mode !== 'offline' && cameraState?.state === 'streaming' && this._showLive()) {
      ++this._requestSerial;
      this._revokeImage();
      return;
    }
    if (this._liveElement?.parentNode === this._media) this._liveElement.remove();
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
if (!Array.isArray(window.customCards)) window.customCards = [];
if (!window.customCards.some(card => card.type === 'roomcraft-editor-card')) {
  window.customCards.push({ type: 'roomcraft-editor-card', name: 'Roomcraft Editor',
    description: 'Edit and publish the Second Floor layout using Home Assistant authentication.' });
}
