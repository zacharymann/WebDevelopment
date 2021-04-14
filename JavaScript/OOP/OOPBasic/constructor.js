// CONSTRUCTOR FUNCTIONS
// Constructor Functions work as a blueprint/template for creating multiple objects of the same type/kind

/*
Syntax Example

function ConstructorName(parameters){
  this.parameterName = parameterName;
}
*/

// Examples
function HolidayCharacter(name, home, holiday){
    // Properties
    this.name = name;
    this.home = home;
    this.holiday = holiday;
    // Methods
    this.hello = function(){
      return `Hello`;
    },
    this.bio = function(){
      return `Hello, I am the ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!`;
    }
  }
  
  // Instatiate/Create a new Object
  // Example 1
  const easterBunny = new HolidayCharacter(`Easter Bunny`, `Easter Island`, `Easter`);
  
  console.log(easterBunny);
  console.log(easterBunny.home);
  console.log(easterBunny.bio());

  // Example 2
  const leprechaun = new HolidayCharacter(`Leprechaun`, `Ireland`, `Saint Patrick's Day`)

  console.log(leprechaun);
  console.log(leprechaun.home);
  console.log(leprechaun.bio());