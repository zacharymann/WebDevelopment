// SUBCLASSES
// Subclasses are children of the parent class they are EXTENDED from. Subclasses are able to access the properties and methods from their parent class.

/*
Syntax Example

class ChildClassName extends ParentClassName {
  constructor(parameters){
    super(parameters);
    this.parameterName = parameterName;
  }
}
*/

// EXAMPLES
// Parent Class
class HolidayCharacter {
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
  
// Subclass (AKA Child Class)
// The EXTENDS keyword is used to create a class as a subclass (AKA Child Class) of a parent class
class HolidayCharacterDetails extends HolidayCharacter {
    constructor(name, home, holiday, holidayDate){
        // The SUPER keyword is used to call functions on a parent object (AKA gets the properties/methods)
      super(name, home, holiday)
      this.holidayDate = holidayDate;
    }
  }
  const leprechaun = new HolidayCharacterDetails(`Leprechaun`, `Ireland`, `Saint Patrick's Day`, `March 17th`);

  console.log(leprechaun);
  console.log(leprechaun.character);
  console.log(leprechaun.holidayDate);
  // Still able to acces the prototype method that is in the parent class
  console.log(leprechaun.bio());
  // Static method run without creating an object using the subclass name
  console.log(HolidayCharacterDetails.staticMeth());