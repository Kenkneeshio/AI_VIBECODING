import {readPersonTracks, trackingSnapshots, trackingStatus} from './storybook-tracking.mjs';
import {bindLiveModelLibrary} from './storybook-library.mjs';
import {createStorybookScene} from './storybook-scene.mjs';
import {enterFreeView, normalizeCameraView, populateCameraOptions, readSavedFreeView, resolveDefaultCameraView} from './storybook-camera.mjs';
import {bindFreeViewGestures} from './storybook-orbit.mjs';
import {placeStorybookTargets, readStorybookConfig, storybookFrame, storybookPreview} from './storybook-state.mjs';

const TAG = 'roomcraft-storybook-card';
const CONTROL_TAG = 'roomcraft-object-control';
const CAMERA_TAG = 'roomcraft-camera-thumbnail';
const EDITOR_TAG = 'roomcraft-editor-card';
const FRAME_INTERVAL = 1000 / 24;

class RoomcraftStorybookCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block;color:#3a3046;font:500 14px/1.4 system-ui,sans-serif}
        .world{background:#e7eadb;border-radius:16px;overflow:hidden}
        .bar{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;
          gap:4px 14px;padding:6px 14px;background:#f9f3e6;color:#3c3247;border-bottom:1px solid #d7c9b3}
        .brand{font:700 17px/1.25 Georgia,serif;letter-spacing:.025em}
        .bar nav,.view-controls{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
        .view-controls{gap:3px}
        .view-controls label{color:#6c5e74;font-size:12px}
        .view-controls select{min-height:44px;max-width:140px;border:1px solid #c9b8a0;border-radius:8px;
          background:#fffaf0;color:inherit;padding:0 7px;font:inherit}
        .default-status{color:#6c5e74;font-size:12px}
        .default-status:empty{display:none}
        .main-menu-wrap{position:relative}
        .bar .main-menu-button{border:1px solid #c9b8a0;background:#fffaf0;gap:7px}
        .main-menu{position:absolute;right:0;top:calc(100% + 7px);width:min(244px,85vw);max-height:min(72vh,550px);
          overflow:auto;padding:6px;border:1px solid #d7c9b3;border-radius:11px;background:#fffaf0;box-shadow:0 8px 24px #30263c30}
        .main-menu[hidden]{display:none}
        .main-menu button,.main-menu a{width:100%;justify-content:flex-start;text-align:left;border-radius:7px}
        .main-menu button:disabled{opacity:.35;cursor:default}
        .main-menu button:hover,.main-menu a:hover{background:#f2e9d9;text-decoration:none}
        .main-menu hr{margin:4px 6px;border:0;border-top:1px solid #e8dfce}
        .tracking-dialog{box-sizing:border-box;width:min(420px,calc(100% - 24px));max-height:75dvh;overflow:auto;
          border:1px solid #c9b8a0;border-radius:14px;background:#fffaf0;color:#3c3247;padding:16px}
        .tracking-dialog::backdrop{background:#182a2a9c}
        .tracking-dialog header{display:flex;align-items:center;justify-content:space-between;gap:12px}
        .tracking-dialog h2{font-size:17px;margin:0}
        .tracking-dialog button{font:inherit;min-height:44px;padding:6px 12px;border:1px solid #c9b8a0;
          border-radius:7px;background:#fffaf0;color:inherit}
        .tracking-list p{margin:10px 0 0;padding:8px;border:1px solid #eee2cf;border-radius:7px}
        .tracking-list small{display:block;margin-top:3px}
        .view-status{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
        a,.bar button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;
          min-height:44px;padding:0 9px;font:inherit;color:inherit;text-decoration:none}
        .bar button{border:0;background:transparent;border-radius:8px;cursor:pointer}
        a:hover,.bar button:hover{text-decoration:underline}
        :focus-visible{outline:2px solid #74516f;outline-offset:2px}
        .stage{position:relative;min-height:272px;height:calc(100dvh - 118px);isolation:isolate}
        canvas{display:block;width:100%;height:100%}
        canvas[data-free-view]{cursor:grab;touch-action:none}
        canvas[data-free-view]:active{cursor:grabbing}
        .free-view-hint{position:absolute;top:9px;left:50%;transform:translateX(-50%);box-sizing:border-box;
          width:max-content;max-width:calc(100% - 18px);padding:5px 10px;border-radius:8px;
          background:#443649;color:#fffaf0;text-align:center;font-size:12px;pointer-events:none}
        .overlay{position:absolute;inset:0;pointer-events:none}
        .device,.camera{position:absolute;transform:translate(-50%,-50%);pointer-events:auto}
        .camera{z-index:1}
        .camera::part(frame){border-color:#f8ecd4;background:#483a50}
        .device{z-index:2}
        .device:focus-within{z-index:3}
        .status{position:absolute;inset:0;display:grid;place-items:center;padding:20px;
          background:#e7eadb;text-align:center}
        .status[hidden],.status a[hidden],.bar button[hidden],.device[hidden],.camera[hidden]{display:none}
        .status-inner{max-width:27em}
        .status a{border-radius:9px;background:#53455e;color:#fff4e9;margin-top:8px}
        .tethers{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
        @media(max-width:540px){.bar{padding-inline:9px}.bar nav{gap:0}.bar a,.bar button{padding:0 6px}}
      </style>
      <section class="world" aria-label="Roomcraft Storybook">
        <header class="bar">
          <span class="brand">Roomcraft · Storybook</span>
          <nav aria-label="Storybook navigation">
            <div class="view-controls" role="group" aria-label="Camera view controls">
              <label for="storybook-view">View</label>
              <select id="storybook-view" aria-label="Camera view"></select>
              <span class="view-status" role="status" aria-live="polite"></span>
            </div>
            <span class="default-status" role="status" aria-live="polite"></span>
            <div class="main-menu-wrap">
              <button type="button" class="main-menu-button" aria-expanded="false" aria-controls="storybook-main-menu">Main menu <span aria-hidden="true">⌄</span></button>
              <div class="main-menu" id="storybook-main-menu" hidden>
                <a href="/second-floor/studio?panel=models" data-open-models>Object models</a>
                <button type="button" class="open-tracking" hidden>Presence tracking</button>
                <a href="/second-floor/studio">Studio</a>
                <a href="/second-floor/plan">Floor plan</a>
                <button type="button" class="weather" hidden></button>
                <hr>
                <button type="button" data-camera="left">Rotate view left</button>
                <button type="button" data-camera="right">Rotate view right</button>
                <button type="button" data-camera="out">Zoom out</button>
                <button type="button" data-camera="in">Zoom in</button>
                <button type="button" data-camera="reset">Reset to Top down</button>
                <button type="button" data-camera="save-default" hidden>Save as default</button>
                <button type="button" data-camera="clear-default" hidden>Use Top down as default</button>
              </div>
            </div>
          </nav>
        </header>
        <div class="stage">
          <canvas role="img" aria-label="Three-dimensional cutaway of the second floor"></canvas>
          <span id="free-view-hint" class="free-view-hint" hidden>Drag or use arrow keys to orbit. Pinch, scroll, or use +/− to zoom.</span>
          <svg class="tethers" aria-hidden="true"></svg>
          <div class="overlay"></div>
          <div class="status"><div class="status-inner">
            <div role="status">Opening the storybook…</div><a href="/second-floor/plan" hidden>Open floor plan</a>
          </div></div>
        </div>
      </section>
      <dialog class="tracking-dialog" aria-label="Presence tracking">
        <header><h2>Presence tracking</h2><button type="button" class="close-tracking">Close</button></header>
        <div class="tracking-list"></div>
      </dialog>`;
    bindLiveModelLibrary(this);
    this.stage = this.shadowRoot.querySelector('.stage');
    this.canvas = this.shadowRoot.querySelector('canvas');
    this.overlay = this.shadowRoot.querySelector('.overlay');
    this.tethers = this.shadowRoot.querySelector('.tethers');
    this.weather = this.shadowRoot.querySelector('.weather');
    this.status = this.shadowRoot.querySelector('.status');
    this.viewSelect = this.shadowRoot.querySelector('#storybook-view');
    this.viewStatus = this.shadowRoot.querySelector('.view-status');
    this.defaultStatus = this.shadowRoot.querySelector('.default-status');
    this.saveDefaultButton = this.shadowRoot.querySelector('[data-camera=save-default]');
    this.clearDefaultButton = this.shadowRoot.querySelector('[data-camera=clear-default]');
    this.freeViewHint = this.shadowRoot.querySelector('#free-view-hint');
    this.cameraView = resolveDefaultCameraView(null);
    this.menuButton = this.shadowRoot.querySelector('.main-menu-button');
    this.mainMenu = this.shadowRoot.querySelector('.main-menu');
    this.trackingButton = this.shadowRoot.querySelector('.open-tracking');
    this.trackingDialog = this.shadowRoot.querySelector('.tracking-dialog');
    this.trackingList = this.shadowRoot.querySelector('.tracking-list');
    this.trackingButton.addEventListener('click', () => {
      this.setMainMenu(false, true);
      this.paintTracking();
      this.trackingDialog.showModal();
    });
    this.shadowRoot.querySelector('.close-tracking').addEventListener('click', () => this.trackingDialog.close());
    this.menuButton.addEventListener('click', () => this.setMainMenu(this.mainMenu.hidden));
    this.onMenuPointerDown = event => {
      const path = event.composedPath();
      if (!path.includes(this.menuButton) && !path.includes(this.mainMenu)) this.setMainMenu(false);
    };
    this.shadowRoot.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || this.mainMenu.hidden) return;
      event.preventDefault();
      event.stopPropagation();
      this.setMainMenu(false, true);
    });
    this.mainMenu.addEventListener('click', event => {
      if (event.target.closest('a, .weather')) this.setMainMenu(false);
    });
    populateCameraOptions(this.viewSelect);
    this.viewSelect.addEventListener('change', () => {
      const preset = this.viewSelect.value;
      this.changeView(preset === 'free' ? enterFreeView(this.cameraView) : preset);
    });
    for (const button of this.shadowRoot.querySelectorAll('[data-camera]')) {
      button.addEventListener('click', () => {
        const current = this.scene?.getView() || this.cameraView;
        switch (button.dataset.camera) {
          case 'left': this.changeView({...current, azimuth: current.azimuth - 15}); break;
          case 'right': this.changeView({...current, azimuth: current.azimuth + 15}); break;
          case 'out': this.changeView({...current, zoom: current.zoom - .15}); break;
          case 'in': this.changeView({...current, zoom: current.zoom + .15}); break;
          case 'reset':
            this.changeView('top');
            this.setMainMenu(false, true);
            break;
          case 'save-default':
            if (current.preset === 'free') this.saveStartupView(current);
            this.setMainMenu(false, true);
            break;
          case 'clear-default':
            this.saveStartupView(null);
            this.setMainMenu(false, true);
            break;
        }
      });
    }
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.onViewportResize = () => this.resize();
    this.motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    this.onMotionChange = () => this.schedule();
    this.onVisibility = () => {
      if (document.hidden) {
        this.freeViewGestures?.cancel();
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = undefined;
      } else this.schedule();
    };
    this.weather.addEventListener('click', () => {
      const entityId = this.model?.weather.weather_entity;
      if (entityId) this.dispatchEvent(new CustomEvent('hass-more-info',
        {bubbles: true, composed: true, detail: {entityId}}));
    });
    this.canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault();
      this.fail('The 3D view lost its graphics connection.');
    });
  }

  setConfig(config) {
    const dashboard = config.dashboard || 'second-floor';
    if (!/^[a-z0-9-]+$/.test(dashboard)) throw new Error('Invalid Roomcraft dashboard.');
    if (this.dashboard && this.dashboard !== dashboard) {
      this.startupViewRead = false;
      this.startupViewRequest = undefined;
      this.savedStartupView = null;
      this.cameraChanged = false;
      this.defaultStatus.textContent = '';
      this.reset();
      this.changeView('default', {remember: false});
    }
    this.dashboard = dashboard;
    this.load();
  }

  set hass(value) {
    const previous = this.session;
    this.session = value;
    this.updateDefaultViewButtons();
    this.watchPublishedLayout();
    if (previous?.connected === false && value?.connected === true) {
      this.startupViewRead = false;
      this.startupViewRequest = undefined;
      this.reset();
    }
    if (!this.model) {
      this.load();
      return;
    }
    if (value?.connected !== previous?.connected ||
        [...this.model.watch].some(id => value?.states?.[id] !== previous?.states?.[id])) this.refresh();
  }

  setMainMenu(open, returnFocus = false) {
    this.mainMenu.hidden = !open;
    this.menuButton.setAttribute('aria-expanded', String(open));
    if (returnFocus) this.menuButton.focus();
  }

  getCardSize() { return 8; }

  static trackSnapshots(states, ids) {
    return trackingSnapshots(states, ids);
  }

  static preview(config, states) {
    return storybookPreview(config, states);
  }

  watchPublishedLayout() {
    const connection = this.isConnected ? this.session?.connection : undefined;
    if (connection === this.configConnection) return;
    this.configSubscription?.then(unsubscribe => unsubscribe()).catch(() => {});
    this.configConnection = connection;
    this.configSubscription = connection?.subscribeEvents?.(event => {
      if (!this.isConnected || this.configConnection !== connection || event?.data?.url_path !== this.dashboard) return;
      this.reset();
      this.load();
    }, 'lovelace_updated');
    this.configSubscription?.catch(() => {});
  }

  connectedCallback() {
    this.watchPublishedLayout();
    this.freeViewGestures = bindFreeViewGestures(this.canvas, {
      getView: () => this.scene ? this.cameraView : null,
      onChange: view => this.changeView(view, {announce: false}),
    });
    this.resizeObserver.observe(this.stage);
    window.addEventListener('pointerdown', this.onMenuPointerDown);
    window.addEventListener('resize', this.onViewportResize);
    window.visualViewport?.addEventListener('resize', this.onViewportResize);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.addEventListener('change', this.onMotionChange);
    this.load();
  }

  disconnectedCallback() {
    this.setMainMenu(false);
    this.watchPublishedLayout();
    this.freeViewGestures?.dispose();
    this.freeViewGestures = undefined;
    this.resizeObserver.disconnect();
    window.removeEventListener('pointerdown', this.onMenuPointerDown);
    window.removeEventListener('resize', this.onViewportResize);
    window.visualViewport?.removeEventListener('resize', this.onViewportResize);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.removeEventListener('change', this.onMotionChange);
    this.startupViewRead = false;
    this.startupViewRequest = undefined;
    this.cameraChanged = false;
    this.reset();
  }

  async load() {
    if (!this.isConnected || !this.dashboard || !this.session || this.model || this.loading || this.failed) return;
    this.status.hidden = false;
    this.status.querySelector('[role=status]').textContent = 'Opening the storybook…';
    const request = {};
    this.loading = request;
    let waitTimer;
    try {
      const [config] = await Promise.all([
        this.session.callWS({type: 'lovelace/config', url_path: this.dashboard}),
        Promise.race([
          Promise.all([customElements.whenDefined(CONTROL_TAG), customElements.whenDefined(CAMERA_TAG)]),
          new Promise((_, reject) => {
            waitTimer = setTimeout(() => reject(new Error('Roomcraft controls unavailable.')), 7000);
          }),
        ]),
      ]);
      if (!this.isConnected || this.loading !== request) return;
      this.loadStartupView();
      this.model = readStorybookConfig(config);
      this.scene = createStorybookScene(this.canvas, this.model.layout);
      this.scene.setView(this.cameraView);
      this.syncFreeViewMode();
      this.controls = this.model.controls.map(config => {
        const camera = config.type === `custom:${CAMERA_TAG}`;
        const element = document.createElement(camera ? CAMERA_TAG : CONTROL_TAG);
        element.className = camera ? 'camera' : 'device';
        element.hidden = true;
        element.setAttribute('data-renderer', 'storybook');
        element.setConfig(config);
        this.overlay.append(element);
        return {config, element, camera};
      });
      this.status.hidden = true;
      this.updateDefaultViewButtons();
      this.resize();
      this.refresh();
    } catch {
      if (this.loading === request) this.fail('The storybook could not open on this screen.');
    } finally {
      clearTimeout(waitTimer);
      if (this.loading === request) this.loading = undefined;
    }
  }

  syncFreeViewMode() {
    const active = Boolean(this.scene) && this.cameraView.preset === 'free';
    this.canvas.toggleAttribute('data-free-view', active);
    this.freeViewHint.hidden = !active;
    if (active) {
      this.canvas.tabIndex = 0;
      this.canvas.setAttribute('aria-describedby', this.freeViewHint.id);
    } else {
      this.canvas.removeAttribute('tabindex');
      this.canvas.removeAttribute('aria-describedby');
    }
  }

  updateDefaultViewButtons() {
    const available = Boolean(this.scene) && Boolean(this.session?.connected);
    this.saveDefaultButton.hidden = !this.scene || this.cameraView.preset !== 'free';
    this.clearDefaultButton.hidden = !this.scene || !this.savedStartupView;
    this.saveDefaultButton.disabled = this.clearDefaultButton.disabled =
      !available || Boolean(this.startupViewRequest);
  }

  async loadStartupView() {
    const store = customElements.get(EDITOR_TAG);
    if (!store?.readStartupView || this.startupViewRead || !this.session?.connected) return;
    this.startupViewRead = true;
    const request = {};
    this.startupViewRequest = request;
    try {
      const saved = await store.readStartupView(this.session, this.dashboard);
      if (this.startupViewRequest !== request) return;
      this.savedStartupView = readSavedFreeView(saved);
      if (!this.cameraChanged) this.changeView('default', {remember: false});
    } catch {
      if (this.startupViewRequest === request) this.defaultStatus.textContent = 'Saved view unavailable';
    } finally {
      if (this.startupViewRequest === request) {
        this.startupViewRequest = undefined;
        this.updateDefaultViewButtons();
      }
    }
  }

  async saveStartupView(view) {
    const store = customElements.get(EDITOR_TAG);
    if (!store?.writeStartupView || !this.scene || !this.session?.connected || this.startupViewRequest) return;
    const request = {};
    this.startupViewRequest = request;
    this.defaultStatus.textContent = 'Saving view…';
    this.updateDefaultViewButtons();
    try {
      const saved = await store.writeStartupView(this.session, this.dashboard, view);
      if (this.startupViewRequest !== request) return;
      this.savedStartupView = readSavedFreeView(saved);
      if (!view) this.changeView('default');
      this.defaultStatus.textContent = view ? 'Default view saved' : 'Top down is the default';
    } catch {
      if (this.startupViewRequest === request) this.defaultStatus.textContent = 'Could not save default view';
    } finally {
      if (this.startupViewRequest === request) {
        this.startupViewRequest = undefined;
        this.updateDefaultViewButtons();
      }
    }
  }

  changeView(view, {announce = true, remember = true} = {}) {
    if (remember) {
      this.cameraChanged = view !== 'default';
      this.defaultStatus.textContent = '';
    }
    this.cameraView = view === 'default'
      ? resolveDefaultCameraView(this.savedStartupView)
      : normalizeCameraView(view);
    this.scene?.setView(this.cameraView);
    if (announce) {
      this.freeViewGestures?.cancel();
      this.viewSelect.value = this.cameraView.preset;
      this.syncFreeViewMode();
      const label = this.viewSelect.selectedOptions[0]?.textContent || 'Top down';
      this.viewStatus.textContent = `${label} view, rotated ${Math.round(this.cameraView.azimuth)} degrees, zoom ${Math.round(this.cameraView.zoom * 100)} percent.`;
      this.resize();
    }
    this.shadowRoot.querySelector('[data-camera=out]').disabled = this.cameraView.zoom <= .6;
    this.shadowRoot.querySelector('[data-camera=in]').disabled = this.cameraView.zoom >= 2.5;
    this.updateDefaultViewButtons();
    this.anchorDirty = true;
    this.schedule();
  }

  resize() {
    if (!this.scene) return;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const available = Math.max(272, Math.floor(viewportHeight - this.stage.getBoundingClientRect().top));
    const fit = `${available}px`;
    if (this.stage.style.height !== fit) this.stage.style.height = fit;
    const {width, height} = this.stage.getBoundingClientRect();
    if (!width || !height || width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.scene.resize(width, height);
    this.anchorDirty = true;
    this.schedule();
  }

  paintTracking() {
    const sources = this.model?.layout.items.filter(item => item.type === 'presenceSwitch' && item.presenceTrackEntityId) || [];
    this.trackingList.replaceChildren();
    for (const item of sources) {
      const {count, zones} = trackingStatus(item, this.session?.connected ? this.session.states : {}, Date.now());
      const row = document.createElement('p');
      const label = document.createElement('strong');
      label.textContent = item.name;
      const status = document.createElement('small');
      status.textContent = count === null ? 'Awaiting a recent radar report' :
        count + (count === 1 ? ' radar target' : ' radar targets');
      row.append(label, status);
      if (zones.some(value => value !== null)) {
        const details = document.createElement('small');
        details.textContent = zones.map((value, index) => value === null ? '' :
          'Zone ' + (index + 1) + ' ' + (value ? 'occupied' : 'clear')).filter(Boolean).join(' · ');
        row.append(details);
      }
      this.trackingList.append(row);
    }
  }

  refresh() {
    if (!this.model) return;
    const offline = this.session?.connected === false;
    const states = offline ? {} : this.session.states;
    const now = Date.now();
    this.frame = storybookFrame(this.model, states, now);
    this.frame.people = readPersonTracks(this.model.layout.items, states, now);
    this.trackingButton.hidden = !this.model.layout.items.some(item => item.type === 'presenceSwitch' && item.presenceTrackEntityId);
    if (this.trackingDialog.open) this.paintTracking();
    clearTimeout(this.trackExpiryTimer);
    if (this.frame.people.length) {
      const expires = Math.min(...this.frame.people.map(track => track.expiresAt));
      this.trackExpiryTimer = setTimeout(() => this.refresh(), Math.max(1, expires - now));
    }
    this.weather.hidden = !this.model.weather.weather_entity;
    const {condition, temperature, unit} = this.frame.environment;
    const reading = Number.isFinite(temperature) ? ` · ${Math.round(temperature)}${unit}` : '';
    this.weather.textContent = offline ? 'Connection lost' :
      condition === 'unavailable' || condition === 'unknown' ? 'Weather unavailable' :
      `${condition.replaceAll('-', ' ')}${reading}`;
    this.weather.setAttribute('aria-label', `Weather details. ${this.weather.textContent}`);
    for (const {element} of this.controls) {
      element.hass = offline ? undefined : this.session;
      if (offline) element.inert = true;
      else element.inert = false;
    }
    this.anchorDirty = true;
    this.schedule();
  }

  schedule() {
    if (this.animationFrame !== undefined || !this.scene || !this.frame || document.hidden) return;
    this.animationFrame = requestAnimationFrame(at => {
      this.animationFrame = undefined;
      const motion = (this.frame.moving || this.scene.hasAmbientMotion || this.frame.people.length) &&
        !this.motionPreference.matches;
      if (this.anchorDirty || !motion || at - this.lastFrame >= FRAME_INTERVAL - 1 || this.lastFrame === undefined) {
        try {
          this.scene.setPeople(this.frame.people, at / 1000, {reduceMotion: this.motionPreference.matches});
          this.scene.render(at / 1000, this.frame.states,
            {...this.frame.environment, reduceMotion: this.motionPreference.matches});
          this.lastFrame = at;
          if (this.anchorDirty) {
            this.positionControls();
            this.anchorDirty = false;
          }
        } catch {
          this.fail('The storybook renderer stopped.');
          return;
        }
      }
      if (motion) this.schedule();
    });
  }

  positionControls() {
    const {width, height} = this;
    if (!width || !height) return;
    const keepClear = this.scene.exteriorClearance();
    const targets = [];
    for (const control of this.controls) {
      const {config, element, camera} = control;
      const anchor = this.scene.anchor(config.roomcraft_item_id);
      if (!anchor || !width || !height) {
        element.hidden = true;
        continue;
      }
      const item = this.model.items.get(config.roomcraft_item_id);
      const w = camera ? Math.max(70, Math.min(124, width * .074)) : 44;
      const h = camera ? Math.max(51, w * .62) : 44;
      const priority = config.roomcraft_visual_kind === 'light' || config.roomcraft_device_form === 'presence_switch'
        ? 0 : camera ? 2 : 1;
      targets.push({...control, x: anchor.x * width, y: anchor.y * height, w, h, priority,
        id: item.id, keepClear: camera ? keepClear : undefined});
    }
    const byId = new Map(targets.map(target => [target.id, target]));
    const placements = placeStorybookTargets(targets, width, height);
    const positioned = new Set(placements.map(target => target.element));
    const leaders = [];
    for (const target of placements) {
      const {element, x, y, w, h, id} = target;
      Object.assign(element.style, {left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px`});
      element.hidden = false;
      const origin = byId.get(id);
      const moved = Math.hypot(origin.x - x, origin.y - y) > 20;
      element.toggleAttribute('data-offset', moved);
      if (moved) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        for (const [key, value] of Object.entries({x1: origin.x, y1: origin.y, x2: x, y2: y})) {
          line.setAttribute(key, value);
        }
        line.setAttribute('stroke', '#544061');
        line.setAttribute('stroke-width', '1.5');
        line.setAttribute('stroke-opacity', '.65');
        line.setAttribute('stroke-dasharray', '3 3');
        leaders.push(line);
      }
    }
    for (const {element} of this.controls) if (!positioned.has(element)) element.hidden = true;
    this.tethers.replaceChildren(...leaders);
  }

  reset() {
    this.freeViewGestures?.cancel();
    cancelAnimationFrame(this.animationFrame);
    clearTimeout(this.trackExpiryTimer);
    this.animationFrame = undefined;
    this.loading = undefined;
    this.model = undefined;
    this.frame = undefined;
    this.overlay.replaceChildren();
    this.tethers.replaceChildren();
    this.scene?.dispose();
    this.scene = undefined;
    this.syncFreeViewMode();
    this.updateDefaultViewButtons();
    this.width = this.height = undefined;
    this.failed = false;
  }

  fail(reason) {
    this.reset();
    this.failed = true;
    this.status.querySelector('[role=status]').textContent = reason;
    this.status.querySelector('a').hidden = false;
    this.status.hidden = false;
  }
}

if (!customElements.get(TAG)) customElements.define(TAG, RoomcraftStorybookCard);
