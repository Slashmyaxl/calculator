const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector(`#equals`);
const clrBtn = document.querySelector('#clear');
const delBtn = document.querySelector(`#delete`);
const prevEntry = document.querySelector('#previous-entry');
const entry = document.querySelector('#current-entry');

let firstOperand = '';
let operator = '';
let secondOperand = '';

const add = (a, b) => +a + +b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(a, operation, b) {
    switch (operation) {
        case ' + ':
            return add(a, b);
        case ' - ':
            return subtract(a, b);
        case ' * ':
            return multiply(a, b);
        case ' / ':
            return divide(a, b);
    }
}

digits.forEach((button) => {
    button.addEventListener('click', () => {

//Allows only one decimal per operand

        if (button.value === '.' && entry.textContent.includes('.')) {
        return;
        } else if (!entry.textContent.charAt(11)) {
            entry.textContent += `${button.value}`; 
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        const operand = entry.textContent;

        if (firstOperand && operand != '') {

            if (operator) {
            secondOperand = operand;
            secondOperand = parseFloat(secondOperand);

//Maintains previous operations/variable when user attempting to divide by zero

            if (operator === ' / ' && secondOperand === 0) {
                alert('I am but a simple calculator. Please give me definition!');
                entry.textContent = '';
                secondOperand = '';
                return;
            }
            
            let result = operate(firstOperand, operator, secondOperand);
            result = parseFloat(result.toFixed(3));

//Prevents large numbers overflowing display

            if (result.toString().length > 10) {
                result = result.toExponential(6);
            }

            firstOperand = result;
            operator = button.value;
            entry.textContent = '';
            secondOperand = '';
            prevEntry.textContent = `${result}${operator}`;

            } else {
                operator = button.value;
                firstOperand = entry.textContent;
                prevEntry.textContent = `${firstOperand}${operator}`;
                entry.textContent = '';
            }

//  Allows changing of operator prior to second operand

        } else if (firstOperand && operand == '') {
            operator = button.value;
            prevEntry.textContent = `${firstOperand}${operator}`;
        } else {
            firstOperand = entry.textContent;
            prevEntry.textContent = `${operand}${button.value}`;
            operator = button.value;
            entry.textContent = '';
        };
    });
})

//"Equals" button separate functionality displays two operands above results

equalBtn.addEventListener('click', () => {
    
    if (firstOperand && operator) {
        secondOperand = entry.textContent;
        secondOperand = parseFloat(secondOperand);

//Maintains previous operations/variable when user attempting to divide by zero

        if (operator === ' / ' && secondOperand === 0) {
            alert('I am but a simple calculator. Please give me definition!');
            entry.textContent = '';
            secondOperand = '';
            return;
        }

        prevEntry.textContent = `${firstOperand}${operator}${secondOperand} =`;
        let result = operate(firstOperand, operator, secondOperand);
        result = parseFloat(result.toFixed(3));

//Prevents large numbers overflowing display

        if (result.toString().length > 10) {
            result = result.toExponential(6)
        }

        entry.textContent = result;
        firstOperand = result;
        secondOperand = ''
        operator = ''; 

    } else {
        firstOperand = entry.textContent;
        prevEntry.textContent = `${firstOperand} =`;
    }
});

clrBtn.addEventListener('click', () => {
    prevEntry.textContent = '';
    entry.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
});

delBtn.addEventListener('click', () => {
    const operand = entry.textContent;
    entry.textContent = operand.slice(0, -1);
});