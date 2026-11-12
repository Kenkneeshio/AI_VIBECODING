import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import '../public/engine/terrain.js';
import '../public/engine/edit-safety.js';

const Safety = globalThis.RoomcraftEditSafety;
const room = (points, extra = {}) => ({id:'r1', name:'Fixture room', surface:'oak', points:points.map(([x,y]) => ({x,y})), ...extra});
const rectangle = room([[0,0],[100,0],[100,80],[0,80]]);
const wall = {id:'w1', x1:0, y1:0, x2:100, y2:0};
const item = {id:'i1', type:'custom-fixture', x:30, y:40, w:20, h:24, rotation:0};
const layout = values => ({version:2, rooms:[rectangle], walls:[wall], items:[item], hotspots:[], ...values});
const codes = value => Safety.audit(value).map(issue => issue.code);

function freeze(value) {
  if (!value || typeof value !== 'object') return value;
  Object.freeze(value);
  Object.values(value).forEach(freeze);
  return value;
}

test('safety accepts empty designs, concave rooms, exterior objects and intentional structure', () => {
  const shapes = [
    layout({rooms:[], walls:[], items:[]}),
    layout({rooms:[room([[0,0],[100,0],[100,30],[40,30],[40,80],[0,80]])]}),
    layout({rooms:[room([[0,80],[100,80],[100,0],[0,0]])]}),
    layout({walls:[wall, {id:'w2', x1:40, y1:-20, x2:40, y2:30},
      {id:'f1', kind:'fence', x1:118, y1:0, x2:180, y2:0}]}),
    layout({items:[{...item, x:-500, y:1800, rotation:720}]}),
  ];
  for (const value of shapes) {
    freeze(value);
    assert.deepEqual(Safety.audit(value), []);
    const result = Safety.repair(value);
    assert.equal(result.ok, true);
    assert.equal(result.project, value);
    assert.equal(result.repaired, false);
    assert.deepEqual(result.repairs, []);
  }
});

test('safe cleanup removes adjacent/closing repeats without moving corners or losing room metadata', () => {
  const source = layout({rooms:[room([[0,0],[100,0],[100,0],[100,80],[0,80],[0,0]], {custom:{value:'keep'}})]});
  const snapshot = structuredClone(source);
  freeze(source);
  assert.deepEqual(codes(source), ['room-repeated-corner']);
  const result = Safety.repair(source);
  assert.equal(result.ok, true);
  assert.equal(result.repaired, true);
  assert.deepEqual(result.project.rooms[0].points, rectangle.points);
  assert.equal(result.project.rooms[0].custom, source.rooms[0].custom);
  assert.equal(result.project.walls, source.walls);
  assert.equal(result.project.items, source.items);
  assert.deepEqual(result.repairs.map(({code,count}) => ({code,count})), [{code:'room-repeated-corner',count:2}]);
  assert.deepEqual(source, snapshot);
  assert.deepEqual(Safety.audit(result.project), []);
  const second = Safety.repair(result.project);
  assert.equal(second.project, result.project);
  assert.equal(second.repaired, false);
  assert.deepEqual(second.repairs, []);
});

test('self-crossing, self-touching, retracing and degenerate floor boundaries are rejected', () => {
  const bad = [
    [[0,0],[100,100],[0,100],[100,0]],
    [[0,0],[100,0],[100,100],[50,0],[0,100]],
    [[0,0],[100,0],[40,0],[40,80],[0,80]],
    [[0,0],[50,0],[100,0]],
    [[0,0],[0,0],[100,0],[0,0]],
  ];
  const previous = freeze(layout());
  for (const points of bad) {
    const candidate = layout({rooms:[room(points)]});
    const result = Safety.repair(candidate, {previous});
    assert.equal(result.ok, false, JSON.stringify(points));
    assert.equal(result.project, previous);
    assert.equal(result.repaired, false);
    assert.deepEqual(result.repairs, []);
    assert.ok(result.issues.some(issue => ['room-self-intersection','room-degenerate'].includes(issue.code)));
  }
});

test('a failed edit does not apply an otherwise safe polygon cleanup', () => {
  const previous = layout();
  const candidate = layout({
    rooms:[room([[0,0],[100,0],[100,80],[0,80],[0,0]])],
    walls:[{...wall, x2:0, y2:0}],
  });
  const snapshot = structuredClone(candidate);
  const result = Safety.repair(candidate, {previous});
  assert.equal(result.project, previous);
  assert.equal(result.ok, false);
  assert.deepEqual(result.repairs, []);
  assert.deepEqual(candidate, snapshot);
  assert.ok(result.issues.some(issue => issue.code === 'wall-degenerate'));
});

test('stable identities are unique within their collection, not across unrelated categories', () => {
  for (const key of ['rooms','walls','items']) {
    const candidate = layout();
    candidate[key] = [candidate[key][0], {...candidate[key][0]}];
    assert.ok(codes(candidate).includes('duplicate-id'), key);
    candidate[key] = [{...candidate[key][0], id:'  '}];
    assert.ok(codes(candidate).includes('invalid-id'), key);
  }
  assert.deepEqual(Safety.audit(layout({
    walls:[{...wall,id:rectangle.id}], items:[{...item,id:rectangle.id}],
  })), []);
});

test('bad numbers and oversized geometry fail without coercion or changes', () => {
  for (const value of [NaN,Infinity,-Infinity,null,'20',{},[]]) {
    assert.ok(codes(layout({rooms:[{...rectangle,points:[{x:value,y:0},...rectangle.points.slice(1)]}]})).includes('room-geometry'));
    assert.ok(codes(layout({walls:[{...wall,x1:value}]})).includes('wall-geometry'));
    assert.ok(codes(layout({items:[{...item,w:value}]})).includes('item-geometry'));
  }
  for (const w of [0,-1,Safety.MAX_COORDINATE+1]) {
    assert.ok(codes(layout({items:[{...item,w}]})).includes('item-geometry'));
  }
  assert.ok(codes(layout({walls:[{...wall,x2:Safety.MAX_COORDINATE+1}]})).includes('wall-geometry'));
  assert.ok(codes(layout({items:[{...item,rotation:null}]})).includes('item-geometry'));
  const legacy = {...item};
  delete legacy.rotation;
  assert.deepEqual(codes(layout({items:[legacy]})), []);
});

test('room detail and collection bounds make validation workload finite', () => {
  const points = Array.from({length:Safety.MAX_ROOM_POINTS+1}, (_,i) => ({x:i,y:i%2}));
  assert.ok(codes(layout({rooms:[{...rectangle,points}]})).includes('room-point-limit'));
  assert.ok(codes(layout({walls:Array.from({length:2001},(_,i)=>({...wall,id:'wall-'+i}))})).includes('collection-limit'));
  const large = Array.from({length:9}, (_,n) => ({...rectangle,id:'room-'+n,
    points:Array.from({length:1024}, (_,i) => ({
      x:100*Math.cos(i/1024*Math.PI*2), y:100*Math.sin(i/1024*Math.PI*2),
    }))}));
  assert.ok(codes(layout({rooms:large})).includes('room-point-limit'));
});

test('terrain stays untouched by ordinary repairs; invalid terrain rejects the entire edit', () => {
  const terrain = {cells:[{col:0,row:0,height:64,cover:'sand',prop:'pine'}]};
  const value = layout({terrain});
  assert.deepEqual(Safety.audit(value), []);
  assert.equal(Safety.repair(value).project, value);
  assert.equal(Safety.repair(value).project.terrain, terrain);
  const invalid = layout({terrain:{cells:[{col:0,row:0,height:100}]}});
  const result = Safety.repair(invalid,{previous:value,terrainRepair:true});
  assert.equal(result.ok,false);
  assert.equal(result.project,value);
  assert.deepEqual(result.issues.map(issue=>issue.code),['terrain-invalid']);
});

test('explicit terrain repair is atomic, idempotent and leaves floor geometry unchanged', () => {
  const value = layout({terrain:{cells:[{col:0,row:0,height:64,cover:'sand',prop:'pine'}]}});
  const result = Safety.repair(value,{terrainRepair:true});
  assert.equal(result.ok,true);
  assert.equal(result.repaired,true);
  assert.equal(result.project.rooms,value.rooms);
  assert.equal(result.project.walls,value.walls);
  assert.equal(result.project.items,value.items);
  assert.equal(result.project.terrain.cells[0].cover,'sand');
  assert.equal(result.project.terrain.cells[0].prop,'pine');
  assert.ok(result.repairs.some(entry=>entry.code==='terrain-steep-step'));
  assert.deepEqual(Safety.audit(result.project),[]);
  const second=Safety.repair(result.project,{terrainRepair:true});
  assert.equal(second.project,result.project);
  assert.equal(second.repaired,false);
});

test('invalid shapes and hostile accessors return stable safe failures instead of throwing', () => {
  const previous = layout();
  for (const value of [null,[],{},layout({rooms:null}),layout({walls:[null]}),layout({items:[null]})]) {
    const result=Safety.repair(value,{previous});
    assert.equal(result.ok,false);
    assert.equal(result.project,previous);
    assert.ok(result.issues.length);
  }
  const hostile = {get version() {throw new Error('private diagnostic must not escape');}};
  const result=Safety.repair(hostile,{previous});
  assert.equal(result.project,previous);
  assert.equal(result.issues[0].code,'invalid-project');
  assert.doesNotMatch(JSON.stringify(result.issues),/private diagnostic/);
});

test('the public example is accepted without a migration or geometry rewrite', () => {
  const value=JSON.parse(readFileSync(new URL('../../examples/layout-v2.json',import.meta.url),'utf8'));
  const result=Safety.repair(value);
  assert.equal(result.ok,true,JSON.stringify(result.issues));
  assert.equal(result.project,value);
  assert.deepEqual(Safety.audit(value),[]);
});

test('repair output and issue ordering are deterministic for repeated commands', () => {
  const candidate=layout({rooms:[room([[0,0],[100,0],[100,80],[0,80],[0,0]])]});
  const first=Safety.repair(candidate);
  for(let i=0;i<10;i++) assert.deepEqual(Safety.repair(structuredClone(candidate)),first);
  const invalid=layout({walls:[{...wall,x2:0}],items:[{...item,h:-10}]});
  assert.deepEqual(Safety.audit(invalid),Safety.audit(structuredClone(invalid)));
});
