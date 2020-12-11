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
console.log(partition1(arr), arr);

// 非原地实现：声明left,right俩个数组，然后将小于delimiter的值放到left数组中，大于delimiter的值放到right数组中，最后将三部分拼接起来

// 原地实现2：
//  l 为参考元素的索引
//  将原数组分为俩个区间：[l+1,j] < v, [j+1,i] > v
function partition2 (arr, l, r) {

}
