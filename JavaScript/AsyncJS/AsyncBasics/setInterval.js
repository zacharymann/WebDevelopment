// SET INTERVAL METHOD
// setInterval call/executes a function after a set number of milliseconds (1000 milliseconds equals 1 second). Also, setInterval will continue calling/executing the function at the specified interval (AKA Number of milliseconds).

/*
Syntax Example

setInterval(function, milliseconds);
*/

// Example 1
// Function runs continuously every 4 seconds after the webpage loads
// setInterval(() => {
//   console.log(`Every four seconds`);
// }, 4000);

// Example 2
// Function runs continuously every 2 seconds after the webpage loads
// setInterval(() => {
//   console.log(`Every two seconds`);
// }, 2000);

// Example 3
// The setInterval method will continue calling the function until a clearInterval is called on that setInterval (NOTE: setInterval methods must be set to a variable to use the clearInterval method on them)
// const full = setInterval(() => {
//   console.log(`Every full second`);
// }, 1000);

// const half = setInterval(() => {
//   console.log(`Every half second`);
// }, 500);

const stop = document.querySelector(`button`);
// Stops the "half" and "full" setInterval methods in this file when the "STOP" button is clicked
stop.addEventListener(`click`, () => {
  clearInterval(full);
  clearInterval(half);
});

// Example 4
// Using setInterval to create a stopwatch that count up from 1
// let time = 1;
// setInterval(() => {
//   console.log(time);
//   time++;
// }, 1000);

// Example 5
// Using a setInterval with a stopping point (NOTE: Without using a separate button)
let i = 5;
const countdown = setInterval(() => {
  if (i > 0) {
    console.log(i);
  } else {
    clearInterval(countdown);
  }
  i--;
}, 1000);