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
  //     // 即使不是为根节点添加，也只是将node修改为另一个值，与原来的节点没有任何关系
  //     node = new Node(e);
  //     return;
  //   }
  //   if (e < node.element) {
  //     this.add(e, node.left);
  //   } else if (e > node.element) {
  //     this.add(e, node.right);
  //   }
  // }
  // reference relation: https://excalidraw.com/#json=4848003718316032,B1qZEBlNuNdK9VJMRgUX7g
  add (e) {
    // 从根节点开始添加
    // 宏观语义：
    // 为当前节点添加新节点，并将添加新节点后的该节点返回

    // 由于复杂数据类型的引用关系，如果根不为null，只修改添加的子节点也会导致这个树的变化，因为复杂数据类型会先根据地址来找到对应的堆内存，然后从堆内存中找出对应的值，此时该值已经发生了变化

    // 复杂数据类型就会发生引用
    this.root = this.innerAdd(e, this.root);
  }

  innerAdd (e, node) {
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
    // 当根节点有值的时候，即使不返回node也没有问题，因为node本质指向的是一片引用，而我们改的是node.left和node.right，此时node指向的堆内存地址并没有发生变化
    // 但是当根节点为空时，此时直接return new Node(e)会创建一个新的内存空间，需要赋值给root
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
