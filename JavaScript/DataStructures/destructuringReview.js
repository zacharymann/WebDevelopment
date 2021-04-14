// DESTRUCTURING REVIEW
// Destructuring copies values from arrays or objects and sets them to variables


// ARRAYS
/*
Syntax

variableType [variableNames] = array;
*/

// Example 1
const bondMovies = [
    `Goldfinger`,
    `On Her Majesty's Secret Service`,
    'Dr. No'
];
const [movie1, movie2, movie3] = bondMovies;
console.log(movie1, movie2, movie3); // Displays each item value from the "bondMovies" array which are now set as the values for the movie1, movie2, movie3 variables

// Example 2
const bondMovies1 = [
    `Moonraker`,
    `Thunderball`,
    `Diamonds are Forever`
];

const [movie4, ...otherMovies] = bondMovies1;
console.log(movie4); // Display the string value of `Moonraker
console.log(otherMovies); // Display an array value with `Thunderball` and `Diamonds are Forever` as the values for the items


// OBJECTS
/*
Syntax

variableType {key} = object;
*/

const austinPowersMovies = {
    internationalManOfMystery: 1997,
    // theSpyWhoShaggedMe: 1999,
    goldmember: 2002
  };
  
  // Example 1
  // Using the keynames as the variable names for the corresponding value of each key in the "austinPowersMovies" object (NOTE: Order is not important in object destructuring like it is in array destructuring)
  const {theSpyWhoShaggedMe, internationalManOfMystery, goldmember} = austinPowersMovies;
  console.log(theSpyWhoShaggedMe);
  console.log(internationalManOfMystery);
  console.log(goldmember);

// Example 2
// Creating new variable names for the values destructured from the "austinPowersMovies" object
const {internationalManOfMystery: aP1, theSpyWhoShaggedMe: aP2, goldmember: aP3} = austinPowersMovies;
console.log(aP1);
console.log(aP2);
console.log(aP3);

// Example 3
const {internationalManOfMystery: aP, ...aPMovies} = austinPowersMovies;
console.log(aP);// Displays the value of 1997
console.log(aPMovies);// Displays an object with the following key value pairs (theSpyWhoShaggedMe: 1999, goldmember: 2002)