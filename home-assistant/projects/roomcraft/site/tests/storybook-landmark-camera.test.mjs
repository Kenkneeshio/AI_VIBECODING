import assert from 'node:assert/strict';
import test from 'node:test';
import {Box3, OrthographicCamera, Ray, Vector3} from 'three';
import {makeStorybookSceneryHouse} from '../ha-local/storybook-scenery-house.mjs';
import {makeStorybookOfficeCampus} from '../ha-local/storybook-office-campus.mjs';
import {makeStorybookSchoolCampus} from '../ha-local/storybook-school-campus.mjs';
import {storybookLandmarkCameraFrames} from '../ha-local/storybook-landmark-camera.mjs';
import {fitStorybookCamera} from '../ha-local/storybook-camera.mjs';
import {CAMERA_PRESETS, cameraFramePreset, enterFreeView, normalizeCameraView,
  readStoredCameraView, resolveDefaultCameraView} from '../ha-local/storybook-camera-views.mjs';

const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-7, `${actual} != ${expected}`);
const camera = () => new OrthographicCamera(-800,800,450,-450,1,4400);
const home = {minX:0,maxX:1510,minZ:-400,maxZ:850};
const specs = [
  ['goldcoast', makeStorybookSceneryHouse, {id:'family',type:'sceneryRanchHouse',w:130,h:176,x:1775,z:420,rotation:90}],
  ['school', makeStorybookSchoolCampus, {id:'school',type:'scenerySchoolCampus',w:300,h:240,x:-300,z:475,rotation:270}],
  ['innoflight', makeStorybookOfficeCampus, {id:'office',type:'sceneryOfficeCampus',w:220,h:180,x:2020,z:700,rotation:90}],
];

function createFixture(spec) {
  const [,make,item] = spec;
  const object = make(item);
  object.root.position.set(item.x,-111,item.z);
  object.root.rotation.y = -item.rotation * Math.PI / 180;
  const placements = [{item}];
  const roots = new Map([[item.id,object]]);
  return {object,placements,roots,frames:() => storybookLandmarkCameraFrames(placements,roots)};
}

function assertFits(cam, frame) {
  for (const x of [frame.minX,frame.maxX]) for (const y of [frame.minY,frame.maxY]) {
    for (const z of [frame.minZ,frame.maxZ]) {
      const point = new Vector3(x,y,z).project(cam);
      assert.ok(Math.abs(point.x) < 1 && Math.abs(point.y) < 1, `${point.toArray()} fits`);
    }
  }
  const center = new Vector3((frame.minX+frame.maxX)/2,(frame.minY+frame.maxY)/2,(frame.minZ+frame.maxZ)/2).project(cam);
  assert.ok(Math.abs(center.x) < .03 && Math.abs(center.y) < .03, 'campus is centered');
}

test('landmark presets frame actual models from their front facade at every screen shape', () => {
  for (const spec of specs) {
    const [preset] = spec;
    const fixture = createFixture(spec), before = structuredClone(fixture.placements);
    const frames = fixture.frames(), frame = frames[preset];
    assert.equal(frame.subjectId, spec[2].id);
    near(frame.azimuth, (360-spec[2].rotation)%360);
    for (const [width,height] of [[1280,800],[390,680],[2560,720]]) {
      const cam = camera();
      const view = fitStorybookCamera(cam,{...home,frames},width,height,preset);
      near(view.azimuth,frame.azimuth);
      const direction = cam.getWorldDirection(new Vector3());
      const front = new Vector3(0,0,1).transformDirection(fixture.object.root.matrixWorld);
      assert.ok(direction.dot(front) < -.7, 'camera faces into the entry facade');
      assertFits(cam,frame);
      const span = cam.right-cam.left;
      fitStorybookCamera(cam,home,width,height,'top');
      assert.ok(span < (cam.right-cam.left)*.45, 'dedicated close-up is not a whole-home angle change');
    }
    assert.deepEqual(fixture.placements,before,'camera cannot rewrite authored geometry');
  }
});

test('Gold Coast facade and driveway sightlines clear the foreground condo wall', () => {
  const fixture = createFixture(specs[0]), frames = fixture.frames(), frame = frames.goldcoast;
  const cam = camera();
  fitStorybookCamera(cam,{...home,frames},1280,800,'goldcoast');
  // The authored home east wall runs x=1450, z=210..850. Its 14-unit
  // body has a 3-unit wider cap at Y=58; ground beneath the condo is Y=-111.
  const wall = new Box3(new Vector3(1441.5,-111,201.5),new Vector3(1458.5,58,858.5));
  const towardCamera = cam.getWorldDirection(new Vector3()).negate();
  for (const x of [frame.minX,frame.maxX]) for (const y of [frame.minY,frame.maxY]) {
    for (const z of [frame.minZ,frame.maxZ]) {
      const ray = new Ray(new Vector3(x,y,z),towardCamera);
      assert.equal(ray.intersectsBox(wall),false, 'wall cannot cover any portion of the landmark frame');
    }
  }
  // This regression must catch the earlier shallow angle that hid the entry.
  const previousDirection = new Vector3(-Math.sin(62*Math.PI/180),Math.cos(62*Math.PI/180),0);
  assert.equal(new Ray(new Vector3(frame.minX,frame.minY,(frame.minZ+frame.maxZ)/2),
    previousDirection).intersectsBox(wall),true);
});

test('landmark frames follow edited dimensions, movement and rotation without stale bounding boxes', () => {
  const fixture = createFixture(specs[0]);
  const initial = fixture.frames().goldcoast;
  fixture.object.root.position.add(new Vector3(270,30,-100));
  fixture.object.root.rotation.y = Math.PI / 4;
  fixture.object.root.scale.set(1.5,2,.8);
  const frame = fixture.frames().goldcoast;
  const expected = new Box3().setFromObject(fixture.object.root);
  near(frame.azimuth,45);
  for (const axis of ['X','Y','Z']) {
    near(frame['min'+axis],expected.min[axis.toLowerCase()]);
    near(frame['max'+axis],expected.max[axis.toLowerCase()]);
  }
  assert.notDeepEqual(frame,initial);
  const cam = camera();
  fitStorybookCamera(cam,{...home,frames:{goldcoast:frame}},1280,800,'goldcoast');
  assertFits(cam,frame);
  assert.deepEqual(fixture.frames().goldcoast,frame,'identical geometry gives identical framing');
  fixture.roots.clear();
  assert.deepEqual(fixture.frames(),{});
  assert.doesNotThrow(() => fitStorybookCamera(cam,home,1280,800,'goldcoast'));
});

test('all shared presets can be saved while legacy Free preferences retain their exact DTO', () => {
  for (const preset of Object.keys(CAMERA_PRESETS)) {
    const pose = normalizeCameraView(preset);
    assert.deepEqual(readStoredCameraView({...pose,extra:'ignored'}),pose);
    const saved = resolveDefaultCameraView(pose);
    assert.equal(saved.preset,'default');
    assert.equal(cameraFramePreset(saved),cameraFramePreset(pose));
    assert.equal(saved.azimuth,pose.azimuth);
    assert.equal(saved.tilt,pose.tilt);
    assert.equal(saved.zoom,pose.zoom);
  }
  const legacy = {preset:'free',azimuth:183.25,tilt:88,zoom:1.125};
  assert.deepEqual(readStoredCameraView(legacy),legacy);
  assert.deepEqual(resolveDefaultCameraView(legacy),{...legacy,preset:'default'});
  for (const invalid of [null,{}, {preset:'unknown',azimuth:0,tilt:0,zoom:1},
    {...legacy,zoom:999},{...legacy,tilt:89},{...legacy,azimuth:NaN},
    {...legacy,framePreset:'unknown'},{...legacy,followFront:true}]) {
    assert.equal(readStoredCameraView(invalid),null);
  }
});

test('a named Default follows the edited facade while a framed Free Default preserves its exact orbit', () => {
  const fixture = createFixture(specs[0]), cam = camera();
  const frames = fixture.frames();
  const fitted = fitStorybookCamera(cam,{...home,frames},1280,800,'goldcoast');
  const initialProjection = cam.projectionMatrix.clone(), initialWorld = cam.matrixWorld.clone();
  const namedDefault = resolveDefaultCameraView(fitted);
  assert.equal(namedDefault.followFront,true);
  assert.equal(namedDefault.framePreset,'goldcoast');
  fitStorybookCamera(cam,{...home,frames},1280,800,namedDefault);
  assert.deepEqual(cam.projectionMatrix.elements,initialProjection.elements);
  assert.deepEqual(cam.matrixWorld.elements,initialWorld.elements);
  const free = {...enterFreeView(namedDefault),azimuth:123};
  assert.equal(free.followFront,undefined);
  const freeDefault = resolveDefaultCameraView(free);
  assert.equal(freeDefault.followFront,undefined);
  fixture.object.root.rotation.y = Math.PI/4;
  const movedFrames = fixture.frames();
  assert.equal(fitStorybookCamera(cam,{...home,frames:movedFrames},1280,800,namedDefault).azimuth,45);
  assert.equal(fitStorybookCamera(cam,{...home,frames:movedFrames},1280,800,freeDefault).azimuth,123);
  assertFits(cam,movedFrames.goldcoast);
});

test('saved coastal views preserve their tight target framing through Default and Free', () => {
  const coast = {minX:300,maxX:900,minZ:-600,maxZ:-200,minY:-115,maxY:-90};
  const scene = {...home,coastalFrames:{waterfront:coast,shores:coast}};
  for (const preset of ['waterfront','shores']) {
    const cam = camera(), pose = fitStorybookCamera(cam,scene,1280,800,preset);
    const projection = cam.projectionMatrix.clone(), world = cam.matrixWorld.clone();
    for (const next of [resolveDefaultCameraView(pose),enterFreeView(pose)]) {
      fitStorybookCamera(cam,scene,1280,800,next);
      assert.deepEqual(cam.projectionMatrix.elements,projection.elements);
      assert.deepEqual(cam.matrixWorld.elements,world.elements);
    }
  }
});
