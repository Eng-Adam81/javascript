let a = 10;
let b = 5;
let c = '10';

// Equal to (==)
console.log(a == c);   // true (value is equal, type is not)

// Strict equal to (===)
console.log(a === c);  // false (value is equal, type is different)

// Not equal to (!=)
console.log(a != b);   // true

// Strict not equal to (!==)
console.log(a !== c);  // true

// Greater than (>)
console.log(a > b);    // true

// Less than (<)
console.log(a < b);    // false

// Greater than or equal to (>=)
console.log(a >= 10);  // true

// Less than or equal to (<=)
console.log(b <= 5);   // true

// Comparison with boolean
console.log(true == 1);   // true
console.log(false === 0); // false

// Comparing strings
console.log('apple' < 'banana'); // true (lexicographical order)
