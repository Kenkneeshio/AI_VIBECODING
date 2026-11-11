import {compileStorybookPlan, createStorybookScene} from './storybook-scene.mjs';
import {CAMERA_PRESETS, enterFreeView, populateCameraOptions, resolveDefaultCameraView, studioCameraPreferences} from './storybook-camera.mjs';
import {bindFreeViewGestures} from './storybook-orbit.mjs';
import {placeStorybookTargets} from './storybook-state.mjs';
import {readPersonTracks} from './storybook-tracking.mjs';

const SELECT_RADIUS = 22;
const MIN_DRAG = 5;
const AMBIENT_FRAME_INTERVAL = 1000 / 12;
const TRACK_INTERVAL_MS = 1000;
const TRACK_SOURCE_LIMIT = 12;

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
    // The garage mesh is picked separately at its visible ground-level height.
    if (!near && (item.type === 'garageDoor' || !containsItem(item, planPoint))) return [];
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
  populateCameraOptions(choice, true);
  const buttons = {
    left: document.getElementById('sceneRotateLeft'),
    right: document.getElementById('sceneRotateRight'),
    out: document.getElementById('sceneZoomOut'),
    in: document.getElementById('sceneZoomIn'),
  };
  const cameraOptions = document.getElementById('sceneCameraOptions');
  const resetButton = document.getElementById('sceneReset');
  const saveDefaultButton = document.getElementById('sceneSaveDefault');
  const clearDefaultButton = document.getElementById('sceneClearDefault');
  const defaultStatus = document.getElementById('sceneDefaultStatus');
  const preferences = studioCameraPreferences(host);
  const motionPreference = host.matchMedia?.('(prefers-reduced-motion: reduce)');
  const trackingBridge = host.location?.pathname?.startsWith('/local/roomcraft/')
    ? host.RoomcraftDashboardBridge : null;
  const look = document.createElement('label');
  look.className = 'scene-dashboard-look';
  look.hidden = true;
  look.title = 'Lighting and device appearance from the last dashboard import';
  const lookCheckbox = document.createElement('input');
  lookCheckbox.type = 'checkbox';
  lookCheckbox.checked = true;
  look.append(lookCheckbox, ' Dashboard look');
  cameraOptions?.append(look);
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
  const editorCanvasLabel = canvas.getAttribute('aria-label') ?? 'Editable three-dimensional home view';

  let scene;
  let project;
  let fingerprint;
  let view = resolveDefaultCameraView(null);
  let mode = choice.value;
  let lastEditableMode = 'default';
  let drag;
  let resizeFrame;
  let ambientFrame;
  let lastAmbientFrame = -Infinity;
  let ambientSeconds = 0;
  let disposed = false;
  let cameraChanged = false;
  let savedStartupView = null;
  let defaultBusy = false;
  let trackingItems = [];
  let trackingIds = [];
  let trackingKey = '';
  let trackingGeneration = 0;
  let trackingTimer;
  let trackingRequest = false;
  let trackSnapshots = {};
  let displayedPeople = {key: '', scene: null, reduceMotion: false};

  const is3D = () => mode !== 'plan';
  const isFree = () => mode === 'free';
  const currentSize = () => canvas.getBoundingClientRect();
  const pointerPoint = event => {
    const box = currentSize();
    return {x: event.clientX - box.left, y: event.clientY - box.top};
  };
  function setStatus(text) {
    api.showStatus?.(text);
  }
  function syncAmbientAnimation() {
    const enabled = !disposed && (scene?.hasAmbientMotion || scene?.hasPeopleMotion)
      && is3D() && !document.hidden && !motionPreference?.matches;
    if (!enabled) {
      host.cancelAnimationFrame(ambientFrame);
      ambientFrame = undefined;
      return;
    }
    if (ambientFrame !== undefined) return;
    ambientFrame = host.requestAnimationFrame(at => {
      ambientFrame = undefined;
      if (at - lastAmbientFrame >= AMBIENT_FRAME_INTERVAL - 1) {
        lastAmbientFrame = at;
        ambientSeconds = at / 1000;
        try { scene.renderAmbient(ambientSeconds); } catch { fail(); }
      }
      syncAmbientAnimation();
    });
  }
  function updatePeople(redraw = true) {
    const activeScene = is3D() ? scene : null;
    const reduceMotion = motionPreference?.matches === true;
    const tracks = canTrack() ? readPersonTracks(trackingItems, trackSnapshots) : [];
    const key = JSON.stringify(tracks);
    if (key === displayedPeople.key && activeScene === displayedPeople.scene
      && reduceMotion === displayedPeople.reduceMotion) return;
    displayedPeople = {key, scene: activeScene, reduceMotion};
    if (activeScene) {
      activeScene.setPeople(tracks, (host.performance?.now() ?? 0) / 1000, {reduceMotion});
      if (redraw) draw();
    }
    api.setPersonPreview?.(activeScene ? [] : tracks);
  }

  function canTrack() {
    return Boolean(trackingBridge?.request && trackingIds.length && !disposed && !document.hidden);
  }

  async function readTracking(checkExpiry = true) {
    if (checkExpiry) updatePeople();
    if (trackingRequest || !canTrack()) return;
    trackingRequest = true;
    const generation = trackingGeneration;
    try {
      const snapshots = await trackingBridge.request('TRACK_GET', trackingIds);
      if (generation === trackingGeneration && canTrack()) {
        trackSnapshots = snapshots && typeof snapshots === 'object' ? snapshots : {};
        updatePeople();
      }
    } catch {
      if (generation === trackingGeneration) {
        trackSnapshots = {};
        updatePeople();
      }
    } finally {
      trackingRequest = false;
    }
  }

  function syncTracking() {
    if (canTrack()) {
      if (trackingTimer === undefined) {
        trackingTimer = host.setInterval(readTracking, TRACK_INTERVAL_MS);
        void readTracking(false);
      }
    } else {
      if (trackingTimer !== undefined) {
        host.clearInterval(trackingTimer);
        trackingTimer = undefined;
        trackingGeneration++;
        trackSnapshots = {};
      }
    }
  }

  function configureTracking(items) {
    trackingItems = items.filter(item => item.type === 'presenceSwitch'
      && /^sensor\.[a-z0-9_]+$/.test(item.presenceTrackEntityId)
      && Array.isArray(item.presenceTrackTransform));
    const ids = [...new Set(trackingItems.map(item => item.presenceTrackEntityId))].slice(0, TRACK_SOURCE_LIMIT);
    const key = ids.join(',');
    if (key !== trackingKey) {
      trackingKey = key;
      trackingIds = ids;
      trackingGeneration++;
      trackSnapshots = {};
    }
    syncTracking();
  }

  function draw(dragPreview) {
    syncAmbientAnimation();
    if (!scene || !is3D()) return;
    const {width, height} = currentSize();
    if (!width || !height) return;
    scene.resize(width, height);
    const dashboard = api.getPreview?.();
    look.hidden = !dashboard?.environment;
    const usingDashboard = !look.hidden && lookCheckbox.checked;
    const states = Object.create(null);
    if (usingDashboard) {
      for (const item of project.items) {
        const state = dashboard.states?.[item.id];
        if (state && state.entityId === item.entityId) states[item.id] = state;
      }
    }
    for (const [id, state] of Object.entries(dragPreview ?? {})) states[id] = {...states[id], ...state};
    const environment = usingDashboard ? dashboard.environment
      : {night: false, condition: 'sunny', daylightKnown: true};
    scene.render(ambientSeconds, states, {...environment, reduceMotion: motionPreference?.matches === true},
      {animateTelemetry: false});
    if (isFree()) return;
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
    if (cameraOptions) cameraOptions.hidden = !is3D();
    for (const button of Object.values(buttons)) if (button) button.disabled = !is3D();
    if (saveDefaultButton) {
      saveDefaultButton.hidden = !scene || !isFree();
      saveDefaultButton.disabled = defaultBusy;
    }
    if (clearDefaultButton) {
      clearDefaultButton.hidden = !scene || !is3D() || !savedStartupView;
      clearDefaultButton.disabled = defaultBusy;
    }
  }
  function setDefaultStatus(text) {
    if (defaultStatus) defaultStatus.textContent = text;
  }
  function markCameraChanged() {
    cameraChanged = true;
    setDefaultStatus('');
  }
  function updateCanvasInteraction() {
    canvas.tabIndex = isFree() ? 0 : -1;
    canvas.style.cursor = isFree() ? 'grab' : '';
    canvas.setAttribute('aria-label', isFree()
      ? 'Free view. Use arrow keys to orbit and plus or minus to zoom.'
      : editorCanvasLabel);
  }
  function choose(next, {initial = false} = {}) {
    if (!initial) {
      markCameraChanged();
      if (next === 'default') cameraChanged = false;
    }
    orbit.cancel();
    restoreDrag();
    const previousView = scene?.getView() ?? view;
    const nextMode = Object.hasOwn(CAMERA_PRESETS, next) ? next : 'plan';
    if (nextMode !== 'plan') api.useSelectTool?.();
    mode = nextMode;
    if (is3D() && !isFree()) lastEditableMode = mode;
    choice.value = mode;
    canvas.hidden = !is3D();
    updateCanvasInteraction();
    const showMarkers = is3D() && !isFree();
    markerLayer.style.display = showMarkers ? 'block' : 'none';
    leaders.style.display = showMarkers ? 'block' : 'none';
    if (!showMarkers) outline.style.display = 'none';
    if (miniHelp) {
      if (isFree()) miniHelp.textContent = 'Drag or swipe to orbit. Pinch or scroll to zoom.';
      else miniHelp.textContent = is3D()
        ? 'Drag objects to move them. Scroll to zoom; use the view controls to rotate.'
        : planHelp;
    }
    viewport.classList.toggle('scene-3d', is3D());
    updateButtons();
    if (!is3D()) {
      refresh();
      syncAmbientAnimation();
      look.hidden = true;
      setStatus('Plan view · edit rooms, walls, floors and objects');
      return;
    }
    const nextView = mode === 'default'
      ? resolveDefaultCameraView(savedStartupView)
      : isFree() ? enterFreeView(previousView) : {preset: mode};
    view = scene ? scene.setView(nextView) : nextView;
    refresh();
    if (!scene) return;
    setStatus(isFree()
      ? 'Free view · choose an editable view to move objects'
      : '3D view · select and drag objects, or place an object from the catalog');
  }
  function fail() {
    orbit.cancel();
    scene?.dispose();
    scene = undefined;
    fingerprint = undefined;
    mode = 'plan';
    syncAmbientAnimation();
    choice.value = mode;
    canvas.hidden = true;
    look.hidden = true;
    updateCanvasInteraction();
    markerLayer.style.display = 'none';
    leaders.style.display = 'none';
    if (miniHelp) miniHelp.textContent = planHelp;
    viewport.classList.remove('scene-3d');
    outline.style.display = 'none';
    updateButtons();
    updatePeople(false);
    setStatus('3D view is unavailable on this screen. Plan view is ready.');
  }
  function refresh() {
    if (disposed) return;
    const nextProject = api.getProject();
    configureTracking(nextProject.items);
    if (!is3D()) { updatePeople(); return; }
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
            if (!isFree() && event.detail === 0) {
              api.selectItem(item.id);
              draw();
            }
          });
          markers.set(item.id, marker);
          markerLayer.append(marker);
        }
      }
      updateButtons();
      updatePeople(false);
      draw();
    } catch { fail(); }
  }
  function changeCamera(edit) {
    if (!scene || !is3D()) return;
    markCameraChanged();
    restoreDrag();
    scene.setView(edit(scene.getView()));
    view = scene.getView();
    draw();
  }
  const onChange = () => refresh();
  const onTool = () => {
    const tool = api.getTool();
    if (is3D() && tool !== 'select') choose('plan');
    else if (isFree() && api.hasPlacement()) choose(lastEditableMode);
    else if (is3D()) draw();
  };
  const onChoice = () => choose(choice.value);
  const onResize = () => {
    host.cancelAnimationFrame(resizeFrame);
    resizeFrame = host.requestAnimationFrame(() => draw());
  };
  const orbit = bindFreeViewGestures(canvas, {
    getView: () => isFree() ? scene?.getView() : null,
    onChange: next => {
      if (!scene || !isFree()) return;
      markCameraChanged();
      view = scene.setView(next);
      onResize();
    },
  });
  const onPointerDown = (event, forcedId = null) => {
    if (!is3D() || isFree() || !scene || event.button !== 0 || drag) return;
    event.preventDefault();
    event.stopPropagation();
    const screen = pointerPoint(event);
    if (api.hasPlacement()) {
      const point = scene.projectToPlan(screen.x, screen.y, api.getPlacementType());
      if (point) api.placeAt(point.x, point.y);
      refresh();
      return;
    }
    const {width, height} = currentSize();
    const anchors = new Map(project.items.map(item => [item.id, scene.anchor(item.id)]));
    const hitId = forcedId ?? scene.pickGarage(screen.x, screen.y);
    const item = hitId ? project.items.find(item => item.id === hitId) :
      pickEditorItem(project.items, screen, scene.projectToPlan(screen.x, screen.y), anchors, width, height);
    api.selectItem(item?.id ?? null);
    if (!item) {
      draw();
      return;
    }
    const startPlan = scene.projectToPlan(screen.x, screen.y, item.type);
    if (!startPlan) return;
    drag = {item: {...item}, startScreen: screen, startPlan, pointerId: event.pointerId};
    canvas.setPointerCapture(event.pointerId);
    draw();
  };
  const onPointerMove = event => {
    if (!is3D() || isFree()) return;
    event.stopPropagation();
    if (!drag || drag.pointerId !== event.pointerId || !scene) return;
    const screen = pointerPoint(event);
    if (!drag.moved && Math.hypot(screen.x - drag.startScreen.x, screen.y - drag.startScreen.y) < MIN_DRAG) return;
    const p = scene.projectToPlan(screen.x, screen.y, drag.item.type);
    if (!p) return;
    drag.moved = true;
    drag.position = {x: drag.item.x + p.x - drag.startPlan.x, y: drag.item.y + p.y - drag.startPlan.y};
    draw({[drag.item.id]: {position: drag.position}});
  };
  const onPointerUp = event => {
    if (!is3D() || isFree()) return;
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
    if (isFree()) return;
    if (drag?.pointerId === event.pointerId) restoreDrag();
    event.stopPropagation();
  };
  const onWheel = event => {
    if (!is3D() || isFree()) return;
    event.preventDefault();
    event.stopPropagation();
    changeCamera(current => ({...current, zoom: current.zoom * (event.deltaY < 0 ? 1.1 : 1 / 1.1)}));
  };
  const onKey = event => {
    if (isFree() && event.target === canvas && (event.key === 'Delete' || event.key === 'Backspace')) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
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
  const changeLook = () => draw();
  const onMotionPreference = () => { updatePeople(false); draw(); };
  const onVisibility = () => { syncTracking(); updatePeople(); syncAmbientAnimation(); };
  document.addEventListener('visibilitychange', onVisibility);
  motionPreference?.addEventListener('change', onMotionPreference);
  async function loadStartupView() {
    defaultBusy = true;
    updateButtons();
    try {
      savedStartupView = await preferences.read();
      if (!disposed && !cameraChanged) choose('default', {initial: true});
    } catch {
      if (!disposed) setDefaultStatus('Saved view unavailable');
    } finally {
      defaultBusy = false;
      if (!disposed) updateButtons();
    }
  }
  async function writeStartupView(viewToSave) {
    if (!scene || !is3D() || defaultBusy) return;
    defaultBusy = true;
    setDefaultStatus('Saving view…');
    updateButtons();
    try {
      await preferences.write(viewToSave);
      if (disposed) return;
      savedStartupView = viewToSave;
      if (!viewToSave) choose('default');
      setDefaultStatus(viewToSave ? 'Default view saved' : 'Top down is the default');
    } catch {
      if (!disposed) setDefaultStatus('Could not save default view');
    } finally {
      defaultBusy = false;
      if (!disposed) updateButtons();
    }
  }
  const saveStartupView = () => {
    if (isFree() && scene) writeStartupView(scene.getView());
  };
  const clearStartupView = () => writeStartupView(null);
  buttons.left?.addEventListener('click', rotateLeft);
  buttons.right?.addEventListener('click', rotateRight);
  buttons.out?.addEventListener('click', zoomOut);
  buttons.in?.addEventListener('click', zoomIn);
  resetButton?.addEventListener('click', resetView);
  saveDefaultButton?.addEventListener('click', saveStartupView);
  clearDefaultButton?.addEventListener('click', clearStartupView);
  lookCheckbox.addEventListener('change', changeLook);
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
  choose(mode, {initial: true});
  loadStartupView();

  return {
    getView: () => scene?.getView() ?? {...view},
    setView: choose,
    dispose() {
      disposed = true;
      syncAmbientAnimation();
      syncTracking();
      document.removeEventListener('visibilitychange', onVisibility);
      motionPreference?.removeEventListener('change', onMotionPreference);
      restoreDrag();
      orbit.dispose();
      mode = 'plan';
      updateCanvasInteraction();
      observer.disconnect();
      host.cancelAnimationFrame(resizeFrame);
      scene?.dispose();
      scene = undefined;
      outline.remove();
      markerLayer.remove();
      leaders.remove();
      look.remove();
      lookCheckbox.removeEventListener('change', changeLook);
      if (miniHelp) miniHelp.textContent = planHelp;
      buttons.left?.removeEventListener('click', rotateLeft);
      buttons.right?.removeEventListener('click', rotateRight);
      buttons.out?.removeEventListener('click', zoomOut);
      buttons.in?.removeEventListener('click', zoomIn);
      resetButton?.removeEventListener('click', resetView);
      saveDefaultButton?.removeEventListener('click', saveStartupView);
      clearDefaultButton?.removeEventListener('click', clearStartupView);
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
  window.RoomcraftPlanStructure = compileStorybookPlan;
  mountStorybookEditor(document, window);
  window.dispatchEvent(new Event('roomcraft-asset-loaded'));
}
