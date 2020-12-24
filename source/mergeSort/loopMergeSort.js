const { swap } = require('../shared/utils');

function merge (arr, l, mid, r) { // 将俩个有序数组合并为一个有序数组
  const tempArray = arr.slice(l, r + 1);
  let i = l, j = mid + 1;
  // [l,r] 范围内的元素进行处理
  for (let k = l; k <= r; k++) {

  }
}

function mergeSort (arr, l = 0, r = arr.length - 1) {
  const len = arr.length;
  // 遍历合并的区间长度
  for (let size = 1; size < len - 1; size += size) {
    for (let i = 0; i < len - size; i += size + size) {
      merge(arr, i, i + size - 1, Math.min(i + size + size - 1, len - 1));
    }
  }
};
