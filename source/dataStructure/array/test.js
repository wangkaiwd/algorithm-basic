const MyArray = require('./index');

function test () {
  const arr = new MyArray();
  for (let i = 0; i < 10; i++) {
    arr.addLast(i);
  }
  console.log(arr);
  arr.add(1, 100);
  console.log(arr);
  arr.addFirst(-1);
  console.log(arr);
  arr.remove(2);
  console.log(arr);
  arr.removeElement(4);
  console.log(arr);
  arr.removeFirst();
  console.log(arr);
}

test();

