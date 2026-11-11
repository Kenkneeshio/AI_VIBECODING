import polygonClipping from 'polygon-clipping';

const {difference, union} = polygonClipping;
const JOIN_LIMIT = 18;
const EPSILON = 0.001;

const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
const minus = (a, b) => [a[0] - b[0], a[1] - b[1]];
const offset = (p, direction, distance) => [p[0] + direction[0] * distance, p[1] + direction[1] * distance];
const normal = ([x, z]) => [-z, x];
const rectangle = (x1, z1, x2, z2) => [[x1, z1], [x2, z1], [x2, z2], [x1, z2]];
const ring = (points) => points.map(({x, y}) => [x, y]);
const polygon = (points) => [points.map(point => point.map(value => Math.round(value * 1e5) / 1e5))];
const unite = (polygons) => polygons.length ? union(...polygons) : [];

function strip(start, end, halfWidth, overlap = 0) {
  const direction = minus(end, start);
  const length = Math.hypot(...direction);
  if (length < EPSILON) return null;
  const tangent = direction.map(value => value / length);
  const side = normal(tangent);
  const a = offset(start, tangent, -overlap);
  const b = offset(end, tangent, overlap);
  return polygon([offset(a, side, halfWidth), offset(b, side, halfWidth),
    offset(b, side, -halfWidth), offset(a, side, -halfWidth)]);
}

function contains(points, point) {
  const [x, z] = point;
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [ax, az] = points[i];
    const [bx, bz] = points[j];
    if ((az > z) !== (bz > z) && x < (bx - ax) * (z - az) / (bz - az) + ax) inside = !inside;
  }
  return inside;
}

function edges(points) {
  return points.flatMap((start, index) => {
    const end = points[(index + 1) % points.length];
    const delta = minus(end, start);
    const length = Math.hypot(...delta);
    return length > EPSILON ? [{start, end, length, tangent: delta.map(value => value / length)}] : [];
  });
}

function floorBridge(a, b, first, second) {
  if (Math.abs(dot(a.tangent, b.tangent)) < 0.9999) return null;
  const side = normal(a.tangent);
  const [bStart, bEnd] = [b.start, b.end].map(point => minus(point, a.start));
  const signed = dot(bStart, side);
  if (Math.abs(signed) < 0.1 || Math.abs(signed) > JOIN_LIMIT ||
      Math.abs(signed - dot(bEnd, side)) > 0.1) return null;
  const bRange = [dot(bStart, a.tangent), dot(bEnd, a.tangent)].sort((x, y) => x - y);
  const start = Math.max(0, bRange[0]);
  const end = Math.min(a.length, bRange[1]);
  if (end - start < 8) return null;
  const middle = offset(a.start, a.tangent, (start + end) / 2);
  const sign = Math.sign(signed);
  // Only bridge between opposed finish boundaries. Outer edges on the
  // same side of a room can describe a recess, courtyard or thin wall.
  if (!contains(first, offset(middle, side, -sign)) ||
      !contains(second, offset(middle, side, signed + sign)) ||
      contains(first, offset(middle, side, signed / 2)) ||
      contains(second, offset(middle, side, signed / 2))) return null;
  const p = offset(a.start, a.tangent, start);
  const q = offset(a.start, a.tangent, end);
  return polygon([offset(p, side, -sign * 0.05), offset(q, side, -sign * 0.05),
    offset(q, side, signed + sign * 0.05), offset(p, side, signed + sign * 0.05)]);
}

function visibleRegions(entries) {
  let covered = [];
  const result = [];
  for (const entry of [...entries].reverse()) {
    const shape = unite(entry.polygons);
    if (!shape.length) continue;
    const visible = covered.length ? difference(shape, covered) : shape;
    if (visible.length) result.push({surface: entry.surface, polygons: visible});
    covered = covered.length ? union(covered, shape) : shape;
  }
  return {footprint: covered, regions: result.reverse()};
}

export function compileFloorStructure(rooms, reference) {
  const roomRegions = rooms.map(room => ({
    surface: room.surface,
    points: ring(room.points),
    polygons: [polygon(ring(room.points))],
  }));
  const bridges = [];
  for (const [index, first] of roomRegions.entries()) {
    for (const second of roomRegions.slice(index + 1)) {
      for (const a of edges(first.points)) for (const b of edges(second.points)) {
        const shape = floorBridge(a, b, first.points, second.points);
        if (shape) bridges.push({surface: first.surface, polygons: [shape]});
      }
    }
  }
  const referenceRegions = [];
  if (reference) {
    const {left, deckEdge, stepBottom, deckBottom, northDeck, southDeck, recess} = reference;
    referenceRegions.push({surface: 'patio', polygons: [
      polygon(ring(northDeck)), polygon(ring(southDeck)),
      polygon(rectangle(left, stepBottom, deckEdge + 1, deckBottom)),
    ]});
    if (recess.x2 > recess.x1 && recess.z2 > recess.z1) {
      referenceRegions.push({surface: 'oak', polygons: [
        polygon([[recess.x1, recess.northLeft], [recess.x2, recess.z1], [recess.x2, recess.z2],
          [recess.x1, recess.z2]]),
      ]});
    }
  }
  return visibleRegions([...referenceRegions, ...bridges, ...roomRegions]);
}

function endpointJoints(walls) {
  const pairs = [];
  const endpoints = walls.flatMap(wall => [
    {wall, point: [wall.x1, wall.y1], tangent: [wall.dx, wall.dz]},
    {wall, point: [wall.x2, wall.y2], tangent: [-wall.dx, -wall.dz]},
  ]);
  for (const [index, a] of endpoints.entries()) for (const b of endpoints.slice(index + 1)) {
    if (a.wall === b.wall) continue;
    const distance = Math.hypot(...minus(a.point, b.point));
    if (distance > JOIN_LIMIT) continue;
    // Closely spaced opposed ends and corners describe drafting joins.
    // Parallel wall sides already touch when the authored width covers them.
    if (distance > EPSILON && dot(a.tangent, b.tangent) > 0.92) continue;
    pairs.push({a, b, distance});
  }
  return pairs;
}

function jointFootprint({a, b, distance}, halfWidth) {
  if (distance > EPSILON) return strip(a.point, b.point, halfWidth, 0.1);
  const turn = cross(a.tangent, b.tangent);
  if (Math.abs(turn) < EPSILON) return null;
  const outside = Math.sign(turn) * -halfWidth;
  const first = offset(a.point, normal(a.tangent), outside);
  const second = offset(b.point, normal(b.tangent), -outside);
  const extension = cross(minus(second, first), b.tangent) / turn;
  const miter = offset(first, a.tangent, extension);
  if (Math.hypot(...minus(miter, a.point)) > halfWidth * 2.5) return polygon([a.point, first, second]);
  return polygon([a.point, first, miter, second]);
}

/** Merge cross-sections at common heights so caps, trims and wall bodies
 * meet at one polygon boundary, including inside and outside corner turns. */
export function compileWallStructure(walls, width, sill, lintel) {
  const parts = [];
  const add = (shape, from, to, surface, priority = 0) => {
    if (shape && to > from) parts.push({shape, from, to, surface, priority});
  };
  for (const wall of walls) {
    const {height, palette: [body, cap, base]} = wall;
    const start = [wall.x1, wall.y1];
    const direction = [wall.dx, wall.dz];
    const span = (left, right, from, to, thickness, surface, priority) => {
      if (right - left > EPSILON) add(strip(offset(start, direction, left),
        offset(start, direction, right), thickness / 2), from, to, surface, priority);
    };
    if (wall.openings.length) {
      span(0, wall.length, 0, sill, width, body, 2);
      span(0, wall.length, lintel, height, width, body, 2);
      let end = 0;
      for (const opening of wall.openings) {
        span(end, opening.start, sill, lintel, width, body, 2);
        end = Math.max(end, opening.end);
      }
      span(end, wall.length, sill, lintel, width, body, 2);
    } else span(0, wall.length, 0, height, width, body, 2);
    span(0, wall.length, height - 1, height + 2, width + 3, cap, 1);
    span(0, wall.length, 0, 3, width + 3, base, 1);
  }
  for (const joint of endpointJoints(walls)) {
    const first = joint.a.wall;
    const second = joint.b.wall;
    const lower = first.height <= second.height ? first : second;
    const [body, cap, base] = lower.palette;
    const full = jointFootprint(joint, width / 2);
    const trim = jointFootprint(joint, (width + 3) / 2);
    add(full, 0, lower.height, body, 2);
    add(trim, lower.height - 1, lower.height + 2, cap, 1);
    add(trim, 0, 3, base, 1);
  }

  const levels = [...new Set(parts.flatMap(({from, to}) => [from, to]))].sort((a, b) => a - b);
  return levels.slice(1).flatMap((top, index) => {
    const bottom = levels[index];
    const groups = new Map();
    const active = parts.filter(part => part.from <= bottom && part.to >= top);
    for (const {surface, shape} of active.sort((a, b) => a.priority - b.priority)) {
      if (!groups.has(surface)) groups.set(surface, {surface, polygons: []});
      groups.get(surface).polygons.push(shape);
    }
    return visibleRegions([...groups.values()]).regions.map(region => ({...region, bottom, top}));
  });
}
