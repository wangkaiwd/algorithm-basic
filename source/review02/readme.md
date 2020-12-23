## 常见排序算法总结

近期在看一些算法相关的知识，这里总结整理下常见排序算法的`JavaScript`实现，并添加图解方便理解。

下面是一些代码中会用到的公共方法，为了避免代码重复编写，笔者将其进行了单独的抽离：

```javascript
// utils.js
function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getRandom (l, r) {
  return Math.round(Math.random() * (r - l)) + l;
}
```

```javascript
// sortHelper.js
function genRandomArray (n, range = n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * range);
  }
  return arr;
}

function isSorted (arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}
```

### 选择排序

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201223152638.png)

实现一：如果当前元素小于前一个元素，将当前元素和前一个元素进行位置交换

```javascript
const insertSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // 遍历所有之前的元素，如果小于之前的元素的话，交换位置
    // 否则会停止遍历，说明该元素已在正确的位置
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
};
```

实现二：将当前元素的值进行暂存，如果之前的元素大于暂存元素，将之前的元素向后移动一位。如果之前的元素小于等暂存元素，结束循环，将暂存元素赋值给索引为`j`的元素

```javascript
const insertSort2 = (arr) => {
  // [0, i-1] : 为已经排序好的元素，需要将索引为i的元素放入到之前元素中合适的位置
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    let j = i;
    for (; j > 0; j--) {
      if (temp < arr[j - 1]) {
        // 将元素进行后移
        arr[j] = arr[j - 1];
      } else {
        // 终止循环，j--也不会执行
        break;
      }
    }
    // 如果temp > 之前的所有元素，那么循环结束后会执行j--，此时j=0
    // 最后我们将索引为0的位置赋值为temp
    arr[j] = temp;
  }
};
```

复杂度分析：
> 当排序的数组为有序数组时，时间复杂度会降到O(n)级别

* 时间复杂度: O(n^2)
* 空间复杂度：O(1)

测试：

```javascript
// 生成长度为100，元素值为1~100的随机组进行排序
const arr = genRandomArray(100);
const arr2 = genRandomArray(100);
insertSort(arr);
insertSort2(arr2);
console.log(isSorted(arr)); // true
console.log(isSorted(arr2)); // true
```

### 插入排序

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201223162546.png)

数组中`[0,i-1]`范围内的元素都是在整个数组中排序好的，我们每次要从`[i,arr.length-1]`中找到最小值与索引`i`处的值进行交换，然后`i++`。

遍历完成后，`i = arr.length`，`[0, arr.length-1]`即整个数组都被排序完成

```javascript
function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    // 从剩余元素中找到最小值的索引
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 与当前遍历的元素交换位置
    swap(arr, i, minIndex);
  }
}
```

复杂度分析：
> 即使数组是完全有序的数组，时间复杂度也不会降低

* 时间复杂度: O(n^2)
* 空间复杂度: O(n)

### 归并排序

### 快速排序
