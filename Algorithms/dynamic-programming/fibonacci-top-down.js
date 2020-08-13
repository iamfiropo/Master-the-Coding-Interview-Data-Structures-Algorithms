/**
 * Dynamic programming
 * divide & conquer + memoization
 */

/**
 * Rules to follow to know if a problem needs dynamic programming
 * for optimization
 *
 * 1. Can the problem be divided into subproblem
 * 2. Recursive Solution
 * 3. Are there repetitive subproblems?
 * 4. Memoize subproblems
 * 5. Demand a raise from your boss
 */

/**
 * Top down - memoization approach to dynamic programming
 * Bottom up approach of dynamic programming
 */

function fibonacciMemoize() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fibonacci = fibonacciMemoize();
console.log(fibonacci());
