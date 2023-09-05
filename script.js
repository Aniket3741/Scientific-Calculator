let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
    }
    currentInput += number;
    updateDisplay();
}

function performOperation(operator) {
    if (currentInput !== '' && currentOperator !== '') {
        calculate();
    }
    currentOperator = operator;
    currentInput += operator;
    updateDisplay();
}

function calculate() {
    if (currentInput.includes('/') && currentInput.endsWith('0')) {
        showError('Cannot divide by zero');
        return;
    }
    try {
        const result = eval(currentInput);
        document.getElementById('result').value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        showError('Invalid input');
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
    currentInput = '';
    currentOperator = '';
    resultDisplayed = false;
}

function deleteLastDigit() {
    if (resultDisplayed) {
        clearDisplay();
    } else {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}

function showError(message) {
    document.getElementById('result').value = message;
    currentInput = '';
    currentOperator = '';
    resultDisplayed = true;
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}
