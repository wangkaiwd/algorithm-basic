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

  contains (e, node = this.root) {
    if (node == null) {
      return false;
    }
    if (e === node.element) {
      return true;
    } else if (e < node.element) {
      return this.contains(e, node.left);
    } else {
      return this.contains(e, node.right);
    }
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
      node.left = this.innerAdd(e, node.left);
    } else if (e > node.element) {
      node.right = this.innerAdd(e, node.right);
    }
    // 为什么要返回node?
    // 当根节点有值的时候，即使不返回node也没有问题，因为node本质指向的是一片引用，而我们改的是node.left和node.right，此时node指向的堆内存地址并没有发生变化
    // 但是当根节点为空时，此时直接return new Node(e)会创建一个新的内存空间，需要赋值给root
    return node;
  }

  // 前序遍历
  // 遍历的时候每一个节点都会经过三次：
  //  1. 首次到它的时候
  //  2. 遍历完left回来的时候
  //  3. 遍历完right回来的时候
  preOrder (node = this.root) {
    if (node) {
      console.log(node.element);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // 利用栈来前序遍历树的所有元素
  //    栈：后入先出，可以记录之前访问的元素
  preOrderNonRecur () {
    const stack = [this.root];
    // 当栈为空的时候说明处理完了所有内容
    while (stack.length !== 0) {
      const popEntry = stack.pop();
      console.log('popEntry', popEntry.element);
      // 由于要先处理左子树，所以要先入右子树，然后再入左子树
      if (popEntry.right) {
        stack.push(popEntry.right);
      }
      if (popEntry.left) {
        stack.push(popEntry.left);
      }
    }
  }

  // 中序遍历
  inOrder (node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.element);
      this.inOrder(node.right);
    }
  }

  // 后续遍历
  postOrder (node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.element);
    }
  }

  // 队列： 先入先出
  // 广度优先遍历
  broadFirstTraverse () {
    const queue = [this.root];
    while (queue.length !== 0) {
      const shiftEntry = queue.shift();
      console.log(shiftEntry.element);
      if (shiftEntry.left) {queue.push(shiftEntry.left);}
      if (shiftEntry.left) {queue.push(shiftEntry.right);}
    }
  }

  // depth
  toString (node = this.root, depth = 0, direction = 'root') {
    if (node) {
      console.log('--'.repeat(depth), `${node.element} - (${direction})`);
      this.toString(node.left, depth + 1, 'left');
      this.toString(node.right, depth + 1, 'right');
    }
  }
}

module.exports = BinarySearchTree;
