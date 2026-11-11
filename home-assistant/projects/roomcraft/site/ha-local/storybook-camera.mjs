import * as THREE from 'three';

const cameraPreset = (label, azimuth, tilt) => Object.freeze({label, azimuth, tilt, zoom: 1});

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
  return {
    preset,
    azimuth: ((azimuth % 360) + 360) % 360,
    tilt: Number.isFinite(input.tilt) ? THREE.MathUtils.clamp(input.tilt, 0, 65) : base.tilt,
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
export function fitStorybookCamera(camera, bounds, width, height, view = 'top') {
  if (![bounds?.minX, bounds?.maxX, bounds?.minZ, bounds?.maxZ, width, height].every(Number.isFinite) ||
      width <= 0 || height <= 0 || bounds.maxX < bounds.minX || bounds.maxZ < bounds.minZ) {
    throw new Error('A finite scene bounding box and viewport are required.');
  }
  const normalized = normalizeCameraView(view);
  const azimuth = THREE.MathUtils.degToRad(normalized.azimuth);
  const tilt = THREE.MathUtils.degToRad(normalized.tilt);
  const center = new THREE.Vector3((bounds.minX + bounds.maxX) / 2, -5,
    (bounds.minZ + bounds.maxZ) / 2);
  const outward = new THREE.Vector3(Math.sin(azimuth) * Math.sin(tilt), Math.cos(tilt),
    Math.cos(azimuth) * Math.sin(tilt));
  // Explicit up removes the pole ambiguity of lookAt in the overhead preset.
  camera.up.set(-Math.sin(azimuth) * Math.cos(tilt), Math.sin(tilt),
    -Math.cos(azimuth) * Math.cos(tilt));
  camera.position.copy(center).addScaledVector(outward, 1900);
  camera.lookAt(center);
  camera.updateMatrixWorld(true);

  const upperY = Math.max(92, Number.isFinite(bounds.maxY) ? bounds.maxY : 92);
  const frame = new THREE.Box3();
  const corner = new THREE.Vector3();
  for (const x of [bounds.minX - 37, bounds.maxX + 37]) {
    for (const z of [bounds.minZ - 53, bounds.maxZ + 36]) {
      for (const y of [-111, upperY]) {
        frame.expandByPoint(corner.set(x, y, z).applyMatrix4(camera.matrixWorldInverse));
      }
    }
    // Frame the far sidewalk at ground level. Including an entire volume
    // above the street would leave unnecessary space in the angled views.
    if (Number.isFinite(bounds.streetMinZ)) {
      frame.expandByPoint(corner.set(x, -106, bounds.streetMinZ - 12).applyMatrix4(camera.matrixWorldInverse));
    }
  }
  const ratio = width / height;
  const halfWidth = Math.max((frame.max.x - frame.min.x) / 2,
    (frame.max.y - frame.min.y) / 2 * ratio);
  const halfHeight = halfWidth / ratio;
  const centerX = (frame.min.x + frame.max.x) / 2;
  const centerY = (frame.min.y + frame.max.y) / 2;
  camera.left = centerX - halfWidth;
  camera.right = centerX + halfWidth;
  camera.bottom = centerY - halfHeight;
  camera.top = centerY + halfHeight;
  camera.zoom = normalized.zoom;
  camera.updateProjectionMatrix();
  return normalized;
}
