// 大于 target的最小值
// 如：大于5的最小值
const arr = [1, 2, 4, 4, 6, 7, 10];
// 不用二分查找法，首先将数组进行排序，排序之后从其中找出第一个大于target的元素
const upper = (arr, target) => {
  // r 要超出数组范围一位，这样当没有在数组中找到时会定位到一个空的位置
  let l = 0, r = arr.length;
  // data[l, r]中寻找解
  // 找不到的话会到r的位置，为数组的长度，置为undefined
  while (l !== r) {
    const mid = Math.floor((l + r) / 2);
    // 注意这里是>=, 当中间值等于target时，还要在>target的那一部分进行查找
    if (target >= arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return arr[l];
};
console.log(upper(arr, 2));
