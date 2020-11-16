// https://leetcode.com/problems/container-with-most-water/

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//
// Example 2:
// Input: height = [1,1]
// Output: 1

// Example 3:
// Input: height = [4,3,2,1,4]
// Output: 16

// Example 4:
// Input: height = [1,2,1]
// Output: 2

// const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const maxArea1 = (heights) => {
//   let max = 0;
//   for (let i = 0; i <= heights.length - 2; i++) {
//     for (let j = i + 1; j <= heights.length - 1; j++) {
//       const area = (j - i) * Math.min(heights[i], heights[j]);
//       max = Math.max(area, max);
//     }
//   }
//   return max;
// };
//
// console.log(maxArea1(heights));

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// 最短的线和最右边的值 >= 该线和右侧其它值
const maxArea2 = (heights) => {
  let max = 0;
  let l = 0;
  let r = heights.length - 1;
  while (l < r) {
    const area = Math.min(heights[r], heights[l]) * (r - l);
    max = Math.max(area, max);
    if (heights[l] > heights[r]) {
      r--;
    } else if (heights[l] <= heights[r]) {
      l++;
    }
  }
  return max;
};
console.log('height', maxArea2(heights));
