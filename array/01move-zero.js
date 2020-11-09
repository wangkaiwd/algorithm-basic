// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Example:
//
//   Input: [0,1,0,3,12]
//   Output: [1,3,12,0,0]
//
// Note:
//
//   You must do this in-place without making a copy of the array.
//   Minimize the total number of operations.

// 暴力解法： 将所有元素往前移动一位，将0放到数组的最后一位。 问题： 会导致数组的遍历出现问题,并且移动之后的0还会继续参与遍历
const nums = [0, 1, 0, 3, 12];
const moveZeroes = (nums) => {
  let pos = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[pos];
      nums[pos++] = nums[i];
      nums[i] = temp;
    }
  }
};
moveZeroes(nums);
console.log('nums', nums);

// 思路1：
//  1. 记录非0

