// 将数组一分为二，分别对每一半进行处理
const mergeSort = (arr, l, r) => {
  if (l >= r) {return;}
  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
};

// 思路：
// 将俩个排序好的数组，合并为一个排序好的数组
// 由于这个过程中要改变原数组，所以要先将原数组拷贝一份
// [1,2,5,6] [3,4,8,10]
// 将[l,mid] 和 [mid+1,r]处理为一个排序好的数组，而这俩个数组每个都是已经排序好的
// 拷贝生成一个新数组，分别为俩个区间设置头指针并进行比对，将较小值赋值给原数组的对应位置
const merge = (arr, l, mid, r) => {
  const temp = arr.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  // 利用temp为arr[k]赋值
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = temp[j - l];
      j++;
    } else if (j > r) {
      arr[k] = temp[i - l];
      i++;
    } else if (temp[i - l] < temp[j - l]) {
      arr[k] = temp[i - l];
      i++;
    } else {
      arr[k] = temp[j - l];
      j++;
    }
  }
};
const arr = [1, 2, 5, 6, 3, 4, 8, 10];

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
