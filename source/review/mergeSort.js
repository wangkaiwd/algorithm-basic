function sort (arr, l, r) {
  if (l >= r) {return;}
  const mid = Math.floor((l + r) / 2);
  sort(arr, l, mid);
  sort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

// 由于[l,mid] [mid+1,r] 都是排序好的内容，所以直接以l,mid+1为起点进行比较
function merge (arr, l, mid, r) {
  // 拷贝一个新数组，方便赋值
  const tempArray = arr.slice(l, r + 1);
  // 这里 i = l, j = mid + 1, 但是由于tempArray中的内容都相当于向左偏移了l,所以需要-l
  let i = 0, j = mid + 1 - l;
  // 遍历整个范围,这里的范围为[l,k]
  for (let k = l; k <= r; k++) {
    if (i + l > mid) { // i超出了左区域的范围
      arr[k] = tempArray[j];
      j++;
    } else if (j + l > r) {
      arr[k] = tempArray[i];
      i++;
    } else if (tempArray[i] > tempArray[j]) {
      arr[k] = tempArray[j];
      j++;
    } else {
      arr[k] = tempArray[i];
      i++;
    }
  }
}

// 递归一定要想到终止条件
// 递推公式： 对n 进行排序，首先需要将前一半排好序，然后将后一半排好序，然后将整个数组进行排序
function mergeSort (arr) {
  sort(arr, 0, arr.length - 1);
}

// 递归：将递归抽象成一个递推公式，不用想一层层的调用关系
// 1. 找到如何将大问题分解为小问题的规律，
// 2. 基于此写出递推公式
// 3. 推敲终止条件
// 4. 将递推公式和终止条件翻译成代码

const arr = [3, 4, 6, 8, 1, 2];
mergeSort(arr);
console.log(arr);
