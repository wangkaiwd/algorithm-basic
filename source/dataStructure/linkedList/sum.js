const arr = [1, 2, 3, 4, 5];
// 第一项1 + 后面所有项的和
const sum = (arr, i = 0) => {
  if (i === arr.length) {
    return 0;
  }
  return arr[i] + sum(arr, i + 1);
};
console.log(sum(arr));

