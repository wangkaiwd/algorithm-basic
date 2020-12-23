const { genRandomArray, isSorted } = require('../../shared/sortHelper');
const { swap } = require('../../shared/utils');
const bubbleSort = (arr) => {
  // 相邻元素进行对比，每轮循环都会确定一个最大值，并可以让元素变得更有序
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 每轮移动都能确定末尾的一个元素的位置，所以它不用再参与遍历
    for (let j = 0; j < len - i - 1; j++) {
      // 每一个元素都和它的后一个元素比较，将相邻元素中较大的后移
      // j 和 j+1 ， 最终会将最大的元素移动到最后
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// 当处理的是排序好的内容时，第一轮循环不会进行元素的交换操作
const bubbleSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) { // 没有进行过元素交换，说明是以排序好的数组
      break;
    }
  }
};

const arr = genRandomArray(100);
bubbleSort(arr);
console.log(isSorted(arr));
