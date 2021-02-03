function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const preorderTraversal = function (node, visitor) {
  if (node == null) {
    return null;
  }
  visitor.enter(node);
  if (node.left) {
    preorderTraversal(node.left, visitor);
  }
  if (node.right) {
    preorderTraversal(node.right, visitor);
  }
  visitor.leave(node);
};

const root = {
  val: 10,
  left: { val: 7, left: { val: 6, left: null, right: null }, right: { val: 9, left: null, right: null } },
  right: { val: 11, left: { val: 4, left: null, right: null }, right: { val: 12, left: null, right: null } }
};
// let indent = 0;
// preorderTraversal(root, {
//   enter (node) {
//     indent += 2;
//     console.log('enter', '-'.repeat(indent), node);
//   },
//   leave (node) {
//     console.log('leave', '-'.repeat(indent), node);
//     indent -= 2;
//   }
// });

const preorderTraversalIterate = function (node) {
  const stack = [node];
  while (stack.length) {
    const popTarget = stack.pop();
    if (!popTarget) {continue;}
    console.log(popTarget.val);
    if (popTarget.right) {
      stack.push(popTarget.right);
    }
    if (popTarget.left) {
      stack.push(popTarget.left);
    }
  }
};

preorderTraversalIterate(root);
