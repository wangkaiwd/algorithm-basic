function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getRandom (l, r) {
  return Math.round(Math.random() * (r - l)) + l;
}

module.exports = {
  swap,
  getRandom
};
