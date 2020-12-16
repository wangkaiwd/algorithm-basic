const { isSorted } = require('../shared/sortHelper');

function swap (arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function getRandomRange (l, r) {
  const random = Math.random() * (r - l) + l;
  return Math.round(random);
}

// 目标：[l, lt-1] < v, [gt,r] > v [lt, i-1] = v
// 排序完成之后： [l, lt-1] < v, [lt , gt-1] = v , [gt,r] > v
function partition (arr, l, r) {
  // 随机取一个元素作为标定点
  const random = getRandomRange(l, r);
  swap(arr, l, random);
  let lt = l, i = l + 1, gt = r + 1;
  while (i < gt) {
    if (arr[i] < arr[l]) {
      lt++;
      swap(arr, i, lt);
      i++;
    } else if (arr[i] > arr[l]) {
      gt--;
      swap(arr, i, gt);
    } else {
      i++;
    }
  }
  swap(arr, l, lt);
  return [lt, gt];
}

function sort (arr, l, r) {
  if (l >= r) {return;}
  const [lt, gt] = partition(arr, l, r);
  sort(arr, l, lt);
  sort(arr, gt, r);
}

function quickSort3Way (arr) {
  sort(arr, 0, arr.length - 1);
}

const arr = [4, 3, 7, 1, 8, 0, 5];
module.exports = quickSort3Way;

