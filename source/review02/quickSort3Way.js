const { isSorted } = require('../shared/sortHelper');
const { genRandomArray } = require('../shared/sortHelper');
const { swap, getRandom } = require('../shared/utils');

// https://excalidraw.com/#json=5159362272165888,FY0ozebYxoAOA-6dihsmxg
function partition (arr, l, r) {
  const random = getRandom(l, r);
  swap(arr, l, random);
  // i,lt,gt  [l+1, lt] < v [lt+1, i-1] = v , [gt, r] > v
  let lt = l, i = l + 1, gt = r + 1;
  while (i < gt) {
    if (arr[i] > arr[l]) {
      gt--;
      swap(arr, i, gt); // 这里i不会增加，因为新交换来的元素并不知道它的大小
    } else if (arr[i] < arr[l]) {
      lt++;
      swap(arr, i, lt);
      // 这里i++，处理下一个元素，因为交换过来的元素是在[lt+1,i-1]之间的，一定等于 arr[l]
      i++;
    } else { // arr[i] === arr[l]时，将i后移
      i++;
    }
  }
  swap(arr, l, lt);
  return [lt, gt];
}

function quickSort (arr, l = 0, r = arr.length - 1) {
  if (l >= r) {return;}
  const [lt, gt] = partition(arr, l, r);
  // 标定点元素的顺序已经确定了，分别对小于它和大于它的元素进行排序
  quickSort(arr, l, lt);
  quickSort(arr, gt, r);
}

const arr = genRandomArray(800);
quickSort(arr);
console.log(isSorted(arr));
