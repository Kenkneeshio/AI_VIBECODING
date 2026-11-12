import {sceneFeatures} from './storybook-scene-settings.mjs';

export const DISPLAY_SETTINGS_KEY = 'roomcraft.display-settings.v1';
export const STORYBOOK_GRAPHICS_DEFAULTS = Object.freeze({
  frameRate: 24, cameraFrameRate: null, renderScale: 1, shadowQuality: 'high', showFps: false,
  limitOffscreenScenery: false,
});
const TABLET_PERFORMANCE = {frameRate:20, renderScale:.67, shadowQuality:'off'};
const FRAME_RATES = [12, 20, 24, 30, 60];
const RENDER_SCALES = [.5, .67, .8, 1];
const SHADOW_QUALITIES = ['off', 'low', 'high'];
const INSANE_GRAPHICS = Object.freeze({
  frameRate: 60, cameraFrameRate: 60, renderScale: 1, shadowQuality: 'ultra',
  limitOffscreenScenery: false, insaneGraphics: true,
});
const GRAPHICS_PREVIEW_MS = 5000;
const DOCK = ['left', 'center', 'right'];
const bounded = (value, min, max) => Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : 1;

export function normalizeStorybookDisplaySettings(input) {
  const features = {};
  for (const {key} of sceneFeatures) {
    if (typeof input?.features?.[key] === 'boolean') features[key] = input.features[key];
  }
  return {
    features,
    frameRate: FRAME_RATES.includes(input?.frameRate) ? input.frameRate : STORYBOOK_GRAPHICS_DEFAULTS.frameRate,
    cameraFrameRate: FRAME_RATES.includes(input?.cameraFrameRate) ? input.cameraFrameRate : STORYBOOK_GRAPHICS_DEFAULTS.cameraFrameRate,
    renderScale: RENDER_SCALES.includes(input?.renderScale) ? input.renderScale : STORYBOOK_GRAPHICS_DEFAULTS.renderScale,
    shadowQuality: SHADOW_QUALITIES.includes(input?.shadowQuality) ? input.shadowQuality : STORYBOOK_GRAPHICS_DEFAULTS.shadowQuality,
    showFps: input?.showFps === true,
    insaneGraphics: input?.insaneGraphics === true,
    limitOffscreenScenery: input?.limitOffscreenScenery === true,
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
    <fieldset data-display-graphics><legend>Graphics</legend>
      <div class="display-profile-actions">
        <button type="button" class="display-tablet-performance" data-display-tablet-performance>Tablet performance</button>
        <button type="button" class="display-insane-graphics" data-display-insane>Insane graphics</button>
      </div>
      <span class="display-settings-note display-graphics-status" data-display-graphics-status role="status"></span>
      <div class="display-profile-actions" data-display-preview-actions hidden>
        <button type="button" class="display-insane-graphics" data-display-keep>Keep Insane graphics</button>
        <button type="button" data-display-revert>Revert <span data-display-countdown aria-hidden="true"></span></button>
      </div>
      <div data-display-manual>
      <label class="display-setting-row">Frame rate limit
        <select data-display-frame-rate>
          ${FRAME_RATES.map(rate => `<option value="${rate}">${rate} FPS</option>`).join('')}
        </select>
      </label>
      <label class="display-setting-row">Camera movement limit
        <select data-display-camera-frame-rate>
          <option value="">Main limit</option>
          ${FRAME_RATES.map(rate => `<option value="${rate}">${rate} FPS</option>`).join('')}
        </select>
      </label>
      <label class="display-setting-row">Render resolution
        <select data-display-render-scale>
          ${RENDER_SCALES.map(scale => `<option value="${scale}">${Math.round(scale * 100)}%</option>`).join('')}
        </select>
      </label>
      <label class="display-setting-row">Shadows
        <select data-display-shadow-quality>
          ${SHADOW_QUALITIES.map(quality => `<option value="${quality}">${quality[0].toUpperCase() + quality.slice(1)}</option>`).join('')}
        </select>
      </label>
      <label class="display-toggle-row"><input type="checkbox" data-display-limit-offscreen> Limit off-screen scenery</label>
      </div>
    </fieldset>
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
      <label class="display-toggle-row"><input type="checkbox" data-display-seats checked> Allow character interactions</label>
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
  .display-settings-dialog .display-tablet-performance{background:#e6efe2;border-color:#a9b9a3;color:#2e503b}
  .display-settings-dialog .display-insane-graphics{background:#f9e6d7;border-color:#d2a88d;color:#723b31}
  .display-profile-actions{display:flex;flex-wrap:wrap;gap:6px}
  .display-settings-dialog [hidden]{display:none}
  .display-settings-dialog[data-graphics-preview]{margin:auto 12px 12px auto;box-shadow:0 6px 24px #182a2a52}
  .display-settings-dialog[data-graphics-preview]::backdrop{background:transparent}
  .display-settings-dialog[data-graphics-preview]>:not(header,[data-display-graphics]),
  .display-settings-dialog[data-graphics-preview] [data-display-manual],
  .display-settings-dialog[data-graphics-preview] [data-display-graphics]>.display-profile-actions:not([data-display-preview-actions]){
    display:none
  }
  .display-graphics-status{display:block;margin:4px 0;min-height:1.4em}
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
  const frameRate = byName('frame-rate');
  const cameraFrameRate = byName('camera-frame-rate');
  const renderScale = byName('render-scale');
  const shadowQuality = byName('shadow-quality');
  const limitOffscreen = byName('limit-offscreen');
  const graphicsStatus = byName('graphics-status');
  const insane = byName('insane');
  const keep = byName('keep');
  const revert = byName('revert');
  const countdown = byName('countdown');
  const previewActions = byName('preview-actions');
  const manualControls = [frameRate, cameraFrameRate, renderScale, shadowQuality, limitOffscreen];
  let preview;
  let graphicsMessage = '';
  let value;
  try { value = parseStored(host.localStorage.getItem(DISPLAY_SETTINGS_KEY)); }
  catch { value = normalizeStorybookDisplaySettings(); }

  const effective = () => preview || value.insaneGraphics ? {...value, ...INSANE_GRAPHICS} : value;
  const now = () => host.performance?.now() ?? Date.now();

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
    frameRate.value = String(value.frameRate);
    cameraFrameRate.value = value.cameraFrameRate === null ? '' : String(value.cameraFrameRate);
    renderScale.value = String(value.renderScale);
    shadowQuality.value = value.shadowQuality;
    limitOffscreen.checked = value.limitOffscreenScenery;
    for (const control of manualControls) control.disabled = value.insaneGraphics;
    dialog.toggleAttribute('data-graphics-preview', Boolean(preview));
    previewActions.hidden = !preview;
    insane.textContent = value.insaneGraphics ? 'Turn off Insane graphics' : 'Insane graphics';
    graphicsStatus.textContent = preview ? 'Preview runs for five seconds. Keep it to save this setting.'
      : graphicsMessage || (value.insaneGraphics ? 'Insane graphics is on. Manual settings are saved for later.' : '');
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
    graphicsMessage = '';
    paint();
    if (!unchanged) onChange(effective());
  }

  function clearPreview() {
    if (!preview) return false;
    host.clearInterval(preview.interval);
    host.clearTimeout(preview.timeout);
    preview = undefined;
    return true;
  }

  function cancelGraphicsPreview(message = 'Previous graphics restored.') {
    if (!clearPreview()) return false;
    graphicsMessage = message;
    paint();
    onChange(effective());
    if (dialog.open && !host.document?.hidden) insane.focus();
    return true;
  }

  function startPreview() {
    if (preview || !dialog.open || host.document?.hidden) return;
    const endsAt = now() + GRAPHICS_PREVIEW_MS;
    const updateCountdown = () => {
      countdown.textContent = `(${Math.max(0, Math.ceil((endsAt - now()) / 1000))}s)`;
    };
    preview = {endsAt, interval:host.setInterval(updateCountdown, 250),
      timeout:host.setTimeout(cancelGraphicsPreview, GRAPHICS_PREVIEW_MS)};
    updateCountdown();
    paint();
    onChange(effective());
    revert.focus();
  }

  function edit() {
    const features = {};
    for (const select of fields) {
      if (select.value !== 'layout') features[select.dataset.displayFeature] = select.value === 'show';
    }
    apply({...value, features, dockAlignment: dock.value, headlightBrightness: headlight.valueAsNumber,
      heatMapOpacity: heat.valueAsNumber, showAvatars: avatars.checked, seatedPoses: seats.checked,
      frameRate:Number(frameRate.value), cameraFrameRate:cameraFrameRate.value ? Number(cameraFrameRate.value) : null,
      renderScale:Number(renderScale.value), shadowQuality:shadowQuality.value,
      limitOffscreenScenery:limitOffscreen.checked});
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
  dialog.addEventListener('close', () => cancelGraphicsPreview());
  const onVisibility = () => { if (host.document.hidden) cancelGraphicsPreview(); };
  byName('reset').addEventListener('click', () => apply(undefined, 'reset'));
  byName('tablet-performance').addEventListener('click', () => {
    apply({...value, ...TABLET_PERFORMANCE, insaneGraphics:false});
    graphicsMessage = 'Tablet performance applied.';
    paint();
  });
  insane.addEventListener('click', () => {
    if (value.insaneGraphics) apply({...value, insaneGraphics:false});
    else startPreview();
  });
  keep.addEventListener('click', () => {
    if (!preview || !dialog.open || host.document?.hidden || now() >= preview.endsAt) {
      cancelGraphicsPreview();
      return;
    }
    clearPreview();
    apply({...value, insaneGraphics:true});
    insane.focus();
  });
  revert.addEventListener('click', () => cancelGraphicsPreview());
  for (const control of [...fields, dock, avatars, seats, ...manualControls]) {
    control.addEventListener('change', edit);
  }
  for (const control of [headlight, heat]) control.addEventListener('input', edit);
  paint();

  return {
    get value() { return effective(); },
    get graphicsPreviewActive() { return Boolean(preview); },
    cancelGraphicsPreview,
    setShowFps(showFps) { apply({...value, showFps}); },
    connect() {
      host.addEventListener('storage', syncStorage);
      host.document?.addEventListener('visibilitychange', onVisibility);
      try { apply(parseStored(host.localStorage.getItem(DISPLAY_SETTINGS_KEY)), 'none'); }
      catch { /* Current in-memory settings still apply. */ }
    },
    disconnect() {
      host.removeEventListener('storage', syncStorage);
      host.document?.removeEventListener('visibilitychange', onVisibility);
      cancelGraphicsPreview();
      if (dialog.open) dialog.close();
    },
  };
}
