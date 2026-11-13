import {normalizeHolidaySettings, validHolidaySettings} from './storybook-holiday-settings.mjs';
import {resolveHolidays} from './storybook-holidays.mjs';

export const HOLIDAY_PANEL_STYLE = `
.roomcraft-holidays{box-sizing:border-box;width:min(1160px,94vw);max-width:none;max-height:90dvh;padding:0;border:1px solid #dfd5c0;border-radius:22px;background:#faf7ed;color:#34453e;font:15px system-ui;box-shadow:0 20px 80px #152b3c66}
.roomcraft-holidays::backdrop{background:#172b3a99;backdrop-filter:blur(4px)}
.roomcraft-holidays *,.holiday-preview-strip *{box-sizing:border-box}
.roomcraft-holidays form{display:flex;flex-direction:column;max-height:89dvh;margin:0}
.roomcraft-holidays header,.holiday-actions{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 22px;background:#edf1e5}
.roomcraft-holidays h2{margin:0;font:600 clamp(21px,3vw,30px) Georgia,serif}.roomcraft-holidays header p{margin:5px 0 0;color:#5c6b60;font-size:13px}
.roomcraft-holidays button,.roomcraft-holidays select,.roomcraft-holidays input,.holiday-preview-strip button{min-height:42px;font:inherit;border:1px solid #c7cfbe;border-radius:10px;background:#fffdf6;color:#34453e;padding:8px 11px}
.roomcraft-holidays button,.holiday-preview-strip button{cursor:pointer}.roomcraft-holidays button:focus-visible,.roomcraft-holidays input:focus-visible,.roomcraft-holidays select:focus-visible{outline:3px solid #739e7f;outline-offset:2px}
.holiday-body{padding:18px 22px;overflow:auto;min-height:0}.holiday-general{display:flex;flex-wrap:wrap;align-items:end;gap:12px 20px;padding-bottom:16px;border-bottom:1px solid #dedfcf}
.holiday-field{display:grid;gap:5px;font-size:13px}.holiday-field input[type=number]{max-width:100px}.holiday-check{display:flex;align-items:center;gap:8px}.holiday-check input{min-height:22px;width:22px;margin:0;accent-color:#52755e}
.holiday-search{width:100%;margin:16px 0}.holiday-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.holiday-card{min-width:0;padding:15px;border:1px solid #dedfcd;border-radius:16px;background:linear-gradient(140deg,#fffdf5,#f1f1e4)}
.holiday-card h3{font:600 19px Georgia,serif;margin:0 0 5px}.holiday-card p{font-size:12px;line-height:1.45;color:#657366;margin:0 0 10px}.holiday-row{display:flex;align-items:center;gap:9px}.holiday-row select{flex:1;min-width:0}.holiday-swatches{display:flex;gap:4px;margin-bottom:10px}.holiday-swatches i{width:21px;height:7px;border-radius:5px}.holiday-card details{margin-top:10px;font-size:12px}.holiday-card details input{display:block;width:100%;margin-top:8px;font-size:13px}
.holiday-placement{margin:16px 0 0;padding-top:14px;border-top:1px solid #dedfcf}.holiday-placement summary{cursor:pointer}.holiday-placement-grid{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0}.holiday-note{font-size:12px;line-height:1.5;color:#657366}.holiday-actions{flex-wrap:wrap;border-top:1px solid #dedfcf;padding-block:12px}.holiday-actions p{margin:0;flex:1;font-size:13px}.holiday-actions button[type=submit]{background:#3d6551;border-color:#3d6551;color:#fff}.holiday-actions button:disabled{opacity:.6;cursor:wait}
.holiday-preview-strip{position:fixed;z-index:10000;bottom:18px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:10px;max-width:calc(100vw - 24px);padding:10px 12px;background:#f9f7ed;color:#34453e;border:1px solid #becdbc;border-radius:15px;box-shadow:0 8px 30px #18352755;font:14px system-ui}.holiday-preview-strip[hidden],.holiday-card[hidden]{display:none}
@media(max-width:640px){.roomcraft-holidays{width:calc(100vw - 12px);max-height:96dvh;border-radius:16px}.roomcraft-holidays form{max-height:95dvh}.holiday-list{grid-template-columns:1fr}.holiday-body{padding:12px}.roomcraft-holidays header,.holiday-actions{padding:13px}.holiday-preview-strip{flex-wrap:wrap;justify-content:center;width:max-content}.holiday-general{gap:10px 16px}.holiday-row button{padding-inline:9px}}
`;

/** DOM adapter shared by the HA shadow root and Studio; no device actions or private state. */
export function createStorybookHolidayPanel(container, {catalog, getSettings, onSave, onPreview, onClose,
  getAutoPlacement, getDate, saveLabel = 'Save settings', saveNotice = 'Holiday settings saved.'} = {}) {
  const doc = container.ownerDocument ?? container;
  const mount = container.nodeType === 9 ? container.body : container;
  const style = doc.createElement('style'); style.textContent = HOLIDAY_PANEL_STYLE;
  const dialog = doc.createElement('dialog'); dialog.className = 'roomcraft-holidays';
  dialog.setAttribute('aria-label', 'Holidays and celebrations');
  dialog.innerHTML = `<form><header><div><h2>Holidays &amp; celebrations</h2><p>A little celebration, on your schedule.</p></div><button type="button" data-holiday-close aria-label="Close holiday settings">Close</button></header>
    <div class="holiday-body"><div class="holiday-general"></div>
    <p class="holiday-note">Auto centers the celebration window on each local holiday date. Keep on stays until you change it. Off disables only that holiday. Overlapping celebrations take turns every 20 seconds; reduced motion holds one theme. Decorations never operate your real lights or devices.</p>
    <input class="holiday-search" type="search" aria-label="Find a holiday" placeholder="Find a holiday or celebration…">
    <div class="holiday-list"></div><details class="holiday-placement"><summary>Decoration placement</summary>
    <p class="holiday-note">Move, resize or rotate the shared celebration display. Automatic placement uses the open lawn near your home.</p><div class="holiday-placement-grid"></div><button type="button" data-holiday-auto>Use automatic placement</button></details></div>
    <footer class="holiday-actions"><p role="status" aria-live="polite"></p><button type="button" data-holiday-cancel>Cancel</button><button type="submit"></button></footer></form>`;
  const strip = doc.createElement('div'); strip.className = 'holiday-preview-strip'; strip.hidden = true;
  strip.innerHTML = '<span></span><button type="button" data-holiday-preview-settings>Settings</button><button type="button" data-holiday-preview-stop>End preview</button>';
  mount.append(style, dialog, strip);
  const query = selector => dialog.querySelector(selector);
  const general = query('.holiday-general'), list = query('.holiday-list'), status = query('[role=status]');
  const submit = query('[type=submit]'); submit.textContent = saveLabel;
  let draft, preview = null, busy = false, disposed = false, openGeneration = 0;
  const closeReasons = [];
  const controls = {}, rows = new Map(), placement = {};

  function field(parent, label, input) {
    const row = doc.createElement('label'); row.className = input.type === 'checkbox' ? 'holiday-check' : 'holiday-field';
    if (input.type === 'checkbox') row.append(input, label); else row.append(label, input);
    parent.append(row); return input;
  }
  for (const [key, label] of [['enabled', 'Celebrations enabled'], ['events', 'Animated events'], ['lighting', 'Festive glow']]) {
    const input = doc.createElement('input'); input.type = 'checkbox'; input.dataset.holidaySetting = key;
    controls[key] = field(general, label, input);
    input.addEventListener('change', () => { draft[key] = input.checked; paintSchedule(); });
  }
  for (const [key, label, min, max, step] of [['windowDays', 'Automatic window (days)', 1, 31, 1], ['intensity', 'Decoration intensity', 0, 1, 'any']]) {
    const input = doc.createElement('input'); Object.assign(input, {type: 'number', min, max, step});
    input.dataset.holidaySetting = key; controls[key] = field(general, label, input);
    input.addEventListener('input', () => { draft[key] = input.valueAsNumber; paintSchedule(); });
  }
  for (const holiday of catalog ?? []) {
    const row = doc.createElement('article'); row.className = 'holiday-card'; row.dataset.holidayId = holiday.id;
    const heading = doc.createElement('h3'); heading.textContent = holiday.name;
    const description = doc.createElement('p'); description.textContent = holiday.regionNote || holiday.group || 'Seasonal celebration';
    const schedule = doc.createElement('p'); schedule.className = 'holiday-schedule'; schedule.setAttribute('aria-live', 'polite');
    const coverage = doc.createElement('p'); coverage.textContent = holiday.coverage?.label ?? '';
    const swatches = doc.createElement('div'); swatches.className = 'holiday-swatches'; swatches.setAttribute('aria-hidden', 'true');
    for (const color of holiday.colors ?? []) { const swatch = doc.createElement('i'); if (/^#[a-f0-9]{6}$/i.test(color)) swatch.style.backgroundColor = color; swatches.append(swatch); }
    const actions = doc.createElement('div'); actions.className = 'holiday-row';
    const select = doc.createElement('select'); select.setAttribute('aria-label', `${holiday.name} schedule`);
    for (const [value, label] of [['auto', 'Auto'], ['on', 'Keep on'], ['off', 'Off']]) {
      const option = doc.createElement('option'); option.value = value; option.textContent = label; select.append(option);
    }
    select.addEventListener('change', () => { draft.modes[holiday.id] = select.value; paintSchedule(); });
    const button = doc.createElement('button'); button.type = 'button'; button.textContent = 'Preview'; button.dataset.holidayPreview = holiday.id;
    button.setAttribute('aria-label', `Preview ${holiday.name}`);
    button.addEventListener('click', () => {
      if (!validHolidaySettings(draft)) { status.textContent = 'Check the settings and dates before previewing.'; return; }
      preview = holiday.id;
      strip.querySelector('span').textContent = `${holiday.name} · preview`;
      strip.hidden = false; closeDialog('preview');
      // Live pauses its renderer while this modal is open. Schedule the preview
      // only after close() has synchronously released that rendering pause.
      onPreview?.({id: preview, settings: normalizeHolidaySettings(draft)});
    });
    actions.append(select, button);
    const details = doc.createElement('details'), summary = doc.createElement('summary'); summary.textContent = 'Custom date';
    const date = doc.createElement('input'); date.type = 'text'; date.placeholder = 'MM-DD or YYYY-MM-DD'; date.maxLength = 10;
    date.setAttribute('aria-label', `${holiday.name} custom date`);
    const help = doc.createElement('p'); help.textContent = 'Optional. Use a local date for your tradition; leave blank for the calendar date.';
    date.addEventListener('input', () => { if (date.value.trim()) draft.dateOverrides[holiday.id] = date.value.trim(); else delete draft.dateOverrides[holiday.id]; paintSchedule(); });
    details.append(summary, help, date); row.append(swatches, heading, description, actions, schedule, coverage, details); list.append(row);
    rows.set(holiday.id, {row, select, date, schedule, search: `${holiday.name} ${holiday.group ?? ''} ${holiday.regionNote ?? ''}`.toLowerCase()});
  }
  const placeFields = query('.holiday-placement-grid');
  // Placement is measured by the scene and may be fractional. Native form
  // validation must accept every finite value allowed by the shared contract.
  for (const [key, label, min, max] of [['x', 'Center X', -4000, 5000], ['y', 'Center Y', -4000, 5000],
    ['scale', 'Scale', .4, 2], ['rotation', 'Rotation (°)', 0, 359]]) {
    const input = doc.createElement('input'); Object.assign(input, {type: 'number', min, max, step: 'any'}); input.dataset.holidayPlacement = key;
    placement[key] = field(placeFields, label, input);
    input.addEventListener('input', () => {
      draft.placement = Object.fromEntries(Object.entries(placement).map(([name, control]) => [name, control.valueAsNumber]));
    });
  }
  function paintPlacement() {
    const value = draft.placement ?? getAutoPlacement?.() ?? {scale: 1, rotation: 0};
    for (const [key, control] of Object.entries(placement)) control.value = Number.isFinite(value[key]) ? value[key] : '';
  }
  function paintSchedule() {
    const resolved = resolveHolidays(getDate?.(), draft);
    const entries = new Map(resolved.entries.map(entry => [entry.id, entry]));
    for (const [id, row] of rows) {
      const entry = entries.get(id), mode = draft.modes[id], next = resolved.upcoming.find(value => value.id === id);
      let text = !draft.enabled ? 'Celebrations paused.' : mode === 'off' ? 'Off.' : mode === 'on' ? 'Kept on until you change it.'
        : !resolved.validDate ? 'Local calendar date is unavailable.'
        : entry?.status === 'unavailable' ? 'Automatic date unavailable. Add a custom date or choose Keep on.'
        : entry?.status === 'active' ? 'Active now.' : 'Waiting for its automatic window.';
      if (entry?.date) text += ` Holiday: ${entry.date}.`;
      if (mode === 'auto' && entry?.windowStart) text += ` Window: ${entry.windowStart} to ${entry.windowEnd}.`;
      if (mode === 'auto' && next && next.date !== entry?.date) text += ` Next: ${next.date}.`;
      row.schedule.textContent = text;
    }
  }
  query('[data-holiday-auto]').addEventListener('click', () => { delete draft.placement; paintPlacement(); status.textContent = 'Automatic placement selected.'; });
  query('.holiday-search').addEventListener('input', event => {
    const term = event.target.value.trim().toLowerCase(); for (const {row, search} of rows.values()) row.hidden = !search.includes(term);
  });
  function endPreview() { if (preview !== null) onPreview?.(null); preview = null; strip.hidden = true; }
  function closeDialog(reason) {
    if (!dialog.open) return;
    closeReasons.push({reason, generation: openGeneration});
    dialog.close();
  }
  function close() { endPreview(); closeDialog('dismiss'); }
  for (const selector of ['[data-holiday-close]', '[data-holiday-cancel]']) query(selector).addEventListener('click', close);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('close', () => {
    // Native close events are queued. A previous dialog session must never
    // dismiss a later preview after rapid Preview / End preview / Settings.
    const closed = closeReasons.shift();
    if (closed?.generation !== openGeneration || closed?.reason === 'preview' || dialog.open) return;
    endPreview(); onClose?.();
  });
  strip.querySelector('[data-holiday-preview-stop]').addEventListener('click', endPreview);
  strip.querySelector('[data-holiday-preview-settings]').addEventListener('click', () => open(true));
  query('form').addEventListener('submit', async event => {
    event.preventDefault(); if (busy) return;
    if (!validHolidaySettings(draft)) { status.textContent = 'Check the dates and number limits. Dates use MM-DD or YYYY-MM-DD.'; return; }
    busy = true; submit.disabled = true; status.textContent = 'Saving…';
    try {
      const result = await onSave?.(normalizeHolidaySettings(draft));
      if (disposed) return;
      if (result?.status && result.status !== 'saved') {
        status.textContent = result.status === 'changed' ? 'Holiday settings changed elsewhere. Close and reopen to load the latest settings.'
          : result.status === 'closed' ? 'Saving is unavailable. Reopen this menu with administrator access.'
          : 'The save could not be verified. Reopen the settings before trying again.';
      } else { endPreview(); status.textContent = result?.notice ?? saveNotice; }
    } catch { if (!disposed) status.textContent = 'Unable to save. Your draft is still here; check the connection and try again.'; }
    finally { busy = false; submit.disabled = false; }
  });
  function open(preserveDraft = false) {
    if (disposed || dialog.open) return;
    openGeneration++;
    if (!preserveDraft || !draft) draft = normalizeHolidaySettings(getSettings?.());
    for (const [key, input] of Object.entries(controls)) {
      if (input.type === 'checkbox') input.checked = draft[key]; else input.value = draft[key];
    }
    for (const [id, row] of rows) { row.select.value = draft.modes[id]; row.date.value = draft.dateOverrides[id] ?? ''; }
    paintPlacement(); paintSchedule(); status.textContent = 'Changes apply when you save. Preview stays in this tab.';
    dialog.showModal();
  }
  return {open, close, dialog, get isOpen() { return dialog.open; },
    destroy() { disposed = true; close(); dialog.remove(); strip.remove(); style.remove(); }};
}
