// 每次从当前元素到最后的元素中找出最小值，将其与当其元素进行交换。
const { genRandomArray, isSorted } = require('../shared/sortHelper');
const { swap } = require('../shared/utils');

// https://excalidraw.com/#json=5954050440822784,O9sr28emXRUXLYUP4ltqfg
function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    // 从剩余元素中找到最小值的索引
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 与当前遍历的元素交换位置
    swap(arr, i, minIndex);
  }
}

const arr = genRandomArray(100);
selectionSort(arr);
console.log(isSorted(arr));

