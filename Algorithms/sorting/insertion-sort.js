function insertionSort(nums) {
  const length = nums.length;

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const temp = nums.splice(i, 1);
        nums.splice(j, 0, temp[0]);
      }
    }
  }
}

const numbers = [22, 2, 33, 1, 42, 89, 5, 3];

insertionSort(numbers);
console.log(numbers);
