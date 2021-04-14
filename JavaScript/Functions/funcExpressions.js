// FUNCTION EXPRESSIONS 
// Creating a function and storing it to a variable

/*
Syntax Example

variableType variableName = function() {
    CODE TO BE RUN GOES HERE;
}
Can also be done with an Arrow Function set as a value...
variableType variableName = () => {
    CODE TO BE RUN GOES HERE;
}
*/


// EXAMPLE 1
const theFuncExpress = function(){
    console.log(`Hop on board the Func Express`);
    console.log(`This is a Function Expression`);
}
theFuncExpress();

console.log("=========");

// EXAMPLE 2A
// Can run a function declaration (or Arrow Function) on a line that precedes where the function is created, because function declaration are hoisted to the beginning of the JavaScript file
funcOne();

function funcOne(){
    console.log(`Hello`);
}

// EXAMPLE 2B
//Can NOT run a Function Expression on a line that precedes where the function is created, because Function Expressions are NOT Hoisted to the beginng of a Javascript file.
// funcTwo();
const funcTwo = function() {
    console.log(`Not hoisted`);
}


// EXAMPLE 3
// Function Expression that uses and Arrow Function as the function value set to the funcThree variable
const funcThree = () => {
    console.log(`End of lesson`);
}
funcThree()