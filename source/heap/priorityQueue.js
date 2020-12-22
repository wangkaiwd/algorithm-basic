const MaxHeap = require('./maxHeap');

// 优先队列，每次出队的都是队列中的最大值
class PriorityQueue {
  constructor () {
    this.queue = new MaxHeap();
  }

  getSize () {
    return this.queue.size();
  }

  isEmpty () {
    return this.queue.size() === 0;
  }

  getFront () {
    return this.queue.findMax();
  }

  enqueue (e) {
    this.queue.add(e);
  }

  dequeue () {
    return this.queue.extractMax();
  }
}

module.exports = PriorityQueue;
