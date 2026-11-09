(function installRoomcraftProjectRuntime(root) {
  'use strict';

  const core = root.RoomcraftDeterminismCore;
  if (!core) throw new Error('RoomcraftDeterminismCore must load before project-runtime.js');

  const {
    CORE_VERSION, FORMAT_VERSION, assert, compareCodeUnits, canonicalStringify,
    canonicalClone, canonicalHash, deepFreeze, createSeededIdFactory
  } = core;
  const COMMAND_LOG_VERSION = 1;
  const MIGRATION_EVIDENCE_VERSION = 1;

  function validateState(validate, state, context) {
    if (typeof validate !== 'function') return;
    const result = validate(canonicalClone(state), canonicalClone(context));
    assert(result !== false, 'STATE_VALIDATION_FAILED', `State validation failed during ${context.phase}`);
  }

  function reduceDeterministically(reducer, state, command) {
    assert(typeof reducer === 'function', 'INVALID_REDUCER', 'A reducer function is required');
    const run = () => {
      const input = canonicalClone(state);
      const result = reducer(input, canonicalClone(command));
      return canonicalClone(result === undefined ? input : result);
    };
    const first = run();
    const second = run();
    const firstHash = canonicalHash(first);
    const secondHash = canonicalHash(second);
    assert(firstHash === secondHash, 'NON_DETERMINISTIC_REDUCER',
      `Reducer produced different states for command ${command.id}`, { firstHash, secondHash });
    return first;
  }

  function normalizeScene(scene, options) {
    const config = options || {};
    const normalized = canonicalClone(scene);
    assert(normalized && !Array.isArray(normalized) && typeof normalized === 'object',
      'INVALID_SCENE', 'A scene must be a record');
    const collections = config.collections || ['rooms', 'walls', 'items', 'hotspots'];
    collections.forEach(name => {
      assert(typeof name === 'string' && name.length > 0, 'INVALID_COLLECTION_NAME',
        'Scene collection names must be non-empty strings');
      if (!Object.prototype.hasOwnProperty.call(normalized, name)) normalized[name] = [];
      assert(Array.isArray(normalized[name]), 'INVALID_SCENE_COLLECTION', `${name} must be an array`);
      const ids = new Set();
      normalized[name].forEach((record, index) => {
        assert(record && !Array.isArray(record) && typeof record === 'object', 'INVALID_SCENE_RECORD',
          `${name}[${index}] must be a record`);
        if (record.id === undefined) return;
        assert(typeof record.id === 'string' && record.id.length > 0, 'INVALID_SCENE_ID',
          `${name}[${index}].id must be a non-empty string`);
        assert(!ids.has(record.id), 'DUPLICATE_SCENE_ID', `Duplicate ${name} ID: ${record.id}`);
        ids.add(record.id);
      });
    });
    ['version', 'schemaVersion', 'editableReferenceVersion'].forEach(key => {
      if (normalized[key] !== undefined) {
        assert(Number.isSafeInteger(normalized[key]) && normalized[key] >= 0, 'INVALID_SCENE_VERSION',
          `${key} must be a non-negative safe integer`);
      }
    });
    return canonicalClone(normalized);
  }

  function createCommandJournal(options) {
    const config = options || {};
    assert(Object.prototype.hasOwnProperty.call(config, 'initialState'), 'MISSING_INITIAL_STATE',
      'Command journal requires initialState');
    const reducer = config.reducer;
    assert(typeof reducer === 'function', 'INVALID_REDUCER', 'Command journal requires a reducer');
    const seed = Object.prototype.hasOwnProperty.call(config, 'seed')
      ? canonicalClone(config.seed)
      : 'roomcraft-command-log';
    const namespace = config.namespace || 'command';
    const allocator = createSeededIdFactory({ seed, namespace });
    const initialState = canonicalClone(config.initialState);
    const initialHash = canonicalHash(initialState);
    let state = canonicalClone(initialState);
    const commands = [];
    validateState(config.validate, state, { phase: 'initial', sequence: 0 });

    function dispatch(type, payload) {
      assert(typeof type === 'string' && type.trim().length > 0 && type.length <= 120,
        'INVALID_COMMAND_TYPE', 'Command type must be a non-empty string no longer than 120 characters');
      const sequence = commands.length + 1;
      const command = {
        sequence,
        id: allocator.next(type),
        type,
        payload: payload === undefined ? null : canonicalClone(payload)
      };
      const beforeHash = canonicalHash(state);
      const next = reduceDeterministically(reducer, state, command);
      validateState(config.validate, next, { phase: 'dispatch', sequence, commandId: command.id });
      const afterHash = canonicalHash(next);
      const recorded = deepFreeze({ ...command, beforeHash, afterHash });
      commands.push(recorded);
      state = next;
      return canonicalClone(recorded);
    }

    function exportLog() {
      const body = {
        formatVersion: COMMAND_LOG_VERSION,
        coreVersion: CORE_VERSION,
        seed,
        namespace: allocator.namespace,
        initialHash,
        commands: canonicalClone(commands),
        finalHash: canonicalHash(state)
      };
      return deepFreeze({ ...body, hash: canonicalHash(body) });
    }

    return Object.freeze({
      dispatch,
      exportLog,
      getState: () => canonicalClone(state),
      getCommands: () => canonicalClone(commands),
      get stateHash() { return canonicalHash(state); },
      initialHash
    });
  }

  function validateCommandLogEnvelope(value) {
    const log = canonicalClone(value);
    assert(log.formatVersion === COMMAND_LOG_VERSION, 'COMMAND_LOG_VERSION',
      `Unsupported command log version: ${log.formatVersion}`);
    assert(Array.isArray(log.commands), 'INVALID_COMMAND_LOG', 'Command log commands must be an array');
    assert(typeof log.hash === 'string', 'INVALID_COMMAND_LOG_HASH', 'Command log hash is required');
    const body = canonicalClone(log);
    delete body.hash;
    const calculated = canonicalHash(body);
    assert(calculated === log.hash, 'COMMAND_LOG_HASH_MISMATCH', 'Command log envelope hash does not match',
      { expected: calculated, actual: log.hash });
    return log;
  }

  function replayCommandLog(options) {
    const config = options || {};
    assert(Object.prototype.hasOwnProperty.call(config, 'initialState'), 'MISSING_INITIAL_STATE',
      'Replay requires initialState');
    assert(typeof config.reducer === 'function', 'INVALID_REDUCER', 'Replay requires a reducer');
    const log = validateCommandLogEnvelope(config.log);
    const initialState = canonicalClone(config.initialState);
    const initialHash = canonicalHash(initialState);
    assert(log.initialHash === initialHash, 'COMMAND_LOG_INITIAL_MISMATCH',
      'Command log was created for a different initial state', { expected: log.initialHash, actual: initialHash });
    const allocator = createSeededIdFactory({ seed: log.seed, namespace: log.namespace });
    let state = initialState;
    validateState(config.validate, state, { phase: 'replay-initial', sequence: 0 });

    log.commands.forEach((recorded, index) => {
      const sequence = index + 1;
      assert(recorded.sequence === sequence, 'COMMAND_SEQUENCE_MISMATCH',
        `Expected command sequence ${sequence}, received ${recorded.sequence}`);
      const expectedId = allocator.next(recorded.type);
      assert(recorded.id === expectedId, 'COMMAND_ID_MISMATCH',
        `Command ${sequence} has a non-reproducible ID`, { expected: expectedId, actual: recorded.id });
      const beforeHash = canonicalHash(state);
      assert(recorded.beforeHash === beforeHash, 'COMMAND_BEFORE_HASH_MISMATCH',
        `Command ${sequence} does not apply to the current state`);
      const command = {
        sequence,
        id: recorded.id,
        type: recorded.type,
        payload: canonicalClone(recorded.payload)
      };
      state = reduceDeterministically(config.reducer, state, command);
      validateState(config.validate, state, { phase: 'replay', sequence, commandId: recorded.id });
      const afterHash = canonicalHash(state);
      assert(recorded.afterHash === afterHash, 'COMMAND_AFTER_HASH_MISMATCH',
        `Command ${sequence} replay produced a different state`);
    });
    const finalHash = canonicalHash(state);
    assert(log.finalHash === finalHash, 'COMMAND_FINAL_HASH_MISMATCH',
      'Replayed state does not match the recorded final state');
    return deepFreeze({ state: canonicalClone(state), finalHash, commandCount: log.commands.length, logHash: log.hash });
  }

  function normalizeMigrations(migrations) {
    assert(Array.isArray(migrations), 'INVALID_MIGRATIONS', 'Migrations must be an array');
    const normalized = migrations.map((migration, index) => {
      assert(migration && typeof migration === 'object' && !Array.isArray(migration), 'INVALID_MIGRATION',
        `Migration ${index} must be a record`);
      assert(typeof migration.id === 'string' && migration.id.length > 0, 'INVALID_MIGRATION_ID',
        `Migration ${index} requires an ID`);
      assert(Number.isSafeInteger(migration.from) && migration.from >= 0, 'INVALID_MIGRATION_VERSION',
        `Migration ${migration.id} has an invalid from version`);
      assert(Number.isSafeInteger(migration.to) && migration.to > migration.from, 'INVALID_MIGRATION_VERSION',
        `Migration ${migration.id} must advance its version`);
      assert(typeof migration.apply === 'function', 'INVALID_MIGRATION_APPLY',
        `Migration ${migration.id} requires an apply function`);
      return migration;
    }).sort((left, right) => left.from - right.from || left.to - right.to || compareCodeUnits(left.id, right.id));
    const ids = new Set();
    const startingVersions = new Set();
    normalized.forEach(migration => {
      assert(!ids.has(migration.id), 'DUPLICATE_MIGRATION_ID', `Duplicate migration ID: ${migration.id}`);
      assert(!startingVersions.has(migration.from), 'AMBIGUOUS_MIGRATION',
        `More than one migration starts at version ${migration.from}`);
      ids.add(migration.id);
      startingVersions.add(migration.from);
    });
    return normalized;
  }

  function applyMigrationDeterministically(migration, state, versionKey) {
    function run() {
      const input = canonicalClone(state);
      const result = migration.apply(input);
      const output = canonicalClone(result === undefined ? input : result);
      output[versionKey] = migration.to;
      return canonicalClone(output);
    }
    const first = run();
    const second = run();
    const firstHash = canonicalHash(first);
    const secondHash = canonicalHash(second);
    assert(firstHash === secondHash, 'NON_DETERMINISTIC_MIGRATION',
      `Migration ${migration.id} produced different outputs`, { firstHash, secondHash });
    return first;
  }

  function runMigrations(project, migrations, targetVersion, options) {
    const config = options || {};
    const versionKey = config.versionKey || 'schemaVersion';
    assert(typeof versionKey === 'string' && versionKey.length > 0, 'INVALID_VERSION_KEY',
      'Migration version key must be a non-empty string');
    const registry = normalizeMigrations(migrations);
    let state = canonicalClone(project);
    const currentVersion = state[versionKey] === undefined ? 0 : state[versionKey];
    assert(Number.isSafeInteger(currentVersion) && currentVersion >= 0, 'INVALID_PROJECT_VERSION',
      `${versionKey} must be a non-negative safe integer`);
    const target = targetVersion === undefined
      ? registry.reduce((highest, migration) => Math.max(highest, migration.to), currentVersion)
      : targetVersion;
    assert(Number.isSafeInteger(target) && target >= 0, 'INVALID_TARGET_VERSION',
      'Target version must be a non-negative safe integer');
    assert(currentVersion <= target, 'PROJECT_VERSION_AHEAD',
      `Project ${versionKey} ${currentVersion} is newer than requested target ${target}`);
    state[versionKey] = currentVersion;
    validateState(config.validate, state, { phase: 'migration-initial', sequence: 0 });
    const steps = [];

    while (state[versionKey] < target) {
      const from = state[versionKey];
      const migration = registry.find(candidate => candidate.from === from);
      assert(migration, 'MISSING_MIGRATION', `No migration starts at ${versionKey} ${from}`);
      assert(migration.to <= target, 'MIGRATION_OVERSHOOTS_TARGET',
        `Migration ${migration.id} advances past target ${target}`);
      const beforeHash = canonicalHash(state);
      state = applyMigrationDeterministically(migration, state, versionKey);
      validateState(config.validate, state, { phase: 'migration', migrationId: migration.id, from, to: migration.to });
      const afterHash = canonicalHash(state);
      steps.push({ id: migration.id, from, to: migration.to, beforeHash, afterHash });
    }

    const evidenceBody = {
      formatVersion: MIGRATION_EVIDENCE_VERSION,
      versionKey,
      initialVersion: currentVersion,
      targetVersion: target,
      initialHash: canonicalHash(project),
      finalHash: canonicalHash(state),
      steps
    };
    return deepFreeze({ project: canonicalClone(state), evidence: { ...evidenceBody, hash: canonicalHash(evidenceBody) } });
  }

  function verifyMigrationIdempotency(project, migrations, targetVersion, options) {
    const first = runMigrations(project, migrations, targetVersion, options);
    const second = runMigrations(first.project, migrations, targetVersion, options);
    const firstHash = canonicalHash(first.project);
    const secondHash = canonicalHash(second.project);
    assert(firstHash === secondHash && second.evidence.steps.length === 0, 'MIGRATION_NOT_IDEMPOTENT',
      'Running the migration pipeline twice changed the project', { firstHash, secondHash });
    return deepFreeze({
      project: canonicalClone(first.project),
      firstRun: first.evidence,
      secondRun: second.evidence,
      finalHash: firstHash,
      idempotent: true
    });
  }

  function exportCanonicalProject(project) {
    return canonicalStringify(project);
  }

  function importCanonicalProject(serialized) {
    assert(typeof serialized === 'string', 'INVALID_PROJECT_EXPORT', 'Imported project must be JSON text');
    let parsed;
    try {
      parsed = JSON.parse(serialized);
    } catch (error) {
      throw new core.DeterminismError('INVALID_PROJECT_JSON', 'Imported project is not valid JSON', {
        message: error && error.message ? error.message : String(error)
      });
    }
    return canonicalClone(parsed);
  }

  function verifyRoundTrip(project, adapters) {
    const codec = adapters || {};
    const encode = codec.encode || exportCanonicalProject;
    const decode = codec.decode || importCanonicalProject;
    assert(typeof encode === 'function' && typeof decode === 'function', 'INVALID_CODEC',
      'Round-trip codec requires encode and decode functions');
    const source = canonicalClone(project);
    const encoded = encode(canonicalClone(source));
    const decoded = canonicalClone(decode(encoded));
    const reencoded = encode(canonicalClone(decoded));
    const sourceHash = canonicalHash(source);
    const decodedHash = canonicalHash(decoded);
    const encodedHash = canonicalHash(encoded);
    const reencodedHash = canonicalHash(reencoded);
    assert(sourceHash === decodedHash, 'ROUND_TRIP_PROJECT_MISMATCH',
      'Export/import changed the project', { sourceHash, decodedHash });
    assert(encodedHash === reencodedHash, 'NON_CANONICAL_EXPORT',
      'Encoding the imported project produced different output', { encodedHash, reencodedHash });
    return deepFreeze({ sourceHash, decodedHash, encodedHash, reencodedHash, stable: true });
  }

  root.RoomcraftProjectRuntime = Object.freeze({
    FORMAT_VERSION,
    COMMAND_LOG_VERSION,
    normalizeScene,
    reduceDeterministically,
    createCommandJournal,
    createCommandLog: createCommandJournal,
    validateCommandLogEnvelope,
    replayCommandLog,
    normalizeMigrations,
    runMigrations,
    verifyMigrationIdempotency,
    exportCanonicalProject,
    importCanonicalProject,
    verifyRoundTrip
  });
}(typeof window !== 'undefined' ? window : globalThis));
