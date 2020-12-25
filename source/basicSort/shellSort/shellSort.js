const { isSorted } = require('../../shared/sortHelper');
const { genRandomArray } = require('../../shared/sortHelper');

// https://excalidraw.com/#json=5852495435792384,VMwVpggawz6UTTIzawyTOw
function shellSort (arr) {
  let step = Math.floor(arr.length / 2);
  // 每次将step/2 , 然后将step间隔的元素进行分组，并分别对每组进行插入排序。知道step = 1
  while (step >= 1) {
    // 每组数据的第一个元素
    for (let start = 0; start < step; start++) {
      // 从每组的第二个元素开始，遍历间隔中的每一个元素
      for (let i = start + step; i < arr.length; i += step) {
        // 先将要比较的arr[i]进行暂存
        const t = arr[i];
        let j;
        // 对每组的数据进行插入排序
        for (j = i; j - step >= 0; j -= step) {
          if (t < arr[j - step]) {
            arr[j] = arr[j - step];
          } else { // t >= arr[j-step] 说名 已经将 j 移动到了合适的位置
            break;
          }
        }
        // 将arr[j] 赋值为t
        arr[j] = t;
      }
    }
    // 将步长缩小
    step = Math.floor(step / 2);
  }
}

const arr = genRandomArray(10);
shellSort([54, 26, 93, 17, 77, 31, 44, 55, 20]);
console.log(isSorted(arr));
