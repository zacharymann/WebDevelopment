// PROMISES
// A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value

// Example 1
let year1 = 1985;

function displayYear1() {
  console.log(`Example 1`);
  console.log(year1);
}

// Without A Promise
/*
function backInTime1(pastYear){
  setTimeout(() => {
    year1 = pastYear;
  }, 1000);
}
*/

// Displays 1985 as the year because the value of the "year1" variable is NOT updated before the console log in the "displayYear1" function runs again
// displayYear1();
// backInTime1(1955);
// displayYear1();

// With A Promise
function backInTime1(pastYear) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      year1 = pastYear;
      resolve();
    }, 1000);
  });
}
// Displays 1955 as the year because the resolve/callback function in the ".then" is executed/called AFTER the value for the "year1" variable is updated
// backInTime1(1955)
//   .then(displayYear1);

// Example 2
let year2 = 1985;

function displayYear2() {
  console.log(`Example 2`);
  console.log(year2);
}

// Without Promises
/*
function backInTime2(pY){
  setTimeout(() => {
    year2 = pY;
  }, 2000);
}

function toTheFuture(updatedTime){
  setTimeout(() => {
    year2 = updatedTime + 60;
  }, 1000);
}
*/

// Displays 1985 as the year because the value of the "year2" variable is NOT updated before the console log in the "displayYear2" function runs again
// displayYear2();
// backInTime2(1955);
// toTheFuture(year2);
// displayYear2();

// With Promises
function backInTime2(pY) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Updating the value of the "year2" variable
      year2 = pY;
      resolve(pY);
    }, 2000);
  });
}

function toTheFuture(updatedTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Updating value of the "year2" variable again
      year2 = updatedTime + 60;
      resolve();
    }, 1000);
  });
}

// Displays 1955 and then 2015 for the year because of the resolve/callback function in the two ".then". First, is the anonymous callback function in the first ".then". Second, is the "displayYear2" function passed into the second ".then".
backInTime2(1955)
  .then(y => {
    console.log(`Example 2: 1st year displayed`);
    // Displays the updated value of 1955 for "year2"
    console.log(year2);
    // Value for "y" here is 1955 because that is the argument value passed into the "resolve" callback function in the setTimeout in the backInTime2 function.
    return toTheFuture(y);
    // Can also use the current value of the "year2" variable because it will have the value of 1955 at this point.
    // return toTheFuture(year2);
  })
  .then(displayYear2);