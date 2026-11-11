const PERIODS = {live: 'Live power', today: 'Today', month: 'This month', billing: 'Billing cycle'};
const COLORS = {
  draw: [244, 194, 111],
  reverse: [122, 218, 198],
  idle: [165, 186, 175],
  measured: [238, 197, 138],
  unavailable: [137, 153, 151],
};

export const ENERGY_TREE_MARKUP = `
  <section class="energy-tree" aria-labelledby="energy-tree-title">
    <header class="energy-tree-heading">
      <h3 id="energy-tree-title">Energy tree</h3>
      <span class="energy-tree-period">Live power</span>
    </header>
    <div class="energy-tree-stage">
      <canvas class="energy-tree-traces" aria-hidden="true"></canvas>
      <button type="button" class="energy-tree-hub" aria-pressed="true">
        <span class="energy-tree-home" aria-hidden="true"></span>
        <span class="energy-tree-hub-label"></span>
        <strong class="energy-tree-hub-reading"></strong>
      </button>
      <div class="energy-tree-branches" role="group" aria-label="Meter branches"></div>
    </div>
    <p class="energy-tree-caption" hidden></p>
  </section>`;

export const ENERGY_TREE_STYLE = `
  .energy-tree{box-sizing:border-box;min-width:0;container-type:inline-size;border-radius:19px;
    border:1px solid #777866;padding:13px 11px 8px;color:#fbecd3;overflow:hidden;
    background:
      radial-gradient(ellipse at 51% 44%,#45564b 0,transparent 58%),
      radial-gradient(ellipse at 82% -10%,#565c49,transparent 63%),
      linear-gradient(150deg,#243a3b,#212c34 67%);
    box-shadow:inset 0 1px #c2b68a49,0 4px 9px #28282424}
  .energy-tree-heading{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 4px}
  .energy-tree-heading h3{font-size:15px;margin:0;font-weight:760;letter-spacing:-.02em}
  .energy-tree-period{color:#efdbad;font-size:11px;font-weight:700;text-align:right}
  .energy-tree-stage{position:relative;isolation:isolate;width:100%;max-width:620px;margin:auto;
    aspect-ratio:1.24;min-height:280px;max-height:440px}
  .energy-tree-traces,.energy-tree-branches{position:absolute;inset:0;width:100%;height:100%}
  .energy-tree-traces,.energy-tree-branches{pointer-events:none}
  .energy-tree .energy-tree-node,.energy-tree .energy-tree-hub{position:absolute;display:flex;box-sizing:border-box;
    flex-direction:column;align-items:center;justify-content:center;transform:translate(-50%,-50%);color:#faecd4}
  .energy-tree .energy-tree-hub{z-index:1;top:50%;left:50%;width:122px;min-height:122px;aspect-ratio:1;
    padding:11px;border-radius:50%;border:1px solid #b39964;
    background:radial-gradient(circle at 42% 24%,#667057,#3d5047 53%,#253438);
    box-shadow:inset 0 0 0 5px #272e306b,inset 0 0 0 6px #dabb7753,0 5px 15px #18272a88;
    color:#ffdf9b;line-height:1.14}
  .energy-tree .energy-tree-hub[aria-pressed=true]{border-color:#ffda9d;box-shadow:inset 0 0 0 5px #272e306b,
    inset 0 0 0 6px #dabb7753,0 0 14px #f6c47646}
  .energy-tree-hub-label{margin-top:4px;color:#f9e8c9;font-size:11px;text-align:center;
    max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
  .energy-tree-hub-reading{margin-top:2px;font-size:16px;text-align:center;line-height:1.1;
    overflow-wrap:anywhere;font-variant-numeric:tabular-nums}
  .energy-tree-hub[data-tone=reverse] .energy-tree-hub-reading{color:#9ee8d7}
  .energy-tree-hub[data-tone=unavailable] .energy-tree-hub-reading{color:#ddd2be}
  .energy-tree-home{width:22px;height:23px;position:relative;
    clip-path:polygon(50% 2%,99% 42%,88% 42%,88% 98%,12% 98%,12% 42%,1% 42%);
    background:linear-gradient(155deg,#ffe1a0,#ad8052 72%,#806543)}
  .energy-tree-home::after{content:"";position:absolute;left:36%;top:52%;width:28%;height:28%;border-radius:1px;
    background:linear-gradient(90deg,transparent 41%,#a37d50 42% 58%,transparent 59%),#ccb784}
  .energy-tree-hub[data-tone=draw] .energy-tree-home::after{background-color:#fff0af}
  .energy-tree-hub[data-tone=reverse] .energy-tree-home::after{background-color:#a7f0d7}
  .energy-tree .energy-tree-node{width:92px;min-height:58px;padding:2px 3px;border-radius:11px;border:1px solid transparent;
    gap:1px;background:transparent;pointer-events:auto;font-size:11px;font-weight:650;line-height:1.12}
  .energy-tree .energy-tree-node:hover,.energy-tree .energy-tree-node[aria-pressed=true]{z-index:2;
    border-color:#cba66f;background:#37474a;box-shadow:0 2px 8px #18272888}
  .energy-tree .energy-tree-node:focus-visible,.energy-tree .energy-tree-hub:focus-visible{z-index:3;
    outline:2px solid #ffdba1;outline-offset:2px}
  .energy-tree-mark{display:grid;place-items:center;position:relative;width:30px;height:30px;flex:0 0 30px;
    border:1px solid #8b9176;border-radius:50%;background:radial-gradient(circle at 35% 24%,#677b69,#405951 64%,#2b3b3d);
    box-shadow:inset 0 1px #adba8f43,0 2px 5px #1c292e99;color:#c7d8b1}
  .energy-tree-mark::before{content:"";position:absolute;inset:3px;border:1px solid #b2c49e4e;border-radius:50%}
  .energy-tree-node[data-tone=draw] .energy-tree-mark{color:#ffe2a2;border-color:#d5ae73;
    background:radial-gradient(circle at 34% 24%,#aa8e5b,#69573e 65%,#3e3d38);box-shadow:0 0 10px #f2b96b43}
  .energy-tree-node[data-tone=reverse] .energy-tree-mark{color:#aaf6df;border-color:#8fcfb5;
    background:radial-gradient(circle at 34% 24%,#619c83,#416555 65%,#304743);box-shadow:0 0 9px #80cfa43a}
  .energy-tree-node[data-tone=measured] .energy-tree-mark{color:#ffdf9a;border-color:#baa56b}
  .energy-tree-node[data-tone=unavailable] .energy-tree-mark{color:#b4c2bd;background:#3a4a4d;border-color:#7e8b87}
  .energy-tree-node:is([data-tone=draw],[data-tone=reverse]) .energy-tree-mark::before{
    border-color:currentColor;opacity:.25;animation:energy-tree-signal 4.6s ease-in-out infinite;
    animation-delay:var(--tree-delay,0s)}
  @keyframes energy-tree-signal{50%{opacity:.66}}
  .power-dialog[data-reduced-motion] .energy-tree-mark::before,.energy-tree[data-reduced-motion] .energy-tree-mark::before{
    animation:none!important}
  @media(prefers-reduced-motion:reduce){.energy-tree-mark::before{animation:none!important}}
  .energy-tree-icon{position:relative;box-sizing:border-box;width:10px;height:12px;border-radius:80% 0 80% 0;
    transform:rotate(-10deg);background:currentColor}
  .energy-tree-icon::after{content:"";position:absolute;width:1px;height:75%;top:25%;left:49%;transform:rotate(36deg);
    background:#314748;border-radius:1px}
  .energy-tree-node[data-kind=circuit] .energy-tree-icon{width:12px;height:12px;transform:none;
    border:1px solid currentColor;border-radius:3px;background:none;box-shadow:inset 0 0 0 2px #283f3e66}
  .energy-tree-node[data-kind=circuit] .energy-tree-icon::after{width:2px;height:6px;top:2px;left:4px;
    transform:none;border-radius:1px;background:currentColor}
  .energy-tree-node[data-kind=device] .energy-tree-icon{width:11px;height:8px;border-radius:2px 2px 5px 5px;
    transform:rotate(-18deg);margin-top:3px}
  .energy-tree-node[data-kind=device] .energy-tree-icon::after{left:2px;top:-4px;width:2px;height:4px;transform:none;
    background:currentColor;box-shadow:5px 0 currentColor}
  .energy-tree-node-label,.energy-tree-node-reading{max-width:100%;overflow:hidden;text-overflow:ellipsis}
  .energy-tree-node-label{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
    max-height:2.24em;overflow-wrap:anywhere;text-align:center;color:#f8e9cf;
    text-shadow:0 1px 2px #1b2c31,0 0 4px #1b2c31}
  .energy-tree-node-reading{font-size:10px;font-weight:620;color:#eed6a9;white-space:nowrap;font-variant-numeric:tabular-nums;
    text-shadow:0 1px 2px #1b2c31,0 0 4px #1b2c31}
  .energy-tree-node[data-tone=reverse] .energy-tree-node-reading{color:#9ce7d4}
  .energy-tree-node[data-tone=unavailable] .energy-tree-node-reading{color:#d0d5ce}
  .energy-tree-caption{margin:1px 4px 3px;color:#e0d6c2;font-size:11px;text-align:center}
  .energy-tree-caption[hidden]{display:none}
  @container (max-width: 410px){
    .energy-tree-stage{aspect-ratio:1.07}
    .energy-tree .energy-tree-node{width:76px}
    .energy-tree .energy-tree-hub{width:105px;min-height:105px}
    .energy-tree-hub-reading{font-size:14px}
  }
  @container (max-width: 300px){
    .energy-tree .energy-tree-node{width:66px}
    .energy-tree .energy-tree-hub{width:86px;min-height:86px;padding:7px}
    .energy-tree-home{width:17px;height:18px}
    .energy-tree-hub-reading{font-size:12px}
  }`;

function toneOf(meter, period) {
  if (!meter || meter.available === false || !meter.reading || meter.reading === 'Unavailable') return 'unavailable';
  if (period !== 'live') return 'measured';
  if (!Number.isFinite(meter.watts)) return 'measured';
  if (meter.watts < 0) return 'reverse';
  return meter.watts === 0 ? 'idle' : 'draw';
}

function kindOf(meter) {
  if (meter.shared || meter.kind === 'circuit') return 'circuit';
  if (['device', 'outlet', 'plug'].includes(meter.kind)) return 'device';
  return 'meter';
}

function branchesFor(groups, selected, width) {
  const limit = width >= 480 ? 12 : width >= 300 ? 8 : 6;
  const branches = groups.slice(0, limit);
  if (selected && !branches.some(branch => branch.id === selected)) {
    const active = groups.find(branch => branch.id === selected);
    if (active) branches[limit - 1] = active;
  }
  return branches;
}

function branchPosition(index, count, width, height) {
  const angle = -Math.PI / 2 + index * 2 * Math.PI / count;
  const inset = width > 410 ? 49 : width > 300 ? 41 : 35;
  return {
    angle,
    x: width / 2 + (width / 2 - inset) * Math.cos(angle),
    y: height / 2 + (height / 2 - 36) * Math.sin(angle),
  };
}

function drawTree(canvas, width, height, branches) {
  const ctx = canvas.getContext('2d');
  if (!ctx || !width || !height) return;
  const density = Math.min(devicePixelRatio || 1, 2);
  const pixelWidth = Math.round(width * density);
  const pixelHeight = Math.round(height * density);
  if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
  }
  ctx.setTransform(density, 0, 0, density, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.setLineDash([]);
  ctx.lineWidth = 1;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) / 2;
  for (const scale of [.42, .67, .88]) {
    ctx.beginPath();
    ctx.ellipse(cx, cy, scale * (cx - 15), scale * (cy - 12), 0, 0, 2 * Math.PI);
    ctx.strokeStyle = scale === .88 ? '#d8b88827' : '#d8b88817';
    ctx.stroke();
  }
  for (let i = 0; i < 24; i++) {
    const angle = i * Math.PI / 12;
    const x = cx + Math.cos(angle) * radius * .91;
    const y = cy + Math.sin(angle) * radius * .91;
    ctx.beginPath();
    ctx.arc(x, y, i % 3 === 0 ? 1.65 : .75, 0, 2 * Math.PI);
    ctx.fillStyle = i % 3 === 0 ? '#e4b98966' : '#e4b98942';
    ctx.fill();
  }
  for (const {x, y, angle, tone, selected, strength} of branches) {
    const endY = y - 13;
    const dx = x - cx;
    const dy = endY - cy;
    const color = COLORS[tone].join(',');
    const gradient = ctx.createLinearGradient(cx, cy, x, endY);
    const muted = tone === 'unavailable';
    gradient.addColorStop(0, `rgba(${color},${muted ? .1 : .3})`);
    gradient.addColorStop(1, `rgba(${color},${muted ? .32 : selected ? .96 : .68})`);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.quadraticCurveTo(cx + dx * .52 - 13 * Math.sin(angle), cy + dy * .52 + 13 * Math.cos(angle), x, endY);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.05 + strength * 1.55 + (selected ? .65 : 0);
    ctx.setLineDash(muted ? [3, 5] : []);
    ctx.stroke();
  }
}

export function bindEnergyTree(root, onSelect) {
  const element = root.matches?.('.energy-tree') ? root : root.querySelector('.energy-tree');
  const stage = element.querySelector('.energy-tree-stage');
  const canvas = element.querySelector('.energy-tree-traces');
  const branches = element.querySelector('.energy-tree-branches');
  const caption = element.querySelector('.energy-tree-caption');
  const periodName = element.querySelector('.energy-tree-period');
  const hub = element.querySelector('.energy-tree-hub');
  const hubLabel = element.querySelector('.energy-tree-hub-label');
  const hubReading = element.querySelector('.energy-tree-hub-reading');
  const nodes = new Map();
  let displayedIds = [];
  let state;
  hub.addEventListener('click', () => onSelect(null));

  function createNode(id) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'energy-tree-node';
    button.innerHTML = '<span class="energy-tree-mark" aria-hidden="true"><i class="energy-tree-icon"></i></span>' +
      '<span class="energy-tree-node-label"></span><span class="energy-tree-node-reading"></span>';
    button.addEventListener('click', () => onSelect(id));
    return {button, label: button.querySelector('.energy-tree-node-label'),
      reading: button.querySelector('.energy-tree-node-reading')};
  }

  function paint() {
    if (!state) return;
    const {center, groups, selected, period} = state;
    const {width, height} = stage.getBoundingClientRect();
    if (!width || !height) return;
    const visible = branchesFor(groups, selected, width);
    const ids = visible.map(group => group.id);
    const selectionIsHub = selected == null || selected === center?.id;
    const hubName = center?.label || 'Whole home';
    const hubValue = center?.reading || 'Unavailable';
    hubLabel.textContent = hubName;
    hubReading.textContent = hubValue;
    hub.dataset.tone = toneOf(center, period);
    hub.setAttribute('aria-label', `${hubName}, ${hubValue}`);
    hub.setAttribute('aria-pressed', String(selectionIsHub));
    periodName.textContent = PERIODS[period] || period;

    if (ids.length !== displayedIds.length || ids.some((id, i) => displayedIds[i] !== id)) {
      const wanted = new Set(ids);
      for (const [id, node] of nodes) {
        if (wanted.has(id)) continue;
        node.button.remove();
        nodes.delete(id);
      }
      for (const id of ids) {
        if (!nodes.has(id)) nodes.set(id, createNode(id));
      }
      for (const id of ids) branches.append(nodes.get(id).button);
      displayedIds = ids;
    }
    const high = visible.reduce((maximum, group) =>
      group.available !== false && Number.isFinite(group.watts) ? Math.max(maximum, Math.abs(group.watts)) : maximum, 0);
    const positions = visible.map((group, i) => {
      const {button, label, reading} = nodes.get(group.id);
      const position = branchPosition(i, visible.length, width, height);
      const tone = toneOf(group, period);
      const isSelected = group.id === selected;
      const title = group.label || group.id;
      const value = group.reading || 'Unavailable';
      label.textContent = title;
      reading.textContent = value;
      button.dataset.tone = tone;
      button.dataset.kind = kindOf(group);
      button.style.left = `${position.x}px`;
      button.style.top = `${position.y}px`;
      button.style.setProperty('--tree-delay', `${-(i % 6) * .65}s`);
      button.setAttribute('aria-pressed', String(isSelected));
      button.setAttribute('aria-label', `${title}, ${value}${group.shared ? ', shared circuit' : ''}`);
      button.title = `${title} · ${value}${group.shared ? ' · Shared circuit' : ''}`;
      const strength = high && (tone === 'draw' || tone === 'reverse') ? Math.sqrt(Math.abs(group.watts) / high) : 0;
      return {...position, tone, selected: isSelected, strength};
    });
    const note = groups.length === 0 ? 'No circuit or device meters configured.' :
      visible.length < groups.length ? `${visible.length} of ${groups.length} meters on the tree` : '';
    caption.textContent = note;
    caption.hidden = !note;
    drawTree(canvas, width, height, positions);
  }

  const resize = new ResizeObserver(paint);
  return {
    update({center, groups = [], selected = null, period = 'live'}) {
      if (!state) resize.observe(stage);
      state = {center, groups, selected, period};
      paint();
    },
    setReducedMotion(reduced) { element.toggleAttribute('data-reduced-motion', reduced); },
    clear() {
      state = undefined;
      resize.disconnect();
    },
  };
}
