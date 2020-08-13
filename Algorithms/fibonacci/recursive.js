function fibonacciRecursive(n) {
  // O(2^n) runtime
  // identify the base case where n < 2, do this
  // identify the recursive case
  // and ensure the two steps above have a return statement to break the iteration

  debugger;

  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6));
// 0, 1, 1, 2, 3, 5, 8

//
