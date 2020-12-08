## 队列

数组队列：

* enqueue:   O(1) 均摊
* dequeue:   O(n)
* getFront
* getSize
* isEmpty

循环队列：

* [diagram](https://excalidraw.com/#json=4692015438626816,MQq0CldfXBMWzKMiWVFfDA)

循环队列的特点: 入队、出队时间复杂度都是O(1)

* `front`-> 队首，`tail` -> 队尾
* 元素出队列的时候，不会将之后的元素前移，而是将`front`后移
* **`dequeue`操作的时间复杂度降到了O(1)**
* front === tail 队列为空
* (tail+1) % size === tail 队列满

循环队列的俩种遍历方式：

```js

```

双端队列：可以在队列的俩端添加/删除元素

* addFront
* addLast
* removeFirst
* removeLast
