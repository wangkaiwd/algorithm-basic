const binarySearchTree = require('./binarySearchTree');
const tree = new binarySearchTree();

function testMinAndMax () {
  console.log(tree.minimum());
}

function testAdd () {
  const arr = [28, 16, 22, 30, 29, 42];
  arr.forEach(item => tree.add(item));
}

function test () {
  testAdd();
  // tree.toString();
  // console.log('preOrder');
  // tree.preOrder();
  // console.log('inOrder');
  // tree.inOrder();
  // console.log('postOrder');
  // tree.postOrder();
  // tree.preOrderNonRecur();
  // 一层一层来遍历
  // tree.broadFirstTraverse();
  testMinAndMax();
}

test();
