import assert from 'node:assert/strict';
import test from 'node:test';
import {compileStorybookSideRoads,storybookSideRoadContains,buildStorybookSideRoads} from '../ha-local/storybook-side-road.mjs';
import {buildStorybookStreet} from '../ha-local/storybook-street.mjs';

const ground=-111;
const street={nearZ:0,farZ:-144,
  sample:(x,z)=>({x,z:z+12*Math.sin(x/300),yaw:-Math.atan(.04*Math.cos(x/300))})};
const placed={x:1100,z:350,angle:.8,item:{id:'side-street-fixture',type:'scenerySideRoad',w:64,h:840}};
const family={x:1290,z:380,angle:Math.PI/2,item:{id:'family-house-fixture',type:'sceneryRanchHouse',w:130,h:176}};
const room={points:[{x:100,y:170},{x:950,y:170},{x:950,y:770},{x:100,y:770}]};
const plan={placements:[placed,family],rooms:[room],walls:[],fences:[],stairs:[],
  bounds:{minX:100,maxX:950,minZ:170,maxZ:770},houseBounds:{minX:100,maxX:950,minZ:170,maxZ:770}};

function capture(roads,heightAt=()=>ground) {
  const meshes=[];
  const count=buildStorybookSideRoads({add(geometry,color){
    meshes.push({color,positions:Array.from(geometry.attributes.position.array),normals:Array.from(geometry.attributes.normal.array),indices:Array.from(geometry.index.array)});
    geometry.dispose();
  }},roads,heightAt,ground);
  return {count,meshes};
}

test('an editable side road keeps a cardinal spine while its junction meets the curved street',()=>{
  const snapshot=JSON.stringify(plan);
  const [road]=compileStorybookSideRoads(plan,street);
  assert.ok(road);
  assert.equal(JSON.stringify(plan),snapshot);
  assert.equal(road.width,64);
  assert.equal(road.bodyLength,840);
  assert.deepEqual(road.forward,{x:0,z:1},'spine stays parallel to the condo right wall');
  assert.deepEqual(road.tangent,{x:1,z:0});
  assert.equal(road.angle,0,'curved-street tangent does not slant the branch');
  assert.equal(road.origin.x,placed.x);
  assert.equal(road.end.x,placed.x);
  assert.equal(road.end.z,placed.z+420);
  assert.equal(road.origin.z,street.sample(road.origin.x,street.nearZ-26).z);
  assert.ok(Math.abs((placed.x-road.origin.x)*road.tangent.x+(placed.z-road.origin.z)*road.tangent.z)<.01);
  assert.ok(storybookSideRoadContains([road],placed.x,placed.z));
  assert.equal(storybookSideRoadContains([road],600,400),false);
  assert.deepEqual(capture([road]),capture(compileStorybookSideRoads(plan,street)));
});

test('road geometry is finite, opaque and joins curved paving at exact curb-cut endpoints',()=>{
  const [road]=compileStorybookSideRoads(plan,street);
  const {count,meshes}=capture([road]);
  assert.equal(count,1);
  assert.ok(meshes.every(m=>m.positions.every(Number.isFinite)&&m.normals.every(Number.isFinite)));
  assert.equal(meshes.filter(m=>m.color==='#73767c').length,1,'one asphalt surface, no overlapping shaded cover');
  const paving=meshes.filter(m=>m.color==='#c0b6a7');
  for(const cutX of [road.cut.minX,road.cut.maxX]) {
    assert.ok(paving.some(mesh=>{
      for(let i=0;i<mesh.positions.length;i+=3) {
        const [x,y,z]=mesh.positions.slice(i,i+3);
        if(Math.abs(x-cutX)<.0002&&Math.abs(z-street.sample(cutX,street.nearZ).z)<.0002&&Math.abs(y-(ground+5))<.0002)return true;
      }
      return false;
    }),'outer sidewalk starts exactly at the existing curved sidewalk edge');
  }
  const asphalt=meshes.find(m=>m.color==='#73767c');
  assert.ok(asphalt.normals.filter((_,i)=>i%3===1).every(y=>y>.99));
});

test('house frontage connects to its nearest clear side road and opens that side curb only',()=>{
  const [road]=compileStorybookSideRoads(plan,street);
  assert.equal(road.connectors.length,2);
  const connector=road.connectors[0];
  assert.equal(connector.houseId,family.item.id);
  assert.equal(connector.side,1);
  assert.ok(Math.abs(connector.start.x-(family.x-family.item.h/2))<1e-9);
  const midpoint={x:(connector.start.x+connector.end.x)/2,z:(connector.start.z+connector.end.z)/2};
  assert.ok(storybookSideRoadContains([road],midpoint.x,midpoint.z));
  const curb=capture([road]).meshes.filter(mesh=>mesh.color==='#d0c3b0');
  assert.equal(curb.length,4,'opposite curb continuous, house-side curb split around both aprons');
  const away={...plan,placements:[placed,{...family,angle:-Math.PI/2}]};
  assert.equal(compileStorybookSideRoads(away,street)[0].connectors.length,0,'a rear wall is not guessed to be an entrance');
});

test('both house bays preserve their exact edges and slab height when resized or height-adjusted',()=>{
  for(const [scale,modelHeight] of [[1,undefined],[1.2,undefined],[1,100],[1,6]]) {
    const resized={...family,item:{...family.item,w:130*scale,h:176*scale,modelHeight}};
    const [road]=compileStorybookSideRoads({...plan,placements:[placed,resized]},street);
    assert.equal(road.connectors.length,2);
    const [garage,second]=road.connectors;
    assert.deepEqual([garage.bay,second.bay],['garage','second-driveway']);
    assert.equal(garage.width,49*scale);assert.equal(second.width,54*scale);
    assert.ok(Math.abs(garage.start.z-(family.z-32.5*scale))<1e-8);
    assert.ok(Math.abs(second.start.z-(family.z+35*scale))<1e-8);
    assert.ok(garage.along+garage.width/2<second.along-second.width/2,'curb openings remain separated');
    const expected=ground+1.81*(modelHeight===undefined?scale:modelHeight/55.2);
    const meshes=capture([road]).meshes.filter(mesh=>mesh.color==='#c5bcae');
    assert.equal(meshes.length,2);
    for(const [i,connector] of road.connectors.entries()) {
      assert.ok(Math.abs(connector.houseY-expected)<1e-8);
      const end=meshes[i].positions.slice(-6);
      assert.ok(Math.abs(end[1]-expected)<.0001&&Math.abs(end[4]-expected)<.0001,'both apron edges meet the scaled slab');
      assert.ok(Math.abs(end[0]-connector.footprint[0].x)<.0002);
      assert.ok(Math.abs(end[3]-connector.footprint[3].x)<.0002);
    }
  }
});

test('main street junction opens near curb and gutter without removing the through road',()=>{
  const [road]=compileStorybookSideRoads(plan,street),meshes=[];
  buildStorybookStreet({add(geometry,color){meshes.push({color,positions:Array.from(geometry.attributes.position.array)});geometry.dispose();}},
    street,ground,1800,900,{junctionCuts:[road.cut]});
  assert.equal(meshes.filter(m=>m.color==='#73767c').length,1);
  assert.equal(meshes.filter(m=>m.color==='#656b71').length,3,'far gutter whole, near gutter split');
  assert.equal(meshes.filter(m=>m.color==='#d0c3b0').length,3);
  for(const mesh of meshes.filter(m=>m.color==='#e9ce91'))assert.ok(mesh.positions.every((v,i)=>i%3||v<=road.cut.minX+.0002||v>=road.cut.maxX-.0002));
});

test('invalid and overlapping roads are omitted, while dimensions are safely bounded',()=>{
  const make=(replacement,extras=[])=>({...plan,placements:[{...placed,...replacement},...extras]});
  assert.equal(compileStorybookSideRoads(make({x:600}),street).length,0,'road cannot run through the condo');
  assert.equal(compileStorybookSideRoads(make({x:NaN}),street).length,0);
  assert.equal(compileStorybookSideRoads(make({z:-100}),street).length,0,'a side road cannot start in the beach');
  const [narrow]=compileStorybookSideRoads(make({item:{...placed.item,w:2,h:50}}),street);
  assert.equal(narrow.width,48);assert.equal(narrow.bodyLength,120);
  const [large]=compileStorybookSideRoads(make({item:{...placed.item,w:500,h:1500}}),street);
  assert.equal(large.width,140);assert.equal(large.bodyLength,1000);
  assert.equal(compileStorybookSideRoads(make({},[{...placed,item:{...placed.item,id:'duplicate'}}]),street).length,1);
  const barrier={x1:1000,y1:200,x2:1200,y2:200};
  assert.equal(compileStorybookSideRoads({...make({}),walls:[barrier]},street).length,0);
});

test('side paving follows broad terrain without holes under triangle interiors',()=>{
  const roads=compileStorybookSideRoads({...plan,placements:[placed]},street);
  const hill=(x,z)=>ground+12*Math.exp(-(((x-1100)/160)**2+((z-330)/100)**2));
  const mesh=capture(roads,hill).meshes.find(m=>m.color==='#73767c');
  for(let i=0;i<mesh.indices.length;i+=3) {
    const vertices=mesh.indices.slice(i,i+3).map(index=>mesh.positions.slice(index*3,index*3+3));
    const [x,y,z]=[0,1,2].map(axis=>vertices.reduce((sum,p)=>sum+p[axis]/3,0));
    assert.ok(y>=hill(x,z),`road covers terrain at ${x}, ${z}`);
  }
});


test('curved junction paving shares exact main-street seams and leaves no abrupt curb corner',()=>{
  const [road]=compileStorybookSideRoads(plan,street);
  const side=capture([road]).meshes,main=[];
  buildStorybookStreet({add(geometry,color){
    main.push({color,positions:Array.from(geometry.attributes.position.array)});geometry.dispose();
  }},street,ground,1800,900,{junctionCuts:[road.cut]});
  const vertices=mesh=>Array.from({length:mesh.positions.length/3},(_,i)=>mesh.positions.slice(i*3,i*3+3));
  const contains=(meshes,color,point)=>meshes.filter(mesh=>mesh.color===color).some(mesh=>
    vertices(mesh).some(vertex=>vertex.every((value,axis)=>Math.abs(value-point[axis])<.0002)));
  for(const cutX of [road.cut.minX,road.cut.maxX]) {
    for(const [offset,height,color] of [[-26,6.2,'#d0c3b0'],[-22,6.2,'#d0c3b0'],
      [-22,5,'#c0b6a7'],[0,5,'#c0b6a7']]) {
      const point=[cutX,ground+height,street.sample(cutX,street.nearZ+offset).z];
      assert.ok(contains(side,color,point),'branch paving meets the existing curb/pavement seam');
      assert.ok(contains(main,color,point),'main-street cut exposes the same seam without a gap');
    }
    const origin=[cutX,ground+5,street.sample(cutX,street.nearZ).z];
    const next=side.filter(mesh=>mesh.color==='#c0b6a7').flatMap(vertices)
      .filter(p=>Math.abs(p[0]-cutX)>.01&&Math.abs(p[1]-origin[1])<.001)
      .sort((a,b)=>Math.hypot(a[0]-cutX,a[2]-origin[2])-Math.hypot(b[0]-cutX,b[2]-origin[2]))[0];
    const dx=next[0]-cutX,dz=next[2]-origin[2];
    const tangent=(street.sample(cutX+.1,street.nearZ).z-street.sample(cutX-.1,street.nearZ).z)/.2;
    const alignment=Math.abs((dx+dz*tangent)/(Math.hypot(dx,dz)*Math.hypot(1,tangent)));
    assert.ok(alignment>.985,'rounded branch begins in the main-street direction without a sharp kink');
  }
});


test('office access has outward-facing edge skirts on both sides of its parking driveway',()=>{
  const office={x:1455,z:700,angle:Math.PI/2,item:{id:'office-campus',type:'sceneryOfficeCampus',w:220,h:180}};
  const [road]=compileStorybookSideRoads({...plan,placements:[...plan.placements,office]},street);
  const connector=road.connectors.find(c=>c.buildingId===office.item.id);
  assert.ok(connector);
  assert.equal(connector.bay,'parking-access');
  const middle={x:(connector.start.x+connector.end.x)/2,z:(connector.start.z+connector.end.z)/2};
  const skirts=capture([road]).meshes.filter(mesh=>mesh.color==='#aaa591');
  assert.equal(skirts.length,2,'both exposed asphalt edges have a solid side');
  for(const mesh of skirts) {
    const count=mesh.positions.length/3;
    const center={x:0,z:0};
    for(let i=0;i<mesh.positions.length;i+=3){center.x+=mesh.positions[i]/count;center.z+=mesh.positions[i+2]/count;}
    const outward={x:center.x-middle.x,z:center.z-middle.z};
    for(let i=0;i<mesh.normals.length;i+=3) {
      assert.ok(mesh.normals[i]*outward.x+mesh.normals[i+2]*outward.z>0,
        'each skirt faces away from the driveway so it stays visible from its own side');
    }
  }
});
