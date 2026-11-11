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
  clear: ['#b7c8a9', '#79c6b9', '#32768c', '#e5f4ea', '#dcf1ec', '#fff1bd'],
  overcast: ['#a5b9a9', '#76aca8', '#456e7f', '#d0e4df', '#b5ced0', '#ffe4b0'],
  night: ['#415b66', '#2b6678', '#16354d', '#91b7bf', '#68899f', '#e4f0f5'],
}).map(([kind, colors]) => [kind, colors.map(color => new THREE.Color(color))]));
const LOW_SUN = new THREE.Color('#ffd59e');
const COLOR_UNIFORMS = ['shoreTint', 'shallowTint', 'deepTint', 'foamTint', 'cloudTint', 'bodyTint'];
const {clamp, smoothstep} = THREE.MathUtils;

function oceanGeometry({shoreline, farZ, focusX}) {
  const position = [];
  const coordinates = [];
  const index = [];
  for (const [i, {x, z}] of shoreline.entries()) {
    const next = i * 2;
    position.push(x - focusX, 0, z - farZ, x - focusX, 0, 0);
    coordinates.push(x - focusX, 0, x - focusX, z - farZ);
    if (next > 0) index.push(next - 2, next, next - 1, next, next + 1, next - 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(coordinates, 2));
  geometry.setIndex(index);
  return geometry;
}

const vertexShader = `
  varying vec2 coastPoint;
  varying vec3 surfacePoint;

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`;

const fragmentShader = `
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform float rain;
  uniform float fog;
  uniform float reflectedWind;
  uniform float roughness;
  uniform float cloudCover;
  uniform float bodyVisibility;
  uniform float moon;
  uniform vec2 moonLight;
  uniform vec2 bodyPosition;
  uniform vec3 shoreTint;
  uniform vec3 shallowTint;
  uniform vec3 deepTint;
  uniform vec3 foamTint;
  uniform vec3 cloudTint;
  uniform vec3 bodyTint;

  float softEllipse(vec2 point, vec2 center, vec2 radius, float softness) {
    vec2 delta = (point - center) / radius;
    return 1.0 - smoothstep(1.0 - softness, 1.0, dot(delta, delta));
  }

  float cloud(vec2 point, vec2 center, float scale) {
    vec2 p = (point - center) / scale;
    float bed = softEllipse(p, vec2(0.0, -4.0), vec2(99.0, 12.0), 0.69);
    float puff = softEllipse(p, vec2(-31.0, 1.8), vec2(47.0, 17.0), 0.68);
    float drift = softEllipse(p, vec2(39.0, 5.4), vec2(67.0, 15.0), 0.72);
    return max(bed, max(puff, drift));
  }

  void main() {
    float offshore = coastPoint.y;
    float swell = sin(coastPoint.x * 0.009 - offshore * 0.012 - waterTime * 0.16);
    float crossSwell = sin(coastPoint.x * 0.022 + offshore * 0.018 + waterTime * 0.21);
    float rippleA = sin(coastPoint.x * 0.032 + offshore * 0.19 + swell * 1.8 + crossSwell * 0.8 - waterTime * 1.17);
    float rippleB = sin(coastPoint.x * -0.057 + offshore * 0.105 + crossSwell * 1.4 - swell * 0.56 + waterTime * 0.87);
    vec3 toCamera = normalize(cameraPosition - surfacePoint);
    float slant = 1.0 - clamp(toCamera.y, 0.0, 1.0);
    float waveLight = smoothstep(0.37, 0.99, rippleA) * smoothstep(-0.69, 0.85, swell + rippleB * 0.48);
    float depth = smoothstep(8.0, 278.0, offshore + rippleB * 3.2);
    vec3 color = mix(shallowTint, deepTint, depth);
    color = mix(color, shoreTint, 1.0 - smoothstep(0.0, 21.0, offshore));
    color = mix(color, foamTint, waveLight * mix(0.14, 0.044, depth));
    color = mix(color, cloudTint, slant * slant * 0.13);

    // The artistically reflected sky follows the water and shifts as the camera orbits.
    if (offshore < 700.0 && abs(coastPoint.x) < 800.0) {
      vec2 rippleOffset = vec2(rippleA * 4.5, rippleB * 3.8) * roughness;
      vec2 mirror = coastPoint + rippleOffset + vec2(toCamera.x, -toCamera.z) * 18.0;
      float drift = sin(waterTime * 0.064) * 26.0 + reflectedWind;
      float nearCloud = cloud(mirror, vec2(-186.0 + drift, 49.0), 1.32);
      float farCloud = cloud(mirror, vec2(182.0 + drift * 0.74, 69.0), 1.18);
      float bank = softEllipse(mirror, vec2(drift, 72.0), vec2(372.0, 62.0), 0.86);
      float clouds = max(max(nearCloud, farCloud * 0.9) * cloudCover, bank * max(0.0, cloudCover - 0.5));
      color = mix(color, cloudTint, clouds * (0.66 + slant * 0.12));

      if (bodyVisibility > 0.0) {
        vec2 bodyDistance = mirror - bodyPosition;
        if (abs(bodyDistance.x) < 126.0 && abs(bodyDistance.y) < 73.0) {
          vec2 disc = bodyDistance / vec2(33.0, 14.0 + slant * 5.0);
          float discRadius = dot(disc, disc);
          float hemisphere = sqrt(max(0.0, 1.0 - discRadius));
          float terminator = disc.x * moonLight.x + hemisphere * moonLight.y;
          float dayCore = 1.0 - smoothstep(0.25, 1.12, discRadius);
          float moonCore = (1.0 - smoothstep(0.57, 1.08, discRadius)) * smoothstep(-0.13, 0.18, terminator);
          float core = mix(dayCore * (0.79 + 0.15 * rippleA), moonCore, moon);
          float glow = softEllipse(bodyDistance, vec2(0.0), vec2(78.0, 36.0), 0.96);

          // Shallow, staggered crests scatter the reflection along a tapered path toward shore.
          float towardShore = -bodyDistance.y;
          float pathWidth = mix(24.0, 55.0 + slant * 12.0, smoothstep(0.0, 38.0, towardShore));
          float pathX = bodyDistance.x - towardShore * toCamera.x * 0.32 + rippleB * 6.4;
          float path = (1.0 - smoothstep(0.05, 1.0, abs(pathX) / pathWidth))
            * smoothstep(-14.0, 2.0, towardShore) * (1.0 - smoothstep(26.0, 61.0, towardShore))
            * smoothstep(3.0, 13.0, offshore);
          float facet = sin(towardShore * 0.51 + pathX * 0.048 + rippleB * 0.86 - waterTime * 1.48);
          float streak = path * smoothstep(0.29, 0.97, facet) * smoothstep(-0.7, 0.54, rippleA + swell * 0.29);
          float glints = path * smoothstep(0.79, 0.99, rippleB) * smoothstep(0.25, 0.95, facet);
          float amount = (core * 0.82 + glow * 0.25 + streak * 0.63) * bodyVisibility;
          color = mix(color, bodyTint, min(amount, 0.93));
          color = mix(color, mix(bodyTint, vec3(1.0), 0.70), (streak * 0.18 + glints * 0.35) * bodyVisibility);
        }
      }
    }

    // Increasing phase sends the crests shoreward while distance fades them offshore.
    float phase = fract((offshore + rippleA * 2.5 + rippleB * 1.4) / 26.0 + waterTime * 0.24);
    float crest = smoothstep(0.70, 0.90, phase) * (1.0 - smoothstep(0.93, 1.0, phase));
    float breakers = (1.0 - smoothstep(22.0, 82.0, offshore)) * smoothstep(0.1, 6.0, offshore);
    float scallop = smoothstep(-0.44, 0.84, rippleB + rippleA * 0.2);
    float wash = (1.0 - smoothstep(0.0, 8.0, offshore)) * (0.16 + 0.10 * rippleA);
    color = mix(color, foamTint, wash + crest * breakers * mix(0.31, 0.85, scallop));
    if (rain > 0.0) {
      vec2 drop = fract(coastPoint / vec2(13.0, 17.0)) - 0.5;
      float circle = length(drop);
      float ring = 1.0 - smoothstep(0.025, 0.078, abs(circle - (0.23 + rippleB * 0.14)));
      color = mix(color, foamTint, ring * smoothstep(0.7, 1.0, rippleA) * 0.18);
    }
    color = mix(color, mix(cloudTint, foamTint, 0.46),
      fog * (0.26 + 0.42 * smoothstep(15.0, 145.0, offshore)));
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;

export function createStorybookOcean({y, farZ, shoreline, focusX}) {
  const uniforms = {
    waterTime: {value: 0},
    rain: {value: 0},
    fog: {value: 0},
    reflectedWind: {value: 0},
    roughness: {value: 1},
    cloudCover: {value: 0.24},
    bodyVisibility: {value: 0},
    moon: {value: 0},
    moonLight: {value: new THREE.Vector2(0, 1)},
    bodyPosition: {value: new THREE.Vector2()},
  };
  for (const [index, name] of COLOR_UNIFORMS.entries()) {
    uniforms[name] = {value: PALETTES.clear[index].clone()};
  }
  const material = new THREE.ShaderMaterial({uniforms, vertexShader, fragmentShader, toneMapped: false});
  const mesh = new THREE.Mesh(oceanGeometry({shoreline, farZ, focusX}), material);
  mesh.name = 'Ocean and shore wash';
  mesh.position.set(focusX, y, farZ);

  function update(timeSeconds, environment = {}) {
    const {night, daylightKnown, condition, moonPhase, sunElevation, sunRising,
      sunAzimuth, moonAzimuth, moonElevation, skyProgress, windSpeed, windBearing, reduceMotion} = environment;
    const overcast = OVERCAST.has(condition);
    const altitude = Number.isFinite(sunElevation) ? sunElevation : night ? -19 : 42;
    const sunlight = smoothstep(altitude, -8, 17);
    const dayPalette = PALETTES[overcast ? 'overcast' : 'clear'];
    for (const [index, name] of COLOR_UNIFORMS.entries()) {
      uniforms[name].value.lerpColors(PALETTES.night[index], dayPalette[index], sunlight);
    }
    const phaseAngle = Object.hasOwn(MOON_ANGLES, moonPhase) ? MOON_ANGLES[moonPhase] : undefined;
    const sunVisible = daylightKnown ? !night : condition === 'sunny';
    const moonVisible = night && phaseAngle !== undefined;
    const elevation = clamp(altitude / 75, 0, 1);
    const lowSun = sunlight * (1 - smoothstep(altitude, 8, 34));
    if (sunVisible) uniforms.bodyTint.value.lerp(LOW_SUN, lowSun * 0.7);
    if (moonVisible) uniforms.bodyTint.value.copy(PALETTES.night[5]);
    const raining = RAIN.has(condition);
    const time = Number.isFinite(timeSeconds) && !reduceMotion ? timeSeconds : 0;
    uniforms.waterTime.value = time;
    uniforms.rain.value = raining ? 1 : 0;
    uniforms.fog.value = condition === 'fog' ? 1 : 0;
    const breeze = Number.isFinite(windSpeed) ? clamp(windSpeed / 18, 0, 1) : 0;
    const direction = Number.isFinite(windBearing) ? -Math.sin(THREE.MathUtils.degToRad(windBearing)) : 1;
    uniforms.reflectedWind.value = Math.sin(time * .09) * direction * breeze * 24;
    const choppy = raining || condition === 'windy' || condition === 'windy-variant';
    uniforms.roughness.value = 1 + Math.max(choppy ? .65 : 0, breeze * .65);
    uniforms.cloudCover.value = overcast ? 0.94 : condition === 'partlycloudy' ? 0.64 : night ? 0.32 : 0.24;
    uniforms.bodyVisibility.value = overcast ? 0 : moonVisible ? 0.93 : sunVisible ? 0.97 : 0;
    uniforms.moon.value = moonVisible ? 1 : 0;
    const progress = Number.isFinite(skyProgress) ? clamp(skyProgress, 0, 1) : undefined;
    const arc = progress === undefined ? undefined : THREE.MathUtils.lerp(-145, 145, progress);
    const azimuthX = value => clamp((value - 180) * 1.08, -180, 180);
    if (moonVisible) {
      uniforms.moonLight.value.set(Math.sin(phaseAngle), Math.cos(phaseAngle));
      const x = arc ?? (Number.isFinite(moonAzimuth) ? azimuthX(moonAzimuth) : 46 + Math.sin(time * .014) * 27);
      const y = Number.isFinite(moonElevation) ? 32 + clamp(moonElevation / 75, 0, 1) * 24 : 42;
      uniforms.bodyPosition.value.set(x, y);
    } else {
      const sunSide = sunRising === true ? -107 : sunRising === false ? 118 : -31;
      const x = arc ?? (Number.isFinite(sunAzimuth) ? azimuthX(sunAzimuth) : sunSide * (1 - elevation));
      uniforms.bodyPosition.value.set(x, 38 + elevation * 20);
    }
  }

  return {mesh, update};
}
