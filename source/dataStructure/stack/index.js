const MyArray = require('../array');

class ArrayStack {
  constructor (capacity) {
    this.array = new MyArray();
    this.data = this.array.data;
  }

  push (e) {
    this.array.addLast(e);
  }

  pop () {
    return this.array.removeLast();
  }

  peek () {
    return this.array.getLast();
  }

  getSize () {
    return this.array.size;
  }

  isEmpty () {
    return this.array.isEmpty();
  }

  toString () {
    // 最后以位是栈顶
    const tip = `Stack:\r`;
    let str = '[';
    for (let i = 0; i < this.array.size; i++) {
      str += this.data[i];
      if (i !== this.array.size - 1) {
        str += ', ';
      }
    }
    str += '] top';
    console.log('str', tip + str);
  }
}

module.exports = ArrayStack;
