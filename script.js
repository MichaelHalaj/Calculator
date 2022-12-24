const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.digits-item');

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

/**
 * Gets current display element or creates a new display if one does not exist.
 */
function getCurrentDisplayElement(){

    const displayNum = document.querySelector('display-value');
    console.log(display);
    if(displayNum){
        console.log('Should be here');
        return displayNum;
    }else{
        const newDisplayNum = document.createElement('div');
        newDisplayNum.classList.add('display-value');
        display.appendChild(newDisplayNum);
        return newDisplayNum;
    }

}
function displayNumber(num){
    const displayNum = getCurrentDisplayElement();
    let currVal = displayNum.innerText;
    displayNum.innerText = `${currVal}${num}`;
    console.log(currVal + '' +num);
}


buttons.forEach(btn=> {
    btn.addEventListener('click', function(){
        displayNumber(btn.innerHTML);
        console.log(btn.innerHTML);
    });
});
