// Original array
var students = [ "Ayman", "Hidaya", "Bilal", "Roobo", "Rihaan", "Mohamed" ];

// Example 1: Copy first 3 elements
var firstThree = students.slice(0, 3);
console.log("First three students:", firstThree); 
// Output: ["Ayman", "Hidaya", "Bilal"]

// Example 2: Copy last 3 elements
var lastThree = students.slice(-3);
console.log("Last three students:", lastThree); 
// Output: ["Roobo", "Rihaan", "Mohamed"]

// Example 3: Copy middle elements (index 2 to 3)
var middle = students.slice(2, 4);
console.log("Middle students:", middle); 
// Output: ["Bilal", "Roobo"]

// Example 4: Copy entire array
var allStudents = students.slice();
console.log("All students copied:", allStudents); 
// Output: ["Ayman", "Hidaya", "Bilal", "Roobo", "Rihaan", "Mohamed"]

// Example 5: Copy from second student to end
var fromSecond = students.slice(1);
console.log("From second student to end:", fromSecond); 
// Output: ["Hidaya", "Bilal", "Roobo", "Rihaan", "Mohamed"]

