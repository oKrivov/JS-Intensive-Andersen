Object.prototype.isNumber = function(val) {
  const isValidNum =
    typeof val === 'number' &&
    !Number.isNaN(val) &&
    !(val ===  -Infinity || val ===  Infinity);

  if (!isValidNum) {
    throw new Error('');
  }

  return val;
}

class LinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Stack {
  constructor(maxEl = 10) {
    this.maxEl = isNumber(maxEl);
    this.lastElem = null;
    this.count = 0;
  }

  static fromIterable(iterable) {
    const newStack = new this();

    if (!(Symbol.iterator in Object(iterable))) {
      throw new Error('Not iterable');
    };

    this.iterable = [...iterable];
    newStack.maxEl = this.iterable.length;

    for (let i = 0; i < newStack.maxEl; i++) {
      newStack.push(this.iterable[i]);
    }

    return newStack;
  }

  push(value) {
    const newNode = new LinkedListNode(value);

    if (this.count + 1 > this.maxEl) {
      throw new Error('Stack is full!');
    }

    this.count++;

    if (!this.lastElem) {
      this.lastElem = newNode;

      return this;
    }
  
    this.lastElem.next = newNode;
    newNode.prev = this.lastElem;
    this.lastElem = newNode;

    return this;
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is empty!');
    }

    const deleteElem = this.lastElem;

    if (this.count === 1) {
      this.lastElem = null;
    } else {
      this.lastElem.prev.next = null;
      this.lastElem = this.lastElem.prev;
    }

    this.count--;

    return deleteElem;
  }

  peek() {
    return this.lastElem;
  }

  isEmpty() {
    return this.count === 0;
  }

  toArray() {
    let newArray = [];
    let currentValue = this.lastElem;

    for (let i = this.count; i > 0; i--) {
      newArray[i - 1] = currentValue.value;
      currentValue = currentValue.prev;
    }

    return newArray;
  }
}

// module.exports = { Stack };