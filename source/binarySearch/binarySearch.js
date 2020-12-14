function binarySearch (arr, e, l = 0, r = arr.length - 1) {

  const mid = Math.floor((l + r) / 2);
  if (e === arr[mid]) {
    return mid;
  }
  // 如果l=r不return的话，会造成死循环。
  // 原因：此时mid=l=r,会继续调用binarySearch(arr,e,l,l)，然后就会一直r=l，形成死循环
  if (l >= r) {return;}
  const result = binarySearch(arr, e, l, mid);
  if (result == null) {
    return binarySearch(arr, e, mid + 1, r);
  } else {
    return result;
  }
}

module.exports = binarySearch;

const arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr, 6));
