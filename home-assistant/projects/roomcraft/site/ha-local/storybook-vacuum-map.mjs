import {composeVacuumAlignment, vacuumMapMetadata} from './storybook-vacuum-alignment.mjs';

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const cameraId = /^camera\.[a-z0-9_]+$/;

export const VACUUM_MAP_TOGGLE = `
  <button type="button" class="map-toggle" data-vacuum-map-toggle aria-pressed="false" hidden>
    LiDAR map overlay <span class="menu-toggle" aria-hidden="true"></span>
  </button>
  <small data-vacuum-map-status role="status" hidden></small>`;

function dataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), {once:true});
    reader.addEventListener('error', () => reject(new Error('Home Assistant could not decode the LiDAR map.')), {once:true});
    reader.readAsDataURL(blob);
  });
}

/** Fetch only an authenticated, calibrated map snapshot. This sends no vacuum commands. */
export async function loadVacuumMap(session, id, current = () => session) {
  if (typeof id !== 'string' || !cameraId.test(id) || session?.connected === false ||
      typeof session?.fetchWithAuth !== 'function') {
    throw new Error('Open Home Assistant Studio with an available LiDAR map camera.');
  }
  const metadata = () => vacuumMapMetadata(current()?.states?.[id]);
  const key = map => JSON.stringify([map?.mapId, map?.pixelToMap]);
  for (let attempt = 0; attempt < 2; attempt++) {
    const map = metadata();
    if (!map) throw new Error('The selected camera has no calibrated LiDAR map.');
    const response = await session.fetchWithAuth('/api/camera_proxy/' + id, {cache:'no-store'});
    if (!response.ok) throw new Error('Home Assistant could not read the LiDAR map.');
    const mime = response.headers.get('content-type')?.split(';')[0];
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(mime) ||
        Number(response.headers.get('content-length')) > MAX_IMAGE_BYTES) {
      throw new Error('The map camera returned an unsupported image.');
    }
    const blob = await response.blob();
    if (blob.size === 0 || blob.size > MAX_IMAGE_BYTES) throw new Error('The map image is empty or too large.');
    const imageDataUrl = await dataUrl(blob.slice(0, blob.size, mime));
    if (key(map) === key(metadata())) return {...map, imageDataUrl};
  }
  throw new Error('The vacuum map changed while loading. Try the selected map again.');
}

export function bindVacuumMapOverlay(host) {
  const button = host.shadowRoot.querySelector('[data-vacuum-map-toggle]');
  const status = host.shadowRoot.querySelector('[data-vacuum-map-status]');
  let selection;
  let loading;
  let active;
  const say = message => {
    status.textContent = message;
    status.hidden = !message;
  };
  function clear(message = '') {
    active = loading = null;
    button.disabled = false;
    button.setAttribute('aria-pressed', 'false');
    host.scene?.setVacuumMapOverlay(null);
    host.schedule();
    say(message);
  }
  button.addEventListener('click', async () => {
    if (active) { clear(); return; }
    if (!selection || loading) return;
    const request = {};
    loading = request;
    button.disabled = true;
    say('Loading LiDAR map…');
    try {
      const map = await loadVacuumMap(host.session, selection.vacuumMapEntityId, () => host.session);
      if (request !== loading) return;
      if (selection.vacuumMapId !== undefined && selection.vacuumMapId !== map.mapId) {
        throw new Error('Select the aligned condo map in the vacuum integration.');
      }
      const image = new Image();
      image.src = map.imageDataUrl;
      await image.decode();
      if (request !== loading) return;
      const transform = composeVacuumAlignment(selection.vacuumPositionTransform, map.pixelToMap);
      if (!transform || !host.scene?.setVacuumMapOverlay(image, transform)) throw new Error('Align the LiDAR map in Studio first.');
      active = map;
      button.setAttribute('aria-pressed', 'true');
      say(selection.vacuumMapId === undefined ? 'Using the existing alignment. Verify the floor in Studio.' : '');
      host.anchorDirty = true;
      host.schedule();
    } catch (error) {
      if (request === loading) clear(error.message);
    } finally {
      if (request === loading) {
        loading = null;
        button.disabled = false;
      }
    }
  });
  return {
    configure(item) {
      clear();
      selection = item?.vacuumMapEntityId && Array.isArray(item.vacuumPositionTransform) ? item : null;
      button.hidden = !selection;
    },
    sync() {
      if (!active) return;
      const now = vacuumMapMetadata(host.session?.states?.[selection.vacuumMapEntityId]);
      if (host.session?.connected === false || !now || now.mapId !== active.mapId) clear('The selected LiDAR map changed.');
    },
  };
}
