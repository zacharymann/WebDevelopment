// ARRAY BASICS
// An arrary is a data structure that can store multiple values

// This is an empty array
let cryptids = []
console.log(cryptids);

// This is an array of strings
cryptids = ["Bigfoot", "Hopkinsville Goblin", "Lochness Monster"];
console.log(cryptids);

// Length (Returns the ammount of items in and array)
// String Example
console.log("Moth Man".length);
// Array Example
console.log(cryptids.length);

// Index
// String Example
console.log("Chupacabra"[2]);
// Array Example
console.log(cryptids[1]);

//  Changing an item in an Array using Index
cryptids[1] = "Skunk Ape";
console.log(cryptids);

// Adding and item to an array using Index
// cryptids[3]
cryptids[cryptids.length] = "Jersey Devil"
console.log(cryptids);

// This is an array of different value types
const randomArray = [10, true, "Champ", "Banshee"];