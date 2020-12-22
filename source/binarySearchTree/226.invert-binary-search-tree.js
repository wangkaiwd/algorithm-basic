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

// 每个根节点的左子树等于其右子树，右子树等于其左子树，然后将新的根节点返回
const invertTree = (node, depth = 0) => {
  // 节点为空，不用反转了
  if (node == null) {
    return null;
  }
  const left = node.left;
  node.left = invertTree(node.right, depth + 1);
  node.right = invertTree(left, depth + 1);
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
// const newTree = invertTree(tree.root);

// 深度优先遍历：
//  借助queue: 先入先出
//  借助栈： 后入先出
const invertTree2 = (root) => {
  const queue = [root];
  while (queue.length !== 0) {
    const node = queue.shift();
    const left = node.left;
    node.left = node.right;
    node.right = left;
    if (node.left) {queue.push(node.left);}
    if (node.right) {queue.push(node.right);}
  }
  return root;
};
const newTree = invertTree2(tree.root);
console.log(newTree);
