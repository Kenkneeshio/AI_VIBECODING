import assert from 'node:assert/strict';
import test from 'node:test';
import {connectGoogleMaps} from '../ha-local/storybook-google-flow.mjs';

const root = 'config/config_entries/flow';
const flow = `${root}/example-flow`;
const identity = {handler: 'google_maps', flow_id: 'example-flow'};
const email = 'someone@example.test';
const file = new File(['example fixture'], 'google.com_cookies.txt');

const form = (step_id, fields = {}) => ({type: 'form', step_id, ...identity, ...fields});
const menu = (step_id, menu_options) => ({type: 'menu', step_id, menu_options, ...identity});
const selectFile = menu('get_cookies_procedure_menu', ['firefox', 'cookies_upload']);
const confirmFile = menu('uploaded_cookie_menu', ['account_entity', 'get_cookies_procedure_menu']);
const created = {type: 'create_entry', ...identity};

function fixture(responses, {uploadStatus = 200} = {}) {
  const calls = [];
  const hass = {
    user: {is_admin: true},
    async callApi(method, path, payload) {
      calls.push([method, path, payload]);
      if (method === 'DELETE') return;
      assert.ok(responses.length, 'unexpected extra native flow step');
      const next = responses.shift();
      if (next instanceof Error) throw next;
      return next;
    },
    async fetchWithAuth(path, options) {
      assert.ok(options.body instanceof FormData);
      const sent = options.body.get('file');
      assert.equal(sent.name, 'google-maps-session.txt');
      assert.equal(await sent.text(), 'example fixture');
      assert.deepEqual([...options.body.keys()], ['file']);
      calls.push([options.method, path]);
      return {ok: uploadStatus === 200, status: uploadStatus, json: async () => ({file_id: 'example-upload'})};
    },
  };
  return {hass, calls};
}

test('new Google Maps setup follows native menus and uses Home Assistant option suggestions', async () => {
  const accuracy = {name: 'max_gps_accuracy', description: {suggested_value: 125}};
  const interval = {name: 'scan_interval', description: {suggested_value: {hours: 0, minutes: 2, seconds: 15}}};
  const {hass, calls} = fixture([
    form('username'), selectFile, form('cookies_upload'), confirmFile,
    form('account_entity'), form('max_gps_accuracy', {data_schema: [accuracy]}),
    form('update_period', {data_schema: [interval]}), created,
  ]);

  assert.equal(await connectGoogleMaps(hass, {username: ` ${email} `, file}), undefined);
  assert.deepEqual(calls, [
    ['POST', root, {handler: 'google_maps'}], ['POST', flow, {username: email}],
    ['POST', flow, {next_step_id: 'cookies_upload'}], ['POST', '/api/file_upload'],
    ['POST', flow, {cookies_file: 'example-upload'}], ['POST', flow, {next_step_id: 'account_entity'}],
    ['POST', flow, {create_acct_entity: false}], ['POST', flow, {max_gps_accuracy: 125}],
    ['POST', flow, {scan_interval: {hours: 0, minutes: 2, seconds: 15}}],
  ]);
});

test('a legacy cookie prompt accepts a fresh export and invalid suggestions use pinned defaults', async () => {
  const {hass, calls} = fixture([
    form('username'), form('get_cookies'), selectFile, form('cookies_upload'), confirmFile,
    form('account_entity'), form('max_gps_accuracy'),
    form('update_period', {data_schema: [{name: 'scan_interval', default: {hours: 0, minutes: 0, seconds: 0}}]}), created,
  ]);

  await connectGoogleMaps(hass, {username: email, file, includeAccount: true});
  assert.deepEqual(calls[2], ['POST', flow, {use_existing_cookies: false}]);
  assert.deepEqual(calls.slice(-3), [
    ['POST', flow, {create_acct_entity: true}], ['POST', flow, {max_gps_accuracy: 1000}],
    ['POST', flow, {scan_interval: {hours: 0, minutes: 1, seconds: 0}}],
  ]);
});

test('a duplicate account or unexpected flow shape stops before the credential upload', async () => {
  const scenarios = [
    [form('username', {errors: {username: 'already_configured'}}), /already connected/],
    [menu('get_cookies_procedure_menu', ['unexpected']), /setup has changed/],
    [{...selectFile, flow_id: 'other-flow'}, /setup has changed/],
  ];

  for (const [response, error] of scenarios) {
    const {hass, calls} = fixture([form('username'), response]);
    await assert.rejects(connectGoogleMaps(hass, {username: email, file}), error);
    assert.deepEqual(calls, [
      ['POST', root, {handler: 'google_maps'}], ['POST', flow, {username: email}], ['DELETE', flow, undefined],
    ]);
  }
});

test('a rejected session file is reported without response details or redundant file removal', async () => {
  const {hass, calls} = fixture([
    form('username'), selectFile, form('cookies_upload'),
    form('cookies_upload', {errors: {cookies_file: 'invalid_cookies_file'}, description_placeholders: {username: email}}),
  ]);

  await assert.rejects(connectGoogleMaps(hass, {username: email, file}), error => {
    assert.match(error.message, /could not validate the session file/);
    assert.ok(!error.message.includes(email));
    return true;
  });
  assert.deepEqual(calls.slice(-2), [['POST', flow, {cookies_file: 'example-upload'}], ['DELETE', flow, undefined]]);
});

test('a transport failure keeps error details private and removes unfinished flow and temporary upload', async () => {
  const {hass, calls} = fixture([
    form('username'), selectFile, form('cookies_upload'), new Error('simulated sensitive response'),
  ]);

  await assert.rejects(connectGoogleMaps(hass, {username: email, file}), error => {
    assert.match(error.message, /could not complete Google Maps setup/);
    assert.ok(!error.message.includes('sensitive'));
    assert.equal(error.cause, undefined);
    return true;
  });
  assert.deepEqual(calls.slice(-2), [['DELETE', flow, undefined], ['DELETE', 'file_upload', {file_id: 'example-upload'}]]);
});

test('invalid local inputs and non-administrators never start a Home Assistant flow', async () => {
  const {hass, calls} = fixture([]);
  await assert.rejects(connectGoogleMaps({...hass, user: {is_admin: false}}, {username: email, file}), /administrator access/);
  await assert.rejects(connectGoogleMaps(hass, {username: 'not-an-email', file}), /email address/);
  await assert.rejects(connectGoogleMaps(hass, {username: email, file: new File([], 'empty.txt')}), /nonempty/);
  await assert.rejects(connectGoogleMaps(hass, {username: email, file: new File(['x'], 'other.json')}), /\.txt format/);
  assert.deepEqual(calls, []);
});
