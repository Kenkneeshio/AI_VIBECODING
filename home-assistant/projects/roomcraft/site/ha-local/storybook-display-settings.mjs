import {sceneFeatures} from './storybook-scene-settings.mjs';

export const DISPLAY_SETTINGS_KEY = 'roomcraft.display-settings.v1';
const DOCK = ['left', 'center', 'right'];
const bounded = (value, min, max) => Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : 1;

export function normalizeStorybookDisplaySettings(input) {
  const features = {};
  for (const {key} of sceneFeatures) {
    if (typeof input?.features?.[key] === 'boolean') features[key] = input.features[key];
  }
  return {
    features,
    headlightBrightness: bounded(input?.headlightBrightness, .35, 1.6),
    heatMapOpacity: bounded(input?.heatMapOpacity, .25, 1),
    showAvatars: input?.showAvatars !== false,
    seatedPoses: input?.seatedPoses !== false,
    ...(DOCK.includes(input?.dockAlignment) ? {dockAlignment: input.dockAlignment} : {}),
  };
}

/** Browser overrides change presentation only; the published settings stay intact. */
export function storybookDisplaySceneSettings(authored, display) {
  return {...authored, ...display?.features, ...(display?.dockAlignment ? {dockAlignment: display.dockAlignment} : {})};
}

function parseStored(value) {
  try { return normalizeStorybookDisplaySettings(JSON.parse(value)); }
  catch { return normalizeStorybookDisplaySettings(); }
}

export const DISPLAY_SETTINGS_MARKUP = `
  <dialog class="display-settings-dialog" aria-labelledby="display-settings-title">
    <header><h2 id="display-settings-title">Display settings</h2>
      <button type="button" data-display-close>Close</button>
    </header>
    <p class="display-settings-note">Saved in this browser.</p>
    <fieldset><legend>Scene layers</legend>
      ${sceneFeatures.map(({key, label}) => `
        <label class="display-setting-row">${label}
          <select data-display-feature="${key}">
            <option value="layout">Use layout</option><option value="show">Show</option><option value="hide">Hide</option>
          </select>
        </label>`).join('')}
    </fieldset>
    <fieldset><legend>Appearance</legend>
      <label class="display-setting-row">Menu position
        <select data-display-dock><option value="layout">Use layout</option>
          <option value="left">Left</option><option value="center">Center</option><option value="right">Right</option>
        </select>
      </label>
      <label class="display-slider-row">Headlight brightness <output data-display-headlight-value>100%</output>
        <input type="range" data-display-headlight min="0.35" max="1.6" step="0.05" value="1">
      </label>
      <label class="display-slider-row">Radar heat map opacity <output data-display-heat-value>100%</output>
        <input type="range" data-display-heat min="0.25" max="1" step="0.05" value="1">
      </label>
      <label class="display-toggle-row"><input type="checkbox" data-display-avatars checked> Show presence characters</label>
      <label class="display-toggle-row"><input type="checkbox" data-display-seats checked> Allow seated poses</label>
    </fieldset>
    <button type="button" data-display-reset>Reset display settings</button>
  </dialog>`;

export const DISPLAY_SETTINGS_STYLE = `
  .display-settings-dialog{box-sizing:border-box;width:min(460px,calc(100% - 24px));max-height:82dvh;overflow:auto;
    padding:16px;border:1px solid #c9b8a0;border-radius:14px;background:#fffaf0;color:#3c3247}
  .display-settings-dialog::backdrop{background:#182a2a9c}
  .display-settings-dialog header{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .display-settings-dialog h2{margin:0;font-size:17px}
  .display-settings-dialog fieldset{min-width:0;margin:10px 0 12px;padding:4px 10px 9px;border:1px solid #e1d4be;border-radius:8px}
  .display-settings-dialog legend{padding:0 4px;font-weight:650}
  .display-settings-dialog :is(select,button){min-height:44px;padding:5px 9px;border:1px solid #c9b8a0;
    border-radius:7px;background:#fffdf6;color:inherit;font:inherit}
  .display-settings-dialog button{cursor:pointer}
  .display-settings-note{margin:5px 0;color:#665849;font-size:12px}
  .display-setting-row,.display-toggle-row,.display-slider-row{min-height:44px;align-items:center;gap:7px}
  .display-setting-row,.display-toggle-row{display:flex}
  .display-setting-row{justify-content:space-between;margin:2px 0}
  .display-setting-row select{flex:0 0 106px}
  .display-toggle-row input{width:17px;height:17px;accent-color:#3e775f}
  .display-toggle-row:has(input:disabled){opacity:.55}
  .display-slider-row{display:grid;grid-template-columns:1fr auto;gap:2px 7px;margin:6px 0}
  .display-slider-row input{grid-column:1 / -1;width:100%;margin:0;min-height:30px;accent-color:#3e775f}
  .display-slider-row output{font-size:12px;font-variant-numeric:tabular-nums}
`;

export function bindStorybookDisplaySettings(card, onChange, host = window) {
  const root = card.shadowRoot;
  const dialog = root.querySelector('.display-settings-dialog');
  const toggle = root.querySelector('.open-display-settings');
  const fields = [...dialog.querySelectorAll('[data-display-feature]')];
  const byName = key => dialog.querySelector(`[data-display-${key}]`);
  const dock = byName('dock');
  const avatars = byName('avatars');
  const seats = byName('seats');
  const headlight = byName('headlight');
  const heat = byName('heat');
  let value;
  try { value = parseStored(host.localStorage.getItem(DISPLAY_SETTINGS_KEY)); }
  catch { value = normalizeStorybookDisplaySettings(); }

  function paint() {
    for (const select of fields) {
      const visible = value.features[select.dataset.displayFeature];
      select.value = visible === undefined ? 'layout' : visible ? 'show' : 'hide';
    }
    dock.value = value.dockAlignment ?? 'layout';
    avatars.checked = value.showAvatars;
    seats.checked = value.seatedPoses;
    seats.disabled = !value.showAvatars;
    headlight.value = String(value.headlightBrightness);
    heat.value = String(value.heatMapOpacity);
    byName('headlight-value').value = `${Math.round(value.headlightBrightness * 100)}%`;
    byName('heat-value').value = `${Math.round(value.heatMapOpacity * 100)}%`;
  }

  function apply(next, storage = 'save') {
    const updated = normalizeStorybookDisplaySettings(next);
    const unchanged = JSON.stringify(updated) === JSON.stringify(value);
    value = updated;
    try {
      if (storage === 'reset') host.localStorage.removeItem(DISPLAY_SETTINGS_KEY);
      if (storage === 'save' && !unchanged) host.localStorage.setItem(DISPLAY_SETTINGS_KEY, JSON.stringify(value));
    } catch { /* Settings still apply in this tab if storage is unavailable. */ }
    paint();
    if (!unchanged) onChange(value);
  }

  function edit() {
    const features = {};
    for (const select of fields) {
      if (select.value !== 'layout') features[select.dataset.displayFeature] = select.value === 'show';
    }
    apply({features, dockAlignment: dock.value, headlightBrightness: headlight.valueAsNumber,
      heatMapOpacity: heat.valueAsNumber, showAvatars: avatars.checked, seatedPoses: seats.checked});
  }

  const syncStorage = event => {
    if (event.key === DISPLAY_SETTINGS_KEY || event.key === null) apply(parseStored(event.newValue), 'none');
  };
  toggle.addEventListener('click', () => {
    card.setMainMenu(false, true);
    paint();
    if (!dialog.open) dialog.showModal();
  });
  byName('close').addEventListener('click', () => dialog.close());
  byName('reset').addEventListener('click', () => apply(undefined, 'reset'));
  for (const control of [...fields, dock, avatars, seats]) control.addEventListener('change', edit);
  for (const control of [headlight, heat]) control.addEventListener('input', edit);
  paint();

  return {
    get value() { return value; },
    connect() {
      host.addEventListener('storage', syncStorage);
      try { apply(parseStored(host.localStorage.getItem(DISPLAY_SETTINGS_KEY)), 'none'); }
      catch { /* Current in-memory settings still apply. */ }
    },
    disconnect() {
      host.removeEventListener('storage', syncStorage);
      if (dialog.open) dialog.close();
    },
  };
}
