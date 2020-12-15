// [3,4,6,8,1,2]
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
// 插入排序：将当前元素插入到它之前元素中合适的位置
const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      //  比arr[i]大的要和arr[i]交换位置，然后继续与前面的内容进行比较
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j);
      } else {
        break;
      }
    }
  }
};
// 数组的插入和删除操作
const insertSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    for (let j = i; j > 0; j--) {
      if (temp < arr[j - 1]) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
    }
    // 不满足条件有2种情况：
    //  1. arr[j-1] > temp
    //  2. j = 1, 此时在执行完循环后还会进行j--，就会j会变成0。由于在后移过程中将前一个的值都赋值给了后一个，所以这个时候，arr[1] = arr[0]。此时说明temp在前i项中最小，赋值给arr[0]
    arr[j] = temp;
  }
};

const arr = [3, 4, 6, 8, 1, 2];
// insertSort(arr);
insertSort2(arr);
console.log(arr);
