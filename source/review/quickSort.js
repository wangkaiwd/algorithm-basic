// 单路快速排序
// 1. 大问题分解为小问题的规律
// 2. 基于此写出递推公式
// 3. 推敲终止条件
// 4. 将递推公式和终止条件翻译成代码

// 随便找出一个值，将数组处理成左边小于等于该值，右边大于等于该值。 递归该过程即可完成排序
// [l,r)
const { genRandomArray, isSorted } = require('../shared/sortHelper');

function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 单路快速排序：问题：数组中出现重复元素时，时间复杂度达到O(n^2)。要递归执行n次，要处理的次数每次为n-1, n + n-1 + ... 1 = (n+1)/2 * n = 1/2*n^2 + 1/2*n = n^2
//  遍历索引i
//  [l+1,j] < v [j+1,i] >= v
function partition (arr, l, r) {
  // 随机取一个数，当数据内容有序时，也极小概率出现O(n^2)的时间复杂度。此时随机取数满足特殊概率的情况为1/n!，在数据量大的时候几乎不可能。当数据量小的时候，即使出现，机器也可以应付的过来
  // 对于一个有序数组，如果不取随机数，空间复杂度会达到O(n)，数据量稍大就会造成堆栈溢出
  const random = Math.round(Math.random() * (r - l)) + l;
  swap(arr, l, random);
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      j++;
      swap(arr, i, j);
    }
  }
  // 基准点和j位置的元素交换位置
  swap(arr, l, j);
  return j;
}

function sort (arr, l, r) {
  // 当基准点等于r时，基准点加1会大于r。而当l=r时，说明只有一个元素，并不需要对一个元素还进行排序
  if (l >= r) {return;}
  const pivot = partition(arr, l, r);
  sort(arr, l, pivot - 1);
  sort(arr, pivot + 1, r);
}

function quickSort (arr) {
  sort(arr, 0, arr.length - 1);
}

const arr = genRandomArray(1000);
quickSort(arr);
console.log(isSorted(arr));
