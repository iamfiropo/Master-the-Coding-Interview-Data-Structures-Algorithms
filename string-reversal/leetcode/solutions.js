/**
 *
 * @param {*} str
 *
 * call array reverse() method on the iterable input and return it
 */
const stringReversal = (str) => str.reverse();

stringReversal("standard");

/**
 *
 * @param {*} str
 *
 * create an empty array variable to store the reversed string
 * Using a traditional for loop,
 * Iterate over the inputted array, initializing it with the last index(str.length - 1) of the array element
 * Set the loop condition to be greater than or equal to 0( i >= 0) and the iteration to be in decremental state (i--)
 * Push each element of the array into the empty reversed string variable(str[i]) initialized in the step of the
 * pseudocode and return it
 */
const stringReversal1 = (str) => {
  const reversed = [];
  const lastChar = str.length - 1;

  for (let i = lastChar; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed;
};

stringReversal1("standard");

/**
 *
 * @param {*} str
 *
 * Create an empty string variable to store the reversed string characters
 * Using a for of loop, iterate over the element of the array and assign each item to the reversed string variable
 * created, appending the stored reversed string variable at each iteration to the end of the array
 * (reverseChar = item + reverseChar)
 * Return the reversed string variable stored, spreaded in an array [...reverseChar]
 */
const stringReversal2 = (str) => {
  let reverseChar = "";
  for (let item of str) {
    reverseChar = item + reverseChar;
  }
  return [...reverseChar];
};

stringReversal2("bingo");
