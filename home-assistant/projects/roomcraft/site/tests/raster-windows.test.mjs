import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import { installRoomcraftEngine } from './engine-loader.mjs';

const source = readFileSync(new URL('../public/raster-renderer.js', import.meta.url), 'utf8');

function renderer(document) {
  class ImageStub { addEventListener() {} }
  const window = { dispatchEvent() {} };
  installRoomcraftEngine(window);
  runInNewContext(source, { window, Image: ImageStub, document });
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
    scale(x, y) { operations.push(['scale', x, y]); },
    beginPath() {}, roundRect() {}, ellipse() {}, arc() {}, fill() {}, stroke() {},
    moveTo(x, y) { operations.push(['moveTo', x, y]); },
    lineTo(x, y) { operations.push(['lineTo', x, y]); },
    drawImage(image, ...args) { operations.push(['image', image.name, ...args]); },
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
  const images = canvas.operations.filter(([kind]) => kind === 'image');
  assert.deepEqual(images[0], ['image', 'shell', 0, 0, 1536, 1024]);
  assert.equal(images.length, 11, 'one grass fill and nine matching wall strips');
  assert.ok(images.every(([, name]) => name === 'shell'));
  assert.deepEqual(images[1], ['image', 'shell', 528, 150, 143, 17, 528, 150, 143, 17]);
  assert.ok(canvas.operations.some(([kind, x, y]) => kind === 'scale' && x === 1 && y === -1));
  assert.deepEqual(images.at(-1).slice(-4), [528, 183, 143, 31], 'wall-mounted hardware coverage');
  assert.equal(canvas.operations.filter(([kind]) => kind === 'moveTo').length, 0, 'no raised repair caps');
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
  assert.equal(positions.length, 2, 'grass repair plus the one editable window');
  assert.ok(Math.abs(canvas.operations.filter(([kind]) => kind === 'rotate').at(-1)[1] - Math.PI / 2) < 1e-10);
});

test('Design never paints the furnished reference while its shell loads', () => {
  const raster = renderer();
  const canvas = recordingCanvas();
  const plan = { rooms: [], walls: [], items: [] };
  const original = { name: 'furnished-reference', complete: true, naturalWidth: 1536 };
  const shell = { complete: false, naturalWidth: 0 };
  assert.equal(raster.draw(canvas, plan, plan, { original, shell }, () => {}), false);
  assert.deepEqual(canvas.operations, []);
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

test('editing kitchen and bath walls clears the full old caps and leaves retained walls alone', () => {
  const sourceCrops = [];
  const raster = renderer({
    createElement() {
      const context = recordingCanvas();
      context.drawImage = (image, x, y, w, h) => sourceCrops.push({ asset: image.name, x, y, w, h });
      return { name: 'wall-patch', getContext: () => context };
    },
  });
  const walls = [
    { id: 'w9', x1: 302, y1: 800, x2: 1485, y2: 800 },
    { id: 'w24', x1: 865, y1: 642, x2: 865, y2: 800 },
    { id: 'w32', x1: 615, y1: 550, x2: 615, y2: 800 },
    { id: 'w33', x1: 848, y1: 550, x2: 848, y2: 642 },
  ];
  const starter = { rooms: [], walls, items: [] };
  const images = Object.fromEntries(['original', 'shell', 'wallFree'].map(name =>
    [name, { name, complete: true, naturalWidth: 1536 }]));
  const unchanged = recordingCanvas();
  raster.draw(unchanged, starter, starter, images, () => {});
  assert.deepEqual(sourceCrops, []);
  assert.ok(unchanged.operations.filter(([kind]) => kind === 'image').every(([, name]) => name === 'shell'));

  const movedWall = { ...walls[2], x1: 700, x2: 700 };
  const edited = { ...starter, walls: [walls[0], walls[1], movedWall] };
  const awaitingRepairAsset = recordingCanvas();
  assert.equal(raster.draw(awaitingRepairAsset, edited, starter,
    { ...images, wallFree: { complete: false } }, () => {}), false);
  assert.deepEqual(awaitingRepairAsset.operations, []);

  const canvas = recordingCanvas();
  raster.draw(canvas, edited, starter, images, () => {});
  assert.ok(sourceCrops.every(crop => crop.asset === 'wallFree'));
  const repaired = (x, y) => sourceCrops.some(crop =>
    x >= crop.x && x < crop.x + crop.w && y >= crop.y && y < crop.y + crop.h);
  assert.ok(repaired(639, 720), 'displaced kitchen wall cap');
  assert.ok(repaired(942, 568), 'horizontal cap at the top of the bath wall');
  assert.ok(repaired(857, 621), 'vertical bath wall stem');
  assert.ok(!repaired(857, 711), 'retained wall below the junction');
  assert.ok(!repaired(639, 800), 'fixed exterior cap');
  assert.ok(canvas.operations.some(([kind, x, y]) => kind === 'moveTo' && x === 700 && y === 550),
    'moved wall is painted at the new coordinates');
});
