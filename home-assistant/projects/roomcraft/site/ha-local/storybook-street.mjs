import * as THREE from 'three';
import {buildLaJollaBluffs} from './storybook-la-jolla-bluffs.mjs';
import {buildLaJollaShores} from './storybook-la-jolla-shores.mjs';
import {addCoastalPlanting} from './storybook-coastal-planting.mjs';

const WALK_WIDTH = 26;
const ROAD_WIDTH = 92;
const CURB_WIDTH = 4;
const VERGE_WIDTH = 18;
const MAX_LANDWARD_SHIFT = 34;
const BEACH_VIEW_DEPTH = 252;
const SAND_MATERIAL = '#fffbec';
const SHORE_LANDMARKS = Object.freeze({point: -.43, cove: -.29, eastShelf: -.145});
const COVE_OFFSETS = Object.freeze({point: -196, beach: -92, eastShelf: -174});
const OUTER_HEADLANDS = [
  [-2.3, .58, -72], [-1.49, .33, 52], [-.94, .28, -84],
  [1.14, .35, -79], [1.39, .43, -35], [1.91, .37, 56], [2.64, .58, -51],
];
const STRAIGHT_STREET = (x, z) => ({x, z, yaw: 0});

function streetProfile(centerX, span, curveStrength) {
  // A broad bend behind the Cove leads into a shallow reverse bend at Shores.
  // Keep the verge and all travel lanes on the same profile and tangent.
  const bends = [[-1.13, .38, -76], [-.36, .275, 33], [.255, .24, -13], [.68, .36, 13], [1.58, .47, -51]];
  return (x, baselineZ) => {
    const u = (x - centerX) / span;
    let offset = 0;
    let slope = 0;
    for (const [center, spread, amplitude] of bends) {
      const d = (u - center) / spread;
      const lift = amplitude * Math.exp(-d * d);
      offset += lift;
      slope -= 2 * d * lift / (spread * span);
    }
    return {x, z: baselineZ + offset * curveStrength, yaw: -Math.atan(slope * curveStrength)};
  };
}

export function storybookStreetBounds(plan, terrain) {
  const {minZ, maxZ} = plan.houseBounds;
  const shrubs = minZ - (maxZ - minZ) * .11 - 46;
  const path = plan.editableStructure ? Infinity : minZ - 146;
  // Reserve the full landward bend before positioning the street against the
  // saved footprint, which can include a garage or stairs north of the house.
  const curveStrength = terrain?.road === 'straight' ? 0 : terrain?.road === 'winding' ? 1.43 : 1;
  const nearZ = Math.min(plan.bounds.minZ - MAX_LANDWARD_SHIFT * curveStrength, shrubs, path)
    - VERGE_WIDTH - (terrain?.roadSetback ?? 0);
  const farZ = nearZ - 2 * WALK_WIDTH - ROAD_WIDTH;
  const {minX, maxX} = plan.houseBounds;
  const sample = streetProfile((minX + maxX) / 2, Math.max(940, maxX - minX), curveStrength);
  return {nearZ, farZ, sceneryMinZ: farZ - BEACH_VIEW_DEPTH, sample};
}

function streetRibbon(batch, sample, xs, z0, z1, y0, y1, color, reverse = false) {
  const positions = [], uv = [], indices = [];
  for (let column = 0; column < xs.length; column++) {
    const x = xs[column];
    const z = sample(x, z0).z;
    positions.push(x, y0, z, x, y1, z + (z1 - z0));
    uv.push(x / 80, z / 80, x / 80, (z + z1 - z0) / 80);
    if (column === 0) continue;
    const i = 2 * (column - 1);
    if (reverse) indices.push(i, i + 2, i + 1, i + 2, i + 3, i + 1);
    else indices.push(i, i + 1, i + 2, i + 2, i + 1, i + 3);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  batch.add(geometry, color, 0, 0, 0);
}

function coastalColumns(width, renderWidth, centerX) {
  const sections = Math.ceil(width / 9);
  const left = centerX - width / 2;
  const xs = Array.from({length: sections + 1}, (_, i) => left + i * width / sections);
  // The distant wings need fewer samples. Keep the core spacing for dunes and paths.
  const wing = Math.max(0, (renderWidth - width) / 2);
  const wingSections = Math.ceil(wing / 48);
  const edges = Array.from({length:wingSections}, (_, i) => (i + 1) * wing / wingSections);
  return [
    ...edges.map(length => left - length).reverse(),
    ...xs,
    ...edges.map(length => left + width + length),
  ];
}

export function buildStorybookStreet(batch, {nearZ, farZ, sample = STRAIGHT_STREET}, groundY, width, centerX,
  {renderWidth = width, drivewayCuts = []} = {}) {
  const roadNorth = farZ + WALK_WIDTH;
  const roadSouth = nearZ - WALK_WIDTH;
  const roadCenter = (roadNorth + roadSouth) / 2;
  const xs = coastalColumns(width, renderWidth, centerX);
  const left = xs[0], right = xs.at(-1);
  const cutColumns = columns => {
    let spans=[[columns[0],columns.at(-1)]];
    for(const cut of drivewayCuts) {
      if(!Number.isFinite(cut.minX)||!Number.isFinite(cut.maxX)||cut.maxX<=cut.minX)continue;
      spans=spans.flatMap(([a,b])=>cut.maxX<=a||cut.minX>=b?[[a,b]]:
        [[a,Math.min(b,cut.minX)],[Math.max(a,cut.maxX),b]].filter(([from,to])=>to>from));
    }
    return spans.map(([a,b])=>[a,...columns.filter(x=>x>a&&x<b),b]);
  };
  const strip = (start, end, height, color, columns = xs, cut = false) => {
    for(const run of cut?cutColumns(columns):[columns])
      streetRibbon(batch, sample, run, start, end, groundY + height, groundY + height, color);
  };
  const wall = (at, bottom, top, color, reverse, cut = false) => {
    for(const run of cut?cutColumns(xs):[xs])
      streetRibbon(batch, sample, run, at, at, groundY + bottom, groundY + top, color, reverse);
  };

  strip(roadNorth, roadSouth, 1.2, '#73767c');
  strip(roadNorth, roadNorth + 3.4, 1.4, '#656b71');
  strip(roadSouth - 3.4, roadSouth, 1.4, '#656b71');

  for (const [start, end, curbStart, pavingStart] of [
    [farZ, roadNorth, roadNorth - CURB_WIDTH, farZ],
    [roadSouth, nearZ, roadSouth, roadSouth + CURB_WIDTH],
  ]) {
    const pavingWidth = WALK_WIDTH - CURB_WIDTH;
    const isNorth = start === farZ;
    strip(pavingStart, pavingStart + pavingWidth, 5, '#c0b6a7', xs, !isNorth);
    strip(curbStart, curbStart + CURB_WIDTH, 6.2, '#d0c3b0', xs, !isNorth);
    wall(isNorth ? start : end, 0, 5, '#a99e8e', !isNorth, !isNorth);
    wall(isNorth ? curbStart : curbStart + CURB_WIDTH, 5, 6.2, '#b1a797', !isNorth, !isNorth);
    wall(isNorth ? end : start, 1.2, 6.2, '#a99e8e', isNorth, !isNorth);
    for (let x = left + 36; x < right; x += 72) {
      strip(pavingStart, pavingStart + pavingWidth, 5.12, '#a69c91', [x - .58, x + .58], !isNorth);
    }
  }

  for (let x = left + 36; x + 17 < right; x += 72) {
    strip(roadCenter - 1.4, roadCenter + 1.4, 1.34, '#e9ce91',
      [x - 17, x - 8.5, x, x + 8.5, x + 17]);
  }
  return {centerX, width, sample, surfaceY: groundY + 1.24,
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

function placeBeachSets(batch, centerX, farZ, span, sandHeight, shore, roadEdgeAt) {
  for (const [fraction, offsetZ, shade, trim, rotation] of [
    [.49, -89, '#b46350', '#f6e5bc', .17],
    [.108, -91, '#548e8f', '#e8dfbf', -.19],
  ]) {
    const x = centerX + fraction * span;
    const z = Math.min(roadEdgeAt(x) - 23, Math.max(farZ + offsetZ, shore(x - centerX) + 30));
    beachUmbrella(batch, x, z, sandHeight(x, z), shade, trim, rotation);
    beachChair(batch, x - 13, z - 15, sandHeight(x - 13, z - 15), trim, rotation - .17);
    beachChair(batch, x + 14, z - 14, sandHeight(x + 14, z - 14), shade, rotation + .12);
    batch.box(8.6, .22, 15, '#e9cda5', x + 23, sandHeight(x + 23, z + 7) + .15, z + 7, rotation * 2);
  }
}

function shoreZ(farZ, offset, span, terrain) {
  const width = (terrain?.beachWidth ?? 100) / 100;
  const outsideStrength = terrain?.coast === 'gentle' ? .28 : terrain?.coast === 'rugged' ? 1.43 : 1;
  const fraction = offset / span;
  const {point, cove, eastShelf} = SHORE_LANDMARKS;
  const shoulder = fraction < cove ? point : eastShelf;
  const shoulderDepth = fraction < cove ? COVE_OFFSETS.point : COVE_OFFSETS.eastShelf;
  const fromPocket = Math.abs((fraction - cove) / (shoulder - cove));
  if (fromPocket <= 1) {
    const crescent = .5 - .5 * Math.cos(Math.PI * fromPocket);
    return farZ + THREE.MathUtils.lerp(COVE_OFFSETS.beach, shoulderDepth, crescent) * width;
  }
  const distanceFromShores = Math.abs(fraction - .46);
  const broadBay = -167 + 38 * (1 - THREE.MathUtils.smootherstep(distanceFromShores, 0, .66));
  const offshoreDetail = 1.45 * Math.sin(offset * .019) + .8 * Math.cos(offset * .033);
  const blend = THREE.MathUtils.smootherstep(Math.abs(fraction - shoulder), 0, .19);
  let outside = 0;
  for (const [center, spread, projection] of OUTER_HEADLANDS) {
    const distance = (fraction - center) / spread;
    outside += projection * Math.exp(-distance * distance);
  }
  const beyondLandmarks = 1 - THREE.MathUtils.smootherstep(fraction, -.67, -.45)
    + THREE.MathUtils.smootherstep(fraction, .72, 1.03);
  const distantBend = Math.sin(fraction * 1.9 + .7) * 19 * THREE.MathUtils.smootherstep(Math.abs(fraction), 2.1, 3.9);
  return farZ + (THREE.MathUtils.lerp(shoulderDepth, broadBay + offshoreDetail, blend)
    + beyondLandmarks * (outside + distantBend) * outsideStrength) * width;
}

function addTidalShelves(batch, {focusX, span, sampleSand, shoreZ: coast}, showCove) {
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
    [-.94, .13, .19, 34, .77, 4.14],
    ...(showCove ? [
      [SHORE_LANDMARKS.point - .009, .072, .049, 24, 1, .85],
      [SHORE_LANDMARKS.eastShelf + .014, .034, .060, 16, .67, 2.12],
    ] : []),
    [1.32, .09, .11, 16, .37, 2.93],
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
  [23, .67, 'dry'], [34, .73, 'dry'], [48, .68, 'dry'], [64, .59, 'dry'],
  [.19, .60, 'backshore'], [.39, .66, 'backshore'], [.58, .88, 'scrub'],
  [.75, 1.15, 'scrub'], [.9, 1.46, 'verge'], [1, 1.65, 'verge'],
];
const DRY_SAND_END = 7;
const DUNE_RISES = [
  {along: -.91, spread: .104, height: 15, crest: .46},
  {along: -.72, spread: .12, height: 17, crest: .57},
  {along: -.57, spread: .065, height: 10, crest: .66},
  {along: .77, spread: .074, height: 9, crest: .62},
  {along: .92, spread: .12, height: 17, crest: .45},
  {along: 1.09, spread: .09, height: 12, crest: .63},
];
const SAND_TINTS = Object.fromEntries(Object.entries({
  wet:'#bb9976', damp:'#d8b994', dry:'#f2d7a7', backshore:'#d9bd93', scrub:'#c8b48a', verge:'#c5b28d',
}).map(([name, tint]) => [name, new THREE.Color(tint)]));
const DUNE_GREEN = new THREE.Color('#a5af79');

function backshoreVariation(x) {
  return .57 * Math.sin(x * .038) + .31 * Math.cos(x * .016 + 1.9) + .12 * Math.sin(x * .081 - .8);
}

function sandRowHeight(x, along, row, relief) {
  const [cross, height] = SAND_PROFILE[row];
  if (row <= DRY_SAND_END || cross === 1) return height;
  let rise = 0;
  for (const dune of DUNE_RISES) {
    const lateral = (along - dune.along) / dune.spread;
    const crest = dune.crest + backshoreVariation(x) * .09;
    const fromCrest = (cross - crest) / .32;
    rise += dune.height * Math.exp(-lateral * lateral - fromCrest * fromCrest);
  }
  return height + rise * Math.sin(Math.PI * cross) ** 1.7 * relief;
}

function sandRowColor(x, row, height, result = new THREE.Color()) {
  const striation = .97 + .022 * Math.sin(x * .023 + row * .64) + .017 * Math.sin(x * .054 - row);
  result.copy(SAND_TINTS[SAND_PROFILE[row][2]]);
  if (row > DRY_SAND_END) {
    const scrub = THREE.MathUtils.smoothstep(backshoreVariation(x), -.67, .72);
    const [cross] = SAND_PROFILE[row];
    const rootCover = THREE.MathUtils.smoothstep(height, 2, 11);
    result.lerp(DUNE_GREEN, Math.min(.9, cross * .76 * scrub + rootCover * (.28 + scrub * .38)));
  }
  return result.multiplyScalar(striation);
}

function sandProfileZ(x, shore, roadside, row) {
  const [offset] = SAND_PROFILE[row];
  if (row <= DRY_SAND_END) return Math.min(roadside - 16, shore + offset);
  const dryEnd = Math.min(roadside - 16, shore + SAND_PROFILE[DRY_SAND_END][0]);
  const irregularity = .17 * Math.sin(Math.PI * offset) * backshoreVariation(x);
  return THREE.MathUtils.lerp(dryEnd, roadside + .35, offset + irregularity);
}

const PAINTED_COVER = Object.fromEntries(Object.entries({
  grass:'#a8b47e', sand:'#eed0a0', soil:'#a98a69', stone:'#b0a89a', scrub:'#899a72',
}).map(([cover, tint]) => [cover, new THREE.Color(tint)]));

function sandVertex(x, along, shore, roadside, row, relief, brushAt) {
  const depth = sandProfileZ(x, shore, roadside, row);
  const height = sandRowHeight(x, along, row, relief);
  const color = sandRowColor(x, row, height);
  const sample = brushAt(x, depth);
  if (!sample) return {depth, height, color};
  const pigment = new THREE.Color(0,0,0);
  let coverage = 0;
  for (const [cover, weight] of Object.entries(sample.covers)) {
    const tint = PAINTED_COVER[cover];
    pigment.r += tint.r * weight;
    pigment.g += tint.g * weight;
    pigment.b += tint.b * weight;
    coverage += weight;
  }
  if (coverage > 0) color.lerp(pigment.multiplyScalar(1 / coverage), coverage);
  return {depth, height:Math.max(.12, height + sample.height), color};
}

function sampleSand(x, along, shore, roadside, depth, groundY, relief, brushAt) {
  for (let row = 1; row < SAND_PROFILE.length; row++) {
    if (depth > sandProfileZ(x, shore, roadside, row)) continue;
    const a = sandVertex(x, along, shore, roadside, row - 1, relief, brushAt);
    const b = sandVertex(x, along, shore, roadside, row, relief, brushAt);
    const fraction = THREE.MathUtils.clamp((depth - a.depth) / Math.max(.001, b.depth - a.depth), 0, 1);
    return {height:groundY + THREE.MathUtils.lerp(a.height, b.height, fraction),
      color:a.color.lerp(b.color, fraction)};
  }
  const last = sandVertex(x, along, shore, roadside, SAND_PROFILE.length - 1, relief, brushAt);
  return {height:groundY + last.height, color:last.color};
}

function sandSurface(batch, shoreline, roadEdgeAt, groundY, focusX, span, relief, brushAt) {
  const position = [], colors = [], faces = [], uv = [];
  for (const [index, {x, z}] of shoreline.entries()) {
    const roadside = roadEdgeAt(x);
    for (const [row] of SAND_PROFILE.entries()) {
      const {depth, height, color} = sandVertex(x, (x - focusX) / span, z, roadside, row, relief, brushAt);
      position.push(x, groundY + height, depth);
      colors.push(color.r, color.g, color.b);
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

function buildDunePlantings(batch, {focusX, span, shoreZ: edge, roadEdgeAt, sampleSand: sandAt}, density) {
  const plantingSites = [
    [-.95, .53, 8], [-.83, .7, 6], [-.735, .49, 9], [-.64, .69, 7], [-.57, .52, 6],
    [-.80, .37, 7], [-.70, .62, 8], [-.605, .49, 6],
    [.785, .68, 6], [.885, .46, 9], [.987, .64, 7], [1.11, .5, 8],
    [.84, .48, 7], [.945, .67, 8], [1.02, .41, 7],
  ];
  const kinds = ['sage', 'grass', 'stone', 'iceplant', 'grass', 'sage', 'yucca', 'iceplant', 'stone'];
  for (const [site, [along, crest, count]] of plantingSites.entries()) {
    for (let i = 0; i < Math.round(count * density); i++) {
      const phase = site * 1.19 + i * 2.399963;
      const spread = Math.sqrt(i / Math.max(count, Math.round(count * density)));
      const offset = along * span + Math.cos(phase) * spread * 40;
      const x = focusX + offset;
      const curb = roadEdgeAt(x);
      const dry = Math.min(curb - 16, edge(offset) + SAND_PROFILE[DRY_SAND_END][0]);
      const z = THREE.MathUtils.lerp(dry, curb, crest + Math.sin(phase) * spread * .20);
      const size = 6 + (1 + Math.cos(phase * 2.61)) * 6.6;
      if (z + size + 4 > curb || z - size < dry + 2) continue;
      addCoastalPlanting(batch, kinds[i % kinds.length], x, sandAt(offset, z).height, z, size, phase);
    }
  }
}

export function buildStorybookNeighborhood(batch, {farZ, sample = STRAIGHT_STREET}, groundY, {minX, maxX},
  groundWidth = 6200, groundCenterX = (minX + maxX) / 2,
  {sandstone, renderWidth = groundWidth, terrain, terrainSampler} = {}) {
  const focusX = (minX + maxX) / 2;
  const span = Math.max(940, maxX - minX);
  const roadEdgeAt = x => sample(x, farZ).z;
  const edge = offset => Math.min(shoreZ(farZ, offset, span, terrain), roadEdgeAt(focusX + offset) - 65);
  const relief = (terrain?.hillHeight ?? 100) / 100;
  const density = (terrain?.planting ?? 100) / 100;
  function sandEditWeight(x, z) {
    const offset = x - focusX, along = offset / span;
    const outside = 1 - THREE.MathUtils.smoothstep(along, -.73, -.57)
      + THREE.MathUtils.smoothstep(along, .76, .89);
    if (outside === 0 || Math.abs(x - groundCenterX) > groundWidth / 2 - 64) return 0;
    return outside * THREE.MathUtils.smootherstep(z - edge(offset), 68, 88)
      * THREE.MathUtils.smootherstep(roadEdgeAt(x) - z, 10, 24);
  }
  function brushAt(x, z) {
    const weight = terrainSampler && sandEditWeight(x, z);
    if (!weight) return null;
    const {height, covers} = terrainSampler(x, z);
    return {height:height * weight, covers:Object.fromEntries(Object.entries(covers)
      .map(([cover, amount]) => [cover, amount * weight]))};
  }
  const shorePoints = width => coastalColumns(groundWidth, width, groundCenterX).map(x => ({x, z:edge(x - focusX)}));
  const shoreline = shorePoints(groundWidth);
  const renderShoreline = renderWidth > groundWidth ? shorePoints(renderWidth) : shoreline;
  const sandAt = (offset, z) => {
    const x = focusX + offset;
    return sampleSand(x, offset / span, edge(offset), roadEdgeAt(x), z, groundY, relief, brushAt);
  };
  const sandHeight = (x, z) => sandAt(x - focusX, z).height;
  const coast = {focusX, span, farZ, groundY, shoreZ:edge, roadEdgeAt, sandstone, sampleSand:sandAt};
  sandSurface(batch, renderShoreline, roadEdgeAt, groundY, focusX, span, relief, brushAt);
  if (terrain?.shores !== false) buildLaJollaShores(batch, coast);
  if (terrain?.cove !== false) buildLaJollaBluffs(batch, coast);
  addTidalShelves(batch, coast, terrain?.cove !== false);
  buildDunePlantings(batch, coast, density);
  if (terrain?.shores !== false) placeBeachSets(batch, focusX, farZ, span, sandHeight, edge, roadEdgeAt);
  return {
    canEditTerrain:(x,z) => sandEditWeight(x,z) > .20,
    water: {
      y: groundY + 1.05, farZ: farZ - 1850, renderFarZ:farZ - 16000, shoreline, renderShoreline, focusX,
      playSites: {court: focusX + span * .69, castle: focusX + span * .042},
      cove: {x: focusX + span * SHORE_LANDMARKS.cove, z: edge(span * SHORE_LANDMARKS.cove)},
      boatCenters: {cabin: span * .58},
      boatOffshore: {sailboat: 82},
      sandHeight,
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
