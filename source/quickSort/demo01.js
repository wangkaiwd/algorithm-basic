// O(n平方)，性能感觉不是很好
function partition (arr) {
  let index = 0;
  const delimiter = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < delimiter) {
      const temp = arr[i];
      for (let j = i - 1; j >= index; j--) {
        arr[j + 1] = arr[j];
      }
      arr[index] = temp;
      index++;
    }
  }
  return index;
}

const arr = [4, 3, 2, 5, 8, 7, 1];
console.log(partition(arr), arr);
