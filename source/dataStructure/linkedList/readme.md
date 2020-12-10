## 链表

### 链表的重要性：

* 引用
* 递归

### 链表的特点：

* 节点(`Node`)
  ```js
  class Node {
    element;
    next;
  }
  ```
* 优点：真正的动态，不需要处理固定容量的问题
* 缺点：丧失了随机访问的能力(与数组进行对比)

### 链表操作：

* dummyHead: null -> 0 -> 1 -> -3 -> null, 虚拟头节点，统一添加操作，不用单独处理头节点插入
* getSize
* isEmpty
* addFirst
* add: O(n)
* addLast
* get
* getFirst
* getLast
* set: O(n)
* contains: O(n)
* remove: O(n)
* removeFirst
* removeLast

### 使用链表实现栈：

### 使用链表实现队列：

### 改进链表：

* 增加`tail`节点

### 链表和递归

* 自己用代码通过数组创建链表的函数
  * 数组的每一项为一个对象，对象中的`element`存储当前节点的值，对象的`next`属性指向下一个节点的索引
* 也可以自己创建`toString`函数
* 203:
  * 有dummyHead
  * 无dummyHead
  * 递归

例子：

* 递归实现数组求和:
  * 用很小的例子进行理解
  * 宏观理解

程序调用栈：

* 函数调用是有代价的： 函数调用 + 系统栈空间
* 递归解决问题会更简单？
* 调试：比较重要的参数: 函数的执行深度 -> depth

### 作业

* 使用递归实现链表
* **增删改查 递归实现**
* 双向链表(dummyHead)
* 循环链表(dummyHead)

leetcode:

* 206
