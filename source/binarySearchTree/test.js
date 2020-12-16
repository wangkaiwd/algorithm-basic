const binarySearchTree = require('./binarySearchTree');

function test () {
  const tree = new binarySearchTree();
  for (let i = 0; i < 5; i++) {
    tree.add(i);
  }
  console.log(tree);
}

test();
