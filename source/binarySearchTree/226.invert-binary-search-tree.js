function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 每一个根节点的左子树和右子树都进行位置交换，然后将反转后的根节点返回
// 1. root {val: 4, left: {val:2 ,... }, right: {val: 7, ...}}
//    {val: 4, left: {val: 7, ...}, right: { val: 2, ... }}
//    node.left = 反转后的node.left
//    node.right = 反转后的node.right
//    return root
// 2. {val: 7, left: {val: 6, ...}, right: {val: 9, ...}}
//    {val: 7, left: {val: 9, ...}, right: {val: 6, ...}}

const invertTree = (node, depth = 0) => {
  // 节点为空，不用反转了
  if (node == null) {
    return null;
  }
  console.log('--'.repeat(depth), 'node1', JSON.stringify(node));
  const left = node.left;
  node.left = node.right;
  node.right = left;
  // 这里传入的node.left已经替换为了node.right
  node.left = invertTree(node.left, depth + 1);
  node.right = invertTree(node.right, depth + 1);
  console.log('--'.repeat(depth), 'node2', JSON.stringify(node));
  return node;
};

const tree = {
  root: {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null }
    },
    right: {
      val: 7,
      left: { val: 6, left: null, right: null },
      right: { val: 9, left: null, right: null }
    }
  }
};
const newTree = invertTree(tree.root);
