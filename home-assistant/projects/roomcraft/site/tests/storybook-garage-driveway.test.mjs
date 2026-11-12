import assert from 'node:assert/strict';
import test from 'node:test';
import {compileStorybookGarageDriveways,storybookGarageDrivewayContains,buildStorybookGarageDriveways} from '../ha-local/storybook-garage-driveway.mjs';
import {buildStorybookStreet} from '../ha-local/storybook-street.mjs';

const ground=-111;
const garage={x:306,z:112,angle:Math.PI,item:{id:'garage-fixture',type:'garageDoor',w:132,h:92,garageDriveway:true}};
const plan={editableStructure:true,placements:[garage],stairs:[],walls:[],fences:[],
  houseBounds:{minX:390,maxX:1360,minZ:190,maxZ:820}};
const street={nearZ:-10,farZ:-154,
  sample:(x,z)=>({x,z:z+9*Math.sin(x/170),yaw:-Math.atan(9/170*Math.cos(x/170))})};
const points=geometry=>Array.from(geometry.attributes.position.array);
function capture(routes,heightAt=()=>ground) {
  const geometries=[],materials={};
  const count=buildStorybookGarageDriveways({
    material:color=>materials[color]??=( {} ),
    add(geometry,color){geometries.push({color,positions:points(geometry),normals:Array.from(geometry.attributes.normal.array),colors:Array.from(geometry.attributes.color.array)});geometry.dispose();},
  },routes,heightAt,ground);
  return {count,geometries,materials};
}

test('garage road joins the rotated pad to the actual curved asphalt with a flush curb cut',()=>{
  const before=JSON.stringify(plan);
  const [route]=compileStorybookGarageDriveways(plan,street);
  assert.ok(route);
  assert.equal(JSON.stringify(plan),before,'compilation never edits the garage');
  assert.equal(route.width,132*.72);
  assert.ok(Math.abs(route.rows[0].x-306)<1e-6);
  assert.ok(Math.abs(route.rows[0].z-(112-92*.57+.48))<1e-6);
  const end=route.rows.at(-1);
  assert.equal(end.streetZ,street.nearZ-30);
  assert.equal(end.z,street.sample(end.x,end.streetZ).z);
  const surface=capture([route]);
  assert.equal(surface.count,1);
  assert.deepEqual(surface,capture(compileStorybookGarageDriveways(plan,street)));
  assert.ok(surface.geometries[0].normals.filter((_,i)=>i%3===1).every(y=>y>0));
  const mesh=surface.geometries[0].positions;
  assert.ok(Math.abs(mesh[1]-(ground+5.085))<1e-4,'pad edge remains on its slab');
  assert.ok(Math.abs(mesh.at(-2)-(ground+1.365))<1e-4,'ramp reaches road height');
  assert.ok(storybookGarageDrivewayContains([route],route.rows[3].x,route.rows[3].z));
  assert.equal(storybookGarageDrivewayContains([route],route.rows[3].x+200,route.rows[3].z),false);
});

test('garage driveway is opt-in and respects width, orientation, blockers and distance',()=>{
  const make=item=>({...plan,placements:[{...garage,item:{...garage.item,...item}}]});
  assert.equal(compileStorybookGarageDriveways(make({garageDriveway:false}),street).length,0);
  assert.equal(compileStorybookGarageDriveways({...plan,placements:[{...garage,angle:0}]},street).length,0);
  assert.equal(compileStorybookGarageDriveways(make({garageDrivewayWidth:64}),street)[0].width,64);
  assert.equal(compileStorybookGarageDriveways(make({garageDrivewayWidth:-1}),street)[0].width,32);
  assert.equal(compileStorybookGarageDriveways(plan,{...street,nearZ:-900}).length,0);
  assert.equal(compileStorybookGarageDriveways(plan,{...street,nearZ:100}).length,0);
  const wall={x1:0,y1:35,x2:650,y2:35};
  assert.equal(compileStorybookGarageDriveways({...plan,walls:[wall]},street).length,0);
  const stair={x:306,z:16,angle:0,apronDepth:30,item:{type:'stairs',w:650,h:35}};
  assert.equal(compileStorybookGarageDriveways({...plan,stairs:[stair]},street).length,0);
  const building={...garage,x:306,z:16,item:{...garage.item,id:'other',w:650,h:35,garageDriveway:false}};
  assert.equal(compileStorybookGarageDriveways({...plan,placements:[garage,building]},street).length,0);
});

test('angled garages produce finite road surfaces and avoid overlapping entrances',()=>{
  const rotated={...garage,angle:Math.PI-.24};
  const routes=compileStorybookGarageDriveways({...plan,placements:[rotated]},street);
  assert.equal(routes.length,1);
  assert.ok(capture(routes,(x,z)=>ground+.002*z).geometries[0].positions.every(Number.isFinite));
  const other={...garage,x:garage.x+3,item:{...garage.item,id:'nearby'}};
  const both=compileStorybookGarageDriveways({...plan,placements:[garage,other]},street);
  assert.equal(both.length,0,'overlapping buildings never get a guessed road');
});

test('driveway paving stays above hillside triangles through the unprotected middle',()=>{
  const routes=compileStorybookGarageDriveways(plan,street);
  const hill=(x,z)=>ground+21*Math.exp(-(((z-30)/16)**2+((x-306)/80)**2));
  const {positions}=capture(routes,hill).geometries[0];
  const mainRows=routes[0].rows.filter(row=>row.crossover===undefined).length;
  for(let i=0;i<mainRows*9;i++) {
    const [x,y,z]=positions.slice(i*3,i*3+3);
    assert.ok(y>=hill(x,z)+.159);
  }
});

test('street cuts remove only the affected near-side sidewalk and curb',()=>{
  const meshes=[];
  buildStorybookStreet({add(geometry,color){meshes.push({color,vertices:points(geometry)});geometry.dispose();}},
    {nearZ:0,farZ:-144},ground,800,400,{drivewayCuts:[{minX:180,maxX:220}]});
  const curb=meshes.filter(m=>m.color==='#d0c3b0');
  assert.equal(curb.length,3,'north curb intact, south curb split around driveway');
  assert.ok(curb.filter(m=>m.vertices[2]>-100).every(m=>m.vertices.every((v,i)=>i%3||v<=180||v>=220)));
  assert.equal(meshes.filter(m=>m.color==='#73767c').length,1,'street driving surface stays continuous');
  const pavement=meshes.filter(m=>m.color==='#c0b6a7');
  assert.equal(pavement.length,3);
});

const rearGarage={x:300,z:110,angle:0,item:{id:'rear-fixture',type:'garageDoor',w:132,h:120,garageDriveway:true,garageDrivewayWidth:60}};
const rect=(x,z,w,h)=>({points:[{x,y:z},{x:x+w,y:z},{x:x+w,y:z+h},{x,y:z+h}]});
const rearPlan={placements:[rearGarage],walls:[],fences:[],
  houseBounds:{minX:145,maxX:1000,minZ:185,maxZ:740},
  rooms:[rect(395,185,605,555),rect(145,245,250,190)],
  stairs:[{x:90,z:490,angle:0,apronDepth:40,item:{type:'stairs',w:90,h:600}}]};

test('a home-facing garage uses a smooth side driveway without crossing its pad or the balcony',()=>{
  const snapshot=JSON.stringify(rearPlan);
  const routes=compileStorybookGarageDriveways(rearPlan,street);
  assert.equal(routes.length,1);
  assert.equal(routes[0].wrapped,true);
  assert.ok(routes[0].cut.maxX<rearGarage.x);
  assert.equal(JSON.stringify(rearPlan),snapshot);
  const result=capture(routes);
  assert.equal(result.geometries.length,1,'one colored paving mesh has no overlapping inset layer that can z-fight');
  assert.equal(result.materials[result.geometries[0].color].vertexColors,true);
  for(const mesh of result.geometries) {
    assert.ok(mesh.positions.every(Number.isFinite));
    assert.equal(mesh.colors.length,mesh.positions.length);
    assert.ok(new Set(mesh.colors).size>3,'the shoulder is shaded within the same surface');
    assert.ok(mesh.normals.filter((_,i)=>i%3===1).every(value=>value>.45));
    for(let i=0;i<mesh.positions.length;i+=3) {
      const [x,,z]=mesh.positions.slice(i,i+3);
      assert.ok(!(x>234&&x<366&&z>63.2&&z<153.2),'road stays outside its own garage body');
      assert.ok(!(x>=145&&x<=395&&z>=245&&z<=435),'road never crosses the balcony');
    }
  }
  assert.deepEqual(capture(compileStorybookGarageDriveways(rearPlan,street)),result);
});

test('a mirrored home-facing garage chooses the clear opposite side and refuses a blocked apron',()=>{
  const mirror=p=>({...p,x:1200-p.x});
  const mirrored={...rearPlan,
    placements:rearPlan.placements.map(mirror),stairs:rearPlan.stairs.map(mirror),
    houseBounds:{minX:200,maxX:1055,minZ:185,maxZ:740},
    rooms:rearPlan.rooms.map(room=>({...room,points:room.points.map(mirror)}))};
  const routes=compileStorybookGarageDriveways(mirrored,street);
  assert.equal(routes.length,1);
  assert.ok(routes[0].cut.minX>mirrored.placements[0].x);
  const blocked={...rearPlan,rooms:[...rearPlan.rooms,rect(130,175,330,60)]};
  assert.equal(compileStorybookGarageDriveways(blocked,street).length,0);
});

test('wrapped road tessellation clears a broad hill at triangle interiors as well as edges',()=>{
  const routes=compileStorybookGarageDriveways(rearPlan,street);
  const hill=(x,z)=>ground+10*Math.exp(-(((x-199)/70)**2+((z-105)/70)**2));
  const meshes=capture(routes,hill).geometries;
  let interiors=0;
  for(const {positions} of meshes)for(let i=0;i<positions.length;i+=9) {
    const p=positions.slice(i,i+3),q=positions.slice(i+3,i+6),r=positions.slice(i+6,i+9);
    const x=(p[0]+q[0]+r[0])/3,z=(p[2]+q[2]+r[2])/3,y=(p[1]+q[1]+r[1])/3;
    if(z<=street.sample(x,street.nearZ).z)continue;
    assert.ok(y>=hill(x,z),`paving triangle covers terrain at ${x}, ${z}`);
    interiors++;
  }
  assert.ok(interiors>150,'the long unioned polygon is sampled throughout its interior');
});
