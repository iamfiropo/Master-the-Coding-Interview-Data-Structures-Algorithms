// APPROACH 1
function reversedString(str) {
  // check
  if (!str || str.length < 2 || typeof str !== "string") {
    return false;
  }

  // iterate over the string and push the item into the temporary array created in a backward motion
  let backward = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backward.push(str[i]);
  }

  return backward.join("");
}

reversedString("Johnbull");

//APPROACH 2
const stringReversal2 = (str) => [...str].reverse().join("");
stringReversal2("standard");

// APPROACH 3
const stringReversal3 = (str) => {
  let reverseChar = "";
  for (let item of str) {
    reverseChar = item + reverseChar;
  }
  return reverseChar;
};

stringReversal3("bingo");
