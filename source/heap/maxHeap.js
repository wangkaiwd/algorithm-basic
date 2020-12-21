// 用数组来表示堆
// 什么是最大堆：
//  1. 完全二叉树，从右到左，不会有中间某个地方有空缺的内容
//  2. 父节点的值大于等于子节点的值
class MaxHeap {
  constructor (arr) {
    this.data = arr || [];
  }

  size () {
    return this.data.length;
  }

  isEmpty () {
    return this.data.length === 0;
  }

  // 根据传入的索引获取到其父元素的索引
  parent (k) {
    if (k === 0) {
      throw Error('Root node have not parent node');
    }
    return Math.floor((k - 1) / 2);
  }

  // 根据传入索引，获取其左子树的索引
  leftChild (k) {
    return 2 * k + 1;
  }

  // 根据传入索引，获取其右子树的索引
  rightChild (k) {
    return 2 * k + 2;
  }

  add () {

  }

}
