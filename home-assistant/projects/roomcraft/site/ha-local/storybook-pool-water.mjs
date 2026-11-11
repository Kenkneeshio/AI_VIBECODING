import * as THREE from 'three';

const OVERCAST = new Set(['cloudy', 'fog', 'hail', 'lightning', 'lightning-rainy',
  'pouring', 'rainy', 'snowy', 'snowy-rainy', 'windy-variant']);
const RAIN = new Set(['hail', 'lightning-rainy', 'pouring', 'rainy', 'snowy-rainy']);
const MOON_ANGLES = {
  waxing_crescent: 3 * Math.PI / 4,
  first_quarter: Math.PI / 2,
  waxing_gibbous: Math.PI / 4,
  full_moon: 0,
  waning_gibbous: -Math.PI / 4,
  last_quarter: -Math.PI / 2,
  waning_crescent: -3 * Math.PI / 4,
};
const PALETTES = Object.fromEntries(Object.entries({
  clear: ['#318c9e', '#77bec1', '#e4f4ec', '#fff0ac'],
  overcast: ['#427e90', '#78a8af', '#b8cdd0', '#ffe4b0'],
  night: ['#193a55', '#356675', '#6f95ae', '#dceef2'],
}).map(([kind, colors]) => [kind, colors.map(color => new THREE.Color(color))]));
const LOW_SUN = new THREE.Color('#ffd49d');
const {clamp, smoothstep} = THREE.MathUtils;

const vertexShader = `
  varying vec2 poolUv;
  varying vec3 surfacePoint;

  void main() {
    poolUv = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`;

const fragmentShader = `
  varying vec2 poolUv;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform vec2 waterSize;
  uniform float daylight;
  uniform float rain;
  uniform float cloudCover;
  uniform float bodyVisibility;
  uniform float moon;
  uniform vec2 moonLight;
  uniform vec2 bodyPosition;
  uniform vec3 deepWater;
  uniform vec3 shallowWater;
  uniform vec3 cloudColor;
  uniform vec3 bodyColor;

  float softEllipse(vec2 point, vec2 center, vec2 radius, float softness) {
    return 1.0 - smoothstep(1.0 - softness, 1.0, length((point - center) / radius));
  }

  float cloud(vec2 point, vec2 center, float scale) {
    vec2 p = (point - center) / scale;
    float bed = softEllipse(p, vec2(0.0, -1.1), vec2(17.5, 3.7), 0.55);
    float puff = softEllipse(p, vec2(-5.2, 0.9), vec2(8.0, 4.4), 0.57);
    float drift = softEllipse(p, vec2(6.7, 1.0), vec2(12.0, 4.5), 0.62);
    return max(bed, max(puff, drift));
  }

  float rainRing(vec2 point, vec2 center, float phase) {
    float radius = mix(0.65, 4.1, phase);
    return (1.0 - phase) * (1.0 - smoothstep(0.12, 0.66, abs(length(point - center) - radius)));
  }

  void main() {
    vec2 point = (poolUv - 0.5) * waterSize;
    vec2 edgeVector = (0.5 - abs(poolUv - 0.5)) * waterSize;
    float edge = min(edgeVector.x, edgeVector.y);
    float shallows = exp(-edge * 0.17);
    vec3 toCamera = normalize(cameraPosition - surfacePoint);
    float glancing = pow(1.0 - clamp(toCamera.y, 0.0, 1.0), 2.0);
    float waveA = sin(point.x * 0.27 + point.y * 0.51 - waterTime * 1.7);
    float waveB = sin(point.x * -0.43 + point.y * 0.23 + waterTime * 1.18);
    float waveC = sin(point.x * 0.09 + point.y * 0.96 + waterTime * 2.1);
    vec2 refraction = vec2(waveA * 1.4 + waveC * 0.32, waveB * 0.68);
    refraction *= 1.0 + rain * 0.68;
    // Keep the imagery in the plane, with a small shift as the view orbits.
    vec2 mirror = point + refraction + vec2(toCamera.x, -toCamera.z) * 2.6;

    float strand = 1.0 - smoothstep(0.035, 0.24, abs(waveA + waveB * 0.45));
    float lightOnFloor = strand * smoothstep(0.19, 0.92, waveC * 0.8 + waveB * 0.23);
    vec3 color = mix(deepWater, shallowWater, 0.15 + shallows * 0.67);
    color = mix(color, shallowWater, lightOnFloor * mix(0.1, 0.27, daylight));
    color = mix(color, cloudColor, glancing * 0.19);

    float breeze = sin(waterTime * 0.12) * 4.6;
    float leftCloud = cloud(mirror, vec2(-0.32 * waterSize.x + breeze, 0.14 * waterSize.y), 1.15);
    float rightCloud = cloud(mirror, vec2(0.27 * waterSize.x + breeze * 0.72, -0.18 * waterSize.y), 0.82);
    float bank = softEllipse(mirror, vec2(breeze, 0.10 * waterSize.y), waterSize * vec2(0.46, 0.34), 0.67);
    float cloudReflection = max(leftCloud, rightCloud * 0.82) * cloudCover;
    cloudReflection = max(cloudReflection, bank * max(0.0, cloudCover - 0.43));
    color = mix(color, cloudColor, cloudReflection * (0.62 + glancing * 0.15));

    vec2 bodyDistance = mirror - bodyPosition * waterSize;
    float bodyScale = clamp(waterSize.x / 146.0, 1.0, 1.48);
    vec2 bodyPoint = bodyDistance / (vec2(8.8, 5.3 + glancing * 2.5) * bodyScale);
    float limb = 1.0 - smoothstep(0.76, 1.0, length(bodyPoint));
    float sphere = sqrt(max(0.0, 1.0 - dot(bodyPoint, bodyPoint)));
    float terminator = bodyPoint.x * moonLight.x + sphere * moonLight.y;
    float moonLimb = limb * smoothstep(-0.1, 0.12, terminator);
    float body = mix(limb, moonLimb, moon);
    float glare = exp(-dot(bodyPoint, bodyPoint) * 0.46) * (0.22 + waveA * 0.07);
    float glint = exp(-abs(bodyDistance.x) * 0.24 - abs(bodyDistance.y) * 0.12);
    float glitter = pow(max(0.0, waveC), 5.0) * glint * 0.29;
    float reflectedLight = (body * 0.83 + glare + glitter) * bodyVisibility;
    color = mix(color, bodyColor, min(0.95, reflectedLight));

    if (rain > 0.0) {
      float ring = rainRing(point, waterSize * vec2(-0.29, -0.18), fract(waterTime * 0.69 + 0.1));
      ring += rainRing(point, waterSize * vec2(0.02, 0.19), fract(waterTime * 0.83 + 0.47));
      ring += rainRing(point, waterSize * vec2(0.32, -0.02), fract(waterTime * 0.71 + 0.78));
      color = mix(color, cloudColor, clamp(ring * rain * 0.33, 0.0, 0.55));
    }

    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;

export function createStorybookPoolWater({x, z, y, width, depth}) {
  const uniforms = {
    waterTime: {value: 0},
    waterSize: {value: new THREE.Vector2(width, depth)},
    daylight: {value: 1},
    rain: {value: 0},
    cloudCover: {value: 0.18},
    bodyVisibility: {value: 0},
    moon: {value: 0},
    moonLight: {value: new THREE.Vector2(0, 1)},
    bodyPosition: {value: new THREE.Vector2()},
    deepWater: {value: PALETTES.clear[0].clone()},
    shallowWater: {value: PALETTES.clear[1].clone()},
    cloudColor: {value: PALETTES.clear[2].clone()},
    bodyColor: {value: PALETTES.clear[3].clone()},
  };
  const material = new THREE.ShaderMaterial({uniforms, vertexShader, fragmentShader, toneMapped: false});
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), material);
  mesh.name = 'HOA pool water';
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(x, y, z);

  function update(timeSeconds, environment = {}) {
    const {night, daylightKnown, condition, moonPhase, sunElevation, sunRising} = environment;
    const overcast = OVERCAST.has(condition);
    const altitude = Number.isFinite(sunElevation) ? sunElevation : night ? -19 : 42;
    const dayLight = smoothstep(altitude, -8, 17);
    const dayPalette = PALETTES[overcast ? 'overcast' : 'clear'];
    for (const [index, field] of ['deepWater', 'shallowWater', 'cloudColor', 'bodyColor'].entries()) {
      uniforms[field].value.lerpColors(PALETTES.night[index], dayPalette[index], dayLight);
    }
    const phaseAngle = Object.hasOwn(MOON_ANGLES, moonPhase) ? MOON_ANGLES[moonPhase] : undefined;
    const day = daylightKnown ? !night : condition === 'sunny';
    const moonVisible = night && phaseAngle !== undefined;
    const elevation = clamp(altitude / 75, 0, 1);
    const lowSun = dayLight * (1 - smoothstep(altitude, 8, 34));
    if (day) uniforms.bodyColor.value.lerp(LOW_SUN, lowSun * 0.7);
    if (moonVisible) uniforms.bodyColor.value.copy(PALETTES.night[3]);
    uniforms.waterTime.value = Number.isFinite(timeSeconds) && !environment.reduceMotion ? timeSeconds : 0;
    uniforms.daylight.value = dayLight;
    uniforms.rain.value = RAIN.has(condition) ? 1 : 0;
    uniforms.cloudCover.value = overcast ? 0.92 : condition === 'partlycloudy' ? 0.65 : night ? 0.33 : 0.24;
    uniforms.bodyVisibility.value = overcast ? 0 : moonVisible ? 0.93 : day ? 0.96 : 0;
    uniforms.moon.value = moonVisible ? 1 : 0;
    if (moonVisible) {
      uniforms.moonLight.value.set(Math.sin(phaseAngle), Math.cos(phaseAngle));
      uniforms.bodyPosition.value.set(0.06, 0.02);
    } else {
      const sunSide = sunRising === true ? -0.19 : sunRising === false ? 0.19 : -0.08;
      uniforms.bodyPosition.value.set(sunSide * (1 - elevation), -0.20 + elevation * 0.33);
    }
  }

  return {mesh, update};
}
