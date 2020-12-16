class Node {
  constructor (element, left = null, right = null) {
    this.element = element;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor (root = null) {
    this.root = null;
    this.left = root.left || null;
    this.right = root.right || null;
    this.size = 0;
  }

  getSize () {
    return this.size;
  }

  isEmpty () {
    return this.size === 0;
  }

  contains (e) {

  }

  add (e, node = this.root) {

  }

  // 前序遍历
  preOrder () {

  }

  // 中序遍历
  inOrder () {

  }

  // 后续遍历
  postOrder () {

  }
}

module.exports = BinarySearchTree;
