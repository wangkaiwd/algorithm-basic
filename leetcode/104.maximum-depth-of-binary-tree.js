function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// 利用深度优先遍历
// 1. 递推公式：每个根节点的深度都为：左子树和右子树中深度较大的值+1
// 2. 当根节点为null时，说明深度为0，终止递归
// 3. 返回左子树和右子树中深度较大的值
//     3
//    / \
//   9  20
//     /  \
//    15   7
function maxDepth (root) {
  if (root == null) {
    return 0;
  }
  // 2
  const leftMaxDepth = maxDepth(root.left);
  // 7， 7->left:1, 7->right:1
  const rightMaxDepth = maxDepth(root.right);
  // 取深度中的最大值然后加1，当前节点也会占据深度1
  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
}

// 可以利用广度优先遍历，计算出对应的深度
// 空间复杂度取决于
function maxDepth2 (root) {
  if (root == null) {return 0;}
  // 每次要将队列里的所有节点都拿出来
  const queue = [root];
  let deep = 0;
  while (queue.length) { // 栈不为空，要继续遍历
    let size = queue.length;
    while (size > 0) { // 一层一层出队列，而不是一个一个出队列
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      size--;
    }
    deep++;
  }
  return deep;
}

const tree = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};
console.log(maxDepth(tree));
console.log(maxDepth2(tree));
