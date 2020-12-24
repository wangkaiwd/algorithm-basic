const { isSorted } = require('../shared/sortHelper');
const { genRandomArray } = require('../shared/sortHelper');
const { getRandom, swap } = require('../shared/utils');

// https://excalidraw.com/#json=6044751392407552,Eocgr_i0sElt90I16--ydQ
function partition (arr, l, r) {
  const random = getRandom(l, r);
  swap(arr, l, random);
  let i = l + 1, j = r;
  while (true) {
    // [l+1, i-1] <= v;  [j+1, r] >= v
    // 这里 i=j 的时候，也要进行 判断当前元素与arr[l]的关系, 来看下是否要执行i++操作
    // 否则会漏掉这个元素
    //  >= arr[l]时暂停
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    // <= arr[l] 时暂停
    while (i <= j && arr[j] > arr[l]) {
      j--;
    }
    // i = j 的时候，说明 arr[i] >= arr[l] , arr[j] <= arr[l]， 即arr[i] = arr[j] = arr[l]，此时也可以结束循环
    if (i >= j) {break;}
    // 将i,和j位置的元素进行交换，将符合要求的元素放到对应的位置
    swap(arr, i, j);
    i++;
    j--;
  }
  // [l+1, i-1] <= v , [j+1, r] >= v，循环结束后, arr[j] <= arr[l] , arr[i] >= arr[l]
  // 此时将 l, j 位置的元素进行交换，就可以将标定放到正确的位置
  swap(arr, l, j);
  return j;
}

function quickSort (arr, l = 0, r = arr.length - 1) {
  if (l >= r) {return;}
  const p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
}

const arr = genRandomArray(100);
quickSort(arr);
console.log(isSorted(arr));
