import {isExteriorScenery} from './storybook-exterior.mjs';
import {compileStorybookPlan, createStorybookScene} from './storybook-scene.mjs';
import {normalizeCameraView, storybookCameraTileSize} from './storybook-camera.mjs';
import {placeStorybookTargets} from './storybook-state.mjs';
import {createPersonPresence, personSource, readDetectionZones, readPersonTracks} from './storybook-tracking.mjs';
import {mountStorybookStudioLook} from './storybook-studio-look.mjs';
import {mountRadarCalibration} from './storybook-calibration-panel.mjs';
import {mountVacuumAlignment} from './storybook-vacuum-alignment-panel.mjs';
import {mountStorybookTerrainEditor} from './storybook-terrain-editor.mjs';

const SELECT_RADIUS = 22;
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
    if (!near && (['garageDoor','garagePriusBlue','garageCeilingLight'].includes(item.type) || isExteriorScenery(item.type) || !containsItem(item, planPoint))) return [];
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
  if (!api || !canvas || !viewport) return null;
  const motionPreference = host.matchMedia?.('(prefers-reduced-motion: reduce)');
  const trackingBridge = host.location?.pathname?.startsWith('/local/roomcraft/')
    ? host.RoomcraftDashboardBridge : null;
  const calibrator = mountRadarCalibration(document, host, {api, bridge: trackingBridge});
  const vacuumAlignment = mountVacuumAlignment(document, host, {api, bridge: trackingBridge});
  const look = mountStorybookStudioLook(document, host, {
    api, viewport, bridge: trackingBridge, onChange: () => draw(), getHolidayPlacement: () => scene?.getHolidayDefaultPlacement?.(),
    onWorldLifePreview: value => previewWorldLife(value),
  });
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
  let scene;
  let project;
  let fingerprint;
  let view = normalizeCameraView('top');
  let focus;
  let worldLifePreview, worldLifeReturn;
  let active = true;
  let guideProjection;
  let draftPositions;
  let resizeFrame;
  let ambientFrame;
  let lastAmbientFrame = -Infinity;
  let ambientSeconds = 0;
  let renderInputs;
  let disposed = false;
  let trackingItems = [];
  let trackingIds = [];
  let trackingKey = '';
  let trackingGeneration = 0;
  let trackingTimer;
  let trackingRequest = false;
  let trackSnapshots = {};
  const personPresence = createPersonPresence();
  let displayedPeople = {key: '', scene: null, reduceMotion: false};
  let displayedCoverage = {id: null, scene: null};

  const is3D = () => active;
  const reducedMotion = () => motionPreference?.matches === true || !look.motionEnabled();
  const currentSize = () => canvas.getBoundingClientRect();
  const pointerPoint = event => {
    const box = currentSize();
    return {x: event.clientX - box.left, y: event.clientY - box.top};
  };
  const terrain = mountStorybookTerrainEditor(document, host, {api, viewport, canvas, pointerPoint,
    getScene: () => scene, getProjection: () => guideProjection});
  function previewWorldLife(value) {
    const surfaces = [document.getElementById('planCanvas'), markerLayer, leaders].filter(Boolean);
    if (value && !worldLifePreview) {
      worldLifeReturn = {view: {...view}, focus: focus && {...focus}, pointerEvents: viewport.style.pointerEvents,
        visibility: surfaces.map(element => element.style.visibility)};
      viewport.style.pointerEvents = 'none';
      for (const element of surfaces) element.style.visibility = 'hidden';
    } else if (!value && worldLifeReturn) {
      view = worldLifeReturn.view; focus = worldLifeReturn.focus;
      viewport.style.pointerEvents = worldLifeReturn.pointerEvents;
      surfaces.forEach((element, index) => { element.style.visibility = worldLifeReturn.visibility[index]; });
      worldLifeReturn = undefined;
      updateCamera();
    }
    worldLifePreview = value;
  }
  function setStatus(text) {
    api.showStatus?.(text);
  }
  function syncAmbientAnimation() {
    const enabled = !disposed && (scene?.hasAmbientMotion || scene?.hasPeopleMotion)
      && is3D() && !document.hidden && !reducedMotion();
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
        try { if (renderInputs) scene.render(ambientSeconds, ...renderInputs); } catch { fail(); }
      }
      syncAmbientAnimation();
    });
  }
  function updatePeople(redraw = true) {
    const activeScene = is3D() ? scene : null;
    const reduceMotion = reducedMotion();
    const tracks = !canTrack() ? [] : activeScene
      ? personPresence.read(trackingItems, trackSnapshots, Date.now(), {
        contains: activeScene.canPlacePerson, nearest: activeScene.nearestPersonPoint,
      }) : readPersonTracks(trackingItems, trackSnapshots);
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
    trackingItems = items.filter(personSource).slice(0, TRACK_SOURCE_LIMIT);
    const ids = [...new Set(trackingItems.flatMap(item => [
      item.presenceTrackEntityId, item.presenceEntityId,
    ]).filter(id => /^(?:sensor|binary_sensor)\.[a-z0-9_]+$/.test(id ?? '')))];
    const key = ids.join(',');
    if (key !== trackingKey) {
      trackingKey = key;
      trackingIds = ids;
      trackingGeneration++;
      trackSnapshots = {};
    }
    syncTracking();
  }

  function center() {
    const {width, height} = currentSize();
    return scene?.projectToPlan(width / 2, height / 2);
  }
  function updateCamera() {
    scene?.setView(view, focus ? {focus: {x: focus.x, y: 0, z: focus.y}} : undefined);
  }
  function fit() {
    view = normalizeCameraView('top');
    focus = undefined;
    updateCamera();
    draw();
  }
  function pan(from, dx, dy) {
    if (!from || !guideProjection) return;
    const {scale} = guideProjection;
    focus = {x: from.x - dx / scale, y: from.y - dy / scale};
    updateCamera();
    draw();
  }
  function zoomAt(factor, x, y) {
    const before = scene?.projectToPlan(x, y);
    if (!before) return;
    const next = normalizeCameraView({preset: 'top', zoom: view.zoom * factor});
    if (next.zoom === view.zoom) return;
    view = next;
    updateCamera();
    const after = scene.projectToPlan(x, y);
    const middle = center();
    if (after && middle) focus = {x: middle.x + before.x - after.x, y: middle.y + before.y - after.y};
    updateCamera();
    draw();
  }
  function syncGuides(width) {
    // At the north-up orthographic pose, one planar affine transform applies
    // to the scene, edit handles, and pointer coordinates at every elevation.
    const origin = scene.projectToPlan(0, 0);
    const right = scene.projectToPlan(width, 0);
    if (!origin || !right || right.x <= origin.x) return;
    const next = {left: origin.x, top: origin.y, scale: width / (right.x - origin.x), zoom: view.zoom};
    if (Object.entries(next).every(([key, value]) => guideProjection?.[key] === value)) return;
    guideProjection = next;
    api.setOverheadView({...next, fit, pan, zoomAt, center});
    terrain?.paint();
  }
  function draw() {
    syncAmbientAnimation();
    if (!scene || !is3D()) return;
    const {width, height} = currentSize();
    if (width < 1 || height < 1) return;
    scene.resize(width, height);
    if (worldLifePreview) {
      if (!scene.frameWorldLifePreview(worldLifePreview.settings)) updateCamera();
    }
    else syncGuides(width);
    const selected = api.getSelection();
    const selectedId = selected?.kind === 'item' ? selected.id : null;
    if (displayedCoverage.scene !== scene || displayedCoverage.id !== selectedId) {
      const item = project.items.find(entry => entry.id === selectedId);
      scene.setDetectionZones(item ? readDetectionZones([item]) : []);
      displayedCoverage = {id: selectedId, scene};
    }
    const reduceMotion = reducedMotion();
    const appearance = look.sync(true, project.sceneSettings, reduceMotion);
    const states = Object.create(null);
    for (const item of project.items) {
      const state = appearance.states[item.id];
      if (state && state.entityId === item.entityId) states[item.id] = state;
    }
    renderInputs = [states, {...appearance.environment, reduceMotion},
      {showTelemetryPosition: false, draftPositions}];
    scene.render(ambientSeconds, ...renderInputs);
    const targets = [];
    for (const [id, marker] of markers) {
      const anchor = scene.anchor(id);
      marker.hidden = !anchor;
      if (anchor) {
        const item = project.items.find(entry => entry.id === id);
        const size = item?.type === 'cameraThumbnail' ? storybookCameraTileSize(item, width) : {w: 96, h: 44};
        targets.push({id, marker, x: anchor.x * width, y: anchor.y * height, ...size});
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
  }
  function fail() {
    active = false;
    scene?.dispose();
    scene = undefined;
    guideProjection = undefined;
    syncAmbientAnimation();
    canvas.hidden = true;
    look.sync(false, api.getProject().sceneSettings);
    markerLayer.style.display = 'none';
    leaders.style.display = 'none';
    viewport.classList.remove('scene-3d');
    api.setOverheadView(null);
    updatePeople(false);
    terrain?.projectChanged();
    setStatus('3D view is unavailable. You can edit in the overhead plan.');
  }
  function refresh() {
    if (disposed) return;
    const nextProject = api.getProject();
    configureTracking(nextProject.items);
    if (!is3D()) {
      look.sync(false, nextProject.sceneSettings);
      updatePeople();
      terrain?.projectChanged();
      return;
    }
    const nextFingerprint = JSON.stringify(nextProject);
    try {
      if (!scene || nextFingerprint !== fingerprint) {
        scene?.dispose();
        scene = undefined;
        project = nextProject;
        scene = createStorybookScene(canvas, project);
        updateCamera();
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
            minWidth: '44px', minHeight: '44px', padding: '3px 7px', boxSizing: 'border-box',
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
      updatePeople(false);
      draw();
      terrain?.projectChanged();
    } catch { fail(); }
  }
  const onChange = () => {
    draftPositions = undefined;
    refresh();
  };
  const onDraft = event => {
    draftPositions = event.detail;
    draw();
  };
  const onResize = () => {
    host.cancelAnimationFrame(resizeFrame);
    resizeFrame = host.requestAnimationFrame(() => draw());
  };
  const onPointerDown = (event, forcedId = null) => {
    if (!is3D() || !scene) return;
    if (terrain?.pointerDown(event)) return;
    const screen = pointerPoint(event);
    const tool = api.getTool();
    const placementPoint = api.hasPlacement()
      ? scene.projectToPlan(screen.x, screen.y, api.getPlacementType(), {preferTabletop: true}) : null;
    let itemId = forcedId;
    if (!itemId && !placementPoint && (tool === 'select' || tool === 'erase')) {
      itemId = scene.pickGarage(screen.x, screen.y);
      if (!itemId) {
        const {width, height} = currentSize();
        const anchors = new Map(project.items.map(item => [item.id, scene.anchor(item.id)]));
        itemId = pickEditorItem(project.items, screen, scene.projectToPlan(screen.x, screen.y), anchors, width, height)?.id;
      }
    }
    api.pointerDown(event, {itemId, placementPoint, captureTarget: canvas});
  };
  const onPointerMove = event => { if (!terrain?.pointerMove(event)) api.pointerMove(event); };
  const onPointerUp = event => { if (!terrain?.pointerUp(event)) api.pointerUp(event); };
  const onPointerCancel = event => { if (!terrain?.pointerCancel(event)) api.pointerCancel(event); };
  const onContextLost = event => {
    event.preventDefault();
    fail();
  };
  const onMotionPreference = () => { updatePeople(false); draw(); };
  const onVisibility = () => { syncTracking(); updatePeople(); syncAmbientAnimation(); };
  document.addEventListener('visibilitychange', onVisibility);
  motionPreference?.addEventListener('change', onMotionPreference);
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerCancel);
  canvas.addEventListener('lostpointercapture', onPointerCancel);
  canvas.addEventListener('webglcontextlost', onContextLost);
  host.addEventListener('roomcraft-editor-change', onChange);
  host.addEventListener('roomcraft-editor-preview', onDraft);
  const observer = new host.ResizeObserver(onResize);
  observer.observe(viewport);
  canvas.hidden = false;
  viewport.classList.add('scene-3d');
  refresh();
  try {
    if (host.location.hash === '#scene-settings' || trackingBridge && host.parent.location.hash === '#scene-settings') {
      look.open();
    }
  } catch { /* Studio can be embedded by a different origin. */ }
  return {
    getView: () => scene?.getView() ?? {...view},
    dispose() {
      disposed = true;
      active = false;
      syncAmbientAnimation();
      syncTracking();
      document.removeEventListener('visibilitychange', onVisibility);
      motionPreference?.removeEventListener('change', onMotionPreference);
      observer.disconnect();
      host.cancelAnimationFrame(resizeFrame);
      scene?.dispose();
      scene = undefined;
      markerLayer.remove();
      leaders.remove();
      look.dispose();
      calibrator?.dispose();
      vacuumAlignment?.dispose();
      terrain?.dispose();
      canvas.hidden = true;
      viewport.classList.remove('scene-3d');
      api.setOverheadView(null);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerCancel);
      canvas.removeEventListener('lostpointercapture', onPointerCancel);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      host.removeEventListener('roomcraft-editor-change', onChange);
      host.removeEventListener('roomcraft-editor-preview', onDraft);
    },
  };
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.RoomcraftPlanStructure = compileStorybookPlan;
  mountStorybookEditor(document, window);
  window.dispatchEvent(new Event('roomcraft-asset-loaded'));
}
