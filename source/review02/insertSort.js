const { genRandomArray, isSorted } = require('../shared/sortHelper');
const { swap } = require('../shared/utils');
const insertSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
};

const arr = genRandomArray(8);
console.log(JSON.stringify(arr));
insertSort(arr);
console.log(isSorted(arr));

const insertSort2 = (arr) => {
  // [0, i-1] : 为已经排序好的元素，需要将索引为i的元素放入到之前元素中合适的位置
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        // 将元素进行后移
        arr[j] = arr[j + 1];
      } else {
        break;
      }
    }
  }
};
