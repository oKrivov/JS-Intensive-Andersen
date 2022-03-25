const curry = (fn) => {
  let s;
  const next = (...args) => {
    return (x, separator) => {
      if (typeof separator === 'string') {
        s = separator;
      } 
      if (typeof x !== 'string') {
        return args.reduce((acc, a) => {
          if (s) {
            acc += s;
          }

          return fn(acc, a);
        });
      }

      return next(...args, x);
    };
  };

  return next();
};

const concatStrings = curry((x, y) => x + y);



class Calculator {
  constructor(x, y) {
    this.x = isNumber(x);
    this.y = isNumber(y);
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(num) {
    this.x = isNumber(num);
  }

  setY(num) {
    this.y = isNumber(num);
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error('');
    }

    console.log(this.x / this.y);
  }
}

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

const calculator = new Calculator(12, 3);
