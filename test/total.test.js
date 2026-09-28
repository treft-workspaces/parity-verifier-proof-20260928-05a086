import test from 'node:test';
import assert from 'node:assert/strict';
import { totalCents } from '../src/total.js';

test('shipping is included in the total', () => {
  assert.equal(totalCents(2500, 300), 2800);
});
test('zero shipping preserves the subtotal', () => {
  assert.equal(totalCents(2500, 0), 2500);
});
