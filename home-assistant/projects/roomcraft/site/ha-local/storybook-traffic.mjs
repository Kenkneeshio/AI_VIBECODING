import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const PATTERNS = new Map([
  ['clear', {stride: 4, speed: 86}],
  ['slow', {stride: 2, speed: 53}],
  ['heavy', {stride: 1, speed: 24}],
]);
const BODY_COLORS = ['#d18570', '#72a4a8', '#e5b86f', '#f2dfbe', '#9b91b4', '#79977d']
  .map(color => new THREE.Color(color));

/** Advance two illustrative lanes without tying the art to a route's actual car positions. */
export function createTrafficMotion({centerX, width, lanes}) {
  const span = width - 60;
  const start = centerX - span / 2;
  const count = Math.max(1, Math.floor(span / 242));
  const spacing = span / count;
  const slots = lanes.map((z, lane) => Array.from({length: count}, (_, index) => ({
    z, lane, index, x: start,
    offset: spacing * (index + (lane ? .7 : .25)) + ((index * 11 + lane * 7) % 13) - 6,
  })));
  const phases = [0, 0];
  let previousTime;
  let previousPattern;
  let visible = [];
  function update(time, profile, reduceMotion, fromDemoClock = false) {
    const pattern = PATTERNS.get(profile?.severity);
    const step = Number.isFinite(previousTime) && Number.isFinite(time)
      ? THREE.MathUtils.clamp(time - previousTime, 0, .25) : 0;
    previousTime = time;
    if (pattern !== previousPattern) {
      visible = pattern ? slots.flatMap((lane, side) => lane.filter(({index}) => index % pattern.stride === side % pattern.stride)) : [];
      previousPattern = pattern;
    }
    if (!pattern) return visible;
    const factor = profile.speedFactor;
    const speed = Number.isFinite(factor) && factor > 0
      ? PATTERNS.get('clear').speed * THREE.MathUtils.clamp(factor, .22, 1) : pattern.speed;
    if (fromDemoClock) {
      const distance = !reduceMotion && Number.isFinite(time) ? Math.max(0, time) * speed : 0;
      phases[0] = distance % span;
      phases[1] = (distance * .94) % span;
    } else if (!reduceMotion) {
      phases[0] = (phases[0] + step * speed) % span;
      phases[1] = (phases[1] + step * speed * .94) % span;
    }
    for (const slot of visible) {
      const offset = slot.offset + (slot.lane ? -phases[1] : phases[0]);
      slot.x = start + (offset + span) % span;
    }
    return visible;
  }
  return {capacity: count * lanes.length, update};
}

function rounded(w, h, d, radius, x, y, z) {
  return new RoundedBoxGeometry(w, h, d, 1, radius).translate(x, y, z);
}

function combine(parts) {
  const unindexed = parts.map(part => part.index ? part.toNonIndexed() : part);
  const geometry = mergeGeometries(unindexed);
  for (const part of new Set([...parts, ...unindexed])) part.dispose();
  return geometry;
}

function glazing() {
  const shape = new THREE.Shape();
  shape.moveTo(-17, 10.9);
  shape.lineTo(-10.6, 18.5);
  shape.lineTo(7.6, 18.5);
  shape.lineTo(16, 10.9);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {depth: 17.8, bevelEnabled: true, bevelSegments: 1,
    bevelSize: 1.3, bevelThickness: .7}).translate(0, 0, -8.9);
}

function wheels(radius, depth, y, offset) {
  return combine([-16, 16].flatMap(x => [-offset, offset].map(z =>
    new THREE.CylinderGeometry(radius, radius, depth, 10).rotateX(Math.PI / 2).translate(x, y, z))));
}

/** Batch shared miniature car geometry into a few draw calls on the main 3D road. */
export function createStorybookTraffic(road) {
  const root = new THREE.Group();
  const motion = createTrafficMotion(road);
  let demoMotion;
  const meshes = [];
  function layer(geometry, material) {
    const mesh = new THREE.InstancedMesh(geometry, material, motion.capacity);
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    meshes.push(mesh);
    root.add(mesh);
    return mesh;
  }
  const matte = (color, roughness = .76) => new THREE.MeshStandardMaterial({color, roughness});
  layer(new THREE.CircleGeometry(1, 18).rotateX(-Math.PI / 2).scale(29, 1, 13.8).translate(0, .02, 0),
    new THREE.MeshBasicMaterial({color: '#35323c', opacity: .23, transparent: true, depthWrite: false}));
  const paint = layer(combine([
    rounded(52, 8.8, 22, 2.9, 0, 7.2, 0),
    rounded(21, 2, 17.5, .85, -1.1, 18.9, 0),
    rounded(4, 2.4, 3.5, .9, 9.2, 11.5, -11.3),
    rounded(4, 2.4, 3.5, .9, 9.2, 11.5, 11.3),
  ]), matte('#ffffff', .49));
  layer(glazing(), matte('#415665', .37));
  layer(wheels(3.9, 2.5, 3.95, 10.2), matte('#403b43'));
  layer(wheels(1.85, .48, 3.95, 11.57), matte('#b7a99b'));
  const lamp = (color, emissive) => new THREE.MeshStandardMaterial({color, emissive, roughness: .58});
  const headlamps = lamp('#fbecd2', '#ffe4ab');
  const taillamps = lamp('#b95451', '#ec6d54');
  for (const [x, material] of [[24.9, headlamps], [-24.9, taillamps]]) {
    layer(combine([-7.5, 7.5].map(z => rounded(2.5, 2.7, 4.7, 1.1, x, 8.4, z))), material);
  }
  const transform = new THREE.Object3D();
  let lastSlots;
  let lastNight;
  root.visible = false;
  function update(time, profile, {reduceMotion = false, night = false, transientTelemetry = false} = {}) {
    if (transientTelemetry) demoMotion ??= createTrafficMotion(road);
    const clock = transientTelemetry ? demoMotion : motion;
    const slots = clock.update(time, profile, reduceMotion, transientTelemetry);
    root.visible = slots.length > 0;
    if (!root.visible) return;
    if (night !== lastNight) {
      headlamps.emissiveIntensity = night ? 1.65 : .26;
      taillamps.emissiveIntensity = night ? .91 : .28;
      lastNight = night;
    }
    for (const [index, slot] of slots.entries()) {
      transform.position.set(slot.x, road.surfaceY, slot.z);
      transform.rotation.y = slot.lane ? Math.PI : 0;
      transform.updateMatrix();
      for (const mesh of meshes) mesh.setMatrixAt(index, transform.matrix);
      if (slots !== lastSlots) paint.setColorAt(index, BODY_COLORS[(slot.index + slot.lane * 3) % BODY_COLORS.length]);
    }
    for (const mesh of meshes) {
      mesh.count = slots.length;
      mesh.instanceMatrix.needsUpdate = true;
    }
    if (slots !== lastSlots) paint.instanceColor.needsUpdate = true;
    lastSlots = slots;
  }
  return {root, update, dispose: () => meshes.forEach(mesh => mesh.dispose())};
}
