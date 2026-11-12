const DOMAIN = 'google_maps';
const FLOW_PATH = 'config/config_entries/flow';
const FILE_PATH = 'file_upload';
const HA_ID = /^[a-z\d_-]{1,128}$/i;
const FLOW_CHANGED = 'Google Maps setup has changed. Continue in Home Assistant setup.';
const ALREADY_CONNECTED = 'This Google account is already connected. Manage it in Home Assistant setup.';
const INVALID_FILE = 'Google Maps could not validate the session file. Export a fresh file from the same account and try again.';
export const GOOGLE_SESSION_MAX_BYTES = 100 * 1024 * 1024;

class GoogleSetupError extends Error {}

function requireStep(result, type, step, option) {
  if (result.type !== type || result.step_id !== step || Object.keys(result.errors ?? {}).length ||
      (option && (!Array.isArray(result.menu_options) || !result.menu_options.includes(option)))) {
    throw new GoogleSetupError(FLOW_CHANGED);
  }
}

function suggestedValue(result, name) {
  const field = Array.isArray(result.data_schema) && result.data_schema.find(item => item?.name === name);
  return field?.description?.suggested_value ?? field?.default;
}

function updateInterval(result) {
  const {hours, minutes, seconds} = suggestedValue(result, 'scan_interval') ?? {};
  if ([hours, minutes, seconds].every(value => Number.isSafeInteger(value) && value >= 0) &&
      (hours > 0 || minutes > 0 || seconds > 0)) {
    return {hours, minutes, seconds};
  }
  return {hours: 0, minutes: 1, seconds: 0};
}

export async function connectGoogleMaps(hass, {username, file, includeAccount = false} = {}) {
  if (!hass?.user?.is_admin) throw new GoogleSetupError('Home Assistant administrator access is required.');
  if (hass.connected === false || typeof hass.callApi !== 'function' || typeof hass.fetchWithAuth !== 'function') {
    throw new GoogleSetupError('Home Assistant is unavailable. Reconnect and try again.');
  }
  const email = typeof username === 'string' ? username.trim() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new GoogleSetupError('Enter the Google account email address.');
  }
  if (!(file instanceof Blob) || !/\.txt$/i.test(file.name ?? '') || !file.size || file.size > GOOGLE_SESSION_MAX_BYTES) {
    throw new GoogleSetupError('Choose a nonempty Google Maps session file in .txt format, up to 100 MB.');
  }

  let flowId;
  let fileId;
  let finished = false;

  function checkIdentity(result) {
    if (result?.handler !== DOMAIN || result.flow_id !== flowId) throw new GoogleSetupError(FLOW_CHANGED);
    if (result.type === 'abort') {
      finished = true;
      throw new GoogleSetupError(result.reason === 'already_configured' ? ALREADY_CONNECTED : FLOW_CHANGED);
    }
  }

  async function advance(data) {
    const result = await hass.callApi('POST', `${FLOW_PATH}/${flowId}`, data);
    checkIdentity(result);
    return result;
  }

  try {
    // Pinned ha-google-maps 2.1.0. Each transition is validated before sending more data.
    const start = await hass.callApi('POST', FLOW_PATH, {handler: DOMAIN});
    if (start?.handler === DOMAIN && typeof start.flow_id === 'string' && HA_ID.test(start.flow_id)) flowId = start.flow_id;
    if (!flowId) throw new GoogleSetupError(FLOW_CHANGED);
    checkIdentity(start);
    requireStep(start, 'form', 'username');

    let result = await advance({username: email});
    if (result.step_id === 'username' && result.errors?.username === 'already_configured') {
      throw new GoogleSetupError(ALREADY_CONNECTED);
    }
    if (result.step_id === 'get_cookies') {
      requireStep(result, 'form', 'get_cookies');
      result = await advance({use_existing_cookies: false});
    } else if (result.step_id === 'old_cookies_invalid') {
      requireStep(result, 'form', 'old_cookies_invalid');
      result = await advance({});
    }
    requireStep(result, 'menu', 'get_cookies_procedure_menu', 'cookies_upload');
    result = await advance({next_step_id: 'cookies_upload'});
    requireStep(result, 'form', 'cookies_upload');

    const body = new FormData();
    body.append('file', file, 'google-maps-session.txt');
    const response = await hass.fetchWithAuth(`/api/${FILE_PATH}`, {method: 'POST', body});
    if (!response.ok) throw new GoogleSetupError('Home Assistant could not upload the session file. Try again or open Home Assistant setup.');
    const uploaded = await response.json();
    if (typeof uploaded?.file_id !== 'string' || !HA_ID.test(uploaded.file_id)) throw new GoogleSetupError(FLOW_CHANGED);
    fileId = uploaded.file_id;

    result = await advance({cookies_file: fileId});
    if (result.step_id === 'cookies_upload' && result.errors?.cookies_file === 'invalid_cookies_file') {
      fileId = undefined; // Home Assistant consumed the temporary upload during validation.
      throw new GoogleSetupError(INVALID_FILE);
    }
    requireStep(result, 'menu', 'uploaded_cookie_menu', 'account_entity');
    fileId = undefined;

    result = await advance({next_step_id: 'account_entity'});
    requireStep(result, 'form', 'account_entity');
    result = await advance({create_acct_entity: includeAccount === true});
    requireStep(result, 'form', 'max_gps_accuracy');
    const accuracy = suggestedValue(result, 'max_gps_accuracy');
    result = await advance({max_gps_accuracy: Number.isFinite(accuracy) && accuracy >= 0 ? accuracy : 1000});
    requireStep(result, 'form', 'update_period');
    result = await advance({scan_interval: updateInterval(result)});
    if (result.type !== 'create_entry') throw new GoogleSetupError(FLOW_CHANGED);
    finished = true;
  } catch (error) {
    if (error instanceof GoogleSetupError) throw error;
    throw new GoogleSetupError('Home Assistant could not complete Google Maps setup. Try again or open Home Assistant setup.');
  } finally {
    // Either call can legitimately race Home Assistant's own cleanup.
    if (flowId && !finished) {
      try { await hass.callApi('DELETE', `${FLOW_PATH}/${flowId}`); } catch { /* Already closed or disconnected. */ }
    }
    if (fileId) {
      try { await hass.callApi('DELETE', FILE_PATH, {file_id: fileId}); } catch { /* Already consumed or disconnected. */ }
    }
  }
}
