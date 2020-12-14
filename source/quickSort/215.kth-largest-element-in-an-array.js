const getRandom = (l, r) => {
  return Math.round(Math.random() * (r - l)) + l;
};
const swap = (arr, i, j) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};
// 单路快速排序：[l+1,j] < v
// 双路快速排序：为了防止特殊用例的出现，如所有的元素都相同
// [l+1,i] <= v , v , [j+1,r] >= v
// 三路快速排序： 将数组分为 < v , =v , > v 三部分，然后再对小于v和大于v的部分继续进行partition
const partition = (arr, l, r) => {
  const random = getRandom(l, r);
  let i = l + 1, j = r;
  swap(arr, l, random);
  while (true) {
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    while (i <= j && arr[j] > arr[l]) {
      j--;
    }
    // 当i和j等了，说明arr[l] === arr[i] === arr[j]
    if (i >= j) {break;}
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
};
const findKthLargest = (nums, k, l = 0, r = nums.length - 1) => {
  const target = nums.length - k;
  if (l >= r) {
    return nums[target];
  }
  const pivot = partition(nums, l, r);
  // k 是个数，需要处理为索引
  if (target === pivot) {
    return nums[target];
  } else if (target < pivot) { // 会把范围缩小到一半，而不用去管另一半
    return findKthLargest(nums, k, l, pivot - 1);
  } else {
    return findKthLargest(nums, k, pivot + 1, r);
  }
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 第二个最大值


