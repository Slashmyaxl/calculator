let firstOperand;
let operator;
let secondOperand;

function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        alert('I am but a simple calculator. Please define my denominator.');
        return;
    } return a / b;
}

function operate (a, operation, b) {
    return (operation(a, b));
}