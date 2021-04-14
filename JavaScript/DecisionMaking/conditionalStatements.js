// Conditional Statements

// IF
// Code inside brackets will run if the value is true
// NOTE: Remember to use parentheses () around boolean (True or false) value
if (true) { // Value is true so code runs
    console.log("Yay it was true!");
}

if (false) { // Value is false, to code does not run
    console.log("This will not run");
}

if (2 > 0) { //true
    console.log("Yes is greater than 0");
}

// IF else
// Code in else brackets runs if previous value(s) were NOT true
let num = 4;
if (num < 5) {
    console.log("Number is less than five");
} else {
    console.log("Number is greater than or equal to 5");
}

//  IF, ELSE IF, and ELSE
if (false) {
    console.log("The first one was true");
} else if (true){
    console.log("The first was false and second was true");
} else {
    console.log("The first and second were false");
}

// NESTING
if (true) {
    console.log("Hello");
    if (true) [
        console.log("Sup?")
    ]
} else [
    console.log("Bye")
]