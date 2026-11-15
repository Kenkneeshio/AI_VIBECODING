import test from 'node:test';
import assert from 'node:assert/strict';
import {idleBrightnessAt} from '../ha-local/storybook-idle-runtime.mjs';

test('idle scene follows Home Assistant timezone and changes at seven',()=>{
  const at=hour=>idleBrightnessAt(new Date(`2026-11-16T${hour}:00Z`),'America/Los_Angeles');
  assert.equal(at('14:59'),.6); // 06:59 PST
  assert.equal(at('15:00'),1);  // 07:00 PST
  assert.equal(at('02:59'),1);  // 18:59 PST on the previous day
  assert.equal(at('03:00'),.6); // 19:00 PST on the previous day
});
