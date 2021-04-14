// ARROW FUNCTION REVIEW

/*
Syntax Example:

functionName = () => {
    CODE TO BE RUN GOES HERE;
}
*/

// Example 1
themeSong = () => {
    console.log(`Just sit right back and you'll hear a tale`);
}

themeSong(); //Displays "Just sit right back and you'll hear a tale"

console.log("========");

// Example 2
// Parenthesis can be used in an arrow function to return a value without using the RETURN Keyword. (NOTE: Semicolon at the of the line is NOT to be used in this case)
boat = () => (
    `The SS Minnow`

)
const boatName = boat(); // Returns the value of `The SS Minnow`
console.log(boatName);

// EXAMPLE 3
// Returns the value of what is after the arrow " => "
crew = () => `Gilligan, Skipper, Ginger, Mr. Howell, Mrs. Howell, The Professor, Mary Ann`;
const names = crew();
console.log(names);

console.log("=========");

// Example 4
// Parentheses are not needed when creating an arrow function with a single parameter
tourLength = num => {
    console.log(`${num} hour tour`);
}
tourLength(3);

//Example 5
lyrics = (one, two, three) => {
    console.log(`No ${one}, no ${two}, no ${three}, Not a single luxury`);
}
lyrics(`hope`, `mercy`, `justice`)
lyrics(`phone`, `lights`, `motor car`)