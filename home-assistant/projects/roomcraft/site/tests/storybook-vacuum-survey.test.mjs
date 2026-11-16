import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyVacuumSurvey,readVacuumSurvey,sampleVacuumSurvey,markVacuumMismatch,vacuumSurveyKey} from '../ha-local/storybook-vacuum-survey.mjs';

test('survey records only fresh cleaning positions and flags a mismatched floor',()=>{
  const survey={...emptyVacuumSurvey('vacuum.example'),enabled:true};
  const now=Date.parse('2026-11-15T20:00:00Z');
  const map={last_updated:new Date(now).toISOString(),attributes:{saved_map_id:7,vacuum_position:{x:200,y:300}}};
  assert.equal(sampleVacuumSurvey(survey,{state:'paused',map,now}).points.length,0);
  const first=sampleVacuumSurvey(survey,{state:'cleaning',map,now,expectedMapId:8,transform:[1,0,0,0,1,0]});
  assert.equal(first.points.length,1);
  assert.equal(first.flags[0].issue,'wrong-floor-map');
  assert.equal(sampleVacuumSurvey(first,{state:'cleaning',map,now:now+11000}).points.length,1);
  const second=sampleVacuumSurvey(first,{state:'cleaning',map:{...map,last_updated:new Date(now+11000).toISOString()},now:now+11000});
  assert.equal(second.points.length,2);
  assert.equal(markVacuumMismatch(second,map,now+12000).flags.at(-1).issue,'review-layout-alignment');
});

test('survey persists in bounded local browser records without URLs',()=>{
  const entity='vacuum.example';const store=new Map();
  store.set(vacuumSurveyKey(entity),JSON.stringify({...emptyVacuumSurvey(entity),enabled:true,points:Array(1505).fill({x:1,y:2}),flags:[]}));
  const restored=readVacuumSurvey({getItem:key=>store.get(key)},entity);
  assert.equal(restored.points.length,1500);
  assert.equal(readVacuumSurvey({getItem:()=>'{bad'},entity).points.length,0);
});
