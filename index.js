const nums1 =  [4,9,5];
const nums2 =  [9,4,9,8,4];

function compareTwoArrays(nums1, nums2) {
  let result = [];
  let mapResult = new Set()
  for(let i = 0; i < nums1.length; i++){
    for(let j = 0; j < nums2.length; j++){
      if(nums1[i] === nums2[j]) {
        result.push(nums1[i]) 
        mapResult.add(result)
      }
    }
  }
  return mapResult;
}

compareTwoArrays(nums1, nums2);
