function selectK (arr, k, l = 0, r = arr.length - 1) {
  // 在 data[l, r]寻找第k小的值，索引为k-1
  const target = k - 1;
  while (l <= r) {
    const pivot = partition(arr, l, r);
    if (target === pivot) { // 正好等于标定点
      return arr[target];
    } else if (target > pivot) { // [pivot+1, r]
      l = pivot + 1;
    } else { // [l, pivot -1] 中寻找
      r = pivot - 1;
    }
  }
}

function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition (arr, l, r) {
  const random = Math.round(Math.random() * (r - l)) + l;
  swap(arr, l, random);
  // 将内容分为比pivot小，pivot，比pivot大的部分，最终会返回pivot的索引
  let i = l + 1, j = r;
  while (true) {
    // 这里为什么包含i=j ? 逻辑该如何思考？
    // i < j , 此时有俩种情况，可能它们之间没有元素，还有可能他们之间还有一个元素
    // i < j && arr[i] < arr[l]
    while (i < j && arr[i] < arr[l]) { // [l+1, i] <= v, [j+1, r] >= v
      i++;
    }
    while (i < j && arr[j] > arr[l]) {
      j--;
    }
    // 大于等于的话直接break;
    if (i >= j) {break;}
    // 当arr[i] >= arr[l] 并且 arr[j] <= arr[l]的时候，将i,l对应的值进行交换，那么对应的大于等于以及小于等于的值都到了对应的位置
    // 俩个值在交换之后，会分别进行i++和j--，此时会导致i,j会直接超出对应的范围
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
}

console.log(selectK([3, 2, 1, 5, 6, 4], 7));
// [5,2,1,3,6,7]
