import * as THREE from 'three';

const OVERCAST = new Set(['cloudy', 'fog', 'hail', 'lightning', 'lightning-rainy',
  'pouring', 'rainy', 'snowy', 'snowy-rainy', 'windy-variant']);
const LIGHTS = 3;

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

  function update(environment, states, ground) {
    const night = environment.night === true;
    const overcast = OVERCAST.has(environment.condition);
    const profile = night ? 'night' : overcast ? 'cloud' : 'day';
    if (profile !== previousEnvironment) {
      sky.color.set(night ? '#a8b8f5' : overcast ? '#dce6f1' : '#fff4e5');
      sky.groundColor.set(night ? '#5b536e' : '#998291');
      sky.intensity = night ? 0.75 : overcast ? 1.33 : 1.12;
      key.color.set(night ? '#a7b8ed' : overcast ? '#e9eff9' : '#fff0d4');
      key.intensity = night ? 0.28 : overcast ? 0.86 : 2.14;
      fill.intensity = night ? 0.12 : 0.23;
      key.shadow.intensity = night ? 0.65 : overcast ? 0.39 : 0.84;
      ground.color.set(night ? '#97a5c5' : overcast ? '#ccd6c6' : '#f4f1d8');
      scene.background.set(night ? '#343951' : '#c0cbb4');
      previousEnvironment = profile;
      previousStates = undefined;
    }
    if (previousStates !== states) {
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
        light.position.y += Math.max(18, object.anchorY - 9);
        light.intensity = power * (night ? 2350 : 1250);
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
