/**
 * 交换数组中的2个元素
 * @param arr
 * @param i
 * @param j
 */
function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 随机生成l到r之间的一个值
 * @param l
 * @param r
 * @return {*}
 */
function getRandom (l, r) {
  return Math.round(Math.random() * (r - l)) + l;
}

module.exports = {
  swap,
  getRandom
};
