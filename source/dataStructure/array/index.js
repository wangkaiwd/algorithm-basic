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
  if (index < 0 || index >= this.size) {
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
  this.arrayFull();
  this.illegalIndex(index);
  for (let i = this.size - 1; i >= index; i--) {
    // 把[index,this.size)中的元素往后移一个位置
    this.data[i + 1] = this.data[i];
  }
  this.data[index] = e;
  this.size++;
};

MyArray.prototype.delete = function (index) {
  for (let i = index + 1; i < this.size; i++) {
    this.data[i - 1] = this.data[i];
  }
  this.data[this.size] = null;
  this.size--;
};
MyArray.prototype.deleteFirst = function () {

};
MyArray.prototype.deleteLast = function () {

};


