import assert from 'node:assert/strict';
import test from 'node:test';
import {driverMessageSchema, invocationSchema} from '../scripts/connector-preview/protocol.mjs';

test('connector preview accepts string-keyed JSON-RPC arguments and results', () => {
  const invocation = {
    connectorId: 'example',
    actionName: 'read',
    arguments: {enabled: true, count: 3, nested: {labels: ['first', 'second']}},
  };
  assert.deepEqual(invocationSchema.parse(invocation), invocation);
  assert.equal(invocationSchema.safeParse({...invocation, arguments: []}).success, false);
  assert.equal(invocationSchema.safeParse({...invocation, account: 'unexpected'}).success, false);

  const response = {
    jsonrpc: '2.0',
    id: '9a1d8b70-5949-4be9-a73d-6475f21fc4cb',
    result: {success: true, value: ['one', 'two']},
  };
  assert.deepEqual(driverMessageSchema.parse(response), response);
  assert.equal(driverMessageSchema.safeParse({...response, result: 'invalid'}).success, false);
});
