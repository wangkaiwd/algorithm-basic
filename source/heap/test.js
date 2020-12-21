const MaxHeap = require('./maxHeap');
const { genRandomArray } = require('../shared/sortHelper');

function test () {
  const maxHeap = new MaxHeap();
  const arr = genRandomArray(20);
  for (let i = 0; i < 8; i++) {
    maxHeap.add(arr[i]);
  }
}

test();
