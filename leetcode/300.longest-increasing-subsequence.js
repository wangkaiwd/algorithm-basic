// nums = [10,9,2,5,3,7,101,18]
// 4

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-she-ji-fang-fa-zhi-pai-you-xi-jia/
// todo: 1. 进一步理解二分查找；2. 尝试动态规划入门
function lengthOfLIS (nums) {
  const result = [];
  result.push(nums[0]);
  for (let i = 0; i < nums.length; i++) {
    const last = result[result.length - 1];
    const num = nums[i];
    if (num > last) {
      result.push(num);
    }
    if (num < last) {
      // 找到等于num或者大于num的最小值
      const index = upper(result, num);
      result[index] = num;
    }
  }
  return result.length;
}

function upper (arr, target) {
  let l = 0, r = arr.length - 1;
  // 为什么不会错开这个范围？每次都找中间值，最后在2个值或3个值中找的时候，就会出现l===r的情况
  while (l < r) { // 在这个范围内一定会找到，当找到时，l === r
    const mid = Math.floor((l + r) / 2);
    if (target > arr[mid]) {
      l = mid + 1;
    } else if (target === arr[mid]) {
      return mid;
    } else {
      r = mid;
    }
  }
  return l;
}

//[4,10,4,3,8,9]
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
