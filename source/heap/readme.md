## 堆和优先队列

* PriorityQueue: 优先队列,出队为拿出最大元素
* 实现时间复杂度：
  * 普通线性结构：
    * enqueue: O(1)
    * dequeue: O(n)
  * 顺序线性结构：
    * enqueue: O(n)，需要找到合适的插入位置
    * dequeue: O(1)
  * 堆：
    * enqueue: O(logn)
    * dequeue: O(logn)

### 堆的基本结构

* 平衡二叉树

二叉堆：

* 完全二叉树： 从左到右被填满，如果中间有空缺的话，那么该节点并不是完全二叉树
* 最大堆：堆中每个节点的值总是不大于其父节点的值。(根节点的值最大) 最小堆同理
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221205852.png)
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221210138.png)
* 使用数组的方式表示二叉堆
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221211048.png)
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221212044.png)

### 实现

* size
* isEmpty
* parent
* leftChild
* rightChild
* add: Sift Up，添加元素要上浮
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201222002714.png)
* extractMax: Sift Down
* heapify
* replace: 取出最大元素后，放入一个新元素
  * 先extractMax，再add, 俩次O(logn)的操作
  * 直接将堆顶元素替换为新元素以后进行Sift Down, 一次O(logn)的操作
* heapify: 将任意数组整理成堆的形状
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221225054.png)
  * 用数组表示一个完全二叉树：如何定位最后一个非叶子节点的索引
    * 计算数组中最后一个元素(树(堆)中最后一个节点)的父亲节点的索引
  * 将n个元素逐个插入到一个空堆中，算法复杂度是O(nlogn)
  * heapify的过程，算法复杂度为O(n)
    ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221230025.png)

### 堆排序

heapSort:

* 每次都执行extractMax,最终会得到一个排序好的数组
* 测试时间复杂度
  * time complexity: O(nlogn)
* 优化堆排序：
  * 原地堆排序
    ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221231626.png)

### 练习

* 实现最小堆
