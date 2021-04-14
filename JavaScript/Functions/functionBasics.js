// FUNCTION BASICS
// Functions are created lines of code that we can be used throughout a javascript file (AKA Resusable procedures)

// Yahtzee Dice Roll Function Example


// const die1 = math.floor(Math.random() * 6) + 1;
// const die2 = math.floor(Math.random() * 6) + 1;
// const die3 = math.floor(Math.random() * 6) + 1;
// const die4 = math.floor(Math.random() * 6) + 1;
// const die5 = math.floor(Math.random() * 6) + 1;

// function rollDie({
//     return Math.floor(Math.random() * 6) + 1;
// }

// const die1 = rollDie();
// const die2 = rollDie();
// const die3 = rollDie();
// const die4 = rollDie();
// const die5 = rollDie();

// console.log(die1);
// console.log(die2);
// console.log(die3);
// console.log(die4);
// console.log(die5);

/*
Syntax Example

To create a function...
function functionName() {
    CODE TO BE RUN GOES HERE;
}

To run/use a function... 
functionName();
*/
// EXAMPLE 1
// Craetes/saves the "scream" function
function scream() {
    console.log(`Do you like scary movies?`);
}
// Runs/Executes the "scream" function
scream();

console.log("=========");

// EXAMPLE 2
// A function can have multiple lines of code inside of it
function saw() {
    console.log(`Would you like to`);
    console.log(`play a game?`);
}
// A function can be run/executed multiple times in a file
saw();
saw();

console.log("=========");

// FUNCTIONS WITH PARAMETERS/ARGUMENTS
//Parameters are the names created when the function is created/declared
//Arguments are the values entered/passed in when running/exiting the function

/*
Syntax Example

To create a function with a parameter...
function functionName(parameter){
    CODE TO BE RUN GOES HERE AS WELL AS OUR PARAMETER;
    parameter
}

To run a function with a parameter...
functionName(argument);
*/

// EXAMPLE 1
function horrorMovieVillains(villain) {
    console.log(`${villain} is the scariest horror movie villain.`);
}
// `Michael Myers` is the argument that is passed into the function
horrorMovieVillains(`Michael Myers`);
horrorMovieVillains(`Pennywise`);
horrorMovieVillains(`Xenomorph`);

// EXAMPLE 2
function beetlejuice(name) {
    console.log(`${name}, ${name}, ${name}`);
}
beetlejuice(`Beetlejuice`);

// EXAMPLE 3
function theShining(word){
    const message = word.reverse();
    console.log(message);
}
// Parameters can accept all types of values (Strings, Numbers, and also data structures)
theShining(["R", "E", "D", "R", "U", "M"]);

console.log("=======");

//Example 4 
function villainWeapon(villain, weapon) {
    console.log(`${villain}'s weapon of choice is a ${weapon}`);
}
villainWeapon(`Jason`, `Machete`);
villainWeapon(`Leatherface`, `CHAINSAW`);
villainWeapon (`Chucky`, `Creative mind plus knives`);
villainWeapon (`Candyman`, `Hook and bees`);

console.log("=======");

// Example 5 
function sawMovies(numMovies, preferredNumMovies) {
    console.log(`They have made ${numMovies} Saw movies. That is ${numMovies -preferredNumMovies} too many. They should have just made ${preferredNumMovies}.`);
}
// Arguments can accept all types of values (Strings, Numnbers, Arrays, etc.)(NOTE: If a number is added into a string it will be converted into a string value)
sawMovies(9, 3); 

console.log("========");

// EXAMPLE 6
// A default argument can be set for a parameter
function horrorMovieQuote(quote = `Here's Johnny!`) {
    console.log(quote);
}
// Runs/executes the function with the default argument value
horrorMovieQuote();
// Runs/executes the function with the new argument which overrides the default argument value
horrorMovieQuote(`We have such sights to show you`);
horrorMovieQuote(`It rubs the lotion on it's skin`);
horrorMovieQuote(`Candycane`)

console.log("========");
// RETURN KEYWORD
// the RETURN keyword stops the execution of a function and returns a value if a value is present

/*
Syntax Example

function functionNAme() {
    return value;
}
*/
// Using a console log in a function displays the value in a terminal/console, but we are not able to capture or set that value to something. However, we can do that with the RETURN keyword.

// Example 1
function sixthSense(){
    return `I See Dead People`;
}
// Function returns a value and the value is displayed in th terminal/console
console.log(sixthSense());

const cole = sixthSense();
console.log(cole);

console.log("========");

// Example 2
function freddyKruger(){
    console.log(`Whatever You Do...`);
    return;
    console.log(`Don't Fall Asleep`);
  }
  // The 2nd console log does NOT run because it is on a line after the RETURN KEYWORD in the function
  freddyKruger();
  
  console.log("========");

  // Example 3
  // Functions can contain multiple RETURN keywords
  function aQuietPlace(sound) {
      if (sound === "") {
          return `You are safe`;
      }
      return `THEY HEAR YOU!!!`
  }
  const safe = aQuietPlace("");
  console.log(safe);
  const notSafe = aQuietPlace("Child's toy makes a noise")
  console.log(notSafe);

  console.log("========");

  // FUNCTION NESTING
  /*
Syntax Example

function functionNameOne(){
    CODE TO BE RUN GOES HERE (If necessary);
    function functionNameTwo(){
        CODE TO BE RUN GOES HERE;
    }
    functionNameTwo();
    CODE TO BE RUN GOES HERE (If necessary);
}

functionNameOne()
*/

// EXAMPLE 1
function dracula() {
    function draculaOne(){
        console.log(`I do not drink, wine.`);
    }
    // Nested function must be run/executed inside the other function when using function nesting
    draculaOne();
}
dracula();