const quickSort = require('../quickSort/quickSort');
const mergeSort = require('../mergeSort/mergeSort');

function isSorted (arr) {
  // 可以使用reduce进行优化
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}

function sortTest (sortName, arr) {
  const startTime = new Date().getTime();
  if (sortName === 'quickSort') {
    quickSort(arr);
  } else if (sortName === 'mergeSort') {
    mergeSort(arr);
  }
  const endTime = new Date().getTime();
  const interval = (endTime - startTime) / 1000;
  console.log(`${sortName} , n = ${arr.length} : ${interval}s`);
}

function genRandomArray (n, range = n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * range);
  }
  return arr;
}

function genOrderedArray (n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  return arr;
}

function genSameArray (n, val) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = val;
  }
  return arr;
}

module.exports = {
  isSorted,
  sortTest,
  genOrderedArray,
  genRandomArray,
  genSameArray
};
