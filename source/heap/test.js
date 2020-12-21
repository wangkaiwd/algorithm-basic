const MaxHeap = require('./maxHeap');
const { genRandomArray, isSorted } = require('../shared/sortHelper');

function test () {
  const maxHeap = new MaxHeap();
  const n = 200;
  const arr = genRandomArray(n);
  for (let i = 0; i < n; i++) {
    maxHeap.add(arr[i]);
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    maxHeap.extractMax();
  }
  console.log(isSorted(result));
}

test();
