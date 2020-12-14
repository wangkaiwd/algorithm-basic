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

// 修改循环不变量: data [l,r) 的范围中查找target
function binarySearch2 (arr, target, l = 0, r = arr.length) {
  // l = r 循环就应该结束了
  while (l < r) {
    const mid = Math.floor((l + r - 1) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) { // [mid+1,r)
      l = mid + 1;
    } else {  // [l, mid)
      r = mid;
    }
  }
  return -1;
}

console.log(binarySearch2(arr, 1));
