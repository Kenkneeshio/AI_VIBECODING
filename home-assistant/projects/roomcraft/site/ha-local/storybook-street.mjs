import * as THREE from 'three';

const WALK_WIDTH = 26;
const ROAD_WIDTH = 92;
const CURB_WIDTH = 4;
const VERGE_WIDTH = 18;
const BEACH_VIEW_DEPTH = 188;

export function storybookStreetBounds(plan) {
  const {minZ, maxZ} = plan.houseBounds;
  const shrubs = minZ - (maxZ - minZ) * .11 - 46;
  const path = plan.editableStructure ? Infinity : minZ - 146;
  const nearZ = Math.min(plan.bounds.minZ, shrubs, path) - VERGE_WIDTH;
  const farZ = nearZ - 2 * WALK_WIDTH - ROAD_WIDTH;
  return {nearZ, farZ, sceneryMinZ: farZ - BEACH_VIEW_DEPTH};
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

function beachStrip(batch, south, north, color) {
  const vertices = [];
  const faces = [];
  for (let i = 0; i < south.length; i++) {
    vertices.push(...south[i], ...north[i]);
    if (i > 0) {
      const a = (i - 1) * 2;
      const b = i * 2;
      faces.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const surface = new THREE.BufferGeometry();
  surface.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  surface.setIndex(faces);
  surface.computeVertexNormals();
  batch.add(surface, color, 0, 0, 0);
}

function addDuneGrass(batch, x, z, groundY, size, twist) {
  const dark = '#9e9c70';
  const gold = '#bab484';
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.ConeGeometry(size * (.13 + .018 * i), size * (1.25 - .14 * i), 3);
    blade.rotateZ(.22 + i * .1);
    blade.rotateY(twist + i * 1.62);
    const dx = Math.cos(twist + i * 1.62) * size * .21;
    const dz = Math.sin(twist + i * 1.62) * size * .21;
    batch.add(blade, i % 2 ? gold : dark, x + dx, groundY + size * .46, z + dz);
  }
}

function addBeachDunes(batch, centerX, farZ, span, groundY) {
  for (const [fraction, offsetZ, width, height] of [
    [-.51, -18, 54, 5], [-.36, -25, 47, 6], [-.10, -18, 44, 4.8], [.12, -24, 49, 6],
    [.30, -16, 38, 5.3], [.49, -24, 53, 5.6], [.65, -17, 60, 5.2],
  ]) {
    const x = centerX + fraction * span;
    const z = farZ + offsetZ;
    const y = groundY + .1;
    batch.ball(width, height, 13, '#d7bd94', x, y, z);
    batch.ball(width * .62, height * .78, 10, '#dfc598', x + width * .28, y + .5, z + 4);
    for (const [dx, dz, size] of [[-.38, 1, 4.4], [-.08, -3.5, 5.6], [.2, 4.5, 4.5], [.56, 2, 3.8]]) {
      addDuneGrass(batch, x + width * dx, z + dz, y + height * .75, size, dx * 7);
    }
  }
}

function boardwalk(batch, x, farZ, groundY) {
  const length = 27;
  const width = 19;
  const z = farZ - length / 2 + .6;
  batch.box(width, 2.5, length, '#ac987e', x, groundY + 1.28, z);
  for (let plank = 0; plank < 7; plank++) {
    batch.box(width + 1, .7, 3.45, plank % 2 ? '#c5af8f' : '#cdb696',
      x, groundY + 2.6, farZ - 1.25 - plank * 3.8);
  }
  for (const side of [-1, 1]) {
    batch.box(.9, .8, length + .6, '#b4a086', x + side * width / 2, groundY + 2.8, z);
  }
}

function beachUmbrella(batch, x, z, groundY, shade, trim, rotation) {
  const radius = 16;
  const poleHeight = 16.6;
  const ribs = 8;
  batch.box(1.4, poleHeight, 1.4, '#b5a08a', x, groundY + poleHeight / 2, z);
  batch.ball(1.6, .95, 1.6, trim, x, groundY + poleHeight + 3.6, z);
  for (let i = 0; i < ribs; i++) {
    const p = (angle, distance, y) => [Math.cos(angle) * distance, y, Math.sin(angle) * distance];
    const left = rotation + i * 2 * Math.PI / ribs;
    const right = rotation + (i + 1) * 2 * Math.PI / ribs;
    const points = [
      [0, poleHeight + 3.4, 0], p(left, radius * .54, poleHeight + 2.1),
      p(right, radius * .54, poleHeight + 2.1), p(left, radius, poleHeight - .55),
      p(right, radius, poleHeight - .55), p(left, radius, poleHeight - 2.0),
      p(right, radius, poleHeight - 2.0),
    ];
    const panel = new THREE.BufferGeometry();
    panel.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
    panel.setAttribute('uv', new THREE.Float32BufferAttribute(
      points.flatMap(([px, , pz]) => [px / (2 * radius) + .5, pz / (2 * radius) + .5]), 2));
    panel.setIndex([0, 2, 1, 1, 2, 4, 1, 4, 3, 3, 4, 5, 4, 6, 5]);
    panel.computeVertexNormals();
    batch.add(panel, i % 2 ? trim : shade, x, groundY, z);
  }
}

function beachChair(batch, x, z, groundY, fabric, rotation) {
  const position = (dx, dz) => [x + dx * Math.cos(rotation) + dz * Math.sin(rotation),
    z - dx * Math.sin(rotation) + dz * Math.cos(rotation)];
  const seat = (w, h, d, shade, dx, y, dz) => {
    const [px, pz] = position(dx, dz);
    batch.box(w, h, d, shade, px, groundY + y, pz, rotation);
  };
  for (const side of [-1, 1]) {
    seat(1.1, 1.2, 18, '#988679', side * 4.5, 2.15, 0);
    seat(1, 2.1, 1.2, '#988679', side * 4.4, 1.08, 6.6);
  }
  seat(8.4, .75, 12, fabric, 0, 2.8, 2);
  const [px, pz] = position(0, -5.5);
  const back = new THREE.BoxGeometry(8.4, .85, 8);
  back.rotateX(-Math.PI / 6);
  batch.add(back, fabric, px, groundY + 4.4, pz, rotation);
}

function placeBeachSets(batch, centerX, farZ, span, groundY) {
  for (const [fraction, offsetZ, shade, trim, rotation] of [
    [-.43, -57, '#c87a72', '#fae2bd', -.09],
    [-.16, -67, '#589eab', '#e5dfbd', .14],
    [.14, -54, '#dca658', '#f7dfb5', -.19],
    [.41, -64, '#9c86ae', '#ecddc2', .13],
  ]) {
    const x = centerX + fraction * span;
    const z = farZ + offsetZ;
    beachUmbrella(batch, x, z, groundY, shade, trim, rotation);
    beachChair(batch, x - 13, z - 15, groundY, trim, rotation - .17);
    beachChair(batch, x + 14, z - 14, groundY, shade, rotation + .12);
    batch.box(8.6, .22, 15, '#e9cda5', x + 23, groundY + .99, z + 7, rotation * 2);
  }
}

export function buildStorybookNeighborhood(batch, {farZ}, groundY, {minX, maxX},
  groundWidth = 6200, groundCenterX = (minX + maxX) / 2) {
  const focusX = (minX + maxX) / 2;
  const segments = Math.ceil(groundWidth / 50);
  const left = groundCenterX - groundWidth / 2;
  const shoreline = Array.from({length: segments + 1}, (_, index) => {
    const x = left + groundWidth * index / segments;
    const offset = x - focusX;
    const z = farZ - 108 + 14 * Math.cos((offset + 110) * .006)
      + 7 * Math.sin((offset - 90) * .013);
    return {x, z};
  });

  const edge = shoreline.map(({x}) => [x, groundY + .28, farZ + .4]);
  const drySand = shoreline.map(({x, z}) => [x, groundY + .71, z + 22]);
  const dampSand = shoreline.map(({x, z}) => [x, groundY + .44, z + 6]);
  const submerged = shoreline.map(({x, z}) => [x, groundY + .17, z - 31]);
  beachStrip(batch, edge, drySand, '#e3cba0');
  beachStrip(batch, drySand, dampSand, '#dbbd92');
  beachStrip(batch, dampSand, submerged, '#c8a47e');

  const span = Math.max(940, maxX - minX);
  addBeachDunes(batch, focusX, farZ, span, groundY);
  for (const direction of [-1, 1]) {
    boardwalk(batch, focusX + direction * span * .245, farZ, groundY);
  }
  placeBeachSets(batch, focusX, farZ, span, groundY + .55);

  return {water: {y: groundY + 1.05, farZ: farZ - 1850, shoreline, focusX}};
}
