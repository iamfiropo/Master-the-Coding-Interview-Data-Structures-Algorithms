// https://leetcode.com/problems/merge-sorted-array/
function mergeSortedArray(array1, array2) {
  // validate the input
  // Check if one of the input is an empty array
  // create a temporary array variable to store the resulting merged array
  // create a variable and assign to it, the first item of the first array
  // create a variable and assign to it, the first item of the second array
  // create an index incremental variable for the first array and initialize it with 0
  // create an index incremental variable for the second array and initialize it with 0
  // iterate over the two array input simultaneously while the first array item or the second array item is true
  // check if array1 is greater than array2, then push the array1 items that passed the condition
  // to the temporary array variable that was created in step 3 and vice versa
  // update array1Item with the next item of the array and vice versa
  // increment array1 index and vice versa

  if (array1.length === 0) {
    return array2;
  } else if (array2.length === 0) {
    return array1;
  } else {
    let mergedArray = [];
    let firstArrayItem = array1[0];
    let secondArrayItem = array2[0];
    let array1NextIndex = 0;
    let array2NextIndex = 0;

    while (firstArrayItem || secondArrayItem) {
      if (!secondArrayItem || firstArrayItem < secondArrayItem) {
        mergedArray.push(firstArrayItem);
        firstArrayItem = array1[++array1NextIndex];
      } else {
        mergedArray.push(secondArrayItem);
        secondArrayItem = array2[++array2NextIndex];
      }
    }

    return mergedArray;
  }
}

mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
