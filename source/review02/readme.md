## 常见排序算法总结

近期在看一些算法相关的知识，这里总结整理下常见排序算法的`JavaScript`实现，并添加图解方便理解。

下面是一些代码中会用到的公共方法，为了避免代码重复编写，笔者将其进行了单独的抽离：

```javascript
// utils.js
/**
 * 交换数组中的2个元素
 * @param arr
 * @param i
 * @param j
 */
function swap (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 随机生成l到r之间的一个值
 * @param l
 * @param r
 * @return {*}
 */
function getRandom (l, r) {
  return Math.round(Math.random() * (r - l)) + l;
}
```

```javascript
// sortHelper.js
/**
 * 生成随机数组
 * @param n 数组长度
 * @param range 数组中元素取值范围
 * @return {[]}
 */
function genRandomArray (n, range = n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * range);
  }
  return arr;
}

/**
 * 检查一个数组是否为有序数组
 * @param arr
 * @return {boolean}
 */
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

要想实现归并排序，首先要实现`merge`方法。`merge`方法可以将数组的俩部分有序内容，合并为一部分有序内容
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201223172452.png)

```javascript
function merge (arr, l, mid, r) {
  // 用一个新数组来存储原数组中的内容，防止原数组发生改变后通过索引找不到对应的值
  const tempArray = arr.slice(l, r + 1);
  // [l,r]
  let i = l, j = mid + 1;
  for (let k = l; k <= r; k++) {
    // 左边的区域已经处理完毕，直接将右侧区域数组放到原数组中的后续位置
    if (i > mid) {
      arr[k] = tempArray[j - l];
      j++;
    } else if (j > r) {
      arr[k] = tempArray[i - l];
      i++;
    } else if (tempArray[i - l] < tempArray[j - l]) {
      arr[k] = arr[i - l];
      i++;
    } else {
      arr[k] = arr[j - l];
      j++;
    }
  }
}
```

归并排序首先会通过`[l, r]`中的中间值来将范围内要排序的数组一分为二，然后分别对`[l, mid]`和`[mid+1, r]`中的元素进行排序，最终会将排序好的俩部分进行`merge`操作，合并为一个排序好的整体。
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201223174740.png)

```javascript
// 找到当前遍历范围的中间值，分别对中间值左边和右边的数组元素分别进行排序，
// 然后将排序好的俩部分通过merge函数合并为一个整体排序好的内容
function mergeSort (arr, l = 0, r = arr.length - 1) {
  // [l,r]范围内只剩一个元素或者没有元素时，结束排序
  if (l >= r) {return;}
  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}
```

复杂度分析：

* 时间复杂度：O(nlogn)
* 空间复杂度：O(n)

### 快速排序

### 测试

完成上述排序算法后，
