const binarySearchTree = require('./binarySearchTree');
const { genRandomArray, isSorted } = require('../shared/sortHelper');
const tree = new binarySearchTree();

function testMinAndMax () {
  const arr = genRandomArray(1000);
  arr.forEach(item => tree.add(item));
  const result = [];
  while (!tree.isEmpty()) {
    const min = tree.removeMin();
    result.push(min);
  }
  console.log('result', result);
  console.log(isSorted(result));
}

function testAdd () {
  const arr = [28, 16, 22, 30, 29, 42];
  arr.forEach(item => tree.add(item));
}

function testRemove () {
  const arr = [28, 16, 22, 30, 29, 42];
  arr.forEach(item => tree.add(item));
  console.log(tree.remove(32));
  console.log(JSON.stringify(tree, null, 2));
}

function test () {
  // testAdd();
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
  // testMinAndMax();
  testRemove();
}

test();
