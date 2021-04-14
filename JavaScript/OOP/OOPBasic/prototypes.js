//PROTOTYPES
// PROTOTYPES
// Creating methods in Constructor Functions allows for methods to be available to all instatiated/created objects. The difference with Prototypes is the method is only stored once, but every created object still has access to it. (NOTE: Properties can also be used not just methods)

/*
ConstructorName.prototype.methodName = function(){
    CODE TO BE RUN GOES HERE;
}
*/

// EXAMPLES
function HolidayCharacter(name, home, holiday){
    this.name = name;
    this.home = home;
    this.holiday = holiday;
}

//Prototype Example 1
HolidayCharacter.prototype.hello = function(){
    return `Hello`;
}

// Prototype Example 2
HolidayCharacter.prototype.bio = function () {
    return `Hello, I am the ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!`;
}

// Example 1
const easterBunny = new HolidayCharacter(`Easter Bunny`, `Easter Island`, `Easter`);
console.log(easterBunny);
console.log(easterBunny.hello());
console.log(easterBunny.bio());

// Example 2
const leprechaun = new HolidayCharacter(`Leprechaun`, `Ireland`, `Saint Patrick's Day`);

console.log(leprechaun);
console.log(leprechaun.hello());
console.log(leprechaun.bio());