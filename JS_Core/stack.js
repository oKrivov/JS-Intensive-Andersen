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

class Stack {
  
  constructor(maxEl = 10) {
    this.maxEl = isNumber(maxEl);
    this.items = [];
    this.count = 0;
  }

  static fromIterable([...iterable]) {
    const newStack = new this();

    if (!(Symbol.iterator in iterable)) {
      throw new Error('Not iterable');
    };

    newStack.maxEl = iterable.length;
    newStack.count = iterable.length;
    newStack.items = iterable;

    return newStack;
  }

  push(element) {
    this.items.length = this.maxEl;

    if (this.count + 1 <= this.maxEl) {
      this.items[this.count] = element;
      this.count++;
  
      return this.count - 1;
    }

    return;
  }
  pop() {
    if (this.count === 0) {
      throw new Error('Stack is empty');
    }

    let deleteItem = this.items[this.count - 1];
    this.count--;

    return deleteItem;
  }
  peek() {
    return this.count === 0 ? null : this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  toArray() {
    let newArray = [];

    for (let i = 0; i < this.count; i++) {
      newArray[i] = this.items[i];
    }

    return newArray;
  }
}


module.exports = { Stack };