// JavaScript Logical Operators with Explanations

let x = true;
let y = false;

// 1. Logical AND (&&)
// Returns true only if both operands are true
console.log("true && true =", true && true);   // true
console.log("true && false =", true && false); // false
console.log("x && y =", x && y);               // false (true && false)

// 2. Logical OR (||)
// Returns true if at least one operand is true
console.log("true || false =", true || false); // true
console.log("false || false =", false || false); // false
console.log("x || y =", x || y);               // true (true || false)

// 3. Logical NOT (!)
// Reverses the boolean value
console.log("!true =", !true);   // false
console.log("!false =", !false); // true
console.log("!x =", !x);         // false (x is true)
console.log("!y =", !y);         // true (y is false)

// 4. Combining Logical Operators
let a = 5;
let b = 10;

console.log("(a < b) && (b < 20) =", (a < b) && (b < 20)); // true && true => true
console.log("(a > b) || (b === 10) =", (a > b) || (b === 10)); // false || true => true
console.log("!((a + b) > 20) =", !((a + b) > 20)); // !(15 > 20) => !false => true

// 5. Short-circuit behavior
console.log("false && anything =", false && "This won't run"); // false
console.log("true || anything =", true || "This won't run");   // true
