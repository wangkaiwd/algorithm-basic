// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []


// 暴力求解： 分别进行求和，
const nums = [-1, 0, 1, 2, -1, -4];
const threeSum1 = (nums) => {
  const result = [];
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          const arr = [nums[i], nums[j], nums[k]];
          let repeat = false;
          for (let l = 0; l < result.length; l++) {
            const str1 = [...result[l]].sort().toString();
            const str2 = [...arr].sort().toString();
            if (str1 === str2) {
              repeat = true;
            }
          }
          if (!repeat) {
            result.push(arr);
          }
        }
      }
    }
  }
  return result;
};
console.log(threeSum1(nums));
