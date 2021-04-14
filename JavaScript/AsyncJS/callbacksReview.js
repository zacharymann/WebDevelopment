// CALLBACKS REVIEW
// A callback function is a function passed into another function as an argument. A callback function can run after another function has finished.

// Example 1
let year1 = 1985;

function displayYear1(){
  console.log(`Example 1`);
  console.log(year1);
}

// Without Callback
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

// With Callback
function backInTime1(pastYear, callback){
  setTimeout(() => {
    year1 = pastYear;
    callback();
  }, 1000);
}
// Displays 1955 as the year because the callback function (AKA The "displayYear1" function) is executed/called AFTER the value of the "year1" variable is updated
backInTime1(1955, displayYear1);

// Example 2
let year2 = 1985;

function displayYear2(){
  console.log(`Example 2`);
  console.log(year2);
}

// Without Callback
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

// With Callbacks
function backInTime2(pY, callback){
  setTimeout(() => {
    // Updating the value of the "year2" variable
    year2 = pY;
    callback(pY);
  }, 2000);
}

function toTheFuture(updatedTime, callback){
  setTimeout(() => {
    // Updating the value of the "year2" variable a second time
    year2 = updatedTime + 60;
    callback();
  }, 1000);
}

// Displays 1955 and then 2015 for the year because of the callback functions. First, is the anonymous callback function passed into the "backInTime2" function. Second, is the "displayYear2" function passed into the "toTheFuture" function.
backInTime2(1955, y => {
  console.log(`Example 2: 1st year displayed`);
  // Displays the updated value of 1955 for "year2"
  console.log(year2);
  // Value for "y" here is "1955" because that is the argument value passed into the callback function in the setTimeout in the "backInTime2" function
  toTheFuture(y, displayYear2);
  // Can also use the current value of the "year2" variable because it will have the value of 1955 at this point.
  // toTheFuture(year2, displayYear2);
});