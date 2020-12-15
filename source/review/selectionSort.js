function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 从数组中选择出最小的放到前面
function selectionSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // 从[i,arr.length-1] 中找出最小值
    // [0, i-1] 是已经排序好的内容
    // 每轮循环都从剩余内容中找出最小值，然后和arr[i]进行交换位置，因为[0,i-1]已经都排好序了
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}

const arr = [3, 4, 6, 8, 1, 2];
selectionSort(arr);
console.log(arr);
