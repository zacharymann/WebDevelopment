// WHILE LOOPS
/*
Syntax Example

while (condition){
    CODE TO BE RUN GOES HERE;
}
*/
// A While loop continues as long as the condition remains true

// Example 1 (Counts from 1 to 3)
let number = 1;
while (number <= 3){
    console.log(number);
    number++;
}

// Example 2 (Waits for user to enter the number set for the favNum variable (AKA 14))
const favNum = 14;
let userInput;
// let userInput = prompt(`Enter the number ${favNum}`);
while (userInput != favNum){
  userInput = prompt(`Enter the number ${favNum}`);
}
alert(`You entered ${favNum}`);

// Break Statement In Loops
// The break statement breaks/stops the loops and moves on
const strongestAvenger = `Hulk`;
let userInput1;
// let userInput1 = prompt(`Who is the Strongest Avenger?`);
while (true) {
  if (userInput1 === strongestAvenger){
    break;
  } else {
    userInput1 = prompt(`Who is the Strongest Avenger?`);
  }
}
alert(`Correct. HULK SMASH!!!`);