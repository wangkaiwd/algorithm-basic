// 使用虚拟头节点来实现链表
// 由于链表在进行增删操作时要找到前一个节点，而头节点由于没有前一个节点需要单独处理，这个时候用虚拟头节点就可以避免这种单独处理的逻辑
class ListNode {
  constructor (e, next = null) {
    this.node = e;
    this.next = next;
  }
}

// 链表是完全动态的数据结构，不需要容量
class LinkedList {
  constructor () {
    this.dummyHead = new ListNode(null);
    this.size = 0;
  }

  getSize () {
    return this.size;
  }

  isEmpty () {
    return this.size === 0;
  }

  _illegalIndex (index) {
    if (index < 0 || index > this.size) {
      throw Error('Linked list index exceed limit');
    }
  }

  add (index, e) { // 在特定的索引插入元素，不过需要注意这里的索引只是方便描述，链表中并没有真正的索引
    this._illegalIndex(index);
    // 要找到插入位置的前一个节点
    const node = new ListNode(e);
    // null -> 0 -> 1 -> 2 -> 3 -> null
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  addLast (e) {
    this.add(this.size, e);
  }

  addFirst (e) {
    this.add(0, e);
  }

  // 0 -> 1 -> 2 -> 3 -> null
  remove (index) {
    this._illegalIndex(index);
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    let cur = prev.next;
    prev.next = cur.next;
    cur.next = null;
    this.size--;
    return cur.node;
  }

  removeFirst () {
    return this.remove(0);
  }

  removeLast () {
    return this.remove(this.size - 1);
  }

  set (index, e) {
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    cur.node = e;
  }

  // 0 -> 1 -> 2 -> 3 -> null
  get (index) {
    let cur = this.dummyHead.next;
    // 最终遍历到index的前一个，所以需要从dummyHead.next开始遍历
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.node;
  }

  toString () {
    let cur = this.dummyHead.next;
    let str = 'Linked list: \n';
    // null -> 0 -> 1 -> 2 -> null
    for (let i = 0; i < this.size; i++) {
      str += cur.node;
      str += '->';
      cur = cur.next;
    }
    str += null;
    console.log(str);
  }

  contain (e) {
    // 0 -> 1 -> 2 -> 3 -> null
    let prev = this.dummyHead;
    for (let i = 0; i < this.size; i++) {
      if (prev.node === e) {
        return true;
      }
      prev = prev.next;
    }
    return false;
  }
}

module.exports = LinkedList;
