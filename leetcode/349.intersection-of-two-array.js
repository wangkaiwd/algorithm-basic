const nums1 = [1, 2, 2, 1], nums2 = [2, 2];

function intersection (nums1, nums2) {
  const array = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (!array.includes(nums1[i])) {
          array.push(nums1[i]);
        }
      }
    }
  }
  return array;
}

console.log(intersection(nums1, nums2));

// 用空间换时间，将时间复杂度下降为了O(n),空间复杂度O(n)
function intersection2 (nums1, nums2) {
  const map = {}, array = [];
  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    if (!map[num1]) {
      map[num1] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    const num2 = nums2[i];
    if (map[num2] && map[num2] === 1) {
      array.push(num2);
      map[num2]++;
    }
  }
  return array;
}

console.log(intersection2(nums1, nums2));

// 1. 先使用一个数组生成set,然后再遍历另一个数组，将2个数组中都有的内容生成另一个set
// 2. 最后遍历第二个set中的每一个元素，并将其放入数组内
// 3. 将数组返回
function intersection3 (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set();
  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      set2.add(nums2[i]);
    }
  }
  set2.forEach((val) => {result.push(val);});
  return result;
}

console.log(intersection3(nums1, nums2));
