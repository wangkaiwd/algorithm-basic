const MyArray = require('./index');

function test () {
  const arr = new MyArray(20);
  for (let i = 0; i < 10; i++) {
    arr.addLast(i);
  }
  console.log(arr);
  arr.add(1, 100);
  console.log(arr);
}

test();

