import {createStorybookScene} from './storybook-scene.mjs';
import {placeStorybookTargets} from './storybook-state.mjs';

const CAMERA_PRESETS = new Set(['top', 'dollhouse', 'corner']);
const SELECT_RADIUS = 22;
const MIN_DRAG = 5;

/** Fill a free viewport slot when a dense group exceeds the local anchor grid. */
export function placeEditorMarkers(targets, width, height) {
  const placed = placeStorybookTargets(targets, width, height);
  const shown = new Set(placed.map(target => target.id));
  for (const target of targets.filter(target => !shown.has(target.id))) {
    const w = Math.min(target.w, width);
    const h = Math.min(target.h, height);
    const candidates = [];
    for (let x = w / 2; x <= width - w / 2; x += w + 4) {
      for (let y = h / 2; y <= height - h / 2; y += h + 4) {
        candidates.push({...target, x, y, w, h});
      }
    }
    candidates.sort((a, b) => Math.hypot(a.x - target.x, a.y - target.y) -
      Math.hypot(b.x - target.x, b.y - target.y));
    const slot = candidates.find(candidate => placed.every(other =>
      Math.abs(candidate.x - other.x) >= (candidate.w + other.w) / 2 + 2 ||
      Math.abs(candidate.y - other.y) >= (candidate.h + other.h) / 2 + 2));
    if (slot) placed.push(slot);
  }
  return placed;
}

function containsItem(item, point) {
  if (!point) return false;
  const radians = (Number(item.rotation) || 0) * Math.PI / 180;
  const dx = point.x - item.x;
  const dy = point.y - item.y;
  const x = dx * Math.cos(radians) + dy * Math.sin(radians);
  const y = -dx * Math.sin(radians) + dy * Math.cos(radians);
  return Math.abs(x) <= item.w / 2 && Math.abs(y) <= item.h / 2;
}

/** Select a visible miniature while allowing small details over large rugs. */
export function pickEditorItem(items, screenPoint, planPoint, anchors, width, height) {
  const candidates = items.flatMap((item, index) => {
    const anchor = anchors.get(item.id);
    if (!anchor) return [];
    const distance = Math.hypot(anchor.x * width - screenPoint.x, anchor.y * height - screenPoint.y);
    const near = distance <= SELECT_RADIUS;
    if (!near && !containsItem(item, planPoint)) return [];
    return [{item, index, distance, near, area: item.w * item.h}];
  });
  candidates.sort((a, b) => Number(b.near) - Number(a.near) ||
    (a.near ? a.distance - b.distance : a.area - b.area) || b.index - a.index);
  return candidates[0]?.item ?? null;
}

export function mountStorybookEditor(document, host) {
  const api = host.RoomcraftEditorViewport;
  const canvas = document.getElementById('sceneCanvas');
  const viewport = document.getElementById('viewport');
  const choice = document.getElementById('sceneView');
  if (!api || !canvas || !viewport || !choice) return null;
  const buttons = {
    left: document.getElementById('sceneRotateLeft'),
    right: document.getElementById('sceneRotateRight'),
    out: document.getElementById('sceneZoomOut'),
    in: document.getElementById('sceneZoomIn'),
  };
  const resetButton = document.getElementById('sceneReset');
  const outline = document.createElement('div');
  outline.className = 'scene-selection';
  outline.setAttribute('aria-hidden', 'true');
  Object.assign(outline.style, {
    position: 'absolute', width: '32px', height: '32px', border: '2px solid #35756b',
    borderRadius: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none',
    boxShadow: '0 0 0 2px #fff6de', zIndex: '2', display: 'none',
  });
  viewport.append(outline);
  const markerLayer = document.createElement('div');
  markerLayer.className = 'scene-placeholders';
  Object.assign(markerLayer.style, {position: 'absolute', inset: '0', pointerEvents: 'none', zIndex: '1'});
  viewport.append(markerLayer);
  const leaders = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  leaders.classList.add('scene-placeholder-leaders');
  leaders.setAttribute('aria-hidden', 'true');
  Object.assign(leaders.style, {position: 'absolute', inset: '0', width: '100%', height: '100%', pointerEvents: 'none'});
  viewport.insertBefore(leaders, markerLayer);
  const markers = new Map();
  const miniHelp = document.getElementById('miniHelp');
  const planHelp = miniHelp?.textContent;

  let scene;
  let project;
  let fingerprint;
  let view = {preset: 'top'};
  let mode = CAMERA_PRESETS.has(choice.value) ? choice.value : 'top';
  let drag;
  let resizeFrame;
  let disposed = false;

  const is3D = () => mode !== 'plan';
  const currentSize = () => canvas.getBoundingClientRect();
  const pointerPoint = event => {
    const box = currentSize();
    return {x: event.clientX - box.left, y: event.clientY - box.top};
  };
  function setStatus(text) {
    api.showStatus?.(text);
  }
  function draw(preview) {
    if (!scene || !is3D()) return;
    const {width, height} = currentSize();
    if (!width || !height) return;
    scene.resize(width, height);
    scene.render(0, preview ?? {}, {
      night: false, condition: 'sunny', daylightKnown: true, reduceMotion: true,
    });
    const targets = [];
    for (const [id, marker] of markers) {
      const anchor = scene.anchor(id);
      marker.hidden = !anchor;
      if (anchor) {
        targets.push({id, marker, x: anchor.x * width, y: anchor.y * height, w: 96, h: 44});
      }
    }
    const placements = placeEditorMarkers(targets, width, height);
    const shown = new Set(placements.map(target => target.id));
    const lines = [];
    for (const target of placements) {
      const {marker, x, y, w, h, id} = target;
      Object.assign(marker.style, {left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px`});
      const origin = targets.find(candidate => candidate.id === id);
      if (Math.hypot(origin.x - x, origin.y - y) > 8) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        for (const [key, value] of Object.entries({x1: origin.x, y1: origin.y, x2: x, y2: y})) line.setAttribute(key, value);
        line.setAttribute('stroke', '#6f816b');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('stroke-dasharray', '3 3');
        lines.push(line);
      }
    }
    for (const [id, marker] of markers) marker.hidden = !shown.has(id);
    leaders.replaceChildren(...lines);
    const selected = api.getSelection();
    const anchor = selected?.kind === 'item' ? scene.anchor(selected.id) : null;
    outline.style.display = anchor ? 'block' : 'none';
    if (anchor) {
      outline.style.left = `${anchor.x * width}px`;
      outline.style.top = `${anchor.y * height}px`;
    }
  }
  function restoreDrag() {
    if (!drag) return;
    const before = drag;
    drag = undefined;
    try { canvas.releasePointerCapture(before.pointerId); } catch { /* Capture can already be cancelled. */ }
    if (before.item) draw({[before.item.id]: {position: {x: before.item.x, y: before.item.y}}});
  }
  function updateButtons() {
    for (const button of Object.values(buttons)) if (button) button.disabled = !is3D();
  }
  function choose(next) {
    restoreDrag();
    mode = CAMERA_PRESETS.has(next) ? next : 'plan';
    choice.value = mode;
    canvas.hidden = !is3D();
    markerLayer.style.display = is3D() ? 'block' : 'none';
    leaders.style.display = is3D() ? 'block' : 'none';
    if (miniHelp) miniHelp.textContent = is3D()
      ? 'Drag objects to move them. Scroll to zoom; use the view controls to rotate.'
      : planHelp;
    viewport.classList.toggle('scene-3d', is3D());
    updateButtons();
    if (!is3D()) {
      outline.style.display = 'none';
      setStatus('Plan view · edit rooms, walls, floors and objects');
      return;
    }
    api.useSelectTool?.();
    const nextView = {preset: mode};
    refresh();
    scene?.setView(nextView);
    view = scene?.getView() ?? nextView;
    draw();
    setStatus('3D view · select and drag objects, or place an object from the catalog');
  }
  function fail() {
    scene?.dispose();
    scene = undefined;
    fingerprint = undefined;
    mode = 'plan';
    choice.value = mode;
    canvas.hidden = true;
    markerLayer.style.display = 'none';
    leaders.style.display = 'none';
    if (miniHelp) miniHelp.textContent = planHelp;
    viewport.classList.remove('scene-3d');
    outline.style.display = 'none';
    updateButtons();
    setStatus('3D view is unavailable on this screen. Plan view is ready.');
  }
  function refresh() {
    if (disposed || !is3D()) return;
    const nextProject = api.getProject();
    const nextFingerprint = JSON.stringify(nextProject);
    try {
      if (!scene || nextFingerprint !== fingerprint) {
        restoreDrag();
        if (scene) view = scene.getView();
        scene?.dispose();
        scene = undefined;
        project = nextProject;
        scene = createStorybookScene(canvas, project);
        scene.setView(view);
        fingerprint = nextFingerprint;
        markers.clear();
        markerLayer.replaceChildren();
        for (const item of project.items.filter(item => item.type === 'cameraThumbnail' || item.type.startsWith('ui'))) {
          const marker = document.createElement('button');
          marker.type = 'button';
          marker.className = 'scene-placeholder';
          marker.textContent = item.name || (item.type === 'cameraThumbnail' ? 'Camera' : 'Interface');
          marker.setAttribute('aria-label', `Select ${marker.textContent}`);
          Object.assign(marker.style, {
            position: 'absolute', transform: 'translate(-50%,-50%)', pointerEvents: 'auto',
            minWidth: '44px', minHeight: '44px', maxWidth: '96px', padding: '3px 7px', boxSizing: 'border-box',
            border: '1px dashed #6f816b', borderRadius: '8px', background: '#fff8e5e8',
            color: '#3a5243', font: '600 11px/1.2 system-ui,sans-serif', touchAction: 'none',
          });
          marker.addEventListener('pointerdown', event => onPointerDown(event, item.id));
          marker.addEventListener('click', event => {
            if (event.detail === 0) {
              api.selectItem(item.id);
              draw();
            }
          });
          markers.set(item.id, marker);
          markerLayer.append(marker);
        }
      }
      draw();
    } catch { fail(); }
  }
  function changeCamera(edit) {
    if (!scene || !is3D()) return;
    restoreDrag();
    scene.setView(edit(scene.getView()));
    view = scene.getView();
    draw();
  }
  const onChange = () => refresh();
  const onTool = () => {
    const tool = api.getTool();
    if (is3D() && tool !== 'select') choose('plan');
    else if (is3D()) draw();
  };
  const onChoice = () => choose(choice.value);
  const onResize = () => {
    host.cancelAnimationFrame(resizeFrame);
    resizeFrame = host.requestAnimationFrame(() => draw());
  };
  const onPointerDown = (event, forcedId = null) => {
    if (!is3D() || !scene || event.button !== 0 || drag) return;
    event.preventDefault();
    event.stopPropagation();
    const screen = pointerPoint(event);
    const planPoint = scene.projectToPlan(screen.x, screen.y);
    if (!planPoint) return;
    if (api.hasPlacement()) {
      api.placeAt(planPoint.x, planPoint.y);
      refresh();
      return;
    }
    const {width, height} = currentSize();
    const anchors = new Map(project.items.map(item => [item.id, scene.anchor(item.id)]));
    const item = forcedId ? project.items.find(item => item.id === forcedId) :
      pickEditorItem(project.items, screen, planPoint, anchors, width, height);
    api.selectItem(item?.id ?? null);
    if (!item) {
      draw();
      return;
    }
    drag = {item: {...item}, startScreen: screen, startPlan: planPoint, pointerId: event.pointerId};
    canvas.setPointerCapture(event.pointerId);
    draw();
  };
  const onPointerMove = event => {
    if (!is3D()) return;
    event.stopPropagation();
    if (!drag || drag.pointerId !== event.pointerId || !scene) return;
    const screen = pointerPoint(event);
    if (!drag.moved && Math.hypot(screen.x - drag.startScreen.x, screen.y - drag.startScreen.y) < MIN_DRAG) return;
    const p = scene.projectToPlan(screen.x, screen.y);
    if (!p) return;
    drag.moved = true;
    drag.position = {x: drag.item.x + p.x - drag.startPlan.x, y: drag.item.y + p.y - drag.startPlan.y};
    draw({[drag.item.id]: {position: drag.position}});
  };
  const onPointerUp = event => {
    if (!is3D()) return;
    event.stopPropagation();
    if (!drag || drag.pointerId !== event.pointerId) return;
    const finished = drag;
    drag = undefined;
    try { canvas.releasePointerCapture(event.pointerId); } catch { /* Browser released capture. */ }
    if (finished.moved && finished.position) {
      api.moveItem(finished.item.id, finished.position.x, finished.position.y);
      refresh();
    } else draw();
  };
  const onPointerCancel = event => {
    if (drag?.pointerId === event.pointerId) restoreDrag();
    event.stopPropagation();
  };
  const onWheel = event => {
    if (!is3D()) return;
    event.preventDefault();
    event.stopPropagation();
    changeCamera(current => ({...current, zoom: current.zoom * (event.deltaY < 0 ? 1.1 : 1 / 1.1)}));
  };
  const onKey = event => {
    if (event.key === 'Escape' && drag) {
      event.preventDefault();
      event.stopImmediatePropagation();
      restoreDrag();
    }
  };
  const onContextLost = event => {
    event.preventDefault();
    fail();
  };
  const rotateLeft = () => changeCamera(current => ({...current, azimuth: current.azimuth - 15}));
  const rotateRight = () => changeCamera(current => ({...current, azimuth: current.azimuth + 15}));
  const zoomOut = () => changeCamera(current => ({...current, zoom: current.zoom / 1.2}));
  const zoomIn = () => changeCamera(current => ({...current, zoom: current.zoom * 1.2}));
  const resetView = () => choose('top');
  buttons.left?.addEventListener('click', rotateLeft);
  buttons.right?.addEventListener('click', rotateRight);
  buttons.out?.addEventListener('click', zoomOut);
  buttons.in?.addEventListener('click', zoomIn);
  resetButton?.addEventListener('click', resetView);
  choice.addEventListener('change', onChoice);
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerCancel);
  canvas.addEventListener('lostpointercapture', onPointerCancel);
  canvas.addEventListener('wheel', onWheel, {passive: false});
  canvas.addEventListener('webglcontextlost', onContextLost);
  host.addEventListener('keydown', onKey, true);
  host.addEventListener('roomcraft-editor-change', onChange);
  host.addEventListener('roomcraft-editor-tool', onTool);
  const observer = new host.ResizeObserver(onResize);
  observer.observe(viewport);
  choose(mode);

  return {
    getView: () => scene?.getView() ?? {...view},
    setView: choose,
    dispose() {
      disposed = true;
      restoreDrag();
      observer.disconnect();
      host.cancelAnimationFrame(resizeFrame);
      scene?.dispose();
      scene = undefined;
      outline.remove();
      markerLayer.remove();
      leaders.remove();
      if (miniHelp) miniHelp.textContent = planHelp;
      buttons.left?.removeEventListener('click', rotateLeft);
      buttons.right?.removeEventListener('click', rotateRight);
      buttons.out?.removeEventListener('click', zoomOut);
      buttons.in?.removeEventListener('click', zoomIn);
      resetButton?.removeEventListener('click', resetView);
      choice.removeEventListener('change', onChoice);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerCancel);
      canvas.removeEventListener('lostpointercapture', onPointerCancel);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      host.removeEventListener('keydown', onKey, true);
      host.removeEventListener('roomcraft-editor-change', onChange);
      host.removeEventListener('roomcraft-editor-tool', onTool);
    },
  };
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  mountStorybookEditor(document, window);
}
