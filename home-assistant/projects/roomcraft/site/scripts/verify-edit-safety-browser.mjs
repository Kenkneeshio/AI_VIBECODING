import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {createRequire} from 'node:module';
const source=process.cwd();
const {build}=createRequire(join(source,'package.json'))('esbuild');
const qa=await mkdtemp(join(tmpdir(),'roomcraft-edit-safety-qa-'));
const code=process.env.ROOMCRAFT_LIDAR_QA_DIST ? await readFile(join(source,'public','storybook-editor.js')) :
  (await build({absWorkingDir:source,bundle:true,target:'es2022',format:'iife',write:false,
   entryPoints:['ha-local/storybook-editor.mjs'],minify:true})).outputFiles[0].contents;
const kitchen=[
  {id:'i7',type:'counter',name:'Sink counter',x:540,y:500,w:56,h:234,rotation:0},
  {id:'i8',type:'counter',name:'Island',x:702,y:500,w:59,h:235,rotation:0},
];
const vacuum={id:'fixture-vacuum',type:'cleaning-round-robot-vac-white',name:'Survey vacuum',x:360,y:450,w:58,h:58,rotation:0,
  entityId:'vacuum.fixture',vacuumMapEntityId:'camera.fixture_lidar',vacuumPositionTransform:[.1,0,100,0,.1,120],vacuumMapId:9};
const project={version:2,editableReferenceVersion:10,rooms:[{id:'survey-room',name:'Survey room',surface:'oak',label:{x:425,y:380},
  points:[{x:100,y:120},{x:900,y:120},{x:900,y:720},{x:100,y:720}]}],walls:[],hotspots:[],items:[vacuum,...kitchen]};
const hosted = {...project, items:[{...vacuum,id:'spare-vacuum',name:'Spare vacuum',
  entityId:'vacuum.spare',vacuumMapEntityId:undefined},vacuum]};
const html=`<!DOCTYPE html><html><head><meta name=viewport content="width=device-width, initial-scale=1"></head><body style="margin:0"><script>
const canvas=document.createElement('canvas');canvas.width=400;canvas.height=300;
const ctx=canvas.getContext('2d');ctx.fillStyle='#467fbd';ctx.fillRect(0,0,400,300);
ctx.strokeStyle='#fff';ctx.lineWidth=8;ctx.strokeRect(40,50,280,200);
const source={imageDataUrl:canvas.toDataURL(),pixelToMap:[10,0,0,0,10,0],mapUnitsPerMetre:1000,mapId:17};
window.ops=[];
window.addEventListener('message',event=>{
 const request=event.data;
 if(request?.kind!=='request'||request.channel!=='roomcraft-ha')return;
 window.ops.push([request.method,request.payload]);
 const data=request.method==='GET'?{project:${JSON.stringify(project)},revision:'test-1',hotspots:[]}:
  request.method==='POST'?{revision:'test-2',imageUrl:'/fixture.png'}:request.method==='VACUUM_MAP_GET'?source:undefined;
 event.source.postMessage({channel:'roomcraft-ha',kind:'response',id:request.id,ok:true,data},location.origin);
});
</script><iframe id="editor" width="100%" height="810" style="border:0" src="/local/roomcraft/editor.html"></iframe></body></html>`;
const server=createServer(async(request,response)=>{
  const name=new URL(request.url,'http://localhost').pathname;
  try{
    if(name==='/') {response.writeHead(200,{'Content-Type':'text/html'});return response.end(html);}
    if(name==='/api/dashboard') {
      response.writeHead(200,{'Content-Type':'application/json'});
      return response.end(JSON.stringify({project:hosted,revision:'hosted-fixture',hotspots:[]}));
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
  await until(()=>evaluate("document.getElementById('editor')?.contentWindow.RoomcraftEditorViewport?.getProject().items.some(item=>item.id==='fixture-vacuum')"),'fixture project');
  const dom="document.getElementById('editor').contentDocument";
  const scoped=code=>evaluate(`((doc)=>{${code}})(${dom})`);

  const wd='document.getElementById("editor").contentWindow';
  const projectExpression=wd+'.RoomcraftEditorViewport.getProject()';
  const overhead=()=>scoped("return !doc.getElementById('sceneCanvas').hidden&&doc.getElementById('viewport').classList.contains('scene-3d')");
  await until(overhead,'3D overhead scene');
  assert.equal(await scoped("return doc.querySelector('#sceneView,.reference-card,#referenceModeButton')===null"),true);
  assert.equal(await scoped("return doc.querySelector('#exportDashboardButton + #backDashboardButton')?.textContent.includes('Return to live dashboard')"),true);
  const at=async(x,y)=>scoped('const stage=doc.getElementById("canvasStage").getBoundingClientRect(),frame=doc.defaultView.frameElement.getBoundingClientRect();return {x:Math.round(frame.left+stage.left+'+x+'*stage.width/1536),y:Math.round(frame.top+stage.top+'+y+'*stage.height/1024)}');
  const mouse=async(type,x,y,buttons=1)=>{
    const position=await at(x,y);
    await send('Input.dispatchMouseEvent',{type,...position,button:'left',buttons,clickCount:1});
  };
  const clickWorld=async(x,y)=>{
    await mouse('mousePressed',x,y);
    await mouse('mouseReleased',x,y,0);
  };

  const terrain=()=>evaluate(projectExpression+'.terrain');
  const photo=async name=>{
    const result=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    await writeFile(join(qa,name+'.png'),Buffer.from(result.data,'base64'));
  };
  const beforeProject=await evaluate(projectExpression);
  assert.equal(await terrain(), undefined);
  await scoped("doc.querySelector('[data-panel=terrain]').click()");
  await until(()=>scoped("return !doc.getElementById('terrainPanel').hidden && !doc.getElementById('terrainBrush').disabled"),'Terrain tab enabled');
  for(let n=0;n<5;n++) await scoped("doc.getElementById('zoomOutButton').click()");
  const canvasHit=async(x,y)=>{
    const p=await at(x,y);
    return evaluate('(()=>{const iframe=document.getElementById("editor"),r=iframe.getBoundingClientRect();return iframe.contentDocument.elementFromPoint('+p.x+'-r.left,'+p.y+'-r.top)?.id})()');
  };
  const safe={x:1120,y:608}, edge={x:1184,y:640}, protectedPoint={x:608,y:416};
  assert.equal(await canvasHit(safe.x,safe.y),'sceneCanvas','safe brush coordinate is visible');
  assert.equal(await canvasHit(edge.x,edge.y),'sceneCanvas','drag endpoint is visible');
  await mouse('mouseMoved',protectedPoint.x,protectedPoint.y,0);
  assert.equal(await scoped("return doc.querySelector('.terrain-brush-overlay').hasAttribute('data-blocked')"),true);
  await clickWorld(protectedPoint.x,protectedPoint.y);
  assert.equal(await terrain(),undefined,'protected house never writes terrain');
  await mouse('mousePressed',safe.x,safe.y);
  await mouse('mouseMoved',1152,625);
  await mouse('mouseMoved',edge.x,edge.y);
  assert.equal(await terrain(),undefined,'in-progress gesture stays in preview');
  await mouse('mouseReleased',edge.x,edge.y,0);
  const raised=await until(()=>terrain(),'raised terrain');
  assert.ok(raised.cells.length>4 && raised.cells.every(cell=>cell.height>0 && cell.col>=31));
  assert.ok(await overhead(),'3D stays active after Raise');
  await scoped("doc.querySelector('[data-terrain-mode=paint]').click();doc.getElementById('terrainCover').value='scrub';");
  assert.equal(await scoped("return !doc.getElementById('terrainCoverLabel').hidden"),true);
  await clickWorld(safe.x,safe.y);
  const painted=await until(async()=>{const t=await terrain();return t.cells.some(cell=>cell.cover==='scrub'&&cell.height>0)&&t;},'painted terrain');
  await scoped("doc.getElementById('undoButton').click()");
  assert.deepEqual(await terrain(),raised,'one Undo reverts the whole paint gesture');
  await scoped("doc.getElementById('redoButton').click()");
  assert.deepEqual(await terrain(),painted,'Redo restores paint and heights');
  await scoped("doc.querySelector('[data-terrain-mode=place]').click();doc.getElementById('terrainProp').value='oak';");
  assert.equal(await scoped("return !doc.getElementById('terrainPropLabel').hidden"),true);
  await clickWorld(safe.x,safe.y);
  const planted=await until(async()=>{const t=await terrain();return t.cells.some(cell=>cell.prop==='oak')&&t;},'placed one coast oak');
  assert.equal(planted.cells.filter(cell=>cell.prop).length,1);
  assert.ok(planted.cells.some(cell=>cell.prop==='oak'&&cell.cover==='scrub'&&cell.height>0));
  await scoped("doc.getElementById('terrainProp').value='';");
  await clickWorld(safe.x,safe.y);
  assert.deepEqual(await terrain(),painted,'remove object preserves sculpt and paint');
  await scoped("doc.getElementById('undoButton').click()");
  assert.deepEqual(await terrain(),planted,'Undo restores placed object');
  await scoped("const s=doc.querySelector('[data-terrain-setting=road]');s.closest('details').open=true;s.value='winding';s.dispatchEvent(new Event('change',{bubbles:true}));");
  assert.equal((await terrain()).road,'winding');
  await scoped("const s=doc.querySelector('[data-terrain-setting=yardAccess]');s.checked=false;s.dispatchEvent(new Event('change',{bubbles:true}));");
  assert.equal((await terrain()).yardAccess,false);

  await send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:1});
  await scoped("doc.querySelector('[data-terrain-mode=lower]').click()");
  const touchWorld={x:1104,y:820};
  assert.equal(await canvasHit(touchWorld.x,touchWorld.y),'sceneCanvas','touch coordinate is visible');
  const touch=await at(touchWorld.x,touchWorld.y);
  await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...touch,id:1}]});
  await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  const touched=await until(async()=>{const t=await terrain();return t.cells.some(cell=>cell.height<0)&&t;},'touch lowers terrain');
  assert.ok(await overhead(),'3D stays active after touchscreen edit');
  const afterProject=await evaluate(projectExpression);
  for(const key of ['rooms','walls','items','hotspots'])assert.deepEqual(afterProject[key],beforeProject[key],key+' unchanged by terrain edits');
  await photo('terrain-studio');
  await scoped("doc.getElementById('exportDashboardButton').click()");
  const body=await until(()=>evaluate("window.ops.find(([method,body])=>method==='POST'&&body.revision==='test-1')?.[1]"),'mocked Save body');
  assert.deepEqual(body.project.terrain,touched,'published project keeps canonical terrain, prop and presets');
  assert.ok(body.pngDataUrl.startsWith('data:image/png;base64,'));
  await until(()=>scoped("return doc.getElementById('dashboardTransferStatus').textContent.includes('saved to the live dashboard')"),'mocked Save confirmation');
  // Isolated fixture: no real Home Assistant or physical device operations.
  const savedProject=await evaluate(projectExpression);
  await evaluate(wd+'.RoomcraftEditorViewport.setTerrain({cells:[{col:32,row:19,height:64,cover:"scrub",prop:"sage"}]})');
  assert.equal((await terrain()).cells[0].height,24,'completed spike auto-repairs');
  assert.equal(await evaluate(wd+'.RoomcraftEditorViewport.getSafetyState().kind'),'repaired');
  await scoped("doc.getElementById('undoButton').click()");
  assert.deepEqual(await evaluate(projectExpression),savedProject,'Undo restores pre-repair draft');
  await scoped("doc.getElementById('redoButton').click()");
  assert.equal((await terrain()).cells[0].height,24,'Redo restores repaired terrain');
  await scoped("doc.getElementById('undoButton').click()");
  const redoWasAvailable=await scoped("return !doc.getElementById('redoButton').disabled");
  assert.equal(redoWasAvailable,true);
  await scoped("doc.querySelector('[data-tool=room]').click()");
  await clickWorld(300,300);
  assert.equal(await evaluate(wd+'.RoomcraftEditorViewport.getSelection().kind'),'room');
  const oldRoom=await evaluate(projectExpression+'.rooms[0]');
  const posts=await evaluate("window.ops.filter(([method])=>method==='POST').length");
  await mouse('mousePressed',100,120);
  await mouse('mouseMoved',1000,500);
  await scoped("doc.getElementById('exportDashboardButton').click()");
  assert.equal(await evaluate("window.ops.filter(([method])=>method==='POST').length"),posts,'Save refuses incomplete drag');
  await mouse('mouseReleased',1000,500,0);
  assert.equal(await evaluate(wd+'.RoomcraftEditorViewport.getSafetyState().kind'),'blocked');
  assert.deepEqual(await evaluate(projectExpression+'.rooms[0]'),oldRoom,'self-crossed room restored');
  assert.equal(await scoped("return !doc.getElementById('redoButton').disabled"),true,'failed edit preserves Redo');
  await scoped("doc.getElementById('redoButton').click()");
  assert.equal((await terrain()).cells[0].height,24);
  await scoped("doc.getElementById('exportButton').click();doc.getElementById('repairLayoutButton').click()");
  assert.match(await evaluate(wd+'.RoomcraftEditorViewport.getSafetyState().message'),/checks passed/);
  assert.ok(await overhead(),'3D remains active after auto repair and rejection');
  await photo('edit-safety');
  assert.deepEqual(errors,[]);
  console.log('PASS: Auto repair, self-crossing rollback, incomplete-save block, preserved Redo, menu check; Terrain UI, protected house, drag Raise, Paint, Undo/Redo, Place/remove, landscape settings, touch Lower, local mocked Save only');
  console.log(qa);
} finally {
  ws?.close();
  chrome.kill();
  server.close();
}
