import * as THREE from 'three';

const cameraPreset = (label, azimuth, tilt) => Object.freeze({label, azimuth, tilt, zoom: 1});
const PRESET_TILT_LIMIT = 65;
export const FREE_VIEW_TILT_LIMIT = 88;
export const STORYBOOK_CAMERA_FAR = 4400;
const CAMERA_DISTANCE = 1900;
const SCENERY_FLOOR = -111;

export const CAMERA_PRESETS = Object.freeze({
  default: cameraPreset('Default', 0, 0),
  top: cameraPreset('Top down', 0, 0),
  high: cameraPreset('High angle', 0, 15),
  dollhouse: cameraPreset('Dollhouse', 2, 30),
  corner: cameraPreset('Corner', 45, 40),
  north: cameraPreset('From north', 180, 42),
  east: cameraPreset('From east', 90, 42),
  south: cameraPreset('From south', 0, 42),
  west: cameraPreset('From west', 270, 42),
  waterfront: cameraPreset('Waterfront', 0, 15),
  free: cameraPreset('Free view', 0, 25),
});

/** Keep the same preset labels and order in the dashboard and Studio. */
export function populateCameraOptions(select, includePlan = false) {
  const choices = Object.entries(CAMERA_PRESETS).map(([preset, {label}]) => [preset, label]);
  if (includePlan) choices.push(['plan', '2D plan']);
  const options = choices.map(([preset, label]) => {
    const option = select.ownerDocument.createElement('option');
    option.value = preset;
    option.textContent = label;
    return option;
  });
  select.replaceChildren(...options);
  select.value = 'default';
  select.disabled = false;
}

/** A camera preference is presentation data and never rewrites layout coordinates. */
export function normalizeCameraView(value = 'top') {
  const input = typeof value === 'string' ? {preset: value} : value ?? {};
  const preset = Object.hasOwn(CAMERA_PRESETS, input.preset) ? input.preset : 'top';
  const base = CAMERA_PRESETS[preset];
  const azimuth = Number.isFinite(input.azimuth) ? input.azimuth : base.azimuth;
  const maxTilt = preset === 'free' || preset === 'default' ? FREE_VIEW_TILT_LIMIT : PRESET_TILT_LIMIT;
  return {
    preset,
    azimuth: ((azimuth % 360) + 360) % 360,
    tilt: Number.isFinite(input.tilt) ? THREE.MathUtils.clamp(input.tilt, 0, maxTilt) : base.tilt,
    zoom: Number.isFinite(input.zoom) ? THREE.MathUtils.clamp(input.zoom, 0.6, 2.5) : base.zoom,
  };
}

export function enterFreeView(value) {
  const current = normalizeCameraView(value);
  return {...current, preset: 'free', tilt: current.tilt || CAMERA_PRESETS.free.tilt};
}

/** The startup view can be cleared, or store one exact Free view pose. */
export function readSavedFreeView(value) {
  if (value?.preset !== 'free' || ![value.azimuth, value.tilt, value.zoom].every(Number.isFinite)) return null;
  return normalizeCameraView(value);
}

/** Select the saved angle or the overhead fallback without entering Free view. */
export function resolveDefaultCameraView(saved) {
  return normalizeCameraView({...readSavedFreeView(saved), preset: 'default'});
}

/** Fade the distant ground and ocean before their mesh edges enter a shallow orbit. */
export function storybookHorizonFog(tilt) {
  if (tilt <= PRESET_TILT_LIMIT) return null;
  const horizon = THREE.MathUtils.smoothstep(tilt, PRESET_TILT_LIMIT, 84);
  return {near:THREE.MathUtils.lerp(3530, 2680, horizon), far:THREE.MathUtils.lerp(4260, 3690, horizon)};
}

/** Preserve the authored frame proportions within the view's touch and space limits. */
export function storybookCameraTileSize(item, viewWidth) {
  const scale = Math.max(.40, viewWidth / 1536 * .68);
  const clamp = THREE.MathUtils.clamp;
  return {
    w: Math.round(clamp((item?.w || 170) * scale, 58, 216)),
    h: Math.round(clamp((item?.h || 110) * scale, 44, 152)),
  };
}

/** Browser-only Studio uses local storage. Embedded Studio delegates to its signed-in HA parent. */
export function studioCameraPreferences(host) {
  const bridge = host.RoomcraftDashboardBridge;
  if (bridge?.request) {
    return {
      read: async () => readSavedFreeView(await bridge.request('CAMERA_GET')),
      write: view => bridge.request('CAMERA_SET', view),
    };
  }
  const key = 'roomcraft.default-camera.v1';
  return {
    async read() { return readSavedFreeView(JSON.parse(host.localStorage.getItem(key))); },
    async write(view) {
      if (view) host.localStorage.setItem(key, JSON.stringify(view));
      else host.localStorage.removeItem(key);
    },
  };
}

/** Fit one authored bounding box at an explicit viewport and orthographic pose. */
export function fitStorybookCamera(camera, bounds, width, height, view = 'top', {focus, demoZoom} = {}) {
  const normalized = normalizeCameraView(view);
  if (normalized.preset === 'waterfront' && bounds?.waterfront) bounds = bounds.waterfront;
  if (![bounds?.minX, bounds?.maxX, bounds?.minZ, bounds?.maxZ, width, height].every(Number.isFinite) ||
      width <= 0 || height <= 0 || bounds.maxX < bounds.minX || bounds.maxZ < bounds.minZ) {
    throw new Error('A finite scene bounding box and viewport are required.');
  }
  const azimuth = THREE.MathUtils.degToRad(normalized.azimuth);
  const tilt = THREE.MathUtils.degToRad(normalized.tilt);
  const center = new THREE.Vector3((bounds.minX + bounds.maxX) / 2, -5,
    (bounds.minZ + bounds.maxZ) / 2);
  const outward = new THREE.Vector3(Math.sin(azimuth) * Math.sin(tilt), Math.cos(tilt),
    Math.cos(azimuth) * Math.sin(tilt));
  // Explicit up removes the pole ambiguity of lookAt in the overhead preset.
  camera.up.set(-Math.sin(azimuth) * Math.cos(tilt), Math.sin(tilt),
    -Math.cos(azimuth) * Math.cos(tilt));
  camera.position.copy(center).addScaledVector(outward, CAMERA_DISTANCE);
  camera.lookAt(center);
  camera.updateMatrixWorld(true);

  const upperY = Math.max(92, Number.isFinite(bounds.maxY) ? bounds.maxY : 92);
  const frame = new THREE.Box3();
  const corner = new THREE.Vector3();
  for (const x of [bounds.minX - 37, bounds.maxX + 37]) {
    for (const z of [bounds.minZ - 53, bounds.maxZ + 36]) {
      for (const y of [SCENERY_FLOOR, upperY]) {
        frame.expandByPoint(corner.set(x, y, z).applyMatrix4(camera.matrixWorldInverse));
      }
    }
    // Frame the beach and the near surf, while the rest of the ocean extends past the view.
    if (Number.isFinite(bounds.sceneryMinZ)) {
      frame.expandByPoint(corner.set(x, -106, bounds.sceneryMinZ - 8).applyMatrix4(camera.matrixWorldInverse));
    }
  }
  if (Number.isFinite(bounds.sceneryMinZ)) {
    const margin = (frame.max.y - frame.min.y) * .025;
    frame.min.y -= margin;
    frame.max.y += margin;
  }
  const ratio = width / height;
  const halfWidth = Math.max((frame.max.x - frame.min.x) / 2,
    (frame.max.y - frame.min.y) / 2 * ratio);
  const halfHeight = halfWidth / ratio;
  let centerX = (frame.min.x + frame.max.x) / 2;
  let centerY = (frame.min.y + frame.max.y) / 2;
  if ([focus?.x, focus?.y, focus?.z].every(Number.isFinite)) {
    const {x, y} = corner.set(focus.x, focus.y, focus.z).applyMatrix4(camera.matrixWorldInverse);
    const weight = Number.isFinite(focus.weight) ? THREE.MathUtils.clamp(focus.weight, 0, 1) : 1;
    centerX = THREE.MathUtils.lerp(centerX, x, weight);
    centerY = THREE.MathUtils.lerp(centerY, y, weight);
  }
  camera.left = centerX - halfWidth;
  camera.right = centerX + halfWidth;
  camera.bottom = centerY - halfHeight;
  camera.top = centerY + halfHeight;
  // Demo framing is intentionally excluded from the returned camera preference.
  camera.zoom = Number.isFinite(demoZoom) ? THREE.MathUtils.clamp(demoZoom, 0.6, 4.5) : normalized.zoom;
  // Orthographic framing is unchanged by moving along the view ray. At a shallow
  // angle, give the lowest view ray enough room to start above the foreground.
  const lowestOrigin = camera.position.y + (centerY - halfHeight / camera.zoom) * camera.up.y;
  const additionalDistance = normalized.tilt > PRESET_TILT_LIMIT
    ? Math.max(0, (SCENERY_FLOOR + 24 - lowestOrigin) / outward.y) : 0;
  if (additionalDistance > 0) {
    camera.position.addScaledVector(outward, additionalDistance);
    camera.updateMatrixWorld(true);
  }
  camera.far = STORYBOOK_CAMERA_FAR + additionalDistance;
  camera.updateProjectionMatrix();
  return normalized;
}
