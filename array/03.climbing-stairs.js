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

// 解法一：
// 寻找最小重复逻辑
// 斐波那契数列
// 时间复杂度： O(2次方)
// const climbStairs = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 2;
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
//
// console.log('climbStairs', climbStairs(10));

// 解法2：
// 上边的求解方法会有很多重复计算，我们可以通过数组，来将计算过得值进行缓存，如果再次遇到该值，从缓存中查找
const climbStairs1 = (n, memos = []) => { // 从1到n所有的台阶的总数
  if (n === 1) {return 1;}
  if (n === 2) {return 2;}
  if (memos[n]) { // 通过数组缓存计算过的结果
    return memos[n];
  }
  memos[n] = climbStairs1(n - 1, memos) + climbStairs1(n - 2, memos);
  return memos[n];
};
console.log(climbStairs1(10));
// // 1 2 3 4 5 6 7
// const climbStairs2 = (n) => {
//   if (n === 1) {return 1;}
//   if (n === 2) {return 2;}
//   const dp = [];
//   dp[0] = 1;
//   dp[1] = 2;
//   for (let i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n - 1];
// };
// console.log(climbStairs2(10));
