const { isSorted } = require('../shared/sortHelper');
const { genRandomArray } = require('../shared/sortHelper');

function shellSort (arr) {
  // 定义初始步长
  let step = Math.floor(arr.length / 2);
  // 步长减小到1的过程中，分别对每组数据进行插入排序
  while (step >= 1) {
    // 每组元素中的开始元素
    for (let start = 0; start < step; start++) {
      // 对间隔为step的每组元素进行插入排序
      for (let i = start + step; i < arr.length; i += step) {
        const t = arr[i]; // 缓存当前值
        let j;
        // 与之前的所有元素进行比较，插入到合适位置
        for (j = i; j > 0; j -= step) {
          if (arr[j - step] > t) {
            arr[j] = arr[j - step];
          } else {
            break;
          }
        }
        arr[j] = t;
      }
    }
    // 减少步长，继续进行插入排序
    step = Math.floor(step / 2);
  }
}

const arr = genRandomArray(100);
shellSort(arr);
console.log(isSorted(arr));
