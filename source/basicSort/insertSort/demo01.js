// 插入排序：
//  从数组中的第一个元素开始，每次将该元素和之前的元素进行比对，将其放到合适的位置
// O(n平方)
const nums = [3, 5, 1, 6, 4, 2];

// https://excalidraw.com/#json=5457035516706816,7kh_XxJN22iiEs5SZm84aQ
// function insertSort1 (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (nums[j] < nums[j - 1]) {
//         swap(nums, j, j - 1);
//       } else {
//         break;
//       }
//     }
//   }
// }
//
// function swap (arr, i, j) {
//   const t = arr[i];
//   arr[i] = arr[j];
//   arr[j] = t;
// }
//
// insertSort1(nums);
// console.log('nums', nums);

// 小优化：当前元素其实并不需要与之前的元素进行交换，而是可以将元素暂存，然后将在该元素之前并且比该元素大的元素后移
function insertSort2 (nums) {
  for (let i = 0; i < nums.length; i++) {
    // 暂存当前元素，防止赋值被覆盖
    const t = nums[i];
    let j = undefined;
    for (j = i; j > 0; j--) {
      if (t < nums[j - 1]) {
        // 把比较大的元素后移，此时我们已经将当前元素t进行暂存，不用担心覆盖
        nums[j] = nums[j - 1];
      } else {
        break;
      }
    }
    // 当当前元素 t > nums[j-1]时，将当前元素赋值给nums[j], 此时nums[j]的值已经在遍历nums[j+1]时被平移到后边，不用担心覆盖
    // 当所有元素遍历完毕后，此时j=0,并且没有找到比t还小的元素，此时将第一个元素设置为t
    nums[j] = t;
  }
}

insertSort2(nums);
console.log(nums);
