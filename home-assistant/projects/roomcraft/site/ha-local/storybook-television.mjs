import * as THREE from 'three';

const vertexShader = `
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// A small original illustration. Screen artwork uses only the scene clock.
const screenShader = `
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    vec2 uv = panelUv;
    float time = screenTime;
    vec3 sky = mix(vec3(0.95, 0.36, 0.32), vec3(0.20, 0.42, 0.73), smoothstep(0.37, 1.0, uv.y));
    vec2 sunCenter = vec2(0.65 + sin(time * 0.17) * 0.10, 0.68 + sin(time * 0.21) * 0.035);
    float sun = 1.0 - smoothstep(0.083, 0.108, length((uv - sunCenter) * vec2(1.62, 1.0)));
    vec3 art = mix(sky, vec3(0.99, 0.80, 0.38), sun);
    float ridge = 0.37 + 0.11 * (1.0 - abs(sin(uv.x * 8.0 + time * 0.20)))
      + 0.15 * (1.0 - abs(sin(uv.x * 15.0 - time * 0.14)));
    art = mix(art, vec3(0.23, 0.29, 0.50), 1.0 - smoothstep(ridge, ridge + 0.018, uv.y));
    float ripple = smoothstep(0.67, 0.97, sin(uv.y * 125.0 + uv.x * 20.0 - time * 2.8));
    vec3 water = mix(vec3(0.09, 0.39, 0.56), vec3(0.28, 0.76, 0.81), uv.y * 1.5);
    water = mix(water, vec3(0.68, 0.88, 0.85), ripple * 0.37);
    art = mix(water, art, smoothstep(0.30, 0.33, uv.y));
    float edge = 1.0 - smoothstep(0.45, 0.69, length(uv - 0.5));
    gl_FragColor = vec4(art * (0.58 + 0.42 * edge), 1.0);
    #include <colorspace_fragment>
  }
`;

const spillShader = `
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    float along = smoothstep(0.0, 0.22, panelUv.y) * (1.0 - smoothstep(0.78, 1.0, panelUv.y));
    float across = smoothstep(0.0, 0.84, panelUv.x) * (1.0 - smoothstep(0.92, 1.0, panelUv.x));
    float shimmer = 0.74 + 0.26 * sin(panelUv.y * 8.0 - screenTime * 0.7);
    vec3 tint = mix(vec3(0.20, 0.71, 0.81), vec3(0.66, 0.42, 0.78), shimmer * 0.65);
    gl_FragColor = vec4(tint, along * across * (0.32 + 0.17 * shimmer));
    #include <colorspace_fragment>
  }
`;

/** Mount lit glass and its light on the existing television cabinet. */
export function attachStorybookTelevision(model, width, depth) {
  const screenTime = {value: 0};
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(depth * .78, 43), new THREE.ShaderMaterial({
    uniforms: {screenTime}, vertexShader, fragmentShader: screenShader,
  }));
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
  screen.visible = spill.visible = false;
  model.root.add(screen, spill);

  model.animate = (state, timeSeconds) => {
    const powered = state?.active === true;
    screen.visible = spill.visible = powered;
    if (powered) screenTime.value = Number.isFinite(timeSeconds)
      ? Math.max(0, Math.floor(timeSeconds * 12) / 12) : 0;
  };
  return model;
}
