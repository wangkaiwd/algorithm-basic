## 链表

链表的重要性：

* 引用
* 递归

链表的特点：

* 节点(`Node`)
  ```js
  class Node {
    element;
    next;
  }
  ```
* 优点：真正的动态，不需要处理固定容量的问题
* 缺点：丧失了随机访问的能力(与数组进行对比)

操作：

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

使用链表实现栈：
