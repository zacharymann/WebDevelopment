// COMPARISON OPERATORS

// Greater Than (Example: &&)
//The AND logcal operators checks if ALL values are true
// All values need to be true for the ending result to be true
let andOne = true && false; //false
console.log(andOne); 

let andTwo = 5 < 6 && 10 >= 10; //true
//  let andTwo = true && true;
console.log(andTwo);

let andThree = "Inconceivable!".length === 14 && 10 === "10";
// let andThree = 14 === 14 && 10 === "10"
// let andThree = true && false;

let andFour = 2 > -10 && "Hi" !== "hi" && 2 != "2"; //false
// let andFour = true && true && false;
// let andFour = true && false; false

// OR (Example:||)
// Shift \ to create pipe character
// The OR logical operator checks if at least one value is TRUE
// Only ONE value needs to be true for the ending result to be true using OR
let orOne = true || false;
console.log(orOne);

let orTwo = 1 > 2 || "Jam" == "Jelly"; //false
// let orTWo = false || false;
console.log(orTwo);

let orThree = `Two` == 2 || `One`.length == 1 || false === false; //TRUE
// let orThree = false || false || true;
// let orThree = false || true;
console.log(orThree);

let orFour = "Four".length === 4 || "Hot Dog" === "Sandwich";
// let orFour = true || false;
console.log(orFour);

// Order or operators (AND then OR)
let order = "Mirror" === "Mirror" || "On" === "The" && "Wall" === "."; //true
// let order = true || false && false;
// let order = true || false;
console.log(order);

// NOT (Example !)
// ! is called a Bang in Javascript
let notOne = !true;
console.log(notOne);

let notTwo = !("Chuck Norris".length >= "John Wick".length); //false
// let notTwo = !(12 >= 9);
// let notTwo = !(true);
console.log(notTwo);

// AND, OR, & NOT
let andOrNot = !(1 < 3 || 6 === 4 && 2 > 2);
// let andOrNot = !( true|| false && false);
// let andOrNot = !( true || false);
// let andOrNot = !(true);
console.log(andOrNot);