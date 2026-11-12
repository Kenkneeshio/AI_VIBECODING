import assert from 'node:assert/strict';
import test from 'node:test';
import {compileStorybookPlan,storybookPlantClearsStructures} from '../ha-local/storybook-scene.mjs';
import {storybookStreetBounds} from '../ha-local/storybook-street.mjs';
import {compileStorybookSideRoads,storybookSideRoadContains,buildStorybookSideRoads} from '../ha-local/storybook-side-road.mjs';
import {createStorybookMeadow} from '../ha-local/storybook-meadow.mjs';
import {exteriorHouseContains,exteriorFootprint,isExteriorBuilding} from '../ha-local/storybook-exterior.mjs';

const ground=-111;
const roadItem={id:'outside-side-road',type:'scenerySideRoad',x:1570,y:350,w:64,h:380,rotation:0};
const houseItem={id:'outside-family-house',type:'sceneryRanchHouse',x:1775,y:420,w:130,h:176,rotation:90};
const officeItem={id:'outside-office-campus',type:'sceneryOfficeCampus',x:2020,y:700,w:220,h:180,rotation:90};
const base={version:2,editableReferenceVersion:10,hotspots:[],walls:[],rooms:[{
  id:'fixture-condo',name:'Condo',surface:'oak',points:[{x:400,y:190},{x:1450,y:190},{x:1450,y:840},{x:400,y:840}],
}],items:[{id:'indoor-table',type:'diningTable',x:700,y:470,w:100,h:60,rotation:0}]};
const project={...base,items:[...base.items,roadItem,houseItem,officeItem]};

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
  assert.deepEqual(plan.placements.filter(p=>[roadItem.id,houseItem.id,officeItem.id].includes(p.item.id)).map(p=>p.baseY),[ground,ground,ground]);
  assert.ok(plan.exteriorBounds.minX>plan.bounds.maxX,'scenery has separate framing bounds');
  assert.ok(plan.exteriorBounds.maxX>=houseItem.x+houseItem.h/2);
  assert.ok(plan.exteriorBounds.maxX>=officeItem.x+officeItem.h/2);
});

test('the full scene compiles the intended right-side road and west-facing house connection',()=>{
  const {plan,street,roads}=setup();
  assert.equal(roads.length,1);
  const [road]=roads;
  assert.equal(road.id,roadItem.id);
  assert.equal(road.connectors.length,2);
  assert.equal(road.connectors[0].houseId,houseItem.id);
  assert.ok(road.bounds.minX>plan.houseBounds.maxX,'the junction and sidewalk clear the condo');
  assert.equal(road.origin.z,street.sample(road.origin.x,street.nearZ-26).z);
  assert.ok(road.end.z>houseItem.y,'the street reaches beyond the family house entrance');
  assert.ok(road.connectors[0].start.x<houseItem.x,'the connected entrance faces the existing home');
  assert.ok(road.connectors[0].end.x<road.connectors[0].start.x);
  assert.ok(storybookSideRoadContains(roads,roadItem.x,roadItem.y));
});

test('meadow support stays level underneath both exterior buildings and the house road aprons',()=>{
  const {plan,street,roads}=setup();
  const {minX,maxX,minZ,maxZ}=plan.bounds;
  const meadow=createStorybookMeadow({plan,street,width:6200,depth:4200,
    centerX:(minX+maxX)/2,centerZ:(minZ+maxZ)/2,groundY:ground,extraPads:roads.map(road=>road.bounds)});
  try {
    for(const building of plan.placements.filter(p=>isExteriorBuilding(p.item.type))) {
      const corners=exteriorFootprint(building);
      for(let u=0;u<=10;u++)for(let v=0;v<=10;v++) {
        const x=corners[0].x+(corners[1].x-corners[0].x)*u/10+(corners[3].x-corners[0].x)*v/10;
        const z=corners[0].z+(corners[1].z-corners[0].z)*u/10+(corners[3].z-corners[0].z)*v/10;
        assert.equal(meadow.heightAt(x,z),ground,`rendered meadow triangles support the entire ${building.item.type} footprint`);
      }
    }
    for(const {footprint} of roads[0].connectors)for(let u=0;u<=12;u++)for(let v=0;v<=4;v++) {
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
  const connector=roads[0].connectors[0],x=(connector.start.x+connector.end.x)/2,z=(connector.start.z+connector.end.z)/2;
  assert.equal(exteriorHouseContains(plan.placements,house.x,house.z),true);
  assert.equal(exteriorHouseContains(plan.placements,roadItem.x,roadItem.y),false);
  assert.equal(storybookPlantClearsStructures([house],house.x,house.z,24),false);
  assert.equal(storybookPlantClearsStructures([house],house.x+82,house.z,24),false,'a canopy touching the house is excluded');
  assert.equal(storybookPlantClearsStructures([house],house.x+135,house.z,24),true);
  assert.equal(storybookSideRoadContains(roads,x,z,10),true,'terrain editing and planting exclude the derived apron');
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
  assert.equal(roads.length,1);
  assert.ok(roads[0].connectors.every(connector=>connector.houseId===houseItem.id),'no inferred office driveway or entity binding');
  const moved={...project,items:project.items.map(item=>item.id===officeItem.id?{...item,x:2280,y:760,w:240,h:200,rotation:35}:item)};
  const after=setup(moved);
  assert.deepEqual(after.plan.placements.filter(p=>p.item.id!==officeItem.id),plan.placements.filter(p=>p.item.id!==officeItem.id));
  assert.deepEqual(after.plan.bounds,plan.bounds);
  assert.deepEqual(after.plan.houseBounds,plan.houseBounds);
  assert.deepEqual(after.street.sample(2020,after.street.nearZ),street.sample(2020,street.nearZ));
  assert.deepEqual(after.roads.map(r=>[r.origin,r.cut,r.connectors]),roads.map(r=>[r.origin,r.cut,r.connectors]));
  assert.notDeepEqual(after.plan.exteriorBounds,plan.exteriorBounds);
  const blocked=setup({...project,items:project.items.map(item=>item.id===officeItem.id?{...item,x:roadItem.x,y:roadItem.y}:item)});
  assert.equal(blocked.roads.length,0,'an exterior road cannot pass through the office campus');
});
