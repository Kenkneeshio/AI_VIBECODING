import * as THREE from 'three';

const WALK_WIDTH = 26;
const ROAD_WIDTH = 92;
const CURB_WIDTH = 4;
const VERGE_WIDTH = 18;
const BEACH_VIEW_DEPTH = 201;
const SANDSTONE = ['#a58263', '#bd976e', '#c6a479', '#d6b98f'];
const SHORE_LANDMARKS = Object.freeze({point: .145, cove: .29, eastBluff: .43, pier: -.30});

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
  return {centerX, width, surfaceY: groundY + 1.24,
    lanes: [(roadCenter + roadSouth) / 2, (roadNorth + roadCenter) / 2],
    sidewalks: [
      {minZ: roadSouth + CURB_WIDTH, maxZ: nearZ, surfaceY: groundY + 5},
      {minZ: farZ, maxZ: roadNorth - CURB_WIDTH, surfaceY: groundY + 5},
    ]};
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
    [-.66, -17, 54, 5], [-.51, -49, 40, 5], [-.37, -50, 47, 6], [-.17, -46, 42, 4.8],
    [.04, -24, 38, 5.3], [.57, -20, 45, 5.6], [.66, -17, 49, 5.2],
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
    [-.57, -76, '#c87a72', '#fae2bd', -.09],
    [-.34, -75, '#589eab', '#e5dfbd', .14],
    [-.16, -58, '#dca658', '#f7dfb5', -.19],
    [SHORE_LANDMARKS.cove, -49, '#9c86ae', '#ecddc2', .13],
  ]) {
    const x = centerX + fraction * span;
    const z = farZ + offsetZ;
    beachUmbrella(batch, x, z, groundY, shade, trim, rotation);
    beachChair(batch, x - 13, z - 15, groundY, trim, rotation - .17);
    beachChair(batch, x + 14, z - 14, groundY, shade, rotation + .12);
    batch.box(8.6, .22, 15, '#e9cda5', x + 23, groundY + .99, z + 7, rotation * 2);
  }
}

function shoreProminence(fraction, center, radius) {
  const distance = Math.abs(fraction - center) / radius;
  return distance >= 1 ? 0 : (.5 + .5 * Math.cos(distance * Math.PI));
}

function shoreZ(farZ, offset, span) {
  const fraction = offset / span;
  const broadShores = 13 * shoreProminence(fraction, -.38, .65);
  const point = 53 * shoreProminence(fraction, SHORE_LANDMARKS.point, .15);
  const cove = 32 * shoreProminence(fraction, SHORE_LANDMARKS.cove, .12);
  const bluff = 45 * shoreProminence(fraction, SHORE_LANDMARKS.eastBluff, .16);
  const ripple = 3.2 * Math.sin((offset - 38) * .019);
  return farZ - 109 - broadShores - point + cove - bluff + ripple;
}

function shoreAccess(batch, x, z, groundY) {
  const deck = '#b19e86';
  const timber = '#8e7b66';
  const seaGlass = '#789da3';
  for (const dx of [-10, 10]) for (const dz of [-7, 7]) {
    batch.box(2.3, 12, 2.3, timber, x + dx, groundY + 6.1, z + dz);
  }
  batch.box(28, 2, 19, deck, x, groundY + 12, z);
  batch.box(19, 10, 12, '#e3cfaa', x, groundY + 18, z - 1.5);
  batch.box(19.15, 3.5, 12.15, seaGlass, x, groundY + 20.1, z - 1.5);
  batch.box(3.4, 6.2, .45, '#6f9298', x + 4.9, groundY + 16, z + 4.62);
  const canopy = new THREE.CylinderGeometry(0, 15, 4.4, 4);
  canopy.scale(1.12, 1, .78);
  canopy.rotateY(Math.PI / 4);
  batch.add(canopy, '#ad8f74', x, groundY + 25.1, z - 1.5);
  batch.box(24, 1.1, 16, '#f0dcba', x, groundY + 23, z - 1.5);
  for (let step = 0; step < 6; step++) {
    const height = 1.9 * (step + 1);
    batch.box(7, height, 2.5, deck, x + 5, groundY + height / 2, z + 23.2 - step * 2.45);
  }
}

function shorePlayground(batch, x, z, y) {
  const rail = '#708f90';
  const peach = '#c78262';
  const rope = '#938775';
  batch.ball(37, .7, 12.5, '#c5ae88', x, y, z);
  for (const dx of [-24, -14]) for (const dz of [-3, 3]) {
    batch.box(1.15, 12.5, 1.15, rail, x + dx, y + 6.25, z + dz);
  }
  batch.box(12, .9, 8, '#be9a72', x - 19, y + 7.3, z);
  const shade = new THREE.ConeGeometry(9.2, 5.4, 4);
  shade.rotateY(Math.PI / 4);
  batch.add(shade, '#d5a46a', x - 19, y + 13.1, z);
  const chute = new THREE.BoxGeometry(4.8, .8, 15.8);
  chute.rotateX(.46);
  batch.add(chute, peach, x - 19, y + 4.3, z + 7.7);
  for (const dx of [3, 28]) for (const dz of [-6, 6]) {
    const leg = new THREE.BoxGeometry(1.4, 13.2, 1.4);
    leg.rotateX(-Math.sign(dz) * .34);
    batch.add(leg, rail, x + dx, y + 6.3, z + dz * .45);
  }
  batch.box(28, 1.5, 1.6, rail, x + 15.5, y + 12.5, z);
  for (const dx of [10, 21]) {
    for (const offset of [-1.5, 1.5]) batch.box(.37, 8.4, .37, rope, x + dx + offset, y + 7.75, z);
    batch.box(4.8, .8, 2.5, peach, x + dx, y + 3.5, z);
  }
}

function coastPalm(batch, x, z, y, height, bearing) {
  const wood = '#9c896d';
  for (let section = 0; section < 4; section++) {
    const thickness = 2.4 - section * .17;
    batch.add(new THREE.CylinderGeometry(thickness * .88, thickness, height / 4 + .15, 6), wood,
      x, y + height * (section + .5) / 4, z);
  }
  const crown = y + height;
  batch.ball(3.1, 1.65, 3.1, '#697958', x, crown - .2, z);
  for (let i = 0; i < 7; i++) {
    const angle = bearing + i * Math.PI * 2 / 7;
    const length = i % 2 ? 12 : 15;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute([
      0, 0, 0, -1.9, 1.4, length * .36, 0, 2.7, length * .44, 1.9, 1.4, length * .36,
      -1.4, -.75, length * .73, 1.4, -.75, length * .73, 0, -4.4, length,
    ], 3));
    geometry.setIndex([0, 1, 2, 0, 2, 3, 1, 4, 2, 2, 4, 6, 2, 6, 5, 2, 5, 3]);
    geometry.computeVertexNormals();
    batch.add(geometry, i % 2 ? '#7d9862' : '#638052', x, crown, z, angle);
  }
}

function scrippsPier(batch, focusX, span, farZ, groundY) {
  const offset = SHORE_LANDMARKS.pier * span;
  const x = focusX + offset;
  const shore = shoreZ(farZ, offset, span);
  const start = shore + 12;
  const end = farZ - 184;
  const length = start - end;
  const center = (start + end) / 2;
  const deck = '#b9b4a6';
  const rail = '#e3d9c3';
  const piling = '#989a92';
  const deckY = groundY + 13.5;
  batch.box(12.5, 1.8, length, deck, x, deckY, center);
  batch.box(16.5, 1.9, 16, deck, x, deckY, end + 1.3);
  for (let step = 0; step < 7; step++) {
    const rise = (step + 1) * 2.04;
    batch.box(13.6, rise, 2.7, '#bcac91', x, groundY + rise / 2, start + 17.55 - step * 2.7);
  }
  for (let i = 0; i <= 9; i++) {
    const z = start - 3 - i / 9 * (length - 5);
    batch.box(12.9, 1.2, 1.5, '#a4a496', x, deckY - 1.25, z);
    for (const side of [-1, 1]) {
      batch.box(1.5, 15.4, 1.6, piling, x + side * 4.25, groundY + 5.25, z);
      batch.box(.6, 3.15, .62, rail, x + side * 5.85, deckY + 2.36, z);
    }
  }
  for (const side of [-1, 1]) {
    batch.box(.46, .42, length - 3, rail, x + side * 5.85, deckY + 3.9, center);
    batch.box(.30, .31, length - 3, rail, x + side * 5.85, deckY + 2.74, center);
  }
  batch.box(10.9, 6.9, 10.5, '#dcd2b8', x, deckY + 4.4, end + 2.5);
  batch.box(11.9, 1.25, 11.5, '#728483', x, deckY + 8.4, end + 2.5);
  batch.box(5.2, 2.5, .35, '#69848a', x + 1.8, deckY + 5.3, end - 2.8);
}

function shorePark(batch, focusX, span, farZ, groundY) {
  const south = [], north = [];
  for (let index = 0; index <= 18; index++) {
    const progress = index / 18;
    const x = focusX + span * (-.61 + progress * .56);
    const shoulder = Math.sin(progress * Math.PI) ** .55;
    south.push([x, groundY + .88, farZ - 19 + 16 * shoulder]);
    north.push([x, groundY + .92, farZ - 19 - 16 * shoulder + 1.4 * Math.sin(progress * 15)]);
  }
  beachStrip(batch, south, north, '#91a56f');
  const width = span * .75;
  const x = focusX - span * .27;
  const z = farZ - 38;
  batch.box(width, 1.8, 11, '#bda890', x, groundY + 1.35, z);
  batch.box(width, .24, .9, '#d7bea1', x, groundY + 2.34, z - 5.35);
  for (let i = 14; i < width; i += 14) {
    batch.box(.58, .20, 10.6, '#a59078', x - width / 2 + i, groundY + 2.28, z);
  }
  for (const fraction of [-.48, -.22, -.09]) {
    const bx = focusX + fraction * span;
    batch.box(17, .85, 4.2, '#9e785d', bx, groundY + 4, z + 8.5);
    batch.box(17, 3, .85, '#9e785d', bx, groundY + 5.1, z + 10.3);
    for (const side of [-1, 1]) batch.box(1.4, 3.3, 3.2, '#8a7d6f', bx + side * 6.4, groundY + 2.5, z + 8.5);
  }
  for (const [fraction, depth, size] of [[-.52, 13, 8], [-.44, 11, 7], [-.27, 9, 8.5], [-.18, 15, 6], [-.09, 18, 6.5]]) {
    const sx = focusX + fraction * span;
    batch.ball(size, size * .36, 3.8, '#748d61', sx, groundY + 1.8, farZ - depth);
    batch.ball(size * .70, size * .32, 3.4, '#9bac72', sx - size * .22, groundY + 2.5, farZ - depth - 1.7);
  }
  for (const [fraction, depth, height, bearing] of [[-.54, 18, 24, .1], [-.27, 17, 31, .7], [-.11, 21, 22, .4]]) {
    coastPalm(batch, focusX + fraction * span, farZ - depth, groundY + .9, height, bearing);
  }
  shorePlayground(batch, focusX - span * .35, farZ - 20, groundY + .9);
  shoreAccess(batch, focusX - span * .24, farZ - 62, groundY + .55);
}

function rockRings(batch, x, y, z, width, depth, height, phase) {
  const slices = 11;
  const levels = [[0, 1], [.20, .98], [.47, .89], [.74, .83], [1, .66]];
  const rings = levels.map(([level, radius]) => Array.from({length: slices}, (_, i) => {
    const angle = i / slices * Math.PI * 2;
    const uneven = 1 + .13 * Math.sin(i * 1.94 + phase) + .06 * Math.cos(i * 2.59 - phase);
    return [Math.cos(angle) * width * radius * uneven + level * width * .12,
      height * level * (1 + .13 * Math.sin(i * .93 - phase)),
      Math.sin(angle) * depth * radius * uneven];
  }));
  for (let ring = 0; ring < rings.length - 1; ring++) {
    const positions = [...rings[ring], ...rings[ring + 1]];
    const faces = [];
    for (let i = 0; i < slices; i++) {
      const next = (i + 1) % slices;
      faces.push(i, i + slices, next, next, i + slices, next + slices);
    }
    if (ring === rings.length - 2) {
      positions.push([width * .12, height * 1.01, 0]);
      for (let i = 0; i < slices; i++) faces.push(slices * 2, slices + (i + 1) % slices, slices + i);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions.flat(), 3));
    geometry.setIndex(faces);
    geometry.computeVertexNormals();
    batch.add(geometry, SANDSTONE[ring], x, y, z);
  }
}

function rockyCoast(batch, focusX, span, farZ, groundY) {
  for (const [landmark, formations] of [
    [SHORE_LANDMARKS.point, [
      [-.062, 27, 40, 25, 22], [-.028, 18, 53, 26, 35], [.020, 24, 45, 26, 40], [.050, 23, 32, 17, 24],
    ]],
    [SHORE_LANDMARKS.eastBluff, [
      [-.045, 29, 29, 25, 29], [-.010, 20, 46, 28, 44], [.035, 22, 50, 29, 39],
    ]],
  ]) {
    for (const [index, [fraction, inland, width, depth, height]] of formations.entries()) {
      const offset = (landmark + fraction) * span;
      const x = focusX + offset;
      const coast = shoreZ(farZ, offset, span);
      const z = coast + inland;
      rockRings(batch, x, groundY + .15, z, width, depth, height, index + landmark * 7);
      for (const [dx, dz, scale] of [[-.56, -.82, .26], [.38, -1.02, .31], [.73, -.68, .21]]) {
        rockRings(batch, x + dx * width, groundY - .5, z + dz * depth,
          width * scale, depth * scale, height * scale * .59, dx * 10);
      }
      addDuneGrass(batch, x + width * .13, z, groundY + height * .97, 5.8, index);
    }
  }
}

export function buildStorybookNeighborhood(batch, {farZ}, groundY, {minX, maxX},
  groundWidth = 6200, groundCenterX = (minX + maxX) / 2) {
  const focusX = (minX + maxX) / 2;
  const span = Math.max(940, maxX - minX);
  const segments = Math.ceil(groundWidth / 42);
  const left = groundCenterX - groundWidth / 2;
  const shoreline = Array.from({length: segments + 1}, (_, index) => {
    const x = left + groundWidth * index / segments;
    return {x, z: shoreZ(farZ, x - focusX, span)};
  });

  const edge = shoreline.map(({x}) => [x, groundY + .28, farZ + .4]);
  const drySand = shoreline.map(({x, z}) => [x, groundY + .71, z + 22]);
  const dampSand = shoreline.map(({x, z}) => [x, groundY + .44, z + 6]);
  const submerged = shoreline.map(({x, z}) => [x, groundY + .17, z - 31]);
  beachStrip(batch, edge, drySand, '#e3cba0');
  beachStrip(batch, drySand, dampSand, '#dbbd92');
  beachStrip(batch, dampSand, submerged, '#c8a47e');

  shorePark(batch, focusX, span, farZ, groundY);
  scrippsPier(batch, focusX, span, farZ, groundY);
  rockyCoast(batch, focusX, span, farZ, groundY);
  addBeachDunes(batch, focusX, farZ, span, groundY);
  for (const fraction of [-.58, -.06, SHORE_LANDMARKS.cove]) {
    boardwalk(batch, focusX + fraction * span, farZ, groundY);
  }
  placeBeachSets(batch, focusX, farZ, span, groundY + .55);

  return {water: {y: groundY + 1.05, farZ: farZ - 1850, shoreline, focusX}};
}
