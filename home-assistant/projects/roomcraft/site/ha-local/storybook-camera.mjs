import * as THREE from 'three';

export const CAMERA_PRESETS = Object.freeze({
  top: Object.freeze({preset: 'top', azimuth: 0, tilt: 0, zoom: 1}),
  dollhouse: Object.freeze({preset: 'dollhouse', azimuth: 2, tilt: 30, zoom: 1}),
  corner: Object.freeze({preset: 'corner', azimuth: 45, tilt: 40, zoom: 1}),
});

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

  const frame = new THREE.Box3();
  const corner = new THREE.Vector3();
  for (const x of [bounds.minX - 37, bounds.maxX + 37]) {
    for (const z of [bounds.minZ - 53, bounds.maxZ + 36]) {
      for (const y of [-111, 92]) {
        frame.expandByPoint(corner.set(x, y, z).applyMatrix4(camera.matrixWorldInverse));
      }
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
