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

// 暴力求解： 分别进行求和
// 时间复杂度过高
// const nums = [-1, 0, 1, 2, -1, -4];
// const threeSum1 = (nums) => {
//   const result = [];
//   const length = nums.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       for (let k = j + 1; k < length; k++) {
//         const sum = nums[i] + nums[j] + nums[k];
//         if (sum === 0) {
//           const arr = [nums[i], nums[j], nums[k]];
//           let repeat = false;
//           for (let l = 0; l < result.length; l++) {
//             const str1 = [...result[l]].sort().toString();
//             const str2 = [...arr].sort().toString();
//             if (str1 === str2) {
//               repeat = true;
//             }
//           }
//           if (!repeat) {
//             result.push(arr);
//           }
//           break;
//         }
//       }
//     }
//   }
//   return result;
// };
// console.log(threeSum1(nums));

// 优化： 1. 排序之后再进行三重for循环  2. 循环时相邻元素不能相同，否则也会导致重复
const nums = [-1, 0, 1, 2, -1, -4];
const threeSum2 = (nums) => {
  // 1. 先进行排序: 1. 从小到大排列 2. 相同元素相邻
  // 2. 遍历数组
  //    1. nums[i] > 0 ，后面的数字中不可能有三个数相加大于0
  //    2. 重复元素跳过，避免出现重复解 ？
  //    3. 左指针 l = i + 1, 有指针 r = n - 1, 当 l < r 时(如果l > r将会重复之前的逻辑)，执行循环
  //       1. 当nums[i] + nums[l] + nums[r] === 0,执行循环，判断左界和又界是否和下一位重复，去除重复解。同时将l,r移动下一位置(此时i不变，要想让和为0，r、l要同时变化)，寻找新的解
  //       2. 如果和>0，说明nums[r]太大，r 左移(为什么不是l左移？)
  //       3. 如果和<0, 说明nums[i]太小，l 右移
  if (!nums || (nums.length < 3)) { return [];}
  // 数组的sort在排序负数时是从大到小进行的
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {return result;}
    if (i > 0 && (nums[i] === nums[i - 1])) {continue;}
    let l = i + 1, r = length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {l++;}
        while (l < r && nums[r] === nums[r - 1]) {r--;}
        l++;
        r--;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return result;
};
console.log(threeSum2([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
