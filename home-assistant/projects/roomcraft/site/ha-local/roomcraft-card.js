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

function updatePlanCard(config, image, hotspots) {
  const next = structuredClone(config);
  const card = findPlanCard(next);
  const retained = Array.isArray(card.elements)
    ? card.elements.filter(element => isObject(element) && element.type !== 'state-icon')
    : [];
  card.image = image;
  card.elements = [...hotspots.map(hotspot => {
    const element = { ...hotspot };
    delete element.id;
    return element;
  }), ...retained];
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
      const { next } = updatePlanCard(latest, image, project.hotspots);
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

customElements.define('roomcraft-editor-card', RoomcraftEditorCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'roomcraft-editor-card', name: 'Roomcraft Editor',
  description: 'Edit and publish the Second Floor layout using Home Assistant authentication.' });
