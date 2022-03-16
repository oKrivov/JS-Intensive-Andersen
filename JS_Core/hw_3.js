
const arr = [1,3, 45, 33, 55, 213]
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

const filtArr = words.myFilter((item) => item.length < 6)

console.log(filtArr);
console.log(words.filter((item) => item.length < 6));
