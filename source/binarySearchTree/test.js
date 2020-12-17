const binarySearchTree = require('./binarySearchTree');

function test () {
  const tree = new binarySearchTree();
  const arr = [28, 16, 13, 22, 30, 29, 42];
  arr.forEach(item => tree.add(item));
  // tree.toString();
  // console.log('preOrder');
  // tree.preOrder();
  // console.log('inOrder');
  // tree.inOrder();
  // console.log('postOrder');
  // tree.postOrder();
  tree.preOrderNonRecur();
}

test();
