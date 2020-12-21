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

* 完全二叉树： 从做到右被填满，如果有一个节点只有右子树而没有左子树，那么该节点并不是完全二叉树
* 最大堆：堆中每个节点的值总是不大于其父节点的值。(根节点的值最大)
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221205852.png)
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221210138.png)
* 使用数组的方式表示最大堆
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221211048.png)
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201221212044.png)

### 实现

* size
* isEmpty
* parent
* leftChild
* rightChild

