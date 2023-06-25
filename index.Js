// Function to update the calculator display


function updateDisplay(value) {
 document.getElementById("d").value = value;
}

// Function to perform mathematical operations
function math(operation) {
 var displayValue = document.getElementById("d").value;
 displayValue += operation;
 updateDisplay(displayValue);
}

// Function to clear the calculator display
function c(value) {
 updateDisplay(value);
}

// Function to remove the last character from the display
function back() {
 var displayValue = document.getElementById("d").value;
 displayValue = displayValue.slice(0, -1);
 updateDisplay(displayValue);
}

// Function to evaluate the mathematical expression
function e() {
 var displayValue = document.getElementById("d").value;
 var result = eval(displayValue);
 updateDisplay(result);
}

function calculateSquareRoot() {
 var dispalyValue = document.getElementById("d").value;
 var squareRoot = Math.sqrt(dispalyValue);
 updateDisplay(squareRoot);
}

function calculatePercent() {
 var dispalyValue = document.getElementById("d").value;
 var result = (dispalyValue) * 100;
 updateDisplay(result);
}

// &#8592; 