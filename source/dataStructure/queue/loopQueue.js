class LoopQueue {
  constructor (capacity = 10) {
    this.size = 0;
    this.capacity = capacity + 1;
    this.data = new Array(this.capacity);
    this.front = 0;
    this.tail = 0;
  }

  enqueue (e) {
    // 入队时如果元素已经满了，需要进行扩容
    // [null, null, 1,2,3,4,5,6]
    // 队列满：可能是在队尾移动到队首之前，也可能是在队首之后，位于队列的最后一个元素
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2);
    }
    // 队尾为空，会空一个空间出来
    this.data[this.tail] = e;
    this.tail = (this.tail + 1) % this.data.length;
    this.size++;
  }

  dequeue () {
    if (this.isEmpty()) {
      throw Error('Queue is empty');
    }
    const item = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.data.length;
    this.size--;
    // 出队的时候，当队列内容较少时，防止内存浪费需要进行缩容
    if ((this.size === this.getCapacity() / 4) && (this.getCapacity() / 2 !== 0)) {
      this.resize(this.getCapacity() / 2);
    }
    return item;
  }

  getFront () {
    if (this.isEmpty()) {
      throw Error('Queue is empty');
    }
    return this.data[this.front];
  }

  isEmpty () {
    return this.front === this.tail;
  }

  getCapacity () {
    // 循环队列要故意浪费一个空间，为了方便区分队列的满和空
    return this.data.length - 1;
  }

  getSize () {
    return this.size;
  }

  resize (newCapacity) {
    const newQueue = new LoopQueue(newCapacity);
    for (let i = 0; i < this.data.size; i++) {
      // [null, null, 1,2,3,4,5,6]
      newQueue.data[i] = this.data[(this.front + i) % this.size];
    }
    this.data = newQueue.data;
    // 重置队首和队尾
    this.front = 0;
    this.tail = this.size;
    this.capacity = newQueue.getCapacity();
  }

  // anotherTraverseWay () {
  //   for (let i = this.front; (i + 1) % this.data.length !== this.tail; i++) {
  //     console.log('log', this.data[(i + 1) % this.data.length]);
  //   }
  // }
}

module.exports = LoopQueue;
