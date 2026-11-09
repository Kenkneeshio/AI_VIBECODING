(function installRoomcraftRenderContract(root) {
  'use strict';

  const core = root.RoomcraftDeterminismCore;
  if (!core) throw new Error('RoomcraftDeterminismCore must load before render-contract.js');

  const {
    CORE_VERSION, FORMAT_VERSION, assert, compareCodeUnits, canonicalClone,
    canonicalHash, deepFreeze, utf8Bytes, sha256Bytes
  } = core;
  const LAYER_MANIFEST_VERSION = 1;
  const RENDER_PLAN_VERSION = 1;
  const ASSET_MANIFEST_VERSION = 1;
  const ENVIRONMENT_FINGERPRINT_VERSION = 1;

  const DEFAULT_LAYER_MANIFEST_SOURCE = {
    formatVersion: LAYER_MANIFEST_VERSION,
    id: 'roomcraft-house-v1',
    layers: [
      { id: 'environment', order: 0, role: 'weather and exterior', after: [] },
      { id: 'shell', order: 10, role: 'building shell and base', after: ['environment'] },
      { id: 'floor', order: 20, role: 'room floor surfaces', after: ['shell'] },
      { id: 'rugs', order: 30, role: 'rugs and floor mats', after: ['floor'] },
      { id: 'fixed-structure', order: 40, role: 'fireplaces and built-ins', after: ['rugs'] },
      { id: 'furniture', order: 50, role: 'movable furniture', after: ['fixed-structure'] },
      { id: 'floor-devices', order: 60, role: 'floor fixtures and live devices', after: ['furniture'] },
      { id: 'ceiling-devices', order: 70, role: 'fans and ceiling fixtures', after: ['floor-devices'] },
      { id: 'walls', order: 80, role: 'wall caps and room boundaries', after: ['ceiling-devices'] },
      { id: 'openings', order: 90, role: 'windows doors and garage openings', after: ['walls'] },
      { id: 'controls', order: 100, role: 'interactive object state', after: ['openings'] },
      { id: 'interface', order: 110, role: 'movable cameras weather and UI', after: ['controls'] }
    ]
  };

  function validIdentifier(value) {
    return typeof value === 'string' && /^[a-z][a-z0-9-]{0,79}$/.test(value);
  }

  function validateLayerManifest(value) {
    const manifest = canonicalClone(value);
    assert(manifest && !Array.isArray(manifest) && typeof manifest === 'object', 'INVALID_LAYER_MANIFEST',
      'Layer manifest must be a record');
    assert(manifest.formatVersion === LAYER_MANIFEST_VERSION, 'LAYER_MANIFEST_VERSION',
      `Unsupported layer manifest version: ${manifest.formatVersion}`);
    assert(validIdentifier(manifest.id), 'INVALID_LAYER_MANIFEST_ID',
      'Layer manifest ID must be a lowercase kebab-case identifier');
    assert(Array.isArray(manifest.layers) && manifest.layers.length > 0, 'EMPTY_LAYER_MANIFEST',
      'Layer manifest must contain at least one layer');
    const ids = new Set();
    const orders = new Set();
    const normalizedLayers = manifest.layers.map((layer, index) => {
      assert(layer && !Array.isArray(layer) && typeof layer === 'object', 'INVALID_LAYER',
        `Layer ${index} must be a record`);
      assert(validIdentifier(layer.id), 'INVALID_LAYER_ID', `Invalid layer ID at index ${index}`);
      assert(!ids.has(layer.id), 'DUPLICATE_LAYER_ID', `Duplicate layer ID: ${layer.id}`);
      assert(Number.isSafeInteger(layer.order) && layer.order >= 0, 'INVALID_LAYER_ORDER',
        `Layer ${layer.id} order must be a non-negative safe integer`);
      assert(!orders.has(layer.order), 'DUPLICATE_LAYER_ORDER', `Duplicate layer order: ${layer.order}`);
      const after = layer.after === undefined ? [] : layer.after;
      assert(Array.isArray(after) && after.every(validIdentifier), 'INVALID_LAYER_DEPENDENCY',
        `Layer ${layer.id} after must be an array of layer IDs`);
      assert(new Set(after).size === after.length, 'DUPLICATE_LAYER_DEPENDENCY',
        `Layer ${layer.id} repeats a dependency`);
      ids.add(layer.id);
      orders.add(layer.order);
      return {
        id: layer.id,
        order: layer.order,
        role: layer.role === undefined ? '' : String(layer.role),
        after: [...after].sort(compareCodeUnits)
      };
    }).sort((left, right) => left.order - right.order || compareCodeUnits(left.id, right.id));

    const byId = new Map(normalizedLayers.map(layer => [layer.id, layer]));
    normalizedLayers.forEach(layer => {
      layer.after.forEach(dependencyId => {
        const dependency = byId.get(dependencyId);
        assert(dependency, 'UNKNOWN_LAYER_DEPENDENCY',
          `Layer ${layer.id} depends on unknown layer ${dependencyId}`);
        assert(dependency.order < layer.order, 'INVALID_LAYER_DEPENDENCY_ORDER',
          `Layer ${layer.id} must render after ${dependencyId}`);
      });
    });

    const body = { formatVersion: LAYER_MANIFEST_VERSION, id: manifest.id, layers: normalizedLayers };
    const calculatedHash = canonicalHash(body);
    if (manifest.hash !== undefined) {
      assert(manifest.hash === calculatedHash, 'LAYER_MANIFEST_HASH_MISMATCH',
        'Layer manifest hash does not match its contents');
    }
    return deepFreeze({ ...body, hash: calculatedHash });
  }

  const DEFAULT_LAYER_MANIFEST = validateLayerManifest(DEFAULT_LAYER_MANIFEST_SOURCE);

  function createRenderPlan(operations, manifestValue) {
    assert(Array.isArray(operations), 'INVALID_RENDER_OPERATIONS', 'Render operations must be an array');
    const manifest = validateLayerManifest(manifestValue || DEFAULT_LAYER_MANIFEST);
    const layerOrder = new Map(manifest.layers.map(layer => [layer.id, layer.order]));
    const ids = new Set();
    const normalized = operations.map((operation, index) => {
      assert(operation && !Array.isArray(operation) && typeof operation === 'object', 'INVALID_RENDER_OPERATION',
        `Render operation ${index} must be a record`);
      assert(typeof operation.id === 'string' && operation.id.length > 0, 'INVALID_RENDER_OPERATION_ID',
        `Render operation ${index} requires a non-empty ID`);
      assert(!ids.has(operation.id), 'DUPLICATE_RENDER_OPERATION_ID',
        `Duplicate render operation ID: ${operation.id}`);
      assert(layerOrder.has(operation.layer), 'UNKNOWN_RENDER_LAYER',
        `Render operation ${operation.id} uses unknown layer ${operation.layer}`);
      const z = operation.z === undefined ? 0 : operation.z;
      assert(Number.isFinite(z), 'INVALID_RENDER_Z', `Render operation ${operation.id} has a non-finite z value`);
      const stableIndex = operation.stableIndex === undefined ? 0 : operation.stableIndex;
      assert(Number.isSafeInteger(stableIndex) && stableIndex >= 0, 'INVALID_RENDER_STABLE_INDEX',
        `Render operation ${operation.id} stableIndex must be a non-negative safe integer`);
      const kind = operation.kind === undefined ? 'draw' : operation.kind;
      assert(typeof kind === 'string' && kind.length > 0, 'INVALID_RENDER_KIND',
        `Render operation ${operation.id} requires a kind`);
      ids.add(operation.id);
      const body = {
        id: operation.id,
        layer: operation.layer,
        z: Object.is(z, -0) ? 0 : z,
        stableIndex,
        kind,
        payload: operation.payload === undefined ? null : canonicalClone(operation.payload)
      };
      return { ...body, operationHash: canonicalHash(body) };
    }).sort((left, right) => layerOrder.get(left.layer) - layerOrder.get(right.layer)
      || left.z - right.z || left.stableIndex - right.stableIndex || compareCodeUnits(left.id, right.id));

    const indexed = normalized.map((operation, index) => ({ ...operation, index }));
    const body = {
      formatVersion: RENDER_PLAN_VERSION,
      manifestId: manifest.id,
      manifestHash: manifest.hash,
      operations: indexed
    };
    return deepFreeze({ ...body, hash: canonicalHash(body) });
  }

  function validateRenderPlan(value, manifestValue) {
    const plan = canonicalClone(value);
    assert(plan.formatVersion === RENDER_PLAN_VERSION, 'RENDER_PLAN_VERSION',
      `Unsupported render plan version: ${plan.formatVersion}`);
    assert(Array.isArray(plan.operations), 'INVALID_RENDER_PLAN', 'Render plan operations must be an array');
    const operations = plan.operations.map(operation => ({
      id: operation.id,
      layer: operation.layer,
      z: operation.z,
      stableIndex: operation.stableIndex,
      kind: operation.kind,
      payload: operation.payload
    }));
    const rebuilt = createRenderPlan(operations, manifestValue);
    assert(canonicalHash(plan) === canonicalHash(rebuilt), 'RENDER_PLAN_MISMATCH',
      'Render plan order, operation hashes, or plan hash is invalid');
    return rebuilt;
  }

  function partitionItems(items, options) {
    assert(Array.isArray(items), 'INVALID_RENDER_ITEMS', 'Items to partition must be an array');
    const config = options || {};
    const manifest = validateLayerManifest(config.manifest || DEFAULT_LAYER_MANIFEST);
    const allowed = new Set(manifest.layers.map(layer => layer.id));
    const layerByType = config.layerByType || {};
    const defaultLayer = config.defaultLayer || 'furniture';
    const resolveLayer = typeof config.resolveLayer === 'function'
      ? config.resolveLayer
      : item => item.renderLayer || item.layer || layerByType[item.type] || defaultLayer;
    const resolveZ = typeof config.resolveZ === 'function'
      ? config.resolveZ
      : item => item.z === undefined ? (item.zIndex === undefined ? 0 : item.zIndex) : item.z;
    const operations = items.map((item, index) => {
      const cloned = canonicalClone(item);
      assert(typeof cloned.id === 'string' && cloned.id.length > 0, 'INVALID_RENDER_ITEM_ID',
        `Render item ${index} requires a non-empty ID`);
      const layerFirst = resolveLayer(canonicalClone(cloned));
      const layerSecond = resolveLayer(canonicalClone(cloned));
      assert(layerFirst === layerSecond, 'NON_DETERMINISTIC_LAYER_RESOLVER',
        `Layer resolver changed its answer for item ${cloned.id}`);
      assert(allowed.has(layerFirst), 'UNKNOWN_RENDER_LAYER',
        `Item ${cloned.id} resolved to unknown layer ${layerFirst}`);
      const zFirst = resolveZ(canonicalClone(cloned));
      const zSecond = resolveZ(canonicalClone(cloned));
      assert(Object.is(zFirst, zSecond), 'NON_DETERMINISTIC_Z_RESOLVER',
        `Z resolver changed its answer for item ${cloned.id}`);
      return { id: cloned.id, layer: layerFirst, z: zFirst, kind: cloned.type || 'item', payload: cloned };
    });
    const plan = createRenderPlan(operations, manifest);
    const partitions = manifest.layers.map(layer => ({
      layer: layer.id,
      items: plan.operations.filter(operation => operation.layer === layer.id)
        .map(operation => canonicalClone(operation.payload))
    }));
    const body = { manifestHash: manifest.hash, renderPlanHash: plan.hash, partitions };
    return deepFreeze({ ...body, hash: canonicalHash(body), plan });
  }

  function catalogEntry(catalogByType, type) {
    if (!catalogByType) return null;
    if (typeof catalogByType.get === 'function') return catalogByType.get(type) || null;
    if (Array.isArray(catalogByType)) return catalogByType.find(entry => entry && entry.type === type) || null;
    return catalogByType[type] || null;
  }

  function layerForItem(item, catalogByType) {
    assert(item && typeof item === 'object' && !Array.isArray(item), 'INVALID_RENDER_ITEM',
      'Item layer resolution requires an item record');
    const descriptor = catalogEntry(catalogByType, item.type);
    const artFamily = descriptor && descriptor.artFamily;
    if (descriptor && descriptor.renderLayer !== undefined) {
      const explicitLayers = new Set(['rugs', 'furniture', 'ceiling-devices', 'openings']);
      assert(explicitLayers.has(descriptor.renderLayer), 'INVALID_CATALOG_RENDER_LAYER',
        `Catalog item ${item.type} uses unsupported render layer ${descriptor.renderLayer}`);
      return descriptor.renderLayer;
    }
    if (item.type === 'rug' || artFamily === 'playMat' || artFamily === 'floorMat') return 'rugs';
    if (item.type === 'ceilingLight' || item.type === 'pendantLight' || artFamily === 'ceilingFan') {
      return 'ceiling-devices';
    }
    if (item.type === 'window') return 'openings';
    return 'furniture';
  }

  // Pointer and paint hot paths use the same layer contract without building
  // and hashing a full evidence plan for every frame. Returned items are the
  // original references; bucket arrays are frozen to prevent reordering.
  function orderSceneItems(items, catalogByType, manifestValue) {
    assert(Array.isArray(items), 'INVALID_RENDER_ITEMS', 'Scene items must be an array');
    const manifest = validateLayerManifest(manifestValue || DEFAULT_LAYER_MANIFEST);
    const layerOrder = new Map(manifest.layers.map(layer => [layer.id, layer.order]));
    const ordered = items.map((item, index) => {
      assert(item && typeof item === 'object' && !Array.isArray(item), 'INVALID_RENDER_ITEM',
        `Scene item ${index} must be a record`);
      assert(typeof item.id === 'string' && item.id.length > 0, 'INVALID_RENDER_ITEM_ID',
        `Scene item ${index} requires a non-empty ID`);
      const layer = layerForItem(item, catalogByType);
      const z = Object.prototype.hasOwnProperty.call(item, 'zIndex') ? item.zIndex : index;
      assert(Number.isFinite(z), 'INVALID_RENDER_Z', `Scene item ${item.id} has a non-finite zIndex`);
      return { item, layer, z, stableIndex: index };
    }).sort((left, right) => layerOrder.get(left.layer) - layerOrder.get(right.layer)
      || left.z - right.z || left.stableIndex - right.stableIndex
      || compareCodeUnits(left.item.id, right.item.id));
    const collect = layer => Object.freeze(ordered.filter(entry => entry.layer === layer).map(entry => entry.item));
    const rugs = collect('rugs');
    const ceilingDevices = collect('ceiling-devices');
    const openings = collect('openings');
    const furniture = collect('furniture');
    return Object.freeze({
      rugs, ceilingDevices, openings, furniture,
      floorItems: rugs, ceilingItems: ceilingDevices, windowItems: openings, regularItems: furniture
    });
  }

  function partitionSceneItems(items, catalogByType, manifestValue) {
    assert(Array.isArray(items), 'INVALID_RENDER_ITEMS', 'Scene items must be an array');
    const manifest = validateLayerManifest(manifestValue || DEFAULT_LAYER_MANIFEST);
    const operations = items.map((item, index) => {
      const cloned = canonicalClone(item);
      assert(typeof cloned.id === 'string' && cloned.id.length > 0, 'INVALID_RENDER_ITEM_ID',
        `Scene item ${index} requires a non-empty ID`);
      const hasExplicitZ = Object.prototype.hasOwnProperty.call(cloned, 'zIndex');
      const z = hasExplicitZ ? cloned.zIndex : index;
      assert(Number.isFinite(z), 'INVALID_RENDER_Z', `Scene item ${cloned.id} has a non-finite zIndex`);
      return {
        id: cloned.id,
        layer: layerForItem(cloned, catalogByType),
        z,
        stableIndex: index,
        kind: cloned.type || 'item',
        payload: cloned
      };
    });
    const plan = createRenderPlan(operations, manifest);
    const collect = layer => plan.operations
      .filter(operation => operation.layer === layer)
      .map(operation => canonicalClone(operation.payload));
    const rugs = collect('rugs');
    const ceilingDevices = collect('ceiling-devices');
    const openings = collect('openings');
    const furniture = collect('furniture');
    const body = { manifestHash: manifest.hash, renderPlanHash: plan.hash, rugs, ceilingDevices, openings, furniture };
    return deepFreeze({
      ...body,
      hash: canonicalHash(body),
      plan,
      floorItems: rugs,
      ceilingItems: ceilingDevices,
      windowItems: openings,
      regularItems: furniture
    });
  }

  function normalizeAssetPath(value) {
    assert(typeof value === 'string' && value.trim().length > 0, 'INVALID_ASSET_PATH',
      'Asset path must be a non-empty string');
    const raw = value.trim().replace(/\\/g, '/').replace(/^\/+/, '');
    assert(!/^[a-z][a-z0-9+.-]*:/i.test(raw), 'EXTERNAL_ASSET_PATH',
      `Asset path must be repository-relative: ${value}`);
    const segments = raw.split('/').filter(segment => segment.length > 0 && segment !== '.');
    assert(segments.length > 0 && !segments.includes('..'), 'INVALID_ASSET_PATH',
      `Asset path escapes the asset root: ${value}`);
    assert(!segments.some(segment => segment.includes('\u0000')), 'INVALID_ASSET_PATH',
      'Asset path contains a null byte');
    return segments.join('/');
  }

  function assetBytes(content) {
    if (typeof content === 'string') return utf8Bytes(content);
    if (ArrayBuffer.isView(content)) {
      return new Uint8Array(content.buffer.slice(content.byteOffset, content.byteOffset + content.byteLength));
    }
    if (Object.prototype.toString.call(content) === '[object ArrayBuffer]') return new Uint8Array(content.slice(0));
    if (Array.isArray(content)) return new Uint8Array(content);
    throw new core.DeterminismError('INVALID_ASSET_CONTENT', 'Asset content must be text or bytes');
  }

  function createAssetManifest(entries, options) {
    assert(Array.isArray(entries), 'INVALID_ASSET_ENTRIES', 'Asset entries must be an array');
    const config = options || {};
    const id = config.id || 'roomcraft-assets-v1';
    assert(validIdentifier(id), 'INVALID_ASSET_MANIFEST_ID',
      'Asset manifest ID must be a lowercase kebab-case identifier');
    const ids = new Set();
    const paths = new Set();
    const normalized = entries.map((entry, index) => {
      assert(entry && typeof entry === 'object' && !Array.isArray(entry), 'INVALID_ASSET_ENTRY',
        `Asset entry ${index} must be a record`);
      assert(validIdentifier(entry.id), 'INVALID_ASSET_ID', `Asset entry ${index} has an invalid ID`);
      assert(!ids.has(entry.id), 'DUPLICATE_ASSET_ID', `Duplicate asset ID: ${entry.id}`);
      const path = normalizeAssetPath(entry.path);
      assert(!paths.has(path), 'DUPLICATE_ASSET_PATH', `Duplicate asset path: ${path}`);
      let hash = entry.hash;
      let bytes = entry.bytes;
      if (Object.prototype.hasOwnProperty.call(entry, 'content')) {
        const content = assetBytes(entry.content);
        const computedHash = sha256Bytes(content);
        if (hash !== undefined) assert(hash === computedHash, 'ASSET_HASH_MISMATCH',
          `Asset ${entry.id} content does not match its supplied hash`);
        if (bytes !== undefined) assert(bytes === content.byteLength, 'ASSET_SIZE_MISMATCH',
          `Asset ${entry.id} content does not match its supplied byte count`);
        hash = computedHash;
        bytes = content.byteLength;
      }
      assert(typeof hash === 'string' && /^sha256:[0-9a-f]{64}$/.test(hash), 'INVALID_ASSET_HASH',
        `Asset ${entry.id} requires a lowercase SHA-256 hash`);
      assert(Number.isSafeInteger(bytes) && bytes >= 0, 'INVALID_ASSET_SIZE',
        `Asset ${entry.id} requires a non-negative byte count`);
      ids.add(entry.id);
      paths.add(path);
      return {
        id: entry.id,
        path,
        bytes,
        hash,
        mediaType: entry.mediaType === undefined ? 'application/octet-stream' : String(entry.mediaType),
        role: entry.role === undefined ? '' : String(entry.role)
      };
    }).sort((left, right) => compareCodeUnits(left.path, right.path) || compareCodeUnits(left.id, right.id));
    const body = { formatVersion: ASSET_MANIFEST_VERSION, id, entries: normalized };
    return deepFreeze({ ...body, hash: canonicalHash(body) });
  }

  function validateAssetManifest(value) {
    const manifest = canonicalClone(value);
    assert(manifest.formatVersion === ASSET_MANIFEST_VERSION, 'ASSET_MANIFEST_VERSION',
      `Unsupported asset manifest version: ${manifest.formatVersion}`);
    const rebuilt = createAssetManifest(manifest.entries, { id: manifest.id });
    assert(canonicalHash(manifest) === canonicalHash(rebuilt), 'ASSET_MANIFEST_MISMATCH',
      'Asset manifest contents or hash is invalid');
    return rebuilt;
  }

  function normalizedViewport(value) {
    const viewport = canonicalClone(value || {});
    const allowed = new Set(['width', 'height', 'pixelRatio']);
    Object.keys(viewport).forEach(key => assert(allowed.has(key), 'UNKNOWN_VIEWPORT_FIELD',
      `Unknown viewport fingerprint field: ${key}`));
    ['width', 'height'].forEach(key => assert(Number.isSafeInteger(viewport[key]) && viewport[key] > 0,
      'INVALID_VIEWPORT', `Viewport ${key} must be a positive safe integer`));
    const pixelRatio = viewport.pixelRatio === undefined ? 1 : viewport.pixelRatio;
    assert(Number.isFinite(pixelRatio) && pixelRatio > 0, 'INVALID_VIEWPORT',
      'Viewport pixelRatio must be positive and finite');
    return { width: viewport.width, height: viewport.height, pixelRatio };
  }

  function normalizedRuntime(value) {
    const runtime = canonicalClone(value || {});
    const allowed = new Set(['name', 'version', 'platform', 'architecture']);
    Object.keys(runtime).forEach(key => assert(allowed.has(key), 'UNKNOWN_RUNTIME_FIELD',
      `Unknown runtime fingerprint field: ${key}`));
    return {
      name: runtime.name === undefined ? 'unspecified' : String(runtime.name),
      version: runtime.version === undefined ? 'unspecified' : String(runtime.version),
      platform: runtime.platform === undefined ? 'unspecified' : String(runtime.platform),
      architecture: runtime.architecture === undefined ? 'unspecified' : String(runtime.architecture)
    };
  }

  function normalizedFeatures(value) {
    if (value === undefined) return [];
    if (Array.isArray(value)) {
      assert(value.every(feature => typeof feature === 'string' && feature.length > 0), 'INVALID_FEATURES',
        'Feature list must contain non-empty strings');
      return [...new Set(value)].sort(compareCodeUnits);
    }
    assert(value && typeof value === 'object', 'INVALID_FEATURES',
      'Features must be a string array or a canonical record');
    return canonicalClone(value);
  }

  function createEnvironmentFingerprint(value) {
    const input = canonicalClone(value || {});
    const allowed = new Set([
      'engineVersion', 'schemaVersion', 'rendererVersion', 'assetManifestHash',
      'layerManifestHash', 'viewport', 'runtime', 'features', 'colorSpace'
    ]);
    Object.keys(input).forEach(key => assert(allowed.has(key), 'UNKNOWN_ENVIRONMENT_FIELD',
      `Unknown environment fingerprint field: ${key}`));
    assert(typeof input.rendererVersion === 'string' && input.rendererVersion.length > 0,
      'INVALID_RENDERER_VERSION', 'Environment fingerprint requires rendererVersion');
    assert((typeof input.schemaVersion === 'string' && input.schemaVersion.length > 0)
      || (Number.isSafeInteger(input.schemaVersion) && input.schemaVersion >= 0),
    'INVALID_SCHEMA_VERSION', 'Environment fingerprint requires schemaVersion');
    [input.assetManifestHash, input.layerManifestHash].forEach((hash, index) => {
      assert(typeof hash === 'string' && /^sha256:[0-9a-f]{64}$/.test(hash), 'INVALID_ENVIRONMENT_HASH',
        `${index === 0 ? 'assetManifestHash' : 'layerManifestHash'} must be a SHA-256 hash`);
    });
    const body = {
      formatVersion: ENVIRONMENT_FINGERPRINT_VERSION,
      engineVersion: input.engineVersion || CORE_VERSION,
      schemaVersion: input.schemaVersion,
      rendererVersion: input.rendererVersion,
      assetManifestHash: input.assetManifestHash,
      layerManifestHash: input.layerManifestHash,
      viewport: normalizedViewport(input.viewport),
      runtime: normalizedRuntime(input.runtime),
      features: normalizedFeatures(input.features),
      colorSpace: input.colorSpace === undefined ? 'srgb' : String(input.colorSpace)
    };
    return deepFreeze({ ...body, hash: canonicalHash(body) });
  }

  function validateEnvironmentFingerprint(value) {
    const fingerprint = canonicalClone(value);
    assert(fingerprint.formatVersion === ENVIRONMENT_FINGERPRINT_VERSION, 'ENVIRONMENT_FINGERPRINT_VERSION',
      `Unsupported environment fingerprint version: ${fingerprint.formatVersion}`);
    const rebuilt = createEnvironmentFingerprint({
      engineVersion: fingerprint.engineVersion,
      schemaVersion: fingerprint.schemaVersion,
      rendererVersion: fingerprint.rendererVersion,
      assetManifestHash: fingerprint.assetManifestHash,
      layerManifestHash: fingerprint.layerManifestHash,
      viewport: fingerprint.viewport,
      runtime: fingerprint.runtime,
      features: fingerprint.features,
      colorSpace: fingerprint.colorSpace
    });
    assert(canonicalHash(fingerprint) === canonicalHash(rebuilt), 'ENVIRONMENT_FINGERPRINT_MISMATCH',
      'Environment fingerprint contents or hash is invalid');
    return rebuilt;
  }

  root.RoomcraftRenderContract = Object.freeze({
    FORMAT_VERSION,
    LAYER_MANIFEST_VERSION,
    RENDER_PLAN_VERSION,
    ASSET_MANIFEST_VERSION,
    ENVIRONMENT_FINGERPRINT_VERSION,
    DEFAULT_LAYER_MANIFEST,
    validateLayerManifest,
    createRenderPlan,
    validateRenderPlan,
    layerForItem,
    orderSceneItems,
    partitionItems,
    partitionSceneItems,
    normalizeAssetPath,
    createAssetManifest,
    validateAssetManifest,
    createEnvironmentFingerprint,
    validateEnvironmentFingerprint,
    fingerprintEnvironment: createEnvironmentFingerprint
  });
}(typeof window !== 'undefined' ? window : globalThis));
