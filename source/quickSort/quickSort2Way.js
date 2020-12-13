const { isSorted } = require('./sortHelper');

function swap (arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function getRandomRange (l, r) {
  const random = Math.random() * (r - l) + l;
  return Math.round(random);
}

// 目标：[l+1, i-1] <= v, [j+1,r] >= v
// 双路快速排序
function partition (arr, l, r) {
  const random = getRandomRange(l, r);
  swap(arr, l, random);
  let i = l + 1, j = r;
  while (true) {
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    while (i <= j && arr[j] > arr[l]) {
      j--;
    }
    // i 超过j ，说明已经将所有元素划分完成
    // i = j 时，说明该元素 = v, 所以不处理也可以
    if (i >= j) {break;}
    swap(arr, i, j);
    i++;
    j--;
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
