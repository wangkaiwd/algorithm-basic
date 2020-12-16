## 二分搜索树

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215222513.png)

* 二叉树
  ```js
  class Node {
    element;
    left; // 左孩子
    right; // 右孩子
  }
  ```
* 二叉树具有天然递归结构
* 每个节点的左子树和右子树都是二叉树
* 二叉树不一定是满的
* **一个节点也是二叉树**(左右子树都为null)

二分搜索树：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215222949.png)

* 存储的元素必须有可比较性

操作：二分搜索树不包含重复元素，实现时以递归为主

* getSize
* isEmpty
* add：又返回值和没有返回值的实现。链表中如何递归添加元素？
* contains
* traverse:
  * 顺序其实为打印输出的位置，可以仔细思考对应的输出原因
  * preOrder:前序遍历(最常用)
  * inOrder: 中序遍历(遍历结果是顺序的)
  * postOrder: 后续遍历
* delete
  * 找到最小值和最大值
  * 删除最小值和最大值
  * 测试 -> 将每次删除的值到放到数组中，知道树中没有元素，此时数组为排序好的数组
  * 删除任意节点(左右都有孩子的节点)
* toString

遍历；自己画图进行分析
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215232510.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215232422.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201215232731.png)

* 每个节点都会被经过三次
* 前序遍历：非递归实现(利用栈)

深度优先遍历和广度优先遍历(结合`Node.js`中对应的代码逻辑再次进行理解)：

* 深度优先(前中后序遍历)
* 广度优先遍历(层序遍历): 非递归 + 队列
  * 可以更快的找到对应的元素
    * 深度优先遍历会一直到叶子节点才会获取节点的值
    * 广度优先遍历会直接按层进行遍历

删除:
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201216000852.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201216001529.png)

### 二分搜索树的相关问题

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201216002009.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201216002131.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/20201216002202.png)

### leetcode

* 翻转二叉树
