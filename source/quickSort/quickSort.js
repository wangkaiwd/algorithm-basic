// 如何写递归：
//  想出递归的宏观语义，将递归调用仅仅当成另一个函数调用
// 宏观语义

const arr = [4, 3, 2, 5, 8, 7, 1];

function quickSort (arr) {
  sort(arr, 0, arr.length - 1);
}

function sort (arr, l, r) {
  // 如果数组只有一个元素，不用进行排序
  if (l >= r) return;
  const p = partition(arr, l, r);
  sort(arr, l, p);
  sort(arr, p + 1, r);
}

function partition (arr, l, r) {
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

quickSort(arr);
console.log('arr', arr);
