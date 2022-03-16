
const arr = [1, 3, 45, 33, 55, 213];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.myFilter = function(callbackFunc) {
  const newArray = [];

  for (let item of this) {
    if (callbackFunc(item)) {
      newArray.push(item);
    }
  }

  return newArray;
}


Array.prototype.myReduce = function(callbackFunc, initialValue) {
  let result = null;

  if (initialValue) {
    result = initialValue;

    this.forEach((item) => {
      result = callbackFunc(result, item);
    });
  } else {
    this.forEach((item) => {
      result = callbackFunc(result, item);
    });
  }

  return result;
};

console.log(arr.myReduce((a, b) => {
  return a + b
}));

