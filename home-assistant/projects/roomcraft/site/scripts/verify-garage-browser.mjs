import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {createRequire} from 'node:module';
const source=process.cwd();
const {build}=createRequire(join(source,'package.json'))('esbuild');
const qa=await mkdtemp(join(tmpdir(),'roomcraft-garage-qa-'));
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
  points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}]}],walls:[],hotspots:[],items:[vacuum,...kitchen,{id:"fixture-garage",type:"garageDoor",name:"Garage",x:306,y:112,w:132,h:92,rotation:0}]};
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
    const before=api.getProject();
    const field=(key,value)=>{const input=doc.getElementById('prop-'+key);if(!input)throw new Error('Missing '+key);input.value=String(value);input.dispatchEvent(new Event('change',{bubbles:true}));};
    api.selectItem('fixture-garage');
    const lock=doc.querySelector('[data-lock-dimensions]');lock.checked=false;lock.dispatchEvent(new Event('change',{bubbles:true}));
    field('h',120);field('rotation',180);field('garageRoof','cutaway');field('garageDriveway','true');field('garageDrivewayWidth',86);
    const garage=api.getProject().items.find(i=>i.id==='fixture-garage');
    if(garage.h!==120||garage.garageRoof!=='cutaway'||garage.garageDriveway!==true)throw new Error('Garage edit failed');
    if(!api.applyModelCommand({kind:'place',modelId:'garagePriusBlue'})||!api.placeAt(306,112))throw new Error('Car placement failed');
    field('rotation',180);
    const car=api.getProject().items.find(i=>i.type==='garagePriusBlue');
    if(!api.moveItem(car.id,300,112))throw new Error('Car move failed');
    doc.getElementById('undoButton').click();
    if(api.getProject().items.find(i=>i.id===car.id).x!==306)throw new Error('Car Undo failed');
    if(!api.applyModelCommand({kind:'place',modelId:'garageCeilingLight'})||!api.placeAt(338,112))throw new Error('Light placement failed');
    field('rotation',180);
    const after=api.getProject();
    for(const k of ['rooms','walls','hotspots'])if(JSON.stringify(after[k])!==JSON.stringify(before[k]))throw new Error('Unrelated structure changed');
    const placements=w.RoomcraftPlanStructure(after).placements;
    const ground=placements.filter(p=>['garageDoor','garagePriusBlue','garageCeilingLight'].includes(p.item.type));
    api.selectItem('fixture-garage');
    return {count:after.items.length,beforeCount:before.items.length,ground:ground.map(p=>[p.item.type,p.baseY]),unbound:after.items.find(i=>i.type==='garageCeilingLight').entityId===''};
  })()`);
  assert.equal(result.count,result.beforeCount+2);
  assert.deepEqual(result.ground,[['garageDoor',-111],['garagePriusBlue',-105.79],['garageCeilingLight',-111]]);
  assert.equal(result.unbound,true,'no invented light binding');
  assert.equal(await overhead(),true);
  await photo('garage-studio');
  await scoped("doc.getElementById('exportDashboardButton').click()");
  const body=await until(()=>evaluate("window.ops.find(([method])=>method==='POST')?.[1]"),'mock Save');
  assert.ok(body.project.items.some(i=>i.type==='garagePriusBlue'));
  assert.equal(body.project.items.find(i=>i.id==='fixture-garage').garageDriveway,true);
  assert.ok(body.pngDataUrl.startsWith('data:image/png;base64,'));
  assert.deepEqual(errors,[]);
  console.log('PASS: Studio garage Inspector, independent Prius/light catalog placement, movement, Undo, correct first-floor elevations, unassigned light, mock Save; no physical actions');
  console.log(qa);
} finally {
  ws?.close();
  chrome.kill();
  server.close();
}
