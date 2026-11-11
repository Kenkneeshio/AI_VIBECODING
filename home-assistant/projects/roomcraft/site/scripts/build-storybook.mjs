import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const site = fileURLToPath(new URL('../', import.meta.url));
async function notice(name, path, marker = null) {
  const source = await readFile(new URL(`../node_modules/${path}`, import.meta.url), 'utf8');
  const start = marker === null ? 0 : source.indexOf(marker);
  if (start < 0) throw new Error(`Missing license notice for ${name}`);
  return `/*! ${name}\n${source.slice(start).trim().replaceAll('*/', '* /')}\n*/`;
}
const notices = await Promise.all([
  notice('Three.js', 'three/LICENSE'),
  notice('polygon-clipping', 'polygon-clipping/LICENSE.md'),
  notice('robust-predicates', 'robust-predicates/LICENSE'),
  notice('splaytree', 'splaytree/Readme.md', 'The MIT License (MIT)'),
]);
const common = {
  absWorkingDir: site,
  bundle: true,
  target: 'es2022',
  minify: true,
  legalComments: 'inline',
  banner: {js: notices.join('\n')}
};
const editorPath = new URL('../public/storybook-editor.js', import.meta.url);
const editor = await build({
  ...common,
  entryPoints: ['ha-local/storybook-editor.mjs'],
  outfile: 'public/storybook-editor.js',
  format: 'iife',
  write: false,
});
if (process.argv.includes('--write-editor')) {
  await writeFile(editorPath, editor.outputFiles[0].contents);
} else {
  const current = await readFile(editorPath);
  if (!current.equals(Buffer.from(editor.outputFiles[0].contents))) {
    throw new Error('Editor 3D bundle is stale. Run node scripts/build-storybook.mjs --write-editor and stamp the editor assets.');
  }
}
if (!process.argv.includes('--check-editor') && !process.argv.includes('--write-editor')) {
  await build({
    ...common,
    entryPoints: ['ha-local/roomcraft-storybook.mjs'],
    outfile: 'dist/ha-local/roomcraft-storybook.js',
    format: 'esm',
  });
}
