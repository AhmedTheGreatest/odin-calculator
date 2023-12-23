let numList = [] // This list will store a sequence of numbers and operators

// DOM Elements
const display = document.querySelector("#display-text");

const clearBtn = document.querySelector("#clear");

const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const equalsBtn = document.querySelector("#equals");
const plusMinusBtn = document.querySelector("#plus-minus");
const percentageBtn = document.querySelector("#percentage");

const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");

// When the clear button is clicked, clear the numList and display
clearBtn.addEventListener("click", () => {
    numList.splice(0, numList.length);
    updateDisplay();
});

// Add an event listener to the operator buttons and pass in the handleOperatorClick function as a callback
plusBtn.addEventListener("click", () => handleOperatorClick("+"));
minusBtn.addEventListener("click", () => handleOperatorClick("-"));
multiplyBtn.addEventListener("click", () => handleOperatorClick("*"));
divideBtn.addEventListener("click", () => handleOperatorClick("/"));

// When the equals to button (=) is clicked:
equalsBtn.addEventListener("click", () => {
    // If the number-operator set (2 numbers and 1 operator) is complete
    if (numList.length === 3) { 
        // Set numList to the result of the expression and update the display
        numList = [operate(numList[0], numList[2], numList[1])];
        updateDisplay();
    }
});

// When the plus minus button (+/-) is clicked toggle between positive and negative numbers
plusMinusBtn.addEventListener("click", () => {
    if (!isNaN(parseInt(numList[numList.length - 1]))) { 
        numList[numList.length - 1] *= -1;
        updateDisplay();
    }
})

// When the percentage button is clicked divide the number by 100
percentageBtn.addEventListener("click", () => {
    if (!isNaN(parseInt(numList[numList.length - 1]))) {
        numList[numList.length - 1] /= 100;
        updateDisplay();
    }
})

// Add event listeners to all the number buttons and call the handleNumberClick function as a callback
zeroBtn.addEventListener("click", () => handleNumberClick(0));
oneBtn.addEventListener("click", () => handleNumberClick(1));
twoBtn.addEventListener("click", () => handleNumberClick(2));
threeBtn.addEventListener("click", () => handleNumberClick(3));
fourBtn.addEventListener("click", () => handleNumberClick(4));
fiveBtn.addEventListener("click", () => handleNumberClick(5));
sixBtn.addEventListener("click", () => handleNumberClick(6));
sevenBtn.addEventListener("click", () => handleNumberClick(7));
eightBtn.addEventListener("click", () => handleNumberClick(8));
nineBtn.addEventListener("click", () => handleNumberClick(9));

// Handles the clicking of number buttons
function handleNumberClick(num) {
    // If the last item in numList is a valid number append the pressed num to its end, Else push the item to the end of the numList
    if (!isNaN(parseInt(numList[numList.length - 1]))) {
        numList[numList.length - 1] = parseInt(numList[numList.length - 1].toString() + num);
    } else {
        numList.push(num);
    }
    updateDisplay();
}

// Handles the clicking of an operator button
function handleOperatorClick(oper) {
    // If the expression is complete (2 numbers and 1 operator) Else if the last item is not an operator, push the operator the end of the list
    if (numList.length === 3) {
        // Calculate the expression and add it to the beginning of the list replacing the first 3 items
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

// Updates the display of the calculator
function updateDisplay() {
    display.textContent = numList.length > 0 ? numList.join(" "): 0;
}

// Performs an operation and returns the result
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
            // If the person tries to divide by 0, display "LOL"
            if (b == 0) {
                result = "LOL";
            }
            break;
        default:
            result = "ERROR";
    }
    
    return result;
}

// Adds two numbers together
function add(a, b) {
    return a + b;
}

// Subtracts one number from another
function subtract(a, b) {
    return a - b;
}

// Multiples two numbers together
function multiply(a, b) {
    return a * b;
}

// Divide one number by another
function divide(a, b) {
    return a / b;
}