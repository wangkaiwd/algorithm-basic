const MyArray = require('../array');

class ArrayQueue {
  constructor () {
    this.array = new MyArray();
    this.data = this.array.data;
  }

  // 添加队尾元素
  enqueue (e) {
    this.array.addLast(e);
  }

  // 移除队首元素
  dequeue () {
    return this.array.removeFirst();
  }

  getFront () {
    return this.array.getFirst();
  }

  isEmpty () {
    return this.array.isEmpty();
  }

  getSize () {
    return this.array.getSize();
  }
}

module.exports = ArrayQueue;
