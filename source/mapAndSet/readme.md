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
* 当数据近乎有序的话，二分搜索树的时间复杂度与链表相同，即 h = n, O(h) = O(n)

### 有序集合和无序集合

* 有序集合: 基于搜索树的实现
* 无序集合：链表 -> 集合插入的顺序； 更好的解决方案： 哈希表
* 多重集合：集合中的元素可以重复

### 映射Map

* 词频统计
* 根据建(`key`)，寻找值(`Map`)
* Map: 基于链表实现
  * add
  * remove
  * contains
  * get
  * set
  * getSize
  * isEmpty

### 练习

* 804
