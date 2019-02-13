/**
 * Calculates the set of median prime numbers less than num.
 *
 * @param {Number} num
 *   The upper bound on prime numbers being retrieved.
 *
 * @return {Array}
 *   The set of median prime numbers less than num.
 */
export default function getMedianPrimeNums(num) {
  const sieveNums = sieveOfEratosthenes(num);

  // We can assume the numbers are sorted
  const size = sieveNums.length;
  const midPoint = Math.floor(size / 2);

  if (size % 2 === 0) {
    // Examples suggest they want both median values in the case of 2
    return [sieveNums[midPoint - 1], sieveNums[midPoint]];
  }

  return [sieveNums[midPoint]];
}

/**
 * Calculates all prime numbers less than the target using the Sieve of
 * Eratosthenes algorithm.
 *
 * @param {Number} target
 *   The upper bound on prime numbers being retrieved.
 *
 * @return {Array}
 *   All prime numbers less than the target.
 */
function sieveOfEratosthenes(target) {
  // Will eventually be marked `false` iff !prime
  const primes = [];
  for (var primeIndex = 0; primeIndex < target + 1; primeIndex++) {
    primes.push(true);
  }

  // Starting at the first prime...
  let primeNum = 2;

  while (primeNum * primeNum <= target) {
    // We change every square each time, so by the time we run through, we
    // know if it's still `true`, then it's a prime
    if (primes[primeNum]) {
      // Update all multiples
      for (
        var pMultiple = primeNum * primeNum;
        pMultiple < target + 1;
        pMultiple += primeNum
      ) {
        primes[pMultiple] = false;
      }
    }
    primeNum += 1;
  }

  // Create results
  const results = [];
  for (var counter = 2; counter < target; counter++) {
    if (primes[counter]) {
      results.push(counter);
    }
  }

  return results;
}
