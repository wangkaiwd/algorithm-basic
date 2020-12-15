// 单路快速排序
// 1. 大问题分解为小问题的规律
// 2. 基于此写出递推公式
// 3. 推敲终止条件
// 4. 将递推公式和终止条件翻译成代码

// 随便找出一个值，将数组处理成左边小于等于该值，右边大于等于该值。 递归该过程即可完成排序
// [l,r)
function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition (arr, l, r) {
  // 随机取一个数，当数据内容有序时，也极小概率出现O(n^2)的时间复杂度。此时随机取数满足特殊概率的情况为1/n!，在数据量大的时候几乎不可能。当数据量小的时候，即使出现，机器也可以应付的过来
  // 对于一个有序数组，如果不取随机数，空间复杂度会达到O(n)，造成堆栈溢出
  const random = Math.round(Math.random() * (r - l)) + l;
  swap(arr, l, random);

}

function quickSort (arr) {

}
