const array1 =  ['a', 'b', 'c'];
const array2 =  ['z', 'w', '3'];

function compareTwoArrays(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]) return true
    }
  }
  return false;
}

// compareTwoArrays(array1, array2);

// create an empty object
// loop through the first array where properties === the items of the array 
function compareTwoArrays2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }
  
  for (let j = 0; j<arr2.length; j++) {
    if(map[arr2[j]]) return true;
  }

  return false;
}

// compareTwoArrays3(array1, array2);

// function compareTwoArrays3(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item));
// }

const twoSum = (arr1, target) => {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = i + 1; j < arr1.length; j++) {
      if(arr1[j] === target - arr1[i]) {
        return `The indexes of ${i} and ${j} is equal to ${target}`
      }
    }
  }

  return 'not found';
}

twoSum([1,2,3,3,4], 7);