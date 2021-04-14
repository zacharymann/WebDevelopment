// LOGICAL OPERATORS REVIEW
// Logical operators are used to test for true and false

// AND (&&)
// Returns result/value of true when ALL conditions are true. If at least one condition is false, then it returns result/value of false.

// Example 1
console.log(true && true); // true

// Example 2
console.log(true && false); // false

// Example 3
console.log(true && false && true); // false

// Example 4
const andFour = 7 < 8 && 1 == "1";
// const andFour = true && true;
console.log(andFour);

// Example 5
const andFive = `Hello`.length === 5 && 2 >= 1.999 && "Hi".length == "2";
// const andFive = 5 === 5 && 2 >= 1.999 && 2 == "2";
// const andFive = true && true && true;
console.log(andFive);

// OR (||)
// Returns result/value of false when ALL conditions are false. If at least one condition is true, then it returns result/value of true

// Example 1
console.log(false || true); // true

// Example 2
console.log(false || false); // true

// Example 3
console.log(1 < 4 || "Hello" == "Hi"); // true
// console.log(true || false);

// Example 4
const orFour = 1 === '1' || 10 < 9.898 || "chicken".length === "matthew".length; // true
// const orFour = false || false || true;
console.log(orFour);

// NOT (!)
// The NOT logical operator reverses the true/false outcome of the expression/condition that immediately follows

// Example 1
console.log(!true); // false

// Example 2
console.log(!(1 < -1)); // true
// console.log(!(false));

// AND, OR, NOT
// Order of operations (AND before OR)
let andOrNot = "And".length == "3" || !(true) && 6 === 6;
andOrNot = 3 == "3" || !(true) && 6 === 6
andOrNot = true || false && true;
andOrNot = true || false
console.log(andOrNot);
