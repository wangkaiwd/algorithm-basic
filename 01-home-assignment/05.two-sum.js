// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum1 = (nums, target) => {
  let result = undefined;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
      }
    }
  }
  return result;
};

const nums = [2, 7, 11, 15];
console.log(twoSum1(nums, 9));

// 使用一个映射表来存储遍历过的元素，key为元素，val为其索引
// 遍历时判断 target-nums[i] 是否在数组之前的元素中存在，如果存在，直接返回
// 使用空间来换时间
const twoSum2 = (nums, target) => {
  let result = undefined;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (String(complement) in map) {
      result = [map[complement], i];
      break;
    }
    map[nums[i]] = i;
  }

  return result;
};

console.log(twoSum2(nums, 9));

