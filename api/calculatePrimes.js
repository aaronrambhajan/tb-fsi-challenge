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
    // They don't seem to want the actual median, but both values
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
  const primes = [];
  for (var primeIndex = 0; primeIndex < target + 1; primeIndex++) {
    primes.push(true);
  }

  let primeNum = 2;
  while (primeNum * primeNum <= target) {
    if (primes[primeNum]) {
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

  const results = [];
  for (var counter = 2; counter < target; counter++) {
    if (primes[counter]) {
      results.push(counter);
    }
  }

  return results;
}
