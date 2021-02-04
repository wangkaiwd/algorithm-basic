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
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/solution/bang-ni-dui-er-cha-shu-bu-zai-mi-mang-che-di-chi-t/
const postorderTraversal = function (node) {

};
