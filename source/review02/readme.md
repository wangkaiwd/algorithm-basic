## 常见排序算法总结

近期在看一些算法相关的知识，这里总结整理下常见排序算法的`JavaScript`实现，并添加图解方便理解。

下面是一些代码中会用到的公共方法，为了避免重复编写，笔者将其进行了单独的抽离：

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

```javascript

```

复杂度分析：

* 时间复杂度: O(n^2)
* 空间复杂度：O(1)

### 插入排序

### 归并排序

### 快速排序
