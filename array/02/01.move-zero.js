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

// diagram: https://leetcode-cn.com/problems/move-zeroes/solution/dong-hua-yan-shi-283yi-dong-ling-by-wang_ni_ma/

// 解法：
//  1. 遍历时记录非零元素个数，且将非零元素移动到数组的左边
//  2. 遍历完成后，非零元素小于数组长度的内容需要用0来填满
// const nums = [0, 1, 0, 3, 12];
// const moveZeroes1 = (nums) => {
//   const length = nums.length;
//   let j = 0; // 记录遇到多少非0元素，遍历时每遇到非0元素就将其往数组左边移动
//   for (let i = 0; i < length; i++) {
//     if (nums[i] !== 0) {
//       nums[j++] = nums[i];
//     }
//   }
//   for (let i = j; i < length; i++) { // 数组剩余区域全部置为0
//     nums[i] = 0;
//   }
//   return nums;
// };
// // Time complexity: O(n)
// // Space complexity: O(1)
// console.log(moveZeroes1(nums));

// 在保持元素原有顺序不变的情况下，将所有非零元素移动到前面，所有0移动到后面
const nums = [0, 1, 0, 3, 12];
const moveZeroes2 = (nums) => {
  if (!nums) {return [];}
  const length = nums.length;
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};
console.log('moveZeros', moveZeroes2(nums));

