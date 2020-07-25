/**
  * arr1 = ['a', 'c', 'e', 'b', 'k', 'e', 'd']
    arr2 = ['k', 'j', 'l', 't', 'a', 'z']
  */

function containsCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i] + "|", arr2[j] + "|", true);
      }
    }
    break;
  }

  console.log(false);
}

//O(a * b)

function containsCommonItems2(arr1, arr2) {
  /**
   1. iterate over the first array and create an object whose properties are true
   2. iterate over the second array and check if any item exist on the created object
 */
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

const arr1 = ["j", "c", "e", "b", "o", "e", "d"];
const arr2 = ["k", "j", "l", "t", "a", "z"];

//console.log(containsCommonItems2(arr1, arr2))

function containsCommonItems3(arr1, arr2) {
  return arr2.some((array) => arr1.includes(array));
}

//console.log(containsCommonItems3(arr1, arr2))

function containsCommonItems4(arr1, arr2) {
  let map = {};

  for (let item of arr1) {
    if (!map[item]) {
      map[item] = true;
    }
  }

  for (let item of arr2) {
    if (map[item]) {
      return true;
    }
  }

  return false;
}

console.log(containsCommonItems4(arr1, arr2));
