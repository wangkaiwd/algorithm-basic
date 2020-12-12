function isSorted (arr) {
  // 可以使用reduce进行优化
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}

function genRandomArray () {

}

function genOrderedArray () {

}

function genSameArray () {

}

module.exports = {
  isSorted
};
