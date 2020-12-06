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
  if (this.size === this.capacity) {
    throw Error('Operate fail, Array is full');
  }
  this.data[this.size] = e;
  this.size++;
};

MyArray.prototype.add = function (index, e) {
  for (let i = index; i < this.size; i++) {
    // 把[index,this.size)中的元素往后移一个位置
    this.data[i + 1] = this.data[i];
  }
  this.data[index] = e;
  this.size++;
};

