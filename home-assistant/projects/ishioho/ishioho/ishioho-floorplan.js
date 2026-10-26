// Ishioho's portable floor-plan geometry renderer. The JSON model is the source
// of truth; the painted map is an optional skin over the same coordinate space.
const VIEW_BOX = [0, 0, 100, 50];
const ID = /^[A-Za-z][A-Za-z0-9_-]*$/;
const asArray = value => Array.isArray(value) ? value : [];
const finite = value => typeof value === 'number' && Number.isFinite(value);
const escapeSvg = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));
const number = value => String(Math.round(value * 1000) / 1000);
const slug = value => String(value ?? 'generic').toLowerCase().replace(/[^a-z0-9_-]/g, '-');

function inBounds(point) {
  return Array.isArray(point) && point.length === 2 &&
    finite(point[0]) && finite(point[1]) &&
    point[0] >= VIEW_BOX[0] && point[0] <= VIEW_BOX[2] &&
    point[1] >= VIEW_BOX[1] && point[1] <= VIEW_BOX[3];
}

function validSegment(value) {
  return Array.isArray(value) && value.length === 2 &&
    value.every(inBounds) &&
    (value[0][0] !== value[1][0] || value[0][1] !== value[1][1]);
}

function validPolygon(value) {
  if (!Array.isArray(value) || value.length < 3 || value.length > 100 || !value.every(inBounds)) return false;
  let twiceArea = 0;
  for (let i = 0; i < value.length; i++) {
    const [x1, y1] = value[i], [x2, y2] = value[(i + 1) % value.length];
    twiceArea += x1 * y2 - x2 * y1;
  }
  return Math.abs(twiceArea) > 0.01;
}

function validGeometry(geometry) {
  if (!geometry || typeof geometry !== 'object') return false;
  switch (geometry.type) {
    case 'point': return inBounds([geometry.x, geometry.y]);
    case 'rect': return inBounds([geometry.x, geometry.y]) &&
      finite(geometry.width) && finite(geometry.height) &&
      geometry.width > 0 && geometry.height > 0 &&
      geometry.x + geometry.width <= VIEW_BOX[2] &&
      geometry.y + geometry.height <= VIEW_BOX[3] &&
      (geometry.rotation === undefined || finite(geometry.rotation) && Math.abs(geometry.rotation) <= 360);
    case 'polygon': return validPolygon(geometry.points);
    default: return false;
  }
}

/** Validate the schema's geometry and references before interpolating any model data. */
export function validateFloorplan(model) {
  const errors = [];
  if (!model || typeof model !== 'object' || Array.isArray(model)) return {ok: false, errors: ['Floor plan must be an object']};
  if (model.schemaVersion !== 1) errors.push('Unsupported schemaVersion');
  if (JSON.stringify(model.coordinateSystem?.viewBox) !== JSON.stringify(VIEW_BOX)) errors.push('Expected viewBox [0,0,100,50]');
  const collections = ['levels', 'spaces', 'walls', 'openings', 'objects', 'connections', 'deviceAnchors'];
  for (const key of collections) if (!Array.isArray(model[key])) errors.push(`${key} must be an array`);
  if (errors.length) return {ok: false, errors};

  const ids = new Map(), levelIds = new Set(), spaceLevels = new Map();
  const register = (item, collection) => {
    if (!item || typeof item !== 'object' || !ID.test(item.id ?? '')) {
      errors.push(`Invalid ${collection} id`); return false;
    }
    if (!ids.has(collection)) ids.set(collection, new Set());
    if (ids.get(collection).has(item.id)) errors.push(`Duplicate ${collection} id ${item.id}`);
    ids.get(collection).add(item.id);
    return true;
  };
  if (!model.levels.length) errors.push('At least one level is required');
  for (const level of model.levels) {
    if (!register(level, 'level')) continue;
    levelIds.add(level.id);
    if (!validPolygon(level.footprint)) errors.push(`Invalid footprint ${level.id}`);
    if (typeof level.label !== 'string' || !level.label.trim()) errors.push(`Missing label ${level.id}`);
  }
  for (const space of model.spaces) {
    if (!register(space, 'space')) continue;
    spaceLevels.set(space.id, space.levelId);
    if (!levelIds.has(space.levelId)) errors.push(`Unknown level for space ${space.id}`);
    if (!validPolygon(space.polygon)) errors.push(`Invalid polygon ${space.id}`);
    if (!inBounds(space.anchor)) errors.push(`Invalid anchor ${space.id}`);
    if (typeof space.kind !== 'string' || !space.kind.trim()) errors.push(`Missing kind ${space.id}`);
    if (typeof space.label !== 'string' || !space.label.trim()) errors.push(`Missing label ${space.id}`);
  }
  for (const collection of ['walls', 'openings']) for (const item of model[collection]) {
    if (!register(item, collection)) continue;
    if (!levelIds.has(item.levelId)) errors.push(`Unknown level for ${item.id}`);
    if (!validSegment(item.segment)) errors.push(`Invalid segment ${item.id}`);
    if (typeof item.kind !== 'string' || !item.kind.trim()) errors.push(`Missing kind ${item.id}`);
    if (collection === 'openings' && item.connects !== undefined &&
      (!Array.isArray(item.connects) || item.connects.length !== 2 || !item.connects.every(id => id === 'outside' || spaceLevels.get(id) === item.levelId)))
      errors.push(`Invalid connection for opening ${item.id}`);
  }
  for (const object of model.objects) {
    if (!register(object, 'object')) continue;
    if (!levelIds.has(object.levelId)) errors.push(`Unknown level for object ${object.id}`);
    if (object.spaceId !== undefined && spaceLevels.get(object.spaceId) !== object.levelId) errors.push(`Invalid space for object ${object.id}`);
    if (typeof object.kind !== 'string' || !object.kind.trim()) errors.push(`Missing kind ${object.id}`);
    if (!validGeometry(object.geometry)) errors.push(`Invalid geometry ${object.id}`);
  }
  for (const connection of model.connections) {
    if (!register(connection, 'connection')) continue;
    for (const endpoint of [connection.from, connection.to]) {
      if (!endpoint || !levelIds.has(endpoint.levelId) || spaceLevels.get(endpoint.spaceId) !== endpoint.levelId) errors.push(`Invalid endpoint ${connection.id}`);
    }
  }
  for (const anchor of model.deviceAnchors) {
    if (!register(anchor, 'deviceAnchor')) continue;
    if (!levelIds.has(anchor.levelId) || spaceLevels.get(anchor.spaceId) !== anchor.levelId || !inBounds(anchor.point)) errors.push(`Invalid device anchor ${anchor.id}`);
    if (anchor.effectPolygon !== undefined && !validPolygon(anchor.effectPolygon)) errors.push(`Invalid effect polygon ${anchor.id}`);
  }
  return {ok: errors.length === 0, errors};
}

/** Room-pin positions as percentages of the fixed 2:1 SVG/map viewport. */
export function roomAnchors(model, levelId = 'home') {
  if (!validateFloorplan(model).ok) return {};
  const result = {};
  for (const space of model.spaces) if (space.levelId === levelId) {
    result[space.id] = {x: space.anchor[0], y: space.anchor[1] * 2};
  }
  return result;
}

const points = polygon => polygon.map(point => point.map(number).join(',')).join(' ');
const line = segment => `x1="${number(segment[0][0])}" y1="${number(segment[0][1])}" x2="${number(segment[1][0])}" y2="${number(segment[1][1])}"`;

function renderObject(object) {
  const geometry = object.geometry;
  const identity = `id="floor-object-${escapeSvg(object.id)}" class="floor-object floor-object-${slug(object.kind)}" data-kind="${escapeSvg(object.kind)}" data-space="${escapeSvg(object.spaceId ?? '')}"`;
  let shape;
  if (geometry.type === 'point') shape = `<circle cx="${number(geometry.x)}" cy="${number(geometry.y)}" r="0.38"/>`;
  else if (geometry.type === 'polygon') shape = `<polygon points="${points(geometry.points)}"/>`;
  else {
    const cx = geometry.x + geometry.width / 2, cy = geometry.y + geometry.height / 2;
    const rotation = geometry.rotation ? ` transform="rotate(${number(geometry.rotation)} ${number(cx)} ${number(cy)})"` : '';
    shape = `<rect x="${number(geometry.x)}" y="${number(geometry.y)}" width="${number(geometry.width)}" height="${number(geometry.height)}" rx="0.18"${object.kind === 'stairs' ? '' : rotation}/>`;
    if (object.kind === 'stairs') {
      const count = Math.max(3, Math.min(14, Math.round(geometry.height / 1.25)));
      const treads = Array.from({length: count}, (_, index) => {
        const y = geometry.y + geometry.height * (index + 1) / (count + 1);
        return `<line class="floor-stair-tread" x1="${number(geometry.x + 0.25)}" y1="${number(y)}" x2="${number(geometry.x + geometry.width - 0.25)}" y2="${number(y)}"/>`;
      }).join('');
      shape = `<g${rotation}>${shape}${treads}</g>`;
    }
  }
  return `<g ${identity} aria-label="${escapeSvg(object.label ?? object.kind)}"><title>${escapeSvg(object.label ?? object.kind)}</title>${shape}</g>`;
}

/**
 * Render portable, selectable SVG. An art image can sit underneath; standalone
 * mode paints the whole home so it remains usable when no bitmap is available.
 */
export function renderFloorplanSvg(model, options = {}) {
  const validity = validateFloorplan(model);
  if (!validity.ok) return '<div class="floorplan-error" role="status">Floor plan unavailable</div>';
  const levelId = options.levelId ?? model.levels.find(level => level.default)?.id ?? model.levels[0].id;
  const level = model.levels.find(candidate => candidate.id === levelId);
  if (!level) return '<div class="floorplan-error" role="status">Floor plan unavailable</div>';
  const standalone = options.standalone === true;
  const showLabels = options.showLabels === true;
  const spaces = model.spaces.filter(space => space.levelId === levelId);
  const walls = model.walls.filter(wall => wall.levelId === levelId);
  const openings = model.openings.filter(opening => opening.levelId === levelId);
  const objects = model.objects.filter(object => object.levelId === levelId);
  const label = `${level.label} floor plan`;
  const activeRooms = Array.isArray(options.interactiveRoomIds) ? new Set(options.interactiveRoomIds) : null;
  const spaceMarkup = spaces.map(space => {
    const garage = space.id === 'garage_stairs' || space.id === 'garage';
    const action = garage ? 'garage' : 'room', room = garage ? 'garage' : space.id;
    const interactive = !activeRooms || activeRooms.has(room);
    const behavior = interactive ? ` data-floorplan-action="${action}" data-floorplan-room="${escapeSvg(room)}" role="button" tabindex="0" aria-label="Open ${escapeSvg(space.label)} controls"` : ` role="img" aria-label="${escapeSvg(space.label)}"`;
    return `<g id="floor-space-${escapeSvg(space.id)}" class="floor-space-group" data-space="${escapeSvg(space.id)}" data-kind="${escapeSvg(space.kind)}"${behavior}><title>${escapeSvg(space.label)}</title><polygon class="floor-space" points="${points(space.polygon)}"/></g>`;
  }).join('');
  const wallMarkup = walls.map(wall => `<line id="floor-wall-${escapeSvg(wall.id)}" class="floor-wall" data-kind="${escapeSvg(wall.kind)}" ${line(wall.segment)}/>`).join('');
  const openingMarkup = openings.map(opening => `<line id="floor-opening-${escapeSvg(opening.id)}" class="floor-opening" data-kind="${escapeSvg(opening.kind)}" ${line(opening.segment)}><title>${escapeSvg(opening.kind)}</title></line>`).join('');
  const objectMarkup = objects.map(renderObject).join('');
  const labels = showLabels ? spaces.map(space => `<text class="floor-label" x="${number(space.anchor[0])}" y="${number(space.anchor[1])}">${escapeSvg(space.label)}</text>`).join('') : '';
  return `<svg class="floorplan-svg${standalone ? ' is-standalone' : ''}" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet" role="group" aria-label="${escapeSvg(label)}" xmlns="http://www.w3.org/2000/svg"><title>${escapeSvg(label)}</title><desc>Interactive spaces, walls, openings, and furnishings for ishioho. Select a space to open its controls.</desc><rect class="floor-bg" width="100" height="50"/><polygon class="floor-footprint" points="${points(level.footprint)}"/><g class="floor-spaces">${spaceMarkup}</g><g class="floor-walls">${wallMarkup}</g><g class="floor-openings">${openingMarkup}</g><g class="floor-objects">${objectMarkup}</g>${labels}</svg>`;
}
