import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {build} from 'esbuild';

// Public-safe fixture: production card, renderer, timeline and narration; no HA connection.
const source=process.cwd();
const qa=await mkdtemp(join(tmpdir(),'roomcraft-demo-qa-'));
const code=process.env.ROOMCRAFT_DEMO_QA_DIST ? await readFile(join(source,'dist/ha-local/roomcraft-storybook.js')) :
  (await build({absWorkingDir:source,bundle:true,target:'es2022',format:'esm',write:false,
    entryPoints:['ha-local/roomcraft-storybook.mjs'],minify:true})).outputFiles[0].contents;
const item=(id,type,x,y,w,h,rotation=0)=>({id,type,name:id,x,y,w,h,rotation});
const project={version:2,editableReferenceVersion:10,hotspots:[],walls:[],rooms:[{
  id:'living-floor',name:'Living room',surface:'oak',label:{x:700,y:500},
  points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}],
}],items:[
  {...item('garage','garageDoor',306,112,132,120),garageRoof:'full',garageDriveway:true,garageDrivewayWidth:60},
  item('presence','presenceSwitch',800,330,18,24),item('lamp','lamp',700,430,30,30),
  item('fan','fans-five-blade-fan-white',800,610,80,80),
  item('vacuum','cleaning-round-robot-vac-white',1100,650,28,28),
  item('aquarium','pets-fish-aquarium-oak',1230,350,90,55),
  item('road-right','scenerySideRoad',1570,350,64,840),
  item('family','sceneryRanchHouse',1775,420,130,176,90),
  item('office','sceneryOfficeCampus',1750,700,220,180,90),
  item('road-left','scenerySideRoad',-80,350,64,840),
  item('school','scenerySchoolCampus',-300,475,300,240,270),
]};
const config={roomcraft_layout:project,roomcraft_plan:{type:'picture-elements',elements:[]}};
const html=`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#e7eadb"><script>
window.ops=[];window.audioInstances=[];window.audioPlays=[];window.audioUrls=[];
const NativeAudio=window.Audio;
window.Audio=function(url){const audio=new NativeAudio(url),play=audio.play.bind(audio);
 window.audioInstances.push(audio);window.audioUrls.push(url);
 audio.play=()=>{window.audioPlays.push(audio.currentTime);return play();};return audio;};
for(const tag of ['roomcraft-object-control','roomcraft-camera-thumbnail'])
 customElements.define(tag,class extends HTMLElement{setConfig(){}});
window.fixtureConfig=${JSON.stringify(config)};
window.fixtureSession={connected:true,states:{},config:{time_zone:'America/Los_Angeles'},
 callWS:async request=>{window.ops.push(request);if(request.type==='lovelace/config')return window.fixtureConfig;
   if(/service|save|remove|delete|create|update/.test(request.type))throw Error('Unexpected write: '+request.type);return {};},
 callService:()=>{window.ops.push({type:'FORBIDDEN_SERVICE'});throw Error('The demo must never actuate devices');}};
</script><script type="module">
import '/local/roomcraft/roomcraft-storybook.js';
window.card=document.createElement('roomcraft-storybook-card');
card.setConfig({dashboard:'roomcraft-home'});card.hass=window.fixtureSession;document.body.append(card);
</script></body></html>`;
const server=createServer(async(request,response)=>{
  try{
    const name=new URL(request.url,'http://localhost').pathname;
    if(name==='/'){response.writeHead(200,{'Content-Type':'text/html'});return response.end(html);}
    const path=name.replace(/^\/(?:local\/roomcraft\/)?/,'');
    if(path.includes('..'))throw Error('Invalid fixture path');
    const type={'.js':'text/javascript','.mp3':'audio/mpeg','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'}[extname(path)]??'application/octet-stream';
    const contents=path==='roomcraft-storybook.js'?code:await readFile(resolve(source,'public',path));
    const range=/^bytes=(\d+)-(\d*)$/.exec(request.headers.range??'');
    if(range){
      const start=Number(range[1]),end=Math.min(Number(range[2]||contents.length-1),contents.length-1);
      response.writeHead(206,{'Content-Type':type,'Content-Length':end-start+1,'Accept-Ranges':'bytes',
        'Content-Range':`bytes ${start}-${end}/${contents.length}`});response.end(contents.subarray(start,end+1));
    }else{response.writeHead(200,{'Content-Type':type,'Content-Length':contents.length,'Accept-Ranges':'bytes'});response.end(contents);}
  }catch{response.writeHead(404);response.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const {port}=server.address();
const profile=join(qa,'chrome-profile');
const chrome=spawn(process.env.ROOMCRAFT_QA_CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless','--disable-gpu-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader',
  '--no-first-run','--no-default-browser-check','--hide-scrollbars','--disable-background-networking',
  '--autoplay-policy=no-user-gesture-required','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank',
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
  const send=(method,params={})=>new Promise((resolve,reject)=>{
    const id=++seq;inflight.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));
  });
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
  const photo=async name=>{
    const result=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    await writeFile(join(qa,name+'.png'),Buffer.from(result.data,'base64'));
  };
  await send('Runtime.enable');await send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://127.0.0.1:'+port+'/'});
  await until(()=>evaluate('Boolean(window.card?.scene&&card.frame&&!card.demoButton.disabled)'),'live card');
  const started=await evaluate(`(()=>{
    cancelAnimationFrame(card.animationFrame);card.animationFrame=undefined;
    window.savedSchedule=card.schedule.bind(card);card.schedule=()=>{};
    window.originalLayout=JSON.stringify(card.model.layout);window.originalStates=JSON.stringify(card.session.states);
    window.originalView=card.scene.getView();window.timerDurations=[];
    const schedule=window.setTimeout;window.setTimeout=(fn,ms,...args)=>{window.timerDurations.push(ms);return schedule(fn,ms,...args);};
    card.demoButton.click();window.setTimeout=schedule;clearTimeout(card.demoRun.timer);
    window.sampleDemo=ms=>{
      card.updateDemo(card.demoRun.startedAt+ms);
      const run=card.demoRun;if(!run)return {done:true};
      const frame=run.frame,options={reduceMotion:false,transientTelemetry:true};
      card.scene.setPeople(frame.people,ms/1000,options);card.scene.render(ms/1000,frame.states,frame.environment,options);
      return {beat:run.sample.beat,beatTimeMs:run.sample.beatTimeMs,caption:card.demoCaption.textContent,
        environment:frame.environment,focus:run.sample.focus,view:card.scene.getView(),progress:run.sample.progress};
    };
    return {label:card.demoButton.textContent.trim(),muted:card.demoMuted,hidden:card.demo.hidden,
      inert:card.overlay.inert&&card.dock.inert,timer:window.timerDurations.includes(60000),
      focuses:['landmark-school','landmark-family','landmark-office'].map(name=>card.scene.getDemoFocus(name))};
  })()`);
  assert.equal(started.label,'1-minute demo');assert.equal(started.muted,true);assert.equal(started.hidden,false);
  assert.equal(started.inert,true);assert.equal(started.timer,true);
  assert.ok(started.focuses.every(point=>[point?.x,point?.y,point?.z].every(Number.isFinite)));
  const beats=[[0,'overview'],[2300,'presence'],[5800,'lamps'],[8800,'fan'],[11800,'vacuum'],
    [14800,'garage'],[17800,'habitat'],[20800,'beach'],[23800,'weather'],[39800,'traffic'],
    [43000,'landmark-school'],[48000,'landmark-family'],[53000,'landmark-office'],[58000,'finale']];
  for(const [time,beat] of beats)assert.equal((await evaluate('sampleDemo('+time+')')).beat,beat);
  const weather=await evaluate(`Array.from({length:14},(_,i)=>card.demoRun.scenario.sampleFrame({beat:'weather',beatTimeMs:i*800}).environment.condition)`);
  assert.equal(new Set(weather).size,14);
  const moons=await evaluate(`Array.from({length:8},(_,i)=>card.demoRun.scenario.sampleFrame({beat:'weather',beatTimeMs:11200+i*600}).environment.moonPhase)`);
  assert.equal(new Set(moons).size,8);
  const chapters=[];
  for(const [time,name,id] of [[45500,'school','school'],[50500,'family','family'],[55500,'office','office']]){
    const sample=await evaluate('sampleDemo('+time+')');
    const anchor=await evaluate('card.scene.anchor('+JSON.stringify(id)+')');
    assert.equal(sample.beat,'landmark-'+name);
    assert.ok(anchor.x>.2&&anchor.x<.8&&anchor.y>.15&&anchor.y<.85,'landmark remains in the visible camera center');
    chapters.push({time,...sample,anchor});await photo('demo-'+name);
  }
  assert.equal(await evaluate('audioPlays.length'),0,'fresh browser keeps narration muted');
  await until(()=>evaluate('audioInstances[0]?.readyState>=1'),'bundled narration metadata');
  const audio=await evaluate('({duration:audioInstances[0].duration,url:audioUrls[0]})');
  assert.ok(audio.duration>=60&&audio.duration<60.2,'new narration includes all sixty seconds');
  assert.ok(audio.url.endsWith('demo-narration-v1.mp3?timeline=landmarks-60-v2'));
  const seeks=[];
  for(const [time,start] of [[45500,43],[50500,48],[55500,53]]){
    await evaluate('sampleDemo('+time+');if(card.demoMuted)card.demoMuteButton.click()');
    await until(()=>evaluate('!audioInstances[0].seeking&&!audioInstances[0].paused'),'narration seek');
    const position=await evaluate('audioInstances[0].currentTime');
    assert.ok(position>=start&&position<start+1,`landmark voice starts at ${start}s, observed ${position}s`);seeks.push(position);
  }
  await evaluate('card.demoMuteButton.click()');
  assert.equal((await evaluate('sampleDemo(59999)')).beat,'finale');
  assert.equal((await evaluate('sampleDemo(60000)')).done,true);
  const restored=await evaluate(`(()=>{
    if(card.pendingCameraView){card.scene.setView(card.pendingCameraView);card.pendingCameraView=undefined;}
    card.scene.render(60,card.frame.states,card.frame.environment);
    return {hidden:card.demo.hidden,inert:card.overlay.inert||card.dock.inert,view:card.scene.getView(),original:originalView,
      layoutUnchanged:JSON.stringify(card.model.layout)===originalLayout,statesUnchanged:JSON.stringify(card.session.states)===originalStates,
      paused:audioInstances[0].paused,ops:window.ops};
  })()`);
  assert.equal(restored.hidden,true);assert.equal(restored.inert,false);assert.equal(restored.paused,true);
  assert.deepEqual(restored.view,restored.original);assert.equal(restored.layoutUnchanged,true);assert.equal(restored.statesUnchanged,true);
  assert.ok(restored.ops.every(request=>!(/service|save|remove|delete|create|update/i.test(request.type))));
  const escaped=await evaluate(`(()=>{card.demoButton.click();clearTimeout(card.demoRun.timer);
    window.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));return !card.demoRun&&card.demo.hidden;})()`);
  assert.equal(escaped,true);assert.deepEqual(errors,[]);
  await writeFile(join(qa,'evidence.json'),JSON.stringify({started,chapters,weather,moons,audio,seeks,restored,escaped,errors},null,2));
  console.log('PASS: actual card one-minute tour, 3 centered landmark chapters, 14 weather states and 8 moon phases, default mute, bundled 60s audio cue seeks, view restoration/Escape, unchanged layout/states and no HA writes');
  console.log(qa);
}finally{ws?.close();chrome.kill();server.close();}
