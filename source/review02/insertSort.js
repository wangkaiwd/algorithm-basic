const { genRandomArray, isSorted } = require('../shared/sortHelper');
const { swap } = require('../shared/utils');
// https://excalidraw.com/#json=4800881283301376,MM8DKtwyD0X-QQhjzSyLgQ
const insertSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // 遍历所有之前的元素，如果小于之前的元素的话，交换位置
    // 否则会停止遍历，说明该元素已在正确的位置
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
};

// const arr = genRandomArray(8);
// console.log(JSON.stringify(arr));
// insertSort(arr);
// console.log(isSorted(arr));

const insertSort2 = (arr) => {
  // [0, i-1] : 为已经排序好的元素，需要将索引为i的元素放入到之前元素中合适的位置
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    let j = i;
    for (; j > 0; j--) {
      if (temp < arr[j - 1]) {
        // 将元素进行后移
        arr[j] = arr[j - 1];
      } else {
        // 终止循环，j--也不会执行
        break;
      }
    }
    // 如果temp > 之前的所有元素，那么循环结束后会执行j--，此时j=0
    // 最后我们将索引为0的位置赋值为temp
    arr[j] = temp;
  }
};

// 生成长度为100，元素值为1~100的随机组进行排序
const arr = genRandomArray(100);
const arr2 = genRandomArray(100);
insertSort(arr);
insertSort2(arr2);
console.log(isSorted(arr));
console.log(isSorted(arr2));
