import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import {Box3} from 'three';
import {createHolidayArt,createHolidayTrim,HOLIDAY_ART_THEMES} from '../ha-local/storybook-holiday-art.mjs';

const variants={fireworks:['new-year','independence-day'],pine:['japanese-new-year'],lanterns:['lunar-new-year','lantern-festival'],blossoms:['hinamatsuri','tanabata'],kites:['childrens-day'],flowers:['holi','easter','earth-day','mothers-day','fathers-day'],water:['songkran'],boats:['dragon-boat','loy-krathong'],harvest:['mid-autumn','chuseok','thanksgiving'],lights:['diwali','hanukkah','vesak','obon'],stars:['nowruz','eid-al-fitr','eid-al-adha'],hearts:['valentines-day'],clover:['st-patricks-day'],pumpkins:['halloween'],gifts:['christmas'],beans:['setsubun']};
const hash=root=>{const h=createHash('sha256');root.traverse(o=>{if(o.geometry)for(const key of ['position','normal','color']){const a=o.geometry.attributes[key]?.array;if(a)h.update(Buffer.from(a.buffer,a.byteOffset,a.byteLength));}if(o.instanceMatrix){const a=o.instanceMatrix.array;h.update(Buffer.from(a.buffer,a.byteOffset,a.byteLength));}});return h.digest('hex');};

test('all31 catalog variants use bounded opaque code-native art and a small draw budget',()=>{
  assert.equal(Object.values(variants).flat().length,31);assert.deepEqual(HOLIDAY_ART_THEMES,Object.keys(variants));
  for(const [theme,ids] of Object.entries(variants))for(const id of ids){
    const art=createHolidayArt({theme,id});
    for(const time of [0,13.5,92]){
      art.update({elapsedSeconds:time,night:true});let draws=0,triangles=0;
      art.root.traverse(o=>{assert.ok(o.userData.roomcraftDecorative);if(o.isInstancedMesh)o.computeBoundingBox();if(o.geometry){draws++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3*(o.isInstancedMesh?o.count:1);assert.ok(!o.material.transparent&&!o.material.map);assert.ok(o.geometry.attributes.position.array.every(Number.isFinite));}});
      const b=new Box3().setFromObject(art.root),e=.03;
      assert.ok(b.min.x>=-70-e&&b.max.x<=70+e&&b.min.z>=-50-e&&b.max.z<=50+e,`${id} horizontal bounds`);
      assert.ok(b.min.y>=-e&&b.max.y<=100+e,`${id} vertical bounds ${b.min.y},${b.max.y}`);
      assert.ok(draws<=4,`${id} draw budget`);assert.ok(triangles<24000,`${id} triangle budget`);
    }
    art.dispose();
  }
});

test('holiday poses are deterministic, resettable by explicit time, and stable for reduced motion',()=>{
  for(const theme of HOLIDAY_ART_THEMES){
    const a=createHolidayArt({theme}),b=createHolidayArt({theme});a.update({elapsedSeconds:60});a.update({elapsedSeconds:12});b.update({elapsedSeconds:12});
    assert.equal(hash(a.root),hash(b.root));assert.deepEqual(a.getState(),b.getState());
    a.update({elapsedSeconds:1,reducedMotion:true});const still=hash(a.root);a.update({elapsedSeconds:99,reducedMotion:true});assert.equal(hash(a.root),still);assert.equal(a.getState().particles,0);
    a.dispose();b.dispose();
  }
  const source=readFileSync(new URL('../ha-local/storybook-holiday-art.mjs',import.meta.url),'utf8');
  assert.doesNotMatch(source,/Math\.random\s*\(|\bDate\s*\(|\bfetch\s*\(/);
  assert.equal(createHolidayArt({theme:'constructor'}),null);
});

test('quiet observances never emit festive particles; event and art-lighting switches remain independent',()=>{
  for(const id of ['vesak','obon']){
    const a=createHolidayArt({theme:'lights',id});a.update({elapsedSeconds:10,events:true,night:true});
    assert.equal(a.getState().events,false);assert.equal(a.getState().particles,0);assert.equal(a.getState().lighting,true);
    const state=a.update({elapsedSeconds:20,events:true,lighting:false});assert.equal(state.lighting,false);assert.equal(state.particles,0);a.dispose();
  }
  const a=createHolidayArt({theme:'fireworks',event:'quiet'});a.update({elapsedSeconds:5});assert.equal(a.getState().events,false);a.dispose();
  const b=createHolidayArt({theme:'gifts'});b.update({elapsedSeconds:5,events:false,lighting:true});assert.equal(b.getState().particles,0);assert.equal(b.getState().lighting,true);
  b.update({elapsedSeconds:5,intensity:0});assert.equal(b.root.visible,false);b.dispose();
});

test('Hanukkah has eight candles and a raised shamash, with nine separate flame geometries',()=>{
  const art=createHolidayArt({theme:'lights',id:'hanukkah'}),light=art.root.getObjectByName('holiday-local-light');
  assert.equal(light.geometry.attributes.position.count/3,9*120);
  const positions=light.geometry.attributes.position;
  for(const x of [-24,-18,-12,-6,0,6,12,18,24]){
    let max=-Infinity;for(let i=0;i<positions.count;i++)if(Math.abs(positions.getX(i)-x)<.6)max=Math.max(max,positions.getY(i));
    assert.ok(max>(x===0?40:35));
  }
  art.dispose();
});

test('culturally distinct variants produce different original geometry and independently owned resources',()=>{
  for(const [theme,aId,bId] of [['lights','diwali','hanukkah'],['lights','hanukkah','obon'],['harvest','mid-autumn','thanksgiving'],['flowers','holi','easter'],['blossoms','hinamatsuri','tanabata'],['stars','nowruz','eid-al-fitr']]){
    const a=createHolidayArt({theme,id:aId}),b=createHolidayArt({theme,id:bId});assert.notEqual(hash(a.root),hash(b.root));
    let disposed=0;a.root.traverse(o=>{o.geometry?.addEventListener('dispose',()=>disposed++);});a.dispose();assert.ok(disposed>0);assert.equal(a.root.children.length,0);assert.ok(b.root.children.length>0);a.dispose();b.dispose();
  }
});

test('neighborhood trim follows supplied exterior contours and exact roof planes in two draws',()=>{
  const rings=[{id:'home',points:[[0,0],[100,0],[100,60],[60,60],[60,100],[0,100]],y:65,bulbSize:2.4,spacing:12},
    {id:'miniature',points:[[160,0],[220,0],[220,40],[160,40]],y:-55,bulbSize:1,spacing:8}];
  const trim=createHolidayTrim({rings,colors:['#bf5148','#dfbc7a']});assert.equal(trim.root.children.length,2);assert.equal(trim.getState().rings,2);
  const bulbs=trim.root.getObjectByName('holiday-roof-bulbs'),matrix=bulbs.instanceMatrix.array;
  for(let i=0;i<bulbs.count;i++){
    const x=matrix[i*16+12],y=matrix[i*16+13],z=matrix[i*16+14];
    if(x<150){assert.equal(y,65);assert.ok(z===0||x===100&&z<=60||z===60&&x>=60||x===60&&z>=60||z===100&&x<=60||x===0);}
    else {assert.equal(y,-55);assert.ok(x===160||x===220||z===0||z===40);}
  }
  assert.ok(Math.abs(trim.bounds.max.y-(65+2.4*1.1))<1e-6);assert.equal(trim.bounds.min.y,-55);
  trim.update({elapsedSeconds:1,night:true,reducedMotion:true});const color=Array.from(bulbs.instanceColor.array);
  trim.update({elapsedSeconds:90,night:true,reducedMotion:true});assert.deepEqual(Array.from(bulbs.instanceColor.array),color);
  trim.update({elapsedSeconds:90,lighting:false});assert.equal(bulbs.material.emissiveIntensity,0);assert.equal(trim.getState().animated,false);
  trim.update({intensity:0});assert.equal(trim.root.visible,false);trim.dispose();assert.equal(trim.root.children.length,0);trim.dispose();
});

test('trim rejects invalid contours and caps decorative instances without losing wire bounds',()=>{
  const empty=createHolidayTrim({rings:[{points:[[0,0],[1,1],[2,2]],y:0},{points:[[0,0],[1,0],[1,1]],y:NaN}]});
  assert.equal(empty.root.visible,false);assert.equal(empty.getState().bulbs,0);empty.dispose();
  const rings=Array.from({length:32},(_,i)=>({points:[[i*1000,0],[i*1000+500,0],[i*1000+500,500],[i*1000,500]],y:i,spacing:6}));
  const trim=createHolidayTrim({rings});assert.equal(trim.getState().bulbs,512);assert.ok(trim.bounds.max.x>=31500);trim.dispose();
});
