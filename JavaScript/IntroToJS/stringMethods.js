// STRING METHODS

// Basic Methods

// Trim (Removes empty/white space from both sides of a string)
let variableTrim = "  Hello there!   ";
console.log(variableTrim);
console.log(variableTrim.trim());
variableTrim = variableTrim.trim();
console.log(variableTrim);
console.log('  Yo');
console.log('  Yo'.trim());

// UPPERCASE and LOWERCASE (changed text to upper case or lower case)
let text = "These are words"
console.log(text.toUpperCase());
text.toUpperCase()
console.log(text.toLowerCase());

// Methods with Arguments
// Index of (Returns the index position)
let letters = "abc";
console.log(letters.indexOf("b"));
let fullName = "Justin Browning";
let nameIndex = fullName.indexOf("Browning")
console.log(nameIndex)

// REPLACE (Replaces content in a string)
let hi = "hello";
console.log(hi.replace("h", "b"));
console.log(hi.replace("hello", "hey"));

// REPEAT (Repeats content in a string)
let lesson = "String Methods";
console.log(lesson.repeat(2));

//  SLICE (Extracts part of a string)
// First numner is the starting index, and sexond is the SLICE/ENDING index (goes up to but does not include)
let breakTime = "Almost break time!";
console.log(breakTime.slice(0, 12));
// When using negative numbers it starts at the end of the string (Starting at 1 not 0)
console.log(breakTime.slice(-5, -1));


