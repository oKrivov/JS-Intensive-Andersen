class Claculator {
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    this.clear();
  }

  clear() {
    this.previousOperand = '';
    this.currentOperand= '';
    this.operation = undefined;
  }

  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (this.currentOperand === '0' && number !== '0') {
      this.currentOperand = this.currentOperand.slice(1);
    }
    if (number === '.' && this.currentOperand === '') {
      this.currentOperand = '0'.concat(this.currentOperand);
    }
    if (number === '.' && this.currentOperand.includes('.')) {
      return;
    }
    if (this.currentOperand === '0' && number === '0') {
      return;
    }

    this.currentOperand = this.currentOperand.toString() + number.toString();
    this.currentOperand = this.currentOperand.slice(0,12);
  }

  choseOperation(operation) {
    if (this.currentOperand === '') {
      return;
    }
    if (this.previousOperand !== '') {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) {
      return;
    }
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = String(parseFloat(computation.toFixed(8)));
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =  this.currentOperand;

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = 
        `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText =  '';
    }
  }

  unaryOperator() {
    let operand = this.currentOperand.toString();

    if (operand.charAt(0) !== '-') {
      this.currentOperand = '-'.concat(operand);
    } else if (operand.charAt(0) === '-') {
      this.currentOperand = operand.slice(1);
    }
  }
}

const calculatorButtons = document.querySelector('.calculator-grid');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const unaryOperator = document.querySelector('[data-unary-operator]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
let currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Claculator(previousOperandTextElement, currentOperandTextElement);

calculatorButtons.addEventListener('mousedown', (e) => {
  let target = Object.keys(e.target.dataset).toString();
  let targetValue = e.target.innerText;

  switch(target) {
    case('number'):
      calculator.appendNumber(targetValue)
      break;

    case('operation'):
      calculator.choseOperation(targetValue)
      break;

    case('equals'):
      calculator.compute();
      break;

    case('delete'):
      calculator.delete();
      break;

    case('allClear'):
      calculator.clear();
      break;

    case('unaryOperator'):
      calculator.unaryOperator();
      break;
    }

    calculator.updateDisplay();
})