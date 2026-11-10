import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import { installRoomcraftEngine } from './engine-loader.mjs';

const source = readFileSync(new URL('../public/raster-renderer.js', import.meta.url), 'utf8');

function fixture() {
  const window = { dispatchEvent() {} };
  const tile = [];
  const document = { createElement: () => ({
    getContext: () => ({ fillRect(...args) { tile.push([this.fillStyle, ...args]); } }),
  }) };
  class ImageStub { addEventListener() {} }
  installRoomcraftEngine(window);
  runInNewContext(source, { window, document, Image: ImageStub });
  return { renderer: window.RoomcraftRasterRenderer, tile };
}

function record() {
  const operations = [];
  const canvas = {
    fill() { operations.push(['fill', this.fillStyle]); },
    stroke() { operations.push(['stroke', this.strokeStyle, this.lineWidth]); },
    createLinearGradient(...args) {
      operations.push(['gradient', ...args]);
      return {
        addColorStop(...stop) { operations.push(['stop', ...stop]); },
      };
    },
    createPattern(tile, repeat) {
      operations.push(['texture', tile.width, tile.height, repeat]);
      return 'textile';
    },
  };
  for (const method of ['save', 'restore', 'translate', 'rotate', 'scale', 'beginPath',
    'roundRect', 'ellipse', 'arc', 'moveTo', 'lineTo', 'quadraticCurveTo', 'clip', 'fillRect']) {
    canvas[method] = (...args) => operations.push([method, ...args]);
  }
  return { canvas, operations };
}

function draw(renderer, rugStyle, geometry = {}) {
  const { canvas, operations } = record();
  const item = { id: 'rug', type: 'rug', x: 140, y: 150, w: 120, h: 90, rotation: 0, rugStyle, ...geometry };
  renderer.drawItem(canvas, item, { items: [] }, undefined, undefined,
    () => assert.fail('A rug must render without reference, floor, or fallback artwork'));
  return operations;
}

test('classic, floral and braided rugs use deterministic clipped textile without reference crops', () => {
  const { renderer, tile } = fixture();
  for (const [style, shape, ornament] of [
    ['classic', 'roundRect', 'quadraticCurveTo'],
    ['bedroom-floral', 'roundRect', 'arc'],
    ['office-round', 'ellipse', 'lineTo'],
  ]) {
    const operations = draw(renderer, style);
    assert.deepEqual(operations, draw(renderer, style));
    assert.ok(operations.some(([method]) => method === shape));
    assert.ok(operations.some(([method]) => method === ornament));
    const clip = operations.findIndex(([method]) => method === 'clip');
    const texture = operations.findIndex(([method]) => method === 'texture');
    assert.ok(clip >= 0 && texture > clip, 'yarn texture stays inside the rug silhouette');
    assert.deepEqual(operations[texture], ['texture', 32, 32, 'repeat']);
  }
  assert.ok(tile.length >= 128 && tile.length < 150, 'one tile is shared across all rugs and redraws');
});

test('moving, scaling or rotating a rug changes only its transform', () => {
  const { renderer } = fixture();
  const original = draw(renderer, 'bedroom-floral');
  const moved = draw(renderer, 'bedroom-floral', { x: 201, y: 455, w: 254, h: 240, rotation: 90 });
  assert.deepEqual(moved.slice(1, 4), [
    ['translate', 201, 455], ['rotate', Math.PI / 2], ['scale', 1, 1],
  ]);
  assert.deepEqual(moved.slice(4), original.slice(4));
  assert.deepEqual(draw(renderer, undefined), draw(renderer, 'classic'));
});
