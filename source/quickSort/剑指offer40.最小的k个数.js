const getLeastNumbers = (arr, k, l = 0, r = arr.length - 1) => {
  const target = k - 1;
  const pivot = partition(arr, l, r);
  if (target === pivot) {
    return generateResult(arr, target);
  } else if (target < pivot) {
    return getLeastNumbers(arr, k, l, pivot - 1);
  } else {
    return getLeastNumbers(arr, k, pivot + 1, r);
  }
};
const generateResult = (arr, r) => {
  const result = [];
  for (let i = 0; i <= r; i++) {
    result.push(arr[i]);
  }
  return result;
};

const getRandomRange = (l, r) => {
  return (Math.round(Math.random() * (r - l))) + l;
};
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
// 为什么要用二路快速排序： <= v  v  >= v
const partition = (arr, l, r) => {
  const random = getRandomRange(l, r);
  // 随机选取一个数组中的元素作为pivot，防止有序数组的情况，导致每次都只处理一个元素
  swap(arr, l, random);
  // 分成俩个范围 [l+1,i] <= v  [j+1,r] >=v
  // 如果 arr[i] >= arr[pivot] && arr[j] <= arr[pivot], 此时将arr[i] 和 arr[j]交换位置, i++,j--
  let i = l + 1, j = r;
  while (true) {
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    while (j >= i && arr[j] > arr[l]) {
      j--;
    }
    // 当 i === j 时，说明此时该值与arr[pivot]相等，不用进行处理
    if (i >= j) {break;}
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
};

console.log(getLeastNumbers([3, 2, 1], 2));
