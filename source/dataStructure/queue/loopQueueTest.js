const LoopQueue = require('./loopQueue');

function test () {
  const queue = new LoopQueue();
  for (let i = 0; i < 10; i++) {
    queue.enqueue(i);
    if (i % 3 === 2) {
      queue.dequeue();
      console.log('dequeue', queue);
    }
  }
  // queue.anotherTraverseWay();
}

test();
