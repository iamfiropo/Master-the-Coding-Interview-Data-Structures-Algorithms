// 2, 22, 33, 1, 42, 89, 5, 3
// 2, 22, 1, 33, 42, 5, 3, 89

function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        swap(nums, j);
      }
    }
  }
}

function swap(nums, j) {
  let temp = nums[j];
  nums[j] = nums[j + 1];
  nums[j + 1] = temp;
}
const numbers = [22, 2, 33, 1, 42, 89, 5, 3];

bubbleSort(numbers);
console.log(numbers);
