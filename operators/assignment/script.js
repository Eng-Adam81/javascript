// Assignment Operators Examples in One Script

let a, b;

// = (Assignment)
a = 10;
b = 5;
console.log("= (Assignment): a = b =>", a = b); // a becomes 5

// += (Addition Assignment)
a = 10;
b = 5;
a += b; // a = a + b
console.log("+= (Addition): a += b =>", a); // 15

// -= (Subtraction Assignment)
a = 10;
b = 5;
a -= b; // a = a - b
console.log("-= (Subtraction): a -= b =>", a); // 5

// *= (Multiplication Assignment)
a = 10;
b = 5;
a *= b; // a = a * b
console.log("*= (Multiplication): a *= b =>", a); // 50

// /= (Division Assignment)
a = 10;
b = 5;
a /= b; // a = a / b
console.log("/= (Division): a /= b =>", a); // 2

// %= (Modulus Assignment)
a = 10;
b = 5;
a %= b; // a = a % b
console.log("%= (Modulus): a %= b =>", a); // 0

// **= (Exponentiation Assignment)
a = 2;
b = 3;
a **= b; // a = a ** b
console.log("**= (Exponentiation): a **= b =>", a); // 8

// <<= (Left Shift Assignment)
a = 5; // 0101 in binary
a <<= 1; // shift left by 1: 1010
console.log("<<= (Left Shift): a <<= 1 =>", a); // 10

// >>= (Right Shift Assignment)
a = 10; // 1010 in binary
a >>= 1; // shift right by 1: 0101
console.log(">>= (Right Shift): a >>= 1 =>", a); // 5

// &= (Bitwise AND Assignment)
a = 5; // 0101
b = 3; // 0011
a &= b; // a = a & b => 0001
console.log("&= (Bitwise AND): a &= b =>", a); // 1

// |= (Bitwise OR Assignment)
a = 5; // 0101
b = 3; // 0011
a |= b; // a = a | b => 0111
console.log("|= (Bitwise OR): a |= b =>", a); // 7

// ^= (Bitwise XOR Assignment)
a = 5; // 0101
b = 3; // 0011
a ^= b; // a = a ^ b => 0110
console.log("^= (Bitwise XOR): a ^= b =>", a); // 6
