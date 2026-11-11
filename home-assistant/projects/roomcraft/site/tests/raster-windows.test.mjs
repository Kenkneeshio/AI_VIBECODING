import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import test from 'node:test';
import {compileStorybookPlan} from '../ha-local/storybook-scene.mjs';
import {installRoomcraftEngine} from './engine-loader.mjs';

const source = readFileSync(new URL('../public/raster-renderer.js', import.meta.url), 'utf8');
const empty = {version: 2, editableReferenceVersion: 8, rooms: [], walls: [], items: []};
const noop = () => {};

function recordingCanvas() {
  const operations = [];
  let paths = [];
  let ring;
  const context = {
    operations,
    save() {}, restore() {}, scale() {}, roundRect() {}, ellipse() {}, arc() {},
    beginPath() { paths = []; },
    moveTo(x, y) { ring = [[x, y]]; paths.push(ring); },
    lineTo(x, y) { ring.push([x, y]); },
    quadraticCurveTo() {}, closePath() {},
    translate(x, y) { operations.push(['translate', x, y]); },
    rotate(angle) { operations.push(['rotate', angle]); },
    fill() { operations.push(['shape', this.fillStyle, paths]); },
    stroke() { operations.push(['stroke', this.strokeStyle, paths]); },
    drawImage() { assert.fail('Design must not paint any reference image'); },
    fillRect(x, y, w, h) { operations.push(['rect', this.fillStyle, x, y, w, h]); },
    strokeRect() {},
    createPattern() { return 'procedural pattern'; },
    createLinearGradient() { return {addColorStop: noop}; },
    createRadialGradient() { return {addColorStop: noop}; },
  };
  return context;
}

function renderer(compile) {
  const window = {RoomcraftPlanStructure: compile};
  const document = {createElement: () => ({getContext: recordingCanvas})};
  installRoomcraftEngine(window);
  runInNewContext(source, {window, document});
  return window.RoomcraftRasterRenderer;
}

const indoor = {
  id: 'room', surface: 'oak', points: [{x: 200, y: 400}, {x: 1200, y: 400}, {x: 1200, y: 720}, {x: 200, y: 720}],
};
const wall = {id: 'w9', x1: 200, y1: 400, x2: 1200, y2: 400};
const fence = {id: 'fence', kind: 'fence', x1: 200, y1: 360, x2: 520, y2: 360, finish: 'walnut'};

function wallCapAt(canvas, x, y) {
  const inside = ring => {
    let odd = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [ax, ay] = ring[i];
      const [bx, by] = ring[j];
      if ((ay > y) !== (by > y) && x < ax + (bx - ax) * (y - ay) / (by - ay)) odd = !odd;
    }
    return odd;
  };
  return canvas.operations.some(([kind, color, paths]) =>
    kind === 'shape' && color === '#514855' && paths.filter(inside).length % 2);
}

test('an empty Design paints only terrain when rooms, walls and objects are removed', () => {
  for (const compile of [undefined, compileStorybookPlan]) {
    const canvas = recordingCanvas();
    const raster = renderer(compile);
    assert.equal(raster.draw(canvas, empty, noop), true);
    assert.deepEqual(canvas.operations.filter(([kind]) => ['shape', 'stroke', 'rect'].includes(kind)),
      [['rect', 'procedural pattern', 0, 0, 1536, 1024]]);
  }
});

test('moving and deleting authored structure repaints 2D without old walls, fences or stairs', () => {
  const raster = renderer(compileStorybookPlan);
  const canvas = recordingCanvas();
  const stairs = {id: 'stairs', type: 'stairs', x: 180, y: 500, w: 80, h: 180, rotation: 0, steps: 7};
  const original = {...empty, rooms: [indoor], walls: [wall, fence], items: [stairs]};
  raster.draw(canvas, original, noop);
  assert.ok(wallCapAt(canvas, 450, 400), 'original exterior wall');
  assert.ok(canvas.operations.some(([kind, , paths]) =>
    kind === 'stroke' && paths[0]?.[0]?.[1] === fence.y1), 'authored rail');
  assert.ok(canvas.operations.some(([kind, x, y]) =>
    kind === 'translate' && x === stairs.x && y === stairs.y), 'authored stair');

  const edited = recordingCanvas();
  raster.draw(edited, {...original, walls: [{...wall, y1: 480, y2: 480}], items: []}, noop);
  assert.ok(!wallCapAt(edited, 450, 400), 'previous wall pixels are gone');
  assert.ok(wallCapAt(edited, 450, 480), 'moved wall paints only at new location');
  assert.ok(!edited.operations.some(([kind]) => kind === 'stroke'), 'removed fence stays gone');
  assert.ok(!edited.operations.some(([kind, x, y]) =>
    kind === 'translate' && x === stairs.x && y === stairs.y), 'removed stair stays gone');
});

test('2D stair draws its grade approach at local negative Y and distinct noses through the upper landing', () => {
  const item = {id: 'stairs', type: 'stairs', x: 160, y: 530, w: 80, h: 360, rotation: 90, steps: 12};
  const layout = {...empty, items: [item]};
  for (const compile of [undefined, compileStorybookPlan]) {
    const canvas = recordingCanvas();
    renderer(compile).draw(canvas, layout, noop);
    const stairDrawing = canvas.operations.slice(canvas.operations.findIndex(([kind, x, y]) => kind === 'translate' && x === item.x && y === item.y));
    const apronDepth = item.w * .47;
    assert.deepEqual(stairDrawing.slice(0, 3), [
      ['translate', 160, 530], ['rotate', Math.PI / 2],
      ['rect', '#a99c88', -40, -180 - apronDepth, 80, apronDepth],
    ]);
    assert.deepEqual(stairDrawing.filter(([kind, color]) => kind === 'rect' && color === '#806456')
      .map(([, , , y]) => y), Array.from({length: 12}, (_, index) => -180 + 30 * index));
  }
});

test('2D glazing uses the compiled solid-wall opening and disappears when removed', () => {
  const raster = renderer(compileStorybookPlan);
  const canvas = recordingCanvas();
  const glazing = {id: 'window', type: 'window', x: 900, y: 408, w: 100, h: 28, rotation: 0};
  const layout = {...empty, rooms: [indoor], walls: [wall, fence], items: [glazing]};
  raster.draw(canvas, layout, noop);
  assert.deepEqual(canvas.operations.find(([kind, x]) => kind === 'translate' && x === 900),
    ['translate', 900, 400], 'window aligns to the compiled wall centerline');
  assert.ok(!wallCapAt(canvas, 900, 400), 'opening cuts the wall cap');
  assert.ok(wallCapAt(canvas, 800, 400), 'neighboring wall cap remains');

  const edited = recordingCanvas();
  raster.draw(edited, {...layout, items: []}, noop);
  assert.ok(!edited.operations.some(([kind, x]) => kind === 'translate' && x === 900));
  assert.ok(wallCapAt(edited, 900, 400), 'wall cap closes as soon as the window is removed');
});
