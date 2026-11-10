import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const site = fileURLToPath(new URL('../', import.meta.url));
const threeLicense = await readFile(new URL('../node_modules/three/LICENSE', import.meta.url), 'utf8');
await build({
  absWorkingDir: site,
  entryPoints: ['ha-local/roomcraft-storybook.mjs'],
  outfile: 'dist/ha-local/roomcraft-storybook.js',
  bundle: true,
  format: 'esm',
  target: 'es2022',
  minify: true,
  legalComments: 'inline',
  banner: {js: `/*! Three.js license\n${threeLicense}*/`}
});
