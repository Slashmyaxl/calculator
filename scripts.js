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
        if (!entry.textContent.charAt(11)) {
            entry.textContent += `${button.value}`; 
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        const operand = entry.textContent;

        if (operator === ' / ' && operand === '0') {
            alert('I am but a simple calculator. Please define my denominator.');
            entry.textContent = '';
            secondOperand = '';
            return;
        }

        if (firstOperand && operand != '') {

            if (operator) {
            secondOperand = operand;
            secondOperand = parseInt(secondOperand);

            console.log(`Operand1: ${firstOperand}`)
            console.log(`Operator: ${operator}`)
            console.log(`Operand2: ${secondOperand}`)
            
            let result = operate(firstOperand, operator, secondOperand);
            result = parseFloat(result.toFixed(3));
            firstOperand = result;
            operator = button.value;
            entry.textContent = operand.slice(0, 0);
            secondOperand = '';
            prevEntry.textContent = `${result}${operator}`;

            console.log(`Result: ${result}`)
            console.log(`Operand1: ${firstOperand}`)
            console.log(`Operator: ${operator}`)
            console.log(`Operand2: ${secondOperand}`)
            } else {
                operator = button.value;
                firstOperand = entry.textContent;
                prevEntry.textContent = `${firstOperand}${operator}`;
                entry.textContent = operand.slice(0, 0);
            }
            
        } else if (firstOperand && operand == '') {
            operator = button.value;
            prevEntry.textContent = `${firstOperand}${operator}`;
        } else {
            
            firstOperand = entry.textContent;
            prevEntry.textContent = `${operand}${button.value}`;
            operator = button.value;
            entry.textContent = operand.slice(0, 0);

            console.log(`Operand1: ${firstOperand}`);
            console.log(`Operator: ${operator}`);
            console.log(`Operand2: ${secondOperand}`);
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
    const operand = entry.textContent;
    entry.textContent = operand.slice(0, -1);
});

equalBtn.addEventListener('click', () => {
    
    if (firstOperand && operator) {
        secondOperand = entry.textContent;
        secondOperand = parseInt(secondOperand);

        if (operator === ' / ' && secondOperand === 0) {
            alert('I am but a simple calculator. Please define my denominator.');
            entry.textContent = '';
            secondOperand = '';
            return;
        }

        console.log(`Operand1: ${firstOperand}`)
        console.log(`Operator: ${operator}`)
        console.log(`Operand2: ${secondOperand}`)

        prevEntry.textContent = `${firstOperand}${operator}${secondOperand} =`;
        let result = operate(firstOperand, operator, secondOperand);
        result = parseFloat(result.toFixed(3));
        entry.textContent = result;
        firstOperand = result;
        secondOperand = ''
        operator = '';

        console.log(`Result: ${result}`)
        console.log(`Operand1: ${firstOperand}`)
        console.log(`Operator: ${operator}`)
        console.log(`Operand2: ${secondOperand}`)
        

    } else {
        firstOperand = entry.textContent;
        prevEntry.textContent = `${firstOperand} =`;
        

        console.log(`Operand1: ${firstOperand}`)
        console.log(`Operator: ${operator}`)
        console.log(`Operand2: ${secondOperand}`)
    }
});