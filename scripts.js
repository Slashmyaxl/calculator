const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator');
const clrBtn = document.querySelector('#clear');
const delBtn = document.querySelector(`#delete`);
const equalBtn = document.querySelector(`#equals`);
const prevEntry = document.querySelector('#previous-entry');
const entry = document.querySelector('#current-entry');

let firstOperand = '';
let operator = '';
let secondOperand = '';


const add = function(a, b) {
    return +a + +b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b == 0) {
        alert('I am but a simple calculator. Please define my denominator.');
        return;
    } return a / b;
}

function operate(a, operation, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

digits.forEach((button) => {
    button.addEventListener('click', () => {
        if (!entry.textContent.charAt(11)) {
            entry.textContent += `${button.value}`; 
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        const operand = entry.textContent;
        
        if (firstOperand) {
            secondOperand = operand;

            console.log(`Operand1: ${firstOperand}`)
            console.log(`Operator: ${operator}`)
            console.log(`Operand2: ${secondOperand}`)
            

           
            let result = operate(firstOperand, operator, secondOperand);
            firstOperand = result;
            operator = button.id;
            entry.textContent = operand.slice(0, 0);
            secondOperand = '';
            prevEntry.textContent = `${firstOperand}${button.value}`;

            console.log(`Operand1: ${firstOperand}`)
            console.log(`Operator: ${operator}`)
            console.log(`Operand2: ${secondOperand}`)
            console.log(`Result: ${result}`)
        } else {
            
            firstOperand = operand;
            prevEntry.textContent = `${operand}${button.value}`;
            operator = button.id;
            entry.textContent = operand.slice(0, 0);

            console.log(`Operand1: ${firstOperand}`)
            console.log(`Operator: ${operator}`)
            console.log(`Operand2: ${secondOperand}`)
        };
        
    });
})

clrBtn.addEventListener('click', () => {
    prevEntry.textContent = '';
    entry.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';

    console.log(`Operand1: ${firstOperand}`)
    console.log(`Operand2: ${secondOperand}`)
    console.log(`Operator: ${operator}`)
});

delBtn.addEventListener('click', () => {
    const str = result.textContent;
    result.textContent = str.slice(0, -1);
});

/* equalBtn.addEventListener('click', () => {
    let operand = result.textContent;

    secondOperand = operand;
    prevEntry.textContent += `${operand}${equalBtn.value}`;
    result.textContent = operate(firstOperand, operator, secondOperand);
});