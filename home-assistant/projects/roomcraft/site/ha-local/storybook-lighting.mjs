import * as THREE from 'three';

const OVERCAST = new Set(['cloudy', 'fog', 'hail', 'lightning', 'lightning-rainy',
  'pouring', 'rainy', 'snowy', 'snowy-rainy', 'windy-variant']);
const LIGHTS = 3;
const LIGHT_PALETTES = {
  night: ['#a8b8f5', '#5b536e', '#a7b8ed', '#97a5c5', '#343951'],
  clear: ['#f2f5ff', '#998b85', '#fff0d9', '#f4f1d8', '#c0cbb4'],
  overcast: ['#dce6f1', '#8c8797', '#e9eff9', '#ccd6c6', '#aebbb4'],
};
const DAYLIGHT_COLORS = Object.fromEntries(Object.entries(LIGHT_PALETTES)
  .map(([kind, colors]) => [kind, colors.map(color => new THREE.Color(color))]));
const LOW_SUN_COLOR = new THREE.Color('#ffc38b');
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
  let previousStates;
  let drawShadow = true;
  const rgb = new THREE.Color();

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
    if (fixture && item.entityId) candidates.push({item, object});
  }

  function update(environment, states, ground, placementChanged = false) {
    const night = environment.night === true;
    const overcast = OVERCAST.has(environment.condition);
    const elevation = Number.isFinite(environment.sunElevation)
      ? Math.round(environment.sunElevation * 2) / 2 : night ? -12 : 35;
    const daylight = smoothstep(elevation, -8, 19);
    const profile = `${overcast}:${clamp(elevation, -8, 35)}`;
    if (profile !== previousEnvironment) {
      const dayColors = DAYLIGHT_COLORS[overcast ? 'overcast' : 'clear'];
      const surfaces = [sky.color, sky.groundColor, key.color, ground.color, scene.background];
      for (const [index, color] of surfaces.entries()) {
        color.lerpColors(DAYLIGHT_COLORS.night[index], dayColors[index], daylight);
      }
      const lowSun = daylight * (1 - smoothstep(elevation, 8, 34));
      if (!overcast) key.color.lerp(LOW_SUN_COLOR, lowSun * .8);
      sky.intensity = lerp(.75, overcast ? 1.33 : 1.12, daylight);
      key.intensity = lerp(.28, overcast ? .86 : 2.14, daylight);
      fill.intensity = lerp(.12, .23, daylight);
      key.shadow.intensity = lerp(.65, overcast ? .39 : .84, daylight);
      previousEnvironment = profile;
      previousStates = undefined;
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
    if (drawShadow) {
      renderer.shadowMap.needsUpdate = true;
      drawShadow = false;
    }
  }

  return {markStructure, register, update, dispose: () => key.shadow.dispose()};
}
