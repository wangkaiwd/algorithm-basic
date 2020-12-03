// 插入排序：
//  从数组中的第一个元素开始，每次将该元素和之前的元素进行比对，将其放到合适的位置
// O(n平方)
const nums = [3, 5, 1, 6, 4, 2];

// https://excalidraw.com/#json=5457035516706816,7kh_XxJN22iiEs5SZm84aQ
function insertSort1 (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1);
      } else {
        break;
      }
    }
  }
}

function swap (arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

insertSort1(nums);
console.log('nums', nums);


