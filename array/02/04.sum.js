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

// 暴力解法：
//  首先排序，从小到大进行排列，并且将相同元素放到一块儿，然后通过三重循环遍历所有元素的和
//  如果当前的数值和前一个数值相同，说明会和前一个找到相同的结果，所以需要跳过
//  如果nums[i] > 0, 那么三个数字之和永远不可能是0
// const nums = [-1, 0, 1, 2, -1, -4];
// // [-4, -1, -1, 0, 1, 2]
// const threeSum1 = (nums) => {
//   const items = [];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] > 0) {return items;}
//     if (i > 0 && (nums[i] === nums[i - 1])) {continue;}
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       if (j > (i + 1) && (nums[j] === nums[j - 1])) {continue;}
//       for (let k = j + 1; k < nums.length; k++) {
//         if (k > (j + 1) && (nums[k] === nums[k - 1])) {continue;}
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           items.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
//   return items;
// };
// console.log('indices', threeSum1(nums));

// 双指针夹逼
// const nums = [-1, 0, 1, 2, -1, -4];
const nums = [-2, 0, 1, 1, 2];
// [-4, -1, -1, 0, 1, 2]
const threeSum2 = (nums) => {
  // 负数不能直接使用sort进行排序
  const result = [];
  nums.sort((a, b) => a - b);
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    // 下一个和前一个相同，跳过该次循环，去除重复值
    if (i > 0 && (nums[i] === nums[i - 1])) {continue;}
    if (nums[i] > 0) {return result;}
    let l = i + 1, r = length - 1;
    while (l < r) {
      if (l > (i + 1) && (nums[l] === nums[l - 1])) {
        l++;
        continue;
      }
      if (r < (length - 1) && (nums[r] === nums[r + 1])) {
        r--;
        continue;
      }
      if (nums[l] + nums[r] + nums[i] === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
      } else if (nums[l] + nums[r] + nums[i] > 0) {r--;} else {l++;}
    }
  }
  return result;
};
console.log(threeSum2(nums));
