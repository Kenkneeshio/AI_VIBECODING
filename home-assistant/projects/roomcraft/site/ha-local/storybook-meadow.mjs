import {Float32BufferAttribute, MathUtils, PlaneGeometry} from 'three';

const {clamp, smootherstep} = MathUtils;
const MAX_RELIEF = 15;
const CELL_SIZE = 52;
const RISES = [
  [-.73, -.14, .39, .53, .79],
  [-.69, .43, .32, .49, .91],
  [-.31, .76, .51, .48, .78],
  [.72, -.12, .34, .50, .73],
  [.74, .42, .40, .51, .89],
  [.33, .74, .55, .38, .79],
  [-1.14, .73, .48, .71, .54],
  [1.24, .23, .48, .72, .54],
];

function padAround({item, x, z, angle}, runMin, runMax) {
  const cosine = Math.cos(angle), sine = Math.sin(angle);
  const corners = [-item.w / 2, item.w / 2].flatMap(side => [runMin, runMax].map(run => [
    x + side * cosine - run * sine,
    z + side * sine + run * cosine,
  ]));
  const across = corners.map(([position]) => position);
  const along = corners.map(([, position]) => position);
  return {minX:Math.min(...across), maxX:Math.max(...across), minZ:Math.min(...along), maxZ:Math.max(...along)};
}

function supportPads(plan, groundY) {
  const house = plan.houseBounds;
  const pads = [house];
  for (const placement of plan.placements ?? []) {
    if (placement.item.type !== 'garageDoor') continue;
    const {h} = placement.item;
    pads.push(padAround(placement, -h * .55, h * .66));
  }
  for (const flight of plan.stairs ?? []) {
    const {item, apronDepth} = flight;
    pads.push(padAround(flight, -item.h / 2 - apronDepth, item.h / 2));
  }
  for (const {x1, x2, y1, y2, base1, base2} of plan.fences ?? []) {
    if (Math.min(base1, base2) > groundY + .1) continue;
    pads.push({minX:Math.min(x1,x2), maxX:Math.max(x1,x2), minZ:Math.min(y1,y2), maxZ:Math.max(y1,y2)});
  }
  if (!plan.editableStructure) {
    const minX = plan.reference?.left ?? house.minX;
    const pathWidth = Math.min(90, (house.maxX - house.minX) * .18);
    pads.push({minX, maxX:minX + pathWidth, minZ:house.minZ - 155, maxZ:house.minZ - 26});
    if (plan.reference) {
      const {left, deckEdge, stepTop, deckBottom} = plan.reference;
      pads.push({minX:left, maxX:deckEdge, minZ:stepTop - 82, maxZ:deckBottom});
    }
  }
  return pads;
}

function padDistance(pads, x, z) {
  let distance = Infinity;
  for (const pad of pads) {
    const dx = Math.max(pad.minX - x, 0, x - pad.maxX);
    const dz = Math.max(pad.minZ - z, 0, z - pad.maxZ);
    distance = Math.min(distance, Math.hypot(dx, dz));
  }
  return distance;
}

function rollingHeight(u, v) {
  let remainder = 1;
  for (const [centerX, centerZ, radiusX, radiusZ, strength] of RISES) {
    const radius = ((u - centerX) / radiusX) ** 2 + ((v - centerZ) / radiusZ) ** 2;
    remainder *= 1 - strength * (1 - smootherstep(radius, 0, 1));
  }
  return MAX_RELIEF * (1 - remainder);
}

/** Static relief in world X/Z. heightAt reads the same triangles that the renderer draws. */
export function createStorybookMeadow({plan, street, width, depth, centerX, centerZ, groundY}) {
  const columns = Math.min(120, Math.max(1, Math.ceil(width / CELL_SIZE)));
  const rows = Math.min(80, Math.max(1, Math.ceil(depth / CELL_SIZE)));
  const stepX = width / columns, stepZ = depth / rows;
  const cellRadius = Math.hypot(stepX, stepZ);
  const left = centerX - width / 2, top = centerZ - depth / 2;
  const geometry = new PlaneGeometry(width, depth, columns, rows).rotateX(-Math.PI / 2);
  const position = geometry.attributes.position;
  const colors = new Float32Array(position.count * 3);
  const pads = supportPads(plan, groundY);
  const house = plan.houseBounds;
  const spanX = Math.max(680, house.maxX - house.minX);
  const spanZ = Math.max(465, house.maxZ - house.minZ);
  const houseX = (house.minX + house.maxX) / 2, houseZ = (house.minZ + house.maxZ) / 2;
  const vergeAt = x => street.sample?.(x, street.nearZ).z ?? street.nearZ;
  const verge = Array.from({length:columns + 1}, (_, index) => {
    const x = left + index * stepX;
    return Math.max(vergeAt(x - stepX), vergeAt(x), vergeAt(x + stepX));
  });
  for (let i = 0; i < position.count; i++) {
    const localX = position.getX(i), localZ = position.getZ(i);
    const x = localX + centerX, z = localZ + centerZ;
    const edge = Math.min(width / 2 - Math.abs(localX), depth / 2 - Math.abs(localZ));
    const structure = smootherstep(padDistance(pads, x, z), cellRadius + 22, cellRadius + 113);
    // A whole cell of flat ground keeps interpolated triangles clear of curbs and pads.
    const roadside = smootherstep(z - verge[i % (columns + 1)], stepZ + 12, stepZ + 111);
    const border = smootherstep(edge, cellRadius, cellRadius + 132);
    const height = rollingHeight((x - houseX) / spanX, (z - houseZ) / spanZ) * structure * roadside * border;
    position.setY(i, height);
    const tint = height / MAX_RELIEF;
    const fleck = .5 + .5 * Math.sin(x * .0043 + z * .0061);
    colors.set([1 - tint * (.09 - fleck * .04), 1 - tint * .036, 1 - tint * (.13 - fleck * .028)], i * 3);
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  function heightAt(x, z) {
    const column = (x - left) / stepX, row = (z - top) / stepZ;
    if (!(column >= 0 && column <= columns && row >= 0 && row <= rows)) return groundY;
    const ix = clamp(Math.floor(column), 0, columns - 1), iz = clamp(Math.floor(row), 0, rows - 1);
    const u = column - ix, v = row - iz;
    const a = iz * (columns + 1) + ix;
    const b = a + columns + 1;
    const lowerLeft = position.getY(b), upperRight = position.getY(a + 1);
    const height = u + v <= 1
      ? position.getY(a) * (1 - u - v) + lowerLeft * v + upperRight * u
      : position.getY(b + 1) * (u + v - 1) + lowerLeft * (1 - u) + upperRight * (1 - v);
    return groundY + height;
  }
  return {geometry, heightAt};
}
