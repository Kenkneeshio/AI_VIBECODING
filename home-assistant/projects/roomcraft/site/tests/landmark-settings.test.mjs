import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import test from 'node:test';
import '../public/engine/terrain.js';
import '../public/engine/edit-safety.js';

const window={};
for(const name of ['control-actions.js','object-controls.js'])
  runInNewContext(readFileSync(new URL('../public/'+name,import.meta.url),'utf8'),{window});
const controls=window.RoomcraftObjectControls,safety=globalThis.RoomcraftEditSafety;
const types=['sceneryRanchHouse','sceneryOfficeCampus','scenerySchoolCampus'];
const toggles=['landmarkActivity','landmarkPeople','landmarkVehicles','landmarkEvents'];
const item=type=>({id:'landmark-fixture',type,name:'Campus',x:200,y:300,w:220,h:180,rotation:0,entityId:''});
const layout=entry=>({version:2,rooms:[],walls:[],items:[entry],hotspots:[]});
const field=(label,key,value,type='text',attributes='')=>`<label>${label}<input id="prop-${key}" data-prop="${key}" value="${value}" type="${type}" ${attributes}></label>`;
const inspector=entry=>controls.renderInspector(entry,{label:'Landmark',icon:'◇'},field,()=>'',String);

test('legacy landmarks default to enabled activity with bounded pace controls and office-only satellites',()=>{
  for(const type of types) {
    const entry=item(type),html=inspector(entry);
    assert.equal(controls.validBinding(entry),true);
    assert.deepEqual(safety.audit(layout(entry)),[]);
    assert.match(html,/LANDMARK ACTIVITY/);
    assert.match(html,/Illustrative miniatures, not live occupancy or real vehicle activity/);
    for(const key of toggles)assert.match(html,new RegExp(`id="prop-${key}"[^>]*>[\\s\\S]*?<option value="true" selected`));
    assert.match(html,/id="prop-landmarkPace"[^>]*value="1"[^>]*min="0.25" max="2" step="0.05"/);
    assert.equal(html.includes('id="prop-landmarkSatellites"'),type==='sceneryOfficeCampus');
    assert.doesNotMatch(html,/id="prop-entityId"/);
  }
  for(const type of ['scenerySideRoad','lamp'])assert.doesNotMatch(inspector(item(type)),/LANDMARK ACTIVITY/);
});

test('Inspector updates store explicit off values while resets retain backward-compatible defaults',()=>{
  for(const key of [...toggles,'landmarkSatellites']) {
    assert.equal(controls.isLandmarkKey(key),true);
    assert.equal(controls.isBindingKey(key),false);
    assert.equal(controls.isAppearanceKey(key),false);
    assert.equal(controls.propertyUpdate(key,' false ').value,false);
    assert.equal(controls.propertyUpdate(key,'true').value,undefined);
    for(const bad of ['yes','0','FALSE','',null])assert.equal(controls.propertyUpdate(key,bad).valid,false);
  }
  for(const pace of [.25,.75,2])assert.equal(controls.propertyUpdate('landmarkPace',String(pace)).value,pace);
  for(const reset of ['1',''])assert.equal(controls.propertyUpdate('landmarkPace',reset).value,undefined);
  for(const bad of ['.24','2.01','Infinity','NaN','fast'])assert.equal(controls.propertyUpdate('landmarkPace',bad).valid,false);
  assert.equal(controls.canSetLandmarkProperty(item('scenerySchoolCampus'),'landmarkPeople'),true);
  assert.equal(controls.canSetLandmarkProperty(item('scenerySchoolCampus'),'landmarkSatellites'),false);
  assert.equal(controls.canSetLandmarkProperty(item('scenerySideRoad'),'landmarkPeople'),false);
});

test('JSON export/import and safe project checks retain independent preferences without adding device links',()=>{
  for(const type of types) {
    const entry={...item(type),landmarkActivity:false,landmarkPeople:true,landmarkVehicles:false,
      landmarkEvents:false,landmarkPace:.6,...(type==='sceneryOfficeCampus'?{landmarkSatellites:false}:{})};
    const source=layout(entry),copy=JSON.parse(JSON.stringify(source));
    const checked=safety.repair(copy);
    assert.equal(checked.ok,true);
    assert.equal(checked.project,copy,'validation does not strip or invent activity settings');
    assert.deepEqual(checked.project,source);
    assert.equal(controls.validBinding(copy.items[0]),true);
    const duplicate={...entry};controls.clearDeviceLinks(duplicate);
    assert.deepEqual(duplicate,entry,'clearing links while duplicating keeps decorative activity settings');
    assert.match(inspector(entry),/id="prop-landmarkActivity"[^>]*>[\s\S]*?<option value="false" selected/);
    assert.match(inspector(entry),/id="prop-landmarkPeople"[^>]*>[\s\S]*?<option value="true" selected/);
  }
});

test('malformed activity settings are rejected atomically before a layout can replace the last safe project',()=>{
  const previous=layout(item('sceneryOfficeCampus'));
  const invalid=[
    ...[null,'false',0,[],{}].map(value=>({...item('sceneryOfficeCampus'),landmarkPeople:value})),
    ...[NaN,Infinity,.24,2.001,'1',null].map(value=>({...item('sceneryOfficeCampus'),landmarkPace:value})),
    {...item('sceneryRanchHouse'),landmarkSatellites:false},
    {...item('scenerySchoolCampus'),landmarkSatellites:true},
    {...item('scenerySideRoad'),landmarkEvents:true},
    {...item('lamp'),landmarkPace:1},
  ];
  for(const entry of invalid) {
    assert.equal(controls.validBinding(entry),false);
    const result=safety.repair(layout(entry),{previous});
    assert.equal(result.ok,false);
    assert.equal(result.project,previous);
    assert.ok(result.issues.some(issue=>issue.code==='landmark-settings'));
  }
});
