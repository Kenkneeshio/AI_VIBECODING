import * as THREE from 'three';
import {normalizeWorldLifeSettings} from './storybook-world-life-settings.mjs';

const {PI, sin, cos} = Math;
const TAU = PI * 2;
const UP = new THREE.Vector3(0, 1, 0);
const BARK = ['#86684f', '#9a7c5b', '#735844'];
const PALM_BARK = ['#92745a', '#ac8f69', '#785c49'];
const PALM = ['#537759', '#6b8a55', '#849a58', '#a0ab63'];
const CYPRESS = ['#3e6251', '#4d7056', '#61815d', '#789365'];
const PINE = ['#4a6653', '#567552', '#6b8659', '#819863'];
const OAK = ['#517553', '#64845a', '#799660', '#98a869'];
const OLIVE = ['#617d69', '#72917a', '#8ea17e', '#a7b08a'];
const JACARANDA = ['#62785f', '#789170', '#9479a5', '#aa8db4', '#c0a6c3'];
const WIND_LOOP_SECONDS = 240;
const WINDY = new Set(['windy', 'windy-variant']);

export const STORYBOOK_TREE_SPECIES = Object.freeze({
  'fan-palm': Object.freeze({height: 113, radius: .46}),
  'date-palm': Object.freeze({height: 134, radius: .49}),
  cypress: Object.freeze({height: 132, radius: .21}),
  'shore-pine': Object.freeze({height: 109, radius: .33}),
  'coast-oak': Object.freeze({height: 103, radius: .43}),
  olive: Object.freeze({height: 94, radius: .46}),
  jacaranda: Object.freeze({height: 100, radius: .43}),
});

function seeded(seed) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function polar(angle, distance, y) {
  return [cos(angle) * distance, y, sin(angle) * distance];
}

function shifted(point, [x, y, z]) {
  return [point[0] + x, point[1] + y, point[2] + z];
}

function treeBrush(batch, x, y, z, random) {
  const draw = (geometry, color) => batch.add(geometry, color, x, y, z);
  function branch(color, from, to, bottom, top, sides = 7) {
    const start = new THREE.Vector3(...from);
    const end = new THREE.Vector3(...to);
    const axis = end.clone().sub(start);
    const turn = new THREE.Quaternion().setFromUnitVectors(UP, axis.clone().normalize());
    const geometry = new THREE.CylinderGeometry(top, bottom, axis.length(), sides);
    const midpoint = start.lerp(end, .5);
    draw(geometry.applyQuaternion(turn).translate(midpoint.x, midpoint.y, midpoint.z), color);
  }
  function crown(color, center, scale, roughness = .13, detail = 6) {
    const geometry = new THREE.SphereGeometry(1, 9, detail);
    const position = geometry.getAttribute('position');
    const phase = random() * TAU;
    for (let i = 0; i < position.count; i++) {
      const px = position.getX(i);
      const py = position.getY(i);
      const pz = position.getZ(i);
      const ripple = 1 + roughness * (sin(px * 5.8 + py * 3.2 + pz * 2.1 + phase) * .7
        + cos(pz * 7.8 - py * 2.2 + phase) * .3);
      position.setXYZ(i, px * ripple * scale[0], py * ripple * scale[1], pz * ripple * scale[2]);
    }
    geometry.computeVertexNormals();
    draw(geometry.translate(...center), color);
  }
  return {draw, branch, crown, random};
}

function leafStrip(geometry, origin, heading, length, width, arch, drop) {
  const front = [cos(heading), sin(heading)];
  const across = [-front[1], front[0]];
  const rows = [[0, .09], [.25, .68], [.5, 1], [.76, .64], [1, .018]];
  const first = geometry.positions.length / 3;
  for (const [index, [t, amount]] of rows.entries()) {
    const radius = width * amount;
    const x = origin[0] + t * length * front[0];
    const y = origin[1] + sin(t * PI) * arch - drop * t * t;
    const z = origin[2] + t * length * front[1];
    for (const offset of [-1, 0, 1]) {
      geometry.positions.push(x + offset * radius * across[0],
        y + (offset === 0 ? radius * .29 : 0), z + offset * radius * across[1]);
      geometry.uvs.push((offset + 1) * .5, t);
    }
    if (index === 0) continue;
    const before = first + (index - 1) * 3;
    for (const col of [0, 1]) {
      const a = before + col;
      geometry.indices.push(a, a + 1, a + 3, a + 1, a + 4, a + 3);
    }
  }
}

function finishLeaves(draw, color, geometry) {
  const mesh = new THREE.BufferGeometry();
  mesh.setAttribute('position', new THREE.Float32BufferAttribute(geometry.positions, 3));
  mesh.setAttribute('uv', new THREE.Float32BufferAttribute(geometry.uvs, 2));
  mesh.setIndex(geometry.indices);
  mesh.computeVertexNormals();
  draw(mesh, color);
}

function buildPalm(brush, height, spin, fan) {
  const {draw, branch, crown, random} = brush;
  const lean = height * (fan ? .063 : .125);
  const trunk = t => polar(spin, lean * t * t, height * t * (fan ? .85 : .86));
  const radius = t => height * (fan ? .029 : .024) * (1 - .53 * t);
  const sections = fan ? 5 : 6;
  for (let i = 0; i < sections; i++) {
    const from = i / sections;
    const to = (i + 1) / sections;
    branch(PALM_BARK[0], trunk(from), trunk(to), radius(from), radius(to), 9);
  }
  for (let i = 1; i <= 13; i++) {
    const t = i * .067;
    branch(PALM_BARK[i % 3 ? 1 : 2], trunk(t - .0045), trunk(t + .0045),
      radius(t) * 1.04, radius(t) * 1.04, 9);
  }
  const center = trunk(1);
  crown(PALM[0], center, [height * .045, height * .036, height * .048], .08, 5);
  for (let i = 0; i < 4; i++) {
    crown(PALM_BARK[2], shifted(center, polar(spin + i * TAU / 4, height * .034, -height * .017)),
      [height * .014, height * .019, height * .014], .06, 4);
  }
  const leafParts = PALM.map(() => ({positions: [], uvs: [], indices: []}));
  const count = fan ? 9 : 10;
  for (let i = 0; i < count; i++) {
    const angle = spin + i * TAU / count + (random() - .5) * .18;
    const low = i % 3 === 0;
    const length = height * ((low ? .35 : .29) + (random() - .5) * .07);
    const arch = height * (low ? .026 : .077);
    const drop = height * (low ? .072 : .025);
    leafStrip(leafParts[(i + 1) % 4], center, angle, length, height * .012, arch, drop);
    if (fan) {
      const start = shifted(center, polar(angle, length * .43, arch * .7));
      for (let j = -3; j <= 3; j++) {
        leafStrip(leafParts[(i + j + 4) % 4], start, angle + j * .19,
          length * (.58 - Math.abs(j) * .055), height * (.016 - Math.abs(j) * .0018), arch * .32, drop * .84);
      }
    } else {
      for (let j = 0; j < 7; j++) {
        const t = .19 + j * .104;
        const start = shifted(center, polar(angle, length * t, sin(t * PI) * arch - drop * t * t));
        for (const side of [-1, 1]) {
          leafStrip(leafParts[(i + j + (side > 0 ? 1 : 0)) % 4], start,
            angle + side * (.83 - t * .37), height * (.095 - t * .048),
            height * (.0095 - t * .003), height * .014, height * .025);
        }
      }
    }
  }
  for (const [index, geometry] of leafParts.entries()) finishLeaves(draw, PALM[index], geometry);
}

function hardwoodTrunk(brush, height, spin, lean, end = .84) {
  const {branch} = brush;
  const trunk = t => polar(spin, height * lean * (t * t + .16 * sin(PI * t)), height * t * end);
  for (let i = 0; i < 4; i++) {
    const from = i * .25;
    const to = from + .25;
    branch(BARK[0], trunk(from), trunk(to), height * (.047 - from * .032), height * (.047 - to * .032), 9);
  }
  for (let i = 0; i < 4; i++) {
    const angle = spin + i * TAU / 4;
    branch(BARK[2], polar(angle, height * .071, height * .012), trunk(.125), height * .006, height * .021, 5);
    branch(BARK[1], polar(angle, height * .039, height * .025),
      shifted(trunk(.36), polar(angle, height * .031, 0)), height * .004, height * .002, 4);
  }
  return trunk;
}

function buildCypress(brush, height, spin) {
  const {crown, random} = brush;
  const trunk = hardwoodTrunk(brush, height, spin, .018, .94);
  crown(CYPRESS[0], trunk(.655), [height * .12, height * .344, height * .11], .09, 6);
  for (const [level, radius, width, tall, count] of [
    [.38, .068, .094, .16, 6], [.54, .078, .082, .18, 6], [.69, .06, .068, .17, 5],
    [.82, .045, .055, .13, 4], [.91, .025, .039, .085, 3],
  ]) {
    for (let i = 0; i < count; i++) {
      const angle = spin + i * TAU / count + level * 2.5;
      const point = shifted(trunk(level), polar(angle, height * radius, height * ((random() - .5) * .035)));
      crown(CYPRESS[(i + count) % 4], point,
        [height * width, height * tall * (.87 + random() * .18), height * width * .84], .16, 5);
    }
  }
  crown(CYPRESS[2], shifted(trunk(.98), [0, height * .043, 0]),
    [height * .038, height * .038, height * .032], .12, 5);
}

function buildPine(brush, height, spin) {
  const {branch, crown, random} = brush;
  const trunk = hardwoodTrunk(brush, height, spin, .045, .95);
  for (const [level, reach, count] of [[.38, .195, 6], [.55, .175, 6], [.70, .132, 5], [.83, .093, 4]]) {
    for (let i = 0; i < count; i++) {
      const angle = spin + i * TAU / count + level * 7 + (random() - .5) * .22;
      const base = trunk(level);
      const tip = shifted(base, polar(angle, height * reach, height * (.02 + random() * .028)));
      branch(BARK[1], base, tip, height * .017, height * .0037, 6);
      const tuft = shifted(tip, [0, height * .029, 0]);
      crown(PINE[i % 3], tuft, [height * reach * .46, height * .054, height * reach * .45], .21, 5);
      crown(PINE[(i + 2) % 4], shifted(tuft, polar(angle - .18, -height * reach * .35, height * .038)),
        [height * reach * .48, height * .057, height * reach * .44], .18, 5);
    }
  }
  crown(PINE[3], shifted(trunk(1), [0, height * .012, 0]),
    [height * .082, height * .066, height * .075], .14, 5);
}

function buildBroadleaf(brush, height, spin, kind) {
  const {branch, crown, random} = brush;
  const olive = kind === 'olive';
  const blossoms = kind === 'jacaranda';
  const palette = olive ? OLIVE : blossoms ? JACARANDA : OAK;
  const trunk = hardwoodTrunk(brush, height, spin, olive ? .10 : .034, olive ? .78 : .84);
  const count = olive ? 5 : 6;
  for (let i = 0; i < count; i++) {
    const angle = spin + i * TAU / count + (random() - .5) * .33;
    const base = trunk(.46 + random() * .12);
    const rise = height * (.16 + random() * .07);
    const middle = shifted(base, polar(angle, height * .12, rise * .58));
    const tip = shifted(base, polar(angle + .16, height * (.19 + random() * .052), rise));
    branch(BARK[1], base, middle, height * .026, height * .016, 7);
    branch(BARK[0], middle, tip, height * .0165, height * .0045, 6);
    const sweep = height * (.092 + random() * .03);
    crown(palette[i % 2], shifted(tip, [0, height * .024, 0]),
      [sweep, height * (olive ? .064 : .104), sweep * .87], .21, 5);
    for (const side of [-1, 1]) {
      const fork = shifted(tip, polar(angle + side * 1.18, height * .055, height * .05));
      branch(BARK[0], middle, fork, height * .012, height * .003, 5);
      const scale = height * (.063 + random() * .027);
      crown(palette[blossoms ? 2 + (i + (side > 0 ? 1 : 0)) % 3 : 1 + i % 3],
        shifted(fork, [0, height * .022, 0]), [scale, scale * (olive ? .63 : .88), scale * .91], .21, 5);
    }
  }
  const top = shifted(trunk(1), [0, height * .023, 0]);
  crown(palette[2], top, [height * .15, height * (olive ? .11 : .12), height * .14], .21, 6);
  crown(palette.at(-1), shifted(top, polar(spin + .9, height * .062, height * .058)),
    [height * .093, height * .074, height * .082], .18, 5);
}

function treeSeed(x, z, seed) {
  const locationSeed = Math.imul(Math.round(x * 16), 374761393) ^ Math.imul(Math.round(z * 16), 668265263);
  return Number.isFinite(seed) ? seed : locationSeed;
}

function treeHeight(kind, height) {
  return Number.isFinite(height) ? THREE.MathUtils.clamp(height, 32, 200) : STORYBOOK_TREE_SPECIES[kind].height;
}

/** Place one authored tree in the existing static material batches. */
export function addStorybookTree(batch, {kind, x, z, groundY, height, seed} = {}) {
  if (!Object.hasOwn(STORYBOOK_TREE_SPECIES, kind) || ![x, z, groundY].every(Number.isFinite)) return false;
  const size = treeHeight(kind, height);
  const random = seeded(treeSeed(x, z, seed));
  const spin = random() * TAU;
  const brush = treeBrush(batch, x, groundY, z, random);
  if (kind === 'fan-palm' || kind === 'date-palm') buildPalm(brush, size, spin, kind === 'fan-palm');
  else if (kind === 'cypress') buildCypress(brush, size, spin);
  else if (kind === 'shore-pine') buildPine(brush, size, spin);
  else buildBroadleaf(brush, size, spin, kind);
  return true;
}

/** Convert a meteorological FROM bearing into a scene-space direction. */
export function sampleStorybookTreeWind(timeSeconds = 0, environment = {}) {
  const {windSpeed, windBearing, reduceMotion, condition} = environment;
  const speed = Number.isFinite(windSpeed) ? THREE.MathUtils.clamp(windSpeed, 0, 22) : WINDY.has(condition) ? 6 : 0;
  const bearing = Number.isFinite(windBearing) ? ((windBearing % 360) + 360) % 360 : 270;
  const angle = THREE.MathUtils.degToRad(bearing);
  const time = Number.isFinite(timeSeconds) ? Math.max(0, timeSeconds) % WIND_LOOP_SECONDS : 0;
  return {x: -sin(angle), z: cos(angle), phase: TAU * time / WIND_LOOP_SECONDS,
    strength: reduceMotion ? 0 : speed * .0048};
}

const WIND_VERTEX = `
  attribute vec3 roomcraftTreeWind;
  uniform vec2 roomcraftTreeDirection;
  uniform float roomcraftTreeStrength;
  uniform float roomcraftTreePhase;
  uniform float roomcraftTreeVariety;

  float roomcraftTreeBend() {
    return clamp((roomcraftTreeWind.x - 0.16) / 0.84, 0.0, 1.0);
  }

  vec2 roomcraftTreeDrift() {
    float phase = roomcraftTreePhase;
    float variation = roomcraftTreeWind.z;
    float gust = 0.69 + 0.23 * sin(26.0 * phase + variation)
      + 0.12 * sin(53.0 * phase + variation * 0.63);
    gust += roomcraftTreeVariety * 0.17 * pow(max(0.0, sin(3.0 * phase + variation)), 4.0);
    vec2 crosswind = vec2(-roomcraftTreeDirection.y, roomcraftTreeDirection.x);
    float flutter = 0.13 * sin(47.0 * phase + variation * 1.46);
    return roomcraftTreeStrength * (roomcraftTreeDirection * gust + crosswind * flutter);
  }
`;

/**
 * Animate a dedicated static tree batch with shared wind uniforms. Crown and
 * branch vertices at the same height bend together, keeping roots grounded.
 */
export function createStorybookTreeWind(batch) {
  const materials = new Set();
  const trees = [];
  const uniforms = {
    roomcraftTreeDirection: {value: new THREE.Vector2(1, 0)},
    roomcraftTreeStrength: {value: 0},
    roomcraftTreePhase: {value: 0},
    roomcraftTreeVariety: {value: 0},
  };
  function animateMaterial(material) {
    if (materials.has(material)) return;
    materials.add(material);
    material.onBeforeCompile = shader => {
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\n${WIND_VERTEX}`)
        .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`)
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`);
    };
    material.customProgramCacheKey = () => 'roomcraft-tree-wind-v2';
  }
  function add(spec = {}) {
    const {kind, height, x, z, seed} = spec;
    if (!Object.hasOwn(STORYBOOK_TREE_SPECIES, kind)) return false;
    const size = treeHeight(kind, height);
    const variation = seeded(treeSeed(x, z, seed))() * TAU;
    const added = addStorybookTree({
      add(geometry, color, ...position) {
        const vertices = geometry.getAttribute('position');
        const weights = new Float32Array(vertices.count * 3);
        for (let index = 0; index < vertices.count; index++) {
          weights[index * 3] = vertices.getY(index) / size;
          weights[index * 3 + 1] = size;
          weights[index * 3 + 2] = variation;
        }
        geometry.setAttribute('roomcraftTreeWind', new THREE.BufferAttribute(weights, 3));
        animateMaterial(batch.material(color));
        batch.add(geometry, color, ...position);
      },
    }, spec);
    if(added)trees.push({...spec,height:size});
    return added;
  }
  function update(timeSeconds, environment) {
    const wind = sampleStorybookTreeWind(timeSeconds, environment);
    const life=normalizeWorldLifeSettings(environment?.worldLife);
    uniforms.roomcraftTreeDirection.value.set(wind.x, wind.z);
    uniforms.roomcraftTreeStrength.value = wind.strength;
    uniforms.roomcraftTreePhase.value = wind.phase;
    uniforms.roomcraftTreeVariety.value = life.enabled&&life.vegetation&&life.weatherAccents?life.variety:0;
  }
  return {add, update, getTrees:()=>trees.map(tree=>({...tree}))};
}
