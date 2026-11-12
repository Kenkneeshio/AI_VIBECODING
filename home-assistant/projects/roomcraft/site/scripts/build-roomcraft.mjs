import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scripts = dirname(fileURLToPath(import.meta.url));
const steps = [
  [join(scripts, 'architecture-check.mjs'), '--check'],
  [join(scripts, 'build-storybook.mjs'), '--check-editor'],
  [join(scripts, 'roomcraft-release.mjs'), '--verify'],
  [join(scripts, 'run-framework.mjs'), 'build'],
  [join(scripts, 'build-storybook.mjs')],
  [join(scripts, 'roomcraft-release.mjs'), '--write', '--check']
];

for (const [script, ...args] of steps) {
  const result = spawnSync(process.execPath, [script, ...args], {
    cwd: join(scripts, '..'),
    env: process.env,
    stdio: 'inherit'
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
