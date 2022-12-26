const display = document.querySelector('.value-display');
const buttons = document.querySelectorAll('.digits-item');
const equal = document.querySelector('#equal');
const operators = document.querySelectorAll('.operator-item');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
/*
Need to change the way the continuation of the expression
Ex. currently 2 + 2 = 4 and then once you press *, then it becomes 8 and does not
wait for the next value


Also, need to change the way floats work because it sometimes rounds and doesn't
update display correctly
*/
const maxDisplayLength = 14;
const round = 1000000000;
let firstNum = '';
let operator = '';
let secondNum = '';

function add(val1, val2){
    return Math.round((val1 + val2) * round) / round;
}

function subtract(val1, val2){
    return Math.round((val1 - val2) * round)/round ;
}

function multiply(val1, val2){
    return Math.round(val1 * val2 * round)/round;
}

function divide(val1, val2){
    return Math.round(val1 / val2 * round)/ round;
}

function operate(operator, val1, val2){
    if(operator.length > 0 && firstNum.length === 0){
        return 'ERROR:SYNTAX';
    }
    switch(operator){
        case '+':
            return add(val2, val1).toString();
        case '-':
            return subtract(val2, val1).toString();
        case '*':
            return multiply(val2, val1).toString();
        case '/':
            if(val1 === 0){
                return 'ERROR:DIV BY 0'
            }
            return divide(val2, val1).toString();
        default:
            return '';
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
    firstNum = firstNum.toString().substring(0, firstNum.length-1);
    console.log(firstNum);
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

function operateIfFull(){
    if(firstNum.toString().length > 0 && secondNum.toString().length >0){
        evaluate();
        return true;
    }
    return false;
}
function evaluate(){
    const value = operate(operator, +firstNum, +secondNum);
    if(/^[+-]?\d+(\.\d+)?$/.test(value)){
        shiftValues(value);
    }
    updateDisplay(value);
}
buttons.forEach(btn=> {
    btn.addEventListener('click', function(){
        displayNumber(btn.value);
        console.log(btn.value);
    });
});

equal.addEventListener('click', function(){
    evaluate();
    shiftValues('');
});

operators.forEach(btn => {
    btn.addEventListener('click', function(){
        let isFull = operateIfFull();
        operator = btn.value;
        console.log(operator);
        if(firstNum.length > 0){
            //Covers the case for when equal button is pressed and number is already shifted
            shiftValues('');
        }
        
    });
});
