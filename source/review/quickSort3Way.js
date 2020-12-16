const { isSorted } = require('../shared/sortHelper');
const { genRandomArray } = require('../shared/sortHelper');
const { swap } = require('../shared/utils');
// 三路快速排序：
// [l+1, lt] < v [lt+1, i-1] = v, [gt+1,r] > v
function partition (arr, l, r) {
  let lt = l, gt = r, i = l + 1;
  while (i <= gt) {
    if (arr[i] < arr[l]) {
      lt++;
      swap(arr, i, lt);
      i++;
    } else if (arr[i] > arr[l]) { // 这一步不用做事情
      swap(arr, i, gt);
      gt--;
    } else {
      i++;
    }
  }
  swap(arr, l, gt);
  return [lt, gt + 1];
}

function sort (arr, l, r) {
  if (l >= r) {return;}
  // 三路快速排序要继续处理<v和>v的部分，中间的部分不做处理
  const [lt, gt] = partition(arr, l, r);
  sort(arr, l, lt);
  sort(arr, gt, r);
}

function quickSort3Way (arr) {
  sort(arr, 0, arr.length - 1);
}

const arr = genRandomArray(100000);
quickSort3Way(arr);
console.log(isSorted(arr));
