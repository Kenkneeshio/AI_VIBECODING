import * as THREE from 'three';
import {STORYBOOK_VEHICLES, buildStorybookVehicle} from './storybook-vehicles.mjs';

const PATTERNS = new Map([
  ['clear', {stride: 4, speed: 70}],
  ['slow', {stride: 2, speed: 44}],
  ['heavy', {stride: 1, speed: 20}],
]);
const AMBIENT = {stride: 4, crossingSeconds: 3.2};
const SLOT_SPACING = 242;
const DENSITY_CYCLE = 12;
const TRANSITION_SECONDS = .38;
const VEHICLES = new Map(STORYBOOK_VEHICLES.map(vehicle => [vehicle.id, vehicle]));
const NEIGHBORHOOD_FLEET = [
  'seafoam-sedan', 'blue-wagon', 'butter-compact', 'seafoam-sedan',
  'pine-suv', 'blue-wagon', 'sand-pickup', 'butter-compact',
  'lavender-delivery', 'pine-suv', 'seafoam-sedan', 'indigo-motorcycle',
].map(id => VEHICLES.get(id));

function neighborhoodVehicle({index, lane}) {
  const block = Math.floor(index / AMBIENT.stride);
  const positionInBlock = index % AMBIENT.stride;
  return NEIGHBORHOOD_FLEET[(2 * (block + positionInBlock) + lane) % NEIGHBORHOOD_FLEET.length];
}

/** Advance two illustrative lanes without tying the art to a route's actual car positions. */
export function createTrafficMotion({centerX, width, lanes}) {
  const span = width - 60;
  const start = centerX - span / 2;
  // Use a lattice shared by the density presets so a change can keep the
  // cars already in both patterns at their existing positions.
  const count = Math.max(1, DENSITY_CYCLE * Math.round(span / (DENSITY_CYCLE * SLOT_SPACING)));
  const spacing = span / count;
  const slots = lanes.map((z, lane) => Array.from({length: count}, (_, index) => ({
    z, lane, index, x: start,
    offset: spacing * (index + .25 + (count === 1 && lane ? .5 : 0)),
  })));
  let distance = 0;
  let previousTime;
  let previousPattern;
  let velocity;
  let easing = false;
  let visible = [];
  function update(time, profile, reduceMotion, fromDemoClock = false) {
    const pattern = profile?.severity === 'ambient' ? AMBIENT : PATTERNS.get(profile?.severity);
    const step = Number.isFinite(previousTime) && Number.isFinite(time)
      ? THREE.MathUtils.clamp(time - previousTime, 0, .25) : 0;
    previousTime = time;
    if (pattern !== previousPattern) {
      easing = Boolean(previousPattern && pattern && (pattern === AMBIENT || previousPattern === AMBIENT));
      const stride = Math.min(count, pattern?.stride ?? 1);
      const laneStep = pattern === AMBIENT ? Math.floor(stride / 2) : 1;
      visible = pattern ? slots.flatMap((lane, side) =>
        lane.filter(({index}) => index % stride === side * laneStep % stride)) : [];
      previousPattern = pattern;
    }
    if (!pattern) {
      velocity = undefined;
      return visible;
    }
    const factor = profile.speedFactor;
    // Give each lane twice the passing interval. Offset the scenic lanes
    // by half their spacing so their crossings alternate at the midpoint.
    const speed = pattern === AMBIENT
      ? spacing * Math.min(count, AMBIENT.stride) / (2 * AMBIENT.crossingSeconds)
      : Number.isFinite(factor) && factor > 0
        ? PATTERNS.get('clear').speed * THREE.MathUtils.clamp(factor, .22, 1) : pattern.speed;
    if (fromDemoClock) {
      distance = !reduceMotion && Number.isFinite(time) ? Math.max(0, time) * speed : 0;
    } else if (!reduceMotion) {
      if (easing && velocity !== undefined) {
        const remaining = Math.exp(-step / TRANSITION_SECONDS);
        const difference = velocity - speed;
        distance += step * speed + difference * TRANSITION_SECONDS * (1 - remaining);
        velocity = speed + difference * remaining;
        easing = Math.abs(velocity - speed) > .1;
      } else {
        distance += step * speed;
        velocity = speed;
      }
    }
    distance %= span;
    for (const slot of visible) {
      const offset = (slot.offset + distance) % span;
      slot.x = start + (slot.lane ? span - offset : offset);
    }
    return visible;
  }
  return {capacity: count * lanes.length, update};
}

/** Instance each miniature silhouette and reuse one shadow layer across the road. */
export function createStorybookTraffic(road) {
  const root = new THREE.Group();
  const motion = createTrafficMotion(road);
  let demoMotion;
  const models = new Map();
  function meshFor(geometry, material) {
    const mesh = new THREE.InstancedMesh(geometry, material, motion.capacity);
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    return mesh;
  }
  const shadows = meshFor(new THREE.CircleGeometry(1, 18).rotateX(-Math.PI / 2).translate(0, .02, 0),
    new THREE.MeshBasicMaterial({color: '#35323c', opacity: .23, transparent: true, depthWrite: false}));
  root.add(shadows);
  const transform = new THREE.Object3D();
  let lastNight;
  root.visible = false;

  function setLamps(model, night) {
    for (const {mesh, role} of model.layers) {
      if (role === 'headlamp') mesh.material.emissiveIntensity = night ? 1.65 : .26;
      if (role === 'taillamp') mesh.material.emissiveIntensity = night ? .91 : .28;
    }
  }

  function modelFor(vehicle) {
    if (models.has(vehicle.id)) return models.get(vehicle.id);
    const group = new THREE.Group();
    group.name = `vehicle-${vehicle.id}`;
    const layers = buildStorybookVehicle(vehicle.id).map(({geometry, material, role}) =>
      ({mesh: meshFor(geometry, material), role}));
    group.add(...layers.map(({mesh}) => mesh));
    root.add(group);
    const model = {group, layers, count: 0};
    setLamps(model, lastNight);
    models.set(vehicle.id, model);
    return model;
  }

  function update(time, profile, {reduceMotion = false, night = false, transientTelemetry = false} = {}) {
    if (transientTelemetry) demoMotion ??= createTrafficMotion(road);
    const clock = transientTelemetry ? demoMotion : motion;
    const slots = clock.update(time, profile, reduceMotion, transientTelemetry);
    root.visible = slots.length > 0;
    if (!root.visible) return;
    if (night !== lastNight) {
      lastNight = night;
      for (const model of models.values()) setLamps(model, night);
    }
    for (const model of models.values()) model.count = 0;
    const selected = VEHICLES.get(profile?.vehicleStyle);
    for (const [index, slot] of slots.entries()) {
      // Keep a car's silhouette stable across wraps and changes in traffic mode.
      const vehicle = selected ?? neighborhoodVehicle(slot);
      const model = modelFor(vehicle);
      transform.position.set(slot.x, road.surfaceY, slot.z);
      transform.rotation.y = slot.lane ? Math.PI : 0;
      transform.scale.set(1, 1, 1);
      transform.updateMatrix();
      for (const {mesh} of model.layers) mesh.setMatrixAt(model.count, transform.matrix);
      model.count++;
      transform.scale.set(vehicle.length * .55, 1, vehicle.width * .62);
      transform.updateMatrix();
      shadows.setMatrixAt(index, transform.matrix);
    }
    shadows.count = slots.length;
    shadows.instanceMatrix.needsUpdate = true;
    for (const {group, layers, count} of models.values()) {
      group.visible = count > 0;
      for (const {mesh} of layers) {
        mesh.count = count;
        if (count) mesh.instanceMatrix.needsUpdate = true;
      }
    }
  }
  function dispose() {
    root.traverse(mesh => {
      if (!mesh.isInstancedMesh) return;
      mesh.dispose();
      mesh.geometry.dispose();
      mesh.material.dispose();
    });
    root.clear();
  }
  return {root, update, dispose};
}
