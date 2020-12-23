// 将arr中[l,pivot]和[pivot+1,r] 范围内排序好的元素处理成[l,r]排序好的元素
const { isSorted } = require('../shared/sortHelper');
const { genRandomArray } = require('../shared/sortHelper');
const { swap } = require('../shared/utils');
// https://excalidraw.com/#json=5911025505271808,8I2BUJvfrAnrrjp146pQ-g
function merge (arr, l, mid, r) {
  // 用一个新数组来存储原数组中的内容，防止原数组发生改变后通过索引找不到对应的值
  // 然后遍历新数组，将俩部分的最小值一次放入原数组中
  const tempArray = arr.slice(l, r + 1);
  // [l,r]
  let i = l, j = mid + 1;
  for (let k = l; k <= r; k++) {
    // 左边的区域已经处理完毕，直接将右侧区域剩余元素放到原数组中的后续位置
    if (i > mid) {
      arr[k] = tempArray[j - l];
      j++;
    } else if (j > r) { // 右边区域已经处理完毕，直接将左侧区域剩余元素放到元素组中的后续位置
      arr[k] = tempArray[i - l];
      i++;
    } else if (tempArray[i - l] < tempArray[j - l]) { // 将[i,mid] 和 [j,r]中从i,j开始的较小元素放入原数组中
      arr[k] = tempArray[i - l];
      i++;
    } else {
      arr[k] = tempArray[j - l];
      j++;
    }
  }
}

// 找到当前遍历范围的中间值，分别对中间值左边和右边的数组元素分别进行排序，
// 然后将排序好的俩部分通过merge函数合并为一个整体排序好的内容
function mergeSort (arr, l = 0, r = arr.length - 1) {
  // [l,r]范围内只剩一个元素或者没有元素时，结束排序
  if (l >= r) {return;}
  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

const arr = genRandomArray(1000);
mergeSort(arr);
console.log(isSorted(arr));
