import assert from 'node:assert/strict';
import test from 'node:test';
import {nextMenuPage} from '../ha-local/storybook-menu-pages.mjs';

test('menu pages overlap slightly and clamp to the first and last usable position', () => {
  assert.equal(nextMenuPage({current:0,size:400,total:900},1),340);
  assert.equal(nextMenuPage({current:340,size:400,total:900},1),500);
  assert.equal(nextMenuPage({current:200,size:400,total:900},-1),0);
  assert.equal(nextMenuPage({current:0,size:400,total:390},1),0);
});
