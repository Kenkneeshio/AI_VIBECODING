import {drawSurveyFloor} from './storybook-calibration-panel.mjs';
import {applyVacuumAlignment, composeVacuumAlignment, fitVacuumAlignment, invertVacuumAlignment,
  vacuumAlignmentDistance} from './storybook-vacuum-alignment.mjs';

const MAX_PAIRS = 12;
const MAX_ENCODED_IMAGE = Math.ceil(8 * 1024 * 1024 / 3) * 4 + 32;
const CAMERA = /^camera\.[a-z0-9_]+$/;
const IMAGE_DATA = /^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/;
const numberLabel = value => Number.isInteger(value) ? String(value) : value.toFixed(1);

function pointer(canvas, event) {
  const bounds = canvas.getBoundingClientRect();
  return {x: (event.clientX - bounds.left) * canvas.width / bounds.width,
    y: (event.clientY - bounds.top) * canvas.height / bounds.height};
}

function imageBox(canvas, image) {
  const scale = Math.min(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
  return {x: (canvas.width - image.naturalWidth * scale) / 2,
    y: (canvas.height - image.naturalHeight * scale) / 2, scale};
}

function readImage(host, dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new host.Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = dataUrl;
  });
}

function marker(ctx, point, color, label, radius = 17) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#fffefa';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${radius * 1.22}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, point.x, point.y + 1);
}

function drawMap(canvas, source, pairs, current) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  canvas.toggleAttribute('data-empty', !source);
  ctx.fillStyle = '#e8eddf';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (!source) return;
  const {image, mapToPixel} = source;
  const {x, y, scale} = imageBox(canvas, image);
  ctx.drawImage(image, x, y, image.naturalWidth * scale, image.naturalHeight * scale);
  function show(point, color, label) {
    const pixel = applyVacuumAlignment(mapToPixel, point);
    if (pixel.x >= 0 && pixel.x <= image.naturalWidth && pixel.y >= 0 && pixel.y <= image.naturalHeight) {
      marker(ctx, {x: x + pixel.x * scale, y: y + pixel.y * scale}, color, label, 13);
    }
  }
  pairs.forEach(({map}, index) => show(map, '#315d55', String(index + 1)));
  if (current) show(current, '#8a622e', '+');
}

function drawPlan(canvas, project, source, pairs, current, transform, showOverlay) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.save();
  drawSurveyFloor(ctx, canvas, project);
  const raster = source && showOverlay ? composeVacuumAlignment(transform, source.pixelToMap) : undefined;
  if (raster) {
    const [a, b, c, d, e, f] = raster;
    ctx.save();
    ctx.globalAlpha = 0.43;
    ctx.transform(a, d, b, e, c, f);
    ctx.drawImage(source.image, 0, 0);
    ctx.restore();
  }
  pairs.forEach(({map, plan}, index) => {
    if (showOverlay && transform) {
      const fitted = applyVacuumAlignment(transform, map);
      ctx.strokeStyle = '#a14936';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(plan.x, plan.y);
      ctx.lineTo(fitted.x, fitted.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(fitted.x, fitted.y, 10, 0, 2 * Math.PI);
      ctx.stroke();
    }
    marker(ctx, plan, '#315d55', String(index + 1));
  });
  if (current) marker(ctx, current, '#8a622e', '+');
  ctx.restore();
}

function coversTwoDirections(points) {
  if (points.length < 3) return false;
  const [origin, ...rest] = points;
  const vectors = rest.map(point => ({x: point.x - origin.x, y: point.y - origin.y}));
  const furthestSquared = Math.max(...vectors.map(({x, y}) => x * x + y * y));
  return furthestSquared > 0 && vectors.some((a, index) => vectors.slice(index + 1)
    .some(b => Math.abs(a.x * b.y - a.y * b.x) > furthestSquared * 0.03));
}

function bestFit(pairs, mapUnitsPerMetre, spread) {
  const standard = fitVacuumAlignment(pairs, {mapUnitsPerMetre});
  if (!spread) return standard;
  const mirrored = fitVacuumAlignment(pairs, {flipY: true, mapUnitsPerMetre});
  return mirrored && (!standard || mirrored.rmse < standard.rmse) ? mirrored : standard;
}

export function mountVacuumAlignment(document, host, {api, bridge}) {
  const dialog = document.getElementById('vacuumAlignmentDialog');
  if (!dialog) return null;
  const field = name => dialog.querySelector(`[data-vacuum-survey="${name}"]`);
  const mapCanvas = field('map');
  const planCanvas = field('plan');
  const mapX = field('map-x');
  const mapY = field('map-y');
  const planX = field('plan-x');
  const planY = field('plan-y');
  const units = field('units');
  const distance = field('distance');
  const overlay = field('overlay');
  const load = field('load');
  const add = field('add');
  const undoPoint = field('undo-point');
  const undoAlignment = field('undo-alignment');
  const apply = field('apply');
  const points = field('points');
  const status = field('status');
  const quality = field('quality');
  let project, vacuum, source, fit, applied, appliedKey, trigger;
  let pairs = [];
  let generation = 0;
  let busy = false;

  function readPoint(xInput, yInput, withinPlan = false) {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    if (![x, y].every(Number.isFinite)) return undefined;
    if (withinPlan && (x < 0 || y < 0 || x > planCanvas.width || y > planCanvas.height)) return undefined;
    return {x, y};
  }

  function update() {
    const map = readPoint(mapX, mapY);
    const plan = readPoint(planX, planY, true);
    const mapUnitsPerMetre = units.valueAsNumber > 0 ? units.valueAsNumber : null;
    const spread = coversTwoDirections(pairs.map(pair => pair.map)) && coversTwoDirections(pairs.map(pair => pair.plan));
    fit = bestFit(pairs, mapUnitsPerMetre, spread);
    load.disabled = busy || !!source || !bridge?.request || !CAMERA.test(vacuum?.vacuumMapEntityId ?? '');
    add.disabled = busy || !map || !plan || pairs.length >= MAX_PAIRS;
    undoPoint.disabled = busy || !pairs.length;
    undoAlignment.disabled = busy || !applied;
    const fitKey = fit?.transform.join(',');
    apply.disabled = busy || !spread || !fit || fitKey === appliedKey;
    const rows = pairs.map(pair => {
      const row = document.createElement('li');
      const coordinates = ({x, y}) => `${numberLabel(x)}, ${numberLabel(y)}`;
      row.textContent = `LiDAR ${coordinates(pair.map)} → plan ${coordinates(pair.plan)}`;
      return row;
    });
    points.replaceChildren(...rows);
    const info = [];
    if (fit) {
      info.push(Number.isFinite(fit.pixelsPerMetre) ? `${fit.pixelsPerMetre.toFixed(1)} plan px/m` :
        `${fit.scale.toFixed(4)} plan px per map unit`);
      if (spread) {
        info.push(`${fit.rmse.toFixed(1)} px fit error`);
        if (Number.isFinite(fit.leaveOneOutError)) info.push(`${fit.leaveOneOutError.toFixed(1)} px independent check`);
      }
      const firstPair = vacuumAlignmentDistance(pairs[0], pairs[1], fit.transform, mapUnitsPerMetre);
      if (Number.isFinite(firstPair?.mapMetres)) {
        info.push(`Points 1–2 measure ${firstPair.mapMetres.toFixed(2)} m on LiDAR and ${firstPair.planMetres.toFixed(2)} m on the scaled plan.`);
        if (distance.valueAsNumber > 0) {
          const difference = Math.abs(firstPair.mapMetres - distance.valueAsNumber);
          info.push(`${Math.round(difference * 100)} cm from tape reading`);
        }
      }
    }
    if (!spread) info.push('Add three matching points spread in two directions.');
    else if (!fit) info.push('These points are too close together. Choose more widely spaced locations.');
    quality.textContent = info.join(' · ');
    drawMap(mapCanvas, source, pairs, map);
    const stored = vacuum.vacuumMapId === undefined || vacuum.vacuumMapId === source?.mapId
      ? vacuum.vacuumPositionTransform : undefined;
    drawPlan(planCanvas, project, source, pairs, plan, (spread ? fit?.transform : undefined) ?? stored, overlay.checked);
  }

  async function loadMap() {
    if (load.disabled) return;
    const started = generation;
    busy = true;
    status.textContent = 'Reading the selected map from Home Assistant…';
    update();
    try {
      const payload = await bridge.request('VACUUM_MAP_GET', {entityId: vacuum.vacuumMapEntityId});
      const {imageDataUrl, pixelToMap, mapUnitsPerMetre, mapId} = payload ?? {};
      const mapToPixel = invertVacuumAlignment(pixelToMap);
      if (typeof imageDataUrl !== 'string' || imageDataUrl.length > MAX_ENCODED_IMAGE || !IMAGE_DATA.test(imageDataUrl) ||
          !mapToPixel) throw new Error('Invalid map');
      const image = await readImage(host, imageDataUrl);
      if (started !== generation || !dialog.open) return;
      source = {image, pixelToMap, mapToPixel, mapId: Number.isSafeInteger(mapId) && mapId > 0 ? mapId : undefined};
      if (Number.isFinite(mapUnitsPerMetre) && mapUnitsPerMetre > 0) {
        units.value = String(mapUnitsPerMetre);
        units.readOnly = true;
      }
      status.textContent = 'LiDAR map loaded. Choose the same location on both maps.';
    } catch {
      if (started !== generation || !dialog.open) return;
      status.textContent = 'The selected camera did not return a calibrated map. Retry or enter map coordinates directly.';
    }
    busy = false;
    update();
  }

  function open(event) {
    const target = event.target.closest?.('[data-vacuum-alignment]');
    if (!target || dialog.open) return;
    const selected = api.getSelection();
    project = api.getProject();
    vacuum = selected?.kind === 'item' && project.items.find(item => item.id === selected.id);
    if (!vacuum) return;
    trigger = target;
    generation++;
    pairs = [];
    source = fit = applied = appliedKey = undefined;
    busy = false;
    for (const input of [mapX, mapY, planX, planY, units, distance]) input.value = '';
    units.readOnly = false;
    overlay.checked = true;
    status.textContent = bridge?.request && !CAMERA.test(vacuum.vacuumMapEntityId ?? '')
      ? 'Link the vacuum map camera in the Inspector or enter known map coordinates.' :
      'Enter known coordinates here, or open Home Assistant Studio to load the linked map.';
    dialog.showModal();
    update();
    if (!load.disabled) void loadMap();
  }

  document.addEventListener('click', open);
  load.addEventListener('click', loadMap);
  for (const input of [mapX, mapY, planX, planY, units, distance]) input.addEventListener('input', update);
  overlay.addEventListener('change', update);
  mapCanvas.addEventListener('click', event => {
    if (busy || !source) return;
    const point = pointer(mapCanvas, event);
    const {x, y, scale} = imageBox(mapCanvas, source.image);
    const pixel = {x: (point.x - x) / scale, y: (point.y - y) / scale};
    if (pixel.x < 0 || pixel.y < 0 || pixel.x > source.image.naturalWidth || pixel.y > source.image.naturalHeight) return;
    const map = applyVacuumAlignment(source.pixelToMap, pixel);
    mapX.value = String(Math.round(map.x * 10) / 10);
    mapY.value = String(Math.round(map.y * 10) / 10);
    update();
  });
  planCanvas.addEventListener('click', event => {
    if (busy) return;
    const point = pointer(planCanvas, event);
    planX.value = String(Math.round(point.x));
    planY.value = String(Math.round(point.y));
    update();
  });
  add.addEventListener('click', () => {
    if (add.disabled) return;
    const map = readPoint(mapX, mapY);
    const plan = readPoint(planX, planY, true);
    if (pairs.some(pair => Math.hypot(pair.map.x - map.x, pair.map.y - map.y) < 1 ||
        Math.hypot(pair.plan.x - plan.x, pair.plan.y - plan.y) < 1)) {
      status.textContent = 'Choose a different location on each map.';
      return;
    }
    pairs.push({map, plan});
    for (const input of [mapX, mapY, planX, planY]) input.value = '';
    status.textContent = `Pair ${pairs.length} added.`;
    update();
  });
  undoPoint.addEventListener('click', () => {
    if (undoPoint.disabled) return;
    pairs.pop();
    status.textContent = 'Removed the last matching pair.';
    update();
  });
  apply.addEventListener('click', () => {
    if (apply.disabled) return;
    const result = api.setVacuumAlignment(vacuum.id, vacuum.entityId, vacuum.vacuumMapEntityId ?? '',
      source?.mapId, fit.transform);
    if (result) {
      appliedKey = fit.transform.join(',');
      if (result.changed) applied = result;
      status.textContent = result.changed ? 'Applied to the draft. Export to dashboard when ready.' : 'This alignment is already applied.';
    } else status.textContent = 'The vacuum binding changed or the alignment is out of range. Reopen this survey.';
    update();
  });
  undoAlignment.addEventListener('click', () => {
    if (undoAlignment.disabled) return;
    status.textContent = applied.undo() ? 'Restored the previous draft alignment.' : 'The draft changed. Use the Studio history controls.';
    applied = appliedKey = undefined;
    update();
  });
  dialog.addEventListener('keydown', event => event.stopPropagation());
  dialog.addEventListener('close', () => {
    generation++;
    source = project = vacuum = applied = fit = undefined;
    pairs = [];
    for (const input of [mapX, mapY, planX, planY, units, distance]) input.value = '';
    points.replaceChildren();
    for (const canvas of [mapCanvas, planCanvas]) canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    if (trigger?.isConnected) trigger.focus();
    else document.querySelector('[data-vacuum-alignment]')?.focus();
  });
  return {dispose() {
    generation++;
    document.removeEventListener('click', open);
    if (dialog.open) dialog.close();
  }};
}
