// OTHER ARRAY METHODS
// Concat (Concatenates two arrays into one array)
const theHobbit = [
    "An Unexpected Journey",
    "The Desoloation of Smaug",
    "The Battle of the Five Armies"
  ];
const lotr = [
    "The Fellowship of the Ring",
    "The Two Towers",
    "Return of the King"
];
const allLOTR = theHobbit.concat(lotr);
console.log(allLOTR);

//INDEXOF (Returns the array index position of the value entered)
// Example of indexOf on a string
console.log("Sauron".indexOf("S"));
//Example of indexOf on an array
console.log(allLOTR.indexOf("The Two Towers"));

// Includes (Determines if an array includes a specific value). Returns a boolean value (aka true or false)
console.log(allLOTR.includes("The Two Towers")); // true
console.log(allLOTR.includes("Sauron")); // false

// REVERSE (Reverses the order of the items in the array. Sets the new order as the new value of the array)
allLOTR.reverse();
console.log(allLOTR);

// SLICE (Returns a specified selection of a String or Array) First number determines the starting index. The second number determines the stopping point. Stops before second number/index (AKA Does not include a second number))
console.log("Gandalf".slice(0, 4));
// EXample of a Slice array
console.log(allLOTR);
// If a ssecond number is not included the slice will return the item at the starting index and all items that follow
console.log(allLOTR.slice(3));
// console.log(allLOTR.slice(3, 6));

// Splice (Removes, Replaces, or adds items to an array.)
// First position determines the starting index. Second position determines how many array items to remove. Third position determines the values being set for that/those position(s)
// Syntax for Splice
// array.splice(startingIndex, numberofIndexesToRemove, addedItemValues)

const hobbits = ["Merry", "Frodo", "Pippen", "Sam"];

// Removing with Splice
hobbits.splice(2, 2);
console.log(hobbits);

// Replacing with Splice
hobbits.splice(1, 1, "Bilbo", "Smeagol");
console.log(hobbits);

// Adding with Splice
hobbits.splice(3, 0, "Deagol");
console.log(hobbits);

// This can be achieved with "unshift" method as well
hobbits.splice(0, 0, "Scooby-Doo")
console.log(hobbits);