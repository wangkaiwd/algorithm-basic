const { swap, getRandom } = require('../shared/utils');

function partition (arr, l, r) {
  const random = getRandom(l, r);
  swap(arr, l, random);
  // i,lt,gt  [l+1, lt] < v [lt+1, i-1] = v , [gt+1, r] > v
  let lt = l, i = l, gt = r + 1;
  while (i <= gt) {

  }
}

function quickSort () {

}
