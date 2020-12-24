## 常见排序算法总结

> 图示阅读的顺序为从左到右，从上到下

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

### 冒泡排序

冒泡排序会对相邻元素进行对比，将如果前一个元素大于后一个元素，则将其与后一个元素进行位置交换。这样没进行一轮比对，在数组末尾都会多一个排序好的元素。其一轮的交换过程如下：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201224171637.png)

代码如下：

```javascript
function bubbleSort (arr) {
  // 当只有一个元素时，不再需要进行排序
  for (let i = 0; i < arr.length - 1;) {
    // 最后一次进行元素交换时的索引，它之后的元素已经都排序好了，可以直接跳过它们
    let lastSwappedIndex = 0;
    // i 为已经排序好元素的个数
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        lastSwappedIndex = j;
      }
    }
    // 跳过的轮数，当处理一个完全有序数组时，lastSwappedIndex = 0，此时 i = arr.length - 1，循环结束
    i = arr.length - lastSwappedIndex - 1;
  }
}
```

当最多经过`arr.length-2`轮的对比之后，就可以得到一个有序数组

复杂度分析：

* 时间复杂度：O(n^2)
* 空间复杂度：O(1)

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

快速排序首先要实现`partition`函数，该函数会在数组中指定范围`[l,r]`内中随机选择一个标定点，然后以标定点`p`对应的值`v`为中心，`[l,p-1]`为小于标定点的值，`[p+1, r]`为大于等于标定点的值，然后将`p`
返回。其逻辑如下：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201224113519.png)

代码如下：

```javascript
const partition = (arr, l, r) => {
  // 从[l,r]范围中生成一个随机值
  const random = getRandom(l, r);
  // 将随机索引作为标定点，并和范围内第一个元素交换位置
  swap(arr, l, random);
  // [l+1,j] < v
  // [j+1, i] >= v
  // 将之后 小于v 的元素与 大于等于v 即 j+1 对应的元素进行交换
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      j++;
      swap(arr, i, j);
    }
  }
  // 全部交换完成后，此时 arr [l+1, j] < v, [j+1, i=r] > v
  // 此时只需要降l,j对应位置的索引交换位置即可
  swap(arr, l, j);
  return j;
};
```

快速排序首先会找到对应的标定点，然后再分别对标定点左边的元素继续查找标定点，对标定点右边的元素也继续查找标定点，递归这个过程。最后当`[l,r]`中只剩一个元素或者没有元素时，数组完成排序。

```javascript
const quickSort = (arr, l = 0, r = arr.length - 1) => {
  // 范围内没有元素或者只有一个元素时，便不用再进行排序了
  if (l >= r) {return;}
  const p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
};
```

**当处理一个完全相同的数组时，上述算法的时间复杂度会退化到O(n^2)**。这里我们可以分别从头尾开始进行遍历，然后将大于等于`v`的元素放到数组右侧，小于等于`v`的元素放到数组左侧，保证数据的平均分布。

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201224143629.png)

这就是双路快速排序法，其代码如下：

```javascript
function partition (arr, l, r) {
  const random = getRandom(l, r);
  swap(arr, l, random);
  let i = l + 1, j = r;
  while (true) {
    // [l+1, i-1] <= v;  [j+1, r] >= v
    // 这里 i=j 的时候，也要进行 判断当前元素与arr[l]的关系, 来看下是否要执行i++操作
    // 否则会漏掉这个元素
    //  >= arr[l]时暂停
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    // <= arr[l] 时暂停
    while (i <= j && arr[j] > arr[l]) {
      j--;
    }
    // i = j 的时候，说明 arr[i] >= arr[l] , arr[j] <= arr[l]， 即arr[i] = arr[j] = arr[l]，此时也可以结束循环
    if (i >= j) {break;}
    // 将i,和j位置的元素进行交换，将符合要求的元素放到对应的位置
    swap(arr, i, j);
    i++;
    j--;
  }
  // [l+1, i-1] <= v , [j+1, r] >= v，循环结束后, arr[j] <= arr[l] , arr[i] >= arr[l]
  // 此时将 l, j 位置的元素进行交换，就可以将标定放到正确的位置
  swap(arr, l, j);
  return j;
}

function quickSort (arr, l = 0, r = arr.length - 1) {
  if (l >= r) {return;}
  const p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
}
```

其实，**当数组元素完全相同时，我们还可以将时间复杂度降到O(n)级别**，只需要遍历一次数组中的元素即可。下面是其逻辑演示：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201224155955.png)

代码如下：

```javascript
function partition (arr, l, r) {
  const random = getRandom(l, r);
  swap(arr, l, random);
  // i,lt,gt  [l+1, lt] < v [lt+1, i-1] = v , [gt, r] > v
  let lt = l, i = l + 1, gt = r + 1;
  while (i < gt) {
    if (arr[i] > arr[l]) {
      gt--;
      swap(arr, i, gt); // 这里i不会增加，因为新交换来的元素并不知道它的大小
    } else if (arr[i] < arr[l]) {
      lt++;
      swap(arr, i, lt);
      // 这里i++，处理下一个元素，因为交换过来的元素是在[lt+1,i-1]之间的，一定等于 arr[l]
      i++;
    } else { // arr[i] === arr[l]时，将i后移
      i++;
    }
  }
  swap(arr, l, lt);
  return [lt, gt];
}

function quickSort (arr, l = 0, r = arr.length - 1) {
  if (l >= r) {return;}
  const [lt, gt] = partition(arr, l, r);
  // 标定点元素的顺序已经确定了，分别对小于它和大于它的元素进行排序
  quickSort(arr, l, lt);
  quickSort(arr, gt, r);
}
```

复杂度分析：

* 时间复杂度: O(nlogn)
* 空间复杂度: O(logn)

### 测试

完成上述排序算法后，为了保证代码的正确性，笔者生成了长度为1000的随机数组，并对排序后的数组进行测试：

```javascript
const arr = genRandomArray(1000)
const arr1 = [...arr]
const arr2 = [...arr]
const arr3 = [...arr]
const arr4 = [...arr]
insertSort(arr)
console.log(isSorted(arr)); // true

selectionSort(arr1)
console.log(isSorted(arr1)); // true

bubbleSort(arr2)
console.log(isSorted(arr2)); // true

mergeSort(arr3)
console.log(isSorted(arr3)); // true

quickSort(arr4)
console.log(isSorted(arr4)); // true
```
