import '../public/light-capabilities.js';

const capabilities = (typeof window === 'undefined' ? globalThis : window).RoomcraftLightCapabilities;

export const STORYBOOK_LIGHT_PANEL = `
  <dialog class="utility-dialog light-dialog" aria-labelledby="storybook-light-title">
    <header><h2 id="storybook-light-title"></h2><button type="button" data-light-close>Close</button></header>
    <div class="light-fields">
      <div class="light-power"><span data-light-state></span><button type="button" data-light-apply="power"></button></div>
      <div class="light-field" data-light-row="brightness" hidden>
        <label for="storybook-light-brightness">Brightness <output data-light-output="brightness"></output></label>
        <input id="storybook-light-brightness" type="range" min="1" max="100" step="1" data-light-field="brightness">
        <button type="button" data-light-apply="brightness">Set brightness</button>
      </div>
      <div class="light-field" data-light-row="temperature" hidden>
        <label for="storybook-light-temperature">White temperature <output data-light-output="temperature"></output></label>
        <input id="storybook-light-temperature" type="range" step="1" data-light-field="temperature">
        <button type="button" data-light-apply="temperature">Set temperature</button>
      </div>
      <div class="light-field" data-light-row="color" hidden>
        <label for="storybook-light-color">Color</label>
        <input id="storybook-light-color" type="color" data-light-field="color">
        <button type="button" data-light-apply="color">Set color</button>
      </div>
      <div class="light-field" data-light-row="effects" hidden>
        <label for="storybook-light-effect">Effect</label>
        <select id="storybook-light-effect" data-light-field="effects"></select>
        <button type="button" data-light-apply="effects">Set effect</button>
      </div>
      <div class="light-extra">
        <label data-light-row="transition" hidden>Fade duration
          <input type="number" min="0" max="120" step=".1" value="0" inputmode="decimal" data-light-field="transition"> seconds
        </label>
        <button type="button" data-light-row="white" data-light-apply="white" hidden>White mode</button>
        <div data-light-row="flash" hidden>
          <button type="button" data-light-apply="short">Flash briefly</button>
          <button type="button" data-light-apply="long">Flash longer</button>
        </div>
      </div>
      <small class="light-result" role="status" aria-live="polite"></small>
      <button type="button" data-light-native>Home Assistant details</button>
    </div>
  </dialog>`;

export const STORYBOOK_LIGHT_PANEL_STYLES = `
  .light-fields{display:grid;gap:12px;margin-top:12px}
  .light-fields [hidden]{display:none}
  .light-power,.light-field,.light-extra{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
  .light-power{padding-bottom:9px;border-bottom:1px solid #dfcfb8}
  .light-field{display:grid;grid-template-columns:minmax(0,1fr) auto}
  .light-field label{grid-column:1/-1;display:flex;justify-content:space-between;font-weight:600}
  .light-field input,.light-field select{box-sizing:border-box;width:100%;min-width:0;min-height:44px;accent-color:#38725f}
  .light-field select,.light-extra input{border:1px solid #c9b8a0;border-radius:8px;background:#fffaf0;color:inherit;font:inherit;padding:4px 7px}
  .light-field input[type=color]{padding:3px;max-width:86px}
  .light-extra input{width:64px;min-height:38px}
  .light-extra label{display:flex;align-items:center;gap:6px}
  .light-result{color:#5b5147}.light-result:empty{display:none}
  .light-dialog [data-light-native]{justify-self:end}
  @media(max-width:400px){.light-field{grid-template-columns:minmax(0,1fr)}.light-field button{justify-self:start}}
`;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const number = value => typeof value === 'number' ? value
  : typeof value === 'string' && value.trim() ? Number(value) : NaN;

export function lightCommand(state, kind, value, fade) {
  if (!['on', 'off'].includes(state?.state)) return null;
  const attributes = state.attributes ?? {};
  const modes = capabilities.describe(attributes);
  const n = number(value);
  let data;
  if (kind === 'power') data = {};
  else if (kind === 'brightness' && modes.brightness && Number.isFinite(n)) data = {brightness_pct: Math.round(clamp(n, 1, 100))};
  else if (kind === 'temperature' && modes.temperature && Number.isFinite(n)) {
    data = {color_temp_kelvin: Math.round(clamp(n, modes.temperature.min, modes.temperature.max))};
  } else if (kind === 'color' && modes.color && /^#[0-9a-f]{6}$/i.test(value)) {
    data = {rgb_color: [1, 3, 5].map(offset => Number.parseInt(value.slice(offset, offset + 2), 16))};
  } else if (kind === 'effects' && modes.effects.includes(value)) data = {effect: value};
  else if (kind === 'white' && modes.white) data = {white: Number.isFinite(attributes.brightness)
    ? Math.round(clamp(attributes.brightness, 1, 255)) : 255};
  else if (modes.flash && ['short', 'long'].includes(kind)) data = {flash: kind};
  else return null;
  const seconds = number(fade);
  if (modes.transition && Number.isFinite(seconds) && seconds > 0 && !data.flash) data.transition = clamp(seconds, 0, 120);
  return {service: kind === 'power' && state.state === 'on' ? 'turn_off' : 'turn_on', data};
}

function readColor(rgb) {
  return Array.isArray(rgb) && rgb.length === 3 && rgb.every(Number.isFinite)
    ? '#' + rgb.map(value => Math.round(clamp(value, 0, 255)).toString(16).padStart(2, '0')).join('')
    : '#ffdeab';
}

export function bindStorybookLightPanel(host) {
  const dialog = host.shadowRoot.querySelector('.light-dialog');
  const title = dialog.querySelector('h2');
  const result = dialog.querySelector('.light-result');
  const stateLabel = dialog.querySelector('[data-light-state]');
  const power = dialog.querySelector('[data-light-apply="power"]');
  const rows = new Map([...dialog.querySelectorAll('[data-light-row]')].map(row => [row.dataset.lightRow, row]));
  const inputs = new Map([...dialog.querySelectorAll('[data-light-field]')].map(input => [input.dataset.lightField, input]));
  const apply = [...dialog.querySelectorAll('[data-light-apply]')];
  const read = id => host.session?.connected === false ? null : host.session?.states?.[id];
  const dirty = new Set();
  let active = null;
  let pending = null;
  let effectOptions = [];

  function updateOutputs() {
    dialog.querySelector('[data-light-output="brightness"]').textContent = `${inputs.get('brightness').value}%`;
    dialog.querySelector('[data-light-output="temperature"]').textContent = `${inputs.get('temperature').value} K`;
  }

  function refresh() {
    if (!active) return;
    const state = read(active);
    const attributes = state?.attributes ?? {};
    const modes = capabilities.describe(attributes);
    const online = ['on', 'off'].includes(state?.state);
    title.textContent = attributes.friendly_name || active;
    stateLabel.textContent = online ? (state.state === 'on' ? 'On' : 'Off') : 'Unavailable';
    power.textContent = state?.state === 'on' ? 'Turn off' : 'Turn on';
    for (const [key, row] of rows) {
      row.hidden = !online || (key === 'effects' ? modes.effects.length === 0 : !modes[key]);
    }
    if (!dirty.has('brightness')) inputs.get('brightness').value = Number.isFinite(attributes.brightness)
      ? String(Math.max(1, Math.round(attributes.brightness / 255 * 100))) : '100';
    if (modes.temperature) {
      const input = inputs.get('temperature');
      input.min = modes.temperature.min;
      input.max = modes.temperature.max;
      if (!dirty.has('temperature')) input.value = Number.isFinite(attributes.color_temp_kelvin)
        ? attributes.color_temp_kelvin : Math.round((modes.temperature.min + modes.temperature.max) / 2);
    }
    if (!dirty.has('color')) inputs.get('color').value = readColor(attributes.rgb_color);
    const effects = inputs.get('effects');
    if (modes.effects.join('\u0000') !== effectOptions.join('\u0000')) {
      const selected = effects.value;
      const empty = host.ownerDocument.createElement('option');
      empty.value = '';
      empty.textContent = 'Choose an effect';
      effects.replaceChildren(empty, ...modes.effects.map(effect => {
        const option = host.ownerDocument.createElement('option');
        option.value = option.textContent = effect;
        return option;
      }));
      effectOptions = modes.effects;
      if (dirty.has('effects') && modes.effects.includes(selected)) effects.value = selected;
      else dirty.delete('effects');
    }
    if (!dirty.has('effects')) effects.value = modes.effects.includes(attributes.effect) ? attributes.effect : '';
    for (const input of inputs.values()) input.disabled = !online || Boolean(pending);
    for (const button of apply) button.disabled = !online || Boolean(pending) ||
      (button.dataset.lightApply === 'effects' && !effects.value);
    updateOutputs();
  }

  for (const [key, input] of inputs) {
    input.addEventListener('input', () => {
      dirty.add(key);
      updateOutputs();
      if (key === 'effects') refresh();
    });
  }
  for (const button of apply) {
    button.addEventListener('click', async () => {
      const id = active;
      if (!id || pending || typeof host.session?.callService !== 'function') return;
      const kind = button.dataset.lightApply;
      const command = lightCommand(read(id), kind, inputs.get(kind)?.value, inputs.get('transition').value);
      if (!command) return;
      const request = {};
      pending = request;
      result.textContent = 'Sending…';
      refresh();
      try {
        await host.session.callService('light', command.service, {...command.data, entity_id: id});
        if (pending === request) {
          dirty.delete(kind);
          result.textContent = 'Sent to Home Assistant';
        }
      } catch {
        if (pending === request) result.textContent = 'Home Assistant could not apply this change.';
      } finally {
        if (pending === request) {
          pending = null;
          refresh();
        }
      }
    });
  }
  const close = () => {
    active = pending = null;
    if (dialog.open) dialog.close();
  };
  dialog.addEventListener('close', () => { if (!dialog.open) close(); });
  dialog.querySelector('[data-light-close]').addEventListener('click', close);
  dialog.querySelector('[data-light-native]').addEventListener('click', () => {
    const entityId = active;
    close();
    if (entityId) host.dispatchEvent(new CustomEvent('hass-more-info',
      {bubbles: true, composed: true, detail: {entityId}}));
  });

  return {
    open(id) {
      const state = read(id);
      if (!/^light\.[a-z0-9_]+$/.test(id ?? '') || !['on', 'off'].includes(state?.state)) return false;
      const modes = capabilities.describe(state.attributes);
      if (!(modes.brightness || modes.temperature || modes.color || modes.white ||
          modes.effects.length || modes.transition || modes.flash)) return false;
      active = id;
      pending = null;
      dirty.clear();
      inputs.get('transition').value = '0';
      result.textContent = '';
      refresh();
      if (!dialog.open) dialog.showModal();
      return true;
    },
    refresh,
    close,
  };
}
