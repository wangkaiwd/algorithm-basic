## 二分查找法 Binary Search

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201214213344.png)

* 对于有序数列，才能使用二分查找法(排序的作用)
* 二分查找法时间复杂度： O(logn)
* 对数底不写为10
* [对数入门](https://www.shuxuele.com/algebra/logarithms.html)
* 应用：多次查找，不用每次都排序
* mid = (l+r)/2 可能整形溢出， mid = l+(r-l)/2

### 递归实现
