function swap (arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

// 目标： [l+1, j] < arr[l] , [j+1,i] > arr[l] , swap(arr,l,j) return j
function partition (arr, l, r) {
  let j = l;
  for (let i = 0; i <= r; i++) {
    if (arr[i] < arr[l]) {
      // 要先j++，此时会有俩种情况，arr[j] > arr[l] 或者 i 和 j 位置重合，原地交换，相当于什么都没发生
      j++;
      swap(arr, i, j);
    }
  }
  swap(arr, l, j);
  return j;
}

function sort (arr, l, r) {
  if (l >= r) {return;}
  const p = partition(arr, l, r);
  sort(arr, l, p);
  sort(arr, p + 1, r);
}

function quickSort2Way (arr) {
  sort(arr, 0, arr.length - 1);
}

module.exports = quickSort2Way;
