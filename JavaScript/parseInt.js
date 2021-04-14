// PARSE INT
// pareseInt tries to convert a value into a number value. If the conversion is not possible it will return NaN as the value/result. (NOTE: NaN has a default boolean value of false)

// Example 1
const parse1 = parseInt("1"); // parseInt converts the string value of "1" to the number value of 1.
console.log(parse1); // Displays the number 1
console.log("1"); // Display the string "1"

// Example 2
const parse2 = parseInt("One"); // parseInt cannot convert a string of letters into a number value. Therefore the value of NaN is returned.
// const parse2 = parseInt("Chicken");
console.log(parse2); // Displays NaN (Not A Number)

// NaN has a default boolean value of false
if (NaN) {
  console.log("This will NOT run");
}