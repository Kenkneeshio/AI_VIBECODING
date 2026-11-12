import * as THREE from 'three';
import {addStorybookTree} from './storybook-trees.mjs';

const tones = {
  ivory:'#f6dfb8', concrete:'#d5bea1', sandstone:'#be9e7b', shadow:'#796956',
  wood:'#9f7656', teal:'#41666a', seaGlass:'#82a8a1', slate:'#607e7c',
  green:'#7e9661', deepGreen:'#597957', sage:'#a3aa68', gold:'#e1ad60',
  coral:'#ce765e', canvas:'#e9cba3',
};
const LAWN_MATERIAL = '#fcfaf2';

function strut(batch, start, end, width, depth, color) {
  const a = new THREE.Vector3(...start);
  const b = new THREE.Vector3(...end);
  const direction = b.clone().sub(a);
  const geometry = new THREE.BoxGeometry(width, direction.length(), depth);
  geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), direction.normalize()));
  batch.add(geometry, color, ...a.lerp(b, .5));
}

function roof(batch, width, height, depth, color, x, y, z, angle = 0) {
  const canopy = new THREE.CylinderGeometry(.58, 1, height, 4);
  canopy.rotateY(Math.PI / 4);
  canopy.scale(width / Math.SQRT2, 1, depth / Math.SQRT2);
  batch.add(canopy, color, x, y, z, angle);
}

function ribbon(batch, inland, seaward, color) {
  const positions = [];
  const uv = [];
  const faces = [];
  for (const [index, edge] of inland.entries()) {
    positions.push(...edge, ...seaward[index]);
    uv.push(index / (inland.length - 1), 0, index / (inland.length - 1), 1);
    const a = index * 2;
    if (index > 0) faces.push(a - 2, a, a - 1, a, a + 1, a - 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();
  batch.add(geometry, color, 0, 0, 0);
}

function scrippsPier(batch, {focusX, span, groundY, shoreZ}) {
  const offset = -.335 * span;
  const x = focusX + offset;
  const z = shoreZ(offset) + 19;
  const angle = -.72;
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  const project = (localX, y, localZ) => [
    x + localX * cosine + localZ * sine,
    groundY + y,
    z - localX * sine + localZ * cosine,
  ];
  const box = (w, h, d, color, localX, y, localZ) => {
    batch.box(w, h, d, color, ...project(localX, y, localZ), angle);
  };
  const deckY = 17;
  const end = -131;
  const deckCenter = end / 2;
  // The shaded beam below the lighter deck gives its elevation a clear edge.
  box(14.7, 2.5, -end + 3, tones.slate, 0, deckY - 1.3, deckCenter);
  box(15.5, 1.55, -end + 4, tones.concrete, 0, deckY + .66, deckCenter);
  box(24, 2.7, 24, tones.slate, 0, deckY - .75, end + 3);
  box(24.5, 1.3, 24.6, tones.ivory, 0, deckY + .82, end + 3);

  for (let step = 0; step < 8; step++) {
    const riser = 2.12 * (8 - step);
    box(15.2, riser, 3.1, tones.sandstone, 0, riser / 2, 3.4 + step * 3.08);
    box(15.7, .34, 3.1, tones.concrete, 0, riser + .13, 3.4 + step * 3.08);
  }
  for (let i = 0; i < 12; i++) {
    const station = -4.7 - i / 11 * (-end - 16);
    box(16, 1.05, 2.35, tones.concrete, 0, deckY - 2.7, station);
    for (const side of [-1, 1]) {
      strut(batch, project(side * 5.7, -1.8, station), project(side * 4.8, deckY - 3, station),
        1.65, 1.8, tones.concrete);
      box(2, 1.1, 2.18, tones.slate, side * 5.58, 2.3, station);
      box(.8, 4.15, .82, tones.ivory, side * 7.25, deckY + 3.3, station);
    }
    box(14.7, .09, .22, tones.sandstone, 0, deckY + 1.49, station);
  }
  const railLength = -end - 10;
  const railCenter = 1.2 - railLength / 2;
  for (const side of [-1, 1]) {
    box(.75, .62, railLength, tones.ivory, side * 7.25, deckY + 5.2, railCenter);
    box(.42, .36, railLength, tones.concrete, side * 7.25, deckY + 3.6, railCenter);
    box(.64, .51, 23.7, tones.ivory, side * 11.65, deckY + 5.2, end + 3);
    for (const along of [end - 7.6, end + 2.6, end + 13.5]) {
      box(.73, 4.0, .76, tones.concrete, side * 11.65, deckY + 3.2, along);
    }
    strut(batch, project(side * 7.25, deckY + 5.2, 1.2), project(side * 7.25, 7.1, 24.6),
      .62, .56, tones.ivory);
  }

  // Square research shelter and a small boat hoist distinguish the seaward end.
  const lab = end - 2;
  box(13.8, 7.4, 12.2, tones.ivory, 0, deckY + 5.05, lab);
  roof(batch, 16.2, 2.2, 14.6, tones.slate, ...project(0, deckY + 9.2, lab), angle);
  box(16.3, .50, 14.8, tones.teal, 0, deckY + 8.25, lab);
  box(7.25, 2.45, .34, tones.seaGlass, -1.65, deckY + 5.65, lab + 6.17);
  box(.48, 2.5, .40, tones.ivory, -1.65, deckY + 5.65, lab + 6.23);
  box(2.6, 5.2, .36, tones.teal, 4.4, deckY + 3.95, lab + 6.18);
  box(.28, 2.7, 6.6, tones.seaGlass, 7.03, deckY + 5.7, lab - .44);
  box(1.0, 8.8, 1.15, tones.gold, 8.8, deckY + 5.65, end + 10);
  box(5.4, .9, 1.2, tones.gold, 10.65, deckY + 9.75, end + 10);
  box(.3, 3.7, .3, tones.slate, 13.1, deckY + 7.55, end + 10);
}

function seasideBench(batch, x, y, z, angle = 0) {
  const box = (w, h, d, color, dx, dy, dz) => batch.box(w, h, d, color,
    x + dx * Math.cos(angle) + dz * Math.sin(angle), y + dy,
    z - dx * Math.sin(angle) + dz * Math.cos(angle), angle);
  for (const dx of [-6.3, 6.3]) {
    box(1.2, 2.8, 4.8, tones.slate, dx, 1.4, 0);
    box(1, 3.3, .75, tones.slate, dx, 4.0, 2.05);
  }
  for (const dz of [-1.7, 0, 1.7]) box(16.6, .68, 1.54, tones.wood, 0, 2.9, dz);
  for (const dy of [4.28, 5.38]) box(16.6, .85, .7, tones.wood, 0, dy, 2.2);
}

function parkLawn(batch, samples, farZ, groundY) {
  const rows = 6;
  const points = [];
  const uv = [];
  const colors = [];
  const faces = [];
  const edge = new THREE.Color('#a0a367');
  const interior = new THREE.Color('#82a65a');
  const swatch = new THREE.Color();
  for (const [column,[x,pathZ]] of samples.entries()) {
    const t = column / (samples.length - 1);
    const shoreSide = pathZ + 3.3;
    const inlandSide = Math.min(farZ - 2.5 - 5.5 * Math.sin(t * 3 * Math.PI) ** 2,
      shoreSide + 9 + 62 * Math.sin(t * Math.PI) ** .72);
    for (let row = 0; row < rows; row++) {
      const v = row / (rows - 1);
      const y = THREE.MathUtils.lerp(4.66, .61, v) + 1.4 * Math.sin(Math.PI * v) * Math.sin(Math.PI * t);
      points.push(x, groundY + y, THREE.MathUtils.lerp(shoreSide, inlandSide, v));
      uv.push(t, v);
      const grass = Math.sin(v * Math.PI) ** .38;
      const variation = .95 + .07 * Math.sin(t * 20.1 + v * 3.6) + .035 * Math.cos(t * 35.6 + v * 7.4);
      swatch.copy(edge).lerp(interior, grass).multiplyScalar(variation);
      colors.push(swatch.r, swatch.g, swatch.b);
      if (column && row) {
        const a = column * rows + row;
        faces.push(a - rows - 1, a - rows, a - 1, a - 1, a - rows, a);
      }
    }
  }
  const material = batch.material?.(LAWN_MATERIAL);
  if (material) material.vertexColors = true;
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();
  batch.add(geometry, material ? LAWN_MATERIAL : tones.green, 0, 0, 0);
}

function promenade(batch, focusX, span, farZ, groundY) {
  const steps = 36;
  const samples = Array.from({length:steps + 1}, (_, index) => {
    const t = index / steps;
    const bend = Math.sin(Math.PI * t) ** .74 * (35 + 14 * Math.sin(3.2 * Math.PI * t - .8));
    return [focusX + span * (-.65 + t * .60), farZ - 24 - bend];
  });
  const pathTop = groundY + 4.7;
  const band = (offset, y) => samples.map(([x,z]) => [x, y, z + offset]);
  // Broad lawn rises from sand to a public walk that meets the street sidewalk.
  ribbon(batch, band(0, pathTop - .12), band(-12, pathTop), tones.concrete);
  ribbon(batch, band(3.3, pathTop), band(0, pathTop + .07), tones.canvas);
  ribbon(batch, band(-12, pathTop), band(-14, pathTop + .5), tones.ivory);
  ribbon(batch, band(-14, pathTop + .50), band(-14.75, groundY + 1.45), tones.sandstone);
  ribbon(batch, band(-14.75, groundY + 1.45), band(-15.6, groundY + .70), tones.shadow);
  parkLawn(batch, samples, farZ, groundY);
  for (const [i,[x,z]] of samples.entries()) {
    batch.box(.31, .16, 11.15, tones.sandstone, x, pathTop + .04, z - 6.0);
    if (i % 2 || i === steps) continue;
    const [nextX,nextZ] = samples[i + 2];
    // Low rail leaves two open beach accesses between its continuous runs.
    if (i === 4 || i === 28) {
      const stairX = (x + nextX) / 2;
      for (let step = 0; step < 3; step++) {
        const height = 4.2 - step * 1.1;
        batch.box(15, height, 2.3, tones.concrete, stairX, groundY + height / 2, z - 16.6 - step * 2.2);
      }
      continue;
    }
    const lowerRail = [x, pathTop + 2.2, z - 12.55];
    const upperRail = [x, pathTop + 4.5, z - 12.55];
    batch.box(.8, 4.5, .82, tones.teal, x, pathTop + 2.25, z - 12.55);
    strut(batch, lowerRail, [nextX, lowerRail[1], nextZ - 12.55], .47, .50, tones.seaGlass);
    strut(batch, upperRail, [nextX, upperRail[1], nextZ - 12.55], .56, .63, tones.teal);
  }
  for (const sample of [2, 13, 24, 31]) {
    const [x,z] = samples[sample];
    seasideBench(batch, x, pathTop + .08, z - 1.3, (sample - steps / 2) / 145);
  }
  for (const sample of [7, 19, 29]) {
    const [x,z] = samples[sample];
    batch.box(1.14, 13.4, 1.12, tones.teal, x, pathTop + 6.7, z - 1.45);
    batch.ball(1.69, 1.82, 1.69, tones.ivory, x, pathTop + 13.45, z - 1.45);
    roof(batch, 4.15, .85, 4.15, tones.slate, x, pathTop + 15.0, z - 1.45);
  }
}

function lifeguardStation(batch, x, y, z) {
  for (const dx of [-10.8, 10.8]) for (const dz of [-6.6, 6.6]) {
    strut(batch, [x + dx * 1.14,y + .06,z + dz * 1.17], [x + dx,y + 11.1,z + dz],
      2.15, 2.15, tones.slate);
  }
  for (const dx of [-10.8, 10.8]) {
    strut(batch, [x + dx,y + 3.2,z - 6.8], [x + dx,y + 9.8,z + 6.8], 1.16, 1.05, tones.slate);
  }
  batch.box(29.0, 1.22, 22, tones.wood, x, y + 11.2, z);
  batch.box(29.7, .58, 22.5, tones.concrete, x, y + 11.96, z);
  batch.box(20.6, 10.4, 14.0, tones.ivory, x, y + 17.6, z - 1.75);
  batch.box(21.0, 4.95, 14.35, tones.teal, x, y + 19.85, z - 1.75);
  for (const dx of [-6.6, 0, 6.6]) {
    batch.box(5.9, 3.85, .35, tones.seaGlass, x + dx, y + 20.0, z - 8.98);
    batch.box(5.9, 3.85, .35, tones.seaGlass, x + dx, y + 20.0, z + 5.47);
  }
  for (const side of [-1, 1]) {
    batch.box(.35, 3.85, 10.1, tones.seaGlass, x + side * 10.65, y + 20.0, z - 1.75);
    batch.box(.64, .6, 21.5, tones.ivory, x + side * 14.2, y + 15.0, z);
    for (const dz of [-9.6, 0, 9.6]) batch.box(.81, 3.0, .8, tones.slate,
      x + side * 14.2, y + 13.55, z + dz);
  }
  roof(batch, 24.8, 3.1, 18.4, tones.slate, x, y + 24.0, z - 1.75);
  batch.box(24.9, .7, 18.5, tones.ivory, x, y + 22.62, z - 1.75);
  for (let i = 0; i < 7; i++) {
    const yTop = 11.7 - i * 1.6;
    batch.box(7.5, .65, 2.52, tones.wood, x + 5.6, y + yTop, z + 10.9 + i * 2.42);
  }
  for (const dx of [1.6, 9.6]) {
    strut(batch, [x + dx,y + 14.7,z + 10.6], [x + dx,y + 3.9,z + 27.0], .7, .66, tones.slate);
    strut(batch, [x + dx,y + 11.25,z + 10.6], [x + dx,y + .45,z + 27.0], .85, .85, tones.wood);
  }
  const ring = new THREE.TorusGeometry(2.0, .39, 5, 16);
  batch.add(ring, tones.coral, x - 4.6, y + 15.15, z + 5.63);
  batch.box(.48, 8.7, .48, tones.ivory, x - 9.4, y + 28.0, z - 7.5);
  batch.box(5.2, 2.45, .30, tones.coral, x - 6.85, y + 30.7, z - 7.48, -.18);
}

function seashorePalm(batch, x, y, z, height, bearing) {
  const points = Array.from({length:6}, (_, i) => {
    const t = i / 5;
    return [x + Math.cos(bearing) * 4.4 * t * t, y + height * t,
      z + Math.sin(bearing) * 4.4 * t * t];
  });
  for (const [i, point] of points.slice(1).entries()) {
    const start = points[i];
    const a = new THREE.Vector3(...start);
    const b = new THREE.Vector3(...point);
    const width = 1.83 - .15 * i;
    const trunk = new THREE.CylinderGeometry(width - .17, width, a.distanceTo(b) + .16, 7);
    trunk.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0), b.clone().sub(a).normalize()));
    batch.add(trunk, i % 2 ? tones.wood : tones.sandstone, ...a.lerp(b,.5));
  }
  const top = points.at(-1);
  batch.ball(3.45, 1.95, 3.45, tones.deepGreen, top[0], top[1] - .7, top[2]);
  for (let i = 0; i < 10; i++) {
    const angle = bearing + i * 2.4;
    const length = 11 + 5 * (.5 + .5 * Math.sin(i * 2.71 + bearing));
    const lean = i % 3 ? -3.5 : 1.5;
    const outline = [0,0,0,-1.25,1.7,length*.24,0,2.1,length*.28,1.5,1.56,length*.24,
      -2.6,.65,length*.60,0,1.6,length*.64,2.6,.70,length*.61,-1.3,lean*.64,length*.85,
      1.3,lean*.64,length*.85,0,lean,length];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(outline, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(
      outline.filter((_, n) => n % 3 !== 1).map((v,n) => n % 2 ? v / length : .5 + v / 6), 2));
    geometry.setIndex([0,1,2,0,2,3,1,4,5,1,5,2,2,5,6,2,6,3,4,7,5,5,7,9,5,9,8,5,8,6]);
    geometry.computeVertexNormals();
    batch.add(geometry, i % 3 === 1 ? tones.sage : i % 3 === 2 ? tones.green : tones.deepGreen, ...top, angle);
  }
}

function lowPlanting(batch, x, y, z, scale, phase) {
  for (let i = 0; i < 8; i++) {
    const angle = i * 2.4 + phase;
    const spread = (.48 + i * .19) * scale;
    const px = x + Math.cos(angle) * spread;
    const pz = z + Math.sin(angle) * spread;
    batch.ball(scale * .86, scale * (.52 - i * .029), scale * .57,
      i % 3 ? tones.green : tones.deepGreen, px, y + scale * .31, pz);
    if (i % 3 === 2) batch.ball(.68, .43, .68, tones.gold, px + .6, y + scale * .66, pz);
  }
}

function coastalAgave(batch, x, y, z, scale, bearing) {
  for (let i = 0; i < 9; i++) {
    const length = scale * (.78 + .16 * (i % 3));
    const tipHeight = scale * (.46 + .14 * (i % 4));
    const leaf = new THREE.BufferGeometry();
    leaf.setAttribute('position', new THREE.Float32BufferAttribute([
      0,0,0, -1.0,.75,length * .31, 0,1.30,length * .35, 1.0,.75,length * .31, 0,tipHeight,length,
    ], 3));
    leaf.setAttribute('uv', new THREE.Float32BufferAttribute([.5,0,0,.32,.5,.35,1,.32,.5,1], 2));
    leaf.setIndex([0,1,2,0,2,3,1,4,2,2,4,3]);
    leaf.computeVertexNormals();
    batch.add(leaf, i % 3 ? tones.seaGlass : tones.slate, x, y, z, bearing + i * 2.3999);
  }
}

function parkPlayground(batch, x, y, z) {
  batch.ball(35, .8, 12.8, tones.canvas, x, y - .22, z);
  const landing = 6.9;
  for (const dx of [-18, -9]) for (const dz of [-3.7, 3.7]) {
    batch.box(1.05, 13.7, 1.05, tones.teal, x + dx, y + 6.85, z + dz);
  }
  batch.box(10.25, 1.0, 8.6, tones.wood, x - 13.5, y + landing, z);
  roof(batch, 14.5, 4.6, 12.8, tones.coral, x - 13.5, y + 13.7, z);
  strut(batch, [x - 13.5,y + landing,z + 3.9], [x - 13.5,y + .78,z + 10.8], 4.4, .9, tones.gold);
  for (const dx of [-2.25,2.25]) {
    strut(batch, [x - 13.5 + dx,y + landing + .78,z + 3.9], [x - 13.5 + dx,y + 1.58,z + 10.8],
      .58, .62, tones.coral);
  }
  for (let step = 0; step < 4; step++) {
    batch.box(4.8, .62, 1.1, tones.wood, x - 13.5, y + 2.0 + 1.3 * step, z - 8.3 + step * 1.17);
  }
  for (const dx of [3.9, 26.5]) for (const side of [-1, 1]) {
    strut(batch, [x + dx,y + .1,z + side * 5.5], [x + dx,y + 11.5,z], 1.03, 1.08, tones.teal);
  }
  batch.box(25.0, 1.21, 1.2, tones.teal, x + 15.2, y + 11.55, z);
  for (const dx of [10.2, 19.3]) {
    for (const side of [-1, 1]) batch.box(.22, 8.75, .23, tones.shadow,
      x + dx + side * 1.66, y + 6.91, z);
    batch.box(4.15, .68, 2.5, tones.coral, x + dx, y + 2.58, z);
  }
}

/** Landmarks in authored plan coordinates. All parts share scene lighting and the world camera. */
export function buildLaJollaShores(batch, site) {
  const {focusX, span, farZ, groundY, shoreZ} = site;
  promenade(batch, focusX, span, farZ, groundY);
  scrippsPier(batch, site);
  const stationOffset = -.175 * span;
  lifeguardStation(batch, focusX + stationOffset, groundY + .52,
    Math.max(farZ - 93, shoreZ(stationOffset) + 30));
  parkPlayground(batch, focusX - span * .42, groundY + 3.55, farZ - 27.0);
  for (const [kind, fraction, depth, height, seed] of [
    ['shore-pine', -.592, 28, 75, 6195], ['shore-pine', -.358, 32, 65, 7204],
    ['shore-pine', -.128, 26, 69, 1939], ['cypress', -.561, 25, 69, 6204],
    ['cypress', -.174, 31, 58, 2345], ['cypress', -.104, 18, 53, 6179],
  ]) {
    addStorybookTree(batch, {kind, x:focusX + fraction * span,
      z:farZ - depth, groundY:groundY + 2.7, height, seed});
  }
  for (const [f,z,h,bearing] of [
    [-.548, 13.2, 49, .36], [-.325, 16.0, 41, 2.06], [-.271, 15.6, 43, 1.20],
    [-.238, 25.5, 53, 2.30], [-.084, 16.0, 39, .45],
  ]) seashorePalm(batch, focusX + f * span, groundY + 2.7, farZ - z, h, bearing);
  for (const [f,z,size,phase] of [
    [-.587, 18, 4.2, 2.2], [-.548, 25, 3.3, 3.4], [-.476, 17, 3.7, .9], [-.369, 12, 5.2, 2.7],
    [-.322, 20, 4.5, 1.3], [-.271, 25, 4.1, 4.7], [-.240, 16, 3.1, .4], [-.215, 14, 3.1, 2.9],
    [-.137, 17, 3.8, 4.2], [-.112, 22, 4.2, 2.9], [-.089, 16, 3.1, 3.4],
  ]) lowPlanting(batch, focusX + f * span, groundY + 2.75, farZ - z, size, phase);
  for (const [f,z,size,phase] of [[-.60,16,8.8,.4],[-.48,31,7.4,2.0],[-.34,27,9.0,4.6],[-.25,14,7.7,2.4],[-.15,24,8.5,5.3],[-.075,15,8.3,1.3]]) {
    coastalAgave(batch, focusX + f * span, groundY + 2.6, farZ - z, size, phase);
  }
}
