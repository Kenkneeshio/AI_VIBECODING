import * as THREE from 'three';
import {storybookSolar} from './storybook-solar.mjs';

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
  clear: ['#a2c9ac', '#45aaa4', '#23617f', '#e8f7ef', '#b3e0df', '#fff0c5'],
  overcast: ['#95b5a5', '#579491', '#3c647a', '#dcebe9', '#a7c4c9', '#ffe6bf'],
  night: ['#344e5c', '#225464', '#10273f', '#88adb8', '#5e819b', '#e2eefc'],
  sunrise: ['#a7b19c', '#68a4a8', '#536e97', '#ebe2e3', '#dda6ae', '#ffdfae'],
  sunset: ['#b3a58f', '#6c97a1', '#624f78', '#f8dcd2', '#cc95a1', '#ffad81'],
}).map(([kind, colors]) => [kind, colors.map(color => new THREE.Color(color))]));
const SOLAR_BANDS = {
  sunrise: ['#efad92', '#8baac6'].map(shade => new THREE.Color(shade)),
  sunset: ['#e58968', '#907fa6'].map(shade => new THREE.Color(shade)),
};
const COLOR_UNIFORMS = ['shoreTint', 'shallowTint', 'deepTint', 'foamTint', 'cloudTint', 'bodyTint'];
const {clamp, smoothstep} = THREE.MathUtils;

function oceanGeometry({shoreline, farZ, focusX}) {
  const position = [];
  const coordinates = [];
  const scales = [];
  const index = [];
  for (const [i, {x, z}] of shoreline.entries()) {
    const before = shoreline[Math.max(i - 1, 0)];
    const after = shoreline[Math.min(i + 1, shoreline.length - 1)];
    const dx = after.x - before.x;
    const dz = after.z - before.z;
    const scale = dx === 0 ? 1 : Math.abs(dx) / Math.hypot(dx, dz);
    const next = i * 2;
    position.push(x - focusX, 0, z - farZ, x - focusX, 0, 0);
    coordinates.push(x - focusX, 0, x - focusX, z - farZ);
    scales.push(scale, scale);
    if (next > 0) index.push(next - 2, next, next - 1, next, next + 1, next - 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(coordinates, 2));
  geometry.setAttribute('shoreNormalScale', new THREE.Float32BufferAttribute(scales, 1));
  geometry.setIndex(index);
  return geometry;
}

const vertexShader = `
  attribute float shoreNormalScale;
  varying float shoreScale;
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  #include <fog_pars_vertex>

  void main() {
    coastPoint = uv;
    shoreScale = shoreNormalScale;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    vec4 mvPosition = viewMatrix * worldPoint;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;

const fragmentShader = `
  varying float shoreScale;
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform bool waterHighDetail;
  uniform float rain;
  uniform float fog;
  uniform float reflectedWind;
  uniform float roughness;
  uniform float cloudCover;
  uniform float bodyVisibility;
  uniform float solarBand;
  uniform float moon;
  uniform vec2 moonLight;
  uniform vec2 bodyPosition;
  uniform vec2 solarPosition;
  uniform vec3 shoreTint;
  uniform vec3 shallowTint;
  uniform vec3 deepTint;
  uniform vec3 foamTint;
  uniform vec3 cloudTint;
  uniform vec3 bodyTint;
  uniform vec3 solarWarmTint;
  uniform vec3 solarCoolTint;
  #include <fog_pars_fragment>

  float softEllipse(vec2 point, vec2 center, vec2 radius, float softness) {
    vec2 delta = (point - center) / radius;
    return 1.0 - smoothstep(1.0 - softness, 1.0, dot(delta, delta));
  }

  float cloud(vec2 point, vec2 center, float scale) {
    vec2 p = (point - center) / scale;
    float bed = softEllipse(p, vec2(0.0, -4.0), vec2(108.0, 14.0), 0.87);
    float puff = softEllipse(p, vec2(-25.0, 5.0), vec2(54.0, 17.0), 0.84);
    float tail = softEllipse(p, vec2(39.0, 7.0), vec2(71.0, 11.0), 0.85);
    return max(bed, max(puff * 0.9, tail * 0.8));
  }

  float waterHash(vec2 p) {
    vec3 cell = fract(vec3(p.xyx) * vec3(0.1031, 0.1099, 0.0871));
    cell += dot(cell, cell.yzx + 33.33);
    return fract((cell.x + cell.y) * cell.z);
  }

  float waterNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 corner = fract(point);
    corner = corner * corner * (3.0 - 2.0 * corner);
    return mix(mix(waterHash(cell), waterHash(cell + vec2(1.0, 0.0)), corner.x),
      mix(waterHash(cell + vec2(0.0, 1.0)), waterHash(cell + vec2(1.0)), corner.x), corner.y);
  }

  float crestProfile(float phase, float width, float softEdge) {
    return 1.0 - smoothstep(width, width + softEdge, abs(phase - 0.81));
  }

  void main() {
    float offshore = coastPoint.y;
    // Use approximate normal distance for a consistent wash width on slanted cove flanks.
    float shoreDistance = offshore * mix(shoreScale, 1.0, smoothstep(22.0, 124.0, offshore));
    // Wind waves cross the bay in world space. Only the break bends with the shore.
    vec2 sea = surfacePoint.xz * vec2(1.0, -1.0);
    float pixelWorld = max(length(dFdx(sea)), length(dFdy(sea)));
    float visibleRipples = 1.0 - smoothstep(1.0, 3.5, pixelWorld);
    float windTime = waterTime * mix(0.88, 1.16, roughness - 1.0);
    float swell = sin(dot(sea, vec2(0.015, 0.022)) - windTime * 0.19);
    float crossSwell = sin(dot(sea, vec2(-0.037, 0.016)) + windTime * 0.23);
    float basin = waterNoise(sea * vec2(0.013, 0.022) + vec2(swell, crossSwell) * 0.18);
    float rippleA = sin(dot(sea, vec2(0.047, 0.176)) + swell * 1.32 + crossSwell * 0.78 + basin * 5.2 - windTime);
    float rippleB = sin(dot(sea, vec2(-0.103, 0.146)) + crossSwell * 1.17 - basin * 3.4 + windTime * 0.79);
    vec3 toCamera = normalize(cameraPosition - surfacePoint);
    float slant = 1.0 - clamp(toCamera.y, 0.0, 1.0);
    float wavePacket = swell * 0.46 + crossSwell * 0.37 + (basin - 0.5) * 1.6;
    float waveLight = smoothstep(0.53, 0.98, rippleA) * smoothstep(-0.26, 0.78, wavePacket + rippleB * 0.42)
      + smoothstep(0.78, 0.99, rippleB) * smoothstep(-0.2, 0.81, -wavePacket + rippleA * 0.35) * 0.47;
    float caustic = 0.0;
    if (waterHighDetail) {
      vec2 fold = vec2(dot(sea, vec2(0.19, 0.29)), dot(sea, vec2(0.24, -0.18)));
      fold += vec2(swell, crossSwell) * 1.2 + windTime * vec2(-0.79, 0.67);
      vec2 ripples = sin(fold + 0.68 * sin(fold.yx));
      float visibleDetail = 1.0 - smoothstep(.6, 2.3, max(fwidth(fold.x), fwidth(fold.y)));
      caustic = smoothstep(0.69, 1.49, abs(ripples.x + ripples.y)) * visibleDetail;
    }
    // Long submerged sandbanks set the bay's color at a broader scale than the waves.
    float shelf = 0.5;
    if (offshore < 630.0) {
      float banks = waterNoise(sea * vec2(0.0038, 0.0026) + vec2(9.2, 3.7));
      shelf = mix(0.5, banks, 1.0 - smoothstep(290.0, 620.0, offshore));
    }
    float depth = smoothstep(12.0, mix(245.0, 495.0, shelf), offshore + (basin - 0.5) * 26.0);
    vec3 color = mix(shallowTint, deepTint, depth);
    float shorelineTint = (1.0 - smoothstep(0.0, 20.0 + basin * 12.0, shoreDistance)) * (0.60 + basin * 0.30);
    color = mix(color, shoreTint, shorelineTint);
    color *= 0.93 + 0.07 * smoothstep(0.0, 14.0, shoreDistance);
    // Green-blue pockets in the shallows suggest reef and kelp under moving water.
    float seabed = smoothstep(0.49, 0.83, basin * 0.44 + shelf * 0.56 + crossSwell * 0.045)
      * smoothstep(12.0, 46.0, offshore) * (1.0 - smoothstep(110.0, 327.0, offshore));
    color *= 0.965 + basin * 0.07 + (swell * 0.019 + crossSwell * 0.012) * visibleRipples - seabed * 0.25;
    float distantRipples = mix(0.24, 1.0, 1.0 - smoothstep(146.0, 615.0, offshore));
    float surfaceGlints = waveLight * distantRipples * mix(0.16, 1.0, visibleRipples);
    color = mix(color, cloudTint, surfaceGlints * mix(0.11, 0.039, depth));
    color = mix(color, foamTint, caustic * (1.0 - smoothstep(8.0, 128.0, offshore)) * 0.064);
    color = mix(color, cloudTint, slant * slant * 0.15);

    // The artistically reflected sky follows the water and shifts as the camera orbits.
    if (offshore < 700.0 && abs(coastPoint.x) < 800.0) {
      float reflectionEdge = (1.0 - smoothstep(550.0, 785.0, abs(coastPoint.x)))
        * (1.0 - smoothstep(540.0, 685.0, offshore));
      vec2 rippleOffset = vec2(rippleA * 4.8 + swell * 2.3, rippleB * 2.5 + crossSwell * 2.8) * roughness;
      vec2 mirror = coastPoint + rippleOffset + vec2(toCamera.x, -toCamera.z) * 18.0;
      // The twilight band follows the local bearing even when the sun's disc is below the horizon.
      if (solarBand > 0.0) {
        float along = mirror.y - solarPosition.y;
        float spread = mix(62.0, 168.0, smoothstep(-35.0, 145.0, along));
        float sunward = mirror.x - solarPosition.x - clamp(along, -45.0, 165.0) * solarPosition.x * 0.0021;
        float falloff = (1.0 - smoothstep(42.0, 270.0, abs(along))) * reflectionEdge;
        float ribbon = exp(-1.82 * (sunward / spread) * (sunward / spread));
        float coolEdge = smoothstep(36.0, 260.0, abs(sunward));
        color = mix(color, solarCoolTint, solarBand * falloff * coolEdge * (0.14 + depth * 0.14));
        color = mix(color, solarWarmTint, solarBand * falloff * ribbon * (0.24 + waveLight * 0.25));
      }
      float drift = sin(waterTime * 0.064) * 26.0 + reflectedWind;
      float nearCloud = cloud(mirror, vec2(-186.0 + drift, 49.0), 1.32);
      float farCloud = cloud(mirror, vec2(182.0 + drift * 0.74, 69.0), 1.18);
      float bank = softEllipse(mirror, vec2(drift, 72.0), vec2(372.0, 62.0), 0.86);
      float clouds = max(max(nearCloud, farCloud * 0.9) * cloudCover, bank * max(0.0, cloudCover - 0.46));
      float reflectedCloudLight = clouds * reflectionEdge * (0.27 + waveLight * 0.18 + slant * 0.15);
      color = mix(color, cloudTint, reflectedCloudLight);

      if (bodyVisibility > 0.0) {
        vec2 bodyDistance = mirror - bodyPosition;
        if (abs(bodyDistance.x) < 126.0 && abs(bodyDistance.y) < 73.0) {
          float lowSolar = solarBand * (1.0 - moon);
          vec2 disc = bodyDistance / vec2(33.0 + lowSolar * 6.0, 14.0 + slant * 5.0 - lowSolar * 2.5);
          float discRadius = dot(disc, disc);
          float hemisphere = sqrt(max(0.0, 1.0 - discRadius));
          float terminator = disc.x * moonLight.x + hemisphere * moonLight.y;
          float dayCore = 1.0 - smoothstep(0.36, 1.11, discRadius);
          float moonCore = (1.0 - smoothstep(0.57, 1.08, discRadius)) * smoothstep(-0.13, 0.18, terminator);
          float core = mix(dayCore * (0.73 + 0.20 * rippleA), moonCore, moon);
          float glow = softEllipse(bodyDistance, vec2(0.0), vec2(69.0, 39.0), 0.98);

          // Shallow, staggered crests scatter the reflection along a tapered path toward shore.
          float towardShore = -bodyDistance.y;
          float pathWidth = mix(24.0, 54.0 + slant * 12.0 + lowSolar * 8.0, smoothstep(0.0, 44.0, towardShore));
          float pathX = bodyDistance.x - towardShore * toCamera.x * 0.32 + rippleB * 6.4;
          float path = (1.0 - smoothstep(0.05, 1.0, abs(pathX) / pathWidth))
            * smoothstep(-14.0, 2.0, towardShore) * (1.0 - smoothstep(26.0, 61.0, towardShore))
            * smoothstep(3.0, 13.0, offshore);
          float facet = sin(towardShore * 0.70 + pathX * 0.065 + rippleB * 1.05 - windTime * 1.37);
          float streak = path * smoothstep(0.29, 0.97, facet) * smoothstep(-0.7, 0.54, rippleA + swell * 0.29);
          float glints = path * smoothstep(0.79, 0.99, rippleB) * smoothstep(0.25, 0.95, facet);
          glints += path * caustic * smoothstep(.28, .97, facet) * .52;
          float amount = (core * 0.79 + glow * 0.30 + streak * 0.68) * bodyVisibility;
          color = mix(color, bodyTint, min(amount, 0.93));
          color = mix(color, mix(bodyTint, vec3(1.0), 0.70), (streak * 0.21 + glints * 0.42) * bodyVisibility);
        }
      }
    }

    if (shoreDistance < 94.0) {
      float shoreTurn = sin(coastPoint.x * 0.026 + 0.6 * swell) * 2.8
        + sin(coastPoint.x * 0.082 + windTime * 0.34) * 1.32;
      // The top of the crest brightens first; the foam thins and fragments behind it.
      float passage = (shoreDistance + shoreTurn + (basin - 0.5) * 4.0) / 31.0 + windTime * 0.19;
      float phase = fract(passage);
      float softEdge = clamp(fwidth(passage), 0.010, 0.055);
      float rim = crestProfile(phase, 0.018, softEdge);
      float trail = smoothstep(0.48, 0.81, phase) * (1.0 - smoothstep(0.79, 0.85, phase));
      float breakers = (1.0 - smoothstep(24.0, 92.0, shoreDistance)) * smoothstep(0.4, 7.0, shoreDistance);
      float breakPattern = waterNoise(vec2(sea.x * 0.087, shoreDistance * 0.21) + vec2(windTime * 0.11, 0.0));
      float scallop = smoothstep(0.36, 0.79, breakPattern + crossSwell * 0.18);
      float net = smoothstep(0.31, 0.70, breakPattern + rippleA * 0.17);
      float washCenter = 2.15 + basin * 1.65 + rippleA * 0.85;
      float swashEdge = 1.0 - smoothstep(0.35, 2.8, abs(shoreDistance - washCenter));
      float swash = swashEdge * scallop * 0.34
        + (1.0 - smoothstep(2.0, 12.0, shoreDistance)) * net * 0.085;
      color *= 1.0 - trail * breakers * 0.09;
      float foam = swash + breakers * (rim * (0.035 + scallop * 0.86) + trail * net * 0.27);
      color = mix(color, foamTint, clamp(foam * mix(0.72, 1.0, visibleRipples), 0.0, 0.96));
    }
    if (rain > 0.0) {
      vec2 grid = sea / vec2(17.0, 19.0);
      float seed = waterHash(floor(grid));
      float age = fract(windTime * 0.89 + seed);
      vec2 drop = fract(grid) - mix(vec2(0.31, 0.70), vec2(0.69, 0.29), seed);
      float circle = length(drop);
      float ring = 1.0 - smoothstep(0.014, 0.045, abs(circle - (0.04 + age * 0.26)));
      color = mix(color, foamTint, ring * smoothstep(0.40, 0.71, seed)
        * (1.0 - smoothstep(0.34, 0.82, age)) * mix(0.17, 0.10, depth));
    }
    color = mix(color, mix(cloudTint, foamTint, 0.46),
      fog * (0.26 + 0.42 * smoothstep(15.0, 145.0, offshore)));
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;

export function createStorybookOcean({y, farZ, renderFarZ, shoreline, renderShoreline, focusX}) {
  const uniforms = {
    ...THREE.UniformsUtils.clone(THREE.UniformsLib.fog),
    waterTime: {value: 0},
    waterHighDetail: {value: false},
    rain: {value: 0},
    fog: {value: 0},
    reflectedWind: {value: 0},
    roughness: {value: 1},
    cloudCover: {value: 0.24},
    bodyVisibility: {value: 0},
    solarBand: {value: 0},
    moon: {value: 0},
    moonLight: {value: new THREE.Vector2(0, 1)},
    bodyPosition: {value: new THREE.Vector2()},
    solarPosition: {value: new THREE.Vector2()},
    solarWarmTint: {value: SOLAR_BANDS.sunrise[0]},
    solarCoolTint: {value: SOLAR_BANDS.sunrise[1]},
  };
  for (const [index, name] of COLOR_UNIFORMS.entries()) {
    uniforms[name] = {value: PALETTES.clear[index].clone()};
  }
  const material = new THREE.ShaderMaterial({uniforms, vertexShader, fragmentShader, toneMapped: false, fog: true});
  const meshFarZ = Number.isFinite(renderFarZ) ? Math.min(farZ, renderFarZ) : farZ;
  const mesh = new THREE.Mesh(oceanGeometry({shoreline:renderShoreline ?? shoreline, farZ:meshFarZ, focusX}), material);
  mesh.name = 'Ocean and shore wash';
  mesh.position.set(focusX, y, meshFarZ);

  function update(timeSeconds, environment = {}) {
    const {night, daylightKnown, condition, moonPhase, moonAzimuth, moonElevation,
      skyProgress, windSpeed, windBearing, reduceMotion, reflections = true} = environment;
    const solar = environment.solar ?? storybookSolar(environment);
    const overcast = OVERCAST.has(condition);
    const dayPalette = PALETTES[overcast ? 'overcast' : 'clear'];
    const transition = solar.phase === 'sunset' || solar.rising === false ? 'sunset' : 'sunrise';
    const lowLight = Math.max(solar.twilight, solar.lowSun);
    for (const [index, name] of COLOR_UNIFORMS.entries()) {
      uniforms[name].value.lerpColors(PALETTES.night[index], dayPalette[index], solar.daylight)
        .lerp(PALETTES[transition][index], lowLight * (overcast ? .24 : .46));
    }
    const phaseAngle = Object.hasOwn(MOON_ANGLES, moonPhase) ? MOON_ANGLES[moonPhase] : undefined;
    const sunKnown = daylightKnown || Number.isFinite(environment.sunElevation) || condition === 'sunny';
    const sunOpacity = sunKnown ? solar.disc * (.97 - solar.cloud * .42) : 0;
    const moonOpacity = (night || solar.phase === 'night') && phaseAngle !== undefined
      ? .93 * (1 - smoothstep(solar.elevation, -12, -3)) : 0;
    const showMoon = moonOpacity > sunOpacity;
    if (showMoon) uniforms.bodyTint.value.copy(PALETTES.night[5]);
    else uniforms.bodyTint.value.lerp(PALETTES[transition][5], lowLight * .52);
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
    uniforms.cloudCover.value = !reflections ? 0 : overcast ? 0.94 : condition === 'partlycloudy' ? 0.64 : night ? 0.32 : 0.24;
    uniforms.bodyVisibility.value = !reflections || overcast ? 0 : Math.max(moonOpacity, sunOpacity);
    uniforms.solarBand.value = reflections && sunKnown ? lowLight * (overcast ? .30 : 1 - solar.cloud * .48) : 0;
    [uniforms.solarWarmTint.value, uniforms.solarCoolTint.value] = SOLAR_BANDS[transition];
    uniforms.moon.value = showMoon ? 1 : 0;
    uniforms.solarPosition.value.set(solar.east * 154, 38 + clamp(solar.elevation / 75, 0, 1) * 20);
    const progress = Number.isFinite(skyProgress) ? clamp(skyProgress, 0, 1) : undefined;
    const arc = progress === undefined ? undefined : THREE.MathUtils.lerp(-145, 145, progress);
    if (showMoon) {
      uniforms.moonLight.value.set(Math.sin(phaseAngle), Math.cos(phaseAngle));
      const x = arc ?? (Number.isFinite(moonAzimuth) ? clamp((moonAzimuth - 180) * 1.08, -180, 180)
        : 46 + Math.sin(time * .014) * 27);
      const y = Number.isFinite(moonElevation) ? 32 + clamp(moonElevation / 75, 0, 1) * 24 : 42;
      uniforms.bodyPosition.value.set(x, y);
    } else {
      uniforms.bodyPosition.value.copy(uniforms.solarPosition.value);
    }
  }

  return {mesh, update, setHighDetail(value) { uniforms.waterHighDetail.value = value; }};
}
