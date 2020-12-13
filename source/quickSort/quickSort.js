// 如何写递归：
//  想出递归的宏观语义，将递归调用仅仅当成另一个函数调用
// 宏观语义

const arr = [4, 3, 7, 1, 8, 0, 5];

function quickSort (arr) {
  sort(arr, 0, arr.length - 1);
}

// 执行逻辑图： https://excalidraw.com/#json=5677728049135616,c9oDsORbtCr-cg0VRztOAA
function sortLog (arr, l, r, depth = 0) {
  // 如果数组只有一个元素，不用进行排序
  if (l >= r) return;
  console.log('----'.repeat(depth + 1), 'before partition: ' + JSON.stringify(arr));
  const p = partition(arr, l, r);
  console.log('----'.repeat(depth + 1), 'after partition: ' + JSON.stringify(arr));
  console.log('----'.repeat(depth + 1), 'after partition p: ' + p);
  console.log('----'.repeat(depth + 1), 'left range: ', `${l} -> ${p}`);
  sortLog(arr, l, p, depth + 1);
  console.log('----'.repeat(depth + 1), 'after left sort: ' + arr);
  console.log('----'.repeat(depth + 1), 'right range: ', `${p + 1} -> ${r}`);
  sortLog(arr, p + 1, r, depth + 1);
  console.log('----'.repeat(depth + 1), 'after right sort: ' + arr);
}

function sort (arr, l, r) {
  // 如果数组只有一个元素，不用进行排序
  // l 为什么要 > r，因为当p返回数组的最后一项时，l = p+1 > r
  if (l >= r) return;
  const p = partition(arr, l, r);
  sort(arr, l, p);
  sort(arr, p + 1, r);
}

function partition (arr, l, r) {
  const random = getRandomRange(l, r);
  // 将范围开始元素与随机元素进行交换，保证第一个元素仍然为参考元素
  swap(arr, l, random);
  let j = l;
  // 遍历数组中的每一项
  // 起始值为l+1,l的位置为参考元素
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      j++;
      // 将arr[i] 与 arr[j]进行交换
      // 此时[l+1,j] < v, [j+1,i] > v
      swap(arr, i, j);
    }
  }
  // 将参考元素与arr[j]进行交换，此时 实现了参考元素左边小于参考元素，而右边大于等于参考元素
  swap(arr, l, j);
  return j;
}

function swap (arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function getRandomRange (l, r) {
  const random = Math.random() * (r - l) + l;
  return Math.round(random);
}

module.exports = quickSort;
