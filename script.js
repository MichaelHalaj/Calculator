const display = document.querySelector('.value-display');
const buttons = document.querySelectorAll('.digits-item');
const equal = document.querySelector('#equal');
const operators = document.querySelectorAll('.operator-item');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');

const maxDisplayLength = 13;

let firstNum = '';
let operator = '';
let secondNum = '';

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
            return 'INVALID INPUT';
    }
}
/**
 * Updates display with given value or default value
 * @param {number} val - optional parameter to update display
 */
function updateDisplay(val = firstNum){
    display.innerText = val.toString().substring(0, maxDisplayLength);
}
function clearMemory(){
    firstNum = '';
    secondNum = '';
    operator = '';
    updateDisplay();
    console.log('memory cleared');
}
function deleteNum(){
    firstNum = firstNum.substring(0, firstNum.length-1);
    updateDisplay();
}

clear.addEventListener('click', function(){
    clearMemory();
});
del.addEventListener('click', function(){
    deleteNum();
});

function shiftValues(value){
    secondNum = firstNum;
    firstNum = value;
}
function displayNumber(num){
    firstNum += num;
    updateDisplay();
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
    updateDisplay();

});

operators.forEach(btn => {
    btn.addEventListener('click', function(){
        operator = btn.value;
        shiftValues('');
    });
});
