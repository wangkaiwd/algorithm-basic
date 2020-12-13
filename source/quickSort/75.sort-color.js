const getRandomRange = (l, r) => {
  return Math.round(Math.random() * (r - l)) + l;
};
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const sort = (arr, l, r) => {
  if (l >= r) return;
  const [lt, gt] = partition(arr, l, r);
  // 等于参考元素的不做处理
  sort(arr, l, lt);
  sort(arr, gt, r);
};

// [l+1, lt] < v, [lt+1, gt-1] = v, [gt, r] > v
const partition = (arr, l, r) => {
  const random = getRandomRange(l, r);
  swap(arr, l, random);
  let lt = l, i = l + 1, gt = r + 1;
  while (i < gt) {
    if (arr[i] < arr[l]) {
      lt++;
      swap(arr, i, lt);
      i++;
    } else if (arr[i] > arr[l]) {
      gt--;
      swap(arr, i, gt);
    } else { // 和参考元素相等
      i++;
    }
  }
  swap(arr, l, lt);
  return [lt, gt];
};
const sortColors = (nums) => {
  sort(nums, 0, nums.length - 1);
};

const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
