import * as THREE from 'three';

const vertexShader = `
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const spillShader = `
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    float along = smoothstep(0.0, 0.22, panelUv.y) * (1.0 - smoothstep(0.78, 1.0, panelUv.y));
    float across = smoothstep(0.0, 0.84, panelUv.x) * (1.0 - smoothstep(0.92, 1.0, panelUv.x));
    float pulse = 0.23 + 0.025 * sin(screenTime * 1.4);
    gl_FragColor = vec4(vec3(0.91, 0.94, 1.0), along * across * pulse);
    #include <colorspace_fragment>
  }
`;

export function televisionLabel(attributes = {}) {
  const label = [attributes.media_title, attributes.media_series_title, attributes.app_name, attributes.source]
    .find(value => typeof value === 'string' && value.trim());
  return label?.replace(/\s+/g, ' ').trim().slice(0, 96) || 'TV on';
}

function labelTexture() {
  const canvas = globalThis.document?.createElement('canvas');
  const context = canvas?.getContext('2d');
  if (!context) return null;
  canvas.width = 640;
  canvas.height = 240;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return {context, texture};
}

function paintLabel({context, texture}, label) {
  const {width, height} = context.canvas;
  context.fillStyle = '#fffdf9';
  context.fillRect(0, 0, width, height);
  context.fillStyle = '#211f2c';
  context.font = '600 48px system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  let title = label;
  if (context.measureText(title).width > 590) {
    const characters = Array.from(title);
    while (characters.length && context.measureText(characters.join('') + '…').width > 590) characters.pop();
    title = characters.join('') + '…';
  }
  context.fillText(title, width / 2, height / 2);
  texture.needsUpdate = true;
}

/** The television uses only its linked media player's power and display text. */
export function attachStorybookTelevision(model, width, depth) {
  const screenTime = {value: 0};
  const screenMaterial = new THREE.MeshBasicMaterial({color:'#08090c', toneMapped:false});
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(depth * .78, 43), screenMaterial);
  screen.name = 'storybook-tv-screen';
  screen.position.set(-width * .155 - .84, 59, 0);
  screen.rotation.y = -Math.PI / 2;
  const spill = new THREE.Mesh(new THREE.PlaneGeometry(width * .27, depth * .79), new THREE.ShaderMaterial({
    uniforms: {screenTime}, vertexShader, fragmentShader: spillShader,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  spill.name = 'storybook-tv-spill';
  spill.position.set(-width * .325, 28.08, 0);
  spill.rotation.x = -Math.PI / 2;
  spill.visible = false;
  const label = labelTexture();
  // Keep the texture discoverable by the scene disposer even while the screen is off.
  screenMaterial.map = label?.texture ?? null;
  if (label) paintLabel(label, '');
  screen.userData.title = '';
  model.root.add(screen, spill);

  model.animate = (state, timeSeconds) => {
    const powered = state?.active === true;
    const title = powered ? televisionLabel(state.attributes) : '';
    if (title !== screen.userData.title) {
      screen.userData.title = title;
      if (label) paintLabel(label, title);
    }
    spill.visible = powered;
    screenMaterial.color.set(powered ? '#ffffff' : '#08090c');
    if (powered) screenTime.value = Number.isFinite(timeSeconds)
      ? Math.max(0, Math.floor(timeSeconds * 12) / 12) : 0;
  };
  return model;
}
