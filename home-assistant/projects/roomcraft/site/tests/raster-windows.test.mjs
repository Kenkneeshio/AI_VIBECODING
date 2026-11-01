import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const source = readFileSync(new URL('../public/raster-renderer.js', import.meta.url), 'utf8');

function renderer() {
  class ImageStub { addEventListener() {} }
  const window = { dispatchEvent() {} };
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
    drawImage(image) { operations.push(['image', image.name]); },
    fillRect(x, y, width, height) {
      operations.push(['fill', this.fillStyle, x, y, width, height]);
    },
    createLinearGradient() {
      const stops = [];
      operations.push(['gradient', stops]);
      return { addColorStop(offset, color) { stops.push([offset, color]); } };
    },
  };
  return context;
}

test('fixed exterior windows are subdued top-down glazing, not restored cyan shell crops', () => {
  const raster = renderer();
  const canvas = recordingCanvas();
  const original = { name: 'original', complete: true, naturalWidth: 1536 };
  const shell = { name: 'shell', complete: true, naturalWidth: 1536 };
  const plan = { items: [], walls: [], rooms: [] };
  assert.equal(raster.draw(canvas, plan, plan, { original, shell }, () => {}), true);
  assert.deepEqual(canvas.operations.filter(([kind]) => kind === 'image'), [['image', 'original']]);
  const positions = canvas.operations.filter(([kind]) => kind === 'translate')
    .map(([, x, y]) => [x, y]);
  assert.deepEqual(positions, [
    [461, 201], [728, 201], [866.5, 201], [962.5, 201],
    [1227, 177], [1340, 177], [400, 316.5], [303.5, 709],
  ]);
  const rotations = canvas.operations.filter(([kind]) => kind === 'rotate')
    .map(([, angle]) => angle);
  assert.deepEqual(rotations.slice(0, 6), Array(6).fill(0));
  assert.ok(rotations.slice(6).every(angle => Math.abs(angle - Math.PI / 2) < 1e-10));
  const paintColors = canvas.operations.flatMap(([kind, value]) =>
    kind === 'fill' && typeof value === 'string' ? [value] : []);
  const glassStops = canvas.operations.flatMap(([kind, stops]) =>
    kind === 'gradient' ? stops.map(([, color]) => color) : []);
  assert.ok(paintColors.includes('#17242c'), 'dark recess covers the source cyan');
  assert.ok(glassStops.includes('#547586'), 'glazing remains visibly blue but subdued');
  assert.ok(!paintColors.concat(glassStops).some(color => /#(?:78b4d0|8bc3d9|9bc8d5)/i.test(color)));
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
  assert.equal(positions.length, 9);
  assert.ok(Math.abs(canvas.operations.filter(([kind]) => kind === 'rotate').at(-1)[1] - Math.PI / 2) < 1e-10);
});
