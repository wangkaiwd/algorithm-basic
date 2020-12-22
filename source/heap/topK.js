const PriorityQueue = require('./priorityQueue');

function getLeastNumbers (arr, k) {
  const pq = new PriorityQueue();
  for (let i = 0; i < k; i++) {
    pq.enqueue(arr[i]);
  }
  for (let i = k; i < arr.length; i++) {
    // 数组中k之后的元素，比队列中最大的元素要小，将队列进行出队，然后将该元素进行入队
    // 入队之后堆会重新将最大的值放到堆的顶部
    if (arr[k] < pq.getFront()) {
      pq.dequeue();
      pq.enqueue(arr[k]);
    }
  }
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(pq.dequeue());
  }
  return result;
}

console.log(getLeastNumbers([3, 2, 1], 2));
