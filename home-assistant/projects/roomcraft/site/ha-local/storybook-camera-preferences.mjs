import {readStoredCameraView} from './storybook-camera-views.mjs';

export const CAMERA_PREFERENCES_PREFIX = 'roomcraft.default-camera.v2:';
export const CAMERA_PREFERENCE_EVENT = 'roomcraft-camera-preference-change';

/** Separate dashboards within an origin; the browser/app profile owns the
 * storage namespace. The old HA alias is intentionally only a migration key. */
export function cameraPreferencesKey(dashboard = 'roomcraft-home') {
  if (typeof dashboard !== 'string' || !dashboard.trim()) throw new Error('A dashboard is required.');
  return CAMERA_PREFERENCES_PREFIX + encodeURIComponent(dashboard.trim());
}

export function legacyCameraPreferencesKey(dashboard = 'roomcraft-home') {
  return 'roomcraft_default_camera_v1:' + (dashboard === 'roomcraft-home' ? 'second-floor' : dashboard);
}

function storageFailure() {
  return new Error('Camera preferences could not be stored in this browser. Allow local storage and try again.');
}

/** Browser/device-local camera preference. A serialized null is an explicit
 * reset, distinct from a missing key, and prevents reimporting the legacy HA
 * value. Migration snapshots the old value once; it never writes back to HA. */
export function createCameraPreferences({host, dashboard = 'roomcraft-home', readLegacy} = {}) {
  const key = cameraPreferencesKey(dashboard);
  const normalizedDashboard = dashboard.trim();
  function storage() {
    try {
      const value = host?.localStorage;
      if (typeof value?.getItem !== 'function' || typeof value?.setItem !== 'function') throw storageFailure();
      return value;
    } catch { throw storageFailure(); }
  }
  function rawRead() {
    try { return storage().getItem(key); }
    catch { throw storageFailure(); }
  }
  function decode(raw) {
    let value;
    try { value = JSON.parse(raw); }
    catch { throw new Error('The saved camera preference is invalid. Save or reset this browser’s default view.'); }
    if (value === null) return null;
    const view = readStoredCameraView(value);
    if (!view) throw new Error('The saved camera preference is invalid. Save or reset this browser’s default view.');
    return view;
  }
  function persist(value) {
    const raw = JSON.stringify(value);
    try {
      const target = storage();
      target.setItem(key, raw);
      if (target.getItem(key) !== raw) throw storageFailure();
    } catch { throw storageFailure(); }
    return value;
  }
  return {
    async read() {
      const local = rawRead();
      if (local !== null) return decode(local);
      const legacy = readLegacy ? await readLegacy() : null;
      // A save/reset in another view or tab while migration was awaiting HA wins.
      const newer = rawRead();
      if (newer !== null) return decode(newer);
      return persist(readStoredCameraView(legacy));
    },
    async write(value) {
      const view = value === null ? null : readStoredCameraView(value);
      if (value !== null && !view) throw new Error('Invalid camera view.');
      const saved = persist(view);
      if (typeof host?.dispatchEvent === 'function' && typeof host.CustomEvent === 'function') {
        try {host.dispatchEvent(new host.CustomEvent(CAMERA_PREFERENCE_EVENT,{detail:{dashboard:normalizedDashboard}}));}
        catch { /* Storage succeeded; a presentation notification cannot undo it. */ }
      }
      return saved;
    },
  };
}
