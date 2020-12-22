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

  // 在数组末尾添加元素()，然后将其进行上浮
  // 上浮：判断其父节点是否 >= 该节点的值，如果否，进行位置交换；如果是，操作完成
  add (e) {
    this.data.push(e);
    this.siftUp(this.data.length - 1);
  }

  // 提取堆中的最大值，即根节点
  //  1. 用堆中最后一个子节点替换根节点的位置
  //  2. 将根节点进行下沉操作
  extractMax () {
    if (this.data.length === 0) {
      throw Error('Heap is empty!');
    }
    const len = this.data.length;
    const max = this.data[0];
    this.data[0] = this.data[len - 1];
    this.data.length--;
    this.siftDown(0);
    return max;
  }

  // 取出最大元素，放入一个新元素
  // 一次O(logn)操作： 直接将堆顶元素替换为新元素，然后进行下沉操作
  replace (e) {
    this.data[0] = e;
    this.siftDown(0);
  }

  heapify () {

  }

  swap (i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  siftUp (k) {
    const e = this.data[k];
    while (k !== 0 && e > this.data[this.parent(k)]) {
      const parentK = this.parent(k);
      this.swap(k, parentK);
      k = parentK;
    }
  }

  siftDown (k) {
    const e = this.data[k];
    while (this.data[this.leftChild(k)]) {
      const leftK = this.leftChild(k), leftVal = this.data[leftK];
      const rightK = this.rightChild(k), rightVal = this.data[leftVal];
      // 当前节点大于等于左右节点时，结束循环
      if (e >= leftVal && e >= rightVal) {
        break;
      }
      if (rightVal >= leftVal) {
        this.swap(k, rightK);
        k = rightK;
      } else {
        this.swap(k, leftK);
        k = leftK;
      }
    }
  }
}

module.exports = MaxHeap;
