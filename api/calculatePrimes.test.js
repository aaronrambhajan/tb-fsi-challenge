// @flow

/**
 * Tests for the calculatePrimes function.
 */

import calculatePrimes from '../api/calculatePrimes';

test('Calculates primes for 10 to equal [3, 5]', () => {
  expect(calculatePrimes(10)).toEqual([3, 5]);
});

test('Calculates primes for 18 to equal [7]', () => {
  expect(calculatePrimes(18)).toEqual([7]);
});
