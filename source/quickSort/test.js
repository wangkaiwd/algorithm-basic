const { genRandomArray, sortTest, genOrderedArray } = require('./sortHelper');

function test () {
  const n = 9000;
  let arr = genRandomArray(n);
  let arr2 = [...arr];
  sortTest('mergeSort', arr);
  sortTest('quickSort', arr2);

  // arr = genOrderedArray(n);
  // arr2 = [...arr];
  // sortTest('mergeSort', arr);
  // 递归次数过多，生成的函数比较多，超出了给定的范围
  // sortTest('quickSort', arr2);
}

test();
