const { isSorted, genRandomArray } = require('../shared/sortHelper');
const { getRandom, swap } = require('../shared/utils');

function sort (arr, l, r) {
  if (l >= r - 1) {return;}
  const pivot = partition(arr, l, r);
  // 注意这里的循环不变量
  sort(arr, l, pivot);
  sort(arr, pivot + 1, r);
}

// 二路快速排序，可以保证在即使数组元素相同的情况下，也可以将基准定放到中间位置
// 循环不变量: [l+1, i] <= v   [j+1,r) >= v , 如果不满足条件i和j进行位置交换
function partition (arr, l, r) {
  const random = getRandom(l, r - 1);
  swap(arr, l, random);
  let i = l + 1, j = r - 1;
  while (true) {
    // >= v 会停止
    // i = j 的时候，此时 i 可能是由于 大于 v而停下来的，此时由于要和j交换位置，j要走到比i小1的位置，才能和arr[l]进行交换
    // i 停下来有俩种原因：
    //  1. i = j, 那么此时[l+1,i] < v
    //  2. arr[i] >= arr[l] , 那么此时 [l+1,i-1] < v
    //  如果是情况2那么j会在等于i的位置停止，此时将arr[l] 和 arr[j]交换位置就会出现问题
    // 如果i > j, 那么此时j一定是等于v的
    // 当i = j时停止，有可能会漏掉一个元素
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    // <= v 会停止
    while (i <= j && arr[j] > arr[l]) {
      j--;
    }
    // i 和 j 相等时，此时 arr[i] === arr[j] === arr[l]
    if (i >= j) {break;}
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
}

// [r,l)
function quickSort2Way (arr) {
  sort(arr, 0, arr.length);
}

const arr = genRandomArray(7000);
quickSort2Way(arr);
console.log(isSorted(arr));
