import * as THREE from 'three';
import {createCameraPreferences} from './storybook-camera-preferences.mjs';
import {CAMERA_PRESETS, PRESET_TILT_LIMIT, normalizeCameraView, readSavedFreeView,
  cameraFramePreset} from './storybook-camera-views.mjs';
export {CAMERA_PRESETS, FREE_VIEW_TILT_LIMIT, normalizeCameraView, readSavedFreeView,
  readStoredCameraView, resolveDefaultCameraView, enterFreeView, cameraFramePreset} from './storybook-camera-views.mjs';
export const STORYBOOK_CAMERA_FAR = 4400;
const CAMERA_DISTANCE = 1900;
const SCENERY_FLOOR = -111;

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
  return createCameraPreferences({host,dashboard:'roomcraft-home',
    readLegacy:()=>JSON.parse(host.localStorage.getItem('roomcraft.default-camera.v1'))});
}

/** Fit one authored bounding box at an explicit viewport and orthographic pose. */
export function fitStorybookCamera(camera, bounds, width, height, view = 'top', {focus, demoZoom} = {}) {
  const normalized = normalizeCameraView(view);
  const framePreset = cameraFramePreset(normalized) ?? normalized.preset;
  const subjectFrame = bounds?.frames?.[framePreset] ?? bounds?.coastalFrames?.[framePreset] ??
    (framePreset === 'waterfront' ? bounds?.waterfront : undefined);
  if (subjectFrame) {
    bounds = subjectFrame;
    // Named front views, including a saved named Default, follow authored rotation.
    // A Free view's Default preserves its exact angle and current target bounds.
    if ((normalized.preset === framePreset || normalized.followFront) && Number.isFinite(subjectFrame.azimuth)) {
      normalized.azimuth = subjectFrame.azimuth;
    }
  }
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

  const coastal = subjectFrame && Number.isFinite(bounds.minY) && Number.isFinite(bounds.maxY);
  const lowerY = coastal ? bounds.minY : SCENERY_FLOOR;
  const upperY = coastal ? bounds.maxY : Math.max(92, Number.isFinite(bounds.maxY) ? bounds.maxY : 92);
  const frame = new THREE.Box3();
  const corner = new THREE.Vector3();
  const sideMargin = coastal ? 12 : 37;
  for (const x of [bounds.minX - sideMargin, bounds.maxX + sideMargin]) {
    for (const z of [bounds.minZ - (coastal ? 6 : 53), bounds.maxZ + (coastal ? 5 : 36)]) {
      for (const y of [lowerY, upperY]) {
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
  camera.zoom = Number.isFinite(demoZoom) ? THREE.MathUtils.clamp(demoZoom, 0.6, 8) : normalized.zoom;
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
