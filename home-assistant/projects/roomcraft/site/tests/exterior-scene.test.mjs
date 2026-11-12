import assert from 'node:assert/strict';
import test from 'node:test';
import {compileStorybookPlan,storybookPlantClearsStructures} from '../ha-local/storybook-scene.mjs';
import {storybookStreetBounds} from '../ha-local/storybook-street.mjs';
import {compileStorybookSideRoads,storybookSideRoadContains,buildStorybookSideRoads,storybookSideRoadSupportPads} from '../ha-local/storybook-side-road.mjs';
import {createStorybookMeadow} from '../ha-local/storybook-meadow.mjs';
import {exteriorHouseContains,exteriorFootprint,isExteriorBuilding} from '../ha-local/storybook-exterior.mjs';

const ground=-111;
const roadItem={id:'outside-side-road',type:'scenerySideRoad',x:1570,y:350,w:64,h:840,rotation:0};
const houseItem={id:'outside-family-house',type:'sceneryRanchHouse',x:1775,y:420,w:130,h:176,rotation:90};
const officeItem={id:'outside-office-campus',type:'sceneryOfficeCampus',x:2020,y:700,w:220,h:180,rotation:90};
const leftRoadItem={id:'outside-school-road',type:'scenerySideRoad',x:-80,y:350,w:64,h:840,rotation:0};
const schoolItem={id:'outside-school-campus',type:'scenerySchoolCampus',x:-300,y:475,w:300,h:240,rotation:270};
const base={version:2,editableReferenceVersion:10,hotspots:[],walls:[],rooms:[{
  id:'fixture-condo',name:'Condo',surface:'oak',points:[{x:400,y:190},{x:1450,y:190},{x:1450,y:840},{x:400,y:840}],
}],items:[{id:'indoor-table',type:'diningTable',x:700,y:470,w:100,h:60,rotation:0}]};
const project={...base,items:[...base.items,roadItem,houseItem,officeItem,leftRoadItem,schoolItem]};

function setup(layout=project) {
  const plan=compileStorybookPlan(layout),street=storybookStreetBounds(plan);
  const roads=compileStorybookSideRoads(plan,street,ground);
  return {plan,street,roads};
}

test('exterior objects preserve condo bounds, upstairs placement and the existing coastline',()=>{
  const snapshot=JSON.stringify(project);
  const original=compileStorybookPlan(base),{plan,street}=setup();
  assert.equal(JSON.stringify(project),snapshot,'shared scene compilation never rewrites authored geometry');
  assert.deepEqual(plan.bounds,original.bounds);
  assert.deepEqual(plan.houseBounds,original.houseBounds);
  const oldStreet=storybookStreetBounds(original);
  for(const key of ['nearZ','farZ','sceneryMinZ'])assert.equal(street[key],oldStreet[key]);
  for(const x of [100,800,1450,1570,1745,2500])assert.deepEqual(street.sample(x,street.nearZ),oldStreet.sample(x,oldStreet.nearZ));
  assert.equal(plan.placements.find(p=>p.item.id==='indoor-table').baseY,0);
  assert.deepEqual(plan.placements.filter(p=>[roadItem.id,houseItem.id,officeItem.id,leftRoadItem.id,schoolItem.id].includes(p.item.id)).map(p=>p.baseY),[ground,ground,ground,ground,ground]);
  assert.ok(plan.exteriorBounds.minX<plan.bounds.minX,'left scenery has separate framing bounds');
  assert.ok(plan.exteriorBounds.maxX>=houseItem.x+houseItem.h/2);
  assert.ok(plan.exteriorBounds.maxX>=officeItem.x+officeItem.h/2);
});

test('one cardinal side road connects both ranch driveways and the office parking entrance',()=>{
  const {plan,street,roads}=setup();
  assert.equal(roads.length,2);
  const road=roads.find(r=>r.id===roadItem.id);
  assert.equal(road.id,roadItem.id);
  assert.equal(road.connectors.length,3);
  assert.equal(road.connectors.filter(c=>c.houseId===houseItem.id).length,2);
  const office=road.connectors.find(c=>c.houseId===officeItem.id);
  assert.ok(office,'office parking shares the same side road');
  assert.deepEqual(road.forward,{x:0,z:1});
  assert.equal(road.origin.x,1570);assert.equal(road.end.x,1570);assert.equal(road.end.z,770);
  assert.deepEqual(office.start,{x:1935,z:659});
  assert.deepEqual(office.end,{x:1602,z:659});
  assert.equal(office.width,20);
  assert.equal(JSON.stringify(setup().roads),JSON.stringify(roads),'derived junctions and all driveways regenerate identically');
  assert.ok(road.bounds.minX>plan.houseBounds.maxX,'the junction and sidewalk clear the condo');
  assert.equal(road.origin.z,street.sample(road.origin.x,street.nearZ-26).z);
  assert.ok(road.end.z>houseItem.y,'the street reaches beyond the family house entrance');
  assert.ok(road.connectors[0].start.x<houseItem.x,'the connected entrance faces the existing home');
  assert.ok(road.connectors[0].end.x<road.connectors[0].start.x);
  assert.ok(storybookSideRoadContains(roads,roadItem.x,roadItem.y));
});

test('meadow support stays level underneath both exterior buildings and every connecting driveway',()=>{
  const {plan,street,roads}=setup();
  const {minX,maxX,minZ,maxZ}=plan.bounds;
  const meadow=createStorybookMeadow({plan,street,width:6200,depth:4200,
    centerX:(minX+maxX)/2,centerZ:(minZ+maxZ)/2,groundY:ground,extraPads:storybookSideRoadSupportPads(roads)});
  try {
    for(const building of plan.placements.filter(p=>isExteriorBuilding(p.item.type))) {
      const corners=exteriorFootprint(building);
      for(let u=0;u<=10;u++)for(let v=0;v<=10;v++) {
        const x=corners[0].x+(corners[1].x-corners[0].x)*u/10+(corners[3].x-corners[0].x)*v/10;
        const z=corners[0].z+(corners[1].z-corners[0].z)*u/10+(corners[3].z-corners[0].z)*v/10;
        assert.equal(meadow.heightAt(x,z),ground,`rendered meadow triangles support the entire ${building.item.type} footprint`);
      }
    }
    for(const {footprint} of roads.flatMap(road=>road.connectors))for(let u=0;u<=12;u++)for(let v=0;v<=4;v++) {
      const x=footprint[0].x+(footprint[1].x-footprint[0].x)*u/12+(footprint[3].x-footprint[0].x)*v/4;
      const z=footprint[0].z+(footprint[1].z-footprint[0].z)*u/12+(footprint[3].z-footprint[0].z)*v/4;
      assert.equal(meadow.heightAt(x,z),ground,'apron does not cross an unsupported terrain hump');
    }
    let meshes=0;
    buildStorybookSideRoads({add(geometry){
      meshes++;
      const vertices=Array.from(geometry.attributes.position.array);
      assert.ok(vertices.every(Number.isFinite));
      assert.ok(vertices.every((value,index)=>index%3!==1||value>=ground-.0001),'road and apron vertices never sink below the supported meadow');
      geometry.dispose();
    }},roads,meadow.heightAt,ground);
    assert.ok(meshes>5,'the actual scene terrain builds road, curbs, walks and apron');
  } finally {meadow.geometry.dispose();}
});

test('exterior exclusion footprints cover the house, road and connecting apron while leaving the condo alone',()=>{
  const {plan,roads}=setup(),house=plan.placements.find(p=>p.item.id===houseItem.id);
  const connectors=roads.flatMap(road=>road.connectors);
  assert.equal(exteriorHouseContains(plan.placements,house.x,house.z),true);
  assert.equal(exteriorHouseContains(plan.placements,roadItem.x,roadItem.y),false);
  assert.equal(storybookPlantClearsStructures([house],house.x,house.z,24),false);
  assert.equal(storybookPlantClearsStructures([house],house.x+82,house.z,24),false,'a canopy touching the house is excluded');
  assert.equal(storybookPlantClearsStructures([house],house.x+135,house.z,24),true);
  for(const connector of connectors)for(let t=0;t<=10;t++){
    const x=connector.start.x+(connector.end.x-connector.start.x)*t/10;
    const z=connector.start.z+(connector.end.z-connector.start.z)*t/10;
    assert.equal(storybookSideRoadContains(roads,x,z,10),true,'terrain editing and planting exclude the entire driveway, including office access');
  }
  assert.equal(storybookSideRoadContains(roads,700,470,10),false);
  assert.equal(exteriorHouseContains(plan.placements,700,470,10),false);
});

test('the office campus moves independently and participates in exterior clearance without creating another road',()=>{
  const {plan,street,roads}=setup();
  const office=plan.placements.find(p=>p.item.id===officeItem.id);
  assert.deepEqual([office.x,office.z,office.baseY,office.angle],[2020,700,ground,Math.PI/2]);
  assert.equal(isExteriorBuilding(office.item.type),true);
  assert.equal(isExteriorBuilding(roadItem.type),false);
  assert.equal(exteriorHouseContains(plan.placements,office.x,office.z),true,'the existing exterior protection API covers office buildings');
  assert.equal(storybookPlantClearsStructures([office],office.x+100,office.z,20),false);
  assert.equal(storybookPlantClearsStructures([office],office.x+140,office.z,20),true);
  assert.equal(roads.length,2);
  assert.equal(roads[0].connectors.filter(connector=>connector.houseId===officeItem.id).length,1);
  const moved={...project,items:project.items.map(item=>item.id===officeItem.id?{...item,x:2280,y:760,w:240,h:200,rotation:35}:item)};
  const after=setup(moved);
  assert.deepEqual(after.plan.placements.filter(p=>p.item.id!==officeItem.id),plan.placements.filter(p=>p.item.id!==officeItem.id));
  assert.deepEqual(after.plan.bounds,plan.bounds);
  assert.deepEqual(after.plan.houseBounds,plan.houseBounds);
  assert.deepEqual(after.street.sample(2020,after.street.nearZ),street.sample(2020,street.nearZ));
  assert.deepEqual(after.roads.map(r=>[r.origin,r.cut,r.connectors.filter(c=>c.houseId===houseItem.id)]),
    roads.map(r=>[r.origin,r.cut,r.connectors.filter(c=>c.houseId===houseItem.id)]),
    'moving the office never moves the branch or either ranch driveway');
  assert.notDeepEqual(after.plan.exteriorBounds,plan.exteriorBounds);
  const blocked=setup({...project,items:project.items.map(item=>item.id===officeItem.id?{...item,x:roadItem.x,y:roadItem.y}:item)});
  assert.equal(blocked.roads.length,1,'only the blocked office road is omitted');
  assert.equal(blocked.roads[0].id,leftRoadItem.id,'the independent school branch remains');
});


test('blocking office access preserves the clear road and ranch driveways without drawing through structures',()=>{
  const barrier={id:'office-access-barrier',x1:1810,y1:620,x2:1810,y2:700};
  const {roads}=setup({...project,walls:[barrier]});
  assert.equal(roads.length,2);
  assert.equal(roads[0].connectors.filter(c=>c.houseId===houseItem.id).length,2);
  assert.equal(roads[0].connectors.filter(c=>c.houseId===officeItem.id).length,0,
    'a wall across office access omits that driveway, rather than routing through the wall');
  const {roads:short}=setup({...project,items:project.items.map(item=>item.id===roadItem.id?{...item,h:380}:item)});
  assert.equal(short[0].connectors.filter(c=>c.houseId===houseItem.id).length,2);
  assert.equal(short[0].connectors.filter(c=>c.houseId===officeItem.id).length,0,
    'a short authored road never silently stretches to reach the office');
});


test('left school branch connects its entry without moving any existing object or the right branch',()=>{
  const withoutSchool={...project,items:project.items.filter(item=>![leftRoadItem.id,schoolItem.id].includes(item.id))};
  const before=setup(withoutSchool),after=setup();
  assert.deepEqual(after.plan.placements.filter(p=>![leftRoadItem.id,schoolItem.id].includes(p.item.id)),before.plan.placements);
  assert.deepEqual(after.plan.bounds,before.plan.bounds);
  assert.deepEqual(after.plan.houseBounds,before.plan.houseBounds);
  assert.equal(JSON.stringify(after.roads.find(r=>r.id===roadItem.id)),JSON.stringify(before.roads[0]),'existing road and three driveways retain exact geometry');
  const left=after.roads.find(r=>r.id===leftRoadItem.id);
  assert.ok(left);assert.deepEqual(left.forward,{x:0,z:1});
  assert.equal(left.origin.x,-80);assert.equal(left.end.x,-80);
  assert.ok(Math.abs(left.end.z-770)<1e-8);
  assert.equal(left.connectors.length,1);
  const entry=left.connectors[0];
  assert.equal(entry.buildingId,schoolItem.id);assert.equal(entry.bay,'school-entry');assert.equal(entry.width,28);
  for(const [actual,expected] of [[entry.start.x,-180],[entry.start.z,475],[entry.end.x,-112],[entry.end.z,475]])assert.ok(Math.abs(actual-expected)<1e-8);
  assert.ok(Math.abs(entry.houseY-(ground+1.6))<1e-8);
  const blocked=setup({...project,items:project.items.map(item=>item.id===schoolItem.id?{...item,x:-80}:item)});
  assert.equal(blocked.roads.length,1,'overlapping campus omits only the unsafe school branch');
  assert.equal(blocked.roads[0].id,roadItem.id);
  assert.equal(JSON.stringify(blocked.roads[0]),JSON.stringify(before.roads[0]));
});
