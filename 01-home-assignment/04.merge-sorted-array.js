// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
//   The number of elements initialized in nums1 and nums2 are m and n respectively.
//   You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// Example:
//   Input:
//     nums1 = [1,2,3,0,0,0], m = 3
//     nums2 = [2,5,6],       n = 3
//   Output: [1,2,2,3,5,6]

// nums1's length is equal to m + n, so before merge which rest element populate with zero
// resolution: https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetcode/
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const merge1 = (nums1, m, nums2, n) => {
  nums1.length = m;
  nums2.length = n;
  nums1.push(...nums2);
  return nums1.sort((a, b) => a - b);
};
console.log(merge1(nums1, 3, nums2, 3));

// 双指针：
//  1. 分别为nums1和nums2设置头指针，判断它们对应值的大小，较小元素指针后移，并重新为nums1赋值
//  2. 由于在此过程中，会更改nums1中的值，所以需要先将nums1拷贝一份出来再进行处理
const merge2 = (nums1, m, nums2, n) => {
  const nums1Copy = [...nums1];
  let p1 = 0;
  let p2 = 0;
  let i = 0; // nums1 index
  while ((p1 < m) && (p2 < n)) {
    if (nums1Copy[p1] < nums2[p2]) {
      nums1[i++] = nums1Copy[p1++];
    } else {
      nums1[i++] = nums2[p2++];
    }
  }
  // 当nums1Copy或num2遍历完成后，循环终止

  // num2 剩余
  while ((p1 >= m) && (i < (m + n))) {
    nums1[i++] = nums2[p2++];
  }

  // num1Copy 剩余
  while ((p2 >= n) && (i < (m + n))) {
    nums1[i++] = nums1Copy[p1++];
  }
  return nums1;
};
console.log(merge2(nums1, 3, nums2, 3));

// 利用双指针，从后往前遍历，这样不用保存原数组
// 分析：nums1中的内容是从小到大排序好的，在修改其内容之前，肯定会将其后移，或原位不动，这样便不会造成无法取到原来的数值
// 空间复杂度降低
// const nums1 = [1, 2, 3, 0, 0, 0];
// const nums2 = [2, 5, 6];
const merge3 = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while ((p1 >= 0) && (p2 >= 0)) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }
  // 如果循环完成后，nums2中还有内容
  if (p2 >= 0) {
    for (let i = p2; i >=0; i--) {
      nums1[p--] = nums2[i];
    }
  }
  // 如果循环完成后，nums1中还有内容，那么内容的顺序不用再进行处理
  return nums1;
};
console.log(merge3(nums1, 3, nums2, 3));
