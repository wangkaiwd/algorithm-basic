// Array: 增删改查

// size: 数组中元素数量
// capacity: 数组容量
// data: 数组

// 容量默认为10
function MyArray (capacity = 10) {
  this.data = new Array(capacity);
  // 需要单独设置，数组的length属性是会影响数组的
  this.capacity = capacity;
  this.size = 0;
}

MyArray.prototype.arrayFull = function () {
  if (this.size === this.capacity) {
    throw Error('Operate fail, Array is full');
  }
};
MyArray.prototype.illegalIndex = function (index) {
  if (index < 0 || index > this.size) {
    throw Error('Index exceed max limit');
  }
};

MyArray.prototype.getSize = function () {
  return this.size;
};

MyArray.prototype.getCapacity = function () {
  return this.capacity;
};

MyArray.prototype.isEmpty = function () {
  return this.size === 0;
};

// 末尾添加
MyArray.prototype.addLast = function (e) {
  this.add(this.size, e);
};
// 开头添加
MyArray.prototype.addFirst = function (e) {
  this.add(0, e);
};
// 任意位置添加
MyArray.prototype.add = function (index, e) {
  this.illegalIndex(index);
  if (this.data.length === this.size) {
    this.resize(this.data.length * 2);
  }
  for (let i = this.size - 1; i >= index; i--) {
    // 把[index,this.size)中的元素往后移一个位置
    this.data[i + 1] = this.data[i];
  }
  this.data[index] = e;
  this.size++;
};

// 移除对应索引的元素，并返回删除的元素
MyArray.prototype.remove = function (index) {
  this.illegalIndex(index);
  for (let i = index + 1; i < this.size; i++) {
    this.data[i - 1] = this.data[i];
  }
  const result = this.data[index];
  this.size--;
  // 释放内容，方便进行垃圾回收
  this.data[this.size] = null;
  const quarterLength = this.data.length / 4;
  // Lazy: size 为数组的长度的1/4才进行缩容，缩小的范围为数组长度的1/2
  if ((this.size === quarterLength) && (this.data.length / 2 !== 0)) {
    this.resize(this.data.length / 2);
  }
  return result;
};
MyArray.prototype.removeFirst = function () {
  return this.remove(0);
};
MyArray.prototype.removeLast = function () {
  return this.remove(this.size);
};
MyArray.prototype.get = function (index) {
  this.illegalIndex(index);
  return this.data[index];
};
MyArray.prototype.set = function (index, e) {
  this.illegalIndex(index);
  this.data[index] = e;
};
MyArray.prototype.contain = function (e) {
  for (let i = 0; i < this.size; i++) {
    if (this.data[i] === e) {
      return true;
    }
  }
  return false;
};
// 找到元素返回其索引，没有找到返回-1
MyArray.prototype.indexOf = function (e) {
  for (let i = 0; i < this.size; i++) {
    if (this.data[i] === e) {
      return i;
    }
  }
  return -1;
};
MyArray.prototype.removeElement = function (e) {
  const index = this.indexOf(e);
  if (index !== -1) {
    this.remove(index);
    return true;
  }
  return false;
};
MyArray.prototype.toString = function () {
  console.log(`Array: size = ${this.size}, capacity = ${this.capacity}`);
  let str = '[';
  for (let i = 0; i < this.size; i++) {
    str += this.data[i];
    if (i !== this.size - 1) {
      str += ', ';
    }
  }
  str += ']';
  console.log(str);
};
// 对数组的容量自动进行增加和删除，防止占用系统的过多内存
MyArray.prototype.resize = function (capacity) {
  const newData = new MyArray(capacity);
  for (let i = 0; i < this.size; i++) {
    newData.addLast(this.data[i]);
  }
  this.data = newData.data;
  this.capacity = newData.capacity;
};
MyArray.prototype.getFirst = function () {
  return this.get(0);
};
MyArray.prototype.getLast = function () {
  return this.get(this.size - 1);
};

module.exports = MyArray;

