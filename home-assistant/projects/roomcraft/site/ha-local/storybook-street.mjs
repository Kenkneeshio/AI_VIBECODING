import * as THREE from 'three';

const WALK_WIDTH = 26;
const ROAD_WIDTH = 92;
const CURB_WIDTH = 4;
const VERGE_WIDTH = 18;
const NEIGHBORHOOD_DEPTH = 172;

export function storybookStreetBounds(plan) {
  const {minZ, maxZ} = plan.houseBounds;
  const shrubs = minZ - (maxZ - minZ) * .11 - 46;
  const path = plan.editableStructure ? Infinity : minZ - 146;
  const nearZ = Math.min(plan.bounds.minZ, shrubs, path) - VERGE_WIDTH;
  const farZ = nearZ - 2 * WALK_WIDTH - ROAD_WIDTH;
  return {nearZ, farZ, parkMinZ: farZ - NEIGHBORHOOD_DEPTH};
}

export function buildStorybookStreet(batch, {nearZ, farZ}, groundY, width, centerX) {
  const roadNorth = farZ + WALK_WIDTH;
  const roadSouth = nearZ - WALK_WIDTH;
  const roadCenter = (roadNorth + roadSouth) / 2;
  const left = centerX - width / 2;
  const right = centerX + width / 2;
  const strip = (start, end, height, color) =>
    batch.box(width, height, end - start, color, centerX, groundY + height / 2, (start + end) / 2);

  strip(roadNorth, roadSouth, 1.2, '#73767c');
  strip(roadNorth, roadNorth + 3.4, 1.4, '#656b71');
  strip(roadSouth - 3.4, roadSouth, 1.4, '#656b71');

  for (const [start, end, curbStart, pavingStart] of [
    [farZ, roadNorth, roadNorth - CURB_WIDTH, farZ],
    [roadSouth, nearZ, roadSouth, roadSouth + CURB_WIDTH],
  ]) {
    strip(start, end, 5, '#c0b6a7');
    strip(curbStart, curbStart + CURB_WIDTH, 6.2, '#d0c3b0');
    const pavingWidth = WALK_WIDTH - CURB_WIDTH;
    for (let x = left + 36; x < right; x += 72) {
      batch.box(1.15, 0.18, pavingWidth, '#a69c91', x, groundY + 5.04, pavingStart + pavingWidth / 2);
    }
  }

  for (let x = left + 36; x + 17 < right; x += 72) {
    batch.box(34, 0.2, 2.8, '#e9ce91', x, groundY + 1.24, roadCenter);
  }
}

function boxBetween(batch, from, to, width, color) {
  const start = new THREE.Vector3(...from);
  const end = new THREE.Vector3(...to);
  const direction = end.clone().sub(start);
  const center = start.clone().lerp(end, .5);
  const geometry = new THREE.BoxGeometry(width, direction.length(), width);
  geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), direction.normalize(),
  ));
  batch.add(geometry, color, center.x, center.y, center.z);
}

function framePool(batch, {x, z, width, depth, y}, groundY) {
  const deckWidth = width + 60;
  const deckDepth = depth + 24;
  const halfX = deckWidth / 2;
  const halfZ = deckDepth / 2;
  const deckColor = '#c8bda9';
  for (const side of [-1, 1]) {
    batch.box(deckWidth, 2.4, 12, deckColor, x, groundY + 1.2, z + side * (depth / 2 + 6));
    batch.box(30, 2.4, depth, deckColor, x + side * (width / 2 + 15), groundY + 1.2, z);
    batch.box(width + 8, 2.2, 4, '#eadcc5', x, y + .2, z + side * (depth / 2 + 2));
    batch.box(4, 2.2, depth, '#eadcc5', x + side * (width / 2 + 2), y + .2, z);
  }
  batch.box(width, .65, depth, '#67b6b6', x, y - .6, z);

  const fenceColor = '#799486';
  const post = (px, pz) => batch.box(2.8, 11, 2.8, '#718779', px, groundY + 5.5, pz);
  for (const side of [-1, 1]) {
    const railX = x + side * halfX;
    batch.box(1.9, 1.6, deckDepth, fenceColor, railX, groundY + 8.5, z);
    for (let i = 0; i <= 4; i++) post(railX, z - halfZ + deckDepth * i / 4);
  }
  batch.box(deckWidth, 1.6, 1.9, fenceColor, x, groundY + 8.5, z - halfZ);
  for (let i = 1; i < 8; i++) post(x - halfX + deckWidth * i / 8, z - halfZ);
  const gate = 25;
  for (const side of [-1, 1]) {
    const railWidth = halfX - gate / 2;
    batch.box(railWidth, 1.6, 1.9, fenceColor, x + side * (halfX + gate / 2) / 2,
      groundY + 8.5, z + halfZ);
    for (let i = 0; i < 4; i++) post(x + side * (gate / 2 + railWidth * i / 4), z + halfZ);
  }

  const towelColor = '#c5917e';
  for (const offset of [-12, 4]) {
    const loungeX = x + width / 2 + 15;
    batch.box(16, 1.8, 6.4, '#9b8d78', loungeX, groundY + 3.25, z + offset);
    batch.box(14, .8, 5.2, '#e1c59a', loungeX, groundY + 4.5, z + offset);
    batch.box(5.2, .65, 5.1, towelColor, loungeX + 3.8, groundY + 5.2, z + offset);
  }
  const umbrellaX = x - width / 2 - 16;
  batch.box(1.3, 9, 1.3, '#b49371', umbrellaX, groundY + 6, z + 3);
  const canopy = new THREE.ConeGeometry(10, 4.4, 9);
  batch.add(canopy, '#d4a17f', umbrellaX, groundY + 12, z + 3);
  batch.ball(1.8, 1.3, 1.8, '#edc6a3', umbrellaX, groundY + 14.4, z + 3);
}

function buildPlayground(batch, x, z, groundY) {
  const rubber = '#ba927a';
  const padWidth = 142;
  const padDepth = 61;
  batch.box(padWidth, 1.55, padDepth, '#a89b80', x, groundY + .78, z);
  batch.box(padWidth - 7, .65, padDepth - 7, rubber, x, groundY + 1.82, z);
  const coral = '#ac795f';
  const swingX = x - 28;
  const swingZ = z - 2;
  for (const side of [-1, 1]) {
    const postX = swingX + side * 26;
    for (const leg of [-1, 1]) {
      boxBetween(batch, [postX, groundY + 2, swingZ + leg * 12],
        [postX, groundY + 20, swingZ], 2.7, coral);
    }
  }
  batch.box(56, 2.5, 2.5, coral, swingX, groundY + 20, swingZ);
  for (const seat of [-12, 12]) {
    for (const side of [-1, 1]) {
      const chainX = swingX + seat + side * 3.6;
      boxBetween(batch, [chainX, groundY + 7, swingZ + 2], [chainX, groundY + 20, swingZ], .9, '#cfc1a4');
    }
    batch.box(10, 1.35, 5.2, '#749385', swingX + seat, groundY + 7, swingZ + 2);
  }

  const towerX = x + 32;
  const towerZ = z - 13;
  const platform = groundY + 15;
  for (const offsetX of [-6, 6]) {
    for (const offsetZ of [-6, 6]) {
      batch.box(2.2, 15, 2.2, '#9b8772', towerX + offsetX, groundY + 8, towerZ + offsetZ);
    }
    boxBetween(batch, [towerX + offsetX * .75, groundY + 2.6, towerZ - 13],
      [towerX + offsetX * .75, platform, towerZ - 5.8], 1.8, '#8c806d');
  }
  for (let i = 1; i < 4; i++) {
    batch.box(9, 1.2, 2.2, '#ac9779', towerX, groundY + 2.6 + 3.1 * i, towerZ - 13 + 1.8 * i);
  }
  batch.box(13, 1.8, 13, '#aa9272', towerX, platform, towerZ);
  const slideStart = towerZ + 5.8;
  const slideEnd = towerZ + 27;
  const drop = platform - groundY - 4;
  const pitch = Math.atan2(drop, slideEnd - slideStart);
  const length = Math.hypot(drop, slideEnd - slideStart);
  const slide = new THREE.BoxGeometry(9, 1.65, length);
  slide.rotateX(pitch);
  const slideY = platform - drop / 2;
  const slideZ = (slideStart + slideEnd) / 2;
  batch.add(slide, '#d3ae6e', towerX, slideY, slideZ);
  for (const side of [-1, 1]) {
    const rail = new THREE.BoxGeometry(1.5, 2.4, length);
    rail.rotateX(pitch);
    batch.add(rail, '#c59b5e', towerX + side * 4.6, slideY + .8, slideZ);
  }
}

const MOUNTAIN_COLORS = [
  ['#78926d', '#859974', '#819470'],
  ['#899683', '#8f9c83', '#95a089'],
  ['#9ea499', '#a5a99a', '#aeb0a0'],
  ['#b5b7a4', '#bfc0ab', '#cac9b2'],
];

function buildMountain(batch, x, z, groundY, radiusX, radiusZ, height, lean) {
  const ridge = [1, .76, .53, .28];
  const levels = [0, .26, .56, .8];
  const segments = 15;
  const rings = ridge.map((radius, ring) => Array.from({length: segments}, (_, i) => {
    const angle = (i / segments + ring * .024) * 2 * Math.PI;
    const variation = 1 + .075 * Math.cos(angle * 3 + lean) + .035 * Math.sin(angle * 7);
    const elevation = levels[ring];
    return [
      Math.cos(angle) * radius * radiusX * variation + lean * elevation,
      .2 + height * elevation + (ring === 0 ? 0 : Math.cos(angle * 4) * 2.7),
      Math.sin(angle) * radius * radiusZ * variation - elevation * 4,
    ];
  }));
  const peak = [lean, height, -4];
  const facets = new Map();
  function addTriangle(color, a, b, c) {
    if (!facets.has(color)) facets.set(color, []);
    facets.get(color).push(...a, ...b, ...c);
  }
  for (const [ring, outer] of rings.entries()) {
    const inner = rings[ring + 1];
    for (let i = 0; i < segments; i++) {
      const next = (i + 1) % segments;
      const palette = MOUNTAIN_COLORS[ring];
      const color = palette[(i + ring * 2) % palette.length];
      addTriangle(color, outer[i], inner ? inner[i] : peak, outer[next]);
      if (inner) addTriangle(palette[(i + 1) % palette.length], outer[next], inner[i], inner[next]);
    }
  }
  for (const [color, positions] of facets) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.computeVertexNormals();
    batch.add(geometry, color, x, groundY, z);
  }
  return {x: x + peak[0], y: groundY + peak[1], z: z + peak[2]};
}

function facilityTree(batch, groundY, x, z, size) {
  batch.box(2.5, 13, 2.5, '#93816b', x, groundY + 6.5, z);
  batch.ball(size, size * .81, size * .77, '#79916c', x, groundY + 12, z);
  batch.ball(size * .71, size * .69, size * .74, '#96a57a', x - size * .27, groundY + 16, z + 2);
}

export function buildStorybookNeighborhood(batch, {farZ}, groundY, {minX, maxX}) {
  const centerX = (minX + maxX) / 2;
  const facilityOffset = Math.min(206, Math.max(162, (maxX - minX) * .166));
  const pool = {x: centerX - facilityOffset, z: farZ - 46, width: 216, depth: 54, y: groundY + 3.1};
  framePool(batch, pool, groundY);
  const playgroundX = centerX + facilityOffset;
  buildPlayground(batch, playgroundX, farZ - 42, groundY);
  batch.box(19, .85, 9, '#c4b699', pool.x, groundY + .45, farZ - 3.5);
  batch.box(13, .85, 12, '#c4b699', playgroundX, groundY + .45, farZ - 5);
  batch.box(2 * facilityOffset, .65, 8, '#c7ba9d', centerX, groundY + .35, farZ - 91);

  buildMountain(batch, centerX - 123, farZ - 120, groundY, 78, 30, 48, -11);
  buildMountain(batch, centerX + 125, farZ - 120, groundY, 76, 28, 45, 12);
  const mountainPeak = buildMountain(batch, centerX - 6, farZ - 123, groundY, 125, 40, 74, 16);
  for (const [dx, dz, size] of [
    [-265, -110, 11], [-221, -93, 12], [-104, -86, 10],
    [88, -84, 10], [212, -100, 12], [257, -120, 11],
  ]) facilityTree(batch, groundY, centerX + dx, farZ + dz, size);
  return {pool, mountainPeak};
}
