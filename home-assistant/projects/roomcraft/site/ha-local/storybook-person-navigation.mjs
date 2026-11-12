const PROJECT_BOUNDS = {minX:0, maxX:1536, minZ:0, maxZ:1024};
const GRID_STEP = 12;
const MAX_GRID_SIDE = 256;
const PROJECT_STEP = 6;
const NEIGHBORS = [
  [1, 0], [0, 1], [-1, 0], [0, -1],
  [1, 1], [-1, 1], [-1, -1], [1, -1],
].map(([dx, dz]) => [dx, dz, Math.hypot(dx, dz)]);
const finitePoint = point => Number.isFinite(point?.x) && Number.isFinite(point?.y);
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

class RouteFrontier {
  entries = [];

  static before(a, b) {
    return a.estimate < b.estimate || (a.estimate === b.estimate &&
      (a.cost > b.cost || (a.cost === b.cost && a.id < b.id)));
  }

  push(entry) {
    const {entries} = this;
    let index = entries.length;
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (!RouteFrontier.before(entry, entries[parent])) break;
      entries[index] = entries[parent];
      index = parent;
    }
    entries[index] = entry;
  }

  pop() {
    const {entries} = this;
    const first = entries[0];
    const last = entries.pop();
    if (!entries.length) return first;
    let index = 0;
    while (index * 2 + 1 < entries.length) {
      let child = index * 2 + 1;
      if (child + 1 < entries.length && RouteFrontier.before(entries[child + 1], entries[child])) child++;
      if (!RouteFrontier.before(entries[child], last)) break;
      entries[index] = entries[child];
      index = child;
    }
    entries[index] = last;
    return first;
  }
}

function createGrid(bounds, size, allowsPoint, allowsRoute) {
  const left = Math.floor(bounds.minX / size) * size;
  const top = Math.floor(bounds.minZ / size) * size;
  const columns = Math.ceil((bounds.maxX - left) / size) + 1;
  const rows = Math.ceil((bounds.maxZ - top) / size) + 1;
  const count = columns * rows;
  const pointState = new Uint8Array(count);
  const testedEdges = new Uint8Array(count);
  const clearEdges = new Uint8Array(count);
  const pointAt = id => ({x:left + id % columns * size, y:top + Math.floor(id / columns) * size});
  const validCell = (column, row) => column >= 0 && column < columns && row >= 0 && row < rows;

  function walkable(id) {
    if (!pointState[id]) {
      const {x, y} = pointAt(id);
      pointState[id] = allowsPoint(x, y) ? 1 : 2;
    }
    return pointState[id] === 1;
  }

  function edgeOpen(id, nextId, bit) {
    if (!(testedEdges[id] & bit)) {
      testedEdges[id] |= bit;
      if (walkable(nextId) && allowsRoute(pointAt(id), pointAt(nextId))) clearEdges[id] |= bit;
    }
    return Boolean(clearEdges[id] & bit);
  }

  function connectors(point, start) {
    const col = Math.round((point.x - left) / size);
    const row = Math.round((point.y - top) / size);
    const result = new Map();
    for (let ring = 0; ring <= 3; ring++) {
      for (let dz = -ring; dz <= ring; dz++) {
        for (let dx = -ring; dx <= ring; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== ring || !validCell(col + dx, row + dz)) continue;
          const id = (row + dz) * columns + col + dx;
          if (!walkable(id)) continue;
          const node = pointAt(id);
          if (start ? allowsRoute(point, node) : allowsRoute(node, point)) result.set(id, distance(node, point));
        }
      }
      if (ring >= 1 && result.size) break;
    }
    return result;
  }

  return function search(from, to) {
    const starts = connectors(from, true);
    const goals = connectors(to, false);
    if (!starts.size || !goals.size) return null;
    const frontier = new RouteFrontier();
    const costs = new Float64Array(count).fill(Infinity);
    const parents = new Int32Array(count).fill(-1);
    const visit = (id, cost, parent = -1) => {
      if (cost >= costs[id]) return;
      costs[id] = cost;
      parents[id] = parent;
      frontier.push({id, cost, estimate:cost + distance(pointAt(id), to)});
    };
    for (const [id, cost] of starts) visit(id, cost);
    for (let entry = frontier.pop(); entry; entry = frontier.pop()) {
      const {id, cost} = entry;
      if (cost !== costs[id]) continue;
      if (goals.has(id)) {
        const route = [to];
        for (let vertex = id; vertex >= 0; vertex = parents[vertex]) route.push(pointAt(vertex));
        return route.reverse();
      }
      const column = id % columns;
      const row = Math.floor(id / columns);
      for (const [index, [dx, dz, step]] of NEIGHBORS.entries()) {
        if (!validCell(column + dx, row + dz)) continue;
        const nextId = id + dz * columns + dx;
        const nextCost = cost + step * size;
        if (nextCost < costs[nextId] && edgeOpen(id, nextId, 1 << index)) visit(nextId, nextCost, id);
      }
    }
    return null;
  };
}

function smoothRoute(from, path, allowsRoute) {
  if (!path) return null;
  const result = [];
  let anchor = from;
  let index = 0;
  while (index < path.length) {
    let next = path.length - 1;
    while (next >= index && !allowsRoute(anchor, path[next])) next--;
    if (next < index) return null;
    anchor = path[next];
    result.push(anchor);
    index = next + 1;
  }
  return result;
}

/** Plan on the same floor and swept furniture geometry used to draw the character. */
export function createStorybookPersonNavigation({allowsPoint, allowsRoute, bounds = PROJECT_BOUNDS,
  gridSize = GRID_STEP, geometryRevision} = {}) {
  let extent = bounds;
  let revision;
  let grids = [];
  const clearSegment = (a, b) => allowsRoute(a.x, a.y, b.x, b.y);
  const isWalkable = point => finitePoint(point) && allowsPoint(point.x, point.y);
  const invalidate = () => { grids = []; };

  function findRoute(from, to) {
    if (!isWalkable(from) || !isWalkable(to)) return null;
    if (clearSegment(from, to)) return [to];
    const nextRevision = geometryRevision?.();
    if (nextRevision !== revision) {
      revision = nextRevision;
      invalidate();
    }
    if ([from, to].some(({x,y}) => x < extent.minX || x > extent.maxX || y < extent.minZ || y > extent.maxZ)) {
      extent = {minX:Math.min(extent.minX, from.x, to.x), maxX:Math.max(extent.maxX, from.x, to.x),
        minZ:Math.min(extent.minZ, from.y, to.y), maxZ:Math.max(extent.maxZ, from.y, to.y)};
      invalidate();
    }
    const size = Math.max(2, gridSize, (extent.maxX - extent.minX) / MAX_GRID_SIDE,
      (extent.maxZ - extent.minZ) / MAX_GRID_SIDE);
    for (const refinement of [0, 1]) {
      grids[refinement] ??= createGrid(extent, size / (refinement + 1), allowsPoint, clearSegment);
      const route = smoothRoute(from, grids[refinement](from, to), clearSegment);
      if (route) return route;
    }
    return null;
  }

  function standingTarget(point, from, maximumDistance = 72) {
    if (!finitePoint(point) || !Number.isFinite(maximumDistance) || maximumDistance < 0) return null;
    if (isWalkable(point)) return point;
    const hasAnchor = isWalkable(from);
    const bearing = hasAnchor ? Math.atan2(from.y - point.y, from.x - point.x) : 0;
    let nearby;
    let sameSide;
    const rings = Math.ceil(maximumDistance / PROJECT_STEP);
    for (let ring = 1; ring <= rings; ring++) {
      const radius = Math.min(ring * PROJECT_STEP, maximumDistance);
      const count = Math.max(8, Math.ceil(2 * Math.PI * radius / PROJECT_STEP));
      for (let index = 0; index < count; index++) {
        const step = index % 2 ? (index + 1) / 2 : -index / 2;
        const turn = step * 2 * Math.PI / count;
        const angle = bearing + turn;
        const candidate = {x:point.x + radius * Math.cos(angle), y:point.y + radius * Math.sin(angle)};
        if (!isWalkable(candidate)) continue;
        if (!hasAnchor || clearSegment(from, candidate)) return candidate;
        nearby ??= candidate;
        if (Math.abs(turn) <= Math.PI / 2) sameSide ??= candidate;
      }
    }
    return sameSide ?? nearby ?? null;
  }

  return {findRoute, standingTarget, invalidate};
}
