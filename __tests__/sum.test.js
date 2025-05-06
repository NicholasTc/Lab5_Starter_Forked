// sum.test.js
import { sum } from '../code-to-unit-test/sum';

// NOTE 1: FOR THE LAST PART OF THE ASSIGNMENT, CHANGED PARAMETER FROM 3 TO 4
// Note 2: reverted back to 3

test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});