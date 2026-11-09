import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

export const engineSources = [
  'deterministic-core.js',
  'project-runtime.js',
  'render-contract.js',
  'verification-harness.js'
].map(name => readFileSync(new URL(`../public/engine/${name}`, import.meta.url), 'utf8'));

export function installRoomcraftEngine(window, globals = {}) {
  const context = { window, ...globals };
  for (const source of engineSources) runInNewContext(source, context);
  return window.RoomcraftEngine;
}
