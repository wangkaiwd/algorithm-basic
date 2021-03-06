## 数组

* 数组最大优点： 快速查询,随机访问时间复杂度为O(1)

实现数组，支持如下`api`：

* getSize
* getCapacity
* isEmpty
* **add**: 要移动插入位置之后的所有元素，为了防止变量覆盖，需要倒着移动。 时间复杂度 O(n)
* **remove**: 将所有被删除元素之后的元素前移，并将最后一位置为`null`，方便进行垃圾回收。 时间复杂度 O(n)
* set: O(1)
* get: O(2)
* find: O(n)
* contain

动态数组：自动扩充数组的容量，防止内存浪费

* 思路：
  * 扩容：创建一个新的数组，容量为旧数组的2倍，然后将旧数组中的所有内容拷贝到新数组，最后将旧数组的引用指向新数组
  * 缩容： 创建一个新的数组，容量为旧数组的一半，然后将旧数组中的所有内容拷贝到新数组，最后将旧数组的引用指向新数组

### 时间复杂度分析

* 增：O(n)
* 删：O(n)
* 改: 已知索引O(1),未知索引O(n); 未知索引要先遍历找到该元素
* 查: 已知索引O(1),未知索引O(n)

### resize的时间复杂度

addLast,removeLast: capacity = n , this.size = n,

* 均摊复杂度
* 复杂度震荡：先addLast，然后removeLast,反复重复
