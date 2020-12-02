// 选择排序法：
//    1. 每次都将数组中最小值取出来，直到原数组没有内容
//    2. 可否原地完成：双指针
//        1. 起始位置设置i指针,j指针的位置等于i指针的位置
//        2. 从j指针到数组最后一项，找出最小值，与i指针对应的值进行替换
//        3. i指针向后移一位, 继续重复之前的步骤，直到i指针到了数组的最后一项，说明完成了排序

// const arr = [5, 2, 6, 3, 1, 10];
//
// function sort1 (arr) {
//   const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(findMinVal(arr));
//   }
//   return newArr;
// }
//
// function findMinVal (arr) {
//   let minIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//       minIndex = i;
//     }
//   }
//   const minVal = arr[minIndex];
//   arr.splice(minIndex, 1);
//   return minVal;
// }
//
// console.log(sort1(arr));

// 原地排序
// function sort2 (arr) {
//   let i = 0;
//   while (i < arr.length) {
//     let minIndex = i;
//     // 找出最小索引
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     // 最小索引的元素和i对应的元素位置互换
//     const temp = arr[minIndex];
//     arr[minIndex] = arr[i];
//     arr[i] = temp;
//     i++;
//   }
//   return arr;
// }
//
// sort2(arr);
