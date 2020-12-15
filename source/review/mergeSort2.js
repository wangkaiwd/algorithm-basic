function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function merge (arr, l, mid, r) {
  // [l,r)
  const tempArray = arr.slice(l, r);
  let i = l, j = mid + 1;
  for (let k = l; k < r; k++) {
    if (i > mid) {
      arr[k] = tempArray[j - l];
      j++;
    } else if (j >= r) {
      arr[k] = tempArray[i - l];
      i++;
    } else if (tempArray[i - l] > tempArray[j - l]) {
      arr[k] = tempArray[j - l];
      j++;
    } else {
      arr[k] = tempArray[i - l];
      i++;
    }
  }
}

function sort (arr, l, r) {
  // [l,r) 都排序号,剩余一个元素就不用排序了
  if (l >= r - 1) {return;}
  const mid = Math.floor((l + r) / 2);
  sort(arr, l, mid);
  sort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

// [l,r) : 进行排序
function mergeSort (arr) {
  sort(arr, 0, arr.length);
}

const arr = [3, 4, 6, 8, 1, 2];
mergeSort(arr);
console.log(arr);
