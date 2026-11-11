import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
export const SITE_ROOT = resolve(SCRIPT_DIR, '..');
function detectProjectRoot(siteRoot) {
  const parent = resolve(siteRoot, '..');
  return existsSync(join(parent, 'layout.schema.json')) ? parent : siteRoot;
}
export const PROJECT_ROOT = detectProjectRoot(SITE_ROOT);
export const MANIFEST_PATH = join(SITE_ROOT, 'dist', 'roomcraft-release-manifest.json');

const RELEASE_FORMAT = 1;
const RELEASE_STANDARD = 'customer-outcome-to-deployment-v1';
const REQUIRED_ENGINE_GLOBALS = Object.freeze([
  'RoomcraftDeterminismCore',
  'RoomcraftProjectRuntime',
  'RoomcraftRenderContract',
  'RoomcraftEngine',
  'RoomcraftWallJoins',
  'RoomcraftReferenceGeometry'
]);
export const REQUIRED_ENGINE_SOURCES = Object.freeze([
  'engine/deterministic-core.js',
  'engine/project-runtime.js',
  'engine/render-contract.js',
  'engine/verification-harness.js',
  'engine/wall-joins.js',
  'engine/reference-geometry.js'
]);
const ALLOWED_RUNTIME_EXTENSIONS = new Set([
  '.css', '.html', '.js', '.json', '.md', '.mjs', '.mts', '.png', '.py', '.sh', '.svg', '.ts', '.tsx'
]);

function posixPath(value) {
  return value.split(sep).join('/');
}

function extension(path) {
  const name = path.slice(path.lastIndexOf('/') + 1);
  const index = name.lastIndexOf('.');
  return index < 0 ? '' : name.slice(index).toLowerCase();
}

function sha256(buffer) {
  return `sha256:${createHash('sha256').update(buffer).digest('hex')}`;
}

export function canonicalInputBytes(path, bytes = readFileSync(path)) {
  // Git may check text out as CRLF on Windows and LF in CI. Hash the logical
  // source, not a workstation's checkout policy; binary artwork stays exact.
  if (extension(posixPath(path)) === '.png') return bytes;
  return Buffer.from(bytes.toString('utf8').replace(/\r\n?/g, '\n'), 'utf8');
}

function walkFiles(root) {
  if (!existsSync(root)) return [];
  const files = [];
  const visit = directory => {
    for (const entry of readdirSync(directory, { withFileTypes: true })
      .sort((left, right) => left.name < right.name ? -1 : left.name > right.name ? 1 : 0)) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (entry.isFile()) files.push(path);
    }
  };
  visit(root);
  return files;
}

function runtimeCandidates(siteRoot = SITE_ROOT, projectRoot = PROJECT_ROOT) {
  const candidates = [
    ...walkFiles(join(siteRoot, 'app')),
    ...walkFiles(join(siteRoot, 'lib')),
    ...walkFiles(join(siteRoot, 'public')),
    ...walkFiles(join(siteRoot, 'scripts')),
    ...walkFiles(join(siteRoot, 'tests')),
    ...walkFiles(join(siteRoot, 'vendor')),
    ...walkFiles(join(projectRoot, 'docs')),
    join(siteRoot, 'ha-local', 'install.py'),
    join(siteRoot, 'ha-local', 'test_install.py'),
    join(siteRoot, 'ha-local', 'migrate_interactive_plan.py'),
    join(siteRoot, 'ha-local', 'test_migrate_interactive_plan.py'),
    join(siteRoot, 'ha-local', 'migrate_reference_scene_v5.py'),
    join(siteRoot, 'ha-local', 'test_migrate_reference_scene_v5.py'),
    join(siteRoot, 'ha-local', 'roomcraft-card.js'),
    join(siteRoot, 'ha-local', 'roomcraft-card.test.mjs'),
    join(siteRoot, 'ha-local', 'dashboard-snapshots.mjs'),
    join(siteRoot, 'ha-local', 'roomcraft-weather-outdoor.js'),
    join(siteRoot, 'ha-local', 'roomcraft-weather-outdoor.test.mjs'),
    join(siteRoot, 'ha-local', 'roomcraft-storybook.mjs'),
    join(siteRoot, 'ha-local', 'storybook-demo.mjs'),
    join(siteRoot, 'ha-local', 'storybook-snapshots.mjs'),
    join(siteRoot, 'ha-local', 'storybook-state.mjs'),
    join(siteRoot, 'ha-local', 'storybook-weather.mjs'),
    join(siteRoot, 'ha-local', 'storybook-coastal-sky.mjs'),
    join(siteRoot, 'ha-local', 'storybook-ocean.mjs'),
    join(siteRoot, 'ha-local', 'storybook-street.mjs'),
    join(siteRoot, 'ha-local', 'storybook-utilities.mjs'),
    join(siteRoot, 'ha-local', 'storybook-tracking.mjs'),
    join(siteRoot, 'ha-local', 'storybook-people.mjs'),
    join(siteRoot, 'ha-local', 'storybook-camera.mjs'),
    join(siteRoot, 'ha-local', 'storybook-orbit.mjs'),
    join(siteRoot, 'ha-local', 'storybook-editor.mjs'),
    join(siteRoot, 'ha-local', 'storybook-lighting.mjs'),
    join(siteRoot, 'ha-local', 'storybook-structure.mjs'),
    join(siteRoot, 'ha-local', 'storybook-floor-support.mjs'),
    join(siteRoot, 'ha-local', 'storybook-coverage.mjs'),
    join(siteRoot, 'ha-local', 'publish_storybook_dashboard.py'),
    join(siteRoot, 'ha-local', 'test_publish_storybook_dashboard.py'),
    join(siteRoot, 'ha-local', 'seed_storybook_snapshots.py'),
    join(siteRoot, 'ha-local', 'test_seed_storybook_snapshots.py'),
    join(siteRoot, 'ha-local', 'storybook-scene.mjs'),
    join(siteRoot, 'ha-local', 'storybook-furniture.mjs'),
    join(siteRoot, 'ha-local', 'storybook-habitats.mjs'),
    join(siteRoot, 'ha-local', 'storybook-library.mjs'),
    join(siteRoot, 'ha-local', 'storybook-size.mjs'),
    join(siteRoot, 'ha-local', 'storybook-devices.mjs'),
    join(siteRoot, 'cloudflare-env.d.ts'),
    join(siteRoot, 'next.config.ts'),
    join(siteRoot, 'package-lock.json'),
    join(siteRoot, 'package.json'),
    join(siteRoot, 'postcss.config.mjs'),
    join(siteRoot, 'README.md'),
    join(siteRoot, 'tsconfig.json'),
    join(siteRoot, 'vite.config.ts'),
    join(siteRoot, '.openai', 'hosting.json'),
    join(siteRoot, 'worker', 'index.ts'),
    join(projectRoot, 'CHANGELOG.md'),
    join(projectRoot, 'README.md'),
    join(projectRoot, 'layout.schema.json')
  ];
  return [...new Set(candidates.filter(path => existsSync(path) && statSync(path).isFile()))]
    .filter(path => ALLOWED_RUNTIME_EXTENSIONS.has(extension(posixPath(path))))
    .sort((left, right) => {
      const a = posixPath(relative(projectRoot, left));
      const b = posixPath(relative(projectRoot, right));
      return a < b ? -1 : a > b ? 1 : 0;
    });
}

export function buildReleaseManifest(siteRoot = SITE_ROOT, projectRoot = detectProjectRoot(siteRoot)) {
  const inputs = runtimeCandidates(siteRoot, projectRoot).map(path => {
    const bytes = canonicalInputBytes(path);
    return Object.freeze({
      path: posixPath(relative(projectRoot, path)),
      bytes: bytes.byteLength,
      sha256: sha256(bytes)
    });
  });
  const rootMaterial = inputs.map(input => `${input.path}\0${input.bytes}\0${input.sha256}`).join('\n');
  return Object.freeze({
    formatVersion: RELEASE_FORMAT,
    project: 'roomcraft',
    releaseStandard: RELEASE_STANDARD,
    evidenceOrder: Object.freeze([
      'customer-outcome',
      'product-contract',
      'engine-and-data',
      'art-and-assets',
      'integrations-and-privacy',
      'automated-verification',
      'deployment-readback',
      'rollback'
    ]),
    inputCount: inputs.length,
    inputs: Object.freeze(inputs),
    rootDigest: sha256(Buffer.from(rootMaterial, 'utf8'))
  });
}

export function renderManifest(manifest) {
  return `${JSON.stringify(manifest, null, 2)}\n`;
}

function fail(message) {
  throw new Error(`Roomcraft release gate: ${message}`);
}

export function validateEditorScriptOrder(editor) {
  const scripts = [...String(editor).matchAll(/<script\s+[^>]*src=["']([^"']+\.js)(?:\?[^"']*)?["'][^>]*>/gi)]
    .map(match => match[1]);
  const engineSources = scripts.filter(source => source.startsWith('engine/'));
  if (JSON.stringify(engineSources) !== JSON.stringify(REQUIRED_ENGINE_SOURCES)) {
    fail(`editor engine order must be exactly ${REQUIRED_ENGINE_SOURCES.join(' -> ')}`);
  }
  const rasterIndex = scripts.indexOf('raster-renderer.js');
  const appIndex = scripts.indexOf('app.js');
  if (rasterIndex < 0 || appIndex < 0) fail('editor.html must load raster-renderer.js and app.js');
  if (REQUIRED_ENGINE_SOURCES.some(source => scripts.indexOf(source) > rasterIndex) || rasterIndex > appIndex) {
    fail('engine modules must load before raster-renderer.js, which must load before app.js');
  }
  return engineSources;
}

// A release uses one cache namespace for the editor scripts, styles and art.
// The HTML carries that namespace but is excluded from its own digest.
export function stampEditorAssetUrls(editor, publicRoot) {
  const digest = createHash('sha256');
  for (const path of walkFiles(publicRoot)) {
    const name = posixPath(relative(publicRoot, path));
    if (name === 'editor.html') continue;
    digest.update(`${name}\0${sha256(canonicalInputBytes(path))}\n`);
  }
  const version = digest.digest('hex').slice(0, 16);
  return editor.replace(/\b(src|href)="([\w/-][\w./-]*\.(?:js|css|png|svg))(?:\?v=[^"]*)?"/g,
    (attribute, key, path) => path.startsWith('/') ? attribute : `${key}="${path}?v=${version}"`);
}

export function verifyReleasePolicy(siteRoot = SITE_ROOT) {
  const editorPath = join(siteRoot, 'public', 'editor.html');
  const appPath = join(siteRoot, 'public', 'app.js');
  const engineRoot = join(siteRoot, 'public', 'engine');
  if (!existsSync(editorPath) || !existsSync(appPath)) fail('editor runtime is incomplete');
  if (!existsSync(engineRoot)) fail('public/engine is missing');

  const editor = readFileSync(editorPath, 'utf8');
  const engineSources = validateEditorScriptOrder(editor);
  if (editor !== stampEditorAssetUrls(editor, join(siteRoot, 'public'))) {
    fail('editor asset URLs are stale; run npm run release:stamp-editor');
  }

  const loadedEngine = engineSources.map(source => {
    const path = join(siteRoot, 'public', ...source.split('/'));
    if (!existsSync(path)) fail(`editor references missing engine module ${source}`);
    return readFileSync(path, 'utf8');
  }).join('\n');
  for (const globalName of REQUIRED_ENGINE_GLOBALS) {
    if (!loadedEngine.includes(globalName)) fail(`loaded engine does not define ${globalName}`);
  }

  const deterministicEditorSources = [
    join(siteRoot, 'public', 'app.js'),
    join(siteRoot, 'public', 'catalog-variants.js'),
    join(siteRoot, 'public', 'inventory.js'),
    join(siteRoot, 'public', 'model-library.js'),
    join(siteRoot, 'public', 'object-art.js'),
    join(siteRoot, 'public', 'object-controls.js'),
    join(siteRoot, 'public', 'raster-renderer.js'),
    ...engineSources.map(source => join(siteRoot, 'public', ...source.split('/')))
  ];
  for (const path of deterministicEditorSources) {
    const source = readFileSync(path, 'utf8');
    const display = posixPath(relative(siteRoot, path));
    if (/\bMath\.random\s*\(/.test(source)) fail(`${display} uses Math.random()`);
  }

  const app = readFileSync(appPath, 'utf8');
  if (/(?:\buid\b|\bidAllocator\b|\bnextId\b)[^\n;]{0,160}\bDate\.now\s*\(|\bDate\.now\s*\([^\n;]{0,160}(?:\buid\b|\bnextId\b)/.test(app)) {
    fail('app.js derives object IDs from wall-clock time');
  }
  return Object.freeze({ engineSources: Object.freeze(engineSources.slice()) });
}

export function verifyRepeatability(siteRoot = SITE_ROOT, projectRoot = detectProjectRoot(siteRoot)) {
  verifyReleasePolicy(siteRoot);
  const first = renderManifest(buildReleaseManifest(siteRoot, projectRoot));
  const second = renderManifest(buildReleaseManifest(siteRoot, projectRoot));
  if (first !== second) fail('two consecutive manifests differ');
  return JSON.parse(first);
}

function writeManifest(manifest, manifestPath = MANIFEST_PATH) {
  mkdirSync(dirname(manifestPath), { recursive: true });
  writeFileSync(manifestPath, renderManifest(manifest), 'utf8');
}

function checkManifest(manifest, manifestPath = MANIFEST_PATH) {
  if (!existsSync(manifestPath)) fail(`generated manifest is missing at ${posixPath(relative(SITE_ROOT, manifestPath))}`);
  const expected = renderManifest(manifest);
  const actual = readFileSync(manifestPath, 'utf8');
  if (actual !== expected) fail('generated release manifest is stale');
}

export function runCli(args = process.argv.slice(2)) {
  const allowed = new Set(['--verify', '--write', '--check', '--stamp-editor']);
  for (const argument of args) if (!allowed.has(argument)) fail(`unknown option ${argument}`);
  const options = new Set(args.length ? args : ['--verify']);
  if (options.has('--stamp-editor')) {
    const publicRoot = join(SITE_ROOT, 'public');
    const path = join(publicRoot, 'editor.html');
    const editor = readFileSync(path, 'utf8');
    const stamped = stampEditorAssetUrls(editor, publicRoot);
    if (editor !== stamped) writeFileSync(path, stamped, 'utf8');
  }
  const manifest = verifyRepeatability();
  if (options.has('--write')) writeManifest(manifest);
  if (options.has('--check')) checkManifest(manifest);
  const action = options.has('--write') ? 'written' : options.has('--check') ? 'verified' : 'verified in memory';
  process.stdout.write(`Roomcraft release manifest ${action}: ${manifest.rootDigest} (${manifest.inputCount} inputs)\n`);
  return manifest;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    runCli();
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
