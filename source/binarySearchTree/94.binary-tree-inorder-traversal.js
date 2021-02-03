function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const inorderTraversal = function (node, visitor) {
  if (node == null) {
    return null;
  }
  visitor.enter(node);
  if (node.left) {
    inorderTraversal(node.left, visitor);
  }
  if (node.right) {
    inorderTraversal(node.right, visitor);
  }
  visitor.leave(node);
};

const root = {
  val: 10,
  left: { val: 7, left: { val: 6, left: null, right: null }, right: { val: 9, left: null, right: null } },
  right: { val: 11, left: { val: 4, left: null, right: null }, right: { val: 12, left: null, right: null } }
};
let indent = 0;
inorderTraversal(root, {
  enter (node) {
    indent += 2;
    console.log('enter', '-'.repeat(indent), node);
  },
  leave (node) {
    console.log('leave', '-'.repeat(indent), node);
    indent -= 2;
  }
});


