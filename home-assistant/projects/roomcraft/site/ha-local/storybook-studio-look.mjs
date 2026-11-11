import {COASTAL_SKY_MARKUP, COASTAL_SKY_STYLE, updateCoastalSky} from './storybook-coastal-sky.mjs';
import {sceneDockAlignment, sceneFeatures, sceneFeatureEnabled, sceneWind} from './storybook-scene-settings.mjs';
import {storybookMoonChoices, storybookWeatherChoices} from './storybook-weather.mjs';
import {readStorybookVehicleStyle} from './storybook-commutes.mjs';

const LOOK_INTERVAL_MS = 2500;
const DEFAULT_ENVIRONMENT = Object.freeze({
  condition: 'sunny', daylightKnown: true, night: false, sunElevation: 40, sunAzimuth: 160,
  traffic: Object.freeze({severity: 'ambient'}),
});
const DAYLIGHT = {day: [40, 160], dusk: [5, 265], night: [-16, 290]};
const title = id => id.replaceAll('_', ' ').replace(/^./, character => character.toUpperCase());

export function studioWeatherPreview({condition, daylight, moonPhase, windSpeed, windBearing}) {
  const night = condition === 'clear-night' || daylight === 'night';
  const [sunElevation, sunAzimuth] = DAYLIGHT[night ? 'night' : daylight] ?? DAYLIGHT.day;
  return {...DEFAULT_ENVIRONMENT, condition, night, sunElevation, sunAzimuth, moonPhase, windSpeed, windBearing};
}

export function mountStorybookStudioLook(document, host, {api, viewport, bridge, onChange}) {
  const dialog = document.getElementById('sceneSettingsDialog');
  const open = document.getElementById('sceneSettingsButton');
  const features = document.getElementById('sceneFeatures');
  const dock = document.getElementById('sceneDockAlignment');
  const mode = document.getElementById('scenePreviewMode');
  const motion = document.getElementById('scenePreviewMotion');
  const source = document.getElementById('scenePreviewSource');
  const custom = document.getElementById('scenePreviewWeather');
  const styles = document.createElement('style');
  styles.textContent = COASTAL_SKY_STYLE;
  document.head.append(styles);
  const template = document.createElement('template');
  template.innerHTML = COASTAL_SKY_MARKUP.trim();
  const sky = template.content.firstElementChild;
  sky.hidden = true;
  viewport.before(sky);
  try { motion.checked = host.localStorage.getItem('roomcraft.reduce-motion.v1') !== 'true'; }
  catch { /* The operating system preference is still applied by the editor. */ }

  const layers = sceneFeatures.map(({key, label}) => {
    const row = document.createElement('label');
    row.className = 'scene-feature';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.addEventListener('change', () => api.setSceneSetting(key, input.checked));
    row.append(input, label);
    features.append(row);
    return {key, input};
  });

  function addField(label, input) {
    const row = document.createElement('label');
    row.textContent = label;
    row.append(input);
    custom.append(row);
    input.addEventListener('change', onChange);
    return input;
  }
  function select(label, choices, initial) {
    const input = document.createElement('select');
    input.replaceChildren(...choices.map(([value, text]) => new host.Option(text, value)));
    input.value = initial;
    return addField(label, input);
  }
  function number(label, min, max, step, value) {
    const input = document.createElement('input');
    Object.assign(input, {type: 'number', min, max, step, value});
    return addField(label, input);
  }
  const condition = select('Weather', storybookWeatherChoices.map(({id, label}) => [id, label]), 'sunny');
  const daylight = select('Time of day', [['day', 'Day'], ['dusk', 'Dusk'], ['night', 'Night']], 'day');
  const moonPhase = select('Moon phase', storybookMoonChoices.map(id => [id, title(id)]), 'full_moon');
  const speed = number('Wind speed (m/s)', 0, 30, 1, 4);
  const bearing = number('Wind from (degrees)', 0, 360, 1, 270);
  let live;
  let liveFingerprint;
  let pending = false;
  let active = false;
  let disposed = false;
  let timer;
  let liveAvailable = false;

  const openDialog = () => {
    if (!dialog.open) dialog.showModal();
  };
  const changeDock = () => api.setSceneSetting('dockAlignment', dock.value);
  const repaint = () => {
    custom.hidden = mode.value !== 'custom';
    syncPolling();
    onChange();
  };
  open.addEventListener('click', openDialog);
  dock.addEventListener('change', changeDock);
  mode.addEventListener('change', repaint);
  motion.addEventListener('change', onChange);

  function matching() { return mode.value !== 'custom'; }

  function paintSource() {
    const text = !active ? 'Choose a 3D view to see the preview.'
      : !matching() ? 'Preview changes stay in this Studio tab.'
      : liveAvailable ? 'Live appearance from Home Assistant.'
      : live || api.getPreview?.()?.environment ? 'Showing the last available dashboard appearance.'
      : 'Connect to Home Assistant to match the dashboard appearance.';
    if (source.textContent !== text) source.textContent = text;
  }

  async function readLive() {
    if (!active || !matching() || !bridge || pending || disposed) return;
    pending = true;
    let changed = false;
    try {
      const next = await bridge.request('LOOK_GET');
      if (disposed) return;
      changed = liveAvailable !== Boolean(next?.environment);
      liveAvailable = Boolean(next?.environment);
      if (liveAvailable) {
        const fingerprint = JSON.stringify(next);
        if (fingerprint !== liveFingerprint) {
          live = next;
          liveFingerprint = fingerprint;
          changed = true;
        }
      }
    } catch {
      changed = liveAvailable;
      liveAvailable = false;
    } finally {
      pending = false;
      if (!disposed && active && matching() && changed) onChange();
    }
  }

  function syncPolling() {
    if (active && matching() && bridge && !document.hidden) {
      if (timer === undefined) {
        timer = host.setInterval(readLive, LOOK_INTERVAL_MS);
        void readLive();
      }
    } else if (timer !== undefined) {
      host.clearInterval(timer);
      timer = undefined;
    }
  }

  document.addEventListener('visibilitychange', syncPolling);
  return {
    open: openDialog,
    motionEnabled: () => motion.checked,
    sync(visible, settings, reduceMotion = false) {
      active = visible;
      syncPolling();
      for (const {key, input} of layers) input.checked = sceneFeatureEnabled(settings, key);
      dock.value = sceneDockAlignment(settings);
      paintSource();
      const dashboard = live ?? api.getPreview?.();
      const look = matching() ? dashboard?.environment ?? DEFAULT_ENVIRONMENT
        : studioWeatherPreview({
          condition: condition.value, daylight: daylight.value, moonPhase: moonPhase.value,
          windSpeed: Math.min(30, Math.max(0, speed.valueAsNumber || 0)),
          windBearing: Math.min(360, Math.max(0, bearing.valueAsNumber || 0)),
        });
      const environment = {...look, traffic: {...(look.traffic ?? DEFAULT_ENVIRONMENT.traffic),
        vehicleStyle: readStorybookVehicleStyle(host)}};
      sky.hidden = !active || !sceneFeatureEnabled(settings, 'sky');
      if (!sky.hidden) updateCoastalSky(sky, {...sceneWind(environment, settings), reduceMotion});
      return {states: dashboard?.states ?? {}, environment};
    },
    dispose() {
      disposed = true;
      active = false;
      syncPolling();
      document.removeEventListener('visibilitychange', syncPolling);
      open.removeEventListener('click', openDialog);
      dock.removeEventListener('change', changeDock);
      mode.removeEventListener('change', repaint);
      motion.removeEventListener('change', onChange);
      dialog.close();
      for (const {input} of layers) input.parentElement.remove();
      custom.replaceChildren();
      sky.remove();
      styles.remove();
    },
  };
}
