// 原地排序：O(n平方)，性能感觉不是很好
function partition1 (arr) {
  let index = 0;
  const delimiter = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < delimiter) {
      const temp = arr[i];
      for (let j = i - 1; j >= index; j--) {
        arr[j + 1] = arr[j];
      }
      arr[index] = temp;
      index++;
    }
  }
  return index;
}

const arr = [4, 3, 2, 5, 8, 7, 1];
// console.log(partition1(arr), arr);

// 非原地实现：声明left,right俩个数组，然后将小于delimiter的值放到left数组中，大于delimiter的值放到right数组中，最后将三部分拼接起来

// 原地实现2：https://excalidraw.com/#json=6235080183775232,JZPpDrtOCrIoA1QtjdsQzg
//  1. 假设参考元素v为数组中的第一个元素，l 为参考元素的索引,i为当前遍历元素的索引
//  2. 将原数组以参考元素v为基准分为俩个区间：[l+1,j] < v, [j+1,i] > v
//  3. 将参考元素与j索引出的元素进行交换，实现参考元素左边的元素为小于v的元素，而参考元素右边的元素为大于v的元素
function partition2 (arr) {
  let l = 0, j = 0;
  let ref = arr[0];
  // [l+1,j] < v, [j+1,i] > v
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < ref) {
      // 先将j后移，然后将该值和比v小的值进行交换
      j++;
      swap(arr, j, i);
    }
  }
  swap(arr, l, j);
  return j;
}

// 数据元素交换
function swap (arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

console.log(partition2(arr), arr);
