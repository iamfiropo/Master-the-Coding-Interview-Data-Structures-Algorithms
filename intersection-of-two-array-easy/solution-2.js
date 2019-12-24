const nums1 =  [1,2,2,1];
const nums2 =  [2,2];


function twoArrayIntersection(nums1, nums2) {
  const filteredList = nums1.filter(item => nums2.includes(item));
  const result = new Set(filteredList)
  return [...result];
}

twoArrayIntersection(nums1, nums2);