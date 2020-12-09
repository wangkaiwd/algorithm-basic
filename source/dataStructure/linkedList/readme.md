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

* 自己用代码创建通过数组创建链表的函数
* 也可以自己创建`toString`函数
* 203:
  * 有dummyHead
  * 无dummyHead
  * 递归

例子：

* 递归实现数组求和
