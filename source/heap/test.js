const MaxHeap = require('./maxHeap');
const { genRandomArray, isSorted } = require('../shared/sortHelper');

function createHeap (n) {
  const maxHeap = new MaxHeap();
  const arr = genRandomArray(n);
  for (let i = 0; i < n; i++) {
    maxHeap.add(arr[i]);
  }
  return maxHeap;
}

function testAddAndExtractMax () {
  const result = [];
  const maxHeap = createHeap(200);
  for (let i = 0; i < 200; i++) {
    maxHeap.extractMax();
  }
  console.log(isSorted(result));
}

function testReplace () {
  const maxHeap = createHeap(100);
  console.log('maxHeap1', JSON.stringify(maxHeap));
  maxHeap.replace(4);
  console.log('maxHeap', maxHeap);
}

// testAddAndExtractMax();
// testReplace();
