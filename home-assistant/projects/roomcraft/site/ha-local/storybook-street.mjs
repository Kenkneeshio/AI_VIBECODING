import * as THREE from 'three';

const WALK_WIDTH = 26;
const ROAD_WIDTH = 92;
const CURB_WIDTH = 4;
const VERGE_WIDTH = 18;
const PARK_DEPTH = 94;

export function storybookStreetBounds(plan) {
  const {minZ, maxZ} = plan.houseBounds;
  const shrubs = minZ - (maxZ - minZ) * .11 - 46;
  const path = plan.editableStructure ? Infinity : minZ - 146;
  const nearZ = Math.min(plan.bounds.minZ, shrubs, path) - VERGE_WIDTH;
  const farZ = nearZ - 2 * WALK_WIDTH - ROAD_WIDTH;
  return {nearZ, farZ, parkMinZ: farZ - PARK_DEPTH};
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

function buildParkTrail(batch, groundY, farZ, centerX, span) {
  const trail = new THREE.CatmullRomCurve3([
    [-.38, -29], [-.22, -52], [-.06, -47], [.10, -63], [.24, -53], [.37, -34],
  ].map(([fraction, depth]) => new THREE.Vector3(centerX + fraction * span, 0, farZ + depth)));
  const outside = [];
  const inside = [];
  const pathRadius = 5;
  for (let i = 0; i <= 28; i++) {
    const position = trail.getPoint(i / 28);
    const tangent = trail.getTangent(i / 28);
    outside.push(new THREE.Vector2(position.x + tangent.z * pathRadius, -position.z + tangent.x * pathRadius));
    inside.push(new THREE.Vector2(position.x - tangent.z * pathRadius, -position.z - tangent.x * pathRadius));
  }
  const surface = new THREE.ShapeGeometry(new THREE.Shape([...outside, ...inside.reverse()]));
  surface.rotateX(-Math.PI / 2);
  batch.add(surface, '#c9ba9a', 0, groundY + .55, 0);
  for (const [fraction, depth] of [[-.38, 29], [.37, 34]]) {
    const x = centerX + fraction * span;
    batch.box(10, .48, depth + 1, '#c9ba9a', x, groundY + .25, farZ - depth / 2);
  }
}

function parkTree(batch, groundY, x, z, size, autumn) {
  batch.box(3.2, 17, 3.2, '#917e65', x, groundY + 8.5, z);
  const palette = autumn ? ['#9a9365', '#bbb17e', '#c5b789'] : ['#688667', '#7a986f', '#9ba77b'];
  batch.ball(size * .91, size * .82, size * .81, palette[0], x, groundY + 16, z);
  batch.ball(size * .72, size * .67, size * .69, palette[1], x + size * .37, groundY + 20, z - size * .13);
  batch.ball(size * .71, size * .76, size * .69, palette[2], x - size * .27, groundY + 23, z + size * .13);
}

function neighborRoof(batch, groundY, x, z, width, roofColor, wallColor) {
  const depth = 43;
  const eaves = 17;
  const rise = 12;
  const profile = new THREE.Shape().moveTo(-width / 2, 0).lineTo(width / 2, 0)
    .lineTo(width / 2, eaves).lineTo(0, eaves + rise).lineTo(-width / 2, eaves);
  profile.closePath();
  const walls = new THREE.ExtrudeGeometry(profile, {depth, bevelEnabled: false});
  batch.add(walls, wallColor, x, groundY, z - depth / 2);

  const slope = Math.atan2(rise, width / 2);
  const panelWidth = Math.hypot(rise, width / 2) + 4;
  for (const side of [-1, 1]) {
    const panel = new THREE.BoxGeometry(panelWidth, 2.6, depth + 6);
    panel.rotateZ(-side * slope);
    batch.add(panel, roofColor, x + side * width / 4, groundY + eaves + rise / 2, z);
  }
  batch.box(3.3, 2.5, depth + 6, '#837978', x, groundY + eaves + rise + .8, z);
  batch.box(6, 7, 6, '#9a8b7c', x + width * .21, groundY + eaves + rise * .78, z - 5);
  for (const fraction of [-.24, .24]) {
    const windowX = x + width * fraction;
    batch.box(11, 7, .7, '#beb9a7', windowX, groundY + 10, z + depth / 2 + .32);
    batch.box(8, 4, .7, '#838f87', windowX, groundY + 10, z + depth / 2 + .66);
  }
  batch.box(7, 10, .8, '#83796e', x, groundY + 5, z + depth / 2 + .35);
}

function buildDistantGroves(batch, groundY, farZ, centerX, span) {
  // Tall views reveal these groves beyond the framed park. The home camera
  // stays fitted to the park edge, so the distant trees never shrink the house.
  const groves = [
    {offset: -.32, depth: -226, scale: 1, palette: ['#75906f', '#94a37c'],
      trees: [[-91, 17, 21], [-62, -18, 26], [-23, -27, 20], [6, 8, 25], [36, -12, 23], [71, 13, 18]]},
    {offset: .29, depth: -373, scale: .86, palette: ['#82977a', '#9eab88'],
      trees: [[-80, 11, 19], [-52, -19, 24], [-20, 6, 26], [17, -25, 23], [46, -16, 20], [82, 19, 23], [108, -5, 17]]},
    {offset: -.09, depth: -550, scale: .69, palette: ['#91a286', '#a6b493'],
      trees: [[-101, -9, 19], [-68, 6, 26], [-33, -26, 21], [3, -11, 25], [36, 12, 23], [65, -17, 20]]},
  ];
  for (const {offset, depth, scale, palette, trees} of groves) {
    for (const [shiftX, shiftZ, radius] of trees) {
      const x = centerX + offset * span + shiftX * scale;
      const z = farZ + depth + shiftZ * scale;
      const size = radius * scale;
      batch.ball(size, size * .72, size * .73, palette[0], x, groundY + size * .64, z);
      batch.ball(size * .69, size * .67, size * .63, palette[1],
        x - size * .2, groundY + size * .96, z + size * .13);
    }
  }

  for (const [offset, depth] of [[.19, -177], [-.07, -310], [-.36, -441], [.34, -511]]) {
    const x = centerX + offset * span;
    const z = farZ + depth;
    for (const [dx, dz, radius] of [[0, 0, 3.8], [7, -8, 2.6], [-11, 4, 3], [18, 7, 2.2]]) {
      batch.ball(radius, 1.8, radius, '#d8c89d', x + dx, groundY + 1.3, z + dz);
    }
  }
}

export function buildStorybookNeighborhood(batch, {farZ}, groundY, {minX, maxX}) {
  const span = Math.max(780, maxX - minX);
  const centerX = (minX + maxX) / 2;
  buildParkTrail(batch, groundY, farZ, centerX, span * .73);
  buildDistantGroves(batch, groundY, farZ, centerX, span);

  for (const [offset, depth, size, autumn] of [
    [-.46, -49, 15, false], [-.28, -73, 13, true], [-.23, -23, 11, false],
    [-.11, -72, 14, false], [-.03, -24, 12, true], [.08, -77, 12, false],
    [.16, -34, 12, false], [.25, -73, 15, true], [.30, -22, 10, false], [.46, -56, 15, false],
  ]) {
    parkTree(batch, groundY, centerX + offset * span, farZ + depth, size, autumn);
  }

  for (const [offset, depth] of [[-.16, -34], [.06, -44], [.21, -38]]) {
    const x = centerX + offset * span;
    const z = farZ + depth;
    for (const leg of [-6, 6]) batch.box(2.2, 4, 2.5, '#7d8172', x + leg, groundY + 2, z);
    batch.box(17, 1.6, 5.4, '#a19274', x, groundY + 4.8, z);
    batch.box(17, 4, 1.3, '#aa987a', x, groundY + 7.2, z - 2.3);
  }

  for (const [offset, depth, width, roof, walls] of [
    [-.36, -58, 83, '#828b7b', '#b5aa94'],
    [.36, -57, 76, '#958582', '#b8ab9c'],
  ]) {
    const x = centerX + offset * span;
    neighborRoof(batch, groundY, x, farZ + depth, width, roof, walls);
    const pathDepth = -depth - 20;
    batch.box(12, .5, pathDepth, '#c1b398', x, groundY + .3, farZ - pathDepth / 2);
  }
}
