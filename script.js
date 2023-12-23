let numList = []

// DOM Elements
const display = document.querySelector("#display-text");

const clearBtn = document.querySelector("#clear");

const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const equalsBtn = document.querySelector("#equals");
const plusMinusBtn = document.querySelector("#plus-minus");

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");

clearBtn.addEventListener("click", () => {
    numList.splice(0, numList.length);
    updateDisplay();
});

plusMinusBtn.addEventListener("click", () => {
    if (!isNaN(parseInt(numList[numList.length - 1]))) { 
        numList[numList.length - 1] *= -1
    }
    updateDisplay();
})

plusBtn.addEventListener("click", () => handleOperatorClick("+"));
minusBtn.addEventListener("click", () => handleOperatorClick("-"));
multiplyBtn.addEventListener("click", () => handleOperatorClick("*"));
divideBtn.addEventListener("click", () => handleOperatorClick("/"));

equalsBtn.addEventListener("click", () => {
    numList = [operate(numList[0], numList[2], numList[1])];
    updateDisplay();
});

oneBtn.addEventListener("click", () => handleNumberClick(1));
twoBtn.addEventListener("click", () => handleNumberClick(2));
threeBtn.addEventListener("click", () => handleNumberClick(3));
fourBtn.addEventListener("click", () => handleNumberClick(4));
fiveBtn.addEventListener("click", () => handleNumberClick(5));
sixBtn.addEventListener("click", () => handleNumberClick(6));
sevenBtn.addEventListener("click", () => handleNumberClick(7));
eightBtn.addEventListener("click", () => handleNumberClick(8));
nineBtn.addEventListener("click", () => handleNumberClick(9));

function handleNumberClick(num) {
    if (!isNaN(parseInt(numList[numList.length - 1]))) {
        numList[numList.length - 1] = parseInt(numList[numList.length - 1].toString() + num);
    } else {
        numList.push(num);
    }
    updateDisplay();
}

function handleOperatorClick(oper) {
    if (numList.length === 3) {
        result = operate(numList[0], numList[2], numList[1]);
        numList.splice(0, 3, result);
        numList.push(oper);
    } else if (
        numList.length != 0 &&
        numList[numList.length - 1] !== "+" &&
        numList[numList.length - 1] !== "-" &&
        numList[numList.length - 1] !== "*" &&
        numList[numList.length - 1] !== "/"
    ) {
        numList.push(oper);
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = numList.length > 0 ? numList.join(" "): 0;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            result = "ERROR";
    }
    
    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}