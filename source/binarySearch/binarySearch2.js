// 非递归实现：循环不变量： arr[l,r] 的范围中查找 target
function binarySearch (arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
const arr = [1, 2, 3, 4, 5, 6, 7];
