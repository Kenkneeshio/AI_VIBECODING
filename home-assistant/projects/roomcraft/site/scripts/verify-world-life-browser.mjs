import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {build} from 'esbuild';
import {normalizeWorldLifeSettings} from '../ha-local/storybook-world-life-settings.mjs';

// Production live card with a public-safe in-memory HA adapter; never connects to a real server.
const source=process.cwd();
const qa=await mkdtemp(join(tmpdir(),'roomcraft-world-life-live-qa-'));
const code=process.env.ROOMCRAFT_WORLD_LIFE_QA_DIST ? await readFile(join(source,'dist/ha-local/roomcraft-storybook.js')) :
  (await build({absWorkingDir:source,bundle:true,target:'es2022',format:'esm',write:false,
    entryPoints:['ha-local/roomcraft-storybook.mjs'],minify:true})).outputFiles[0].contents;
const project={version:2,editableReferenceVersion:10,hotspots:[],walls:[],rooms:[{
  id:'living-floor',name:'Living room',surface:'oak',label:{x:700,y:500},
  points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}],
}],items:Array.from({length:82},(_,i)=>({id:'fixture-'+i,type:'chair',name:'Fixture chair '+i,x:470+(i%10)*85,y:290+Math.floor(i/10)*60,w:25,h:25,rotation:0})),
sceneSettings:{holidays:{modes:{christmas:'off'}},worldLife:{sharks:true}}};
const config={title:'Fixture home',views:[{path:'home',title:'Home'}],fixtureUnrelated:{preserve:true},
  roomcraft_layout:project,roomcraft_plan:{type:'picture-elements',elements:[],image:'/api/image/serve/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/original'}};
const html=`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#e7eadb"><script>
window.ops=[];window.fixtureConfig=${JSON.stringify(config)};window.originalConfig=structuredClone(fixtureConfig);
for(const tag of ['roomcraft-object-control','roomcraft-camera-thumbnail'])customElements.define(tag,class extends HTMLElement{setConfig(){}});
window.fixtureSession={connected:true,user:{id:'fixture-admin',is_admin:true},states:{'light.fixture':{state:'off',attributes:{brightness:0}},'weather.fixture':{state:'sunny',attributes:{temperature:21}}},config:{time_zone:'America/Los_Angeles'},
 callWS:async request=>{window.ops.push(structuredClone(request));
   if(request.type==='lovelace/config')return structuredClone(window.fixtureConfig);
   if(request.type==='lovelace/config/save'){window.fixtureConfig=structuredClone(request.config);return {};}
   throw Error('Unexpected API request: '+request.type);},
 callService:()=>{window.ops.push({type:'FORBIDDEN_SERVICE'});throw Error('Living world must never actuate devices');}};
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
  await send('Runtime.enable');await send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://127.0.0.1:'+port+'/'});
  await until(()=>evaluate('Boolean(window.card?.scene&&card.frame&&!card.demoButton.disabled)'),'live card');

  await evaluate(`(()=>{
    // Pin only explicit environmental inputs. Keep production RAF and renderer.
    window.pinEnvironment=()=>Object.assign(card.frame.environment,{holidayDate:'2026-06-10',worldTimeSeconds:1781118000,
      night:false,condition:'sunny',daylightKnown:true,sunElevation:45,beachActivity:'day'});
    pinEnvironment();window.originalStates=structuredClone(fixtureSession.states);
    window.openWorld=()=>{card.menuButton.click();card.shadowRoot.querySelector('.world-life-settings').click();};
    window.originalView=card.scene.getView();
  })()`);
  await until(()=>evaluate('card.scene.getWorldLifeState().marine.validWater'),'marine scene');
  await evaluate('openWorld()');
  assert.equal(await evaluate('card.worldLifePanel.isOpen'),true);
  assert.equal(await evaluate("card.worldLifePanel.dialog.querySelectorAll('input[type=checkbox]').length"),13);
  assert.equal(await evaluate("card.worldLifePanel.dialog.querySelectorAll('input[type=number]').length"),4);
  await photo('world-life-menu-desktop');
  async function startPreview(label){
    await until(()=>evaluate('card.animationFrame===undefined'),'modal pauses '+label);
    const before=await evaluate('card.lastSceneRenderAt');
    await evaluate("card.shadowRoot.querySelector('[data-world-preview-start]').click()");
    await until(()=>evaluate(`card.lastSceneRenderAt>${before}&&card.scene.getWorldLifeState().marine.preview`),'automatic '+label+' frame');
    const first=await evaluate('({at:card.lastSceneRenderAt,state:card.scene.getWorldLifeState()})');
    assert.equal(await evaluate('getComputedStyle(card.overlay).visibility'),'hidden','household controls stay off the offshore preview');
    await until(()=>evaluate(`card.lastSceneRenderAt>${first.at}`),'second automatic '+label+' frame');
    const screen=await evaluate('card.scene.getWorldLifeScreenBounds()');
    if(first.state.marine.actors.some(actor=>actor.visible))assert.ok(screen&&screen.minX>=0&&screen.maxX<=1&&screen.minY>=0&&screen.maxY<=1,
      'Visible wildlife must fit the preview: '+JSON.stringify(screen));
    first.screen=screen;
    return first;
  }
  async function endPreview(){
    const before=await evaluate('card.lastSceneRenderAt');
    const view=await evaluate("(()=>{card.shadowRoot.querySelector('[data-world-preview-end]').click();return {view:card.scene.getView(),preview:card.worldLifePreview,hidden:card.shadowRoot.querySelector('.world-life-preview-strip').hidden};})()");
    assert.deepEqual(view.view,await evaluate('originalView'));assert.equal(view.preview,null);assert.equal(view.hidden,true);
    assert.equal(await evaluate('getComputedStyle(card.overlay).visibility'),'visible','household controls return after preview');
    await until(()=>evaluate(`card.lastSceneRenderAt>${before}&&!card.scene.getWorldLifeState().marine.preview`),'normal render resumes');
  }
  const first=await startPreview('all-species');
  const visible=first.state.marine.actors.filter(actor=>actor.visible);
  assert.deepEqual([...new Set(visible.map(actor=>actor.species))].sort(),['dolphins','seals','sharks','walruses','whales']);
  const positions=JSON.stringify(visible.map(actor=>[actor.id,actor.position,actor.joints]));
  await until(async()=>JSON.stringify((await evaluate('card.scene.getWorldLifeState().marine.actors')).filter(actor=>actor.visible).map(actor=>[actor.id,actor.position,actor.joints]))!==positions,'automatic articulated animation');
  const allPreview=await evaluate('({state:card.scene.getWorldLifeState(),renderedAt:card.lastSceneRenderAt})');
  await photo('world-life-wildlife-preview');await endPreview();
  await evaluate(`(()=>{openWorld();const set=(key,value)=>{const i=card.worldLifePanel.dialog.querySelector('[data-world-life="'+key+'"]');i.checked=value;i.dispatchEvent(new Event('change'));};set('dolphins',false);set('sharks',false);})()`);
  const filtered=await startPreview('filtered-species');
  assert.deepEqual([...new Set(filtered.state.marine.actors.filter(actor=>actor.visible).map(actor=>actor.species))].sort(),['seals','walruses','whales']);
  await photo('world-life-filtered-preview');await endPreview();
  await evaluate('openWorld()');
  assert.equal(await evaluate("card.worldLifePanel.dialog.querySelector('[data-world-life=dolphins]').checked"),true,'unsaved filter restored');
  await evaluate("(()=>{const input=card.worldLifePanel.dialog.querySelector('[data-world-life=enabled]');input.checked=false;input.dispatchEvent(new Event('change'));})()");
  const off=await startPreview('master-off');assert.ok(off.state.marine.actors.every(actor=>!actor.visible));
  assert.equal(off.state.moments.parts,0);await endPreview();
  assert.equal(await evaluate("ops.some(request=>request.type==='lovelace/config/save')"),false,'previews never persist');
  const form=await evaluate(`(()=>{openWorld();const d=card.worldLifePanel.dialog;
    const set=(key,value)=>{const input=d.querySelector('[data-world-life="'+key+'"]');
      if(input.type==='checkbox'){input.checked=value;input.dispatchEvent(new Event('change'));}
      else{input.value=String(value);input.dispatchEvent(new Event('input'));}};
    set('whales',false);set('vehicles',false);set('density',.65321);set('pace',.937);set('variety',.84567);set('seed',83);
    const form=d.querySelector('form');const valid=form.checkValidity();form.requestSubmit();return {valid};})()`);
  assert.equal(form.valid,true,'valid exact decimals must not block native Save');
  await until(()=>evaluate("card.worldLifePanel.dialog.querySelector('[role=status]').textContent==='Living world settings saved.'&&Boolean(card.scene&&card.frame)"),'Live save and readback');
  const expected=normalizeWorldLifeSettings({sharks:true,whales:false,vehicles:false,density:.65321,pace:.937,variety:.84567,seed:83});
  const saved=await evaluate('({config:fixtureConfig,ops,states:fixtureSession.states,originalStates})');
  assert.deepEqual(saved.config.roomcraft_layout,{...project,sceneSettings:{...project.sceneSettings,worldLife:expected}});
  assert.equal(saved.config.roomcraft_layout.items.length,82);
  assert.deepEqual(saved.config.fixtureUnrelated,config.fixtureUnrelated);assert.deepEqual(saved.config.views,config.views);
  assert.deepEqual(saved.config.roomcraft_plan,config.roomcraft_plan);assert.deepEqual(saved.states,saved.originalStates);
  assert.equal(saved.ops.filter(request=>request.type==='lovelace/config/save').length,1);
  assert.ok(saved.ops.every(request=>['lovelace/config','lovelace/config/save'].includes(request.type)));
  assert.equal(saved.config.roomcraft_snapshots.length,1);assert.deepEqual(saved.config.roomcraft_snapshots[0].layout,project);
  await evaluate('pinEnvironment();card.worldLifePanel.close();openWorld()');
  assert.equal(await evaluate("card.worldLifePanel.dialog.querySelector('[data-world-life=whales]').checked"),false);
  assert.equal(await evaluate("card.worldLifePanel.dialog.querySelector('[data-world-life=vehicles]').checked"),false);
  assert.equal(await evaluate("card.worldLifePanel.dialog.querySelector('[data-world-life=density]').value"),'0.65321');
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await delay(150);
  const phone=await evaluate(`(()=>{const d=card.worldLifePanel.dialog;d.querySelector('.world-life-body').scrollTop=0;
    const r=d.getBoundingClientRect();return{x:r.x,y:r.y,right:r.right,bottom:r.bottom,width:innerWidth,height:innerHeight,
      overflow:d.scrollWidth>d.clientWidth+1,columns:getComputedStyle(d.querySelector('.world-life-groups')).gridTemplateColumns};})()`);
  assert.ok(phone.x>=0&&phone.y>=0&&phone.right<=phone.width&&phone.bottom<=phone.height);assert.equal(phone.overflow,false);assert.ok(!phone.columns.includes(' '));
  await photo('world-life-menu-phone');assert.deepEqual(errors,[]);
  await writeFile(join(qa,'evidence.json'),JSON.stringify({allPreview,filtered,masterOff:off,saved,phone,errors},null,2));
  console.log('PASS: actual Live Living world menu; real RAF resumes and continues; animated five-species preview, filters/master Off/normal restore, no physical actions, exact settings Save preserves 82 items/holidays/states with rollback+readback, persisted reopening and phone fit.');console.log(qa);
}finally{ws?.close();chrome.kill();server.close();}
