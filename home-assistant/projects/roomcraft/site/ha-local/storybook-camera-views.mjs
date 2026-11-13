const cameraPreset = (label, azimuth, tilt) => Object.freeze({label, azimuth, tilt, zoom: 1});
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const PRESET_TILT_LIMIT = 65;
export const FREE_VIEW_TILT_LIMIT = 88;

/** Shared, renderer-independent menu order and portable camera preference contract. */
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
  waterfront: cameraPreset('Waterfront · La Jolla Cove', 206, 50),
  shores: cameraPreset('La Jolla Shores', 152, 49),
  goldcoast: cameraPreset('Gold Coast · front', 0, 50),
  school: cameraPreset('Elementary school · front', 0, 58),
  innoflight: cameraPreset('Innoflight · front', 0, 40),
  free: cameraPreset('Free view', 0, 25),
});

export const FRAMED_CAMERA_PRESETS = Object.freeze(['waterfront', 'shores', 'goldcoast', 'school', 'innoflight']);
export const LANDMARK_CAMERA_PRESETS = Object.freeze(['goldcoast', 'school', 'innoflight']);
const isFrame = value => FRAMED_CAMERA_PRESETS.includes(value);

/** A frame identifies authored geometry, never a stored copy of layout coordinates. */
export function cameraFramePreset(value) {
  if (isFrame(value?.preset)) return value.preset;
  return ['default', 'free'].includes(value?.preset) && isFrame(value.framePreset) ? value.framePreset : undefined;
}

/** Normalize UI input without modifying caller data or layout geometry. */
export function normalizeCameraView(value = 'top') {
  const input = typeof value === 'string' ? {preset: value} : value ?? {};
  const preset = Object.hasOwn(CAMERA_PRESETS, input.preset) ? input.preset : 'top';
  const base = CAMERA_PRESETS[preset];
  const azimuth = Number.isFinite(input.azimuth) ? input.azimuth : base.azimuth;
  const maxTilt = preset === 'free' || preset === 'default' ? FREE_VIEW_TILT_LIMIT : PRESET_TILT_LIMIT;
  const result = {
    preset,
    azimuth: ((azimuth % 360) + 360) % 360,
    tilt: Number.isFinite(input.tilt) ? clamp(input.tilt, 0, maxTilt) : base.tilt,
    zoom: Number.isFinite(input.zoom) ? clamp(input.zoom, 0.6, 2.5) : base.zoom,
  };
  if (['default', 'free'].includes(preset) && isFrame(input.framePreset)) result.framePreset = input.framePreset;
  if (preset === 'default' && LANDMARK_CAMERA_PRESETS.includes(result.framePreset) && input.followFront === true) result.followFront = true;
  return result;
}

export function enterFreeView(value) {
  const current = normalizeCameraView(value);
  const framePreset = cameraFramePreset(current);
  return normalizeCameraView({...current, preset:'free', tilt:current.tilt || CAMERA_PRESETS.free.tilt,
    ...(framePreset ? {framePreset} : {})});
}

/** Strict persistence boundary; malformed stored poses are not silently repaired. */
export function readStoredCameraView(value) {
  if (!value || !Object.hasOwn(CAMERA_PRESETS, value.preset) ||
      ![value.azimuth, value.tilt, value.zoom].every(Number.isFinite)) return null;
  const maxTilt = ['default', 'free'].includes(value.preset) ? FREE_VIEW_TILT_LIMIT : PRESET_TILT_LIMIT;
  if (value.azimuth < 0 || value.azimuth >= 360 || value.tilt < 0 || value.tilt > maxTilt ||
      value.zoom < .6 || value.zoom > 2.5 ||
      (value.framePreset !== undefined && !isFrame(value.framePreset)) ||
      (value.followFront !== undefined && (value.followFront !== true || value.preset !== 'default' ||
        !LANDMARK_CAMERA_PRESETS.includes(value.framePreset)))) return null;
  return normalizeCameraView(value);
}

/** Compatibility name: old Free poses and all complete named poses are supported. */
export const readSavedFreeView = readStoredCameraView;

/** Default retains the saved target and pose while keeping the menu on Default. */
export function resolveDefaultCameraView(saved) {
  const current = readStoredCameraView(saved);
  const framePreset = cameraFramePreset(current);
  const followFront = LANDMARK_CAMERA_PRESETS.includes(current?.preset) || current?.followFront === true;
  return normalizeCameraView({...current, preset:'default', ...(framePreset ? {framePreset} : {}),
    ...(followFront ? {followFront:true} : {})});
}
