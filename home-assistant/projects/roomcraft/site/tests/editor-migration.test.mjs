import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import { installRoomcraftEngine } from './engine-loader.mjs';
import { compileStorybookPlan } from '../ha-local/storybook-scene.mjs';

const source = readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');
const controlsSource = readFileSync(new URL('../public/object-controls.js', import.meta.url), 'utf8');
const wallSources = ['wall-joins.js', 'reference-geometry.js'].map(name =>
  readFileSync(new URL(`../public/engine/${name}`, import.meta.url), 'utf8'));
const storageKey = 'roomcraft.second-floor.v2';
const crop = { x: 0, y: 80, width: 1536, height: 864 };

function boot(savedProject, dashboardRequest, options = {}) {
  const data = new Map([[storageKey, JSON.stringify(savedProject)]]);
  const listeners = new Map();
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
  const window = { addEventListener() {}, location, RoomcraftInventory: { templates: [
    {type:'fans-fan-light-white',label:'Ceiling fan with light · White',w:158,h:158,group:'fans',artFamily:'ceilingFan',form:'light',visualKind:'fan'},
    {type:'fans-five-blade-fan-white',label:'Five-blade ceiling fan · White',w:160,h:160,group:'fans',artFamily:'ceilingFan',form:'five',visualKind:'fan'}
  ], groups: [] },
    ...(dashboardRequest ? { RoomcraftDashboardBridge: { request: dashboardRequest } } : {}) };
  window.top = window;
  installRoomcraftEngine(window);
  for (const wallSource of wallSources) runInNewContext(wallSource, { window });
  runInNewContext(controlsSource, { window });
  const localStorage = {
    getItem(key) { return data.get(key) ?? null; },
    setItem(key, value) { data.set(key, value); },
    removeItem(key) { data.delete(key); }
  };
  runInNewContext(source, {
    document, window, location, URL, localStorage, Image: ImageStub,
    setTimeout(fn) { fn(); return 1; }, clearTimeout() {},
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

test('revision 9 adds editable matching rails at the upper ledges while keeping both entrances and the stair head open', () => {
  const before = upperDeckLayout();
  const migrated = migrateInStudio(before);
  assert.equal(migrated.editableReferenceVersion, 9);
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
  assert.equal(repaired.editableReferenceVersion, 9);
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
  assert.equal(migrated.editableReferenceVersion, 9);
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
  assert.equal(empty.editableReferenceVersion, 9);
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
  assert.equal(migrated.editableReferenceVersion, 9);
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
  assert.match(inspector.innerHTML, /Device entity ID/);
  assert.match(inspector.innerHTML, /Automatic for device/);
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

test('Dashboard header returns to the actual Home Assistant plan in both editor contexts', async () => {
  const project = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [], items: [] };
  const source = 'https://ha.example/second-floor/plan';
  const response = async () => ({ revision: 'current', project, hotspots: [], source });
  const hosted = boot(project, response);
  const cloud = boot(project, response, { pathname: '/editor', origin: 'https://studio.example' });
  await new Promise(resolve => setImmediate(resolve));
  await hosted.dispatch('backDashboardButton', 'click', {});
  await cloud.dispatch('backDashboardButton', 'click', {});
  assert.deepEqual(hosted.navigation, ['http://ha.test/second-floor/plan']);
  assert.deepEqual(cloud.navigation, [source]);
});

test('Dashboard return keeps unpublished edits in the browser and allows cancellation', async () => {
  const project = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const editor = boot(project, async () => ({ revision: 'current', project, hotspots: [], source: 'http://ha.test/second-floor/plan' }));
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
  assert.deepEqual(editor.navigation, ['http://ha.test/second-floor/plan']);
  assert.equal(editor.read().items.find(item => item.id === 'chair').x, 540);
});
