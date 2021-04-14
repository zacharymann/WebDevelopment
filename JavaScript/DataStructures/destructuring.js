// DESTRUCTURING
// Destructuring unpacks/copies individual values/items from array, or properties (AKA Key value pairs) from objects, and sets them to variables

// DESTRUCTURING WITH ARRAYS
/*
Syntax Example

variableType [variableNames] = array;
*/

// Example 1
const hello = [
    `Hello, nice to meet you`,
    `Sup?`,
    `Bonjour`
];
//Copies the values from the hello array and set them to the following variable names
const [formalGreeting, informalGreeting, frenchGreeting] = hello;
// Display Multiple values in a single console log
console.log(formalGreeting);
// Destructuring does NOT remove the values it just copies them
console.log(hello);

// Example 2
const cities = [
    `New York`,
    `Los Angeles`,
    `Chicago`,
    `29 Palms`,
    `Scottsdale`
];
// ... in destructuring uses the "REST" operator. Sets the remaining values to a variable with the name specified
const [largestCity, secondLargest, ...otherCities] = cities;
console.log(largestCity);
console.log(secondLargest);
console.log(otherCities);

// DESTRUCTURING WITH OBJECTS
/*
Syntax example

variableType {keyNames} = object;
*/

const beautyAndTheBeast = {
    candle: `Lumeire`,
    clock: `Cogsworth`
};

// Example 1
// in destructuring with objects the keys are used as the variable names
const {candle, clock} = beautyAndTheBeast;
console.log(candle);
console.log(clock);

// Example 2
// Creating new variable names for the values that are copied/destructured from the beautyAndTheBeast object
const {candle: candlabra, clock :pendulumClock} = beautyAndTheBeast
console.log(candlabra);
console.log(pendulumClock);

// Example 3
const days = {
    first: `Sunday`,
    second: `Monday`,
    third: `Tuesday`
};
//... in destructuring uses the "REST" operator. Sets the remaining key value pairs to a variable name specified.
const {second, ...otherDays} = days;
console.log(second);
console.log(otherDays);