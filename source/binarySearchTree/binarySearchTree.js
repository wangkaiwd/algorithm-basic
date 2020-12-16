class Node {
  constructor (element, left = null, right = null) {
    this.element = element;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
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

  // 要判断插入的值，如果值小于当前遍历的节点，并且当前节点的左子树为空的话，则插入到当前节点的左子树
  // add (e, node = this.root) {
  //   if (node == null) {
  //     this.root = new Node(e);
  //     this.size++;
  //     return;
  //   }
  //   // 节点的值相等不做处理
  //   if (e === node.element) { return;}
  //   if (e < node.element) {
  //     if (node.left == null) {
  //       node.left = new Node(e);
  //       this.size++;
  //       return;
  //     }
  //     this.add(e, node.left);
  //     return;
  //   }
  //   if (e > node.element) {
  //     if (node.right == null) {
  //       node.right = new Node(e);
  //       this.size++;
  //       return;
  //     }
  //     this.add(e, node.right);
  //   }
  // }
  // 错误代码
  // addError (e, node = this.root) {
  //   if (node == null) {
  //     // 这会使node指向一个全新的引用，在第一次执行时node指向的是this.root对应的堆内存,此时指向了一个新开辟的堆内存
  //     node = new Node(e);
  //     return;
  //   }
  //   if (e < node.element) {
  //     this.add(e, node.left);
  //   } else if (e > node.element) {
  //     this.add(e, node.right);
  //   }
  // }

  // const root = {
  //   element: 10,
  //   left: { element: 9, left: null, right: null },
  //   right: { element: 11, left: null, right: null }
  // };
  // add(8)
  // 10.left = this.add(8,10.left)
  //    9.left = this.add(8, 9.left)  9.left = {element: 8, null, null}
  //       9.left == null, return new Node(e)
  //    return 9
  // return 10
  add (e, node = this.root) {
    if (node == null) {
      this.size++;
      return new Node(e);
    }
    if (e < node.element) {
      // 空的话会创建新的，如果不是空会原样返回
      node.left = this.add(e, node.left);
    } else if (e > node.element) {
      node.right = this.add(e, node.right);
    }
    // 为什么要返回node?
    // add 就是要返回根节点
    return node;
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

  toString () {

  }
}

module.exports = BinarySearchTree;
