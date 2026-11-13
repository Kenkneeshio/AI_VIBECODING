import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {build,stop} from 'esbuild';

// Two isolated browser storage contexts share only the same synthetic HA account.
// Home, the HA editor card, iframe bridge and Studio renderer are production code.
const source=process.cwd(),dist=Boolean(process.env.ROOMCRAFT_DEVICE_CAMERA_QA_DIST);
const qa=await mkdtemp(join(tmpdir(),'roomcraft-device-camera-qa-'));
const entries=[
  ['roomcraft-storybook.js','ha-local/roomcraft-storybook.mjs','dist/ha-local/roomcraft-storybook.js','esm'],
  ['roomcraft-card.js','ha-local/roomcraft-card.js','dist/ha-local/roomcraft-card.js','esm'],
  ['storybook-editor.js','ha-local/storybook-editor.mjs','dist/client/storybook-editor.js','iife'],
];
const bundles=new Map();
try{
  const results=await Promise.allSettled(entries.map(async([name,entry,built,format])=>[name,dist
    ?await readFile(join(source,built))
    :(await build({absWorkingDir:source,bundle:true,target:'es2022',format,write:false,
      entryPoints:[entry],minify:true})).outputFiles[0].contents]));
  for(const result of results){if(result.status==='rejected')throw result.reason;bundles.set(...result.value);}
}finally{stop();}
const legacy={preset:'free',azimuth:14,tilt:25,zoom:1.04};
const project={version:2,editableReferenceVersion:10,hotspots:[],rooms:[{
  id:'home-floor',name:'Fixture home',surface:'oak',label:{x:900,y:500},
  points:[{x:420,y:210},{x:1485,y:210},{x:1485,y:850},{x:420,y:850}],
}],walls:[
  {id:'north',x1:420,y1:210,x2:1485,y2:210},
  {id:'east',x1:1485,y1:210,x2:1485,y2:850},
  {id:'south',x1:420,y1:850,x2:1485,y2:850},
  {id:'west',x1:420,y1:210,x2:420,y2:850},
],items:[
  {id:'fixture-sofa',type:'sofa',name:'Sofa',x:570,y:350,w:150,h:75,rotation:0},
  {id:'fixture-table',type:'diningTable',name:'Table',x:800,y:600,w:100,h:70,rotation:0},
  {id:'fixture-lamp',type:'lamp',name:'Lamp',x:1050,y:400,w:48,h:60,rotation:0},
  {id:'fixture-family',type:'sceneryRanchHouse',name:'Gold Coast',x:1775,y:420,w:130,h:176,rotation:90},
  {id:'fixture-school',type:'scenerySchoolCampus',name:'Elementary school',x:-300,y:475,w:300,h:240,rotation:270},
  {id:'fixture-office',type:'sceneryOfficeCampus',name:'Innoflight',x:1750,y:700,w:220,h:180,rotation:90},
],sceneSettings:{worldLife:{enabled:true}}};
const config={title:'Fixture home',views:[{path:'home',title:'Home'}],fixtureUnrelated:{preserve:true},
  roomcraft_layout:project,roomcraft_plan:{type:'picture-elements',elements:[],image:'/api/image/serve/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/original'}};
const html=`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#e7eadb"><script>
window.ops=JSON.parse(sessionStorage.getItem('qa.operations')||'[]');window.bridgeOps=[];window.fixtureConfig=${JSON.stringify(config)};
window.recordOperation=request=>{ops.push(structuredClone(request));sessionStorage.setItem('qa.operations',JSON.stringify(ops));};
window.originalStates={'light.fixture':{state:'off',attributes:{brightness:0}}};
localStorage.setItem('roomcraft.idle-camera.v1',JSON.stringify({enabled:false}));
window.fixtureSession={connected:true,user:{id:'fixture-same-user',is_admin:true},states:structuredClone(originalStates),
 config:{time_zone:'America/Los_Angeles'},panels:{'roomcraft-home':{}},
 callWS:async request=>{recordOperation(request);
  if(request.type==='lovelace/config')return structuredClone(fixtureConfig);
  if(request.type==='frontend/get_user_data')return {value:${JSON.stringify(legacy)}};
  throw Error('Unexpected HA operation: '+request.type);},
 callService:()=>{recordOperation({type:'FORBIDDEN_SERVICE'});throw Error('Camera preferences must not operate devices');}};
window.addEventListener('message',e=>{if(e.origin===location.origin&&e.data?.channel==='roomcraft-ha'&&e.data.kind==='request')bridgeOps.push(e.data.method);});
</script><script type="module">
import '/local/roomcraft/roomcraft-card.js';
import '/local/roomcraft/roomcraft-storybook.js';
window.mountHome=()=>{window.studio=undefined;window.card=document.createElement('roomcraft-storybook-card');
 card.setConfig({dashboard:'roomcraft-home'});card.hass=fixtureSession;document.body.replaceChildren(card);};
window.mountStudio=()=>{window.card=undefined;window.studio=document.createElement('roomcraft-editor-card');
 studio.setConfig({dashboard:'roomcraft-home'});studio.hass=fixtureSession;document.body.replaceChildren(studio);};
mountHome();
</script></body></html>`;
const server=createServer(async(request,response)=>{
  try{
    const name=new URL(request.url,'http://localhost').pathname;
    if(name==='/'||name.startsWith('/roomcraft-home/')){response.writeHead(200,{'Content-Type':'text/html'});return response.end(html);}
    const path=name.replace(/^\/(?:local\/roomcraft\/)?/,'');if(path.includes('..'))throw Error('Invalid fixture path');
    const type={'.js':'text/javascript','.css':'text/css','.html':'text/html','.mp3':'audio/mpeg','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'}[extname(path)]??'application/octet-stream';
    const data=bundles.get(path)??await readFile(resolve(source,dist?'dist/client':'public',path));
    response.writeHead(200,{'Content-Type':type});response.end(data);
  }catch{response.writeHead(404);response.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const {port}=server.address(),origin='http://127.0.0.1:'+port;
const profile=join(qa,'chrome-profile');
const chrome=spawn(process.env.ROOMCRAFT_QA_CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless','--disable-gpu-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader',
  '--no-first-run','--no-default-browser-check','--hide-scrollbars','--disable-background-networking',
  '--remote-debugging-port=0','--user-data-dir='+profile,'about:blank',
],{windowsHide:true,stdio:'ignore'});
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function until(callback,label,timeout=60000){
  const end=Date.now()+timeout;let last;
  while(Date.now()<end){try{const result=await callback();if(result)return result;}catch(error){last=error;}await delay(125);}
  throw Error(label+' timed out'+(last?' ('+last.message+')':''));
}
const sockets=[],errors=[],clients=[];
async function connect(url,label){
  const ws=new WebSocket(url);sockets.push(ws);
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
  const inflight=new Map();let sequence=0;
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++sequence;inflight.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  ws.addEventListener('message',event=>{
    const m=JSON.parse(event.data);
    if(m.id){const task=inflight.get(m.id);inflight.delete(m.id);if(m.error)task?.reject(Error(m.error.message));else task?.resolve(m.result);}
    if(m.method==='Runtime.exceptionThrown')errors.push({label,error:m.params.exceptionDetails.exception?.description});
    if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error'&&m.params.args.some(arg=>String(arg.value??arg.description).includes('THREE.')))
      errors.push({label,error:m.params.args.map(arg=>arg.value??arg.description)});
    if(m.method==='Fetch.requestPaused'){
      const {requestId,request:{url}}=m.params;
      void send(url.startsWith(origin+'/')||url.startsWith('data:image/')?'Fetch.continueRequest':'Fetch.failRequest',
        url.startsWith(origin+'/')||url.startsWith('data:image/')?{requestId}:{requestId,errorReason:'BlockedByClient'});
    }
  });
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
    if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description??r.exceptionDetails.text);return r.result?.value;};
  return {send,evaluate,label};
}
const ready=client=>until(()=>client.evaluate('Boolean(window.card?.scene&&card.frame&&!card.startupViewRequest&&card.startupViewRead&&card.lastSceneRenderAt)'),'Home ready '+client.label);
const view=client=>client.evaluate('card.scene.getView()');
const preference=client=>client.evaluate("customElements.get('roomcraft-editor-card').readStartupView(fixtureSession,'roomcraft-home')");
async function activate(client){await client.send('Page.bringToFront');await until(()=>client.evaluate('!document.hidden'),'visible '+client.label);}
async function photo(client,name){const r=await client.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await writeFile(join(qa,name+'.png'),Buffer.from(r.data,'base64'));}
async function tap(client,selector){
  const p=await client.evaluate(`(()=>{const e=card.shadowRoot.querySelector(${JSON.stringify(selector)}),r=e?.getBoundingClientRect();
    if(!r?.width||!r.height)throw Error('Hidden or missing touch target');return {x:r.x+r.width/2,y:r.y+r.height/2};})()`);
  await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...p,id:1}]});await delay(70);
  await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await delay(150);
}
async function choose(client,preset){
  await tap(client,'.main-menu-button');
  await client.evaluate(`(()=>{card.viewSelect.value=${JSON.stringify(preset)};card.viewSelect.dispatchEvent(new Event('change',{bubbles:true}));})()`);
  await until(async()=>!await client.evaluate('Boolean(card.pendingCameraView)')&&(await view(client)).preset===preset,'view '+preset);
  await delay(300);return view(client);
}
async function save(client){await tap(client,'.main-menu-button');await tap(client,'[data-camera=save-default]');
  await until(()=>client.evaluate('!card.startupViewRequest&&Boolean(card.savedStartupView)'),'saved local default');
  if(!await client.evaluate('card.mainMenu.hidden'))await tap(client,'.close-main-menu');return preference(client);}
async function reload(client){await client.evaluate('window.reloadMarker=true');await client.send('Page.reload');
  await until(()=>client.evaluate('!window.reloadMarker&&Boolean(window.card?.scene&&card.startupViewRead&&!card.startupViewRequest&&card.lastSceneRenderAt)'),'reloaded '+client.label);}
const child='studio.shadowRoot.querySelector("iframe").contentWindow';
const studioEval=(client,body)=>client.evaluate(`((w)=>{${body}})(${child})`);

try{
  const active=await until(()=>readFile(join(profile,'DevToolsActivePort'),'utf8'),'Chrome port');
  const [chromePort,browserPath]=active.trim().split(/\r?\n/);
  const browser=await connect('ws://127.0.0.1:'+chromePort+browserPath,'browser');
  async function frontend(label){
    const {browserContextId}=await browser.send('Target.createBrowserContext');
    const {targetId}=await browser.send('Target.createTarget',{url:'about:blank',browserContextId});
    const target=await until(async()=>(await(await fetch('http://127.0.0.1:'+chromePort+'/json/list')).json()).find(t=>t.id===targetId),'frontend '+label);
    const client=await connect(target.webSocketDebuggerUrl,label);clients.push(client);
    await client.send('Runtime.enable');await client.send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
    await client.send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:1});
    await client.send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
    await client.send('Page.navigate',{url:origin+'/roomcraft-home/home'});await activate(client);await ready(client);return client;
  }
  const a=await frontend('frontend-a');await a.evaluate('card.remove()');
  const b=await frontend('frontend-b');
  const initialA=await preference(a),initialB=await preference(b);
  assert.deepEqual(initialA,legacy);assert.deepEqual(initialB,legacy,'same account starts from the same legacy preference');
  const bInitialView=await view(b);await b.evaluate('card.remove()');
  await activate(a);await a.evaluate('mountHome()');await ready(a);
  const fronts={};
  for(const preset of ['goldcoast','school','innoflight']){
    fronts[preset]=await choose(a,preset);await photo(a,'front-'+preset);
    assert.equal(fronts[preset].preset,preset);
    assert.ok([fronts[preset].azimuth,fronts[preset].tilt,fronts[preset].zoom].every(Number.isFinite));
  }
  await choose(a,'goldcoast');const freeFromFront=await choose(a,'free');
  assert.equal(freeFromFront.framePreset,'goldcoast','Free retains the selected landmark frame');
  assert.equal(freeFromFront.azimuth,fronts.goldcoast.azimuth,'Free begins at the actual fitted front angle');
  await choose(a,'goldcoast');const savedA=await save(a);
  assert.equal(savedA.preset,'goldcoast');
  await reload(a);const goldDefault=await view(a);
  assert.equal(goldDefault.preset,'default');assert.equal(goldDefault.framePreset,'goldcoast');
  assert.deepEqual(await preference(b),initialB,'saving A never changes B');
  await photo(a,'frontend-a-restored-default');

  await tap(a,'.main-menu-button');await tap(a,'.idle-start');
  await until(()=>a.evaluate('card.idleCamera.getState().active'),'instant idle with local framed default',5000);
  await delay(500);
  await tap(a,'.main-menu-button');
  assert.equal(await a.evaluate('card.idleCamera.getState().active'),false);
  assert.deepEqual(await view(a),goldDefault,'wake restores local pose and landmark framing');
  assert.equal(await a.evaluate('card.mainMenu.hidden'),true,'wake does not also open menu');

  // A same-document bridge save must refresh an already mounted Home card.
  await a.evaluate(`customElements.get('roomcraft-editor-card').writeStartupView(fixtureSession,'roomcraft-home',${JSON.stringify({preset:'school',azimuth:90,tilt:58,zoom:1})})`);
  await until(()=>a.evaluate("card.savedStartupView?.preset==='school'&&!card.startupViewRequest"),'mounted Home preference event');
  await choose(a,'default');assert.equal((await view(a)).framePreset,'school');
  await a.evaluate(`customElements.get('roomcraft-editor-card').writeStartupView(fixtureSession,'roomcraft-home',${JSON.stringify(savedA)})`);
  await until(()=>a.evaluate("card.savedStartupView?.preset==='goldcoast'&&!card.startupViewRequest"),'mounted Home preference restored');
  await choose(a,'default');assert.deepEqual(await view(a),goldDefault);

  await a.evaluate('mountStudio()');
  await until(()=>studioEval(a,"return Boolean(w.RoomcraftStudioScene&&w.RoomcraftEditorViewport?.getProject().items.some(i=>i.id==='fixture-sofa'))"),'actual embedded Studio');
  const studioDraft=await studioEval(a,'return w.RoomcraftEditorViewport.getProject()');
  await studioEval(a,"w.RoomcraftEditorViewport.selectItem('fixture-sofa');");
  assert.equal(await studioEval(a,'return w.RoomcraftStudioScene.getView().preset'),'top','Studio still starts in safe overhead edit mode');
  assert.deepEqual(await studioEval(a,"return w.RoomcraftDashboardBridge.request('CAMERA_GET')"),savedA,'Studio shares its HA frontend preference');
  await studioEval(a,"w.document.querySelector('#cameraViewsButton').click();");
  await until(()=>studioEval(a,"return !w.document.querySelector('#studioPreviewView').disabled"),'Studio camera preference ready');
  await studioEval(a,`const close=w.document.querySelector('#studioCloseCamera');close.focus();
    close.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Delete',code:'Delete',bubbles:true,cancelable:true}));
    close.dispatchEvent(new w.KeyboardEvent('keydown',{key:'z',code:'KeyZ',ctrlKey:true,bubbles:true,cancelable:true}));`);
  assert.deepEqual(await studioEval(a,'return w.RoomcraftEditorViewport.getProject()'),studioDraft,'modal camera settings isolate Delete and Undo shortcuts');
  await studioEval(a,"w.document.querySelector('#studioCameraView').value='default';w.document.querySelector('#studioPreviewView').click();");
  await until(()=>studioEval(a,'return w.RoomcraftStudioScene.isCameraPreview'),'Studio default preview');
  assert.deepEqual(await studioEval(a,'return w.RoomcraftStudioScene.getView()'),goldDefault);
  await photo(a,'studio-local-default-preview');
  await studioEval(a,"w.document.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Delete',code:'Delete',bubbles:true,cancelable:true}));");
  assert.deepEqual(await studioEval(a,'return w.RoomcraftEditorViewport.getProject()'),studioDraft,'Delete cannot edit the selected object while previewing');
  await studioEval(a,"w.document.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',code:'Escape',bubbles:true,cancelable:true}));");
  assert.equal(await studioEval(a,'return w.RoomcraftStudioScene.isCameraPreview'),false,'Escape restores overhead editing');
  await studioEval(a,"w.document.querySelector('#cameraViewsButton').click();");
  await until(()=>studioEval(a,"return !w.document.querySelector('#studioSaveDefault').disabled"),'Studio camera save ready');
  await studioEval(a,"w.document.querySelector('#studioCameraView').value='school';w.document.querySelector('#studioSaveDefault').click();");
  await until(async()=>(await preference(a))?.preset==='school','Studio saved frontend default');
  const savedStudio=await preference(a);
  await studioEval(a,"w.document.querySelector('#studioCloseCamera').click();w.document.querySelector('#studioReturnEditing').click();");
  assert.equal(await studioEval(a,'return w.RoomcraftStudioScene.isCameraPreview'),false);
  assert.equal(await studioEval(a,'return w.RoomcraftStudioScene.getView().preset'),'top');
  assert.deepEqual(await studioEval(a,'return w.RoomcraftEditorViewport.getProject()'),studioDraft,'camera previews and saves never modify the Studio draft');
  const bridgeMethods=await a.evaluate('bridgeOps');
  assert.ok(bridgeMethods.includes('CAMERA_GET')&&bridgeMethods.includes('CAMERA_SET'));
  assert.equal(bridgeMethods.includes('POST'),false,'camera save never publishes the layout');
  await a.evaluate('mountHome()');await ready(a);
  assert.equal((await view(a)).framePreset,'school','Home reads the Studio saved default');
  assert.deepEqual(await preference(b),initialB,'Studio save does not affect other frontend');

  await a.evaluate('card.remove()');await activate(b);await b.evaluate('mountHome()');await ready(b);
  assert.deepEqual(await view(b),bInitialView,'other frontend view remains unchanged on reopening');
  await choose(b,'innoflight');const savedB=await save(b);
  assert.equal(savedB.preset,'innoflight');assert.deepEqual(await preference(a),savedStudio);
  await b.evaluate('card.remove()');await activate(a);await a.evaluate('mountHome()');await ready(a);
  await tap(a,'.main-menu-button');await tap(a,'[data-camera=clear-default]');
  await until(async()=>await preference(a)===null,'local reset tombstone');await reload(a);
  const resetA=await view(a);assert.equal(resetA.preset,'default');assert.equal(resetA.tilt,0);
  assert.equal(resetA.framePreset,undefined);assert.equal(await preference(a),null,'legacy default cannot reappear after local reset');
  await a.evaluate('card.remove()');await activate(b);await reload(b);assert.deepEqual(await preference(b),savedB);
  assert.equal((await view(b)).framePreset,'innoflight','reset A preserves saved B');

  const operations={a:await a.evaluate('ops'),b:await b.evaluate('ops')};
  for(const client of [a,b]){
    assert.deepEqual(await client.evaluate('fixtureConfig'),config,'no authored layout changes');
    assert.deepEqual(await client.evaluate('fixtureSession.states'),await client.evaluate('originalStates'));
    assert.ok((await client.evaluate('ops')).every(op=>['lovelace/config','frontend/get_user_data'].includes(op.type)),'no shared preference or device writes');
  }
  assert.deepEqual(errors,[]);
  await writeFile(join(qa,'evidence.json'),JSON.stringify({fronts,freeFromFront,initialA,initialB,savedA,goldDefault,savedStudio,savedB,resetA,bridgeMethods,operations,errors,physicalActions:0},null,2));
  console.log('PASS: three production front views; two isolated frontend defaults; real HA Studio bridge; local save/reload/reset isolation; framed idle wake; no layout or device writes.');console.log(qa);
}catch(error){
  for(const client of clients){
    const diagnostic=await client.evaluate(`(()=>{const w=window.studio?.shadowRoot.querySelector('iframe')?.contentWindow;
      return {home:!!window.card?.scene,iframe:w?.location.href,ready:w?.document.readyState,adapter:!!w?.RoomcraftStudioScene,
        items:w?.RoomcraftEditorViewport?.getProject().items.map(i=>i.id),text:w?.document.body.innerText.slice(-1800),ops};})()`).catch(()=>null);
    console.error(client.label,JSON.stringify(diagnostic));
    await photo(client,'failure-'+client.label).catch(()=>{});
  }
  console.error('Browser errors:',JSON.stringify(errors));throw error;
}finally{for(const socket of sockets)socket.close();chrome.kill();server.close();}
