function factorial(n) {
  let counter = 1;

  for (let i = n; i > 0; i--) {
    counter = counter * i;
  }

  return counter;
}
console.log(factorial(5));
