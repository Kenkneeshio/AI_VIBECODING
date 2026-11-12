import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {createRequire} from 'node:module';
const source=process.cwd();
const {build}=createRequire(join(source,'package.json'))('esbuild');
const qa=await mkdtemp(join(tmpdir(),'roomcraft-exterior-qa-'));
const editorCode=process.env.ROOMCRAFT_EXTERIOR_QA_DIST ? await readFile(join(source,'public','storybook-editor.js')) :
  (await build({absWorkingDir:source,bundle:true,target:'es2022',format:'iife',write:false,
   entryPoints:['ha-local/storybook-editor.mjs'],minify:true})).outputFiles[0].contents;
// The probe exposes the production street-bounds calculation only inside this fixture.
const probe=(await build({absWorkingDir:source,bundle:true,target:'es2022',format:'iife',write:false,
  stdin:{contents:"import {storybookStreetBounds} from './ha-local/storybook-street.mjs'; import {compileStorybookSideRoads} from './ha-local/storybook-side-road.mjs'; window.RoomcraftExteriorQAStreetBounds=storybookStreetBounds; window.RoomcraftExteriorQARoads=compileStorybookSideRoads;",resolveDir:source},
  minify:true})).outputFiles[0].contents;
const code=Buffer.concat([Buffer.from(editorCode),Buffer.from('\n'),Buffer.from(probe)]);
const garage={id:'fixture-garage',type:'garageDoor',name:'Garage',x:306,y:112,w:132,h:120,rotation:0,
  garageRoof:'full',garageDriveway:true,garageDrivewayWidth:60};
const project={version:2,editableReferenceVersion:10,rooms:[{id:'home-floor',name:'Home floor',surface:'oak',label:{x:425,y:380},
  points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}]}],walls:[],hotspots:[],items:[garage]};
const html=`<!DOCTYPE html><html><head><meta name=viewport content="width=device-width, initial-scale=1"></head><body style="margin:0"><script>
window.ops=[];
window.addEventListener('message',event=>{
 const request=event.data;
 if(request?.kind!=='request'||request.channel!=='roomcraft-ha')return;
 window.ops.push([request.method,request.payload]);
 const data=request.method==='GET'?{project:${JSON.stringify(project)},revision:'test-1',hotspots:[]}:
  request.method==='POST'?{revision:'test-2',imageUrl:'/fixture.png'}:undefined;
 event.source.postMessage({channel:'roomcraft-ha',kind:'response',id:request.id,ok:true,data},location.origin);
});
</script><iframe id="editor" width="100%" height="810" style="border:0" src="/local/roomcraft/editor.html"></iframe></body></html>`;
const server=createServer(async(request,response)=>{
  const name=new URL(request.url,'http://localhost').pathname;
  try{
    if(name==='/') {response.writeHead(200,{'Content-Type':'text/html'});return response.end(html);}
    if(name==='/api/dashboard') {
      response.writeHead(200,{'Content-Type':'application/json'});
      return response.end(JSON.stringify({project,revision:'hosted-fixture',hotspots:[]}));
    }
    const path=name==='/editor' ? 'editor.html' : name.replace(/^\/(?:local\/roomcraft\/)?/,'');
    if(path.includes('..')) throw new Error('Unknown fixture path');
    const type={'.js':'text/javascript','.css':'text/css','.html':'text/html','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'}[extname(path)]||'application/octet-stream';
    let contents=path==='storybook-editor.js'?code:await readFile(resolve(source,'public',path));
    if (process.env.ROOMCRAFT_TEST_LEGACY_MOUNT && path==='editor.html' && !contents.includes('id="sceneView"')) {
      contents=Buffer.from(contents.toString().replace('</body>', '<select id="sceneView" hidden><option value="plan">Plan</option></select></body>'));
    }
    response.writeHead(200,{'Content-Type':type});response.end(contents);
  }catch{response.writeHead(404);response.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const {port}=server.address();
const profile=join(qa,'chrome-profile');
const chrome=spawn(process.env.ROOMCRAFT_QA_CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless','--disable-gpu-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader',
  '--no-first-run','--no-default-browser-check','--hide-scrollbars','--disable-background-networking',
  '--remote-debugging-port=0','--user-data-dir='+profile,'about:blank',
],{windowsHide:true,stdio:'ignore'});
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function until(callback,label,timeout=45000){
  const limit=Date.now()+timeout;let last;
  while(Date.now()<limit){
    try{const result=await callback();if(result)return result;}catch(error){last=error;}
    await delay(125);
  }
  throw new Error(label+' timed out'+(last?' ('+last.message+')':''));
}
let ws;
try {
  const active=await until(()=>readFile(join(profile,'DevToolsActivePort'),'utf8'),'Chrome port');
  const chromePort=Number(active.split(/\r?\n/)[0]);
  const [page]=(await (await fetch('http://127.0.0.1:'+chromePort+'/json')).json()).filter(target=>target.type==='page');
  ws=new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
  const inflight=new Map(), errors=[];let seq=0;
  function send(method,params={}){
    const id=++seq;
    return new Promise((resolve,reject)=>{inflight.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  }
  ws.addEventListener('message',event=>{
    const message=JSON.parse(event.data);
    if(message.id){
      const pending=inflight.get(message.id);inflight.delete(message.id);
      if(message.error)pending?.reject(new Error(message.error.message));else pending?.resolve(message.result);
    }
    if(message.method==='Runtime.consoleAPICalled' && message.params.type==='error' && message.params.args.some(arg=>String(arg.value??arg.description).includes('THREE.'))) errors.push(message.params.args.map(arg=>arg.value??arg.description));
    if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails.exception?.description);
    if(message.method==='Fetch.requestPaused'){
      const {requestId,request:{url}}=message.params;
      if(url.startsWith('http://127.0.0.1:'+port+'/')||url.startsWith('data:image/png'))void send('Fetch.continueRequest',{requestId});
      else void send('Fetch.failRequest',{requestId,errorReason:'BlockedByClient'});
    }
  });
  const evaluate=async expression=>{
    const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
    if(result.exceptionDetails)throw new Error(result.exceptionDetails.exception?.description??result.exceptionDetails.text);
    return result.result?.value;
  };
  await send('Runtime.enable');
  await send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://127.0.0.1:'+port+'/'});
  await until(()=>evaluate("document.getElementById('editor')?.contentWindow.RoomcraftEditorViewport?.getProject().items.some(item=>item.id==='fixture-garage')"),'fixture project');
  const dom="document.getElementById('editor').contentDocument";
  const scoped=code=>evaluate(`((doc)=>{${code}})(${dom})`);

  const wd='document.getElementById("editor").contentWindow';
  const overhead=()=>scoped("return !doc.getElementById('sceneCanvas').hidden&&doc.getElementById('viewport').classList.contains('scene-3d')");
  await until(overhead,'3D overhead scene');
  assert.equal(await scoped("return doc.querySelector('#sceneView,.reference-card,#referenceModeButton')===null"),true);
  assert.equal(await scoped("return doc.querySelector('#exportDashboardButton + #backDashboardButton')?.textContent.includes('Return to live dashboard')"),true);
  const photo=async name=>{
    const result=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    await writeFile(join(qa,name+'.png'),Buffer.from(result.data,'base64'));
  };
  const result=await evaluate(`(() => {
    const w=${wd},api=w.RoomcraftEditorViewport,doc=w.document;
    const before=api.getProject(),baseline=w.RoomcraftPlanStructure(before);
    const street=plan=>{const value=w.RoomcraftExteriorQAStreetBounds(plan,before.terrain);
      return {nearZ:value.nearZ,farZ:value.farZ,sceneryMinZ:value.sceneryMinZ,
        samples:[0,1450,1570,1775,1750].map(x=>value.sample(x,value.nearZ))};};
    const beforeStreet=street(baseline);
    const field=(key,value)=>{const input=doc.getElementById('prop-'+key);if(!input)throw new Error('Missing '+key);
      input.value=String(value);input.dispatchEvent(new Event('change',{bubbles:true}));};
    const fail=message=>{throw new Error(message);};
    if(!api.applyModelCommand({kind:'place',modelId:'scenerySideRoad'})||!api.placeAt(1570,350))fail('Road placement failed');
    const road=api.getProject().items.find(i=>i.type==='scenerySideRoad');
    if(road.x!==1570||road.y!==350||road.w!==64||road.h!==380)fail('Road defaults or exterior position changed');
    const lock=doc.querySelector('[data-lock-dimensions]');lock.checked=false;lock.dispatchEvent(new Event('change',{bubbles:true}));
    field('w',80);
    if(api.getProject().items.find(i=>i.id===road.id).w!==80)fail('Road width edit failed');
    doc.getElementById('undoButton').click();api.selectItem(road.id);field('h',840);
    const resized=api.getProject().items.find(i=>i.id===road.id);
    if(resized.w!==64||resized.h!==840)fail('Road dimension edit/Undo failed');
    if(!doc.getElementById('prop-rotation').disabled||doc.querySelector('[data-action="rotate"]'))fail('Road rotation is not locked');
    field('rotation',90);
    if(api.getProject().items.find(i=>i.id===road.id).rotation!==0)fail('Manual road rotation was accepted');
    if(doc.getElementById('prop-entityId'))fail('Decorative road exposes device binding');
    if(api.applyModelCommand({kind:'bind',itemId:road.id,entityId:'switch.fixture'}))fail('Decorative road accepted device binding');
    if(!api.applyModelCommand({kind:'place',modelId:'sceneryRanchHouse'})||!api.placeAt(1775,420))fail('House placement failed');
    field('rotation',90);
    const house=api.getProject().items.find(i=>i.type==='sceneryRanchHouse');
    if(house.x!==1775||house.y!==420||house.w!==130||house.h!==176||house.rotation!==90)fail('House pose changed');
    if(!api.moveItem(house.id,1795,445))fail('Exterior house move failed');
    doc.getElementById('undoButton').click();
    const restored=api.getProject().items.find(i=>i.id===house.id);
    if(restored.x!==1775||restored.y!==420)fail('Exterior house Undo failed');
    api.useSelectTool();api.selectItem(house.id);
    if(api.getSelection()?.id!==house.id||doc.getElementById('prop-x')?.value!=='1775')fail('Exterior house selection failed');
    if(doc.getElementById('prop-entityId'))fail('Decorative house exposes device binding');
    if(api.applyModelCommand({kind:'bind',itemId:house.id,entityId:'light.fixture'}))fail('Decorative house accepted device binding');
    if(!api.applyModelCommand({kind:'place',modelId:'sceneryOfficeCampus'})||!api.placeAt(1750,700))fail('Office campus placement failed');
    field('rotation',90);
    const office=api.getProject().items.find(i=>i.type==='sceneryOfficeCampus');
    if(office.x!==1750||office.y!==700||office.w!==220||office.h!==180||office.rotation!==90)fail('Office campus pose changed');
    field('w',240);field('h',200);field('modelHeight',90);
    const resizedOffice=api.getProject().items.find(i=>i.id===office.id);
    if(resizedOffice.w!==240||resizedOffice.h!==200||resizedOffice.modelHeight!==90)fail('Office dimensions or height failed');
    field('w',220);field('h',180);field('modelHeight','');
    if(!api.moveItem(office.id,1770,720))fail('Exterior office move failed');
    doc.getElementById('undoButton').click();
    const restoredOffice=api.getProject().items.find(i=>i.id===office.id);
    if(restoredOffice.x!==1750||restoredOffice.y!==700)fail('Exterior office move Undo failed');
    api.useSelectTool();api.selectItem(office.id);
    if(api.getSelection()?.id!==office.id||doc.getElementById('prop-x')?.value!=='1750')fail('Office campus selection failed');
    if(doc.getElementById('prop-entityId'))fail('Decorative office exposes device binding');
    if(api.applyModelCommand({kind:'bind',itemId:office.id,entityId:'switch.fixture'}))fail('Decorative office accepted device binding');
    if(w.RoomcraftObjectControls.validBinding({...office,tapEntityId:'switch.fixture'}))fail('Decorative office accepted secondary binding');
    doc.querySelector('[data-action="delete"]').click();
    if(api.getProject().items.some(i=>i.id===office.id))fail('Office deletion failed');
    doc.getElementById('undoButton').click();api.selectItem(office.id);
    if(!api.getProject().items.some(i=>i.id===office.id))fail('Office delete Undo failed');
    const connections=layout=>{
      const compiled=w.RoomcraftPlanStructure(layout);
      return w.RoomcraftExteriorQARoads(compiled,w.RoomcraftExteriorQAStreetBounds(compiled,layout.terrain));
    };
    api.selectItem(road.id);field('h',380);
    if(connections(api.getProject())[0]?.connectors.some(c=>c.houseId===office.id))fail('Short road incorrectly reaches the office');
    doc.getElementById('undoButton').click();
    if(api.getProject().items.find(i=>i.id===road.id).h!==840)fail('Road length Undo failed');
    const restoredRoads=connections(api.getProject());
    if(restoredRoads.length!==1||restoredRoads[0].connectors.length!==3)fail('Restored road must connect both ranch driveways and office parking');
    const [route]=restoredRoads;
    if(route.forward.x!==0||route.forward.z!==1||Math.abs(route.end.x-1570)>1e-6||Math.abs(route.end.z-770)>1e-6)fail('Side road is not parallel to the home wall');
    const officeAccess=route.connectors.find(c=>c.houseId===office.id);
    if(!officeAccess||officeAccess.bay!=='parking-access'||officeAccess.start.x!==1665||officeAccess.start.z!==659||officeAccess.width!==20)fail('Office driveway misses its parking entrance');
    if(route.connectors.filter(c=>c.houseId===house.id).length!==2)fail('Both ranch driveways must remain connected');
    const existing=api.getProject();
    if(!api.applyModelCommand({kind:'place',modelId:'scenerySideRoad'})||!api.placeAt(-80,350))fail('Left branch placement failed');
    const leftRoad=api.getProject().items.find(i=>i.type==='scenerySideRoad'&&i.id!==road.id);
    field('h',840);
    if(!api.applyModelCommand({kind:'place',modelId:'scenerySchoolCampus'})||!api.placeAt(-300,475))fail('School campus placement failed');
    field('rotation',270);
    const school=api.getProject().items.find(i=>i.type==='scenerySchoolCampus');
    if(school.x!==-300||school.y!==475||school.w!==300||school.h!==240||school.rotation!==270)fail('School campus pose changed');
    field('w',330);field('h',260);field('modelHeight',40);
    const resizedSchool=api.getProject().items.find(i=>i.id===school.id);
    if(resizedSchool.w!==330||resizedSchool.h!==260||resizedSchool.modelHeight!==40)fail('School dimensions or height failed');
    field('w',300);field('h',240);field('modelHeight','');
    if(!api.moveItem(school.id,-330,495))fail('School move at negative coordinates failed');
    doc.getElementById('undoButton').click();api.selectItem(school.id);
    const restoredSchool=api.getProject().items.find(i=>i.id===school.id);
    if(restoredSchool.x!==-300||restoredSchool.y!==475)fail('School move Undo failed');
    if(api.getSelection()?.id!==school.id||doc.getElementById('prop-x')?.value!=='-300')fail('School selection failed');
    if(doc.getElementById('prop-entityId')||api.applyModelCommand({kind:'bind',itemId:school.id,entityId:'switch.fixture'}))fail('School exposed a device binding');
    if(w.RoomcraftObjectControls.validBinding({...school,holdEntityId:'light.fixture'}))fail('School accepted secondary binding');
    doc.querySelector('[data-action="delete"]').click();
    if(api.getProject().items.some(i=>i.id===school.id))fail('School deletion failed');
    doc.getElementById('undoButton').click();api.selectItem(school.id);
    if(!api.getProject().items.some(i=>i.id===school.id))fail('School delete Undo failed');
    const after=api.getProject(),plan=w.RoomcraftPlanStructure(after);
    for(const item of existing.items)if(JSON.stringify(after.items.find(i=>i.id===item.id))!==JSON.stringify(item))fail('School edit moved an existing object');
    const finalRoads=connections(after);
    if(finalRoads.length!==2)fail('Both independently placed branches must remain');
    const leftRoute=finalRoads.find(r=>r.id===leftRoad.id);
    if(!leftRoute||leftRoute.forward.x!==0||leftRoute.forward.z!==1||Math.abs(leftRoute.end.x+80)>1e-6||Math.abs(leftRoute.end.z-770)>1e-6)fail('Left branch alignment failed');
    const schoolAccess=leftRoute.connectors.find(c=>c.buildingId===school.id);
    if(leftRoute.connectors.length!==1||!schoolAccess||schoolAccess.bay!=='school-entry'||schoolAccess.width!==28||Math.abs(schoolAccess.start.x+180)>1e-6||Math.abs(schoolAccess.start.z-475)>1e-6)fail('School entrance misses the new branch');
    if(JSON.stringify(finalRoads.find(r=>r.id===road.id))!==JSON.stringify(restoredRoads[0]))fail('School addition changed the existing right road');
    for(const k of ['rooms','walls','hotspots'])if(JSON.stringify(after[k])!==JSON.stringify(before[k]))fail('Unrelated structure changed');
    if(JSON.stringify(after.items.find(i=>i.id==='fixture-garage'))!==JSON.stringify(before.items[0]))fail('Existing garage changed');
    if(JSON.stringify(plan.bounds)!==JSON.stringify(baseline.bounds))fail('Exterior scenery shifted the main framing bounds');
    if(JSON.stringify(plan.houseBounds)!==JSON.stringify(baseline.houseBounds))fail('Exterior scenery changed the home bounds');
    if(JSON.stringify(street(plan))!==JSON.stringify(beforeStreet))fail('Exterior scenery shifted the main street or coastline');
    const ground=plan.placements.filter(p=>['sceneryRanchHouse','scenerySideRoad','sceneryOfficeCampus','scenerySchoolCampus'].includes(p.item.type));
    return {count:after.items.length,beforeCount:before.items.length,
      ground:ground.map(p=>[p.item.type,p.baseY]),houseBounds:plan.houseBounds,bounds:plan.bounds,
      exteriorBounds:plan.exteriorBounds,street:street(plan),selection:api.getSelection(),
      connections:finalRoads.map(r=>({id:r.id,forward:r.forward,end:r.end,connectors:r.connectors.map(c=>({building:c.houseId,bay:c.bay,start:c.start,end:c.end,width:c.width}))}))};
  })()`);
  assert.equal(result.count,result.beforeCount+5);
  assert.deepEqual(result.ground,[['scenerySideRoad',-111],['sceneryRanchHouse',-111],['sceneryOfficeCampus',-111],['scenerySideRoad',-111],['scenerySchoolCampus',-111]]);
  assert.equal(result.houseBounds.maxX,1450);
  assert.ok(result.exteriorBounds.maxX>1536);
  assert.equal(await overhead(),true);
  await scoped("const category=doc.getElementById('objectCategory');category.value='scenery';category.dispatchEvent(new Event('change',{bubbles:true}))");
  await until(()=>scoped("const preview=doc.querySelector('canvas[data-preview=\"scenerySideRoad\"]');return preview?.dataset.painted==='true'"),'road thumbnail');
  const roadPixels=await scoped("const preview=doc.querySelector('canvas[data-preview=\"scenerySideRoad\"]');return Array.from(preview.getContext('2d').getImageData(0,0,preview.width,preview.height).data).filter((value,index)=>index%4===3&&value>0).length");
  assert.ok(roadPixels>300,'road catalog thumbnail must contain visible artwork');
  await until(()=>scoped("const preview=doc.querySelector('canvas[data-preview=\"sceneryOfficeCampus\"]');return preview?.dataset.painted==='true'"),'office thumbnail');
  const officePixels=await scoped("const preview=doc.querySelector('canvas[data-preview=\"sceneryOfficeCampus\"]');return Array.from(preview.getContext('2d').getImageData(0,0,preview.width,preview.height).data).filter((value,index)=>index%4===3&&value>0).length");
  assert.ok(officePixels>500,'office catalog thumbnail must contain visible artwork');
  await until(()=>scoped("const preview=doc.querySelector('canvas[data-preview=\"scenerySchoolCampus\"]');return preview?.dataset.painted==='true'"),'school thumbnail');
  const schoolPixels=await scoped("const preview=doc.querySelector('canvas[data-preview=\"scenerySchoolCampus\"]');return Array.from(preview.getContext('2d').getImageData(0,0,preview.width,preview.height).data).filter((value,index)=>index%4===3&&value>0).length");
  assert.ok(schoolPixels>500,'school catalog thumbnail must contain visible artwork');
  await photo('exterior-studio-default');
  await scoped("doc.getElementById('zoomOutButton').click();doc.getElementById('zoomOutButton').click()");
  await delay(800);
  await photo('exterior-studio-overview');
  await scoped("doc.getElementById('exportDashboardButton').click()");
  const body=await until(()=>evaluate("window.ops.find(([method])=>method==='POST')?.[1]"),'mock Save');
  const savedRoad=body.project.items.find(i=>i.type==='scenerySideRoad');
  const savedHouse=body.project.items.find(i=>i.type==='sceneryRanchHouse');
  const savedOffice=body.project.items.find(i=>i.type==='sceneryOfficeCampus');
  assert.deepEqual([savedRoad.x,savedRoad.y,savedRoad.w,savedRoad.h,savedRoad.rotation],[1570,350,64,840,0]);
  assert.deepEqual([savedHouse.x,savedHouse.y,savedHouse.w,savedHouse.h,savedHouse.rotation],[1775,420,130,176,90]);
  assert.deepEqual([savedOffice.x,savedOffice.y,savedOffice.w,savedOffice.h,savedOffice.rotation],[1750,700,220,180,90]);
  assert.equal(savedOffice.modelHeight,undefined);
  const savedLeftRoad=body.project.items.find(i=>i.type==='scenerySideRoad'&&i.x<0);
  const savedSchool=body.project.items.find(i=>i.type==='scenerySchoolCampus');
  assert.deepEqual([savedLeftRoad.x,savedLeftRoad.y,savedLeftRoad.w,savedLeftRoad.h,savedLeftRoad.rotation],[-80,350,64,840,0]);
  assert.deepEqual([savedSchool.x,savedSchool.y,savedSchool.w,savedSchool.h,savedSchool.rotation],[-300,475,300,240,270]);
  assert.equal(savedSchool.modelHeight,undefined);
  assert.equal(body.project.items.length,project.items.length+5);
  assert.deepEqual(body.project.items.find(i=>i.id==='fixture-garage'),garage);
  assert.ok(!savedRoad.entityId&&!savedHouse.entityId&&!savedOffice.entityId&&!savedSchool.entityId&&!savedLeftRoad.entityId);
  assert.ok(body.pngDataUrl.startsWith('data:image/png;base64,'));
  const savedConnections=await evaluate(`(()=>{
    const w=${wd},saved=window.ops.find(([method])=>method==='POST')[1].project;
    const plan=w.RoomcraftPlanStructure(saved),street=w.RoomcraftExteriorQAStreetBounds(plan,saved.terrain);
    return w.RoomcraftExteriorQARoads(plan,street).map(r=>({id:r.id,forward:r.forward,end:r.end,
      connectors:r.connectors.map(c=>({building:c.houseId,bay:c.bay,start:c.start,end:c.end,width:c.width}))}));
  })()`);
  assert.deepEqual(savedConnections,result.connections,'saved layout deterministically rebuilds the same cardinal road and all driveways');
  await writeFile(join(qa,'evidence.json'),JSON.stringify(result,null,2));
  assert.deepEqual(errors,[]);
  console.log('PASS: Studio exterior catalog placement, position/rotation/dimension controls, move/Undo, road-length Undo and two branches and four connected entrances, decorative binding guards, unchanged home/street bounds, ground elevations, selection and PNG+layout mock Save; no physical actions');
  console.log(qa);
} finally {
  ws?.close();
  chrome.kill();
  server.close();
}
