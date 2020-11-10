// https://leetcode.com/problems/container-with-most-water/

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//
// Example 3:
//
// Input: height = [4,3,2,1,4]
// Output: 16
// const heights = [4, 3, 2, 1, 4];
// 获取最大面积
// 暴力解法思路： 记录初始最大面积：0，每个值和之后的值别相乘，直到遍历完所有的内容，得到最大面积
const maxArea = (heights) => {
  let max = 0;
  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const area = Math.min(heights[i], heights[j]) * (j - i);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
};
//
// console.log(maxArea(heights));

// 时间复杂度：O(n2)
// 空间复杂度: O(1)

// 设置左右俩个指针，较小的指针向中间移动
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const maxArea1 = (heights) => {
  let max = 0, l = 0, r = heights.length - 1;
  while (l !== r) {
    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
    max = Math.max(max, Math.min(heights[l], heights[r]) * (r - l));
  }
  return max;
};
console.log(maxArea1(heights));
