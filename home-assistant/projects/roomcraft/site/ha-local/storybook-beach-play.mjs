import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const DRY_SAND_MARGIN = 26;
const DUNE_CLEARANCE = 39;
const BALL_TRIP_SECONDS = 2.25;
const TAU = 2 * Math.PI;
const PEOPLE = [
  {skin:'#d6a083', hair:'#56413a', shirt:'#df8b72', shorts:'#658e91', trim:'#f7e5bd', style:'cap'},
  {skin:'#a87761', hair:'#403035', shirt:'#72a79a', shorts:'#77698a', trim:'#f2ce87', style:'bun'},
  {skin:'#e5ac86', hair:'#684437', shirt:'#e0a95e', shorts:'#7496b1', trim:'#fff0cd', style:'hat'},
  {skin:'#b98666', hair:'#4e3939', shirt:'#a78cb3', shorts:'#6a8176', trim:'#f0dbb3', style:'fringe'},
];

function shoreAt(shoreline, x) {
  const index = shoreline.findIndex(point => point.x >= x);
  if (index < 1) return shoreline[index === 0 ? 0 : shoreline.length - 1].z;
  const a = shoreline[index - 1];
  const b = shoreline[index];
  return THREE.MathUtils.lerp(a.z, b.z, (x - a.x) / (b.x - a.x));
}

/** Fit play areas to the strip between the authored dunes and the surf. */
export function planStorybookBeachPlay(water, street) {
  const {shoreline, focusX, y: waterY} = water ?? {};
  const farZ = street?.farZ;
  if (![focusX, farZ, waterY].every(Number.isFinite) || !Array.isArray(shoreline) || shoreline.length < 2 ||
      !shoreline.every(point => Number.isFinite(point?.x) && Number.isFinite(point?.z))) return null;
  function patch(x, halfWidth, preferredDepth) {
    const lowX = x - halfWidth;
    const highX = x + halfWidth;
    const samples = shoreline.filter(point => point.x > lowX && point.x < highX).map(point => point.z);
    const dryZ = Math.max(shoreAt(shoreline, lowX), shoreAt(shoreline, highX), ...samples) + DRY_SAND_MARGIN;
    const nearZ = farZ - DUNE_CLEARANCE;
    if (nearZ - dryZ < 19) return null;
    const halfDepth = Math.min(preferredDepth, (nearZ - dryZ) / 2);
    const z = (nearZ + dryZ) / 2;
    // This is the authored dry-sand ramp from +.28 to +.71 above the terrain.
    const dryEdge = shoreAt(shoreline, x) + 22;
    const grade = THREE.MathUtils.clamp((farZ + .4 - z) / (farZ + .4 - dryEdge), 0, 1);
    const y = waterY - .77 + grade * .43;
    return {x, y, z, halfWidth, halfDepth};
  }
  const court = patch(focusX - 72, 46, 18);
  const castle = patch(focusX + 68, 27, 15);
  return court || castle ? {court, castle} : null;
}

/** Fictional play poses sampled from either the live scenery or showcase clock. */
export function sampleStorybookBeachPlay(plan, seconds = 0, reduceMotion = false) {
  const time = reduceMotion ? .96 : Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const actors = [];
  let ball;
  if (plan.court) {
    const {x, y, z, halfDepth, halfWidth} = plan.court;
    const trip = time / BALL_TRIP_SECONDS;
    const progress = trip % 1;
    const from = Math.floor(trip) % 2 ? 1 : -1;
    const pass = Math.sin(Math.PI * progress);
    const hand = halfWidth - 16;
    const lateral = Math.min(3.3, halfDepth * .22);
    ball = {
      x: x + from * hand * (1 - 2 * progress),
      y: y + 20.9 + pass * 15.7,
      z: z + Math.sin(TAU * progress) * lateral,
      rotation: time * 2.6,
      ground: y,
    };
    for (const side of [-1, 1]) {
      const receiving = side !== from;
      const anticipation = 1 - Math.min(1, (receiving ? 1 - progress : progress) / .24);
      const reach = reduceMotion ? .32 : anticipation * anticipation;
      actors.push({
        kind: 'player', style: side < 0 ? 0 : 1, scale: 1, yaw: -side * Math.PI / 2,
        x: x + side * (hand + 6 - reach * 2), y: y + reach * 1.65, ground: y,
        z: z + side * lateral * (.65 + pass * .35),
        reach, swing: Math.sin(time * 3.15 + side * .9) * .42,
      });
    }
  }
  if (plan.castle) {
    const {x, y, z} = plan.castle;
    actors.push({
      kind: 'builder', style: 2, scale: .72, yaw: -Math.PI / 2.55,
      x: x + 14.5, y, ground: y, z: z + 4.2,
      reach: reduceMotion ? .57 : .55 + .45 * Math.sin(time * 4.8),
      swing: reduceMotion ? 0 : Math.cos(time * 4.8) * .55,
    }, {
      kind: 'builder', style: 3, scale: 1, yaw: Math.PI / 2.65,
      x: x - 15.2, y, ground: y, z: z + 1.8,
      reach: reduceMotion ? .37 : .44 + .33 * Math.sin(time * 2.5 + .9),
      swing: reduceMotion ? 0 : Math.cos(time * 2.5 + .9) * .35,
    });
  }
  return {actors, ball};
}

function coloredGeometry(source, shade, x, y, z) {
  const geometry = source.index ? source.toNonIndexed() : source;
  if (geometry !== source) source.dispose();
  geometry.deleteAttribute('uv');
  const color = new THREE.Color(shade);
  const values = new Float32Array(geometry.attributes.position.count * 3);
  for (let index = 0; index < values.length; index += 3) color.toArray(values, index);
  geometry.setAttribute('color', new THREE.BufferAttribute(values, 3));
  return geometry.translate(x, y, z);
}

function scenery(group, build) {
  const parts = [];
  const add = (geometry, shade, x, y, z) => parts.push(coloredGeometry(geometry, shade, x, y, z));
  const box = (w, h, d, shade, x, y, z) => add(new THREE.BoxGeometry(w, h, d), shade, x, y, z);
  const cylinder = (top, bottom, h, shade, x, y, z) =>
    add(new THREE.CylinderGeometry(top, bottom, h, 12), shade, x, y, z);
  build({add, box, cylinder});
  const geometry = mergeGeometries(parts);
  for (const part of parts) part.dispose();
  const material = new THREE.MeshStandardMaterial({vertexColors:true, roughness:.86});
  group.add(new THREE.Mesh(geometry, material));
}

function volleyballCourt({x, y, z, halfWidth, halfDepth}) {
  const root = new THREE.Group();
  root.name = 'beach-volleyball-court';
  root.position.set(x, y, z);
  const netHalf = halfDepth - 1;
  scenery(root, ({box, cylinder}) => {
    const rope = '#bd816b';
    const mesh = '#b7a78c';
    const rim = '#f4e4bb';
    for (const side of [-1, 1]) {
      box(halfWidth * 2, .10, .56, rope, 0, .14, side * halfDepth);
      box(.56, .10, halfDepth * 2, rope, side * halfWidth, .14, 0);
      cylinder(.62, .98, 20.2, '#e0c4a0', 0, 10.1, side * netHalf);
      cylinder(.93, .93, 1.1, rope, 0, 18.9, side * netHalf);
      cylinder(.85, .85, .76, rim, 0, 20.48, side * netHalf);
      box(.76, .54, netHalf * 2, rim, 0, side < 0 ? 10.1 : 19.5, 0);
    }
    for (let index = 1; index < 5; index++) box(.23, .23, netHalf * 2, mesh, 0, 10.2 + index * 1.83, 0);
    for (let index = 1; index < 12; index++) {
      box(.22, 9.25, .24, mesh, 0, 14.8, netHalf * (index / 6 - 1));
    }
  });
  return root;
}

function sandcastle({x, y, z}) {
  const root = new THREE.Group();
  root.name = 'beach-sandcastle';
  root.position.set(x, y, z);
  scenery(root, ({add, box, cylinder}) => {
    const sand = '#d9b284';
    const edge = '#e5c199';
    const shadow = '#ac8466';
    add(new THREE.SphereGeometry(1, 12, 6).scale(12.1, 1.25, 8.1), '#cda77f', 0, .45, 0);
    box(12.3, 4.6, 7.5, sand, 0, 2.45, -.5);
    box(3.2, 2.85, .31, shadow, 0, 1.85, 3.32);
    add(new THREE.SphereGeometry(1, 8, 5).scale(1.61, 1.6, .25), shadow, 0, 3.11, 3.29);
    for (const side of [-1, 1]) {
      const towerX = side * 6.15;
      cylinder(2.44, 3.35, 7.9, sand, towerX, 4.05, -.8);
      cylinder(2.66, 2.52, 1.03, edge, towerX, 8.03, -.8);
      for (const [dx, dz] of [[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]]) {
        box(1.22, 1.1, 1.22, edge, towerX + dx, 8.99, -.8 + dz);
      }
      box(1.07, .94, .3, shadow, towerX, 5.42, 1.65);
    }
    cylinder(1.72, 2.44, 9.25, edge, .3, 4.75, -3.55);
    cylinder(.05, 2.07, 2.74, sand, .3, 10.37, -3.55);
    cylinder(.22, .26, 4.1, '#a68968', .3, 12.52, -3.55);
    const flag = new THREE.BufferGeometry();
    flag.setAttribute('position', new THREE.Float32BufferAttribute(
      [0,0,0, 4.35,.6,0, 0,2.18,0, 0,2.18,0, 4.35,.6,0, 0,0,0], 3));
    flag.computeVertexNormals();
    add(flag, '#d0816f', .38, 13.05, -3.54);
    cylinder(2.25, 1.68, 3.5, '#6da69e', -10.7, 1.9, 5.1);
    cylinder(2.14, 2.14, .44, '#a4c1a7', -10.7, 3.71, 5.1);
    cylinder(1.61, 1.61, .21, shadow, -10.7, 3.97, 5.1);
    add(new THREE.TorusGeometry(2.06, .21, 5, 12, Math.PI), '#f1ddac', -10.7, 3.85, 5.1);
    add(new THREE.BoxGeometry(.62, .42, 5.7).rotateY(.53), '#cb8d67', 7.7, .42, 6.8);
    add(new THREE.SphereGeometry(1, 8, 5).scale(1.2,.36,1.5).rotateY(.53), '#d89b66', 9.4, .43, 9.0);
  });
  return root;
}

function makeBall() {
  const source = new THREE.SphereGeometry(3.25, 24, 12);
  const geometry = source.toNonIndexed();
  source.dispose();
  const positions = geometry.attributes.position;
  const palette = ['#e68c70','#f4e0ae','#74aba4','#f1c165','#8a96b4','#f7e5bc'].map(color => new THREE.Color(color));
  const values = new Float32Array(positions.count * 3);
  for (let vertex = 0; vertex < positions.count; vertex += 3) {
    const average = axis => (positions[axis](vertex) + positions[axis](vertex + 1) + positions[axis](vertex + 2)) / 3;
    const angle = Math.atan2(average('getZ'), average('getX'));
    const stripe = Math.floor((angle + Math.PI) / TAU * palette.length) % palette.length;
    const color = Math.abs(average('getY')) > 2.85 ? palette[1] : palette[stripe];
    for (let i = 0; i < 3; i++) color.toArray(values, (vertex + i) * 3);
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(values, 3));
  const ball = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({vertexColors:true, roughness:.45}));
  ball.name = 'beach-volleyball-ball';
  return ball;
}

function paintActor(actor, part) {
  const {skin, hair, shirt, shorts, trim, style} = PEOPLE[actor.style];
  const crouching = actor.kind === 'builder';
  const torso = crouching ? 7.8 : 12.2;
  const face = crouching ? 13.6 : 18.3;
  const forward = crouching ? actor.reach * 1.15 + .65 : 0;
  part(shirt, 0, torso, forward * .43, 3.72, 4.1, 2.85, crouching ? .24 : 0);
  part(shorts, 0, torso - 3.4, 0, 3.34, 1.65, 2.8);
  part(trim, 0, torso - 1.95, 2.45, 3.03, .48, .59);
  for (const side of [-1, 1]) {
    const stride = crouching ? .8 : side * actor.swing;
    part(shorts, side * 1.65, crouching ? 3.5 : 6.4, stride, 1.55, 2.3, 1.49, crouching ? .8 : 0);
    part(skin, side * 1.68, crouching ? 1.72 : 3.1, crouching ? 2.08 : stride, 1.16, 2.13, 1.16);
    part(skin, side * 1.75, 1.02, .88 + stride, 1.28, .76, 2.08);
    const armY = crouching ? torso + .45 : torso + 1.5 + actor.reach * 2.1;
    const armZ = crouching ? 2.4 + actor.reach * 1.72 : actor.reach * .8;
    const armAngle = crouching ? -.78 - actor.reach * .27 : .12 + actor.reach * .62;
    part(skin, side * (4.13 - actor.reach * .46), armY, armZ, 1.04, 3.7, 1.05,
      armAngle, side * (crouching ? .1 : .24 + actor.reach * .55));
    part(skin, side * (4.1 - actor.reach * .53), armY + (crouching ? -1.65 : actor.reach * 5.55 - 2.92),
      armZ + (crouching ? 2.7 : actor.reach * 1.9), 1.14, 1.15, 1.13);
    part(skin, side * 3.48, face, forward + .4, .84, .99, .78);
    part('#493a41', side * 1.46, face + .38, forward + 3.41, .43, .47, .34);
    part('#c98878', side * 2.22, face - .45, forward + 3.05, .54, .27, .26);
  }
  part(hair, 0, face + .64, forward - .53, 3.81, 4.12, 3.64);
  part(skin, 0, face, forward + .72, 3.25, 3.29, 2.89);
  part(skin, 0, face - .22, forward + 3.59, .53, .54, .59);
  part('#9b6b66', 0, face - 1.19, forward + 3.43, .81, .21, .25);
  if (style === 'cap' || style === 'hat') {
    part(trim, 0, face + 3.48, forward + .3, 3.56, 1.47, 3.26);
    part(style === 'hat' ? '#e7b46d' : shirt, 0, face + 2.78, forward + 1.12,
      style === 'hat' ? 4.56 : 3.19, .39, style === 'hat' ? 4.26 : 2.85);
  } else {
    part(hair, -.99, face + 2.39, forward + 1.53, 2.47, 1.23, 2.37);
    part(style === 'bun' ? hair : trim, 2.0, face + 3.23, forward - 1.66, 1.41, 1.43, 1.39);
  }
}

export function createStorybookBeachPlay(water, street) {
  const root = new THREE.Group();
  root.name = 'beach-play';
  const plan = planStorybookBeachPlay(water, street);
  if (!plan) return {root, update() {}, dispose: () => root.removeFromParent()};
  const court = plan.court ? volleyballCourt(plan.court) : null;
  const castle = plan.castle ? sandcastle(plan.castle) : null;
  const ball = court ? makeBall() : null;
  if (court) root.add(court, ball);
  if (castle) root.add(castle);

  const initial = sampleStorybookBeachPlay(plan);
  let partCount = 0;
  for (const actor of initial.actors) paintActor(actor, () => partCount++);
  const people = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 7),
    new THREE.MeshStandardMaterial({color:'#fff', roughness:.76}), partCount);
  people.name = 'beach-recreation-figures';
  people.frustumCulled = false;
  people.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const shadows = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 20).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({color:'#634f55', opacity:.23, transparent:true, depthWrite:false}),
    initial.actors.length + Number(Boolean(ball)));
  shadows.name = 'beach-play-contact-shadows';
  shadows.frustumCulled = false;
  root.add(people, shadows);
  let colorIndex = 0;
  const shades = new Map();
  for (const actor of initial.actors) paintActor(actor, shade => {
    if (!shades.has(shade)) shades.set(shade, new THREE.Color(shade));
    people.setColorAt(colorIndex++, shades.get(shade));
  });

  const transform = new THREE.Object3D();
  let previousTime;
  let liveSeconds = 0;
  let lastTime;
  let lastReduced;
  function update(seconds, {reduceMotion = false, transientTelemetry = false} = {}) {
    if (!transientTelemetry) {
      const dt = Number.isFinite(previousTime) && Number.isFinite(seconds)
        ? THREE.MathUtils.clamp(seconds - previousTime, 0, .25) : 0;
      if (!reduceMotion) liveSeconds += dt;
      previousTime = seconds;
    }
    const time = reduceMotion ? .96 : transientTelemetry ? seconds : liveSeconds;
    if (time === lastTime && reduceMotion === lastReduced) return;
    lastTime = time;
    lastReduced = reduceMotion;
    const frame = sampleStorybookBeachPlay(plan, time, reduceMotion);
    let index = 0;
    let shadowIndex = 0;
    const shadow = (x, y, z, width, depth) => {
      transform.position.set(x, y + .16, z);
      transform.rotation.set(0, 0, 0);
      transform.scale.set(width, 1, depth);
      transform.updateMatrix();
      shadows.setMatrixAt(shadowIndex++, transform.matrix);
    };
    for (const actor of frame.actors) {
      const {scale, yaw} = actor;
      const cos = Math.cos(yaw);
      const sin = Math.sin(yaw);
      paintActor(actor, (_shade, x, y, z, w, h, d, tiltX = 0, tiltZ = 0) => {
        transform.position.set(actor.x + scale * (x * cos + z * sin), actor.y + y * scale,
          actor.z + scale * (-x * sin + z * cos));
        transform.rotation.set(0, yaw, 0);
        transform.rotateX(tiltX);
        transform.rotateZ(tiltZ);
        transform.scale.set(scale * w, scale * h, scale * d);
        transform.updateMatrix();
        people.setMatrixAt(index++, transform.matrix);
      });
      shadow(actor.x, actor.ground, actor.z, 5.25 * scale, 4.47 * scale);
    }
    if (frame.ball) {
      const {x, y, z, rotation, ground} = frame.ball;
      ball.position.set(x, y, z);
      ball.rotation.set(.25, rotation * .59, rotation);
      shadow(x, ground, z, 2.82, 2.52);
    }
    people.instanceMatrix.needsUpdate = true;
    shadows.instanceMatrix.needsUpdate = true;
  }
  update(0);

  function dispose() {
    root.traverse(node => {
      if (!node.isMesh) return;
      if (node.isInstancedMesh) node.dispose();
      node.geometry.dispose();
      node.material.dispose();
    });
    root.clear();
    root.removeFromParent();
  }
  return {root, update, dispose};
}
