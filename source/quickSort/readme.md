## 快速排序

> 可以对数组先进行区间划分，然后再实现

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201213223440.png)

* partition: 随便给定数组中的一个元素，以这个元素为分界点，左边为小于该元素的内容，右边为大于该元素的内容，最后返回该元素的索引

### 优化一

完全有序的数组分析：

* 每次都会对`l -> r`进行`partition`，而最终返回的索引都是`l`。即将数组再次将第一个元素和其它元素进行分割
* 上述过程每次会在逻辑中的第一个`sort`方法中处理一个元素，而在第二个`sort`方法中执行剩下的元素
* 递归执行`n`次，才会将所有的内容处理完毕。而每次`partition`处理的范围都会少一
* 即时间复杂度：n + n-1 + n-2 + ... 1， 此为[等差数列](https://zh.wikipedia.org/wiki/%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97)
* ((n+1)*n)/2 = 1/2*n^2 + 1/2n,即时间复杂度为O(n^2)


* 完全有序的数组：时间复杂度: O(n^2), 递归深度: O(n) (会造成栈溢出)
* 随机指定参考元素，然后与数组的第一个元素进行替换(如何生成特定范围内的随机值)
  * 思考：每次取中间的值作为参考点？生成一个测试数组，使得每次的中间值都为数组中的最小值
  * 万一随机每次都取最小值？ 1/n! : 理论上可能发生，但是随着数据量的增加，1/n!发生的概率非常小。而当数据量比较小的时候，即使出现最小值，计算机也可以轻松应付

### 优化二

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201213223153.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201213223235.png)

* 当数组中所有的元素相同时
* 重新设记算法： 双路快速排序法

### 优化三

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201213222717.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201213222809.png)

* 三路快速排序算法：完全相同的元素其实没有必要进行遍历，对小于v和大于v的元素进行递归
* 所有元素都相同的数组： O(n)

### 时间复杂度分析

* 普通算法：看最差， 能找到一组数据100%恶化
* 随机算法: 看期望，不能找到一组数据100%恶化
* 多次调用：均摊时间复杂度
* 期望时间复杂度： O(nlogn), 总是把数组一分为二

### 作业

* 举一个简单的例子进行理解
* 通过`log`输出内容
* insertionSort 优化 quickSort
* select k: 给出一个无序数组，找出数组中第k小的元素
* leetcode:
  * 75.颜色分类
  * 215.数组中的第K个最大元素
  * 剑指offer 40.最小的k个数
