import * as THREE from 'three';
import {STORYBOOK_BICYCLES, buildStorybookBicycle} from './storybook-vehicles.mjs';
import {normalizeWorldLifeSettings} from './storybook-world-life-settings.mjs';

const WALK_SPEED = 22;
const CYCLE_SPEED = 63;
const WALK_SPACING = 525;
const CYCLE_SPACING = 1100;
const WALK_WIDTH = 22;
const WRAP_PADDING = 75;
const NIGHT_WALK_GAP = 75;
const NIGHT_CYCLE_GAP = 105;
const NIGHT_FIRST_CROSSING = 54;
const WALKERS = [
  {shirt: '#c87f70', trim: '#f1d19d', pants: '#556072', skin: '#d49876', hair: '#4d3635', accessory: 'bun'},
  {shirt: '#6a988b', trim: '#e8c58d', pants: '#5f666b', skin: '#a86a50', hair: '#382c34', accessory: 'cap'},
  {shirt: '#9082ae', trim: '#f0d8b4', pants: '#6a627f', skin: '#e8af89', hair: '#6a4235', accessory: 'pack'},
  {shirt: '#c79b53', trim: '#f1d39b', pants: '#677c7a', skin: '#a96c59', hair: '#4c3435', accessory: 'curls'},
  {shirt: '#779cb8', trim: '#f4dfb5', pants: '#5a6b83', skin: '#d99871', hair: '#654537', accessory: 'pack'},
  {shirt: '#ba8096', trim: '#f9ddad', pants: '#736583', skin: '#e3a986', hair: '#58403d', accessory: 'bow'},
];
const GROUPS = [
  [[0, 1], [5, .70], [1, 1]],
  [[2, .97]],
  [[3, 1], [4, .76]],
  [[1, .96], [2, 1]],
  [[0, 1], [5, .71]],
  [[3, .98]],
];

const wrap = (offset, span) => ((offset % span) + span) % span;

/** Compile fictional walking and cycling lanes within the usable pavement. */
export function compileStorybookSidewalk(road) {
  const span = road.width - WRAP_PADDING * 2;
  const walkers = [];
  const cyclists = [];
  if (!Number.isFinite(span) || span <= 0 || !Number.isFinite(road.centerX)) return {walkers, cyclists, sample: () => ({walkers, cyclists})};
  const start = road.centerX - span / 2;
  const walkCount = Math.max(1, Math.round(span / WALK_SPACING));
  const cycleCount = Math.max(1, Math.round(span / CYCLE_SPACING));
  const walkGap = span / walkCount;
  const cycleGap = span / cycleCount;
  for (const [side, pavement] of (road.sidewalks ?? []).entries()) {
    const {minZ, maxZ, surfaceY: y} = pavement;
    const width = maxZ - minZ;
    if (![minZ, maxZ, y].every(Number.isFinite) || width <= 0) continue;
    const direction = side % 2 ? -1 : 1;
    const scale = Math.min(1, width / WALK_WIDTH);
    const walkZ = minZ + width * (direction > 0 ? .25 : .75);
    const cycleZ = minZ + width * (direction > 0 ? .76 : .24);
    for (let index = 0; index < walkCount; index++) {
      const group = GROUPS[(index + side * 2) % GROUPS.length];
      const leader = span / 2 + (index + side * .42) * walkGap - 35;
      const groupId = `sidewalk-walk-${side}-${index}`;
      for (const [member, [style, stature]] of group.entries()) {
        walkers.push({
          id: `${groupId}-${member}`, groupId, style, child: stature < .8,
          offset: leader - direction * 13.2 * member,
          scale: scale * stature, direction, y, z: walkZ + direction * .62 * (member % 2),
          phase: index * .91 + side * .8 + member * 2.1,
        });
      }
    }
    for (let index = 0; index < cycleCount; index++) {
      cyclists.push({
        id: `sidewalk-bike-${side}-${index}`,
        style: STORYBOOK_BICYCLES[(index + side * 2) % STORYBOOK_BICYCLES.length],
        offset: span / 2 + (index + side * .65) * cycleGap,
        scale, direction, y, z: cycleZ, phase: index * 1.7 + side,
      });
    }
  }
  const walkerSeconds = span / WALK_SPEED;
  const cycleSeconds = span / CYCLE_SPEED;
  const nightPeriod = walkerSeconds + NIGHT_WALK_GAP + cycleSeconds + NIGHT_CYCLE_GAP;
  const nightOffset = Math.max(0, walkerSeconds / 2 - NIGHT_FIRST_CROSSING);
  const nightAdults = [-1, 1].map(direction => walkers.find(actor => actor.direction === direction && !actor.child)).filter(Boolean);
  const nightBikes = [-1, 1].map(direction => cyclists.find(actor => actor.direction === direction)).filter(Boolean);

  function pose(actor, x, gait) {
    const path = road.sample?.(x, actor.z);
    const yaw = (path?.yaw ?? 0) + (actor.direction > 0 ? 0 : Math.PI);
    return {...actor, x:path?.x ?? x, z:path?.z ?? actor.z, yaw, gait};
  }

  function sample(seconds = 0, reduceMotion = false, {night = false, activity} = {}) {
    const time = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
    if (activity === 'overnight') return {walkers: [], cyclists: []};
    if (night || activity === 'evening') {
      if (reduceMotion) return {walkers: [], cyclists: []};
      const passage = Math.floor((time + nightOffset) / nightPeriod);
      const phase = (time + nightOffset) % nightPeriod;
      const cycling = phase >= walkerSeconds + NIGHT_WALK_GAP;
      const elapsed = cycling ? phase - walkerSeconds - NIGHT_WALK_GAP : phase;
      const actors = cycling ? nightBikes : nightAdults;
      const duration = cycling ? cycleSeconds : walkerSeconds;
      if (elapsed >= duration || !actors.length) return {walkers: [], cyclists: []};
      const actor = actors[(passage + 1) % actors.length];
      const offset = elapsed / duration * span;
      const x = start + (actor.direction > 0 ? offset : span - offset);
      const posed = pose(actor, x, elapsed * (cycling ? 7 : 10) + actor.phase);
      return cycling ? {walkers: [], cyclists: [posed]} : {walkers: [posed], cyclists: []};
    }
    const place = (actors, speed, cadence) => actors.map(actor =>
      pose(actor, start + wrap(actor.offset + actor.direction * speed * time, span),
        reduceMotion ? 0 : time * cadence + actor.phase));
    return {walkers: place(walkers, WALK_SPEED, 10), cyclists: place(cyclists, CYCLE_SPEED, 7)};
  }
  return {walkers, cyclists, sample};
}

const DETAIL = {
  ink: '#4b3e4c', shoe: '#4a4651', sole: '#e2d0b7', blush: '#c88376',
};

/** A detailed miniature figure using one shared ellipsoid and painted instances. */
function paintWalker(actor, reduced, part) {
  const {shirt, trim, pants, skin, hair, accessory} = WALKERS[actor.style];
  const wave = reduced ? 0 : Math.sin(actor.gait);
  const bounce = Math.abs(wave) * .69;
  const bob = y => y + bounce;
  part(shirt, 0, bob(10.45), 0, 2.95, 4.3, 3.4);
  part(pants, -.1, bob(7.25), 0, 2.6, 1.7, 3.04);
  part(trim, 1.1, bob(13.35), 0, 2.14, .69, 2.55);
  part(trim, 2.68, bob(10.4), -.7, .41, .86, 1);
  for (const side of [-1, 1]) {
    const step = wave * side;
    const stride = step * 3;
    const heel = Math.max(0, step) * 1.35;
    part(pants, stride * .45, 4.5 + heel * .42 + bounce * .32, side * 1.51, 1.19, 3.2, 1.25, -.48 * step);
    part(DETAIL.shoe, .77 + stride, 1.11 + heel, side * 1.52, 2.17, .99, 1.34);
    part(DETAIL.sole, 1.38 + stride, .49 + heel, side * 1.52, 1.64, .43, 1.32);
    part(shirt, -step * 1.07, bob(10.16), side * 3.15, 1.23, 2.87, 1.15, .38 * step);
    part(skin, -step * 2.16, bob(7.7), side * 3.31, .98, 1.1, .95);
  }
  part(hair, -.67, bob(17.25), 0, 4.17, 4.32, 3.82);
  part(skin, 1.05, bob(16.63), 0, 3.76, 3.75, 3.41);
  part(hair, 1.12, bob(19.85), -.89, 2.75, 1.57, 2.82, -.3);
  part(skin, 4.48, bob(16.54), 0, .64, .63, .66);
  for (const side of [-1, 1]) {
    part(skin, .36, bob(16.69), side * 3.47, 1.02, 1.07, .64);
    part(DETAIL.ink, 4.18, bob(17.25), side * 1.35, .34, .47, .43);
    part(DETAIL.blush, 3.76, bob(16.21), side * 2.12, .37, .29, .55);
  }
  if (accessory === 'bun') {
    part(hair, -3.45, bob(19.68), .72, 1.98, 1.89, 1.89);
    part(trim, -3.51, bob(20.79), 1.35, 1.64, .47, .69);
  }
  if (accessory === 'cap') {
    part(shirt, -.5, bob(20.2), 0, 3.72, 1.97, 3.45);
    part(trim, 2.72, bob(19.62), 0, 2.43, .46, 2.89);
  }
  if (accessory === 'pack') {
    part(trim, -2.88, bob(10.2), 0, 1.48, 2.89, 2.63);
    part(shirt, -4.01, bob(10.65), 0, .46, 1.28, 1.77);
  }
  if (accessory === 'curls') {
    for (const side of [-1, 1]) part(hair, -.9, bob(18.52), side * 2.68, 2.6, 2.83, 1.33);
  }
  if (accessory === 'bow') {
    part(trim, .1, bob(21.05), 2.67, 1.56, .92, .65, .47);
    part(trim, 1.82, bob(21.05), 2.67, 1.51, .92, .65, -.47);
  }
}

export function createStorybookSidewalk(road) {
  const paths = compileStorybookSidewalk(road);
  const root = new THREE.Group();
  root.name = 'sidewalk-scenery';
  if (!paths.walkers.length && !paths.cyclists.length) {
    return {root, update() {}, dispose: () => root.removeFromParent()};
  }
  const transform = new THREE.Object3D();
  function layer(name, geometry, material, count) {
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.name = name;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    root.add(mesh);
    return mesh;
  }

  const swatches = new Map();
  let parts = 0;
  for (const actor of paths.walkers) paintWalker(actor, true, shade => {
    parts++;
    if (!swatches.has(shade)) swatches.set(shade, new THREE.Color(shade));
  });
  const walkers = layer('sidewalk-walkers', new THREE.SphereGeometry(1, 9, 6),
    new THREE.MeshStandardMaterial({color: '#fff', roughness: .81}), parts);
  const shadows = layer('sidewalk-contact-shadows', new THREE.CircleGeometry(1, 16).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({color: '#584b52', opacity: .23, transparent: true, depthWrite: false}),
    paths.walkers.length + paths.cyclists.length);
  const bikes = new Map(STORYBOOK_BICYCLES.map(style => {
    const count = paths.cyclists.filter(actor => actor.style.id === style.id).length;
    return [style.id, count ? buildStorybookBicycle(style.id).map(({geometry, material, role}) =>
      ({role, mesh: layer(`sidewalk-bicycle-${style.id}-${role}`, geometry, material, count)})) : []];
  }));

  let lastNight;
  let liveSeconds = 0;
  let previousLiveTime;
  let lastPose;
  let lastPalette;
  function update(seconds, {reduceMotion = false, night = false, transientTelemetry = false, activity, inView,worldLife} = {}) {
    const life=worldLife&&normalizeWorldLifeSettings(worldLife),pace=life?.pace??1,lifeKey=JSON.stringify(life);
    root.visible=!life||(life.enabled&&life.characters&&life.density>0);
    if(!root.visible)return;
    const dark = night || activity === 'evening' || activity === 'overnight';
    if (dark !== lastNight) {
      for (const layers of bikes.values()) for (const {role, mesh} of layers) {
        if (role === 'headlamp') mesh.material.emissiveIntensity = dark ? 1.05 : .16;
        if (role === 'taillamp') mesh.material.emissiveIntensity = dark ? .75 : .18;
      }
      lastNight = dark;
    }
    if (!transientTelemetry) {
      const step = Number.isFinite(previousLiveTime) && Number.isFinite(seconds)
        ? THREE.MathUtils.clamp(seconds - previousLiveTime, 0, .25) : 0;
      if (!reduceMotion) liveSeconds += step*pace;
      previousLiveTime = seconds;
    }
    const time = transientTelemetry ? (reduceMotion ? 0 : seconds*pace) : liveSeconds;
    if (lastPose?.time === time && lastPose?.reduceMotion === reduceMotion &&
        lastPose?.transientTelemetry === transientTelemetry && lastPose?.night === night && lastPose?.activity === activity &&
        lastPose?.inView === inView&&lastPose?.lifeKey===lifeKey) return;
    const previouslyCulled = Boolean(lastPose?.inView);
    lastPose = {time, reduceMotion, transientTelemetry, night, activity, inView,lifeKey};
    const frame = paths.sample(time, reduceMotion, {night, activity});
    if(life&&life.density<1){
      const groups=[...new Set(frame.walkers.map(actor=>actor.groupId))];
      const kept=new Set(groups.filter((_,i)=>(i+life.seed)%groups.length<Math.ceil(groups.length*life.density)));
      frame.walkers=frame.walkers.filter(actor=>kept.has(actor.groupId));
      const count=frame.cyclists.length;
      frame.cyclists=frame.cyclists.filter((_,i)=>(i+life.seed)%count<Math.ceil(count*life.density));
    }
    const palette = frame.walkers.map(actor=>actor.id).join('|');
    const recolor = Boolean(inView) || previouslyCulled || palette !== lastPalette;
    lastPalette = palette;
    let partIndex = 0;
    let shadowIndex = 0;
    function shadow(actor, length, width) {
      transform.position.set(actor.x, actor.y + .065, actor.z);
      transform.rotation.set(0, actor.yaw, 0);
      transform.scale.set(length * actor.scale, 1, width * actor.scale);
      transform.updateMatrix();
      shadows.setMatrixAt(shadowIndex++, transform.matrix);
    }
    for (const actor of frame.walkers) {
      const {scale, yaw} = actor;
      // The body, moving limbs, and painted contact shadow all fit inside this envelope.
      if (inView && !inView(actor.x, actor.y + 12 * scale, actor.z, 15 * scale)) continue;
      const cosine = Math.cos(yaw), sine = Math.sin(yaw);
      paintWalker(actor, reduceMotion, (shade, x, y, z, width, height, depth, lean = 0) => {
        transform.position.set(actor.x + (x * cosine + z * sine) * scale, actor.y + y * scale,
          actor.z + (z * cosine - x * sine) * scale);
        transform.rotation.set(0, yaw, lean);
        transform.scale.set(width * scale, height * scale, depth * scale);
        transform.updateMatrix();
        if (recolor) walkers.setColorAt(partIndex, swatches.get(shade));
        walkers.setMatrixAt(partIndex++, transform.matrix);
      });
      shadow(actor, 5.32, 4.1);
    }
    const bikeCounts = new Map();
    for (const actor of frame.cyclists) {
      if (inView && !inView(actor.x, actor.y + 11 * actor.scale, actor.z,
        Math.hypot(actor.style.length * .6, 20) * actor.scale)) continue;
      const index = bikeCounts.get(actor.style.id) ?? 0;
      transform.position.set(actor.x, actor.y, actor.z);
      transform.rotation.set(0, actor.yaw, 0);
      if (!reduceMotion) transform.rotateX(Math.sin(actor.gait) * .028);
      transform.scale.setScalar(actor.scale);
      transform.updateMatrix();
      for (const {mesh} of bikes.get(actor.style.id)) mesh.setMatrixAt(index, transform.matrix);
      bikeCounts.set(actor.style.id, index + 1);
      shadow(actor, actor.style.length * .52, actor.style.width * .58);
    }
    for (const [style, layers] of bikes) for (const {mesh} of layers) {
      mesh.count = bikeCounts.get(style) ?? 0;
      mesh.visible = mesh.count > 0;
      if (mesh.visible) mesh.instanceMatrix.needsUpdate = true;
    }
    walkers.count = partIndex;
    shadows.count = shadowIndex;
    walkers.visible = partIndex > 0;
    shadows.visible = shadowIndex > 0;
    if (walkers.visible) {
      if (recolor && walkers.instanceColor) walkers.instanceColor.needsUpdate = true;
      walkers.instanceMatrix.needsUpdate = true;
    }
    if (shadows.visible) shadows.instanceMatrix.needsUpdate = true;
  }

  function dispose() {
    for (const mesh of root.children) {
      mesh.dispose();
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
    root.clear();
    root.removeFromParent();
  }
  return {root, update, dispose};
}
