// OBJECT ORIENTED PROGRAMMING
// OOP is a style of program that is centered around objects

// Example of NON OOP (Variables and Functions)
// Variables
const characterName = `Easter Bunny`;
const home = `Easter Island`;
const holiday = `Easter`;
// Functions
hello = () => `Hello`;
bio = () => {
    return `Hello, I am the ${characterName} and ${home} is where I live. Also, my holiday is ${holiday}!`;
}
console.log(characterName);
console.log(hello());
console.log(bio());

console.log("========");

// Examples of OOP (Properties and Methods)
const easterBunny = {
    // Properties
    characterName: `Easter Bunny`,
    home: `Easter Island`,
    holiday: `Easter`,
    // Methods (Cannot use Arrow Functions for Methods)
    hello: function(){
      return `Hello`;
    },
    bio: function(){
      return `Hello, I am the ${characterName} and ${home} is where I live. Also, my holiday is ${holiday}!`;
    }
  }

  console.log(easterBunny.characterName);
  console.log(easterBunny.hello());
  console.log(easterBunny.bio());

  // Example 2
  const leprechaun = {
    // Properties
    characterName: `Leprechaun`,
    home: `Ireland`,
    holiday: `Saint Patrick's Day`,
    // Methods (Cannot use Arrow Functions for Methods)
    hello: function(){
      return `Hello`;
    },
    bio: function(){
      return `Hello, I am the ${this.characterName} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!`;
    }
  }
  console.log(leprechaun.characterName);
  console.log(leprechaun.hello());
  console.log(leprechaun.bio());
