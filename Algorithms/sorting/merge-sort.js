const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(nums) {
  debugger;
  const length = nums.length;
  // the base case
  if (length === 1) {
    return nums;
  }

  // Split the nums array into two, left and right
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  // merge both the left and right splitted arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(numbers));
