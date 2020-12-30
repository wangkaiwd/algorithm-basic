// 如果nums1和nums2都是有序的:
//  值较小的索引后移，相等时放入结果数组中
function intersect (nums1, nums2) {
  const result = [];
  let i = 0, j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result.push(nums2[i]);
      i++;
      j++;
    }
  }
  return result;
}

const nums1 = [1, 2, 3, 3, 4], nums2 = [1, 2, 3, 3, 6, 6];
console.log(intersect(nums1, nums2));

