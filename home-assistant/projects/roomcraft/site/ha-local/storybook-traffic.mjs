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
const MAX_HEADLIGHT_LENGTH = 86;
const VEHICLES = new Map(STORYBOOK_VEHICLES.map(vehicle => [vehicle.id, vehicle]));
const NEIGHBORHOOD_FLEET = [
  'seafoam-sedan', 'blue-wagon', 'butter-compact', 'ruby-motorcycle',
  'pine-suv', 'blue-wagon', 'sand-pickup', 'butter-compact',
  'lavender-delivery', 'pine-suv', 'teal-semi', 'indigo-motorcycle',
].map(id => VEHICLES.get(id));
const HEADLIGHT_COLOR = new THREE.Color('#fff1cf');
const TAILLIGHT_COLOR = new THREE.Color('#db514c');

function lampMounts(geometry) {
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  if (box.max.z - box.min.z < 5) return [box.getCenter(new THREE.Vector3())];
  const middle = (box.min.z + box.max.z) / 2;
  const halves = [new THREE.Box3(), new THREE.Box3()];
  const point = new THREE.Vector3();
  const vertices = geometry.attributes.position;
  for (let index = 0; index < vertices.count; index++) {
    point.fromBufferAttribute(vertices, index);
    halves[Number(point.z >= middle)].expandByPoint(point);
  }
  return halves.map(half => half.getCenter(new THREE.Vector3()));
}

const LIGHT_FADE = `
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      opacity *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      opacity *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
`;

function nightLightMaterial(billboard) {
  const uniforms = {...THREE.UniformsUtils.clone(THREE.UniformsLib.fog), lightStrength: {value: 1}};
  return new THREE.ShaderMaterial({
    fog:true,
    uniforms,
    transparent:true,
    depthWrite:false,
    blending:THREE.AdditiveBlending,
    toneMapped:false,
    vertexShader:`
      varying vec2 lightUv;
      ${billboard ? 'varying vec3 tint;' : ''}
      #include <fog_pars_vertex>
      void main() {
        lightUv = uv;
        ${billboard ? `
          tint = instanceColor;
          vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mvPosition.xy += position.xy * vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));
        ` : 'vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);'}
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,
    fragmentShader:`
      varying vec2 lightUv;
      uniform float lightStrength;
      ${billboard ? 'varying vec3 tint;' : ''}
      #include <fog_pars_fragment>
      void main() {
        ${billboard ? `
          float radius = length(lightUv * 2.0 - 1.0);
          float bloom = 1.0 - smoothstep(0.06, 0.96, radius);
          float center = 1.0 - smoothstep(0.10, 0.38, radius);
          float opacity = bloom * bloom * 0.43 + center * 0.39;
          vec3 color = tint;
        ` : `
          float along = lightUv.x;
          float width = mix(0.23, 1.0, smoothstep(0.02, 0.76, along));
          float softEdge = 1.0 - smoothstep(width * 0.22, width, abs(lightUv.y * 2.0 - 1.0));
          float falloff = smoothstep(0.0, 0.09, along) * pow(1.0 - along, 1.42);
          float opacity = softEdge * falloff * 0.39;
          vec3 color = vec3(1.0, 0.80, 0.53);
        `}
        ${LIGHT_FADE}
        gl_FragColor = vec4(color, clamp(opacity * lightStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `,
  });
}

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
  function meshFor(geometry, material, capacity = motion.capacity) {
    const mesh = new THREE.InstancedMesh(geometry, material, capacity);
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    return mesh;
  }
  const shadows = meshFor(new THREE.CircleGeometry(1, 18).rotateX(-Math.PI / 2).translate(0, .02, 0),
    new THREE.MeshBasicMaterial({color: '#35323c', opacity: .23, transparent: true, depthWrite: false}));
  const beams = meshFor(new THREE.PlaneGeometry(1, 2).rotateX(-Math.PI / 2).translate(.5, .16, 0),
    nightLightMaterial(false), motion.capacity * 2);
  beams.name = 'road-headlight-beams';
  const halos = meshFor(new THREE.PlaneGeometry(1, 1), nightLightMaterial(true), motion.capacity * 4);
  halos.name = 'road-lamp-halos';
  beams.visible = halos.visible = false;
  root.add(shadows, beams, halos);
  const transform = new THREE.Object3D();
  const laneHalf = Math.abs(road.lanes[0] - road.lanes[1]) / 2;
  let lastNight;
  let lastBrightness = 1;
  root.visible = false;

  function setLamps(model, night) {
    for (const {mesh, role} of model.layers) {
      if (role === 'headlamp') mesh.material.emissiveIntensity = night ? 2.45 * lastBrightness : .26;
      if (role === 'taillamp') mesh.material.emissiveIntensity = night ? 1.13 * lastBrightness : .28;
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
    const mounts = role => lampMounts(layers.find(layer => layer.role === role).mesh.geometry);
    const model = {group, layers, headlamps:mounts('headlamp'), taillamps:mounts('taillamp'), count: 0};
    setLamps(model, lastNight);
    models.set(vehicle.id, model);
    return model;
  }

  function haloAt(index, slot, direction, lamp, front) {
    const size = front ? 12.4 : 8.6;
    transform.position.set(slot.x + direction * (lamp.x + (front ? 1.1 : -1.0)),
      road.surfaceY + lamp.y + .8, slot.z + direction * lamp.z);
    transform.scale.set(size, size, 1);
    transform.updateMatrix();
    halos.setMatrixAt(index, transform.matrix);
    halos.setColorAt(index, front ? HEADLIGHT_COLOR : TAILLIGHT_COLOR);
  }

  function update(time, profile, {reduceMotion = false, night = false, transientTelemetry = false,
    headlightBrightness = 1, inView} = {}) {
    if (transientTelemetry) demoMotion ??= createTrafficMotion(road);
    const clock = transientTelemetry ? demoMotion : motion;
    const slots = clock.update(time, profile, reduceMotion, transientTelemetry);
    root.visible = slots.length > 0;
    beams.visible = halos.visible = night && root.visible;
    beams.count = halos.count = 0;
    if (!root.visible) return;
    const brightness = Number.isFinite(headlightBrightness) ? THREE.MathUtils.clamp(headlightBrightness, .35, 1.6) : 1;
    if (night !== lastNight || brightness !== lastBrightness) {
      lastNight = night;
      lastBrightness = brightness;
      beams.material.uniforms.lightStrength.value = brightness;
      halos.material.uniforms.lightStrength.value = brightness;
      for (const model of models.values()) setLamps(model, night);
    }
    for (const model of models.values()) model.count = 0;
    const selected = VEHICLES.get(profile?.vehicleStyle);
    let beamIndex = 0;
    let haloIndex = 0;
    let shadowCount = 0;
    for (const slot of slots) {
      // Keep a car's silhouette stable across wraps and changes in traffic mode.
      const vehicle = selected ?? neighborhoodVehicle(slot);
      // Include painted shadows, the headlight projection, and camera-facing lamp halos.
      const reach = vehicle.length * .6 + (night ? MAX_HEADLIGHT_LENGTH : 0);
      if (inView && !inView(slot.x, road.surfaceY, slot.z, Math.hypot(reach, vehicle.width, 45))) continue;
      const model = modelFor(vehicle);
      transform.position.set(slot.x, road.surfaceY, slot.z);
      transform.rotation.y = slot.lane ? Math.PI : 0;
      transform.scale.set(1, 1, 1);
      transform.updateMatrix();
      for (const {mesh} of model.layers) mesh.setMatrixAt(model.count, transform.matrix);
      model.count++;
      transform.scale.set(vehicle.length * .55, 1, vehicle.width * .62);
      transform.updateMatrix();
      shadows.setMatrixAt(shadowCount++, transform.matrix);
      if (!night) continue;
      const direction = slot.lane ? -1 : 1;
      const length = THREE.MathUtils.clamp(vehicle.length * 1.10, 53, MAX_HEADLIGHT_LENGTH);
      for (const lamp of model.headlamps) {
        const width = Math.max(5, Math.min(16, laneHalf - Math.abs(lamp.z) - 1));
        transform.position.set(slot.x + direction * (lamp.x + 1), road.surfaceY, slot.z + direction * lamp.z);
        transform.scale.set(length, 1, width);
        transform.updateMatrix();
        beams.setMatrixAt(beamIndex++, transform.matrix);
        haloAt(haloIndex++, slot, direction, lamp, true);
      }
      for (const lamp of model.taillamps) haloAt(haloIndex++, slot, direction, lamp, false);
    }
    if (night) {
      beams.count = beamIndex;
      halos.count = haloIndex;
      beams.instanceMatrix.needsUpdate = halos.instanceMatrix.needsUpdate = true;
      halos.instanceColor.needsUpdate = true;
    }
    root.visible = shadowCount > 0;
    shadows.count = shadowCount;
    if (shadowCount) shadows.instanceMatrix.needsUpdate = true;
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
