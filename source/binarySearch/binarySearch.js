function binarySearch (arr, e, l = 0, r = arr.length - 1) {
  // 此时区间为空，查找不到元素
  if (l > r) {return -1;}
  const mid = Math.floor((l + r) / 2);
  // 注意是有序数组
  if (e === arr[mid]) {
    return mid;
  } else if (e < arr[mid]) {
    return binarySearch(arr, e, l, mid - 1);
  } else {
    return binarySearch(arr, e, mid + 1, r);
  }
}

module.exports = binarySearch;

const arr = [1, 2, 3, 4, 5, 6];
