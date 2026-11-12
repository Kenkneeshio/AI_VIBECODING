import {vacuumMapMetadata, vacuumMetricDistance} from './storybook-vacuum-alignment.mjs';
import {loadVacuumMap} from './storybook-vacuum-map.mjs';

export const LIDAR_RULER_BUTTON = `
  <button type="button" data-lidar-ruler aria-haspopup="dialog" hidden>Measure LiDAR distances</button>`;

export const LIDAR_RULER_MARKUP = `
  <dialog class="lidar-ruler-dialog" aria-labelledby="lidar-ruler-title">
    <header><h2 id="lidar-ruler-title">LiDAR ruler</h2><button type="button" data-ruler-close>Close</button></header>
    <div class="lidar-ruler-bar">
      <p data-ruler-status role="status"></p>
      <button type="button" data-ruler-clear disabled>Clear points</button>
    </div>
    <div class="lidar-ruler-scan" data-ruler-scan tabindex="0" role="group"
      aria-label="LiDAR scan. Tap two points, or use the arrow keys and Enter to place points." hidden>
      <img alt="Vacuum LiDAR floor scan" draggable="false">
      <svg aria-hidden="true" preserveAspectRatio="none">
        <line data-ruler-line></line>
        <circle data-ruler-first></circle><circle data-ruler-second></circle>
      </svg>
      <span class="lidar-ruler-crosshair" aria-hidden="true"></span>
    </div>
  </dialog>`;

export const LIDAR_RULER_STYLE = `
  .lidar-ruler-dialog{box-sizing:border-box;width:min(94vw,940px);max-height:92dvh;overflow:auto;
    padding:clamp(12px,2vw,22px);border:1px solid #baa88f;border-radius:16px;background:#fffaf0;color:#302f29;
    box-shadow:0 14px 44px #0c182977}
  .lidar-ruler-dialog::backdrop{background:#172733a0}
  .lidar-ruler-dialog header,.lidar-ruler-bar{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .lidar-ruler-dialog h2,.lidar-ruler-bar p{margin:0}
  .lidar-ruler-dialog button{min-height:44px;padding:6px 12px;border:1px solid #c9b8a0;border-radius:8px;
    color:inherit;background:#fffdf7;font:inherit;flex:none}
  .lidar-ruler-dialog button:disabled{opacity:.55}
  .lidar-ruler-bar{margin:8px 0 10px}
  .lidar-ruler-scan{position:relative;margin:auto;background:#e8eddc;border-radius:10px;overflow:hidden;
    cursor:crosshair;touch-action:manipulation}
  .lidar-ruler-scan img{display:block;width:100%;height:auto;user-select:none}
  .lidar-ruler-scan svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
  .lidar-ruler-scan line,.lidar-ruler-scan circle{stroke:#173b33;stroke-width:3px;vector-effect:non-scaling-stroke}
  .lidar-ruler-scan circle{fill:#fcffdf}
  .lidar-ruler-scan [hidden],.lidar-ruler-scan[hidden]{display:none}
  .lidar-ruler-crosshair{position:absolute;left:var(--ruler-x,50%);top:var(--ruler-y,50%);
    display:none;width:14px;height:14px;transform:translate(-50%,-50%);border:2px solid #fff;
    border-radius:50%;box-shadow:0 0 0 2px #173b33;pointer-events:none}
  .lidar-ruler-scan:focus-visible .lidar-ruler-crosshair{display:block}`;

export function bindLidarRuler(host) {
  const button = host.shadowRoot.querySelector('[data-lidar-ruler]');
  const dialog = host.shadowRoot.querySelector('.lidar-ruler-dialog');
  const status = dialog.querySelector('[data-ruler-status]');
  const surface = dialog.querySelector('[data-ruler-scan]');
  const image = surface.querySelector('img');
  const svg = surface.querySelector('svg');
  const line = svg.querySelector('[data-ruler-line]');
  const dots = [svg.querySelector('[data-ruler-first]'), svg.querySelector('[data-ruler-second]')];
  const clearButton = dialog.querySelector('[data-ruler-clear]');
  let camera;
  let request;
  let scan;
  let points = [];
  let cursor = {x:.5, y:.5};

  function paint() {
    clearButton.disabled = !points.length;
    const [first, second] = points;
    for (const [index, dot] of dots.entries()) {
      const point = points[index];
      dot.toggleAttribute('hidden', !point);
      if (!point) continue;
      dot.setAttribute('cx', point.x);
      dot.setAttribute('cy', point.y);
    }
    line.toggleAttribute('hidden', !second);
    if (!scan) return;
    if (second) {
      for (const [key,value] of Object.entries({x1:first.x, y1:first.y, x2:second.x, y2:second.y})) {
        line.setAttribute(key, value);
      }
      const metres = vacuumMetricDistance(first, second, scan.pixelToMap, scan.mapUnitsPerMetre);
      status.textContent = metres === undefined ? 'Distance is unavailable.' :
        `${metres.toFixed(2)} m · ${(metres * 3.28084).toFixed(1)} ft straight line`;
    } else status.textContent = first ? 'Pick the second point on the scan.' : 'Pick two points on the scan.';
  }

  function reset() {
    request = scan = undefined;
    points = [];
    cursor = {x:.5, y:.5};
    surface.style.removeProperty('--ruler-x');
    surface.style.removeProperty('--ruler-y');
    surface.hidden = true;
    image.removeAttribute('src');
    paint();
  }

  async function open() {
    if (dialog.open || !camera) return;
    host.setMainMenu(false, true);
    reset();
    dialog.showModal();
    status.textContent = 'Loading the vacuum scan…';
    const ticket = request = {};
    try {
      const map = await loadVacuumMap(host.session, camera, () => host.session);
      if (request !== ticket || !dialog.open) return;
      image.src = map.imageDataUrl;
      await image.decode();
      if (request !== ticket || !dialog.open) return;
      const {naturalWidth:width,naturalHeight:height} = image;
      scan = {...map, width, height};
      surface.style.width = `min(100%, ${70 * width / height}dvh)`;
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      for (const dot of dots) dot.setAttribute('r', Math.max(3, Math.min(width,height) * .014));
      surface.hidden = false;
      paint();
    } catch (error) {
      if (request === ticket && dialog.open) status.textContent = error.message;
    }
  }

  function place(x, y) {
    if (!scan || ![x,y].every(Number.isFinite) || x < 0 || x > 1 || y < 0 || y > 1) return;
    if (points.length === 2) points = [];
    points.push({x:x * scan.width, y:y * scan.height});
    paint();
  }

  surface.addEventListener('click', event => {
    const bounds = surface.getBoundingClientRect();
    place((event.clientX - bounds.left) / bounds.width, (event.clientY - bounds.top) / bounds.height);
  });
  surface.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      place(cursor.x, cursor.y);
      return;
    }
    const delta = {ArrowLeft:[-1,0], ArrowRight:[1,0], ArrowUp:[0,-1], ArrowDown:[0,1]}[event.key];
    if (!delta) return;
    event.preventDefault();
    const step = event.shiftKey ? .05 : .0125;
    cursor = {x:Math.max(0,Math.min(1,cursor.x + delta[0]*step)),
      y:Math.max(0,Math.min(1,cursor.y + delta[1]*step))};
    surface.style.setProperty('--ruler-x', `${cursor.x * 100}%`);
    surface.style.setProperty('--ruler-y', `${cursor.y * 100}%`);
  });
  clearButton.addEventListener('click', () => { points = []; paint(); });
  button.addEventListener('click', open);
  dialog.querySelector('[data-ruler-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (!dialog.open) reset(); });

  return {
    configure(item) {
      if (dialog.open) dialog.close();
      reset();
      camera = item?.vacuumMapEntityId;
      button.hidden = !camera;
    },
    sync() {
      if (!scan || !dialog.open) return;
      const active = vacuumMapMetadata(host.session?.states?.[camera]);
      if (host.session?.connected !== false && active?.mapId === scan.mapId) return;
      reset();
      status.textContent = 'The vacuum map changed. Reopen the ruler to load the active scan.';
    },
    get open() { return dialog.open; },
    dialog,
  };
}
