const ArrayStack = require('./index');

function test () {
  const stack = new ArrayStack();
  for (let i = 0; i < 5; i++) {
    stack.push(i);
  }
  console.log(stack);
  stack.pop();
  console.log(stack);
}

test();
