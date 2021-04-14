// FUNCTION EXPRESSION REVIEW
// Creating a function and storing it to a variable

// Example 1
const funcOne = function(){
  console.log(`Function Expression`);
}
funcOne();

// Example 2
const arrowFunc = () => console.log(`Function Expression using an anonymous Arrow Funcion`);
arrowFunc();

// Example 3
// noHoist();
// Can NOT call/run a Function Expression on a line that precees the creation of the function (NOTE: Function Expressions are NOT hoisted like other function types are.)
const noHoist = function(){
  console.log(`Hello`);
}
noHoist(); // OK

