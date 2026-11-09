import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const engineFiles = [
  'deterministic-core.js',
  'project-runtime.js',
  'render-contract.js',
  'verification-harness.js'
];

function bootEngine() {
  const context = { console };
  context.window = context;
  context.globalThis = context;
  engineFiles.forEach(file => {
    const source = readFileSync(new URL(`../public/engine/${file}`, import.meta.url), 'utf8');
    runInNewContext(source, context, { filename: file });
  });
  return context.RoomcraftEngine;
}

const engine = bootEngine();

function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

test('canonical serialization and SHA-256 are stable and strict', () => {
  const left = { z: [3, { y: true, x: 'lamp' }], a: -0 };
  const right = { a: 0, z: [3, { x: 'lamp', y: true }] };
  assert.equal(engine.canonicalStringify(left), engine.canonicalStringify(right));
  assert.equal(engine.fingerprint(left), engine.fingerprint(right));
  assert.equal(engine.core.sha256String('abc'),
    'sha256:ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.throws(() => engine.canonicalStringify({ bad: Number.NaN }), /Non-finite number/);
  assert.throws(() => engine.canonicalStringify([, 1]), /Sparse array slot/);
  const accessor = {};
  Object.defineProperty(accessor, 'now', { enumerable: true, get: () => Date.now() });
  assert.throws(() => engine.canonicalStringify(accessor), /Accessor values/);
  const cycle = {};
  cycle.self = cycle;
  assert.throws(() => engine.canonicalStringify(cycle), /Cyclic value/);
});

test('seeded IDs reproduce exactly and can resume from a checked snapshot', () => {
  const first = engine.createIdAllocator({ seed: { house: 'second-floor', revision: 4 }, namespace: 'item' });
  const second = engine.createIdAllocator({ seed: { revision: 4, house: 'second-floor' }, namespace: 'item' });
  assert.equal(first.next('lamp'), second.next('lamp'));
  assert.equal(first.next('fan'), second.next('fan'));
  const snapshot = first.snapshot();
  const resumed = engine.createIdAllocator({ seed: { house: 'second-floor', revision: 4 }, namespace: 'item' });
  resumed.restore(snapshot);
  assert.equal(first.next('camera'), resumed.next('camera'));
  const otherSeed = engine.createIdAllocator({ seed: 'another-house', namespace: 'item' });
  assert.notEqual(first.next('lamp'), otherSeed.next('lamp'));
});

test('scene normalization adds required collections without changing ordering or coordinates', () => {
  const scene = engine.normalizeScene({
    version: 2,
    items: [
      { id: 'desk', x: 930, y: 312, rotation: -0 },
      { id: 'lamp', x: 980, y: 320, rotation: 15 }
    ]
  });
  assert.deepEqual(plain(scene), {
    hotspots: [],
    items: [
      { id: 'desk', rotation: 0, x: 930, y: 312 },
      { id: 'lamp', rotation: 15, x: 980, y: 320 }
    ],
    rooms: [],
    version: 2,
    walls: []
  });
  assert.throws(() => engine.normalizeScene({ items: [{ id: 'same' }, { id: 'same' }] }), /Duplicate items ID/);
});

test('command journals are reproducible, replayable, and tamper evident', () => {
  const initialState = { items: [{ id: 'lamp', x: 10, y: 20 }], selected: null };
  const reducer = (state, command) => {
    if (command.type === 'move') {
      const item = state.items.find(candidate => candidate.id === command.payload.id);
      item.x = command.payload.x;
      item.y = command.payload.y;
    }
    if (command.type === 'select') state.selected = command.payload.id;
    return state;
  };
  const makeLog = () => {
    const journal = engine.commands.createLog({ initialState, reducer, seed: 'layout-42' });
    journal.dispatch('move', { id: 'lamp', x: 33, y: 44 });
    journal.dispatch('select', { id: 'lamp' });
    return journal.exportLog();
  };
  const first = makeLog();
  const second = makeLog();
  assert.equal(engine.canonicalStringify(first), engine.canonicalStringify(second));
  const replay = engine.commands.replay({ initialState, reducer, log: first });
  assert.deepEqual(plain(replay.state), { items: [{ id: 'lamp', x: 33, y: 44 }], selected: 'lamp' });
  assert.equal(replay.finalHash, first.finalHash);

  const tampered = plain(first);
  tampered.commands[0].payload.x = 999;
  assert.throws(() => engine.commands.replay({ initialState, reducer, log: tampered }), /envelope hash does not match/);

  let hiddenCounter = 0;
  const nonDeterministic = engine.commands.createLog({
    initialState: { value: 0 },
    seed: 'bad-reducer',
    reducer: state => ({ ...state, value: ++hiddenCounter })
  });
  assert.throws(() => nonDeterministic.dispatch('increment'), /Reducer produced different states/);
});

test('migrations are deterministic, version gated, and idempotent as a pipeline', () => {
  const migrations = [
    {
      id: 'add-room-collections', from: 0, to: 1,
      apply(project) {
        project.rooms = project.rooms || [];
        project.items = project.items || [];
      }
    },
    {
      id: 'add-layout-metadata', from: 1, to: 2,
      apply(project) {
        return { ...project, metadata: { perspective: 'top-down-3d' } };
      }
    }
  ];
  const verified = engine.migrations.verifyIdempotency({ name: 'Second Floor' }, migrations, 2);
  assert.equal(verified.idempotent, true);
  assert.equal(verified.firstRun.steps.length, 2);
  assert.equal(verified.secondRun.steps.length, 0);
  assert.deepEqual(plain(verified.project), {
    items: [], metadata: { perspective: 'top-down-3d' }, name: 'Second Floor', rooms: [], schemaVersion: 2
  });

  let hiddenCounter = 0;
  const unstable = [{ id: 'unstable', from: 0, to: 1, apply: project => ({ ...project, hiddenCounter: ++hiddenCounter }) }];
  assert.throws(() => engine.migrations.run({}, unstable, 1), /Migration unstable produced different outputs/);
});

test('canonical export/import round trips byte-for-byte and detects lossy codecs', () => {
  const project = { items: [{ y: 2, x: 1, id: 'chair' }], rooms: [], walls: [], hotspots: [], version: 2 };
  const evidence = engine.io.verifyRoundTrip(project);
  assert.equal(evidence.stable, true);
  const exported = engine.io.exportProject(project);
  assert.equal(exported, engine.io.exportProject(engine.io.importProject(exported)));
  assert.throws(() => engine.io.verifyRoundTrip(project, {
    encode: value => JSON.stringify(value),
    decode: text => {
      const decoded = JSON.parse(text);
      delete decoded.version;
      return decoded;
    }
  }), /Export\/import changed the project/);
});

test('layer manifests and render plans reject ambiguity and ignore input order', () => {
  const manifest = engine.render.layerManifest;
  const operations = [
    { id: 'wall-a', layer: 'walls', z: 0, kind: 'wall', payload: { id: 'wall-a' } },
    { id: 'chair-b', layer: 'furniture', z: 5, kind: 'chair', payload: { id: 'chair-b' } },
    { id: 'chair-a', layer: 'furniture', z: 5, kind: 'chair', payload: { id: 'chair-a' } },
    { id: 'rug', layer: 'rugs', z: 0, kind: 'rug', payload: { id: 'rug' } }
  ];
  const first = engine.render.createPlan(operations, manifest);
  const second = engine.render.createPlan([...operations].reverse(), manifest);
  assert.equal(first.hash, second.hash);
  assert.deepEqual(plain(first.operations.map(operation => operation.id)), ['rug', 'chair-a', 'chair-b', 'wall-a']);
  assert.equal(engine.render.validatePlan(first, manifest).hash, first.hash);

  const invalid = plain(manifest);
  delete invalid.hash;
  invalid.layers[1].order = invalid.layers[0].order;
  assert.throws(() => engine.render.validateLayerManifest(invalid), /Duplicate layer order/);
  const tampered = plain(first);
  tampered.operations[0].payload.id = 'changed';
  assert.throws(() => engine.render.validatePlan(tampered, manifest), /Render plan order, operation hashes/);
});

test('item partitioning produces stable layer buckets independent of input order', () => {
  const items = [
    { id: 'lamp', type: 'lamp', zIndex: 2 },
    { id: 'desk', type: 'desk', zIndex: 1 },
    { id: 'mat', type: 'playMat', zIndex: 0 }
  ];
  const options = { layerByType: { lamp: 'floor-devices', desk: 'furniture', playMat: 'rugs' } };
  const first = engine.render.partitionItems(items, options);
  const second = engine.render.partitionItems([...items].reverse(), options);
  assert.equal(first.hash, second.hash);
  assert.equal(first.partitions.find(partition => partition.layer === 'rugs').items[0].id, 'mat');
  assert.equal(first.partitions.find(partition => partition.layer === 'furniture').items[0].id, 'desk');
});

test('shared scene partitioning preserves legacy order while using one layer policy', () => {
  const catalog = {
    'foam-mat': { type: 'foam-mat', artFamily: 'playMat' },
    'fan-oak': { type: 'fan-oak', artFamily: 'ceilingFan' }
  };
  assert.equal(engine.render.layerForItem({ type: 'rug' }, catalog), 'rugs');
  assert.equal(engine.render.layerForItem({ type: 'foam-mat' }, catalog), 'rugs');
  assert.equal(engine.render.layerForItem({ type: 'fan-oak' }, catalog), 'ceiling-devices');
  assert.equal(engine.render.layerForItem({ type: 'ceilingLight' }, catalog), 'ceiling-devices');
  assert.equal(engine.render.layerForItem({ type: 'window' }, catalog), 'openings');
  assert.equal(engine.render.layerForItem({ type: 'desk' }, catalog), 'furniture');

  const partitioned = engine.render.partitionSceneItems([
    { id: 'z-chair', type: 'chair' },
    { id: 'a-desk', type: 'desk' },
    { id: 'mat', type: 'foam-mat' },
    { id: 'fan', type: 'fan-oak' },
    { id: 'window', type: 'window' },
    { id: 'late', type: 'chair', zIndex: 20 },
    { id: 'early', type: 'chair', zIndex: 10 },
    { id: 'z-tie-first', type: 'chair', zIndex: 15 },
    { id: 'a-tie-second', type: 'chair', zIndex: 15 }
  ], catalog);
  assert.deepEqual(plain(partitioned.furniture.map(item => item.id)),
    ['z-chair', 'a-desk', 'early', 'z-tie-first', 'a-tie-second', 'late']);
  assert.deepEqual(plain(partitioned.rugs.map(item => item.id)), ['mat']);
  assert.deepEqual(plain(partitioned.ceilingDevices.map(item => item.id)), ['fan']);
  assert.deepEqual(plain(partitioned.openings.map(item => item.id)), ['window']);
  assert.equal(partitioned.floorItems, partitioned.rugs);
  assert.equal(partitioned.ceilingItems, partitioned.ceilingDevices);
  const hotPathItems=[{id:'chair',type:'chair'},{id:'mat-fast',type:'foam-mat'}];
  const ordered=engine.render.orderSceneItems(hotPathItems,catalog);
  assert.equal(ordered.furniture[0],hotPathItems[0]);
  assert.equal(ordered.rugs[0],hotPathItems[1]);
});

test('asset manifests are content addressed, sorted, and validate supplied hashes', () => {
  const assets = [
    { id: 'renderer', path: '/engine/renderer.js', content: 'draw();', mediaType: 'text/javascript' },
    { id: 'lamp-art', path: 'assets/lamp.svg', content: '<svg/>', mediaType: 'image/svg+xml' }
  ];
  const first = engine.assets.createManifest(assets);
  const second = engine.assets.createManifest([...assets].reverse());
  assert.equal(first.hash, second.hash);
  assert.equal(engine.assets.validateManifest(first).hash, first.hash);
  assert.deepEqual(plain(first.entries.map(entry => entry.path)), ['assets/lamp.svg', 'engine/renderer.js']);
  const changed = engine.assets.createManifest([
    assets[0], { ...assets[1], content: '<svg><path/></svg>' }
  ]);
  assert.notEqual(first.hash, changed.hash);
  assert.throws(() => engine.assets.createManifest([
    { id: 'escape', path: '../secret', content: 'no' }
  ]), /escapes the asset root/);
});

test('environment fingerprints include only explicit render inputs', () => {
  const assetManifest = engine.assets.createManifest([]);
  const input = {
    schemaVersion: 4,
    rendererVersion: 'raster-v5',
    assetManifestHash: assetManifest.hash,
    layerManifestHash: engine.render.layerManifest.hash,
    viewport: { width: 1536, height: 864, pixelRatio: 1 },
    runtime: { name: 'android-webview', version: '142', platform: 'android', architecture: 'arm64' },
    features: ['weather', 'live-controls', 'weather'],
    colorSpace: 'srgb'
  };
  const first = engine.environment.fingerprint(input);
  const second = engine.environment.fingerprint({ ...input, features: ['live-controls', 'weather'] });
  assert.equal(first.hash, second.hash);
  assert.equal(engine.environment.validate(first).hash, first.hash);
  assert.throws(() => engine.environment.fingerprint({ ...input, capturedAt: Date.now() }),
    /Unknown environment fingerprint field/);
});

test('a verification record links project, assets, layers, operations, and environment', () => {
  const project = { schemaVersion: 4, rooms: [], walls: [], items: [{ id: 'desk' }], hotspots: [] };
  const assets = [{ id: 'object-art', path: 'object-art.js', content: 'art-v1' }];
  const renderOperations = [
    { id: 'desk', layer: 'furniture', kind: 'desk', payload: { id: 'desk' } },
    { id: 'floor', layer: 'floor', kind: 'floor', payload: { room: 'office' } }
  ];
  const environment = {
    schemaVersion: 4,
    rendererVersion: 'raster-v5',
    viewport: { width: 1536, height: 864, pixelRatio: 1 },
    runtime: { name: 'test', version: '1', platform: 'ci', architecture: 'x64' },
    features: ['deterministic-render']
  };
  const first = engine.createVerificationRecord({ project, assets, renderOperations, environment });
  const second = engine.createVerificationRecord({
    project: { hotspots: [], items: [{ id: 'desk' }], walls: [], rooms: [], schemaVersion: 4 },
    assets: [...assets].reverse(),
    renderOperations: [...renderOperations].reverse(),
    environment
  });
  assert.equal(first.hash, second.hash);
  assert.match(first.projectHash, /^sha256:[0-9a-f]{64}$/);
  assert.equal(first.environmentFingerprint.assetManifestHash, first.assetManifest.hash);
  assert.equal(first.environmentFingerprint.layerManifestHash, first.layerManifest.hash);
});
