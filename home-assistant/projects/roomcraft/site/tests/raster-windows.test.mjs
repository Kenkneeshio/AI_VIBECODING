import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import { installRoomcraftEngine } from './engine-loader.mjs';

const source = readFileSync(new URL('../public/raster-renderer.js', import.meta.url), 'utf8');

function renderer() {
  class ImageStub { addEventListener() {} }
  const window = { dispatchEvent() {} };
  installRoomcraftEngine(window);
  runInNewContext(source, { window, Image: ImageStub });
  return window.RoomcraftRasterRenderer;
}

function recordingCanvas() {
  const operations = [];
  const context = {
    operations,
    save() { operations.push(['save']); },
    restore() { operations.push(['restore']); },
    translate(x, y) { operations.push(['translate', x, y]); },
    rotate(angle) { operations.push(['rotate', angle]); },
    beginPath() {}, roundRect() {}, ellipse() {}, arc() {}, fill() {}, stroke() {},
    moveTo(x, y) { operations.push(['moveTo', x, y]); },
    lineTo(x, y) { operations.push(['lineTo', x, y]); },
    drawImage(image) { operations.push(['image', image.name]); },
    fillRect(x, y, width, height) {
      operations.push(['fill', this.fillStyle, x, y, width, height]);
    },
    createLinearGradient() {
      const stops = [];
      operations.push(['gradient', stops]);
      return { addColorStop(offset, color) { stops.push([offset, color]); } };
    },
    createRadialGradient() {
      const stops = [];
      return { addColorStop(offset, color) { stops.push([offset, color]); } };
    },
  };
  return context;
}

test('the seamless empty shell repairs source openings but renders no windows without scene items', () => {
  const raster = renderer();
  const canvas = recordingCanvas();
  const original = { name: 'original', complete: true, naturalWidth: 1536 };
  const shell = { name: 'shell', complete: true, naturalWidth: 1536 };
  const plan = { items: [], walls: [], rooms: [] };
  assert.equal(raster.draw(canvas, plan, plan, { original, shell }, () => {}), true);
  assert.deepEqual(canvas.operations.filter(([kind]) => kind === 'image'), [['image', 'shell']]);
  const positions = canvas.operations.filter(([kind]) => kind === 'translate')
    .map(([, x, y]) => [x, y]);
  assert.deepEqual(positions, []);
  assert.equal(canvas.operations.filter(([kind]) => kind === 'moveTo').length, 9 * 8);
  const glassStops = canvas.operations.flatMap(([kind, stops]) =>
    kind === 'gradient' ? stops.map(([, color]) => color) : []);
  assert.ok(!glassStops.includes('#547586'), 'no glass is rendered unless a window item exists');
});

test('a new editable window is painted above fixed openings at its own wall angle', () => {
  const raster = renderer();
  const canvas = recordingCanvas();
  const original = { name: 'original', complete: true, naturalWidth: 1536 };
  const shell = { name: 'shell', complete: true, naturalWidth: 1536 };
  const starter = { items: [], walls: [], rooms: [] };
  const project = { ...starter, items: [{ id: 'custom-window', type: 'window',
    x: 900, y: 400, w: 100, h: 28, rotation: 90 }] };
  assert.equal(raster.draw(canvas, project, starter, { original, shell }, () => {}), true);
  const positions = canvas.operations.filter(([kind]) => kind === 'translate')
    .map(([, x, y]) => [x, y]);
  assert.deepEqual(positions.at(-1), [900, 400]);
  assert.equal(positions.length, 1);
  assert.ok(Math.abs(canvas.operations.filter(([kind]) => kind === 'rotate').at(-1)[1] - Math.PI / 2) < 1e-10);
});

test('a corrupt canonical shell rejects export instead of hanging or changing render backends', async () => {
  const raster = renderer();
  const failed = { complete: true, naturalWidth: 0, src: 'empty-shell.png', addEventListener() {} };
  const ready = { complete: true, naturalWidth: 1536, src: 'floorplan.png', addEventListener() {} };
  await assert.rejects(
    raster.prepareExport({ rooms: [] }, { rooms: [] }, { original: ready, shell: failed, wallFree: ready }),
    /failed to decode/i
  );
});
