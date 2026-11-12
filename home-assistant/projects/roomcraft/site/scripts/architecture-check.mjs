import {readFileSync, readdirSync, existsSync, statSync, writeFileSync} from 'node:fs';
import {dirname, extname, join, relative, resolve, sep} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import ts from 'typescript';

export const ARCHITECTURE_SITE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const DEFAULT_ARCHITECTURE_CONTRACT = JSON.parse(readFileSync(
  new URL('./architecture-contract.json', import.meta.url), 'utf8'));
const EXTENSIONS = new Set(['.js', '.mjs', '.ts', '.tsx', '.mts']);
const FORBIDDEN_GLOBALS = new Set([
  'document', 'navigator', 'location', 'localStorage', 'sessionStorage', 'hass',
  'fetch', 'XMLHttpRequest', 'WebSocket', 'customElements', 'requestAnimationFrame',
  'setTimeout', 'setInterval', 'Date',
]);
const FORBIDDEN_MEMBERS = new Set(['Math.random', 'Date.now', 'performance.now', 'crypto.randomUUID', 'crypto.getRandomValues', 'process.env']);
const HOSTS = new Set(['window', 'globalThis', 'root', 'self']);
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const portable = path => path.split(sep).join('/');

function filesUnder(root, directory) {
  const location = join(root, directory);
  if (!existsSync(location)) return [];
  const files = [];
  for (const entry of readdirSync(location, {withFileTypes: true})) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) files.push(...filesUnder(root, path));
    else if (entry.isFile() && EXTENSIONS.has(extname(path))) files.push(path);
  }
  return files;
}

function memberPath(node) {
  if (ts.isIdentifier(node)) return node.text;
  if (ts.isPropertyAccessExpression(node)) {
    const base = memberPath(node.expression);
    return base ? `${base}.${node.name.text}` : null;
  }
  if (ts.isElementAccessExpression(node) && node.argumentExpression && ts.isStringLiteralLike(node.argumentExpression)) {
    const base = memberPath(node.expression);
    return base ? `${base}.${node.argumentExpression.text}` : null;
  }
  return null;
}

function referenceIdentifier(node) {
  const parent = node.parent;
  if (ts.isPropertyAccessExpression(parent) && parent.name === node) return false;
  if ((ts.isPropertyAssignment(parent) || ts.isMethodDeclaration(parent) || ts.isPropertyDeclaration(parent)) && parent.name === node) return false;
  if (ts.isVariableDeclaration(parent) && parent.name === node) return false;
  if (ts.isParameter(parent) && parent.name === node) return false;
  return true;
}

/** Static source inspection only. It does not execute or type-check the application. */
export function inspectArchitectureSource(path, source, {pure = false} = {}) {
  const normalized = source.replace(/\r\n?/g, '\n');
  const tree = ts.createSourceFile(path, normalized, ts.ScriptTarget.Latest, true);
  const imports = [];
  const violations = [];
  const violationKeys = new Set();
  const violation = (node, code, detail) => {
    const line = tree.getLineAndCharacterOfPosition(node.getStart(tree)).line + 1;
    const key = `${line}:${code}:${detail}`;
    if (!violationKeys.has(key)) violations.push({path, line, code, detail});
    violationKeys.add(key);
  };
  const dependency = (node, specifier) => {
    if (specifier && ts.isStringLiteralLike(specifier)) imports.push(specifier.text);
    else if (pure) violation(node, 'DYNAMIC_ENGINE_IMPORT', 'Engine imports must use a literal module path');
  };
  function visit(node) {
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
      if (node.moduleSpecifier) dependency(node, node.moduleSpecifier);
    } else if (ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword || (ts.isIdentifier(node.expression) && node.expression.text === 'require'))) {
      dependency(node, node.arguments[0]);
    }
    if (pure) {
      const path = memberPath(node);
      if (ts.isIdentifier(node) && FORBIDDEN_GLOBALS.has(node.text) && referenceIdentifier(node)) {
        violation(node, 'ENGINE_CAPABILITY', `Forbidden ambient API ${node.text}`);
      } else if (ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node)) {
        const parts = path?.split('.') || [];
        const unhosted = HOSTS.has(parts[0]) ? parts.slice(1).join('.') : path;
        if ((HOSTS.has(parts[0]) && FORBIDDEN_GLOBALS.has(parts[1])) || FORBIDDEN_MEMBERS.has(unhosted)) {
          violation(node, 'ENGINE_CAPABILITY', `Forbidden ambient API ${path}`);
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return {
    lines: normalized.length ? normalized.replace(/\n$/, '').split('\n').length : 0,
    imports: [...new Set(imports)].sort(compare),
    violations,
  };
}

function resolveImport(siteRoot, sourcePath, specifier) {
  if (!specifier.startsWith('.')) return null;
  const base = resolve(siteRoot, dirname(sourcePath), specifier);
  const emittedSources = base.endsWith('.mjs') ? [base.slice(0, -4) + '.mts'] :
    base.endsWith('.js') ? [base.slice(0, -3) + '.ts', base.slice(0, -3) + '.tsx'] : [];
  const candidates = [base, ...emittedSources, ...['.ts', '.tsx', '.js', '.mjs', '.json'].map(extension => base + extension),
    ...['index.ts', 'index.tsx', 'index.js', 'index.mjs'].map(file => join(base, file))];
  const found = candidates.find(path => existsSync(path) && statSync(path).isFile());
  return found ? portable(relative(siteRoot, found)) : null;
}

export function buildArchitectureReport(siteRoot = ARCHITECTURE_SITE_ROOT, contract = DEFAULT_ARCHITECTURE_CONTRACT) {
  const paths = [...new Set(contract.sourceRoots.flatMap(root => filesUnder(siteRoot, root)))]
    .filter(path => !contract.exclude.includes(path) && !contract.excludeSuffixes.some(suffix => path.endsWith(suffix)))
    .sort(compare);
  const violations = [];
  const modules = paths.map(path => {
    const pure = contract.pureRoots.some(root => path.startsWith(root));
    const source = inspectArchitectureSource(path, readFileSync(join(siteRoot, path), 'utf8'), {pure});
    violations.push(...source.violations);
    const imports = source.imports.map(specifier => {
      const target = resolveImport(siteRoot, path, specifier);
      if (specifier.startsWith('.') && !target) {
        violations.push({path, code: 'MISSING_IMPORT', detail: `Cannot resolve ${specifier}`});
      }
      if (pure && (!target || !contract.pureRoots.some(root => target.startsWith(root)))) {
        violations.push({path, code: 'ENGINE_BOUNDARY', detail: `Engine must not import ${specifier}`});
      }
      return {specifier, ...(target ? {target} : {})};
    });
    const owner = contract.owners.find(owner => owner.files?.includes(path) || owner.prefixes?.some(prefix => path.startsWith(prefix)))?.id || 'unclassified';
    return {path, owner, lines: source.lines, imports};
  });
  for (const path of contract.entrypoints) {
    if (!modules.some(module => module.path === path)) violations.push({path, code: 'MISSING_ENTRYPOINT', detail: 'Required source entrypoint is missing or excluded'});
  }
  for (const edge of contract.requiredImports) {
    if (!modules.find(module => module.path === edge.from)?.imports.some(dependency => dependency.target === edge.to)) {
      violations.push({path: edge.from, code: 'SHARED_CONTRACT', detail: `${edge.reason}: missing direct import of ${edge.to}`});
    }
  }
  violations.sort((a, b) => compare(a.path, b.path) || (a.line || 0) - (b.line || 0) || compare(a.code, b.code) || compare(a.detail, b.detail));
  return {
    version: contract.version,
    scope: 'Authored JS/TS in configured roots; static imports and selected engine capabilities. Excludes generated bundles, tests, Python, CSS, assets, vendored UI and browser-global dependency edges.',
    limitations: 'Not a semantic purity or runtime-parity proof. Computed aliases, shadowed API names, injected callbacks and indirect dynamic dependencies require review and behavioral tests.',
    moduleCount: modules.length,
    totalLines: modules.reduce((total, module) => total + module.lines, 0),
    modules,
    violations,
  };
}

export function architectureReportJson(report) {
  return JSON.stringify(report, null, 2) + '\n';
}

function main(args) {
  const outputIndex = args.indexOf('--output');
  if (args.some((arg, index) => !['--json', '--check', '--output'].includes(arg) && !(outputIndex >= 0 && index === outputIndex + 1)) ||
      (outputIndex >= 0 && (!args[outputIndex + 1] || args[outputIndex + 1].startsWith('--')))) {
    throw new Error('Usage: node scripts/architecture-check.mjs [--check] [--json] [--output <file>]');
  }
  const report = buildArchitectureReport();
  if (outputIndex >= 0) writeFileSync(resolve(args[outputIndex + 1]), architectureReportJson(report));
  if (args.includes('--json')) process.stdout.write(architectureReportJson(report));
  else {
    console.log(`Architecture checked ${report.moduleCount} authored modules (${report.totalLines} lines).`);
    for (const issue of report.violations) console.error(`${issue.path}${issue.line ? `:${issue.line}` : ''} [${issue.code}] ${issue.detail}`);
    console.log(report.violations.length ? `${report.violations.length} architecture violations.` : 'Shared boundaries and selected engine capability checks passed.');
  }
  if (report.violations.length) process.exitCode = 1;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) main(process.argv.slice(2));
