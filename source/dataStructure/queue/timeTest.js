// 测试时间
// 运行count次入队和出队操作的时间
const ArrayQueue = require('./index');
const LoopQueue = require('./loopQueue');

function testQueue (queue, count) {
  const startTime = new Date().getTime();
  for (let i = 0; i < count; i++) {
    queue.enqueue(parseInt(Math.random() * 100));
  }
  for (let i = 0; i < count; i++) {
    queue.dequeue(parseInt(Math.random() * 100));
  }
  const endTime = new Date().getTime();
  return (endTime - startTime) / 1000;
}

function timeTest () {
  const count = 100000;
  const arrayQueue = new ArrayQueue();
  const loopQueue = new LoopQueue();
  const time1 = testQueue(arrayQueue, count);
  const time2 = testQueue(loopQueue, count);
  console.log(`ArrayQueue, time: ${time1}s`);
  console.log(`LoopQueue, time: ${time2}s`);
}

timeTest();
