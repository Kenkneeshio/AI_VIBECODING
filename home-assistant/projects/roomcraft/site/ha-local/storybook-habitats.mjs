import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const HABITAT_TYPES = Object.freeze({
  'pets-fish-aquarium-oak': 'aquarium',
  'pets-lizard-terrarium-walnut': 'terrarium',
});
const TWO_PI = Math.PI * 2;

function model() {
  const root = new THREE.Group();
  const cube = new THREE.BoxGeometry(1, 1, 1);
  const sphere = new THREE.SphereGeometry(1, 12, 8);
  const materials = new Map();
  function material(color) {
    if (!materials.has(color)) {
      materials.set(color, new THREE.MeshStandardMaterial({color, roughness: .83}));
    }
    return materials.get(color);
  }
  function mesh(parent, geometry, surface, x, y, z, sx, sy, sz) {
    const part = new THREE.Mesh(geometry, typeof surface === 'string' ? material(surface) : surface);
    part.position.set(x, y, z);
    part.scale.set(sx, sy, sz);
    parent.add(part);
    return part;
  }
  function batchStaticParts() {
    const byMaterial = new Map();
    for (const part of root.children) {
      if (!part.isMesh || part.material.transparent) continue;
      const parts = byMaterial.get(part.material) ?? [];
      parts.push(part);
      byMaterial.set(part.material, parts);
    }
    for (const [material, parts] of byMaterial) {
      if (parts.length < 2) continue;
      const copies = parts.map(part => {
        part.updateMatrix();
        return part.geometry.toNonIndexed().applyMatrix4(part.matrix);
      });
      const batch = new THREE.Mesh(mergeGeometries(copies), material);
      batch.castShadow = parts.some(part => part.castShadow);
      copies.forEach(copy => copy.dispose());
      root.remove(...parts);
      root.add(batch);
    }
    const usedGeometries = new Set();
    root.traverse(part => { if (part.geometry) usedGeometries.add(part.geometry); });
    for (const geometry of [cube, sphere]) if (!usedGeometries.has(geometry)) geometry.dispose();
  }
  return {
    root, batchStaticParts,
    box: (parent, ...args) => mesh(parent, cube, ...args),
    oval: (parent, ...args) => mesh(parent, sphere, ...args),
  };
}

function shell({root, box}, w, d, aquatic) {
  const wood = aquatic ? '#c29365' : '#875b47';
  const frame = aquatic ? '#304b54' : '#453c42';
  const base = 26;
  const top = aquatic ? 57 : 58;
  const rail = Math.min(2, w * .065, d * .065);
  const glass = new THREE.MeshBasicMaterial({
    color: aquatic ? '#9edcdb' : '#d1eadb',
    transparent: true, opacity: aquatic ? .19 : .13, depthWrite: false, side: THREE.DoubleSide,
  });
  box(root, frame, 0, 1.8, 0, w * .91, 3.6, d * .88);
  box(root, wood, 0, 14, 0, w * .95, 21, d * .93).castShadow = true;
  for (const side of [-1, 1]) {
    const face = aquatic ? '#deb181' : '#aa785d';
    box(root, face, side * w * .232, 14, d * .469, w * .448, 17, d * .021);
    box(root, '#c8a378', side * w * .072, 14.5, d * .492, w * .047, 1.25, d * .016);
  }
  box(root, frame, 0, base, 0, w, 3, d).castShadow = true;
  const mid = (base + top) / 2;
  const height = top - base;
  for (const x of [-w / 2 + rail / 2, w / 2 - rail / 2]) {
    box(root, frame, x, top, 0, rail, 1.8, d);
    box(root, glass, x, mid, 0, rail * .17, height, d - rail * 2);
    for (const z of [-d / 2 + rail / 2, d / 2 - rail / 2]) {
      box(root, frame, x, mid, z, rail, height, rail);
    }
  }
  for (const z of [-d / 2 + rail / 2, d / 2 - rail / 2]) {
    box(root, frame, 0, top, z, w - rail * 2, 1.8, rail);
    box(root, glass, 0, mid, z, w - rail * 2, height, rail * .17);
  }
  // A raised light strip illuminates only the habitat artwork.
  box(root, frame, 0, top + 1.5, -d * .325, w * .77, 2.7, d * .105);
  box(root, aquatic ? '#cde8d3' : '#eed59e', 0, top + .42, -d * .265, w * .72, .7, d * .016);
  return {base, top};
}

function fishModel({box, oval, root}, index, size, bodyColor) {
  const fish = new THREE.Group();
  fish.name = 'fish-' + index;
  root.add(fish);
  oval(fish, bodyColor, 0, 0, 0, size * 1.85, size * 1.08, size * .79);
  oval(fish, '#ffdbb8', size * .07, -size * .44, 0, size * 1.45, size * .63, size * .71);
  const tail = new THREE.Group();
  tail.position.x = -size * 1.42;
  fish.add(tail);
  for (const angle of [-.43, .43]) {
    const fin = oval(tail, bodyColor, -size * .6, Math.sign(angle) * size * .4, 0,
      size * .83, size * .42, size * .21);
    fin.rotation.z = angle;
  }
  for (const side of [-1, 1]) {
    oval(fish, '#273245', size * .99, size * .14, side * size * .61, size * .235, size * .23, size * .12);
    box(fish, '#fff1d9', size * 1.05, size * .21, side * size * .69, size * .11, size * .1, size * .07);
  }
  return {fish, tail};
}

function aquarium(model, w, d, base, top, size) {
  const {root, box, oval} = model;
  const waterline = top - 4;
  const water = new THREE.MeshBasicMaterial({
    color: '#8dd1ce', transparent: true, opacity: .28, depthWrite: false,
  });
  const bubbles = new THREE.MeshBasicMaterial({
    color: '#d7fff4', transparent: true, opacity: .62, depthWrite: false,
  });
  box(root, '#82a9a1', 0, base + 2.15, 0, w * .94, 1.7, d * .9);
  box(root, water, 0, waterline, 0, w * .952, .22, d * .934);
  for (let i = 0; i < 18; i++) {
    const x = (((i * 7) % 19) / 19 - .5) * w * .83;
    const z = (((i * 13) % 19) / 19 - .5) * d * .79;
    oval(root, ['#b9c5ad', '#72958b', '#96ac9f'][i % 3], x, base + 3, z,
      size * (1 + i % 4 * .34), .85, size * 1.15);
  }
  for (const [x, z] of [[-.30, -.22], [-.23, -.27], [.33, -.20], [.37, .02]]) {
    for (let i = 0; i < 4; i++) {
      const side = i - 1.5;
      const leaf = oval(root, ['#4d8971', '#8cab75', '#69a18a', '#5b9664'][i],
        x * w + side * size, base + 3 + (2 + i * 1.6) * Math.min(1.15, size), z * d,
        size * 1.45, (4 + i * 1.12) * Math.min(1.15, size), size * 1.15);
      leaf.rotation.z = side * .22;
    }
  }
  const school = ['#e99660', '#ecc56d', '#bc92b8'].map((color, index) =>
    fishModel(model, index, size * (1.72 - index * .17), color));
  const air = Array.from({length: 5}, (_, index) => {
    const radius = size * (.45 + index % 3 * .18);
    const bubble = oval(root, bubbles, 0, 0, 0, radius, radius, radius);
    bubble.name = 'bubble-' + index;
    return bubble;
  });
  return time => {
    for (const [i, {fish, tail}] of school.entries()) {
      const phase = time * (.43 + i * .06) + i * 2.07 + .5;
      const rx = w * (.24 + i * .036);
      const rz = d * (.17 + i * .038);
      fish.position.set(Math.cos(phase) * rx, base + 10 + i * 3.65 + Math.sin(phase * 1.7) * 2.15,
        Math.sin(phase) * rz);
      fish.rotation.y = -Math.atan2(Math.cos(phase) * rz, -Math.sin(phase) * rx);
      tail.rotation.y = Math.sin(time * 8.6 + i) * .39;
    }
    for (const [i, bubble] of air.entries()) {
      const phase = (time * .30 + i / air.length) % 1;
      bubble.position.set(w * .33 + Math.sin(phase * TWO_PI + i) * size, base + 5 + phase * 20, d * .23);
      bubble.visible = phase > .08 && phase < .94;
    }
  };
}

function terrarium({root, box, oval}, w, d, base, top, size) {
  box(root, '#d4a675', 0, base + 2.15, 0, w * .93, 1.6, d * .9);
  for (let i = 0; i < 16; i++) {
    oval(root, i % 2 ? '#a98467' : '#e1c491', (((i * 11) % 17) / 17 - .5) * w * .81,
      base + 3, (((i * 5) % 17) / 17 - .5) * d * .76, size * 1.5, .66, size);
  }
  oval(root, '#a07c66', -w * .29, base + 4.5, -d * .13, w * .15, 4.7, d * .19);
  oval(root, '#c8a17c', -w * .29, base + 7.1, -d * .17, w * .135, 4.8, d * .154);
  oval(root, '#624b45', -w * .29, base + 4, -d * .011, w * .069, 2.5, d * .063);
  oval(root, '#e8c99b', w * .29, base + 3.6, -d * .16, w * .10, 2.2, d * .16);
  oval(root, '#89ad9e', w * .29, base + 5.1, -d * .16, w * .075, .9, d * .115);
  const log = box(root, '#936b52', w * .11, base + 4, -d * .24, w * .27, 2.6, d * .083);
  log.rotation.y = .25;
  for (let i = 0; i < 5; i++) {
    const leaf = oval(root, i % 2 ? '#829468' : '#a7ad78', -w * .37 + i * size, base + 6 + i % 2,
      d * .26, size * 1.2, 3.7 * Math.min(1.3, size), size);
    leaf.rotation.z = (i - 2) * .24;
  }
  for (let i = 0; i < 7; i++) {
    box(root, '#746462', (i / 6 - .5) * w * .70, top + .5, -d * .386, size * .43, .58, d * .112);
  }
  const gecko = new THREE.Group();
  gecko.name = 'gecko';
  root.add(gecko);
  oval(gecko, '#dca052', 0, 0, 0, 4.2 * size, 2.05 * size, 2.36 * size);
  oval(gecko, '#eab269', 4.6 * size, .7 * size, 0, 2.38 * size, 1.53 * size, 1.9 * size);
  const tails = Array.from({length: 5}, (_, index) => {
    const s = size * (1 - index * .16);
    return oval(gecko, index % 2 ? '#b67950' : '#daa15f', 0, 0, 0, 1.9 * s, 1.13 * s, 1.3 * s);
  });
  const legs = [];
  for (const side of [-1, 1]) {
    oval(gecko, '#463946', 5.15 * size, 1.34 * size, side * 1.26 * size, .49 * size, .44 * size, .31 * size);
    for (const front of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(front * size * 2.1, -.7 * size, side * size * 1.42);
      gecko.add(leg);
      const upper = oval(leg, '#d29861', -.48 * front * size, -.13 * size, side * 1.12 * size,
        .66 * size, .54 * size, 1.43 * size);
      upper.rotation.y = side * front * .28;
      for (const toe of [-1, 0, 1]) {
        oval(leg, '#ecc297', (toe * .42 + .5) * size, -.55 * size, side * 2.28 * size,
          .55 * size, .22 * size, .23 * size);
      }
      legs.push({leg, side, front});
    }
  }
  for (let i = 0; i < 6; i++) {
    oval(gecko, '#96664f', (i % 3 - 1) * 2.2 * size, 1.88 * size,
      (i < 3 ? -.66 : .66) * size, .66 * size, .25 * size, .46 * size);
  }
  return time => {
    const phase = time * .35 + .7;
    const x = Math.cos(phase) * w * .13;
    const z = Math.sin(phase) * d * .09 + d * .139;
    gecko.position.set(x, base + 5.1 + Math.sin(time * 3.6) * .25, z);
    gecko.rotation.y = -Math.atan2(Math.cos(phase) * d * .09, -Math.sin(phase) * w * .13);
    for (const [index, tail] of tails.entries()) {
      const distance = index + 1;
      tail.position.set(-(3.55 + distance * 1.24) * size, -.19 * distance * size,
        Math.sin(time * 1.75 - distance * .55) * distance * size * .32);
    }
    for (const {leg, side, front} of legs) {
      leg.rotation.y = Math.sin(time * 3.6) * side * front * .31;
    }
  };
}

export function makeStorybookHabitat(type, width, depth) {
  if (!Object.hasOwn(HABITAT_TYPES, type)) return null;
  const kind = HABITAT_TYPES[type];
  const miniature = model();
  const aquatic = kind === 'aquarium';
  const {base, top} = shell(miniature, width, depth, aquatic);
  const size = Math.min(width / 110, depth / 63, 2.5);
  const pose = aquatic ? aquarium(miniature, width, depth, base, top, size) :
    terrarium(miniature, width, depth, base, top, size);
  miniature.batchStaticParts();
  pose(0);
  return {
    root: miniature.root, anchorY: top + 3, ambientMotion: true,
    animate(_state, seconds) { pose(Math.max(0, seconds)); },
  };
}
