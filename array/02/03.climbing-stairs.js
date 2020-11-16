// You are climbing a stair case. It takes n steps to reach to the top.
//
//   Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
//   Example 1:
//
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// 斐波那契数列：
// // 思路：n，只需要知道n-1和n-2。由于会重复计算，需要将计算过得值进行缓存
// const climbStairs1 = (n, memos = []) => {
//   if (n === 1) {return 1;}
//   if (n === 2) { return 2;}
//   if (memos[n]) {
//     return memos[n];
//   }
//   memos[n] = climbStairs1(n - 1, memos) + climbStairs1(n - 2, memos);
//   return memos[n];
// };
// console.log(climbStairs1(10));

// 斐波那契数列是有规律的: 1, 2, 3, 5, 8, 13 ....
// const climbStairs2 = (n) => {
//   if (n === 1) {return 1;}
//   if (n === 2) { return 2;}
//   const memos = [];
//   memos[1] = 1;
//   memos[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     memos[i] = memos[i - 1] + memos[i - 2];
//   }
//   return memos[n];
// };
// console.log(climbStairs2(10));
