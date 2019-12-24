const nums1 =  [4,9,5];
const nums2 =  [9,4,9,8,4];
/*** 
1. convert the first number array to an object with the introduction of Set Object
2. Declare an empty result variable with Set Object
3. Loop through the second array input and uniquely add the element that are in both array 
***/ 
const twoArrayIntersection = (nums1, nums2) => {
  let hMap1 = new Set(nums1);
  let result = new Set();

  nums2.forEach(item => {
    if(hMap1.has(item) && !result.has(item)) {
      result.add(item);
    }
  })
  return [...result];
}

twoArrayIntersection(nums1, nums2);