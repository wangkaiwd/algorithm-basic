const getRandom = (l, r) => {
  return Math.round(Math.random() * (r - l)) + l;
};
const swap = (arr, i, j) => {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};
const partition = (arr, l, r) => {
  const random = getRandom(l, r);
  let i = l + 1, j = r + 1;
  swap(arr, l, random);
  while (true) {
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    while (i <= j && arr[j] > arr[l]) {
      j--;
    }
    // 当i和j等了，说明arr[l] === arr[i] === arr[j]
    if (i >= j) {break;}
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
};
const findKthLargest = (nums, k, l = 0, r = nums.length - 1) => {
  const pivot = partition(nums, l, r);
  if (k === pivot) {
    return k;
  } else if (k < pivot) {
    return findKthLargest(nums, k, l, k);
  } else {
    return findKthLargest(nums, k, k + 1, r);
  }
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));


