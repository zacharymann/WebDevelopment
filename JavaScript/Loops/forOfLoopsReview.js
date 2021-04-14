// FOR OF LOOP REVIEW
// A For Of Loop loops through the values of an iterable value (AKA Array or String)

/*
Syntax Example

for (indexName of iterableValue){
  CODE TO BE RUN GOES HERE;
}
*/

// Example 1
const bond = `Bond. James Bond`;

for (letter of bond){
    //Displays a letter/character from the "bond" string twice for each time through the loop
  console.log(letter);
  console.log(letter);
}

console.log("==========");

// Example 2
const jamesBondActors = [
    `Sean Connery`,
    `Pierce Brosnan`,
    `Daniel Craig`,
    `George Lazenby`
];

for (actor of jamesBondActors) {
    console.log(actor); //Displays an array item/index value from the "jamesBondActors" array each time through the loop
}

console.log("==========");

// Example 3
// A string or array value can be used in a For Of Loop instead of a variable
for (char of "007"){
    console.log(char); // Displays a character fro the "007" string each time through the loop
}

//Example 4
const nesting[
    [
        `Index 0 in the 1st nested array`,
        `Index 1 in the 1st nested array`
    ],
    [
        `Index 0 in the 2nd nested array`,
        `Index 1 in the 2nd nested array`,
    ]
];

for (array of nesting){
    // console.log(array);
    for (string of array){
      console.log(string); // Displays an array item value from the arrays are nested in the "nesting" array each time through the nested for of loop. (NOTE: This nested loop runs twice each time the outer/parent loop runs, which is also twice)
    }
  }
  
  