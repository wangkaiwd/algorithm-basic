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