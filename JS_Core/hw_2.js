const person = {
  name: "Vasya",
  surname: "Petrov",
  adress: {
    city: "Moscow",
    street: "Green",
    house: 13,
    flat: 31,
    floor: 2,
    phone: [7, 988, [357, 22, [123, 321, 1]], 33],
  },
  func: function () {},
};
const arr = [1, [2, 3], 4, 5, 6, 7, 8, 9];

function makeObjectDeepCopy(obj) {
  const clone = {};

  for (let prop in obj) {
    if (Array.isArray(obj[prop])) {
      clone[prop] = makeArrayDeepCopy(obj[prop]);
    } else if (typeof obj[prop] === "object") {
      clone[prop] = makeObjectDeepCopy(obj[prop]);
    } else {
      clone[prop] = obj[prop];
    }
  }

  return clone;
}

function makeArrayDeepCopy(array) {
  const cloneArray = [];

  array.forEach((item, index) => {
    if (Array.isArray(item)) {
      cloneArray[index] = makeArrayDeepCopy(item);
    } else {
      cloneArray[index] = item;
    }
  })

  return cloneArray;
}

function selectFromInterval(array, from, to) {
  const myError = new Error("Ошибка!");

  if (!Array.isArray(array)) {
    throw myError;
  }
  if (from > to) {
    [from, to] = [to, from];
  }

  const intervalArray = array.filter((i) => {
    if (typeof i !== "number" || isNaN(i)) {
      throw myError;
    }

    return i >= from && i <= to;
  });

  return intervalArray;
}

const myIterable = { from: 1, to: 3 };

myIterable[Symbol.iterator] = function() {
  let current = this.from;
  const last = this.to;
  const valuesIsNotValid =
    isNaN(current) ||
    typeof current !== "number" ||
    isNaN(last) ||
    typeof last !== "number";

  if (valuesIsNotValid || current > last) {
    throw new Error(`Ошибка!`);
  }

  return {
    next() {
      if (current <= last) {
        return { done: false, value: current++ };
      }
      
      return { done: true };
    },
  };
};

for(let i of myIterable) {
  console.log(i);
}