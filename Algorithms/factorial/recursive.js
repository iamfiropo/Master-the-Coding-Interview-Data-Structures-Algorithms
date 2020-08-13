function factorialRecursiveWay(n) {
  debugger;
  if (n === 2) {
    return 2;
  }

  return n * factorialRecursiveWay(n - 1);
}

console.log(factorialRecursiveWay(5));
