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
    const result = [];
    // 当栈为空的时候说明处理完了所有内容
    while (stack.length !== 0) {
      const popEntry = stack.pop();
      result.push(popEntry.element);
      // 由于要先处理左子树，所以要先入右子树，然后再入左子树
      if (popEntry.right) {
        stack.push(popEntry.right);
      }
      if (popEntry.left) {
        stack.push(popEntry.left);
      }
    }
    return result;
  }

  // 中序遍历
  inOrder (node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.element);
      this.inOrder(node.right);
    }
  }

  // 中序遍历非递归实现:
  inOrderNonRecur () {

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

  minimum (node = this.root) {
    // 每次都会处理node.left为null的情况，所以node === null只可能是根节点为null
    if (node == null) {
      throw Error('Tree is empty!');
    }
    if (node.left == null) {
      return node.element;
    }
    return this.minimum(node.left);
  }

  maximum (node = this.root) {
    if (node == null) {
      throw Error('Tree is empty!');
    }
    if (node.right == null) {
      return node.element;
    }
    return this.minimum(node.right);
  }

  // 返回删除的元素
  removeMin () {
    const min = this.minimum();
    // 递归遍历，直到找到最小值节点
    // 如果该节点没有右子树，直接进行删除，如果该节点有右子树，删除该节点，将该节点的右子树放到该节点的位置
    this.root = this.removeMinInner(this.root);
    return min;
  }

  // 返回删除当前节点删除最小值后的新的当前节点，需要使用新的当前节点来更新旧的当前节点
  removeMinInner (node) {
    if (node.left == null) { // 说明node是最小值节点
      this.size--;
      if (node.right) {
        // node = node.right; // 这样写不会生效，只是将node指向了一个新的堆内存
        const rightNode = node.right;
        // 删除node节点
        node = null;
        return rightNode;
      }
      // 没有右子树，直接将该节点删除
      return null;
    }
    // 这里由于对象引用，其实已经将root进行了修改，不返回node也可以。
    // 但是由于root可能是null，所以要将node返回。这里其实不返回也行，但是为了满足递归的宏观语义，返回是一个正确的理解
    node.left = this.removeMinInner(node.left);
    // 需要将最新值赋值给旧的节点
    return node;
  }

  // 返回删除的元素
  removeMax () {
    const max = this.maximum(this.root);
    this.root = this.removeMaxInner(this.root);
    return max;
  }

  removeMaxInner (node) {
    if (node.right == null) {
      this.size--;
      if (node.left) {
        const leftNode = node.left;
        // 释放内存,因为此时node还指向上一节点的left所对应的堆内存
        node = null;
        // 返回新的当前节点：当前节点的左节点
        return leftNode;
      }
      return null;
    }
    node.right = this.removeMaxInner(node.right);
    // 将当前节点返回
    return node;
  }

  // 如果要删除的节点既有左子树，还有右子树
  //  找到该节点的后继来替代该元素：即比该节点大的最小节点，它在该节点的右子树的左子树中的最小值
  remove (e) {
    const result = this.removeInner(this.root, e);
    if (result) {
      this.tree = result;
    }
  }

  removeInner (node, e) {
    if (node == null) {
      throw Error('Tree is empty!');
    }
    if (e === node.element) {
      // 左子树和右子树都存在
      if (node.left && node.right) {
        const min = this.minimum(node.right);
        node.right = this.removeMinInner(node.right);
        const newNode = new Node(min, node.left, node.right);
        // 释放当前节点的内存
        node = null;
        return newNode;
      }
      this.size--;
      // 左子树存在
      if (node.left) {
        const leftNode = node.left;
        node = null;
        return leftNode;
      }
      // 右子树存在
      if (node.right) {
        const rightNode = node.right;
        node = null;
        return rightNode;
      }
      // 左右子树都不存在直接删除
      return null;
    } else if (e < node.element) {
      if (node.left) {
        const result = this.removeInner(node.left, e);
        if (result !== undefined) {
          node.left = result;
          return node;
        }
      }
      // 没有要删除的元素
    } else {
      if (node.right) {
        const result = this.removeInner(node.right, e);
        if (result !== undefined) {
          node.right = result;
          return node;
        }
      }
      // 没有要删除的元素
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
