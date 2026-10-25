/* Isolated directory tests: no Home Assistant requests or device actuation. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const tests=[];const test=(name,fn)=>tests.push([name,fn]);
const state=(name,value='off')=>({state:value,attributes:{friendly_name:name}});
class Node {
  constructor(){this.dataset={};this.value='';this.textContent='';this.innerHTML='';this.isConnected=true;this.disabled=false;this.focused=0;}
  focus(){this.focused++;}contains(){return false;}querySelectorAll(){return[];}
}
class Root extends Node {
  constructor(){super();this.nodes=new Map();this.fields=['query','domain','area','availability'].map(field=>{const node=new Node();node.dataset.directoryField=field;this.nodes.set(`[data-directory-field="${field}"]`,node);return node;});this.nodes.set('#directory-query',this.fields[0]);this.pages=[-1,1].map(step=>{const node=new Node();node.dataset={action:'directory-page',step:String(step)};return node;});}
  querySelector(selector){if(!this.nodes.has(selector))this.nodes.set(selector,new Node());return this.nodes.get(selector);}
  querySelectorAll(selector){return selector==='[data-directory-field]'?this.fields:selector==='[data-action="directory-page"]'?this.pages:[];}
}
let directoryMethods,directoryRecords,directoryPage,DIRECTORY_PAGE_SIZE;
function host(states={},catalog={}){
  const root=new Root();const p={root,_hass:{states,callService(){throw Error('Directory must never call services');}},_catalog:catalog,shadowRoot:{activeElement:null},rowCalls:[],_q:selector=>selector==='#directory-root'?root:null,_button:(label,action,extra='',cls='')=>`<button data-action="${action}" ${extra}>${label}</button>`,_dialog(title,html,options){this.title=title;this.html=html;this._modal=options.kind;},_entityRows(ids){this.rowCalls.push(ids);return JSON.stringify(ids);}};
  return Object.assign(p,directoryMethods);
}

test('all runtime domains are reachable including new IDs absent from metadata',()=>{
  const states={'automation.test':state('Routine'),'update.test':state('Update'),'scene.test':state('Scene'),'button.test':state('Button'),'sensor.new':state('New')};const records=directoryRecords(states,{entities:[{entity_id:'sensor.disabled',name:'Disabled'}]});assert.equal(records.length,5);assert.deepEqual(new Set(records.map(x=>x.id)),new Set(Object.keys(states)));assert.equal(directoryPage(records,{domain:'update'}).items[0].id,'update.test');
});
test('catalog metadata enriches areas and devices without guessing missing assignments',()=>{
  const records=directoryRecords({'sensor.a':state('Live name'),'sensor.b':state('Kitchen named sensor')},{entities:[{entity_id:'sensor.a',name:'Old name',area_id:'den',device_name:'Air monitor'}],areas:[{area_id:'den',name:'Living room'}]});const a=records.find(x=>x.id==='sensor.a'),b=records.find(x=>x.id==='sensor.b');assert.equal(a.name,'Live name');assert.equal(a.areaName,'Living room');assert.equal(a.device,'Air monitor');assert.equal(b.area,'');assert.equal(b.areaName,'No area assigned');
});
test('search combines terms across names, rooms, device names, IDs and readable domains',()=>{
  const records=directoryRecords({'binary_sensor.foyer':state('Café entry')},{entities:[{entity_id:'binary_sensor.foyer',area_id:'entry',area_name:'Foyer',device_name:'Door contact'}]});for(const query of ['cafe foyer','BINARY SENSOR','door contact','binary_sensor.foyer','entry cafe'])assert.equal(directoryPage(records,{query}).matched,1,query);assert.equal(directoryPage(records,{query:'cafe garage'}).matched,0);
});
test('unknown and unavailable entities remain inspectable and can be filtered',()=>{
  const records=directoryRecords({'sensor.good':state('A','0'),'sensor.unknown':state('B','unknown'),'sensor.unavailable':state('C','unavailable'),'sensor.blank':state('D','')});assert.equal(directoryPage(records).matched,4);assert.equal(directoryPage(records,{availability:'available'}).matched,1);assert.equal(directoryPage(records,{availability:'unavailable'}).matched,3);
});
test('no-area, area, domain and availability filters intersect precisely',()=>{
  const records=directoryRecords({'light.a':state('A','on'),'sensor.b':state('B','unavailable'),'light.c':state('C','off')},{entities:[{entity_id:'light.a',area_id:'living'},{entity_id:'sensor.b',area_id:'living'}]});assert.deepEqual(directoryPage(records,{area:'living',domain:'sensor',availability:'unavailable'}).items.map(x=>x.id),['sensor.b']);assert.deepEqual(directoryPage(records,{area:'__none__'}).items.map(x=>x.id),['light.c']);assert.equal(directoryPage(records,{area:'empty_room'}).matched,0);
});
test('explicit entity allow-lists intersect filters and exclude missing runtime IDs',()=>{
  const records=directoryRecords({'light.a':state('A'),'sensor.b':state('B','unknown'),'sensor.c':state('C')});const page=directoryPage(records,{ids:['light.a','sensor.b','sensor.missing','sensor.b'],domain:'sensor',availability:'unavailable'});assert.deepEqual(page.items.map(e=>e.id),['sensor.b']);assert.equal(page.scopeTotal,2);assert.equal(page.total,3);assert.equal(page.isScoped,true);
});
test('an empty entity allow-list remains empty instead of showing every device',()=>{
  const records=directoryRecords({'light.a':state('A')});const page=directoryPage(records,{ids:[]});assert.equal(page.matched,0);assert.equal(page.scopeTotal,0);assert.equal(page.isScoped,true);assert.equal(directoryPage(records).matched,1);
});
test('every live catalog entry is reachable exactly once across bounded pages',()=>{
  const catalog=JSON.parse(fs.readFileSync(path.join(__dirname,'ishioho-catalog.json'),'utf8'));const states=Object.fromEntries(catalog.entities.map(e=>[e.entity_id,state(e.name)]));states['sensor.new_after_catalog']=state('New runtime sensor');const records=directoryRecords(states,catalog),seen=[];let page=directoryPage(records);for(let n=0;n<page.pages;n++){const result=directoryPage(records,{page:n});assert.ok(result.items.length<=DIRECTORY_PAGE_SIZE);seen.push(...result.items.map(x=>x.id));}assert.equal(seen.length,Object.keys(states).length);assert.equal(new Set(seen).size,seen.length);assert.deepEqual(new Set(seen),new Set(Object.keys(states)));
});
test('paging clamps malformed, negative and past-last page numbers',()=>{
  const records=directoryRecords(Object.fromEntries(Array.from({length:125},(_,i)=>['sensor.'+i,state('Sensor '+i)])));assert.equal(directoryPage(records,{page:-1}).page,0);assert.equal(directoryPage(records,{page:Infinity}).page,0);assert.equal(directoryPage(records,{page:999}).page,2);assert.equal(directoryPage(records,{page:2}).items.length,5);assert.equal(directoryPage([],{page:5}).from,0);
});
test('opening renders at most sixty rows and uses the agreed modal contract',()=>{
  const p=host(Object.fromEntries(Array.from({length:200},(_,i)=>['sensor.'+i,state('Sensor '+i)])));p._openDirectory();assert.equal(p._modal,'directory');assert.equal(p.rowCalls.at(-1).length,60);assert.ok(p.root.querySelector('[data-directory-summary]').textContent.includes('200 total entities'));assert.equal(p.root.pages[0].disabled,true);assert.equal(p.root.pages[1].disabled,false);
});
test('filtering an empty assigned area never silently expands to all entities',()=>{
  const p=host({'light.a':state('A')},{areas:[{area_id:'office',name:'Office'}]});p._openDirectory({area:'office'});assert.equal(p._directory.area,'office');assert.ok(p.root.querySelector('[data-directory-results]').innerHTML.includes('No matching entities'));assert.equal(p.rowCalls.length,0);p._openDirectory({domain:'automation'});assert.equal(p._directory.domain,'automation');assert.equal(p.rowCalls.length,0);
});
test('context directory uses its title and exposes an explicit path to all devices',()=>{
  const p=host({'light.a':state('A'),'sensor.b':state('B')});const returnFocus=new Node();p._returnFocus=returnFocus;p._openDirectory({ids:['light.a'],title:'Kitchen · all devices'});assert.equal(p.title,'Kitchen · all devices');assert.deepEqual(p.rowCalls.at(-1),['light.a']);assert.ok(p.html.includes('Show all devices'));assert.ok(p.root.querySelector('[data-directory-summary]').textContent.includes('1 in this group'));p._directory.query='mismatch';p._directoryClick('directory-reset',{});assert.deepEqual(p._directory.ids,['light.a']);assert.deepEqual(p.rowCalls.at(-1),['light.a']);p._directoryClick('directory-all',{});assert.equal(p.title,'All devices & entities');assert.equal(p._directory.ids,null);assert.deepEqual(new Set(p.rowCalls.at(-1)),new Set(['light.a','sensor.b']));assert.equal(p._returnFocus,returnFocus);
});
test('empty contextual groups retain their title and show an honest empty result',()=>{
  const p=host({'light.a':state('A')});p._openDirectory({ids:[],title:'Robot · all entities'});assert.equal(p.title,'Robot · all entities');assert.equal(p.rowCalls.length,0);assert.ok(p.html.includes('Show all devices'));assert.ok(p.root.querySelector('[data-directory-results]').innerHTML.includes('No matching entities'));
});
test('option labels and IDs are escaped before HTML insertion',()=>{
  const p=host({'sensor.a':state('A')},{entities:[{entity_id:'sensor.a',area_id:'x" onclick="bad',area_name:'<img src=x onerror=bad>'}]});p._openDirectory();const options=p.root.querySelector('[data-directory-field="area"]').innerHTML;assert.ok(!options.includes('<img'));assert.ok(!options.includes('value="x" onclick='));assert.ok(options.includes('&lt;img'));
});
test('input and paging reset/clamp page while keeping the search field stable',()=>{
  const states=Object.fromEntries(Array.from({length:125},(_,i)=>['sensor.'+i,state('Sensor '+i)])),p=host(states);p._openDirectory();const input=p.root.querySelector('#directory-query');p.shadowRoot.activeElement=input;p._directoryClick('directory-page',{dataset:{step:'1'}});assert.equal(p._directory.page,1);input.value='Sensor 124';p._directoryInput({target:input});assert.equal(p._directory.page,0);assert.deepEqual(p.rowCalls.at(-1),['sensor.124']);assert.equal(p.root.querySelector('#directory-query'),input);assert.equal(input.focused,0);p._directoryClick('directory-reset',{});assert.equal(p._directory.query,'');assert.equal(input.value,'');assert.equal(p._directoryClick('unrelated',{}),false);
});
test('unchanged live refresh does not rebuild rows or search controls',()=>{
  const p=host({'sensor.a':state('A','10')});p._openDirectory();const before=p.rowCalls.length,input=p.root.querySelector('#directory-query');p._hass.states['sensor.a']=state('A','11');p._renderDirectory();assert.equal(p.rowCalls.length,before);assert.equal(p.root.querySelector('#directory-query'),input);
});
test('live additions and availability changes update filter membership',()=>{
  const p=host({'sensor.a':state('A','unavailable')});p._openDirectory({availability:'unavailable'});assert.deepEqual(p.rowCalls.at(-1),['sensor.a']);p._hass.states['sensor.a']=state('A','10');p._renderDirectory();assert.ok(p.root.querySelector('[data-directory-results]').innerHTML.includes('No matching'));p._hass.states['sensor.new']=state('New','unknown');p._renderDirectory();assert.deepEqual(p.rowCalls.at(-1),['sensor.new']);
});
test('high-frequency state refreshes coalesce and never reopen a closed popup',async()=>{
  const p=host({'sensor.a':state('A')});p._openDirectory();p._directoryUpdate();const timer=p._directoryTimer;for(let i=0;i<20;i++)p._directoryUpdate();assert.equal(p._directoryTimer,timer);p._modal=null;const calls=p.rowCalls.length;await new Promise(resolve=>setTimeout(resolve,150));assert.equal(p._directoryTimer,null);assert.equal(p.rowCalls.length,calls);
});

(async()=>{const source=fs.readFileSync(path.join(__dirname,'ishioho-directory.js'),'utf8');({directoryMethods,directoryRecords,directoryPage,DIRECTORY_PAGE_SIZE}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64')));let failed=0;for(const[name,fn]of tests){try{await fn();console.log('PASS '+name);}catch(error){failed++;console.error('FAIL '+name+'\n  '+error.message);}}console.log(`${tests.length-failed}/${tests.length} directory tests passed. No services or network calls.`);process.exitCode=failed?1:0;})();
