// OBJECTS (On Object is a data structure that can store multiple values. Objects stores data/values in Properties which are key value pairs.)

// Object Syntax
// {key: value}

// Object Example 1
const user = { firstName: "Matthew", lastName: "Riley" };

// Object Example 2
const userInfo = {
  username: "zachmann",
  firstName: "Zachary",
  lastName: "Mann",
  age: 28,
  loggedIn: true
};

// ACCESSING VALUE IN AN OBJECT
// Using Square Brackets []
console.log(userInfo["username"]);
console.log(userInfo["age"]);

// Using a Dot . 
console.log(userInfo.firstName);
console.log(userInfo.loggedIn);

// MODIFYING/ADDING WITH AN OBJECT
const th = {
    firstName: "Tom",
    lasName: "Hanks",
    age: 64,
    AmazingActor: true,
    favoriteMovie: "Saving Private Ryan"
}

// MODIFYING
th["favoriteMovie"] = "Forrest Gump";
console.log(th["favoriteMovie"]);
// console.log(th);
th.favoriteMovie = "Toy Story";
console.log(th.favoriteMovie);
// console.log(th);

// ADDING
th["highestGrossingMovie"] = "Forrest Gump"
console.log(th);
th.highestGrossingAnimatedMovie = "Toy Story 3";
console.log(th);