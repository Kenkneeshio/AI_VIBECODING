import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';
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
await build({
  absWorkingDir: site,
  entryPoints: ['ha-local/roomcraft-storybook.mjs'],
  outfile: 'dist/ha-local/roomcraft-storybook.js',
  bundle: true,
  format: 'esm',
  target: 'es2022',
  minify: true,
  legalComments: 'inline',
  banner: {js: notices.join('\n')}
});
