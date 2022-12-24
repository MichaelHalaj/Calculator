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
