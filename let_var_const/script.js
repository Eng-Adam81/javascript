// Example of var
console.log("=== var Example ===");

var name = "Ali";
console.log("Initial var value:", name); // Outputs: Ali

var name = "Omar"; // var allows redeclaration
console.log("Redeclared var value:", name); // Outputs: Omar

// var is function-scoped or globally scoped
function varScopeExample() {
  var age = 30;
  if (true) {
    var age = 40; // same variable, modified inside the block
    console.log("Inside if block:", age); // Outputs: 40
  }
  console.log("Outside if block:", age); // Outputs: 40
}
varScopeExample();


// Example of let
console.log("\n=== let Example ===");

let city = "Mogadishu";
console.log("Initial let value:", city); // Outputs: Mogadishu

// let city = "Hargeisa"; // ❌ This will throw an error (no redeclaration in the same scope)

city = "Hargeisa"; // ✅ But reassignment is allowed
console.log("Reassigned let value:", city); // Outputs: Hargeisa

// let is block-scoped
function letScopeExample() {
  let price = 100;
  if (true) {
    let price = 200; // different variable, block-scoped
    console.log("Inside if block:", price); // Outputs: 200
  }
  console.log("Outside if block:", price); // Outputs: 100
}
letScopeExample();


// Example of const
console.log("\n=== const Example ===");

const country = "Somalia";
console.log("Initial const value:", country); // Outputs: Somalia

// country = "Kenya"; // ❌ Error: can't reassign a const variable

// const must be initialized when declared
// const language; // ❌ Error: Missing initializer

// const with objects (can modify properties but not reassign)
const person = { name: "Amina", age: 25 };
console.log("Initial person:", person);

person.age = 26; // ✅ Allowed: modifying property
console.log("Modified person:", person);

// person = { name: "Layla", age: 30 }; // ❌ Error: can't reassign the const object

