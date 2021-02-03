function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const root = {
  val: 10,
  left: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  },
  right: {
    val: 11,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 12,
      left: null,
      right: null
    }
  }
};
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/dong-hua-yan-shi-94-er-cha-shu-de-zhong-xu-bian-li/
const inorderTraversal = function (node) {
  const stack = [];
  const result = [];

  let curr = node;
  while (curr != null || stack.length > 0) {
    while (curr != null) { // 先将所有的左子树入栈
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop(); // 出栈
    // 将右子树入栈
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
};

console.log(inorderTraversal(root));
