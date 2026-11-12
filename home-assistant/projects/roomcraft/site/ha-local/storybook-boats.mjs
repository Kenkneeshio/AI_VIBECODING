import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const TAU = Math.PI * 2;
const {clamp, lerp} = THREE.MathUtils;
const CHOPPY = new Set(['rainy', 'pouring', 'lightning-rainy', 'windy', 'windy-variant']);
const EVENING_GAP = 188;
const OVERNIGHT_GAP = 490;
const OVERNIGHT_DELAY = 175;
const HULL_SECTIONS = [[-.49, .67], [-.34, .94], [-.10, 1], [.20, .84], [.39, .48], [.51, .045]];
const RECIPES = [
  {id: 'sailboat', name: 'Ivory sailboat', length: 59, beam: 21, paint: '#558e94', deck: '#e1bb86',
    center: -298, radius: 122, offshore: 54, drift: 6, period: 74, start: 1.03, wake: .63},
  {id: 'cabin', name: 'Coral cabin launch', length: 66, beam: 24, paint: '#d47960', deck: '#eed3a7',
    center: 270, radius: 118, offshore: 54, drift: 5, period: 48, start: -1.32, wake: 1},
  {id: 'fishing', name: 'Juniper fishing boat', length: 52, beam: 20, paint: '#689483', deck: '#d4b083',
    center: 31, radius: 78, offshore: 103, drift: 8, period: 87, start: 2.16, wake: .7},
  {id: 'jet-ski', name: 'Lagoon jet ski', length: 30, beam: 12.2, paint: '#438e90', deck: '#e7b768',
    center: 514, radius: 46, offshore: 72, drift: 6, period: 16, start: .47, wake: .96, wakeSeconds: 3.7},
  {id: 'cruise-ship', name: 'Pearl cruise ship', length: 149, beam: 41, paint: '#436b84', deck: '#e9c79d',
    center: 76, radius: 201, offshore: 286, drift: 23, period: 148, start: 1.53, wake: .56, wakeSeconds: 8},
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

/** A quiet ship crosses from well outside the normal coast view. Its wake uses the same route. */
export function createStorybookNightSailing(water, routes = createStorybookBoatRoutes(water)) {
  if (!routes.length) return () => null;
  const {shoreline, farZ} = water;
  const first = shoreline[0].x + 120;
  const last = shoreline.at(-1).x - 120;
  const width = last - first;
  if (width < 120) return () => null;

  function passage(ids, speed, gap, offsetFor) {
    const duration = width / speed;
    const period = duration + gap;
    const vessels = ids.flatMap(id => {
      const route = routes.find(candidate => candidate.id === id);
      if (!route) return [];
      const directions = [1, -1].map(direction => ({
        ...route, start: 0, period: duration,
        point(angle) {
          const edge = route.length * .55;
          const x = clamp((direction > 0 ? first : last) + direction * width * angle / TAU,
            shoreline[0].x + edge + 8, shoreline.at(-1).x - edge - 8);
          const dry = Math.min(shoreAt(shoreline, x), shoreAt(shoreline, x - edge), shoreAt(shoreline, x + edge));
          const z = Math.max(farZ + 65, dry - route.offshore - Math.sin(angle * 2) * route.drift * .55);
          return {x, z};
        },
      }));
      for (let step = 0; step <= 20; step++) {
        const {x, z} = directions[0].point(step * TAU / 20);
        if (shoreAt(shoreline, x) - z < route.length / 2 + 8) return [];
      }
      return [directions];
    });
    if (!vessels.length) return () => null;
    const offset = offsetFor(duration, period);
    return seconds => {
      const time = (Number.isFinite(seconds) ? Math.max(0, seconds) : 0) + offset;
      const elapsed = time % period;
      if (elapsed >= duration) return null;
      const index = Math.floor(time / period);
      return {route: vessels[index % vessels.length][index % 2], elapsed};
    };
  }

  const evening = passage(['cabin', 'fishing'], 37, EVENING_GAP, duration => Math.max(0, duration / 2 - 42));
  const overnight = passage(['fishing'], 29, OVERNIGHT_GAP, (_duration, period) => period - OVERNIGHT_DELAY);
  return (seconds, activity) => (activity === 'overnight' ? overnight : evening)(seconds);
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
  const response = route.id === 'jet-ski' ? 1.9 : route.id === 'cruise-ship' ? .55 : 1;
  const chop = (CHOPPY.has(condition) ? 1.55 : 1) * response;
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
  const vertices = HULL_SECTIONS.flatMap(([fraction, taper]) => {
    const x = fraction * length;
    const z = beam * taper * scale / 2;
    return [[x,bottom,-z*.58],[x,bottom,z*.58],[x,top-.9,z],[x,top,z*.88],
      [x,top,-z*.88],[x,top-.9,-z]];
  });
  const indices = [];
  const sides = 6;
  const end = (HULL_SECTIONS.length - 1) * sides;
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

function oval(w, h, d, x, y, z, lean = 0) {
  return new THREE.SphereGeometry(1, 12, 7).scale(w / 2, h / 2, d / 2)
    .rotateZ(lean).translate(x, y, z);
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

function rigJetSki(parts) {
  parts.push(
    [oval(15.9, 5.4, 9.0, 4.7, 3.1, 0, -.07), '#52a7a6'],
    [oval(11.3, 4.9, 5.1, 4.4, 4.6, 0, -.33), '#e5ae68'],
    [oval(5.1, 2.4, 3.15, 8.7, 6.02, 0, -.43), '#f5d591'],
    [oval(3.4, 2.5, 3.26, 3.25, 6.15, 0, -.30), '#426575'],
    [oval(12.8, 3.45, 5.9, -4.45, 4.76, 0, .11), '#40535c'],
    [block(5.8, .54, 5.4, -11.3, 2.88, 0), '#7bb3a7'],
    [spar([2.9, 5.7, 0], [1.9, 9.7, 0], .52), '#69685d'],
    [spar([2.16, 9.57, -3.35], [2.16, 9.57, 3.35], .40), '#53616a'],
    [oval(5.6, 3.4, 5.7, -3.8, 6.35, 0), '#5c738b'],
    [oval(6.06, 7.3, 5.45, -1.34, 10.1, 0, -.48), '#db7e59'],
    [oval(4.85, 5.4, 4.54, .02, 11.1, 0, -.48), '#efb36c'],
    [oval(4.84, 5.2, 4.82, 1.37, 15.38, 0, -.15), '#f5dfaf'],
    [oval(2.34, 2.04, 4.67, 2.55, 15.37, 0, -.12), '#4f637a'],
    [oval(.81, 1.36, 3.45, 3.48, 15.63, 0, -.14), '#8eafb5'],
  );
  for (const side of [-1, 1]) {
    const z = side * 3.01;
    parts.push(
      [oval(13.7, .75, 1.52, -4.45, 3.18, side * 4.19), '#59646b'],
      [oval(6.2, 2.32, 1.64, -3.75, 6.18, z, -.33), '#627a92'],
      [oval(4.25, 1.52, 1.44, -5.88, 4.5, side * 3.78, .86), '#51657a'],
      [oval(3.45, 1.11, 1.48, -5.58, 3.43, side * 4.05), '#334951'],
      [spar([-.87, 11.64, side * 2.02], [1.79, 9.65, z], .79), '#d68868'],
      [oval(1.51, 1.36, 1.34, 1.92, 9.7, side * 3.21), '#c98161'],
    );
  }
}

function rigCruise(parts, {length, beam}) {
  const ivory = '#f2e9d8';
  const white = '#fff3dc';
  const glass = '#557788';
  const chrome = '#9fbdbe';
  parts.push(
    [block(109, 6.6, 29.1, -4, 10.27, 0), ivory],
    [block(110.2, 1.15, 31.3, -4, 13.75, 0), white],
    [block(92, 5.1, 26.2, -3.5, 16.7, 0), ivory],
    [block(94.7, 1.02, 28.1, -3.8, 19.42, 0), white],
    [block(66.2, 4.5, 21.8, 2.8, 21.9, 0), ivory],
    [block(69.7, .91, 24.7, 2.9, 24.44, 0), white],
    [shell(29, 24, 26.77, 20.72, .86).translate(31, 0, 0), ivory],
    [shell(30.3, 25, 25.6, 23.86, .92).translate(31, 0, 0), glass],
    [shell(28.9, 23, 27.12, 26.39, .9).translate(31, 0, 0), white],
    [block(23.6, .76, 15.3, -24.9, 25.0, 0), '#d6b18d'],
    [block(19.4, .49, 11.1, -24.9, 25.51, 0), '#81b9b5'],
    [block(15.1, .16, 8.7, -25.8, 25.82, 0), '#62a9b4'],
    [block(12, .14, 1.05, -24.6, 25.9, 2.82), '#a7d6cc'],
    [oval(12, 2.13, 8.2, 15.4, 25.76, 0), '#dfe6d8'],
    [spar([27, 27, 0], [26.5, 35.4, 0], .58), '#e5e4d8'],
    [spar([24.1, 33, -3.6], [24.1, 33, 3.6], .41), '#e5e4d8'],
    [oval(4.21, 3.29, 3.84, 13.4, 27.8, 0), '#e9e9d9'],
    [oval(3.57, 2.86, 3.35, 9.6, 27.12, 5.6), '#dedfce'],
  );
  for (const z of [-5.9, 5.9]) {
    parts.push(
      [spar([1, 24.8, z], [-1.47, 34, z], 2.51), '#dfa179'],
      [spar([-.94, 32, z], [-1.62, 34.62, z], 2.55), '#9d5c54'],
      [oval(4.4, .46, 4.62, -1.65, 34.66, z), '#514e59'],
    );
  }
  for (const side of [-1, 1]) {
    for (const [length, y, z, pitch] of [[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]]) {
      for (let x = -length / 2; x <= length / 2; x += pitch) {
        parts.push([block(3.61, 2.05, .26, x, y, side * z), glass],
          [block(3.6, .33, .30, x, y + .61, side * z), chrome]);
      }
    }
    for (const x of [-42, -29, -16, -3, 10, 23]) {
      parts.push([block(9.3, .88, 2.81, x, 13.1, side * 14.61), '#b5af9e'],
        [oval(10.53, 2.75, 3.83, x, 13.37, side * 15.49), '#dc9164'],
        [oval(9.12, 1.04, 3.0, x, 14.33, side * 15.49), '#f0c285']);
    }
    for (const x of [-56, -43, -30, -17, -4, 9, 22, 35, 48, 57]) {
      const fraction = x / length;
      const index = HULL_SECTIONS.findIndex(([at]) => at >= fraction);
      const [fromX, fromWidth] = HULL_SECTIONS[index - 1];
      const [toX, toWidth] = HULL_SECTIONS[index];
      const sideWidth = lerp(fromWidth, toWidth, (fraction - fromX) / (toX - fromX)) * beam / 2;
      parts.push([oval(2.1, 1.74, .62, x, 5.0, side * (sideWidth - .08)), '#78969e']);
    }
    parts.push(
      [spar([-46, 19.95, side * 13.74], [42, 19.95, side * 13.74], .40), chrome],
      [spar([-27, 24.95, side * 11.67], [26, 24.95, side * 11.67], .34), chrome],
      [spar([49, 8.13, side * 15.2], [67, 8.13, side * 5.1], .43), white],
    );
  }
}

function boatArt(route, material) {
  const {id, length, beam, paint, deck} = route;
  const hull = new THREE.Group();
  hull.name = route.name;
  const top = id === 'jet-ski' ? 1.76 : id === 'cruise-ship' ? 6.1 : 3.7;
  const bottom = id === 'jet-ski' ? -1.32 : id === 'cruise-ship' ? -4.92 : -2.5;
  const parts = [[shell(length, beam, top, bottom), paint],
    [shell(length, beam, top + .82, top - .15, 1.018), '#f4e4c9'],
    [shell(length * .92, beam, top + 1.05, top + .74, .83), deck]];
  if (id === 'sailboat') rigSailboat(parts);
  else if (id === 'cabin') rigCabin(parts);
  else if (id === 'jet-ski') rigJetSki(parts);
  else if (id === 'cruise-ship') rigCruise(parts, route);
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

  function update({angle}, night, path = route) {
    const duration = route.wakeSeconds ?? (route.id === 'cabin' ? 4.1 : 6);
    const previousArc = duration * TAU / path.period;
    for (let step = 0; step < WAKE_STEPS; step++) {
      const t = step / (WAKE_STEPS - 1);
      const theta = angle - previousArc * t;
      const yaw = heading(path, theta);
      const {x, z} = path.point(theta);
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
  const routes = createStorybookBoatRoutes(water);
  const nightSailing = createStorybookNightSailing(water, routes);
  const lampShape = new THREE.SphereGeometry(1.35, 8, 6);
  const lampColors = ['#ff896b', '#8bf0b4', '#fff1c4'].map(color => new THREE.MeshBasicMaterial({color, toneMapped:false}));
  const boats = routes.map(route => {
    const hull = boatArt(route, material);
    const wake = wakeArt(route, water.y);
    let lights;
    if (route.id === 'cabin' || route.id === 'fishing') {
      lights = new THREE.Group();
      lights.name = `${route.name} running lights`;
      for (const [index, position] of [[.33,6.5,-.27],[.33,6.5,.27],[-.36,6.7,0]].entries()) {
        const lamp = new THREE.Mesh(lampShape, lampColors[index]);
        lamp.position.set(position[0] * route.length, position[1], position[2] * route.beam);
        lights.add(lamp);
      }
      hull.add(lights);
    }
    root.add(wake.mesh, hull);
    return {route, hull, wake, lights};
  });
  let liveTime = 0;
  let lastTime;
  let disposed = false;

  function update(timeSeconds, {reduceMotion = false, night = false, condition, transientTelemetry = false, activity} = {}) {
    if (disposed) return;
    const now = Number.isFinite(timeSeconds) ? timeSeconds : undefined;
    if (!transientTelemetry && !reduceMotion && now !== undefined && lastTime !== undefined) {
      liveTime += clamp(now - lastTime, 0, .25);
    }
    lastTime = transientTelemetry ? undefined : now;
    const time = transientTelemetry ? (reduceMotion ? 0 : now ?? 0) : liveTime;
    const dark = night || activity === 'evening' || activity === 'overnight';
    const passage = dark && !reduceMotion ? nightSailing(time, activity) : null;
    for (const {route, hull, wake, lights} of boats) {
      const visible = !dark || passage?.route.id === route.id;
      hull.visible = visible;
      wake.mesh.visible = visible;
      if (lights) lights.visible = dark && visible;
      if (!visible) continue;
      const path = passage?.route ?? route;
      const sample = sampleStorybookBoat(path, passage?.elapsed ?? time, {condition});
      hull.position.set(sample.x, water.y + sample.heave, sample.z);
      hull.rotation.set(sample.roll, sample.yaw, sample.pitch, 'YXZ');
      wake.update(sample, dark, path);
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
    lampShape.dispose();
    for (const color of lampColors) color.dispose();
    root.clear();
  }

  update(0);
  return {root, update, dispose};
}
