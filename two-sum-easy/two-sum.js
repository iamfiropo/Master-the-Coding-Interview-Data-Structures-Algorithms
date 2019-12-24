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

twoSum([1,2,3,4,4], 7);