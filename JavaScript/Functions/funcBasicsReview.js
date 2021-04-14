// FUNCTION BASICS REVIEW
// A JavaScript function is a block of code designed to perform a specific task

// Example 1
// Creates the phineasFerb function
function phineasFerb(){
  console.log(`Hey Ferb, I know what we're gonna do today!`);
}
// Runs the phineasFerb function
phineasFerb();

console.log("========");

// Example 2
// A function can have multiple lines inside of it
function perry(){
  console.log(`Hey...`);
  console.log(`where's Perry?`);
}
// A function can be run multiple times in a file
perry();
perry();

console.log("========");

// PARAMETERS & ARGUMENTS

// Example 1
// "char" is the parameter
function bestCharacter(char){
  console.log(`${char} is the best character on Phineas and Ferb`);
}
// `Dr. Heinz Doofenshmirtz` is the argument
bestCharacter(`Dr. Heinz Doofenshmirtz`);
bestCharacter(`Buford Van Stomm`);
bestCharacter(`Norm`);
// Passing in a variable as an argument value
const monogram = `Major Francis Monogram`;
bestCharacter(monogram);

console.log("=========");

// Example 2
// A single parameter can be used multiple times in a function
function doofAndPerry(adjective){
  console.log(`Oh Perry the Platypus, how un${adjective} and by un${adjective} I mean COMPLETELY ${adjective}!`);
}
doofAndPerry("expected");

// Example 3
function openingSong(num){
  console.log(`There's ${num} days of summer vacation...`);
}
// Parameters can accept all types of values (Strings, numbers, etc...) (NOTE: When concatenating a number value to a string the number will be changed to a string value.)
openingSong("104");
openingSong(104);

console.log("========");

// Example 4
// Functions can have multiple parameters
function doof(name, animal){
  console.log(`Curse you, ${name} the ${animal}!`);
}
doof(`Perry`, `Platypus`);

console.log("=======");

// Example 5
// A default argument can be set for a parameter
function invention(inator = `Bread`){
  console.log(`Behold my new evil scheme, the ${inator}-Inator!`);
}
// Runs/executes the function with the default arugment value
invention();
// Runs/executes the function with the `Mustache` arugment value
invention(`Mustache`);

console.log("===========");

// RETURN KEYWORD

// Example 1
// The RETURN keyword in a function will return the value that follows it when the function is run
function isabella(){
  return `What'cha Doin'?`;
}
console.log(isabella());
const wD = isabella();
console.log(wD);

console.log("=========");

// Example 2
// Functions will run what follows the return keyword on the line the return is on. However, any lines following the line with the return will not be run.
function perryTheme(){
  console.log(`Dooby dooby doo-bah`);
  return;
  console.log(`Perry!`);
}
perryTheme();

console.log("=======");

// Example 3
function busted(momFindsOut){
  if (momFindsOut){
    return `In Trouble`;
  }
  return `Not In Trouble`;
}
console.log(busted(true));
console.log(busted(false));

console.log("===========");

// FUNCTION NESTING

// Example 1
function findPerry(){
  function foundPerry(){
    console.log(`Oh, there you are Perry.`);
  }
  // Nested functions must called/run inside the outer function
  foundPerry();
}
findPerry();
