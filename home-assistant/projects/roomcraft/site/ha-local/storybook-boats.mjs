import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const TAU = Math.PI * 2;
const {clamp, lerp} = THREE.MathUtils;
const CHOPPY = new Set(['rainy', 'pouring', 'lightning-rainy', 'windy', 'windy-variant']);
const RECIPES = [
  {id: 'sailboat', name: 'Ivory sailboat', length: 59, beam: 21, paint: '#558e94', deck: '#e1bb86',
    center: -298, radius: 122, offshore: 54, drift: 6, period: 74, start: 1.03, wake: .63},
  {id: 'cabin', name: 'Coral cabin launch', length: 66, beam: 24, paint: '#d47960', deck: '#eed3a7',
    center: 270, radius: 118, offshore: 54, drift: 5, period: 48, start: -1.32, wake: 1},
  {id: 'fishing', name: 'Juniper fishing boat', length: 52, beam: 20, paint: '#689483', deck: '#d4b083',
    center: 31, radius: 78, offshore: 103, drift: 8, period: 87, start: 2.16, wake: .7},
];

function shoreAt(shoreline, x) {
  let lower = 0;
  let upper = shoreline.length - 1;
  while (upper - lower > 1) {
    const middle = (lower + upper) >> 1;
    if (x < shoreline[middle].x) upper = middle;
    else lower = middle;
  }
  const a = shoreline[lower];
  const b = shoreline[upper];
  return lerp(a.z, b.z, clamp((x - a.x) / (b.x - a.x), 0, 1));
}

/** Keep every route within the same world coordinates as the ocean mesh. */
export function createStorybookBoatRoutes(water) {
  if (!Array.isArray(water?.shoreline) || water.shoreline.length < 2 ||
      ![water.y, water.farZ, water.focusX].every(Number.isFinite)) return [];
  const {shoreline, farZ, focusX} = water;
  const left = shoreline[0].x;
  const right = shoreline.at(-1).x;
  if (!Number.isFinite(left) || !Number.isFinite(right) || right - left < 280) return [];
  return RECIPES.map(recipe => {
    const radius = Math.min(recipe.radius, (right - left) / 5);
    const reach = radius + recipe.length;
    const center = clamp(focusX + recipe.center, left + reach, right - reach);
    function point(angle) {
      const x = center + Math.cos(angle) * radius;
      const z = Math.max(farZ + 65, shoreAt(shoreline, x) - recipe.offshore - Math.sin(angle) * recipe.drift);
      return {x, z};
    }
    return {...recipe, point};
  }).filter(route => {
    // Compact synthetic plans still need room for both hull and trailing foam.
    for (let index = 0; index < 12; index++) {
      const {x, z} = route.point(index * TAU / 12);
      if (shoreAt(shoreline, x) - z < route.length / 2 + 8) return false;
    }
    return true;
  });
}

function heading(route, angle, delta = .003) {
  const before = route.point(angle - delta);
  const after = route.point(angle + delta);
  return Math.atan2(before.z - after.z, after.x - before.x);
}

export function sampleStorybookBoat(route, time, {condition} = {}) {
  const seconds = Number.isFinite(time) ? time : 0;
  const angle = route.start + seconds * TAU / route.period;
  const {x, z} = route.point(angle);
  const water = seconds * 1.24 + route.start * 3;
  const chop = CHOPPY.has(condition) ? 1.55 : 1;
  return {x, z, angle, yaw: heading(route, angle),
    heave: Math.sin(water) * .55 * chop,
    pitch: Math.cos(water * .89) * .017 * chop,
    roll: Math.sin(water * .74 + .4) * .031 * chop};
}

function faces(vertices, indices) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function flat(vertices) {
  return faces(vertices, vertices.length === 3 ? [0, 1, 2] : [0, 1, 2, 0, 2, 3]);
}

function shell(length, beam, top, bottom, scale = 1) {
  const sections = [[-.49, .67], [-.34, .94], [-.10, 1], [.20, .84], [.39, .48], [.51, .045]];
  const vertices = sections.flatMap(([fraction, taper]) => {
    const x = fraction * length;
    const z = beam * taper * scale / 2;
    return [[x,bottom,-z*.58],[x,bottom,z*.58],[x,top-.9,z],[x,top,z*.88],
      [x,top,-z*.88],[x,top-.9,-z]];
  });
  const indices = [];
  const sides = 6;
  const end = (sections.length - 1) * sides;
  for (let ring = 0; ring < end; ring += sides) {
    for (let side = 0; side < sides; side++) {
      const next = (side + 1) % sides;
      indices.push(ring+side, ring+side+sides, ring+next+sides, ring+side, ring+next+sides, ring+next);
    }
  }
  for (let side = 1; side < sides - 1; side++) {
    indices.push(0, side, side + 1, end, end + side + 1, end + side);
  }
  return faces(vertices, indices);
}

function painted(parts) {
  const layers = parts.map(([source, shade]) => {
    const geometry = source.index ? source.toNonIndexed() : source;
    if (geometry !== source) source.dispose();
    geometry.deleteAttribute('uv');
    const color = new THREE.Color(shade);
    const size = geometry.getAttribute('position').count;
    const colors = new Float32Array(size * 3);
    for (let index = 0; index < size; index++) color.toArray(colors, index * 3);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  });
  const merged = mergeGeometries(layers);
  for (const part of layers) part.dispose();
  return merged;
}

function block(w, h, d, x, y, z) {
  return new THREE.BoxGeometry(w, h, d).translate(x, y, z);
}

function spar(start, end, radius) {
  const base = new THREE.Vector3(...start);
  const direction = new THREE.Vector3(...end).sub(base);
  const rotation = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  return new THREE.CylinderGeometry(radius, radius, direction.length(), 6)
    .applyQuaternion(rotation).translate(...base.addScaledVector(direction, .5).toArray());
}

function cloth(parts, foot, luff, head, camber, palette) {
  const levels = [0, .19, .31, .64, 1];
  const columns = 4;
  const point = (u, v) => {
    const x = lerp(lerp(foot[0], luff[0], u), head[0], v);
    const y = lerp(lerp(foot[1], luff[1], u), head[1], v);
    const z = lerp(lerp(foot[2], luff[2], u), head[2], v) + Math.sin(u * Math.PI) * camber * (1 - v);
    return [x, y, z];
  };
  for (let band = 0; band < levels.length - 1; band++) {
    const low = levels[band];
    const high = levels[band + 1];
    for (let col = 0; col < columns; col++) {
      const u = col / columns;
      const next = (col + 1) / columns;
      const points = [point(u, low), point(next, low), point(next, high)];
      if (high < 1) points.push(point(u, high));
      parts.push([flat(points), palette[band]]);
    }
  }
}

function rigSailboat(parts) {
  const mast = [3, 43, 0];
  parts.push([spar([3, 4, 0], mast, .9), '#c6a983'],
    [spar([3, 11, 0], [-25, 10, -13], .6), '#c6a983'],
    [spar([28, 5, 0], mast, .33), '#d7c5a8'],
    [spar([-25, 5, 0], mast, .28), '#d7c5a8'],
    [block(15, 1.9, 10, -13, 5.4, 0), '#a8886e'],
    [block(9, 1.5, 7.5, -13, 6.35, 0), '#62797b']);
  // A filled curve reads as fabric even when the shared camera is overhead.
  cloth(parts, [-25, 10.5, -13], [3, 11.5, 0], [3, 41, 0], -9.5,
    ['#fff5df', '#cc7f68', '#fff8e6', '#f3e2b8']);
  cloth(parts, [4, 10, 1], [24, 8.5, 6.5], [5, 33, 0], 4.8,
    ['#eaf1dc', '#77ada7', '#eff5dd', '#f4ecd7']);
}

function rigCabin(parts) {
  parts.push([block(28, 8.5, 17, -7, 9.1, 0), '#f1e5cc'],
    [block(25, 1.7, 18.4, -8.4, 14.4, 0), '#d7e1d0'],
    [block(9, .75, 7, -9, 15.5, 0), '#8aa5a5'],
    [block(9, 2.2, 11, -24, 5.9, 0), '#bc9472'],
    [flat([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]), '#678b99'],
    [spar([1, 14, 0], [1, 21, 0], .55), '#d5d6cc']);
  for (const side of [-1, 1]) {
    for (const x of [-15, -5, 3]) {
      parts.push([block(x === 3 ? 4.2 : 6.4, 4.1, .27, x, 10.5, side * 8.56), '#507385']);
    }
    parts.push([spar([12, 5, side * 8.6], [24, 5, side * 4.7], .49), '#f4dec2'],
      [spar([12, 4, side * 8.6], [12, 5, side * 8.6], .44), '#f4dec2']);
  }
}

function rigFishing(parts) {
  parts.push([block(15, 6.1, 13, 6, 7.9, 0), '#e4d7ad'],
    [block(17, 1.4, 14, 6, 11.65, 0), '#71968e'],
    [block(.3, 3.5, 9.5, 13.61, 8.8, 0), '#587a82'],
    [block(9, 3.4, 7, -8, 6.8, 2.6), '#d7a674'],
    [block(7.2, .75, 5.8, -8, 8.7, 2.6), '#ebc996'],
    [spar([-19, 5, -5], [-28, 16, -7], .45), '#907459'],
    [spar([-28, 16, -7], [-34, 5.5, -10], .18), '#ccbaa0']);
  for (const z of [-5, 5]) {
    parts.push([block(7.4, 3, .25, 6, 8.8, z * 1.31), '#678c91'],
      [new THREE.TorusGeometry(2.35, .63, 5, 10).rotateX(-Math.PI / 2).translate(-17, 5, z), '#d88761']);
  }
}

function boatArt(route, material) {
  const {id, length, beam, paint, deck} = route;
  const hull = new THREE.Group();
  hull.name = route.name;
  const parts = [[shell(length, beam, 3.7, -2.5), paint],
    [shell(length, beam, 4.52, 3.55, 1.018), '#f4e4c9'],
    [shell(length * .92, beam, 4.75, 4.44, .83), deck]];
  if (id === 'sailboat') rigSailboat(parts);
  else if (id === 'cabin') rigCabin(parts);
  else rigFishing(parts);
  hull.add(new THREE.Mesh(painted(parts), material));
  return hull;
}

const WAKE_STEPS = 12;
const WAKE_COLOR = new THREE.Color('#def5e9');

function wakeArt(route, waterY) {
  const stripes = 3;
  const count = WAKE_STEPS * stripes * 2;
  const geometry = new THREE.BufferGeometry();
  const positions = new THREE.BufferAttribute(new Float32Array(count * 3), 3).setUsage(THREE.DynamicDrawUsage);
  const colors = new Float32Array(count * 4);
  const indices = [];
  for (let stripe = 0; stripe < stripes; stripe++) {
    for (let step = 0; step < WAKE_STEPS; step++) {
      const index = (stripe * WAKE_STEPS + step) * 2;
      const t = step / (WAKE_STEPS - 1);
      const fade = Math.pow(Math.sin((.10 + .90 * t) * Math.PI), 1.15) * (1 - .40 * t);
      for (let vertex = 0; vertex < 2; vertex++) {
        WAKE_COLOR.toArray(colors, (index + vertex) * 4);
        colors[(index + vertex) * 4 + 3] = route.wake * fade * (stripe === 1 ? .22 : .76);
      }
      if (step < WAKE_STEPS - 1) indices.push(index,index+2,index+1,index+1,index+2,index+3);
    }
  }
  geometry.setAttribute('position', positions);
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
  geometry.setIndex(indices);
  const material = new THREE.MeshBasicMaterial({vertexColors: true, side: THREE.DoubleSide,
    transparent: true, depthWrite: false, opacity: .82});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = route.name + ' wake';
  mesh.frustumCulled = false;

  function update({angle}, night) {
    const duration = route.id === 'cabin' ? 4.1 : 6;
    const previousArc = duration * TAU / route.period;
    for (let step = 0; step < WAKE_STEPS; step++) {
      const t = step / (WAKE_STEPS - 1);
      const theta = angle - previousArc * t;
      const yaw = heading(route, theta);
      const {x, z} = route.point(theta);
      const cos = Math.cos(yaw);
      const sin = Math.sin(yaw);
      const stern = route.length * .48;
      const stemX = x - cos * stern;
      const stemZ = z + sin * stern;
      for (let stripe = 0; stripe < stripes; stripe++) {
        const spread = (stripe - 1) * route.beam * (.19 + t * .62);
        const thickness = (stripe === 1 ? 1.85 : .62) * (1 + t * .55);
        for (let vertex = 0; vertex < 2; vertex++) {
          const lateral = spread + (vertex ? thickness : -thickness);
          positions.setXYZ((stripe * WAKE_STEPS + step) * 2 + vertex,
            stemX + sin * lateral, waterY + .14, stemZ + cos * lateral);
        }
      }
    }
    positions.needsUpdate = true;
    material.opacity = night ? .44 : .82;
  }

  return {mesh, update};
}

/** Presentation scenery with an independent reversible demo clock. */
export function createStorybookBoats(water) {
  const root = new THREE.Group();
  root.name = 'Coastal boats';
  const material = new THREE.MeshStandardMaterial({vertexColors: true, side: THREE.DoubleSide, roughness: .73});
  const boats = createStorybookBoatRoutes(water).map(route => {
    const hull = boatArt(route, material);
    const wake = wakeArt(route, water.y);
    root.add(wake.mesh, hull);
    return {route, hull, wake};
  });
  let liveTime = 0;
  let lastTime;
  let disposed = false;

  function update(timeSeconds, {reduceMotion = false, night = false, condition, transientTelemetry = false} = {}) {
    if (disposed) return;
    const now = Number.isFinite(timeSeconds) ? timeSeconds : undefined;
    if (!transientTelemetry && !reduceMotion && now !== undefined && lastTime !== undefined) {
      liveTime += clamp(now - lastTime, 0, .25);
    }
    lastTime = transientTelemetry ? undefined : now;
    const time = transientTelemetry ? (reduceMotion ? 0 : now ?? 0) : liveTime;
    for (const {route, hull, wake} of boats) {
      const sample = sampleStorybookBoat(route, time, {condition});
      hull.position.set(sample.x, water.y + sample.heave, sample.z);
      hull.rotation.set(sample.roll, sample.yaw, sample.pitch, 'YXZ');
      wake.update(sample, night);
    }
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    for (const {hull, wake} of boats) {
      hull.children[0].geometry.dispose();
      wake.mesh.geometry.dispose();
      wake.mesh.material.dispose();
    }
    material.dispose();
    root.clear();
  }

  update(0);
  return {root, update, dispose};
}
