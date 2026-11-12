import * as THREE from 'three';
import {storybookSolar} from './storybook-solar.mjs';

const LIGHTS = 3;
const LIGHT_PALETTES = {
  night: ['#a8b8f5', '#5b536e', '#a7b8ed', '#97a5c5', '#343951'],
  clear: ['#f2f5ff', '#998b85', '#fff0d9', '#f4f1d8', '#c0cbb4'],
  overcast: ['#dce6f1', '#8c8797', '#e9eff9', '#ccd6c6', '#aebbb4'],
};
const DAYLIGHT_COLORS = Object.fromEntries(Object.entries(LIGHT_PALETTES)
  .map(([kind, colors]) => [kind, colors.map(color => new THREE.Color(color))]));
const LOW_SUN_COLORS = {
  sunrise: ['#f6bfc2', '#947b96', '#ffd29d', '#f0c7b7', '#767d9c'],
  sunset: ['#f1ad90', '#8d647a', '#ffaf71', '#eab290', '#80677f'],
};
const HORIZON_COLORS = Object.fromEntries(Object.entries(LOW_SUN_COLORS)
  .map(([kind, colors]) => [kind, colors.map(color => new THREE.Color(color))]));
const {clamp, lerp, smoothstep} = THREE.MathUtils;

export function createStorybookLighting(renderer, scene, bounds) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.07;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;

  const sky = new THREE.HemisphereLight('#fff4e5', '#897e91', 1.13);
  const key = new THREE.DirectionalLight('#fff0d4', 2.15);
  const fill = new THREE.DirectionalLight('#dbeaff', 0.24);
  const {minX, maxX, minZ, maxZ} = bounds;
  const x = (minX + maxX) / 2;
  const z = (minZ + maxZ) / 2;
  key.position.set(x - 610, 1150, z - 490);
  key.target.position.set(x, 0, z);
  fill.position.set(x + 290, 410, z + 410);
  key.castShadow = true;
  key.shadow.mapSize.setScalar(Math.min(2048, renderer.capabilities.maxTextureSize));
  const span = Math.hypot(maxX - minX, maxZ - minZ) / 2 + 175;
  Object.assign(key.shadow.camera, {
    left: -span, right: span, top: span, bottom: -span, near: 20, far: 2700
  });
  key.shadow.camera.updateProjectionMatrix();
  key.shadow.normalBias = 1.15;
  key.shadow.bias = -0.00012;
  key.shadow.radius = 3.4;
  const accents = Array.from({length: LIGHTS}, () => new THREE.PointLight('#ffd7a5', 0, 145, 2));
  scene.add(sky, key, key.target, fill, ...accents);

  const candidates = [];
  let previousEnvironment;
  let previousDirection;
  let previousStates;
  let drawShadow = true;
  const rgb = new THREE.Color();
  const dayColor = new THREE.Color();

  function markStructure() {
    for (const node of scene.children) {
      if (!node.isMesh) continue;
      node.receiveShadow = true;
      node.geometry.computeBoundingBox();
      // The connected floor slab also blocks sunlight onto the ground.
      node.castShadow = node.geometry.boundingBox.max.y + node.position.y > -99;
    }
  }

  function register(item, object) {
    const fixture = /(light|lamp|sconce)/i.test(item.type);
    const shadow = !object.animate || fixture;
    object.root.traverse(node => {
      if (!node.isMesh || node.material.transparent || node.material.isShaderMaterial) return;
      node.receiveShadow = true;
      node.castShadow ||= shadow;
    });
    if (fixture && item.entityId && item.visualKind !== 'none') candidates.push({item, object});
  }

  function update(environment, states, ground, placementChanged = false) {
    const {elevation, azimuth, rising, daylight, twilight, lowSun, cloud} = environment.solar ?? storybookSolar(environment);
    const dayElevation = clamp(elevation, -12, 35);
    const profile = `${rising}:${Math.round(dayElevation * 4)}:${Math.round(cloud * 32)}`;
    const direct = smoothstep(elevation, -.85, 9);
    if (profile !== previousEnvironment) {
      const surfaces = [sky.color, sky.groundColor, key.color, ground.color, scene.background];
      const horizon = HORIZON_COLORS[rising ? 'sunrise' : 'sunset'];
      for (const [index, color] of surfaces.entries()) {
        dayColor.lerpColors(DAYLIGHT_COLORS.clear[index], DAYLIGHT_COLORS.overcast[index], cloud);
        color.lerpColors(DAYLIGHT_COLORS.night[index], dayColor, daylight);
        const warmth = index === 2 ? lowSun * .76 : twilight * (index === 4 ? .55 : .43);
        color.lerp(horizon[index], warmth * (1 - cloud * .73));
      }
      sky.intensity = lerp(.63, 1.13 + cloud * .17, daylight) + twilight * .17;
      key.intensity = .23 + direct * lerp(1.91, .48, cloud) * lerp(.46, 1, daylight);
      fill.intensity = lerp(.17, .23, daylight) + twilight * .08;
      key.shadow.intensity = direct * lerp(.83, .21, cloud);
      previousEnvironment = profile;
      previousStates = undefined;
    }
    // Quantized direction avoids rebuilding the shadow texture on animation frames
    // where the sun is effectively stationary. Low angles are bounded for the miniature.
    const bearing = Math.round(azimuth / 2) * 2;
    const altitude = Math.max(10, Math.round(elevation));
    const direction = `${bearing}:${altitude}`;
    if (direct > 0 && direction !== previousDirection) {
      const heading = THREE.MathUtils.degToRad(bearing);
      const angle = THREE.MathUtils.degToRad(altitude);
      const horizontal = Math.cos(angle) * 1600;
      key.position.set(x + Math.sin(heading) * horizontal, Math.sin(angle) * 1600,
        z - Math.cos(heading) * horizontal);
      previousDirection = direction;
      drawShadow = true;
    }
    if (previousStates !== states || placementChanged) {
      const lit = candidates.flatMap(({item, object}) => {
        const entity = states[item.id];
        if (entity?.state !== 'on') return [];
        const power = Number.isFinite(entity.attributes?.brightness)
          ? THREE.MathUtils.clamp(entity.attributes.brightness / 255, 0, 1) : 1;
        return power > 0 ? [{object, power, color: entity.attributes?.rgb_color}] : [];
      }).sort((a, b) => b.power - a.power);
      for (const [index, light] of accents.entries()) {
        const entry = lit[index];
        if (!entry) {
          light.intensity = 0;
          continue;
        }
        const {object, power, color} = entry;
        const validColor = Array.isArray(color) && color.length === 3 && color.every(Number.isFinite);
        if (validColor) {
          rgb.setRGB(...color.map(value => THREE.MathUtils.clamp(value / 255, 0, 1)), THREE.SRGBColorSpace);
          light.color.copy(rgb);
        } else light.color.set('#ffd5a2');
        light.position.copy(object.root.position);
        light.position.y += Math.max(18, (object.anchorY - 9) * object.root.scale.y);
        light.intensity = power * lerp(2350, 1250, daylight);
      }
      previousStates = states;
    }
    // Shadow-casting materials need a valid texture on the first frame even
    // when darkness makes the directional shadow invisible.
    if (drawShadow || (placementChanged && direct > 0)) {
      renderer.shadowMap.needsUpdate = true;
      drawShadow = false;
    }
  }

  return {markStructure, register, update, dispose: () => key.shadow.dispose()};
}
