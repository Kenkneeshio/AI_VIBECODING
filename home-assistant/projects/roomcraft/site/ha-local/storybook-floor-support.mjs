import polygonClipping from 'polygon-clipping';
import '../public/model-library.js';

// Walkable geometry is the union of the rendered surfaces, with its holes intact.
const EPSILON = 1e-7;

function insideRing(ring, x, z) {
  let inside = false;
  for (let i = 1; i < ring.length; i++) {
    const [ax, az] = ring[i - 1];
    const [bx, bz] = ring[i];
    if ((az > z) !== (bz > z) && x < (bx - ax) * (z - az) / (bz - az) + ax) inside = !inside;
  }
  return inside;
}

const side = (ax, az, bx, bz, x, z) => (bx - ax) * (z - az) - (bz - az) * (x - ax);
const between = (a, b, value) => value >= Math.min(a, b) - EPSILON && value <= Math.max(a, b) + EPSILON;

function intersectsEdge([ax, az, bx, bz], x, z, endX, endZ) {
  const from = side(ax, az, bx, bz, x, z);
  const to = side(ax, az, bx, bz, endX, endZ);
  const start = side(x, z, endX, endZ, ax, az);
  const end = side(x, z, endX, endZ, bx, bz);
  // A tangent counts as a boundary hit so a model cannot skim through an edge.
  if (Math.abs(from) < EPSILON && between(ax, bx, x) && between(az, bz, z)) return true;
  if (Math.abs(to) < EPSILON && between(ax, bx, endX) && between(az, bz, endZ)) return true;
  if (Math.abs(start) < EPSILON && between(x, endX, ax) && between(z, endZ, az)) return true;
  if (Math.abs(end) < EPSILON && between(x, endX, bx) && between(z, endZ, bz)) return true;
  return (from > 0) !== (to > 0) && (start > 0) !== (end > 0);
}

function pointDistanceSquared(x, z, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const length2 = dx * dx + dz * dz;
  const t = length2 ? Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / length2)) : 0;
  return (x - ax - t * dx) ** 2 + (z - az - t * dz) ** 2;
}

function blocksSweptEdge(edge, x, z, endX, endZ, radiusSquared) {
  if (intersectsEdge(edge, x, z, endX, endZ)) return true;
  if (!radiusSquared) return false;
  const [ax, az, bx, bz] = edge;
  // For disjoint planar segments the closest pair includes an endpoint.
  return Math.min(pointDistanceSquared(x, z, ...edge), pointDistanceSquared(endX, endZ, ...edge),
    pointDistanceSquared(ax, az, x, z, endX, endZ),
    pointDistanceSquared(bx, bz, x, z, endX, endZ)) < radiusSquared;
}

/** Ground-level wall slices include the rendered joins and the blocking window sills. */
export function unobstructedFloor(footprint, wallStructure) {
  const barriers = wallStructure.filter(region => region.bottom === 0).flatMap(region => region.polygons);
  return footprint.length && barriers.length ? polygonClipping.difference(footprint, barriers) : footprint;
}

/** Obstructions use the authored footprint shapes, including openings in L-shaped furniture. */
export function createStorybookFurnitureCollision(placements) {
  const host = typeof window === 'undefined' ? globalThis : window;
  const boxes = placements.flatMap(({item, x, z, angle}) =>
    host.RoomcraftModels.walkingObstacleBoxes({...item, x, y:z, rotation:angle * 180 / Math.PI})
      .map(box => {
        const {width:w, height:h, u, v} = box;
        return {...box, id:item.id,
          extentX:Math.abs(u[0]) * w + Math.abs(v[0]) * h,
          extentZ:Math.abs(u[1]) * w + Math.abs(v[1]) * h,
          edges:[[-w,-h,w,-h],[w,-h,w,h],[w,h,-w,h],[-w,h,-w,-h]],
        };
      }));

  function blocksRoute(x, z, endX, endZ, radius = 0, exceptItemId) {
    const limit = Math.max(0, radius) ** 2;
    return boxes.some(box => {
      if (box.id === exceptItemId || Math.min(x, endX) > box.x + box.extentX + radius ||
          Math.max(x, endX) < box.x - box.extentX - radius || Math.min(z, endZ) > box.y + box.extentZ + radius ||
          Math.max(z, endZ) < box.y - box.extentZ - radius) return false;
      const dx = x - box.x;
      const dz = z - box.y;
      const ex = endX - box.x;
      const ez = endZ - box.y;
      const a = dx * box.u[0] + dz * box.u[1];
      const b = dx * box.v[0] + dz * box.v[1];
      const c = ex * box.u[0] + ez * box.u[1];
      const d = ex * box.v[0] + ez * box.v[1];
      const inside = (u, v) => Math.abs(u) <= box.width && Math.abs(v) <= box.height;
      return inside(a, b) || inside(c, d) || box.edges.some(edge => blocksSweptEdge(edge, a, b, c, d, limit));
    });
  }
  const blocksPoint = (x, z, radius, exceptItemId) => blocksRoute(x, z, x, z, radius, exceptItemId);
  return {blocksPoint, blocksRoute};
}

export function createFloorSupport(footprint) {
  const edges = footprint.flatMap(polygon => polygon.flatMap(ring =>
    ring.slice(1).map(([bx, bz], index) => [...ring[index], bx, bz])));
  function contains(x, z) {
    return footprint.some(([outer, ...holes]) =>
      insideRing(outer, x, z) && !holes.some(hole => insideRing(hole, x, z)));
  }
  function clearance(x, z) {
    if (!contains(x, z)) return 0;
    let nearest2 = Infinity;
    for (const edge of edges) nearest2 = Math.min(nearest2, pointDistanceSquared(x, z, ...edge));
    return Math.sqrt(nearest2);
  }
  function supportsRoute(x, z, endX, endZ, radius = 0) {
    const limit = Math.max(0, radius - EPSILON) ** 2;
    return contains(x, z) && contains(endX, endZ) &&
      !edges.some(edge => blocksSweptEdge(edge, x, z, endX, endZ, limit));
  }
  return {contains, clearance, supportsRoute};
}
