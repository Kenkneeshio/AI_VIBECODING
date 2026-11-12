import {Color, Float32BufferAttribute, MathUtils, PlaneGeometry} from 'three';

const {clamp, smootherstep} = MathUtils;
const MAX_RELIEF = 15;
const MAX_REGIONAL_RISE = 48;
const CELL_SIZE = 52;
const EDIT_TILE = 32;
const COVER_COLORS = Object.fromEntries(Object.entries({
  grass:'#9dae72', sand:'#d6ba90', soil:'#a98a69', stone:'#aaa59a', scrub:'#788f68',
}).map(([cover, color]) => [cover, new Color(color)]));
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
const REGIONAL_RISES = [
  [-.98, .04, .58, .62, .92],
  [-.71, .89, .55, .57, .83],
  [-.21, 1.53, .72, .69, .84],
  [.66, 1.10, .55, .53, .81],
  [.98, .17, .55, .66, .95],
  [1.47, .73, .66, .66, .72],
  [-1.48, 1.42, .79, .80, .82],
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

function hillsideCover(u, v, slopes) {
  let remainder = 1;
  for (const [centerX, centerZ, radiusX, radiusZ, strength] of slopes) {
    const radius = ((u - centerX) / radiusX) ** 2 + ((v - centerZ) / radiusZ) ** 2;
    remainder *= 1 - strength * (1 - smootherstep(radius, 0, 1));
  }
  return 1 - remainder;
}

function gridAxis(start, length, sections, edits) {
  const end = start + length;
  const inserted = new Set();
  for (const coordinate of edits) {
    for (const offset of [-EDIT_TILE, 0, EDIT_TILE]) {
      const point = coordinate * EDIT_TILE + offset;
      if (point > start && point < end) inserted.add(point);
    }
  }
  const nodes = [...inserted, start, end];
  for (let i = 1; i < sections; i++) {
    const point = start + length * i / sections;
    const nearestEdit = Math.round(point / EDIT_TILE) * EDIT_TILE;
    if (!inserted.has(nearestEdit)) nodes.push(point);
  }
  return nodes.sort((a,b) => a-b);
}

function cellAt(nodes, point) {
  let low = 0, high = nodes.length - 1;
  while (high - low > 1) {
    const mid = (low + high) >> 1;
    if (nodes[mid] <= point) low = mid;
    else high = mid;
  }
  return low;
}

/** Static relief in world X/Z. heightAt reads the same triangles that the renderer draws. */
export function createStorybookMeadow({plan, street, width, depth, centerX, centerZ, groundY, terrain, terrainSampler}) {
  const baseColumns = Math.min(120, Math.max(1, Math.ceil(width / CELL_SIZE)));
  const baseRows = Math.min(80, Math.max(1, Math.ceil(depth / CELL_SIZE)));
  const stepX = width / baseColumns, stepZ = depth / baseRows;
  const cellRadius = Math.hypot(stepX, stepZ);
  const left = centerX - width / 2, top = centerZ - depth / 2;
  const edits = terrain?.cells?.filter(cell => cell.height || cell.cover) ?? [];
  const xs = gridAxis(left, width, baseColumns, edits.map(cell => cell.col));
  const zs = gridAxis(top, depth, baseRows, edits.map(cell => cell.row));
  const columns = xs.length - 1, rows = zs.length - 1;
  const geometry = new PlaneGeometry(width, depth, columns, rows).rotateX(-Math.PI / 2);
  const position = geometry.attributes.position;
  const uv = geometry.attributes.uv;
  const colors = new Float32Array(position.count * 3);
  const paint = new Float32Array(position.count * 4);
  const pads = supportPads(plan, groundY);
  const house = plan.houseBounds;
  const spanX = Math.max(680, house.maxX - house.minX);
  const spanZ = Math.max(465, house.maxZ - house.minZ);
  const houseX = (house.minX + house.maxX) / 2, houseZ = (house.minZ + house.maxZ) / 2;
  const vergeAt = x => street.sample?.(x, street.nearZ).z ?? street.nearZ;
  const verge = xs.map(x => Math.max(vergeAt(x - stepX), vergeAt(x), vergeAt(x + stepX)));
  function editWeight(x, z, roadside = Math.max(vergeAt(x - stepX), vergeAt(x), vergeAt(x + stepX))) {
    const edge = Math.min(width / 2 - Math.abs(x - centerX), depth / 2 - Math.abs(z - centerZ));
    return smootherstep(padDistance(pads, x, z), cellRadius + 9, cellRadius + 43)
      * smootherstep(z - roadside, stepZ + 5, stepZ + 32)
      * smootherstep(edge, cellRadius, cellRadius + 60);
  }
  const hillHeight = (terrain?.hillHeight ?? 100) / 100;
  for (let i = 0; i < position.count; i++) {
    const column = i % (columns + 1), row = Math.floor(i / (columns + 1));
    const x = xs[column], z = zs[row];
    const localX = x - centerX, localZ = z - centerZ;
    const edge = Math.min(width / 2 - Math.abs(localX), depth / 2 - Math.abs(localZ));
    const structure = smootherstep(padDistance(pads, x, z), cellRadius + 22, cellRadius + 155);
    // A whole cell of flat ground keeps interpolated triangles clear of curbs and pads.
    const roadside = smootherstep(z - verge[column], stepZ + 12, stepZ + 153);
    const border = smootherstep(edge, cellRadius, cellRadius + 132);
    const u = (x - houseX) / spanX, v = (z - houseZ) / spanZ;
    const local = hillsideCover(u, v, RISES);
    const regional = hillsideCover(u + Math.sin(v * 4.9) * .045, v + Math.sin(u * 4.6) * .05, REGIONAL_RISES);
    const openGround = structure * roadside * border;
    const edit = terrainSampler && editWeight(x, z, verge[column]);
    const sample = edit ? terrainSampler(x, z) : null;
    const height = (MAX_RELIEF * local + MAX_REGIONAL_RISE * regional) * openGround * hillHeight
      + (sample ? sample.height * edit : 0);
    position.setXYZ(i, localX, height, localZ);
    uv.setXY(i, localX / width + .5, .5 - localZ / depth);
    const shade = regional * openGround;
    const dry = (.5 + .5 * Math.sin(u * 6.8 - v * 4.1 + Math.sin(v * 5.2))) * openGround;
    colors.set([1 - shade * .28 + dry * .055, 1 - shade * .15 - dry * .036,
      1 - shade * .23 - dry * .17], i * 3);
    if (!sample) continue;
    let red = 0, green = 0, blue = 0, coverage = 0;
    for (const [cover, weight] of Object.entries(sample.covers)) {
      const tone = COVER_COLORS[cover];
      red += tone.r * weight;
      green += tone.g * weight;
      blue += tone.b * weight;
      coverage += weight;
    }
    if (coverage > 0) paint.set([red * edit, green * edit, blue * edit, coverage * edit], i * 4);
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.setAttribute('terrainPaint', new Float32BufferAttribute(paint, 4));
  geometry.computeVertexNormals();

  function heightAt(x, z) {
    if (!(x >= left && x <= xs.at(-1) && z >= top && z <= zs.at(-1))) return groundY;
    const ix = cellAt(xs, x), iz = cellAt(zs, z);
    const u = clamp((x - xs[ix]) / (xs[ix + 1] - xs[ix]), 0, 1);
    const v = clamp((z - zs[iz]) / (zs[iz + 1] - zs[iz]), 0, 1);
    const a = iz * (columns + 1) + ix;
    const b = a + columns + 1;
    const lowerLeft = position.getY(b), upperRight = position.getY(a + 1);
    const height = u + v <= 1
      ? position.getY(a) * (1 - u - v) + lowerLeft * v + upperRight * u
      : position.getY(b + 1) * (u + v - 1) + lowerLeft * (1 - u) + upperRight * (1 - v);
    return groundY + height;
  }
  return {geometry, heightAt, canEditTerrain:(x,z) => editWeight(x,z) > .20};
}
