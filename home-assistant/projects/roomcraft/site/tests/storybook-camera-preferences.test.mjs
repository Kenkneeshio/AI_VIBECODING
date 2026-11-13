import test from 'node:test';
import assert from 'node:assert/strict';
import {createCameraPreferences, cameraPreferencesKey, legacyCameraPreferencesKey, CAMERA_PREFERENCE_EVENT} from '../ha-local/storybook-camera-preferences.mjs';

function frontend() {
  const values = new Map();
  return {values,localStorage:{getItem:key => values.get(key) ?? null,
    setItem:(key,value) => values.set(key,value),removeItem:key => values.delete(key)}};
}
const saved = {preset:'free',azimuth:143.125,tilt:52,zoom:1.37};
const other = {preset:'free',azimuth:202,tilt:0,zoom:.8};

test('two frontend profiles and dashboards remain independent after the same legacy user migration', async () => {
  const a = frontend(), b = frontend();
  let shared = saved, readsA = 0, readsB = 0;
  const storeA = createCameraPreferences({host:a,dashboard:'roomcraft-home',readLegacy:async () => {readsA++;return shared;}});
  const storeB = createCameraPreferences({host:b,dashboard:'roomcraft-home',readLegacy:async () => {readsB++;return shared;}});
  assert.deepEqual(await storeA.read(),saved);
  assert.deepEqual(await storeB.read(),saved);
  await storeA.write(other);
  shared = {...saved,zoom:2};
  assert.deepEqual(await storeA.read(),other);
  assert.deepEqual(await storeB.read(),saved,'another frontend stops following the shared legacy value');
  assert.equal(readsA,1);assert.equal(readsB,1);
  const separate = createCameraPreferences({host:a,dashboard:'other-dashboard',readLegacy:async () => saved});
  assert.deepEqual(await separate.read(),saved);
  await separate.write({...saved,zoom:1.5});
  assert.deepEqual(await storeA.read(),other);
  assert.notEqual(cameraPreferencesKey('roomcraft-home'),cameraPreferencesKey('second-floor'),
    'local dashboards are independent even though the historical HA key was aliased');
  assert.equal(legacyCameraPreferencesKey('roomcraft-home'),'roomcraft_default_camera_v1:second-floor');
});

test('local null is a persistent reset tombstone and prevents migration across reloads', async () => {
  const host = frontend();
  let legacyReads = 0;
  const options = {host,readLegacy:async () => {legacyReads++;return saved;}};
  const initial = createCameraPreferences(options);
  assert.deepEqual(await initial.read(),saved);
  await initial.write(null);
  assert.equal(host.values.get(cameraPreferencesKey()),'null');
  assert.equal(await createCameraPreferences(options).read(),null);
  assert.equal(legacyReads,1);
  const resetBeforeRead = frontend();
  await createCameraPreferences({host:resetBeforeRead}).write(null);
  assert.equal(await createCameraPreferences({host:resetBeforeRead,readLegacy:() => assert.fail('reset must prevent migration')}).read(),null);
});

test('save or reset during an asynchronous migration wins over the older HA result', async () => {
  for (const desired of [other,null]) {
    const host = frontend();let resolve;
    const store = createCameraPreferences({host,readLegacy:() => new Promise(done => {resolve=done;})});
    const reading = store.read();
    await createCameraPreferences({host}).write(desired);
    resolve(saved);
    assert.deepEqual(await reading,desired);
    assert.deepEqual(await createCameraPreferences({host}).read(),desired);
  }
});

test('stored views are canonical copies and accept named target framing without private extra fields', async () => {
  const host = frontend(), store = createCameraPreferences({host});
  const value = {...saved,framePreset:'school',privateState:{secret:'not-saved'}};
  const expected = {...saved,framePreset:'school'};
  assert.deepEqual(await store.write(value),expected);
  value.azimuth = 1;
  assert.deepEqual(await store.read(),expected);
  const named = {preset:'waterfront',azimuth:206,tilt:50,zoom:1};
  assert.deepEqual(await store.write(named),named);
  assert.deepEqual(await createCameraPreferences({host}).read(),named);
  assert.equal([...host.values.values()].some(value => value.includes('not-saved')),false);
});

test('blocked, missing and silently discarded storage never report a successful save or reset', async () => {
  const hosts = [
    {},{get localStorage(){throw Error('blocked');}},
    {localStorage:{getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}}},
    {localStorage:{getItem(){return null;},setItem(){throw Error('quota');}}},
    {localStorage:{getItem(){return null;},setItem(){}}},
  ];
  for (const host of hosts) {
    const store = createCameraPreferences({host,readLegacy:async () => saved});
    await assert.rejects(store.read(),/could not be stored in this browser/);
    await assert.rejects(store.write(saved),/could not be stored in this browser/);
    await assert.rejects(store.write(null),/could not be stored in this browser/);
  }
});

test('corrupt local records fail clearly and can be explicitly reset without remigrating', async () => {
  for (const raw of ['{broken',JSON.stringify({preset:'free',azimuth:0,tilt:0,zoom:999})]) {
    const host=frontend();host.values.set(cameraPreferencesKey(),raw);
    const store=createCameraPreferences({host,readLegacy:() => assert.fail('existing corrupt local record must not remigrate')});
    await assert.rejects(store.read(),/saved camera preference is invalid/);
    await store.write(null);
    assert.equal(await store.read(),null);
  }
});

test('invalid saves are rejected before storage; missing legacy creates a stable local fallback', async () => {
  const host=frontend(),store=createCameraPreferences({host});
  for (const value of [undefined,{},'free',{...saved,zoom:999},{...saved,tilt:89},
    {...saved,azimuth:NaN},{...saved,framePreset:'invented'}]) {
    await assert.rejects(store.write(value),/Invalid camera view/);
  }
  assert.equal(host.values.size,0);
  assert.equal(await store.read(),null);
  assert.equal(host.values.get(cameraPreferencesKey()),'null');
  assert.equal(await createCameraPreferences({host,readLegacy:() => assert.fail('fallback already recorded')}).read(),null);
});

test('failed legacy read can be retried without recording an incomplete migration', async () => {
  const host=frontend();let failed=true;
  const store=createCameraPreferences({host,readLegacy:async () => {if(failed)throw Error('HA unavailable');return saved;}});
  await assert.rejects(store.read(),/HA unavailable/);
  assert.equal(host.values.size,0);
  failed=false;
  assert.deepEqual(await store.read(),saved);
});

test('only successful explicit saves and resets notify the same frontend, with no camera or HA payload', async () => {
  const host=frontend(),events=[];
  host.CustomEvent=class {constructor(type,options){this.type=type;this.detail=options.detail;}};
  host.dispatchEvent=event => {events.push(event);return true;};
  const store=createCameraPreferences({host,dashboard:' roomcraft-home ',readLegacy:async () => saved});
  await store.read();
  assert.equal(events.length,0,'one-time migration does not emit and trigger another read');
  await store.write(other);
  assert.equal(events[0].type,CAMERA_PREFERENCE_EVENT);
  assert.deepEqual(events[0].detail,{dashboard:'roomcraft-home'});
  await store.read();
  assert.equal(events.length,1,'normal reads do not emit');
  await store.write(null);
  assert.equal(events.length,2);
  assert.deepEqual(events[1].detail,{dashboard:'roomcraft-home'});
  await assert.rejects(store.write({}),/Invalid camera view/);
  host.localStorage.setItem=() => {throw Error('blocked');};
  await assert.rejects(store.write(other),/could not be stored/);
  assert.equal(events.length,2,'failed saves cannot cause a misleading reload notification');
});

test('an unavailable event listener does not turn a confirmed local save into a reported failure', async () => {
  const host=frontend();
  host.CustomEvent=class {};
  host.dispatchEvent=() => {throw Error('optional notification unavailable');};
  assert.deepEqual(await createCameraPreferences({host}).write(saved),saved);
  assert.deepEqual(await createCameraPreferences({host}).read(),saved);
});
