const { isSorted } = require('../../shared/sortHelper');
const { genRandomArray } = require('../../shared/sortHelper');

function shellSort (arr) {
  let step = Math.floor(arr.length / 2);
  while (step >= 1) {
    for (let start = 0; start < step; start++) {
      for (let i = start + step; i < arr.length; i += step) {
        const t = arr[i];
        let j;
        for (j = i; j - step >= 0 && t < arr[j - step]; j -= step) {
          arr[j] = arr[j - step];
        }
        arr[j] = t;
      }
    }
    step = Math.floor(step / 2);
  }
}

const arr = genRandomArray(10);
shellSort(arr);
console.log(isSorted(arr));
