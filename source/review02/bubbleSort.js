const { swap } = require('../shared/utils');
const { genRandomArray, isSorted } = require('../shared/sortHelper');
// 每轮排序中，将相邻元素进行对比，将较大元素后移
// 每轮都能确定一个当前最大元素的位置
// https://excalidraw.com/#json=5653127852195840,0MB0VVqZx6dPSrbcDoKfgA
function bubbleSort (arr) {
  // 当只有一个元素时，不再需要进行排序
  for (let i = 0; i < arr.length - 1;) {
    // 最后一次进行元素交换时的索引，它之后的元素已经都排序好了，可以直接跳过它们
    let lastSwappedIndex = 0;
    // i 为已经排序好元素的个数
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        lastSwappedIndex = j;
      }
    }
    // 跳过的轮数，当处理一个完全有序数组时，lastSwappedIndex = 0，此时 i = arr.length - 1，循环结束
    i = arr.length - lastSwappedIndex - 1;
  }
}

const arr = genRandomArray(200);
bubbleSort(arr);
console.log(isSorted(arr));
