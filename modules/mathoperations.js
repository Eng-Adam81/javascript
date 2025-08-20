// mathOperations.js

// Multiply function
export function multiply(a, b) {
    return a * b;
}

// Divide function
export function divide(a, b) {
    if (b === 0) {
        throw new Error("❌ Cannot divide by zero");
    }
    return a / b;
}

// Subtract function
export function subtract(a, b) {
    return a - b;
}
