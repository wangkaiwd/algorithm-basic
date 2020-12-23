const MaxHeap = require('./maxHeap');
const { genRandomArray } = require('../shared/sortHelper');
const heapSort = (arr) => {
  // 当为MaxHeap传入一个数组时，会进行heapify的操作
  const maxHeap = new MaxHeap(arr);
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const max = maxHeap.extractMax();
    result.unshift(max);
  }
  return result;
};
console.log(heapSort(genRandomArray(100)));
