//CLASSES
// Similiar to Contructor Functions, Classes work as a blueprint/template for creating multiple objects of the same type/kind. However, they allow us to create Prototypes inside the class.

/*
Syntax Example

class ClassName {
  constructor(parameters){
    this.parameterName = parameterName;
  }
  methodName(){
    CODE TO BE RUN GOES HERE;
  }
}
*/

// Examples
class HolidayCharacter{
    constructor(name, home, holiday){
        this.name = name;
        this.home = home;
        this.holiday = holiday;
        // Example of a set Property Value
        this.character = true;
    }
    // Prototype Method 1
    hello(){
        return `Hello`;
    }
    // Prototype Method 2
    bio(){
        return `Hello, I am the ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!`;
    }
    // The STATIC keyword must be used when creating a static method. Static methods can be run without creating a new object.
    static staticMeth(){
        return `This is a static method`;
    }
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

//Static method run without creating an object
console.log(HolidayCharacter.staticMeth());