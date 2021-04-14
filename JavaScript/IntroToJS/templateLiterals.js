// TEMPLATE LITERALS
//New way to create and concatenate strings

//Example of a Template Literal
// Need to use backticks ('') instead of quotes
const example ='This is a Template Literal';
console.log(example);

// Template Literals recognize line breaks
//  Example of line break in a regulat string
const linesOne = "First line\nSecond Line";
console.log(linesOne);
// const linesOne = "First Line
// Second Line"

// Example of line break in a Template Literal
const linesTwo = `First line 
Second line`;
console.log(linesTwo);

// Example of string concatenation
const myName = "Matthew" + " " + `Riley`;
console.log(myName);

// Example of Expressive Interpolation (AKA String Concatenation) with a template literal
// Uses ${} instead of a plus sign +
let fullName = `Matt${" "} Riley`;
console.log(fullName);
const middleName = `John`;
fullName = `Matthew ${middleName} Riley`
console.log(fullName);

let nameAge = `My name is Matt and I am ${2021-1987} years old`
console.log(nameAge);
let currentYear = 2021;
const birthYear = 1987;
nameAge = `My name is Matthew and I am ${currentYear - birthYear} years old`
console.log(nameAge);