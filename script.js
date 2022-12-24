const display = document.querySelector('.value-display');
const buttons = document.querySelectorAll('.digits-item');
const equal = document.querySelector('#equal');
const operators = document.querySelectorAll('.operator-item');

function add(val1, val2){
    return val1 + val2;
}

function subtract(val1, val2){
    return val1 - val2;
}

function multiply(val1, val2){
    return val1 * val2;
}

function divide(val1, val2){
    return val1 / val2;
}

function operate(operator, val1, val2){
    switch(operator){
        case '+':
            return add(val1, val2);
        case '-':
            return subtract(val1, val2);
        case '*':
            return multiply(val1, val2);
        case '/':
            return divide(val1, val2);
        default:
            return 'Invalid input';
    }
}
function clearValues(){
    const displayNum = document.querySelector('display-value');
    if(displayNum){
        display.removeChild(displayNum);
    }
    return;
}
let firstNum = '';
let operator = '';
let secondNum = '';

function shiftValues(value){
    secondNum = firstNum;
    firstNum = value;
}
function displayNumber(num){
    firstNum += num;
    display.innerText = firstNum;
}


buttons.forEach(btn=> {
    btn.addEventListener('click', function(){
        displayNumber(btn.innerHTML);
        console.log(btn.innerHTML);
    });
});

equal.addEventListener('click', function(){
    const value = operate(operator, +firstNum, +secondNum);
    shiftValues(value);
    display.innerText = firstNum;

});

operators.forEach(btn => {
    btn.addEventListener('click', function(){
        operator = btn.value;
        shiftValues('');
    });
});
