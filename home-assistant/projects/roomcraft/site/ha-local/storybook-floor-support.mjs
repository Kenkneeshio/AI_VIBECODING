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
  if (Math.abs(start) < EPSILON && between(x, endX, ax) && between(z, endZ, az)) return true;
  if (Math.abs(end) < EPSILON && between(x, endX, bx) && between(z, endZ, bz)) return true;
  return (from > 0) !== (to > 0) && (start > 0) !== (end > 0);
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
    for (const [ax, az, bx, bz] of edges) {
      const dx = bx - ax;
      const dz = bz - az;
      const length2 = dx * dx + dz * dz;
      if (!length2) continue;
      const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / length2));
      const distanceX = x - ax - t * dx;
      const distanceZ = z - az - t * dz;
      nearest2 = Math.min(nearest2, distanceX * distanceX + distanceZ * distanceZ);
    }
    return Math.sqrt(nearest2);
  }
  function supportsRoute(x, z, endX, endZ) {
    return clearance(x, z) > EPSILON && clearance(endX, endZ) > EPSILON &&
      !edges.some(edge => intersectsEdge(edge, x, z, endX, endZ));
  }
  return {contains, clearance, supportsRoute};
}
