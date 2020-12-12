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
// 1. 假设参考元素v为数组第一个元素
// 2. l为数组的起始索引，j起始与l相同
// 3. 遍历数组，数组索引为i
// 4. 每次操作完毕后，最终要以j为边界，[l+1,j] < v,[j+1,i] > v
// 5. 当当前遍历元素小于v时，需要将j后移，然后将当前元素与j对应的元素进行交换
// 6. 遍历完成后，将v和j位置的元素进行交换，此时j为v的索引，而j左边<v,j右边>v
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
