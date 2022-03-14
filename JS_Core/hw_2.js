const person = {
  name: 'Vasya',
  surname: 'Petrov',
  adress: {
    city: 'Moscow',
    street: 'Green',
    house: 13,
    flat: 31,
    floor: 2,
    phone: [7, 988, [357, 22, [123, 321, 1]], 33]
  },
  func: function(){
    
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function makeObjectDeepCopy(obj) {
  const clone = {};

  for(let prop in obj) {
    if (Array.isArray(obj[prop])) {
      clone[prop] = makeArrayDeepCopy(obj[prop]);
    }
    else if (typeof obj[prop] === 'object') {
      clone[prop] = makeObjectDeepCopy(obj[prop]);
    } 
    else {
      clone[prop] = obj[prop];
    }
  }

  return clone;
}

function makeArrayDeepCopy(array) {
  const cloneArray = [];

  for(let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      cloneArray[i] = makeArrayDeepCopy(array[i]);
    } else {
      cloneArray[i] = array[i];
    }
  }
  return cloneArray;
}



function selectFromInterval(array, from, to) {  
  const myError = new Error('Ошибка!');

  if (!Array.isArray(array)) {
    throw myError;
  }
  
  if (from > to) {
    [from, to] = [to, from];
  }

  const intervalArray = array.filter((i) => {
    if (typeof i !== 'number' || isNaN(i)) {
      throw myError;
    }

    return i >= from && i <= to;
  })

	return intervalArray;
}


const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function() {
  return {
    current: this.from,
		last: this.to,

    next() {
			const valuesIsNotValid = isNaN(this.current) || typeof this.current !== 'number' || 
			isNaN(this.last) || typeof this.last !== 'number';
			
			if (valuesIsNotValid || this.current > this.last) {
				throw new Error(`Ошибка!`);
			} 
			if (this.current <= this.last) {
				return {done: false, value: this.current++};
			} else {
				return {done: true};
			}
		}
  };
}

for(let i of myIterable) {
  console.log(i);
}

