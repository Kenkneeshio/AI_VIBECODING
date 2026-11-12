import assert from 'node:assert/strict';
import test from 'node:test';
import {dashboardProjectProblem} from '../ha-local/dashboard-project.mjs';
import {invalidStructureProjects, validStructureProject} from './structure-safety-fixtures.mjs';

const validators={validCameraThumbnail:()=>true,validObjectControl:()=>true};

test('publication audits structural edits without silently repairing the image/layout pair',()=>{
  for(const {label,project,message} of invalidStructureProjects()){
    const before=structuredClone(project);
    assert.match(dashboardProjectProblem(project,validators),message,label);
    assert.deepEqual(project,before,label+' must remain unmodified');
  }
});

test('valid structure with an intentional opening and legacy steep terrain is unchanged at publication',()=>{
  const project=validStructureProject(),before=structuredClone(project);
  assert.equal(dashboardProjectProblem(project,validators),undefined);
  assert.deepEqual(project,before);
});
