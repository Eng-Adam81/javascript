// 1. Simple if statement
let temperature = 35;
if (temperature > 30) {
  console.log("1. It's a hot day!");
}

// 2. if-else statement
let age = 16;
if (age >= 18) {
  console.log("2. You are eligible to vote.");
} else {
  console.log("2. You are not eligible to vote.");
}

// 3. if-else if-else statement
let grade = 82;
if (grade >= 90) {
  console.log("3. Grade: A");
} else if (grade >= 80) {
  console.log("3. Grade: B");
} else if (grade >= 70) {
  console.log("3. Grade: C");
} else {
  console.log("3. Grade: F");
}

// 4. Nested if
let isStudent = true;
let score = 75;
if (isStudent) {
  if (score >= 70) {
    console.log("4. You passed the test!");
  } else {
    console.log("4. You failed the test.");
  }
}

// 5. Switch statement
let fruit = "mango";
switch (fruit) {
  case "apple":
    console.log("5. Apples are red or green.");
    break;
  case "banana":
    console.log("5. Bananas are yellow.");
    break;
  case "orange":
    console.log("5. Oranges are orange!");
    break;
  default:
    console.log("5. Unknown fruit.");
}

// 6. Ternary operator
let isLoggedIn = false;
let message = isLoggedIn ? "6. Welcome back!" : "6. Please log in.";
console.log(message);

// 7. Logical AND (&&)
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
  console.log("7. Access granted.");
} else {
  console.log("7. Access denied.");
}

// 8. Logical OR (||)
let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("8. It's the weekend!");
} else {
  console.log("8. It's a weekday.");
}

// 9. Check for undefined
let userEmail;
if (userEmail === undefined) {
  console.log("9. No email provided.");
} else {
  console.log("9. Email:", userEmail);
}

// 10. Truthy / Falsy check
let cartItems = 0;
if (cartItems) {
  console.log("10. You have items in your cart.");
} else {
  console.log("10. Your cart is empty.");
}
