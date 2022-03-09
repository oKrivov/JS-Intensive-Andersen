function conversionOfNumberSystem() {
  const value = prompt().trim();
  const base = prompt().trim();
  const valueIsNanOrEmpty = isNaN(value) || isNaN(base) || value === '';
  const notNumberSystem = base < 2 || base > 32;

  if (valueIsNanOrEmpty || notNumberSystem) {
    return console.log('Некорректный ввод!');
  }

  return console.log((+value).toString(base));
}

// conversionOfNumberSystem();


function sumAndQuotientOfTwoNumbers() {
  const value1 = +prompt().trim();
  const value2 = +prompt().trim();
  const valueIsNanOrEmpty = value1 === '' || value2 === '' || isNaN(value1) || isNaN(value2); 
  if (valueIsNanOrEmpty || value2 === 0) {
    return console.log('Некорректный ввод!');
  }

  return console.log(`Ответ: ${value1 + value2}, ${(value1 / value2)}`);
}

// sumAndQuotientOfTwoNumbers();

