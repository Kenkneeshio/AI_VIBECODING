import {createStorybookScene} from './storybook-scene.mjs';
import {placeStorybookTargets, readStorybookConfig, storybookFrame} from './storybook-state.mjs';

const TAG = 'roomcraft-storybook-card';
const CONTROL_TAG = 'roomcraft-object-control';
const CAMERA_TAG = 'roomcraft-camera-thumbnail';
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
        .bar nav{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
        a,.bar button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;
          min-height:44px;padding:0 9px;font:inherit;color:inherit;text-decoration:none}
        .bar button{border:0;background:transparent;border-radius:8px;cursor:pointer}
        a:hover,.bar button:hover{text-decoration:underline}
        :focus-visible{outline:2px solid #74516f;outline-offset:2px}
        .stage{position:relative;min-height:272px;height:calc(100dvh - 118px);max-height:1100px;isolation:isolate}
        canvas{display:block;width:100%;height:100%}
        .overlay{position:absolute;inset:0;pointer-events:none}
        .device,.camera{position:absolute;transform:translate(-50%,-50%);pointer-events:auto}
        .camera{z-index:1}
        .camera::part(frame){border-color:#f8ecd4;background:#483a50}
        .device{z-index:2}
        .device:focus-within{z-index:3}
        .status{position:absolute;inset:0;display:grid;place-items:center;padding:20px;
          background:#e7eadb;text-align:center}
        .status[hidden]{display:none}
        .status-inner{max-width:27em}
        .status a{border-radius:9px;background:#53455e;color:#fff4e9;margin-top:8px}
        .tethers{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
        @media(max-width:540px){.bar{padding-inline:9px}.bar nav{gap:0}.bar a,.bar button{padding:0 6px}}
      </style>
      <section class="world" aria-label="Roomcraft Storybook">
        <header class="bar">
          <span class="brand">Roomcraft · Storybook</span>
          <nav aria-label="Storybook navigation">
            <button type="button" class="weather" hidden></button>
            <a href="/second-floor/studio">Studio</a>
            <a href="/second-floor/plan">Floor plan</a>
          </nav>
        </header>
        <div class="stage">
          <canvas role="img" aria-label="Three-dimensional cutaway of the second floor"></canvas>
          <svg class="tethers" aria-hidden="true"></svg>
          <div class="overlay"></div>
          <div class="status"><div class="status-inner">
            <div role="status">Opening the storybook…</div><a href="/second-floor/plan" hidden>Open floor plan</a>
          </div></div>
        </div>
      </section>`;
    this.stage = this.shadowRoot.querySelector('.stage');
    this.canvas = this.shadowRoot.querySelector('canvas');
    this.overlay = this.shadowRoot.querySelector('.overlay');
    this.tethers = this.shadowRoot.querySelector('.tethers');
    this.weather = this.shadowRoot.querySelector('.weather');
    this.status = this.shadowRoot.querySelector('.status');
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    this.onMotionChange = () => this.schedule();
    this.onVisibility = () => {
      if (document.hidden) {
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
    this.dashboard = config.dashboard || 'second-floor';
    if (!/^[a-z0-9-]+$/.test(this.dashboard)) throw new Error('Invalid Roomcraft dashboard.');
    this.load();
  }

  set hass(value) {
    const previous = this.session;
    this.session = value;
    if (!this.model) {
      this.load();
      return;
    }
    if (value?.connected !== previous?.connected ||
        [...this.model.watch].some(id => value?.states?.[id] !== previous?.states?.[id])) this.refresh();
  }

  getCardSize() { return 8; }

  connectedCallback() {
    this.resizeObserver.observe(this.stage);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.addEventListener('change', this.onMotionChange);
    this.load();
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect();
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.removeEventListener('change', this.onMotionChange);
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
      this.model = readStorybookConfig(config);
      this.scene = createStorybookScene(this.canvas, this.model.layout);
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
      this.resize();
      this.refresh();
    } catch {
      if (this.loading === request) this.fail('The storybook could not open on this screen.');
    } finally {
      clearTimeout(waitTimer);
      if (this.loading === request) this.loading = undefined;
    }
  }

  resize() {
    if (!this.scene) return;
    const {width, height} = this.stage.getBoundingClientRect();
    if (!width || !height || width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.scene.resize(width, height);
    this.anchorDirty = true;
    this.schedule();
  }

  refresh() {
    if (!this.model) return;
    const offline = this.session?.connected === false;
    this.frame = storybookFrame(this.model, offline ? {} : this.session.states, Date.now());
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
      const motion = this.frame.moving && !this.motionPreference.matches;
      if (this.anchorDirty || !motion || at - this.lastFrame >= FRAME_INTERVAL - 1 || this.lastFrame === undefined) {
        try {
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
        id: item.id});
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
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = undefined;
    this.loading = undefined;
    this.model = undefined;
    this.frame = undefined;
    this.overlay.replaceChildren();
    this.tethers.replaceChildren();
    this.scene?.dispose();
    this.scene = undefined;
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
