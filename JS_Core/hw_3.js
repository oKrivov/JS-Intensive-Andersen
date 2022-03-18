const arr = [1, 3, 45, 33, 55, 213];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.myFilter = function(callbackFunc) {
  const newArray = [];
  const array = this;
  let index = 0;
  
  for (let item of this) {
    if (callbackFunc(item, index, array)) {
      newArray.push(item);
    }

    index++;
  }

  return newArray;
}


Array.prototype.myReduce = function(callbackFunc, initialValue) {
  const array = this;
  let result = null;
  let index = 0;

  if (initialValue) {
    result = initialValue;

    this.forEach((item) => {
      result = callbackFunc(result, item, index, array);
      index++;
    });
  } else {
    this.forEach((item) => {
      result = callbackFunc(result, item, index, array);
      index++;
    });
  }

  return result;
};
