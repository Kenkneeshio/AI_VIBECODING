import polygonClipping from 'polygon-clipping';

const {difference, union} = polygonClipping;
export const WALL_JOIN_LIMIT = 18;
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
  if (Math.abs(signed) < 0.1 || Math.abs(signed) > WALL_JOIN_LIMIT ||
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
  const deckRegions = [];
  const interiorRegions = [];
  if (reference) {
    const {left, deckEdge, stepBottom, deckBottom, northDeck, southDeck, recess} = reference;
    deckRegions.push({surface: 'patio', polygons: [
      polygon(ring(northDeck)), polygon(ring(southDeck)),
      polygon(rectangle(left, stepBottom, deckEdge + 1, deckBottom)),
    ]});
    if (recess.x2 > recess.x1 && recess.z2 > recess.z1) {
      interiorRegions.push({surface: 'oak', polygons: [
        polygon(rectangle(recess.x1, recess.z1, recess.x2, recess.z2)),
      ]});
    }
  }
  const enclosed = [...interiorRegions, ...bridges, ...roomRegions];
  const floors = visibleRegions([...deckRegions, ...enclosed]);
  const foundation = reference ? unite(enclosed.flatMap(entry => entry.polygons)) : [];
  return {...floors, foundation};
}

function miterCorner(center, a, b, halfWidth) {
  const turn = cross(a, b);
  if (Math.abs(turn) < 0.13) return null;
  const outside = Math.sign(turn) * -halfWidth;
  const first = offset(center, normal(a), outside);
  const second = offset(center, normal(b), -outside);
  const extension = cross(minus(second, first), b) / turn;
  const miter = offset(first, a, extension);
  if (Math.hypot(...minus(miter, center)) > halfWidth * 2.5) return polygon([center, first, second]);
  return polygon([center, first, miter, second]);
}

function intersectLines(a, b) {
  const turn = cross(a.tangent, b.tangent);
  if (Math.abs(turn) < 0.13) return null;
  const delta = minus(b.point, a.point);
  return [cross(delta, b.tangent) / turn, cross(delta, a.tangent) / turn];
}

function wallJoints(walls) {
  const endpoints = walls.flatMap(wall => [
    {wall, point: [wall.x1, wall.y1], tangent: [wall.dx, wall.dz]},
    {wall, point: [wall.x2, wall.y2], tangent: [-wall.dx, -wall.dz]},
  ]);
  const joints = [];
  for (const [index, a] of endpoints.entries()) {
    for (const b of endpoints.slice(index + 1)) {
      if (a.wall === b.wall) continue;
      const delta = minus(b.point, a.point);
      if (Math.hypot(...delta) > WALL_JOIN_LIMIT) continue;
      const crossing = intersectLines(a, b);
      if (crossing && crossing.every(t => t >= -WALL_JOIN_LIMIT && t <= EPSILON)) {
        joints.push({a, b, center: offset(a.point, a.tangent, crossing[0])});
      } else if (!crossing && dot(a.tangent, b.tangent) < 0 &&
          dot(delta, a.tangent) <= EPSILON && dot(delta, b.tangent) >= -EPSILON) {
        joints.push({a, b});
      }
    }
    for (const wall of walls) {
      if (a.wall === wall) continue;
      const b = {wall, point: [wall.x1, wall.y1], tangent: [wall.dx, wall.dz]};
      const crossing = intersectLines(a, b);
      if (!crossing) continue;
      const [alongEnd, alongWall] = crossing;
      if (alongEnd < -WALL_JOIN_LIMIT || alongEnd >= -EPSILON ||
          alongWall <= EPSILON || alongWall >= wall.length - EPSILON ||
          wall.openings.some(({start, end}) => alongWall >= start && alongWall <= end)) continue;
      joints.push({a, center: offset(a.point, a.tangent, alongEnd)});
    }
  }
  return joints;
}

function jointFootprints({a, b, center}, halfWidth) {
  if (!center) return [strip(a.point, b.point, halfWidth, 0.1)].filter(Boolean);
  return [
    strip(a.point, center, halfWidth, 0.1),
    b && strip(b.point, center, halfWidth, 0.1),
    b && miterCorner(center, a.tangent, b.tangent, halfWidth),
  ].filter(Boolean);
}

function boundarySegments(polygons) {
  return polygons.flatMap(rings => rings.flatMap(points => points.slice(1)
    .map((point, index) => [points[index], point])));
}

function exposedSides(regions, boundary) {
  return boundarySegments(regions).flatMap(([start, end]) => {
    const delta = minus(end, start);
    const length = Math.hypot(...delta);
    if (length < EPSILON) return [];
    const tangent = delta.map(value => value / length);
    return boundary.flatMap(([outerStart, outerEnd]) => {
      const a = minus(outerStart, start);
      const b = minus(outerEnd, start);
      if (Math.abs(cross(a, tangent)) > EPSILON || Math.abs(cross(b, tangent)) > EPSILON) return [];
      const [outerLeft, outerRight] = [dot(a, tangent), dot(b, tangent)].sort((x, y) => x - y);
      const left = Math.max(0, outerLeft);
      const right = Math.min(length, outerRight);
      return right - left > EPSILON ? [[offset(start, tangent, left), offset(start, tangent, right)]] : [];
    });
  });
}

function exposedPolygons(polygons, adjacent) {
  return adjacent?.length ? difference(polygons, adjacent) : polygons;
}

/** Merge cross-sections at common heights so caps, trims and wall bodies
 * meet at one polygon boundary, including inside and outside corner turns. */
export function compileWallStructure(walls, width, height, sill) {
  const parts = [];
  const add = (shape, from, to, surface, priority = 0) => {
    if (shape && to > from) parts.push({shape, from, to, surface, priority});
  };
  for (const wall of walls) {
    const {palette: [body, cap, base]} = wall;
    const start = [wall.x1, wall.y1];
    const direction = [wall.dx, wall.dz];
    const span = (left, right, from, to, thickness, surface, priority) => {
      if (right - left > EPSILON) add(strip(offset(start, direction, left),
        offset(start, direction, right), thickness / 2), from, to, surface, priority);
    };
    // The cutaway exposes the glazed head in overhead view. The sill is
    // continuous; the solid body and cap end at the authored window jambs.
    const bodyBase = wall.openings.length ? sill : 0;
    const solid = (left, right) => {
      span(left, right, bodyBase, height, width, body, 2);
      span(left, right, height - 1, height + 2, width + 3, cap, 1);
    };
    if (bodyBase) span(0, wall.length, 0, bodyBase, width, body, 2);
    let previous = 0;
    for (const opening of wall.openings) {
      solid(previous, opening.start);
      previous = Math.max(previous, opening.end);
    }
    solid(previous, wall.length);
    span(0, wall.length, 0, 3, width + 3, base, 1);
  }
  for (const joint of wallJoints(walls)) {
    const [body, cap, base] = joint.a.wall.palette;
    for (const full of jointFootprints(joint, width / 2)) add(full, 0, height, body, 2);
    for (const trim of jointFootprints(joint, (width + 3) / 2)) {
      add(trim, height - 1, height + 2, cap, 1);
      add(trim, 0, 3, base, 1);
    }
  }

  const levels = [...new Set(parts.flatMap(({from, to}) => [from, to]))].sort((a, b) => a - b);
  const slices = levels.slice(1).map((top, index) => {
    const bottom = levels[index];
    const groups = new Map();
    const active = parts.filter(part => part.from <= bottom && part.to >= top);
    for (const {surface, shape} of active.sort((a, b) => a.priority - b.priority)) {
      if (!groups.has(surface)) groups.set(surface, {surface, polygons: []});
      groups.get(surface).polygons.push(shape);
    }
    return {...visibleRegions([...groups.values()]), bottom, top};
  });
  return slices.flatMap(({regions, footprint, bottom, top}, index) => {
    const boundary = boundarySegments(footprint);
    return regions.map(region => ({
      ...region, bottom, top,
      faces: {
        top: exposedPolygons(region.polygons, slices[index + 1]?.footprint),
        bottom: bottom === 0 ? [] : exposedPolygons(region.polygons, slices[index - 1]?.footprint),
        sides: exposedSides(region.polygons, boundary),
      },
    }));
  });
}
