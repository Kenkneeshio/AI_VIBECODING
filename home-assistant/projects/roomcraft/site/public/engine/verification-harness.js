(function installRoomcraftEngine(root) {
  'use strict';

  const core = root.RoomcraftDeterminismCore;
  const project = root.RoomcraftProjectRuntime;
  const renderContract = root.RoomcraftRenderContract;
  if (!core || !project || !renderContract) {
    throw new Error('deterministic-core.js, project-runtime.js, and render-contract.js must load before verification-harness.js');
  }

  const ENGINE_VERSION = '1.0.0';
  const EVIDENCE_VERSION = 1;
  const { assert, canonicalClone, canonicalHash, deepFreeze } = core;

  const commands = Object.freeze({
    createLog: project.createCommandLog,
    createJournal: project.createCommandJournal,
    validate: project.validateCommandLogEnvelope,
    replay: project.replayCommandLog
  });

  const migrations = Object.freeze({
    registry: project.normalizeMigrations,
    normalizeRegistry: project.normalizeMigrations,
    run: project.runMigrations,
    verifyIdempotency: project.verifyMigrationIdempotency
  });

  const render = Object.freeze({
    layerManifest: renderContract.DEFAULT_LAYER_MANIFEST,
    validateLayerManifest: renderContract.validateLayerManifest,
    createPlan: renderContract.createRenderPlan,
    validatePlan: renderContract.validateRenderPlan,
    layerForItem: renderContract.layerForItem,
    orderSceneItems: renderContract.orderSceneItems,
    partitionItems: renderContract.partitionItems,
    partitionSceneItems: renderContract.partitionSceneItems
  });

  const assets = Object.freeze({
    createManifest: renderContract.createAssetManifest,
    validateManifest: renderContract.validateAssetManifest
  });

  const environment = Object.freeze({
    fingerprint: renderContract.createEnvironmentFingerprint,
    validate: renderContract.validateEnvironmentFingerprint
  });

  const io = Object.freeze({
    exportProject: project.exportCanonicalProject,
    importProject: project.importCanonicalProject,
    verifyRoundTrip: project.verifyRoundTrip
  });

  function createVerificationRecord(value) {
    const input = value || {};
    assert(Object.prototype.hasOwnProperty.call(input, 'project'), 'MISSING_EVIDENCE_PROJECT',
      'Verification record requires a project');
    const projectValue = canonicalClone(input.project);
    const layerManifest = renderContract.validateLayerManifest(
      input.layerManifest || renderContract.DEFAULT_LAYER_MANIFEST
    );
    const assetManifest = input.assetManifest
      ? renderContract.validateAssetManifest(input.assetManifest)
      : renderContract.createAssetManifest(input.assets || []);
    const renderPlan = input.renderPlan
      ? renderContract.validateRenderPlan(input.renderPlan, layerManifest)
      : renderContract.createRenderPlan(input.renderOperations || [], layerManifest);
    let environmentFingerprint;
    if (input.environmentFingerprint) {
      environmentFingerprint = renderContract.validateEnvironmentFingerprint(input.environmentFingerprint);
      assert(environmentFingerprint.assetManifestHash === assetManifest.hash,
        'EVIDENCE_ASSET_ENVIRONMENT_MISMATCH', 'Environment fingerprint references another asset manifest');
      assert(environmentFingerprint.layerManifestHash === layerManifest.hash,
        'EVIDENCE_LAYER_ENVIRONMENT_MISMATCH', 'Environment fingerprint references another layer manifest');
    } else {
      const environmentInput = { ...(input.environment || {}) };
      if (environmentInput.assetManifestHash !== undefined) {
        assert(environmentInput.assetManifestHash === assetManifest.hash,
          'EVIDENCE_ASSET_ENVIRONMENT_MISMATCH', 'Environment input references another asset manifest');
      }
      if (environmentInput.layerManifestHash !== undefined) {
        assert(environmentInput.layerManifestHash === layerManifest.hash,
          'EVIDENCE_LAYER_ENVIRONMENT_MISMATCH', 'Environment input references another layer manifest');
      }
      environmentFingerprint = renderContract.createEnvironmentFingerprint({
        ...environmentInput,
        engineVersion: environmentInput.engineVersion || ENGINE_VERSION,
        assetManifestHash: assetManifest.hash,
        layerManifestHash: layerManifest.hash
      });
    }

    let commandLogHash = null;
    if (input.commandLog) {
      const commandLog = project.validateCommandLogEnvelope(input.commandLog);
      assert(commandLog.finalHash === canonicalHash(projectValue), 'EVIDENCE_COMMAND_PROJECT_MISMATCH',
        'Command log final state does not match the evidence project');
      commandLogHash = commandLog.hash;
    }
    const body = {
      formatVersion: EVIDENCE_VERSION,
      engineVersion: ENGINE_VERSION,
      projectHash: canonicalHash(projectValue),
      commandLogHash,
      assetManifestHash: assetManifest.hash,
      layerManifestHash: layerManifest.hash,
      renderPlanHash: renderPlan.hash,
      environmentHash: environmentFingerprint.hash
    };
    return deepFreeze({
      ...body,
      hash: canonicalHash(body),
      assetManifest,
      layerManifest,
      renderPlan,
      environmentFingerprint
    });
  }

  root.RoomcraftEngine = Object.freeze({
    ENGINE_VERSION,
    EVIDENCE_VERSION,
    canonicalize: core.canonicalClone,
    canonicalStringify: core.canonicalStringify,
    fingerprint: core.canonicalHash,
    canonicalHash: core.canonicalHash,
    clone: core.canonicalClone,
    normalizeScene: project.normalizeScene,
    createIdAllocator: core.createSeededIdFactory,
    createVerificationRecord,
    commands,
    migrations,
    render,
    assets,
    environment,
    io,
    core,
    project
  });
}(typeof window !== 'undefined' ? window : globalThis));
