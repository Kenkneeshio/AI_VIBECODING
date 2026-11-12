import * as THREE from 'three';
import {buildLaJollaBluffs} from './storybook-la-jolla-bluffs.mjs';
import {buildLaJollaShores} from './storybook-la-jolla-shores.mjs';

const WALK_WIDTH = 26;
const ROAD_WIDTH = 92;
const CURB_WIDTH = 4;
const VERGE_WIDTH = 18;
const BEACH_VIEW_DEPTH = 236;
const SAND_MATERIAL = '#fffbec';
const SHORE_LANDMARKS = Object.freeze({point: -.43, cove: -.29, eastShelf: -.145});
const COVE_OFFSETS = Object.freeze({point: -196, beach: -92, eastShelf: -174});

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
    [.49, -89, '#b46350', '#f6e5bc', .17],
    [.108, -91, '#548e8f', '#e8dfbf', -.19],
  ]) {
    const x = centerX + fraction * span;
    const z = farZ + offsetZ;
    beachUmbrella(batch, x, z, groundY, shade, trim, rotation);
    beachChair(batch, x - 13, z - 15, groundY, trim, rotation - .17);
    beachChair(batch, x + 14, z - 14, groundY, shade, rotation + .12);
    batch.box(8.6, .22, 15, '#e9cda5', x + 23, groundY + .99, z + 7, rotation * 2);
  }
}

function shoreZ(farZ, offset, span) {
  const fraction = offset / span;
  const {point, cove, eastShelf} = SHORE_LANDMARKS;
  const shoulder = fraction < cove ? point : eastShelf;
  const shoulderDepth = fraction < cove ? COVE_OFFSETS.point : COVE_OFFSETS.eastShelf;
  const fromPocket = Math.abs((fraction - cove) / (shoulder - cove));
  if (fromPocket <= 1) {
    const crescent = .5 - .5 * Math.cos(Math.PI * fromPocket);
    return farZ + THREE.MathUtils.lerp(COVE_OFFSETS.beach, shoulderDepth, crescent);
  }
  const distanceFromShores = Math.abs(fraction - .46);
  const broadBay = -167 + 38 * (1 - THREE.MathUtils.smootherstep(distanceFromShores, 0, .66));
  const offshoreDetail = 1.45 * Math.sin(offset * .019) + .8 * Math.cos(offset * .033);
  const blend = THREE.MathUtils.smootherstep(Math.abs(fraction - shoulder), 0, .19);
  return farZ + THREE.MathUtils.lerp(shoulderDepth, broadBay + offshoreDetail, blend);
}

function addTidalShelves(batch, {focusX, span, sampleSand, shoreZ: coast}) {
  const materialColor = '#fff7eb';
  const material = batch.material?.(materialColor);
  if (material) material.vertexColors = true;
  const sections = 32;
  const layers = [
    [-1.18, -.18, '#6f6254'], [-.99, 1.25, '#8d765f'], [-.69, 1.45, '#a98a6a'],
    [-.53, 2.15, '#927457'], [-.29, 2.32, '#bc9a72'], [-.14, 3.42, '#ac8966'],
    [.26, 3.68, '#c8a47c'], [.51, 5.3, '#bb9874'], [.91, -.18, '#bd9e78'],
  ];
  const colors = layers.map(([, , tint]) => new THREE.Color(tint));
  const shade = new THREE.Color();
  for (const [center, west, east, reach, relief, phase] of [
    [SHORE_LANDMARKS.point - .009, .072, .049, 24, 1, .85],
    [SHORE_LANDMARKS.eastShelf + .014, .034, .060, 16, .67, 2.12],
  ]) {
    const positions = [], tints = [], uv = [], faces = [];
    for (let column = 0; column <= sections; column++) {
      const u = column / sections * 2 - 1;
      const offset = span * (center + u * (u < 0 ? west : east));
      const x = focusX + offset;
      const shore = coast(offset);
      const taper = 1 - THREE.MathUtils.smootherstep(Math.abs(u), .34, 1);
      const seams = Math.sin(u * 18.2 + phase) + .62 * Math.cos(u * 41.3 - phase);
      for (const [row, [depth, height]] of layers.entries()) {
        const z = shore + (depth * reach + 1.9 * seams) * Math.max(.04, taper);
        const sand = sampleSand(offset, z);
        const y = sand.height + THREE.MathUtils.lerp(-.2, (height + seams * .28) * relief, taper);
        shade.copy(colors[row]).multiplyScalar(1 + .075 * seams).lerp(sand.color, (1 - taper) ** 1.7);
        positions.push(x, y, z);
        tints.push(shade.r, shade.g, shade.b);
        uv.push(x / 50, z / 50);
        if (!column || !row) continue;
        const current = column * layers.length + row;
        const previous = current - layers.length;
        faces.push(previous - 1, previous, current - 1, current - 1, previous, current);
      }
    }
    const shelf = new THREE.BufferGeometry();
    shelf.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    shelf.setAttribute('color', new THREE.Float32BufferAttribute(tints, 3));
    shelf.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    shelf.setIndex(faces);
    shelf.computeVertexNormals();
    batch.add(shelf, materialColor, 0, 0, 0);
  }
}

const SAND_PROFILE = [
  [-29, .14, 'wet'], [-4, .32, 'wet'], [4, .42, 'damp'], [11, .49, 'damp'],
  [23, .67, 'dry'], [34, .73, 'dry'], [48, .68, 'dry'], [64, .59, 'dry'], [null, .27, 'backshore'],
];
const SAND_TINTS = Object.fromEntries(Object.entries({
  wet:'#bb9976', damp:'#d8b994', dry:'#f2d7a7', backshore:'#d8b78a',
}).map(([name, tint]) => [name, new THREE.Color(tint)]));

function sandRowColor(x, row, result = new THREE.Color()) {
  const striation = .97 + .022 * Math.sin(x * .023 + row * .64) + .017 * Math.sin(x * .054 - row);
  return result.copy(SAND_TINTS[SAND_PROFILE[row][2]]).multiplyScalar(striation);
}

function sandProfileZ(shore, farZ, offset) {
  return offset === null ? farZ + .35 : Math.min(farZ - 1, shore + offset);
}

function sampleSand(x, shore, farZ, depth, groundY) {
  for (let row = 1; row < SAND_PROFILE.length; row++) {
    const [offset, height] = SAND_PROFILE[row];
    const next = sandProfileZ(shore, farZ, offset);
    if (depth > next) continue;
    const [before, base] = SAND_PROFILE[row - 1];
    const prior = sandProfileZ(shore, farZ, before);
    const fraction = THREE.MathUtils.clamp((depth - prior) / Math.max(.001, next - prior), 0, 1);
    return {height:groundY + THREE.MathUtils.lerp(base, height, fraction),
      color:sandRowColor(x, row - 1).lerp(sandRowColor(x, row), fraction)};
  }
  return {height:groundY + SAND_PROFILE.at(-1)[1], color:sandRowColor(x, SAND_PROFILE.length - 1)};
}

function sandSurface(batch, shoreline, farZ, groundY) {
  const position = [], colors = [], faces = [], uv = [];
  const shade = new THREE.Color();
  for (const [index, {x, z}] of shoreline.entries()) {
    for (const [row, [offset, y]] of SAND_PROFILE.entries()) {
      const depth = sandProfileZ(z, farZ, offset);
      sandRowColor(x, row, shade);
      position.push(x, groundY + y, depth);
      colors.push(shade.r, shade.g, shade.b);
      uv.push(x / 80, depth / 80);
      if (index > 0 && row > 0) {
        const current = index * SAND_PROFILE.length + row;
        const previous = current - SAND_PROFILE.length;
        faces.push(previous - 1, previous, current - 1, current - 1, previous, current);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();
  const material = batch.material?.(SAND_MATERIAL);
  if (material) {
    material.vertexColors = true;
    material.onBeforeCompile = shader => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec2 coastSand;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\ncoastSand = position.xz;');
      shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
        varying vec2 coastSand;
        float sandHash(vec2 p) {
          p = fract(p * vec2(.1031, .11369));
          p += dot(p, p.yx + 19.19);
          return fract((p.x + p.y) * p.x);
        }
        float sandCloud(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          f = f*f*(3.0-2.0*f);
          return mix(mix(sandHash(i),sandHash(i+vec2(1.0,0.0)),f.x),
                     mix(sandHash(i+vec2(0.0,1.0)),sandHash(i+vec2(1.0,1.0)),f.x),f.y);
        }`).replace('#include <color_fragment>', `#include <color_fragment>
        float sandPixel = max(length(dFdx(coastSand)), length(dFdy(coastSand)));
        float patches = sandCloud(coastSand * .041);
        float grain = sandCloud(coastSand * .67);
        float rake = sin(coastSand.y * 1.3 + sandCloud(coastSand * .085) * 6.5);
        float fine = 1.0 - smoothstep(1.0, 4.0, sandPixel);
        diffuseColor.rgb *= .95 + .12 * patches + fine * (.15 * (grain - .5) + .025 * rake);`);
    };
  }
  batch.add(geometry, SAND_MATERIAL, 0, 0, 0);
}

export function buildStorybookNeighborhood(batch, {farZ}, groundY, {minX, maxX},
  groundWidth = 6200, groundCenterX = (minX + maxX) / 2, {sandstone} = {}) {
  const focusX = (minX + maxX) / 2;
  const span = Math.max(940, maxX - minX);
  const segments = Math.ceil(groundWidth / 9);
  const left = groundCenterX - groundWidth / 2;
  const edge = offset => shoreZ(farZ, offset, span);
  const shoreline = Array.from({length: segments + 1}, (_, index) => {
    const x = left + groundWidth * index / segments;
    return {x, z: edge(x - focusX)};
  });
  const sandAt = (offset, z) => sampleSand(focusX + offset, edge(offset), farZ, z, groundY);
  const coast = {focusX, span, farZ, groundY, shoreZ:edge, sandstone, sampleSand:sandAt};
  sandSurface(batch, shoreline, farZ, groundY);
  buildLaJollaShores(batch, coast);
  buildLaJollaBluffs(batch, coast);
  addTidalShelves(batch, coast);
  placeBeachSets(batch, focusX, farZ, span, groundY + .7);
  return {
    water: {
      y: groundY + 1.05, farZ: farZ - 1850, shoreline, focusX,
      playSites: {court: focusX + span * .69, castle: focusX + span * .042},
      cove: {x: focusX + span * SHORE_LANDMARKS.cove, z: edge(span * SHORE_LANDMARKS.cove)},
      boatCenters: {cabin: span * .58},
      boatOffshore: {sailboat: 82},
      sandHeight: (x, z) => sandAt(x - focusX, z).height,
    },
    coastalFrames: {
      waterfront: {
        minX: focusX - span * .53, maxX: focusX - span * .065,
        minZ: farZ - 235, maxZ: farZ - 45, minY: groundY, maxY: groundY + 82,
      },
      shores: {
        minX: focusX + span * .068, maxX: focusX + span * .65,
        minZ: farZ - 229, maxZ: farZ - 22, minY: groundY, maxY: groundY + 63,
      },
    },
  };
}
