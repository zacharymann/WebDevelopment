// SCOPE
// Scope determines the accessibility (AKA Visibility) of variables
// Where we create a variable determines where it can be used/called

// FUNCTION SCOPE (Each function has it's own scope)

// Example 1
const location = `Scranton, PA`;
function dunderMifflin() {
    const regionalManager = `Michael Scott`;
    console.log(regionalManager); //This is OK because the console log is also inside the function where the regionalManager variable was created (The regionalManager variable is scoped to the dunderMifflin function)
}
dunderMifflin();
console.log(location); // This is OK becasue the location variable is scoped to the entire Javascript file
// NOT okay because the regionalManager variable was created inside the dunderMifflin function so it is scoped to that function. There we cannot access it outside the function.
// console.log(regionalManager);

console.log("========");

// EXAMPLE 2
let dwight = `Assistant to the Regional Manager`;
function promotion() {
    dwight = `Assistant Regional Manager`;
}
console.log(dwight); // Displays the initial value of the Dwight variable because the function has NOT been run/ executed yet
promotion();
console.log(dwight); // Displays the updated calue of the dwight variable because the function was run/executed. Also, it is able to access the new value because the variable was created/initialized outside of the function

console.log("========");

// Example 3 
let declare = "";
function bankruptcy() {
    let declare = `I... DECLARE... BANKRUPTCY!!!`;
    console.log(declare);  // First, checks for a variable with the name of declare inside the function/scope, then outside of the function/scope if one inside cannot be found.
}
bankruptcy();
console.log(declare); // Will only display the value of the declare variable outside of the bankruptcy function. (This is because the variable in the function is creating a new/different variable, NOT updating the value of the first one).

console.log("========");

// BLOCK SCOPE (CONDITIONAL STATEMENTS AND LOOPS AND HAVE BLOCK SCOPE)
// Conditional Statements Example
const seasons = 9;
if (seasons === 9) {
    const episodes = 201;
}
// OK becasue the seasons variable is scoped to the entire Javascript file (AKA Globally Scoped)
console.log(seasons);
//NOT OK because the episodes variable is scoped to the conditional block
// console.log(episodes);

console.log("========");

// Loops Example:
for (i = 1; i <= 3; i++) {
    // You can create variables in a loop without getting an error because it will be initialized/declared each time through the loop (AKA it is like being created for the first time each time)
    const fireDrill = `What's the procedure everyone?`;
    console.log(fireDrill); //
}
// NOT OKAY, because the fireDrill is scoped to the loop block
// console.log(fireDrill);

// LEXICAL SCOPE
// Lexical Scope is the ability for function scope to access variables from the "parent" scope (NOTE: The "parent" scope can be another function or the entire JavaScript file)

// Nested Functions Example
function question() {
    const fearLoved = `Would I rather be feared or loved?`;
    function answer() {
      const easyBoth = `Easy. Both. I want people to be afraid of how much they love me`;
      console.log(easyBoth);
      // OK because the answer function is inside the scope of the question function which is where the fearLoved variable is created in
      console.log(fearLoved);
    }
    // Must run/execute the answer function for it to be run with running/executing the question function
    answer();
    // NOT OK, because the easyBoth variable is scoped to the nested function (AKA The answer function)
    // console.log(easyBoth);
  }
  question();
  
  // NOT OKAY because the answer function is scoped to the scope of the question function
  // answer();
  
  