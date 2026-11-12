import assert from 'node:assert/strict';
import test from 'node:test';
import {applyVacuumAlignment, composeVacuumAlignment, fitBestVacuumAlignment, fitVacuumAlignment, invertVacuumAlignment,
  vacuumAlignmentDistance, vacuumMapMetadata, vacuumMetricDistance} from '../ha-local/storybook-vacuum-alignment.mjs';

const near = (actual, expected, tolerance = 1e-8) => assert.ok(Math.abs(actual - expected) < tolerance,
  `Expected ${actual} to be within ${tolerance} of ${expected}`);
const points = [{x:-2000,y:-1500}, {x:1000,y:-1500}, {x:1600,y:2400}, {x:-2100,y:2200}];
const anchorsFor = transform => points.map(map => ({map, plan:applyVacuumAlignment(transform, map)}));

test('recovers translation, rotation, reflection and a single scale in the saved affine format', () => {
  for (const flipY of [false, true]) {
    const sign = flipY ? -1 : 1;
    const transform = [.12, -.09 * sign, 650, .09, .12 * sign, 510];
    const anchors = anchorsFor(transform);
    const result = fitVacuumAlignment(anchors, {flipY});
    result.transform.forEach((value, index) => near(value, transform[index]));
    near(result.scale, .15);
    near(result.pixelsPerMetre, 150);
    near(result.rotationDegrees, 36.86989764584402);
    near(result.leaveOneOutError, 0);
    near(result.rmse, 0);
    const baseline = vacuumAlignmentDistance(anchors[0], anchors[1], result.transform);
    near(baseline.mapMetres, 3);
    near(baseline.planMetres, 3);
    near(baseline.deltaMetres, 0);
  }
});

test('two anchors can align a baseline and unknown map units omit physical distances', () => {
  const anchors = anchorsFor([.12, 0, 650, 0, .12, 510]).slice(0, 2);
  const result = fitVacuumAlignment(anchors, {mapUnitsPerMetre:null});
  near(result.scale, .12);
  assert.equal(result.leaveOneOutError, undefined);
  assert.equal(result.pixelsPerMetre, undefined);
  const distance = vacuumAlignmentDistance(...anchors, result.transform, null);
  assert.equal(distance.mapDistance, 3000);
  assert.equal(distance.planDistance, 360);
  assert.equal(distance.mapMetres, undefined);
  assert.equal(distance.planMetres, undefined);
});

test('a mismatched anchor produces independent check error without mutating the survey', () => {
  const anchors = anchorsFor([.12, 0, 650, 0, .12, 510]);
  anchors[2].plan.x += 100;
  const original = structuredClone(anchors);
  const result = fitVacuumAlignment(anchors);
  assert.deepEqual(result, fitVacuumAlignment(anchors));
  assert.deepEqual(anchors, original);
  assert.ok(result.rmse > 10);
  assert.ok(result.leaveOneOutError > result.maxError);
  const baseline = vacuumAlignmentDistance(anchors[1], anchors[2], result.transform);
  assert.ok(Math.abs(baseline.deltaMetres) > .03);
});

test('held-out landmarks can verify a directional correction without changing layout coordinates', () => {
  const transform = [.102, .018, 730, .012, -.086, 510];
  const anchors = anchorsFor(transform);
  assert.equal(fitBestVacuumAlignment(anchors.slice(0,3)).scaleRange, undefined);
  const fit = fitBestVacuumAlignment(anchors);
  fit.transform.forEach((value, index) => near(value, transform[index]));
  assert.ok(fit.scaleRange[0] < fit.scaleRange[1]);
  near(fit.leaveOneOutError, 0);
  const planToMap = invertVacuumAlignment(fit.transform);
  const x = applyVacuumAlignment(transform, {x:5000,y:0});
  const y = applyVacuumAlignment(transform, {x:0,y:5000});
  const start = {x:transform[2], y:transform[5]};
  near(vacuumMetricDistance(start,x,planToMap,1000),5);
  near(vacuumMetricDistance(start,y,planToMap,1000),5);
});

test('rejects malformed points, clustered map anchors and near-zero plan baselines', () => {
  const anchor = {map:{x:0,y:0}, plan:{x:300,y:300}};
  assert.equal(fitVacuumAlignment([anchor, anchor]), undefined);
  assert.equal(fitVacuumAlignment([anchor, {map:{x:5,y:5}, plan:{x:500,y:300}}]), undefined);
  assert.equal(fitVacuumAlignment([anchor, {map:{x:900,y:0}, plan:{x:301,y:300}}]), undefined);
  assert.equal(fitVacuumAlignment([anchor, {map:{x:900,y:0}, plan:{x:2000,y:300}}]), undefined);
  assert.equal(fitVacuumAlignment([anchor, {map:{x:900,y:0}, plan:{x:350,y:300}}], {mapUnitsPerMetre:0}), undefined);
  assert.equal(applyVacuumAlignment([1,2,3], anchor.map), undefined);
  assert.equal(vacuumAlignmentDistance(anchor, anchor, [1,0,0,0,1,0]), undefined);
});

const mapCamera = {
  state:'idle',
  attributes:{
    map_id:17, saved_map_id:4, access_token:'fixture-only',
    calibration_points:[
      {map:{x:-25,y:50}, vacuum:{x:0,y:0}},
      {map:{x:-25,y:150}, vacuum:{x:1000,y:0}},
      {map:{x:75,y:50}, vacuum:{x:0,y:1000}},
    ],
  },
};

test('converts the rendered map raster and composes it with a plan fit', () => {
  const metadata = vacuumMapMetadata(mapCamera);
  assert.equal(metadata.mapId, 4);
  assert.equal(metadata.mapUnitsPerMetre, 1000);
  assert.equal(metadata.access_token, undefined);
  const imagePoint = {x:25,y:90};
  const vacuumPoint = applyVacuumAlignment(metadata.pixelToMap, imagePoint);
  near(vacuumPoint.x, 400);
  near(vacuumPoint.y, 500);
  const reconstructed = applyVacuumAlignment(invertVacuumAlignment(metadata.pixelToMap), vacuumPoint);
  near(reconstructed.x, imagePoint.x);
  near(reconstructed.y, imagePoint.y);
  near(vacuumMetricDistance({x:-25,y:50}, {x:55,y:110}, metadata.pixelToMap, 1000), 1);
  const calibration = [.12,0,600,0,-.12,510];
  const mapped = applyVacuumAlignment(composeVacuumAlignment(calibration, metadata.pixelToMap), imagePoint);
  near(mapped.x, 648);
  near(mapped.y, 450);
});

test('rejects unavailable, empty or degenerate camera calibration metadata', () => {
  const attrs = mapCamera.attributes;
  const replaceAttrs = changes => ({...mapCamera, attributes:{...attrs, ...changes}});
  assert.equal(vacuumMapMetadata({...mapCamera, state:'unavailable'}), undefined);
  assert.equal(vacuumMapMetadata(replaceAttrs({is_empty:true})), undefined);
  assert.equal(vacuumMapMetadata(replaceAttrs({saved_map_id:0, map_id:false})), undefined);
  assert.equal(vacuumMapMetadata(replaceAttrs({saved_map_id:0, map_id:'17'})).mapId, 17);
  const collinear = attrs.calibration_points.map((point, index) => ({...point, map:{x:index,y:index}}));
  assert.equal(vacuumMapMetadata(replaceAttrs({calibration_points:collinear})), undefined);
});
