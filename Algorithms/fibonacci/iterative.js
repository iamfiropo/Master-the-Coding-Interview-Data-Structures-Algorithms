function fibonacciIterative(n) {
  // declare a variable and initialize it with the first two index of the fibonacci sequence
  // iterate over the array and return the index value of the input
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

console.log(fibonacciIterative(3));
