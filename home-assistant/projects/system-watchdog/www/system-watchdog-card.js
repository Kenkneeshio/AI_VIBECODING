const CATEGORIES = [
  { key: 'home_assistant', label: 'Home Assistant', icon: 'mdi:home-assistant', x: 50, y: 8 },
  { key: 'integrations', label: 'Integrations', icon: 'mdi:puzzle', x: 78, y: 17 },
  { key: 'roomcraft', label: 'Roomcraft', icon: 'mdi:floor-plan', x: 91, y: 50 },
  { key: 'sensors', label: 'Sensors', icon: 'mdi:access-point', x: 78, y: 83 },
  { key: 'workstation', label: 'Workstation', icon: 'mdi:monitor-dashboard', x: 50, y: 92 },
  { key: 'codex', label: 'Codex', icon: 'mdi:robot-outline', x: 22, y: 83 },
  { key: 'tablet', label: 'Wall tablet', icon: 'mdi:tablet-dashboard', x: 9, y: 50 },
  { key: 'apps', label: 'Apps', icon: 'mdi:apps', x: 22, y: 17 },
];

const STATUS = new Set(['healthy', 'warning', 'critical']);

export function normalizeStatus(state) {
  const value = String(state?.attributes?.status || state?.state || '').toLowerCase();
  if (STATUS.has(value)) return value;
  return ['unavailable', 'unknown', ''].includes(value) ? 'unavailable' : 'warning';
}

export function categorySnapshot(hass, key) {
  const entityId = `sensor.system_watchdog_${key}`;
  const state = hass?.states?.[entityId];
  const attributes = state?.attributes || {};
  const issues = Array.isArray(attributes.issues)
    ? attributes.issues.filter(value => typeof value === 'string').slice(0, 8) : [];
  return {
    entityId,
    status: normalizeStatus(state),
    message: String(attributes.message || (state ? state.state : 'Resource unavailable')).slice(0, 240),
    issues,
    monitored: Number.isFinite(Number(attributes.monitored)) ? Number(attributes.monitored) : null,
    available: Number.isFinite(Number(attributes.available)) ? Number(attributes.available) : null,
    healthy: Number.isFinite(Number(attributes.healthy)) ? Number(attributes.healthy) : null,
    ageSeconds: Number.isFinite(Number(attributes.age_seconds)) ? Number(attributes.age_seconds) : null,
  };
}

export function compactMetric(snapshot) {
  if (snapshot.available !== null && snapshot.monitored !== null) return `${snapshot.available}/${snapshot.monitored}`;
  if (snapshot.healthy !== null && snapshot.monitored !== null) return `${snapshot.healthy}/${snapshot.monitored}`;
  if (snapshot.ageSeconds !== null) return snapshot.ageSeconds < 60 ? 'now' : `${Math.floor(snapshot.ageSeconds / 60)}m`;
  return snapshot.status === 'unavailable' ? '—' : snapshot.status;
}

class SystemWatchdogCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._selected = 'summary';
    this._nodes = new Map();
  }

  setConfig(config = {}) {
    this._config = {
      title: typeof config.title === 'string' ? config.title.slice(0, 80) : 'Connected Home',
      summary_entity: /^sensor\.[a-z0-9_]+$/.test(config.summary_entity || '')
        ? config.summary_entity : 'sensor.system_watchdog_summary',
      issue_entity: /^sensor\.[a-z0-9_]+$/.test(config.issue_entity || '')
        ? config.issue_entity : 'sensor.system_watchdog_issue_count',
    };
    if (!this.shadowRoot.children.length) this._build();
    this._refresh();
  }

  set hass(value) {
    this._hass = value;
    if (this._config && !this.shadowRoot.children.length) this._build();
    this._refresh();
  }

  getCardSize() { return 7; }

  _build() {
    const style = document.createElement('style');
    style.textContent = `
      :host{display:block;--healthy:#52e5b0;--warning:#ffc15a;--critical:#ff6d72;--offline:#71838a;color:#ecf8f4}
      .shell{position:relative;overflow:hidden;border:1px solid #527a76;border-radius:24px;background:
        radial-gradient(circle at 50% 48%,#1e494a 0 8%,#112f35 24%,#091a20 69%,#071217 100%);box-shadow:0 18px 48px #0009,inset 0 1px #9de9d22e;padding:16px}
      .head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 2px 8px}.head strong{font:700 17px/1.2 system-ui}.legend{display:flex;gap:7px;color:#a8c0bd;font:600 9px/1 system-ui;text-transform:uppercase;letter-spacing:.07em}.legend span:before{display:inline-block;width:7px;height:7px;margin-right:3px;border-radius:50%;background:var(--c);content:''}
      .topology{position:relative;width:min(100%,720px);height:clamp(380px,55vw,560px);margin:auto}.links{position:absolute;inset:4%;width:92%;height:92%;overflow:visible}.links line{stroke:#75cbb74a;stroke-width:.65;stroke-dasharray:2.2 2.5;animation:flow 9s linear infinite}.links circle{fill:none;stroke:#8bd9c42e;stroke-width:.45}
      button{font:inherit}.node,.core{position:absolute;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:1px solid color-mix(in srgb,var(--status) 72%,#fff 8%);background:#10282ee8;color:#eafff8;cursor:pointer;transform:translate(-50%,-50%);box-shadow:0 0 0 1px #061014,0 0 16px color-mix(in srgb,var(--status) 34%,transparent);transition:transform .16s,filter .16s,border-color .16s}.node:active,.core:active{transform:translate(-50%,-50%) scale(.92);filter:brightness(1.28)}
      .node{left:var(--x);top:var(--y);width:clamp(72px,14vw,108px);height:clamp(72px,14vw,108px);flex-direction:column;gap:4px;border-radius:28%;padding:6px}.node ha-icon{width:28px;height:28px;color:var(--status);filter:drop-shadow(0 0 6px var(--status))}.node .label{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:650 10px/1.05 system-ui}.node .metric{color:#a9c3bf;font:700 9px/1 system-ui;text-transform:uppercase}
      .core{left:50%;top:50%;width:clamp(128px,23vw,176px);height:clamp(128px,23vw,176px);flex-direction:column;border-radius:50%;background:radial-gradient(circle at 44% 38%,#255b57,#10282f 68%);padding:15px}.core ha-icon{width:48px;height:48px;color:var(--status);filter:drop-shadow(0 0 10px var(--status))}.core strong{margin-top:4px;font:750 13px/1.05 system-ui}.core small{margin-top:4px;color:#b8cfcb;font:700 10px/1 system-ui}
      [data-status="healthy"]{--status:var(--healthy);animation:breathe 3.6s steps(4,end) infinite}[data-status="warning"]{--status:var(--warning);animation:warn 1.8s steps(2,end) infinite}[data-status="critical"]{--status:var(--critical);animation:alarm .9s steps(2,end) infinite}[data-status="unavailable"]{--status:var(--offline);filter:saturate(.45);box-shadow:none}
      .detail{position:relative;min-height:92px;margin-top:6px;padding:13px 14px;border:1px solid #4d7773;border-radius:15px;background:#0b2025e8}.detail-head{display:flex;align-items:center;gap:8px}.detail-head ha-icon{color:var(--detail-status,#8fdac7)}.detail-head strong{flex:1;font:700 13px/1.2 system-ui}.state{padding:3px 7px;border-radius:999px;background:#24413f;color:#cde9e1;font:700 9px/1 system-ui;text-transform:uppercase}.message{margin:8px 0 0;color:#c8dcd8;font:500 11px/1.35 system-ui}.issues{margin:7px 0 0;padding-left:17px;color:#ffcf85;font:500 10px/1.35 system-ui}.issues:empty{display:none}
      .routes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:10px}.route{display:flex;min-height:44px;align-items:center;justify-content:center;gap:6px;border:1px solid #476d69;border-radius:12px;background:#10282d;color:#d8ebe6;cursor:pointer}.route ha-icon{width:20px;height:20px;color:#82d8c2}.route span{font:650 10px system-ui}.route:active{filter:brightness(1.3)}
      @keyframes flow{to{stroke-dashoffset:-38}}@keyframes breathe{50%{box-shadow:0 0 0 1px #061014,0 0 22px color-mix(in srgb,var(--status) 52%,transparent)}}@keyframes warn{50%{filter:brightness(1.18)}}@keyframes alarm{50%{filter:brightness(1.3);border-color:#fff}}
      @media(max-width:600px){.shell{padding:12px;border-radius:18px}.topology{height:410px}.node{width:76px;height:76px}.node .label{font-size:9px}.core{width:132px;height:132px}.legend{display:none}}
      @media(prefers-reduced-motion:reduce){.links line,.node,.core{animation:none!important}.node,.core{transition:none}}
    `;
    const shell = document.createElement('section'); shell.className = 'shell';
    const head = document.createElement('header'); head.className = 'head';
    this._title = document.createElement('strong');
    const legend = document.createElement('div'); legend.className = 'legend';
    for (const [label, color] of [['healthy','var(--healthy)'],['warning','var(--warning)'],['critical','var(--critical)']]) {
      const item = document.createElement('span'); item.textContent = label; item.style.setProperty('--c', color); legend.append(item);
    }
    head.append(this._title, legend);
    const topology = document.createElement('div'); topology.className = 'topology';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'links'); svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('aria-hidden', 'true');
    for (const radius of [24, 43]) { const circle = document.createElementNS(svg.namespaceURI, 'circle'); circle.setAttribute('cx','50'); circle.setAttribute('cy','50'); circle.setAttribute('r',String(radius)); svg.append(circle); }
    for (const meta of CATEGORIES) { const line = document.createElementNS(svg.namespaceURI, 'line'); line.setAttribute('x1','50'); line.setAttribute('y1','50'); line.setAttribute('x2',String(meta.x)); line.setAttribute('y2',String(meta.y)); svg.append(line); }
    topology.append(svg);
    this._core = this._button('core', 'summary', 'mdi:shield-pulse');
    this._coreLabel = document.createElement('strong'); this._coreLabel.textContent = 'System';
    this._coreMetric = document.createElement('small');
    this._core.append(this._coreLabel, this._coreMetric); topology.append(this._core);
    for (const meta of CATEGORIES) {
      const node = this._button('node', meta.key, meta.icon); node.style.setProperty('--x', `${meta.x}%`); node.style.setProperty('--y', `${meta.y}%`);
      const label = document.createElement('span'); label.className = 'label'; label.textContent = meta.label;
      const metric = document.createElement('span'); metric.className = 'metric'; node.append(label, metric);
      topology.append(node); this._nodes.set(meta.key, { node, label, metric, meta });
    }
    this._detail = document.createElement('section'); this._detail.className = 'detail';
    const detailHead = document.createElement('div'); detailHead.className = 'detail-head';
    this._detailIcon = document.createElement('ha-icon'); this._detailTitle = document.createElement('strong'); this._detailState = document.createElement('span'); this._detailState.className = 'state';
    detailHead.append(this._detailIcon, this._detailTitle, this._detailState);
    this._detailMessage = document.createElement('p'); this._detailMessage.className = 'message';
    this._detailIssues = document.createElement('ul'); this._detailIssues.className = 'issues'; this._detail.append(detailHead, this._detailMessage, this._detailIssues);
    const routes = document.createElement('nav'); routes.className = 'routes'; routes.setAttribute('aria-label', 'Home Assistant resources');
    for (const [label, icon, path] of [['Integrations','mdi:puzzle','/config/integrations/dashboard'],['Devices','mdi:devices','/config/devices/dashboard'],['Entities','mdi:format-list-bulleted','/config/entities']]) {
      const route = document.createElement('button'); route.type = 'button'; route.className = 'route'; route.title = `Open ${label}`;
      const routeIcon = document.createElement('ha-icon'); routeIcon.icon = icon; const routeLabel = document.createElement('span'); routeLabel.textContent = label;
      route.append(routeIcon, routeLabel); route.addEventListener('click', () => this._navigate(path)); routes.append(route);
    }
    shell.append(head, topology, this._detail, routes); this.shadowRoot.replaceChildren(style, shell);
  }

  _button(className, key, icon) {
    const button = document.createElement('button'); button.type = 'button'; button.className = className; button.dataset.key = key;
    const graphic = document.createElement('ha-icon'); graphic.icon = icon; button.append(graphic);
    button.addEventListener('click', () => { this._selected = key; this._refreshDetail(); });
    return button;
  }

  _navigate(path) {
    if (!path.startsWith('/')) return;
    history.pushState(null, '', path); window.dispatchEvent(new CustomEvent('location-changed'));
  }

  _summary() {
    const state = this._hass?.states?.[this._config.summary_entity];
    const issueState = this._hass?.states?.[this._config.issue_entity];
    const issues = Array.isArray(state?.attributes?.issues) ? state.attributes.issues.filter(value => typeof value === 'string').slice(0, 8) : [];
    return {
      entityId: this._config.summary_entity, status: normalizeStatus(state),
      message: String(state?.attributes?.message || (issues.length ? `${issues.length} issue${issues.length === 1 ? '' : 's'} need attention` : 'All monitored resources are healthy')).slice(0, 240),
      issues, issueCount: Number.isFinite(Number(issueState?.state)) ? Number(issueState.state) : issues.length,
    };
  }

  _refresh() {
    if (!this._config || !this._core) return;
    this._title.textContent = this._config.title;
    const summary = this._summary(); this._core.dataset.status = summary.status;
    this._coreMetric.textContent = summary.issueCount ? `${summary.issueCount} issue${summary.issueCount === 1 ? '' : 's'}` : 'all clear';
    this._core.setAttribute('aria-label', `System ${summary.status}. ${this._coreMetric.textContent}. Tap for details.`);
    for (const [key, view] of this._nodes) {
      const snapshot = categorySnapshot(this._hass, key); view.node.dataset.status = snapshot.status; view.metric.textContent = compactMetric(snapshot);
      view.node.setAttribute('aria-label', `${view.meta.label}: ${snapshot.status}. ${snapshot.message}. Tap for details.`);
    }
    this._refreshDetail();
  }

  _refreshDetail() {
    if (!this._detail) return;
    let title = 'System overview', icon = 'mdi:shield-pulse', snapshot = this._summary();
    if (this._selected !== 'summary') {
      const meta = CATEGORIES.find(item => item.key === this._selected) || CATEGORIES[0];
      title = meta.label; icon = meta.icon; snapshot = categorySnapshot(this._hass, meta.key);
    }
    this._detailIcon.icon = icon; this._detailTitle.textContent = title; this._detailState.textContent = snapshot.status;
    this._detail.style.setProperty('--detail-status', `var(--${snapshot.status === 'unavailable' ? 'offline' : snapshot.status})`);
    this._detailMessage.textContent = snapshot.message; this._detailIssues.replaceChildren();
    for (const issue of snapshot.issues || []) { const item = document.createElement('li'); item.textContent = issue; this._detailIssues.append(item); }
  }
}

if (!customElements.get('system-watchdog-card')) customElements.define('system-watchdog-card', SystemWatchdogCard);
window.customCards = window.customCards || [];
if (!window.customCards.some(card => card.type === 'system-watchdog-card')) {
  window.customCards.push({ type: 'system-watchdog-card', name: 'System Watchdog Resource Map',
    description: 'Animated health topology for Home Assistant, integrations, Roomcraft, workstation, tablet, and apps.' });
}
