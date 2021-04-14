// FUNCTION ARRAY METHODS (ForEach, Map & Filter)
// Array methods that require a function to be passed in as an argument

// FOR EACH
// Calls/runs a function for each item in the array

const friends = [
    `Chandler Bing`,
    `Rachel Green`,
    `Monica Geller`,
    `Ross Geller`,
    `Joey Tribbiani`,
    `Phoebe Buffay`
];

// Example 1
names = (n) => {
    console.log(n);
  }
  // Runs the names function on each item in the "friends" array using the array item value as the arugment for the "p" parameter (NOTE: Function must have a parameter to plug the value of each array item into).
  friends.forEach(names);
  
  console.log("========");
  
  // Example 2
  // Runs the anonymous arrow function on each item in the "friends" array (NOTE: You can create a new function instead of passing in a precreated function)
  friends.forEach(n => console.log(n.toUpperCase()));

  console.log("========");

// MAP 
// Creates a new array with the returned values from calling/ running a function for every array item. (NOTE: The map method does NOT alter the original array)

const actors = [
    {first: `Jennifer`, last: `Aniston`},
  {first: `Matthew`, last: `Perry`},
  {first: `Courteney`, last: `Cox`},
  {first: `David`, last: `Schwimmer`},
  {first: `Matt`, last: `LeBlanc`},
  {first: `Lisa`, last: `Kudrow`}
];

// EXAMPLE 1
function realNames(a) {
    return `${a.first} ${a.last}`
}
// Creates a new array and sets the value of that new array to the "firstAndLast" variable
const firstAndLast = actors.map(realNames);
console.log(firstAndLast);

console.log("=======");

// EXAMPLE 2
// Using an anonymous arrow function as the argument for the map method
const friendsInitials = actors.map(i => `${i.first[0]} ${i.last[0]}`);
console.log(friendsInitials);

// FILTER
// Creates an array filled with all array items that pass a test that is provided as a function. (NOTE: The Filter method does NOT alter the original array).

console.log("========");

// Example 1
const friendsSeasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findSeasons(season) {
    return season === 4 || season === 5
}

const bestSeasons = friendsSeasons.filter(findSeasons);
console.log(bestSeasons);

// Example 2 
const themeSong = [
    `I'll be there for you`,
    `When the rain starts to pour`,
    `I'll be there for you`,
    `Like I've been there before`,
    `I'll be there for you`,
    `Cause you're there for me too`
  ];
  // Using an anonymous function as the argument for the filter method
  const lyrics = themeSong.filter(line => line === `I'll be there for you`)
  console.log(lyrics);