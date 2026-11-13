import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {build,stop} from 'esbuild';

// Actual live card, production RAF/timers and real touch input; no real HA connection.
const source=process.cwd(),qa=await mkdtemp(join(tmpdir(),'roomcraft-idle-camera-qa-'));
const code=process.env.ROOMCRAFT_IDLE_CAMERA_QA_DIST ? await readFile(join(source,'dist/ha-local/roomcraft-storybook.js')) :
  (await build({absWorkingDir:source,bundle:true,target:'es2022',format:'esm',write:false,
    entryPoints:['ha-local/roomcraft-storybook.mjs'],minify:true})).outputFiles[0].contents;
stop(); // Release esbuild's Windows executable before long-running browser checks.
const project={version:2,editableReferenceVersion:10,hotspots:[],walls:[],rooms:[{
  id:'living-floor',name:'Living room',surface:'oak',label:{x:700,y:500},
  points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}],
}],items:[
  {id:'sofa',type:'sofa',name:'Sofa',x:520,y:340,w:150,h:75,rotation:0},
  {id:'table',type:'diningTable',name:'Table',x:800,y:600,w:100,h:70,rotation:0},
],sceneSettings:{holidays:{modes:{christmas:'on'}},worldLife:{enabled:true}}};
const config={title:'Fixture home',views:[{path:'home',title:'Home'}],fixtureUnrelated:{preserve:true},
  roomcraft_layout:project,roomcraft_plan:{type:'picture-elements',elements:[],image:'/api/image/serve/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/original'}};
const html=`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#e7eadb"><script>
window.ops=[];window.fixtureConfig=${JSON.stringify(config)};window.originalConfig=structuredClone(fixtureConfig);
for(const tag of ['roomcraft-object-control','roomcraft-camera-thumbnail'])customElements.define(tag,class extends HTMLElement{setConfig(){}});
customElements.define('roomcraft-editor-card',class extends HTMLElement{static async readStartupView(){return {preset:'free',azimuth:12,tilt:26,zoom:1.1};}});
window.fixtureSession={connected:true,user:{id:'fixture-admin',is_admin:true},states:{'light.fixture':{state:'off',attributes:{brightness:0}},'weather.fixture':{state:'sunny',attributes:{temperature:21}}},config:{time_zone:'America/Los_Angeles'},
 callWS:async request=>{window.ops.push(structuredClone(request));
   if(request.type==='lovelace/config')return structuredClone(window.fixtureConfig);
   throw Error('Unexpected API request: '+request.type);},
 callService:()=>{window.ops.push({type:'FORBIDDEN_SERVICE'});throw Error('Idle camera must never actuate devices');}};
</script><script type="module">
import '/local/roomcraft/roomcraft-storybook.js';
window.card=document.createElement('roomcraft-storybook-card');card.setConfig({dashboard:'roomcraft-home'});
card.hass=window.fixtureSession;document.body.append(card);
</script></body></html>`;
const server=createServer(async(request,response)=>{
  try{
    const name=new URL(request.url,'http://localhost').pathname;
    if(name==='/'){response.writeHead(200,{'Content-Type':'text/html'});return response.end(html);}
    const path=name.replace(/^\/(?:local\/roomcraft\/)?/,'');if(path.includes('..'))throw Error('Invalid fixture path');
    const type={'.js':'text/javascript','.mp3':'audio/mpeg','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'}[extname(path)]??'application/octet-stream';
    const data=path==='roomcraft-storybook.js'?code:await readFile(resolve(source,'public',path));
    response.writeHead(200,{'Content-Type':type});response.end(data);
  }catch{response.writeHead(404);response.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const {port}=server.address(),profile=join(qa,'chrome-profile');
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
let ws;
try{
  const active=await until(()=>readFile(join(profile,'DevToolsActivePort'),'utf8'),'Chrome port');
  const chromePort=Number(active.split(/\r?\n/)[0]);
  const [page]=(await (await fetch('http://127.0.0.1:'+chromePort+'/json')).json()).filter(target=>target.type==='page');
  ws=new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
  const inflight=new Map(),errors=[];let seq=0;
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;inflight.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  ws.addEventListener('message',event=>{
    const message=JSON.parse(event.data);
    if(message.id){const pending=inflight.get(message.id);inflight.delete(message.id);
      if(message.error)pending?.reject(Error(message.error.message));else pending?.resolve(message.result);}
    if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails.exception?.description);
    if(message.method==='Runtime.consoleAPICalled'&&message.params.type==='error'&&message.params.args.some(arg=>String(arg.value??arg.description).includes('THREE.')))
      errors.push(message.params.args.map(arg=>arg.value??arg.description));
    if(message.method==='Fetch.requestPaused'){
      const {requestId,request:{url}}=message.params;
      if(url.startsWith('http://127.0.0.1:'+port+'/')||url.startsWith('data:image/png'))void send('Fetch.continueRequest',{requestId});
      else void send('Fetch.failRequest',{requestId,errorReason:'BlockedByClient'});
    }
  });
  const evaluate=async expression=>{
    const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
    if(result.exceptionDetails)throw Error(result.exceptionDetails.exception?.description??result.exceptionDetails.text);
    return result.result?.value;
  };
  const photo=async name=>{const result=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    await writeFile(join(qa,name+'.png'),Buffer.from(result.data,'base64'));};
  const pointFor=selector=>evaluate(`(()=>{const element=card.shadowRoot.querySelector(${JSON.stringify(selector)});
      if(!element)throw Error('Missing touch target');const r=element.getBoundingClientRect();
      if(!r.width||!r.height)throw Error('Hidden touch target');return{x:r.x+r.width/2,y:r.y+r.height/2};})()`);
  const tap=async selector=>{
    const point=await pointFor(selector);
    await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...point,id:1}]});
    await delay(80);
    await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    await delay(180);
    return evaluate('performance.now()');
  };
  const state=()=>evaluate('card.idleCamera.getState()');
  const activeIdle=()=>evaluate("card.world.hasAttribute('data-idle-camera')");
  await send('Runtime.enable');await send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  await send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:2});
  await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://127.0.0.1:'+port+'/'});
  await until(()=>evaluate('Boolean(window.card?.scene&&card.frame&&card.idleCamera&&!card.demoButton.disabled&&card.lastSceneRenderAt)'),'live idle card');
  await evaluate(`(()=>{
    // Only pin explicit environmental inputs; the renderer, timers and RAF remain real.
    Object.assign(card.frame.environment,{holidayDate:'2026-12-25',worldTimeSeconds:1798228800,
      night:false,condition:'sunny',daylightKnown:true,sunElevation:45,beachActivity:'day'});
    window.originalStates=structuredClone(fixtureSession.states);
    window.defaultView=card.scene.getView();
    window.wakeClicks=0;window.controlPointers=[];
    const button=document.createElement('button');button.className='fixture-wake-target';
    button.textContent='Fixture control';button.style.cssText='position:fixed;top:80px;left:20px;z-index:20;min-height:44px';
    button.addEventListener('click',()=>window.wakeClicks++);
    for(const event of ['pointerdown','pointerup','pointercancel'])button.addEventListener(event,e=>window.controlPointers.push({type:e.type,id:e.pointerId}));
    card.world.append(button);
  })()`);
  assert.equal(await activeIdle(),false,'initial home remains the focus');
  await tap('.main-menu-button');await photo('idle-menu');
  assert.equal(await activeIdle(),false);
  await tap('.world-life-settings');
  assert.equal(await evaluate('card.worldLifePanel.isOpen'),true);
  await delay(31000);
  assert.equal(await activeIdle(),false,'an open settings modal prevents automatic idle after 30 seconds');
  await tap('[data-world-close]');
  await tap('.main-menu-button');
  const instantAt=await tap('.idle-start');
  await until(activeIdle,'instant idle',5000);
  const instant=await state();
  assert.ok((await evaluate('performance.now()'))-instantAt<5000,'instant button bypasses inactivity wait');
  assert.equal(await evaluate('card.mainMenu.hidden'),true,'instant mode closes main menu');
  await delay(6000);
  const traveling=await state();
  assert.equal(traveling.active,true);
  assert.ok(traveling.focus?.weight>0&&traveling.focus.weight<.6,'camera moves gradually during 24-second approach');
  assert.ok(traveling.zoomFactor>=1&&traveling.zoomFactor<4);
  assert.notDeepEqual(traveling.lastAppliedFraming,instant.lastAppliedFraming,'render camera framing changes while idle');
  await photo('idle-slow-pan');
  await tap('.fixture-wake-target');
  assert.equal(await activeIdle(),false,'touch immediately leaves idle');
  assert.deepEqual(await evaluate('card.scene.getView()'),await evaluate('defaultView'),'touch restores default view');
  assert.equal(await evaluate('wakeClicks'),0,'first wake gesture cannot operate a control');
  await tap('.fixture-wake-target');
  assert.equal(await evaluate('wakeClicks'),1,'next normal touch reaches the control');
  await photo('idle-touch-return');

  // This is a real 30-second inactivity test, including a fresh touch halfway.
  await delay(17000);
  const lastTouchAt=await tap('.fixture-wake-target');
  await delay(17000);
  assert.equal(await activeIdle(),false,'fresh touch restarts the full inactivity wait');
  await until(activeIdle,'automatic idle after 30 real seconds',18000);
  const autoAt=await evaluate('performance.now()');
  assert.ok(autoAt-lastTouchAt>=29500&&autoAt-lastTouchAt<37000,'30-second automatic boundary');
  const automatic=await state();
  await tap('.fixture-wake-target');
  const clicked=await evaluate('wakeClicks');
  assert.equal(clicked,2,'automatic idle also consumes its wake touch');
  assert.deepEqual(await evaluate('card.scene.getView()'),await evaluate('defaultView'));

  // Assistive activation may arrive without pointerdown or keyboard events.
  await tap('.main-menu-button');await tap('.idle-start');await until(activeIdle,'assistive idle start',5000);
  await evaluate("card.shadowRoot.querySelector('.fixture-wake-target').click()");
  assert.equal(await activeIdle(),false,'assistive click also immediately returns home');
  assert.equal(await evaluate('wakeClicks'),2,'assistive wake cannot operate a control');
  assert.deepEqual(await evaluate('card.scene.getView()'),await evaluate('defaultView'));
  await evaluate("card.shadowRoot.querySelector('.fixture-wake-target').click()");
  assert.equal(await evaluate('wakeClicks'),3,'next assistive activation works normally');

  // Holding the first wake touch must stay suppressed beyond the click window.
  await tap('.main-menu-button');await tap('.idle-start');await until(activeIdle,'long-press idle start',5000);
  await evaluate('controlPointers=[]');
  const longPoint=await pointFor('.fixture-wake-target');
  await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...longPoint,id:11}]});
  assert.equal(await activeIdle(),false,'long-press wakes immediately on pointerdown');
  await delay(1800);
  await evaluate("card.shadowRoot.querySelector('.fixture-wake-target').click()");
  assert.equal(await evaluate('wakeClicks'),3,'a compatibility activation during a held wake remains blocked');
  await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await delay(180);
  assert.equal(await evaluate('wakeClicks'),3,'long-press release cannot operate a control');
  assert.deepEqual(await evaluate('controlPointers'),[],'all long-press pointer events stay isolated');
  assert.deepEqual(await evaluate('card.scene.getView()'),await evaluate('defaultView'));
  await tap('.fixture-wake-target');
  assert.equal(await evaluate('wakeClicks'),4,'normal control touch resumes after long-press');

  // A second finger belonging to the wake gesture must not reach controls.
  await tap('.main-menu-button');await tap('.idle-start');await until(activeIdle,'multi-touch idle start',5000);
  await evaluate('controlPointers=[]');
  const multiPoint=await pointFor('.fixture-wake-target');
  const firstFinger={...multiPoint,id:21},secondFinger={x:multiPoint.x+12,y:multiPoint.y+6,id:22};
  await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[firstFinger]});await delay(100);
  await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[firstFinger,secondFinger]});await delay(100);
  assert.deepEqual(await evaluate('controlPointers'),[],'second wake finger is also captured');
  await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await delay(180);
  assert.equal(await evaluate('wakeClicks'),4,'multi-touch wake does not click controls');
  assert.deepEqual(await evaluate('controlPointers'),[],'both wake releases stay captured');
  assert.deepEqual(await evaluate('card.scene.getView()'),await evaluate('defaultView'));
  await tap('.fixture-wake-target');
  assert.equal(await evaluate('wakeClicks'),5,'normal control touch resumes after multi-touch');

  // Device accessibility preference prevents motion even when instant mode is requested.
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await delay(250);await tap('.main-menu-button');await tap('.idle-start');await delay(350);
  assert.equal(await activeIdle(),false,'reduced motion keeps the default home');
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
  await delay(250);
  if(!await evaluate('card.mainMenu.hidden'))await tap('.close-main-menu');

  // A demonstration owns the camera and must not be interrupted by inactivity.
  await evaluate('card.startDemo()');
  await until(()=>evaluate('Boolean(card.demoRun)'),'real demo begins');
  await delay(31000);
  assert.equal(await activeIdle(),false,'the running demo owns the camera');
  assert.equal(await evaluate('Boolean(card.demoRun)'),true);
  await evaluate('card.stopDemo()');await delay(350);
  assert.equal(await activeIdle(),false,'demo exit starts a fresh home interval');

  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await delay(350);
  await tap('.main-menu-button');await tap('.idle-settings');
  const phone=await evaluate(`(()=>{const d=card.idleCamera.dialog,r=d.getBoundingClientRect();return{x:r.x,y:r.y,right:r.right,bottom:r.bottom,width:innerWidth,height:innerHeight,overflow:d.scrollWidth>d.clientWidth+1,open:d.open};})()`);
  assert.ok(phone.open&&phone.x>=0&&phone.y>=0&&phone.right<=phone.width&&phone.bottom<=phone.height&&!phone.overflow);
  await photo('idle-settings-phone');

  // Settings save only in this browser; explicit manual start still works when disabled.
  await tap('[data-idle-enabled]');
  await evaluate(`(()=>{const d=card.idleCamera.dialog;
    d.querySelector('[data-idle-field="travelMs"]').value='30';
    d.querySelector('[data-idle-field="lingerMs"]').value='12';
    d.querySelector('[data-idle-field="homeMs"]').value='60';})()`);
  await tap('.idle-camera-dialog button[type="submit"]');
  const savedPreferences=await evaluate("JSON.parse(localStorage.getItem('roomcraft.idle-camera.v1'))");
  assert.equal(savedPreferences.enabled,false);
  assert.equal(savedPreferences.idleAfterMs,30000);
  assert.equal(savedPreferences.travelMs,30000);
  assert.equal(savedPreferences.lingerMs,12000);
  assert.equal(savedPreferences.homeMs,60000);
  assert.deepEqual((await state()).settings,savedPreferences);
  await tap('[data-idle-close]');
  await delay(650);
  assert.equal(await activeIdle(),false,'disabled automatic mode stays home');
  assert.equal((await state()).phase,'blocked','automatic disabled reaches the actual renderer blocker');
  await tap('.main-menu-button');await tap('.idle-start');
  await until(activeIdle,'manual start while automatic idle is disabled',5000);
  await tap('.fixture-wake-target');
  assert.equal(await activeIdle(),false);
  assert.equal(await evaluate('wakeClicks'),5,'manual-disabled wake also consumes the control gesture');
  assert.deepEqual(await evaluate('fixtureConfig'),config,'idle camera does not change authored layout');
  assert.deepEqual(await evaluate('fixtureSession.states'),await evaluate('originalStates'),'idle mode preserves actual device state');
  assert.ok((await evaluate('ops')).every(request=>request.type==='lovelace/config'),'no save or device operation');

  await evaluate('window.fixtureReloadMarker=true');await send('Page.reload');
  await until(()=>evaluate('!window.fixtureReloadMarker&&Boolean(window.card?.scene&&card.frame&&card.idleCamera&&!card.demoButton.disabled&&card.lastSceneRenderAt)'),'reloaded live idle card');
  assert.deepEqual((await state()).settings,savedPreferences,'a fresh card reads browser-local saved settings');
  assert.equal(await activeIdle(),false,'disabled preference survives a page reload');
  assert.deepEqual(await evaluate('fixtureConfig'),config,'reload preserves authored layout');
  assert.ok((await evaluate('ops')).every(request=>request.type==='lovelace/config'),'reload does not save or operate devices');
  assert.deepEqual(errors,[]);
  await writeFile(join(qa,'evidence.json'),JSON.stringify({instant,traveling,automatic,realIdleWaitMs:autoAt-lastTouchAt,longPressMs:1800,multiTouchContacts:2,phone,savedPreferences,errors,physicalActions:0},null,2));
  console.log('PASS: real RAF idle camera; instant menu start, slow framing, true 30-second inactivity and touch reset, touch/assistive/long-press/multi-touch wake isolation/default restore, modal/demo/reduced-motion blockers, phone settings fit, local settings save/reload/manual override and no layout/device writes.');
  console.log(qa);
}finally{ws?.close();chrome.kill();server.close();}

