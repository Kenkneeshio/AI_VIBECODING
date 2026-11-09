import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const art = readFileSync(new URL('../public/object-art.js', import.meta.url), 'utf8');
const raster = readFileSync(new URL('../public/raster-renderer.js', import.meta.url), 'utf8');
const app = readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');

test('dashboard artwork avoids GPU blur shadows that corrupt Android WebView exports', () => {
  for (const [name, source] of [['object art', art], ['raster renderer', raster], ['editor renderer', app]]) {
    assert.doesNotMatch(source, /\.shadowBlur\s*=/,
      `${name} must use deterministic layered shadows instead of canvas shadowBlur`);
  }
  assert.match(art, /Layered translucent shapes/);
  assert.match(raster, /offset stroke is the shadow/);
  assert.match(app, /Layered offset fills replace canvas shadowBlur/);
});
