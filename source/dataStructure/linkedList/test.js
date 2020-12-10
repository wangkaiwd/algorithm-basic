const LinkedList = require('./linkedList');

function test () {
  const linkedList = new LinkedList();
  for (let i = 0; i < 10; i++) {
    linkedList.addLast(i);
    linkedList.toString();
    if (i % 3 === 0) {
      linkedList.removeLast();
      linkedList.toString();
    }
  }
}

test();
