## 二分查找法 Binary Search

> leetcode: 704.二分查找

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201214213344.png)

* 对于有序数列，才能使用二分查找法(排序的作用)
* 二分查找法时间复杂度： O(logn)
* 对数底不写为10
* [对数入门](https://www.shuxuele.com/algebra/logarithms.html)
* 应用：多次查找，不用每次都排序
* mid = (l+r)/2 可能整形溢出， mid = l+(r-l)/2

### 递归实现

* 将内容一分为2，如果中间的值为目标值即返回，如果小于目标值，在目标值左边查找，如果大于目标值，在目标值右边查找。如果最终没有找到，返回-1
* 递归查找过程

### 非递归实现

### 修改循环不变量

### 二分查找法变种

* upper
  * 查找大于target的最小值：如，查找大于60的最小值

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215202618.png)

* cell

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215203127.png)

* lower_ceil: >=target的最小索引

* lower: 小于target的最大值
  * 会出现搜索空间没有变化的情况，middle计算时上下取整会出问题(例：[0,1]取中位数)

* lower_floor: 存在元素，返回最小索引。不存在元素，返回lower

* upper_floor: 如果数组中存在元素，返回最大索引。不存在元素，返回lower

### 二分查找模板

总结相应的思路
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215205932.png)

* 用>=target的最小值实现二分查找

### 练习

* 非递归实现`select K`
* 修改`select k`的循环不变量再次进行实现: 代码中的`i<=j`如何理解？
* 修改循环不变量实现归并排序：
  * 调整merge的循环不变量: arr[l,mid) -> arr[mid, r)
  * 调整mergeSort的循环不变量: arr[l,r)

### leetcode

* 875.爱吃香蕉的珂珂
* 1011.在D天内送达包裹的能力
