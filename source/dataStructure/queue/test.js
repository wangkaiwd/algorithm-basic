const ArrayQueue = require('./index');

function test () {
  const queue = new ArrayQueue();
  for (let i = 0; i < 10; i++) {
    queue.enqueue(i);
    console.log('enqueue', queue);
    if (i % 3 === 2) {
      queue.dequeue();
      console.log('dequeue', queue);
    }
  }
}

test();
