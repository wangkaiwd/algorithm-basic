const { genRandomArray, isSorted } = require('../shared/sortHelper');
const { getRandom, swap } = require('../shared/utils');
// 随机设置一个标定点元素，将将数组分为 小于等于标定点 标定点 大于等于标定点 的区域
// 然后在分别将 [l, pivot-1] , [pivot+1, r] 区域内的元素处理为以标定点为中间值的区域

// https://excalidraw.com/#json=5363831236722688,CgqFzPezTnK1Gi4RFr_99A
const partition = (arr, l, r) => {
  // 从[l,r]范围中生成一个随机值
  const random = getRandom(l, r);
  // 将随机索引作为标定点，并和范围内第一个元素交换位置
  swap(arr, l, random);
  // [l+1,j] < v
  // [j+1, i] >= v
  // 将之后 小于v 的元素与 大于等于v 即 j+1 对应的元素进行交换
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      j++;
      swap(arr, i, j);
    }
  }
  // 全部交换完成后，此时 arr [l+1, j] < v, [j+1, i=r] > v
  // 此时只需要降l,j对应位置的索引交换位置即可
  swap(arr, l, j);
  return j;
};
const quickSort = (arr, l = 0, r = arr.length) => {
  // 范围内没有元素或者只有一个元素时，便不用再进行排序了
  if (l >= r) {return;}
  const p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
};

const arr = genRandomArray(100);
quickSort(arr);
console.log(isSorted(arr));
