const SVG = 'http://www.w3.org/2000/svg';
const STAMP_LIMIT = 220;
const BRUSH_STATUS = {
  raise:'Raised terrain', lower:'Lowered terrain', smooth:'Smoothed terrain', paint:'Painted ground cover', erase:'Erased terrain edits',
};
const SETTING_STATUS = {
  coast:'Changed coast shape', road:'Changed road shape', beachWidth:'Changed beach width', roadSetback:'Changed road setback',
  hillHeight:'Changed hill height', planting:'Changed outer planting', cove:'Updated Cove bluffs',
  shores:'Updated Shores park and pier', yardAccess:'Updated path from the stairs',
};

export function mountStorybookTerrainEditor(document, host, {api, viewport, canvas, getScene, getProjection, pointerPoint}) {
  const engine = host.RoomcraftTerrain;
  const panel = document.getElementById('terrainPanel');
  if (!engine || !panel || typeof api.setTerrain !== 'function') return null;
  const brush = document.getElementById('terrainBrush');
  const hint = document.getElementById('terrainBrushHint');
  const radius = document.getElementById('terrainRadius');
  const radiusLabel = document.getElementById('terrainRadiusLabel');
  const strength = document.getElementById('terrainStrength');
  const strengthLabel = document.getElementById('terrainStrengthLabel');
  const cover = document.getElementById('terrainCover');
  const coverLabel = document.getElementById('terrainCoverLabel');
  const prop = document.getElementById('terrainProp');
  const propLabel = document.getElementById('terrainPropLabel');
  const modeButtons = [...panel.querySelectorAll('[data-terrain-mode]')];
  const settings = [...panel.querySelectorAll('[data-terrain-setting]')];
  const outline = document.createElementNS(SVG, 'circle');
  const trail = document.createElementNS(SVG, 'path');
  const overlay = document.createElementNS(SVG, 'svg');
  overlay.classList.add('terrain-brush-overlay');
  overlay.setAttribute('aria-hidden', 'true');
  outline.setAttribute('data-brush-outline', '');
  trail.setAttribute('data-brush-trail', '');
  overlay.append(trail, outline);
  viewport.append(overlay);
  const listeners = new host.AbortController();
  const listen = (node, type, handler, options = {}) =>
    node.addEventListener(type, handler, {...options, signal:listeners.signal});
  let mode = 'raise';
  let hover;
  let stroke;

  const available = () => typeof getScene()?.canEditTerrain === 'function';
  const active = () => available() && api.getTool() === 'terrain';
  const brushable = ({x,y}) => getScene()?.canEditTerrain?.(x,y) === true;
  const brushRadius = () => mode === 'place' ? engine.GRID_SIZE / 2 : radius.valueAsNumber;

  function brushPoint(event) {
    const screen = pointerPoint(event);
    return getScene()?.projectToPlan(screen.x, screen.y) ?? null;
  }

  function paint() {
    const projection = getProjection();
    const shown = active() && Boolean(projection) && (Boolean(stroke) || Boolean(hover) && !viewport.classList.contains('dragging'));
    overlay.toggleAttribute('hidden', !shown);
    if (!shown) return;
    const {left,top,scale} = projection;
    const point = hover ?? stroke.last;
    const diameter = (stroke?.radius ?? brushRadius()) * scale * 2;
    outline.setAttribute('cx', (point.x - left) * scale);
    outline.setAttribute('cy', (point.y - top) * scale);
    outline.setAttribute('r', diameter / 2);
    overlay.toggleAttribute('data-blocked', !brushable(point));
    trail.setAttribute('stroke-width', diameter);
    let pen = 'M';
    const path = [];
    for (const {point,allowed} of stroke?.trace ?? []) {
      if (!allowed) {
        pen = 'M';
        continue;
      }
      path.push(`${pen}${((point.x - left) * scale).toFixed(2)} ${((point.y - top) * scale).toFixed(2)}`);
      pen = 'L';
    }
    trail.setAttribute('d', path.join(' '));
  }

  function updateOutput(input) {
    const output = input.id && panel.querySelector(`output[for="${input.id}"]`);
    if (!output) return;
    const percentage = ['beachWidth','hillHeight','planting'].includes(input.dataset.terrainSetting);
    output.value = `${input.value}${percentage ? '%' : ''}`;
  }

  function paintModes() {
    for (const button of modeButtons) button.setAttribute('aria-pressed', String(button.dataset.terrainMode === mode));
    coverLabel.hidden = mode !== 'paint';
    propLabel.hidden = mode !== 'place';
    radiusLabel.hidden = radius.hidden = mode === 'place';
    strengthLabel.hidden = strength.hidden = ['paint','erase','place'].includes(mode);
    hint.textContent = !available() ? 'The ground brush needs the 3D overhead view.' : mode === 'place'
      ? 'Tap outdoor ground to place or remove one scenery object.' : 'Drag over outdoor ground. Release to apply one edit.';
  }

  function sync() {
    const value = engine.normalize(api.getProject().terrain);
    for (const input of settings) {
      const key = input.dataset.terrainSetting;
      const selected = value?.[key] ?? engine.DEFAULTS[key];
      if (input.type === 'checkbox') input.checked = selected;
      else input.value = String(selected);
      updateOutput(input);
    }
    brush.disabled = !available();
    paintModes();
    paint();
  }

  function clearStroke() {
    const previous = stroke;
    stroke = undefined;
    if (previous && canvas.hasPointerCapture(previous.pointerId)) canvas.releasePointerCapture(previous.pointerId);
    return previous;
  }

  function cancel(message) {
    const previous = clearStroke();
    hover = undefined;
    if (previous && message) api.showStatus?.(message);
    paint();
    return Boolean(previous);
  }

  function stamp(point) {
    if (stroke.trace.length >= STAMP_LIMIT) return;
    const allowed = brushable(point);
    stroke.trace.push({point,allowed});
    if (!allowed) return;
    const {mode, radius, strength, cover, prop, canEdit} = stroke;
    stroke.next = engine.applyBrush(stroke.next, {mode,x:point.x,z:point.y,radius,strength,cover,prop,canEdit});
  }

  function advance(point) {
    if (stroke.mode === 'place') return;
    const from = stroke.last;
    const dx = point.x - from.x, dy = point.y - from.y;
    const length = Math.hypot(dx,dy);
    if (length < 1e-6) return;
    const spacing = stroke.spacing;
    for (let distance = spacing - stroke.carried; distance <= length && stroke.trace.length < STAMP_LIMIT; distance += spacing) {
      stamp({x:from.x + dx * distance / length, y:from.y + dy * distance / length});
    }
    stroke.carried = (stroke.carried + length) % spacing;
    stroke.last = point;
  }

  function pointerDown(event) {
    if (stroke) return true;
    if (!active() || !api.canBeginTerrain?.(event)) return false;
    event.preventDefault();
    canvas.focus({preventScroll:true});
    const point = brushPoint(event);
    hover = point ?? undefined;
    if (!point || !brushable(point)) {
      api.showStatus?.('Choose editable ground away from roads, buildings, or the water.');
      paint();
      return true;
    }
    const original = api.getProject().terrain;
    stroke = {
      pointerId:event.pointerId, mode, radius:brushRadius(), strength:strength.valueAsNumber, cover:cover.value,
      prop:prop.value || null,
      original, next:original, last:point, carried:0, spacing:Math.max(8, Math.min(28, radius.valueAsNumber * .31)),
      trace:[], canEdit:(x,z) => getScene()?.canEditTerrain?.(x,z) === true,
    };
    canvas.setPointerCapture(event.pointerId);
    stamp(point);
    paint();
    return true;
  }

  function pointerMove(event) {
    if (!active() || stroke && stroke.pointerId !== event.pointerId) return false;
    const point = brushPoint(event);
    if (stroke?.mode !== 'place') hover = point ?? undefined;
    if (stroke && point) advance(point);
    paint();
    return Boolean(stroke);
  }

  function pointerUp(event) {
    if (!stroke || stroke.pointerId !== event.pointerId) return false;
    const point = brushPoint(event);
    if (point && stroke.mode !== 'place') {
      advance(point);
      if (stroke.carried > stroke.spacing * .48) stamp(point);
    }
    const completed = clearStroke();
    if (event.pointerType !== 'mouse') hover = undefined;
    const message = completed.mode === 'place' ? (completed.prop ? 'Placed scenery' : 'Removed placed scenery') : BRUSH_STATUS[completed.mode];
    const changed = completed.next !== completed.original && api.setTerrain(completed.next, message);
    if (!changed) api.showStatus?.('No editable ground changed.');
    paint();
    return true;
  }

  for (const button of modeButtons) listen(button,'click',() => {
    cancel();
    mode = button.dataset.terrainMode;
    api.useTerrainTool?.();
    paintModes();
  });
  for (const input of [radius,strength,...settings]) listen(input,'input',() => {
    updateOutput(input);
    paint();
  });
  for (const input of settings) listen(input,'change',() => {
    const key = input.dataset.terrainSetting;
    const value = input.type === 'checkbox' ? input.checked : input.type === 'range' ? input.valueAsNumber : input.value;
    const terrain = engine.withSetting(api.getProject().terrain, key, value);
    cancel();
    api.setTerrain(terrain, SETTING_STATUS[key]);
    sync();
  });
  listen(host,'keydown',event => {
    if (event.key === 'Escape') cancel('Canceled terrain stroke.');
  },{capture:true});
  listen(canvas,'pointerleave',() => {
    if (!stroke) {
      hover = undefined;
      paint();
    }
  });
  const observer = new host.MutationObserver(() => {
    if (!active()) cancel();
    else paint();
  });
  observer.observe(viewport,{attributes:true,attributeFilter:['data-tool']});
  sync();
  return {
    pointerDown, pointerMove, pointerUp, paint,
    pointerCancel(event) {
      return stroke?.pointerId === event.pointerId && cancel('Canceled terrain stroke.');
    },
    projectChanged() { cancel(); sync(); },
    dispose() { cancel(); observer.disconnect(); listeners.abort(); overlay.remove(); },
  };
}
