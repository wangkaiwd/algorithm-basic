## 集合和映射

### 集合

* 不能盛放元素

* Set:
  * add
  * remove
  * contains
  * getSize
  * isEmpty

* 典型应用：
  * 客户统计
  * 词汇量统计


* 以二分搜索树为基础实现Set
* 以链表为基础实现丽链表

### 二分搜索树复杂度分析

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201219154540.png)

* 时间复杂度： O(h) , h为二分搜索树的高度。 h = log2(n+1) = O(log2 n) = O(logn)

* O(logn)时间复杂度中的底数不做考虑
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201219154801.png)
