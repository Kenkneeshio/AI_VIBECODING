import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import { installRoomcraftEngine } from './engine-loader.mjs';
import { compileStorybookPlan } from '../ha-local/storybook-scene.mjs';

const source = readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');
const controlsSource = readFileSync(new URL('../public/object-controls.js', import.meta.url), 'utf8');
const wallSources = ['wall-joins.js', 'reference-geometry.js', 'scene-settings.js'].map(name =>
  readFileSync(new URL(`../public/engine/${name}`, import.meta.url), 'utf8'));
const storageKey = 'roomcraft.second-floor.v2';
const crop = { x: 0, y: 80, width: 1536, height: 864 };

function boot(savedProject, dashboardRequest, options = {}) {
  const data = new Map([[storageKey, JSON.stringify(savedProject)]]);
  const listeners = new Map();
  const timers = new Map();
  let timerId = 0;
  const navigation = [];
  const location = {
    pathname: options.pathname || '/local/roomcraft/editor.html',
    origin: options.origin || 'http://ha.test',
    assign(url) { navigation.push(url); }
  };
  const gradient = { addColorStop() {} };
  const drawing = new Proxy({}, {
    get(target, key) {
      if (key === 'createPattern') return () => ({});
      if (key === 'createLinearGradient') return () => gradient;
      if (key === 'measureText') return () => ({ width: 10 });
      return target[key] ?? (() => {});
    },
    set(target, key, value) { target[key] = value; return true; }
  });
  function element(id = '') {
    return {
      id, style: {}, dataset: {}, classList: { add() {}, remove() {}, toggle() {} },
      addEventListener(name, fn) { listeners.set(`${id}:${name}`, fn); },
      removeEventListener(name, fn) { if (listeners.get(`${id}:${name}`) === fn) listeners.delete(`${id}:${name}`); },
      getContext() { return drawing; },
      toDataURL() { return 'data:image/png;base64,c3ludGhldGlj'; },
      getBoundingClientRect() { return { left: 0, top: 0, width: crop.width + 28, height: crop.height + 28 }; },
      querySelectorAll() { return []; },
      setPointerCapture() {}, setAttribute() {},
      appendChild() {}, remove() {}, focus() {},
      showModal() { this.open = true; }, close() { this.open = false; }
    };
  }
  const elements = new Map();
  const getElement = id => {
    if (!elements.has(id)) elements.set(id, element(id));
    return elements.get(id);
  };
  const document = {
    getElementById: getElement, createElement: () => element(),
    querySelectorAll: selector => selector === '[data-tool]'
      ? ['select','pan','room','wall','fence','erase','structure'].map(tool =>
        Object.assign(getElement(`tool:${tool}`), {dataset:{tool}}))
      : [],
    querySelector: () => element(),
    addEventListener() {}, body: element('body')
  };
  class ImageStub {
    complete = false;
    naturalWidth = 0;
    addEventListener() {}
  }
  const window = { addEventListener(name, fn) { listeners.set(`window:${name}`, fn); }, location, RoomcraftInventory: { templates: [
    {type:'fans-fan-light-white',label:'Ceiling fan with light · White',w:158,h:158,group:'fans',artFamily:'ceilingFan',form:'light',visualKind:'fan'},
    {type:'fans-five-blade-fan-white',label:'Five-blade ceiling fan · White',w:160,h:160,group:'fans',artFamily:'ceilingFan',form:'five',visualKind:'fan'}
  ], groups: [] },
    ...(dashboardRequest ? { RoomcraftDashboardBridge: { request: dashboardRequest } } : {}) };
  window.top = window;
  installRoomcraftEngine(window);
  for (const wallSource of wallSources) runInNewContext(wallSource, { window });
  runInNewContext(readFileSync(new URL('../public/control-actions.js', import.meta.url), 'utf8'), {window});
  runInNewContext(controlsSource, { window });
  if (options.fullInventory) runInNewContext(readFileSync(new URL('../public/inventory.js', import.meta.url), 'utf8'), {window});
  runInNewContext(readFileSync(new URL('../public/catalog-variants.js', import.meta.url), 'utf8'), {window});
  runInNewContext(readFileSync(new URL('../public/model-library.js', import.meta.url), 'utf8'), {window});
  const localStorage = {
    getItem(key) { return data.get(key) ?? null; },
    setItem(key, value) { data.set(key, value); },
    removeItem(key) { data.delete(key); }
  };
  runInNewContext(source, {
    document, window, location, URL, localStorage, Image: ImageStub,
    setTimeout(fn, delay) {
      const id = ++timerId;
      if (options.deferAutosave && delay === 250) timers.set(id, fn);
      else fn();
      return id;
    },
    clearTimeout(id) { timers.delete(id); },
    requestAnimationFrame(fn) { fn(); },
    AbortSignal, console
  });
  // Input arrives in the 16:9 cropped viewport; the saved item coordinates
  // stay in the original 1536 × 1024 house project.
  const event = (x, y) => ({ clientX: x - crop.x + 14, clientY: y - crop.y + 14, button: 0, pointerId: 1, preventDefault() {} });
  const pointer = (kind, x, y) => listeners.get(`planCanvas:${kind}`)(event(x, y));
  const read = () => JSON.parse(data.get(storageKey));
  return { pointer, read, elements, storage: data, navigation, window,
    dispatch: (id, kind, event) => listeners.get(`${id}:${kind}`)(event) };
}

test('the 3D mutation bridge preserves bindings and records one undoable move', () => {
  const scene = {version: 2, editableReferenceVersion: 6, rooms: [], walls: [], hotspots: [],
    items: [{id: 'synthetic-lamp', type: 'lamp', name: 'Example lamp', x: 520, y: 400,
      w: 48, h: 52, rotation: 0, entityId: 'light.example'}]};
  const editor = boot(scene);
  const bridge = editor.window.RoomcraftEditorViewport;
  const before = bridge.getProject();
  assert.equal(bridge.moveItem('synthetic-lamp', 600, 430), true);
  assert.equal(bridge.moveItem('synthetic-lamp', 600, 430), false);
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount, 1);
  const moved = bridge.getProject().items.find(item => item.id === 'synthetic-lamp');
  assert.equal(moved.x, 600);
  assert.equal(moved.entityId, 'light.example');
  editor.dispatch('undoButton', 'click', {});
  assert.deepEqual(bridge.getProject(), before);
  before.items[0].x = -1000;
  assert.notEqual(bridge.getProject().items[0].x, -1000);
});

test('stair treads use one undoable layout setting in Studio and the 3D Home plan', () => {
  const stair = {id:'test-stair', type:'stairs', name:'Exterior stairs', x:500, y:430, w:88, h:210, rotation:0};
  const editor = boot({version:2, editableReferenceVersion:10, rooms:[], walls:[], items:[stair], hotspots:[]});
  editor.window.RoomcraftEditorViewport.selectItem(stair.id);
  const input = value => ({target:{closest:selector => selector === '[data-prop]' ?
    {value, dataset:{prop:'steps'}} : null}});
  assert.match(editor.elements.get('inspectorContent').innerHTML, /Stair treads/);
  assert.equal(compileStorybookPlan(editor.read()).stairs[0].steps,14);
  editor.dispatch('inspectorContent','change',input('21'));
  const edited = editor.read();
  assert.equal(edited.items[0].steps,21);
  assert.equal(compileStorybookPlan(edited).stairs[0].steps,21);
  editor.dispatch('inspectorContent','change',input('41'));
  assert.deepEqual(editor.read(),edited);
  editor.dispatch('inspectorContent','change',{target:{closest:selector => selector === '[data-prop]' ?
    {value:'',validity:{badInput:true},dataset:{prop:'steps'}} : null}});
  assert.deepEqual(editor.read(),edited);
  assert.deepEqual(boot(edited).read().items[0],edited.items[0]);
  editor.dispatch('inspectorContent','change',input(''));
  assert.equal(editor.read().items[0].steps,undefined);
  editor.dispatch('undoButton','click',{});
  assert.deepEqual(editor.read(),edited);
});

test('catalog variants keep authored action targets and restore the Inspector after a blocked footprint', () => {
  const item = {id:'test-bed', type:'bedroom-platform-bed-queen-oak', name:'Guest bed', x:650, y:440,
    w:188, h:205, rotation:0, entityId:'switch.example', tapEntityId:'scene.example', visualKind:'none'};
  const cabinet = {id:'cabinet', type:'storageCabinet', name:'Cabinet', x:765, y:440, w:34, h:45, rotation:0};
  const editor = boot({version:2,editableReferenceVersion:10,rooms:[],walls:[],items:[item,cabinet],hotspots:[]},
    undefined, {fullInventory:true});
  editor.window.RoomcraftEditorViewport.selectItem(item.id);
  const choose = (value, variantKind) => editor.dispatch('inspectorContent','change',{
    target:{closest:selector => selector === '[data-variant]' ? {value,dataset:{variantKind}} : null},
  });
  choose('bedroom-platform-bed-queen-walnut','finish');
  const finished = editor.read().items[0];
  assert.deepEqual(finished,{...item,type:'bedroom-platform-bed-queen-walnut'});
  choose('bedroom-platform-bed-king-walnut','size');
  assert.deepEqual(editor.read().items[0],finished);
  assert.match(editor.elements.get('inspectorContent').innerHTML, /value="bedroom-platform-bed-queen-walnut" selected/);
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount,1);
  editor.dispatch('undoButton','click',{});
  assert.deepEqual(editor.read().items[0],item);
});

test('resizing the depth of a wall-mounted model keeps its center on the wall', () => {
  const sconce = {id:'wall-light',type:'wallSconce',name:'Wall light',x:510,y:400,w:36,h:50,rotation:0};
  const wall = {id:'wall',x1:410,y1:400,x2:690,y2:400};
  const editor = boot({version:2,editableReferenceVersion:10,rooms:[],walls:[wall],items:[sconce],hotspots:[]});
  editor.window.RoomcraftEditorViewport.selectItem(sconce.id);
  editor.pointer('pointerdown',535,432);
  editor.pointer('pointermove',535,457);
  editor.pointer('pointerup',535,457);
  assert.deepEqual(editor.read().items[0],{...sconce,h:75});
  editor.dispatch('undoButton','click',{});
  assert.deepEqual(editor.read().items[0],sconce);
});

test('new artwork and mirrors mount to the same wall in Studio and Home', () => {
  const wall = {id:'wall', x1:410, y1:400, x2:690, y2:400};
  const editor = boot({version:2, editableReferenceVersion:10, rooms:[], walls:[wall], items:[], hotspots:[]});
  const bridge = editor.window.RoomcraftEditorViewport;
  for (const [type, x] of [['artwork',490], ['mirror',610]]) {
    assert.equal(bridge.applyModelCommand({kind:'place',modelId:type}),true);
    assert.equal(bridge.placeAt(x,520),false);
    assert.equal(bridge.placeAt(x,412),true);
    const layout = editor.read();
    const item = layout.items.at(-1);
    assert.deepEqual([item.x,item.y,item.rotation],[x,400,0]);
    const projected = compileStorybookPlan(layout).placements.find(placement => placement.item.id === item.id);
    assert.equal(projected.x,x);
    assert.equal(projected.z,411);
    assert.ok(projected.mountY > 0);
  }
});

test('2D dragging and the Studio movement bridge preserve the last legal placement', () => {
  const fixture = (id, type, x, y, w, h) => ({id, type, name:id, x, y, w, h, rotation:0});
  const editor = boot({version:2, editableReferenceVersion:6, rooms:[], walls:[], hotspots:[], items:[
    fixture('dresser','dresser',280,350,102,72),
    fixture('bed','bed',520,350,122,152),
    fixture('lamp','lamp',160,350,48,48),
  ]});
  const bridge = editor.window.RoomcraftEditorViewport;
  assert.match(bridge.moveItemWarning('lamp', 520, 350), /bed/);
  assert.equal(bridge.moveItem('lamp', 520, 350), false);
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount, 0);
  editor.pointer('pointerdown', 160, 350);
  editor.pointer('pointermove', 280, 350);
  editor.pointer('pointermove', 520, 350);
  editor.pointer('pointerup', 520, 350);
  assert.equal(bridge.getProject().items.find(item => item.id === 'lamp').x, 280);
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount, 1);
});

test('Studio saves radar calibration through the Inspector and keeps live samples out of the layout', () => {
  const radar = {id:'radar', type:'presenceSwitch', name:'Radar', x:300, y:400, w:36, h:20, rotation:90};
  const project = {version:2, editableReferenceVersion:9, rooms:[], walls:[], items:[radar], hotspots:[]};
  const editor = boot(project);
  const bridge = editor.window.RoomcraftEditorViewport;
  bridge.selectItem(radar.id);
  const closest = (match, target) => selector => selector === match ? target : null;
  editor.dispatch('inspectorContent', 'change', {target:{closest:closest('[data-prop]', {
    dataset:{prop:'presenceTrackEntityId'}, value:'sensor.radar_targets',
  })}});
  for (const [id, value] of [['presence-track-scale', {value:'100'}], ['presence-track-lateral-scale', {value:'100'}],
    ['presence-track-heading', {value:'0'}], ['presence-track-skew', {value:'0'}],
    ['presence-track-flip', {checked:false}]]) editor.elements.set(id, value);
  editor.dispatch('inspectorContent', 'click', {target:{closest:closest('[data-action]', {
    dataset:{action:'calibrate-presence'},
  })}});
  const saved = editor.read();
  assert.equal(saved.items[0].presenceTrackEntityId, 'sensor.radar_targets');
  assert.deepEqual(saved.items[0].presenceTrackTransform, [0,-1,300,1,0,400]);
  bridge.setPersonPreview([{id:'sample', x:280, y:440}]);
  assert.deepEqual(editor.read(), saved);
  assert.deepEqual(boot(saved).read().items[0], saved.items[0]);
  editor.dispatch('undoButton', 'click', {});
  assert.equal(editor.read().items[0].presenceTrackTransform, undefined);
  assert.equal(editor.read().items[0].presenceTrackEntityId, 'sensor.radar_targets');
});

test('advanced radar alignment is a draft-only edit and preserves the fitted origin', () => {
  const radar = {id:'radar', type:'presenceSwitch', name:'Radar', x:300, y:400, w:36, h:20, rotation:90,
    presenceTrackEntityId:'sensor.fixture_radar', presenceTrackTransform:[0,-.8,305.5,1.2,.1,399.6]};
  const editor = boot({version:2, editableReferenceVersion:10, rooms:[], walls:[], items:[radar], hotspots:[]});
  editor.window.RoomcraftEditorViewport.selectItem(radar.id);
  for (const [id, value] of [['presence-track-scale', {value:'75'}], ['presence-track-lateral-scale', {value:'110'}],
    ['presence-track-heading', {value:'-60'}], ['presence-track-skew', {value:'10'}],
    ['presence-track-flip', {checked:true}]]) editor.elements.set(id, value);
  const before = editor.read();
  const action = dataset => ({target:{closest:selector => selector === '[data-action]' ? {dataset} : null}});
  editor.dispatch('inspectorContent', 'click', action({action:'align-presence'}));
  const updated = editor.read().items[0].presenceTrackTransform;
  assert.deepEqual([updated[2], updated[5]], [305.5, 399.6]);
  assert.ok(Math.abs(Math.hypot(updated[0],updated[3]) - 1.10) < 1e-9);
  assert.ok(Math.abs(Math.hypot(updated[1],updated[4]) - .75) < 1e-9);
  assert.ok(updated[0] * updated[4] - updated[1] * updated[3] < 0);
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount, 1);
  assert.deepEqual(boot(editor.read()).read().items[0].presenceTrackTransform, updated);
  editor.dispatch('undoButton', 'click', {});
  assert.deepEqual(editor.read(), before);
});

test('joining walls closes a T junction, keeps a doorway, and is one undoable edit', () => {
  const walls = [
    {id:'test-header', x1:500, y1:400, x2:700, y2:400, finish:'plaster'},
    {id:'test-jamb', x1:620, y1:413, x2:620, y2:490, finish:'sage'},
    {id:'test-after-door', x1:620, y1:542, x2:620, y2:602},
  ];
  const editor = boot({version:2, editableReferenceVersion:7, rooms:[], walls, items:[], hotspots:[]});
  const readWalls = () => editor.window.RoomcraftEditorViewport.getProject().walls;
  const before = readWalls();
  editor.dispatch('joinWallsButton', 'click', {});
  const joined = readWalls();
  assert.equal(joined.find(w => w.id === 'test-jamb').y1, 400);
  assert.equal(joined.find(w => w.id === 'test-jamb').finish, 'sage');
  assert.equal(joined.find(w => w.id === 'test-after-door').y1, 542);
  editor.dispatch('joinWallsButton', 'click', {});
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount, 1);
  editor.dispatch('undoButton', 'click', {});
  assert.deepEqual(readWalls(), before);
  editor.dispatch('tool:wall', 'click', {});
  editor.pointer('pointerdown', 680, 411);
  editor.pointer('pointermove', 680, 463);
  editor.pointer('pointerup', 680, 463);
  const added = readWalls().find(w => !before.some(prior => prior.id === w.id));
  assert.deepEqual([added.x1, added.y1, added.x2, added.y2], [680, 400, 680, 460]);
});

test('two taps draw a fence and exterior wall edits survive a reload', () => {
  const existing = {id:'w1', x1:500, y1:400, x2:700, y2:400, finish:'plaster'};
  const editor = boot({version:2, editableReferenceVersion:8, rooms:[], walls:[existing], items:[], hotspots:[]});
  const tap = (x,y) => {
    editor.pointer('pointerdown', x, y);
    editor.pointer('pointerup', x, y);
  };
  editor.dispatch('tool:fence', 'click', {});
  tap(600,410);
  assert.equal(editor.read().walls.length, 1);
  tap(600,543);
  const fence = editor.read().walls.find(segment => segment.kind === 'fence');
  assert.deepEqual([fence.x1,fence.y1,fence.x2,fence.y2], [600,400,600,540]);

  editor.dispatch('structureList', 'change', {target:{value:'w1'}});
  editor.dispatch('inspectorContent', 'change', {target:{closest: selector =>
    selector === '[data-prop]' ? {dataset:{prop:'x2'},value:'742'} : null}});
  assert.equal(editor.read().walls.find(segment => segment.id === 'w1').x2, 742);
  assert.equal(boot(editor.read()).read().walls.find(segment => segment.id === 'w1').x2, 742);
  editor.dispatch('inspectorContent', 'click', {target:{closest: selector =>
    selector === '[data-action]' ? {dataset:{action:'delete'}} : null}});
  assert.deepEqual(boot(editor.read()).read().walls,[fence]);
});

function upperDeckLayout() {
  const room = (id, coordinates) => ({id, outdoor:true, surface:'patio',
    points:coordinates.map(([x, y]) => ({x, y}))});
  return {
    version:2, editableReferenceVersion:8, hotspots:[],
    rooms:[
      room('reference-balcony', [[148,250],[400,250],[400,408],[342,468],[148,468]]),
      room('reference-porch', [[148,590],[248,590],[302,651],[302,882],[148,882]]),
      room('reference-landing', [[50,825],[149,825],[149,882],[50,882]]),
    ],
    walls:[
      {id:'w8', x1:302,y1:651,x2:302,y2:800},
      {id:'reference-balcony-fence', kind:'fence', finish:'graphite', x1:148,y1:250,x2:400,y2:250},
      {id:'reference-stair-fence', kind:'fence', finish:'graphite', x1:54,y1:192,x2:54,y2:825},
    ],
    items:[{id:'reference-stairs', type:'stairs', x:99, y:508.5, w:98, h:633, rotation:0, steps:14}],
  };
}

const migrateInStudio = layout => JSON.parse(JSON.stringify(
  boot(layout).window.RoomcraftEditorViewport.getProject()));

test('Studio migrates the dining group and lets a chair move, resize, delete, and reload independently', () => {
  const table = {id:'dining', type:'table', name:'Original dining table', x:460,y:650,w:172,h:108,rotation:0};
  const source = {version:2,editableReferenceVersion:9,rooms:[],walls:[],items:[table],hotspots:[]};
  const editor = boot(source);
  const bridge = editor.window.RoomcraftEditorViewport;
  const initial = JSON.parse(JSON.stringify(bridge.getProject()));
  assert.equal(initial.editableReferenceVersion, 10);
  const migratedTable = initial.items.find(item => item.id === table.id);
  assert.equal(migratedTable.type, 'diningTable');
  assert.equal(initial.items.filter(item => item.type === 'diningChair').length, 4);
  assert.deepEqual(migrateInStudio(initial), initial);
  const chair = initial.items.find(item => item.type === 'diningChair');
  assert.ok(bridge.moveItem(chair.id, 355, 574));
  bridge.selectItem(chair.id);
  editor.dispatch('inspectorContent','change',{target:{closest:selector => selector === '[data-prop]'
    ? {dataset:{prop:'w'},value:'39.75'} : null}});
  assert.equal(editor.read().items.find(item => item.id === chair.id).w, 39.75);
  assert.deepEqual(editor.read().items.find(item => item.id === table.id), migratedTable);
  editor.dispatch('inspectorContent','click',{target:{closest:selector => selector === '[data-action]'
    ? {dataset:{action:'delete'}} : null}});
  assert.equal(editor.read().items.some(item => item.id === chair.id), false);
  const reopened = boot(editor.read());
  assert.equal(reopened.read().items.filter(item => item.type === 'diningChair').length, 3);
  assert.equal(reopened.window.RoomcraftEditorViewport.applyModelCommand({kind:'place',modelId:'table'}), false);
  assert.equal(reopened.window.RoomcraftEditorViewport.applyModelCommand({kind:'place',modelId:'diningChair'}), true);
  assert.equal(reopened.window.RoomcraftEditorViewport.placeAt(620, 625), true);
  assert.equal(reopened.read().items.filter(item => item.type === 'diningChair').length, 4);
});

test('numeric object pose fields reject blank and blocked edits and journal exact coordinates', () => {
  const chair = {id:'seat',type:'diningChair',name:'Chair',x:260,y:350,w:34,h:26,rotation:0};
  const table = {id:'top',type:'diningTable',name:'Table',x:500,y:350,w:136,h:62,rotation:0};
  const editor = boot({version:2,editableReferenceVersion:10,rooms:[],walls:[],items:[chair,table],hotspots:[]});
  const bridge = editor.window.RoomcraftEditorViewport;
  bridge.selectItem(chair.id);
  const inspector = editor.elements.get('inspectorContent').innerHTML;
  assert.match(inspector, /Center X/);
  assert.match(inspector, /Center Y/);
  assert.match(inspector, /Rotation \(degrees\)/);
  const update = (prop, value) => editor.dispatch('inspectorContent','change',{target:{
    closest:selector => selector === '[data-prop]' ? {dataset:{prop},value} : null}});
  const pose = () => editor.read().items.find(item => item.id === chair.id);
  update('x','');
  update('y','Infinity');
  update('x','500');
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount, 0);
  assert.deepEqual(pose(), chair);
  update('x','266.25');
  update('y','351.5');
  update('rotation','450.125');
  assert.equal(editor.window.RoomcraftEditorEngine.inspect().commandCount, 3);
  assert.deepEqual([pose().x,pose().y,pose().rotation], [266.25,351.5,90.125]);
  editor.dispatch('undoButton', 'click', {});
  assert.deepEqual([pose().x,pose().y,pose().rotation], [266.25,351.5,0]);
});

test('revision 9 adds editable matching rails at the upper ledges while keeping both entrances and the stair head open', () => {
  const before = upperDeckLayout();
  const migrated = migrateInStudio(before);
  assert.equal(migrated.editableReferenceVersion, 10);
  assert.deepEqual(migrated.rooms, before.rooms);
  assert.deepEqual(migrated.items, before.items);
  assert.deepEqual(migrated.walls.slice(0,before.walls.length), before.walls);
  const additions = migrated.walls.slice(before.walls.length);
  assert.ok(additions.every(wall => wall.kind === 'fence' && wall.finish === 'graphite'));
  assert.deepEqual(additions.map(({id,x1,y1,x2,y2}) => [id,x1,y1,x2,y2]), [
    ['reference-balcony-west-rail',148,250,148,468],
    ['reference-porch-west-rail',148,590,148,825],
    ['reference-porch-south-rail',148,882,302,882],
    ['reference-porch-east-rail',302,800,302,882],
    ['reference-landing-west-rail',54,825,54,882],
    ['reference-landing-south-rail',54,882,148,882],
  ]);
  const {fences} = compileStorybookPlan(migrated);
  for (const fence of fences) {
    assert.equal(fence.base1, fence.id === 'reference-stair-fence' ? -108 : 0);
    assert.equal(fence.base2, 0);
    assert.equal(fence.color, fences[0].color);
    assert.equal(fence.postColor, fences[0].postColor);
  }

  const edited = {...migrated, walls: migrated.walls.filter(wall => wall.id !== 'reference-porch-west-rail')};
  assert.deepEqual(migrateInStudio(edited), edited, 'a later removal remains removed');
});

test('revision 9 respects a customized deck, nearby authored rail, and an edited stock ID', () => {
  const authored = upperDeckLayout();
  authored.rooms[0].points[0].x += 24;
  authored.walls.push(
    {id:'my-porch-rail', kind:'fence', finish:'sage', x1:151,y1:610,x2:151,y2:780},
    {id:'reference-porch-east-rail', kind:'fence', finish:'walnut', x1:290,y1:810,x2:290,y2:882},
  );
  const migrated = migrateInStudio(authored);
  assert.deepEqual(migrated.walls.slice(0,authored.walls.length), authored.walls);
  assert.ok(!migrated.walls.some(wall => wall.id === 'reference-balcony-west-rail' ||
    wall.id === 'reference-porch-west-rail'));
  assert.equal(migrated.walls.filter(wall => wall.id === 'reference-porch-east-rail').length, 1);
});

test('reference geometry repair reorients only the original bed and keeps its binding', () => {
  const bed = {id:'i6', type:'bed', name:'My bed', x:1331, y:373, w:213, h:194, rotation:0, entityId:'switch.example'};
  const from = items => boot({version:2, editableReferenceVersion:6, rooms:[], walls:[], items, hotspots:[]})
    .window.RoomcraftEditorViewport.getProject();
  const repaired = from([bed]);
  assert.equal(repaired.editableReferenceVersion, 10);
  assert.equal(repaired.items[0].rotation, 90);
  assert.equal(repaired.items[0].entityId, 'switch.example');
  const custom = from([{...bed, x:1300, rotation:15}]);
  assert.equal(custom.items[0].x, 1300);
  assert.equal(custom.items[0].rotation, 15);
});

test('the same scene and edit sequence produce the same object ID and engine evidence', () => {
  const initial = { version: 2, editableReferenceVersion: 4, rooms: [], walls: [], items: [], hotspots: [] };
  const placeCamera = () => {
    const editor = boot(initial);
    editor.dispatch('objectsPanel', 'click', {
      target: { closest: () => ({ dataset: { template: 'cameraThumbnail' } }) }
    });
    editor.pointer('pointerdown', 260, 390);
    return { id: editor.read().items.find(i => i.type === 'cameraThumbnail').id,
      evidence: editor.window.RoomcraftEditorEngine.inspect() };
  };
  const first = placeCamera();
  const second = placeCamera();
  assert.equal(first.id, second.id);
  assert.deepEqual(JSON.parse(JSON.stringify(first.evidence)),JSON.parse(JSON.stringify(second.evidence)));
  assert.equal(first.evidence.engineVersion, '1.0.0');
  assert.equal(first.evidence.roundTripStable, true);
  assert.equal(first.evidence.commandCount, 1);
});

test('an authoritative replacement registers imported IDs before the next allocation', async () => {
  const initial={version:2,editableReferenceVersion:4,rooms:[],walls:[],items:[],hotspots:[]};
  const probe=boot(initial);
  probe.dispatch('objectsPanel','click',{target:{closest:()=>({dataset:{template:'cameraThumbnail'}})}});
  probe.pointer('pointerdown',260,390);
  const importedId=probe.read().items.find(item=>item.type==='cameraThumbnail').id;
  const remote={...initial,items:[{id:importedId,type:'chair',name:'Imported chair',x:500,y:500,w:48,h:48,rotation:0,entityId:''}]};
  const editor=boot(initial,async()=>({revision:'id-collision-check',project:remote,hotspots:[]}));
  await new Promise(resolve=>setImmediate(resolve));
  editor.dispatch('objectsPanel','click',{target:{closest:()=>({dataset:{template:'cameraThumbnail'}})}});
  editor.pointer('pointerdown',260,390);
  const ids=editor.read().items.map(item=>item.id);
  assert.equal(new Set(ids).size,ids.length);
  assert.notEqual(editor.read().items.find(item=>item.type==='cameraThumbnail').id,importedId);
});

test('the same authoritative import resets different local ID histories to one branch', async () => {
  const initial={version:2,editableReferenceVersion:4,rooms:[],walls:[],items:[],hotspots:[]};
  const authoritative={version:2,editableReferenceVersion:4,rooms:[],walls:[],items:[
    {id:'authoritative-chair',type:'chair',name:'Chair',x:500,y:500,w:48,h:48,rotation:0,entityId:''}
  ],hotspots:[]};
  const importThenPlace=async localPlacements=>{
    let requestCount=0;
    const editor=boot(initial,async()=>{
      requestCount++;
      if(requestCount===1)throw new Error('Keep the local draft for this test');
      return {revision:'authoritative-layout',project:authoritative,hotspots:[]};
    });
    await new Promise(resolve=>setImmediate(resolve));
    for(let index=0;index<localPlacements;index++){
      editor.dispatch('objectsPanel','click',{target:{closest:()=>({dataset:{template:'cameraThumbnail'}})}});
      editor.pointer('pointerdown',260+index,390);
    }
    const importing=editor.dispatch('importDashboardButton','click',{});
    await new Promise(resolve=>setImmediate(resolve));
    editor.dispatch('confirmationAccept','click',{});
    await importing;
    editor.dispatch('objectsPanel','click',{target:{closest:()=>({dataset:{template:'cameraThumbnail'}})}});
    editor.pointer('pointerdown',260,390);
    return editor.read().items.find(item=>item.type==='cameraThumbnail').id;
  };
  assert.equal(await importThenPlace(1),await importThenPlace(4));
});

test('undo and redo reseed IDs from the project they restore', async () => {
  const projectA={version:2,editableReferenceVersion:4,rooms:[],walls:[],items:[
    {id:'project-a-chair',type:'chair',name:'A chair',x:450,y:500,w:48,h:48,rotation:0,entityId:''}
  ],hotspots:[]};
  const projectB={version:2,editableReferenceVersion:4,rooms:[],walls:[],items:[
    {id:'project-b-chair',type:'chair',name:'B chair',x:550,y:500,w:48,h:48,rotation:0,entityId:''}
  ],hotspots:[]};
  const placeCamera=editor=>{
    editor.dispatch('objectsPanel','click',{target:{closest:()=>({dataset:{template:'cameraThumbnail'}})}});
    editor.pointer('pointerdown',260,390);
    return editor.read().items.find(item=>item.type==='cameraThumbnail').id;
  };
  const freshA=placeCamera(boot(projectA));
  const freshB=placeCamera(boot(projectB));
  const importB=async()=>{
    let requestCount=0;
    const editor=boot(projectA,async()=>{
      requestCount++;
      if(requestCount===1)throw new Error('Keep A until the explicit import');
      return {revision:'project-b',project:projectB,hotspots:[]};
    });
    await new Promise(resolve=>setImmediate(resolve));
    const importing=editor.dispatch('importDashboardButton','click',{});
    await new Promise(resolve=>setImmediate(resolve));
    editor.dispatch('confirmationAccept','click',{});
    await importing;
    return editor;
  };
  const undone=await importB();
  undone.dispatch('undoButton','click',{});
  assert.equal(placeCamera(undone),freshA);

  const redone=await importB();
  redone.dispatch('undoButton','click',{});
  redone.dispatch('redoButton','click',{});
  assert.equal(placeCamera(redone),freshB);
});

test('editor journal checkpoints after 70 edits and replays the bounded segment', () => {
  const initial={version:2,editableReferenceVersion:4,rooms:[],walls:[],items:[],hotspots:[]};
  const editor=boot(initial);
  const placeCamera=index=>{
    editor.dispatch('objectsPanel','click',{target:{closest:()=>({dataset:{template:'cameraThumbnail'}})}});
    editor.pointer('pointerdown',260+(index%10),390+Math.floor(index/10));
  };
  for(let index=0;index<71;index++)placeCamera(index);
  const checkpoint=editor.read();
  let evidence=editor.window.RoomcraftEditorEngine.inspect();
  assert.equal(evidence.checkpointCount,1);
  assert.equal(evidence.commandCount,0);
  assert.equal(checkpoint.items.filter(item=>item.type==='cameraThumbnail').length,71);

  placeCamera(71);
  const finalProject=editor.read();
  evidence=editor.window.RoomcraftEditorEngine.inspect();
  assert.equal(evidence.checkpointCount,1);
  assert.equal(evidence.commandCount,1);
  const replay=editor.window.RoomcraftEngine.commands.replay({
    initialState:checkpoint,
    log:editor.window.RoomcraftEditorEngine.exportCommandLog(),
    reducer:(state,command)=>command.type==='scene.replace'?command.payload.project:state
  });
  assert.equal(replay.finalHash,editor.window.RoomcraftEngine.fingerprint(finalProject));
  assert.equal(finalProject.items.filter(item=>item.type==='cameraThumbnail').length,72);
});

test('a malformed optional layer order is rejected before the first render', () => {
  const editor=boot({version:2,editableReferenceVersion:4,rooms:[],walls:[],hotspots:[],items:[
    {id:'bad-z',type:'chair',name:'Bad layer',x:500,y:500,w:48,h:48,rotation:0,zIndex:'front',entityId:''}
  ]});
  assert.equal(editor.window.RoomcraftEditorEngine.renderPlan().operations.some(operation=>operation.id==='bad-z'),false);
});

test('migrates a saved plan into movable lamp and room fixtures without duplicating them', () => {
  const old = { version: 2, rooms: [], walls: [], items: [], hotspots: [] };
  const editor = boot(old);
  editor.pointer('pointerdown', 1443, 476);
  editor.pointer('pointermove', 1393, 516);
  editor.pointer('pointerup', 1393, 516);
  const migrated = editor.read();
  assert.equal(migrated.editableReferenceVersion, 10);
  assert.equal(migrated.items.filter(i => i.id === 'i14').length, 1);
  assert.equal(migrated.items.filter(i => i.id.startsWith('fixture-')).length, 7);
  assert.equal(migrated.items.find(i => i.id === 'office-desk-lamp')?.type, 'lamp');
  assert.equal(migrated.items.some(i => i.id === 'fixture-study'), false);
  assert.equal(migrated.items.filter(i => i.type.startsWith('ui')).length, 6);
  assert.deepEqual(
    migrated.items.filter(i => ['office-credenza','master-nightstand','master-low-dresser'].includes(i.id))
      .map(i => i.id).sort(),
    ['master-low-dresser','master-nightstand','office-credenza']
  );
  assert.equal(migrated.items.filter(i => i.type === 'rug').length, 3);
  assert.equal(migrated.items.filter(i => i.type === 'window').length, 8);
  assert.ok(migrated.items.some(i => i.id === 'kitchen-worktop'));
  assert.ok(migrated.items.some(i => i.id === 'living-wall-unit'));
  assert.equal(migrated.items.find(i => i.id === 'i14').x, 1393);

  const reopened = boot(migrated);
  reopened.pointer('pointerdown', 1393, 516);
  reopened.pointer('pointermove', 1373, 516);
  reopened.pointer('pointerup', 1373, 516);
  assert.equal(reopened.read().items.filter(i => i.id === 'i14').length, 1);
  assert.equal(reopened.read().items.filter(i => i.id.startsWith('fixture-')).length, 7);
  assert.equal(reopened.read().items.filter(i => i.id === 'office-desk-lamp').length, 1);
});

test('remove all objects stays empty after reload and restore rebuilds the complete reference scene', async () => {
  const editor = boot({ version: 2, editableReferenceVersion: 4, rooms: [], walls: [], items: [], hotspots: [] });
  const removing = editor.dispatch('clearObjectsButton', 'click', {});
  await new Promise(resolve => setImmediate(resolve));
  editor.dispatch('confirmationAccept', 'click', {});
  await removing;
  const empty = editor.read();
  assert.equal(empty.editableReferenceVersion, 10);
  assert.equal(empty.items.length, 0);

  const reopened = boot(empty);
  assert.equal(reopened.read().items.length, 0, 'v5 must not respawn deliberately removed objects');
  reopened.dispatch('restoreFurnishingsButton', 'click', {});
  const restored = reopened.read();
  assert.equal(restored.items.filter(i => i.type === 'rug').length, 3);
  assert.equal(restored.items.filter(i => i.type === 'window').length, 8);
  assert.ok(restored.items.some(i => i.id === 'kitchen-worktop'));
  assert.ok(restored.items.some(i => i.id === 'fixture-living'));
  assert.ok(restored.items.some(i => i.id === 'ui-edit-layout'));
  assert.ok(restored.items.some(i => i.id === 'living-wall-unit'));
});

test('v6 owns the final shell object and separates fan, fan light, and detached garage', () => {
  const v5 = { version: 2, editableReferenceVersion: 5, rooms: [], walls: [], hotspots: [], items: [
    {id:'fan',type:'fans-fan-light-white',name:'Dining ceiling fan',x:445,y:682,w:124,h:124,rotation:0,entityId:'switch.fan'},
    {id:'fan-light',type:'controlZone',name:'Dining fan light',x:445,y:682,w:42,h:42,rotation:0,entityId:'switch.light'},
    {id:'garage',type:'garageDoor',name:'Garage door',x:306,y:106,w:116,h:52,rotation:0,entityId:'cover.garage'}
  ] };
  const editor=boot(v5);
  const migrated = editor.window.RoomcraftEditorViewport.getProject();
  assert.equal(migrated.editableReferenceVersion, 10);
  assert.equal(migrated.items.filter(i => i.id === 'living-wall-unit').length, 1);
  assert.equal(migrated.items.find(i=>i.id==='fan').type,'fans-five-blade-fan-white');
  assert.deepEqual(
    ['type','visualKind','lightForm','w','h'].map(key=>migrated.items.find(i=>i.id==='fan-light')[key]),
    ['ceilingLight','light','bloom_ceiling',46,46]
  );
  assert.deepEqual(['x','y','w','h'].map(key=>migrated.items.find(i=>i.id==='garage')[key]),[306,112,132,92]);
  migrated.items = migrated.items.filter(i => i.id !== 'living-wall-unit');
  assert.equal(boot(migrated).read().items.some(i => i.id === 'living-wall-unit'), false);
});

test('a deliberately removed migrated lamp is not respawned on a later load', () => {
  const old = { version: 2, rooms: [], walls: [], items: [], hotspots: [] };
  const editor = boot(old);
  editor.pointer('pointerdown', 1443, 476);
  editor.pointer('pointermove', 1393, 516);
  editor.pointer('pointerup', 1393, 516);
  const migrated = editor.read();
  migrated.items = migrated.items.filter(i => i.id !== 'i14');
  const reopened = boot(migrated);
  reopened.pointer('pointerdown', 660, 330);
  reopened.pointer('pointermove', 675, 345);
  reopened.pointer('pointerup', 675, 345);
  assert.equal(reopened.read().items.some(i => i.id === 'i14'), false);
});

test('v4 corrects only the shipped shallow office layouts', () => {
  for (const variant of [
    { desk: [923, 273, 196, 85], chair: [978, 310, 47, 47] },
    { desk: [924, 278, 196, 85], chair: [975, 322, 47, 47] }
  ]) {
    const editor = boot({
      version: 2, editableReferenceVersion: 3, rooms: [], walls: [], hotspots: [],
      items: [
        { id: 'i4', type: 'desk', name: 'Study desk', x: variant.desk[0], y: variant.desk[1], w: variant.desk[2], h: variant.desk[3], rotation: 0, entityId: '' },
        { id: 'i5', type: 'chair', name: 'Desk chair', x: variant.chair[0], y: variant.chair[1], w: variant.chair[2], h: variant.chair[3], rotation: 0, entityId: '' }
      ]
    });
    // Persist the migrated in-memory project by moving an unrelated v4 support
    // item; the editor deliberately does not rewrite storage just by opening.
    editor.pointer('pointerdown', 1443, 529);
    editor.pointer('pointermove', 1447, 529);
    editor.pointer('pointerup', 1447, 529);
    const migrated = editor.read();
    const desk = migrated.items.find(i => i.id === 'i4');
    const chair = migrated.items.find(i => i.id === 'i5');
    assert.deepEqual([desk.x, desk.y, desk.w, desk.h, desk.rotation], [930, 312, 245, 156, 0]);
    assert.deepEqual([chair.x, chair.y, chair.w, chair.h, chair.rotation], [978, 310, 47, 47, 0]);
  }
});

test('v4 preserves an owner-customized office desk and chair', () => {
  const customDesk = { id: 'i4', type: 'desk', name: 'Study desk', x: 890, y: 350, w: 220, h: 132, rotation: 90, entityId: '' };
  const customChair = { id: 'i5', type: 'chair', name: 'Desk chair', x: 1020, y: 370, w: 52, h: 48, rotation: 15, entityId: '' };
  const editor = boot({
    version: 2, editableReferenceVersion: 3, rooms: [], walls: [], hotspots: [],
    items: [customDesk, customChair]
  });
  editor.pointer('pointerdown', 1443, 529);
  editor.pointer('pointermove', 1447, 529);
  editor.pointer('pointerup', 1447, 529);
  const migrated = editor.read();
  const desk = migrated.items.find(i => i.id === 'i4');
  const chair = migrated.items.find(i => i.id === 'i5');
  assert.deepEqual([desk.x, desk.y, desk.w, desk.h, desk.rotation], [890, 350, 220, 132, 90]);
  assert.deepEqual([chair.x, chair.y, chair.w, chair.h, chair.rotation], [1020, 370, 52, 48, 15]);
});

test('the lamp corner handle resizes from the opposite anchored corner', () => {
  const editor = boot({ version: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.pointer('pointerdown', 1443, 476);
  editor.pointer('pointerup', 1443, 476);
  editor.pointer('pointerdown', 1474, 513);
  editor.pointer('pointermove', 1494, 523);
  editor.pointer('pointerup', 1494, 523);
  const lamp = editor.read().items.find(i => i.id === 'i14');
  assert.equal(lamp.w, 68);
  assert.equal(lamp.h, 70);
  assert.equal(lamp.x, 1453);
  assert.equal(lamp.y, 481);
});

test('camera palette places an editable latest-event thumbnail', () => {
  const editor = boot({ version: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.dispatch('objectsPanel', 'click', {
    target: { closest: () => ({ dataset: { template: 'cameraThumbnail' } }) }
  });
  editor.pointer('pointerdown', 260, 390);
  const camera = editor.read().items.find(i => i.type === 'cameraThumbnail');
  assert.ok(camera);
  assert.equal(camera.previewMode, 'event');
  assert.equal(camera.x, 260);
  assert.equal(camera.y, 390);
  assert.equal(camera.w, 170);
  assert.equal(camera.h, 110);
});

test('reference migration places the uniform interface controls in the bottom row', () => {
  const editor = boot({ version: 2, editableReferenceVersion: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.dispatch('objectsPanel', 'click', {
    target: { closest: () => ({ dataset: { template: 'cameraThumbnail' } }) }
  });
  editor.pointer('pointerdown', 260, 390);
  const controls = Object.fromEntries(editor.read().items
    .filter(item => ['uiEdit', 'uiStatusAir', 'uiStatusElectrical'].includes(item.type))
    .map(item => [item.type, item]));
  assert.deepEqual([controls.uiEdit.x, controls.uiEdit.y, controls.uiEdit.w, controls.uiEdit.h], [1350, 864, 48, 48]);
  assert.deepEqual([controls.uiStatusAir.x, controls.uiStatusAir.y, controls.uiStatusAir.w, controls.uiStatusAir.h], [1410, 864, 48, 48]);
  assert.deepEqual([controls.uiStatusElectrical.x, controls.uiStatusElectrical.y,
    controls.uiStatusElectrical.w, controls.uiStatusElectrical.h], [1470, 864, 48, 48]);
});

test('office window fan can be placed away from a wall', () => {
  const editor = boot({ version: 2, editableReferenceVersion: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.dispatch('objectsPanel', 'click', {
    target: { closest: () => ({ dataset: { template: 'windowFan' } }) }
  });
  editor.pointer('pointerdown', 1015, 335);
  const fan = editor.read().items.find(i => i.type === 'windowFan');
  assert.ok(fan);
  assert.equal(fan.x, 1015);
  assert.equal(fan.y, 335);
});

test('clean export omits bound stateful art so the live control renders it once', () => {
  assert.match(source, /clean&&validEntityId\(o\.entityId\)/);
  assert.match(source, /isFixtureControl\(o\)\|\|\s*\['ceilingFan','robotVacuum'\]/);
  assert.match(source, /\['humidifier','airPurifier'\]\.includes\(o\.type\)/);
});

test('existing objects gain configurable dashboard button actions without a migration', () => {
  const editor = boot({
    version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair-control', type: 'chair', name: 'Reading chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }]
  });
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointerup', 500, 500);
  const inspector = editor.elements.get('inspectorContent');
  assert.match(inspector.innerHTML, /DASHBOARD BUTTON/);
  assert.match(inspector.innerHTML, /State entity/);
  assert.match(inspector.innerHTML, /Automatic for entity/);
  const change = (key, value) => editor.dispatch('inspectorContent', 'change', {
    target: { closest: selector => selector === '[data-prop]' ? { dataset: { prop: key }, value } : null }
  });
  change('entityId', 'light.example_chair');
  change('controlLabel', 'Reading light');
  change('controlIcon', 'mdi:floor-lamp');
  change('tapAction', 'more-info');
  change('holdAction', 'none');
  const chair = editor.read().items.find(i => i.id === 'chair-control');
  assert.equal(chair.entityId, 'light.example_chair');
  assert.equal(chair.controlLabel, 'Reading light');
  assert.equal(chair.controlIcon, 'mdi:floor-lamp');
  assert.equal(chair.tapAction, 'more-info');
  assert.equal(chair.holdAction, 'none');
  assert.match(editor.elements.get('hotspotList').innerHTML, /light.example_chair/);
  change('controlIcon', 'https://example.com/icon.svg');
  assert.equal(editor.read().items.find(i => i.id === 'chair-control').controlIcon, 'mdi:floor-lamp');
  change('tapAction', 'auto');
  assert.equal('tapAction' in editor.read().items.find(i => i.id === 'chair-control'), false);
});

test('invisible button areas can be placed over artwork and saved with a device action', () => {
  const editor = boot({ version: 2, editableReferenceVersion: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.dispatch('objectsPanel', 'click', {
    target: { closest: () => ({ dataset: { template: 'controlZone' } }) }
  });
  editor.pointer('pointerdown', 450, 200);
  const zone = editor.read().items.find(i => i.type === 'controlZone');
  assert.ok(zone);
  assert.equal(zone.w, 120);
  assert.equal(zone.h, 72);
  assert.match(editor.elements.get('inspectorContent').innerHTML, /outline appears only while editing/);
  editor.dispatch('inspectorContent', 'change', {
    target: { closest: selector => selector === '[data-prop]' ? { dataset: { prop: 'entityId' }, value: 'cover.example_window' } : null }
  });
  assert.equal(editor.read().items.find(i => i.id === zone.id).entityId, 'cover.example_window');
});

test('linked objects stay within exportable canvas bounds while decorative items remain free', () => {
  const editor = boot({
    version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'movable-button', type: 'chair', name: 'Device button', x: 500, y: 500, w: 100, h: 100,
      rotation: 0, entityId: 'light.example_device' }]
  });
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', -100, -100);
  editor.pointer('pointerup', -100, -100);
  let item = editor.read().items.find(i => i.id === 'movable-button');
  assert.equal(item.x, 0);
  assert.equal(item.y, 0);
  const change = (key, value) => editor.dispatch('inspectorContent', 'change', {
    target: { closest: selector => selector === '[data-prop]' ? { dataset: { prop: key }, value } : null }
  });
  change('x', '3000');
  change('y', '-500');
  change('w', '3000');
  change('h', '3000');
  item = editor.read().items.find(i => i.id === 'movable-button');
  assert.deepEqual([item.x, item.y, item.w, item.h], [1536, 0, 1536, 1024]);
  change('entityId', '');
  change('x', '-300');
  change('w', '3000');
  item = editor.read().items.find(i => i.id === 'movable-button');
  assert.equal(item.x, -300);
  assert.equal(item.w, 3000);
  change('entityId', 'light.example_device');
  item = editor.read().items.find(i => i.id === 'movable-button');
  assert.equal(item.x, 0);
  assert.equal(item.w, 1536);
});

test('resizing a linked hit area cannot exceed dashboard geometry limits', () => {
  const editor = boot({
    version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'resize-button', type: 'controlZone', name: 'Window button', x: 500, y: 500, w: 100, h: 100,
      rotation: 0, entityId: 'cover.example_window' }]
  });
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointerup', 500, 500);
  editor.pointer('pointerdown', 557, 557);
  editor.pointer('pointermove', 3000, 3000);
  editor.pointer('pointerup', 3000, 3000);
  const zone = editor.read().items.find(i => i.id === 'resize-button');
  assert.ok(zone.w <= 1536);
  assert.ok(zone.h <= 1024);
  assert.ok(zone.x >= 0 && zone.x <= 1536);
  assert.ok(zone.y >= 0 && zone.y <= 1024);
});

test('startup loads the live dashboard over a stale v2 draft and keeps it recoverable', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const remote = { ...local, items: [{ ...local.items[0], x: 620 }] };
  const editor = boot(local, async () => ({ revision: 'dashboard-1', project: remote, hotspots: [] }));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 620);
  assert.equal(JSON.parse(editor.storage.get('roomcraft.second-floor.dashboard-replaced-draft.v2')).items[0].x, 500);
  assert.equal(editor.elements.get('recoverDraftButton').hidden, false);
  editor.dispatch('recoverDraftButton', 'click', {});
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 500);
  editor.dispatch('returnPreRecoveryButton', 'click', {});
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 620);
});

test('startup never replaces edits made while a dashboard read is in flight', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  let finish;
  const pending = new Promise(resolve => { finish = resolve; });
  const editor = boot(local, () => pending);
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', 540, 500);
  editor.pointer('pointerup', 540, 500);
  finish({ revision: 'dashboard-2', project: { ...local, items: [{ ...local.items[0], x: 620 }] }, hotspots: [] });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 540);
  assert.equal(editor.storage.has('roomcraft.second-floor.dashboard-replaced-draft.v2'), false);
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /Browser edits kept/);
});

test('startup keeps an unfinished drag when the dashboard responds', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  let finish;
  const pending = new Promise(resolve => { finish = resolve; });
  const editor = boot(local, () => pending);
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', 540, 500);
  finish({ revision: 'dashboard-3', project: { ...local, items: [{ ...local.items[0], x: 620 }] }, hotspots: [] });
  await new Promise(resolve => setImmediate(resolve));
  editor.pointer('pointerup', 540, 500);
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 540);
  assert.equal(editor.storage.has('roomcraft.second-floor.dashboard-replaced-draft.v2'), false);
});

test('matching browser and dashboard layouts do not create a redundant recovery copy', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const editor = boot(local, async () => ({ revision: 'dashboard-4', project: local, hotspots: [] }));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 500);
  assert.equal(editor.storage.has('roomcraft.second-floor.dashboard-replaced-draft.v2'), false);
});

test('startup keeps a browser draft if Home Assistant is unreachable', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const editor = boot(local, async () => { throw new Error('Offline'); });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 500);
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /browser layout kept: Offline/);
});

test('pagehide flushes the last committed draft without saving a drag preview', () => {
  const project = {version:2, editableReferenceVersion:10, rooms:[], walls:[], hotspots:[],
    items:[{id:'chair', type:'chair', name:'Chair', x:500, y:500, w:48, h:48, rotation:0}]};
  const editor = boot(project, undefined, {deferAutosave:true});
  const api = editor.window.RoomcraftEditorViewport;
  assert.equal(api.moveItem('chair', 540, 500), true);
  editor.pointer('pointerdown', 540, 500);
  editor.pointer('pointermove', 600, 500);
  assert.equal(editor.read().items[0].x, 500);
  editor.dispatch('window', 'pagehide', {});
  assert.equal(editor.read().items[0].x, 540);
});

test('recovery from an offline startup requires importing before it can publish', async () => {
  const local = {version:2, editableReferenceVersion:10, rooms:[], walls:[], hotspots:[],
    items:[{id:'chair', type:'chair', name:'Chair', x:500, y:500, w:48, h:48, rotation:0}]};
  const remote = {...local, items:[{...local.items[0], x:640}]};
  const calls = [];
  const editor = boot(local, async (method, payload) => {
    calls.push([method, payload?.revision]);
    if (calls.length === 1) throw new Error('Offline');
    if (method === 'GET') return {revision:'current', project:remote, hotspots:[]};
    return {revision:'published', imageUrl:'/api/image/serve/fixture/original'};
  });
  await new Promise(resolve => setImmediate(resolve));
  const attempt = editor.dispatch('exportDashboardButton', 'click', {});
  await new Promise(resolve => setImmediate(resolve));
  if (editor.elements.get('confirmationDialog')?.open) {
    editor.dispatch('confirmationCancel', 'click', {});
  }
  await attempt;
  assert.deepEqual(calls, [['GET', undefined]]);
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /Import the current dashboard/);
  assert.equal(editor.read().items[0].x, 500);

  const importing = editor.dispatch('importDashboardButton', 'click', {});
  await new Promise(resolve => setImmediate(resolve));
  editor.dispatch('confirmationAccept', 'click', {});
  await importing;
  assert.equal(editor.read().items[0].x, 640);
  assert.equal(JSON.parse(editor.storage.get('roomcraft.second-floor.dashboard-replaced-draft.v2')).items[0].x, 500);

  const publishing = editor.dispatch('exportDashboardButton', 'click', {});
  editor.dispatch('confirmationAccept', 'click', {});
  await publishing;
  assert.deepEqual(calls, [['GET', undefined], ['GET', undefined], ['POST', 'current']]);
});

test('explicit dashboard import keeps the latest unpublished browser edit recoverable', async () => {
  const project = {version:2, editableReferenceVersion:10, rooms:[], walls:[], hotspots:[],
    items:[{id:'chair', type:'chair', name:'Chair', x:500, y:500, w:48, h:48, rotation:0}]};
  const editor = boot(project, async () => ({revision:'current', project, hotspots:[]}));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.window.RoomcraftEditorViewport.moveItem('chair', 580, 530), true);
  const importing = editor.dispatch('importDashboardButton', 'click', {});
  await new Promise(resolve => setImmediate(resolve));
  editor.dispatch('confirmationAccept', 'click', {});
  await importing;
  assert.equal(editor.read().items[0].x, 500);
  assert.equal(editor.elements.get('recoverDraftButton').hidden, false);
  editor.dispatch('recoverDraftButton', 'click', {});
  assert.equal(editor.read().items[0].x, 580);
});

test('a stale dashboard draft cannot retry export until the latest version is imported', async () => {
  const project = {version:2, editableReferenceVersion:9, rooms:[], walls:[], hotspots:[],
    items:[{id:'chair', type:'chair', name:'Chair', x:500, y:500, w:48, h:48, rotation:0}]};
  const calls = [];
  let revision = 'original';
  const editor = boot(project, async (method, payload) => {
    calls.push([method, payload?.revision]);
    if (method === 'GET') return {project, revision, hotspots:[]};
    if (payload.revision !== revision) throw Object.assign(new Error('Stale revision'), {status:409});
    return {revision:'published', imageUrl:'/api/image/serve/fixture/original'};
  });
  await new Promise(resolve => setImmediate(resolve));
  revision = 'newer';
  const first = editor.dispatch('exportDashboardButton', 'click', {});
  editor.dispatch('confirmationAccept', 'click', {});
  await first;
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /Dashboard changed/);
  await editor.dispatch('exportDashboardButton', 'click', {});
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /Import the current dashboard/);
  assert.deepEqual(calls, [['GET', undefined], ['POST', 'original']]);

  const canceled = editor.dispatch('importDashboardButton', 'click', {});
  await new Promise(resolve => setImmediate(resolve));
  editor.dispatch('confirmationCancel', 'click', {});
  await canceled;
  await editor.dispatch('exportDashboardButton', 'click', {});
  assert.equal(calls.length, 3);

  const imported = editor.dispatch('importDashboardButton', 'click', {});
  await new Promise(resolve => setImmediate(resolve));
  editor.dispatch('confirmationAccept', 'click', {});
  await imported;
  const publish = editor.dispatch('exportDashboardButton', 'click', {});
  editor.dispatch('confirmationAccept', 'click', {});
  await publish;
  assert.deepEqual(calls.slice(-2), [['GET', undefined], ['POST', 'newer']]);
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /exported to Home Assistant/);
});

test('export records the submitted layout while keeping edits made during upload unpublished', async () => {
  const project = {version:2, editableReferenceVersion:9, rooms:[], walls:[], hotspots:[],
    items:[{id:'chair', type:'chair', name:'Chair', x:500, y:500, w:48, h:48, rotation:0}]};
  let finishUpload;
  let submitted;
  const editor = boot(project, (method, payload) => {
    if (method === 'GET') return {project, revision:'original', hotspots:[], source:'http://ha.test/roomcraft-home/home'};
    submitted = payload;
    return new Promise(resolve => { finishUpload = resolve; });
  });
  await new Promise(resolve => setImmediate(resolve));
  const publish = editor.dispatch('exportDashboardButton', 'click', {});
  editor.dispatch('confirmationAccept', 'click', {});
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(submitted.project.items[0].x, 500);
  editor.window.RoomcraftEditorViewport.moveItem('chair', 540, 500);
  finishUpload({revision:'published', imageUrl:'/api/image/serve/fixture/original'});
  await publish;
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /Newer browser edits are still unpublished/);
  assert.equal(editor.read().items[0].x, 540);
  const leave = editor.dispatch('backDashboardButton', 'click', {});
  assert.equal(editor.elements.get('confirmationDialog').open, true);
  editor.dispatch('confirmationCancel', 'click', {});
  await leave;
  assert.deepEqual(editor.navigation, []);
});

test('Dashboard header returns to Roomcraft Home in both editor contexts', async () => {
  const project = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [], items: [] };
  const source = 'https://ha.example/roomcraft-home/home';
  const response = async () => ({ revision: 'current', project, hotspots: [], source });
  const hosted = boot(project, response);
  const cloud = boot(project, response, { pathname: '/editor', origin: 'https://studio.example' });
  await new Promise(resolve => setImmediate(resolve));
  await hosted.dispatch('backDashboardButton', 'click', {});
  await cloud.dispatch('backDashboardButton', 'click', {});
  assert.deepEqual(hosted.navigation, ['http://ha.test/roomcraft-home/home']);
  assert.deepEqual(cloud.navigation, [source]);
});

test('Dashboard return keeps unpublished edits in the browser and allows cancellation', async () => {
  const project = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const editor = boot(project, async () => ({ revision: 'current', project, hotspots: [], source: 'http://ha.test/roomcraft-home/home' }));
  await new Promise(resolve => setImmediate(resolve));
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', 540, 500);
  editor.pointer('pointerup', 540, 500);
  const firstReturn = editor.dispatch('backDashboardButton', 'click', {});
  assert.equal(editor.elements.get('confirmationDialog').open, true);
  editor.dispatch('confirmationCancel', 'click', {});
  await firstReturn;
  assert.deepEqual(editor.navigation, []);
  const secondReturn = editor.dispatch('backDashboardButton', 'click', {});
  editor.dispatch('confirmationAccept', 'click', {});
  await secondReturn;
  assert.deepEqual(editor.navigation, ['http://ha.test/roomcraft-home/home']);
  assert.equal(editor.read().items.find(item => item.id === 'chair').x, 540);
});

test('mapping and swapping a model keep one editable binding and its footprint', () => {
  const editor = boot({version:2, editableReferenceVersion:9, rooms:[], walls:[], hotspots:[], items:[]});
  const bridge = editor.window.RoomcraftEditorViewport;
  assert.equal(bridge.applyModelCommand({kind:'place', modelId:'cameraThumbnail', entityId:'light.example'}), false);
  assert.equal(bridge.applyModelCommand({kind:'place', modelId:'lamp', entityId:'light.example'}), true);
  assert.equal(bridge.placeAt(200, 300), true);
  const [original] = bridge.getProject().items;
  const dimensionField = (key,value) => editor.dispatch('inspectorContent','change',{
    target:{closest:selector => selector==='[data-prop]' ? {dataset:{prop:key},value} : null},
  });
  dimensionField('w','54');
  dimensionField('modelHeight','64');
  assert.equal(bridge.applyModelCommand({kind:'replace',itemId:original.id,modelId:'floorLamp'}), true);
  const [changed] = bridge.getProject().items;
  assert.deepEqual([changed.id,changed.type,changed.entityId,changed.x,changed.y,changed.w,changed.h,changed.modelHeight],
    [original.id,'floorLamp','light.example',200,300,54,40,64]);
  assert.equal(bridge.applyModelCommand({kind:'replace',itemId:original.id,modelId:'wallSconce'}), false);
  editor.dispatch('undoButton','click',{});
  assert.equal(bridge.getProject().items[0].type, 'lamp');
  bridge.selectItem(original.id);
  dimensionField('modelHeight','');
  assert.equal(bridge.getProject().items[0].modelHeight, undefined);
});

test('an existing compatible object can be bound once and undone without changing its pose', () => {
  const lamp = {id:'placed-lamp', type:'lamp', name:'Reading lamp', x:640, y:440, w:48, h:52, rotation:30, entityId:''};
  const editor = boot({version:2, editableReferenceVersion:10, rooms:[], walls:[], hotspots:[], items:[lamp]});
  const bridge = editor.window.RoomcraftEditorViewport;
  const before = bridge.getProject();
  assert.equal(bridge.applyModelCommand({kind:'bind', itemId:lamp.id, entityId:'camera.wrong_type'}), false);
  assert.deepEqual(bridge.getProject(), before);
  assert.equal(bridge.applyModelCommand({kind:'bind', itemId:lamp.id, entityId:'light.reading'}), true);
  assert.deepEqual({...bridge.getProject().items[0]}, {...before.items[0], entityId:'light.reading'});
  assert.equal(bridge.applyModelCommand({kind:'bind', itemId:lamp.id, entityId:'light.different'}), false);
  editor.dispatch('undoButton','click',{});
  assert.deepEqual(bridge.getProject(), before);
});

test('the camera event picker appends a binary sensor as one undoable edit', () => {
  const camera = {id:'camera', type:'cameraThumbnail', name:'Door', x:400, y:420, w:100, h:70, rotation:0,
    entityId:'camera.entry', imageEntityId:'image.entry', eventEntityIds:['binary_sensor.ring'], previewMode:'event_live'};
  const editor = boot({version:2, editableReferenceVersion:10, rooms:[], walls:[], hotspots:[], items:[camera]});
  const bridge = editor.window.RoomcraftEditorViewport;
  const before = bridge.getProject();
  bridge.selectItem(camera.id);
  editor.dispatch('inspectorContent', 'change', {target:{
    matches: selector => selector === '[data-add-camera-event]', value: 'binary_sensor.person',
  }});
  assert.deepEqual(Array.from(bridge.getProject().items[0].eventEntityIds), ['binary_sensor.ring','binary_sensor.person']);
  editor.dispatch('undoButton','click',{});
  assert.deepEqual(bridge.getProject(), before);
});
