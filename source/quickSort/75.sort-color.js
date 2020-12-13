// solution: https://leetcode-cn.com/problems/sort-colors/solution/kuai-su-pai-xu-partition-guo-cheng-she-ji-xun-huan/
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// [l+1, lt] < v, [lt+1, gt-1] = v, [gt, r] > v
const partition = (arr, l, r) => {
  let lt = -1, i = l, gt = r + 1;
  while (i < gt) {
    if (arr[i] === 0) {
      lt++;
      swap(arr, i, lt);
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      gt--;
      swap(arr, i, gt);
    }
  }
};
// 由于题目中只有0,1,2，所以根据三路快速排序中的partition之后，就直接成为了一个排序好的内容，也不需要递归
const sortColors = (nums) => {
  partition(nums, 0, nums.length - 1);
};

const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
