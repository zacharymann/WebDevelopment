// MAIN ARRAY METHODS
const tmnt = ["Michalengelo", "Leonardo", "Donatello", "Raphael"]
// const tmnt = [
//   "Michaelangelo",
//   "Leonardo",
//   "Donatello",
//   "Raphael"
// ];
console.log(tmnt);

// PUSH (Adds an item to the end of an array)
tmnt.push("Master Splinter");
console.log(tmnt);

// POP (Returns the value of the item at the end of an array. Also, Pop removes the item at the end of an array)
const splinter = tmnt.pop();
console.log(tmnt);
console.log(splinter);

// SHIFT (Returns and removes the value of the item at the start of an array (AKA Item at index of Zero). Also, Shift moves all leftover items in the array on space to the left).
const mikey = tmnt.shift();
console.log(tmnt);
console.log(mikey);

// UNSHIFT (Adds a new item to the start of an array (AKA at the index of Zero.) Also, Unshift shifts all items in the array to the right.)
tmnt.unshift("Shredder")
console.log(tmnt);

// Const CAN be used when updating an array via array methods, but you cannot create a brand new array value for array with const variable
// tmnt = ["Casey Jones"] <--This will not work
