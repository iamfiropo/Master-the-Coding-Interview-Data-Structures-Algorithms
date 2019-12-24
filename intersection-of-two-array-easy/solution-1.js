const nums1 =  [4,9,5];
const nums2 =  [9,4,9,8,4];

/**
 * straight forward and readable 
 */

const intersection = function(nums1, nums2) {
  return nums1
    .filter(num => nums2.includes(num))
    .filter((value, index, self) => self.indexOf(value) === index);
};

intersection(nums1, nums2);
